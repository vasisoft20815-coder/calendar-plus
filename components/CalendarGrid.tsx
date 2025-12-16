
import React from 'react';
import { CalendarDay } from '../types';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from 'lucide-react';

interface CalendarGridProps {
  days: CalendarDay[];
  currentDate: Date;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  onGoToToday: () => void;
}

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const CalendarGrid: React.FC<CalendarGridProps> = ({ 
  days, 
  currentDate, 
  onPrevMonth, 
  onNextMonth, 
  onGoToToday 
}) => {
  const monthName = currentDate.toLocaleString('default', { month: 'long' });
  const year = currentDate.getFullYear();

  return (
    <div className="flex flex-col w-full bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
      {/* Calendar Header */}
      <div className="p-6 flex items-center justify-between border-b border-white/10 bg-white/5">
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <CalendarIcon className="w-6 h-6 text-indigo-400" />
            {monthName} <span className="text-indigo-300/60 ml-1">{year}</span>
          </h2>
        </div>
        
        <div className="flex items-center gap-2">
          <button 
            onClick={onGoToToday}
            className="px-4 py-1.5 text-xs font-bold text-indigo-300 bg-indigo-500/10 hover:bg-indigo-500/20 rounded-full border border-indigo-500/30 transition-all active:scale-95"
          >
            Today
          </button>
          <div className="flex bg-white/10 rounded-full p-1 border border-white/10">
            <button 
              onClick={onPrevMonth}
              className="p-2 hover:bg-white/10 rounded-full text-slate-300 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={onNextMonth}
              className="p-2 hover:bg-white/10 rounded-full text-slate-300 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Weekday Labels */}
      <div className="grid grid-cols-7 border-b border-white/5 bg-white/5">
        {WEEKDAYS.map((day, idx) => (
          <div key={day} className={`py-4 text-center text-[10px] md:text-xs font-bold uppercase tracking-widest ${idx === 0 || idx === 6 ? 'text-rose-400/70' : 'text-slate-400/70'}`}>
            {day}
          </div>
        ))}
      </div>

      {/* Grid Days */}
      <div className="grid grid-cols-7 flex-1 min-h-[350px]">
        {days.map((day, index) => (
          <div 
            key={index} 
            className={`
              relative py-4 md:py-8 flex items-center justify-center text-sm md:text-lg border-b border-r border-white/5
              ${day.isCurrentMonth ? 'text-slate-200' : 'text-slate-600'}
              ${day.isToday ? 'bg-indigo-500/20' : ''}
              ${index % 7 === 6 ? 'border-r-0' : ''}
              hover:bg-white/5 transition-colors cursor-default group
            `}
          >
            {/* Weekend Indicator dot */}
            {day.isWeekend && day.isCurrentMonth && (
              <div className="absolute top-2 right-2 w-1 h-1 rounded-full bg-rose-500/30"></div>
            )}
            
            <span className={`
              relative z-10 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full transition-all
              ${day.isToday ? 'bg-indigo-500 text-white font-bold shadow-lg shadow-indigo-500/40 ring-4 ring-indigo-500/20' : ''}
              ${day.isCurrentMonth && !day.isToday ? 'group-hover:bg-white/10' : ''}
            `}>
              {day.date.getDate()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarGrid;
