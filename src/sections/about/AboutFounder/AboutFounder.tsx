'use client';

import Image from 'next/image';
import Badge from '@/components/ui/Badge/Badge';
import { aboutFounder } from '@/data/about/aboutFounder';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import AboutRevealText from '../AboutRevealText/AboutRevealText';
import styles from './AboutFounder.module.css';

// A note from the founder: pill badge, then the quote large over a huge faint quote mark. As you
// scroll to it its words light up one by one (--progress → --reveal) – the key phrases in lime,
// underlined as they light. Once it's all lit, a lime horizon line draws out from the middle with
// the signature sitting on it as a glass chip (the free-trial section's horizon).
export default function AboutFounder() {
  const { badge, quote, name, place } = aboutFounder;
  const ref = useScrollProgress<HTMLElement>({ distance: 1.1 });

  return (
    <section ref={ref} id="about-founder" className={styles.section}>
      <figure className={styles.figure}>
        <Badge>{badge}</Badge>

        <blockquote className={styles.quote}>
          <span className={styles.mark} aria-hidden="true">
            “
          </span>
          <AboutRevealText text={quote} />
        </blockquote>

        <figcaption className={styles.horizon}>
          <span className={styles.signature}>
            <span className={styles.avatar}>
              <Image
                src="/images/common/bmu-logo-light.webp"
                alt="BMU Marketing"
                width={556}
                height={268}
                className={styles.logo}
              />
            </span>
            <span className={styles.name}>{name}</span>
            <span className={styles.place}>{place}</span>
          </span>
        </figcaption>
      </figure>
    </section>
  );
}
