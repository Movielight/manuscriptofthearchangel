import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BookOpen, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

const bibleVerses = [
  {
    verse: "For He will command His angels concerning you to guard you in all your ways.",
    reference: "Psalm 91:11",
  },
  {
    verse: "He heals the brokenhearted and binds up their wounds.",
    reference: "Psalm 147:3",
  },
  {
    verse: "I will restore to you the years that the swarming locust has eaten.",
    reference: "Joel 2:25",
  },
];

interface BibleVerseInterstitialProps {
  verseIndex: number;
  onContinue: () => void;
}

export const BibleVerseInterstitial = ({
  verseIndex,
  onContinue,
}: BibleVerseInterstitialProps) => {
  const verse = bibleVerses[verseIndex % bibleVerses.length];
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    setDisplayedText("");
    setIsTypingComplete(false);
    
    let currentIndex = 0;
    const text = verse.verse;
    
    const typeInterval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
        setIsTypingComplete(true);
      }
    }, 30);

    return () => clearInterval(typeInterval);
  }, [verse.verse]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radial gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
        
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}

        {/* Light rays */}
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/5 to-transparent blur-3xl" />
        </motion.div>
      </div>

      {/* Scroll/Parchment visual */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.2, type: "spring", damping: 20 }}
        className="relative w-full max-w-lg"
      >
        {/* Parchment background */}
        <div className="relative bg-gradient-to-b from-amber-50/90 via-orange-50/80 to-amber-50/90 dark:from-amber-900/20 dark:via-orange-900/15 dark:to-amber-900/20 rounded-2xl p-8 md:p-10 border border-amber-200/50 dark:border-amber-700/30 shadow-2xl">
          {/* Decorative corners */}
          <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-primary/40 rounded-tl-lg" />
          <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-primary/40 rounded-tr-lg" />
          <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-primary/40 rounded-bl-lg" />
          <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-primary/40 rounded-br-lg" />

          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="flex justify-center mb-6"
          >
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-500" />
              </motion.div>
            </div>
          </motion.div>

          {/* Verse text with typewriter effect */}
          <div className="text-center mb-6 min-h-[80px]">
            <p className="font-heading text-lg md:text-xl text-amber-900 dark:text-amber-100 italic leading-relaxed">
              "{displayedText}"
              {!isTypingComplete && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="inline-block w-0.5 h-5 bg-primary ml-1 align-middle"
                />
              )}
            </p>
          </div>

          {/* Reference */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isTypingComplete ? 1 : 0 }}
            className="text-center"
          >
            <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-1 rounded-full">
              — {verse.reference}
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* Continue button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isTypingComplete ? 1 : 0.5, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8"
      >
        <Button
          onClick={onContinue}
          disabled={!isTypingComplete}
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-xl shadow-lg shadow-primary/20 transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Continue Your Journey
        </Button>
      </motion.div>
    </motion.div>
  );
};
