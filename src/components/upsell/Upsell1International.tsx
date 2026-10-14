import { motion } from "framer-motion";
import { CheckCircle2, Clock, BookOpen, Target, Flame, Star, Shield, Users, Zap, Heart, Award, RefreshCw, Infinity as InfinityIcon } from "lucide-react";
import { LiveNotifications } from "@/components/quiz/LiveNotifications";
import { QuizFooter } from "@/components/quiz/QuizFooter";
import { Button } from "@/components/ui/button";
const Upsell1International = () => {
  const days = [{
    day: 1,
    title: "Awakening the Mind",
    description: "Daily Scripture Reading + Mental Clarity Exercise (5 min)",
    icon: BookOpen
  }, {
    day: 2,
    title: "Anchored in the Word",
    description: "Wisdom Verse + Sacred Memorization Technique",
    icon: Target
  }, {
    day: 3,
    title: "Silencing the Noise",
    description: "Peace Scripture + Contemplative Silence Practice",
    icon: Heart
  }, {
    day: 4,
    title: "Unshakable Focus",
    description: "Focus Verse + Deep Concentration Exercise",
    icon: Zap
  }, {
    day: 5,
    title: "Renewing the Mind",
    description: "Transformation Scripture + Mental Renewal Technique",
    icon: Flame
  }, {
    day: 6,
    title: "Divine Wisdom",
    description: "Wisdom Verse + Discernment Practice",
    icon: Star
  }, {
    day: 7,
    title: "Complete Transformation",
    description: "Victory Scripture + Celebration & Commitment",
    icon: Award
  }];
  const benefits = ["New verses & exercises every single week", "Biblical focus techniques that actually work", "Short 5-10 minute daily readings", "Practical exercises easy to apply", "Daily sense of spiritual progress", "Exclusive community of believers"];
  const subscriptionFeatures = [{
    icon: RefreshCw as React.ElementType,
    title: "Fresh Content Weekly",
    description: "New verses and exercises every 7 days"
  }, {
    icon: InfinityIcon,
    title: "Unlimited Access",
    description: "All past and future challenges included"
  }, {
    icon: Users as React.ElementType,
    title: "Community Support",
    description: "Connect with thousands of believers"
  }];
  const testimonials = [{
    name: "Sarah M.",
    location: "Texas, USA",
    text: "After just 2 weeks, my focus during prayer improved dramatically. This app changed my spiritual life!",
    avatar: "👩"
  }, {
    name: "Michael R.",
    location: "London, UK",
    text: "The weekly challenges keep me engaged. I've never stuck with a devotional this long!",
    avatar: "👨"
  }, {
    name: "Emily K.",
    location: "Sydney, AU",
    text: "Simple, practical, and transformative. The new verses each week keep it fresh and exciting.",
    avatar: "👩‍🦱"
  }];
  const faqs = [{
    question: "How does the weekly renewal work?",
    answer: "Every 7 days, you receive a completely new set of Bible verses and focus exercises. The structure stays the same, but the content is fresh and different."
  }, {
    question: "Is this a one-time payment?",
    answer: "Yes! You pay once — $53.00 — and get full access. No subscription, no recurring charges, no hidden fees."
  }, {
    question: "What if I miss a day?",
    answer: "No problem! You can always go back and complete previous days. The content remains available with your one-time purchase."
  }];
  return <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Live Notifications */}
      <LiveNotifications />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => <motion.div key={i} className="absolute w-1 h-1 rounded-full bg-primary/30" initial={{
        x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
        y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800)
      }} animate={{
        y: [null, -20, 20],
        opacity: [0.3, 0.8, 0.3]
      }} transition={{
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        repeatType: "reverse"
      }} />)}
      </div>

      {/* Guarantee Banner */}
      <div className="bg-primary/10 border-b border-primary/20 text-primary py-3 px-4 text-center relative z-10">
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <Shield className="w-5 h-5" />
          <span className="font-semibold">
            60-Day Money-Back Guarantee — try it risk-free
          </span>
        </div>
      </div>

      <div className="container max-w-4xl mx-auto px-4 py-8 relative z-10">
        {/* Hero Section */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Flame className="w-4 h-4" />
            <span className="text-sm font-medium">Exclusive Post-Quiz Offer</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4 leading-tight">
            7-Day Biblical{" "}
            <span className="text-primary">Focus Challenge</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            Transform your concentration and mental clarity with short biblical readings 
            and practical focus exercises — renewed every single week.
          </p>

          {/* One-Time Payment Highlight */}
          <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-600 px-4 py-2 rounded-full mb-8">
            <Shield className="w-4 h-4" />
            <span className="text-sm font-medium">One-Time Payment • No Subscription • Lifetime Access</span>
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-6 flex-wrap mb-8">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground">
                <strong className="text-foreground">12,847</strong> active members
              </span>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
              <span className="text-sm text-muted-foreground ml-1">4.9/5</span>
            </div>
          </div>
        </motion.div>

        {/* How It Works - Subscription Model */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.15
      }} className="bg-gradient-to-r from-primary/5 via-card to-primary/5 rounded-2xl p-6 md:p-8 border border-primary/20 mb-12">
          <h2 className="text-2xl font-heading font-semibold text-center mb-6">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {subscriptionFeatures.map((feature, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.2 + index * 0.1
          }} className="text-center">
                <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>)}
          </div>
        </motion.div>

        {/* 7 Days Timeline - Sample Week */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.2
      }} className="bg-card rounded-2xl p-6 md:p-8 shadow-lg border border-border mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-2">
              Your Weekly Journey
            </h2>
            <p className="text-sm text-muted-foreground">
              Sample week structure • New verses each week
            </p>
          </div>

          <div className="space-y-4">
            {days.map((day, index) => <motion.div key={day.day} initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: 0.3 + index * 0.1
          }} className="flex items-start gap-4 p-4 rounded-xl bg-background/50 border border-border/50 hover:border-primary/50 transition-all">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <day.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded">
                      DAY {day.day}
                    </span>
                    <h3 className="font-semibold text-foreground">{day.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{day.description}</p>
                </div>
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-muted-foreground/30" />
                </div>
              </motion.div>)}
          </div>

          <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/20 text-center">
            <RefreshCw className="w-5 h-5 text-primary mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Then it resets!</strong> A brand new 7-day challenge 
              with completely different verses and exercises begins.
            </p>
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.4
      }} className="mb-12">
          <h2 className="text-2xl font-heading font-semibold text-center mb-8">
            What You'll Achieve
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => <motion.div key={index} initial={{
            opacity: 0,
            scale: 0.9
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            delay: 0.5 + index * 0.1
          }} className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-foreground">{benefit}</span>
              </motion.div>)}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.6
      }} className="mb-12">
          <h2 className="text-2xl font-heading font-semibold text-center mb-8">
            What Our Members Say
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            {testimonials.map((testimonial, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.7 + index * 0.1
          }} className="bg-card p-6 rounded-xl border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  </div>
                  <div className="ml-auto">
                    <span className="text-xs bg-green-500/10 text-green-600 px-2 py-1 rounded-full">
                      ✓ Verified
                    </span>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-primary text-primary" />)}
                </div>
                <p className="text-sm text-muted-foreground italic">"{testimonial.text}"</p>
              </motion.div>)}
          </div>
        </motion.div>

        {/* Pricing Card */}
        <motion.div initial={{
        opacity: 0,
        scale: 0.95
      }} animate={{
        opacity: 1,
        scale: 1
      }} transition={{
        delay: 0.8
      }} className="bg-gradient-to-br from-primary/10 via-card to-primary/5 rounded-2xl p-8 border-2 border-primary/30 mb-8 relative overflow-hidden">
          {/* Glow effect */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
          
          <div className="relative z-10 text-center">
            <span className="inline-block bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold mb-4">
              LIMITED TIME OFFER
            </span>

            <div className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-2">$53.00</div>
            <p className="text-muted-foreground text-sm mb-8">One-time payment — no subscription, no recurring charges</p>

            <div className="space-y-3 max-w-md mx-auto mb-8">
              <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg rounded-xl" onClick={() => window.location.href = 'https://www.checkout-ds24.com/answer/yes?template=light'}>
                Yes, I want to buy it.
              </Button>
              <button className="w-full text-muted-foreground hover:text-foreground text-sm underline transition-colors" onClick={() => window.location.href = '/up2'}>
                I don't want
              </button>
            </div>

            <div className="flex items-center justify-center gap-6 mt-6 flex-wrap">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-green-500" />
                <span>Secure Payment</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-primary" />
                <span>Instant Access</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-primary" />
                <span>One-Time Payment</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Guarantee */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.9
      }} className="bg-card rounded-xl p-6 border border-border text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/10 flex items-center justify-center">
            <Shield className="w-8 h-8 text-green-500" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            60-Day Money-Back Guarantee
          </h3>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            If you don't experience a real change in your focus and mental clarity 
            within 60 days, we'll refund 100% of your investment. No questions asked.
          </p>
        </motion.div>

        {/* FAQ Preview */}
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 1
      }} className="mb-8">
          <h2 className="text-xl font-heading font-semibold text-center mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => <div key={index} className="bg-card rounded-xl p-4 border border-border">
                <h4 className="font-semibold text-foreground mb-2">{faq.question}</h4>
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </div>)}
          </div>
        </motion.div>

        <QuizFooter />
      </div>
    </div>;
};
export default Upsell1International;