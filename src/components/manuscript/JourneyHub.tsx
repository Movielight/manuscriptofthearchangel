import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowLeft, Check, Flame, Trophy, Target } from 'lucide-react';
import { JournalView } from './JournalView';
import { reflections, reflectionsIntroduction } from '@/data/reflectionsContent';
import { practicePlans, practicePlansIntroduction } from '@/data/practicePlansContent';
import { ManuscriptProgress, JournalEntry } from '@/hooks/useManuscriptProgress';
import { Language, getTranslation } from '@/data/translations';
import { illustrations } from '@/data/illustrationAssets';

interface JourneyHubProps {
  progress: ManuscriptProgress;
  onAddEntry: (type: JournalEntry['type'], content: string) => void;
  onDeleteEntry: (id: string) => void;
  language: Language;
}

type View = 'hub' | 'journal' | 'reflections' | 'plans';

const planIllustrations: Record<string, string> = {
  'plan-7': illustrations.journey.plan7,
  'plan-14': illustrations.journey.plan14,
  'plan-21': illustrations.journey.plan21,
};

export const JourneyHub = ({ progress, onAddEntry, onDeleteEntry, language }: JourneyHubProps) => {
  const [currentView, setCurrentView] = useState<View>('hub');
  const [selectedReflection, setSelectedReflection] = useState<string | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const t = getTranslation(language).journey;
  const currentReflection = reflections.find(r => r.id === selectedReflection);
  const currentPlan = practicePlans.find(p => p.id === selectedPlan);

  // Journal View
  if (currentView === 'journal') {
    return (
      <div className="min-h-screen pb-24">
        <div className="px-4 pt-6 pb-4">
          <button
            onClick={() => setCurrentView('hub')}
            className="flex items-center gap-2 text-muted-foreground hover:text-manuscript-gold transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">{t.back}</span>
          </button>
        </div>
        <JournalView progress={progress} onAddEntry={onAddEntry} onDeleteEntry={onDeleteEntry} language={language} />
      </div>
    );
  }

  // Reflection Detail View
  if (currentReflection) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen pb-24 px-4"
      >
        <div className="pt-6 pb-4">
          <button
            onClick={() => setSelectedReflection(null)}
            className="flex items-center gap-2 text-muted-foreground hover:text-manuscript-gold transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">{t.backToReflections}</span>
          </button>
          
          {/* Premium Header */}
          <div className="flex items-start gap-4 mb-6">
            <div className="relative w-20 h-20 rounded-2xl overflow-hidden shadow-lg ring-2 ring-manuscript-gold/30 flex-shrink-0">
              <img 
                src={illustrations.journey.reflections} 
                alt="Reflection" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-manuscript-gold/20 to-transparent" />
            </div>
            <div className="flex-1">
              <span className="inline-block px-3 py-1 bg-manuscript-gold/20 text-manuscript-gold text-xs font-medium rounded-full mb-2">
                {currentReflection.theme}
              </span>
              <h1 className="text-2xl font-heading text-foreground">
                {currentReflection.title}
              </h1>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-white/80 to-manuscript-gold/5 backdrop-blur-sm rounded-2xl border-2 border-manuscript-gold/20 p-6 shadow-lg">
          <p className="text-muted-foreground leading-relaxed whitespace-pre-line font-body text-lg">
            {currentReflection.content}
          </p>
          <div className="mt-6 pt-4 border-t border-manuscript-gold/20">
            <p className="text-manuscript-gold/80 text-sm text-right italic">
              — {currentReflection.author}
            </p>
          </div>
        </div>
      </motion.div>
    );
  }

  // Reflections List View
  if (currentView === 'reflections') {
    return (
      <div className="min-h-screen pb-24 px-4">
        <div className="pt-6 pb-4">
          <button
            onClick={() => setCurrentView('hub')}
            className="flex items-center gap-2 text-muted-foreground hover:text-manuscript-gold transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">{t.back}</span>
          </button>
          
          {/* Premium Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="relative w-16 h-16 rounded-2xl overflow-hidden shadow-lg ring-2 ring-manuscript-gold/30">
              <img 
                src={illustrations.journey.reflections} 
                alt="Reflections" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-2xl font-heading text-foreground">{reflectionsIntroduction.title}</h1>
              <p className="text-muted-foreground text-sm mt-1">{reflectionsIntroduction.subtitle}</p>
            </div>
          </div>
        </div>

        <p className="text-muted-foreground text-sm mb-6 bg-white/50 p-4 rounded-xl border border-primary/10">
          {reflectionsIntroduction.description}
        </p>

        <div className="space-y-3">
          {reflections.map((reflection, index) => (
            <motion.button
              key={reflection.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedReflection(reflection.id)}
              className="w-full text-left bg-gradient-to-r from-white/80 to-manuscript-gold/5 backdrop-blur-sm rounded-xl border-2 border-manuscript-gold/20 p-4 hover:border-manuscript-gold/40 hover:shadow-lg transition-all flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-manuscript-gold/20 to-amber-100/50 flex items-center justify-center text-manuscript-gold font-heading text-lg shadow-sm">
                {index + 1}
              </div>
              <div className="flex-1">
                <span className="text-manuscript-gold text-xs font-medium">{reflection.theme}</span>
                <h3 className="font-heading text-foreground mt-0.5">{reflection.title}</h3>
              </div>
              <ChevronRight className="w-5 h-5 text-manuscript-gold/60" />
            </motion.button>
          ))}
        </div>
      </div>
    );
  }

  // Plan Detail View
  if (currentPlan) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen pb-24 px-4"
      >
        <div className="pt-6 pb-4">
          <button
            onClick={() => setSelectedPlan(null)}
            className="flex items-center gap-2 text-muted-foreground hover:text-manuscript-gold transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">{t.backToPlans}</span>
          </button>
          
          {/* Premium Header */}
          <div className="flex items-start gap-4 mb-6">
            <div className="relative w-20 h-20 rounded-2xl overflow-hidden shadow-lg ring-2 ring-manuscript-gold/30 flex-shrink-0">
              <img 
                src={planIllustrations[currentPlan.id]} 
                alt={currentPlan.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-manuscript-gold/20 to-transparent" />
              <div className="absolute bottom-1 right-1 bg-manuscript-gold text-white text-xs font-bold px-2 py-0.5 rounded-md shadow">
                {currentPlan.duration}d
              </div>
            </div>
            <div className="flex-1">
              <h1 className="text-2xl font-heading text-foreground">{currentPlan.title}</h1>
              <p className="text-muted-foreground text-sm mt-1">{currentPlan.subtitle}</p>
            </div>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          {/* About Section */}
          <div className="bg-gradient-to-br from-white/80 to-manuscript-gold/5 backdrop-blur-sm rounded-2xl border-2 border-manuscript-gold/20 p-5 shadow-md">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-manuscript-gold/20 flex items-center justify-center">
                <Target className="w-4 h-4 text-manuscript-gold" />
              </div>
              <h3 className="font-heading text-foreground">{t.aboutThisPlan}</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{currentPlan.introduction}</p>
          </div>

          {/* Objective Section */}
          <div className="bg-gradient-to-br from-white/80 to-manuscript-gold/5 backdrop-blur-sm rounded-2xl border-2 border-manuscript-gold/20 p-5 shadow-md">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-manuscript-gold/20 flex items-center justify-center">
                <Trophy className="w-4 h-4 text-manuscript-gold" />
              </div>
              <h3 className="font-heading text-foreground">{t.objective}</h3>
            </div>
            <p className="text-muted-foreground">{currentPlan.objective}</p>
          </div>

          {/* What You'll Need Section */}
          <div className="bg-gradient-to-br from-white/80 to-manuscript-gold/5 backdrop-blur-sm rounded-2xl border-2 border-manuscript-gold/20 p-5 shadow-md">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-manuscript-gold/20 flex items-center justify-center">
                <Check className="w-4 h-4 text-manuscript-gold" />
              </div>
              <h3 className="font-heading text-foreground">{t.whatYouWillNeed}</h3>
            </div>
            <ul className="space-y-2">
              {currentPlan.whatYouWillNeed.map((item, idx) => (
                <motion.li 
                  key={idx} 
                  className="flex items-start gap-3 p-2 rounded-lg hover:bg-manuscript-gold/5 transition-colors"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-manuscript-gold to-amber-500 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-muted-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Daily Schedule */}
          <h3 className="font-heading text-foreground text-lg mt-6 mb-4 flex items-center gap-2">
            <Flame className="w-5 h-5 text-manuscript-gold" />
            {t.dailySchedule}
          </h3>
          
          {currentPlan.days.slice(0, 7).map((day, index) => (
            <motion.div 
              key={day.day} 
              className="bg-gradient-to-r from-white/80 to-manuscript-gold/5 backdrop-blur-sm rounded-xl border-2 border-manuscript-gold/20 p-4 hover:shadow-md transition-all"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-manuscript-gold to-amber-500 text-white flex items-center justify-center font-heading text-lg shadow-md">
                  {day.day}
                </div>
                <div className="flex-1">
                  <h4 className="font-heading text-foreground">{day.title}</h4>
                  <p className="text-muted-foreground text-sm">{day.objective}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-manuscript-gold/60" />
              </div>
            </motion.div>
          ))}
          
          {currentPlan.days.length > 7 && (
            <p className="text-muted-foreground text-center text-sm bg-white/50 py-3 rounded-xl border border-primary/10">
              + {currentPlan.days.length - 7} {t.daysRemaining}
            </p>
          )}
        </div>
      </motion.div>
    );
  }

  // Plans List View
  if (currentView === 'plans') {
    return (
      <div className="min-h-screen pb-24 px-4">
        <div className="pt-6 pb-4">
          <button
            onClick={() => setCurrentView('hub')}
            className="flex items-center gap-2 text-muted-foreground hover:text-manuscript-gold transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">{t.back}</span>
          </button>
          
          {/* Premium Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="relative w-16 h-16 rounded-2xl overflow-hidden shadow-lg ring-2 ring-manuscript-gold/30">
              <img 
                src={illustrations.journey.plans} 
                alt="Practice Plans" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-2xl font-heading text-foreground">{practicePlansIntroduction.title}</h1>
              <p className="text-muted-foreground text-sm mt-1">{practicePlansIntroduction.subtitle}</p>
            </div>
          </div>
        </div>

        <p className="text-muted-foreground text-sm mb-6 bg-white/50 p-4 rounded-xl border border-primary/10">
          {practicePlansIntroduction.description}
        </p>

        <div className="space-y-4">
          {practicePlans.map((plan, index) => (
            <motion.button
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedPlan(plan.id)}
              className="w-full text-left bg-gradient-to-r from-white/80 to-manuscript-gold/5 backdrop-blur-sm rounded-2xl border-2 border-manuscript-gold/20 p-4 hover:border-manuscript-gold/40 hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden shadow-md ring-2 ring-manuscript-gold/20 flex-shrink-0">
                  <img 
                    src={planIllustrations[plan.id]} 
                    alt={plan.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-manuscript-gold/30 to-transparent" />
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 bg-manuscript-gold text-white text-xs font-bold px-2 py-0.5 rounded-md shadow">
                    {plan.duration}d
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-foreground">{plan.title}</h3>
                  <p className="text-muted-foreground text-sm">{plan.subtitle}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-manuscript-gold/60" />
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    );
  }

  // Main Hub View
  return (
    <div className="min-h-screen pb-24 px-4">
      {/* Premium Header */}
      <div className="pt-8 pb-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="relative w-16 h-16 rounded-2xl overflow-hidden shadow-lg ring-2 ring-manuscript-gold/30">
            <img 
              src={illustrations.journey.hub} 
              alt="Journey Hub" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-2xl font-heading text-foreground">{t.title}</h1>
            <p className="text-muted-foreground text-sm">{t.subtitle}</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {/* Journal */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02, y: -4 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setCurrentView('journal')}
          className="w-full text-left bg-gradient-to-r from-white/80 to-manuscript-gold/5 backdrop-blur-sm rounded-2xl border-2 border-manuscript-gold/20 p-5 hover:border-manuscript-gold/40 hover:shadow-lg transition-all"
        >
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 rounded-xl overflow-hidden shadow-md ring-2 ring-manuscript-gold/20 flex-shrink-0">
              <img 
                src={illustrations.journey.journal} 
                alt="Journal" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-heading text-foreground text-lg">{t.journalTitle}</h3>
              <p className="text-muted-foreground text-sm">
                {progress.journalEntries.length} {t.entriesRecorded}
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-manuscript-gold/60" />
          </div>
        </motion.button>

        {/* Reflections */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          whileHover={{ scale: 1.02, y: -4 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setCurrentView('reflections')}
          className="w-full text-left bg-gradient-to-r from-white/80 to-manuscript-gold/5 backdrop-blur-sm rounded-2xl border-2 border-manuscript-gold/20 p-5 hover:border-manuscript-gold/40 hover:shadow-lg transition-all"
        >
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 rounded-xl overflow-hidden shadow-md ring-2 ring-manuscript-gold/20 flex-shrink-0">
              <img 
                src={illustrations.journey.reflections} 
                alt="Reflections" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-heading text-foreground text-lg">{t.reflectionsLibrary}</h3>
              <p className="text-muted-foreground text-sm">{t.textsForContemplation}</p>
            </div>
            <ChevronRight className="w-5 h-5 text-manuscript-gold/60" />
          </div>
        </motion.button>

        {/* Practice Plans */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.02, y: -4 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setCurrentView('plans')}
          className="w-full text-left bg-gradient-to-r from-white/80 to-manuscript-gold/5 backdrop-blur-sm rounded-2xl border-2 border-manuscript-gold/20 p-5 hover:border-manuscript-gold/40 hover:shadow-lg transition-all"
        >
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 rounded-xl overflow-hidden shadow-md ring-2 ring-manuscript-gold/20 flex-shrink-0">
              <img 
                src={illustrations.journey.plans} 
                alt="Practice Plans" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-heading text-foreground text-lg">{t.practicePlans}</h3>
              <p className="text-muted-foreground text-sm">{t.journeysOf}</p>
            </div>
            <ChevronRight className="w-5 h-5 text-manuscript-gold/60" />
          </div>
        </motion.button>
      </div>

      {/* Premium Stats */}
      <div className="mt-8 grid grid-cols-3 gap-3">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-white/80 to-manuscript-gold/10 backdrop-blur-sm rounded-2xl border-2 border-manuscript-gold/20 p-4 text-center shadow-md"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-manuscript-gold to-amber-500 flex items-center justify-center mx-auto mb-2 shadow-md">
            <Flame className="w-5 h-5 text-white" />
          </div>
          <span className="text-2xl font-heading text-manuscript-gold">{progress.currentStreak}</span>
          <p className="text-muted-foreground text-xs mt-1">{t.consecutiveDays}</p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-br from-white/80 to-manuscript-gold/10 backdrop-blur-sm rounded-2xl border-2 border-manuscript-gold/20 p-4 text-center shadow-md"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-manuscript-gold to-amber-500 flex items-center justify-center mx-auto mb-2 shadow-md">
            <Target className="w-5 h-5 text-white" />
          </div>
          <span className="text-2xl font-heading text-manuscript-gold">{progress.completedDays.length}</span>
          <p className="text-muted-foreground text-xs mt-1">{t.practicesLabel}</p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-br from-white/80 to-manuscript-gold/10 backdrop-blur-sm rounded-2xl border-2 border-manuscript-gold/20 p-4 text-center shadow-md"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-manuscript-gold to-amber-500 flex items-center justify-center mx-auto mb-2 shadow-md">
            <Trophy className="w-5 h-5 text-white" />
          </div>
          <span className="text-2xl font-heading text-manuscript-gold">{progress.badges.length}</span>
          <p className="text-muted-foreground text-xs mt-1">{t.achievementsLabel}</p>
        </motion.div>
      </div>
    </div>
  );
};