'use client';

import { useEffect, useRef, useState } from 'react';
import { workShowcase } from '@/data/work/workShowcase';
import type { WorkCategoryId } from '@/types/work';
import styles from './WorkFilters.module.css';

type Props = {
  filters: { id: WorkCategoryId; label: string }[];
  active: WorkCategoryId;
  onSelect: (id: WorkCategoryId) => void;
};

// The types of work in a row, in the navbar's style: a soft glass pill slides behind them to the
// one under the pointer, and rests on the open one. On phones the row scrolls sideways.
export default function WorkFilters({ filters, active, onSelect }: Props) {
  const rowRef = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLSpanElement>(null);
  const [hovered, setHovered] = useState<WorkCategoryId | null>(null);
  const target = hovered ?? active;

  // Place the pill, and again if the row changes size (the font loading, the screen turning)
  useEffect(() => {
    const row = rowRef.current;
    const indicator = indicatorRef.current;
    if (!row || !indicator) return;
    const place = () => {
      const button = row.querySelector<HTMLElement>(`[data-filter='${target}']`);
      if (!button) return;
      indicator.style.setProperty('--x', `${button.offsetLeft}px`);
      indicator.style.setProperty('--w', `${button.offsetWidth}px`);
      indicator.dataset.visible = 'true';
    };
    place();
    const observer = new ResizeObserver(place);
    observer.observe(row);
    row.querySelectorAll('button').forEach((button) => observer.observe(button));
    return () => observer.disconnect();
  }, [target]);

  // A scrolled row brings the open type into sight (sideways only – the page doesn't move)
  useEffect(() => {
    const row = rowRef.current;
    const button = row?.querySelector<HTMLElement>(`[data-filter='${active}']`);
    if (!row || !button) return;
    row.scrollTo({
      left: button.offsetLeft - (row.clientWidth - button.offsetWidth) / 2,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    });
  }, [active]);

  return (
    <div
      ref={rowRef}
      className={styles.filters}
      role="group"
      aria-label={workShowcase.filterLabel}
      onPointerLeave={() => setHovered(null)}
    >
      <span ref={indicatorRef} className={styles.indicator} aria-hidden="true" />
      {filters.map(({ id, label }) => (
        <button
          key={id}
          type="button"
          className={styles.filter}
          data-filter={id}
          aria-pressed={id === active}
          onPointerEnter={(event) => {
            if (event.pointerType === 'mouse') setHovered(id);
          }}
          onClick={() => onSelect(id)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
