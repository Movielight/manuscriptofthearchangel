import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { Language } from '@/data/translations';
import { Json } from '@/integrations/supabase/types';

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
  language: Language;
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
  language: 'en',
  badges: [],
  totalReadingTime: 0,
  firstVisit: new Date().toISOString(),
};

export const useCloudProgress = () => {
  const { user } = useAuth();
  const [progress, setProgress] = useState<ManuscriptProgress>(defaultProgress);
  const [loading, setLoading] = useState(true);

  // Load progress from database
  useEffect(() => {
    const loadProgress = async () => {
      if (!user) {
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('user_progress')
          .select('*')
          .eq('user_id', user.id)
          .maybeSingle();

        if (error) {
          console.error('Error loading progress:', error);
          setLoading(false);
          return;
        }

        if (data) {
          setProgress({
            completedSections: (data.completed_sections as string[]) || [],
            completedDays: [],
            currentStreak: data.streak || 0,
            longestStreak: data.longest_streak || 0,
            lastPracticeDate: data.last_activity_date,
            journalEntries: (data.journal_entries as unknown as JournalEntry[]) || [],
            bookmarks: [],
            fontSize: (data.font_size as ManuscriptProgress['fontSize']) || 'medium',
            theme: (data.theme as ManuscriptProgress['theme']) || 'default',
            language: (data.language as Language) || 'en',
            badges: (data.badges as string[]) || [],
            totalReadingTime: 0,
            firstVisit: data.created_at || new Date().toISOString(),
          });
        }
      } catch (err) {
        console.error('Error loading progress:', err);
      } finally {
        setLoading(false);
      }
    };

    loadProgress();
  }, [user]);

  // Save progress to database
  const saveProgress = useCallback(async (newProgress: ManuscriptProgress) => {
    if (!user) return;

    try {
      await supabase
        .from('user_progress')
        .update({
          completed_sections: newProgress.completedSections as unknown as Json,
          journal_entries: newProgress.journalEntries as unknown as Json,
          badges: newProgress.badges as unknown as Json,
          streak: newProgress.currentStreak,
          longest_streak: newProgress.longestStreak,
          last_activity_date: newProgress.lastPracticeDate,
          font_size: newProgress.fontSize,
          theme: newProgress.theme,
          language: newProgress.language,
        })
        .eq('user_id', user.id);
    } catch (err) {
      console.error('Error saving progress:', err);
    }
  }, [user]);

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
      const newProgress = {
        ...prev,
        completedSections: [...prev.completedSections, sectionId],
        badges: newBadges,
      };
      saveProgress(newProgress);
      return newProgress;
    });
  }, [saveProgress]);

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

      const newProgress = {
        ...prev,
        completedDays: newCompletedDays,
        currentStreak: newStreak,
        longestStreak: Math.max(prev.longestStreak, newStreak),
        lastPracticeDate: new Date().toISOString(),
        badges: newBadges,
      };
      saveProgress(newProgress);
      return newProgress;
    });
  }, [saveProgress]);

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

      const newProgress = { ...prev, journalEntries: newEntries, badges: newBadges };
      saveProgress(newProgress);
      return newProgress;
    });
  }, [saveProgress]);

  const deleteJournalEntry = useCallback((id: string) => {
    setProgress(prev => {
      const newProgress = {
        ...prev,
        journalEntries: prev.journalEntries.filter(e => e.id !== id),
      };
      saveProgress(newProgress);
      return newProgress;
    });
  }, [saveProgress]);

  const toggleBookmark = useCallback((sectionId: string) => {
    setProgress(prev => ({
      ...prev,
      bookmarks: prev.bookmarks.includes(sectionId)
        ? prev.bookmarks.filter(b => b !== sectionId)
        : [...prev.bookmarks, sectionId],
    }));
  }, []);

  const setFontSize = useCallback((size: ManuscriptProgress['fontSize']) => {
    setProgress(prev => {
      const newProgress = { ...prev, fontSize: size };
      saveProgress(newProgress);
      return newProgress;
    });
  }, [saveProgress]);

  const setTheme = useCallback((theme: ManuscriptProgress['theme']) => {
    setProgress(prev => {
      const newProgress = { ...prev, theme: theme };
      saveProgress(newProgress);
      return newProgress;
    });
  }, [saveProgress]);

  const setLanguage = useCallback((language: Language) => {
    setProgress(prev => {
      const newProgress = { ...prev, language };
      saveProgress(newProgress);
      return newProgress;
    });
  }, [saveProgress]);

  const resetProgress = useCallback(() => {
    const newProgress = { ...defaultProgress, firstVisit: new Date().toISOString() };
    setProgress(newProgress);
    saveProgress(newProgress);
  }, [saveProgress]);

  return {
    progress,
    loading,
    completeSection,
    completeDay,
    addJournalEntry,
    deleteJournalEntry,
    toggleBookmark,
    setFontSize,
    setTheme,
    setLanguage,
    resetProgress,
  };
};
