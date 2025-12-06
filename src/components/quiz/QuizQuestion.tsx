import { motion, AnimatePresence } from "framer-motion";
import { QuizQuestion as QuizQuestionType } from "@/data/quizQuestions";

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

  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen mystical-bg flex flex-col items-center justify-center px-4 py-8"
    >
      {/* Decorative glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[80px] pointer-events-none" />

      <div className="w-full max-w-2xl relative z-10">
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
          className="sacred-card mb-8"
        >
          <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-3 leading-relaxed">
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
                className={`option-card w-full text-left ${
                  selectedOption === option.id ? "selected" : ""
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
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
                  </div>
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
          <button
            onClick={onNext}
            disabled={!selectedOption}
            className={`divine-button ${
              !selectedOption ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {currentIndex === totalQuestions - 1 ? "Reveal My Message" : "Continue"}
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};
