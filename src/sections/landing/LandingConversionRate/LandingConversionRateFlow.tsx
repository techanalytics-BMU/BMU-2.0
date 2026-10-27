'use client';

import { Fragment } from 'react';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import styles from './LandingConversionRateFlow.module.css';

type Props = {
  inputs: string[];
  strategy: string[];
  testLabel: string;
  variants: [string, string];
};

// Vertical positions (in % of the diagram height) where the curves start and end.
// They match the CSS: the inputs box is 84% tall and centred, each input gets an equal row;
// the test box is full height with rows 2fr / 1fr / 2fr, so the two windows sit at 20% and 80%.
const INPUTS_TOP = 8;
const INPUTS_HEIGHT = 84;
const VARIANT_Y = [20, 80];

// Curve from (0, y1) to (100, y2) in a 100 × 100 box
const curve = (y1: number, y2: number) => `M0 ${y1} C 55 ${y1}, 45 ${y2}, 100 ${y2}`;

// Business flow, drawn by the scroll like the timeline above it (see the CSS for the steps):
// it stays pinned on screen while each service → the middle → the outcomes appear in turn.
export default function LandingConversionRateFlow({ inputs, strategy, testLabel, variants }: Props) {
  const ref = useScrollProgress<HTMLDivElement>({ mode: 'pinned' });

  const inputPaths = inputs.map((_, i) =>
    curve(INPUTS_TOP + INPUTS_HEIGHT * ((i + 0.5) / inputs.length), 50)
  );
  const variantPaths = VARIANT_Y.map((y) => curve(50, y));

  const renderCurves = (paths: string[], side: 'in' | 'out') => (
    <svg className={styles.curves} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
      {paths.map((d, i) => (
        <g key={d} style={{ '--i': i } as React.CSSProperties} className={styles[side]}>
          <path d={d} className={styles.path} vectorEffect="non-scaling-stroke" />
          <path d={d} className={styles.pulse} vectorEffect="non-scaling-stroke" />
        </g>
      ))}
    </svg>
  );

  return (
    <div ref={ref} className={styles.scroller}>
      <div className={styles.sticky}>
        <div className={styles.flow}>
          {/* 1. Services */}
          <ul className={`${styles.box} ${styles.inputs}`} style={{ '--rows': inputs.length } as React.CSSProperties}>
            {inputs.map((input, i) => (
              <li key={input} className={styles.row} style={{ '--i': i } as React.CSSProperties}>
                <span className={styles.chip}>{input}</span>
                <span className={`${styles.dot} ${styles.dotRight}`} aria-hidden="true" />
              </li>
            ))}
          </ul>

          {renderCurves(inputPaths, 'in')}
          <span className={`${styles.connector} ${styles.connectorIn}`} aria-hidden="true" />

          {/* 2. One team, one plan */}
          <div className={`${styles.box} ${styles.strategy}`}>
            <span className={`${styles.dot} ${styles.dotLeft}`} aria-hidden="true" />
            {strategy.map((item, i) => (
              <Fragment key={item}>
                {/* Glowing link between neighbouring labels */}
                {i > 0 && <span className={styles.link} aria-hidden="true" />}
                <span className={styles.chip}>{item}</span>
              </Fragment>
            ))}
            <span className={`${styles.dot} ${styles.dotRight}`} aria-hidden="true" />
          </div>

          {renderCurves(variantPaths, 'out')}
          <span className={`${styles.connector} ${styles.connectorOut}`} aria-hidden="true" />

          {/* 3. Outcomes – the two windows take turns lighting up */}
          <div className={`${styles.box} ${styles.test}`}>
            {variants.map((variant, i) => (
              <div key={variant} className={styles.browser} style={{ '--i': i } as React.CSSProperties}>
                <div className={styles.browserBar} aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <div className={styles.browserBody}>
                  <span className={styles.variant}>{variant}</span>
                  <span className={styles.block} aria-hidden="true" />
                  <span className={styles.block} aria-hidden="true" />
                </div>
              </div>
            ))}
            <span className={`${styles.chip} ${styles.testLabel}`}>{testLabel}</span>
            {VARIANT_Y.map((y) => (
              <span
                key={y}
                className={`${styles.dot} ${styles.dotLeft}`}
                style={{ top: `${y}%` }}
                aria-hidden="true"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
