import { useState, useCallback, useEffect, useRef } from 'react';
import { ManuscriptProgress } from './useManuscriptProgress';

export interface CelebrationState {
  isVisible: boolean;
  type: 'badge' | 'milestone' | 'streak';
  title: string;
  message: string;
}

const BADGE_INFO: Record<string, { title: string; message: string }> = {
  first_reading: {
    title: 'First Steps!',
    message: 'You\'ve begun your sacred journey. The path of enlightenment awaits.',
  },
  code_keeper: {
    title: 'Code Keeper!',
    message: 'You\'ve discovered the sacred code. Ancient wisdom is now yours.',
  },
  seven_day_warrior: {
    title: 'Seven Day Warrior!',
    message: 'You\'ve completed the entire 7-day path! Your dedication is inspiring.',
  },
  sign_seeker: {
    title: 'Sign Seeker!',
    message: 'You\'ve recorded 5 divine signs. Your spiritual awareness grows.',
  },
  journal_master: {
    title: 'Journal Master!',
    message: 'You\'ve journaled for 7 days. Your reflections illuminate your path.',
  },
};

export const useCelebration = (progress: ManuscriptProgress) => {
  const [celebration, setCelebration] = useState<CelebrationState>({
    isVisible: false,
    type: 'badge',
    title: '',
    message: '',
  });

  const previousBadgesRef = useRef<string[]>(progress.badges);
  const previousDaysRef = useRef<number[]>(progress.completedDays);

  const closeCelebration = useCallback(() => {
    setCelebration(prev => ({ ...prev, isVisible: false }));
  }, []);

  const triggerCelebration = useCallback((
    type: CelebrationState['type'],
    title: string,
    message: string
  ) => {
    setCelebration({
      isVisible: true,
      type,
      title,
      message,
    });
  }, []);

  // Watch for new badges
  useEffect(() => {
    const newBadges = progress.badges.filter(
      badge => !previousBadgesRef.current.includes(badge)
    );

    if (newBadges.length > 0) {
      const badge = newBadges[0];
      const info = BADGE_INFO[badge] || {
        title: 'Achievement Unlocked!',
        message: `You earned the ${badge.replace(/_/g, ' ')} badge!`,
      };
      triggerCelebration('badge', info.title, info.message);
    }

    previousBadgesRef.current = progress.badges;
  }, [progress.badges, triggerCelebration]);

  // Watch for 7-day completion
  useEffect(() => {
    const wasComplete = previousDaysRef.current.length === 7;
    const isComplete = progress.completedDays.length === 7;

    if (!wasComplete && isComplete) {
      // This will be handled by the seven_day_warrior badge
      // But we can add extra celebration if needed
    }

    previousDaysRef.current = progress.completedDays;
  }, [progress.completedDays]);

  return {
    celebration,
    closeCelebration,
    triggerCelebration,
  };
};
