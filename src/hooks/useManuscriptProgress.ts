import { useState, useEffect, useCallback } from 'react';

export interface JournalEntry {
  id: string;
  date: string;
  type: 'intention' | 'sign' | 'gratitude' | 'reflection';
  content: string;
}

export interface ManuscriptProgress {
  completedSections: string[];
  completedDays: number[];
  currentStreak: number;
  longestStreak: number;
  lastPracticeDate: string | null;
  journalEntries: JournalEntry[];
  bookmarks: string[];
  fontSize: 'small' | 'medium' | 'large';
  theme: 'default' | 'sepia' | 'dark';
  badges: string[];
  totalReadingTime: number;
  firstVisit: string;
}

const defaultProgress: ManuscriptProgress = {
  completedSections: [],
  completedDays: [],
  currentStreak: 0,
  longestStreak: 0,
  lastPracticeDate: null,
  journalEntries: [],
  bookmarks: [],
  fontSize: 'medium',
  theme: 'default',
  badges: [],
  totalReadingTime: 0,
  firstVisit: new Date().toISOString(),
};

const STORAGE_KEY = 'sacred-manuscript-progress';

export const useManuscriptProgress = () => {
  const [progress, setProgress] = useState<ManuscriptProgress>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? { ...defaultProgress, ...JSON.parse(saved) } : defaultProgress;
    } catch {
      return defaultProgress;
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const completeSection = useCallback((sectionId: string) => {
    setProgress(prev => {
      if (prev.completedSections.includes(sectionId)) return prev;
      const newBadges = [...prev.badges];
      if (!newBadges.includes('first_reading') && prev.completedSections.length === 0) {
        newBadges.push('first_reading');
      }
      if (!newBadges.includes('code_keeper') && sectionId === 'code') {
        newBadges.push('code_keeper');
      }
      return {
        ...prev,
        completedSections: [...prev.completedSections, sectionId],
        badges: newBadges,
      };
    });
  }, []);

  const completeDay = useCallback((day: number) => {
    setProgress(prev => {
      if (prev.completedDays.includes(day)) return prev;
      
      const today = new Date().toDateString();
      const lastPractice = prev.lastPracticeDate ? new Date(prev.lastPracticeDate).toDateString() : null;
      const yesterday = new Date(Date.now() - 86400000).toDateString();
      
      let newStreak = prev.currentStreak;
      if (lastPractice === yesterday || lastPractice === today) {
        newStreak = lastPractice === today ? prev.currentStreak : prev.currentStreak + 1;
      } else {
        newStreak = 1;
      }

      const newCompletedDays = [...prev.completedDays, day];
      const newBadges = [...prev.badges];
      
      if (newCompletedDays.length === 7 && !newBadges.includes('seven_day_warrior')) {
        newBadges.push('seven_day_warrior');
      }

      return {
        ...prev,
        completedDays: newCompletedDays,
        currentStreak: newStreak,
        longestStreak: Math.max(prev.longestStreak, newStreak),
        lastPracticeDate: new Date().toISOString(),
        badges: newBadges,
      };
    });
  }, []);

  const addJournalEntry = useCallback((type: JournalEntry['type'], content: string) => {
    const entry: JournalEntry = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      type,
      content,
    };
    setProgress(prev => {
      const newEntries = [...prev.journalEntries, entry];
      const newBadges = [...prev.badges];
      
      if (newEntries.filter(e => e.type === 'sign').length >= 5 && !newBadges.includes('sign_seeker')) {
        newBadges.push('sign_seeker');
      }
      
      const uniqueDays = new Set(newEntries.map(e => new Date(e.date).toDateString()));
      if (uniqueDays.size >= 7 && !newBadges.includes('journal_master')) {
        newBadges.push('journal_master');
      }

      return { ...prev, journalEntries: newEntries, badges: newBadges };
    });
  }, []);

  const deleteJournalEntry = useCallback((id: string) => {
    setProgress(prev => ({
      ...prev,
      journalEntries: prev.journalEntries.filter(e => e.id !== id),
    }));
  }, []);

  const toggleBookmark = useCallback((sectionId: string) => {
    setProgress(prev => ({
      ...prev,
      bookmarks: prev.bookmarks.includes(sectionId)
        ? prev.bookmarks.filter(b => b !== sectionId)
        : [...prev.bookmarks, sectionId],
    }));
  }, []);

  const setFontSize = useCallback((size: ManuscriptProgress['fontSize']) => {
    setProgress(prev => ({ ...prev, fontSize: size }));
  }, []);

  const setTheme = useCallback((theme: ManuscriptProgress['theme']) => {
    setProgress(prev => ({ ...prev, theme: theme }));
  }, []);

  const resetProgress = useCallback(() => {
    setProgress({ ...defaultProgress, firstVisit: new Date().toISOString() });
  }, []);

  return {
    progress,
    completeSection,
    completeDay,
    addJournalEntry,
    deleteJournalEntry,
    toggleBookmark,
    setFontSize,
    setTheme,
    resetProgress,
  };
};
