import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, BookOpen, Star, ChevronLeft, ChevronRight, ArrowRight, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import angelicImage from "@/assets/illustrations/angelic-guidance.png";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Texas, USA",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    text: "This AI has become my daily companion for Scripture reflection. It helped me find peace during a difficult season.",
    rating: 5
  },
  {
    name: "Michael R.",
    location: "Florida, USA",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    text: "I love asking questions about Biblical principles. The responses are always thoughtful and grounded in Scripture.",
    rating: 5
  },
  {
    name: "Jennifer L.",
    location: "California, USA",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    text: "Perfect for those moments when I need clarity. It's like having a Bible study partner available 24/7.",
    rating: 5
  },
  {
    name: "David K.",
    location: "Ohio, USA",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    text: "The Scripture references in every response are so helpful. It's deepened my understanding of the Bible.",
    rating: 5
  },
  {
    name: "Emily W.",
    location: "Georgia, USA",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    text: "I was skeptical at first, but the guidance is genuinely helpful and always points back to God's Word.",
    rating: 5
  }
];

const Upsell2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
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

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000);
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0
    })
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

          {/* MundPay Buttons */}
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
            
            <div data-mndpay-render="019b3773-3b03-73c3-ac03-13b39b6509c2"></div>
            
            {showFallback && (
              <div className="mt-6 space-y-4">
                <Button 
                  size="lg"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white py-6 text-lg rounded-xl shadow-lg shadow-amber-200"
                  onClick={() => window.location.href = '/manuscript'}
                >
                  Add Monthly Guidance
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <button
                  className="w-full inline-flex items-center justify-center gap-2 text-slate-400 hover:text-slate-600 text-sm transition-colors"
                  onClick={() => window.location.href = '/manuscript'}
                >
                  <X className="w-4 h-4" />
                  No thanks, continue without
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      </main>

      {/* Testimonials Carousel */}
      <section className="px-4 py-12 bg-white/80">
        <div className="max-w-lg mx-auto">
          <h2 className="text-xl font-serif font-bold text-slate-800 text-center mb-8">
            What Our Members Say
          </h2>

          <div className="relative">
            {/* Carousel */}
            <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-amber-50 to-white border border-amber-100 p-6 min-h-[200px]">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Photo */}
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-amber-200 mb-4"
                  />
                  
                  {/* Stars */}
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  
                  {/* Text */}
                  <p className="text-slate-600 italic mb-4 text-sm leading-relaxed">
                    "{testimonials[currentIndex].text}"
                  </p>
                  
                  {/* Name & Location */}
                  <p className="font-semibold text-slate-800">{testimonials[currentIndex].name}</p>
                  <p className="text-xs text-slate-500">{testimonials[currentIndex].location}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation Buttons */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-slate-600 hover:text-amber-600 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center text-slate-600 hover:text-amber-600 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-amber-500' : 'bg-slate-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Mini Disclaimer */}
          <p className="mt-8 text-xs text-slate-400 max-w-sm mx-auto text-center">
            This AI tool is for faith-based reflection only. It does not replace prayer, 
            pastoral guidance, or professional advice.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Upsell2;
