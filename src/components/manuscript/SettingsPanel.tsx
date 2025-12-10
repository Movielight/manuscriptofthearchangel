import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Type, 
  Palette, 
  RotateCcw, 
  Info, 
  ChevronRight,
  AlertTriangle
} from 'lucide-react';
import { ManuscriptProgress } from '@/hooks/useManuscriptProgress';

interface SettingsPanelProps {
  progress: ManuscriptProgress;
  onSetFontSize: (size: ManuscriptProgress['fontSize']) => void;
  onSetTheme: (theme: ManuscriptProgress['theme']) => void;
  onResetProgress: () => void;
}

export const SettingsPanel = ({ 
  progress, 
  onSetFontSize, 
  onSetTheme, 
  onResetProgress 
}: SettingsPanelProps) => {
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const fontSizes: { value: ManuscriptProgress['fontSize']; label: string }[] = [
    { value: 'small', label: 'Small' },
    { value: 'medium', label: 'Medium' },
    { value: 'large', label: 'Large' },
  ];

  const themes: { value: ManuscriptProgress['theme']; label: string; colors: string }[] = [
    { value: 'default', label: 'Sacred Night', colors: 'from-manuscript-dark to-manuscript-purple/20' },
    { value: 'sepia', label: 'Ancient Parchment', colors: 'from-amber-900/30 to-amber-800/20' },
    { value: 'dark', label: 'Deep Void', colors: 'from-gray-950 to-gray-900' },
  ];

  const handleReset = () => {
    onResetProgress();
    setShowResetConfirm(false);
  };

  return (
    <div className="min-h-screen pb-24 px-4 pt-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h1 className="font-heading text-3xl text-manuscript-gold mb-2">
          Settings
        </h1>
        <p className="text-manuscript-light/70 font-body text-sm">
          Customize your experience
        </p>
      </motion.div>

      {/* Font Size */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <div className="flex items-center gap-2 mb-4">
          <Type className="w-4 h-4 text-manuscript-gold" />
          <h2 className="text-manuscript-light font-heading">Text Size</h2>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {fontSizes.map(({ value, label }) => (
            <button
              key={value}
              onClick={() => onSetFontSize(value)}
              className={`py-3 rounded-xl border transition-all ${
                progress.fontSize === value
                  ? 'border-manuscript-gold bg-manuscript-gold/10 text-manuscript-gold'
                  : 'border-manuscript-gold/10 bg-manuscript-dark/50 text-manuscript-light/60'
              }`}
            >
              <span className={`font-body ${value === 'small' ? 'text-sm' : value === 'large' ? 'text-lg' : 'text-base'}`}>
                {label}
              </span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Theme */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-6"
      >
        <div className="flex items-center gap-2 mb-4">
          <Palette className="w-4 h-4 text-manuscript-gold" />
          <h2 className="text-manuscript-light font-heading">Theme</h2>
        </div>
        <div className="space-y-3">
          {themes.map(({ value, label, colors }) => (
            <button
              key={value}
              onClick={() => onSetTheme(value)}
              className={`w-full p-4 rounded-xl border transition-all flex items-center gap-4 ${
                progress.theme === value
                  ? 'border-manuscript-gold'
                  : 'border-manuscript-gold/10'
              }`}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${colors}`} />
              <span className="text-manuscript-light font-body">{label}</span>
              {progress.theme === value && (
                <ChevronRight className="w-4 h-4 text-manuscript-gold ml-auto" />
              )}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-6"
      >
        <div className="flex items-center gap-2 mb-4">
          <Info className="w-4 h-4 text-manuscript-gold" />
          <h2 className="text-manuscript-light font-heading">Your Journey</h2>
        </div>
        <div className="bg-manuscript-dark/50 rounded-xl p-4 border border-manuscript-gold/10 space-y-3">
          <div className="flex justify-between">
            <span className="text-manuscript-light/60 font-body text-sm">Started</span>
            <span className="text-manuscript-light font-body text-sm">
              {new Date(progress.firstVisit).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-manuscript-light/60 font-body text-sm">Sections Completed</span>
            <span className="text-manuscript-gold font-body text-sm">{progress.completedSections.length}/6</span>
          </div>
          <div className="flex justify-between">
            <span className="text-manuscript-light/60 font-body text-sm">Days Completed</span>
            <span className="text-manuscript-purple font-body text-sm">{progress.completedDays.length}/7</span>
          </div>
          <div className="flex justify-between">
            <span className="text-manuscript-light/60 font-body text-sm">Journal Entries</span>
            <span className="text-sacred-teal font-body text-sm">{progress.journalEntries.length}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-manuscript-light/60 font-body text-sm">Badges Earned</span>
            <span className="text-manuscript-gold font-body text-sm">{progress.badges.length}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-manuscript-light/60 font-body text-sm">Best Streak</span>
            <span className="text-manuscript-gold font-body text-sm">{progress.longestStreak} days</span>
          </div>
        </div>
      </motion.div>

      {/* Reset Progress */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        {!showResetConfirm ? (
          <button
            onClick={() => setShowResetConfirm(true)}
            className="w-full py-4 rounded-xl border border-rose-500/30 text-rose-400 font-body flex items-center justify-center gap-2 hover:bg-rose-500/10 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            Reset All Progress
          </button>
        ) : (
          <div className="bg-rose-500/10 border border-rose-500/30 rounded-xl p-4">
            <div className="flex items-start gap-3 mb-4">
              <AlertTriangle className="w-5 h-5 text-rose-400 flex-shrink-0" />
              <div>
                <p className="text-rose-400 font-heading">Are you sure?</p>
                <p className="text-manuscript-light/60 text-sm mt-1">
                  This will delete all your progress, journal entries, and badges. This cannot be undone.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowResetConfirm(false)}
                className="flex-1 py-2 rounded-lg border border-manuscript-gold/30 text-manuscript-light font-body hover:bg-manuscript-gold/10 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleReset}
                className="flex-1 py-2 rounded-lg bg-rose-500 text-white font-body hover:bg-rose-600 transition-colors"
              >
                Reset Everything
              </button>
            </div>
          </div>
        )}
      </motion.div>

      {/* Version */}
      <p className="text-center text-manuscript-light/30 text-xs mt-8 font-body">
        Sacred Manuscript App v1.0
      </p>
    </div>
  );
};
