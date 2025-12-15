import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "@/components/layout/Footer";
import { ArchangelKeyLogo } from "@/components/brand/ArchangelKeyLogo";

const PrivacyPolicy = () => {
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
            <h1 className="font-heading text-3xl md:text-4xl text-foreground">Privacy Policy</h1>
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
            <h2 className="font-heading text-2xl mb-4 text-primary">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              This Privacy Policy explains how Archangel Key ("we", "us", or "our") collects, uses, 
              and protects your personal information when you use our educational platform. We are 
              committed to ensuring your privacy is protected.
            </p>
          </section>

          <section className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border/50">
            <h2 className="font-heading text-2xl mb-4 text-primary">2. Information We Collect</h2>
            <div className="text-muted-foreground space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Account Information</h3>
                <p>When you create an account, we collect your name, email address, and password.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Usage Data</h3>
                <p>We collect information about how you interact with the App, including completed lessons, 
                journal entries, practice progress, and preferences.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Device Information</h3>
                <p>We may collect information about the device you use to access the App for optimization purposes.</p>
              </div>
            </div>
          </section>

          <section className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border/50">
            <h2 className="font-heading text-2xl mb-4 text-primary">3. How We Use Your Information</h2>
            <ul className="text-muted-foreground space-y-2 list-disc list-inside">
              <li>To provide and maintain the App's functionality</li>
              <li>To personalize your experience and track your progress</li>
              <li>To sync your data across devices</li>
              <li>To improve and optimize the App</li>
              <li>To communicate with you about updates or changes</li>
              <li>To respond to your inquiries and support requests</li>
            </ul>
          </section>

          <section className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border/50">
            <h2 className="font-heading text-2xl mb-4 text-primary">4. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal 
              information against unauthorized access, alteration, disclosure, or destruction. Your 
              data is encrypted in transit and at rest using industry-standard encryption protocols.
            </p>
          </section>

          <section className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border/50">
            <h2 className="font-heading text-2xl mb-4 text-primary">5. Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain your personal information for as long as your account is active or as needed 
              to provide you with the App's services. You may request deletion of your account and 
              associated data at any time by contacting us.
            </p>
          </section>

          <section className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border/50">
            <h2 className="font-heading text-2xl mb-4 text-primary">6. Third-Party Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use third-party services to provide certain functionalities (such as authentication 
              and data storage). These services have their own privacy policies, and we encourage you 
              to review them. We do not sell your personal information to third parties.
            </p>
          </section>

          <section className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border/50">
            <h2 className="font-heading text-2xl mb-4 text-primary">7. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">You have the right to:</p>
            <ul className="text-muted-foreground space-y-2 list-disc list-inside">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to processing of your personal information</li>
              <li>Request data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border/50">
            <h2 className="font-heading text-2xl mb-4 text-primary">8. Cookies and Tracking</h2>
            <p className="text-muted-foreground leading-relaxed">
              We use essential cookies and local storage to maintain your session and preferences. 
              We do not use third-party tracking cookies for advertising purposes.
            </p>
          </section>

          <section className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border/50">
            <h2 className="font-heading text-2xl mb-4 text-primary">9. Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              The App is not intended for children under the age of 13. We do not knowingly collect 
              personal information from children. If you believe a child has provided us with personal 
              information, please contact us.
            </p>
          </section>

          <section className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border/50">
            <h2 className="font-heading text-2xl mb-4 text-primary">10. Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes 
              by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border/50">
            <h2 className="font-heading text-2xl mb-4 text-primary">11. Owner Information</h2>
            <div className="text-muted-foreground leading-relaxed space-y-2">
              <p><strong className="text-foreground">Data Controller:</strong> Kaike Alves Gibertoni Snyder</p>
              <p><strong className="text-foreground">CPF:</strong> 03503610103</p>
              <p><strong className="text-foreground">Company:</strong> Movielight LTDA</p>
              <p><strong className="text-foreground">CNPJ:</strong> 48.108.988/0001-33</p>
              <p><strong className="text-foreground">App Name:</strong> Archangel Key</p>
              <p><strong className="text-foreground">Contact Email:</strong> support@archangelkey.com</p>
            </div>
          </section>

          <section className="bg-card/60 backdrop-blur-sm rounded-xl p-6 border border-border/50">
            <h2 className="font-heading text-2xl mb-4 text-primary">12. Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy or wish to exercise your rights, 
              please contact us at support@archangelkey.com.
            </p>
          </section>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
