import { motion } from 'framer-motion';
import { Settings, Flame, BookOpen, Video, Sparkles, Award, ChevronRight } from 'lucide-react';
import { ManuscriptProgress } from '@/hooks/useManuscriptProgress';
import { AppView } from './BottomNavigation';
import { modules } from '@/data/manuscriptContent';
import { lessons } from '@/data/lessonsContent';
import { getTranslation } from '@/data/translations';
import { ArchangelKeyLogo } from '@/components/brand/ArchangelKeyLogo';
import { illustrations } from '@/data/illustrationAssets';

interface DashboardProps {
  progress: ManuscriptProgress;
  firstName?: string | null;
  onNavigate: (view: AppView) => void;
  onOpenSettings?: () => void;
}

export const Dashboard = ({ progress, firstName, onNavigate, onOpenSettings }: DashboardProps) => {
  const t = getTranslation(progress.language).dashboard;
  const completedModules = progress.completedSections.filter(s => s.startsWith('module-')).length;
  const completedLessons = progress.completedSections.filter(s => s.startsWith('lesson-')).length;
  const totalProgress = Math.round(
    ((completedModules + completedLessons) / (modules.length + lessons.length)) * 100
  );

  return (
    <div className="min-h-screen pb-24 px-4">
      {/* Header with Logo */}
      <div className="pt-8 pb-2 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <ArchangelKeyLogo size="sm" animate={false} />
          <h1 className="text-2xl font-heading text-foreground">Archangel Key</h1>
        </div>
        {onOpenSettings && (
          <button
            onClick={onOpenSettings}
            className="w-10 h-10 rounded-xl bg-white/60 backdrop-blur-sm border border-primary/20 flex items-center justify-center text-muted-foreground hover:text-manuscript-gold hover:border-manuscript-gold/40 transition-colors"
          >
            <Settings className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Personalized Greeting */}
      <div className="pb-4">
        <h2 className="text-xl font-heading text-manuscript-gold">
          {firstName ? `${firstName},` : progress.language === 'pt-BR' ? 'Bem-vindo,' : 'Welcome,'}
        </h2>
        <p className="text-muted-foreground text-sm">
          {progress.language === 'pt-BR' 
            ? 'sua jornada de autodescoberta começa aqui.'
            : 'your journey of self-discovery begins here.'}
        </p>
      </div>

      {/* Hero Illustration Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="relative h-32 mb-6 rounded-2xl overflow-hidden"
      >
        <img 
          src={illustrations.heroDashboard} 
          alt="Archangel Key" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
      </motion.div>

      {/* Progress Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-manuscript-gold/15 to-primary/10 rounded-2xl p-5 border border-manuscript-gold/30 mb-6 backdrop-blur-sm"
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-muted-foreground text-sm">{t.overallProgress}</p>
            <p className="text-3xl font-heading text-manuscript-gold">{totalProgress}%</p>
          </div>
          <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-xl px-3 py-2 border border-orange-200">
            <Flame className="w-5 h-5 text-orange-500" />
            <span className="text-foreground font-medium">{progress.currentStreak}</span>
            <span className="text-muted-foreground text-sm">{t.days}</span>
          </div>
        </div>
        <div className="h-2 bg-white/50 rounded-full overflow-hidden">
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
        <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-primary/20 p-4 text-center">
          <BookOpen className="w-5 h-5 text-manuscript-gold mx-auto mb-2" />
          <span className="text-xl font-heading text-foreground">{completedModules}</span>
          <p className="text-muted-foreground text-xs">{t.modules}</p>
        </div>
        <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-primary/20 p-4 text-center">
          <Video className="w-5 h-5 text-manuscript-gold mx-auto mb-2" />
          <span className="text-xl font-heading text-foreground">{completedLessons}</span>
          <p className="text-muted-foreground text-xs">{t.lessons}</p>
        </div>
        <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-primary/20 p-4 text-center">
          <Award className="w-5 h-5 text-manuscript-gold mx-auto mb-2" />
          <span className="text-xl font-heading text-foreground">{progress.badges.length}</span>
          <p className="text-muted-foreground text-xs">{t.achievements}</p>
        </div>
      </div>

      {/* Quick Actions */}
      <h2 className="text-lg font-heading text-foreground mb-4">{t.continueJourney}</h2>
      <div className="space-y-3">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          onClick={() => onNavigate('modules')}
          className="w-full bg-white/70 backdrop-blur-sm rounded-xl border border-primary/20 p-4 flex items-center gap-4 hover:border-manuscript-gold/40 hover:bg-white/90 transition-all group"
        >
          <div className="w-12 h-12 rounded-xl bg-manuscript-gold/20 flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-manuscript-gold" />
          </div>
          <div className="flex-1 text-left">
            <h3 className="font-heading text-foreground group-hover:text-manuscript-gold transition-colors">
              {t.manuscriptModules}
            </h3>
            <p className="text-muted-foreground text-sm">
              {completedModules}/{modules.length} {t.completed}
            </p>
          </div>
          <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-manuscript-gold transition-colors" />
        </motion.button>

        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          onClick={() => onNavigate('lessons')}
          className="w-full bg-white/70 backdrop-blur-sm rounded-xl border border-primary/20 p-4 flex items-center gap-4 hover:border-manuscript-gold/40 hover:bg-white/90 transition-all group"
        >
          <div className="w-12 h-12 rounded-xl bg-manuscript-purple/20 flex items-center justify-center">
            <Video className="w-6 h-6 text-manuscript-purple" />
          </div>
          <div className="flex-1 text-left">
            <h3 className="font-heading text-foreground group-hover:text-manuscript-gold transition-colors">
              {t.videoLessons}
            </h3>
            <p className="text-muted-foreground text-sm">
              {completedLessons}/{lessons.length} {t.completed}
            </p>
          </div>
          <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-manuscript-gold transition-colors" />
        </motion.button>

        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          onClick={() => onNavigate('practices')}
          className="w-full bg-white/70 backdrop-blur-sm rounded-xl border border-primary/20 p-4 flex items-center gap-4 hover:border-manuscript-gold/40 hover:bg-white/90 transition-all group"
        >
          <div className="w-12 h-12 rounded-xl bg-manuscript-gold/20 flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-manuscript-gold" />
          </div>
          <div className="flex-1 text-left">
            <h3 className="font-heading text-foreground group-hover:text-manuscript-gold transition-colors">
              {t.dailyPractices}
            </h3>
            <p className="text-muted-foreground text-sm">
              {t.meditationsAndExercises}
            </p>
          </div>
          <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-manuscript-gold transition-colors" />
        </motion.button>
      </div>

      {/* Daily Inspiration */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-6 bg-gradient-to-br from-white/80 to-primary/10 rounded-2xl p-5 border border-primary/20 backdrop-blur-sm"
      >
        <p className="text-muted-foreground text-xs uppercase tracking-wider mb-2">{t.dailyReflection}</p>
        <p className="text-foreground/80 font-heading text-lg italic leading-relaxed">
          {t.quote}
        </p>
        <p className="text-manuscript-gold/80 text-sm mt-3 text-right">{t.quoteAuthor}</p>
      </motion.div>
    </div>
  );
};
