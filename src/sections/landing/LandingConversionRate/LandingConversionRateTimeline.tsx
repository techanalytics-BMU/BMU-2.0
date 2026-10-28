'use client';

import { useEffect, useRef } from 'react';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import type { LandingConversionRateMarker } from '@/types/landing';
import styles from './LandingConversionRateTimeline.module.css';

type Props = {
  markers: LandingConversionRateMarker[];
};

// Colours of the businessman running along the line (a flat illustration, drawn below)
const C = {
  suit: '#5b616b',
  suitShade: '#454a52', // far arm and leg, lapel
  shirt: '#f2f1ec',
  tie: '#8cc63f', // logo green
  tieKnot: '#6c9d2c',
  skin: '#dca67c',
  skinShade: '#c48f66',
  hair: '#2b2421',
  shoe: '#2a2a2e',
  case: '#8a5a2e',
  caseShade: '#6b4421',
  clasp: '#e2c46e',
};

// One leg of the businessman: the thigh turns at the hip, the shin (with the shoe) at the knee
function RunnerLeg({ className, color }: { className: string; color: string }) {
  return (
    <g className={className}>
      <rect x="27.5" y="54" width="7" height="25" rx="3.5" fill={color} />
      <g className={styles.shin}>
        <rect x="28" y="75" width="6" height="22" rx="3" fill={color} />
        <rect x="27" y="95.5" width="12" height="4.5" rx="2.2" fill={C.shoe} />
      </g>
    </g>
  );
}

// A website's life on one line, driven by the scroll (see the CSS for the three phases):
// the card grows to fill the screen and stays pinned → scrolling pans it left to right,
// revealing each step → it shrinks back into its card and the page carries on.
// A businessman with a briefcase runs along the line as it pans – shown only while scrolling down.
export default function LandingConversionRateTimeline({ markers }: Props) {
  // Phones (not pinned): start sliding only once the whole card is on screen, so "Launch day!" is seen first
  const ref = useScrollProgress<HTMLDivElement>({ mode: 'pinned', unpinned: 'onScreen' });
  const runnerRef = useRef<HTMLDivElement>(null);

  // The businessman follows the pan (--pan, 0 → 1). He's only shown while the page scrolls down:
  // scrolling up hides him (so he's never seen running backwards), and he reappears where the
  // timeline is as soon as the page scrolls down again.
  useEffect(() => {
    const scroller = ref.current;
    const runner = runnerRef.current;
    if (!scroller || !runner) return;
    let lastPan = 0;
    let lastY = window.scrollY;
    let frame = 0;
    let stopTimer = 0;

    const update = () => {
      frame = 0;
      const pan = parseFloat(getComputedStyle(scroller).getPropertyValue('--pan')) || 0;
      const y = window.scrollY;
      if (y < lastY) runner.dataset.hidden = 'true';
      else if (y > lastY) runner.dataset.hidden = 'false';
      lastY = y;
      if (pan > lastPan + 0.0005) {
        // Legs move only while he goes forward; he stops shortly after the scrolling does
        runner.dataset.running = 'true';
        window.clearTimeout(stopTimer);
        stopTimer = window.setTimeout(() => {
          runner.dataset.running = 'false';
        }, 150);
      }
      lastPan = pan;
      runner.style.setProperty('--run', pan.toFixed(4));
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(stopTimer);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [ref]);

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

          {/* Businessman running along the line – drawn in a 64 × 100 box, feet on its bottom edge */}
          <div ref={runnerRef} className={styles.runner} data-running="false" aria-hidden="true">
            <svg viewBox="0 0 64 100">
              <g className={styles.figure}>
                {/* Far arm, behind the body, bent while running */}
                <g className={styles.upper}>
                  <g className={styles.armFar}>
                    <rect x="28.5" y="26" width="5" height="14" rx="2.5" fill={C.suitShade} />
                    <g className={styles.forearm}>
                      <rect x="28.7" y="37" width="4.6" height="12" rx="2.3" fill={C.suitShade} />
                      <circle cx="31" cy="49.5" r="2.4" fill={C.skinShade} />
                    </g>
                  </g>
                </g>

                <RunnerLeg className={styles.legFar} color={C.suitShade} />
                <RunnerLeg className={styles.legNear} color={C.suit} />

                {/* Neck, jacket, shirt, tie and head */}
                <g className={styles.upper}>
                  <rect x="29.5" y="17" width="5.5" height="8" rx="2" fill={C.skin} />
                  <path d="M24 27q0-4 5-4h6q5 0 5.3 5l.9 27q.2 5-4.8 5H27q-4.6 0-4.4-5z" fill={C.suit} />
                  <path d="M33.5 23l6 1.4-2.6 9.6z" fill={C.shirt} />
                  <path d="M33.5 23l3.4 12.6" stroke={C.suitShade} strokeWidth="1" />
                  <g className={styles.tie}>
                    <path d="M36.4 27h1.6l1.2 13.2-2 2.5-2-2.5z" fill={C.tie} />
                    <path d="M35.8 24.6h2.8l-.6 2.5h-1.6z" fill={C.tieKnot} />
                  </g>
                  <circle cx="33" cy="12" r="8" fill={C.skin} />
                  <path
                    d="M25.2 13.5Q24.6 3.6 33 3.5q7.4.1 8.2 6.6-3.6-2.6-8-1.9-3.9.8-4.7 5.9-2 .6-3.3-.6z"
                    fill={C.hair}
                  />
                  <circle cx="30.4" cy="13.2" r="1.7" fill={C.skinShade} />
                  <circle cx="37.6" cy="11.4" r="0.9" fill={C.hair} />
                </g>

                {/* Near arm with the briefcase, which swings from the hand */}
                <g className={styles.upper}>
                  <g className={styles.armNear}>
                    <rect x="28.5" y="26" width="5" height="24" rx="2.5" fill={C.suit} />
                    <g className={styles.case}>
                      <path
                        d="M27.5 55v-2.5q0-1.5 1.5-1.5h4q1.5 0 1.5 1.5V55"
                        fill="none"
                        stroke={C.caseShade}
                        strokeWidth="1.6"
                      />
                      <rect x="21" y="54.5" width="20" height="14" rx="2.2" fill={C.case} />
                      <rect x="21" y="54.5" width="20" height="3.2" rx="1.6" fill={C.caseShade} opacity="0.55" />
                      <rect x="25" y="54.5" width="1.6" height="14" fill={C.caseShade} />
                      <rect x="35.4" y="54.5" width="1.6" height="14" fill={C.caseShade} />
                      <rect x="29.6" y="55.6" width="2.8" height="2" rx="0.5" fill={C.clasp} />
                    </g>
                    <circle cx="31" cy="51.2" r="2.6" fill={C.skin} />
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
