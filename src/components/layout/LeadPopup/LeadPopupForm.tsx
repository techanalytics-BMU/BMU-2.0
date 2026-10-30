'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { submitLead } from '@/lib/leads/actions';
import { addVisitDetails, markLeadSent } from '@/lib/leads/browser';
import { HONEYPOT_FIELD } from '@/lib/leads/fields';
import { EMAIL, isPhone } from '@/lib/validation';
import type { ContactFormField } from '@/types/contact';
import type { SubmitLeadResult } from '@/types/leads';
import type { LeadPopupContent } from '@/types/leadPopup';
import styles from './LeadPopup.module.css';

type Props = {
  content: LeadPopupContent;
};

// What's wrong with a field's answer ('' when it's fine)
const check = (field: ContactFormField, data: FormData) => {
  const value = String(data.get(field.name) ?? '').trim();
  if (field.required && !value) {
    return field.error ?? `Please enter your ${field.label.toLowerCase()}`;
  }
  if (value && field.type === 'email' && !EMAIL.test(value)) return 'Please enter a valid email';
  if (value && field.type === 'tel' && !isPhone(value)) return 'Please enter a 10-digit number';
  return '';
};

// Name · Phone · Email, then the silver Submit pill. Checked in the browser before sending, then
// saved as a lead in Supabase (src/lib/leads/actions.ts); the form gives way to a thank-you and
// the popup stays away for the rest of the visit.
export default function LeadPopupForm({ content }: Props) {
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [failed, setFailed] = useState(false);
  const [firstName, setFirstName] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const found: Record<string, string> = {};
    for (const field of content.fields) {
      const problem = check(field, data);
      if (problem) found[field.name] = problem;
    }
    setErrors(found);
    const first = Object.keys(found)[0];
    if (first) {
      formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    setStatus('sending');
    setFailed(false);
    addVisitDetails(data);
    const result: SubmitLeadResult = await submitLead('popup', data).catch(() => ({ ok: false }));
    if (!result.ok) {
      if (result.fieldErrors) setErrors(result.fieldErrors);
      else setFailed(true);
      setStatus('idle');
      return;
    }

    markLeadSent();
    setFirstName(
      String(data.get('name') ?? '')
        .trim()
        .split(/\s+/)[0]
    );
    setStatus('sent');
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

  if (status === 'sent') {
    return (
      <div className={styles.success} role="status">
        <p className={styles.successTitle}>{content.successTitle.replace('{name}', firstName)}</p>
        <p className={styles.successText}>{content.successText}</p>
        <a
          href={content.successCta.href}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.successCta}
        >
          <Image src="/icons/social/whatsapp.svg" alt="" width={16} height={16} />
          {content.successCta.label}
        </a>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      className={styles.form}
      onSubmit={handleSubmit}
      onChange={clearError}
      noValidate
    >
      <div className={styles.fields}>
        {content.fields.map((field) => {
          const id = `lead-popup-${field.name}`;
          const error = errors[field.name];
          return (
            <div key={field.name} className={`${styles.field} ${field.half ? styles.half : ''}`}>
              <label htmlFor={id} className={styles.label}>
                {field.label}
              </label>
              <input
                id={id}
                name={field.name}
                type={field.type === 'textarea' ? 'text' : field.type}
                inputMode={field.type === 'tel' ? 'tel' : undefined}
                placeholder={field.placeholder}
                autoComplete={field.autoComplete}
                className={styles.input}
                data-invalid={Boolean(error)}
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
      </div>

      {/* Hidden trap for bots (see src/lib/leads/fields.ts) */}
      <input
        type="text"
        name={HONEYPOT_FIELD}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className={styles.trap}
      />

      <button type="submit" className={styles.submit} disabled={status === 'sending'}>
        {status === 'sending' ? content.sending : content.submit}
        <span className={styles.submitArrow} aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </span>
      </button>

      {failed && (
        <p className={styles.failed} role="alert">
          {content.failed.text}{' '}
          <a href={content.failed.link.href} target="_blank" rel="noopener noreferrer">
            {content.failed.link.label}
          </a>
          .
        </p>
      )}
      {/* Opens in a new tab, so the popup and what they typed stay put */}
      <p className={styles.consent}>
        {content.consent.text}{' '}
        <Link href={content.consent.link.href} target="_blank">
          {content.consent.link.label}
        </Link>
        .
      </p>
    </form>
  );
}
