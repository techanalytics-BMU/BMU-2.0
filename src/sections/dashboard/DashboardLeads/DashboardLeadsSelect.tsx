'use client';

import { useCallback, useEffect, useRef, useState, type CSSProperties } from 'react';
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
  fullWidth?: boolean; // as wide as its column (forms) instead of as wide as its text (filter bars)
};

const GAP = 8; // px between the button and the list
const EDGE = 12; // px kept free at the screen's edge

// A dropdown in the dashboard's own look (the same glass panel as the status pills), in place of the
// browser's – which drew white text on a white list. The list floats over everything (it can't be
// cut off by a scrolling panel), opens upwards when there's more room above, and scrolls when long.
// Arrow keys move, Enter picks, Escape, a click outside or scrolling the page closes it.
export default function DashboardLeadsSelect({ label, value, options, onChange, fullWidth = false }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const [place, setPlace] = useState<CSSProperties>({});
  const close = useCallback(() => setOpen(false), []);
  useDismiss(ref, open, close);

  // Where the list goes: under the button, or above it when there's more room there
  const openList = () => {
    const box = buttonRef.current?.getBoundingClientRect();
    if (box) {
      const below = window.innerHeight - box.bottom - GAP - EDGE;
      const above = box.top - GAP - EDGE;
      const upwards = below < 240 && above > below;
      setPlace({
        position: 'fixed',
        left: box.left,
        right: 'auto',
        ...(upwards ? { top: 'auto', bottom: window.innerHeight - box.top + GAP } : { top: box.bottom + GAP }),
        ...(fullWidth ? { width: box.width } : {}),
        maxHeight: Math.max(upwards ? above : below, 160),
        overflowY: 'auto',
      });
    }
    setOpen(true);
  };

  // The list is pinned to the screen – scrolling or resizing would leave it behind, so it closes
  useEffect(() => {
    if (!open) return;
    const onMove = (event: Event) => {
      if (!(event.target instanceof Node) || !ref.current?.contains(event.target)) close();
    };
    window.addEventListener('scroll', onMove, true);
    window.addEventListener('resize', close);
    return () => {
      window.removeEventListener('scroll', onMove, true);
      window.removeEventListener('resize', close);
    };
  }, [open, close]);

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
    <div ref={ref} className={`${menu.anchor} ${fullWidth ? styles.selectFull : ''}`}>
      <button
        ref={buttonRef}
        type="button"
        className={styles.select}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`${label}: ${current.label}`}
        onClick={() => (open ? close() : openList())}
        onKeyDown={(event) => {
          if (event.key === 'ArrowDown' && !open) {
            event.preventDefault();
            openList();
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
        <span className={styles.selectLabel}>{current.label}</span>
        <DashboardIcon name="chevronDown" size={14} className={styles.selectChevron} />
      </button>

      {open && (
        <div
          ref={focusOnOpen}
          className={`${menu.panel} ${menu.panelLeft} ${styles.selectPanel}`}
          style={place}
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
