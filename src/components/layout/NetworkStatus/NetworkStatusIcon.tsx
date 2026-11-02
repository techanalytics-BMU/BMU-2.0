import type { NetworkState } from '@/types/networkStatus';
import styles from './NetworkStatus.module.css';

const GAUGE_MAX = 10; // Mbps at the right end of the gauge
const TICKS = Array.from({ length: 11 }, (_, i) => (Math.PI * i) / 10); // 0 → 180°, left to right

type Props = {
  state: NetworkState;
  mbps: number | null; // the measured speed (slow only) – null when the browser doesn't say
  unit: string;
  slowLabel: string;
};

// The picture at the top of each card, all animated in CSS (still when "reduce motion" is on):
// offline – Wi-Fi bars searching for a signal, crossed out; unreachable – a turning globe with a
// pulsing ✕; slow – a speed gauge whose needle trembles near the bottom.
export default function NetworkStatusIcon({ state, mbps, unit, slowLabel }: Props) {
  if (state === 'offline') {
    return (
      <div className={styles.icon}>
        <svg viewBox="0 0 120 120" className={styles.wifi} aria-hidden="true">
          <path className={styles.wifiBar} d="M28.9 52.9 A44 44 0 0 1 91.1 52.9" />
          <path className={styles.wifiBar} d="M38.8 62.8 A30 30 0 0 1 81.2 62.8" />
          <path className={styles.wifiBar} d="M48.7 72.7 A16 16 0 0 1 71.3 72.7" />
          <circle className={styles.wifiDot} cx="60" cy="86" r="4.5" />
          {/* the cross-out: a dark cut behind a bright line */}
          <path className={styles.wifiCut} d="M32 28 L88 94" />
          <path className={styles.wifiSlash} d="M32 28 L88 94" pathLength={1} />
        </svg>
      </div>
    );
  }

  if (state === 'unreachable') {
    return (
      <div className={`${styles.icon} ${styles.iconDisc}`}>
        <svg viewBox="0 0 120 120" className={styles.globe} aria-hidden="true">
          <defs>
            <clipPath id="network-globe-clip">
              <circle cx="60" cy="58" r="26" />
            </clipPath>
          </defs>
          <circle className={styles.globeLine} cx="60" cy="58" r="26" />
          <g clipPath="url(#network-globe-clip)">
            <path className={styles.globeLine} d="M34 58 H86 M38 45 H82 M38 71 H82" />
            <ellipse className={`${styles.globeLine} ${styles.globeMeridian}`} cx="60" cy="58" rx="12" ry="26" />
            <ellipse
              className={`${styles.globeLine} ${styles.globeMeridian} ${styles.globeMeridianLate}`}
              cx="60"
              cy="58"
              rx="12"
              ry="26"
            />
          </g>
          <g className={styles.globeBadge}>
            <circle cx="85" cy="83" r="11" />
            <path d="M80.5 78.5 L89.5 87.5 M89.5 78.5 L80.5 87.5" />
          </g>
        </svg>
      </div>
    );
  }

  // Slow: the needle points at the measured speed (or near the bottom when it isn't known)
  const share = mbps === null ? 0.06 : Math.min(mbps, GAUGE_MAX) / GAUGE_MAX;
  return (
    <div className={`${styles.icon} ${styles.iconGauge}`}>
      <svg viewBox="0 0 160 112" className={styles.gauge} aria-hidden="true">
        <defs>
          <linearGradient id="network-gauge-fill" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="#8a8d91" />
            <stop offset="0.5" stopColor="#f4f5f6" />
            <stop offset="1" stopColor="#9a9da1" />
          </linearGradient>
        </defs>
        {TICKS.map((angle, i) => (
          <line
            key={i}
            className={styles.gaugeTick}
            x1={80 - Math.cos(angle) * 64}
            y1={82 - Math.sin(angle) * 64}
            x2={80 - Math.cos(angle) * (i % 5 ? 68 : 71)}
            y2={82 - Math.sin(angle) * (i % 5 ? 68 : 71)}
          />
        ))}
        <path className={styles.gaugeArc} d="M28 82 A52 52 0 0 1 132 82" />
        <text className={styles.gaugeScale} x="28" y="100">
          0
        </text>
        <text className={styles.gaugeScale} x="132" y="100">
          {GAUGE_MAX}
        </text>
        <g className={styles.gaugeNeedle} style={{ '--needle': `${share * 180}deg` } as React.CSSProperties}>
          <path d="M80 82 L42 82" />
        </g>
        <circle className={styles.gaugePivot} cx="80" cy="82" r="5.5" />
      </svg>
      <p className={styles.gaugeValue}>
        {mbps === null ? (
          slowLabel
        ) : (
          <>
            {mbps.toFixed(1)} <span>{unit}</span>
          </>
        )}
      </p>
    </div>
  );
}
