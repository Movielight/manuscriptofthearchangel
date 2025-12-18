import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  Clock, 
  BookOpen, 
  Target, 
  Flame, 
  Star, 
  Shield, 
  ChevronRight,
  Users,
  Zap,
  Heart,
  Award
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { LiveNotifications } from "@/components/quiz/LiveNotifications";

const Upsell1 = () => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 59 });
  const [spotsLeft, setSpotsLeft] = useState(7);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const days = [
    {
      day: 1,
      title: "O Despertar da Mente",
      description: "Leitura de Salmo 1 + Exercício de clareza mental (5 min)",
      icon: BookOpen
    },
    {
      day: 2,
      title: "Ancorado na Palavra",
      description: "Provérbios 3:5-6 + Técnica de memorização sagrada",
      icon: Target
    },
    {
      day: 3,
      title: "Silenciando o Ruído",
      description: "Salmo 46:10 + Prática de silêncio contemplativo",
      icon: Heart
    },
    {
      day: 4,
      title: "Foco Inabalável",
      description: "Filipenses 4:8 + Exercício de concentração profunda",
      icon: Zap
    },
    {
      day: 5,
      title: "Renovação da Mente",
      description: "Romanos 12:2 + Técnica de renovação mental",
      icon: Flame
    },
    {
      day: 6,
      title: "Sabedoria Divina",
      description: "Tiago 1:5 + Prática de discernimento",
      icon: Star
    },
    {
      day: 7,
      title: "Transformação Completa",
      description: "2 Coríntios 5:17 + Celebração e compromisso",
      icon: Award
    }
  ];

  const benefits = [
    "Mais clareza mental em apenas 7 dias",
    "Técnicas de foco baseadas em princípios bíblicos",
    "Leituras curtas de 5-10 minutos por dia",
    "Exercícios práticos e fáceis de aplicar",
    "Sensação de progresso diário",
    "Comunidade de apoio exclusiva"
  ];

  const testimonials = [
    {
      name: "Maria S.",
      location: "São Paulo, BR",
      text: "Em apenas 7 dias, minha concentração durante a oração melhorou 100%. Incrível!",
      avatar: "👩"
    },
    {
      name: "João P.",
      location: "Lisboa, PT",
      text: "O desafio mudou minha rotina matinal. Agora começo o dia com foco e paz.",
      avatar: "👨"
    },
    {
      name: "Ana L.",
      location: "Rio de Janeiro, BR",
      text: "Simples, prático e transformador. Recomendo a todos!",
      avatar: "👩‍🦱"
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Live Notifications */}
      <LiveNotifications />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/30"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, -20, 20],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Urgency Banner */}
      <div className="bg-destructive text-destructive-foreground py-3 px-4 text-center relative z-10">
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <Clock className="w-5 h-5 animate-pulse" />
          <span className="font-semibold">
            OFERTA ESPECIAL EXPIRA EM: {String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
          </span>
          <span className="bg-background/20 px-2 py-1 rounded text-sm">
            Apenas {spotsLeft} vagas restantes
          </span>
        </div>
      </div>

      <div className="container max-w-4xl mx-auto px-4 py-8 relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Flame className="w-4 h-4" />
            <span className="text-sm font-medium">Oferta Exclusiva Pós-Quiz</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4 leading-tight">
            Desafio de 7 Dias de{" "}
            <span className="text-primary">Foco Bíblico</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Transforme sua concentração e clareza mental com leituras bíblicas curtas 
            e exercícios práticos de foco em apenas uma semana.
          </p>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-6 flex-wrap mb-8">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground">
                <strong className="text-foreground">2,847</strong> pessoas completaram
              </span>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
              <span className="text-sm text-muted-foreground ml-1">4.9/5</span>
            </div>
          </div>
        </motion.div>

        {/* 7 Days Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card rounded-2xl p-6 md:p-8 shadow-lg border border-border mb-12"
        >
          <h2 className="text-2xl font-heading font-semibold text-center mb-8">
            Sua Jornada de 7 Dias
          </h2>

          <div className="space-y-4">
            {days.map((day, index) => (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-background/50 border border-border/50 hover:border-primary/50 transition-all"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <day.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded">
                      DIA {day.day}
                    </span>
                    <h3 className="font-semibold text-foreground">{day.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{day.description}</p>
                </div>
                <div className="flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-muted-foreground/30" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-heading font-semibold text-center mb-8">
            O Que Você Vai Conquistar
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border"
              >
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-foreground">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-heading font-semibold text-center mb-8">
            O Que Dizem Nossos Alunos
          </h2>

          <div className="grid md:grid-cols-3 gap-4">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="bg-card p-6 rounded-xl border border-border"
              >
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
                      ✓ Verificado
                    </span>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-br from-primary/10 via-card to-primary/5 rounded-2xl p-8 border-2 border-primary/30 mb-8 relative overflow-hidden"
        >
          {/* Glow effect */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
          
          <div className="relative z-10 text-center">
            <span className="inline-block bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold mb-4">
              OFERTA POR TEMPO LIMITADO
            </span>

            <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
              Desafio de 7 Dias de Foco Bíblico
            </h3>

            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-2xl text-muted-foreground line-through">R$ 97</span>
              <span className="text-5xl font-bold text-primary">R$ 27</span>
            </div>

            <p className="text-sm text-muted-foreground mb-6">
              Pagamento único • Acesso vitalício • Garantia de 7 dias
            </p>

            <Button
              size="lg"
              className="w-full md:w-auto px-12 py-6 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all group"
            >
              QUERO COMEÇAR AGORA
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <div className="flex items-center justify-center gap-6 mt-6 flex-wrap">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-green-500" />
                <span>Compra Segura</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-primary" />
                <span>Acesso Imediato</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="bg-card rounded-xl p-6 border border-border text-center mb-8"
        >
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/10 flex items-center justify-center">
            <Shield className="w-8 h-8 text-green-500" />
          </div>
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Garantia de 7 Dias
          </h3>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            Se você não sentir uma mudança real na sua concentração e clareza mental 
            em 7 dias, devolvemos 100% do seu investimento. Sem perguntas.
          </p>
        </motion.div>

        {/* Secondary CTA */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Ainda tem dúvidas? Fale conosco pelo WhatsApp
          </p>
          <Button variant="outline" size="sm">
            Falar com Suporte
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Upsell1;
