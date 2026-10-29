'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import type { ContactFormField, ContactHeroContent } from '@/types/contact';
import styles from './ContactHeroForm.module.css';

type Props = {
  form: ContactHeroContent['form'];
  nextSteps: ContactHeroContent['nextSteps']; // shown again after sending
  children: React.ReactNode; // the heading, at the top of the card
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// A 10-digit Indian number, whether or not they typed +91 / 0 in front of it
const isPhone = (value: string) => {
  let digits = value.replace(/\D/g, '');
  if (digits.length === 12 && digits.startsWith('91')) digits = digits.slice(2);
  if (digits.length === 11 && digits.startsWith('0')) digits = digits.slice(1);
  return /^\d{10}$/.test(digits);
};

// What's wrong with a field's answer ('' when it's fine)
const check = (field: ContactFormField, data: FormData) => {
  const value = String(data.get(field.name) ?? '').trim();
  if (field.required && !value) {
    return field.error ?? `Please enter your ${field.label.toLowerCase().replace(/^your /, '')}`;
  }
  if (value && field.type === 'email' && !EMAIL.test(value)) return 'Please enter a valid email';
  if (value && field.type === 'tel' && !isPhone(value)) return 'Please enter a 10-digit number';
  return '';
};

// One field: a text box (optionally with a fixed prefix like +91) or a message box
function Field({ field, error }: { field: ContactFormField; error?: string }) {
  const id = `contact-${field.name}`;
  const errorId = `${id}-error`;
  const shared = {
    id,
    name: field.name,
    placeholder: field.placeholder,
    autoComplete: field.autoComplete,
    className: styles.input,
    'aria-invalid': Boolean(error),
    'aria-describedby': error ? errorId : undefined,
  };

  return (
    <div className={`${styles.field} ${field.half ? styles.half : ''}`}>
      <label htmlFor={id} className={styles.label}>
        {field.label}
        {!field.required && <span className={styles.optional}>optional</span>}
      </label>
      <span className={styles.box} data-invalid={Boolean(error)}>
        {field.prefix && <span className={styles.prefix}>{field.prefix}</span>}
        {field.type === 'textarea' ? (
          <textarea {...shared} rows={3} />
        ) : (
          <input
            {...shared}
            type={field.type}
            inputMode={field.type === 'tel' ? 'tel' : undefined}
          />
        )}
      </span>
      {error && (
        <span id={errorId} className={styles.error} role="alert">
          {error}
        </span>
      )}
    </div>
  );
}

// The contact card: a glass panel (the beam of light behind it shows through – see ContactHero)
// with the heading and the form. Checked in the browser before sending; the form then gives way
// to a thank-you with what happens next.
// Saving the request (Supabase) will be added later in handleSubmit.
export default function ContactHeroForm({ form, nextSteps, children }: Props) {
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [firstName, setFirstName] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const found: Record<string, string> = {};
    for (const field of form.fields) {
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
    // TODO (Supabase): save Object.fromEntries(data) here
    await new Promise((resolve) => setTimeout(resolve, 700));
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

  return (
    <div id="contact-form" className={styles.card}>
      <div className={styles.header}>{children}</div>

      {status === 'sent' ? (
        <div className={styles.success} role="status">
          <h2 className={styles.successTitle}>{form.successTitle.replace('{name}', firstName)}</h2>
          <p className={styles.successText}>{form.successText}</p>
          <ol className={styles.successSteps}>
            {nextSteps.map((step, i) => (
              <li key={step.title}>
                <span className={styles.stepNumber}>{i + 1}</span>
                <span>
                  <strong>{step.title}</strong>
                  {step.text}
                </span>
              </li>
            ))}
          </ol>
          <Link href={form.successCta.href} className={styles.successCta}>
            <Image src="/icons/social/whatsapp.svg" alt="" width={16} height={16} />
            {form.successCta.label}
          </Link>
        </div>
      ) : (
        <form
          ref={formRef}
          className={styles.form}
          onSubmit={handleSubmit}
          onChange={clearError}
          noValidate
        >
          <div className={styles.fields}>
            {form.fields.map((field) => (
              <Field key={field.name} field={field} error={errors[field.name]} />
            ))}
          </div>

          <button type="submit" className={styles.submit} disabled={status === 'sending'}>
            {status === 'sending' ? form.sending : form.submit}
          </button>
          <p className={styles.privacy}>{form.privacy}</p>
        </form>
      )}
    </div>
  );
}
