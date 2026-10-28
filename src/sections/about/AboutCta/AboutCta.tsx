'use client';

import Image from 'next/image';
import Button from '@/components/ui/Button/Button';
import { aboutCta } from '@/data/about/aboutCta';
import { useInView } from '@/hooks/useInView';
import styles from './AboutCta.module.css';

// Rings of a small "universe" rising from the horizon (centred on the bottom edge of the viewBox,
// so their lower halves are cut off), one with a lime planet slowly orbiting through it.
const RINGS = [180, 300, 420, 540];

// Closing call to action: the heading's words rise out of masks, then the CTA – all over a lime
// horizon line that draws out from the centre, with faint orbit rings rising behind it.
export default function AboutCta() {
  const { heading, text, cta } = aboutCta;
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.35 });

  return (
    <section ref={ref} id="about-cta" className={styles.section} data-in-view={inView}>
      <svg
        className={styles.rings}
        viewBox="0 0 1200 560"
        preserveAspectRatio="xMidYMax slice"
        aria-hidden="true"
      >
        {RINGS.map((r, i) => (
          <circle
            key={r}
            cx="600"
            cy="560"
            r={r}
            className={styles.ring}
            style={{ '--i': i } as React.CSSProperties}
          />
        ))}
        <g className={styles.orbit}>
          <circle cx={600 - RINGS[2]} cy="560" r="5" className={styles.planet} />
        </g>
      </svg>

      <div className={styles.inner}>
        <h2 className={styles.heading}>
          {heading.split(' ').map((word, i) => (
            <span key={i}>
              <span className={styles.mask}>
                <span className={styles.word} style={{ '--i': i } as React.CSSProperties}>
                  {word}
                </span>
              </span>{' '}
            </span>
          ))}
        </h2>
        <p className={styles.text}>{text}</p>
        <div className={styles.actions}>
          <Button href={cta.href} className={styles.cta}>
            {cta.label}
            <Image src="/icons/common/navbar-cta-icon.svg" alt="" width={28} height={28} />
          </Button>
        </div>
      </div>

      <div className={styles.horizon} aria-hidden="true" />
    </section>
  );
}
