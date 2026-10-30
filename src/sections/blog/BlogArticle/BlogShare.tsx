'use client';

import { useState } from 'react';
import styles from './BlogArticle.module.css';

type Props = {
  url: string; // the article's full address
  title: string;
  labels: { heading: string; whatsapp: string; linkedin: string; copy: string; copied: string };
};

// Share the article: WhatsApp, LinkedIn, or copy its link
export default function BlogShare({ url, title, labels }: Props) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt(labels.copy, url); // clipboard blocked – let them copy it by hand
    }
  };

  return (
    <div className={styles.share}>
      <span className={styles.shareLabel}>{labels.heading}</span>
      <a
        className={styles.shareButton}
        href={`https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {labels.whatsapp}
      </a>
      <a
        className={styles.shareButton}
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {labels.linkedin}
      </a>
      <button type="button" className={styles.shareButton} onClick={copy} aria-live="polite">
        {copied ? labels.copied : labels.copy}
      </button>
    </div>
  );
}
