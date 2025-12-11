import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Video, Play, Clock, CheckCircle, ChevronRight, BookOpen, ArrowLeft } from 'lucide-react';
import { lessons, lessonsIntroduction } from '@/data/lessonsContent';
import { Button } from '@/components/ui/button';
import { ManuscriptProgress } from '@/hooks/useManuscriptProgress';
import { Language, getTranslation } from '@/data/translations';

interface LessonsViewProps {
  progress: ManuscriptProgress;
  onCompleteLesson: (lessonId: string) => void;
  language: Language;
}

// Convert YouTube URLs to embed format
const convertToEmbedUrl = (url: string): string => {
  // Handle youtu.be short URLs
  const shortMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
  if (shortMatch) {
    return `https://www.youtube.com/embed/${shortMatch[1]}`;
  }
  
  // Handle youtube.com/watch URLs
  const watchMatch = url.match(/youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/);
  if (watchMatch) {
    return `https://www.youtube.com/embed/${watchMatch[1]}`;
  }
  
  // Already embed URL or other format
  return url;
};

export const LessonsView = ({ progress, onCompleteLesson, language }: LessonsViewProps) => {
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);
  
  const t = getTranslation(language).lessons;
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
            className="flex items-center gap-2 text-muted-foreground hover:text-manuscript-gold transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">{t.backToLessons}</span>
          </button>
          
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-manuscript-gold/20 flex items-center justify-center">
              <Video className="w-5 h-5 text-manuscript-gold" />
            </div>
            <span className="text-manuscript-gold font-medium">{t.lesson} {currentLesson.number}</span>
          </div>
          
          <h1 className="text-2xl font-heading text-foreground mb-2">
            {currentLesson.title}
          </h1>
          <p className="text-muted-foreground">{currentLesson.subtitle}</p>
          <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>{currentLesson.duration}</span>
          </div>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video bg-white/50 rounded-2xl border border-primary/20 overflow-hidden mb-6">
          {currentLesson.videoUrl ? (
            <iframe
              src={convertToEmbedUrl(currentLesson.videoUrl)}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-manuscript-gold/20 flex items-center justify-center mb-4">
                <Play className="w-8 h-8 text-manuscript-gold ml-1" />
              </div>
              <p className="text-muted-foreground text-sm">{t.videoComingSoon}</p>
            </div>
          )}
        </div>

        {/* Introduction */}
        <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-primary/20 p-5 mb-6">
          <h3 className="text-lg font-heading text-foreground mb-3">{t.introduction}</h3>
          <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
            {currentLesson.introduction}
          </p>
        </div>

        {/* What you'll learn */}
        <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-primary/20 p-5 mb-6">
          <h3 className="text-lg font-heading text-foreground mb-3 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-manuscript-gold" />
            {t.whatYouWillLearn}
          </h3>
          <ul className="space-y-3">
            {currentLesson.whatYouWillLearn.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-manuscript-gold mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Deep Content */}
        <div className="bg-white/70 backdrop-blur-sm rounded-xl border border-primary/20 p-5 mb-6">
          <h3 className="text-lg font-heading text-foreground mb-3">{t.deepContent}</h3>
          <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
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
          className="w-full py-6 bg-gradient-to-r from-manuscript-gold to-manuscript-gold/80 text-white font-medium rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50"
        >
          {completedLessons.includes(currentLesson.id) ? (
            <span className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              {t.lessonCompleted}
            </span>
          ) : (
            t.markAsComplete
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
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-manuscript-gold/30 to-primary/20 flex items-center justify-center">
            <Video className="w-6 h-6 text-manuscript-gold" />
          </div>
          <div>
            <h1 className="text-2xl font-heading text-foreground">{lessonsIntroduction.title}</h1>
            <p className="text-muted-foreground text-sm">{lessonsIntroduction.subtitle}</p>
          </div>
        </div>
        
        <p className="text-muted-foreground leading-relaxed">
          {lessonsIntroduction.description}
        </p>

        {/* Progress */}
        <div className="mt-4 flex items-center gap-3">
          <div className="flex-1 h-2 bg-white/50 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-manuscript-gold to-manuscript-gold/70 rounded-full transition-all duration-500"
              style={{ width: `${(completedLessons.length / lessons.length) * 100}%` }}
            />
          </div>
          <span className="text-sm text-muted-foreground">
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
              className="w-full text-left bg-white/70 backdrop-blur-sm rounded-xl border border-primary/20 p-4 hover:border-manuscript-gold/40 hover:bg-white/90 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  isCompleted 
                    ? 'bg-manuscript-gold/20' 
                    : 'bg-muted'
                }`}>
                  {isCompleted ? (
                    <CheckCircle className="w-6 h-6 text-manuscript-gold" />
                  ) : (
                    <span className="text-xl font-heading text-muted-foreground">{lesson.number}</span>
                  )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-heading text-foreground group-hover:text-manuscript-gold transition-colors">
                    {lesson.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1 line-clamp-2">
                    {lesson.subtitle}
                  </p>
                  <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    <span>{lesson.duration}</span>
                  </div>
                </div>
                
                <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-manuscript-gold transition-colors" />
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
};