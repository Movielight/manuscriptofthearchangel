import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Sparkles, Wind, CheckCircle2, Circle, Flame, Trophy } from 'lucide-react';
import { ManuscriptProgress } from '@/hooks/useManuscriptProgress';
import { MeditationTimer } from './MeditationTimer';

interface PracticeViewProps {
  progress: ManuscriptProgress;
  onCompleteDay: (day: number) => void;
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

export const PracticeView = ({ progress, onCompleteDay }: PracticeViewProps) => {
  const [showTimer, setShowTimer] = useState(false);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  if (showTimer) {
    return <MeditationTimer onClose={() => setShowTimer(false)} />;
  }

  return (
    <div className="min-h-screen pb-24 px-4 pt-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h1 className="font-heading text-3xl text-manuscript-gold mb-2">
          Daily Practice
        </h1>
        <p className="text-manuscript-light/70 font-body text-sm">
          Your 7-Day Transformation Path
        </p>
      </motion.div>

      {/* Streak Display */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex items-center justify-center gap-6 mb-8"
      >
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-manuscript-gold">
            <Flame className="w-5 h-5" />
            <span className="font-heading text-2xl">{progress.currentStreak}</span>
          </div>
          <p className="text-manuscript-light/60 text-xs">Current Streak</p>
        </div>
        <div className="w-px h-10 bg-manuscript-gold/20" />
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 text-manuscript-purple">
            <Trophy className="w-5 h-5" />
            <span className="font-heading text-2xl">{progress.longestStreak}</span>
          </div>
          <p className="text-manuscript-light/60 text-xs">Best Streak</p>
        </div>
      </motion.div>

      {/* Breathing Exercise Quick Access */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        onClick={() => setShowTimer(true)}
        className="w-full bg-gradient-to-r from-manuscript-purple/20 to-manuscript-gold/20 rounded-2xl p-5 mb-8 border border-manuscript-purple/30 flex items-center gap-4 hover:border-manuscript-purple/50 transition-colors"
      >
        <div className="bg-manuscript-purple/20 p-3 rounded-full">
          <Wind className="w-6 h-6 text-manuscript-purple" />
        </div>
        <div className="text-left">
          <p className="text-manuscript-light font-heading">Breathing Exercise</p>
          <p className="text-manuscript-light/50 text-sm">7-11-9 Sacred Breathing Sequence</p>
        </div>
        <Sparkles className="w-5 h-5 text-manuscript-gold ml-auto" />
      </motion.button>

      {/* 7-Day Path */}
      <div className="flex items-center gap-2 mb-4">
        <Calendar className="w-4 h-4 text-manuscript-gold" />
        <h2 className="text-manuscript-light font-heading text-lg">7-Day Transformation Path</h2>
      </div>

      <div className="space-y-3">
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
                className={`w-full text-left rounded-xl border transition-all ${
                  isCompleted
                    ? 'bg-manuscript-gold/10 border-manuscript-gold/30'
                    : isUnlocked
                    ? 'bg-manuscript-dark/50 border-manuscript-gold/10 hover:border-manuscript-gold/30'
                    : 'bg-manuscript-dark/30 border-manuscript-dark/50 opacity-50 cursor-not-allowed'
                }`}
              >
                <div className="p-4 flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                    isCompleted ? 'bg-manuscript-gold/20' : 'bg-manuscript-dark'
                  }`}>
                    {isCompleted ? (
                      <CheckCircle2 className="w-5 h-5 text-manuscript-gold" />
                    ) : (
                      <Circle className="w-5 h-5 text-manuscript-light/40" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`font-heading ${isCompleted ? 'text-manuscript-gold' : 'text-manuscript-light'}`}>
                      Day {day}: {focus}
                    </p>
                    {!isSelected && (
                      <p className="text-manuscript-light/50 text-sm truncate">{task}</p>
                    )}
                  </div>
                </div>

                {isSelected && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-4 pb-4"
                  >
                    <p className="text-manuscript-light/80 text-sm mb-4">{task}</p>
                    {!isCompleted && isUnlocked && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onCompleteDay(day);
                        }}
                        className="w-full py-2 rounded-lg bg-manuscript-gold text-manuscript-dark font-body text-sm hover:bg-manuscript-gold/90 transition-colors"
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
          className="mt-8 bg-gradient-to-r from-manuscript-gold/20 to-manuscript-purple/20 rounded-2xl p-6 border border-manuscript-gold/30 text-center"
        >
          <Trophy className="w-12 h-12 text-manuscript-gold mx-auto mb-3" />
          <h3 className="text-manuscript-gold font-heading text-xl mb-2">Path Complete!</h3>
          <p className="text-manuscript-light/70 text-sm">
            You have completed the 7-Day Transformation Path. The power of the manuscript is now fully activated in your life.
          </p>
        </motion.div>
      )}
    </div>
  );
};
