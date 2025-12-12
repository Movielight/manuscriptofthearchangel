import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Clock, Play, Lightbulb, ChevronRight, Check, Sparkles } from 'lucide-react';
import { meditations, meditationsIntroduction } from '@/data/meditationsContent';
import { exercises, exercisesIntroduction } from '@/data/exercisesContent';
import { MeditationTimer } from './MeditationTimer';
import { ManuscriptProgress } from '@/hooks/useManuscriptProgress';
import { Language, getTranslation } from '@/data/translations';
import { illustrations } from '@/data/illustrationAssets';

interface PracticesHubProps {
  progress: ManuscriptProgress;
  onCompleteDay: (day: number) => void;
  language: Language;
}

export const PracticesHub = ({ progress, onCompleteDay, language }: PracticesHubProps) => {
  const [activeTab, setActiveTab] = useState<'meditations' | 'exercises'>('meditations');
  const [selectedMeditation, setSelectedMeditation] = useState<string | null>(null);
  const [selectedExercise, setSelectedExercise] = useState<string | null>(null);
  const [showTimer, setShowTimer] = useState(false);

  const t = getTranslation(language).practices;
  const tMeditation = getTranslation(language).meditation;
  const currentMeditation = meditations.find(m => m.id === selectedMeditation);
  const currentExercise = exercises.find(e => e.id === selectedExercise);

  // Meditation Detail View
  if (currentMeditation) {
    if (showTimer) {
      return (
        <div className="min-h-screen pb-24">
          <MeditationTimer
            duration={currentMeditation.duration}
            title={currentMeditation.title}
            language={language}
            onComplete={() => {
              setShowTimer(false);
              onCompleteDay(new Date().getDate());
            }}
            onCancel={() => setShowTimer(false)}
          />
        </div>
      );
    }

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen pb-24 px-4"
      >
        <div className="pt-6 pb-4">
          <button
            onClick={() => setSelectedMeditation(null)}
            className="flex items-center gap-2 text-muted-foreground hover:text-manuscript-gold transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">{t.back}</span>
          </button>
          
          {/* Premium Header with Illustration */}
          <div className="flex items-start gap-4 mb-4">
            <div className="relative w-20 h-20 rounded-2xl overflow-hidden shadow-lg ring-2 ring-manuscript-gold/30 flex-shrink-0">
              <img 
                src={illustrations.meditationItems[currentMeditation.id]} 
                alt={currentMeditation.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-manuscript-gold/20 to-transparent" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 text-sm text-manuscript-gold mb-1">
                <Clock className="w-4 h-4" />
                <span>{currentMeditation.duration} {tMeditation.min}</span>
              </div>
              <h1 className="text-xl font-heading text-foreground leading-tight">
                {currentMeditation.title}
              </h1>
              <p className="text-muted-foreground text-sm mt-1">{currentMeditation.subtitle}</p>
            </div>
          </div>
        </div>

        {/* Content sections with premium styling */}
        <div className="space-y-4 mb-6">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-white/80 to-manuscript-gold/5 backdrop-blur-sm rounded-xl border-2 border-manuscript-gold/20 p-5 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-manuscript-gold" />
              <h3 className="text-lg font-heading text-foreground">{t.preparation}</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{currentMeditation.preparation}</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-white/80 to-manuscript-gold/5 backdrop-blur-sm rounded-xl border-2 border-manuscript-gold/20 p-5 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb className="w-5 h-5 text-manuscript-gold" />
              <h3 className="text-lg font-heading text-foreground">{t.purpose}</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{currentMeditation.purpose}</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-white/80 to-manuscript-gold/5 backdrop-blur-sm rounded-xl border-2 border-manuscript-gold/20 p-5 shadow-sm"
          >
            <h3 className="text-lg font-heading text-foreground mb-4">{t.instructions}</h3>
            <ul className="space-y-3">
              {currentMeditation.instructions.map((instruction, idx) => (
                <motion.li 
                  key={idx} 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + idx * 0.05 }}
                  className="flex items-start gap-3 group"
                >
                  <span className="w-7 h-7 rounded-full bg-gradient-to-br from-manuscript-gold to-amber-500 text-white text-sm flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                    {idx + 1}
                  </span>
                  <span className="text-muted-foreground pt-0.5">{instruction}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setShowTimer(true)}
          className="w-full py-4 bg-gradient-to-r from-manuscript-gold to-amber-500 text-white font-medium rounded-xl flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
        >
          <Play className="w-5 h-5" />
          {t.startMeditation}
        </motion.button>
      </motion.div>
    );
  }

  // Exercise Detail View
  if (currentExercise) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen pb-24 px-4"
      >
        <div className="pt-6 pb-4">
          <button
            onClick={() => setSelectedExercise(null)}
            className="flex items-center gap-2 text-muted-foreground hover:text-manuscript-gold transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">{t.back}</span>
          </button>
          
          {/* Premium Header with Illustration */}
          <div className="flex items-start gap-4 mb-4">
            <div className="relative w-20 h-20 rounded-2xl overflow-hidden shadow-lg ring-2 ring-manuscript-gold/30 flex-shrink-0">
              <img 
                src={illustrations.exerciseItems[currentExercise.id]} 
                alt={currentExercise.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-manuscript-gold/20 to-transparent" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 text-sm text-manuscript-gold mb-1">
                <Clock className="w-4 h-4" />
                <span>{currentExercise.duration}</span>
              </div>
              <h1 className="text-xl font-heading text-foreground leading-tight">
                {currentExercise.title}
              </h1>
              <p className="text-muted-foreground text-sm mt-1">{currentExercise.subtitle}</p>
            </div>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-white/80 to-manuscript-gold/5 backdrop-blur-sm rounded-xl border-2 border-manuscript-gold/20 p-5 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-manuscript-gold" />
              <h3 className="text-lg font-heading text-foreground">{t.overview}</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{currentExercise.overview}</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-white/80 to-manuscript-gold/5 backdrop-blur-sm rounded-xl border-2 border-manuscript-gold/20 p-5 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-3">
              <Check className="w-5 h-5 text-manuscript-gold" />
              <h3 className="text-lg font-heading text-foreground">{t.benefits}</h3>
            </div>
            <ul className="space-y-2">
              {currentExercise.benefits.map((benefit, idx) => (
                <motion.li 
                  key={idx} 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + idx * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-manuscript-gold to-amber-500 mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-white/80 to-manuscript-gold/5 backdrop-blur-sm rounded-xl border-2 border-manuscript-gold/20 p-5 shadow-sm"
          >
            <h3 className="text-lg font-heading text-foreground mb-4">{t.stepByStep}</h3>
            <ul className="space-y-4">
              {currentExercise.steps.map((step, idx) => (
                <motion.li 
                  key={step.step} 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + idx * 0.05 }}
                  className="space-y-2"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-gradient-to-br from-manuscript-gold to-amber-500 text-white text-sm flex items-center justify-center shadow-md">
                      {step.step}
                    </span>
                    <span className="font-medium text-foreground">{step.title}</span>
                  </div>
                  <p className="text-muted-foreground ml-11">{step.instruction}</p>
                  {step.tip && (
                    <div className="flex items-start gap-2 ml-11 bg-manuscript-gold/10 rounded-lg p-3">
                      <Lightbulb className="w-4 h-4 flex-shrink-0 mt-0.5 text-manuscript-gold" />
                      <p className="text-sm italic text-manuscript-gold/90">{step.tip}</p>
                    </div>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {currentExercise.disclaimer && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-amber-50/50 rounded-xl border border-amber-200/50 p-4"
            >
              <p className="text-muted-foreground text-sm">{currentExercise.disclaimer}</p>
            </motion.div>
          )}
        </div>
      </motion.div>
    );
  }

  // Main Hub View
  return (
    <div className="min-h-screen pb-24 px-4">
      {/* Premium Header with Illustration */}
      <div className="pt-8 pb-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="relative w-20 h-20 rounded-2xl overflow-hidden shadow-lg ring-2 ring-manuscript-gold/30">
            <img 
              src={activeTab === 'meditations' ? illustrations.meditation : illustrations.exercises} 
              alt={t.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-manuscript-gold/20 to-transparent" />
          </div>
          <div>
            <h1 className="text-2xl font-heading text-foreground">{t.title}</h1>
            <p className="text-muted-foreground text-sm">{t.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Premium Tabs */}
      <div className="flex gap-2 mb-6">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setActiveTab('meditations')}
          className={`flex-1 py-3.5 rounded-xl font-medium transition-all shadow-sm ${
            activeTab === 'meditations'
              ? 'bg-gradient-to-r from-manuscript-gold to-amber-500 text-white shadow-md'
              : 'bg-white/80 text-muted-foreground border-2 border-manuscript-gold/20 hover:border-manuscript-gold/40'
          }`}
        >
          {t.meditations}
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setActiveTab('exercises')}
          className={`flex-1 py-3.5 rounded-xl font-medium transition-all shadow-sm ${
            activeTab === 'exercises'
              ? 'bg-gradient-to-r from-manuscript-gold to-amber-500 text-white shadow-md'
              : 'bg-white/80 text-muted-foreground border-2 border-manuscript-gold/20 hover:border-manuscript-gold/40'
          }`}
        >
          {t.exercises}
        </motion.button>
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        {activeTab === 'meditations' ? (
          <motion.div 
            key="meditations"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="space-y-4"
          >
            <p className="text-muted-foreground text-sm mb-4 bg-manuscript-gold/5 rounded-xl p-4 border border-manuscript-gold/10">
              {meditationsIntroduction.description}
            </p>
            {meditations.map((meditation, index) => (
              <motion.button
                key={meditation.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedMeditation(meditation.id)}
                className="w-full text-left bg-gradient-to-r from-white/90 to-manuscript-gold/5 backdrop-blur-sm rounded-xl border-2 border-manuscript-gold/20 p-4 hover:border-manuscript-gold/40 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden shadow-md ring-2 ring-manuscript-gold/20 flex-shrink-0">
                    <img 
                      src={illustrations.meditationItems[meditation.id]} 
                      alt={meditation.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading text-foreground truncate">{meditation.title}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
                      <Clock className="w-4 h-4 text-manuscript-gold" />
                      <span>{meditation.duration} {tMeditation.min}</span>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-manuscript-gold/50 group-hover:text-manuscript-gold group-hover:translate-x-1 transition-all flex-shrink-0" />
                </div>
              </motion.button>
            ))}
          </motion.div>
        ) : (
          <motion.div 
            key="exercises"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-4"
          >
            <p className="text-muted-foreground text-sm mb-4 bg-manuscript-gold/5 rounded-xl p-4 border border-manuscript-gold/10">
              {exercisesIntroduction.description}
            </p>
            {exercises.map((exercise, index) => (
              <motion.button
                key={exercise.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedExercise(exercise.id)}
                className="w-full text-left bg-gradient-to-r from-white/90 to-manuscript-gold/5 backdrop-blur-sm rounded-xl border-2 border-manuscript-gold/20 p-4 hover:border-manuscript-gold/40 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden shadow-md ring-2 ring-manuscript-gold/20 flex-shrink-0">
                    <img 
                      src={illustrations.exerciseItems[exercise.id]} 
                      alt={exercise.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading text-foreground truncate">{exercise.title}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
                      <Clock className="w-4 h-4 text-manuscript-gold" />
                      <span>{exercise.duration}</span>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-manuscript-gold/50 group-hover:text-manuscript-gold group-hover:translate-x-1 transition-all flex-shrink-0" />
                </div>
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
