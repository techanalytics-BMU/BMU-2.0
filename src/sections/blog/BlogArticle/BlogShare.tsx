'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './BlogArticle.module.css';

type Props = {
  url: string; // the article's full address
  title: string;
  labels: {
    heading: string;
    whatsapp: string;
    linkedin: string;
    copy: string;
    copied: string;
    copyByHand: string; // when the browser won't let the page copy
  };
};

// Share the article: WhatsApp, LinkedIn, or copy its link. If the browser blocks copying, the link
// appears selected in a small box underneath, ready for Ctrl+C – no browser pop-up.
export default function BlogShare({ url, title, labels }: Props) {
  const [copied, setCopied] = useState(false);
  const [byHand, setByHand] = useState(false);
  const linkRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (byHand) linkRef.current?.select();
  }, [byHand]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setByHand(false);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setByHand(true);
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

      {byHand && (
        <div className={styles.copyBox}>
          <input
            ref={linkRef}
            className={styles.copyInput}
            value={url}
            readOnly
            aria-label={labels.copy}
            onFocus={(event) => event.target.select()}
          />
          <span className={styles.copyHint}>{labels.copyByHand}</span>
        </div>
      )}
    </div>
  );
}
