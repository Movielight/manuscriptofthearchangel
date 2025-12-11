import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Globe, LogOut, User } from 'lucide-react';
import { 
  Type, 
  Palette, 
  RotateCcw, 
  Info, 
  Check,
  AlertTriangle
} from 'lucide-react';
import { ManuscriptProgress } from '@/hooks/useCloudProgress';
import { Language, getTranslation } from '@/data/translations';
import { ArchangelKeyLogo } from '@/components/brand/ArchangelKeyLogo';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Profile } from '@/hooks/useProfile';

interface SettingsPanelProps {
  progress: ManuscriptProgress;
  profile: Profile | null;
  onUpdateProfile: (updates: { first_name?: string }) => Promise<{ error: Error | null }>;
  onSetFontSize: (size: ManuscriptProgress['fontSize']) => void;
  onSetTheme: (theme: ManuscriptProgress['theme']) => void;
  onSetLanguage: (language: Language) => void;
  onResetProgress: () => void;
  onSignOut?: () => void;
  onClose?: () => void;
}

export const SettingsPanel = ({ 
  progress,
  profile,
  onUpdateProfile,
  onSetFontSize, 
  onSetTheme, 
  onSetLanguage,
  onResetProgress,
  onSignOut,
  onClose
}: SettingsPanelProps) => {
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [editName, setEditName] = useState(profile?.first_name || '');
  const [isSavingProfile, setIsSavingProfile] = useState(false);
  const t = getTranslation(progress.language).settings;

  const fontSizes: { value: ManuscriptProgress['fontSize']; label: string; sample: string }[] = [
    { value: 'small', label: t.small, sample: 'Aa' },
    { value: 'medium', label: t.medium, sample: 'Aa' },
    { value: 'large', label: t.large, sample: 'Aa' },
  ];

  const themes: { value: ManuscriptProgress['theme']; label: string; colors: string; description: string }[] = [
    { value: 'default', label: t.sacredNight, colors: 'from-amber-50 via-amber-100/50 to-amber-200/30', description: t.mysticalTones },
    { value: 'sepia', label: t.ancientParchment, colors: 'from-amber-100 via-amber-200/50 to-amber-300/30', description: t.warmTones },
    { value: 'dark', label: t.deepVoid, colors: 'from-gray-900/50 via-gray-800/40 to-gray-950/60', description: t.pureDarkness },
  ];

  const languages: { value: Language; label: string; flag: string }[] = [
    { value: 'en', label: 'English', flag: '🇺🇸' },
    { value: 'pt-BR', label: 'Português', flag: '🇧🇷' },
  ];

  const handleReset = () => {
    onResetProgress();
    setShowResetConfirm(false);
  };

  const handleSaveProfile = async () => {
    if (!editName.trim()) return;
    setIsSavingProfile(true);
    const { error } = await onUpdateProfile({ first_name: editName.trim() });
    setIsSavingProfile(false);
    if (error) {
      toast.error('Failed to update profile');
    } else {
      toast.success(t.profileUpdated);
    }
  };

  return (
    <div className="min-h-screen pb-24 px-4 pt-6">
      {/* Header */}
      {onClose && (
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-muted-foreground hover:text-manuscript-gold transition-colors mb-4"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">{t.back}</span>
        </button>
      )}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <div className="mb-4">
          <ArchangelKeyLogo size="md" animate={false} />
        </div>
        <h1 className="font-heading text-4xl text-manuscript-gold mb-3">
          {t.title}
        </h1>
        <p className="text-foreground font-body">
          {t.personalize}
        </p>
      </motion.div>

      {/* Profile Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-5">
          <div className="bg-manuscript-gold/20 p-2 rounded-lg">
            <User className="w-5 h-5 text-manuscript-gold" />
          </div>
          <h2 className="text-foreground font-heading text-xl">{t.yourProfile}</h2>
        </div>
        <div className="bg-gradient-to-br from-white/80 to-primary/10 rounded-2xl p-5 border border-primary/20">
          <label className="text-muted-foreground font-body text-sm mb-2 block">{t.name}</label>
          <div className="flex gap-3">
            <Input
              placeholder={t.namePlaceholder}
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
              className="flex-1"
            />
            <Button 
              onClick={handleSaveProfile}
              disabled={isSavingProfile || !editName.trim() || editName.trim() === profile?.first_name}
              className="bg-manuscript-gold hover:bg-manuscript-gold/90 text-white"
            >
              {t.saveProfile}
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Language */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-5">
          <div className="bg-manuscript-gold/20 p-2 rounded-lg">
            <Globe className="w-5 h-5 text-manuscript-gold" />
          </div>
          <h2 className="text-foreground font-heading text-xl">{t.language}</h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {languages.map(({ value, label, flag }) => (
            <button
              key={value}
              onClick={() => onSetLanguage(value)}
              className={`relative py-5 rounded-2xl border-2 transition-all duration-200 flex items-center justify-center gap-3 ${
                progress.language === value
                  ? 'border-manuscript-gold bg-manuscript-gold/15 shadow-lg'
                  : 'border-primary/20 bg-white/60 hover:border-manuscript-gold/40'
              }`}
            >
              {progress.language === value && (
                <div className="absolute top-2 right-2 bg-manuscript-gold rounded-full p-1">
                  <Check className="w-3 h-3 text-white" />
                </div>
              )}
              <span className="text-2xl">{flag}</span>
              <span className="text-foreground font-body">{label}</span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Font Size */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-5">
          <div className="bg-manuscript-gold/20 p-2 rounded-lg">
            <Type className="w-5 h-5 text-manuscript-gold" />
          </div>
          <h2 className="text-foreground font-heading text-xl">{t.textSize}</h2>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {fontSizes.map(({ value, label, sample }) => (
            <button
              key={value}
              onClick={() => onSetFontSize(value)}
              className={`relative py-5 rounded-2xl border-2 transition-all duration-200 ${
                progress.fontSize === value
                  ? 'border-manuscript-gold bg-manuscript-gold/15 shadow-lg'
                  : 'border-primary/20 bg-white/60 hover:border-manuscript-gold/40'
              }`}
            >
              {progress.fontSize === value && (
                <div className="absolute top-2 right-2 bg-manuscript-gold rounded-full p-1">
                  <Check className="w-3 h-3 text-white" />
                </div>
              )}
              <span className={`font-heading text-foreground ${value === 'small' ? 'text-lg' : value === 'large' ? 'text-3xl' : 'text-2xl'}`}>
                {sample}
              </span>
              <p className="text-muted-foreground font-body text-sm mt-2">{label}</p>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Theme */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-5">
          <div className="bg-manuscript-gold/20 p-2 rounded-lg">
            <Palette className="w-5 h-5 text-manuscript-gold" />
          </div>
          <h2 className="text-foreground font-heading text-xl">{t.theme}</h2>
        </div>
        <div className="space-y-4">
          {themes.map(({ value, label, colors, description }) => (
            <button
              key={value}
              onClick={() => onSetTheme(value)}
              className={`w-full p-5 rounded-2xl border-2 transition-all duration-200 flex items-center gap-5 ${
                progress.theme === value
                  ? 'border-manuscript-gold shadow-lg'
                  : 'border-primary/20 hover:border-manuscript-gold/40'
              }`}
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${colors} border border-primary/10`} />
              <div className="text-left flex-1">
                <p className="text-foreground font-heading text-lg">{label}</p>
                <p className="text-muted-foreground font-body text-sm">{description}</p>
              </div>
              {progress.theme === value && (
                <div className="bg-manuscript-gold rounded-full p-2">
                  <Check className="w-4 h-4 text-white" />
                </div>
              )}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-8"
      >
        <div className="flex items-center gap-3 mb-5">
          <div className="bg-manuscript-gold/20 p-2 rounded-lg">
            <Info className="w-5 h-5 text-manuscript-gold" />
          </div>
          <h2 className="text-foreground font-heading text-xl">{t.yourJourney}</h2>
        </div>
        <div className="bg-gradient-to-br from-white/80 to-primary/10 rounded-2xl p-5 border border-primary/20 space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground font-body">{t.started}</span>
            <span className="text-foreground font-body font-medium">
              {new Date(progress.firstVisit).toLocaleDateString(progress.language === 'pt-BR' ? 'pt-BR' : 'en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
            </span>
          </div>
          <div className="h-px bg-primary/10" />
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground font-body">{t.sectionsCompleted}</span>
            <span className="text-manuscript-gold font-body font-medium">{progress.completedSections.length}/6</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground font-body">{t.daysCompleted}</span>
            <span className="text-manuscript-purple font-body font-medium">{progress.completedDays.length}/7</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground font-body">{t.journalEntries}</span>
            <span className="text-sacred-teal font-body font-medium">{progress.journalEntries.length}</span>
          </div>
          <div className="h-px bg-primary/10" />
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground font-body">{t.badgesEarned}</span>
            <span className="text-manuscript-gold font-body font-medium">{progress.badges.length}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground font-body">{t.bestStreak}</span>
            <span className="text-manuscript-gold font-body font-medium">{progress.longestStreak} {progress.language === 'pt-BR' ? 'dias' : 'days'}</span>
          </div>
        </div>
      </motion.div>

      {/* Reset Progress */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        {!showResetConfirm ? (
          <button
            onClick={() => setShowResetConfirm(true)}
            className="w-full py-4 rounded-2xl border-2 border-rose-500/40 text-rose-500 font-body font-medium flex items-center justify-center gap-3 hover:bg-rose-500/10 transition-all duration-200"
          >
            <RotateCcw className="w-5 h-5" />
            {t.resetProgress}
          </button>
        ) : (
          <div className="bg-rose-500/10 border-2 border-rose-500/40 rounded-2xl p-5">
            <div className="flex items-start gap-4 mb-5">
              <div className="bg-rose-500/20 p-3 rounded-xl flex-shrink-0">
                <AlertTriangle className="w-6 h-6 text-rose-500" />
              </div>
              <div>
                <p className="text-rose-500 font-heading text-lg">{t.resetConfirmTitle}</p>
                <p className="text-muted-foreground font-body mt-1">
                  {t.resetConfirmMessage}
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => setShowResetConfirm(false)}
                className="flex-1 py-3 rounded-xl border border-primary/40 text-foreground font-body hover:bg-primary/10 transition-all duration-200"
              >
                {t.cancel}
              </button>
              <button
                onClick={handleReset}
                className="flex-1 py-3 rounded-xl bg-rose-500 text-white font-body font-medium hover:bg-rose-600 transition-all duration-200"
              >
                {t.resetEverything}
              </button>
            </div>
          </div>
        )}
      </motion.div>

      {/* Sign Out */}
      {onSignOut && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-6"
        >
          <button
            onClick={onSignOut}
            className="w-full py-4 rounded-2xl border-2 border-primary/30 text-foreground font-body font-medium flex items-center justify-center gap-3 hover:bg-primary/10 transition-all duration-200"
          >
            <LogOut className="w-5 h-5" />
            {progress.language === 'pt-BR' ? 'Sair da conta' : 'Sign Out'}
          </button>
        </motion.div>
      )}

      {/* Version */}
      <div className="text-center mt-10">
        <ArchangelKeyLogo size="sm" animate={false} className="mx-auto mb-2" />
        <p className="text-muted-foreground text-sm font-body">
          Archangel Key v1.0
        </p>
      </div>
    </div>
  );
};