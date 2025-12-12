// Premium illustration assets for the app
import heroDashboard from '@/assets/illustrations/hero-dashboard.png';
import moduleOrigin from '@/assets/illustrations/module-origin.png';
import moduleSymbolism from '@/assets/illustrations/module-symbolism.png';
import moduleClarity from '@/assets/illustrations/module-clarity.png';
import moduleVirtues from '@/assets/illustrations/module-virtues.png';
import modulePractices from '@/assets/illustrations/module-practices.png';
import meditationIllustration from '@/assets/illustrations/meditation.png';
import exercisesIllustration from '@/assets/illustrations/exercises.png';
import videoLessonsIllustration from '@/assets/illustrations/video-lessons.png';
import achievementsIllustration from '@/assets/illustrations/achievements.png';
import statsModulesIllustration from '@/assets/illustrations/stats-modules.png';
import statsLessonsIllustration from '@/assets/illustrations/stats-lessons.png';
import statsAchievementsIllustration from '@/assets/illustrations/stats-achievements.png';

export const illustrations = {
  heroDashboard,
  modules: {
    'module-1': moduleOrigin,
    'module-2': moduleSymbolism,
    'module-3': moduleClarity,
    'module-4': moduleVirtues,
    'module-5': modulePractices,
  },
  meditation: meditationIllustration,
  exercises: exercisesIllustration,
  videoLessons: videoLessonsIllustration,
  achievements: achievementsIllustration,
  stats: {
    modules: statsModulesIllustration,
    lessons: statsLessonsIllustration,
    achievements: statsAchievementsIllustration,
  },
} as const;

// Module illustration mapping by icon type
export const moduleIllustrationMap: { [key: string]: string } = {
  scroll: moduleOrigin,
  wings: moduleSymbolism,
  eye: moduleClarity,
  balance: moduleVirtues,
  lotus: modulePractices,
};
