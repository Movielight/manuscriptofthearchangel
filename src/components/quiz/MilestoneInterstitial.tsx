import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { illustrations } from "@/data/illustrationAssets";
import { useState, useEffect } from "react";
import { Users, TrendingUp, Sparkles } from "lucide-react";

const milestones = [
  {
    image: illustrations.journey.hub,
    title: "You're Not Alone",
    subtitle: "Join Our Sacred Community",
    message: "Over 37,000 faithful souls have already discovered their divine purpose",
    progress: 25,
  },
  {
    image: illustrations.happyFamily,
    title: "Families Transformed",
    subtitle: "Real Stories of Divine Connection",
    message: "Thousands of families have found peace, purpose, and unity through this sacred journey",
    progress: 50,
  },
  {
    image: illustrations.heroDashboard,
    title: "Your Message Awaits",
    subtitle: "Almost There",
    message: "Your personalized sacred guidance is being prepared just for you",
    progress: 75,
  },
];

// Names for live notifications
const liveUsers = [
  { name: "Maria S.", country: "🇧🇷" },
  { name: "John D.", country: "🇺🇸" },
  { name: "Ana P.", country: "🇵🇹" },
  { name: "Carlos M.", country: "🇲🇽" },
  { name: "Sophie L.", country: "🇫🇷" },
  { name: "Michael R.", country: "🇬🇧" },
  { name: "Isabella G.", country: "🇮🇹" },
  { name: "Lucas F.", country: "🇦🇷" },
  { name: "Emma W.", country: "🇨🇦" },
  { name: "Pedro H.", country: "🇪🇸" },
];

interface MilestoneInterstitialProps {
  milestoneIndex: number;
  onContinue: () => void;
}

export const MilestoneInterstitial = ({
  milestoneIndex,
  onContinue,
}: MilestoneInterstitialProps) => {
  const milestone = milestones[milestoneIndex % milestones.length];
  const [count, setCount] = useState(37284);
  const [liveCount, setLiveCount] = useState(127);
  const [recentUser, setRecentUser] = useState(liveUsers[0]);
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    // Animate the counter
    const countInterval = setInterval(() => {
      setCount((prev) => prev + Math.floor(Math.random() * 3));
      setLiveCount((prev) => {
        const change = Math.random() > 0.5 ? 1 : -1;
        return Math.max(100, Math.min(200, prev + change));
      });
    }, 2000);

    // Show recent user notifications
    const userInterval = setInterval(() => {
      const randomUser = liveUsers[Math.floor(Math.random() * liveUsers.length)];
      setRecentUser(randomUser);
    }, 3000);

    // Hide confetti after animation
    const confettiTimeout = setTimeout(() => {
      setShowConfetti(false);
    }, 3000);

    return () => {
      clearInterval(countInterval);
      clearInterval(userInterval);
      clearTimeout(confettiTimeout);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 relative overflow-hidden"
    >
      {/* Confetti effect */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
              }}
              initial={{
                y: -20,
                rotate: 0,
              }}
              animate={{
                y: typeof window !== 'undefined' ? window.innerHeight + 20 : 820,
                rotate: 360 * (Math.random() > 0.5 ? 1 : -1),
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                delay: Math.random() * 0.5,
                ease: "easeIn",
              }}
            >
              <div
                className="w-3 h-3 rounded-sm"
                style={{
                  backgroundColor: ['#FFD700', '#FFA500', '#FF6B6B', '#4ECDC4', '#9B59B6'][
                    Math.floor(Math.random() * 5)
                  ],
                }}
              />
            </motion.div>
          ))}
        </div>
      )}

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      {/* Image */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring", damping: 20 }}
        className="relative mb-6"
      >
        <div className="relative">
          <img
            src={milestone.image}
            alt={milestone.title}
            className="w-48 h-48 md:w-56 md:h-56 object-contain drop-shadow-2xl"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute -top-2 -right-2"
          >
            <Sparkles className="w-6 h-6 text-yellow-500" />
          </motion.div>
        </div>
      </motion.div>

      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-center mb-6"
      >
        <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-2">
          {milestone.title}
        </h2>
        <p className="text-primary font-medium">{milestone.subtitle}</p>
      </motion.div>

      {/* Message */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-center text-muted-foreground max-w-md mb-8 leading-relaxed"
      >
        {milestone.message}
      </motion.p>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex flex-col items-center gap-4 mb-8 w-full max-w-sm"
      >
        {/* Main counter */}
        <div className="bg-card/60 backdrop-blur-sm rounded-xl p-4 border border-border/50 w-full">
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <Users className="w-5 h-5 text-primary" />
            </div>
            <div>
              <motion.p
                key={count}
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                className="text-2xl font-bold text-foreground"
              >
                {count.toLocaleString()}+
              </motion.p>
              <p className="text-xs text-muted-foreground">souls transformed</p>
            </div>
          </div>
        </div>

        {/* Live viewers */}
        <div className="flex items-center justify-between w-full gap-4">
          <div className="flex items-center gap-2 bg-card/60 backdrop-blur-sm rounded-lg px-3 py-2 border border-border/50">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-foreground font-medium">{liveCount}</span>
            <span className="text-xs text-muted-foreground">online now</span>
          </div>

          {/* Recent user */}
          <motion.div
            key={recentUser.name}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 bg-card/60 backdrop-blur-sm rounded-lg px-3 py-2 border border-border/50"
          >
            <TrendingUp className="w-3 h-3 text-green-500" />
            <span className="text-xs text-muted-foreground">
              {recentUser.country} {recentUser.name} joined
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* Progress bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="w-full max-w-sm mb-8"
      >
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
          <span>Your Progress</span>
          <span>{milestone.progress}%</span>
        </div>
        <div className="h-2 bg-muted/50 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${milestone.progress}%` }}
            transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full"
          />
        </div>
      </motion.div>

      {/* Continue button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <Button
          onClick={onContinue}
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-xl shadow-lg shadow-primary/20 transition-all hover:scale-105"
        >
          Continue Your Journey
        </Button>
      </motion.div>
    </motion.div>
  );
};
