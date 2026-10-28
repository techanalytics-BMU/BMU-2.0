'use client';

import Image from 'next/image';
import Badge from '@/components/ui/Badge/Badge';
import { workHero } from '@/data/work/workHero';
import { useDotWave } from '@/hooks/useDotWave';
import type { WorkClientLogo } from '@/types/work';
import styles from './WorkHero.module.css';

// Simple marks for the placeholder wordmarks (until real client logos are added)
const MARKS = [
  <circle key="c" cx="8" cy="8" r="6" />,
  <rect key="r" x="3" y="3" width="10" height="10" rx="2" transform="rotate(45 8 8)" />,
  <path key="p" d="M8 1.5 14.5 13H1.5Z" />,
  <path key="s" d="M8 1.5a6.5 6.5 0 1 0 0 13V8Z" />,
];

function ClientLogo({ client, index }: { client: WorkClientLogo; index: number }) {
  if (client.logo) {
    return (
      <Image src={client.logo} alt={client.name} width={140} height={40} className={styles.logo} />
    );
  }
  return (
    <span className={styles.wordmark}>
      <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden="true">
        {MARKS[index % MARKS.length]}
      </svg>
      {client.name}
    </span>
  );
}

// Work hero: a 3D field of dots rolling like a slow swell (canvas, src/hooks/useDotWave.ts) behind
// the badge and heading, then a strip of client logos that scrolls endlessly.
export default function WorkHero() {
  const { badge, heading, clientsLabel, clients } = workHero;
  const waveRef = useDotWave<HTMLCanvasElement>();

  return (
    <section id="work-hero" className={styles.section}>
      <canvas ref={waveRef} className={styles.wave} aria-hidden="true" />

      <div className={styles.content}>
        <div className={styles.rise} style={{ '--delay': '0.1s' } as React.CSSProperties}>
          <Badge>{badge}</Badge>
        </div>
        <h1
          className={`${styles.heading} ${styles.rise}`}
          style={{ '--delay': '0.25s' } as React.CSSProperties}
        >
          {heading}
        </h1>
      </div>

      <div
        className={`${styles.clients} ${styles.rise}`}
        style={{ '--delay': '0.5s' } as React.CSSProperties}
      >
        <p className={styles.clientsLabel}>{clientsLabel}</p>
        {/* Two copies side by side; the track slides left by one copy, then loops seamlessly */}
        <div className={styles.marquee}>
          <ul className={styles.track}>
            {[0, 1].map((copy) =>
              clients.map((client, i) => (
                <li key={`${copy}-${i}`} aria-hidden={copy === 1 || undefined}>
                  <ClientLogo client={client} index={i} />
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
