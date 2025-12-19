import { useEffect } from "react";
import { motion } from "framer-motion";
import { Gift } from "lucide-react";

const bibleVerses = [
  { reference: "Jeremiah 33:3", text: "Call to me and I will answer you..." },
  { reference: "Psalm 91:15", text: "He will call on me, and I will answer him..." },
  { reference: "John 15:7", text: "Ask whatever you wish, and it will be done." },
  { reference: "Jeremiah 29:12", text: "Then you will call on me... and I will listen." }
];

const Upsell2US = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://upsell.mundpay.com/script-v2.js";
    script.defer = true;
    script.async = true;
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[src="https://upsell.mundpay.com/script-v2.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

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
        <p className="text-amber-400 font-semibold text-sm mb-2">CONGRATULATIONS!</p>
        <h1 className="text-2xl font-serif font-bold mb-3">
          You've unlocked a special bonus
        </h1>
        <p className="text-white/70 text-base">
          Now you can <span className="text-amber-400">speak directly with God</span> through your phone.
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
        <div data-mndpay-render="019b3773-3b03-73c3-ac03-13b39b6509c2"></div>
      </motion.div>
    </div>
  );
};

export default Upsell2US;
