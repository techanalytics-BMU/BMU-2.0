'use client';

import { useId, useState } from 'react';
import styles from './PseoTemplate.module.css';

type PseoMoreProps = {
  total: number; // items in the list
  children: React.ReactNode; // the list; items past the first few carry the .extra class
};

// A long list shows its first few items with a "Show all" button under it. The rest stay in the
// page (search engines read every link) – the stylesheet hides .extra items until it's opened, and
// only while scripting is on, so without it the whole list shows.
export default function PseoMore({ total, children }: PseoMoreProps) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <div className={styles.more} data-expanded={open}>
      <div id={id}>{children}</div>
      <button
        type="button"
        className={styles.moreButton}
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen(!open)}
      >
        {open ? 'Show fewer' : `Show all ${total}`}
      </button>
    </div>
  );
}
