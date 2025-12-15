import { motion } from "framer-motion";
import { ShieldCheck, RotateCcw, Heart } from "lucide-react";

export const GuaranteeSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20"
    >
      <div className="flex items-center justify-center gap-3 mb-4">
        <ShieldCheck className="w-8 h-8 text-primary" />
        <h3 className="font-heading text-xl text-foreground">
          7-Day Divine Guarantee
        </h3>
      </div>
      
      <p className="text-center text-foreground/80 mb-6">
        We believe so deeply in the transformative power of this sacred journey that we offer 
        a complete satisfaction guarantee. If you don't feel the divine connection within 7 days, 
        we will refund 100% of your investment—no questions asked.
      </p>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center gap-3 text-sm text-foreground/80">
          <RotateCcw className="w-5 h-5 text-primary flex-shrink-0" />
          <span>Full refund if not satisfied</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-foreground/80">
          <Heart className="w-5 h-5 text-primary flex-shrink-0" />
          <span>Cancel anytime with grace</span>
        </div>
      </div>
    </motion.div>
  );
};
