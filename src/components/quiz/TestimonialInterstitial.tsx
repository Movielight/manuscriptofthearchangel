import { motion } from "framer-motion";
import { Star, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonialSets = [
  [
    {
      name: "Sarah M.",
      location: "California, USA",
      country: "🇺🇸",
      text: "This completely changed my perspective. I found the peace I was searching for.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
      daysAgo: 2,
      verified: true,
    },
    {
      name: "Michael R.",
      location: "London, UK",
      country: "🇬🇧",
      text: "The guidance I received was exactly what I needed at this moment in my life.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      daysAgo: 5,
      verified: true,
    },
    {
      name: "Emma L.",
      location: "Toronto, Canada",
      country: "🇨🇦",
      text: "I was skeptical at first, but the results spoke for themselves. Truly transformative.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      daysAgo: 1,
      verified: true,
    },
  ],
  [
    {
      name: "Carlos P.",
      location: "São Paulo, Brazil",
      country: "🇧🇷",
      text: "My family has never been more united. This journey brought us together in ways I never imagined.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      daysAgo: 3,
      verified: true,
    },
    {
      name: "Isabella G.",
      location: "Rome, Italy",
      country: "🇮🇹",
      text: "Finally found answers to questions I've been asking my whole life. Incredible experience.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
      daysAgo: 7,
      verified: true,
    },
    {
      name: "David K.",
      location: "Sydney, Australia",
      country: "🇦🇺",
      text: "The sacred message resonated deeply with my soul. I feel more connected than ever.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      daysAgo: 4,
      verified: true,
    },
  ],
];

interface TestimonialInterstitialProps {
  setIndex: number;
  onContinue: () => void;
}

export const TestimonialInterstitial = ({
  setIndex,
  onContinue,
}: TestimonialInterstitialProps) => {
  const testimonials = testimonialSets[setIndex % testimonialSets.length];

  const getRelativeTime = (days: number) => {
    if (days === 1) return "yesterday";
    if (days < 7) return `${days} days ago`;
    return "1 week ago";
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-center mb-8"
      >
        <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-2">
          Transformed Lives
        </h2>
        <p className="text-muted-foreground">Real stories from our sacred community</p>
      </motion.div>

      <div className="w-full max-w-2xl space-y-4 mb-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.15 }}
            className="bg-card/60 backdrop-blur-sm rounded-xl p-4 border border-border/50 relative overflow-hidden"
          >
            {/* Subtle glow effect */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative">
              <div className="flex items-start gap-3">
                {/* Avatar */}
                <div className="relative flex-shrink-0">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/30"
                  />
                  {testimonial.verified && (
                    <div className="absolute -bottom-1 -right-1 bg-primary rounded-full p-0.5">
                      <BadgeCheck className="w-3.5 h-3.5 text-primary-foreground" />
                    </div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  {/* Stars with animation */}
                  <div className="flex gap-0.5 mb-2">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.15 + i * 0.05 }}
                      >
                        <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Testimonial text */}
                  <p className="text-foreground/90 text-sm mb-3 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  {/* User info */}
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-2 text-xs">
                      <span className="font-semibold text-foreground">{testimonial.name}</span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-muted-foreground">
                        {testimonial.country} {testimonial.location}
                      </span>
                    </div>
                    <span className="text-[10px] text-muted-foreground/70 bg-muted/50 px-2 py-0.5 rounded-full">
                      {getRelativeTime(testimonial.daysAgo)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

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
