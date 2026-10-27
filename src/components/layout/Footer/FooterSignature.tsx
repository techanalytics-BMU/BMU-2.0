'use client';

import { useInView } from '@/hooks/useInView';
import styles from './Footer.module.css';

type Props = {
  wordmark: string;
  backToTop: string;
};

// Closing signature: a huge faded wordmark dissolving into a glowing green horizon line – the
// same moment as the free-trial section's window. The line draws outwards from the centre when
// it scrolls into view; the glass chip sitting on it goes back to the top of the page.
export default function FooterSignature({ wordmark, backToTop }: Props) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.35 });

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  return (
    <div ref={ref} className={styles.signature} data-in-view={inView}>
      <span className={styles.wordmark} aria-hidden="true">
        {wordmark}
      </span>
      <span className={styles.horizon} aria-hidden="true" />
      <button type="button" className={styles.toTop} onClick={scrollToTop}>
        <span className={styles.toTopDot} aria-hidden="true" />
        {backToTop}
        <span className={styles.toTopArrow} aria-hidden="true">
          ↑
        </span>
      </button>
    </div>
  );
}
