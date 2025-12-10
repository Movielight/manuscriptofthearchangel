import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Pause, RotateCcw, CheckCircle2 } from 'lucide-react';

interface MeditationTimerProps {
  onClose: () => void;
}

type Phase = 'ready' | 'inhale' | 'hold' | 'exhale' | 'complete';

const phaseConfig = {
  inhale: { duration: 7, label: 'Inhale', color: 'text-manuscript-gold' },
  hold: { duration: 11, label: 'Hold', color: 'text-manuscript-purple' },
  exhale: { duration: 9, label: 'Exhale', color: 'text-sacred-teal' },
};

export const MeditationTimer = ({ onClose }: MeditationTimerProps) => {
  const [phase, setPhase] = useState<Phase>('ready');
  const [seconds, setSeconds] = useState(0);
  const [cycles, setCycles] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const targetCycles = 7;

  const getNextPhase = useCallback((current: Phase): Phase => {
    if (current === 'inhale') return 'hold';
    if (current === 'hold') return 'exhale';
    return 'inhale';
  }, []);

  useEffect(() => {
    if (!isRunning || phase === 'ready' || phase === 'complete') return;

    const timer = setInterval(() => {
      setSeconds(prev => {
        const currentDuration = phaseConfig[phase as keyof typeof phaseConfig]?.duration || 0;
        
        if (prev >= currentDuration) {
          const nextPhase = getNextPhase(phase);
          
          if (phase === 'exhale') {
            const newCycles = cycles + 1;
            setCycles(newCycles);
            
            if (newCycles >= targetCycles) {
              setPhase('complete');
              setIsRunning(false);
              return 0;
            }
          }
          
          setPhase(nextPhase);
          return 1;
        }
        
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, phase, cycles, getNextPhase]);

  const handleStart = () => {
    setPhase('inhale');
    setSeconds(1);
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setPhase('ready');
    setSeconds(0);
    setCycles(0);
    setIsRunning(false);
  };

  const currentConfig = phase !== 'ready' && phase !== 'complete' 
    ? phaseConfig[phase as keyof typeof phaseConfig] 
    : null;

  const progress = currentConfig 
    ? (seconds / currentConfig.duration) * 100 
    : 0;

  return (
    <div className="min-h-screen pb-24 px-4 pt-6 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-heading text-2xl text-manuscript-gold">Breathing Exercise</h1>
        <button
          onClick={onClose}
          className="p-2 rounded-full hover:bg-manuscript-gold/10 transition-colors"
        >
          <X className="w-5 h-5 text-manuscript-light/60" />
        </button>
      </div>

      {/* Cycle Counter */}
      <div className="text-center mb-8">
        <p className="text-manuscript-light/60 text-sm font-body">
          Cycle {Math.min(cycles + 1, targetCycles)} of {targetCycles}
        </p>
        <div className="flex justify-center gap-1 mt-2">
          {Array.from({ length: targetCycles }).map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-colors ${
                i < cycles ? 'bg-manuscript-gold' : 'bg-manuscript-dark'
              }`}
            />
          ))}
        </div>
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
            {currentConfig && (
              <motion.circle
                cx="128"
                cy="128"
                r="120"
                fill="none"
                stroke={phase === 'inhale' ? 'hsl(var(--manuscript-gold))' : phase === 'hold' ? 'hsl(var(--manuscript-purple))' : 'hsl(var(--sacred-teal))'}
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={2 * Math.PI * 120}
                strokeDashoffset={2 * Math.PI * 120 * (1 - progress / 100)}
                transition={{ duration: 0.5 }}
              />
            )}
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
                  <p className="text-manuscript-light/60 font-body mb-2">Ready to begin</p>
                  <p className="text-manuscript-gold font-heading text-lg">7-11-9 Pattern</p>
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
                  <p className="text-manuscript-gold font-heading text-xl">Complete!</p>
                  <p className="text-manuscript-light/60 text-sm mt-1">7 cycles finished</p>
                </motion.div>
              )}
              
              {currentConfig && (
                <motion.div
                  key={phase}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="text-center"
                >
                  <motion.div
                    animate={{ scale: phase === 'inhale' ? [1, 1.1] : phase === 'exhale' ? [1.1, 1] : 1 }}
                    transition={{ duration: currentConfig.duration, ease: 'easeInOut' }}
                  >
                    <p className={`font-heading text-3xl ${currentConfig.color}`}>
                      {currentConfig.label}
                    </p>
                    <p className="text-manuscript-light/60 font-body text-5xl mt-2">
                      {currentConfig.duration - seconds + 1}
                    </p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Instructions */}
      <div className="bg-manuscript-dark/50 rounded-xl p-4 mb-6 border border-manuscript-gold/10">
        <p className="text-manuscript-light/70 text-sm font-body text-center">
          <span className="text-manuscript-gold">Inhale</span> for 7 seconds • 
          <span className="text-manuscript-purple"> Hold</span> for 11 seconds • 
          <span className="text-sacred-teal"> Exhale</span> for 9 seconds
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
            Start Exercise
          </button>
        ) : phase === 'complete' ? (
          <button
            onClick={handleReset}
            className="flex-1 py-4 rounded-xl bg-manuscript-gold text-manuscript-dark font-body flex items-center justify-center gap-2 hover:bg-manuscript-gold/90 transition-colors"
          >
            <RotateCcw className="w-5 h-5" />
            Start Again
          </button>
        ) : (
          <>
            <button
              onClick={handlePause}
              className="flex-1 py-4 rounded-xl border border-manuscript-gold/30 text-manuscript-gold font-body flex items-center justify-center gap-2 hover:bg-manuscript-gold/10 transition-colors"
            >
              {isRunning ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              {isRunning ? 'Pause' : 'Resume'}
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
