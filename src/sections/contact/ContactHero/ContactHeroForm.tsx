'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import type { ContactFormField, ContactHeroContent } from '@/types/contact';
import styles from './ContactHeroForm.module.css';

type Props = {
  form: ContactHeroContent['form'];
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE = /^\+?[\d\s-]{10,15}$/;

// What's wrong with a field's answer ('' when it's fine)
const check = (field: ContactFormField, data: FormData) => {
  if (field.type === 'chips') {
    return field.required && data.getAll(field.name).length === 0 ? 'Pick at least one' : '';
  }
  const value = String(data.get(field.name) ?? '').trim();
  if (field.required && !value) {
    return field.error ?? `Please enter your ${field.label.toLowerCase().replace(/^your /, '')}`;
  }
  if (value && field.type === 'email' && !EMAIL.test(value)) return 'Please enter a valid email';
  if (value && field.type === 'tel' && !PHONE.test(value))
    return 'Please enter a valid phone number';
  return '';
};

// One question: a row of tappable chips, a text box, or a bigger text area
function Field({ field, error }: { field: ContactFormField; error?: string }) {
  const id = `contact-${field.name}`;
  const errorId = `${id}-error`;
  const optional = !field.required && <span className={styles.optional}>optional</span>;
  const message = error && (
    <span id={errorId} className={styles.error} role="alert">
      {error}
    </span>
  );

  if (field.type === 'chips') {
    return (
      <fieldset className={styles.field} aria-describedby={error ? errorId : undefined}>
        <legend className={styles.label}>
          {field.label}
          {optional}
        </legend>
        <div className={styles.chips}>
          {field.options?.map((option) => (
            <label key={option} className={styles.chip}>
              <input
                type={field.multiple ? 'checkbox' : 'radio'}
                name={field.name}
                value={option}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
        {message}
      </fieldset>
    );
  }

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
        {optional}
      </label>
      {field.type === 'textarea' ? (
        <textarea {...shared} rows={3} />
      ) : (
        <input {...shared} type={field.type} />
      )}
      {message}
    </div>
  );
}

// The contact form, one short step at a time: what they need (tap chips) → their business → how to
// reach them. A progress bar shows how far along they are; each step is checked before moving on,
// and every answer is kept when going back. Ends on a personal thank-you with what they picked.
// Saving the message (Supabase) will be added later in handleSubmit.
export default function ContactHeroForm({ form }: Props) {
  const formRef = useRef<HTMLFormElement>(null);
  const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);
  const moved = useRef(false);
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [result, setResult] = useState({ name: '', services: [] as string[] });
  const last = step === form.steps.length - 1;

  // After moving to another step, take keyboard and screen-reader focus to its question
  useEffect(() => {
    if (moved.current) titleRefs.current[step]?.focus();
  }, [step]);

  const go = (index: number) => {
    moved.current = true;
    setErrors({});
    setStep(index);
  };

  const checkStep = (data: FormData) => {
    const found: Record<string, string> = {};
    for (const field of form.steps[step].fields) {
      const message = check(field, data);
      if (message) found[field.name] = message;
    }
    setErrors(found);
    return Object.keys(found).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    if (!checkStep(data)) return;
    if (!last) return go(step + 1);

    setStatus('sending');
    // TODO (Supabase): save Object.fromEntries(data) here – 'services' is a list: data.getAll('services')
    await new Promise((resolve) => setTimeout(resolve, 700));
    setResult({
      name: String(data.get('name') ?? '')
        .trim()
        .split(/\s+/)[0],
      services: data.getAll('services').map(String),
    });
    setStatus('sent');
  };

  // Typing in or picking a field clears its error
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
      <div className={`${styles.card} ${styles.success}`} role="status">
        <svg className={styles.tick} viewBox="0 0 64 64" aria-hidden="true">
          <circle cx="32" cy="32" r="30" pathLength={1} />
          <path d="M20 33.5 28.5 42 45 24.5" pathLength={1} />
        </svg>
        <h2 className={styles.successTitle}>{form.successTitle.replace('{name}', result.name)}</h2>
        <p className={styles.successText}>{form.successText}</p>
        {result.services.length > 0 && (
          <ul className={styles.picked}>
            {result.services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        )}
        <Link href={form.successCta.href} className={styles.successCta}>
          {form.successCta.label}
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      className={styles.card}
      onSubmit={handleSubmit}
      onChange={clearError}
      noValidate
    >
      {/* Progress: the steps by name, and a line that fills as you go */}
      <div className={styles.progress}>
        <ol className={styles.stepNames}>
          {form.steps.map((item, i) => (
            <li
              key={item.label}
              data-state={i < step ? 'done' : i === step ? 'current' : 'todo'}
              aria-current={i === step ? 'step' : undefined}
            >
              <span className={styles.stepNumber}>{i + 1}</span>
              {item.label}
            </li>
          ))}
        </ol>
        <span className={styles.duration}>{form.duration}</span>
      </div>
      <span className={styles.track} aria-hidden="true">
        <span
          className={styles.fill}
          style={{ '--p': (step + 1) / form.steps.length } as React.CSSProperties}
        />
      </span>

      {/* Every step stays in the form (only the current one shows), so all answers are sent */}
      {form.steps.map((item, i) => (
        <div key={item.label} className={styles.step} hidden={i !== step}>
          <h2
            ref={(element) => {
              titleRefs.current[i] = element;
            }}
            tabIndex={-1}
            className={styles.question}
          >
            {item.title}
          </h2>
          <div className={styles.fields}>
            {item.fields.map((field) => (
              <Field key={field.name} field={field} error={errors[field.name]} />
            ))}
          </div>
        </div>
      ))}

      <div className={styles.actions}>
        {step > 0 && (
          <button type="button" className={styles.back} onClick={() => go(step - 1)}>
            <span aria-hidden="true">←</span> {form.back}
          </button>
        )}
        <button type="submit" className={styles.next} disabled={status === 'sending'}>
          {last ? (status === 'sending' ? form.sending : form.submit) : form.next}
          <Image src="/icons/common/navbar-cta-icon.svg" alt="" width={26} height={26} />
        </button>
      </div>
      {last && <p className={styles.privacy}>{form.privacy}</p>}
    </form>
  );
}
