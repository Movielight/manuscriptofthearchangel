import { motion } from "framer-motion";
import { Mail, Inbox, ShieldCheck, CreditCard, LifeBuoy, CheckCircle2 } from "lucide-react";
import { QuizFooter } from "@/components/quiz/QuizFooter";
import { ArchangelKeyLogo } from "@/components/brand/ArchangelKeyLogo";

const ThankYou = () => {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "var(--gradient-premium)" }}
    >
      <main className="flex-1 flex flex-col items-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-lg text-center"
        >
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <ArchangelKeyLogo size="lg" showText={false} />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-card border border-primary/30 rounded-full px-4 py-1.5 mb-6">
            <CheckCircle2 className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">
              Payment Confirmed
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Thank You for Your Order
          </h1>

          <p className="text-muted-foreground text-lg mb-10 max-w-md mx-auto">
            Your place is reserved. The next step is a single email — that is
            where your access begins.
          </p>
        </motion.div>

        {/* Email instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-lg bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border/60 shadow-[var(--shadow-sacred)] mb-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <h2 className="font-heading text-2xl text-foreground">
              Check Your Email
            </h2>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            We have sent a message to the address you used at checkout. Open it
            and follow the button inside to set up your account and enter the
            product.
          </p>

          <ol className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-primary/15 text-primary text-sm font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">
                1
              </span>
              <span className="text-foreground">
                Open the email from us — the subject line is your access
                invitation.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-primary/15 text-primary text-sm font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">
                2
              </span>
              <span className="text-foreground">
                Click the access button inside and create your password.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-full bg-primary/15 text-primary text-sm font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">
                3
              </span>
              <span className="text-foreground">
                Sign in with that email and password whenever you want to
                continue.
              </span>
            </li>
          </ol>

          {/* Spam note */}
          <div className="mt-8 flex items-start gap-3 bg-primary/5 border border-primary/20 rounded-xl p-4">
            <Inbox className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              <span className="text-foreground font-medium">
                Not in your inbox?
              </span>{" "}
              Check your spam, promotions or updates folder, and search for the
              word “access”. If it is still missing after a few minutes, write
              to us and we will resend it right away.
            </p>
          </div>
        </motion.div>

        {/* Billing statement note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="w-full max-w-lg bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-border/60 mb-6"
        >
          <div className="flex items-start gap-3">
            <CreditCard className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-heading text-xl text-foreground mb-2">
                How the charge will appear
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                For your records, this purchase is processed by our payment
                partner and will show on your card or bank statement as{" "}
                <span className="text-foreground font-semibold">
                  Digistore24
                </span>
                . You keep a 60-day money-back guarantee, and your access stays
                open the whole time.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Support note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="w-full max-w-lg flex items-start gap-3 text-center sm:text-left"
        >
          <LifeBuoy className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground leading-relaxed">
            Need a hand with the email or your login? Our support team answers
            every message — use the Support link below and we will get you in.
          </p>
        </motion.div>

        {/* Guarantee reminder */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-10 flex items-center gap-2 text-sm font-medium text-primary"
        >
          <ShieldCheck className="w-4 h-4 flex-shrink-0" />
          <span>60-Day Money-Back Guarantee — full refund, no questions asked</span>
        </motion.div>
      </main>

      <QuizFooter />
    </div>
  );
};

export default ThankYou;
