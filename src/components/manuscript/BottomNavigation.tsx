import { motion } from 'framer-motion';
import { Home, BookOpen, Video, Sparkles, Compass } from 'lucide-react';
import { getTranslation, Language } from '@/data/translations';

export type AppView = 'dashboard' | 'modules' | 'lessons' | 'practices' | 'journey' | 'settings';

interface BottomNavigationProps {
  currentView: AppView;
  onViewChange: (view: AppView) => void;
  language: Language;
}

export const BottomNavigation = ({ currentView, onViewChange, language }: BottomNavigationProps) => {
  const t = getTranslation(language).nav;

  const navItems: { view: AppView; icon: typeof Home; label: string }[] = [
    { view: 'dashboard', icon: Home, label: t.home },
    { view: 'modules', icon: BookOpen, label: t.modules },
    { view: 'lessons', icon: Video, label: t.lessons },
    { view: 'practices', icon: Sparkles, label: t.practices },
    { view: 'journey', icon: Compass, label: t.journey },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50">
      {/* Gradient blur background */}
      <div className="absolute inset-0 bg-gradient-to-t from-manuscript-dark via-manuscript-dark/98 to-manuscript-dark/90 backdrop-blur-xl" />
      
      {/* Top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-manuscript-gold/40 to-transparent" />
      
      <div className="relative flex justify-around items-center h-20 max-w-lg mx-auto px-2 pb-2">
        {navItems.map(({ view, icon: Icon, label }) => {
          const isActive = currentView === view;
          return (
            <button
              key={view}
              onClick={() => onViewChange(view)}
              className="relative flex flex-col items-center justify-center w-16 h-full transition-all duration-200"
            >
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute -top-1 w-10 h-1 bg-gradient-to-r from-manuscript-gold/50 via-manuscript-gold to-manuscript-gold/50 rounded-full shadow-lg"
                  style={{ boxShadow: '0 0 20px hsl(43 80% 55% / 0.5)' }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
              <div className={`p-2 rounded-xl transition-all duration-200 ${
                isActive ? 'bg-manuscript-gold/15' : ''
              }`}>
                <Icon
                  className={`w-5 h-5 transition-all duration-200 ${
                    isActive ? 'text-manuscript-gold scale-110' : 'text-manuscript-light/60'
                  }`}
                />
              </div>
              <span
                className={`text-xs mt-1 font-body transition-all duration-200 ${
                  isActive ? 'text-manuscript-gold font-medium' : 'text-manuscript-light/60'
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
