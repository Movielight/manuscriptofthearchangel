import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Sparkles, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Language } from '@/data/translations';
import { supabase } from '@/integrations/supabase/client';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface AIAssistantProps {
  context?: string;
  language: Language;
}

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/manuscript-ai-chat`;

export const AIAssistant = ({ context, language }: AIAssistantProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const t = language === 'pt-BR' ? {
    title: 'Assistente do Manuscrito',
    placeholder: 'Faça sua pergunta sobre o manuscrito...',
    welcome: 'Olá! Sou seu assistente do Manuscrito Sagrado. Como posso ajudá-lo hoje?',
    error: 'Desculpe, ocorreu um erro. Tente novamente.',
    askQuestion: 'Tirar Dúvidas',
  } : {
    title: 'Manuscript Assistant',
    placeholder: 'Ask a question about the manuscript...',
    welcome: 'Hello! I am your Sacred Manuscript assistant. How can I help you today?',
    error: 'Sorry, an error occurred. Please try again.',
    askQuestion: 'Ask Questions',
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const streamChat = async (userMessage: string) => {
    const allMessages = [...messages, { role: 'user' as const, content: userMessage }];
    
    try {
      // Get the user's auth token
      const { data: { session } } = await supabase.auth.getSession();
      if (!session?.access_token) {
        throw new Error('Not authenticated');
      }

      const resp = await fetch(CHAT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session.access_token}`,
        },
        body: JSON.stringify({ 
          messages: allMessages,
          context 
        }),
      });

      if (!resp.ok || !resp.body) {
        throw new Error('Failed to start stream');
      }

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let textBuffer = '';
      let assistantContent = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        
        textBuffer += decoder.decode(value, { stream: true });

        let newlineIndex: number;
        while ((newlineIndex = textBuffer.indexOf('\n')) !== -1) {
          let line = textBuffer.slice(0, newlineIndex);
          textBuffer = textBuffer.slice(newlineIndex + 1);

          if (line.endsWith('\r')) line = line.slice(0, -1);
          if (line.startsWith(':') || line.trim() === '') continue;
          if (!line.startsWith('data: ')) continue;

          const jsonStr = line.slice(6).trim();
          if (jsonStr === '[DONE]') break;

          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (content) {
              assistantContent += content;
              setMessages(prev => {
                const last = prev[prev.length - 1];
                if (last?.role === 'assistant') {
                  return prev.map((m, i) => 
                    i === prev.length - 1 ? { ...m, content: assistantContent } : m
                  );
                }
                return [...prev, { role: 'assistant', content: assistantContent }];
              });
            }
          } catch {
            textBuffer = line + '\n' + textBuffer;
            break;
          }
        }
      }
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { role: 'assistant', content: t.error }]);
    }
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    await streamChat(userMessage);
    setIsLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Minimalist Floating Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-28 right-4 z-40 w-11 h-11 bg-white/80 backdrop-blur-sm border border-manuscript-gold/30 text-manuscript-gold rounded-full shadow-md hover:shadow-lg hover:bg-manuscript-gold hover:text-white transition-all flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        title={t.askQuestion}
      >
        <MessageCircle className="w-5 h-5" />
      </motion.button>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={(e) => e.target === e.currentTarget && setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-md bg-white border border-primary/20 rounded-2xl shadow-2xl flex flex-col max-h-[85vh] sm:max-h-[80vh]"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-primary/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-manuscript-gold/20 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-manuscript-gold" />
                  </div>
                  <div>
                    <h3 className="font-heading text-foreground">{t.title}</h3>
                    {context && (
                      <p className="text-xs text-muted-foreground">{context}</p>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
                >
                  <X className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[300px]">
                {messages.length === 0 && (
                  <div className="text-center py-8">
                    <Sparkles className="w-12 h-12 text-manuscript-gold/30 mx-auto mb-4" />
                    <p className="text-muted-foreground text-sm">{t.welcome}</p>
                  </div>
                )}
                
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] px-4 py-3 rounded-2xl ${
                        msg.role === 'user'
                          ? 'bg-manuscript-gold text-white'
                          : 'bg-muted border border-primary/10 text-foreground'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                    </div>
                  </div>
                ))}
                
                {isLoading && messages[messages.length - 1]?.role === 'user' && (
                  <div className="flex justify-start">
                    <div className="bg-muted border border-primary/10 px-4 py-3 rounded-2xl">
                      <Loader2 className="w-5 h-5 text-manuscript-gold animate-spin" />
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 border-t border-primary/10">
                <div className="flex gap-2">
                  <Textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={t.placeholder}
                    className="flex-1 min-h-[44px] max-h-[120px] resize-none bg-muted border-primary/20 text-foreground placeholder:text-muted-foreground focus:border-manuscript-gold/40"
                    rows={1}
                  />
                  <Button
                    onClick={handleSend}
                    disabled={!input.trim() || isLoading}
                    className="bg-manuscript-gold hover:bg-manuscript-gold/90 text-white px-4"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};