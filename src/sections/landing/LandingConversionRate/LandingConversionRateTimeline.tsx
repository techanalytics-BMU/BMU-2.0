'use client';

import { useScrollProgress } from '@/hooks/useScrollProgress';
import type { LandingConversionRateMarker } from '@/types/landing';
import styles from './LandingConversionRateTimeline.module.css';

type Props = {
  markers: LandingConversionRateMarker[];
};

// A website's life on one line, driven by the scroll (see the CSS for the three phases):
// the card grows to fill the screen and stays pinned → scrolling pans it left to right,
// revealing each step → it shrinks back into its card and the page carries on.
export default function LandingConversionRateTimeline({ markers }: Props) {
  // Phones (not pinned): start sliding only once the whole card is on screen, so "Launch day!" is seen first
  const ref = useScrollProgress<HTMLDivElement>({ mode: 'pinned', unpinned: 'onScreen' });

  return (
    <div ref={ref} className={styles.scroller} style={{ '--n': markers.length } as React.CSSProperties}>
      <div className={styles.sticky}>
        <div className={styles.panel}>
          <div className={styles.track}>
            <span className={styles.line} aria-hidden="true" />
            <ol className={styles.markers}>
              {markers.map((marker, i) => (
                <li
                  key={marker.label}
                  className={[
                    styles.marker,
                    marker.tall ? styles.tall : '',
                    marker.highlight ? styles.highlight : '',
                  ].join(' ')}
                  style={{ '--i': i } as React.CSSProperties}
                >
                  <span className={styles.label}>{marker.label}</span>
                  <span className={styles.stem} aria-hidden="true" />
                  <span className={styles.dot} aria-hidden="true" />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
