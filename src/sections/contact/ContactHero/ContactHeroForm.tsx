'use client';

import { useState } from 'react';
import type { ContactHeroContent } from '@/types/contact';
import styles from './ContactHeroForm.module.css';

type Props = {
  form: ContactHeroContent['form'];
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE = /^\+?[\d\s-]{10,15}$/;

// Contact form – checks the fields in the browser and shows a thank-you message.
// Saving the message (Supabase) will be added later in handleSubmit.
export default function ContactHeroForm({ form }: Props) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const validate = (data: FormData) => {
    const found: Record<string, string> = {};
    for (const field of form.fields) {
      const value = String(data.get(field.name) ?? '').trim();
      if (field.required && !value) found[field.name] = `Please enter your ${field.label.toLowerCase()}`;
      else if (value && field.type === 'email' && !EMAIL.test(value)) found[field.name] = 'Please enter a valid email';
      else if (value && field.type === 'tel' && !PHONE.test(value)) found[field.name] = 'Please enter a valid phone number';
    }
    return found;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus('sending');
    // TODO (Supabase): save Object.fromEntries(data) here
    await new Promise((resolve) => setTimeout(resolve, 600));
    setStatus('sent');
  };

  if (status === 'sent') {
    return (
      <div className={`${styles.card} ${styles.success}`} role="status">
        <h2 className={styles.successTitle}>{form.successTitle}</h2>
        <p className={styles.successText}>{form.successText}</p>
      </div>
    );
  }

  return (
    <form className={styles.card} onSubmit={handleSubmit} noValidate>
      {form.fields.map((field) => {
        const id = `contact-${field.name}`;
        const error = errors[field.name];
        return (
          <div key={field.name} className={`${styles.field} ${field.half ? styles.half : ''}`}>
            <label htmlFor={id} className={styles.label}>
              {field.label}
              {field.required && ' *'}
            </label>
            {field.type === 'select' ? (
              <select id={id} name={field.name} className={styles.input} defaultValue={field.options?.[0]}>
                {field.options?.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            ) : (
              <input
                id={id}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                className={styles.input}
                aria-invalid={Boolean(error)}
                aria-describedby={error ? `${id}-error` : undefined}
              />
            )}
            {error && (
              <span id={`${id}-error`} className={styles.error}>
                {error}
              </span>
            )}
          </div>
        );
      })}

      <button type="submit" className={styles.submit} disabled={status === 'sending'}>
        {status === 'sending' ? form.sending : form.submit}
      </button>
    </form>
  );
}
