'use client';

import Badge from '@/components/ui/Badge/Badge';
import Button from '@/components/ui/Button/Button';
import { landingHero } from '@/data/landing/landingHero';
import { useParticleField } from '@/hooks/useParticleField';
import styles from './LandingHero.module.css';

// Background: zig-zagging particles (canvas, see src/hooks/useParticleField.ts);
// stars, light beams and the green planet arch are drawn in LandingHero.module.css.
// The text rises in on page load (CSS animation).
export default function LandingHero() {
  const { badge, headingLine1, headingLine2, description, primaryCta, secondaryCta } = landingHero;
  const particlesRef = useParticleField<HTMLCanvasElement>();

  return (
    <section id="hero" className={styles.hero}>
      <canvas ref={particlesRef} className={styles.particles} aria-hidden="true" />

      <div className={styles.content}>
        <div className={styles.rise} style={{ '--delay': '0.1s' } as React.CSSProperties}>
          <Badge>{badge}</Badge>
        </div>

        <h1 className={styles.heading}>
          <span
            className={`${styles.headingLine1} ${styles.rise}`}
            style={{ '--delay': '0.25s' } as React.CSSProperties}
          >
            {headingLine1}
            <span className={styles.accent}>.</span>
          </span>
          <span
            className={`${styles.headingLine2} ${styles.rise}`}
            style={{ '--delay': '0.4s' } as React.CSSProperties}
          >
            {headingLine2}.
          </span>
        </h1>

        <p
          className={`${styles.description} ${styles.rise}`}
          style={{ '--delay': '0.55s' } as React.CSSProperties}
        >
          {description}
        </p>

        <div
          className={`${styles.actions} ${styles.rise}`}
          style={{ '--delay': '0.7s' } as React.CSSProperties}
        >
          <Button href={primaryCta.href}>{primaryCta.label}</Button>
          <Button href={secondaryCta.href} variant="secondary">
            {secondaryCta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}