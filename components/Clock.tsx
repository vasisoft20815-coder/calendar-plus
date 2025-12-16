
import React, { useState, useEffect } from 'react';

const Clock: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeString = time.toLocaleTimeString('en-GB', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  return (
    <div className="flex flex-col items-center justify-center bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-xl">
      <span className="text-4xl md:text-5xl font-mono font-bold text-white tracking-widest">
        {timeString}
      </span>
      <span className="text-slate-400 text-xs mt-2 uppercase tracking-widest font-semibold">
        System Time (24H)
      </span>
    </div>
  );
};

export default Clock;
