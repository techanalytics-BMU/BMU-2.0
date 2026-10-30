'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import { leadPopup } from '@/data/leadPopup';
import { leadSentThisVisit } from '@/lib/leads/browser';
import styles from './LeadPopup.module.css';
import LeadPopupForm from './LeadPopupForm';

const CLOSES_KEY = 'bmu-lead-popup-closes'; // sessionStorage: times closed this visit

// Browser storage can be blocked (private windows, settings) – the popup still works without it
function closesThisVisit() {
  try {
    return Number(sessionStorage.getItem(CLOSES_KEY) ?? 0);
  } catch {
    return 0;
  }
}

function rememberCloses(closes: number) {
  try {
    sessionStorage.setItem(CLOSES_KEY, String(closes));
  } catch {
    // not saved – fine
  }
}

// "Let's build your next growth move." – a lead form that floats over every page (added in
// src/app/(site)/layout.tsx). On every visit: shows 5s after arriving; after a close, once more 30s
// later (timings in src/data/leadPopup.ts). Once they send it (or the contact page form) it stays
// away for the rest of the visit and returns on the next. Never on /login or /contact – if it's due
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

  // First showing, unless they already sent their details or closed it enough times this visit
  useEffect(() => {
    if (leadSentThisVisit() || closesThisVisit() >= timing.maxCloses) return;
    schedule(timing.firstDelay);
    return () => window.clearTimeout(timer.current);
  }, [schedule, timing]);

  const close = useCallback(() => {
    setOpen(false);
    if (leadSentThisVisit()) return;
    const closes = closesThisVisit() + 1;
    rememberCloses(closes);
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
