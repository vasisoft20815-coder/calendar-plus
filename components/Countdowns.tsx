
import React from 'react';
import { getDaysLeftInMonth, getDaysLeftInYear } from '../utils/dateUtils';

const Countdowns: React.FC = () => {
  const now = new Date();
  const daysInMonth = getDaysLeftInMonth(now);
  const daysInYear = getDaysLeftInYear(now);

  return (
    <div className="grid grid-cols-2 gap-4 w-full">
      <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-md rounded-2xl p-4 border border-white/10 shadow-lg text-center">
        <div className="text-3xl font-bold text-indigo-300">{daysInMonth}</div>
        <div className="text-[10px] md:text-xs text-slate-400 uppercase tracking-wider font-semibold mt-1">
          Days Left in Month
        </div>
      </div>
      <div className="bg-gradient-to-br from-teal-500/20 to-emerald-500/20 backdrop-blur-md rounded-2xl p-4 border border-white/10 shadow-lg text-center">
        <div className="text-3xl font-bold text-teal-300">{daysInYear}</div>
        <div className="text-[10px] md:text-xs text-slate-400 uppercase tracking-wider font-semibold mt-1">
          Days Left in Year
        </div>
      </div>
    </div>
  );
};

export default Countdowns;
