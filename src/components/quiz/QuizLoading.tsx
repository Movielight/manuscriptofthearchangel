import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const loadingMessages = [
  "The Archangel is reviewing your answers...",
  "Consulting the sacred scrolls...",
  "Receiving your divine message...",
  "Preparing your personalized revelation...",
];

interface QuizLoadingProps {
  onComplete: () => void;
}

export const QuizLoading = ({ onComplete }: QuizLoadingProps) => {
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % loadingMessages.length);
    }, 1500);

    const completeTimeout = setTimeout(() => {
      onComplete();
    }, 5000);

    return () => {
      clearInterval(messageInterval);
      clearTimeout(completeTimeout);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen mystical-bg flex flex-col items-center justify-center px-4"
    >
      {/* Animated glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-[600px] h-[600px] rounded-full bg-primary/20 blur-[100px]"
        />
      </div>

      <div className="relative z-10 text-center">
        {/* Sacred circles animation */}
        <div className="relative w-40 h-40 mx-auto mb-10">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute inset-0 rounded-full border-2 border-primary/30"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.6, 0, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeOut",
              }}
            />
          ))}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-4 rounded-full border border-primary/50"
            style={{
              borderStyle: "dashed",
            }}
          />
          <div className="absolute inset-8 rounded-full bg-gradient-to-br from-primary to-gold-dark flex items-center justify-center">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-3xl"
            >
              ✦
            </motion.div>
          </div>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-heading text-3xl md:text-4xl text-foreground mb-6"
        >
          Receiving Your Message
        </motion.h2>

        <motion.div
          key={messageIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="h-8"
        >
          <p className="text-muted-foreground font-heading italic text-lg">
            {loadingMessages[messageIndex]}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex justify-center gap-2"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-primary"
              animate={{
                y: [0, -10, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};
