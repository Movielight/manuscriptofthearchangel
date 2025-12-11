import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scroll, Feather, Eye, Scale, Flower2, ArrowLeft, CheckCircle, ChevronRight, BookOpen } from 'lucide-react';
import { modules } from '@/data/manuscriptContent';
import { Button } from '@/components/ui/button';
import { ManuscriptProgress } from '@/hooks/useManuscriptProgress';
import { Language, getTranslation } from '@/data/translations';

interface ModulesViewProps {
  progress: ManuscriptProgress;
  onCompleteSection: (sectionId: string) => void;
  language: Language;
}

const iconMap: { [key: string]: React.ReactNode } = {
  scroll: <Scroll className="w-6 h-6" />,
  wings: <Feather className="w-6 h-6" />,
  eye: <Eye className="w-6 h-6" />,
  balance: <Scale className="w-6 h-6" />,
  lotus: <Flower2 className="w-6 h-6" />,
};

export const ModulesView = ({ progress, onCompleteSection, language }: ModulesViewProps) => {
  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  
  const t = getTranslation(language).modules;
  const currentModule = modules.find(m => m.id === selectedModule);
  const completedModules = progress.completedSections.filter(s => s.startsWith('module-'));

  if (currentModule) {
    const isModuleCompleted = completedModules.includes(currentModule.id);
    const totalSections = currentModule.sections.length + 2; // sections + exercise + reflection
    
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
            onClick={() => {
              setSelectedModule(null);
              setCurrentSectionIndex(0);
            }}
            className="flex items-center gap-2 text-muted-foreground hover:text-manuscript-gold transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">{t.backToModules}</span>
          </button>
          
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-manuscript-gold/20 flex items-center justify-center text-manuscript-gold">
              {iconMap[currentModule.icon]}
            </div>
            <span className="text-manuscript-gold font-medium">{t.module} {currentModule.number}</span>
          </div>
          
          <h1 className="text-2xl font-heading text-foreground mb-2">
            {currentModule.title}
          </h1>
          <p className="text-muted-foreground">{currentModule.subtitle}</p>
          
          {/* Progress */}
          <div className="mt-4 flex items-center gap-3">
            <div className="flex-1 h-2 bg-white/50 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-manuscript-gold to-manuscript-gold/70 rounded-full transition-all duration-500"
                style={{ width: `${((currentSectionIndex + 1) / totalSections) * 100}%` }}
              />
            </div>
            <span className="text-sm text-muted-foreground">
              {currentSectionIndex + 1}/{totalSections}
            </span>
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSectionIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="bg-white/70 backdrop-blur-sm rounded-xl border border-primary/20 p-5 mb-6"
          >
            {currentSectionIndex === 0 ? (
              <>
                <h3 className="text-lg font-heading text-foreground mb-4">{t.introduction}</h3>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {currentModule.introduction}
                </p>
              </>
            ) : currentSectionIndex <= currentModule.sections.length ? (
              <>
                <h3 className="text-lg font-heading text-foreground mb-4">
                  {currentModule.sections[currentSectionIndex - 1].title}
                </h3>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {currentModule.sections[currentSectionIndex - 1].content}
                </p>
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
                      <span className="w-6 h-6 rounded-full bg-manuscript-gold/20 text-manuscript-gold text-sm flex items-center justify-center flex-shrink-0">
                        {idx + 1}
                      </span>
                      <span className="text-muted-foreground">{instruction}</span>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <>
                <h3 className="text-lg font-heading text-foreground mb-4">{t.finalReflection}</h3>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line italic">
                  {currentModule.finalReflection}
                </p>
              </>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex gap-3">
          {currentSectionIndex > 0 && (
            <Button
              variant="outline"
              onClick={() => setCurrentSectionIndex(prev => prev - 1)}
              className="flex-1 border-manuscript-gold/30 text-foreground hover:bg-manuscript-gold/10"
            >
              {t.previous}
            </Button>
          )}
          
          {currentSectionIndex < totalSections - 1 ? (
            <Button
              onClick={() => setCurrentSectionIndex(prev => prev + 1)}
              className="flex-1 bg-gradient-to-r from-manuscript-gold to-manuscript-gold/80 text-white"
            >
              {t.next}
            </Button>
          ) : (
            <Button
              onClick={() => {
                onCompleteSection(currentModule.id);
                setSelectedModule(null);
                setCurrentSectionIndex(0);
              }}
              disabled={isModuleCompleted}
              className="flex-1 bg-gradient-to-r from-manuscript-gold to-manuscript-gold/80 text-white"
            >
              {isModuleCompleted ? t.moduleCompleted : t.completeModule}
            </Button>
          )}
        </div>
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen pb-24 px-4">
      {/* Header */}
      <div className="pt-8 pb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-manuscript-gold/30 to-primary/20 flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-manuscript-gold" />
          </div>
          <div>
            <h1 className="text-2xl font-heading text-foreground">{t.manuscriptModules}</h1>
            <p className="text-muted-foreground text-sm">{t.modulesOfWisdom}</p>
          </div>
        </div>
        
        {/* Progress */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-2 bg-white/50 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-manuscript-gold to-manuscript-gold/70 rounded-full transition-all duration-500"
              style={{ width: `${(completedModules.length / modules.length) * 100}%` }}
            />
          </div>
          <span className="text-sm text-muted-foreground">
            {completedModules.length}/{modules.length}
          </span>
        </div>
      </div>

      {/* Modules List */}
      <div className="space-y-4">
        {modules.map((module, index) => {
          const isCompleted = completedModules.includes(module.id);
          
          return (
            <motion.button
              key={module.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedModule(module.id)}
              className="w-full text-left bg-white/70 backdrop-blur-sm rounded-xl border border-primary/20 p-4 hover:border-manuscript-gold/40 hover:bg-white/90 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                  isCompleted 
                    ? 'bg-manuscript-gold/20 text-manuscript-gold' 
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {isCompleted ? (
                    <CheckCircle className="w-6 h-6" />
                  ) : (
                    iconMap[module.icon]
                  )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs text-manuscript-gold/70">{t.module} {module.number}</span>
                  </div>
                  <h3 className="text-lg font-heading text-foreground group-hover:text-manuscript-gold transition-colors">
                    {module.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1 line-clamp-2">
                    {module.subtitle}
                  </p>
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