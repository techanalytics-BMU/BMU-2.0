'use client';

import Link from 'next/link';
import { useActionState, useState } from 'react';
import { authLogin } from '@/data/auth/authLogin';
import { login } from '@/lib/auth/actions';
import type { AuthFormState } from '@/types/auth';
import AuthCard from '../AuthCard/AuthCard';
import styles from '../AuthCard/AuthCard.module.css';
import AuthField from '../AuthCard/AuthField';

type Props = {
  next?: string; // the page they were trying to open – they go there after logging in
  notice?: string; // a message from the link that brought them here
};

// Login: email + password. Checked and signed in on the server (src/lib/auth/actions.ts); staff
// go to /dashboard, clients to /account.
export default function AuthLogin({ next, notice }: Props) {
  const t = authLogin;
  const [state, action, pending] = useActionState<AuthFormState, FormData>(login, {});
  const [showHint, setShowHint] = useState(false);
  const [email, password] = t.fields;

  return (
    <AuthCard
      headingStart={t.headingStart}
      headingHighlight={t.headingHighlight}
      description={t.description}
    >
      <form action={action} className={styles.form} noValidate>
        {notice && !state.error && <p className={styles.notice}>{notice}</p>}
        {state.error && (
          <p className={styles.alert} role="alert">
            {state.error}
          </p>
        )}
        {next && <input type="hidden" name="next" value={next} />}

        <AuthField field={email} error={state.fieldErrors?.email} defaultValue={state.values?.email} />
        <AuthField field={password} error={state.fieldErrors?.password} />

        {showHint ? (
          <p className={styles.hint} role="status">
            {t.forgotPasswordHint}
          </p>
        ) : (
          <button type="button" className={styles.forgot} onClick={() => setShowHint(true)}>
            {t.forgotPassword}
          </button>
        )}

        <button type="submit" className={styles.submit} disabled={pending}>
          {pending ? t.sending : t.submit}
        </button>
      </form>

      <p className={styles.switch}>
        {t.switchText} <Link href={t.switchLink.href}>{t.switchLink.label}</Link>
      </p>
    </AuthCard>
  );
}
