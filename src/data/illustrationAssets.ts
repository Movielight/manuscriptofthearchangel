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
import actionModulesIllustration from '@/assets/illustrations/action-modules.png';
import actionLessonsIllustration from '@/assets/illustrations/action-lessons.png';
import actionPracticesIllustration from '@/assets/illustrations/action-practices.png';
// Lesson illustrations
import lesson1Illustration from '@/assets/illustrations/lesson-1.png';
import lesson2Illustration from '@/assets/illustrations/lesson-2.png';
import lesson3Illustration from '@/assets/illustrations/lesson-3.png';
import lesson4Illustration from '@/assets/illustrations/lesson-4.png';
import lesson5Illustration from '@/assets/illustrations/lesson-5.png';
// Meditation illustrations
import meditationClarityIllustration from '@/assets/illustrations/meditation-clarity.png';
import meditationGratitudeIllustration from '@/assets/illustrations/meditation-gratitude.png';
import meditationFocusIllustration from '@/assets/illustrations/meditation-focus.png';
// Exercise illustrations
import exerciseBreathingIllustration from '@/assets/illustrations/exercise-breathing.png';
import exerciseJournalingIllustration from '@/assets/illustrations/exercise-journaling.png';
import exerciseIntentionIllustration from '@/assets/illustrations/exercise-intention.png';
import exerciseObservationIllustration from '@/assets/illustrations/exercise-observation.png';
import exerciseSilenceIllustration from '@/assets/illustrations/exercise-silence.png';

export const illustrations = {
  heroDashboard,
  modules: {
    'module-1': moduleOrigin,
    'module-2': moduleSymbolism,
    'module-3': moduleClarity,
    'module-4': moduleVirtues,
    'module-5': modulePractices,
  },
  lessons: {
    'lesson-1': lesson1Illustration,
    'lesson-2': lesson2Illustration,
    'lesson-3': lesson3Illustration,
    'lesson-4': lesson4Illustration,
    'lesson-5': lesson5Illustration,
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
  actions: {
    modules: actionModulesIllustration,
    lessons: actionLessonsIllustration,
    practices: actionPracticesIllustration,
  },
  // Meditation items with individual illustrations
  meditationItems: {
    'meditation-clarity': meditationClarityIllustration,
    'meditation-gratitude': meditationGratitudeIllustration,
    'meditation-focus': meditationFocusIllustration,
  } as { [key: string]: string },
  // Exercise items with individual illustrations
  exerciseItems: {
    'exercise-breathing': exerciseBreathingIllustration,
    'exercise-journaling': exerciseJournalingIllustration,
    'exercise-intention': exerciseIntentionIllustration,
    'exercise-observation': exerciseObservationIllustration,
    'exercise-silence': exerciseSilenceIllustration,
  } as { [key: string]: string },
} as const;

// Module illustration mapping by icon type
export const moduleIllustrationMap: { [key: string]: string } = {
  scroll: moduleOrigin,
  wings: moduleSymbolism,
  eye: moduleClarity,
  balance: moduleVirtues,
  lotus: modulePractices,
};
