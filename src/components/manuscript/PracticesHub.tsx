import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Brain, Heart, Target, Wind, PenTool, Compass, Eye, Moon, ArrowLeft, Clock, Play, Lightbulb } from 'lucide-react';
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

const meditationIcons: { [key: string]: React.ReactNode } = {
  brain: <Brain className="w-6 h-6" />,
  heart: <Heart className="w-6 h-6" />,
  target: <Target className="w-6 h-6" />,
};

const exerciseIcons: { [key: string]: React.ReactNode } = {
  wind: <Wind className="w-6 h-6" />,
  'pen-tool': <PenTool className="w-6 h-6" />,
  compass: <Compass className="w-6 h-6" />,
  eye: <Eye className="w-6 h-6" />,
  moon: <Moon className="w-6 h-6" />,
};

type Tab = 'meditations' | 'exercises';

export const PracticesHub = ({ progress, onCompleteDay, language }: PracticesHubProps) => {
  const [activeTab, setActiveTab] = useState<Tab>('meditations');
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
          
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-manuscript-gold/20 flex items-center justify-center text-manuscript-gold">
              {meditationIcons[currentMeditation.icon]}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>{currentMeditation.duration} {tMeditation.min}</span>
            </div>
          </div>
          
          <h1 className="text-2xl font-heading text-foreground mb-2">
            {currentMeditation.title}
          </h1>
          <p className="text-muted-foreground">{currentMeditation.subtitle}</p>
        </div>

        {/* Content sections */}
        <div className="space-y-4 mb-6">
          <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-primary/20 p-5">
            <h3 className="text-lg font-heading text-foreground mb-3">{t.preparation}</h3>
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{currentMeditation.preparation}</p>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-primary/20 p-5">
            <h3 className="text-lg font-heading text-foreground mb-3">{t.purpose}</h3>
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{currentMeditation.purpose}</p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-primary/20 p-5">
            <h3 className="text-lg font-heading text-foreground mb-3">{t.instructions}</h3>
            <ul className="space-y-3">
              {currentMeditation.instructions.map((instruction, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-manuscript-gold/20 text-manuscript-gold text-sm flex items-center justify-center flex-shrink-0">
                    {idx + 1}
                  </span>
                  <span className="text-muted-foreground">{instruction}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <button
          onClick={() => setShowTimer(true)}
          className="w-full py-4 bg-gradient-to-r from-manuscript-gold to-manuscript-gold/80 text-white font-medium rounded-xl flex items-center justify-center gap-2"
        >
          <Play className="w-5 h-5" />
          {t.startMeditation}
        </button>
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
          
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-manuscript-purple/20 flex items-center justify-center text-manuscript-purple">
              {exerciseIcons[currentExercise.icon]}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>{currentExercise.duration}</span>
            </div>
          </div>
          
          <h1 className="text-2xl font-heading text-foreground mb-2">
            {currentExercise.title}
          </h1>
          <p className="text-muted-foreground">{currentExercise.subtitle}</p>
        </div>

        <div className="space-y-4 mb-6">
          <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-primary/20 p-5">
            <h3 className="text-lg font-heading text-foreground mb-3">{t.overview}</h3>
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{currentExercise.overview}</p>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-primary/20 p-5">
            <h3 className="text-lg font-heading text-foreground mb-3">{t.benefits}</h3>
            <ul className="space-y-2">
              {currentExercise.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-manuscript-gold mt-2" />
                  <span className="text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-primary/20 p-5">
            <h3 className="text-lg font-heading text-foreground mb-3">{t.stepByStep}</h3>
            <ul className="space-y-4">
              {currentExercise.steps.map((step) => (
                <li key={step.step} className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-manuscript-gold/20 text-manuscript-gold text-sm flex items-center justify-center">
                      {step.step}
                    </span>
                    <span className="font-medium text-foreground">{step.title}</span>
                  </div>
                  <p className="text-muted-foreground ml-10">{step.instruction}</p>
                  {step.tip && (
                    <div className="flex items-start gap-2 ml-10 text-manuscript-gold/80">
                      <Lightbulb className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <p className="text-sm italic">{step.tip}</p>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {currentExercise.disclaimer && (
            <div className="bg-manuscript-purple/10 rounded-xl border border-manuscript-purple/20 p-4">
              <p className="text-muted-foreground text-sm">{currentExercise.disclaimer}</p>
            </div>
          )}
        </div>
      </motion.div>
    );
  }

  // Main Hub View
  return (
    <div className="min-h-screen pb-24 px-4">
      {/* Header with Illustration */}
      <div className="pt-8 pb-4">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-xl overflow-hidden bg-gradient-to-br from-manuscript-gold/20 to-primary/10 flex items-center justify-center">
            <img 
              src={activeTab === 'meditations' ? illustrations.meditation : illustrations.exercises} 
              alt={t.title}
              className="w-14 h-14 object-contain"
            />
          </div>
          <div>
            <h1 className="text-2xl font-heading text-foreground">{t.title}</h1>
            <p className="text-muted-foreground text-sm">{t.subtitle}</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setActiveTab('meditations')}
          className={`flex-1 py-3 rounded-xl font-medium transition-all ${
            activeTab === 'meditations'
              ? 'bg-manuscript-gold text-white'
              : 'bg-white/60 text-muted-foreground border border-primary/20'
          }`}
        >
          {t.meditations}
        </button>
        <button
          onClick={() => setActiveTab('exercises')}
          className={`flex-1 py-3 rounded-xl font-medium transition-all ${
            activeTab === 'exercises'
              ? 'bg-manuscript-gold text-white'
              : 'bg-white/60 text-muted-foreground border border-primary/20'
          }`}
        >
          {t.exercises}
        </button>
      </div>

      {/* Content */}
      {activeTab === 'meditations' ? (
        <div className="space-y-4">
          <p className="text-muted-foreground text-sm mb-4">{meditationsIntroduction.description}</p>
          {meditations.map((meditation, index) => (
            <motion.button
              key={meditation.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedMeditation(meditation.id)}
              className="w-full text-left bg-white/70 backdrop-blur-sm rounded-xl border border-primary/20 p-4 hover:border-manuscript-gold/40 hover:bg-white/90 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-manuscript-gold/20 flex items-center justify-center text-manuscript-gold">
                  {meditationIcons[meditation.icon]}
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-foreground">{meditation.title}</h3>
                  <p className="text-muted-foreground text-sm">{meditation.duration} {tMeditation.min}</p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          <p className="text-muted-foreground text-sm mb-4">{exercisesIntroduction.description}</p>
          {exercises.map((exercise, index) => (
            <motion.button
              key={exercise.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedExercise(exercise.id)}
              className="w-full text-left bg-white/70 backdrop-blur-sm rounded-xl border border-manuscript-purple/20 p-4 hover:border-manuscript-purple/40 hover:bg-white/90 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-manuscript-purple/20 flex items-center justify-center text-manuscript-purple">
                  {exerciseIcons[exercise.icon]}
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-foreground">{exercise.title}</h3>
                  <p className="text-muted-foreground text-sm">{exercise.duration}</p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      )}
    </div>
  );
};