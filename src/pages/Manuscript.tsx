import { motion } from "framer-motion";
import { Book, Star, Shield, Heart, Sparkles, Download, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Manuscript = () => {
  const chapters = [
    {
      title: "A Oração do Escudo Divino",
      description: "Palavras sagradas de proteção reveladas pelo Arcanjo para blindar sua vida contra energias negativas.",
      icon: Shield,
    },
    {
      title: "Os 7 Códigos de Cura Celestial",
      description: "Sequências numéricas sagradas que ativam o poder de cura do universo em sua vida.",
      icon: Heart,
    },
    {
      title: "Rituais de Restauração Espiritual",
      description: "Práticas diárias para reconectar sua alma com a fonte divina e restaurar sua energia vital.",
      icon: Sparkles,
    },
    {
      title: "Mensagens Canalizadas do Arcanjo",
      description: "Revelações exclusivas recebidas em momentos de profunda conexão espiritual.",
      icon: Star,
    },
    {
      title: "O Mapa da Prosperidade Divina",
      description: "Instruções sagradas para desbloquear a abundância que o universo reservou para você.",
      icon: Book,
    },
  ];

  return (
    <div className="min-h-screen bg-sacred-cream">
      {/* Hero Section */}
      <header className="relative py-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-sacred opacity-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sacred-gold/20 rounded-full blur-3xl" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-sacred-gold mb-6">
            <Book className="w-10 h-10 text-sacred-cream" />
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-sacred-brown mb-4">
            Manuscrito Sagrado do Arcanjo
          </h1>
          
          <p className="font-body text-lg md:text-xl text-sacred-brown/70 max-w-2xl mx-auto">
            Você agora tem acesso às revelações divinas que transformarão sua jornada espiritual para sempre.
          </p>
        </motion.div>
      </header>

      {/* Welcome Message */}
      <section className="py-12 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <div className="sacred-card p-8 md:p-12 text-center">
            <Sparkles className="w-12 h-12 text-sacred-gold mx-auto mb-6" />
            <h2 className="font-display text-2xl md:text-3xl text-sacred-brown mb-4">
              Bem-vindo(a), Alma Abençoada
            </h2>
            <p className="font-body text-sacred-brown/80 leading-relaxed mb-6">
              O Arcanjo me pediu para te dizer: <em>"Você foi escolhido(a). Não por acaso você chegou até aqui. 
              As orações e códigos sagrados contidos neste manuscrito foram revelados especialmente para almas 
              que buscam a verdadeira transformação espiritual."</em>
            </p>
            <p className="font-body text-sacred-brown/80 leading-relaxed">
              Leia cada capítulo com o coração aberto. Pratique as orações com fé. 
              E observe os milagres se manifestarem em sua vida.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Chapters */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-display text-2xl md:text-3xl text-sacred-brown text-center mb-10"
          >
            Conteúdo do Manuscrito
          </motion.h2>
          
          <div className="space-y-4">
            {chapters.map((chapter, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="sacred-card p-6 flex items-start gap-4 hover:shadow-sacred-glow transition-shadow duration-300 cursor-pointer group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-sacred-gold/20 flex items-center justify-center group-hover:bg-sacred-gold/30 transition-colors">
                  <chapter.icon className="w-6 h-6 text-sacred-gold" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl text-sacred-brown mb-1 group-hover:text-sacred-gold transition-colors">
                    Capítulo {index + 1}: {chapter.title}
                  </h3>
                  <p className="font-body text-sacred-brown/70 text-sm">
                    {chapter.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="sacred-card p-8 md:p-12 bg-gradient-to-b from-sacred-cream to-sacred-gold/10">
            <Download className="w-16 h-16 text-sacred-gold mx-auto mb-6" />
            <h2 className="font-display text-2xl md:text-3xl text-sacred-brown mb-4">
              Baixe Seu Manuscrito Sagrado
            </h2>
            <p className="font-body text-sacred-brown/80 mb-8">
              Clique no botão abaixo para fazer o download do PDF completo com todas as orações, 
              códigos sagrados e instruções divinas.
            </p>
            <Button className="sacred-button text-lg px-8 py-6">
              <Download className="w-5 h-5 mr-2" />
              Baixar Manuscrito em PDF
            </Button>
            <p className="font-body text-xs text-sacred-brown/50 mt-4">
              Arquivo PDF • Acesso vitalício • Atualizações gratuitas
            </p>
          </div>
        </motion.div>
      </section>

      {/* Bonus Section */}
      <section className="py-12 px-4 mb-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="font-display text-2xl md:text-3xl text-sacred-brown text-center mb-8">
            Bônus Exclusivos Incluídos
          </h2>
          
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: "Áudio das Orações", desc: "Gravações meditativas para ouvir a qualquer momento" },
              { title: "Calendário Sagrado", desc: "Melhores dias para cada tipo de oração" },
              { title: "Grupo VIP", desc: "Acesso à comunidade de almas desperta" },
            ].map((bonus, index) => (
              <div key={index} className="sacred-card p-6 text-center">
                <Lock className="w-8 h-8 text-sacred-gold mx-auto mb-3" />
                <h3 className="font-display text-lg text-sacred-brown mb-2">{bonus.title}</h3>
                <p className="font-body text-sm text-sacred-brown/70">{bonus.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-sacred-gold/20">
        <p className="font-body text-center text-sm text-sacred-brown/50">
          © 2024 Manuscrito Sagrado do Arcanjo • Todos os direitos reservados
        </p>
      </footer>
    </div>
  );
};

export default Manuscript;
