import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Brain, Heart, Target, Wind, PenTool, Compass, Eye, Moon, ArrowLeft, Clock, Play } from 'lucide-react';
import { meditations, meditationsIntroduction } from '@/data/meditationsContent';
import { exercises, exercisesIntroduction } from '@/data/exercisesContent';
import { MeditationTimer } from './MeditationTimer';
import { ManuscriptProgress } from '@/hooks/useManuscriptProgress';

interface PracticesHubProps {
  progress: ManuscriptProgress;
  onCompleteDay: (day: number) => void;
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

export const PracticesHub = ({ progress, onCompleteDay }: PracticesHubProps) => {
  const [activeTab, setActiveTab] = useState<Tab>('meditations');
  const [selectedMeditation, setSelectedMeditation] = useState<string | null>(null);
  const [selectedExercise, setSelectedExercise] = useState<string | null>(null);
  const [showTimer, setShowTimer] = useState(false);

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
            className="flex items-center gap-2 text-manuscript-light/60 hover:text-manuscript-gold transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Voltar</span>
          </button>
          
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-manuscript-gold/20 flex items-center justify-center text-manuscript-gold">
              {meditationIcons[currentMeditation.icon]}
            </div>
            <div className="flex items-center gap-2 text-sm text-manuscript-light/60">
              <Clock className="w-4 h-4" />
              <span>{currentMeditation.duration} min</span>
            </div>
          </div>
          
          <h1 className="text-2xl font-heading text-manuscript-light mb-2">
            {currentMeditation.title}
          </h1>
          <p className="text-manuscript-light/60">{currentMeditation.subtitle}</p>
        </div>

        {/* Content sections */}
        <div className="space-y-4 mb-6">
          <div className="bg-manuscript-dark/30 rounded-xl border border-manuscript-gold/10 p-5">
            <h3 className="text-lg font-heading text-manuscript-light mb-3">Preparação</h3>
            <p className="text-manuscript-light/70 leading-relaxed whitespace-pre-line">{currentMeditation.preparation}</p>
          </div>
          
          <div className="bg-manuscript-dark/30 rounded-xl border border-manuscript-gold/10 p-5">
            <h3 className="text-lg font-heading text-manuscript-light mb-3">Propósito</h3>
            <p className="text-manuscript-light/70 leading-relaxed whitespace-pre-line">{currentMeditation.purpose}</p>
          </div>

          <div className="bg-manuscript-dark/30 rounded-xl border border-manuscript-gold/10 p-5">
            <h3 className="text-lg font-heading text-manuscript-light mb-3">Instruções</h3>
            <ul className="space-y-3">
              {currentMeditation.instructions.map((instruction, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-manuscript-gold/20 text-manuscript-gold text-sm flex items-center justify-center flex-shrink-0">
                    {idx + 1}
                  </span>
                  <span className="text-manuscript-light/70">{instruction}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <button
          onClick={() => setShowTimer(true)}
          className="w-full py-4 bg-gradient-to-r from-manuscript-gold to-manuscript-gold/80 text-manuscript-dark font-medium rounded-xl flex items-center justify-center gap-2"
        >
          <Play className="w-5 h-5" />
          Iniciar Meditação
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
            className="flex items-center gap-2 text-manuscript-light/60 hover:text-manuscript-gold transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Voltar</span>
          </button>
          
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-manuscript-purple/20 flex items-center justify-center text-manuscript-purple">
              {exerciseIcons[currentExercise.icon]}
            </div>
            <div className="flex items-center gap-2 text-sm text-manuscript-light/60">
              <Clock className="w-4 h-4" />
              <span>{currentExercise.duration}</span>
            </div>
          </div>
          
          <h1 className="text-2xl font-heading text-manuscript-light mb-2">
            {currentExercise.title}
          </h1>
          <p className="text-manuscript-light/60">{currentExercise.subtitle}</p>
        </div>

        <div className="space-y-4 mb-6">
          <div className="bg-manuscript-dark/30 rounded-xl border border-manuscript-gold/10 p-5">
            <h3 className="text-lg font-heading text-manuscript-light mb-3">Visão Geral</h3>
            <p className="text-manuscript-light/70 leading-relaxed whitespace-pre-line">{currentExercise.overview}</p>
          </div>

          <div className="bg-manuscript-dark/30 rounded-xl border border-manuscript-gold/10 p-5">
            <h3 className="text-lg font-heading text-manuscript-light mb-3">Benefícios</h3>
            <ul className="space-y-2">
              {currentExercise.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <div className="w-2 h-2 rounded-full bg-manuscript-gold mt-2" />
                  <span className="text-manuscript-light/70">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-manuscript-dark/30 rounded-xl border border-manuscript-gold/10 p-5">
            <h3 className="text-lg font-heading text-manuscript-light mb-3">Passo a Passo</h3>
            <ul className="space-y-4">
              {currentExercise.steps.map((step) => (
                <li key={step.step} className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-manuscript-gold/20 text-manuscript-gold text-sm flex items-center justify-center">
                      {step.step}
                    </span>
                    <span className="font-medium text-manuscript-light">{step.title}</span>
                  </div>
                  <p className="text-manuscript-light/70 ml-10">{step.instruction}</p>
                  {step.tip && (
                    <p className="text-manuscript-gold/70 text-sm ml-10 italic">💡 {step.tip}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {currentExercise.disclaimer && (
            <div className="bg-manuscript-purple/10 rounded-xl border border-manuscript-purple/20 p-4">
              <p className="text-manuscript-light/60 text-sm">{currentExercise.disclaimer}</p>
            </div>
          )}
        </div>
      </motion.div>
    );
  }

  // Main Hub View
  return (
    <div className="min-h-screen pb-24 px-4">
      {/* Header */}
      <div className="pt-8 pb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-manuscript-gold/30 to-manuscript-purple/30 flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-manuscript-gold" />
          </div>
          <div>
            <h1 className="text-2xl font-heading text-manuscript-light">Práticas</h1>
            <p className="text-manuscript-light/60 text-sm">Meditações e exercícios</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setActiveTab('meditations')}
          className={`flex-1 py-3 rounded-xl font-medium transition-all ${
            activeTab === 'meditations'
              ? 'bg-manuscript-gold text-manuscript-dark'
              : 'bg-manuscript-dark/30 text-manuscript-light/60'
          }`}
        >
          Meditações
        </button>
        <button
          onClick={() => setActiveTab('exercises')}
          className={`flex-1 py-3 rounded-xl font-medium transition-all ${
            activeTab === 'exercises'
              ? 'bg-manuscript-gold text-manuscript-dark'
              : 'bg-manuscript-dark/30 text-manuscript-light/60'
          }`}
        >
          Exercícios
        </button>
      </div>

      {/* Content */}
      {activeTab === 'meditations' ? (
        <div className="space-y-4">
          <p className="text-manuscript-light/60 text-sm mb-4">{meditationsIntroduction.description}</p>
          {meditations.map((meditation, index) => (
            <motion.button
              key={meditation.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedMeditation(meditation.id)}
              className="w-full text-left bg-manuscript-dark/30 rounded-xl border border-manuscript-gold/10 p-4 hover:border-manuscript-gold/30 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-manuscript-gold/20 flex items-center justify-center text-manuscript-gold">
                  {meditationIcons[meditation.icon]}
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-manuscript-light">{meditation.title}</h3>
                  <p className="text-manuscript-light/60 text-sm">{meditation.duration} min</p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          <p className="text-manuscript-light/60 text-sm mb-4">{exercisesIntroduction.description}</p>
          {exercises.map((exercise, index) => (
            <motion.button
              key={exercise.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedExercise(exercise.id)}
              className="w-full text-left bg-manuscript-dark/30 rounded-xl border border-manuscript-purple/10 p-4 hover:border-manuscript-purple/30 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-manuscript-purple/20 flex items-center justify-center text-manuscript-purple">
                  {exerciseIcons[exercise.icon]}
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-manuscript-light">{exercise.title}</h3>
                  <p className="text-manuscript-light/60 text-sm">{exercise.duration}</p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      )}
    </div>
  );
};
