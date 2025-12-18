import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";

interface ProgressLoaderProps {
  duration?: number; // in seconds
  onComplete: () => void;
}

const messages = [
  { threshold: 0, text: "Opening the sacred gates..." },
  { threshold: 25, text: "Aligning celestial energies..." },
  { threshold: 50, text: "Receiving divine guidance..." },
  { threshold: 75, text: "Preparing your revelation..." },
  { threshold: 95, text: "The Archangel awaits..." },
];

const Particle = ({ delay, duration, startX, startY }: { delay: number; duration: number; startX: number; startY: number }) => (
  <motion.div
    className="absolute w-1 h-1 rounded-full bg-amber-400"
    initial={{ 
      x: startX, 
      y: startY,
      opacity: 0,
      scale: 0
    }}
    animate={{ 
      y: [startY, startY - 200 - Math.random() * 300],
      x: [startX, startX + (Math.random() - 0.5) * 100],
      opacity: [0, 1, 1, 0],
      scale: [0, 1, 1, 0]
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeOut"
    }}
    style={{
      boxShadow: "0 0 6px 2px rgba(251, 191, 36, 0.6)"
    }}
  />
);

const ProgressLoader = ({ duration = 22, onComplete }: ProgressLoaderProps) => {
  const [progress, setProgress] = useState(0);

  const currentMessage = useMemo(() => {
    const msg = [...messages].reverse().find(m => progress >= m.threshold);
    return msg?.text || messages[0].text;
  }, [progress]);

  // Generate particles
  const particles = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
      startX: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 400),
      startY: (typeof window !== 'undefined' ? window.innerHeight : 800) + 50,
    }));
  }, []);

  useEffect(() => {
    const interval = 50;
    const increment = 100 / (duration * 1000 / interval);
    
    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 200);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [duration, onComplete]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-amber-950/30 flex flex-col items-center justify-center px-6 overflow-hidden relative">
      {/* Angelic background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Central divine light */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-amber-300/15 rounded-full blur-[60px]" />
        
        {/* Light rays */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-0 left-1/2 w-1 bg-gradient-to-b from-amber-400/20 via-amber-400/5 to-transparent"
            style={{
              height: '60%',
              transformOrigin: 'top center',
              transform: `rotate(${i * 45}deg)`,
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              delay: i * 0.3,
              repeat: Infinity,
            }}
          />
        ))}

        {/* Soft vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30" />
      </div>

      {/* Golden particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p) => (
          <Particle 
            key={p.id} 
            delay={p.delay} 
            duration={p.duration} 
            startX={p.startX} 
            startY={p.startY} 
          />
        ))}
      </div>

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-sm text-center"
      >
        {/* Angelic symbol */}
        <motion.div
          className="mb-8 text-6xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          ✦
        </motion.div>

        {/* Dynamic message */}
        <motion.p
          key={currentMessage}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="text-amber-100/90 text-lg mb-8 font-light tracking-wide"
        >
          {currentMessage}
        </motion.p>

        {/* Progress bar container */}
        <div className="relative w-full h-3 bg-amber-900/30 rounded-full overflow-hidden border border-amber-700/20">
          {/* Progress bar fill */}
          <motion.div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-amber-600 via-amber-400 to-amber-300 rounded-full"
            style={{ width: `${progress}%` }}
          />
          
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-y-0 w-20 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{ x: [-80, 320] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Glow effect */}
          <div 
            className="absolute inset-y-0 left-0 bg-amber-400/40 rounded-full blur-sm"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage */}
        <motion.p 
          className="text-amber-400 text-3xl font-semibold mt-6 tracking-wider"
          animate={{ 
            textShadow: ["0 0 10px rgba(251, 191, 36, 0.3)", "0 0 20px rgba(251, 191, 36, 0.6)", "0 0 10px rgba(251, 191, 36, 0.3)"]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {Math.round(progress)}%
        </motion.p>
      </motion.div>
    </div>
  );
};

export default ProgressLoader;
