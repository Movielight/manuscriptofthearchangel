import { motion } from "framer-motion";
import { Gift, MessageCircle, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const bibleVerses = [
  {
    reference: "Jeremias 33:3",
    text: "Clama a mim, e responder-te-ei, e anunciar-te-ei coisas grandes e ocultas que não sabes."
  },
  {
    reference: "Salmos 91:15",
    text: "Ele me invocará, e eu lhe responderei; na angústia estarei com ele; livrá-lo-ei e o glorificarei."
  },
  {
    reference: "João 15:7",
    text: "Se vós estiverdes em mim, e as minhas palavras estiverem em vós, pedireis o que quiserdes, e vos será feito."
  },
  {
    reference: "Jeremias 29:12",
    text: "Então me invocareis, passareis a orar a mim, e eu vos ouvirei."
  }
];

const Upsell2US = () => {
  const [currentVerseIndex, setCurrentVerseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVerseIndex((prev) => (prev + 1) % bibleVerses.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleAccept = () => {
    console.log("User accepted bonus");
  };

  const handleDecline = () => {
    console.log("User declined bonus");
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Celestial Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Stars */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Golden Light Rays */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] opacity-30">
          <div className="absolute inset-0 bg-gradient-radial from-amber-500/40 via-amber-600/20 to-transparent blur-3xl" />
        </div>

        {/* Floating Golden Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, rgba(251, 191, 36, 0.8), rgba(217, 119, 6, 0.4))`,
              boxShadow: '0 0 10px rgba(251, 191, 36, 0.5)',
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8">
        {/* Bible Verse Carousel */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md mb-8"
        >
          <div className="bg-gradient-to-r from-amber-900/30 via-amber-800/40 to-amber-900/30 border border-amber-500/30 rounded-2xl p-6 backdrop-blur-sm">
            <motion.div
              key={currentVerseIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <p className="text-amber-400 font-semibold text-sm mb-2">
                {bibleVerses[currentVerseIndex].reference}
              </p>
              <p className="text-white/90 italic text-lg leading-relaxed">
                "{bibleVerses[currentVerseIndex].text}"
              </p>
            </motion.div>

            {/* Verse Indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {bibleVerses.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentVerseIndex ? 'bg-amber-400' : 'bg-amber-400/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Congratulations Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center max-w-md"
        >
          {/* Gift Icon */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="mb-6"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full shadow-lg shadow-amber-500/50">
              <Gift className="w-10 h-10 text-black" />
            </div>
          </motion.div>

          {/* Congratulations Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-4"
          >
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-amber-600/20 border border-amber-500/50 rounded-full px-6 py-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-amber-400 font-semibold">PARABÉNS!</span>
              <Sparkles className="w-4 h-4 text-amber-400" />
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-3xl md:text-4xl font-serif font-bold mb-4 bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent"
          >
            Você Acabou de Ganhar um Bônus Especial!
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-xl text-white/80 mb-8 leading-relaxed"
          >
            Agora você pode{" "}
            <span className="text-amber-400 font-semibold">conversar com Deus</span>{" "}
            através do seu celular a qualquer momento.
          </motion.p>

          {/* Feature Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-br from-amber-900/40 to-black border border-amber-500/30 rounded-2xl p-6 mb-8"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <MessageCircle className="w-8 h-8 text-amber-400" />
              <h2 className="text-xl font-bold text-white">Assistente de Oração IA</h2>
            </div>
            <p className="text-white/70 text-sm mb-4">
              Converse, ore e receba orientação espiritual baseada nas Escrituras Sagradas, 
              24 horas por dia, 7 dias por semana.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <span className="bg-amber-500/20 text-amber-400 text-xs px-3 py-1 rounded-full">
                Respostas Bíblicas
              </span>
              <span className="bg-amber-500/20 text-amber-400 text-xs px-3 py-1 rounded-full">
                Disponível 24/7
              </span>
              <span className="bg-amber-500/20 text-amber-400 text-xs px-3 py-1 rounded-full">
                Orientação Espiritual
              </span>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <Button
              onClick={handleAccept}
              size="lg"
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold py-6 text-lg rounded-xl shadow-lg shadow-amber-500/30 mb-4"
            >
              Ativar Meu Bônus
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            <button
              onClick={handleDecline}
              className="text-white/40 hover:text-white/60 text-sm transition-colors"
            >
              Não, obrigado
            </button>
          </motion.div>
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-4 text-center text-white/30 text-xs px-4 max-w-md"
        >
          Esta ferramenta de IA é apenas para reflexão baseada na fé. 
          Não substitui a oração, orientação pastoral ou aconselhamento profissional.
        </motion.p>
      </div>
    </div>
  );
};

export default Upsell2US;
