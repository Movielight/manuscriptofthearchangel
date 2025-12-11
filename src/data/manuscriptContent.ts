// Complete content of the Sacred Manuscript Premium
// Educational, reflective and compliant with Cartpanda policies

export interface ModuleSection {
  id: string;
  title: string;
  content: string;
}

export interface Module {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  icon: string;
  introduction: string;
  sections: ModuleSection[];
  practicalExercise: {
    title: string;
    instructions: string[];
  };
  finalReflection: string;
}

export const welcomeContent = {
  title: "Welcome to the Sacred Manuscript",
  subtitle: "A journey of self-discovery and inner clarity",
  purpose: `The Sacred Manuscript is an educational and reflective guide, created to assist you on your journey of self-discovery. This is not a path of promises or miracles, but one of conscious inner work.

Here you will find practical introspection tools, deep philosophical reflections, and exercises that can contribute to your mental clarity and emotional balance.

Each module was developed based on recognized philosophical traditions and contemplative practices, adapted for the contemporary context.`,
  howToNavigate: `Navigation is simple and intuitive:

• **Modules**: Access the main content organized into 5 progressive modules
• **Lessons**: Watch complementary video lessons that deepen each topic
• **Practices**: Find guided meditations and practical exercises
• **Journey**: Track your progress, write in your journal, and follow structured plans`,
  symbolicApproach: `This material uses a symbolic approach. Symbols are powerful tools for communicating concepts that transcend ordinary language.

Throughout this journey, you will encounter references to universal archetypes, metaphors, and symbolism that serve as mirrors for your own inner experience.

This is not about religious beliefs or supernatural promises, but a language that allows access to deeper layers of understanding about yourself.`,
};

export const introductionContent = {
  title: "Introduction to the Manuscript",
  historicalContext: `Spiritual manuscripts have a history that dates back thousands of years. From the Vedic texts of ancient India to the scrolls of medieval monasteries, humanity has always sought to record its discoveries about the nature of consciousness and being.

These traditions, though diverse in their cultural expressions, share a common thread: the search for understanding of oneself and the place of human beings in the cosmos.

The Sacred Manuscript you hold is a contemporary synthesis of these ancestral wisdoms, translated for the language and challenges of our time.`,
  symbolicInterpretation: `Symbolic interpretation is a skill that develops with practice. When reading the texts of this manuscript, consider the following guidelines:

**First Reading**: Allow the words to flow without excessive analysis. Note which passages resonate with you.

**Second Reading**: Observe the symbols and metaphors. Ask yourself: "What does this represent in my own life?"

**Reflection**: Reserve a moment for contemplation. Meaning often emerges not from analysis, but from the silence that follows reading.

**Application**: Consider how the insights can be integrated into your daily life.`,
  howToJourney: `This journey is personal and unique. There is no right or wrong pace. Some guidelines may help:

• **Regularity**: Establish a consistent time for your practice, even if brief
• **Environment**: Create a quiet space, free from distractions
• **Journal**: Record your reflections and insights - they are your personal map
• **Patience**: Genuine transformation is gradual and subtle
• **Compassion**: Be gentle with yourself during the process`,
};

export const modules: Module[] = [
  {
    id: "module-1",
    number: 1,
    title: "The Origin of Spiritual Manuscripts",
    subtitle: "History, context, and symbolic meaning",
    icon: "scroll",
    introduction: `Throughout human history, different civilizations developed wisdom traditions that were preserved in sacred manuscripts. These texts are not mere words on paper - they are testimonies of profound discoveries about the nature of human consciousness.

This module explores the historical roots of these traditions and establishes the foundations for your journey of self-discovery.`,
    sections: [
      {
        id: "1-1",
        title: "The First Wisdom Traditions",
        content: `The oldest wisdom traditions we know of emerged more than 5,000 years ago, in different parts of the world simultaneously. In India, the Vedas and Upanishads explored the nature of Being. In China, Lao Tzu and Confucius established paths of harmony. In Egypt, Hermetic texts spoke of the correspondence between heaven and earth.

What unites these traditions is a common observation: there exists a dimension of human experience that transcends ordinary thought. This dimension - called Atman, Tao, or Nous, depending on the tradition - is accessible through contemplative practices and self-observation.

The manuscripts that have reached us are maps left by those who explored this inner territory. They are not absolute truths to be blindly accepted, but invitations for your own investigation.`
      },
      {
        id: "1-2",
        title: "The Universal Symbolic Language",
        content: `A striking characteristic of spiritual manuscripts is the use of symbols. The sun represents illuminated consciousness. Water symbolizes emotions and the flow of life. The mountain represents stability and transcendence.

This symbolic language is not arbitrary. It emerges from universal observations of the human psyche. Carl Jung, the renowned psychologist, identified these as "archetypes" - primordial patterns present in the collective unconscious of all humanity.

When studying symbols, you are not learning a secret code, but reconnecting with a language that already exists in your own psyche. This is why certain symbols "speak" to us deeply, even when we cannot explain it rationally.`
      },
      {
        id: "1-3",
        title: "The Purpose of Sacred Texts",
        content: `Sacred texts were not written to entertain or inform in the common sense. Their purpose is to transform the reader's consciousness. They are tools for awakening insights that are already latent within you.

Consider the difference between reading an instruction manual and reading poetry. The manual transmits objective information. Poetry evokes an experience. Sacred manuscripts function more like poetry - they work on multiple levels simultaneously.

This is why rereading is essential. Each time you return to a sacred text with new life experience, new meanings emerge. The text remains the same, but you have changed.`
      },
      {
        id: "1-4",
        title: "How This Manuscript Was Built",
        content: `The Sacred Manuscript you are exploring was built as a synthesis of multiple traditions, translated for contemporary sensibility. It does not belong to any specific religion and does not require prior beliefs.

The structure follows a progressive path: from historical foundations (this module) to practices applicable in your daily life (final modules). Each step prepares the ground for the next.

Remember: this is educational and reflective material. We make no promises of guaranteed results. What we offer are tools that can contribute to your personal development, depending on how you use them.`
      }
    ],
    practicalExercise: {
      title: "Exercise: Mapping Your Roots",
      instructions: [
        "Set aside 10-15 minutes in a quiet environment",
        "Reflect on the wisdom traditions that have influenced your life - whether through family, culture, or personal choices",
        "In your journal, briefly write about 2-3 sources of wisdom you respect and why",
        "Consider: What do these traditions have in common? What are you seeking in this manuscript?",
        "End with a deep breath and a moment of silence"
      ]
    },
    finalReflection: `The journey of self-discovery does not start from zero. You bring with you an entire history of influences, experiences, and yearnings. Recognizing this background is the first step toward conscious exploration.

Ancient manuscripts remind us that the search for wisdom is a universal human heritage. You are part of this lineage of seekers.`
  },
  {
    id: "module-2",
    number: 2,
    title: "The Symbolism of Archangels",
    subtitle: "Philosophy, archetypes, and reflections",
    icon: "wings",
    introduction: `Archangels are figures that appear in multiple cultural and religious traditions. In this module, we explore not the literal belief in these figures, but their archetypal meaning - what they represent as symbols of the human psyche.

This is a philosophical and educational approach, not religious. You do not need to believe in angels to benefit from the wisdom contained in these archetypes.`,
    sections: [
      {
        id: "2-1",
        title: "Archetypes and the Human Psyche",
        content: `Carl Jung defined archetypes as universal patterns of behavior and image that reside in the collective unconscious. They manifest in myths, dreams, art, and religion across all cultures.

Archangels can be understood as powerful archetypes: symbolic representations of qualities and capacities that exist potentially in every human being. Michael represents strength and protection. Gabriel represents communication and revelation. Raphael represents healing and restoration.

When we work with these archetypes, we are not invoking external entities. We are activating and integrating aspects of our own psyche that may be dormant or underdeveloped.`
      },
      {
        id: "2-2",
        title: "Michael: The Archetype of Inner Strength",
        content: `Archangel Michael is traditionally represented as a warrior of light, confronting dragons and forces of darkness. Philosophically, he represents our ability to face our fears and internal challenges.

The "dragon" that Michael confronts can be interpreted as our destructive patterns, paralyzing fears, or shadow aspects we prefer to ignore. Michael's "sword" is the clarity of consciousness that discerns between what serves us and what harms us.

Cultivating Michael's energy means developing moral courage - the ability to do what is right even when it is difficult. It is not aggression, but serene firmness in the face of challenges.

Ask yourself: Where in my life do I need to exercise more courage and firmness?`
      },
      {
        id: "2-3",
        title: "Gabriel: The Archetype of Clarity",
        content: `Gabriel is known as the messenger, the one who brings revelations and insights. In tradition, it is Gabriel who announces births and new beginnings.

Symbolically, Gabriel represents our ability to receive insights and communicate them clearly. It is intuition breaking through mental confusion, bringing clarity.

The "new birth" that Gabriel announces can be understood as moments of inner renewal - when we understand something in a new way, when an old pattern dissolves and a new way of being emerges.

Cultivating Gabriel's energy means developing our capacity to listen to the inner voice and express it authentically. It is about true communication - with ourselves and with others.

Ask yourself: Am I listening to my intuition? Am I communicating my truth?`
      },
      {
        id: "2-4",
        title: "Raphael: The Archetype of Healing",
        content: `Raphael is associated with healing in all its forms - physical, emotional, and spiritual. His name means "God heals" in Hebrew.

Philosophically, Raphael represents our innate capacity for restoration and balance. The body has self-healing mechanisms. The psyche also naturally tends toward balance when given the right conditions.

Raphael's "healing" is not magical or instantaneous. It is the gradual process of recognizing where we are fragmented and consciously working toward integration. It may involve forgiveness, acceptance, changing habits, or seeking professional help.

Cultivating Raphael's energy means becoming an active agent in your own healing process. It is taking responsibility for your well-being without falling into perfectionism or self-demand.

Ask yourself: What in me needs healing? What steps can I take in that direction?`
      },
      {
        id: "2-5",
        title: "Integrating the Archetypes",
        content: `The three main archangels represent complementary aspects of an integrated psyche: strength (Michael), clarity (Gabriel), and healing (Raphael).

A balanced individual needs all these aspects in harmony. Strength without clarity can become brutality. Clarity without strength can become passivity. Healing without the other qualities can become escapism or victimization.

Working with archetypes is not about "invoking" external energies, but about recognizing and developing potentials that already exist in you. It is a form of self-knowledge through symbols.

As you progress on this journey, observe which of these archetypes seems most developed in you and which needs more attention. This self-knowledge is valuable for your growth.`
      }
    ],
    practicalExercise: {
      title: "Exercise: Dialogue with the Archetypes",
      instructions: [
        "Set aside 15-20 minutes in a quiet environment",
        "Choose one of the three archetypes that most resonates with you at this moment",
        "In your journal, write a letter to this archetype, expressing what you need to develop",
        "Then, write an imaginary response from this archetype to you",
        "Observe what insights arise through this creative writing exercise",
        "This is not spiritual channeling, but accessing your own inner wisdom through symbols"
      ]
    },
    finalReflection: `Archetypes are mirrors that help us see aspects of ourselves that may be hidden. By working with the symbols of Michael, Gabriel, and Raphael, you are actually developing strength, clarity, and healing capacity in yourself.

Remember: this is a journey of self-discovery, not dependence on external forces. The power has always been within you.`
  },
  {
    id: "module-3",
    number: 3,
    title: "Path of Inner Clarity",
    subtitle: "Practical introspection tools",
    icon: "eye",
    introduction: `Inner clarity is the ability to see yourself and life situations with lucidity, free from emotional or cognitive distortions. It is not a permanent state to be achieved once, but a skill that is continuously cultivated.

This module offers practical tools for developing this clarity through conscious introspection.`,
    sections: [
      {
        id: "3-1",
        title: "What Obscures Our Vision",
        content: `Before seeking clarity, it is useful to understand what obscures it. Various traditions have identified similar obstacles:

**Emotional Reactivity**: When we are dominated by intense emotions - anger, fear, anxiety, desire - our perception narrows. We see only what the emotion wants us to see.

**Mental Patterns**: Unexamined beliefs, prejudices, and automatic assumptions filter our experience before we are even aware of it.

**Excessive Identification**: When we identify too much with our thoughts, emotions, social roles, or possessions, we lose the broader perspective.

**Constant Distraction**: A mind jumping from thought to thought, without the ability to focus, cannot see with depth.

Recognizing these obstacles in yourself is the first step to overcoming them.`
      },
      {
        id: "3-2",
        title: "The Art of Self-Observation",
        content: `Self-observation is the fundamental practice for developing clarity. It consists of observing your own thoughts, emotions, and behaviors as if you were an impartial witness.

**How to Practice:**

1. **Conscious Pauses**: Several times a day, pause briefly and observe: What am I thinking? What am I feeling? What am I doing?

2. **Without Judgment**: Observe without classifying as "good" or "bad." Just note.

3. **Recording**: At the end of the day, briefly record the patterns you observed.

4. **Key Questions**: "Why did I react this way?" "What belief is behind this behavior?" "What is this emotion trying to tell me?"

With consistent practice, you will begin to notice patterns that were previously invisible. This knowledge is power - the power to choose consciously instead of reacting automatically.`
      },
      {
        id: "3-3",
        title: "Silence as a Tool",
        content: `External and internal silence is a powerful catalyst for clarity. Most of us live in environments saturated with stimuli - sounds, information, demands. The mind mirrors this agitation.

**External Silence**: Set aside moments of the day to be in calm environments, without music, devices, or conversations. Even 10 minutes can make a difference.

**Internal Silence**: More challenging, this is the silence of the chattering mind. It is not about forcing thoughts to stop, but about not engaging with every thought that arises.

**Silence Practice**:
- Sit comfortably
- Close your eyes
- Observe thoughts like clouds passing in the sky
- You are the sky, not the clouds
- Gently return to this perspective when you get lost in thoughts

Silence reveals what was hidden by noise. Many insights arise not during agitation, but in the moments of quietude that follow.`
      },
      {
        id: "3-4",
        title: "Socratic Questioning",
        content: `Socrates, the Greek philosopher, developed a method of questioning that leads to clarity through well-formulated questions. This method remains powerful today.

**The Method**:

1. **Identify a belief or assumption**: For example, "I need others' approval to feel good."

2. **Question**: "Is this really true? Always? In all situations?"

3. **Explore consequences**: "If I maintain this belief, where does it lead me? What are the costs?"

4. **Seek contrary evidence**: "Were there moments when I felt good without external approval?"

5. **Reformulate**: "A more balanced perspective would be..."

This method is not about negativity or skepticism, but about not automatically accepting what the mind says. Many of our beliefs were formed in childhood and have never been examined. Socratic questioning brings light to these dark zones.`
      },
      {
        id: "3-5",
        title: "Clarity in Decision Making",
        content: `Inner clarity has practical applications, especially in decision making. When we are confused, we tend to procrastinate, decide impulsively, or let others decide for us.

**Practices for Clear Decisions**:

1. **Wait for Emotion to Subside**: If you are emotionally agitated, it is not the time to decide something important. Wait until you regain balance.

2. **Write Down Options**: Seeing alternatives on paper clears the mind.

3. **Consult Values**: Which option is most aligned with your core values? If you lack clarity about your values, this is important preparatory work.

4. **Project Consequences**: Imagine yourself a year from now, five years. Which choice would you be grateful to have made?

5. **Listen to the Body**: Often, the body knows before the mind. When considering an option, observe the bodily sensations that arise.

Remember: not every decision needs to be perfect. Clarity is not omniscience. It is acting consciously with the best available information.`
      }
    ],
    practicalExercise: {
      title: "Exercise: Clarity Inventory",
      instructions: [
        "Set aside 20 minutes without interruptions",
        "Divide a page into three columns: Life Area | What Is Clear | What Is Confused",
        "List the main areas: relationships, work, health, purpose, finances, spirituality",
        "For each area, honestly fill in what you see clearly and what remains foggy",
        "Choose one confused area and apply Socratic questioning",
        "Record any insight that arises"
      ]
    },
    finalReflection: `Clarity is not a destination, but a path. Each day offers opportunities to see more clearly - yourself, others, situations. The tools in this module are simple but powerful when applied consistently.

Do not expect immediate results. The fog that accumulated over years does not dissipate in one session. But with regular practice, you will notice a progressive difference in the quality of your perception and decisions.`
  },
  {
    id: "module-4",
    number: 4,
    title: "Virtues and Emotional Balance",
    subtitle: "Educational and practical text",
    icon: "balance",
    introduction: `Virtues are not abstract concepts, but practical capacities that can be developed. Emotional balance does not mean the absence of emotions, but the ability to experience them fully without being dominated by them.

This module explores classical virtues and offers practical guidance for cultivating them in your life.`,
    sections: [
      {
        id: "4-1",
        title: "What Are Virtues",
        content: `Aristotle defined virtue as the midpoint between two extremes. Courage, for example, is the middle ground between cowardice and recklessness. Generosity lies between avarice and wastefulness.

This view is practical: virtues are not unattainable ideals, but balanced states we can consciously cultivate.

**Characteristics of Virtues**:

1. **They are habits**: We are not born virtuous; we become virtuous through repeated practice.

2. **They are contextual**: Virtuous action depends on circumstances. Sometimes, speaking is courageous; sometimes, silence is.

3. **They form a system**: Virtues support each other. Courage without prudence can be destructive.

4. **They lead to eudaimonia**: This Greek term means "flourishing" or "well-living" - not momentary pleasure, but a genuinely good life.`
      },
      {
        id: "4-2",
        title: "Compassion: The Virtue of the Heart",
        content: `Compassion is the ability to recognize suffering - in oneself and in others - and respond with care. It is not pity, which looks down from above, but horizontal connection with the shared human experience.

**Developing Compassion**:

1. **Start with yourself**: Many people are harder on themselves than on others. Practice self-compassion when you fail or suffer.

2. **Recognize common humanity**: Everyone suffers. Everyone makes mistakes. Everyone wants to be happy. This perception dissolves judgment.

3. **Practice active listening**: When someone shares a problem, resist the urge to fix it. Sometimes, attentive presence is what helps most.

4. **Compassionate actions**: Compassion is not just feeling; it expresses itself in actions. Identify one compassionate action you can practice this week.

Compassion does not mean tolerating harmful behaviors. Sometimes, the most compassionate response is to set clear boundaries.`
      },
      {
        id: "4-3",
        title: "Patience: The Virtue of Time",
        content: `In a culture of instant gratification, patience has become rare and precious. It is the ability to remain calm and persist in the face of delays, obstacles, or difficulties.

**The Nature of Patience**:

Patience is not passivity. It is an active force - the conscious choice not to react impulsively when things do not happen in our desired time.

It recognizes that many important processes - personal growth, deep relationships, complex skills - require time. Trying to rush them is counterproductive.

**Cultivating Patience**:

1. **Identify triggers**: What tests your patience? Traffic? Lines? People? Knowing this helps you prepare.

2. **Practice in small doses**: Use small inconveniences as training opportunities.

3. **Breathe before reacting**: Three deep breaths can be enough to avoid an impulsive reaction.

4. **Time perspective**: Ask yourself: "Will this matter a year from now?" Many frustrations are trivial in the long run.

5. **Accept uncertainty**: Much impatience comes from the illusion of control. Accepting that not everything is in our hands brings peace.`
      },
      {
        id: "4-4",
        title: "Emotional Balance in Practice",
        content: `Emotional balance does not mean being cold or repressed. It means experiencing emotions fully without being swept away by them. It is the difference between feeling anger and acting destructively from anger.

**Principles of Emotional Balance**:

1. **All emotions are valid**: There are no "bad" emotions - only more or less skillful ways of dealing with them.

2. **Emotions are transitory**: No emotion lasts forever. This perception helps during difficult states.

3. **You are not your emotions**: There is a difference between "I am angry" and "There is anger present in me." The second formulation preserves space for choice.

**Regulation Practices**:

1. **Name the emotion**: Research shows that simply naming an emotion reduces its intensity. "This is anxiety."

2. **Locate it in the body**: Where do you feel this emotion? Tight heart? Tense stomach? Focus on the sensation.

3. **Breathe through it**: Direct breath to the area of tension. Not to change, but to accompany.

4. **Healthy expression**: Find constructive ways to express emotions - movement, art, conversation, writing.`
      },
      {
        id: "4-5",
        title: "Integrity and Authenticity",
        content: `Integrity means that your actions are aligned with your values. Authenticity means that you present yourself to the world as you really are, without excessive masks.

These virtues are fundamental because without them, all others can be a facade. A person can appear compassionate while hiding ulterior motives. Integrity is what makes virtues genuine.

**Signs of Integrity**:
- Doing the right thing even when no one is watching
- Keeping commitments, even small ones
- Admitting mistakes and seeking to repair them
- Being consistent across different contexts

**Cultivating Authenticity**:

1. **Know your values**: What really matters to you? Not what should matter, but what actually does.

2. **Observe your masks**: We all use social masks. Observe when you are being performative versus genuine.

3. **Take safe risks**: Start being more authentic in safe contexts. Authenticity is a muscle that strengthens with practice.

4. **Accept vulnerability**: Being authentic means accepting that not everyone will like you. And that is okay.`
      }
    ],
    practicalExercise: {
      title: "Exercise: Virtue Map",
      instructions: [
        "List the mentioned virtues: compassion, patience, emotional balance, integrity, authenticity",
        "For each, honestly assess on a scale of 1-10 where you currently are",
        "Identify the virtue with the lowest score - this is your priority growth area",
        "Define one concrete action you can practice this week to develop it",
        "At the end of the week, reflect on the challenges and learnings"
      ]
    },
    finalReflection: `Virtues are the foundation of a well-lived life. They are not restrictions that limit your freedom, but structures that expand it. A person dominated by impulses is not free - they are hostage to their reactions.

The path of virtues is gradual and requires patience with yourself. Each small conscious choice strengthens the virtuous habit. Over time, what was difficult becomes natural.`
  },
  {
    id: "module-5",
    number: 5,
    title: "Practices of Reconnection and Consciousness",
    subtitle: "Exercises applicable daily",
    icon: "lotus",
    introduction: `This final module offers concrete practices you can integrate into your daily life. These are not complex or esoteric rituals, but simple exercises that, applied consistently, can contribute to a more conscious and connected life.

The goal is that you finish this manuscript with practical tools, not just concepts.`,
    sections: [
      {
        id: "5-1",
        title: "Morning Consciousness Routine",
        content: `How you start the day sets the tone for everything that follows. A conscious morning routine can transform your daily experience.

**Elements of a Conscious Morning**:

1. **Before the phone**: The first minutes are precious. Resist the urge to check notifications immediately.

2. **Morning Gratitude**: Still in bed, identify three things you are grateful for. They can be simple.

3. **Intentional Breathing**: 5-10 deep, conscious breaths. This activates the parasympathetic nervous system.

4. **Intention for the Day**: Set a simple intention. It is not a to-do list, but a quality you want to cultivate. "Today I practice patience."

5. **Gentle Movement**: Simple stretches help wake the body gently.

**It doesn't need to be long**: 10-15 minutes are sufficient. Consistency matters more than duration.`
      },
      {
        id: "5-2",
        title: "Conscious Pauses Throughout the Day",
        content: `Consciousness should not be confined to formal practices. The real challenge is bringing presence to ordinary activities.

**The Practice of Pauses**:

Set reminders to pause briefly throughout the day - it can be every hour or at moments of transition (before a meeting, when getting in the car, before eating).

During the pause (1-2 minutes):
- Close your eyes or soften your gaze
- Take three conscious breaths
- Ask: "How am I now?" (body, mind, emotions)
- Resume the activity with renewed presence

**Everyday Activities as Practice**:

- **Eating**: One meal a day in silence, savoring each bite
- **Walking**: Feeling the feet touching the ground, the rhythm of breathing
- **Listening**: In conversations, truly listening, without planning the response

These informal practices are as important as formal meditation. They integrate consciousness into real life.`
      },
      {
        id: "5-3",
        title: "Evening Review Practice",
        content: `Before sleeping, set aside a few minutes for a conscious review of the day. This practice, used in various traditions, promotes self-knowledge and prepares for restorative sleep.

**Review Structure (10-15 minutes)**:

1. **Settle comfortably**, seated or lying down

2. **Rewind the day** mentally, from the present moment to waking up. Observe the main events like a movie.

3. **Identify positive moments**: Where did you act according to your values? What went well?

4. **Identify challenges**: Were there moments of reactivity, impatience, unconsciousness? Observe without judgment.

5. **Thank and forgive**: Be grateful for the day. Forgive yourself and others for failures.

6. **Release the day**: Mentally, "close" the day. What has passed, has passed.

This practice improves sleep quality and progressively increases self-awareness. Patterns you did not perceive begin to become visible.`
      },
      {
        id: "5-4",
        title: "Practices of Reconnection with Nature",
        content: `Nature has a proven effect of psychological restoration. Even in urban environments, it is possible to cultivate connection with the natural world.

**Simple Practices**:

1. **Forest Bathing (Shinrin-yoku)**: Time in green areas, walking slowly, using all senses. If possible, 20 minutes per week already shows benefits.

2. **Sky Observation**: Set aside moments to look at the sky - clouds, stars. This naturally expands perspective.

3. **Contact with Elements**: Flowing water, earth, sun on the skin. Even touching a plant at home can be a reconnection.

4. **Natural Rhythms**: Observe sunrise and sunset when possible. We align our internal rhythms with external ones.

5. **Silence in Nature**: Even in urban parks, there are moments of quietude. Seek them.

Nature demands nothing from us. This absence of demand is profoundly restorative in a world that constantly asks for our attention.`
      },
      {
        id: "5-5",
        title: "Integrating Practices into Your Life",
        content: `The greatest challenge is not learning practices, but integrating them consistently. Here are guidelines to make this more likely:

**Start Small**: It is better to practice 5 minutes daily than 1 hour sporadically. Build the habit before expanding.

**Link to Triggers**: Associate practice with something you already do. "After breakfast, I do my morning practice."

**Have Flexibility**: If you miss a day, don't give up. Resume the next day without drama.

**Track Without Obsessing**: A simple record (practiced/didn't practice) helps with consistency. But don't torture yourself if there are gaps.

**Adapt**: The practices offered are suggestions. Modify them for your context and preferences.

**Be Patient**: Genuine changes take time. Don't expect immediate transformations. Commit to the process, not specific outcomes.

**Seek Community**: If possible, find others who share this journey. Group practice strengthens individual motivation.`
      }
    ],
    practicalExercise: {
      title: "Exercise: Personal Practice Plan",
      instructions: [
        "Review all practices presented in this module",
        "Choose ONE practice from each category: morning, daily (pauses), evening, nature",
        "Create a realistic schedule for your week",
        "Set phone reminders if necessary",
        "At the end of the week, evaluate: What worked? What needs adjustment?",
        "Continue refining your plan in the following weeks"
      ]
    },
    finalReflection: `This module concludes the main content of the Sacred Manuscript. You now possess a set of practical tools for your journey of self-discovery.

Remember: the manuscript is not the destination, but a map. The territory is your own life. True practice happens when you close this app and return to your everyday activities.

May the practices offered here serve as seeds that you cultivate with patience and dedication. The fruits will come in due time.`
  }
];

export const conclusionContent = {
  title: "Conclusion of the Journey",
  mainText: `You have reached the end of this Sacred Manuscript. But, like every true journey of self-discovery, this is more a beginning than an end.

The concepts explored, the exercises practiced, and the reflections recorded are tools that are now part of your repertoire. They do not lose value over time - on the contrary, they deepen as you revisit them with new life experience.`,
  encouragement: `We encourage you to:

• **Revisit the modules** periodically. You will find new meanings with each reading.

• **Maintain regular practice**. Consistency is more important than intensity.

• **Use the journal** as your journey companion. It is the record of your evolution.

• **Be patient** with yourself. Genuine transformation is gradual and not always linear.

• **Share** what you learned in ways that respect your unique experience.`,
  finalWords: `The Sacred Manuscript was created as an educational and reflective guide. We do not promise miracles or guaranteed results. What we offer are tools that, when applied with sincerity and consistency, can contribute to a more conscious and meaningful life.

True wisdom is not in these pages - it is in you. This manuscript is only a mirror that helps you see what already exists.

May your journey continue with clarity, purpose, and inner peace.`
};

export const creditsContent = {
  title: "Credits and References",
  culturalReferences: [
    {
      tradition: "Greek Philosophy",
      description: "Socrates, Plato, and Aristotle contributed the foundations of virtue ethics and Western self-knowledge. The Socratic method of questioning and Aristotelian ethics inform various practices in this manuscript."
    },
    {
      tradition: "Eastern Contemplative Traditions",
      description: "Buddhism, Hinduism, and Taoism developed over millennia practices of meditation and self-observation. Concepts like mindfulness and compassion have roots in these traditions."
    },
    {
      tradition: "Depth Psychology",
      description: "Carl Jung, with his work on archetypes and the collective unconscious, offers a bridge between traditional symbolism and modern psychology. His ideas inform our approach to symbols."
    },
    {
      tradition: "Hermeticism and Esoteric Traditions",
      description: "Hermetic texts from Hellenistic Egypt and subsequent traditions explore the correspondence between macrocosm and microcosm. Their symbolic language echoes in our approach."
    },
    {
      tradition: "Stoicism",
      description: "Marcus Aurelius, Seneca, and Epictetus developed practices of self-discipline and acceptance that remain relevant. Daily review and focus on what is under our control come from this tradition."
    }
  ],
  disclaimer: `This material is educational and reflective. It does not replace medical, psychological, or psychiatric treatment when necessary. The practices described here are safe for most people, but if you have mental health conditions, consult a professional before starting.

We make no promises of specific results. The impact of practices depends on multiple factors, including your engagement and individual circumstances.

The symbols and archetypes used are psychological tools, not literal claims about supernatural entities. We respect all beliefs, but our content is fundamentally educational and non-religious.`,
  team: "The Sacred Manuscript was developed with care, combining wisdom from multiple traditions in an accessible and contemporary language. Our commitment is to quality, integrity, and real value for you."
};
