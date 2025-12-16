import { motion } from "framer-motion";
import { Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { illustrations } from "@/data/illustrationAssets";

const milestones = [
  {
    image: illustrations.journey.hub,
    title: "You're Not Alone",
    subtitle: "Join Our Sacred Community",
    message: "We are over 37,000 faithful souls seeking the same divine purpose",
    progress: 25,
  },
  {
    image: illustrations.heroDashboard,
    title: "Almost There",
    subtitle: "Your Message is Being Prepared",
    message: "The angels are preparing your personalized sacred guidance",
    progress: 75,
  },
];

interface MilestoneInterstitialProps {
  milestoneIndex: number;
  onContinue: () => void;
}

export const MilestoneInterstitial = ({
  milestoneIndex,
  onContinue,
}: MilestoneInterstitialProps) => {
  const milestone = milestones[milestoneIndex] || milestones[0];
  const [count, setCount] = useState(37000);
  const [liveCount, setLiveCount] = useState(Math.floor(Math.random() * 50) + 120);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + Math.floor(Math.random() * 3));
      if (Math.random() > 0.7) {
        setLiveCount((prev) => Math.max(100, prev + Math.floor(Math.random() * 10) - 4));
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col items-center justify-center px-4 py-8 bg-gradient-to-b from-background via-background to-primary/5"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-md w-full text-center space-y-6"
      >
        {/* Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="relative mx-auto w-48 h-48 mb-6"
        >
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl" />
          <img
            src={milestone.image}
            alt={milestone.title}
            className="relative z-10 w-full h-full object-contain drop-shadow-lg"
          />
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-3xl font-serif font-bold text-foreground mb-2">
            {milestone.title}
          </h2>
          <p className="text-primary font-medium">{milestone.subtitle}</p>
        </motion.div>

        {/* Counter */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-primary/20 shadow-lg"
        >
          <div className="flex items-center justify-center gap-3 mb-3">
            <Users className="w-6 h-6 text-primary" />
            <span className="text-4xl font-bold text-foreground">
              {count.toLocaleString()}+
            </span>
          </div>
          <p className="text-muted-foreground text-lg">{milestone.message}</p>
          
          {/* Live indicator */}
          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-primary">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span>{liveCount} people taking the quiz right now</span>
          </div>
        </motion.div>

        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="space-y-2"
        >
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Your Progress</span>
            <span>{milestone.progress}% complete</span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${milestone.progress}%` }}
              transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
            />
          </div>
        </motion.div>

        {/* Continue button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <Button
            onClick={onContinue}
            size="lg"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 text-lg rounded-xl shadow-lg"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Continue Your Journey
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
