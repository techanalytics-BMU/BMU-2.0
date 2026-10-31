'use client';

import { useState } from 'react';
import DashboardDialog from '@/components/dashboard/DashboardDialog/DashboardDialog';
import { dashboardBlogEditor } from '@/data/dashboard/dashboardBlogEditor';
import styles from './DashboardBlogEditor.module.css';

type Props = {
  initialText: string; // the words that were selected
  onAdd: (text: string, href: string) => void;
  onCancel: () => void;
};

// BMU pages linked to most often – one tap fills the address
const QUICK_PICKS = ['/services', '/contact', '/blog', '/about', '/work'];

/** A BMU page (/…), another website (https://…), an email (mailto:) or a phone number (tel:) */
const validLink = (href: string) => /^(\/[^\s]*|https?:\/\/\S+|mailto:\S+|tel:\S+)$/.test(href);

// "Add a link" in the dashboard's own popup: the link's words and its address (with quick picks
// for common BMU pages). Writes [words](address) into the text, which the website shows as a link.
export default function BlogLinkDialog({ initialText, onAdd, onCancel }: Props) {
  const t = dashboardBlogEditor.blocks;
  const [text, setText] = useState(initialText);
  const [href, setHref] = useState('');
  const [showError, setShowError] = useState(false);
  const address = href.trim();

  return (
    <DashboardDialog
      title={t.linkTitle}
      icon="external"
      confirmLabel={t.linkAdd}
      cancelLabel={dashboardBlogEditor.actions.cancel}
      confirmDisabled={!text.trim() || !address}
      onCancel={onCancel}
      onConfirm={() => {
        if (!validLink(address)) {
          setShowError(true);
          return;
        }
        onAdd(text.trim(), address);
      }}
    >
      <label className={styles.field}>
        <span className={styles.label}>{t.linkText}</span>
        <input
          className={styles.input}
          value={text}
          placeholder={t.linkTextPlaceholder}
          onChange={(event) => setText(event.target.value)}
        />
      </label>

      <label className={styles.field}>
        <span className={styles.label}>{t.linkAddress}</span>
        <input
          className={styles.input}
          value={href}
          placeholder={t.linkAddressPlaceholder}
          aria-invalid={showError}
          onChange={(event) => {
            setHref(event.target.value);
            setShowError(false);
          }}
        />
        <span className={showError ? styles.error : styles.hint}>{showError ? t.linkInvalid : t.linkHint}</span>
      </label>

      <div className={styles.field}>
        <span className={styles.label}>{t.linkQuick}</span>
        <div className={styles.rowButtons}>
          {QUICK_PICKS.map((path) => (
            <button
              key={path}
              type="button"
              className={styles.smallButton}
              onClick={() => {
                setHref(path);
                setShowError(false);
              }}
            >
              {path}
            </button>
          ))}
        </div>
      </div>
    </DashboardDialog>
  );
}
