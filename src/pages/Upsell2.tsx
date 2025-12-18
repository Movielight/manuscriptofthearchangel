import { motion } from "framer-motion";
import { 
  BookOpen, 
  MessageCircle, 
  Heart, 
  Sparkles, 
  CheckCircle, 
  Clock, 
  Shield,
  HelpCircle,
  Compass,
  Sun,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Upsell2 = () => {
  const handleAccept = () => {
    // Handle subscription acceptance
    console.log("User accepted monthly guidance");
  };

  const handleDecline = () => {
    // Handle decline - redirect to next step or thank you page
    console.log("User declined monthly guidance");
  };

  const useCases = [
    "How should I approach this decision according to the Bible?",
    "What does Scripture say about patience and discipline?",
    "How can I reflect on this situation with faith?",
    "Which biblical principles apply to this moment?",
    "What guidance does Scripture offer for times of uncertainty?",
    "How can I find peace in this challenge?"
  ];

  const features = [
    { icon: MessageCircle, text: "Unlimited access to Christ-Centered Guidance AI" },
    { icon: BookOpen, text: "Scripture-based responses with Bible references" },
    { icon: Heart, text: "Guidance aligned with Christian values" },
    { icon: Clock, text: "Available anytime through your browser" },
    { icon: Sparkles, text: "No downloads or installations required" },
    { icon: Shield, text: "Cancel anytime with no obligations" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Hero Section */}
      <section className="relative px-4 py-16 md:py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-1/4 w-64 h-64 bg-amber-100/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-full px-4 py-2 mb-6">
              <Compass className="w-4 h-4 text-amber-600" />
              <span className="text-sm text-amber-700 font-medium">Optional Monthly Support</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-slate-800 mb-6 leading-tight">
              Biblical Clarity for Your<br />
              <span className="text-amber-600">Daily Decisions</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Guidance whenever you need it. Faith-based reflection on demand.
            </p>
            
            <Button 
              onClick={handleAccept}
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-amber-200"
            >
              Continue with Monthly Guidance
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Reassurance Section */}
      <section className="px-4 py-12 bg-white/50">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-slate-600 text-lg leading-relaxed">
              This is an <span className="font-semibold text-slate-700">optional monthly support tool</span> designed 
              to complement your spiritual journey. It provides ongoing access to calm, Scripture-based 
              reflection—helping you find clarity based on the teachings of Jesus and biblical principles.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What Is It Section */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-800 mb-4">
              What Is Christ-Centered Guidance AI?
            </h2>
            <div className="w-16 h-1 bg-amber-400 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100"
            >
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">What It Is</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>An AI assistant trained exclusively on the Bible</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Uses Scripture and the teachings of Jesus as reference</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Helps you reflect, think, and find direction aligned with Christian values</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-100"
            >
              <div className="w-12 h-12 bg-slate-200 rounded-xl flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-slate-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-4">What It Is Not</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="text-slate-400 mt-0.5 flex-shrink-0">•</span>
                  <span>It is not Jesus or a divine being</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-400 mt-0.5 flex-shrink-0">•</span>
                  <span>It does not replace prayer or personal devotion</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-slate-400 mt-0.5 flex-shrink-0">•</span>
                  <span>It does not replace church community or pastoral guidance</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How To Use Section */}
      <section className="px-4 py-16 bg-gradient-to-b from-amber-50/50 to-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-800 mb-4">
              How You Can Use It
            </h2>
            <p className="text-slate-600">Examples of questions you might ask</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-5 shadow-sm border border-slate-100 flex items-start gap-4"
              >
                <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <HelpCircle className="w-4 h-4 text-amber-600" />
                </div>
                <p className="text-slate-700 italic">"{useCase}"</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 bg-white rounded-2xl p-6 border border-amber-100 text-center"
          >
            <p className="text-slate-600">
              <span className="font-medium text-slate-700">What to expect:</span> Calm responses • Scripture-based explanations • Encouragement for personal reflection
            </p>
          </motion.div>
        </div>
      </section>

      {/* Connection to Upsell 1 */}
      <section className="px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 text-center text-white"
          >
            <Sun className="w-12 h-12 text-amber-400 mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-6">
              Why This Helps Between Your Weekly Challenges
            </h2>
            <div className="space-y-4 text-slate-300 text-left max-w-xl mx-auto">
              <p className="flex items-start gap-3">
                <span className="text-amber-400 font-bold">→</span>
                Your weekly challenge provides structure and focused growth
              </p>
              <p className="flex items-start gap-3">
                <span className="text-amber-400 font-bold">→</span>
                This AI provides support whenever questions arise between sessions
              </p>
              <p className="flex items-start gap-3">
                <span className="text-amber-400 font-bold">→</span>
                It's available anytime doubts or decisions need clarity
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-700">
              <p className="text-amber-200 font-medium italic">
                "A place to return when you need clarity during the month."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-800 mb-4">
              What You Receive with the Subscription
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4 bg-slate-50 rounded-xl p-4"
              >
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-5 h-5 text-amber-600" />
                </div>
                <span className="text-slate-700">{feature.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 rounded-2xl p-8 border border-slate-200"
          >
            <h3 className="text-lg font-semibold text-slate-700 mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5 text-slate-500" />
              Important Information
            </h3>
            <div className="space-y-3 text-slate-600 text-sm">
              <p>
                This tool is designed for <span className="font-medium">faith-based reflection and personal development</span>. 
                It provides Scripture-based guidance to support your spiritual journey.
              </p>
              <p>
                It does <span className="font-medium">not replace</span> prayer, church leadership, pastoral counseling, 
                or professional advice of any kind.
              </p>
              <p>
                This service does <span className="font-medium">not provide</span> medical, financial, legal, 
                or therapeutic advice. For such matters, please consult qualified professionals.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-4 py-16 bg-gradient-to-b from-white to-amber-50/50">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-800 mb-4">
              Continue Your Journey
            </h2>
            <p className="text-slate-600 mb-8">
              Simple monthly subscription • Cancel anytime • No obligations
            </p>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-amber-100 mb-6">
              <div className="mb-6">
                <span className="text-4xl font-bold text-slate-800">Monthly Access</span>
                <p className="text-slate-500 mt-2">Unlimited guidance whenever you need it</p>
              </div>
              
              <Button 
                onClick={handleAccept}
                size="lg"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white py-6 text-lg rounded-xl shadow-lg shadow-amber-200 mb-4"
              >
                Add Monthly Guidance
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <button
                onClick={handleDecline}
                className="text-slate-500 hover:text-slate-700 text-sm underline underline-offset-4 transition-colors"
              >
                No, continue without monthly guidance
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final Reassurance */}
      <section className="px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Heart className="w-12 h-12 text-amber-400 mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-800 mb-6">
              This Is Your Journey
            </h2>
            <p className="text-slate-600 text-lg mb-4">
              You are not obligated to add this subscription. It is here as optional support 
              for those moments when you seek clarity and reflection.
            </p>
            <p className="text-slate-600 text-lg mb-8">
              Faith is a journey, and guidance is available whenever you need it.
            </p>
            
            <Button 
              onClick={handleAccept}
              size="lg"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-amber-200"
            >
              Continue with Monthly Guidance
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-8 border-t border-slate-100">
        <div className="max-w-3xl mx-auto text-center text-sm text-slate-500">
          <p>© 2024 All rights reserved. This is a faith-based reflection tool.</p>
        </div>
      </footer>
    </div>
  );
};

export default Upsell2;
