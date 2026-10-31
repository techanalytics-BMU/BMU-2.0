'use client';

import { useEffect, useRef, useState } from 'react';
import DashboardIcon, { type DashboardIconName } from '../DashboardIcon/DashboardIcon';
import styles from './DashboardDialog.module.css';

export type DialogTone = 'default' | 'warning' | 'danger';

export type DashboardDialogProps = {
  title: string;
  message?: React.ReactNode;
  icon?: DashboardIconName;
  tone?: DialogTone; // the action button: lime (default), amber (warning) or red (danger)
  confirmLabel: string;
  busyLabel?: string; // on the button while the action runs ("Deleting…")
  cancelLabel?: string;
  confirmDisabled?: boolean;
  onConfirm: () => unknown | Promise<unknown>; // the popup waits for it, then closes
  onCancel: () => void;
  children?: React.ReactNode; // extra fields (e.g. the link popup's boxes)
};

// The dashboard's own popup – in place of the browser's "localhost says…" boxes. A dark glass card
// over a dimmed, blurred page: icon, title, message (and any fields), then Cancel and the action.
// Escape or a click outside cancels; for risky actions the cursor starts on Cancel, so an
// accidental Enter never deletes anything. While the action runs, its button shows `busyLabel`.
export default function DashboardDialog({
  title,
  message,
  icon,
  tone = 'default',
  confirmLabel,
  busyLabel,
  cancelLabel = 'Cancel',
  confirmDisabled = false,
  onConfirm,
  onCancel,
  children,
}: DashboardDialogProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const cancelRef = useRef<HTMLButtonElement>(null);
  const confirmRef = useRef<HTMLButtonElement>(null);
  const [busy, setBusy] = useState(false);
  const busyRef = useRef(false);

  // Focus: Cancel for risky actions, the first field or the action otherwise; Escape cancels;
  // Tab stays inside the popup
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    const firstField = cardRef.current?.querySelector<HTMLElement>('input, textarea');
    (tone !== 'default' ? cancelRef.current : (firstField ?? confirmRef.current))?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && !busyRef.current) onCancel();
      if (event.key !== 'Tab' || !cardRef.current) return;
      const focusable = [
        ...cardRef.current.querySelectorAll<HTMLElement>('button:not([disabled]), input, textarea, a[href]'),
      ];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
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
      previous?.focus?.();
    };
    // Runs once, when the popup opens (onCancel and tone don't change while it's open)
  }, []);

  const confirm = async () => {
    if (busyRef.current || confirmDisabled) return;
    busyRef.current = true;
    setBusy(true);
    try {
      await onConfirm();
    } finally {
      busyRef.current = false;
      setBusy(false);
    }
  };

  return (
    <div
      className={styles.overlay}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget && !busyRef.current) onCancel();
      }}
    >
      <div
        ref={cardRef}
        className={styles.card}
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="dashboard-dialog-title"
        aria-describedby={message ? 'dashboard-dialog-message' : undefined}
        data-tone={tone}
      >
        <button type="button" className={styles.close} aria-label={cancelLabel} disabled={busy} onClick={onCancel}>
          <DashboardIcon name="close" size={15} />
        </button>

        <div className={styles.head}>
          {icon && (
            <span className={styles.icon} aria-hidden="true">
              <DashboardIcon name={icon} size={18} />
            </span>
          )}
          <h2 id="dashboard-dialog-title" className={styles.title}>
            {title}
          </h2>
        </div>

        {message && (
          <div id="dashboard-dialog-message" className={styles.message}>
            {message}
          </div>
        )}

        <form
          onSubmit={(event) => {
            event.preventDefault();
            void confirm();
          }}
        >
          {children && <div className={styles.fields}>{children}</div>}
          <div className={styles.actions}>
            <button ref={cancelRef} type="button" className={styles.cancel} disabled={busy} onClick={onCancel}>
              {cancelLabel}
            </button>
            <button ref={confirmRef} type="submit" className={styles.confirm} disabled={busy || confirmDisabled}>
              {busy && busyLabel ? busyLabel : confirmLabel}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
