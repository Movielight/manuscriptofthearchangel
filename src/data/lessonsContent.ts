// Video Lesson Content for the Sacred Manuscript
// Each lesson has introductory text and space for video link

export interface Lesson {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  duration: string;
  introduction: string;
  whatYouWillLearn: string[];
  deepContent: string;
  videoUrl: string | null; // null = video not yet added
}

export const lessons: Lesson[] = [
  {
    id: "lesson-1",
    number: 1,
    title: "Introduction to the Manuscript and the Inner Journey",
    subtitle: "Foundations for your conscious transformation",
    duration: "~20 min",
    introduction: `In this first lesson, you will be introduced to the essence of the Sacred Manuscript and the path of self-discovery that opens before you.

Before diving into specific content, it is essential to understand the purpose of this journey and how to make the most of each teaching. This is not a promise of instant change, but an invitation for genuine and gradual inner work.`,
    whatYouWillLearn: [
      "The purpose and philosophy behind the Sacred Manuscript",
      "How this journey differs from superficial self-help approaches",
      "The importance of consistency and patience in the process",
      "How to create the right mental environment for learning",
      "The first practical steps to begin your transformation"
    ],
    deepContent: `The inner journey is perhaps the most challenging and rewarding that a human being can undertake. Unlike external travels, where the destination is known and the path can be mapped, the exploration of one's own consciousness reveals territories that cannot be fully described by words.

The Sacred Manuscript serves as a guide in this exploration. It does not offer ready-made answers, but tools for you to discover your own answers. Every insight you have will be genuinely yours.

In this introductory lesson, we establish the foundations for everything that follows. You will learn to cultivate the appropriate mental disposition - a combination of openness, humility, and critical discernment. This disposition is more important than any specific technique.

Remember: the value of this journey is not in accumulating information, but in transforming your relationship with yourself and with life.`,
    videoUrl: "https://youtu.be/Xa7abA-3w2o"
  },
  {
    id: "lesson-2",
    number: 2,
    title: "Spiritual Symbolism and Archetypes",
    subtitle: "The universal language of the unconscious",
    duration: "~25 min",
    introduction: `Symbols are humanity's oldest language. Before writing, before even structured verbal language, human beings communicated through symbols - in cave paintings, rituals, and myths.

This lesson explores how symbols work in our psyche and how we can consciously use them to access deeper layers of understanding.`,
    whatYouWillLearn: [
      "What archetypes are and how they influence your life",
      "The difference between literal and symbolic interpretation",
      "The main universal symbols and their meanings",
      "How to work with symbols in a practical and safe way",
      "The connection between personal and universal symbols"
    ],
    deepContent: `Carl Jung revolutionized psychology by identifying universal patterns that repeat in myths, dreams, and religions across all cultures. He called these patterns archetypes.

Archetypes are not abstract concepts - they operate in you constantly. When you admire a hero in a movie, you are resonating with the hero archetype. When you feel nostalgia for a simpler time, you may be connected to the archetype of paradise lost.

Understanding symbolic language is not learning a secret code. It is recognizing a language you already speak unconsciously. This lesson will make that knowledge conscious.

We will work with symbols practically: how to interpret them in your dreams, how to recognize them in life situations, and how to use them intentionally in contemplative practices.

Important: this is an educational and psychological approach, not religious. Symbols are tools for self-knowledge, not objects of worship.`,
    videoUrl: "https://youtu.be/NdIp_rZ1oiw"
  },
  {
    id: "lesson-3",
    number: 3,
    title: "Introspection and Emotional Alignment Techniques",
    subtitle: "Practical tools for inner clarity",
    duration: "~30 min",
    introduction: `Introspection is the ability to look inward - to observe your thoughts, emotions, and patterns. Emotional alignment is the natural result of sincere and consistent introspection.

This lesson offers concrete techniques you can apply immediately in your life. These are not abstract theories, but tested practices that produce results when applied regularly.`,
    whatYouWillLearn: [
      "Specific self-observation techniques",
      "How to identify and name emotions precisely",
      "Breathing practices for emotional regulation",
      "The Socratic questioning method applied",
      "How to integrate introspection into daily routine"
    ],
    deepContent: `Most people live on autopilot. Thoughts arise, emotions happen, behaviors repeat - all without a conscious witness observing the process.

Introspection breaks this automatism. When you observe a thought, you are no longer just the thought - there is you and the thought. This small space of consciousness is revolutionary.

In this lesson, we will teach specific techniques:

1. The practice of conscious pause - how to create spaces for observation throughout the day
2. The emotion journal - a structured method for tracking your internal states
3. Regulatory breathing - simple techniques that calm the nervous system
4. Socratic questioning - how to challenge limiting beliefs

These tools are simple but not easy. They require practice and patience. The results, however, are transformative when you commit to the process.

Remember: we do not offer magical solutions. What we offer are proven methods that work when applied consistently.`,
    videoUrl: "https://youtu.be/jn4x6CJKE20"
  },
  {
    id: "lesson-4",
    number: 4,
    title: "Symbolic Practices of Focus and Intention",
    subtitle: "Conscious rituals for daily life",
    duration: "~25 min",
    introduction: `This lesson presents symbolic practices that can help structure your experience and strengthen your intention. These are rituals in the psychological sense - actions charged with personal meaning that assist in the transformation process.

It is important to clarify: these practices have no magical or supernatural power. Their value lies in how they organize your mind and direct your attention. Results come from your inner work, not from external forces.`,
    whatYouWillLearn: [
      "What symbolic rituals are and how they work psychologically",
      "Creation of personalized morning and evening rituals",
      "Use of symbolic objects as attention anchors",
      "Practices for defining and strengthening intentions",
      "How to adapt traditional rituals to the modern context"
    ],
    deepContent: `Rituals are a fundamental part of human experience. From rites of passage in traditional cultures to the simple routine of having morning coffee, repeated actions with meaning structure our experience of time and life.

What makes a ritual effective is not magic, but psychology. When you perform an action consciously, with full attention and attributed meaning, you are:

1. Training your mind for focus
2. Creating neural associations that reinforce desired behaviors
3. Marking transitions meaningfully
4. Connecting with something greater than the present moment

In this lesson, we offer safe and non-religious practices:

- Morning intention ritual: a sequence of actions that prepare your mind for the day
- Conscious closing practice: how to end the day in a balanced way
- Use of anchor objects: how to use physical items to recall desired mental states
- Transition ritual: how to mark important changes in your life

These practices are suggestions. We encourage you to adapt them to your context and create your own meaningful rituals.

Important: We do not promise that these practices will bring specific results. Their value lies in the process, not in outcome guarantees.`,
    videoUrl: "https://youtu.be/d_nAiwgSlhk"
  },
  {
    id: "lesson-5",
    number: 5,
    title: "How to Apply the Teachings in Daily Life",
    subtitle: "From theory to everyday practice",
    duration: "~30 min",
    introduction: `The true test of any teaching is in its practical application. This final lesson in the series focuses on how to integrate everything you have learned into the real flow of daily life - at work, in relationships, in daily challenges.

Wisdom that remains on the pages of a book (or in an app) has no real value. Only when it becomes lived action does it transform.`,
    whatYouWillLearn: [
      "Strategies for maintaining practice when life is busy",
      "How to apply consciousness in challenging situations",
      "Invisible practices that can be done anywhere",
      "How to deal with relapses and periods of demotivation",
      "Building a life aligned with your core values"
    ],
    deepContent: `It is easy to feel balanced and conscious during a quiet meditation. The challenge is maintaining that quality when the boss is stressed, traffic is stopped, or a relationship is in crisis.

This lesson is about taking the teachings to the battlefield of real life.

Some fundamental principles:

**1. Micro-practices are more important than long practices**
Three conscious breaths several times a day surpass one hour of meditation followed by 23 hours of unconsciousness.

**2. Difficult situations are opportunities**
Every moment of frustration, anger, or anxiety is a chance to practice what you learned. Don't treat these moments as failures, but as training.

**3. Progress is not linear**
There will be better and worse days. There will be periods of great clarity and periods of confusion. This is normal. What matters is the long-term trend, not daily fluctuations.

**4. Environment matters**
Structure your environment to support your practice. Visual reminders, established routines, and people who share similar values make a difference.

**5. Be realistic**
Don't try to change everything at once. Choose one area of life to focus on first. When that becomes more natural, expand.

The path of self-knowledge has no end. You will not reach a point of conclusion where there is no more work to do. The goal is not perfection, but continuous growth and increasingly consistent presence.`,
    videoUrl: "https://youtu.be/dftyJ8QVfBc"
  }
];

export const lessonsIntroduction = {
  title: "Video Lessons",
  subtitle: "Deepen your knowledge with visual content",
  description: `This section contains video lessons that complement and deepen the written modules of the Sacred Manuscript.

Each lesson was developed to offer an immersive learning experience, combining detailed explanations with practical demonstrations.

We recommend that you watch the lessons in the order presented, and that you set aside adequate time for reflection after each one.`,
  howToUse: [
    "Watch in a quiet environment, without distractions",
    "Keep your journal nearby for notes",
    "Pause when necessary to absorb the content",
    "Practice the suggested exercises before advancing",
    "Rewatch lessons that resonated especially with you"
  ]
};
