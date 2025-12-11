import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Pause, RotateCcw, CheckCircle2 } from 'lucide-react';
import { Language, getTranslation } from '@/data/translations';

interface MeditationTimerProps {
  duration?: number; // duration in minutes
  title?: string;
  language: Language;
  onComplete?: () => void;
  onCancel?: () => void;
  onClose?: () => void;
}

type Phase = 'ready' | 'meditation' | 'complete';

export const MeditationTimer = ({ 
  duration = 10, 
  title = "Meditation",
  language,
  onComplete,
  onCancel,
  onClose 
}: MeditationTimerProps) => {
  const [phase, setPhase] = useState<Phase>('ready');
  const [seconds, setSeconds] = useState(duration * 60);
  const [isRunning, setIsRunning] = useState(false);
  const totalSeconds = duration * 60;

  const t = getTranslation(language).meditation;

  useEffect(() => {
    if (!isRunning || phase !== 'meditation') return;

    const timer = setInterval(() => {
      setSeconds(prev => {
        if (prev <= 1) {
          setPhase('complete');
          setIsRunning(false);
          onComplete?.();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, phase, onComplete]);

  const handleStart = () => {
    setPhase('meditation');
    setSeconds(duration * 60);
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setPhase('ready');
    setSeconds(duration * 60);
    setIsRunning(false);
  };

  const handleClose = () => {
    onCancel?.();
    onClose?.();
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${mins}:${remainingSecs.toString().padStart(2, '0')}`;
  };

  const progress = phase === 'meditation' 
    ? ((totalSeconds - seconds) / totalSeconds) * 100 
    : phase === 'complete' ? 100 : 0;

  return (
    <div className="min-h-screen pb-24 px-4 pt-6 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-heading text-2xl text-manuscript-gold">{title}</h1>
        <button
          onClick={handleClose}
          className="p-2 rounded-full hover:bg-manuscript-gold/10 transition-colors"
        >
          <X className="w-5 h-5 text-manuscript-light/60" />
        </button>
      </div>

      {/* Duration Info */}
      <div className="text-center mb-8">
        <p className="text-manuscript-light/60 text-sm font-body">
          {t.duration}: {duration} {t.minutes}
        </p>
      </div>

      {/* Main Timer Circle */}
      <div className="flex-1 flex items-center justify-center">
        <div className="relative">
          {/* Background Circle */}
          <svg className="w-64 h-64 transform -rotate-90">
            <circle
              cx="128"
              cy="128"
              r="120"
              fill="none"
              stroke="hsl(var(--manuscript-dark))"
              strokeWidth="8"
            />
            <motion.circle
              cx="128"
              cy="128"
              r="120"
              fill="none"
              stroke="hsl(var(--manuscript-gold))"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={2 * Math.PI * 120}
              strokeDashoffset={2 * Math.PI * 120 * (1 - progress / 100)}
              transition={{ duration: 0.5 }}
            />
          </svg>

          {/* Center Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <AnimatePresence mode="wait">
              {phase === 'ready' && (
                <motion.div
                  key="ready"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="text-center"
                >
                  <p className="text-manuscript-light/60 font-body mb-2">{t.readyToStart}</p>
                  <p className="text-manuscript-gold font-heading text-lg">{duration} {t.min}</p>
                </motion.div>
              )}
              
              {phase === 'complete' && (
                <motion.div
                  key="complete"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="text-center"
                >
                  <CheckCircle2 className="w-12 h-12 text-manuscript-gold mx-auto mb-2" />
                  <p className="text-manuscript-gold font-heading text-xl">{t.completed}</p>
                  <p className="text-manuscript-light/60 text-sm mt-1">{t.practiceFinished}</p>
                </motion.div>
              )}
              
              {phase === 'meditation' && (
                <motion.div
                  key="meditation"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="text-center"
                >
                  <p className="text-manuscript-gold font-heading text-lg mb-2">
                    {isRunning ? t.breathe : t.paused}
                  </p>
                  <p className="text-manuscript-light font-body text-5xl">
                    {formatTime(seconds)}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="bg-manuscript-dark/50 rounded-xl p-4 mb-6 border border-manuscript-gold/10">
        <p className="text-manuscript-light/70 text-sm font-body text-center">
          {t.instruction}
        </p>
      </div>

      {/* Controls */}
      <div className="flex gap-4">
        {phase === 'ready' ? (
          <button
            onClick={handleStart}
            className="flex-1 py-4 rounded-xl bg-manuscript-gold text-manuscript-dark font-body flex items-center justify-center gap-2 hover:bg-manuscript-gold/90 transition-colors"
          >
            <Play className="w-5 h-5" />
            {t.startMeditation}
          </button>
        ) : phase === 'complete' ? (
          <button
            onClick={handleClose}
            className="flex-1 py-4 rounded-xl bg-manuscript-gold text-manuscript-dark font-body flex items-center justify-center gap-2 hover:bg-manuscript-gold/90 transition-colors"
          >
            <CheckCircle2 className="w-5 h-5" />
            {t.finish}
          </button>
        ) : (
          <>
            <button
              onClick={handlePause}
              className="flex-1 py-4 rounded-xl border border-manuscript-gold/30 text-manuscript-gold font-body flex items-center justify-center gap-2 hover:bg-manuscript-gold/10 transition-colors"
            >
              {isRunning ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              {isRunning ? t.pause : t.continue}
            </button>
            <button
              onClick={handleReset}
              className="py-4 px-6 rounded-xl border border-manuscript-light/20 text-manuscript-light/60 font-body flex items-center justify-center hover:bg-manuscript-light/5 transition-colors"
            >
              <RotateCcw className="w-5 h-5" />
            </button>
          </>
        )}
      </div>
    </div>
  );
};
