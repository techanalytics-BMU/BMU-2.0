'use client';

import { aboutHero } from '@/data/about/aboutHero';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import styles from './AboutHero.module.css';

// A huge "AB ◯ UT" – the O is a small planet with a lime rim and an orbit ring, a sibling of the
// Team page's "TE ⬮ AM". The section is pinned while you scroll (useScrollProgress 'pinned' mode):
// the planet opens into a framed window, pushing the letters out, then the statement and the four
// facts fade in inside it.
export default function AboutHero() {
  const { wordStart, wordEnd, statement, accent, stats } = aboutHero;
  const ref = useScrollProgress<HTMLElement>({ mode: 'pinned' });

  return (
    <section ref={ref} id="about-hero" className={styles.section}>
      <div className={styles.sticky}>
        {/* The planet stays centred; the letters hang off its sides, so they get pushed out as it grows */}
        <h1 className={styles.word}>
          <span className={styles.srOnly}>
            {wordStart}O{wordEnd}
          </span>
          <span className={`${styles.ring} ${styles.ringBack}`} aria-hidden="true" />
          <span className={styles.planet} aria-hidden="true" />
          <span className={`${styles.ring} ${styles.ringFront}`} aria-hidden="true" />
          <span className={`${styles.letters} ${styles.lettersStart}`} aria-hidden="true">
            {wordStart}
          </span>
          <span className={`${styles.letters} ${styles.lettersEnd}`} aria-hidden="true">
            {wordEnd}
          </span>
        </h1>

        <div className={styles.content}>
          <p className={styles.statement}>
            {statement} <span className="text-accent">{accent}</span>
          </p>
          <dl className={styles.stats}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.stat}>
                <dt className={styles.statLabel}>{stat.label}</dt>
                <dd className={styles.statValue}>{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
