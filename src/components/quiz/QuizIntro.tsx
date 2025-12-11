import { motion } from "framer-motion";
import { ArchangelKeyLogo } from "@/components/brand/ArchangelKeyLogo";

interface QuizIntroProps {
  onStart: () => void;
}

export const QuizIntro = ({ onStart }: QuizIntroProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen mystical-bg flex flex-col items-center justify-center px-4 py-12"
    >
      {/* Decorative glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[100px] pulse-glow pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-center max-w-2xl relative z-10"
      >
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-8 flex justify-center"
        >
          <div className="floating">
            <ArchangelKeyLogo size="xl" showText animate />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-primary font-heading text-lg tracking-[0.3em] uppercase mb-4"
        >
          A Sacred Revelation Awaits
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="sacred-heading mb-6"
        >
          Discover Your Divine Message
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="sacred-subheading mb-8"
        >
          The Archangel has been waiting to speak to you
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="space-y-6 text-foreground/80 leading-relaxed mb-10"
        >
          <p>
            Beloved soul, you have been guided here by forces beyond the visible world.
            This sacred quiz will reveal the message the Archangel has specifically for you today.
          </p>
          <p>
            Answer each question from the depths of your heart.
            There are no right or wrong answers—only your truth.
          </p>
          <p className="text-primary font-medium">
            Are you ready to receive what the Divine has prepared for you?
          </p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={onStart}
          className="divine-button text-xl"
        >
          Begin My Sacred Journey
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7, duration: 0.6 }}
          className="mt-8 text-muted-foreground text-sm"
        >
          ✦ Takes only 3 minutes ✦ Deeply personal results ✦
        </motion.p>
      </motion.div>
    </motion.div>
  );
};
