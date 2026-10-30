'use client';

import Link from 'next/link';
import { useActionState } from 'react';
import { authSignup } from '@/data/auth/authSignup';
import { signup } from '@/lib/auth/actions';
import type { AuthFormState } from '@/types/auth';
import AuthCard from '../AuthCard/AuthCard';
import styles from '../AuthCard/AuthCard.module.css';
import AuthField from '../AuthCard/AuthField';

// Signup: name, phone, email and password. Every new account is a client – staff roles are only
// given by an admin (or a manager, for managers). If Supabase asks for email confirmation first,
// the form gives way to "Check your inbox".
export default function AuthSignup() {
  const t = authSignup;
  const [state, action, pending] = useActionState<AuthFormState, FormData>(signup, {});

  return (
    <AuthCard
      headingStart={t.headingStart}
      headingHighlight={t.headingHighlight}
      description={t.description}
    >
      {state.checkEmail ? (
        <div className={styles.sent} role="status">
          <p className={styles.sentTitle}>{t.checkEmailTitle}</p>
          <p className={styles.sentText}>{t.checkEmailText.replace('{email}', state.checkEmail)}</p>
        </div>
      ) : (
        <form action={action} className={styles.form} noValidate>
          {state.error && (
            <p className={styles.alert} role="alert">
              {state.error}
            </p>
          )}

          {t.fields.map((field) => (
            <AuthField
              key={field.name}
              field={field}
              error={state.fieldErrors?.[field.name]}
              defaultValue={field.type === 'password' ? undefined : state.values?.[field.name]}
            />
          ))}

          <button type="submit" className={styles.submit} disabled={pending}>
            {pending ? t.sending : t.submit}
          </button>
        </form>
      )}

      <p className={styles.switch}>
        {t.switchText} <Link href={t.switchLink.href}>{t.switchLink.label}</Link>
      </p>
    </AuthCard>
  );
}
