import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface ProgressLoaderProps {
  duration?: number; // in seconds
  onComplete: () => void;
}

const ProgressLoader = ({ duration = 22, onComplete }: ProgressLoaderProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = 50; // Update every 50ms for smooth animation
    const increment = 100 / (duration * 1000 / interval);
    
    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 200); // Small delay before transition
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [duration, onComplete]);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-6">
      {/* Subtle glow effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-sm text-center"
      >
        {/* Message */}
        <p className="text-amber-100/80 text-lg mb-8 font-light">
          Preparing your sacred revelation...
        </p>

        {/* Progress bar container */}
        <div className="relative w-full h-2 bg-amber-900/30 rounded-full overflow-hidden">
          {/* Progress bar fill */}
          <motion.div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-amber-600 to-amber-400 rounded-full"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.05 }}
          />
          
          {/* Glow effect on progress */}
          <div 
            className="absolute inset-y-0 left-0 bg-amber-400/50 rounded-full blur-sm"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage */}
        <p className="text-amber-500 text-2xl font-semibold mt-6">
          {Math.round(progress)}%
        </p>
      </motion.div>
    </div>
  );
};

export default ProgressLoader;
