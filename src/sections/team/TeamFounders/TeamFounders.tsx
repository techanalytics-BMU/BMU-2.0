'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { teamFounders } from '@/data/team/teamFounders';
import { useInView } from '@/hooks/useInView';
import styles from './TeamFounders.module.css';

const PLACEHOLDER = '/images/team/placeholder-person.svg';

// Founders: the co-founders as an equal pair on a shared dark tile over a faint tile grid, each
// with a frosted label, and a large gradient heading overlapping the bottom of the cards.
// The pair settles in on scroll, then tilts gently in 3D towards the cursor.
export default function TeamFounders() {
  const { heading, subheading, founders } = teamFounders;
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.3 });
  const pairRef = useRef<HTMLDivElement>(null);

  // Mouse only: tilt the pair up to 7° towards the pointer (--rx / --ry), back to flat on leave
  const tilt = (event: React.PointerEvent<HTMLDivElement>) => {
    const pair = pairRef.current;
    if (!pair || event.pointerType !== 'mouse') return;
    const rect = pair.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    pair.style.setProperty('--ry', `${(x * 14).toFixed(2)}deg`);
    pair.style.setProperty('--rx', `${(y * -10).toFixed(2)}deg`);
  };
  const untilt = () => {
    pairRef.current?.style.setProperty('--ry', '0deg');
    pairRef.current?.style.setProperty('--rx', '0deg');
  };

  return (
    <section id="founders" className={styles.section}>
      <div
        ref={ref}
        className={styles.stage}
        data-in-view={inView}
        onPointerMove={tilt}
        onPointerLeave={untilt}
      >
        <div className={styles.scene}>
          <div ref={pairRef} className={styles.pair}>
            {founders.map((person, i) => (
              <div key={i} className={styles.card} style={{ '--i': i } as React.CSSProperties}>
                <span className={styles.frame}>
                  <span className={styles.photoBox}>
                    <Image
                      src={person.photo ?? PLACEHOLDER}
                      alt={person.name}
                      fill
                      sizes="200px"
                      className={styles.photo}
                    />
                  </span>
                </span>
                <span className={styles.label}>
                  <span className={styles.role}>{person.role}</span>
                  <span className={styles.name}>{person.name}</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.subheading}>{subheading}</p>
      </div>
    </section>
  );
}
