'use client';

import { useCallback, useRef, useState, useTransition } from 'react';
import DashboardIcon from '@/components/dashboard/DashboardIcon/DashboardIcon';
import menu from '@/components/dashboard/DashboardPopover/DashboardPopover.module.css';
import { dashboardLeads } from '@/data/dashboard/dashboardLeads';
import { useDismiss } from '@/hooks/useDismiss';
import { addDays, STATUSES, todayIST } from '@/lib/leads/filters';
import { setLeadStatus } from '@/lib/leads/manage';
import type { LeadStatus } from '@/types/leads';
import styles from './DashboardLeadStatus.module.css';

type Props = {
  leadId: string;
  status: LeadStatus;
  followUpOn: string | null;
  onChanged?: () => void; // after a change is saved (the side panel reloads its history)
};

// The coloured status pill. Opens to the four statuses; picking Follow-up asks for a follow-up
// date first (optional). The list refreshes itself once the change is saved.
export default function DashboardLeadStatus({ leadId, status, followUpOn, onChanged }: Props) {
  const t = dashboardLeads;
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [askDate, setAskDate] = useState(false);
  const [date, setDate] = useState(followUpOn ?? addDays(todayIST(), 1));
  const [error, setError] = useState('');
  const [pending, startTransition] = useTransition();
  const close = useCallback(() => {
    setOpen(false);
    setAskDate(false);
  }, []);
  useDismiss(ref, open, close);

  const save = (next: LeadStatus, followUp?: string | null) => {
    close();
    setError('');
    startTransition(async () => {
      const result = await setLeadStatus(leadId, next, followUp);
      if (!result.ok) setError(result.error);
      else onChanged?.();
    });
  };

  return (
    <div ref={ref} className={`${menu.anchor} ${styles.wrap}`} onClick={(event) => event.stopPropagation()}>
      <button
        type="button"
        className={`${styles.pill} ${styles.tone}`}
        data-status={status}
        data-pending={pending}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span className={styles.dot} aria-hidden="true" />
        {t.statuses[status]}
        <DashboardIcon name="chevronDown" size={13} />
      </button>

      {open && (
        <div className={`${menu.panel} ${styles.panel}`} role="menu">
          {askDate ? (
            <div className={styles.ask}>
              <label className={styles.askLabel} htmlFor={`follow-up-${leadId}`}>
                {t.followUpPrompt.title}
              </label>
              <input
                id={`follow-up-${leadId}`}
                type="date"
                className={styles.date}
                value={date}
                min={todayIST()}
                onChange={(event) => setDate(event.target.value)}
              />
              <div className={styles.askActions}>
                <button type="button" className={styles.skip} onClick={() => save('follow_up', null)}>
                  {t.followUpPrompt.skip}
                </button>
                <button
                  type="button"
                  className={styles.saveDate}
                  disabled={!date}
                  onClick={() => save('follow_up', date)}
                >
                  {t.followUpPrompt.save}
                </button>
              </div>
            </div>
          ) : (
            STATUSES.map((option) => (
              <button
                key={option}
                type="button"
                role="menuitemradio"
                aria-checked={option === status}
                className={`${menu.item} ${styles.tone}`}
                data-status={option}
                onClick={() => (option === 'follow_up' ? setAskDate(true) : save(option))}
              >
                <span className={styles.optionDot} aria-hidden="true" />
                {t.statuses[option]}
                {option === status && <span className={styles.current}>✓</span>}
              </button>
            ))
          )}
        </div>
      )}

      {error && (
        <span className={styles.error} role="alert">
          {error}
        </span>
      )}
    </div>
  );
}
