import { motion } from "framer-motion";
import { MessageCircle, BookOpen, ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import angelicImage from "@/assets/illustrations/angelic-guidance.png";

const Upsell2 = () => {
  const handleAccept = () => {
    console.log("User accepted monthly guidance");
  };

  const handleDecline = () => {
    console.log("User declined monthly guidance");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50/30 flex flex-col">
      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-lg w-full text-center"
        >
          {/* Angelic Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <img 
              src={angelicImage} 
              alt="Divine Guidance" 
              className="w-full max-w-md mx-auto rounded-2xl shadow-2xl shadow-amber-200/50"
            />
          </motion.div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-200 rounded-full px-4 py-1.5 mb-6">
            <MessageCircle className="w-4 h-4 text-amber-600" />
            <span className="text-sm text-amber-700 font-medium">AI Biblical Assistant</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-4">
            Christ-Centered Guidance AI
          </h1>

          {/* Subheadline */}
          <p className="text-slate-600 text-lg mb-8 max-w-md mx-auto">
            Ask questions anytime. Get Scripture-based answers aligned with Christian values.
          </p>

          {/* Key Features - Minimal */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <span className="bg-white border border-slate-200 rounded-full px-4 py-2 text-sm text-slate-600 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-amber-500" />
              Bible-based responses
            </span>
            <span className="bg-white border border-slate-200 rounded-full px-4 py-2 text-sm text-slate-600">
              Available 24/7
            </span>
            <span className="bg-white border border-slate-200 rounded-full px-4 py-2 text-sm text-slate-600">
              Cancel anytime
            </span>
          </div>

          {/* Pricing Card */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-white rounded-2xl p-6 shadow-xl shadow-amber-100/50 border border-amber-100 mb-6"
          >
            <div className="flex items-baseline justify-center gap-1 mb-2">
              <span className="text-4xl font-bold text-slate-800">$17</span>
              <span className="text-slate-500">/month</span>
            </div>
            <p className="text-slate-500 text-sm mb-6">Unlimited guidance • No commitment</p>
            
            <Button 
              onClick={handleAccept}
              size="lg"
              className="w-full bg-amber-500 hover:bg-amber-600 text-white py-6 text-lg rounded-xl shadow-lg shadow-amber-200"
            >
              Add Monthly Guidance
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>

          {/* Decline Option */}
          <button
            onClick={handleDecline}
            className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-600 text-sm transition-colors"
          >
            <X className="w-4 h-4" />
            No thanks, continue without
          </button>

          {/* Mini Disclaimer */}
          <p className="mt-8 text-xs text-slate-400 max-w-sm mx-auto">
            This AI tool is for faith-based reflection only. It does not replace prayer, 
            pastoral guidance, or professional advice.
          </p>
        </motion.div>
      </main>
    </div>
  );
};

export default Upsell2;
