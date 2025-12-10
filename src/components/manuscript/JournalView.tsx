import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  Sparkles, 
  Eye, 
  Heart, 
  BookOpen, 
  Trash2, 
  X,
  Send
} from 'lucide-react';
import { ManuscriptProgress, JournalEntry } from '@/hooks/useManuscriptProgress';

interface JournalViewProps {
  progress: ManuscriptProgress;
  onAddEntry: (type: JournalEntry['type'], content: string) => void;
  onDeleteEntry: (id: string) => void;
}

const entryTypes: { type: JournalEntry['type']; label: string; icon: typeof Sparkles; color: string; placeholder: string }[] = [
  { type: 'intention', label: 'Daily Intention', icon: Sparkles, color: 'text-manuscript-gold', placeholder: 'What is your intention for today?' },
  { type: 'sign', label: 'Divine Sign', icon: Eye, color: 'text-manuscript-purple', placeholder: 'Describe the sign you received...' },
  { type: 'gratitude', label: 'Gratitude', icon: Heart, color: 'text-rose-400', placeholder: 'What are you grateful for today?' },
  { type: 'reflection', label: 'Reflection', icon: BookOpen, color: 'text-sacred-teal', placeholder: 'Share your thoughts and insights...' },
];

export const JournalView = ({ progress, onAddEntry, onDeleteEntry }: JournalViewProps) => {
  const [isAdding, setIsAdding] = useState(false);
  const [selectedType, setSelectedType] = useState<JournalEntry['type']>('intention');
  const [content, setContent] = useState('');
  const [filter, setFilter] = useState<JournalEntry['type'] | 'all'>('all');

  const handleSubmit = () => {
    if (content.trim()) {
      onAddEntry(selectedType, content.trim());
      setContent('');
      setIsAdding(false);
    }
  };

  const filteredEntries = progress.journalEntries
    .filter(entry => filter === 'all' || entry.type === filter)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const getTypeConfig = (type: JournalEntry['type']) => 
    entryTypes.find(t => t.type === type) || entryTypes[0];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) return 'Today';
    if (date.toDateString() === yesterday.toDateString()) return 'Yesterday';
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <div className="min-h-screen pb-24 px-4 pt-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h1 className="font-heading text-3xl text-manuscript-gold mb-2">
          Spiritual Journal
        </h1>
        <p className="text-manuscript-light/70 font-body text-sm">
          Record your sacred journey
        </p>
      </motion.div>

      {/* Add Entry Modal */}
      <AnimatePresence>
        {isAdding && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-manuscript-dark/95 px-4 pt-6 pb-24 overflow-auto"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-heading text-xl text-manuscript-gold">New Entry</h2>
              <button
                onClick={() => setIsAdding(false)}
                className="p-2 rounded-full hover:bg-manuscript-gold/10"
              >
                <X className="w-5 h-5 text-manuscript-light/60" />
              </button>
            </div>

            {/* Type Selection */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {entryTypes.map(({ type, label, icon: Icon, color }) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`p-4 rounded-xl border transition-all text-left ${
                    selectedType === type
                      ? 'border-manuscript-gold bg-manuscript-gold/10'
                      : 'border-manuscript-gold/10 bg-manuscript-dark/50'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${color} mb-2`} />
                  <p className="text-manuscript-light font-body text-sm">{label}</p>
                </button>
              ))}
            </div>

            {/* Content Input */}
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder={getTypeConfig(selectedType).placeholder}
              className="w-full h-40 bg-manuscript-dark/50 border border-manuscript-gold/10 rounded-xl p-4 text-manuscript-light font-body resize-none focus:outline-none focus:border-manuscript-gold/30"
            />

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={!content.trim()}
              className="w-full mt-4 py-4 rounded-xl bg-manuscript-gold text-manuscript-dark font-body flex items-center justify-center gap-2 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-manuscript-gold/90 transition-colors"
            >
              <Send className="w-5 h-5" />
              Save Entry
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Add Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        onClick={() => setIsAdding(true)}
        className="w-full bg-gradient-to-r from-manuscript-gold/20 to-manuscript-purple/20 rounded-2xl p-5 mb-6 border border-manuscript-gold/30 flex items-center gap-4 hover:border-manuscript-gold/50 transition-colors"
      >
        <div className="bg-manuscript-gold/20 p-3 rounded-full">
          <Plus className="w-6 h-6 text-manuscript-gold" />
        </div>
        <div className="text-left">
          <p className="text-manuscript-light font-heading">New Journal Entry</p>
          <p className="text-manuscript-light/50 text-sm">Record your thoughts and experiences</p>
        </div>
      </motion.button>

      {/* Filter Tabs */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-full text-sm font-body whitespace-nowrap transition-colors ${
            filter === 'all'
              ? 'bg-manuscript-gold text-manuscript-dark'
              : 'bg-manuscript-dark/50 text-manuscript-light/60'
          }`}
        >
          All ({progress.journalEntries.length})
        </button>
        {entryTypes.map(({ type, label }) => {
          const count = progress.journalEntries.filter(e => e.type === type).length;
          return (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-2 rounded-full text-sm font-body whitespace-nowrap transition-colors ${
                filter === type
                  ? 'bg-manuscript-gold text-manuscript-dark'
                  : 'bg-manuscript-dark/50 text-manuscript-light/60'
              }`}
            >
              {label} ({count})
            </button>
          );
        })}
      </div>

      {/* Entries List */}
      {filteredEntries.length === 0 ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <BookOpen className="w-12 h-12 text-manuscript-gold/30 mx-auto mb-3" />
          <p className="text-manuscript-light/50 font-body">No entries yet</p>
          <p className="text-manuscript-light/30 text-sm mt-1">Start recording your spiritual journey</p>
        </motion.div>
      ) : (
        <div className="space-y-3">
          {filteredEntries.map((entry, index) => {
            const config = getTypeConfig(entry.type);
            const Icon = config.icon;
            
            return (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-manuscript-dark/50 rounded-xl p-4 border border-manuscript-gold/10"
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Icon className={`w-4 h-4 ${config.color}`} />
                    <span className="text-manuscript-light/60 text-xs font-body">{config.label}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-manuscript-light/40 text-xs">{formatDate(entry.date)}</span>
                    <button
                      onClick={() => onDeleteEntry(entry.id)}
                      className="p-1 rounded hover:bg-rose-500/10 transition-colors"
                    >
                      <Trash2 className="w-3 h-3 text-rose-400/60 hover:text-rose-400" />
                    </button>
                  </div>
                </div>
                <p className="text-manuscript-light/90 font-body text-sm leading-relaxed">
                  {entry.content}
                </p>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
};
