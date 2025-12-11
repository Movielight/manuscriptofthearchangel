import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  Sparkles, 
  Eye, 
  Heart, 
  BookOpen, 
  Trash2, 
  X,
  Send
} from 'lucide-react';
import { ManuscriptProgress, JournalEntry } from '@/hooks/useManuscriptProgress';
import { Language, getTranslation } from '@/data/translations';

interface JournalViewProps {
  progress: ManuscriptProgress;
  onAddEntry: (type: JournalEntry['type'], content: string) => void;
  onDeleteEntry: (id: string) => void;
  language: Language;
}

export const JournalView = ({ progress, onAddEntry, onDeleteEntry, language }: JournalViewProps) => {
  const [isAdding, setIsAdding] = useState(false);
  const [selectedType, setSelectedType] = useState<JournalEntry['type']>('intention');
  const [content, setContent] = useState('');
  const [filter, setFilter] = useState<JournalEntry['type'] | 'all'>('all');

  const t = getTranslation(language).journal;

  const entryTypes: { type: JournalEntry['type']; label: string; icon: typeof Sparkles; color: string; bgColor: string; placeholder: string }[] = [
    { type: 'intention', label: t.intention, icon: Sparkles, color: 'text-manuscript-gold', bgColor: 'bg-manuscript-gold/20', placeholder: t.intentionPlaceholder },
    { type: 'sign', label: t.sign, icon: Eye, color: 'text-manuscript-purple', bgColor: 'bg-manuscript-purple/20', placeholder: t.signPlaceholder },
    { type: 'gratitude', label: t.gratitude, icon: Heart, color: 'text-rose-500', bgColor: 'bg-rose-500/20', placeholder: t.gratitudePlaceholder },
    { type: 'reflection', label: t.reflection, icon: BookOpen, color: 'text-sacred-teal', bgColor: 'bg-sacred-teal/20', placeholder: t.reflectionPlaceholder },
  ];

  const handleSubmit = () => {
    if (content.trim()) {
      onAddEntry(selectedType, content.trim());
      setContent('');
      setIsAdding(false);
    }
  };

  const filteredEntries = progress.journalEntries
    .filter(entry => filter === 'all' || entry.type === filter)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const getTypeConfig = (type: JournalEntry['type']) => 
    entryTypes.find(t => t.type === type) || entryTypes[0];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) return t.today;
    if (date.toDateString() === yesterday.toDateString()) return t.yesterday;
    return date.toLocaleDateString(language === 'pt-BR' ? 'pt-BR' : 'en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <div className="min-h-screen pb-24 px-4 pt-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-sacred-teal/20 border border-sacred-teal/40 rounded-full mb-4">
          <BookOpen className="w-4 h-4 text-sacred-teal" />
          <span className="text-sacred-teal text-sm font-body">{t.yourJourney}</span>
        </div>
        <h1 className="font-heading text-4xl text-manuscript-gold mb-3">
          {t.spiritualJournal}
        </h1>
        <p className="text-foreground font-body">
          {t.recordYourJourney}
        </p>
      </motion.div>

      {/* Add Entry Modal */}
      <AnimatePresence>
        {isAdding && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-white/98 backdrop-blur-sm px-4 pt-8 pb-24 overflow-auto"
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-heading text-2xl text-manuscript-gold">{t.newEntry}</h2>
              <button
                onClick={() => setIsAdding(false)}
                className="p-3 rounded-xl hover:bg-primary/10 transition-colors"
              >
                <X className="w-6 h-6 text-foreground" />
              </button>
            </div>

            {/* Type Selection */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {entryTypes.map(({ type, label, icon: Icon, color, bgColor }) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`p-5 rounded-2xl border-2 transition-all duration-200 text-left ${
                    selectedType === type
                      ? 'border-manuscript-gold bg-manuscript-gold/10 shadow-lg'
                      : 'border-primary/20 bg-white/60 hover:border-manuscript-gold/40'
                  }`}
                >
                  <div className={`${bgColor} w-10 h-10 rounded-xl flex items-center justify-center mb-3`}>
                    <Icon className={`w-5 h-5 ${color}`} />
                  </div>
                  <p className="text-foreground font-body font-medium">{label}</p>
                </button>
              ))}
            </div>

            {/* Content Input */}
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder={getTypeConfig(selectedType).placeholder}
              className="w-full h-48 bg-white/60 border-2 border-primary/20 rounded-2xl p-5 text-foreground font-body resize-none focus:outline-none focus:border-manuscript-gold/50 transition-colors placeholder:text-muted-foreground"
            />

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={!content.trim()}
              className="w-full mt-6 py-4 rounded-2xl bg-gradient-to-r from-manuscript-gold to-manuscript-gold/90 text-white font-body font-medium flex items-center justify-center gap-3 disabled:opacity-30 disabled:cursor-not-allowed hover:shadow-lg transition-all duration-200"
            >
              <Send className="w-5 h-5" />
              {t.saveEntry}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Add Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        onClick={() => setIsAdding(true)}
        className="w-full bg-gradient-to-r from-manuscript-gold/20 via-manuscript-gold/10 to-sacred-teal/20 rounded-2xl p-5 mb-6 border border-manuscript-gold/40 flex items-center gap-4 hover:border-manuscript-gold/60 hover:shadow-lg transition-all duration-300 group"
      >
        <div className="bg-manuscript-gold/30 p-4 rounded-xl group-hover:scale-105 transition-transform">
          <Plus className="w-6 h-6 text-manuscript-gold" />
        </div>
        <div className="text-left">
          <p className="text-foreground font-heading text-lg">{t.newJournalEntry}</p>
          <p className="text-muted-foreground font-body">{t.recordThoughts}</p>
        </div>
      </motion.button>

      {/* Filter Tabs */}
      <div className="flex gap-3 mb-6 overflow-x-auto pb-2 -mx-4 px-4">
        <button
          onClick={() => setFilter('all')}
          className={`px-5 py-2.5 rounded-full font-body whitespace-nowrap transition-all duration-200 ${
            filter === 'all'
              ? 'bg-manuscript-gold text-white font-medium shadow-md'
              : 'bg-white/60 text-muted-foreground border border-primary/20'
          }`}
        >
          {t.all} ({progress.journalEntries.length})
        </button>
        {entryTypes.map(({ type, label }) => {
          const count = progress.journalEntries.filter(e => e.type === type).length;
          return (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-5 py-2.5 rounded-full font-body whitespace-nowrap transition-all duration-200 ${
                filter === type
                  ? 'bg-manuscript-gold text-white font-medium shadow-md'
                  : 'bg-white/60 text-muted-foreground border border-primary/20'
              }`}
            >
              {label} ({count})
            </button>
          );
        })}
      </div>

      {/* Entries List */}
      {filteredEntries.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <div className="bg-manuscript-gold/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <BookOpen className="w-10 h-10 text-manuscript-gold/50" />
          </div>
          <p className="text-foreground font-body text-lg">{t.noEntriesYet}</p>
          <p className="text-muted-foreground mt-2">{t.startRecording}</p>
        </motion.div>
      ) : (
        <div className="space-y-4">
          {filteredEntries.map((entry, index) => {
            const config = getTypeConfig(entry.type);
            const Icon = config.icon;
            
            return (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-gradient-to-r from-white/80 to-white/60 rounded-2xl p-5 border border-primary/15 shadow-sm"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`${config.bgColor} p-2 rounded-lg`}>
                      <Icon className={`w-4 h-4 ${config.color}`} />
                    </div>
                    <span className="text-muted-foreground font-body text-sm">{config.label}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-muted-foreground text-sm">{formatDate(entry.date)}</span>
                    <button
                      onClick={() => onDeleteEntry(entry.id)}
                      className="p-2 rounded-lg hover:bg-rose-500/15 transition-colors"
                    >
                      <Trash2 className="w-4 h-4 text-rose-400 hover:text-rose-500" />
                    </button>
                  </div>
                </div>
                <p className="text-foreground font-body leading-relaxed">
                  {entry.content}
                </p>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
};