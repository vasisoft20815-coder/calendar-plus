
import React, { useState, useMemo } from 'react';
import { getDaysInMonth, formatFullDate } from './utils/dateUtils';
import CalendarGrid from './components/CalendarGrid';
import Clock from './components/Clock';
import Countdowns from './components/Countdowns';
import MotivationalQuote from './components/MotivationalQuote';

const App: React.FC = () => {
  const [viewDate, setViewDate] = useState(new Date());
  const today = new Date();

  const days = useMemo(() => {
    return getDaysInMonth(viewDate.getFullYear(), viewDate.getMonth());
  }, [viewDate]);

  const handlePrevMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1));
  };

  const handleGoToToday = () => {
    setViewDate(new Date());
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-indigo-500/30 relative">
      {/* Ambient background gradients */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/2 -right-24 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-24 left-1/4 w-96 h-96 bg-teal-600/10 rounded-full blur-[120px]"></div>
      </div>

      <main className="relative z-10 w-full max-w-6xl mx-auto px-4 py-8 lg:py-12 flex flex-col gap-8">
        {/* Header Section */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Calendar-Plus
            </h1>
            <p className="text-slate-400 text-lg font-medium flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              {formatFullDate(today)}
            </p>
          </div>
          <div className="flex-shrink-0">
            <Clock />
          </div>
        </header>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Side Info */}
          <div className="lg:col-span-4 flex flex-col gap-8 order-2 lg:order-1">
            <Countdowns />
            <MotivationalQuote />
            <div className="hidden lg:block bg-indigo-500/5 border border-indigo-500/10 rounded-2xl p-6">
              <h3 className="text-indigo-300 font-bold mb-2 flex items-center gap-2">
                Pro Tip
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Stay consistent with your goals. The countdowns help you visualize the time remaining for your monthly and annual targets. 
              </p>
            </div>
          </div>

          {/* Right Column: Calendar */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <CalendarGrid 
              days={days} 
              currentDate={viewDate}
              onPrevMonth={handlePrevMonth}
              onNextMonth={handleNextMonth}
              onGoToToday={handleGoToToday}
            />
          </div>
        </div>

        {/* Mobile footer quote placeholder (visible only on very small screens) */}
        <footer className="lg:hidden text-center py-4 border-t border-white/5 mt-4">
          <p className="text-slate-500 text-xs uppercase tracking-widest font-bold">
            Stay Inspired Every Day
          </p>
        </footer>
      </main>
    </div>
  );
};

export default App;
