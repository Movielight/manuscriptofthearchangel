import { motion, AnimatePresence } from "framer-motion";
import { QuizQuestion as QuizQuestionType } from "@/data/quizQuestions";
import { Shield, Heart, Sparkles, Sun, Star, Compass, Eye, Flame, Clock } from "lucide-react";
import { useState, useEffect } from "react";

// Question icons based on theme
const questionIcons: Record<number, React.ReactNode> = {
  1: <Shield className="w-6 h-6" />,
  2: <Heart className="w-6 h-6" />,
  3: <Sparkles className="w-6 h-6" />,
  4: <Sun className="w-6 h-6" />,
  5: <Star className="w-6 h-6" />,
  6: <Compass className="w-6 h-6" />,
  7: <Eye className="w-6 h-6" />,
  8: <Flame className="w-6 h-6" />,
  9: <Sparkles className="w-6 h-6" />,
};

interface QuizQuestionProps {
  question: QuizQuestionType;
  currentIndex: number;
  totalQuestions: number;
  selectedOption: string | null;
  onSelect: (optionId: string) => void;
  onNext: () => void;
}

export const QuizQuestion = ({
  question,
  currentIndex,
  totalQuestions,
  selectedOption,
  onSelect,
  onNext,
}: QuizQuestionProps) => {
  const progress = ((currentIndex + 1) / totalQuestions) * 100;
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 59 });

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen mystical-bg flex flex-col items-center justify-center px-4 py-8 relative overflow-hidden"
    >
      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Decorative glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[80px] pointer-events-none" />

      <div className="w-full max-w-2xl relative z-10">
        {/* Urgency Banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 flex justify-center"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500/10 via-orange-500/10 to-red-500/10 border border-red-500/20 rounded-full px-4 py-2">
            <Clock className="w-4 h-4 text-red-500" />
            <span className="text-sm text-red-500 font-medium">
              Your sacred message expires in {timeLeft.minutes}:{timeLeft.seconds.toString().padStart(2, '0')}
            </span>
          </div>
        </motion.div>

        {/* Progress */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex justify-between items-center mb-3">
            <span className="text-muted-foreground text-sm font-heading tracking-wider">
              Question {currentIndex + 1} of {totalQuestions}
            </span>
            <span className="text-primary text-sm font-heading">
              {Math.round(progress)}% complete
            </span>
          </div>
          <div className="progress-bar">
            <motion.div
              className="progress-bar-fill"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
        </motion.div>

        {/* Question Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="sacred-card mb-8 relative"
        >
          {/* Question icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, type: "spring" }}
            className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary"
          >
            {questionIcons[currentIndex + 1] || <Sparkles className="w-6 h-6" />}
          </motion.div>

          <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-3 leading-relaxed pt-4">
            {question.question}
          </h2>
          {question.subtext && (
            <p className="text-muted-foreground font-heading italic">
              {question.subtext}
            </p>
          )}
        </motion.div>

        {/* Options */}
        <div className="space-y-4 mb-8">
          <AnimatePresence mode="wait">
            {question.options.map((option, index) => (
              <motion.button
                key={option.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                onClick={() => onSelect(option.id)}
                whileTap={{ scale: 0.98 }}
                className={`option-card w-full text-left transition-all duration-300 ${
                  selectedOption === option.id ? "selected ring-2 ring-primary" : ""
                }`}
              >
                <div className="flex items-center gap-4">
                  <motion.div
                    animate={selectedOption === option.id ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 0.3 }}
                    className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all duration-300 ${
                      selectedOption === option.id
                        ? "border-primary bg-primary"
                        : "border-muted-foreground/40"
                    }`}
                  >
                    {selectedOption === option.id && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="w-2 h-2 rounded-full bg-primary-foreground"
                      />
                    )}
                  </motion.div>
                  <span className="text-foreground/90 text-lg">{option.text}</span>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>

        {/* Next Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: selectedOption ? 1 : 0.5 }}
          className="flex justify-center"
        >
          <motion.button
            onClick={onNext}
            disabled={!selectedOption}
            whileHover={selectedOption ? { scale: 1.02 } : {}}
            whileTap={selectedOption ? { scale: 0.98 } : {}}
            className={`divine-button ${
              !selectedOption ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {currentIndex === totalQuestions - 1 ? "Reveal My Message" : "Continue"}
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};
