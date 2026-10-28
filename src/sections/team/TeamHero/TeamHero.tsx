'use client';

import Image from 'next/image';
import Badge from '@/components/ui/Badge/Badge';
import { teamHero } from '@/data/team/teamHero';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import styles from './TeamHero.module.css';

// A huge "TE ⬮ AM" with a pill-shaped window in the middle of the word. The section is pinned
// while you scroll (useScrollProgress 'pinned' mode): the pill grows until it fills the screen,
// pushing the letters out, then the caption fades in over the photo.
export default function TeamHero() {
  const { badge, wordStart, wordEnd, image, captionHeading, captionText, scrollHint } = teamHero;
  const ref = useScrollProgress<HTMLElement>({ mode: 'pinned' });

  return (
    <section ref={ref} id="team-hero" className={styles.section}>
      <div className={styles.sticky}>
        <div className={styles.intro}>
          <Badge>{badge}</Badge>
        </div>

        {/* The pill stays centred; the letters hang off its sides, so they get pushed out as it grows */}
        <h1 className={styles.word}>
          <span className={styles.pill}>
            {image ? (
              <Image src={image} alt="" fill sizes="100vw" priority className={styles.photo} />
            ) : (
              <span className={styles.placeholder} />
            )}
          </span>
          <span className={`${styles.letters} ${styles.lettersStart}`}>{wordStart}</span>
          <span className={`${styles.letters} ${styles.lettersEnd}`}>{wordEnd}</span>
        </h1>

        <div className={styles.caption}>
          <p className={styles.captionHeading}>{captionHeading}</p>
          <p className={styles.captionText}>{captionText}</p>
        </div>

        <div className={styles.hint} aria-hidden="true">
          <span>{scrollHint}</span>
          <span className={styles.track}>
            <span className={styles.bar} />
          </span>
        </div>
      </div>
    </section>
  );
}
