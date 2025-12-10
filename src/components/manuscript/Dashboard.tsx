import { motion } from 'framer-motion';
import { BookOpen, Sparkles, NotebookPen, Flame, Award, Calendar, Star } from 'lucide-react';
import { ManuscriptProgress } from '@/hooks/useManuscriptProgress';
import { AppView } from './BottomNavigation';

interface DashboardProps {
  progress: ManuscriptProgress;
  onNavigate: (view: AppView) => void;
}

const dailyQuotes = [
  "The light within you is stronger than any darkness around you.",
  "Every breath is a prayer, every moment a blessing.",
  "Trust in the divine timing of your life.",
  "You are protected, guided, and deeply loved.",
  "Your faith has the power to move mountains.",
  "Angels walk beside you, even when you cannot see them.",
  "Today, choose peace over worry, love over fear.",
];

export const Dashboard = ({ progress, onNavigate }: DashboardProps) => {
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000);
  const dailyQuote = dailyQuotes[dayOfYear % dailyQuotes.length];
  
  const completionPercentage = Math.round((progress.completedSections.length / 6) * 100);
  const pathPercentage = Math.round((progress.completedDays.length / 7) * 100);

  return (
    <div className="min-h-screen pb-24 px-4 pt-6">
      {/* Welcome Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h1 className="font-heading text-3xl text-manuscript-gold mb-2">
          Sacred Manuscript
        </h1>
        <p className="text-manuscript-light/70 font-body text-sm">
          Your spiritual companion awaits
        </p>
      </motion.div>

      {/* Streak Card */}
      {progress.currentStreak > 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-r from-manuscript-gold/20 to-manuscript-purple/20 rounded-2xl p-4 mb-6 border border-manuscript-gold/30"
        >
          <div className="flex items-center gap-3">
            <div className="bg-manuscript-gold/20 p-3 rounded-full">
              <Flame className="w-6 h-6 text-manuscript-gold" />
            </div>
            <div>
              <p className="text-manuscript-gold font-heading text-xl">{progress.currentStreak} Day Streak!</p>
              <p className="text-manuscript-light/60 text-sm">Keep going, you're doing great</p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Daily Quote */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-manuscript-dark/50 rounded-2xl p-5 mb-6 border border-manuscript-gold/10"
      >
        <div className="flex items-start gap-3">
          <Star className="w-5 h-5 text-manuscript-gold flex-shrink-0 mt-1" />
          <div>
            <p className="text-manuscript-light/90 font-body italic leading-relaxed">"{dailyQuote}"</p>
            <p className="text-manuscript-gold/60 text-xs mt-2">Daily Inspiration</p>
          </div>
        </div>
      </motion.div>

      {/* Progress Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-2 gap-4 mb-6"
      >
        <div className="bg-manuscript-dark/50 rounded-xl p-4 border border-manuscript-gold/10">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="w-4 h-4 text-manuscript-gold" />
            <span className="text-manuscript-light/70 text-sm">Reading</span>
          </div>
          <div className="relative h-2 bg-manuscript-dark rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${completionPercentage}%` }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute h-full bg-manuscript-gold rounded-full"
            />
          </div>
          <p className="text-manuscript-gold text-lg font-heading mt-2">{completionPercentage}%</p>
        </div>

        <div className="bg-manuscript-dark/50 rounded-xl p-4 border border-manuscript-gold/10">
          <div className="flex items-center gap-2 mb-3">
            <Calendar className="w-4 h-4 text-manuscript-purple" />
            <span className="text-manuscript-light/70 text-sm">7-Day Path</span>
          </div>
          <div className="relative h-2 bg-manuscript-dark rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${pathPercentage}%` }}
              transition={{ duration: 1, delay: 0.6 }}
              className="absolute h-full bg-manuscript-purple rounded-full"
            />
          </div>
          <p className="text-manuscript-purple text-lg font-heading mt-2">{progress.completedDays.length}/7</p>
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="space-y-3"
      >
        <h2 className="text-manuscript-light font-heading text-lg mb-4">Quick Actions</h2>
        
        <button
          onClick={() => onNavigate('read')}
          className="w-full bg-gradient-to-r from-manuscript-gold/10 to-transparent rounded-xl p-4 border border-manuscript-gold/20 flex items-center gap-4 hover:border-manuscript-gold/40 transition-colors text-left"
        >
          <div className="bg-manuscript-gold/20 p-3 rounded-full">
            <BookOpen className="w-5 h-5 text-manuscript-gold" />
          </div>
          <div>
            <p className="text-manuscript-light font-heading">Continue Reading</p>
            <p className="text-manuscript-light/50 text-sm">Pick up where you left off</p>
          </div>
        </button>

        <button
          onClick={() => onNavigate('practice')}
          className="w-full bg-gradient-to-r from-manuscript-purple/10 to-transparent rounded-xl p-4 border border-manuscript-purple/20 flex items-center gap-4 hover:border-manuscript-purple/40 transition-colors text-left"
        >
          <div className="bg-manuscript-purple/20 p-3 rounded-full">
            <Sparkles className="w-5 h-5 text-manuscript-purple" />
          </div>
          <div>
            <p className="text-manuscript-light font-heading">Daily Practice</p>
            <p className="text-manuscript-light/50 text-sm">Ritual, meditation & exercises</p>
          </div>
        </button>

        <button
          onClick={() => onNavigate('journal')}
          className="w-full bg-gradient-to-r from-sacred-teal/10 to-transparent rounded-xl p-4 border border-sacred-teal/20 flex items-center gap-4 hover:border-sacred-teal/40 transition-colors text-left"
        >
          <div className="bg-sacred-teal/20 p-3 rounded-full">
            <NotebookPen className="w-5 h-5 text-sacred-teal" />
          </div>
          <div>
            <p className="text-manuscript-light font-heading">Spiritual Journal</p>
            <p className="text-manuscript-light/50 text-sm">Record your journey</p>
          </div>
        </button>
      </motion.div>

      {/* Badges Preview */}
      {progress.badges.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <Award className="w-4 h-4 text-manuscript-gold" />
            <h2 className="text-manuscript-light font-heading text-lg">Your Badges</h2>
          </div>
          <div className="flex gap-2 flex-wrap">
            {progress.badges.map(badge => (
              <div
                key={badge}
                className="bg-manuscript-gold/20 px-3 py-1 rounded-full text-manuscript-gold text-sm font-body"
              >
                {badge.replace(/_/g, ' ')}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};
