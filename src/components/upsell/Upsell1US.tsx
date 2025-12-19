import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";


const Upsell1US = () => {
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    let scriptLoaded = false;
    
    const script = document.createElement("script");
    script.src = "https://upsell.mundpay.com/script-v2.js";
    script.defer = true;
    script.async = true;
    
    script.onload = () => {
      scriptLoaded = true;
    };
    
    script.onerror = () => {
      setShowFallback(true);
    };
    
    document.head.appendChild(script);

    const timeout = setTimeout(() => {
      if (!scriptLoaded) {
        setShowFallback(true);
      }
    }, 5000);

    return () => {
      clearTimeout(timeout);
      const existingScript = document.querySelector('script[src="https://upsell.mundpay.com/script-v2.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

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

          {/* MundPay Accept/Decline Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            {/* MundPay area with black overlays covering title/price and decline/terms */}
            <div className="relative w-full max-w-sm mx-auto">
              {/* Black overlay covering title and price (top area) */}
              <div className="absolute top-0 left-0 right-0 h-[85px] md:h-[70px] bg-black z-10 pointer-events-none" />
              
              {/* Black overlay covering decline button and terms (bottom area) */}
              <div className="absolute bottom-0 left-0 right-0 h-[95px] md:h-[85px] bg-black z-10 pointer-events-none" />

              <div data-mndpay-render="019b37bd-defb-7108-bd7e-b3d0399fd6b6"></div>
            </div>
            
            {showFallback && (
              <div className="mt-6 space-y-4">
                <Button
                  size="lg"
                  className="w-full px-8 py-4 text-lg font-semibold bg-amber-500 hover:bg-amber-600 text-black"
                  onClick={() => window.location.href = '/manuscript'}
                >
                  Accept Offer
                </Button>
                <button
                  className="text-amber-100/60 hover:text-amber-100 text-sm underline"
                  onClick={() => window.location.href = '/up2'}
                >
                  No thanks, continue
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
      
      
    </div>
  );
};

export default Upsell1US;
