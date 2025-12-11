import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Sparkles, Wind, CheckCircle2, Circle, Flame, Trophy } from 'lucide-react';
import { ManuscriptProgress } from '@/hooks/useManuscriptProgress';
import { MeditationTimer } from './MeditationTimer';

import { Language } from '@/data/translations';

interface PracticeViewProps {
  progress: ManuscriptProgress;
  onCompleteDay: (day: number) => void;
  language: Language;
}

const dayContent = [
  { day: 1, focus: "Foundation", task: "Read the full manuscript. Memorize the prayer. Perform the ritual for the first time." },
  { day: 2, focus: "Deepening", task: "Recite the prayer 7 times. Practice the breathing sequence 3 times. Journal about your intentions." },
  { day: 3, focus: "Activation", task: "Perform the full ritual at 7:11 AM or PM. Meditate on the sacred code for 11 minutes." },
  { day: 4, focus: "Awareness", task: "Pay attention to signs throughout the day. Record every synchronicity. Express gratitude for 9 blessings." },
  { day: 5, focus: "Strengthening", task: "Fast from negative thoughts. Speak only kind words. Recite the prayer before every meal." },
  { day: 6, focus: "Integration", task: "Share a blessing with someone. Perform an act of kindness. Meditate on divine protection." },
  { day: 7, focus: "Completion", task: "Perform the full ritual with complete devotion. Write a letter of gratitude to the Archangel. Seal your commitment." },
];

export const PracticeView = ({ progress, onCompleteDay, language }: PracticeViewProps) => {
  const [showTimer, setShowTimer] = useState(false);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  if (showTimer) {
    return <MeditationTimer language={language} onClose={() => setShowTimer(false)} />;
  }

  return (
    <div className="min-h-screen pb-24 px-4 pt-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-manuscript-purple/20 border border-manuscript-purple/40 rounded-full mb-4">
          <Sparkles className="w-4 h-4 text-manuscript-purple" />
          <span className="text-manuscript-purple text-sm font-body">Daily Practice</span>
        </div>
        <h1 className="font-heading text-4xl text-manuscript-gold mb-3">
          7-Day Path
        </h1>
        <p className="text-manuscript-light font-body">
          Your transformation journey
        </p>
      </motion.div>

      {/* Streak Display */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex items-center justify-center gap-8 mb-8 bg-gradient-to-r from-manuscript-gold/10 via-transparent to-manuscript-purple/10 rounded-2xl p-5 border border-manuscript-gold/20"
      >
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-manuscript-gold mb-1">
            <Flame className="w-6 h-6" />
            <span className="font-heading text-3xl">{progress.currentStreak}</span>
          </div>
          <p className="text-manuscript-light font-body text-sm">Current Streak</p>
        </div>
        <div className="w-px h-12 bg-gradient-to-b from-transparent via-manuscript-gold/30 to-transparent" />
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-manuscript-purple mb-1">
            <Trophy className="w-6 h-6" />
            <span className="font-heading text-3xl">{progress.longestStreak}</span>
          </div>
          <p className="text-manuscript-light font-body text-sm">Best Streak</p>
        </div>
      </motion.div>

      {/* Breathing Exercise Quick Access */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        onClick={() => setShowTimer(true)}
        className="w-full bg-gradient-to-r from-manuscript-purple/20 via-manuscript-purple/10 to-manuscript-gold/20 rounded-2xl p-5 mb-8 border border-manuscript-purple/40 flex items-center gap-4 hover:border-manuscript-purple/60 hover:shadow-lg transition-all duration-300 group"
      >
        <div className="bg-manuscript-purple/30 p-4 rounded-xl group-hover:scale-105 transition-transform">
          <Wind className="w-7 h-7 text-manuscript-purple" />
        </div>
        <div className="text-left flex-1">
          <p className="text-manuscript-light font-heading text-lg">Breathing Exercise</p>
          <p className="text-manuscript-light/80 font-body">7-11-9 Sacred Breathing Sequence</p>
        </div>
        <Sparkles className="w-6 h-6 text-manuscript-gold" />
      </motion.button>

      {/* 7-Day Path */}
      <div className="flex items-center gap-3 mb-5">
        <div className="bg-manuscript-gold/20 p-2 rounded-lg">
          <Calendar className="w-5 h-5 text-manuscript-gold" />
        </div>
        <h2 className="text-manuscript-light font-heading text-xl">Transformation Path</h2>
      </div>

      <div className="space-y-4">
        {dayContent.map(({ day, focus, task }) => {
          const isCompleted = progress.completedDays.includes(day);
          const isSelected = selectedDay === day;
          const previousCompleted = day === 1 || progress.completedDays.includes(day - 1);
          const isUnlocked = previousCompleted;

          return (
            <motion.div
              key={day}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: day * 0.05 }}
            >
              <button
                onClick={() => setSelectedDay(isSelected ? null : day)}
                disabled={!isUnlocked}
                className={`w-full text-left rounded-2xl border transition-all duration-300 ${
                  isCompleted
                    ? 'bg-gradient-to-r from-manuscript-gold/15 to-manuscript-gold/5 border-manuscript-gold/40 shadow-md'
                    : isUnlocked
                    ? 'bg-gradient-to-r from-manuscript-dark/60 to-transparent border-manuscript-gold/20 hover:border-manuscript-gold/40 hover:shadow-sm'
                    : 'bg-manuscript-dark/30 border-manuscript-dark/40 opacity-50 cursor-not-allowed'
                }`}
              >
                <div className="p-5 flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    isCompleted ? 'bg-manuscript-gold/30' : 'bg-manuscript-dark/80'
                  }`}>
                    {isCompleted ? (
                      <CheckCircle2 className="w-6 h-6 text-manuscript-gold" />
                    ) : (
                      <Circle className="w-6 h-6 text-manuscript-light/50" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`font-heading text-lg ${isCompleted ? 'text-manuscript-gold' : 'text-manuscript-light'}`}>
                      Day {day}: {focus}
                    </p>
                    {!isSelected && (
                      <p className="text-manuscript-light/70 font-body truncate">{task}</p>
                    )}
                  </div>
                </div>

                {isSelected && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-5 pb-5"
                  >
                    <p className="text-manuscript-light font-body mb-4">{task}</p>
                    {!isCompleted && isUnlocked && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onCompleteDay(day);
                        }}
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-manuscript-gold to-manuscript-gold/90 text-manuscript-dark font-body font-medium hover:shadow-lg transition-all duration-200"
                      >
                        Mark as Complete
                      </button>
                    )}
                  </motion.div>
                )}
              </button>
            </motion.div>
          );
        })}
      </div>

      {/* Completion Message */}
      {progress.completedDays.length === 7 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-8 bg-gradient-to-r from-manuscript-gold/20 via-manuscript-gold/10 to-manuscript-purple/20 rounded-2xl p-6 border border-manuscript-gold/40 text-center shadow-lg"
        >
          <div className="bg-manuscript-gold/25 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Trophy className="w-10 h-10 text-manuscript-gold" />
          </div>
          <h3 className="text-manuscript-gold font-heading text-2xl mb-2">Path Complete!</h3>
          <p className="text-manuscript-light font-body">
            You have completed the 7-Day Transformation Path. The power of the manuscript is now fully activated in your life.
          </p>
        </motion.div>
      )}
    </div>
  );
};
