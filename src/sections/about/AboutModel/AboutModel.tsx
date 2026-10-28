'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { aboutModel } from '@/data/about/aboutModel';
import { useInView } from '@/hooks/useInView';
import AboutHeader from '../AboutHeader/AboutHeader';
import styles from './AboutModel.module.css';

// Where each chip sits, as offsets from the middle of the stage in % of its width (x) and
// height (y).
// Wide screens – scattered: tilted, all over the place; in orbit: a pentagon around the BMU core.
const SCATTER = [
  { x: -30, y: -28, r: -6 },
  { x: 29, y: -31, r: 5 },
  { x: -31, y: 14, r: 4 },
  { x: 30, y: 10, r: -5 },
  { x: -2, y: 33, r: 3 },
];
const ORBIT = [
  { x: 0, y: -36 },
  { x: 29.5, y: -11 },
  { x: -29.5, y: -11 },
  { x: 18, y: 29 },
  { x: -18, y: 29 },
];
// Phones – a messy, tilted pile under the empty middle; then a neat column under the core
// (which moves up to CORE_Y), hung off one rail down the left.
const PILE = [
  { x: -6, y: -12, r: -6 },
  { x: 7, y: 0, r: 5 },
  { x: -5, y: 13, r: 4 },
  { x: 6, y: 25, r: -5 },
  { x: -3, y: 37, r: 6 },
];
const COLUMN_Y = [-8, 4, 16, 28, 40];
const CORE_Y = -33;

// The beams are drawn once per stage shape (2.1 : 1 wide, 1 : 1.3 on phones), with % of width and
// height turned into evenly scaled units – a stretched SVG would warp the line widths and the dash
// lengths the pulses run on.
const WIDE = { w: 2.1, h: 1 };
const TALL = { w: 1, h: 1.3 };

// Wide: a beam from each chip in orbit into the core, all curving the same way (a slow spiral)
const beam = ({ x, y }: { x: number; y: number }) => {
  const [px, py] = [x * WIDE.w, y * WIDE.h];
  return `M${px} ${py} Q${px * 0.5 + py * 0.25} ${py * 0.5 - px * 0.25} 0 0`;
};

// Tall: one rail from the core, out to the left and down past the column (just left of the chips,
// whose left edge is at -44%), with a short arm into each chip
const RAIL_X = -47;
const RAIL = [
  `M0 ${CORE_Y * TALL.h}`,
  `C-30 ${CORE_Y * TALL.h} ${RAIL_X} ${(CORE_Y + 4) * TALL.h} ${RAIL_X} ${(CORE_Y + 18) * TALL.h}`,
  `L${RAIL_X} ${COLUMN_Y[COLUMN_Y.length - 1] * TALL.h}`,
].join(' ');
const arm = (y: number) => `M${RAIL_X} ${y * TALL.h} H-44`;

const vars = (values: Record<string, string | number>) => values as React.CSSProperties;

// The five-agency problem as a small universe. "Five agencies": five chips scattered around an empty
// middle, each with its own excuse – no one owns the result. "One BMU team" (it switches by itself
// the first time it scrolls into view): the chips glide into place around the BMU core – a ring on
// wide screens, a neat column on phones – turn into the services BMU runs, and beams connect them
// with light running along them.
export default function AboutModel() {
  const { offLabel, onLabel, noOwner, vendors, team, ...header } = aboutModel;
  const [on, setOn] = useState(false);
  const touched = useRef(false);
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.45 });

  useEffect(() => {
    if (!inView || touched.current) return;
    const timer = window.setTimeout(() => setOn(true), 1200);
    return () => window.clearTimeout(timer);
  }, [inView]);

  const choose = (value: boolean) => {
    touched.current = true;
    setOn(value);
  };

  return (
    <section id="about-model" className={styles.section}>
      <AboutHeader {...header} />

      {/* Same toggle as the pricing plans: a lime pill slides to the chosen option */}
      <div
        className={styles.toggle}
        role="group"
        aria-label="Compare"
        style={vars({ '--active': on ? 1 : 0 })}
      >
        <span className={styles.toggleIndicator} aria-hidden="true" />
        <button
          type="button"
          aria-pressed={!on}
          className={`${styles.tab} ${!on ? styles.tabActive : ''}`}
          onClick={() => choose(false)}
        >
          {offLabel}
        </button>
        <button
          type="button"
          aria-pressed={on}
          className={`${styles.tab} ${on ? styles.tabActive : ''}`}
          onClick={() => choose(true)}
        >
          {onLabel}
        </button>
      </div>

      <div ref={ref} className={styles.stage} data-on={on} style={vars({ '--core-y': CORE_Y })}>
        <svg
          className={`${styles.beams} ${styles.wide}`}
          viewBox={`${-50 * WIDE.w} ${-50 * WIDE.h} ${100 * WIDE.w} ${100 * WIDE.h}`}
          aria-hidden="true"
        >
          {ORBIT.slice(0, vendors.length).map((spot, i) => (
            <g key={i} style={vars({ '--i': i })}>
              <path d={beam(spot)} pathLength={1} className={styles.beam} />
              <path d={beam(spot)} pathLength={1} className={styles.pulse} />
            </g>
          ))}
        </svg>
        <svg
          className={`${styles.beams} ${styles.tall}`}
          viewBox={`${-50 * TALL.w} ${-50 * TALL.h} ${100 * TALL.w} ${100 * TALL.h}`}
          aria-hidden="true"
        >
          <g style={vars({ '--i': 0 })}>
            <path d={RAIL} pathLength={1} className={styles.beam} />
            <path d={RAIL} pathLength={1} className={styles.pulse} />
          </g>
          {COLUMN_Y.slice(0, vendors.length).map((y, i) => (
            <path
              key={y}
              d={arm(y)}
              pathLength={1}
              className={`${styles.beam} ${styles.arm}`}
              style={vars({ '--i': i })}
            />
          ))}
        </svg>

        {/* The empty middle while scattered */}
        <p className={styles.void} aria-hidden={on}>
          {noOwner}
        </p>

        {/* The BMU core: a small lit planet with two rings turning around it */}
        <div className={styles.core} aria-hidden={!on}>
          <span className={styles.ringOuter}>
            <span className={styles.moon} />
          </span>
          <span className={styles.ringInner} />
          <span className={styles.planet}>
            <Image
              src="/images/common/bmu-logo-light.webp"
              alt={team.name}
              width={556}
              height={268}
              className={styles.logo}
            />
          </span>
        </div>

        {vendors.map((vendor, i) => {
          const scatter = SCATTER[i % SCATTER.length];
          const orbit = ORBIT[i % ORBIT.length];
          const pile = PILE[i % PILE.length];
          return (
            <div
              key={vendor.role}
              className={styles.node}
              style={vars({
                '--i': i,
                '--sx': scatter.x,
                '--sy': scatter.y,
                '--sr': `${scatter.r}deg`,
                '--ox': orbit.x,
                '--oy': orbit.y,
                '--px': pile.x,
                '--py': pile.y,
                '--pr': `${pile.r}deg`,
                '--cy': COLUMN_Y[i % COLUMN_Y.length],
              })}
            >
              <span className={styles.icon} aria-hidden="true" />
              <span className={styles.labels}>
                <span className={styles.offLabel} aria-hidden={on}>
                  <span className={styles.name}>{vendor.role}</span>
                  <span className={styles.status}>{vendor.status}</span>
                </span>
                <span className={styles.onLabel} aria-hidden={!on}>
                  <span className={styles.name}>{vendor.service}</span>
                  <span className={styles.status}>{team.tag}</span>
                </span>
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
