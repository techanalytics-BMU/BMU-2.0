'use client';

import { useState } from 'react';
import DashboardIcon from '@/components/dashboard/DashboardIcon/DashboardIcon';
import menu from '@/components/dashboard/DashboardPopover/DashboardPopover.module.css';
import { dashboardLeads } from '@/data/dashboard/dashboardLeads';
import { addDays, todayIST } from '@/lib/leads/filters';
import styles from './DashboardLeadsCalendar.module.css';

type Props = {
  from: string | null;
  to: string | null;
  onApply: (from: string, to: string) => void;
  onClear: () => void;
};

const WEEKDAYS = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

/** '2026-10' → the days of that month, with blanks before the 1st so weeks start on Monday */
function monthDays(month: string) {
  const first = `${month}-01`;
  const weekday = (new Date(`${first}T00:00:00Z`).getUTCDay() + 6) % 7; // Monday = 0
  const days: (string | null)[] = Array(weekday).fill(null);
  for (let day = first; day.startsWith(month); day = addDays(day, 1)) days.push(day);
  return days;
}

function shiftMonth(month: string, by: number) {
  const date = new Date(`${month}-01T00:00:00Z`);
  date.setUTCMonth(date.getUTCMonth() + by);
  return date.toISOString().slice(0, 7);
}

// Pick your own dates: tap the first day, then the last (or Apply with just one day). Future
// days can't be picked. India time, weeks start on Monday.
export default function DashboardLeadsCalendar({ from, to, onApply, onClear }: Props) {
  const t = dashboardLeads.calendar;
  const today = todayIST();
  const [start, setStart] = useState<string | null>(from);
  const [end, setEnd] = useState<string | null>(to);
  const [month, setMonth] = useState((to ?? today).slice(0, 7));

  const pick = (day: string) => {
    if (!start || end) {
      setStart(day);
      setEnd(null);
    } else if (day < start) {
      setStart(day);
    } else {
      setEnd(day);
    }
  };

  const monthName = new Date(`${month}-01T00:00:00Z`).toLocaleDateString('en-GB', {
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
  const last = end ?? start;

  return (
    <div className={`${menu.panel} ${menu.panelLeft} ${styles.calendar}`} role="dialog" aria-label={t.label}>
      <div className={styles.head}>
        <button
          type="button"
          className={styles.nav}
          aria-label={t.previous}
          onClick={() => setMonth(shiftMonth(month, -1))}
        >
          <DashboardIcon name="chevronLeft" size={16} />
        </button>
        <span className={styles.month}>{monthName}</span>
        <button
          type="button"
          className={styles.nav}
          aria-label={t.next}
          disabled={month >= today.slice(0, 7)}
          onClick={() => setMonth(shiftMonth(month, 1))}
        >
          <DashboardIcon name="chevronRight" size={16} />
        </button>
      </div>

      <div className={styles.grid}>
        {WEEKDAYS.map((day) => (
          <span key={day} className={styles.weekday}>
            {day}
          </span>
        ))}
        {monthDays(month).map((day, i) =>
          day ? (
            <button
              key={day}
              type="button"
              className={styles.day}
              disabled={day > today}
              data-today={day === today}
              data-edge={day === start || day === last ? true : undefined}
              data-between={start && last && day > start && day < last ? true : undefined}
              aria-pressed={day === start || day === last}
              onClick={() => pick(day)}
            >
              {Number(day.slice(8))}
            </button>
          ) : (
            <span key={`blank-${i}`} />
          )
        )}
      </div>

      <p className={styles.hint}>{start && !end ? t.pickEnd : t.pickStart}</p>

      <div className={styles.actions}>
        <button type="button" className={styles.clear} onClick={onClear}>
          {t.clear}
        </button>
        <button
          type="button"
          className={styles.apply}
          disabled={!start}
          onClick={() => start && onApply(start, end ?? start)}
        >
          {t.apply}
        </button>
      </div>
    </div>
  );
}
