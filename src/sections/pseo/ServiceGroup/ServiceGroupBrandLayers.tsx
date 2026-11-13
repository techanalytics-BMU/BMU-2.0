'use client';

import { useEffect, useRef, useSyncExternalStore, type CSSProperties } from 'react';
import styles from './ServiceGroupBrand.module.css';

// The Brand & Design hero's two moving parts – the layer index under the words (left) and the 3D
// stack of glass plates (right) – and the little shared state that keeps them in step.

const vars = (values: Record<string, string | number>) => values as CSSProperties;
const pad = (n: number) => String(n).padStart(2, '0');

// ---------- The layers of a brand system, top to bottom ----------
const LAYERS = [
  {
    name: 'Mark',
    spec: 'Monogram, clear space',
    art: (
      <>
        <g className={styles.guide}>
          <circle pathLength={1} cx="80" cy="80" r="58" />
          <path pathLength={1} d="M80 6V154" />
          <path pathLength={1} d="M6 80H154" />
          <rect pathLength={1} x="22" y="22" width="116" height="116" />
        </g>
        {/* The B: a stem and two bowls, drawn on its construction lines */}
        <path
          className={styles.markShape}
          pathLength={1}
          d="M52 24H80A28 28 0 0 1 97.6 73.6A28 28 0 0 1 80 136H52Z"
        />
        <circle className={`${styles.markDot} ${styles.pop}`} cx="80" cy="80" r="2.6" />
      </>
    ),
  },
  {
    name: 'Type',
    spec: 'Albert Sans, 5 sizes',
    art: (
      <>
        <text className={styles.specimen} x="14" y="74">
          Aa
        </text>
        {/* The type scale, largest to smallest */}
        {[
          [30, 46, 9, styles.ink],
          [46, 40, 6, styles.inkSoft],
          [58, 44, 4, styles.inkSoft],
          [68, 34, 3, styles.inkFaint],
        ].map(([y, width, height, tone], i) => (
          <rect
            key={i}
            className={`${tone} ${styles.grow}`}
            style={vars({ '--d': i })}
            x="100"
            y={y}
            width={width}
            height={height}
            rx="1.5"
          />
        ))}
        <path className={styles.guide} pathLength={1} d="M14 88H146" />
        {[
          [104, 132, styles.inkSoft],
          [115, 118, styles.inkFaint],
          [126, 84, styles.inkFaint],
        ].map(([y, width, tone], i) => (
          <rect
            key={i}
            className={`${tone} ${styles.grow}`}
            style={vars({ '--d': i + 4 })}
            x="14"
            y={y}
            width={width}
            height="4"
            rx="2"
          />
        ))}
      </>
    ),
  },
  {
    name: 'Colour',
    spec: '4 neutrals, 1 accent',
    art: (
      <>
        {['#eceef0', '#b5bac2', '#6d7279', '#2a2d31'].map((fill, i) => (
          <rect
            key={fill}
            className={`${styles.swatch} ${styles.pop}`}
            style={vars({ '--d': i })}
            x={14 + (i % 2) * 70}
            y={14 + Math.floor(i / 2) * 70}
            width="62"
            height="62"
            rx="6"
            fill={fill}
          />
        ))}
        <circle className={`${styles.markDot} ${styles.pop}`} style={vars({ '--d': 4 })} cx="129" cy="129" r="8" />
      </>
    ),
  },
  {
    name: 'Grid',
    spec: '12 columns, 8pt',
    art: (
      <>
        <rect className={styles.guide} pathLength={1} x="8" y="8" width="144" height="144" rx="4" />
        {Array.from({ length: 12 }, (_, i) => (
          <rect
            key={i}
            className={`${styles.column} ${styles.riseUp}`}
            style={vars({ '--d': i })}
            x={14 + i * 11.25}
            y="14"
            width="8"
            height="132"
          />
        ))}
      </>
    ),
  },
];

// ---------- The step both sides show ----------
// -1 while the plates arrive · 0–3 one layer lifted out of the stack · 4 the whole system put
// together, the plates pressed into one card – then round again. A layer the pointer is on holds.
const STEP_MS = 2600;
const ASSEMBLED_MS = 2800;
const INTRO_MS = 2400;
const ASSEMBLED = LAYERS.length;

let step = -1;
let held: number | null = null;
const listeners = new Set<() => void>();
const emit = () => listeners.forEach((listener) => listener());
const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
};
// The snapshot: both values in one string (a string compares by value, so React re-renders only
// when either changes)
const snapshot = () => `${step}:${held ?? ''}`;
const useStep = () => {
  const [stepPart, heldPart] = useSyncExternalStore(subscribe, snapshot, () => '-1:').split(':');
  const holding = heldPart === '' ? null : Number(heldPart);
  return { active: holding ?? Number(stepPart), holding };
};
const hold = (layer: number | null) => {
  held = layer;
  emit();
};

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ---------- Left: the index of layers, its line filling while that layer is out ----------
export function BrandIndex() {
  const { active, holding } = useStep();
  return (
    <ul className={styles.index} style={vars({ '--step': `${STEP_MS}ms` })}>
      {LAYERS.map(({ name, spec }, i) => (
        <li
          key={name}
          className={styles.indexItem}
          data-on={(active === i && holding === null) || undefined}
          data-full={holding === i || active === ASSEMBLED || undefined}
          onMouseEnter={() => hold(i)}
          onMouseLeave={() => hold(null)}
          onClick={() => hold(holding === i ? null : i)}
        >
          <span className={styles.indexBar} aria-hidden="true">
            <i />
          </span>
          <span className={styles.indexName}>
            <em>{pad(i + 1)}</em> {name}
          </span>
          <small>{spec}</small>
        </li>
      ))}
    </ul>
  );
}

// ---------- Right: the stack ----------
export function BrandStack() {
  const frameRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const { active } = useStep();

  // The cycle: starts once the plates have landed; waits while off screen, in a background tab,
  // or while a layer is held
  useEffect(() => {
    step = -1;
    emit();
    if (reducedMotion()) return;
    const frame = frameRef.current;
    let visible = true;
    let timer = 0;
    const next = () => {
      timer = window.setTimeout(
        () => {
          if (visible && held === null && !document.hidden) {
            step = (step + 1) % (LAYERS.length + 1);
            emit();
          }
          next();
        },
        step === ASSEMBLED ? ASSEMBLED_MS : STEP_MS
      );
    };
    timer = window.setTimeout(() => {
      step = 0;
      emit();
      next();
    }, INTRO_MS);

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (frame) frame.dataset.paused = String(!visible);
    });
    if (frame) observer.observe(frame);
    return () => {
      window.clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  // The stack turns towards the mouse (eased, so it glides), and drifts slowly on its own
  useEffect(() => {
    const frame = frameRef.current;
    const scene = sceneRef.current;
    if (!frame || !scene || reducedMotion()) return;
    let targetX = 0;
    let targetY = 0;
    let x = 0;
    let y = 0;
    let raf = 0;

    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return;
      const box = frame.getBoundingClientRect();
      targetX = Math.max(-1, Math.min(1, (event.clientX - (box.left + box.width / 2)) / (window.innerWidth / 2)));
      targetY = Math.max(-1, Math.min(1, (event.clientY - (box.top + box.height / 2)) / (window.innerHeight / 2)));
    };
    const loop = (time: number) => {
      x += (targetX - x) * 0.05;
      y += (targetY - y) * 0.05;
      const drift = Math.sin(time / 2800) * 4;
      scene.style.setProperty('--rz', `${(x * 12 + drift).toFixed(2)}deg`);
      scene.style.setProperty('--rx', `${(y * -8 + Math.cos(time / 3400) * 2).toFixed(2)}deg`);
      raf = requestAnimationFrame(loop);
    };
    const observer = new IntersectionObserver(([entry]) => {
      cancelAnimationFrame(raf);
      if (entry.isIntersecting) raf = requestAnimationFrame(loop);
    });
    observer.observe(frame);
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener('pointermove', onMove);
    };
  }, []);

  const lifted = active >= 0 && active < ASSEMBLED ? active : null;

  return (
    <div className={styles.stage} aria-hidden="true">
      <div ref={frameRef} className={styles.frame} data-assembled={active === ASSEMBLED || undefined}>
        <div ref={sceneRef} className={styles.scene}>
          {LAYERS.map(({ name, spec, art }, i) => (
            <div
              key={name}
              className={styles.layer}
              data-top={i === 0 || undefined}
              // Lifting a layer opens the stack there, like a drawer: it rises, those above rise more
              data-state={lifted === null ? undefined : i === lifted ? 'on' : i < lifted ? 'above' : 'below'}
              style={vars({ '--z': LAYERS.length - 1 - i, '--i': i })}
            >
              <span className={styles.sheen} />
              <svg className={styles.layerArt} viewBox="0 0 160 160" style={vars({ '--i': i })}>
                {art}
              </svg>
              {/* Turned to face the screen, from the plate's outermost corner – 01 and 03 on the
                  left, 02 and 04 on the right, so the stack sits balanced between them */}
              <span className={styles.label} data-side={i % 2 === 0 ? 'left' : 'right'}>
                <i className={styles.leader} />
                <span className={styles.labelText}>
                  <b>
                    <em>{pad(i + 1)}</em> {name}
                  </b>
                  <small>{spec}</small>
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
