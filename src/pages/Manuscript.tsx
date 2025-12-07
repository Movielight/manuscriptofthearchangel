import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ChevronRight, RotateCcw, BookOpen, Shield, Heart, Sun, Moon, Eye, Calendar, Feather } from "lucide-react";

type Screen = "home" | "revelation" | "prayer" | "code" | "ritual" | "signs" | "path" | "conclusion";

const Manuscript = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>("home");

  const fadeVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  const screens: Screen[] = ["home", "revelation", "prayer", "code", "ritual", "signs", "path", "conclusion"];
  const currentIndex = screens.indexOf(currentScreen);
  const progress = currentIndex / (screens.length - 1);

  const renderScreen = () => {
    switch (currentScreen) {
      case "home":
        return <HomeScreen onNext={() => setCurrentScreen("revelation")} />;
      case "revelation":
        return <RevelationScreen onNext={() => setCurrentScreen("prayer")} />;
      case "prayer":
        return <PrayerScreen onNext={() => setCurrentScreen("code")} />;
      case "code":
        return <CodeScreen onNext={() => setCurrentScreen("ritual")} />;
      case "ritual":
        return <RitualScreen onNext={() => setCurrentScreen("signs")} />;
      case "signs":
        return <SignsScreen onNext={() => setCurrentScreen("path")} />;
      case "path":
        return <PathScreen onNext={() => setCurrentScreen("conclusion")} />;
      case "conclusion":
        return <ConclusionScreen onRestart={() => setCurrentScreen("home")} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-manuscript-dark text-manuscript-light">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-manuscript-purple/20 via-manuscript-dark to-manuscript-dark pointer-events-none" />
      
      {/* Progress bar */}
      {currentScreen !== "home" && (
        <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-manuscript-purple/20">
          <motion.div 
            className="h-full bg-gradient-to-r from-manuscript-gold to-manuscript-gold/70"
            initial={{ width: 0 }}
            animate={{ width: `${progress * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      )}
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentScreen}
          variants={fadeVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          {renderScreen()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

// Ornament Component
const Ornament = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center justify-center gap-3 my-6 ${className}`}>
    <div className="h-px w-16 bg-gradient-to-r from-transparent to-manuscript-gold/50" />
    <Sparkles className="w-4 h-4 text-manuscript-gold" />
    <div className="h-px w-16 bg-gradient-to-l from-transparent to-manuscript-gold/50" />
  </div>
);

// Section Title
const SectionTitle = ({ icon: Icon, title, subtitle }: { icon: React.ElementType; title: string; subtitle?: string }) => (
  <div className="text-center mb-10">
    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-manuscript-gold/20 to-manuscript-purple/20 border border-manuscript-gold/30 mb-6">
      <Icon className="w-8 h-8 text-manuscript-gold" />
    </div>
    <h2 className="font-heading text-3xl md:text-4xl font-bold text-manuscript-gold mb-3">
      {title}
    </h2>
    {subtitle && (
      <p className="font-heading text-lg text-manuscript-light/60 italic">
        {subtitle}
      </p>
    )}
    <Ornament />
  </div>
);

// Navigation Button
const NavButton = ({ onClick, children }: { onClick: () => void; children: React.ReactNode }) => (
  <button
    onClick={onClick}
    className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-manuscript-gold/20 to-manuscript-purple/20 border border-manuscript-gold/30 rounded-lg text-manuscript-gold font-heading text-xl hover:from-manuscript-gold/30 hover:to-manuscript-purple/30 hover:border-manuscript-gold/50 transition-all duration-300"
  >
    {children}
    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
  </button>
);

// Content Card
const ContentCard = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-manuscript-purple/10 border border-manuscript-gold/20 rounded-xl p-6 md:p-8 ${className}`}>
    {children}
  </div>
);

// Home Screen
const HomeScreen = ({ onNext }: { onNext: () => void }) => (
  <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 text-center">
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="mb-8"
    >
      <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-manuscript-gold/30 to-manuscript-purple/30 flex items-center justify-center border-2 border-manuscript-gold/30 shadow-lg shadow-manuscript-gold/10">
        <BookOpen className="w-12 h-12 text-manuscript-gold" />
      </div>
    </motion.div>
    
    <motion.h1 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-manuscript-gold mb-4 leading-tight"
    >
      The Sacred Manuscript<br />of the Archangel
    </motion.h1>
    
    <motion.p 
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="font-heading text-xl md:text-2xl text-manuscript-light/70 italic mb-8 max-w-xl"
    >
      "The forgotten prayer that returns to your destiny"
    </motion.p>
    
    <Ornament />
    
    <motion.p 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className="text-manuscript-light/60 max-w-lg mb-10 font-body"
    >
      Embark on a sacred journey of spiritual transformation. Within these pages lies ancient wisdom, 
      divine prayers, and celestial codes that have been preserved for those ready to receive them.
    </motion.p>
    
    <motion.button
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 1 }}
      onClick={onNext}
      className="px-12 py-5 bg-gradient-to-r from-manuscript-gold to-manuscript-gold/80 text-manuscript-dark font-heading text-2xl font-semibold rounded-lg hover:from-manuscript-gold/90 hover:to-manuscript-gold/70 transition-all duration-300 shadow-lg shadow-manuscript-gold/20 hover:shadow-manuscript-gold/30"
    >
      Begin Your Journey
    </motion.button>
    
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.2 }}
      className="mt-10 flex items-center gap-6 text-manuscript-light/40 text-sm"
    >
      <span className="flex items-center gap-2">
        <Shield className="w-4 h-4" /> Protection
      </span>
      <span className="flex items-center gap-2">
        <Heart className="w-4 h-4" /> Healing
      </span>
      <span className="flex items-center gap-2">
        <Sparkles className="w-4 h-4" /> Restoration
      </span>
    </motion.div>
  </div>
);

// Revelation Screen
const RevelationScreen = ({ onNext }: { onNext: () => void }) => (
  <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16 max-w-4xl mx-auto">
    <SectionTitle 
      icon={Eye} 
      title="The Revelation" 
      subtitle="The Hidden Origins of Sacred Wisdom"
    />
    
    <div className="space-y-6 text-manuscript-light/85 text-lg leading-relaxed font-body">
      <ContentCard>
        <h3 className="font-heading text-xl text-manuscript-gold mb-3">The Ancient Discovery</h3>
        <p>
          For centuries, this manuscript remained concealed within the depths of a forgotten monastery, 
          guarded by those who swore an oath to protect its secrets until the appointed time. 
          The walls themselves seemed to whisper of the power contained within its pages.
        </p>
      </ContentCard>
      
      <ContentCard>
        <h3 className="font-heading text-xl text-manuscript-gold mb-3">The Divine Transmission</h3>
        <p>
          Legend tells of a scribe who, in a state of spiritual ecstasy, received directly from the Archangel 
          the words you are about to read. These prayers were so powerful that they were deemed too 
          dangerous for common knowledge. The energy they carried could reshape reality itself.
        </p>
      </ContentCard>
      
      <ContentCard>
        <h3 className="font-heading text-xl text-manuscript-gold mb-3">The Emergence</h3>
        <p>
          The Church concealed them. The sages feared them. But light cannot be imprisoned forever. 
          What was hidden in darkness now emerges into the world, seeking those whose hearts are 
          pure enough to receive its blessings.
        </p>
      </ContentCard>
      
      <div className="text-center py-6">
        <p className="text-manuscript-gold italic font-heading text-xl">
          "Now, through you, these sacred words return to the world.<br />
          The Archangel chose this moment. The Archangel chose you."
        </p>
      </div>
      
      <ContentCard className="border-manuscript-gold/40">
        <p className="text-center">
          Prepare your heart and mind. What you are about to receive is not merely a prayer — 
          it is a key that opens portals long sealed within your soul. 
          Read with reverence, for sacred ground awaits.
        </p>
      </ContentCard>
    </div>
    
    <div className="mt-12">
      <NavButton onClick={onNext}>Continue to the Prayer</NavButton>
    </div>
  </div>
);

// Prayer Screen
const PrayerScreen = ({ onNext }: { onNext: () => void }) => (
  <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16 max-w-4xl mx-auto">
    <SectionTitle 
      icon={Feather} 
      title="The Forbidden Prayer of the Archangel" 
      subtitle="Words of Power Preserved Through Ages"
    />
    
    <ContentCard className="my-8 border-manuscript-gold/30">
      <div className="font-heading text-xl md:text-2xl text-manuscript-light leading-loose text-center italic space-y-6">
        <p>
          "O Guardian of the Celestial Spheres,<br />
          Who carries the sword of truth and the mantle of light,<br />
          I invoke you in this sacred moment.
        </p>
        
        <p>
          May your wings of fire embrace my soul,<br />
          Dissolving every shadow that does not belong to me,<br />
          Every burden that is not mine to carry.
        </p>
        
        <p>
          Seal my paths with your divine protection,<br />
          Heal the invisible wounds that bleed in silence,<br />
          Restore what was lost, awaken what lay dormant.
        </p>
        
        <p>
          I am worthy of receiving your grace.<br />
          I am a channel for your light.<br />
          I am protected, healed, restored.
        </p>
        
        <p className="text-manuscript-gold text-2xl">
          So it shall be, so it is, so it will remain.<br />
          Amen."
        </p>
      </div>
    </ContentCard>
    
    <div className="grid md:grid-cols-3 gap-4 w-full mb-8">
      <ContentCard className="text-center">
        <Shield className="w-8 h-8 text-manuscript-gold mx-auto mb-3" />
        <h4 className="font-heading text-lg text-manuscript-gold mb-2">Protection</h4>
        <p className="text-sm text-manuscript-light/70">Shield against negative energies and harmful intentions</p>
      </ContentCard>
      <ContentCard className="text-center">
        <Heart className="w-8 h-8 text-manuscript-gold mx-auto mb-3" />
        <h4 className="font-heading text-lg text-manuscript-gold mb-2">Healing</h4>
        <p className="text-sm text-manuscript-light/70">Restoration of mind, body, and spirit</p>
      </ContentCard>
      <ContentCard className="text-center">
        <Sparkles className="w-8 h-8 text-manuscript-gold mx-auto mb-3" />
        <h4 className="font-heading text-lg text-manuscript-gold mb-2">Renewal</h4>
        <p className="text-sm text-manuscript-light/70">Awakening of dormant spiritual gifts</p>
      </ContentCard>
    </div>
    
    <p className="text-manuscript-light/60 text-center text-sm mb-8 max-w-lg font-body">
      Read this prayer aloud or in profound silence. Feel each word resonate within your being. 
      The Archangel hears not the volume of your voice, but the sincerity of your heart.
    </p>
    
    <NavButton onClick={onNext}>Reveal the Sacred Code</NavButton>
  </div>
);

// Code Screen
const CodeScreen = ({ onNext }: { onNext: () => void }) => (
  <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16 max-w-4xl mx-auto">
    <SectionTitle 
      icon={Sun} 
      title="The Sacred Code" 
      subtitle="Divine Numerical Sequence of Activation"
    />
    
    <div className="my-10 text-center">
      <div className="inline-flex items-center gap-4 md:gap-6 px-10 md:px-16 py-10 bg-gradient-to-br from-manuscript-gold/10 to-manuscript-purple/10 border-2 border-manuscript-gold/40 rounded-2xl shadow-lg shadow-manuscript-gold/5">
        <div className="text-center">
          <span className="font-heading text-5xl md:text-7xl font-bold text-manuscript-gold block">7</span>
          <span className="text-xs text-manuscript-light/50 mt-2 block">DIVINE</span>
        </div>
        <span className="font-heading text-3xl text-manuscript-light/30">—</span>
        <div className="text-center">
          <span className="font-heading text-5xl md:text-7xl font-bold text-manuscript-gold block">11</span>
          <span className="text-xs text-manuscript-light/50 mt-2 block">PORTAL</span>
        </div>
        <span className="font-heading text-3xl text-manuscript-light/30">—</span>
        <div className="text-center">
          <span className="font-heading text-5xl md:text-7xl font-bold text-manuscript-gold block">9</span>
          <span className="text-xs text-manuscript-light/50 mt-2 block">COMPLETION</span>
        </div>
      </div>
    </div>
    
    <ContentCard className="text-center mb-8">
      <p className="font-heading text-2xl md:text-3xl text-manuscript-gold italic">
        "I awaken, I receive, I complete."
      </p>
      <p className="text-manuscript-light/60 text-sm mt-3">
        — The Sacred Mantra of Activation
      </p>
    </ContentCard>
    
    <div className="grid md:grid-cols-3 gap-4 w-full mb-8">
      <ContentCard>
        <div className="text-center">
          <span className="font-heading text-4xl font-bold text-manuscript-gold">7</span>
          <h4 className="font-heading text-lg text-manuscript-gold my-2">Divine Perfection</h4>
          <p className="text-sm text-manuscript-light/70">
            Represents the seven heavens, the seven archangels, and the seven days of creation. 
            It is the number of spiritual completion and divine order.
          </p>
        </div>
      </ContentCard>
      
      <ContentCard>
        <div className="text-center">
          <span className="font-heading text-4xl font-bold text-manuscript-gold">11</span>
          <h4 className="font-heading text-lg text-manuscript-gold my-2">The Gateway</h4>
          <p className="text-sm text-manuscript-light/70">
            The portal between worlds. The master number that connects the visible to the invisible, 
            the earthly to the celestial realm.
          </p>
        </div>
      </ContentCard>
      
      <ContentCard>
        <div className="text-center">
          <span className="font-heading text-4xl font-bold text-manuscript-gold">9</span>
          <h4 className="font-heading text-lg text-manuscript-gold my-2">Sacred Completion</h4>
          <p className="text-sm text-manuscript-light/70">
            The closing of cycles and complete manifestation. 
            Nine carries the energy of universal love and spiritual enlightenment.
          </p>
        </div>
      </ContentCard>
    </div>
    
    <ContentCard className="border-manuscript-gold/30 text-center">
      <h4 className="font-heading text-lg text-manuscript-gold mb-2">Practice Instructions</h4>
      <p className="text-manuscript-light/70 text-sm">
        Repeat this code three times before sleep for 7 consecutive days. 
        As you speak each number, visualize golden light emanating from your heart center, 
        expanding outward to fill your entire being.
      </p>
    </ContentCard>
    
    <div className="mt-10">
      <NavButton onClick={onNext}>Learn the Activation Ritual</NavButton>
    </div>
  </div>
);

// Ritual Screen
const RitualScreen = ({ onNext }: { onNext: () => void }) => (
  <div className="min-h-screen flex flex-col items-center px-6 py-16 max-w-4xl mx-auto">
    <SectionTitle 
      icon={Moon} 
      title="The Written Activation Ritual" 
      subtitle="Six Sacred Steps to Awakening"
    />
    
    <p className="text-manuscript-light/70 text-center mb-10 max-w-2xl font-body">
      Follow these six steps in a moment of silence and retreat. Create a sacred space free from distractions. 
      Light a candle if available, and approach each step with reverence and intention.
    </p>
    
    <div className="space-y-5 w-full">
      {[
        {
          step: 1,
          title: "Reading",
          description: "Read the Forbidden Prayer of the Archangel aloud, slowly and deliberately. Pause between verses. Feel the weight and power of each sacred word as it leaves your lips and enters the universe.",
          icon: BookOpen
        },
        {
          step: 2,
          title: "Breathing",
          description: "Close your eyes. Inhale deeply counting to 7, allowing divine light to enter your lungs. Hold for 4 counts, letting the light infuse your cells. Exhale for 8 counts, releasing all that no longer serves you. Repeat 3 times.",
          icon: Sun
        },
        {
          step: 3,
          title: "Code Repetition",
          description: "Speak the sacred code '7-11-9' three times aloud, followed by the mantra: 'I awaken, I receive, I complete.' Feel the vibration of each number resonating through your body.",
          icon: Sparkles
        },
        {
          step: 4,
          title: "Visualization",
          description: "Imagine a brilliant golden light descending from above, entering through the crown of your head. Watch as it flows through every part of your being, filling each cell with divine radiance and healing energy.",
          icon: Eye
        },
        {
          step: 5,
          title: "Intention",
          description: "Declare mentally or aloud that which you wish to heal, protect, or restore in your life. Be specific. The universe responds to clarity. Speak your intention as if it has already manifested.",
          icon: Heart
        },
        {
          step: 6,
          title: "Closing",
          description: "Thank the Archangel for their presence and guidance. Say: 'Gratitude for the light. The ritual is complete. I am transformed.' Open your eyes slowly, carrying the sacred energy with you.",
          icon: Shield
        }
      ].map((item) => (
        <ContentCard key={item.step} className="flex gap-5">
          <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-manuscript-gold/20 to-manuscript-purple/20 flex items-center justify-center border border-manuscript-gold/30">
            <span className="font-heading text-2xl font-bold text-manuscript-gold">{item.step}</span>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <item.icon className="w-4 h-4 text-manuscript-gold" />
              <h3 className="font-heading text-xl text-manuscript-gold">{item.title}</h3>
            </div>
            <p className="text-manuscript-light/70 text-sm font-body leading-relaxed">{item.description}</p>
          </div>
        </ContentCard>
      ))}
    </div>
    
    <ContentCard className="mt-8 border-manuscript-gold/30 text-center">
      <p className="text-manuscript-light/60 text-sm italic">
        Perform this ritual at the same time each day for maximum effect. 
        Dawn or dusk are particularly powerful times when the veil between worlds is thinnest.
      </p>
    </ContentCard>
    
    <div className="mt-10">
      <NavButton onClick={onNext}>Discover the Signs</NavButton>
    </div>
  </div>
);

// Signs Screen
const SignsScreen = ({ onNext }: { onNext: () => void }) => (
  <div className="min-h-screen flex flex-col items-center px-6 py-16 max-w-4xl mx-auto">
    <SectionTitle 
      icon={Eye} 
      title="Guide to Interpreting Signs" 
      subtitle="Recognizing Divine Messages in Your Life"
    />
    
    <p className="text-manuscript-light/70 text-center mb-10 max-w-2xl font-body">
      After the activation of the ritual, the Archangel may send signs and confirmations. 
      Stay attentive to these manifestations. They are not coincidences—they are sacred communications.
    </p>
    
    <div className="grid md:grid-cols-2 gap-4 w-full mb-8">
      {[
        {
          sign: "White or Golden Feathers",
          meaning: "Confirmation of active angelic protection. The Archangel is near, watching over you. This is a direct sign that your prayers have been heard.",
          intensity: "Strong"
        },
        {
          sign: "Repeated Numbers (11:11, 7:07, 9:09)",
          meaning: "A portal has opened. Your connection to the divine is strengthened. Pay attention to your thoughts at these moments—they carry prophetic weight.",
          intensity: "Strong"
        },
        {
          sign: "Sensation of Warmth or Chills",
          meaning: "Spiritual presence detected. The energy of the Archangel is touching your energetic field, aligning your vibrations with higher frequencies.",
          intensity: "Moderate"
        },
        {
          sign: "Vivid or Lucid Dreams",
          meaning: "Messages are being transmitted through the dream realm. Keep a journal by your bed and record these visions upon waking—they contain guidance.",
          intensity: "Strong"
        },
        {
          sign: "Unexpected Encounters",
          meaning: "People or situations aligned by divine orchestration crossing your path. These are not random—they are answers to prayers or lessons to be received.",
          intensity: "Moderate"
        },
        {
          sign: "Sudden Peace Amid Chaos",
          meaning: "The mantle of protection is active. You are being shielded from the storm. This inexplicable calm is proof of divine intervention.",
          intensity: "Strong"
        },
        {
          sign: "Ringing in the Ears",
          meaning: "High-frequency transmissions being received. The celestial realm is downloading information. Find quiet and meditate when this occurs.",
          intensity: "Moderate"
        },
        {
          sign: "Animals Behaving Unusually",
          meaning: "Nature recognizes the shift in your energy. Animals are sensitive to spiritual transformation and may be drawn to or acknowledge you differently.",
          intensity: "Subtle"
        }
      ].map((item, index) => (
        <ContentCard key={index}>
          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-manuscript-gold flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-heading text-lg text-manuscript-gold mb-2">{item.sign}</h3>
              <p className="text-manuscript-light/70 text-sm font-body">{item.meaning}</p>
              <span className={`inline-block mt-3 text-xs px-2 py-1 rounded ${
                item.intensity === "Strong" ? "bg-manuscript-gold/20 text-manuscript-gold" :
                item.intensity === "Moderate" ? "bg-manuscript-purple/30 text-manuscript-light/70" :
                "bg-manuscript-purple/20 text-manuscript-light/50"
              }`}>
                {item.intensity} Sign
              </span>
            </div>
          </div>
        </ContentCard>
      ))}
    </div>
    
    <ContentCard className="border-manuscript-gold/30 text-center">
      <p className="text-manuscript-gold italic font-heading text-lg mb-2">
        "Synchronicities are not coincidences."
      </p>
      <p className="text-manuscript-light/60 text-sm">
        They are the language of the universe confirming your awakening. 
        The more you acknowledge them, the more frequently they appear.
      </p>
    </ContentCard>
    
    <div className="mt-10">
      <NavButton onClick={onNext}>Begin the 7-Day Path</NavButton>
    </div>
  </div>
);

// Path Screen
const PathScreen = ({ onNext }: { onNext: () => void }) => (
  <div className="min-h-screen flex flex-col items-center px-6 py-16 max-w-4xl mx-auto">
    <SectionTitle 
      icon={Calendar} 
      title="The 7-Day Path of the Archangel" 
      subtitle="A Week of Spiritual Transformation"
    />
    
    <p className="text-manuscript-light/70 text-center mb-10 max-w-2xl font-body">
      Over the next 7 days, follow these daily guidelines to consolidate your transformation. 
      Each day builds upon the last, creating a foundation for lasting spiritual change.
    </p>
    
    <div className="space-y-4 w-full">
      {[
        { 
          day: 1, 
          theme: "Intention", 
          instruction: "Write your deepest intention on a piece of paper. Be specific about what you wish to manifest. Carry this paper with you throughout the entire journey. Read it each morning upon waking.",
          focus: "Clarity & Direction"
        },
        { 
          day: 2, 
          theme: "Gratitude", 
          instruction: "List 7 things for which you are grateful—one for each celestial sphere. Read this list before sleep, feeling genuine appreciation for each blessing. Gratitude opens the channels of abundance.",
          focus: "Appreciation & Abundance"
        },
        { 
          day: 3, 
          theme: "Liberation", 
          instruction: "Forgive one person today—this may be yourself. Write their name, then say aloud: 'I release you. I release myself. We are both free.' Burn or bury the paper as a symbolic release.",
          focus: "Forgiveness & Freedom"
        },
        { 
          day: 4, 
          theme: "Healing", 
          instruction: "Place your hands over your heart. Feel your heartbeat—the rhythm of life. Repeat the Archangel's Prayer three times, visualizing green healing light mending all inner wounds.",
          focus: "Restoration & Wholeness"
        },
        { 
          day: 5, 
          theme: "Opening", 
          instruction: "Say yes to something new today. A conversation you would normally avoid, a different path to walk, an unexplored possibility. The Archangel speaks through new experiences.",
          focus: "Expansion & Growth"
        },
        { 
          day: 6, 
          theme: "Silence", 
          instruction: "Reserve 15 minutes in absolute silence. No devices, no distractions. Simply breathe and listen. In the silence, the divine whispers. Be present for its message.",
          focus: "Reception & Listening"
        },
        { 
          day: 7, 
          theme: "Reaffirmation", 
          instruction: "Perform the complete activation ritual. Then declare: 'I am protected. I am healed. I am restored. I am transformed. So it is.' Your journey of awakening is now sealed.",
          focus: "Completion & Integration"
        }
      ].map((item) => (
        <ContentCard key={item.day} className="flex gap-5">
          <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-manuscript-gold/20 to-manuscript-purple/20 flex flex-col items-center justify-center border border-manuscript-gold/30">
            <span className="text-xs text-manuscript-light/50 uppercase tracking-wider">Day</span>
            <span className="font-heading text-2xl font-bold text-manuscript-gold">{item.day}</span>
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <h3 className="font-heading text-xl text-manuscript-gold">{item.theme}</h3>
              <span className="text-xs px-2 py-0.5 bg-manuscript-purple/20 text-manuscript-light/60 rounded">
                {item.focus}
              </span>
            </div>
            <p className="text-manuscript-light/70 text-sm font-body leading-relaxed">{item.instruction}</p>
          </div>
        </ContentCard>
      ))}
    </div>
    
    <div className="mt-10">
      <NavButton onClick={onNext}>Complete the Manuscript</NavButton>
    </div>
  </div>
);

// Conclusion Screen
const ConclusionScreen = ({ onRestart }: { onRestart: () => void }) => (
  <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16 max-w-3xl mx-auto text-center">
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.6, type: "spring" }}
      className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-br from-manuscript-gold/40 to-manuscript-purple/40 flex items-center justify-center border-2 border-manuscript-gold/40 shadow-lg shadow-manuscript-gold/20"
    >
      <Sparkles className="w-10 h-10 text-manuscript-gold" />
    </motion.div>
    
    <h2 className="font-heading text-3xl md:text-4xl font-bold text-manuscript-gold mb-6">
      The Manuscript Has Been Revealed
    </h2>
    
    <Ornament />
    
    <div className="my-8 space-y-4">
      <p className="font-heading text-2xl text-manuscript-light/90 italic">
        "The light that was awakened today will follow you always."
      </p>
      <p className="font-heading text-xl text-manuscript-light/70 italic">
        The Archangel walks beside you.<br />
        You are never alone.
      </p>
    </div>
    
    <ContentCard className="mb-10 max-w-lg">
      <h3 className="font-heading text-xl text-manuscript-gold mb-4">Your Spiritual Journey Continues</h3>
      <ul className="text-manuscript-light/70 text-sm font-body space-y-2 text-left">
        <li className="flex items-start gap-2">
          <Sparkles className="w-4 h-4 text-manuscript-gold flex-shrink-0 mt-0.5" />
          Return to this manuscript whenever you need to renew your connection
        </li>
        <li className="flex items-start gap-2">
          <Sparkles className="w-4 h-4 text-manuscript-gold flex-shrink-0 mt-0.5" />
          Practice the prayer daily for continued protection and guidance
        </li>
        <li className="flex items-start gap-2">
          <Sparkles className="w-4 h-4 text-manuscript-gold flex-shrink-0 mt-0.5" />
          Record the signs you receive in a dedicated journal
        </li>
        <li className="flex items-start gap-2">
          <Sparkles className="w-4 h-4 text-manuscript-gold flex-shrink-0 mt-0.5" />
          Share the light with others who seek transformation
        </li>
      </ul>
    </ContentCard>
    
    <p className="text-manuscript-light/60 mb-10 font-body max-w-md">
      May this sacred knowledge illuminate your path and transform your journey. 
      The Archangel has heard your call. Trust in the process. 
      Your awakening has begun.
    </p>
    
    <button
      onClick={onRestart}
      className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-manuscript-gold/40 rounded-lg text-manuscript-gold font-heading text-lg hover:bg-manuscript-gold/10 transition-all"
    >
      <RotateCcw className="w-5 h-5" />
      Return to the Beginning
    </button>
    
    <p className="mt-10 text-manuscript-light/40 text-xs">
      ✦ The Sacred Manuscript of the Archangel ✦
    </p>
  </div>
);

export default Manuscript;
