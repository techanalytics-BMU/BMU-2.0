'use client';

import { useEffect, useRef } from 'react';
import { aboutStory } from '@/data/about/aboutStory';
import AboutHeader from '../AboutHeader/AboutHeader';
import styles from './AboutStory.module.css';

// Our story as three cards that stack up as you scroll (each one sticks a little lower than the
// one before). A card being covered sinks back: --cover (0 → 1) is set on it as the next card
// slides over it. The last chapter – where BMU Marketing begins – has the lime rim.
export default function AboutStory() {
  const { chapters, ...header } = aboutStory;
  const listRef = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const items = Array.from(list.children) as HTMLElement[];
    let frame = 0;

    const update = () => {
      frame = 0;
      items.forEach((item, i) => {
        const next = items[i + 1];
        if (!next) return;
        const { top, height } = item.getBoundingClientRect();
        // 0 while the next card is a full card-height away, 1 once it has landed on this one
        const cover = Math.min(
          Math.max(1 - (next.getBoundingClientRect().top - top) / height, 0),
          1
        );
        item.style.setProperty('--cover', cover.toFixed(3));
      });
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
  }, []);

  return (
    <section id="about-story" className={styles.section}>
      <AboutHeader {...header} />

      <ol ref={listRef} className={styles.stack}>
        {chapters.map((chapter, i) => (
          <li
            key={chapter.title}
            className={styles.item}
            style={{ '--i': i } as React.CSSProperties}
          >
            <article
              className={`${styles.card} ${i === chapters.length - 1 ? styles.featured : ''}`}
            >
              <div className={styles.panel}>
                <div className={styles.copy}>
                  <p className={styles.chapter}>
                    Chapter <span>{String(i + 1).padStart(2, '0')}</span>
                  </p>
                  <h3 className={styles.title}>{chapter.title}</h3>
                  <p className={styles.text}>{chapter.text}</p>
                </div>

                <div className={styles.figureBox}>
                  <span className={styles.figure}>{chapter.figure}</span>
                  <span className={styles.caption}>{chapter.caption}</span>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}
