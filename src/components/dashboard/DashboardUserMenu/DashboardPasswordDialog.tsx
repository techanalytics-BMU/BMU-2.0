'use client';

import { useActionState, useEffect, useRef } from 'react';
import { dashboardShell } from '@/data/dashboard/dashboardShell';
import { changePassword } from '@/lib/auth/actions';
import authStyles from '@/sections/auth/AuthCard/AuthCard.module.css';
import AuthField from '@/sections/auth/AuthCard/AuthField';
import type { AuthFormState } from '@/types/auth';
import DashboardIcon from '../DashboardIcon/DashboardIcon';
import styles from './DashboardUserMenu.module.css';

// "Change password": new password twice, with the same fields and lime button as the login page.
// Closes with ✕, Escape or a click outside.
export default function DashboardPasswordDialog({ onClose }: { onClose: () => void }) {
  const t = dashboardShell.password;
  const [state, action, pending] = useActionState<AuthFormState, FormData>(changePassword, {});
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    cardRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => event.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  return (
    <div
      className={styles.overlay}
      onClick={(event) => {
        if (!cardRef.current?.contains(event.target as Node)) onClose();
      }}
    >
      <div
        ref={cardRef}
        className={styles.dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby="password-title"
        tabIndex={-1}
      >
        <button type="button" className={styles.dialogClose} aria-label={t.close} onClick={onClose}>
          <DashboardIcon name="close" size={16} />
        </button>
        <h2 id="password-title" className={styles.dialogTitle}>
          {t.title}
        </h2>

        {state.done ? (
          <>
            <p className={authStyles.notice} role="status">
              {t.done}
            </p>
            <button type="button" className={`${authStyles.secondary} ${styles.dialogDone}`} onClick={onClose}>
              {t.close}
            </button>
          </>
        ) : (
          <form action={action} className={authStyles.form} noValidate>
            {state.error && (
              <p className={authStyles.alert} role="alert">
                {state.error}
              </p>
            )}
            <AuthField
              field={{
                name: 'password',
                label: t.password,
                type: 'password',
                placeholder: t.placeholder,
                autoComplete: 'new-password',
              }}
              error={state.fieldErrors?.password}
            />
            <AuthField
              field={{
                name: 'confirmPassword',
                label: t.confirmPassword,
                type: 'password',
                autoComplete: 'new-password',
              }}
              error={state.fieldErrors?.confirmPassword}
            />
            <button type="submit" className={authStyles.submit} disabled={pending}>
              {pending ? t.sending : t.submit}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
