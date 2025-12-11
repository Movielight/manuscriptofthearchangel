import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Award, Sparkles, Star, PartyPopper } from 'lucide-react';

interface CelebrationOverlayProps {
  isVisible: boolean;
  type: 'badge' | 'milestone' | 'streak';
  title: string;
  message: string;
  onClose: () => void;
}

const Confetti = ({ delay }: { delay: number }) => {
  const colors = ['#D4AF37', '#8B5CF6', '#14B8A6', '#F59E0B', '#EC4899'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const randomX = Math.random() * 100;
  const randomRotation = Math.random() * 360;
  
  return (
    <motion.div
      initial={{ 
        top: '-10%', 
        left: `${randomX}%`, 
        rotate: 0,
        opacity: 1 
      }}
      animate={{ 
        top: '110%', 
        rotate: randomRotation + 360,
        opacity: [1, 1, 0]
      }}
      transition={{ 
        duration: 2.5 + Math.random(), 
        delay,
        ease: 'easeIn'
      }}
      className="absolute w-3 h-3 rounded-sm"
      style={{ backgroundColor: randomColor }}
    />
  );
};

const StarBurst = () => (
  <motion.div
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: [0, 1.5, 1], opacity: [0, 1, 0.8] }}
    transition={{ duration: 0.6 }}
    className="absolute inset-0 flex items-center justify-center pointer-events-none"
  >
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: [0, 1, 0.5],
          opacity: [0, 1, 0],
          x: Math.cos((i * 45 * Math.PI) / 180) * 100,
          y: Math.sin((i * 45 * Math.PI) / 180) * 100
        }}
        transition={{ duration: 0.8, delay: 0.1 + i * 0.05 }}
        className="absolute"
      >
        <Star className="w-6 h-6 text-manuscript-gold fill-manuscript-gold" />
      </motion.div>
    ))}
  </motion.div>
);

export const CelebrationOverlay = ({ 
  isVisible, 
  type, 
  title, 
  message, 
  onClose 
}: CelebrationOverlayProps) => {
  const [confetti, setConfetti] = useState<number[]>([]);

  useEffect(() => {
    if (isVisible) {
      setConfetti(Array.from({ length: 50 }, (_, i) => i));
      const timer = setTimeout(onClose, 4000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  const getIcon = () => {
    switch (type) {
      case 'badge':
        return <Award className="w-16 h-16 text-manuscript-gold" />;
      case 'milestone':
        return <PartyPopper className="w-16 h-16 text-manuscript-gold" />;
      case 'streak':
        return <Sparkles className="w-16 h-16 text-manuscript-gold" />;
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-white/90 backdrop-blur-md overflow-hidden"
          onClick={onClose}
        >
          {/* Confetti */}
          {confetti.map((i) => (
            <Confetti key={i} delay={i * 0.03} />
          ))}

          {/* Star burst effect */}
          <StarBurst />

          {/* Glowing background */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.5, 1.2], opacity: [0, 0.3, 0.2] }}
            transition={{ duration: 0.8 }}
            className="absolute w-96 h-96 rounded-full bg-manuscript-gold/30 blur-3xl"
          />

          {/* Main celebration card */}
          <motion.div
            initial={{ scale: 0, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0, y: 50 }}
            transition={{ type: 'spring', damping: 15, stiffness: 300 }}
            className="relative bg-gradient-to-br from-white via-primary/10 to-white border-2 border-manuscript-gold/50 rounded-3xl p-8 text-center max-w-sm mx-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Icon container with glow */}
            <motion.div
              initial={{ rotate: -180, scale: 0 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ type: 'spring', damping: 10, stiffness: 200, delay: 0.2 }}
              className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-manuscript-gold/30 to-manuscript-gold/10 border border-manuscript-gold/50 mb-6 shadow-lg"
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  repeatType: 'reverse'
                }}
              >
                {getIcon()}
              </motion.div>
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-heading text-3xl text-manuscript-gold mb-3"
            >
              {title}
            </motion.h2>

            {/* Message */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-body text-foreground text-lg mb-6"
            >
              {message}
            </motion.p>

            {/* Decorative sparkles */}
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex justify-center gap-3"
            >
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className="w-4 h-4 text-manuscript-gold/60 fill-manuscript-gold/30" 
                />
              ))}
            </motion.div>

            {/* Tap to close hint */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 1 }}
              className="text-muted-foreground text-sm mt-6 font-body"
            >
              Tap anywhere to continue
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};