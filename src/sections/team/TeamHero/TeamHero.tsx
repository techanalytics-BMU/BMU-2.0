'use client';

import Image from 'next/image';
import { teamHero } from '@/data/team/teamHero';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import styles from './TeamHero.module.css';

// A huge "TEAM". The section is pinned while you scroll (useScrollProgress 'pinned' mode): a
// pill-shaped window opens in the middle of the word, parting "TE" and "AM", and grows until it
// fills the screen, pushing the letters out; then the caption fades in over the photo.
export default function TeamHero() {
  const { title, wordStart, wordEnd, image, captionHeading, captionText } = teamHero;
  const ref = useScrollProgress<HTMLElement>({ mode: 'pinned' });

  return (
    <section ref={ref} id="team-hero" className={styles.section}>
      <div className={styles.sticky}>
        {/* The pill stays centred; the letters hang off its sides, so they get pushed out as it
            grows. The word is drawing only: the heading itself is the hidden h1, so Google and screen
            readers get a real heading, not the pieces of the word ("TE", "AM"). */}
        <div className={styles.word}>
          <h1 className={styles.srOnly}>{title}</h1>
          <span className={styles.pill} aria-hidden="true">
            {image ? (
              <Image src={image} alt="" fill sizes="100vw" priority className={styles.photo} />
            ) : (
              <span className={styles.placeholder} />
            )}
          </span>
          <span className={`${styles.letters} ${styles.lettersStart}`} aria-hidden="true">
            {wordStart}
          </span>
          <span className={`${styles.letters} ${styles.lettersEnd}`} aria-hidden="true">
            {wordEnd}
          </span>
        </div>

        <div className={styles.caption}>
          <p className={styles.captionHeading}>{captionHeading}</p>
          <p className={styles.captionText}>{captionText}</p>
        </div>
      </div>
    </section>
  );
}
