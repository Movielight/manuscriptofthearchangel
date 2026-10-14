import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Button } from "@/components/ui/button";


const Upsell1US = () => {

  return (
    <div className="min-h-screen bg-black flex flex-col relative overflow-hidden">
      
      {/* Content */}
      <div className="flex-1 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center px-6 relative z-10"
        >
          {/* Logo/Symbol */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.05, duration: 0.4 }}
            className="mb-8"
          >
            <div className="w-20 h-20 mx-auto rounded-full border border-amber-500/30 flex items-center justify-center bg-amber-500/5">
              <span className="text-4xl">✦</span>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="text-3xl md:text-4xl font-heading font-bold text-white mb-4"
          >
            Archangel Raphael's Manuscript
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="text-amber-100/60 text-lg mb-12 max-w-md mx-auto"
          >
            Your path to divine healing and spiritual wisdom awaits
          </motion.p>

          {/* One-Time Payment */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="mb-10"
          >
            <div className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">$53.00</div>
            <p className="text-amber-100/70 text-sm">One-time payment — no subscription, no recurring charges</p>
          </motion.div>

          {/* Accept / Decline Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.4 }}
            className="w-full max-w-sm mx-auto space-y-4"
          >
            <Button
              size="lg"
              className="w-full px-8 py-4 text-lg font-semibold bg-amber-500 hover:bg-amber-600 text-black"
              onClick={() => window.location.href = 'https://www.checkout-ds24.com/answer/yes?template=light'}
            >
              Yes, I want to buy it.
            </Button>
            <button
              className="text-amber-100/60 hover:text-amber-100 text-sm underline"
              onClick={() => window.location.href = '/up2'}
            >
              I don't want
            </button>
          </motion.div>
        </motion.div>
      </div>

      <p className="px-4 pb-10 text-center text-sm text-amber-100/70">
        60-Day Money-Back Guarantee — full refund, no questions asked
      </p>
    </div>
  );
};

export default Upsell1US;
