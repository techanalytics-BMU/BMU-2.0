'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import { leadPopup } from '@/data/leadPopup';
import { LEAD_SENT_KEY as SENT_KEY } from '@/lib/leads/browser';
import styles from './LeadPopup.module.css';
import LeadPopupForm from './LeadPopupForm';

const CLOSES_KEY = 'bmu-lead-popup-closes'; // sessionStorage: times closed this visit
// SENT_KEY (localStorage): they sent the popup or the contact page form – never show again

// Browser storage can be blocked (private windows, settings) – the popup still works without it
function read(storage: 'local' | 'session', key: string) {
  try {
    return (storage === 'local' ? localStorage : sessionStorage).getItem(key);
  } catch {
    return null;
  }
}

function write(storage: 'local' | 'session', key: string, value: string) {
  try {
    (storage === 'local' ? localStorage : sessionStorage).setItem(key, value);
  } catch {
    // not saved – fine
  }
}

const closesThisVisit = () => Number(read('session', CLOSES_KEY) ?? 0);

// "Let's build your next growth move." – a lead form that floats over every page (added in
// src/app/(site)/layout.tsx). Shows 5s after arriving; after a close, once more 30s later; never again
// once submitted (timings in src/data/leadPopup.ts). Never on /login or /contact – if it's due
// there, it waits until the visitor leaves. The page behind is dimmed and blurred but still
// scrolls; a click outside the card, the ✕ or Escape closes it.
export default function LeadPopup() {
  const { timing, hiddenOn, closeLabel, headingStart, headingHighlight, description, explore } =
    leadPopup;
  const pathname = usePathname();
  const cardRef = useRef<HTMLDivElement>(null);
  const timer = useRef<number | undefined>(undefined);
  const [open, setOpen] = useState(false);

  const hidden = hiddenOn.some((path) => pathname === path || pathname.startsWith(`${path}/`));
  const visible = open && !hidden;

  const schedule = useCallback((delay: number) => {
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setOpen(true), delay);
  }, []);

  // First showing, unless they already submitted or closed it enough times this visit
  useEffect(() => {
    if (read('local', SENT_KEY) || closesThisVisit() >= timing.maxCloses) return;
    schedule(timing.firstDelay);
    return () => window.clearTimeout(timer.current);
  }, [schedule, timing]);

  const close = useCallback(() => {
    setOpen(false);
    if (read('local', SENT_KEY)) return;
    const closes = closesThisVisit() + 1;
    write('session', CLOSES_KEY, String(closes));
    if (closes < timing.maxCloses) schedule(timing.repeatDelay);
  }, [schedule, timing]);

  // While open: focus moves into the card (and back afterwards), Escape closes,
  // and Tab stays inside the card
  useEffect(() => {
    if (!visible) return;
    const card = cardRef.current;
    const previous = document.activeElement as HTMLElement | null;
    card?.focus({ preventScroll: true });

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        close();
        return;
      }
      if (event.key !== 'Tab' || !card) return;
      const focusable = card.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled])'
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && (document.activeElement === first || document.activeElement === card)) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      previous?.focus({ preventScroll: true });
    };
  }, [visible, close]);

  if (!visible) return null;

  // Any click that doesn't land on the card closes it (scrolling never fires a click)
  const onOverlayClick = (event: React.MouseEvent) => {
    if (!cardRef.current?.contains(event.target as Node)) close();
  };

  return (
    <div className={styles.overlay} onClick={onOverlayClick}>
      <div className={styles.frame}>
        <div
          ref={cardRef}
          className={styles.card}
          role="dialog"
          aria-modal="true"
          aria-labelledby="lead-popup-heading"
          tabIndex={-1}
          data-lenis-prevent // a card taller than the screen scrolls on its own
        >
          <button type="button" className={styles.close} aria-label={closeLabel} onClick={close}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          <Image
            src="/images/common/bmu-logo-light.webp"
            alt="BMU Marketing"
            width={112}
            height={54}
            className={styles.logo}
          />

          <h2 id="lead-popup-heading" className={styles.heading}>
            {headingStart} <span className={styles.headingMuted}>{headingHighlight}</span>
          </h2>
          <p className={styles.description}>{description}</p>

          <Link href={explore.href} className={styles.explore} onClick={close}>
            <span className={styles.exploreDot} aria-hidden="true" />
            {explore.label}
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </Link>

          <LeadPopupForm content={leadPopup} />
        </div>
      </div>
    </div>
  );
}
