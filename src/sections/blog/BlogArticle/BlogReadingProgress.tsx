'use client';

import { useEffect, useRef } from 'react';
import styles from './BlogArticle.module.css';

// Thin lime bar along the top of the screen that fills as you read the article body
// (the element with id `targetId`). Updates once per frame and never re-renders React.
export default function BlogReadingProgress({ targetId }: { targetId: string }) {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    const target = document.getElementById(targetId);
    if (!bar || !target) return;
    let frame = 0;

    const update = () => {
      frame = 0;
      // How much of the body has come up above the bottom of the screen
      const { top, height } = target.getBoundingClientRect();
      const progress = Math.min(Math.max((window.innerHeight - top) / Math.max(height, 1), 0), 1);
      bar.style.transform = `scaleX(${progress.toFixed(4)})`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [targetId]);

  return <div ref={barRef} className={styles.progress} aria-hidden="true" />;
}
