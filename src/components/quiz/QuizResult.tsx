import { motion } from "framer-motion";
import { QuizResult as QuizResultType } from "@/data/quizQuestions";
import { Shield, Heart, RotateCcw, Check } from "lucide-react";
import { ArchangelKeyLogo } from "@/components/brand/ArchangelKeyLogo";
import { TrustBadges } from "./TrustBadges";
import { Testimonials } from "./Testimonials";
import { CountdownTimer } from "./CountdownTimer";
import { SocialProofCounter } from "./SocialProofCounter";
import { GuaranteeSection } from "./GuaranteeSection";
import { FAQSection } from "./FAQSection";
import { PaymentMethods } from "./PaymentMethods";
import Footer from "@/components/layout/Footer";

interface QuizResultProps {
  result: QuizResultType;
}

const iconMap = {
  protection: Shield,
  healing: Heart,
  restoration: RotateCcw
};

export const QuizResult = ({ result }: QuizResultProps) => {
  const Icon = iconMap[result.type];
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen mystical-bg"
    >
      {/* Decorative glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 py-12 relative z-10">
        {/* Result Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center mb-10"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-gold-dark flex items-center justify-center floating"
          >
            <Icon className="w-12 h-12 text-primary-foreground" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-primary font-heading text-sm tracking-[0.3em] uppercase mb-3"
          >
            Your Divine Message Has Been Revealed
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="sacred-heading mb-4"
          >
            {result.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="sacred-subheading"
          >
            {result.subtitle}
          </motion.p>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mb-8"
        >
          <SocialProofCounter variant="result" />
        </motion.div>

        {/* Message Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="sacred-card sacred-glow mb-8"
        >
          <p className="text-lg leading-relaxed text-foreground/90 font-heading">
            {result.message}
          </p>
        </motion.div>

        {/* Guidance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="sacred-card mb-8 border-l-4 border-l-primary"
        >
          <h3 className="font-heading text-xl text-primary mb-4">
            What the Archangel Has Prepared for You
          </h3>
          <p className="text-foreground/80 leading-relaxed">{result.guidance}</p>
        </motion.div>

        {/* Urgency Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="text-center mb-10"
        >
          <p className="text-primary font-heading text-xl italic">
            "{result.urgency}"
          </p>
        </motion.div>

        {/* Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className="mb-10"
        >
          <CountdownTimer initialMinutes={15} />
        </motion.div>

        {/* Manuscript Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7 }}
          className="sacred-card text-center mb-10"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 2, duration: 0.5 }}
          >
            <div className="mb-4">
              <ArchangelKeyLogo size="md" animate />
            </div>
            <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-4">
              Unlock Your Archangel Key
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Your quiz results reveal a spiritual need that can only be fulfilled
              through divine intervention. The Sacred Manuscript contains the exact
              prayers, codes, and celestial instructions meant specifically for your
              journey.
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
              <div className="bg-muted/50 rounded-xl p-4">
                <h4 className="font-heading text-lg text-foreground mb-3">
                  Inside the Manuscript:
                </h4>
                <ul className="text-left space-y-2 text-foreground/80">
                  {[
                    "Ancient prayers of protection",
                    "Sacred healing codes & frequencies",
                    "Restoration invocations",
                    "Step-by-step spiritual rituals",
                    "Direct angelic communication guides",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-muted/50 rounded-xl p-4">
                <h4 className="font-heading text-lg text-foreground mb-3">
                  What You Will Unlock:
                </h4>
                <ul className="text-left space-y-2 text-foreground/80">
                  {[
                    "The full message revealed today",
                    "Personalized prayer sequences",
                    "Protection against negative forces",
                    "Accelerated spiritual healing",
                    "Divine abundance activation",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Pricing Option */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          className="mb-10"
        >
          <h3 className="font-heading text-2xl text-center text-foreground mb-8">
            Your Path to Divine Access
          </h3>

          <div className="max-w-md mx-auto">
            {/* Subscription */}
            <motion.div
              whileHover={{ y: -5 }}
              className="sacred-card sacred-glow text-center"
            >
              <div className="bg-primary/10 text-primary text-sm font-medium py-1 px-3 rounded-full inline-block mb-4">
                Sacred Investment
              </div>
              <h4 className="font-heading text-2xl text-foreground mb-2">
                Sacred Blessing
              </h4>
              <p className="text-muted-foreground mb-4">
                Unlock divine guidance forever
              </p>
              <div className="mb-6">
                <span className="text-4xl font-heading text-primary">$5</span>
                <span className="text-muted-foreground"> / month</span>
              </div>
              <ul className="text-left space-y-3 mb-6">
                {[
                  "Complete Sacred Manuscript access",
                  "All prayers, codes & rituals",
                  "Monthly new prayers & revelations",
                  "Exclusive spiritual guidance",
                  "Cancel anytime with grace",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-foreground/80">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://checkout.usecloverr.com/checkout/204424356:1?subscription=3530"
                target="_blank"
                rel="noopener noreferrer"
                className="divine-button w-full block text-center text-lg animate-pulse"
              >
                Unlock My Divine Access Now
              </a>
              <p className="text-xs text-muted-foreground mt-3">
                Instant access after confirmation
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.1 }}
          className="mb-10"
        >
          <TrustBadges />
        </motion.div>

        {/* Payment Methods */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="mb-10"
        >
          <PaymentMethods />
        </motion.div>

        {/* Guarantee Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.3 }}
          className="mb-10"
        >
          <GuaranteeSection />
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4 }}
          className="mb-10"
        >
          <Testimonials />
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5 }}
          className="mb-10"
        >
          <FAQSection />
        </motion.div>

        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.6 }}
          className="text-center mb-10"
        >
          <p className="text-muted-foreground font-heading italic">
            "The Archangel has spoken. The choice to receive is now yours."
          </p>
          <p className="text-sm text-muted-foreground/70 mt-4">
            ✦ Secure & blessed transaction ✦ Instant divine access ✦
          </p>
        </motion.div>

        {/* Second CTA - Sticky feel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.7 }}
          className="text-center mb-10"
        >
          <a
            href="https://checkout.usecloverr.com/checkout/204424356:1?subscription=3530"
            target="_blank"
            rel="noopener noreferrer"
            className="divine-button text-lg inline-block"
          >
            Yes, I'm Ready to Begin
          </a>
        </motion.div>
      </div>

      {/* Footer */}
      <Footer />
    </motion.div>
  );
};
