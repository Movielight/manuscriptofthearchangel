import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Users } from "lucide-react";

interface SocialProofCounterProps {
  variant?: "intro" | "result";
}

export const SocialProofCounter = ({ variant = "intro" }: SocialProofCounterProps) => {
  const [count, setCount] = useState(37842);
  const [liveCount, setLiveCount] = useState(12);

  useEffect(() => {
    // Simulate occasional increments
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setCount((prev) => prev + 1);
      }
      setLiveCount(Math.floor(Math.random() * 8) + 8);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (variant === "intro") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.9 }}
        className="flex flex-col items-center gap-2 mt-6"
      >
        <div className="flex items-center gap-2 text-muted-foreground text-sm">
          <Users className="w-4 h-4 text-primary" />
          <span>
            <span className="text-foreground font-medium">{count.toLocaleString()}</span> souls have received their message
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-xs text-muted-foreground">
            {liveCount} people taking the quiz right now
          </span>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center justify-center gap-4 text-sm text-muted-foreground"
    >
      <div className="flex items-center gap-2">
        <Users className="w-4 h-4 text-primary" />
        <span>
          <span className="text-foreground font-medium">{count.toLocaleString()}</span> have joined
        </span>
      </div>
      <div className="flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        <span>{liveCount} viewing now</span>
      </div>
    </motion.div>
  );
};
