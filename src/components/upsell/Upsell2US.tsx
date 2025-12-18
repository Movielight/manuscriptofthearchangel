import { motion } from "framer-motion";
import { Gift, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const bibleVerses = [
  { reference: "Jeremias 33:3", text: "Clama a mim, e responder-te-ei..." },
  { reference: "Salmos 91:15", text: "Ele me invocará, e eu lhe responderei..." },
  { reference: "João 15:7", text: "Pedireis o que quiserdes, e vos será feito." },
  { reference: "Jeremias 29:12", text: "Então me invocareis... e eu vos ouvirei." }
];

const Upsell2US = () => {
  const handleAccept = () => console.log("User accepted bonus");
  const handleDecline = () => console.log("User declined bonus");

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-12">
      {/* Gift Icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 0.6 }}
        className="mb-6"
      >
        <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center">
          <Gift className="w-8 h-8 text-black" />
        </div>
      </motion.div>

      {/* Congratulations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-center mb-8"
      >
        <p className="text-amber-400 font-semibold text-sm mb-2">PARABÉNS!</p>
        <h1 className="text-2xl font-serif font-bold mb-3">
          Você ganhou um bônus especial
        </h1>
        <p className="text-white/70 text-base">
          Agora você pode <span className="text-amber-400">falar diretamente com Deus</span> pelo seu celular.
        </p>
      </motion.div>

      {/* Bible Verses */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="w-full max-w-sm mb-8 space-y-2"
      >
        {bibleVerses.map((verse, i) => (
          <div key={i} className="text-center text-white/50 text-xs">
            <span className="text-amber-400/70">{verse.reference}</span> — {verse.text}
          </div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="w-full max-w-sm"
      >
        <Button
          onClick={handleAccept}
          className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-5 rounded-xl mb-3"
        >
          Ativar Bônus
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>

        <button
          onClick={handleDecline}
          className="w-full text-white/30 hover:text-white/50 text-sm transition-colors"
        >
          Não, obrigado
        </button>
      </motion.div>
    </div>
  );
};

export default Upsell2US;
