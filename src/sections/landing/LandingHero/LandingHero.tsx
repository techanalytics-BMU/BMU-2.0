'use client';

import Badge from '@/components/ui/Badge/Badge';
import Button from '@/components/ui/Button/Button';
import { landingHero } from '@/data/landing/landingHero';
import { landingHeroEarth } from '@/data/landing/landingHeroEarth';
import { useEarthGlobe } from '@/hooks/useEarthGlobe';
import { useParticleField } from '@/hooks/useParticleField';
import styles from './LandingHero.module.css';

// Background: zig-zagging particles (canvas, see src/hooks/useParticleField.ts) and, rising from
// the bottom, a dotted earth turning slowly (land drifting right to left), with city lights and
// glowing arcs from Bengaluru (canvas, see src/hooks/useEarthGlobe.ts). One button: "Explore now". Stars, light beams and the planet's lime rim are drawn in
// LandingHero.module.css. The text rises in on page load (CSS animation).
export default function LandingHero() {
  const { badge, headingLine1, headingLine2, description, cta } = landingHero;
  const particlesRef = useParticleField<HTMLCanvasElement>();
  const earthRef = useEarthGlobe<HTMLCanvasElement>({ earth: landingHeroEarth });

  return (
    <section id="hero" className={styles.hero}>
      <canvas ref={particlesRef} className={styles.particles} aria-hidden="true" />
      <canvas ref={earthRef} className={styles.earth} aria-hidden="true" />

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
            <span className="text-accent">.</span>
          </span>
          <span
            className={`${styles.headingLine2} ${styles.rise}`}
            style={{ '--delay': '0.4s' } as React.CSSProperties}
          >
            {/* inner span: the line's rise-in animation would otherwise replace the sheen */}
            <span className="text-accent">{headingLine2}.</span>
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
          <Button href={cta.href}>{cta.label}</Button>
        </div>
      </div>
    </section>
  );
}