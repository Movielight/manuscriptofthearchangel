import { motion } from 'framer-motion';
import { BookOpen, Sparkles, NotebookPen, Flame, Award, Calendar, Star, ArrowRight } from 'lucide-react';
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
    <div className="min-h-screen pb-24 px-4 pt-8">
      {/* Welcome Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-manuscript-gold/10 border border-manuscript-gold/30 rounded-full mb-4">
          <Sparkles className="w-4 h-4 text-manuscript-gold" />
          <span className="text-manuscript-gold text-sm font-body">Sacred Journey</span>
        </div>
        <h1 className="font-heading text-4xl text-manuscript-gold mb-3 tracking-wide">
          Sacred Manuscript
        </h1>
        <p className="text-manuscript-light font-body">
          Your spiritual companion awaits
        </p>
      </motion.div>

      {/* Streak Card */}
      {progress.currentStreak > 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-r from-manuscript-gold/20 via-manuscript-gold/10 to-manuscript-purple/20 rounded-2xl p-5 mb-6 border border-manuscript-gold/40 shadow-lg"
        >
          <div className="flex items-center gap-4">
            <div className="bg-manuscript-gold/30 p-4 rounded-2xl">
              <Flame className="w-7 h-7 text-manuscript-gold" />
            </div>
            <div>
              <p className="text-manuscript-gold font-heading text-2xl">{progress.currentStreak} Day Streak!</p>
              <p className="text-manuscript-light font-body">Keep going, you're doing amazing</p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Daily Quote */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-gradient-to-br from-manuscript-purple/20 to-manuscript-dark/80 rounded-2xl p-6 mb-6 border border-manuscript-gold/20 shadow-lg"
      >
        <div className="flex items-start gap-4">
          <div className="bg-manuscript-gold/20 p-3 rounded-xl flex-shrink-0">
            <Star className="w-5 h-5 text-manuscript-gold" />
          </div>
          <div>
            <p className="text-manuscript-light font-heading text-lg italic leading-relaxed">"{dailyQuote}"</p>
            <p className="text-manuscript-gold font-body text-sm mt-3">Daily Inspiration</p>
          </div>
        </div>
      </motion.div>

      {/* Progress Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-2 gap-4 mb-8"
      >
        <div className="bg-gradient-to-br from-manuscript-gold/15 to-manuscript-dark/60 rounded-2xl p-5 border border-manuscript-gold/25 shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-manuscript-gold/20 p-2 rounded-lg">
              <BookOpen className="w-5 h-5 text-manuscript-gold" />
            </div>
            <span className="text-manuscript-light font-body font-medium">Reading</span>
          </div>
          <div className="relative h-3 bg-manuscript-dark/80 rounded-full overflow-hidden mb-3">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${completionPercentage}%` }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute h-full bg-gradient-to-r from-manuscript-gold to-manuscript-gold/80 rounded-full"
            />
          </div>
          <p className="text-manuscript-gold text-2xl font-heading">{completionPercentage}%</p>
        </div>

        <div className="bg-gradient-to-br from-manuscript-purple/15 to-manuscript-dark/60 rounded-2xl p-5 border border-manuscript-purple/25 shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-manuscript-purple/20 p-2 rounded-lg">
              <Calendar className="w-5 h-5 text-manuscript-purple" />
            </div>
            <span className="text-manuscript-light font-body font-medium">7-Day Path</span>
          </div>
          <div className="relative h-3 bg-manuscript-dark/80 rounded-full overflow-hidden mb-3">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${pathPercentage}%` }}
              transition={{ duration: 1, delay: 0.6 }}
              className="absolute h-full bg-gradient-to-r from-manuscript-purple to-manuscript-purple/80 rounded-full"
            />
          </div>
          <p className="text-manuscript-purple text-2xl font-heading">{progress.completedDays.length}/7</p>
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="space-y-4"
      >
        <h2 className="text-manuscript-light font-heading text-xl mb-4">Continue Your Journey</h2>
        
        <button
          onClick={() => onNavigate('read')}
          className="w-full bg-gradient-to-r from-manuscript-gold/15 to-manuscript-gold/5 rounded-2xl p-5 border border-manuscript-gold/30 flex items-center gap-5 hover:border-manuscript-gold/60 hover:bg-manuscript-gold/20 transition-all duration-300 text-left group"
        >
          <div className="bg-manuscript-gold/25 p-4 rounded-xl group-hover:scale-105 transition-transform">
            <BookOpen className="w-6 h-6 text-manuscript-gold" />
          </div>
          <div className="flex-1">
            <p className="text-manuscript-light font-heading text-lg">Continue Reading</p>
            <p className="text-manuscript-light/80 font-body">Pick up where you left off</p>
          </div>
          <ArrowRight className="w-5 h-5 text-manuscript-gold opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
        </button>

        <button
          onClick={() => onNavigate('practice')}
          className="w-full bg-gradient-to-r from-manuscript-purple/15 to-manuscript-purple/5 rounded-2xl p-5 border border-manuscript-purple/30 flex items-center gap-5 hover:border-manuscript-purple/60 hover:bg-manuscript-purple/20 transition-all duration-300 text-left group"
        >
          <div className="bg-manuscript-purple/25 p-4 rounded-xl group-hover:scale-105 transition-transform">
            <Sparkles className="w-6 h-6 text-manuscript-purple" />
          </div>
          <div className="flex-1">
            <p className="text-manuscript-light font-heading text-lg">Daily Practice</p>
            <p className="text-manuscript-light/80 font-body">Ritual, meditation & exercises</p>
          </div>
          <ArrowRight className="w-5 h-5 text-manuscript-purple opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
        </button>

        <button
          onClick={() => onNavigate('journal')}
          className="w-full bg-gradient-to-r from-sacred-teal/15 to-sacred-teal/5 rounded-2xl p-5 border border-sacred-teal/30 flex items-center gap-5 hover:border-sacred-teal/60 hover:bg-sacred-teal/20 transition-all duration-300 text-left group"
        >
          <div className="bg-sacred-teal/25 p-4 rounded-xl group-hover:scale-105 transition-transform">
            <NotebookPen className="w-6 h-6 text-sacred-teal" />
          </div>
          <div className="flex-1">
            <p className="text-manuscript-light font-heading text-lg">Spiritual Journal</p>
            <p className="text-manuscript-light/80 font-body">Record your journey</p>
          </div>
          <ArrowRight className="w-5 h-5 text-sacred-teal opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
        </button>
      </motion.div>

      {/* Badges Preview */}
      {progress.badges.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-manuscript-gold/20 p-2 rounded-lg">
              <Award className="w-5 h-5 text-manuscript-gold" />
            </div>
            <h2 className="text-manuscript-light font-heading text-xl">Your Badges</h2>
          </div>
          <div className="flex gap-3 flex-wrap">
            {progress.badges.map(badge => (
              <div
                key={badge}
                className="bg-gradient-to-r from-manuscript-gold/20 to-manuscript-gold/10 px-4 py-2 rounded-full text-manuscript-gold font-body border border-manuscript-gold/30"
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
