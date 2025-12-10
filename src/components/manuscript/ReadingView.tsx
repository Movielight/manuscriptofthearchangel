import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, 
  ChevronLeft, 
  BookOpen, 
  Eye, 
  Feather, 
  Sun, 
  Sparkles as SparklesIcon,
  Shield,
  Bookmark,
  BookmarkCheck
} from 'lucide-react';
import { ManuscriptProgress } from '@/hooks/useManuscriptProgress';

interface ReadingViewProps {
  progress: ManuscriptProgress;
  onCompleteSection: (sectionId: string) => void;
  onToggleBookmark: (sectionId: string) => void;
}

type Section = 'revelation' | 'prayer' | 'code' | 'ritual' | 'signs' | 'conclusion';

const sections: { id: Section; title: string; icon: typeof BookOpen; content: React.ReactNode }[] = [
  {
    id: 'revelation',
    title: 'The Revelation',
    icon: Eye,
    content: (
      <div className="space-y-5 text-manuscript-light font-body leading-relaxed">
        <p>In the year 1823, deep within the ancient monastery of Mont Saint-Michel, a monk named Brother Ezekiel discovered a hidden chamber behind the altar. Inside, he found a manuscript written in golden ink on aged parchment.</p>
        <p>The text was unlike anything seen before – it contained prayers, codes, and rituals that had been secretly preserved for over a thousand years, passed down from the earliest Christian mystics who claimed to have received them directly from Archangel Michael.</p>
        <p>This Sacred Manuscript contains three powerful elements:</p>
        <ul className="list-disc list-inside space-y-3 ml-4">
          <li><strong className="text-manuscript-gold">The Forbidden Prayer</strong> – A prayer so powerful it was hidden from the masses</li>
          <li><strong className="text-manuscript-gold">The Sacred Code</strong> – Numbers that unlock divine protection</li>
          <li><strong className="text-manuscript-gold">The Activation Ritual</strong> – The ceremony to awaken its power</li>
        </ul>
        <p>What you are about to read has been concealed for centuries. Today, it is revealed to you.</p>
      </div>
    ),
  },
  {
    id: 'prayer',
    title: 'The Forbidden Prayer',
    icon: Feather,
    content: (
      <div className="space-y-5 text-manuscript-light font-body leading-relaxed">
        <p className="text-manuscript-gold italic text-center text-lg">"The prayer that was deemed too powerful for common knowledge."</p>
        <div className="bg-gradient-to-br from-manuscript-gold/10 to-manuscript-dark/60 p-6 rounded-2xl border border-manuscript-gold/30 my-6 shadow-lg">
          <p className="text-center italic leading-loose text-manuscript-light">
            "Archangel Michael, Commander of the Heavenly Host,<br/>
            I call upon your divine protection and guidance.<br/>
            Surround me with your sacred light,<br/>
            Shield me from all darkness and negativity.<br/>
            Open the doors of abundance and blessing,<br/>
            Clear my path of all obstacles and enemies.<br/>
            By the sacred code 7-11-9,<br/>
            I activate your divine intervention in my life.<br/>
            So it is spoken, so it shall be.<br/>
            Amen."
          </p>
        </div>
        <h3 className="text-manuscript-gold font-heading text-xl mt-6">When to Recite This Prayer:</h3>
        <ul className="list-disc list-inside space-y-3 ml-4">
          <li>Upon waking, before your feet touch the ground</li>
          <li>Before any important decision or meeting</li>
          <li>When feeling anxious, afraid, or threatened</li>
          <li>Before sleep, for protection through the night</li>
          <li>At exactly 7:11 AM or PM for maximum power</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'code',
    title: 'The Sacred Code: 7-11-9',
    icon: Sun,
    content: (
      <div className="space-y-5 text-manuscript-light font-body leading-relaxed">
        <p>The numbers 7-11-9 are not random. They form a sacred sequence that has been used by mystics for millennia to connect with divine forces.</p>
        <div className="grid gap-4 my-6">
          <div className="bg-gradient-to-br from-manuscript-gold/15 to-manuscript-dark/60 p-5 rounded-2xl border border-manuscript-gold/30 shadow-md">
            <span className="text-manuscript-gold font-heading text-3xl">7</span>
            <p className="mt-3 text-manuscript-light">The number of divine completion. Seven days of creation, seven archangels, seven seals. It represents God's perfect work.</p>
          </div>
          <div className="bg-gradient-to-br from-manuscript-purple/15 to-manuscript-dark/60 p-5 rounded-2xl border border-manuscript-purple/30 shadow-md">
            <span className="text-manuscript-purple font-heading text-3xl">11</span>
            <p className="mt-3 text-manuscript-light">The master number of spiritual awakening. It signifies the gateway between earthly and heavenly realms, the bridge to higher consciousness.</p>
          </div>
          <div className="bg-gradient-to-br from-sacred-teal/15 to-manuscript-dark/60 p-5 rounded-2xl border border-sacred-teal/30 shadow-md">
            <span className="text-sacred-teal font-heading text-3xl">9</span>
            <p className="mt-3 text-manuscript-light">The number of divine service and universal love. It represents completion of a cycle and spiritual enlightenment.</p>
          </div>
        </div>
        <h3 className="text-manuscript-gold font-heading text-xl">How to Use the Code:</h3>
        <ul className="list-disc list-inside space-y-3 ml-4">
          <li>Repeat "7-11-9" seven times before the prayer</li>
          <li>Trace the numbers in the air with your finger</li>
          <li>Visualize each number glowing with golden light</li>
          <li>Feel the vibration of each number in your heart</li>
        </ul>
      </div>
    ),
  },
  {
    id: 'ritual',
    title: 'The Activation Ritual',
    icon: SparklesIcon,
    content: (
      <div className="space-y-5 text-manuscript-light font-body leading-relaxed">
        <p>The ritual must be performed to fully activate the power of the manuscript. Follow these steps precisely:</p>
        <div className="space-y-4 my-6">
          {[
            { step: 1, title: "Prepare Your Space", desc: "Find a quiet place where you won't be disturbed. Light a white candle if possible." },
            { step: 2, title: "Breathing Sequence", desc: "Take 7 deep breaths. Inhale for 7 seconds, hold for 11 seconds, exhale for 9 seconds." },
            { step: 3, title: "Speak the Code", desc: "Say aloud 'Seven-Eleven-Nine' seven times with conviction and faith." },
            { step: 4, title: "Recite the Prayer", desc: "Read the Forbidden Prayer slowly, feeling each word in your heart." },
            { step: 5, title: "Moment of Silence", desc: "Sit in silence for 7 minutes, opening yourself to receive divine guidance." },
            { step: 6, title: "Seal the Ritual", desc: "Say 'It is done' three times, then extinguish the candle." },
          ].map(({ step, title, desc }) => (
            <div key={step} className="flex gap-4 bg-gradient-to-r from-manuscript-gold/10 to-transparent p-5 rounded-2xl border border-manuscript-gold/20 shadow-sm">
              <div className="bg-manuscript-gold/25 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-manuscript-gold font-heading text-xl">{step}</span>
              </div>
              <div>
                <h4 className="text-manuscript-gold font-heading text-lg">{title}</h4>
                <p className="mt-1 text-manuscript-light">{desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-manuscript-gold italic text-center font-heading">Perform this ritual daily for 7 consecutive days to fully activate its power.</p>
      </div>
    ),
  },
  {
    id: 'signs',
    title: 'Recognizing Divine Signs',
    icon: Shield,
    content: (
      <div className="space-y-5 text-manuscript-light font-body leading-relaxed">
        <p>After activating the manuscript, you will begin to notice signs that the Archangel is working in your life. Learn to recognize them:</p>
        <div className="space-y-4 my-6">
          {[
            { sign: "Number Sequences", desc: "Seeing 7:11, 9:11, or 711 frequently on clocks, receipts, or addresses." },
            { sign: "White Feathers", desc: "Finding white feathers in unexpected places – a classic sign of angelic presence." },
            { sign: "Sudden Peace", desc: "Moments of unexplained calm and clarity, especially during stressful times." },
            { sign: "Helpful Strangers", desc: "Meeting people who provide exactly the help you need at the right moment." },
            { sign: "Dreams", desc: "Vivid dreams featuring bright light, protective figures, or messages of guidance." },
            { sign: "Synchronicities", desc: "Meaningful coincidences that seem too perfect to be random." },
          ].map(({ sign, desc }) => (
            <div key={sign} className="bg-gradient-to-r from-manuscript-purple/10 to-transparent p-5 rounded-2xl border border-manuscript-purple/20 shadow-sm">
              <h4 className="text-manuscript-gold font-heading text-lg">{sign}</h4>
              <p className="mt-2 text-manuscript-light">{desc}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-manuscript-light font-body">Record every sign you receive in your spiritual journal. The more you acknowledge them, the more they will appear.</p>
      </div>
    ),
  },
  {
    id: 'conclusion',
    title: 'Your Journey Begins',
    icon: BookOpen,
    content: (
      <div className="space-y-5 text-manuscript-light font-body leading-relaxed text-center">
        <p className="text-manuscript-gold text-2xl font-heading">Congratulations, Seeker.</p>
        <p>You have received the complete Sacred Manuscript of the Archangel. This ancient knowledge is now yours to use and share.</p>
        <div className="bg-gradient-to-br from-manuscript-gold/15 to-manuscript-dark/60 p-6 rounded-2xl border border-manuscript-gold/30 my-6 shadow-lg">
          <p className="italic text-manuscript-light text-lg">
            "To those who believe, no explanation is necessary.<br/>
            To those who do not, no explanation will suffice."
          </p>
          <p className="text-manuscript-gold mt-4 font-body">– Saint Ignatius of Loyola</p>
        </div>
        <h3 className="text-manuscript-gold font-heading text-xl mt-8">Your Daily Practice:</h3>
        <ul className="list-disc list-inside space-y-3 ml-4 text-left">
          <li>Recite the prayer morning and night</li>
          <li>Perform the full ritual at least once weekly</li>
          <li>Record all signs in your journal</li>
          <li>Complete the 7-Day Transformation Path</li>
          <li>Trust in divine timing and protection</li>
        </ul>
        <p className="text-manuscript-gold mt-8 text-lg font-heading">May the light of the Archangel illuminate your path.</p>
      </div>
    ),
  },
];

export const ReadingView = ({ progress, onCompleteSection, onToggleBookmark }: ReadingViewProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentSection = sections[currentIndex];
  const isBookmarked = progress.bookmarks.includes(currentSection.id);
  const isCompleted = progress.completedSections.includes(currentSection.id);

  const handleNext = () => {
    if (!isCompleted) {
      onCompleteSection(currentSection.id);
    }
    if (currentIndex < sections.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const Icon = currentSection.icon;

  return (
    <div className="min-h-screen pb-24 px-4 pt-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="bg-manuscript-gold/20 p-2 rounded-lg">
            <Icon className="w-5 h-5 text-manuscript-gold" />
          </div>
          <span className="text-manuscript-light font-body">
            {currentIndex + 1} of {sections.length}
          </span>
        </div>
        <button
          onClick={() => onToggleBookmark(currentSection.id)}
          className="p-3 rounded-xl hover:bg-manuscript-gold/15 transition-colors"
        >
          {isBookmarked ? (
            <BookmarkCheck className="w-5 h-5 text-manuscript-gold" />
          ) : (
            <Bookmark className="w-5 h-5 text-manuscript-light/60" />
          )}
        </button>
      </div>

      {/* Progress Bar */}
      <div className="h-2 bg-manuscript-dark/80 rounded-full mb-8 overflow-hidden border border-manuscript-gold/10">
        <motion.div
          className="h-full bg-gradient-to-r from-manuscript-gold to-manuscript-gold/80"
          initial={{ width: 0 }}
          animate={{ width: `${((currentIndex + 1) / sections.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSection.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="font-heading text-3xl text-manuscript-gold mb-8 text-center">
            {currentSection.title}
          </h1>
          <div className="reading-content">
            {currentSection.content}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Section Navigation */}
      <div className="flex flex-wrap gap-2 justify-center mt-10 mb-6">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => setCurrentIndex(index)}
            className={`px-4 py-2 rounded-full text-sm font-body transition-all duration-200 ${
              index === currentIndex
                ? 'bg-manuscript-gold text-manuscript-dark font-medium shadow-lg'
                : progress.completedSections.includes(section.id)
                ? 'bg-manuscript-gold/25 text-manuscript-gold border border-manuscript-gold/30'
                : 'bg-manuscript-dark/60 text-manuscript-light/70 border border-manuscript-gold/10'
            }`}
          >
            {section.title.split(' ').slice(-1)[0]}
          </button>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-4 mt-8">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="flex-1 py-4 rounded-2xl border border-manuscript-gold/40 text-manuscript-gold font-body flex items-center justify-center gap-2 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-manuscript-gold/10 transition-all duration-200"
        >
          <ChevronLeft className="w-5 h-5" />
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex === sections.length - 1 && isCompleted}
          className="flex-1 py-4 rounded-2xl bg-gradient-to-r from-manuscript-gold to-manuscript-gold/90 text-manuscript-dark font-body font-medium flex items-center justify-center gap-2 disabled:opacity-30 disabled:cursor-not-allowed hover:shadow-lg transition-all duration-200"
        >
          {currentIndex === sections.length - 1 ? 'Complete' : 'Next'}
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
