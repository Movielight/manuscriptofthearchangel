import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useMemo } from 'react';
import { Award, Sparkles, Star, PartyPopper } from 'lucide-react';

interface CelebrationOverlayProps {
  isVisible: boolean;
  type: 'badge' | 'milestone' | 'streak';
  title: string;
  message: string;
  onClose: () => void;
}

// Optimized: Pre-computed confetti data, reduced from 50 to 15 particles
const CONFETTI_COUNT = 15;
const CONFETTI_COLORS = ['#D4AF37', '#8B5CF6', '#14B8A6', '#F59E0B', '#EC4899'];

const ConfettiParticle = ({ index }: { index: number }) => {
  const color = CONFETTI_COLORS[index % CONFETTI_COLORS.length];
  const left = (index * 7) % 100;
  const delay = index * 0.08;
  
  return (
    <motion.div
      initial={{ top: '-5%', left: `${left}%`, opacity: 1 }}
      animate={{ top: '105%', rotate: 360, opacity: 0 }}
      transition={{ duration: 2, delay, ease: 'linear' }}
      className="absolute w-2 h-2 rounded-sm"
      style={{ backgroundColor: color }}
    />
  );
};

const StarBurst = () => (
  <motion.div
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 0.8 }}
    transition={{ duration: 0.4 }}
    className="absolute inset-0 flex items-center justify-center pointer-events-none"
  >
    {[0, 90, 180, 270].map((angle) => (
      <motion.div
        key={angle}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: 1,
          opacity: 0,
          x: Math.cos((angle * Math.PI) / 180) * 80,
          y: Math.sin((angle * Math.PI) / 180) * 80
        }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="absolute"
      >
        <Star className="w-5 h-5 text-manuscript-gold fill-manuscript-gold" />
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
  const confettiIndices = useMemo(() => 
    Array.from({ length: CONFETTI_COUNT }, (_, i) => i), 
    []
  );

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, 4000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  const getIcon = () => {
    switch (type) {
      case 'badge':
        return <Award className="w-14 h-14 text-manuscript-gold" />;
      case 'milestone':
        return <PartyPopper className="w-14 h-14 text-manuscript-gold" />;
      case 'streak':
        return <Sparkles className="w-14 h-14 text-manuscript-gold" />;
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-white/95 overflow-hidden"
          onClick={onClose}
        >
          {confettiIndices.map((i) => (
            <ConfettiParticle key={i} index={i} />
          ))}

          <StarBurst />

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 0.2 }}
            transition={{ duration: 0.4 }}
            className="absolute w-72 h-72 rounded-full bg-manuscript-gold/30"
          />

          <motion.div
            initial={{ scale: 0.8, y: 30 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 30 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="relative bg-gradient-to-br from-white to-primary/10 border-2 border-manuscript-gold/50 rounded-3xl p-8 text-center max-w-sm mx-4 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', damping: 15, delay: 0.1 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-manuscript-gold/30 to-manuscript-gold/10 border border-manuscript-gold/50 mb-5 shadow-lg"
            >
              {getIcon()}
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-heading text-2xl text-manuscript-gold mb-2"
            >
              {title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-body text-foreground text-base mb-5"
            >
              {message}
            </motion.p>

            <div className="flex justify-center gap-2">
              {[0, 1, 2].map((i) => (
                <Star 
                  key={i} 
                  className="w-3 h-3 text-manuscript-gold/60 fill-manuscript-gold/30" 
                />
              ))}
            </div>

            <p className="text-muted-foreground text-sm mt-5 font-body opacity-60">
              Tap anywhere to continue
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
