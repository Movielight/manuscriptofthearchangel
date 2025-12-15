import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How do I access the Sacred Manuscript?",
    answer: "After completing your purchase, you will receive instant access to the complete Sacred Manuscript through your personal dashboard. You can access it from any device, anywhere in the world.",
  },
  {
    question: "Is my payment information secure?",
    answer: "Absolutely. We use industry-standard SSL encryption and secure payment processing. Your financial information is never stored on our servers and is handled by trusted payment providers.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you have complete freedom. You can cancel your subscription at any moment with just one click. There are no hidden fees, no long-term commitments, and no questions asked.",
  },
  {
    question: "What if this doesn't work for me?",
    answer: "We offer a 7-day satisfaction guarantee. If you don't feel a genuine connection with the teachings, simply contact us for a full refund. Your spiritual journey should feel right.",
  },
  {
    question: "How is this different from other spiritual programs?",
    answer: "The Archangel Key is a personalized journey based on your unique spiritual needs, as revealed by your quiz results. Every prayer, meditation, and practice is tailored to guide you specifically.",
  },
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="space-y-3"
    >
      <div className="flex items-center justify-center gap-2 mb-6">
        <HelpCircle className="w-5 h-5 text-primary" />
        <h3 className="font-heading text-xl text-foreground">
          Frequently Asked Questions
        </h3>
      </div>

      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 + index * 0.1 }}
          className="bg-card/60 backdrop-blur-sm rounded-xl border border-border/50 overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-muted/30 transition-colors"
          >
            <span className="font-medium text-foreground pr-4">{faq.question}</span>
            <ChevronDown
              className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <p className="px-5 pb-4 text-foreground/80 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </motion.div>
  );
};
