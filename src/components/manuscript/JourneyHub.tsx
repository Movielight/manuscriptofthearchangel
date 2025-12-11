import { useState } from 'react';
import { motion } from 'framer-motion';
import { Compass, BookOpen, Calendar, Sparkles, ChevronRight, ArrowLeft, CheckCircle } from 'lucide-react';
import { JournalView } from './JournalView';
import { reflections, reflectionsIntroduction } from '@/data/reflectionsContent';
import { practicePlans, practicePlansIntroduction } from '@/data/practicePlansContent';
import { ManuscriptProgress, JournalEntry } from '@/hooks/useManuscriptProgress';

interface JourneyHubProps {
  progress: ManuscriptProgress;
  onAddEntry: (type: JournalEntry['type'], content: string) => void;
  onDeleteEntry: (id: string) => void;
}

type View = 'hub' | 'journal' | 'reflections' | 'plans';

export const JourneyHub = ({ progress, onAddEntry, onDeleteEntry }: JourneyHubProps) => {
  const [currentView, setCurrentView] = useState<View>('hub');
  const [selectedReflection, setSelectedReflection] = useState<string | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const currentReflection = reflections.find(r => r.id === selectedReflection);
  const currentPlan = practicePlans.find(p => p.id === selectedPlan);

  // Journal View
  if (currentView === 'journal') {
    return (
      <div className="min-h-screen pb-24">
        <div className="px-4 pt-6 pb-4">
          <button
            onClick={() => setCurrentView('hub')}
            className="flex items-center gap-2 text-manuscript-light/60 hover:text-manuscript-gold transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Voltar</span>
          </button>
        </div>
        <JournalView progress={progress} onAddEntry={onAddEntry} onDeleteEntry={onDeleteEntry} />
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
            className="flex items-center gap-2 text-manuscript-light/60 hover:text-manuscript-gold transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Voltar às reflexões</span>
          </button>
          
          <div className="w-10 h-10 rounded-xl bg-manuscript-gold/20 flex items-center justify-center text-manuscript-gold mb-4">
            <Sparkles className="w-5 h-5" />
          </div>
          
          <span className="text-manuscript-gold text-sm font-medium">{currentReflection.theme}</span>
          <h1 className="text-2xl font-heading text-manuscript-light mt-1">
            {currentReflection.title}
          </h1>
        </div>

        <div className="bg-manuscript-dark/30 rounded-xl border border-manuscript-gold/10 p-6">
          <p className="text-manuscript-light/80 leading-relaxed whitespace-pre-line font-body text-lg">
            {currentReflection.content}
          </p>
          <p className="text-manuscript-gold/60 text-sm mt-6 text-right italic">
            — {currentReflection.author}
          </p>
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
            className="flex items-center gap-2 text-manuscript-light/60 hover:text-manuscript-gold transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Voltar</span>
          </button>
          
          <h1 className="text-2xl font-heading text-manuscript-light">{reflectionsIntroduction.title}</h1>
          <p className="text-manuscript-light/60 text-sm mt-1">{reflectionsIntroduction.subtitle}</p>
        </div>

        <p className="text-manuscript-light/60 text-sm mb-6">{reflectionsIntroduction.description}</p>

        <div className="space-y-3">
          {reflections.map((reflection, index) => (
            <motion.button
              key={reflection.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setSelectedReflection(reflection.id)}
              className="w-full text-left bg-manuscript-dark/30 rounded-xl border border-manuscript-gold/10 p-4 hover:border-manuscript-gold/30 transition-all"
            >
              <span className="text-manuscript-gold text-xs font-medium">{reflection.theme}</span>
              <h3 className="font-heading text-manuscript-light mt-1">{reflection.title}</h3>
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
            className="flex items-center gap-2 text-manuscript-light/60 hover:text-manuscript-gold transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Voltar aos planos</span>
          </button>
          
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-manuscript-purple/20 flex items-center justify-center">
              <Calendar className="w-5 h-5 text-manuscript-purple" />
            </div>
            <span className="text-manuscript-purple font-medium">{currentPlan.duration} dias</span>
          </div>
          
          <h1 className="text-2xl font-heading text-manuscript-light">{currentPlan.title}</h1>
          <p className="text-manuscript-light/60 text-sm mt-1">{currentPlan.subtitle}</p>
        </div>

        <div className="space-y-4 mb-6">
          <div className="bg-manuscript-dark/30 rounded-xl border border-manuscript-gold/10 p-5">
            <h3 className="font-heading text-manuscript-light mb-3">Sobre este plano</h3>
            <p className="text-manuscript-light/70 leading-relaxed whitespace-pre-line">{currentPlan.introduction}</p>
          </div>

          <div className="bg-manuscript-dark/30 rounded-xl border border-manuscript-gold/10 p-5">
            <h3 className="font-heading text-manuscript-light mb-3">Objetivo</h3>
            <p className="text-manuscript-light/70">{currentPlan.objective}</p>
          </div>

          <div className="bg-manuscript-dark/30 rounded-xl border border-manuscript-gold/10 p-5">
            <h3 className="font-heading text-manuscript-light mb-3">O que você vai precisar</h3>
            <ul className="space-y-2">
              {currentPlan.whatYouWillNeed.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-manuscript-gold mt-0.5" />
                  <span className="text-manuscript-light/70">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <h3 className="font-heading text-manuscript-light text-lg mt-6 mb-4">Cronograma Diário</h3>
          
          {currentPlan.days.slice(0, 7).map((day) => (
            <div key={day.day} className="bg-manuscript-dark/30 rounded-xl border border-manuscript-gold/10 p-4">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-8 rounded-full bg-manuscript-gold/20 text-manuscript-gold flex items-center justify-center font-medium">
                  {day.day}
                </span>
                <div>
                  <h4 className="font-heading text-manuscript-light">{day.title}</h4>
                  <p className="text-manuscript-light/60 text-sm">{day.objective}</p>
                </div>
              </div>
            </div>
          ))}
          
          {currentPlan.days.length > 7 && (
            <p className="text-manuscript-light/40 text-center text-sm">
              + {currentPlan.days.length - 7} dias restantes...
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
            className="flex items-center gap-2 text-manuscript-light/60 hover:text-manuscript-gold transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Voltar</span>
          </button>
          
          <h1 className="text-2xl font-heading text-manuscript-light">{practicePlansIntroduction.title}</h1>
          <p className="text-manuscript-light/60 text-sm mt-1">{practicePlansIntroduction.subtitle}</p>
        </div>

        <p className="text-manuscript-light/60 text-sm mb-6">{practicePlansIntroduction.description}</p>

        <div className="space-y-4">
          {practicePlans.map((plan, index) => (
            <motion.button
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedPlan(plan.id)}
              className="w-full text-left bg-manuscript-dark/30 rounded-xl border border-manuscript-purple/10 p-4 hover:border-manuscript-purple/30 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-manuscript-purple/20 flex flex-col items-center justify-center">
                  <span className="text-xl font-heading text-manuscript-purple">{plan.duration}</span>
                  <span className="text-xs text-manuscript-purple/60">dias</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-manuscript-light">{plan.title}</h3>
                  <p className="text-manuscript-light/60 text-sm">{plan.subtitle}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-manuscript-light/30" />
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
      <div className="pt-8 pb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-manuscript-gold/30 to-manuscript-purple/30 flex items-center justify-center">
            <Compass className="w-6 h-6 text-manuscript-gold" />
          </div>
          <div>
            <h1 className="text-2xl font-heading text-manuscript-light">Sua Jornada</h1>
            <p className="text-manuscript-light/60 text-sm">Diário, reflexões e planos</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {/* Journal */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={() => setCurrentView('journal')}
          className="w-full text-left bg-manuscript-dark/30 rounded-xl border border-manuscript-gold/10 p-5 hover:border-manuscript-gold/30 transition-all"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-manuscript-gold/20 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-manuscript-gold" />
            </div>
            <div className="flex-1">
              <h3 className="font-heading text-manuscript-light text-lg">Diário de Jornada</h3>
              <p className="text-manuscript-light/60 text-sm">
                {progress.journalEntries.length} entradas registradas
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-manuscript-light/30" />
          </div>
        </motion.button>

        {/* Reflections */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          onClick={() => setCurrentView('reflections')}
          className="w-full text-left bg-manuscript-dark/30 rounded-xl border border-manuscript-gold/10 p-5 hover:border-manuscript-gold/30 transition-all"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-manuscript-gold/20 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-manuscript-gold" />
            </div>
            <div className="flex-1">
              <h3 className="font-heading text-manuscript-light text-lg">Biblioteca de Reflexões</h3>
              <p className="text-manuscript-light/60 text-sm">10 textos para contemplação</p>
            </div>
            <ChevronRight className="w-5 h-5 text-manuscript-light/30" />
          </div>
        </motion.button>

        {/* Practice Plans */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onClick={() => setCurrentView('plans')}
          className="w-full text-left bg-manuscript-dark/30 rounded-xl border border-manuscript-purple/10 p-5 hover:border-manuscript-purple/30 transition-all"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-manuscript-purple/20 flex items-center justify-center">
              <Calendar className="w-6 h-6 text-manuscript-purple" />
            </div>
            <div className="flex-1">
              <h3 className="font-heading text-manuscript-light text-lg">Planos de Prática</h3>
              <p className="text-manuscript-light/60 text-sm">Jornadas de 7, 14 e 21 dias</p>
            </div>
            <ChevronRight className="w-5 h-5 text-manuscript-light/30" />
          </div>
        </motion.button>
      </div>

      {/* Stats */}
      <div className="mt-8 grid grid-cols-3 gap-4">
        <div className="bg-manuscript-dark/30 rounded-xl border border-manuscript-gold/10 p-4 text-center">
          <span className="text-2xl font-heading text-manuscript-gold">{progress.currentStreak}</span>
          <p className="text-manuscript-light/60 text-xs mt-1">Dias seguidos</p>
        </div>
        <div className="bg-manuscript-dark/30 rounded-xl border border-manuscript-gold/10 p-4 text-center">
          <span className="text-2xl font-heading text-manuscript-gold">{progress.completedDays.length}</span>
          <p className="text-manuscript-light/60 text-xs mt-1">Práticas</p>
        </div>
        <div className="bg-manuscript-dark/30 rounded-xl border border-manuscript-gold/10 p-4 text-center">
          <span className="text-2xl font-heading text-manuscript-gold">{progress.badges.length}</span>
          <p className="text-manuscript-light/60 text-xs mt-1">Conquistas</p>
        </div>
      </div>
    </div>
  );
};
