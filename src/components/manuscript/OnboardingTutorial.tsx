import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Sparkles, NotebookPen, ArrowRight, X } from 'lucide-react';
import { Language, getTranslation } from '@/data/translations';
import { ArchangelKeyLogo } from '@/components/brand/ArchangelKeyLogo';

interface OnboardingTutorialProps {
  onComplete: () => void;
  language: Language;
}

export const OnboardingTutorial = ({ onComplete, language }: OnboardingTutorialProps) => {
  const [currentStep, setCurrentStep] = useState(0);

  const t = getTranslation(language).onboarding;

  const steps = [
    {
      icon: null, // Will show logo instead
      title: t.welcomeTitle,
      description: t.welcomeDesc,
      highlight: t.welcomeHighlight,
      isLogoStep: true,
    },
    {
      icon: BookOpen,
      title: t.readingsTitle,
      description: t.readingsDesc,
      highlight: t.readingsHighlight,
      isLogoStep: false,
    },
    {
      icon: Sparkles,
      title: t.pathTitle,
      description: t.pathDesc,
      highlight: t.pathHighlight,
      isLogoStep: false,
    },
    {
      icon: NotebookPen,
      title: t.journalTitle,
      description: t.journalDesc,
      highlight: t.journalHighlight,
      isLogoStep: false,
    },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete();
    }
  };

  const handleSkip = () => {
    onComplete();
  };

  const step = steps[currentStep];
  const Icon = step.icon;
  const isLastStep = currentStep === steps.length - 1;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-manuscript-dark"
    >
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-manuscript-gold/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-manuscript-purple/20 blur-3xl"
        />
      </div>

      {/* Skip button */}
      <button
        onClick={handleSkip}
        className="absolute top-6 right-6 p-2 text-manuscript-light/60 hover:text-manuscript-light transition-colors z-10"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Content */}
      <div className="relative z-10 px-6 max-w-md w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            {/* Icon or Logo */}
            {step.isLogoStep ? (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', damping: 12, delay: 0.1 }}
                className="mb-8"
              >
                <ArchangelKeyLogo size="xl" showText animate />
              </motion.div>
            ) : (
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', damping: 12, delay: 0.1 }}
                className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-manuscript-gold/30 to-manuscript-gold/10 border border-manuscript-gold/40 mb-8 shadow-lg"
              >
                {Icon && <Icon className="w-12 h-12 text-manuscript-gold" />}
              </motion.div>
            )}

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-heading text-3xl text-manuscript-gold mb-4"
            >
              {step.title}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-body text-manuscript-light text-lg leading-relaxed mb-4"
            >
              {step.description}
            </motion.p>

            {/* Highlight */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-heading text-manuscript-gold/80 text-lg italic"
            >
              {step.highlight}
            </motion.p>
          </motion.div>
        </AnimatePresence>

        {/* Progress dots */}
        <div className="flex justify-center gap-3 mt-12 mb-8">
          {steps.map((_, index) => (
            <motion.div
              key={index}
              initial={false}
              animate={{
                scale: index === currentStep ? 1.2 : 1,
                backgroundColor: index === currentStep 
                  ? 'hsl(43, 74%, 49%)' 
                  : index < currentStep 
                    ? 'hsl(43, 74%, 49%)' 
                    : 'rgba(212, 175, 55, 0.3)',
              }}
              className="w-2.5 h-2.5 rounded-full cursor-pointer"
              onClick={() => setCurrentStep(index)}
            />
          ))}
        </div>

        {/* Action button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleNext}
          className="w-full py-4 px-6 bg-gradient-to-r from-manuscript-gold to-manuscript-gold/80 text-manuscript-dark font-heading text-lg rounded-2xl flex items-center justify-center gap-3 shadow-lg shadow-manuscript-gold/20"
        >
          {isLastStep ? t.beginJourney : t.continue}
          <ArrowRight className="w-5 h-5" />
        </motion.button>

        {/* Skip text */}
        {!isLastStep && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            onClick={handleSkip}
            className="w-full mt-4 text-manuscript-light/60 font-body hover:text-manuscript-light transition-colors"
          >
            {t.skipTutorial}
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};
