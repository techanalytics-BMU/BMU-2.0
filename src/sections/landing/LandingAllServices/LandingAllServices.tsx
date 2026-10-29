'use client';

import Image from 'next/image';
import Link from 'next/link';
import { landingAllServices } from '@/data/landing/landingAllServices';
import { useDragRotate } from '@/hooks/useDragRotate';
import styles from './LandingAllServices.module.css';

// The tiles sit on the inside of a 3D cylinder (the "ring"), seen from just outside it,
// so the far side is visible: small in the centre, large and angled at the edges.
// The ring spins continuously; dragging / swiping sideways spins it, up / down moves it
// to show the top and bottom cards (see src/hooks/useDragRotate.ts).
// Hovering (or tapping) a card reveals its "View More" button.
const COLUMNS = 8; // tiles around the ring – 360 / 8 = 45° apart
const ROWS = 5; // rows -2 … 2, row 0 sits behind the centre text.
// Every column has the same rows – perspective alone decides how many fit on screen:
// the small centre columns show all 5, the large outer columns show 3.

export default function LandingAllServices() {
  const { heading, subheading, tiles } = landingAllServices;
  const { areaRef, targetRef } = useDragRotate<HTMLDivElement, HTMLDivElement>({
    autoSpeed: 6, // one full turn every 60 seconds
    sensitivity: 0.12,
    verticalRange: 0.3, // up/down by up to 30% of the screen height
  });

  // 40 places (8 × 5), one per service. If there are fewer services
  // than places, the list repeats and the repeats are hidden from screen readers.
  const slots = Array.from({ length: ROWS * COLUMNS }, (_, slot) => {
    const row = Math.floor(slot / COLUMNS);
    const column = slot % COLUMNS;
    return {
      tile: tiles[slot % tiles.length],
      angle: column * (360 / COLUMNS),
      row: row - (ROWS - 1) / 2,
      isDuplicate: slot >= tiles.length,
    };
  });

  return (
    <section id="all-services" className={styles.section}>
      <div ref={areaRef} className={styles.stage}>
        <div ref={targetRef} className={styles.ring}>
          {slots.map(({ tile, angle, row, isDuplicate }, index) => (
            <div
              key={index}
              className={styles.tile}
              style={{ '--angle': `${angle}deg`, '--row': row } as React.CSSProperties}
              aria-hidden={isDuplicate || undefined}
            >
              {tile.image ? (
                <Image src={tile.image} alt={tile.title} fill sizes="300px" draggable={false} />
              ) : (
                <span className={styles.tileTitle}>{tile.title}</span>
              )}
              {tile.href ? (
                <Link
                  href={tile.href}
                  className={styles.viewMore}
                  tabIndex={isDuplicate ? -1 : undefined}
                  aria-label={`View more about ${tile.title}`}
                >
                  View More
                </Link>
              ) : (
                <button
                  type="button"
                  className={styles.viewMore}
                  tabIndex={isDuplicate ? -1 : undefined}
                  aria-label={`View more about ${tile.title}`}
                >
                  View More
                </button>
              )}
            </div>
          ))}
        </div>

        <div className={styles.text}>
          <h2 className={styles.heading}>{heading}</h2>
          <p className={styles.subheading}>{subheading}</p>
        </div>
      </div>
    </section>
  );
}
