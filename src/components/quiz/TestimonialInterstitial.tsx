import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonialSets = [
  // Set 1 - after question 3
  [
    {
      name: "Sarah M.",
      location: "California, USA",
      text: "This completely changed my perspective. I found the peace I was searching for.",
      rating: 5,
    },
    {
      name: "Michael R.",
      location: "London, UK",
      text: "The guidance I received was exactly what I needed at this moment in my life.",
      rating: 5,
    },
  ],
  // Set 2 - after question 6
  [
    {
      name: "Emma L.",
      location: "Toronto, Canada",
      text: "I was skeptical at first, but the results spoke for themselves. Truly transformative.",
      rating: 5,
    },
    {
      name: "David K.",
      location: "Sydney, Australia",
      text: "The Sacred Manuscript opened doors I didn't even know existed. Life-changing.",
      rating: 5,
    },
  ],
];

interface TestimonialInterstitialProps {
  setIndex: number;
  onContinue: () => void;
}

export const TestimonialInterstitial = ({ setIndex, onContinue }: TestimonialInterstitialProps) => {
  const testimonials = testimonialSets[setIndex] || testimonialSets[0];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center p-4"
    >
      <div className="max-w-2xl w-full space-y-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-2"
        >
          <p className="text-primary/60 text-sm uppercase tracking-widest">
            Real Stories
          </p>
          <h2 className="font-heading text-2xl md:text-3xl text-foreground">
            Others Who Walked This Path
          </h2>
        </motion.div>

        <div className="space-y-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.15 }}
              className="bg-card/60 backdrop-blur-sm rounded-xl p-5 border border-border/50"
            >
              <div className="flex gap-1 mb-3">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/80 text-base mb-3 italic">
                "{testimonial.text}"
              </p>
              <div className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">{testimonial.name}</span>
                <span className="mx-2">•</span>
                <span>{testimonial.location}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex justify-center pt-4"
        >
          <Button
            onClick={onContinue}
            className="group px-8 py-6 text-lg font-medium"
          >
            Continue Your Journey
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};
