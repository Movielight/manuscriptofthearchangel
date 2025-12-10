import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useManuscriptProgress } from '@/hooks/useManuscriptProgress';
import { BottomNavigation, AppView } from './BottomNavigation';
import { Dashboard } from './Dashboard';
import { ReadingView } from './ReadingView';
import { PracticeView } from './PracticeView';
import { JournalView } from './JournalView';
import { SettingsPanel } from './SettingsPanel';

export const ManuscriptApp = () => {
  const [currentView, setCurrentView] = useState<AppView>('dashboard');
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-manuscript-dark via-manuscript-dark to-manuscript-purple/10">
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
      
      <BottomNavigation currentView={currentView} onViewChange={setCurrentView} />
    </div>
  );
};
