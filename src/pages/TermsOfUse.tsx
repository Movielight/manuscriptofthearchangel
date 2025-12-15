import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "@/components/layout/Footer";
import { ArchangelKeyLogo } from "@/components/brand/ArchangelKeyLogo";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'var(--gradient-premium)' }}>
      <div className="flex-1 px-4 py-8 max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <ArchangelKeyLogo size="sm" showText={false} />
            <h1 className="font-heading text-3xl md:text-4xl text-foreground">Terms of Use</h1>
          </div>
          <p className="text-muted-foreground">Last updated: December 2024</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-8 text-foreground"
        >
          <section className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border/50">
            <h2 className="font-heading text-2xl mb-4 text-primary">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using Archangel Key ("the App"), you agree to be bound by these Terms of Use. 
              If you do not agree to these terms, please do not use the App.
            </p>
          </section>

          <section className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border/50">
            <h2 className="font-heading text-2xl mb-4 text-primary">2. Description of Service</h2>
            <p className="text-muted-foreground leading-relaxed">
              Archangel Key is an educational digital platform designed to support personal development, 
              introspection, and self-awareness through symbolic teachings, guided meditations, practical 
              exercises, and reflective content. The App is intended for educational purposes only.
            </p>
          </section>

          <section className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border/50">
            <h2 className="font-heading text-2xl mb-4 text-primary">3. Educational Disclaimer</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The content provided in this App is for educational and informational purposes only. It is not 
              intended to replace professional medical, psychological, or spiritual guidance. The practices 
              and teachings presented are symbolic and reflective tools designed to support personal growth.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We make no guarantees or miraculous promises regarding the outcomes of using this App. Results 
              may vary based on individual dedication and personal circumstances.
            </p>
          </section>

          <section className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border/50">
            <h2 className="font-heading text-2xl mb-4 text-primary">4. User Accounts</h2>
            <p className="text-muted-foreground leading-relaxed">
              To access certain features, you must create an account. You are responsible for maintaining 
              the confidentiality of your account credentials and for all activities that occur under your 
              account. You agree to provide accurate and complete information during registration.
            </p>
          </section>

          <section className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border/50">
            <h2 className="font-heading text-2xl mb-4 text-primary">5. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              All content, including but not limited to text, graphics, logos, images, audio, video, and 
              software, is the property of Archangel Key and its creator. You may not reproduce, distribute, 
              modify, or create derivative works without prior written consent.
            </p>
          </section>

          <section className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border/50">
            <h2 className="font-heading text-2xl mb-4 text-primary">6. Prohibited Conduct</h2>
            <ul className="text-muted-foreground space-y-2 list-disc list-inside">
              <li>Using the App for any unlawful purpose</li>
              <li>Attempting to gain unauthorized access to any portion of the App</li>
              <li>Interfering with or disrupting the App's functionality</li>
              <li>Sharing your account credentials with third parties</li>
              <li>Copying or distributing App content without permission</li>
            </ul>
          </section>

          <section className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border/50">
            <h2 className="font-heading text-2xl mb-4 text-primary">7. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              To the fullest extent permitted by law, Archangel Key and its creator shall not be liable for 
              any indirect, incidental, special, consequential, or punitive damages resulting from your use 
              or inability to use the App.
            </p>
          </section>

          <section className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border/50">
            <h2 className="font-heading text-2xl mb-4 text-primary">8. Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to modify these Terms of Use at any time. Changes will be effective 
              immediately upon posting. Your continued use of the App after any changes constitutes 
              acceptance of the new terms.
            </p>
          </section>

          <section className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border/50">
            <h2 className="font-heading text-2xl mb-4 text-primary">9. Owner Information</h2>
            <div className="text-muted-foreground leading-relaxed space-y-2">
              <p><strong className="text-foreground">App Name:</strong> Archangel Key</p>
              <p><strong className="text-foreground">Creator:</strong> Vinícius Carlos Barbosa</p>
              <p><strong className="text-foreground">Contact:</strong> support@archangelkey.com</p>
            </div>
          </section>

          <section className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border/50">
            <h2 className="font-heading text-2xl mb-4 text-primary">10. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms shall be governed by and construed in accordance with applicable laws, without 
              regard to conflict of law principles.
            </p>
          </section>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TermsOfUse;
