import { motion } from 'framer-motion';
import { Settings, Flame, BookOpen, Video, Sparkles, Award, ChevronRight } from 'lucide-react';
import { ManuscriptProgress } from '@/hooks/useManuscriptProgress';
import { AppView } from './BottomNavigation';
import { modules } from '@/data/manuscriptContent';
import { lessons } from '@/data/lessonsContent';
import { getTranslation } from '@/data/translations';

interface DashboardProps {
  progress: ManuscriptProgress;
  onNavigate: (view: AppView) => void;
  onOpenSettings?: () => void;
}

export const Dashboard = ({ progress, onNavigate, onOpenSettings }: DashboardProps) => {
  const t = getTranslation(progress.language).dashboard;
  const completedModules = progress.completedSections.filter(s => s.startsWith('module-')).length;
  const completedLessons = progress.completedSections.filter(s => s.startsWith('lesson-')).length;
  const totalProgress = Math.round(
    ((completedModules + completedLessons) / (modules.length + lessons.length)) * 100
  );

  return (
    <div className="min-h-screen pb-24 px-4">
      {/* Header */}
      <div className="pt-8 pb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-heading text-manuscript-light">{t.title}</h1>
          <p className="text-manuscript-light/60 text-sm mt-1">{t.subtitle}</p>
        </div>
        {onOpenSettings && (
          <button
            onClick={onOpenSettings}
            className="w-10 h-10 rounded-xl bg-manuscript-dark/50 flex items-center justify-center text-manuscript-light/60 hover:text-manuscript-gold transition-colors"
          >
            <Settings className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Progress Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-manuscript-gold/20 to-manuscript-purple/20 rounded-2xl p-5 border border-manuscript-gold/20 mb-6"
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-manuscript-light/60 text-sm">{t.overallProgress}</p>
            <p className="text-3xl font-heading text-manuscript-gold">{totalProgress}%</p>
          </div>
          <div className="flex items-center gap-2 bg-manuscript-dark/30 rounded-xl px-3 py-2">
            <Flame className="w-5 h-5 text-orange-400" />
            <span className="text-manuscript-light font-medium">{progress.currentStreak}</span>
            <span className="text-manuscript-light/60 text-sm">{t.days}</span>
          </div>
        </div>
        <div className="h-2 bg-manuscript-dark/50 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${totalProgress}%` }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="h-full bg-gradient-to-r from-manuscript-gold to-manuscript-gold/70 rounded-full"
          />
        </div>
      </motion.div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="bg-manuscript-dark/30 rounded-xl border border-manuscript-gold/10 p-4 text-center">
          <BookOpen className="w-5 h-5 text-manuscript-gold mx-auto mb-2" />
          <span className="text-xl font-heading text-manuscript-light">{completedModules}</span>
          <p className="text-manuscript-light/40 text-xs">{t.modules}</p>
        </div>
        <div className="bg-manuscript-dark/30 rounded-xl border border-manuscript-gold/10 p-4 text-center">
          <Video className="w-5 h-5 text-manuscript-gold mx-auto mb-2" />
          <span className="text-xl font-heading text-manuscript-light">{completedLessons}</span>
          <p className="text-manuscript-light/40 text-xs">{t.lessons}</p>
        </div>
        <div className="bg-manuscript-dark/30 rounded-xl border border-manuscript-gold/10 p-4 text-center">
          <Award className="w-5 h-5 text-manuscript-gold mx-auto mb-2" />
          <span className="text-xl font-heading text-manuscript-light">{progress.badges.length}</span>
          <p className="text-manuscript-light/40 text-xs">{t.achievements}</p>
        </div>
      </div>

      {/* Quick Actions */}
      <h2 className="text-lg font-heading text-manuscript-light mb-4">{t.continueJourney}</h2>
      <div className="space-y-3">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          onClick={() => onNavigate('modules')}
          className="w-full bg-manuscript-dark/30 rounded-xl border border-manuscript-gold/10 p-4 flex items-center gap-4 hover:border-manuscript-gold/30 transition-all group"
        >
          <div className="w-12 h-12 rounded-xl bg-manuscript-gold/20 flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-manuscript-gold" />
          </div>
          <div className="flex-1 text-left">
            <h3 className="font-heading text-manuscript-light group-hover:text-manuscript-gold transition-colors">
              {t.manuscriptModules}
            </h3>
            <p className="text-manuscript-light/60 text-sm">
              {completedModules}/{modules.length} {t.completed}
            </p>
          </div>
          <ChevronRight className="w-5 h-5 text-manuscript-light/30 group-hover:text-manuscript-gold transition-colors" />
        </motion.button>

        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          onClick={() => onNavigate('lessons')}
          className="w-full bg-manuscript-dark/30 rounded-xl border border-manuscript-gold/10 p-4 flex items-center gap-4 hover:border-manuscript-gold/30 transition-all group"
        >
          <div className="w-12 h-12 rounded-xl bg-manuscript-purple/20 flex items-center justify-center">
            <Video className="w-6 h-6 text-manuscript-purple" />
          </div>
          <div className="flex-1 text-left">
            <h3 className="font-heading text-manuscript-light group-hover:text-manuscript-gold transition-colors">
              {t.videoLessons}
            </h3>
            <p className="text-manuscript-light/60 text-sm">
              {completedLessons}/{lessons.length} {t.completed}
            </p>
          </div>
          <ChevronRight className="w-5 h-5 text-manuscript-light/30 group-hover:text-manuscript-gold transition-colors" />
        </motion.button>

        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          onClick={() => onNavigate('practices')}
          className="w-full bg-manuscript-dark/30 rounded-xl border border-manuscript-gold/10 p-4 flex items-center gap-4 hover:border-manuscript-gold/30 transition-all group"
        >
          <div className="w-12 h-12 rounded-xl bg-manuscript-gold/20 flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-manuscript-gold" />
          </div>
          <div className="flex-1 text-left">
            <h3 className="font-heading text-manuscript-light group-hover:text-manuscript-gold transition-colors">
              {t.dailyPractices}
            </h3>
            <p className="text-manuscript-light/60 text-sm">
              {t.meditationsAndExercises}
            </p>
          </div>
          <ChevronRight className="w-5 h-5 text-manuscript-light/30 group-hover:text-manuscript-gold transition-colors" />
        </motion.button>
      </div>

      {/* Daily Inspiration */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-6 bg-gradient-to-br from-manuscript-dark/50 to-manuscript-purple/10 rounded-2xl p-5 border border-manuscript-gold/10"
      >
        <p className="text-manuscript-light/40 text-xs uppercase tracking-wider mb-2">{t.dailyReflection}</p>
        <p className="text-manuscript-light/80 font-heading text-lg italic leading-relaxed">
          {t.quote}
        </p>
        <p className="text-manuscript-gold/60 text-sm mt-3 text-right">{t.quoteAuthor}</p>
      </motion.div>
    </div>
  );
};
