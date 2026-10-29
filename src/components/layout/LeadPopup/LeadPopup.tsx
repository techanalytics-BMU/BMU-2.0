'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { leadPopup } from '@/data/leadPopup';
import type { LeadPopupField } from '@/types/leadPopup';
import styles from './LeadPopup.module.css';

const FIRST_DELAY = 5000; // ms after landing
const AGAIN_DELAY = 30000; // ms after each close
const HIDDEN_ON = ['/login'];
const DONE_KEY = 'bmu-lead-popup-sent'; // set once the form is sent – then it never shows again

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE = /^\+?[\d\s-]{10,15}$/;

const isValid = (field: LeadPopupField, value: string) => {
  if (!value) return false;
  if (field.type === 'email') return EMAIL.test(value);
  if (field.type === 'tel') return PHONE.test(value);
  return true;
};

const sentBefore = () => {
  try {
    return localStorage.getItem(DONE_KEY) === '1';
  } catch {
    return false;
  }
};

// Lead popup, on every page but /login: 5s after landing, and again 30s after each close, until the
// form is sent. The page behind is dimmed and blurred but keeps scrolling; a click or tap outside
// the card, the ✕ or Esc closes it.
export default function LeadPopup() {
  const pathname = usePathname();
  const hidden = HIDDEN_ON.includes(pathname);
  const [open, setOpen] = useState(false);
  const [timerKey, setTimerKey] = useState(0); // bumped on each close, to start the next wait
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [firstName, setFirstName] = useState('');
  const cardRef = useRef<HTMLDivElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);

  // Wait, then open (5s the first time, 30s after a close); never on /login or once sent
  useEffect(() => {
    if (hidden || open || status === 'sent' || sentBefore()) return;
    const timer = window.setTimeout(() => setOpen(true), timerKey === 0 ? FIRST_DELAY : AGAIN_DELAY);
    return () => window.clearTimeout(timer);
  }, [hidden, open, status, timerKey]);

  // Going to /login closes it
  useEffect(() => {
    if (hidden) setOpen(false);
  }, [hidden]);

  const close = () => {
    setOpen(false);
    setErrors({});
    if (status !== 'sent') setTimerKey((k) => k + 1);
    returnFocus.current?.focus?.();
  };

  // While open: focus into the card, Esc closes
  useEffect(() => {
    if (!open) return;
    returnFocus.current = document.activeElement as HTMLElement | null;
    cardRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
    // close only reads state that is current when Esc is pressed
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const found: Record<string, string> = {};
    for (const field of leadPopup.fields) {
      if (!isValid(field, String(data.get(field.name) ?? '').trim())) found[field.name] = field.error;
    }
    setErrors(found);
    if (Object.keys(found).length) return;
    setStatus('sending');
    // TODO (Supabase): save Object.fromEntries(data) here
    await new Promise((resolve) => setTimeout(resolve, 700));
    setFirstName(String(data.get('name') ?? '').trim().split(/\s+/)[0]);
    setStatus('sent');
    try {
      localStorage.setItem(DONE_KEY, '1');
    } catch {
      // private mode: it just won't be remembered next visit
    }
  };

  // Typing in a field clears its error
  const clearError = (event: React.FormEvent<HTMLFormElement>) => {
    const { name } = event.target as HTMLInputElement;
    if (!errors[name]) return;
    setErrors((current) => {
      const next = { ...current };
      delete next[name];
      return next;
    });
  };

  if (hidden || !open) return null;
  const { headingStart, headingHighlight, description, chip, fields, submit, sending } = leadPopup;

  return (
    // The dimmed, blurred backdrop: a click or tap on it closes; the wheel / a swipe still scroll the page
    <div className={styles.overlay} onClick={(event) => event.target === event.currentTarget && close()}>
      <div
        ref={cardRef}
        className={styles.card}
        role="dialog"
        aria-modal="true"
        aria-labelledby="lead-popup-title"
        tabIndex={-1}
      >
        <button type="button" className={styles.close} aria-label={leadPopup.close} onClick={close}>
          <svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">
            <path d="M3.5 3.5l9 9m0-9l-9 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>

        <Image
          src="/images/common/bmu-logo-light.webp"
          alt="BMU Marketing"
          width={556}
          height={268}
          className={styles.logo}
        />

        {status === 'sent' ? (
          <div className={styles.success} role="status">
            <h2 id="lead-popup-title" className={styles.heading}>
              {leadPopup.successTitle.replace('{name}', firstName)}
            </h2>
            <p className={styles.description}>{leadPopup.successText}</p>
          </div>
        ) : (
          <>
            <h2 id="lead-popup-title" className={styles.heading}>
              {headingStart} <span className={styles.highlight}>{headingHighlight}</span>
            </h2>
            <p className={styles.description}>{description}</p>
            <Link href={chip.href} className={styles.chip} onClick={close}>
              <span className={styles.chipDot} aria-hidden="true" />
              {chip.label}
              <span aria-hidden="true">→</span>
            </Link>

            <form className={styles.form} onSubmit={handleSubmit} onChange={clearError} noValidate>
              {fields.map((field) => {
                const id = `lead-${field.name}`;
                const error = errors[field.name];
                return (
                  <div key={field.name} className={`${styles.field} ${field.half ? styles.half : ''}`}>
                    <label htmlFor={id} className={styles.label}>
                      {field.label}
                    </label>
                    <input
                      id={id}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      autoComplete={field.autoComplete}
                      className={styles.input}
                      aria-invalid={Boolean(error)}
                      aria-describedby={error ? `${id}-error` : undefined}
                    />
                    {error && (
                      <span id={`${id}-error`} className={styles.error} role="alert">
                        {error}
                      </span>
                    )}
                  </div>
                );
              })}
              <button type="submit" className={styles.submit} disabled={status === 'sending'}>
                {status === 'sending' ? sending : submit}
                <span className={styles.submitArrow} aria-hidden="true">
                  <svg viewBox="0 0 16 16" width="16" height="16">
                    <path d="M6 3.5L10.5 8 6 12.5" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
