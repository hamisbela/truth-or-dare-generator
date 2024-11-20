import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, RefreshCcw } from 'lucide-react';

interface CardProps {
  type: 'truth' | 'dare';
  question: string;
  onNext: () => void;
  onSwitch: () => void;
}

export const Card: React.FC<CardProps> = ({ type, question, onNext, onSwitch }) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`w-full max-w-md p-6 rounded-xl shadow-xl ${
        type === 'truth' ? 'bg-indigo-600' : 'bg-rose-600'
      }`}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold text-white uppercase">
          {type}
        </h3>
        <Sparkles className="text-white/80" />
      </div>
      <p className="text-lg text-white mb-6">{question}</p>
      <div className="flex gap-3">
        <button
          onClick={onNext}
          className="flex-1 py-3 px-6 bg-white rounded-lg font-semibold text-gray-800 hover:bg-gray-100 transition-colors"
        >
          Next {type}
        </button>
        <button
          onClick={onSwitch}
          className="py-3 px-4 bg-white/20 rounded-lg font-semibold text-white hover:bg-white/30 transition-colors"
          title={`Switch to ${type === 'truth' ? 'dare' : 'truth'}`}
        >
          <RefreshCcw size={20} />
        </button>
      </div>
    </motion.div>
  );
};