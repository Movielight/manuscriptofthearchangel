export interface QuizQuestion {
  id: number;
  question: string;
  subtext?: string;
  options: {
    id: string;
    text: string;
    category: 'protection' | 'healing' | 'restoration';
  }[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "In this very moment, what weighs heaviest upon your heart?",
    subtext: "Listen to your soul's whisper...",
    options: [
      { id: "1a", text: "A deep fear that something bad is about to happen", category: "protection" },
      { id: "1b", text: "An old wound that refuses to heal", category: "healing" },
      { id: "1c", text: "The feeling that I've lost my true path", category: "restoration" },
      { id: "1d", text: "An overwhelming sense of spiritual emptiness", category: "healing" },
    ],
  },
  {
    id: 2,
    question: "When you close your eyes at night, what visits your thoughts?",
    subtext: "The night reveals our deepest truths...",
    options: [
      { id: "2a", text: "Worries about loved ones and their safety", category: "protection" },
      { id: "2b", text: "Memories of pain I cannot release", category: "healing" },
      { id: "2c", text: "Dreams of a life I was meant to live", category: "restoration" },
      { id: "2d", text: "A longing for something I cannot name", category: "restoration" },
    ],
  },
  {
    id: 3,
    question: "How would you describe your connection to the Divine lately?",
    subtext: "Be honest with yourself...",
    options: [
      { id: "3a", text: "I feel protected, but I need more guidance", category: "protection" },
      { id: "3b", text: "It feels broken or distant", category: "healing" },
      { id: "3c", text: "I've been searching but cannot find my way back", category: "restoration" },
      { id: "3d", text: "I sense a presence trying to reach me", category: "protection" },
    ],
  },
  {
    id: 4,
    question: "What area of your life feels most blocked or stagnant?",
    subtext: "Where does the energy refuse to flow?",
    options: [
      { id: "4a", text: "My finances and material abundance", category: "restoration" },
      { id: "4b", text: "My relationships and connections with others", category: "healing" },
      { id: "4c", text: "My health and physical well-being", category: "protection" },
      { id: "4d", text: "My purpose and spiritual growth", category: "restoration" },
    ],
  },
  {
    id: 5,
    question: "If an angel could grant you one blessing today, what would it be?",
    subtext: "Speak your heart's deepest desire...",
    options: [
      { id: "5a", text: "Shield me and my family from all harm", category: "protection" },
      { id: "5b", text: "Heal the wounds that hold me captive", category: "healing" },
      { id: "5c", text: "Restore what was taken from me", category: "restoration" },
      { id: "5d", text: "Show me the divine plan for my life", category: "restoration" },
    ],
  },
  {
    id: 6,
    question: "Which of these feelings resonates most strongly with you right now?",
    subtext: "Your emotions are sacred messengers...",
    options: [
      { id: "6a", text: "Vulnerability and the need for spiritual armor", category: "protection" },
      { id: "6b", text: "Grief and the weight of unprocessed pain", category: "healing" },
      { id: "6c", text: "Hope mixed with uncertainty about the future", category: "restoration" },
      { id: "6d", text: "A strange knowing that change is coming", category: "protection" },
    ],
  },
  {
    id: 7,
    question: "Have you ever felt that negative energies or forces work against you?",
    subtext: "Not all battles are visible to the eye...",
    options: [
      { id: "7a", text: "Yes, I often feel under spiritual attack", category: "protection" },
      { id: "7b", text: "I carry pain that feels almost supernatural", category: "healing" },
      { id: "7c", text: "Obstacles appear whenever I try to move forward", category: "restoration" },
      { id: "7d", text: "Something always blocks my blessings", category: "restoration" },
    ],
  },
  {
    id: 8,
    question: "What do you believe the Archangel is trying to tell you?",
    subtext: "Trust your intuition...",
    options: [
      { id: "8a", text: "That I need divine protection now more than ever", category: "protection" },
      { id: "8b", text: "That it's time to release and be healed", category: "healing" },
      { id: "8c", text: "That my restoration is at hand", category: "restoration" },
      { id: "8d", text: "I'm not sure, but I feel called to discover it", category: "healing" },
    ],
  },
];

export type ResultType = 'protection' | 'healing' | 'restoration';

export interface QuizResult {
  type: ResultType;
  title: string;
  subtitle: string;
  message: string;
  guidance: string;
  urgency: string;
}

export const quizResults: Record<ResultType, QuizResult> = {
  protection: {
    type: 'protection',
    title: "Message of Protection",
    subtitle: "The Archangel wraps you in wings of light",
    message: "Beloved soul, your answers reveal that you are being called to receive divine protection. The heavenly realm has seen the battles you face—both visible and invisible. Forces have been working against you, attempting to dim your light and steal your peace. But know this: you have not gone unnoticed.",
    guidance: "The Archangel has prepared a sacred shield for you. Ancient prayers of protection, celestial codes that have guarded souls for millennia, are waiting to be spoken over your life. The Sacred Manuscript contains the exact words that will invoke this protection—prayers that have been hidden from the world but preserved for this very moment.",
    urgency: "Your spiritual vulnerability has reached a critical point. The manuscript holds the key to your protection.",
  },
  healing: {
    type: 'healing',
    title: "Message of Healing",
    subtitle: "The Archangel reaches out with hands of restoration",
    message: "Dear child of light, your soul has spoken through these answers, and it cries out for healing. There are wounds within you—some you remember, others buried so deep you've forgotten they exist. These invisible injuries have been blocking your blessings, keeping you from the abundance and peace that is your divine birthright.",
    guidance: "The Archangel has heard your silent suffering. Within the Sacred Manuscript lies the sacred healing codes—specific prayers and divine frequencies that penetrate the deepest wounds of the soul. These aren't ordinary words; they are the same healing vibrations used by the heavenly host themselves.",
    urgency: "Your healing has been delayed too long. The prayers within the manuscript are the medicine your soul desperately needs.",
  },
  restoration: {
    type: 'restoration',
    title: "Message of Restoration",
    subtitle: "The Archangel prepares to return what was lost",
    message: "Blessed one, your answers have revealed a profound truth: you have lost things that were meant to be yours. Dreams that faded. Opportunities that slipped away. Blessings that were stolen before they could manifest. But the Divine sees everything—every loss, every theft, every unfulfilled promise.",
    guidance: "The Archangel is ready to begin the restoration of your life. The Sacred Manuscript contains powerful restoration prayers—ancient invocations that command the return of everything the enemy has taken. These sacred words have the power to reverse years of loss and open doors that have been sealed against you.",
    urgency: "The time of restoration is now. The manuscript holds the prayers that will unlock everything that belongs to you.",
  },
};

export function calculateResult(answers: Record<number, string>, questions: QuizQuestion[]): ResultType {
  const categoryCounts: Record<ResultType, number> = {
    protection: 0,
    healing: 0,
    restoration: 0,
  };

  Object.entries(answers).forEach(([questionId, optionId]) => {
    const question = questions.find(q => q.id === parseInt(questionId));
    if (question) {
      const option = question.options.find(o => o.id === optionId);
      if (option) {
        categoryCounts[option.category]++;
      }
    }
  });

  const maxCategory = Object.entries(categoryCounts).reduce((a, b) => 
    b[1] > a[1] ? b : a
  )[0] as ResultType;

  return maxCategory;
}
