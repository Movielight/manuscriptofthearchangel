import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-b from-background via-background to-primary/5"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="max-w-lg w-full text-center"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
            <BookOpen className="w-10 h-10 text-primary" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="bg-card/60 backdrop-blur-sm rounded-2xl p-8 border border-primary/20 shadow-lg"
        >
          <p className="text-xl md:text-2xl font-serif text-foreground leading-relaxed italic mb-6">
            "{verse.verse}"
          </p>
          <p className="text-primary font-semibold text-lg">
            — {verse.reference}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-8"
        >
          <Button
            onClick={onContinue}
            size="lg"
            className="px-8 py-6 text-lg font-semibold"
          >
            Continue Your Journey
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
