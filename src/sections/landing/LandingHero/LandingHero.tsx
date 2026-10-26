import Badge from '@/components/ui/Badge/Badge';
import Button from '@/components/ui/Button/Button';
import { landingHero } from '@/data/landing/landingHero';
import styles from './LandingHero.module.css';

// Background (stars, light beams, green planet glow) is drawn in LandingHero.module.css
export default function LandingHero() {
  const { badge, headingLine1, headingLine2, description, primaryCta, secondaryCta } = landingHero;

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.content}>
        <Badge>{badge}</Badge>

        <h1 className={styles.heading}>
          <span className={styles.headingLine1}>
            {headingLine1}
            <span className={styles.accent}>.</span>
          </span>
          <span className={styles.headingLine2}>{headingLine2}.</span>
        </h1>

        <p className={styles.description}>{description}</p>

        <div className={styles.actions}>
          <Button href={primaryCta.href}>{primaryCta.label}</Button>
          <Button href={secondaryCta.href} variant="secondary">
            {secondaryCta.label}
          </Button>
        </div>
      </div>
    </section>
  );
}
