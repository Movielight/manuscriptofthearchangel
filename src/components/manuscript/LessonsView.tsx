import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Check, ChevronRight, BookOpen, ArrowLeft, Sparkles } from 'lucide-react';
import { lessons, lessonsIntroduction } from '@/data/lessonsContent';
import { Button } from '@/components/ui/button';
import { ManuscriptProgress } from '@/hooks/useManuscriptProgress';
import { Language, getTranslation } from '@/data/translations';
import { illustrations } from '@/data/illustrationAssets';

interface LessonsViewProps {
  progress: ManuscriptProgress;
  onCompleteLesson: (lessonId: string) => void;
  language: Language;
}

// Convert YouTube URLs to embed format
const convertToEmbedUrl = (url: string): string => {
  const shortMatch = url.match(/youtu\.be\/([a-zA-Z0-9_-]+)/);
  if (shortMatch) {
    return `https://www.youtube.com/embed/${shortMatch[1]}`;
  }
  const watchMatch = url.match(/youtube\.com\/watch\?v=([a-zA-Z0-9_-]+)/);
  if (watchMatch) {
    return `https://www.youtube.com/embed/${watchMatch[1]}`;
  }
  return url;
};

// Lesson card component
const LessonCard = ({ 
  lesson, 
  isCompleted, 
  onClick, 
  t
}: { 
  lesson: typeof lessons[0]; 
  isCompleted: boolean; 
  onClick: () => void;
  t: ReturnType<typeof getTranslation>['lessons'];
}) => {
  const lessonIllustration = illustrations.lessons[lesson.id as keyof typeof illustrations.lessons];
  
  return (
    <button
      onClick={onClick}
      className={`w-full text-left rounded-2xl p-5 transition-all duration-200 group shadow-sm hover:shadow-md ${
        isCompleted 
          ? 'bg-gradient-to-r from-manuscript-gold/10 to-amber-50/60 border-2 border-manuscript-gold/40' 
          : 'bg-white/80 border border-primary/20 hover:border-manuscript-gold/40 hover:bg-white/90 hover:scale-[1.01] hover:-translate-y-1'
      }`}
    >
      <div className="flex items-start gap-4">
        <div className={`relative w-16 h-16 rounded-xl overflow-hidden shadow-md flex-shrink-0 ${
          isCompleted ? 'ring-2 ring-manuscript-gold/50' : 'ring-1 ring-manuscript-gold/20'
        }`}>
          <img 
            src={lessonIllustration} 
            alt={lesson.title}
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute bottom-0 left-0 w-6 h-6 rounded-tr-lg bg-gradient-to-br from-manuscript-gold to-amber-500 flex items-center justify-center">
            <span className="text-xs font-bold text-white">{lesson.number}</span>
          </div>
          {isCompleted && (
            <div className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-gradient-to-br from-manuscript-gold to-amber-500 shadow-lg flex items-center justify-center border-2 border-white z-10">
              <Check className="w-3.5 h-3.5 text-white" />
            </div>
          )}
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className={`text-lg font-heading transition-colors ${
            isCompleted ? 'text-manuscript-gold' : 'text-foreground group-hover:text-manuscript-gold'
          }`}>
            {lesson.title}
          </h3>
          <p className="text-muted-foreground text-sm mt-1 line-clamp-2">{lesson.subtitle}</p>
          <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
            <Clock className="w-3.5 h-3.5 text-manuscript-gold/70" />
            <span>{lesson.duration}</span>
          </div>
        </div>
        
        <ChevronRight className={`w-5 h-5 transition-colors ${
          isCompleted ? 'text-manuscript-gold' : 'text-muted-foreground group-hover:text-manuscript-gold'
        }`} />
      </div>
    </button>
  );
};

export const LessonsView = ({ progress, onCompleteLesson, language }: LessonsViewProps) => {
  const [selectedLesson, setSelectedLesson] = useState<string | null>(null);
  
  const t = getTranslation(language).lessons;
  const currentLesson = lessons.find(l => l.id === selectedLesson);
  const completedLessons = progress.completedSections.filter(s => s.startsWith('lesson-'));

  if (currentLesson) {
    const lessonIllustration = illustrations.lessons[currentLesson.id as keyof typeof illustrations.lessons];
    
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.15 }}
        className="min-h-screen pb-24 px-4"
      >
        <div className="pt-6 pb-4">
          <button
            onClick={() => setSelectedLesson(null)}
            className="flex items-center gap-2 text-muted-foreground hover:text-manuscript-gold transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">{t.backToLessons}</span>
          </button>
          
          <div className="flex items-center gap-4 mb-4">
            <div className="relative w-16 h-16 rounded-xl overflow-hidden shadow-lg ring-2 ring-manuscript-gold/30 flex-shrink-0">
              <img src={lessonIllustration} alt={currentLesson.title} className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 w-6 h-6 rounded-tr-lg bg-gradient-to-br from-manuscript-gold to-amber-500 flex items-center justify-center">
                <span className="text-xs font-bold text-white">{currentLesson.number}</span>
              </div>
            </div>
            <div>
              <span className="text-manuscript-gold font-medium text-sm">{t.lesson} {currentLesson.number}</span>
              <h1 className="text-xl font-heading text-foreground">{currentLesson.title}</h1>
            </div>
          </div>
          
          <p className="text-muted-foreground">{currentLesson.subtitle}</p>
          <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4 text-manuscript-gold/70" />
            <span>{currentLesson.duration}</span>
          </div>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video bg-gradient-to-br from-white/80 to-manuscript-gold/5 rounded-2xl border-2 border-manuscript-gold/30 shadow-lg overflow-hidden mb-6">
          {currentLesson.videoUrl ? (
            <iframe
              src={convertToEmbedUrl(currentLesson.videoUrl)}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="text-muted-foreground text-sm">{t.videoComingSoon}</p>
            </div>
          )}
        </div>

        {/* Introduction */}
        <div className="bg-gradient-to-br from-white/80 to-manuscript-gold/5 rounded-xl border border-manuscript-gold/20 p-5 mb-6 shadow-sm">
          <h3 className="text-lg font-heading text-foreground mb-3 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-manuscript-gold" />
            {t.introduction}
          </h3>
          <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{currentLesson.introduction}</p>
        </div>

        {/* What you'll learn */}
        <div className="bg-gradient-to-br from-white/80 to-manuscript-gold/5 rounded-xl border border-manuscript-gold/20 p-5 mb-6 shadow-sm">
          <h3 className="text-lg font-heading text-foreground mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-manuscript-gold" />
            {t.whatYouWillLearn}
          </h3>
          <ul className="space-y-3">
            {currentLesson.whatYouWillLearn.map((item, index) => (
              <li key={index} className="flex items-start gap-3 bg-white/50 rounded-lg p-3 border border-manuscript-gold/10">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-manuscript-gold to-amber-500 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <span className="text-xs font-bold text-white">{index + 1}</span>
                </div>
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Deep Content */}
        <div className="bg-gradient-to-br from-white/80 to-manuscript-gold/5 rounded-xl border border-manuscript-gold/20 p-5 mb-6 shadow-sm">
          <h3 className="text-lg font-heading text-foreground mb-3">{t.deepContent}</h3>
          <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{currentLesson.deepContent}</p>
        </div>

        {/* Complete Button */}
        <Button
          onClick={() => {
            onCompleteLesson(currentLesson.id);
            setSelectedLesson(null);
          }}
          disabled={completedLessons.includes(currentLesson.id)}
          className="w-full py-6 bg-gradient-to-r from-manuscript-gold to-amber-500 text-white font-medium rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 shadow-lg"
        >
          {completedLessons.includes(currentLesson.id) ? (
            <span className="flex items-center gap-2">
              <Check className="w-5 h-5" />
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
      <div className="pt-8 pb-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-xl overflow-hidden shadow-lg ring-2 ring-manuscript-gold/20">
            <img src={illustrations.videoLessons} alt="Video Lessons" className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="text-2xl font-heading text-foreground">{lessonsIntroduction.title}</h1>
            <p className="text-muted-foreground text-sm">{lessonsIntroduction.subtitle}</p>
          </div>
        </div>
        
        <p className="text-muted-foreground leading-relaxed">{lessonsIntroduction.description}</p>

        <div className="mt-4 flex items-center gap-3">
          <div className="flex-1 h-3 bg-white/60 rounded-full overflow-hidden shadow-inner border border-manuscript-gold/20">
            <div 
              className="h-full bg-gradient-to-r from-manuscript-gold via-amber-400 to-manuscript-gold rounded-full transition-all duration-300"
              style={{ width: `${(completedLessons.length / lessons.length) * 100}%` }}
            />
          </div>
          <span className="text-sm font-medium text-manuscript-gold">
            {completedLessons.length}/{lessons.length}
          </span>
        </div>
      </div>

      <div className="space-y-4">
        {lessons.map((lesson) => (
          <LessonCard
            key={lesson.id}
            lesson={lesson}
            isCompleted={completedLessons.includes(lesson.id)}
            onClick={() => setSelectedLesson(lesson.id)}
            t={t}
          />
        ))}
      </div>
    </div>
  );
};
