'use client';

import { landingCore } from '@/data/landing/landingCore';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import styles from './LandingCore.module.css';

// C.O.R.E – animation is tied to the scroll position (see src/hooks/useScrollProgress.ts):
// the section rises in as a rounded card and grows to full width, then the four
// columns rise up one after another. Scrolling back up reverses it.
export default function LandingCore() {
  const { eyebrow, heading, items } = landingCore;
  // 1 screen of scrolling for the whole reveal – all four columns settle while the section is in view
  const ref = useScrollProgress<HTMLElement>({ distance: 1 });

  return (
    <section ref={ref} id="core" className={styles.section}>
      <div className={styles.card}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h2 className={styles.heading}>{heading}</h2>
        </div>

        <ol className={styles.items}>
          {items.map((item, i) => (
            <li key={item.letter} className={styles.item} style={{ '--i': i } as React.CSSProperties}>
              <span className={styles.letter}>{item.letter}</span>
              <span className={styles.marker} aria-hidden="true">
                <span className={styles.dot} />
              </span>
              <div className={styles.titleWrap}>
                <span className={styles.number} aria-hidden="true">
                  {item.number}
                </span>
                <h3 className={styles.title}>{item.title}</h3>
              </div>
              <p className={styles.description}>{item.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
