import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
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
  {
    name: "Emma L.",
    location: "Toronto, Canada",
    text: "I was skeptical at first, but the results spoke for themselves. Truly transformative.",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="space-y-4"
    >
      <h3 className="font-heading text-xl text-center text-foreground mb-6">
        What Others Are Saying
      </h3>
      
      <div className="grid gap-4 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + index * 0.1 }}
            className="bg-card/60 backdrop-blur-sm rounded-xl p-4 border border-border/50"
          >
            <div className="flex gap-1 mb-3">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-foreground/80 text-sm mb-3 italic">
              "{testimonial.text}"
            </p>
            <div className="text-xs text-muted-foreground">
              <span className="font-medium text-foreground">{testimonial.name}</span>
              <span className="mx-1">•</span>
              <span>{testimonial.location}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
