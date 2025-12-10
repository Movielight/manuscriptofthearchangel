import { motion } from 'framer-motion';
import { Home, BookOpen, Sparkles, NotebookPen, Settings } from 'lucide-react';

export type AppView = 'dashboard' | 'read' | 'practice' | 'journal' | 'settings';

interface BottomNavigationProps {
  currentView: AppView;
  onViewChange: (view: AppView) => void;
}

const navItems: { view: AppView; icon: typeof Home; label: string }[] = [
  { view: 'dashboard', icon: Home, label: 'Home' },
  { view: 'read', icon: BookOpen, label: 'Read' },
  { view: 'practice', icon: Sparkles, label: 'Practice' },
  { view: 'journal', icon: NotebookPen, label: 'Journal' },
  { view: 'settings', icon: Settings, label: 'Settings' },
];

export const BottomNavigation = ({ currentView, onViewChange }: BottomNavigationProps) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-manuscript-dark/95 backdrop-blur-lg border-t border-manuscript-gold/20">
      <div className="flex justify-around items-center h-16 max-w-lg mx-auto px-2">
        {navItems.map(({ view, icon: Icon, label }) => {
          const isActive = currentView === view;
          return (
            <button
              key={view}
              onClick={() => onViewChange(view)}
              className="relative flex flex-col items-center justify-center w-16 h-full transition-colors"
            >
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-x-2 top-1 h-1 bg-manuscript-gold rounded-full"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
              <Icon
                className={`w-5 h-5 transition-colors ${
                  isActive ? 'text-manuscript-gold' : 'text-manuscript-light/60'
                }`}
              />
              <span
                className={`text-xs mt-1 font-body transition-colors ${
                  isActive ? 'text-manuscript-gold' : 'text-manuscript-light/60'
                }`}
              >
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
