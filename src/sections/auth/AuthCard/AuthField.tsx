'use client';

import { useState } from 'react';
import type { AuthField as AuthFieldType } from '@/types/auth';
import styles from './AuthCard.module.css';

type Props = {
  field: AuthFieldType;
  error?: string;
  defaultValue?: string;
};

// One field: label, box and error line. Password boxes get an eye button to show what was typed.
export default function AuthField({ field, error, defaultValue }: Props) {
  const [shown, setShown] = useState(false);
  const id = `auth-${field.name}`;
  const isPassword = field.type === 'password';

  return (
    <div className={`${styles.field} ${field.half ? styles.half : ''}`}>
      <label htmlFor={id} className={styles.label}>
        {field.label}
      </label>
      <span className={styles.box} data-invalid={Boolean(error)}>
        <input
          id={id}
          name={field.name}
          type={isPassword && shown ? 'text' : field.type}
          inputMode={field.type === 'tel' ? 'tel' : undefined}
          placeholder={field.placeholder}
          autoComplete={field.autoComplete}
          defaultValue={defaultValue}
          className={styles.input}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
        />
        {isPassword && (
          <button
            type="button"
            className={styles.eye}
            onClick={() => setShown((value) => !value)}
            aria-label={shown ? 'Hide password' : 'Show password'}
            aria-pressed={shown}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" />
              <circle cx="12" cy="12" r="3" />
              {shown && <path d="M4 4l16 16" />}
            </svg>
          </button>
        )}
      </span>
      {error && (
        <span id={`${id}-error`} className={styles.error} role="alert">
          {error}
        </span>
      )}
    </div>
  );
}
