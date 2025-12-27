import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Check, ChevronRight, BookOpen, Sparkles, ScrollText } from 'lucide-react';
import { modules } from '@/data/manuscriptContent';
import { Button } from '@/components/ui/button';
import { ManuscriptProgress } from '@/hooks/useManuscriptProgress';
import { Language, getTranslation } from '@/data/translations';
import { moduleIllustrationMap } from '@/data/illustrationAssets';
import angelicGuidance from '@/assets/illustrations/angelic-guidance.png';

interface ModulesViewProps {
  progress: ManuscriptProgress;
  onCompleteSection: (sectionId: string) => void;
  language: Language;
}

// Module card component
const ModuleCard = ({ 
  module, 
  isCompleted, 
  onClick, 
  t 
}: { 
  module: typeof modules[0]; 
  isCompleted: boolean; 
  onClick: () => void;
  t: ReturnType<typeof getTranslation>['modules'];
}) => (
  <button
    onClick={onClick}
    className={`w-full text-left rounded-2xl p-5 transition-all duration-200 group ${
      isCompleted 
        ? 'bg-gradient-to-r from-manuscript-gold/10 to-amber-50/50 border border-manuscript-gold/30 shadow-md' 
        : 'bg-white/80 border border-primary/20 hover:border-manuscript-gold/40 hover:bg-white/90 shadow-sm hover:shadow-md hover:scale-[1.01] hover:-translate-y-0.5'
    }`}
  >
    <div className="flex items-start gap-4">
      <div className={`relative w-16 h-16 rounded-xl flex-shrink-0 overflow-hidden ${
        isCompleted ? 'ring-2 ring-manuscript-gold/40 shadow-md' : 'shadow-inner border border-manuscript-gold/10'
      }`}>
        <img 
          src={moduleIllustrationMap[module.icon]} 
          alt={module.title}
          className={`w-full h-full object-cover ${isCompleted ? '' : 'opacity-80'}`}
          loading="lazy"
          decoding="async"
        />
        {isCompleted && (
          <div className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-gradient-to-br from-manuscript-gold to-amber-500 shadow-lg flex items-center justify-center border-2 border-white z-10">
            <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
          </div>
        )}
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1 flex-wrap">
          <span className="inline-flex items-center gap-1 text-xs font-medium bg-gradient-to-r from-emerald-500/20 to-manuscript-gold/20 text-emerald-700 px-2 py-0.5 rounded-full border border-emerald-500/30">
            <ScrollText className="w-3 h-3" />
            {t.sacredManuscript}
          </span>
          <span className={`text-xs font-medium ${isCompleted ? 'text-manuscript-gold' : 'text-manuscript-gold/70'}`}>
            {t.module} {module.number}
          </span>
          {isCompleted && (
            <span className="text-xs text-emerald-600 font-medium bg-emerald-50 px-2 py-0.5 rounded-full">✓</span>
          )}
        </div>
        <h3 className={`text-lg font-heading transition-colors ${isCompleted ? 'text-manuscript-gold' : 'text-foreground group-hover:text-manuscript-gold'}`}>
          {module.title}
        </h3>
        <p className="text-muted-foreground text-sm mt-1 line-clamp-2">{module.subtitle}</p>
      </div>
      
      <ChevronRight className={`w-5 h-5 transition-colors ${isCompleted ? 'text-manuscript-gold' : 'text-muted-foreground group-hover:text-manuscript-gold'}`} />
    </div>
  </button>
);

export const ModulesView = ({ progress, onCompleteSection, language }: ModulesViewProps) => {
  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  
  const t = getTranslation(language).modules;
  const currentModule = modules.find(m => m.id === selectedModule);
  const completedModules = progress.completedSections.filter(s => s.startsWith('module-'));

  const handleBack = useCallback(() => {
    setSelectedModule(null);
    setCurrentSectionIndex(0);
  }, []);

  if (currentModule) {
    const isModuleCompleted = completedModules.includes(currentModule.id);
    const totalSections = currentModule.sections.length + 2;
    
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.15 }} className="min-h-screen pb-24 px-4">
        <div className="pt-6 pb-4">
          <button onClick={handleBack} className="flex items-center gap-2 text-muted-foreground hover:text-manuscript-gold transition-colors mb-4">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">{t.backToModules}</span>
          </button>
          
          <div className="relative h-28 -mx-4 mb-4 overflow-hidden rounded-b-2xl">
            <img src={moduleIllustrationMap[currentModule.icon]} alt={currentModule.title} className="w-full h-full object-contain bg-gradient-to-br from-manuscript-gold/10 to-primary/5" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          </div>

          <span className="text-manuscript-gold font-medium text-sm">{t.module} {currentModule.number}</span>
          <h1 className="text-2xl font-heading text-foreground mb-2">{currentModule.title}</h1>
          <p className="text-muted-foreground">{currentModule.subtitle}</p>
          
          <div className="mt-4 flex items-center gap-3">
            <div className="flex-1 h-2 bg-white/50 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-manuscript-gold to-manuscript-gold/70 rounded-full transition-all duration-300" style={{ width: `${((currentSectionIndex + 1) / totalSections) * 100}%` }} />
            </div>
            <span className="text-sm text-muted-foreground">{currentSectionIndex + 1}/{totalSections}</span>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={currentSectionIndex} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} transition={{ duration: 0.15 }} className="bg-white/70 rounded-xl border border-primary/20 p-5 mb-6">
            {currentSectionIndex === 0 ? (
              <>
                <h3 className="text-lg font-heading text-foreground mb-4">{t.introduction}</h3>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{currentModule.introduction}</p>
              </>
            ) : currentSectionIndex <= currentModule.sections.length ? (
              <>
                <h3 className="text-lg font-heading text-foreground mb-4">{currentModule.sections[currentSectionIndex - 1].title}</h3>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{currentModule.sections[currentSectionIndex - 1].content}</p>
              </>
            ) : currentSectionIndex === currentModule.sections.length + 1 ? (
              <>
                <h3 className="text-lg font-heading text-foreground mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-manuscript-gold" />
                  {currentModule.practicalExercise.title}
                </h3>
                <ul className="space-y-3">
                  {currentModule.practicalExercise.instructions.map((instruction, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-manuscript-gold/20 text-manuscript-gold text-sm flex items-center justify-center flex-shrink-0">{idx + 1}</span>
                      <span className="text-muted-foreground">{instruction}</span>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <>
                <h3 className="text-lg font-heading text-foreground mb-4">{t.finalReflection}</h3>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line italic">{currentModule.finalReflection}</p>
              </>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="flex gap-3">
          {currentSectionIndex > 0 && (
            <Button variant="outline" onClick={() => setCurrentSectionIndex(prev => prev - 1)} className="flex-1 border-manuscript-gold/30 text-foreground hover:bg-manuscript-gold/10">
              {t.previous}
            </Button>
          )}
          {currentSectionIndex < totalSections - 1 ? (
            <Button onClick={() => setCurrentSectionIndex(prev => prev + 1)} className="flex-1 bg-gradient-to-r from-manuscript-gold to-manuscript-gold/80 text-white">
              {t.next}
            </Button>
          ) : (
            <Button onClick={() => { onCompleteSection(currentModule.id); handleBack(); }} disabled={isModuleCompleted} className="flex-1 bg-gradient-to-r from-manuscript-gold to-manuscript-gold/80 text-white">
              {isModuleCompleted ? t.moduleCompleted : t.completeModule}
            </Button>
          )}
        </div>
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen pb-24 px-4">
      {/* Premium Header */}
      <div className="pt-6 pb-4">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-900/90 via-emerald-800/80 to-manuscript-gold/40 p-5 mb-6 border border-emerald-500/30 shadow-lg"
        >
          {/* Background glow effect */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-manuscript-gold/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-emerald-400/20 rounded-full blur-2xl" />
          
          <div className="relative z-10 flex items-start gap-4">
            <div className="w-20 h-20 rounded-xl overflow-hidden border-2 border-manuscript-gold/50 shadow-lg flex-shrink-0">
              <img 
                src={angelicGuidance} 
                alt="Archangel Raphael"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-manuscript-gold" />
                <span className="text-xs font-medium text-manuscript-gold uppercase tracking-wider">
                  {t.sacredTeachings}
                </span>
              </div>
              
              <h1 className="text-xl font-heading text-white mb-1">
                {t.manuscriptModules}
              </h1>
              <p className="text-emerald-100/80 text-sm">
                {t.modulesOfWisdom}
              </p>
            </div>
          </div>
          
          {/* Sacred seal */}
          <div className="absolute top-3 right-3 w-10 h-10 rounded-full bg-gradient-to-br from-manuscript-gold to-amber-600 flex items-center justify-center shadow-lg border-2 border-white/20">
            <ScrollText className="w-5 h-5 text-white" />
          </div>
        </motion.div>
        
        {/* Description card */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="bg-gradient-to-r from-emerald-50/80 to-manuscript-gold/10 rounded-xl p-4 mb-6 border border-emerald-200/50"
        >
          <p className="text-sm text-emerald-800 leading-relaxed">
            {t.sacredManuscriptsDesc}
          </p>
        </motion.div>
        
        {/* Progress section */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex items-center gap-3 mb-2"
        >
          <span className="text-sm font-medium text-foreground">{t.yourProgress}</span>
          <div className="flex-1 h-2.5 bg-white/50 rounded-full overflow-hidden border border-manuscript-gold/20">
            <div 
              className="h-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-manuscript-gold rounded-full transition-all duration-500" 
              style={{ width: `${(completedModules.length / modules.length) * 100}%` }} 
            />
          </div>
          <span className="text-sm font-medium text-manuscript-gold">{completedModules.length}/{modules.length}</span>
        </motion.div>
      </div>

      {/* Module cards */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="space-y-4"
      >
        {modules.map((module, index) => (
          <motion.div
            key={module.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.35 + index * 0.05 }}
          >
            <ModuleCard 
              module={module} 
              isCompleted={completedModules.includes(module.id)} 
              onClick={() => setSelectedModule(module.id)} 
              t={t} 
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
