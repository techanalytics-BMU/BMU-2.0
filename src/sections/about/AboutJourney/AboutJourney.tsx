'use client';

import { aboutJourney } from '@/data/about/aboutJourney';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import AboutHeader from '../AboutHeader/AboutHeader';
import styles from './AboutJourney.module.css';

// Our journey, in the style of the home page's conversion timeline: a lime baseline draws itself
// as you scroll (--progress), and each milestone rises on a stem as the line reaches it. The stems
// get taller from 2018 to today, so the timeline climbs; the current one has the pulsing ring and
// the live tag. Horizontal on wide screens, vertical on phones.
export default function AboutJourney() {
  const { liveLabel, milestones, ...header } = aboutJourney;
  const ref = useScrollProgress<HTMLElement>({ distance: 1.1 });

  return (
    <section ref={ref} id="about-journey" className={styles.section}>
      <AboutHeader {...header} />

      <div className={styles.track}>
        <span className={styles.line} aria-hidden="true" />
        <ol
          className={styles.milestones}
          style={{ '--n': milestones.length } as React.CSSProperties}
        >
          {milestones.map((milestone, i) => (
            <li
              key={milestone.title}
              className={`${styles.milestone} ${milestone.current ? styles.current : ''}`}
              style={{ '--i': i } as React.CSSProperties}
            >
              <div className={styles.body}>
                <p className={styles.markerRow}>
                  <span className={styles.marker}>{milestone.marker}</span>
                  {milestone.current && <span className={styles.live}>{liveLabel}</span>}
                </p>
                <h3 className={styles.title}>{milestone.title}</h3>
                <p className={styles.text}>{milestone.text}</p>
              </div>
              <span className={styles.stem} aria-hidden="true" />
              <span className={styles.dot} aria-hidden="true" />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
