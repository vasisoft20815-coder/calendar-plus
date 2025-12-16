
import { CalendarDay } from '../types';

export const getDaysInMonth = (year: number, month: number): CalendarDay[] => {
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  
  const days: CalendarDay[] = [];
  
  // Get the day of the week for the first day (0 = Sunday)
  const startDay = firstDayOfMonth.getDay();
  
  // Fill in days from previous month to align grid
  const prevMonthLastDay = new Date(year, month, 0).getDate();
  for (let i = startDay - 1; i >= 0; i--) {
    const d = new Date(year, month - 1, prevMonthLastDay - i);
    days.push({
      date: d,
      isCurrentMonth: false,
      isToday: isSameDay(d, new Date()),
      isWeekend: d.getDay() === 0 || d.getDay() === 6
    });
  }
  
  // Current month days
  for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
    const d = new Date(year, month, i);
    days.push({
      date: d,
      isCurrentMonth: true,
      isToday: isSameDay(d, new Date()),
      isWeekend: d.getDay() === 0 || d.getDay() === 6
    });
  }
  
  // Fill in days from next month to complete the 42-day grid (6 rows)
  const remaining = 42 - days.length;
  for (let i = 1; i <= remaining; i++) {
    const d = new Date(year, month + 1, i);
    days.push({
      date: d,
      isCurrentMonth: false,
      isToday: isSameDay(d, new Date()),
      isWeekend: d.getDay() === 0 || d.getDay() === 6
    });
  }
  
  return days;
};

export const isSameDay = (d1: Date, d2: Date): boolean => {
  return d1.getFullYear() === d2.getFullYear() &&
         d1.getMonth() === d2.getMonth() &&
         d1.getDate() === d2.getDate();
};

export const getDaysLeftInMonth = (date: Date): number => {
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  return lastDay - date.getDate();
};

export const getDaysLeftInYear = (date: Date): number => {
  const startOfNextYear = new Date(date.getFullYear() + 1, 0, 1);
  const diffTime = startOfNextYear.getTime() - date.getTime();
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

export const formatFullDate = (date: Date): string => {
  return date.toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
};
