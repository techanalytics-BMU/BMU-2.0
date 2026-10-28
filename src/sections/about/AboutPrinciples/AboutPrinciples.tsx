'use client';

import { useState } from 'react';
import { aboutPrinciples } from '@/data/about/aboutPrinciples';
import { useInView } from '@/hooks/useInView';
import type { AboutPrinciple } from '@/types/about';
import AboutHeader from '../AboutHeader/AboutHeader';
import styles from './AboutPrinciples.module.css';

type Icon = AboutPrinciple['icon'];

// Line icons (24 × 24, drawn in a lime stroke)
const ICONS: Record<Icon, React.ReactNode> = {
  // people
  team: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 19.5c.6-3.3 2.8-5.2 5.5-5.2s4.9 1.9 5.5 5.2" />
      <circle cx="17" cy="9" r="2.4" />
      <path d="M15.6 14.4c2.5-.3 4.4 1.3 4.9 4.4" />
    </>
  ),
  // price tag
  pricing: (
    <>
      <path d="M3.5 12.4V5A1.5 1.5 0 0 1 5 3.5h7.4l8.1 8.1-8.9 8.9Z" />
      <circle cx="8.4" cy="8.4" r="1.5" />
    </>
  ),
  // chart with a dip
  report: (
    <>
      <path d="M4 4v16h16" />
      <path d="m7.5 9 4 4 3-3 4.5 4.5" />
      <path d="M19 10.5v4h-4" />
    </>
  ),
  // key
  own: (
    <>
      <circle cx="8" cy="15.5" r="4" />
      <path d="m10.9 12.6 8.6-8.6M15.8 6.2l2.6 2.6M13.6 8.4l2 2" />
    </>
  ),
};

// A small animated scene per principle, played each time it becomes the active one
function Scene({ item }: { item: AboutPrinciple }) {
  const { caption, rows, badge } = item.scene;

  switch (item.icon) {
    // Who's accountable? Every line of work is owned by BMU, then they meet on one lit line.
    case 'team':
      return (
        <div className={styles.card}>
          <p className={styles.caption}>{caption}</p>
          <ul className={styles.rows}>
            {rows.map((row, i) => (
              <li
                key={row.label}
                className={styles.row}
                style={{ '--r': i } as React.CSSProperties}
              >
                <span>{row.label}</span>
                <span className={styles.owner}>
                  <span className={styles.ownerDot} />
                  {row.value}
                </span>
              </li>
            ))}
          </ul>
          <div className={styles.horizon}>
            <span className={styles.chip}>{badge}</span>
          </div>
        </div>
      );

    // The plan prints out of a slot like a receipt, then gets stamped
    case 'pricing':
      return (
        <div className={styles.receiptWrap}>
          <span className={styles.slot} />
          <div className={styles.receipt}>
            <p className={styles.receiptCaption}>{caption}</p>
            <ul className={styles.lines}>
              {rows.map((row, i) => (
                <li key={row.label} style={{ '--r': i } as React.CSSProperties}>
                  <span>{row.label}</span>
                  <span className={styles.leader} />
                  <strong>{row.value}</strong>
                </li>
              ))}
            </ul>
          </div>
          <span className={styles.stamp}>{badge}</span>
        </div>
      );

    // A report line that dips: the miss is flagged in amber, the recovery drawn in lime
    case 'report':
      return (
        <div className={styles.card}>
          <div className={styles.cardTop}>
            <p className={styles.caption}>{caption}</p>
            <span className={styles.tag}>{badge}</span>
          </div>
          <div className={styles.chart}>
            <svg viewBox="0 0 400 160" preserveAspectRatio="none">
              {[40, 80, 120].map((y) => (
                <line key={y} x1="0" x2="400" y1={y} y2={y} className={styles.grid} />
              ))}
              <path
                d="M0 100 C40 92 70 66 110 64 S170 48 200 50 C222 52 236 94 252 96"
                pathLength={1}
                className={styles.lineMiss}
              />
              <path
                d="M252 96 C276 98 300 58 332 40 S380 14 400 10"
                pathLength={1}
                className={styles.lineFix}
              />
            </svg>
            <span className={styles.missDot} />
            <span className={styles.endDot} />
          </div>
          <ul className={styles.legend}>
            {rows.map((row, i) => (
              <li key={row.label} style={{ '--r': i } as React.CSSProperties}>
                <span className={i === 0 ? styles.amber : styles.lime} />
                <strong>{row.label}</strong>
                {row.value}
              </li>
            ))}
          </ul>
        </div>
      );

    // Each account's owner switch flips to "You"
    default:
      return (
        <div className={styles.card}>
          <div className={styles.cardTop}>
            <p className={styles.caption}>{caption}</p>
            <span className={styles.tag}>
              <svg viewBox="0 0 24 24" width="13" height="13">
                {ICONS.own}
              </svg>
              {badge}
            </span>
          </div>
          <ul className={styles.rows}>
            {rows.map((row, i) => (
              <li
                key={row.label}
                className={styles.row}
                style={{ '--r': i } as React.CSSProperties}
              >
                <span className={styles.account}>
                  <span className={styles.initial}>{row.label[0]}</span>
                  {row.label}
                </span>
                <span className={styles.ownerSwitch}>
                  <span className={styles.you}>{row.value}</span>
                  <span className={styles.switch}>
                    <span className={styles.knob} />
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      );
  }
}

// How we work, as an auto-playing showcase. On the left, a simple list hung off a thin rail: the
// open principle's dot turns lime and its text shows, while a lime line fills down the rail beside
// it – when it's full, the next one opens. On the right, a framed panel plays that principle's
// scene. Pauses while the mouse is over it, while a keyboard user is in it, or while it's off
// screen; click any principle to jump to it.
export default function AboutPrinciples() {
  const { items, ...header } = aboutPrinciples;
  const [active, setActive] = useState(0);
  const [hover, setHover] = useState(false);
  const [focused, setFocused] = useState(false);
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.35, once: false });

  return (
    <section id="about-principles" className={styles.section}>
      <AboutHeader {...header} />

      <div
        ref={ref}
        className={styles.showcase}
        data-in-view={inView}
        data-running={inView && !hover && !focused}
        onPointerEnter={(e) => e.pointerType === 'mouse' && setHover(true)}
        onPointerLeave={() => setHover(false)}
        onFocus={(e) => e.target.matches(':focus-visible') && setFocused(true)}
        onBlur={() => setFocused(false)}
      >
        <ol className={styles.list}>
          {items.map((item, i) => (
            <li
              key={item.title}
              className={styles.item}
              data-active={i === active}
              data-past={i < active}
            >
              <button
                type="button"
                className={styles.tab}
                aria-expanded={i === active}
                onClick={() => setActive(i)}
              >
                <span className={styles.dot} aria-hidden="true" />
                {item.title}
              </button>
              <div className={styles.more}>
                <div>
                  <p className={styles.text}>{item.text}</p>
                </div>
              </div>
              {/* Fills down the rail while this principle is open; when it's full, the next opens */}
              <span className={styles.progress} aria-hidden="true">
                <span
                  className={styles.bar}
                  onAnimationEnd={() => setActive((i + 1) % items.length)}
                />
              </span>
            </li>
          ))}
        </ol>

        <div className={styles.stage} aria-hidden="true">
          <div className={styles.panel}>
            {items.map((item, i) => (
              <div
                key={item.title}
                className={styles.scene}
                data-active={i === active}
                data-play={inView && i === active}
              >
                <Scene item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
