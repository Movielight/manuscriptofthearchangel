import { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Mail, Lock, Eye, EyeOff, ArrowLeft, User, Globe } from 'lucide-react';
import { ArchangelKeyLogo } from '@/components/brand/ArchangelKeyLogo';
import { z } from 'zod';
import { QuizFooter } from '@/components/quiz/QuizFooter';
import {
  detectBrowserLanguage,
  persistLanguage,
  getTranslation,
  type Language,
} from '@/data/translations';

const Auth = () => {
  const [language, setLanguageState] = useState<Language>(() => detectBrowserLanguage());
  const t = useMemo(() => getTranslation(language).auth, [language]);

  const emailSchema = useMemo(() => z.string().email(t.invalidEmail), [t]);
  const passwordSchema = useMemo(() => z.string().min(6, t.passwordTooShort), [t]);
  const nameSchema = useMemo(
    () => z.string().min(2, t.nameTooShort).max(50, t.nameTooLong),
    [t]
  );

  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string; name?: string }>({});

  const { user, loading, signIn, signUp } = useAuth();
  const navigate = useNavigate();

  const changeLanguage = (lang: Language) => {
    setLanguageState(lang);
    persistLanguage(lang);
  };

  useEffect(() => {
    if (user && !loading) {
      navigate('/');
    }
  }, [user, loading, navigate]);

  const validateForm = () => {
    const newErrors: { email?: string; password?: string; name?: string } = {};

    const emailResult = emailSchema.safeParse(email);
    if (!emailResult.success) {
      newErrors.email = emailResult.error.errors[0].message;
    }

    const passwordResult = passwordSchema.safeParse(password);
    if (!passwordResult.success) {
      newErrors.password = passwordResult.error.errors[0].message;
    }

    if (!isLogin) {
      const nameResult = nameSchema.safeParse(name);
      if (!nameResult.success) {
        newErrors.name = nameResult.error.errors[0].message;
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      if (isLogin) {
        const { error } = await signIn(email, password);
        if (error) {
          if (error.message.includes('Invalid login credentials')) {
            toast.error(t.invalidCredentials);
          } else {
            toast.error(error.message);
          }
        } else {
          toast.success(t.welcomeToast);
          navigate('/');
        }
      } else {
        const { error } = await signUp(email, password, name);
        if (error) {
          if (error.message.includes('already registered')) {
            toast.error(t.alreadyRegistered);
          } else {
            toast.error(error.message);
          }
        } else {
          toast.success(t.accountCreated);
          navigate('/');
        }
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center gap-4"
        >
          <ArchangelKeyLogo size="lg" animate />
          <p className="text-muted-foreground">{t.loading}</p>
        </motion.div>
      </div>
    );
  }

  const languageOptions: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'pt-BR', label: 'PT' },
    { code: 'fr', label: 'FR' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        {/* Top bar: back + language switcher */}
        <div className="flex items-center justify-between mb-6">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/quiz')}
            className="text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t.backToQuiz}
          </Button>

          <div className="flex items-center gap-1 bg-card border border-border rounded-full px-2 py-1" aria-label={t.language}>
            <Globe className="w-3.5 h-3.5 text-muted-foreground ml-1" />
            {languageOptions.map((opt) => (
              <button
                key={opt.code}
                type="button"
                onClick={() => changeLanguage(opt.code)}
                className={`text-xs font-medium px-2 py-0.5 rounded-full transition-colors ${
                  language === opt.code
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="inline-flex items-center justify-center mb-4"
          >
            <ArchangelKeyLogo size="lg" showText animate />
          </motion.div>
          <h1 className="text-2xl font-serif font-bold text-foreground mb-2">
            {isLogin ? t.welcomeBack : t.beginJourney}
          </h1>
          <p className="text-muted-foreground">
            {isLogin ? t.signInSubtitle : t.signUpSubtitle}
          </p>
        </div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-card border border-border rounded-xl p-6 shadow-lg"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">{t.yourName}</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="name"
                    type="text"
                    placeholder={t.namePlaceholder}
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      setErrors(prev => ({ ...prev, name: undefined }));
                    }}
                    className="pl-10"
                    disabled={isSubmitting}
                  />
                </div>
                {errors.name && (
                  <p className="text-sm text-destructive">{errors.name}</p>
                )}
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">{t.email}</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder={t.emailPlaceholder}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setErrors(prev => ({ ...prev, email: undefined }));
                  }}
                  className="pl-10"
                  disabled={isSubmitting}
                />
              </div>
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground">{t.password}</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setErrors(prev => ({ ...prev, password: undefined }));
                  }}
                  className="pl-10 pr-10"
                  disabled={isSubmitting}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {errors.password && (
                <p className="text-sm text-destructive">{errors.password}</p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting}
            >
            {isSubmitting ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full"
                />
              ) : (
                isLogin ? t.signIn : t.createAccount
              )}
            </Button>
          </form>

          {/* First time user notice */}
          {isLogin && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-4 p-3 bg-primary/10 border border-primary/20 rounded-lg"
            >
              <p className="text-sm text-center text-muted-foreground">
                <span className="font-medium text-foreground">{t.firstTimeTitle}</span>{' '}
                {t.firstTimeMessage.split(`"${t.signUpLink}"`).map((part, i, arr) => (
                  <span key={i}>
                    {part}
                    {i < arr.length - 1 && (
                      <span className="font-semibold text-primary">"{t.signUpLink}"</span>
                    )}
                  </span>
                ))}
              </p>
            </motion.div>
          )}

          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={() => {
                setIsLogin(!isLogin);
                setErrors({});
                setName('');
              }}
              className="text-sm text-primary hover:underline"
              disabled={isSubmitting}
            >
              {isLogin ? t.noAccount : t.hasAccount}
            </button>
          </div>
        </motion.div>
      </motion.div>
      </div>
      <QuizFooter />
    </div>
  );
};

export default Auth;
