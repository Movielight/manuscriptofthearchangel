import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";

interface CountdownTimerProps {
  initialMinutes?: number;
}

export const CountdownTimer = ({ initialMinutes = 15 }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState(initialMinutes * 60);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-destructive/10 border border-destructive/30 rounded-xl p-4 text-center"
    >
      <div className="flex items-center justify-center gap-2 mb-2">
        <Clock className="w-5 h-5 text-destructive" />
        <span className="text-sm font-medium text-destructive uppercase tracking-wide">
          Special Offer Expires In
        </span>
      </div>
      <div className="font-heading text-3xl text-foreground">
        <span className="bg-card/80 px-3 py-1 rounded-lg mx-1">
          {String(minutes).padStart(2, "0")}
        </span>
        <span className="text-primary">:</span>
        <span className="bg-card/80 px-3 py-1 rounded-lg mx-1">
          {String(seconds).padStart(2, "0")}
        </span>
      </div>
      <p className="text-xs text-muted-foreground mt-2">
        This exclusive pricing is reserved for you
      </p>
    </motion.div>
  );
};
