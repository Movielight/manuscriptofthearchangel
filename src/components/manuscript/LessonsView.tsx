import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Video, Play, Clock, CheckCircle, ChevronRight, BookOpen, ArrowLeft } from 'lucide-react';
import { lessons, lessonsIntroduction } from '@/data/lessonsContent';
import { Button } from '@/components/ui/button';
import { ManuscriptProgress } from '@/hooks/useManuscriptProgress';

interface LessonsViewProps {
  progress: ManuscriptProgress;
  onCompleteLesson: (lessonId: string) => void;
}

export const LessonsView = ({ progress, onCompleteLesson }: LessonsViewProps) => {
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);
  
  const currentLesson = lessons.find(l => l.id === selectedLesson);
  const completedLessons = progress.completedSections.filter(s => s.startsWith('lesson-'));

  if (currentLesson) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen pb-24 px-4"
      >
        {/* Header */}
        <div className="pt-6 pb-4">
          <button
            onClick={() => setSelectedLesson(null)}
            className="flex items-center gap-2 text-manuscript-light/60 hover:text-manuscript-gold transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Voltar às aulas</span>
          </button>
          
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-manuscript-gold/20 flex items-center justify-center">
              <Video className="w-5 h-5 text-manuscript-gold" />
            </div>
            <span className="text-manuscript-gold font-medium">Aula {currentLesson.number}</span>
          </div>
          
          <h1 className="text-2xl font-heading text-manuscript-light mb-2">
            {currentLesson.title}
          </h1>
          <p className="text-manuscript-light/60">{currentLesson.subtitle}</p>
          <div className="flex items-center gap-2 mt-2 text-sm text-manuscript-light/40">
            <Clock className="w-4 h-4" />
            <span>{currentLesson.duration}</span>
          </div>
        </div>

        {/* Video Placeholder */}
        <div className="relative aspect-video bg-manuscript-dark/50 rounded-2xl border border-manuscript-gold/20 overflow-hidden mb-6">
          {currentLesson.videoUrl ? (
            <iframe
              src={currentLesson.videoUrl}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-manuscript-gold/20 flex items-center justify-center mb-4">
                <Play className="w-8 h-8 text-manuscript-gold ml-1" />
              </div>
              <p className="text-manuscript-light/60 text-sm">Vídeo será adicionado em breve</p>
            </div>
          )}
        </div>

        {/* Introduction */}
        <div className="bg-manuscript-dark/30 rounded-xl border border-manuscript-gold/10 p-5 mb-6">
          <h3 className="text-lg font-heading text-manuscript-light mb-3">Introdução</h3>
          <p className="text-manuscript-light/70 leading-relaxed whitespace-pre-line">
            {currentLesson.introduction}
          </p>
        </div>

        {/* What you'll learn */}
        <div className="bg-manuscript-dark/30 rounded-xl border border-manuscript-gold/10 p-5 mb-6">
          <h3 className="text-lg font-heading text-manuscript-light mb-3 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-manuscript-gold" />
            O que você vai aprender
          </h3>
          <ul className="space-y-3">
            {currentLesson.whatYouWillLearn.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-manuscript-gold mt-2 flex-shrink-0" />
                <span className="text-manuscript-light/70">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Deep Content */}
        <div className="bg-manuscript-dark/30 rounded-xl border border-manuscript-gold/10 p-5 mb-6">
          <h3 className="text-lg font-heading text-manuscript-light mb-3">Conteúdo Aprofundado</h3>
          <p className="text-manuscript-light/70 leading-relaxed whitespace-pre-line">
            {currentLesson.deepContent}
          </p>
        </div>

        {/* Complete Button */}
        <Button
          onClick={() => {
            onCompleteLesson(currentLesson.id);
            setSelectedLesson(null);
          }}
          disabled={completedLessons.includes(currentLesson.id)}
          className="w-full py-6 bg-gradient-to-r from-manuscript-gold to-manuscript-gold/80 text-manuscript-dark font-medium rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {completedLessons.includes(currentLesson.id) ? (
            <span className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              Aula Concluída
            </span>
          ) : (
            'Marcar como Concluída'
          )}
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen pb-24 px-4">
      {/* Header */}
      <div className="pt-8 pb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-manuscript-gold/30 to-manuscript-purple/30 flex items-center justify-center">
            <Video className="w-6 h-6 text-manuscript-gold" />
          </div>
          <div>
            <h1 className="text-2xl font-heading text-manuscript-light">{lessonsIntroduction.title}</h1>
            <p className="text-manuscript-light/60 text-sm">{lessonsIntroduction.subtitle}</p>
          </div>
        </div>
        
        <p className="text-manuscript-light/70 leading-relaxed">
          {lessonsIntroduction.description}
        </p>

        {/* Progress */}
        <div className="mt-4 flex items-center gap-3">
          <div className="flex-1 h-2 bg-manuscript-dark/50 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-manuscript-gold to-manuscript-gold/70 rounded-full transition-all duration-500"
              style={{ width: `${(completedLessons.length / lessons.length) * 100}%` }}
            />
          </div>
          <span className="text-sm text-manuscript-light/60">
            {completedLessons.length}/{lessons.length}
          </span>
        </div>
      </div>

      {/* Lessons List */}
      <div className="space-y-4">
        {lessons.map((lesson, index) => {
          const isCompleted = completedLessons.includes(lesson.id);
          
          return (
            <motion.button
              key={lesson.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedLesson(lesson.id)}
              className="w-full text-left bg-manuscript-dark/30 rounded-xl border border-manuscript-gold/10 p-4 hover:border-manuscript-gold/30 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  isCompleted 
                    ? 'bg-manuscript-gold/20' 
                    : 'bg-manuscript-dark/50'
                }`}>
                  {isCompleted ? (
                    <CheckCircle className="w-6 h-6 text-manuscript-gold" />
                  ) : (
                    <span className="text-xl font-heading text-manuscript-light/60">{lesson.number}</span>
                  )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-heading text-manuscript-light group-hover:text-manuscript-gold transition-colors">
                    {lesson.title}
                  </h3>
                  <p className="text-manuscript-light/60 text-sm mt-1 line-clamp-2">
                    {lesson.subtitle}
                  </p>
                  <div className="flex items-center gap-2 mt-2 text-xs text-manuscript-light/40">
                    <Clock className="w-3 h-3" />
                    <span>{lesson.duration}</span>
                  </div>
                </div>
                
                <ChevronRight className="w-5 h-5 text-manuscript-light/30 group-hover:text-manuscript-gold transition-colors" />
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};
