// Practical Exercise Content for the Sacred Manuscript

export interface Exercise {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  icon: string;
  overview: string;
  benefits: string[];
  materials: string[];
  steps: {
    step: number;
    title: string;
    instruction: string;
    tip?: string;
  }[];
  variations: string[];
  disclaimer?: string;
}

export const exercises: Exercise[] = [
  {
    id: "exercise-breathing",
    title: "Conscious Breathing Technique",
    subtitle: "The foundation of all contemplative practice",
    duration: "5-10 minutes",
    icon: "wind",
    overview: `Breathing is the only bodily function that is both automatic and voluntary. That's why it serves as a bridge between the conscious and the unconscious.

The Conscious Breathing Technique presented here combines elements of traditional practices with modern understanding of physiology. When practiced regularly, it can help with nervous system regulation and anxiety reduction.`,
    benefits: [
      "Activates the parasympathetic nervous system, promoting calm",
      "Can reduce cortisol levels (stress hormone)",
      "Improves oxygenation and circulation",
      "Creates an interval between stimulus and response",
      "Can be practiced anywhere, discreetly"
    ],
    materials: [
      "A place where you can sit or stand comfortably",
      "Optional timer for longer sessions"
    ],
    steps: [
      {
        step: 1,
        title: "Position",
        instruction: "Sit with your spine erect or stand with feet shoulder-width apart. If seated, rest your hands comfortably on your thighs. Relax your shoulders.",
        tip: "If you're anxious or agitated, placing one hand on your chest and another on your abdomen can help you feel the breath."
      },
      {
        step: 2,
        title: "Natural Breathing",
        instruction: "Before modifying your breath, simply observe it for a few cycles. How is it now? Fast, slow, shallow, deep? Don't judge, just note.",
      },
      {
        step: 3,
        title: "4-7-8 Technique",
        instruction: "Inhale through the nose counting mentally to 4. Hold your breath counting to 7. Exhale through the mouth (making a gentle 'shhh' sound) counting to 8.",
        tip: "If the intervals are too long, start with smaller proportions (2-3-4) and gradually increase."
      },
      {
        step: 4,
        title: "Cycles",
        instruction: "Repeat the 4-7-8 sequence for 4 cycles initially. With practice, you can increase to 8 cycles or more.",
      },
      {
        step: 5,
        title: "Return",
        instruction: "After completing the cycles, allow your breathing to return to its natural rhythm. Observe how you feel compared to the beginning.",
      }
    ],
    variations: [
      "Box breathing (4-4-4-4): inhale 4, hold 4, exhale 4, hold 4",
      "Simple calming breath: exhale longer than you inhale (e.g., inhale 4, exhale 6)",
      "Heart coherence breathing: 5 seconds inhaling, 5 seconds exhaling"
    ],
    disclaimer: "If you have respiratory, cardiac conditions, or are pregnant, consult a doctor before practicing breath retention techniques."
  },
  {
    id: "exercise-journaling",
    title: "Therapeutic Writing",
    subtitle: "Guided journaling for self-knowledge",
    duration: "15-20 minutes",
    icon: "pen-tool",
    overview: `Therapeutic writing, or journaling, is a practice supported by psychological research. Studies show that writing about emotional experiences can improve physical and psychological well-being.

This exercise offers structured prompts to guide your writing productively. It's not about writing well or literarily - it's about using writing as a tool for processing and self-knowledge.`,
    benefits: [
      "Helps process difficult emotions",
      "Clarifies confused thoughts",
      "Identifies patterns of behavior and thinking",
      "Serves as a record of your growth journey",
      "Can reduce symptoms of stress and anxiety"
    ],
    materials: [
      "Notebook or paper (preferable to digital for this exercise)",
      "A pen that glides comfortably",
      "Private and quiet environment",
      "Timer (optional)"
    ],
    steps: [
      {
        step: 1,
        title: "Preparation",
        instruction: "Set aside 15-20 minutes without interruptions. Sit comfortably with your notebook. Take a few deep breaths to transition from 'doing' mode to reflective mode.",
      },
      {
        step: 2,
        title: "Choose a Prompt",
        instruction: "Choose one of the following questions to guide your writing today:\n\n• What is weighing on my mind right now?\n• What emotion has been most present for me lately? Where does it come from?\n• If I could change one thing in my life now, what would it be and why?\n• What do I need to forgive - in myself or in others?\n• What belief about myself is limiting me?",
        tip: "You don't need to answer all of them. Choose the one that resonates most or the one you resist most - both are significant."
      },
      {
        step: 3,
        title: "Free Writing",
        instruction: "Write continuously for 10-15 minutes without stopping. Don't worry about grammar, spelling, or coherence. If you get stuck, write 'I don't know what to write' until something emerges. The pen should keep moving.",
      },
      {
        step: 4,
        title: "Reflective Rereading",
        instruction: "After writing, reread what you wrote. Underline phrases that seem especially true or surprising. Don't judge, just observe.",
      },
      {
        step: 5,
        title: "Final Insight",
        instruction: "In one or two sentences, write: 'The main insight today is...' or 'What I learned about myself is...'",
      }
    ],
    variations: [
      "Unsent letter: write to someone (living or not) what you never said",
      "Internal dialogue: write a conversation between two parts of yourself (e.g., fear vs courage)",
      "Written visualization: describe your ideal day in sensory detail",
      "Deep gratitude: choose a person and write everything you're grateful for about them"
    ],
  },
  {
    id: "exercise-intention",
    title: "Symbolic Intention Ritual",
    subtitle: "Practice of focus and conscious direction",
    duration: "10-15 minutes",
    icon: "compass",
    overview: `This exercise uses symbolic elements to help you clarify and strengthen your intentions. This is not about magic or supernatural manifestation - it's a psychological practice that uses the power of symbols and rituals to focus the mind.

Rituals help mark important moments, create commitment, and transition from one mental state to another. This intention ritual can be used to start projects, mark new beginnings, or clarify life direction.`,
    benefits: [
      "Clarifies what you really want",
      "Creates a sense of commitment",
      "Uses symbols to engage deeper layers of the mind",
      "Marks a conscious transition of intention",
      "Can be adapted for different purposes"
    ],
    materials: [
      "A quiet space that can be your temporary 'sacred space'",
      "A candle (optional, but recommended)",
      "Paper and pen",
      "A small object that represents your intention (optional)"
    ],
    steps: [
      {
        step: 1,
        title: "Creating the Space",
        instruction: "Prepare your environment. If using a candle, light it. Silence devices. This is a dedicated moment - treat it as special without being overly solemn.",
      },
      {
        step: 2,
        title: "Centering Yourself",
        instruction: "Sit comfortably. Close your eyes and breathe deeply for a few minutes. Leave behind the worries of the day. You are here for a specific purpose.",
      },
      {
        step: 3,
        title: "Clarifying the Intention",
        instruction: "Ask yourself: 'What do I really want to cultivate or create in my life now?' Don't rush. Let the answer emerge. It can be a quality (e.g., courage), a change (e.g., more health), or a direction (e.g., creative career).",
        tip: "Formulate your intention positively (what you want, not what you don't want) and in the present (as if it were already true)."
      },
      {
        step: 4,
        title: "Written Record",
        instruction: "Write your intention on paper clearly and concisely. Example: 'I cultivate courage in my daily choices' or 'I nurture my health with attention and care'.",
      },
      {
        step: 5,
        title: "Visualization",
        instruction: "Close your eyes and visualize yourself living this intention. What would your life be like with this intention realized? What sensations would you have in your body? Allow yourself to feel the reality of this vision.",
      },
      {
        step: 6,
        title: "Declaration",
        instruction: "Out loud or mentally, declare your intention three times with conviction. Feel the commitment in your words.",
      },
      {
        step: 7,
        title: "Closing",
        instruction: "Thank yourself for this moment of clarity. If you used a candle, extinguish it consciously. Keep the written paper where you can revisit it (it doesn't need to be always visible, but accessible).",
      }
    ],
    variations: [
      "New moon ritual: perform the ritual at the beginning of the lunar cycle for new beginnings",
      "Release ritual: write what you want to let go of and (safely) burn the paper",
      "Morning ritual: brief version (5 min) to set the day's intention",
      "Shared ritual: do it with a partner or group, sharing intentions"
    ],
    disclaimer: "This is a psychological exercise that uses symbols, not a magical practice. Results depend on your subsequent actions, not on the ritual itself. We do not guarantee specific results."
  },
  {
    id: "exercise-observation",
    title: "Internal Observation Exercise",
    subtitle: "Developing the inner witness",
    duration: "10-15 minutes",
    icon: "eye",
    overview: `This exercise develops your capacity for self-observation - the ability to observe your own thoughts, emotions, and sensations without completely identifying with them.

In psychology, this is called 'metacognition' or 'witness consciousness.' It is a fundamental skill for self-knowledge and emotional regulation, as it creates space between what happens in you and how you respond.`,
    benefits: [
      "Increases awareness of automatic internal patterns",
      "Creates space for conscious choice instead of reaction",
      "Reduces excessive identification with temporary mental states",
      "Develops equanimity in the face of difficult experiences",
      "Strengthens the 'inner witness' - the part of you that observes"
    ],
    materials: [
      "A quiet place for seated practice",
      "Timer to mark time",
      "Journal for post-practice notes (optional)"
    ],
    steps: [
      {
        step: 1,
        title: "Positioning",
        instruction: "Sit comfortably with your spine erect. Close your eyes or keep them half-closed, looking gently downward.",
      },
      {
        step: 2,
        title: "Establishing Observation",
        instruction: "Imagine there is a part of you - an observing consciousness - that can observe everything happening internally without being affected by it. This part is like a neutral scientist, curious, without judgment.",
      },
      {
        step: 3,
        title: "Observing Thoughts",
        instruction: "Turn your attention to your thoughts. Observe them as if watching clouds passing in the sky. Note: 'Ah, a thought about work. Now a thought about a memory.' Don't follow them, just observe and label.",
        tip: "If you get lost in a thought (it happens!), simply note 'I got lost' and return to observation."
      },
      {
        step: 4,
        title: "Observing Emotions",
        instruction: "Now, observe any emotions present. Where do you feel them in the body? What is the intensity (1-10)? What would be the name? Observe without trying to change. 'There is anxiety present. I feel it as tightness in the chest. Intensity 5.'",
      },
      {
        step: 5,
        title: "Observing Sensations",
        instruction: "Mentally scan your body, noticing physical sensations. Tension, relaxation, temperature, tingling. Observe each area briefly before moving to the next.",
      },
      {
        step: 6,
        title: "Observer and Observed",
        instruction: "Now, ask yourself: who is observing? You are not the thoughts (you observe them). You are not the emotions or sensations (you observe them). What are you, then? Remain in this open question.",
      },
      {
        step: 7,
        title: "Return",
        instruction: "Slowly expand your attention to include the external environment - sounds, temperature. Gently move your fingers, and when ready, open your eyes.",
      }
    ],
    variations: [
      "Observation in daily life: practice observing your reactions in everyday situations",
      "Observation of a specific emotion: choose a recurring emotion and observe it deeply",
      "Observation in movement: practice while walking, observing sensations and impulses",
      "Observational writing: after practice, write what you observed without interpretation"
    ],
  },
  {
    id: "exercise-silence",
    title: "Silence and Consciousness Practice",
    subtitle: "Finding peace in stillness",
    duration: "15-30 minutes",
    icon: "moon",
    overview: `External silence is rare in our era of constant stimuli. Internal silence - the quietude of the mind - is even rarer. This practice cultivates both.

Regular exposure to silence has documented benefits: stress reduction, increased creativity, and insights that emerge when we're not constantly processing new information.

This practice can be challenging initially - many people feel discomfort with silence. This is normal and part of the process.`,
    benefits: [
      "Offers rest for an overloaded nervous system",
      "Allows insights and creativity to emerge naturally",
      "Develops comfort with one's own company",
      "Reduces dependence on external stimuli",
      "Deepens the meditative experience"
    ],
    materials: [
      "The quietest space possible",
      "Timer with gentle alarm",
      "Comfortable clothing",
      "Blanket if needed (the body may get cold)"
    ],
    steps: [
      {
        step: 1,
        title: "Environment Preparation",
        instruction: "Find or create the quietest environment possible. Turn off devices (don't just silence them). Inform others that you should not be interrupted. If necessary, use ear protectors.",
      },
      {
        step: 2,
        title: "Comfortable Position",
        instruction: "Sit or lie down in a way that you can remain still for the practice time. Bodily stillness facilitates mental quietude.",
        tip: "If seated, have back support if needed. If lying down, maintain some attention so as not to fall asleep."
      },
      {
        step: 3,
        title: "Transition to Silence",
        instruction: "Close your eyes and breathe naturally. In the first minutes, just make the transition. Don't try to achieve any state yet. Just arrive.",
      },
      {
        step: 4,
        title: "Welcoming Residual Sounds",
        instruction: "Even in silent environments, there will be sounds - your breathing, heartbeats, distant sounds. Don't fight them. Welcome them as part of the sound background.",
      },
      {
        step: 5,
        title: "Allowing the Mind to Quieten",
        instruction: "The mind will probably be agitated initially. Don't force quietude. Simply don't feed thoughts with attention. Let them arise and pass, like waves coming and going.",
      },
      {
        step: 6,
        title: "Resting in Consciousness",
        instruction: "When moments of mental quietude arise - even brief ones - rest in them. Don't celebrate (that's a thought) or analyze (also a thought). Just rest.",
      },
      {
        step: 7,
        title: "Main Period",
        instruction: "Remain in silence for the defined time. There is nothing to do, achieve, or accomplish. Just be, in silence.",
      },
      {
        step: 8,
        title: "Gradual Return",
        instruction: "When the timer sounds, don't get up immediately. Stay a few minutes in transition. Gradually reintroduce movement and eventually return to activities.",
      }
    ],
    variations: [
      "Dawn silence: practice in the first minutes of the day, before speaking or consuming media",
      "Silence retreat: extend to half a day or full day, on special occasions",
      "Walking silence: walk in silence in nature, without headphones or company",
      "Silent meal: have a meal in complete silence, with full attention"
    ],
    disclaimer: "If you have a tendency toward intrusive thoughts or mental health conditions, start with shorter periods and consider consulting a professional."
  }
];

export const exercisesIntroduction = {
  title: "Practical Exercises",
  subtitle: "Tools for immediate application",
  description: `These exercises complement the meditations, offering more active and structured practices. While meditations focus on observation and silence, exercises involve specific actions for developing skills.

Each exercise can be practiced independently, but they gain power when combined into a regular practice routine.`,
  tips: [
    "Start with one exercise and master it before adding others",
    "Adapt instructions to your context without losing the essence",
    "Record your experiences in your journal",
    "Consider which exercise best addresses your current needs",
    "Consistency matters more than intensity"
  ]
};
