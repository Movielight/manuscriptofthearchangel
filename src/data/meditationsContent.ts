// Guided Meditation Content for the Sacred Manuscript

export interface Meditation {
  id: string;
  title: string;
  subtitle: string;
  duration: number; // in minutes
  icon: string;
  preparation: string;
  purpose: string;
  instructions: string[];
  closingGuidance: string;
}

export const meditations: Meditation[] = [
  {
    id: "meditation-clarity",
    title: "Mental Clarity Meditation",
    subtitle: "Dissolve the fog of thoughts",
    duration: 10,
    icon: "brain",
    preparation: `Before starting this meditation, prepare your environment:

• Choose a quiet place where you won't be interrupted
• Silence electronic devices
• Sit comfortably - it can be on a chair with feet on the floor or on a cushion on the ground
• Keep your spine erect, but without rigidity
• Release your shoulders and relax your hands on your thighs or lap`,
    purpose: `The Mental Clarity Meditation aims to calm mental agitation and create space between you and your thoughts.

When the mind is agitated, it's like looking at a lake with a turbulent surface - we cannot see what is below. This practice allows the agitation to calm, revealing natural clarity.

This is not a practice to "empty the mind" - that is a myth. Thoughts will continue to arise. The goal is to change your relationship with them: from automatic involvement to conscious observation.`,
    instructions: [
      "Close your eyes and take three deep breaths, exhaling slowly",
      "Allow your breathing to find its natural rhythm - don't try to control it",
      "Direct your attention to the sensation of air entering and leaving through the nostrils",
      "When you notice you've been distracted by thoughts, simply note this and gently return to the breath",
      "Don't judge yourself for getting distracted - this is natural and part of the process",
      "Imagine that your thoughts are clouds passing in a vast sky - you are the sky, not the clouds",
      "Continue for 10 minutes, always returning to the breath when you get lost",
      "In the final minutes, expand your attention to include the whole body",
      "Gradually return your attention to the external environment before opening your eyes"
    ],
    closingGuidance: `When finishing, don't get up immediately. Allow a few moments of transition.

Observe the quality of your mind now compared to the beginning. There may be more space, more calm. Or there may not be - and that's also fine. The benefits of meditation accumulate with regular practice, not necessarily in each individual session.

Carry with you the reminder that you can access this space of clarity at any time, even briefly, through a few conscious breaths.`
  },
  {
    id: "meditation-gratitude",
    title: "Gratitude Meditation",
    subtitle: "Cultivate appreciation for the present moment",
    duration: 12,
    icon: "heart",
    preparation: `For this gratitude practice, create a welcoming environment:

• Choose a time of day when you are not rushed
• If you wish, light a candle or use soft lighting
• Sit in a comfortable and dignified manner
• You may have your journal nearby to record insights after the practice
• Breathe a few times to transition from "doing" mode to "being" mode`,
    purpose: `Gratitude is one of the most researched practices in positive psychology, with proven benefits for mental and physical well-being.

This meditation is not about forcing positive feelings or denying difficulties. It's about training your attention to also perceive what is working, what is good, what sustains your life - elements that often go unnoticed.

The human brain evolved to focus on problems and threats. This was useful for survival, but can leave us chronically focused on the negative. Gratitude practice offers a conscious counterbalance.`,
    instructions: [
      "Close your eyes and settle into the seated position with a few deep breaths",
      "Bring to mind something simple you are grateful for - it can be something obvious like health, or something subtle like the air you breathe",
      "Don't just think about it - feel the gratitude in your body. Where does it reside? Perhaps in the chest, the face?",
      "Stay with this sensation for a few moments, savoring it",
      "Now, bring to mind a person you are grateful for. Visualize them clearly",
      "Feel gratitude for this person being in your life. What qualities of theirs do you appreciate?",
      "Next, consider a recent challenge and look for something in it to be grateful for - perhaps a learning or strength you discovered in yourself",
      "Expand your gratitude to include your body, which sustains your life every moment",
      "Finally, feel gratitude for yourself - for being here, practicing, seeking growth",
      "Allow the feeling of gratitude to radiate throughout your entire body",
      "Gradually bring your attention back to the environment and open your eyes"
    ],
    closingGuidance: `Gratitude cultivated in meditation can extend into your daily life.

Consider establishing a small ritual: three things you're grateful for when waking up or before sleeping. Writing amplifies the effect.

Remember: authentic gratitude does not deny difficulties. It's possible to be grateful and face challenges simultaneously. Gratitude is not escapism - it's a balanced perspective.`
  },
  {
    id: "meditation-focus",
    title: "Focus and Presence Meditation",
    subtitle: "Anchor yourself in the here and now",
    duration: 15,
    icon: "target",
    preparation: `This meditation works with sensory presence. Prepare yourself like this:

• Choose a relatively quiet environment
• Wear comfortable clothes that don't restrict
• Remove glasses, watches, or other items that might distract
• Make sure you're not excessively hungry or just ate too much
• Sit with your spine erect, allowing breath to flow freely`,
    purpose: `Full presence - being completely here, now - is simultaneously simple and profound. Simple because it requires nothing special. Profound because we rarely experience it fully.

Most of the time we live in thoughts about the past or future. Even when the body is here, the mind is elsewhere. This meditation trains the ability to gather attention in the present moment.

The focus developed here has practical applications: better concentration at work, more genuine presence in relationships, and greater ability to respond (rather than react) to life situations.`,
    instructions: [
      "Close your eyes and take a few deep breaths to make the transition",
      "Feel the weight of your body on the surface you're sitting on - the solidity that supports you",
      "Mentally scan your body from head to toe, noticing sensations without trying to change them",
      "Now, focus all your attention on the sensations in your hands. What do you perceive? Temperature, tingling, pulsation?",
      "Expand the focus to include sounds around you. Don't label them - just listen",
      "Notice distant sounds, nearby sounds, and the silence between them",
      "Bring attention to the rhythm of your breathing. Follow each inhalation from beginning to end",
      "Follow each exhalation, noticing the small pause before the next inhalation",
      "If thoughts arise, note them briefly and return to the sensations of the moment",
      "In the final minutes, allow your attention to expand to include the entire field of experience: body, sounds, breath, space",
      "Feel yourself present, alive, here",
      "Slowly move your fingers and toes before opening your eyes"
    ],
    closingGuidance: `The presence cultivated in this meditation is always available to you - not just on the meditation cushion.

Throughout the day, you can practice "micro-presences": a few seconds of full attention to the sensations in your hands, or three conscious breaths. These mini-practices accumulate and strengthen your capacity for presence.

Observe how you feel when present versus when lost in thoughts. This direct observation is more valuable than any theory.`
  }
];

export const meditationsIntroduction = {
  title: "Guided Meditations",
  subtitle: "Contemplative practices for your development",
  description: `The meditations offered here are safe practices, based on recognized contemplative traditions and adapted for the contemporary context.

They do not require specific beliefs and can be practiced by anyone, regardless of religious or spiritual background.

The benefits of regular meditation include stress reduction, improved focus, and greater self-awareness. These benefits are supported by scientific research, although individual results vary.`,
  tips: [
    "Start with short sessions and gradually increase",
    "Regularity is more important than duration",
    "There is no 'perfect' meditation - thoughts are part of the process",
    "Use the built-in timer or set a gentle alarm",
    "If possible, practice at the same time each day"
  ],
  disclaimer: "If you have mental health conditions, consult a professional before starting a regular meditative practice."
};
