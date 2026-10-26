'use client';

import { useInView } from '@/hooks/useInView';
import type { LandingConversionRateMarker } from '@/types/landing';
import styles from './LandingConversionRateTimeline.module.css';

type Props = {
  markers: LandingConversionRateMarker[];
};

// A website's life on one line: the line draws in, then each marker's stem
// grows and its label appears, left to right. The highlighted marker keeps pulsing.
export default function LandingConversionRateTimeline({ markers }: Props) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.4 });

  return (
    <div ref={ref} className={styles.panel} data-in-view={inView}>
      <span className={styles.line} aria-hidden="true" />
      <ol className={styles.markers}>
        {markers.map((marker, index) => (
          <li
            key={marker.label}
            className={`${styles.marker} ${marker.highlight ? styles.highlight : ''}`}
            style={
              {
                '--x': `${((index + 1) / (markers.length + 1)) * 100}%`,
                '--delay': `${0.9 + index * 0.35}s`,
              } as React.CSSProperties
            }
          >
            <span className={styles.label}>{marker.label}</span>
            <span className={styles.stem} aria-hidden="true" />
            <span className={styles.dot} aria-hidden="true" />
          </li>
        ))}
      </ol>
    </div>
  );
}
