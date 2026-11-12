'use client';

import { Fragment } from 'react';
import { useInView } from '@/hooks/useInView';
import type { LandingConversionRateContent } from '@/types/landing';
import styles from './LandingConversionRateFlow.module.css';

type Props = Pick<
  LandingConversionRateContent,
  'inputs' | 'strategy' | 'testLabel' | 'customerView' | 'ownerView'
>;

// Vertical positions (in % of the diagram height) where the curves start and end.
// They match the CSS: the inputs box is 84% tall and centred, each input gets an equal row;
// the outcome box is full height with rows 3fr / 1fr / 3fr, so the two windows sit at 3/14 and 11/14.
const INPUTS_TOP = 8;
const INPUTS_HEIGHT = 84;
const VARIANT_Y = [(1.5 / 7) * 100, (5.5 / 7) * 100];

// Curve from (0, y1) to (100, y2) in a 100 × 100 box
const curve = (y1: number, y2: number) => `M0 ${y1} C 55 ${y1}, 45 ${y2}, 100 ${y2}`;

// Business flow: it draws itself once when it comes into view – each service → the middle → the two
// outcomes, in turn (see the CSS for the steps) – and the page keeps scrolling normally.
// The outcomes show both sides of a result: what a customer sees, and what you get.
export default function LandingConversionRateFlow({
  inputs,
  strategy,
  testLabel,
  customerView,
  ownerView,
}: Props) {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.35 });

  const inputPaths = inputs.map((_, i) =>
    curve(INPUTS_TOP + INPUTS_HEIGHT * ((i + 0.5) / inputs.length), 50)
  );
  const variantPaths = VARIANT_Y.map((y) => curve(50, y));

  const renderCurves = (paths: string[], side: 'in' | 'out') => (
    <svg className={styles.curves} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
      {paths.map((d, i) => (
        <g key={d} style={{ '--i': i } as React.CSSProperties} className={styles[side]}>
          <path d={d} className={`${styles.path} ${styles.glow}`} vectorEffect="non-scaling-stroke" />
          <path d={d} className={styles.path} vectorEffect="non-scaling-stroke" />
          <path d={d} className={styles.pulse} vectorEffect="non-scaling-stroke" />
        </g>
      ))}
    </svg>
  );

  return (
    <div ref={ref} className={styles.scroller} data-in-view={inView}>
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

          {/* 3. Outcomes – the customer's view and yours; they take turns lighting up */}
          <div className={`${styles.box} ${styles.test}`}>
            <div className={styles.browser} style={{ '--i': 0 } as React.CSSProperties}>
              <div className={styles.browserBar}>
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <b className={styles.browserLabel}>{customerView.label}</b>
              </div>
              <div className={styles.view}>
                <span className={styles.search}>
                  <svg viewBox="0 0 16 16" aria-hidden="true">
                    <circle cx="7" cy="7" r="4.5" />
                    <path d="M10.5 10.5L14 14" />
                  </svg>
                  {customerView.search}
                </span>
                <span className={styles.result}>
                  <span className={styles.resultName}>{customerView.business}</span>
                  <span className={styles.stars} aria-hidden="true">
                    ★★★★★
                  </span>
                  <span className={styles.actions}>
                    {customerView.actions.map((action) => (
                      <span key={action} className={styles.action}>
                        {action}
                      </span>
                    ))}
                  </span>
                </span>
              </div>
            </div>

            <div className={styles.browser} style={{ '--i': 1 } as React.CSSProperties}>
              <div className={styles.browserBar}>
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <span aria-hidden="true" />
                <b className={styles.browserLabel}>{ownerView.label}</b>
              </div>
              <div className={styles.view}>
                <span className={styles.enquiriesHead}>{ownerView.heading}</span>
                <ul className={styles.enquiries}>
                  {ownerView.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
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
