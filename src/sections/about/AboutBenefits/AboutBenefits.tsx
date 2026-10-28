'use client';

import { aboutBenefits } from '@/data/about/aboutBenefits';
import { useInView } from '@/hooks/useInView';
import type { AboutBenefit } from '@/types/about';
import AboutHeader from '../AboutHeader/AboutHeader';
import styles from './AboutBenefits.module.css';

const d = (n: number) => ({ '--d': n }) as React.CSSProperties;

// One small drawing per card that keeps playing on a loop, all in the same language: grey for
// "before", lime for what one team does to it.
function Visual({ type }: { type: AboutBenefit['visual'] }) {
  switch (type) {
    // A jumpy grey cost line; a calm lime one keeps drawing itself below it, landing on a dot
    case 'cost':
      return (
        <>
          <path
            d="M0 42 L20 26 L40 52 L60 30 L80 60 L100 34 L120 56 L140 40 L160 64 L180 46 L200 70 L220 56"
            className={styles.grey}
          />
          <path
            d="M0 30 C 50 34, 90 56, 130 72 S 196 90, 214 92"
            pathLength={1}
            className={styles.draw}
          />
          <circle cx="214" cy="92" r="9" className={styles.ring} />
          <circle cx="214" cy="92" r="4" className={styles.end} />
        </>
      );
    // Radar rings sending out pings, with people (dots) lighting up on them one after another
    case 'reach':
      return (
        <>
          {[30, 60, 90].map((r) => (
            <path
              key={r}
              d={`M${110 - r} 110 A${r} ${r} 0 0 1 ${110 + r} 110`}
              className={styles.grey}
            />
          ))}
          {[0, 1].map((n) => (
            <path key={n} d="M14 110 A96 96 0 0 1 206 110" className={styles.ping} style={d(n)} />
          ))}
          {[
            [110, 80],
            [68, 68],
            [156, 71],
            [32, 65],
            [155, 32],
            [80, 27],
          ].map(([cx, cy], n) => (
            <circle key={n} cx={cx} cy={cy} r="4" className={styles.twinkle} style={d(n)} />
          ))}
        </>
      );
    // Separate tools wired into one node, with light running down every wire into it
    case 'connect':
      return (
        <>
          {[18, 64, 110, 156, 202].map((x, n) => (
            <g key={x}>
              <circle cx={x} cy="10" r="4" className={styles.greyDot} />
              <path d={`M${x} 14 C ${x} 60, 110 50, 110 88`} className={styles.wire} />
              <path
                d={`M${x} 14 C ${x} 60, 110 50, 110 88`}
                pathLength={1}
                className={styles.flow}
                style={d(n)}
              />
            </g>
          ))}
          <circle cx="110" cy="96" r="14" className={styles.halo} />
          <circle cx="110" cy="96" r="8" className={styles.node} />
        </>
      );
    // Bars rising in a wave under a curve that keeps drawing itself upwards
    default:
      return (
        <>
          {[18, 26, 24, 36, 46, 58, 74, 92].map((h, n) => (
            <rect
              key={n}
              x={4 + n * 27}
              y={110 - h}
              width="16"
              height={h}
              rx="3"
              className={styles.bar}
              style={d(n)}
            />
          ))}
          <path
            d="M0 96 C 70 92, 130 76, 170 50 S 210 10, 220 4"
            pathLength={1}
            className={styles.draw}
          />
          <circle cx="220" cy="4" r="4" className={styles.end} />
        </>
      );
  }
}

// Follow the pointer with the card's lime spotlight (--mx / --my)
const spotlight = (e: React.PointerEvent<HTMLElement>) => {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
};

// What changes: four compact cards in a row. Each has a small drawing that keeps playing once the
// row is in view, and a lime spotlight – on its rim and inside – that follows the pointer.
export default function AboutBenefits() {
  const { items, ...header } = aboutBenefits;
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.25 });

  return (
    <section id="about-benefits" className={styles.section}>
      <AboutHeader {...header} />

      <div ref={ref} className={styles.grid} data-in-view={inView}>
        {items.map((item, i) => (
          <article
            key={item.title}
            className={styles.card}
            style={{ '--i': i } as React.CSSProperties}
            onPointerMove={spotlight}
          >
            <div className={styles.visual}>
              <span className={styles.number}>{String(i + 1).padStart(2, '0')}</span>
              <svg viewBox="-8 -8 236 126" aria-hidden="true">
                <Visual type={item.visual} />
              </svg>
            </div>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
