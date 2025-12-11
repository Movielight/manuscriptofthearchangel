import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useAuth } from '@/hooks/useAuth';
import { useProfile } from '@/hooks/useProfile';
import { useCloudProgress } from '@/hooks/useCloudProgress';
import { useCelebration } from '@/hooks/useCelebration';
import { BottomNavigation, AppView } from './BottomNavigation';
import { Dashboard } from './Dashboard';
import { ModulesView } from './ModulesView';
import { LessonsView } from './LessonsView';
import { PracticesHub } from './PracticesHub';
import { JourneyHub } from './JourneyHub';
import { SettingsPanel } from './SettingsPanel';
import { CelebrationOverlay } from './CelebrationOverlay';
import { OnboardingTutorial } from './OnboardingTutorial';
import { AIAssistant } from './AIAssistant';
import { Sparkles } from 'lucide-react';

const ONBOARDING_KEY = 'sacred-manuscript-onboarding-complete';

export const ManuscriptApp = () => {
  const navigate = useNavigate();
  const { user, loading: authLoading, signOut } = useAuth();
  const { profile, updateProfile, loading: profileLoading } = useProfile();
  const [currentView, setCurrentView] = useState<AppView>('dashboard');
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  
  const {
    progress,
    loading: progressLoading,
    completeSection,
    completeDay,
    addJournalEntry,
    deleteJournalEntry,
    toggleBookmark,
    setFontSize,
    setTheme,
    setLanguage,
    resetProgress,
  } = useCloudProgress();

  const { celebration, closeCelebration } = useCelebration(progress);

  // Redirect to auth if not logged in
  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/auth');
    }
  }, [user, authLoading, navigate]);

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

  const getThemeClass = () => {
    switch (progress.theme) {
      case 'sepia': return 'theme-sepia';
      case 'dark': return 'theme-dark';
      default: return 'theme-default';
    }
  };

  const getFontSizeClass = () => {
    switch (progress.fontSize) {
      case 'small': return 'font-size-small';
      case 'large': return 'font-size-large';
      default: return 'font-size-medium';
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/auth');
  };

  const renderView = () => {
    if (showSettings) {
      return (
        <SettingsPanel
          progress={progress}
          profile={profile}
          onUpdateProfile={updateProfile}
          onSetFontSize={setFontSize}
          onSetTheme={setTheme}
          onSetLanguage={setLanguage}
          onResetProgress={resetProgress}
          onSignOut={handleSignOut}
          onClose={() => setShowSettings(false)}
        />
      );
    }

    switch (currentView) {
      case 'dashboard':
        return (
          <Dashboard 
            progress={progress}
            firstName={profile?.first_name}
            onNavigate={setCurrentView}
            onOpenSettings={() => setShowSettings(true)}
          />
        );
      case 'modules':
        return (
          <ModulesView
            progress={progress}
            onCompleteSection={completeSection}
            language={progress.language}
          />
        );
      case 'lessons':
        return (
          <LessonsView
            progress={progress}
            onCompleteLesson={completeSection}
            language={progress.language}
          />
        );
      case 'practices':
        return (
          <PracticesHub 
            progress={progress} 
            onCompleteDay={completeDay}
            language={progress.language}
          />
        );
      case 'journey':
        return (
          <JourneyHub
            progress={progress}
            onAddEntry={addJournalEntry}
            onDeleteEntry={deleteJournalEntry}
            language={progress.language}
          />
        );
      default:
        return (
          <Dashboard 
            progress={progress}
            firstName={profile?.first_name}
            onNavigate={setCurrentView}
            onOpenSettings={() => setShowSettings(true)}
          />
        );
    }
  };

  // Show loading state
  if (authLoading || progressLoading || profileLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white via-background to-primary/10 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center gap-4"
        >
          <Sparkles className="w-12 h-12 text-manuscript-gold animate-pulse" />
          <p className="text-manuscript-text-muted font-body">Loading your journey...</p>
        </motion.div>
      </div>
    );
  }

  if (showOnboarding) {
    return <OnboardingTutorial onComplete={handleOnboardingComplete} language={progress.language} />;
  }

  return (
    <div className={`min-h-screen bg-gradient-to-b from-white via-background to-primary/10 ${getThemeClass()} ${getFontSizeClass()}`}>
      <div className="fixed inset-0 bg-gradient-to-b from-white/80 via-transparent to-primary/5 pointer-events-none" />
      
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={showSettings ? 'settings' : currentView}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>
      </div>
      
      {!showSettings && (
        <>
          <AIAssistant context={currentView} language={progress.language} />
          <BottomNavigation currentView={currentView} onViewChange={setCurrentView} language={progress.language} />
        </>
      )}
      
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
