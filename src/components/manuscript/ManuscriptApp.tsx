import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useManuscriptProgress } from '@/hooks/useManuscriptProgress';
import { useCelebration } from '@/hooks/useCelebration';
import { BottomNavigation, AppView } from './BottomNavigation';
import { Dashboard } from './Dashboard';
import { ReadingView } from './ReadingView';
import { PracticeView } from './PracticeView';
import { JournalView } from './JournalView';
import { SettingsPanel } from './SettingsPanel';
import { CelebrationOverlay } from './CelebrationOverlay';
import { OnboardingTutorial } from './OnboardingTutorial';

const ONBOARDING_KEY = 'sacred-manuscript-onboarding-complete';

export const ManuscriptApp = () => {
  const [currentView, setCurrentView] = useState<AppView>('dashboard');
  const [showOnboarding, setShowOnboarding] = useState(false);
  
  const {
    progress,
    completeSection,
    completeDay,
    addJournalEntry,
    deleteJournalEntry,
    toggleBookmark,
    setFontSize,
    setTheme,
    resetProgress,
  } = useManuscriptProgress();

  const { celebration, closeCelebration } = useCelebration(progress);

  // Check if onboarding should be shown
  useEffect(() => {
    const hasCompletedOnboarding = localStorage.getItem(ONBOARDING_KEY);
    if (!hasCompletedOnboarding) {
      setShowOnboarding(true);
    }
  }, []);

  const handleOnboardingComplete = () => {
    localStorage.setItem(ONBOARDING_KEY, 'true');
    setShowOnboarding(false);
  };

  // Get theme class based on progress.theme
  const getThemeClass = () => {
    switch (progress.theme) {
      case 'sepia': return 'theme-sepia';
      case 'dark': return 'theme-dark';
      default: return 'theme-default';
    }
  };

  // Get font size class
  const getFontSizeClass = () => {
    switch (progress.fontSize) {
      case 'small': return 'font-size-small';
      case 'large': return 'font-size-large';
      default: return 'font-size-medium';
    }
  };

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard progress={progress} onNavigate={setCurrentView} />;
      case 'read':
        return (
          <ReadingView
            progress={progress}
            onCompleteSection={completeSection}
            onToggleBookmark={toggleBookmark}
          />
        );
      case 'practice':
        return <PracticeView progress={progress} onCompleteDay={completeDay} />;
      case 'journal':
        return (
          <JournalView
            progress={progress}
            onAddEntry={addJournalEntry}
            onDeleteEntry={deleteJournalEntry}
          />
        );
      case 'settings':
        return (
          <SettingsPanel
            progress={progress}
            onSetFontSize={setFontSize}
            onSetTheme={setTheme}
            onResetProgress={resetProgress}
          />
        );
      default:
        return <Dashboard progress={progress} onNavigate={setCurrentView} />;
    }
  };

  // Show onboarding for new users
  if (showOnboarding) {
    return <OnboardingTutorial onComplete={handleOnboardingComplete} />;
  }

  return (
    <div className={`min-h-screen bg-manuscript-dark ${getThemeClass()} ${getFontSizeClass()}`}>
      {/* Background gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-manuscript-dark via-manuscript-dark to-manuscript-purple/20 pointer-events-none" />
      
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>
      </div>
      
      <BottomNavigation currentView={currentView} onViewChange={setCurrentView} />
      
      {/* Celebration overlay for badges and milestones */}
      <CelebrationOverlay
        isVisible={celebration.isVisible}
        type={celebration.type}
        title={celebration.title}
        message={celebration.message}
        onClose={closeCelebration}
      />
    </div>
  );
};
