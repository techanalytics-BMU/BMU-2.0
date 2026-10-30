'use client';

import { useCallback, useRef, useState } from 'react';
import DashboardIcon from '@/components/dashboard/DashboardIcon/DashboardIcon';
import menu from '@/components/dashboard/DashboardPopover/DashboardPopover.module.css';
import { useDismiss } from '@/hooks/useDismiss';
import statusStyles from './DashboardLeadStatus.module.css';
import styles from './DashboardLeads.module.css';

type Option = {
  value: string; // '' = all
  label: string;
  status?: string; // a lead status – shows its coloured dot
};

type Props = {
  label: string; // for screen readers ("Status")
  value: string;
  options: Option[];
  onChange: (value: string) => void;
};

// A filter dropdown in the dashboard's own look (the same glass panel as the status pills), in place
// of the browser's – which drew white text on a white list. Arrow keys move, Enter picks, Escape
// or a click outside closes.
export default function DashboardLeadsSelect({ label, value, options, onChange }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);
  useDismiss(ref, open, close);

  const current = options.find((option) => option.value === value) ?? options[0];

  // Focus the chosen option as the list opens
  const focusOnOpen = (list: HTMLDivElement | null) => {
    list?.querySelector<HTMLElement>('[aria-selected="true"]')?.focus();
  };

  const onListKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return;
    event.preventDefault();
    const items = [...event.currentTarget.querySelectorAll<HTMLElement>('[role="option"]')];
    const at = items.indexOf(document.activeElement as HTMLElement);
    const next = event.key === 'ArrowDown' ? (at + 1) % items.length : (at - 1 + items.length) % items.length;
    items[next]?.focus();
  };

  const pick = (next: string) => {
    setOpen(false);
    buttonRef.current?.focus(); // keyboard users stay on the dropdown
    if (next !== value) onChange(next);
  };

  return (
    <div ref={ref} className={menu.anchor}>
      <button
        ref={buttonRef}
        type="button"
        className={styles.select}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`${label}: ${current.label}`}
        onClick={() => setOpen((value) => !value)}
        onKeyDown={(event) => {
          if (event.key === 'ArrowDown' && !open) {
            event.preventDefault();
            setOpen(true);
          }
        }}
      >
        {current.status && (
          <span
            className={`${statusStyles.optionDot} ${statusStyles.tone}`}
            data-status={current.status}
            aria-hidden="true"
          />
        )}
        {current.label}
        <DashboardIcon name="chevronDown" size={14} className={styles.selectChevron} />
      </button>

      {open && (
        <div
          ref={focusOnOpen}
          className={`${menu.panel} ${menu.panelLeft} ${styles.selectPanel}`}
          role="listbox"
          aria-label={label}
          onKeyDown={onListKeyDown}
        >
          {options.map((option) => (
            <button
              key={option.value || 'all'}
              type="button"
              role="option"
              aria-selected={option.value === value}
              className={`${menu.item} ${statusStyles.tone}`}
              data-status={option.status}
              onClick={() => pick(option.value)}
            >
              {option.status ? (
                <span className={statusStyles.optionDot} aria-hidden="true" />
              ) : (
                <span className={styles.selectDotSpace} aria-hidden="true" />
              )}
              {option.label}
              {option.value === value && <span className={styles.selectCheck}>✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
