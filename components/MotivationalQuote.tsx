
import React, { useMemo } from 'react';
import { MOTIVATIONAL_QUOTES } from '../constants/quotes';

const MotivationalQuote: React.FC = () => {
  const dailyQuote = useMemo(() => {
    const today = new Date();
    // Use year/month/day as a simple hash to keep the quote consistent throughout the day
    const seed = today.getFullYear() * 1000 + today.getMonth() * 100 + today.getDate();
    const index = seed % MOTIVATIONAL_QUOTES.length;
    return MOTIVATIONAL_QUOTES[index];
  }, []);

  return (
    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-xl relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500/50 group-hover:bg-indigo-400 transition-colors"></div>
      <blockquote className="space-y-2">
        <p className="text-lg md:text-xl text-slate-200 font-medium italic leading-relaxed">
          "{dailyQuote.text}"
        </p>
        <footer className="text-sm text-slate-400 font-semibold text-right">
          — {dailyQuote.author}
        </footer>
      </blockquote>
    </div>
  );
};

export default MotivationalQuote;
