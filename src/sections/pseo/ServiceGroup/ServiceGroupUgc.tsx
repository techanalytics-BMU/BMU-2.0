import artStyles from './ServiceGroupArt.module.css';
import shared from './ServiceGroupPage.module.css';
import { HeroText, Offer, vars, type VibeProps } from './ServiceGroupParts';
import styles from './ServiceGroupUgc.module.css';
import { FORMATS, storyScene } from './ServiceGroupUgcScenes';

export const servicesHeading = 'UGC services, made for the feed';
export const headBeside = false;

// Like, comment and save, down the right side as in the feed
function Reactions({ className }: { className: string }) {
  return (
    <span className={className} aria-hidden="true">
      <svg viewBox="0 0 24 24">
        <path className={styles.liked} d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" />
      </svg>
      <svg viewBox="0 0 24 24">
        <path d="M5 18l1.2-3.4A7 7 0 1 1 9 18.2z" />
      </svg>
      <svg viewBox="0 0 24 24">
        <path d="M7 4h10v16l-5-3.5L7 20z" />
      </svg>
    </span>
  );
}

// The creator's bar: a face, a name and the post's label ("Sponsored", "Paid partnership"…)
function Creator({ tag }: { tag: string }) {
  return (
    <span className={styles.creator} aria-hidden="true">
      <i className={styles.creatorFace} />
      <span className={styles.creatorName}>
        <i />
        <i />
      </span>
      <b className={styles.creatorTag}>{tag}</b>
    </span>
  );
}

// UGC & Creator Marketing, a shelf of the formats creators make – unboxing, review, testimonial,
// tutorial, a day in the life – standing in a gentle curve on a glossy floor, the testimonial in
// front: real people, real reach. Each frame turns towards the middle and dims with distance, and
// keeps its length and its name on its outer edge, where the frames beside it don't cover them.
export function Hero({ page, price }: VibeProps) {
  const middle = Math.floor(FORMATS.length / 2);
  return (
    <header className={styles.hero}>
      <HeroText page={page} price={price} />

      <div className={styles.shelf} aria-hidden="true">
        {FORMATS.map(({ format, time, art }, i) => {
          const featured = i === middle;
          return (
            <div
              key={format}
              className={styles.reel}
              data-pos={i - middle}
              style={vars({ '--i': Math.abs(i - middle) })}
            >
              <span className={styles.reelTime}>{time}</span>
              {featured && <Creator tag="Paid partnership" />}
              <svg className={`${artStyles.art} ${styles.reelScene}`} viewBox="0 0 200 200">
                {art}
              </svg>
              {featured && (
                <span className={styles.reelProgress}>
                  <i />
                </span>
              )}
              <span className={styles.reelFormat}>{format}</span>
            </div>
          );
        })}
      </div>
    </header>
  );
}

// The services as stories, set up like real ones: the feed's progress marks (how far along the row
// each one is), the creator's bar, a scene for the service, and the reactions down the side
export function Offers({ offers }: VibeProps) {
  return (
    <div className={styles.stories}>
      {offers.map((offer, i) => {
        const { tag, art } = storyScene(offer.title, i);
        return (
          <Offer
            key={offer.title}
            item={offer}
            className={`${styles.story} ${shared.rise}`}
            style={vars({ '--i': i + 3 })}
          >
            <span className={styles.progress} aria-hidden="true">
              {offers.map((other, n) => (
                <i key={other.title} data-seen={n <= i || undefined} />
              ))}
            </span>
            <Creator tag={tag} />
            <Reactions className={styles.reactions} />
            <svg className={`${artStyles.art} ${styles.scene}`} viewBox="0 0 200 180" aria-hidden="true">
              {art}
            </svg>
            <h3 className={styles.title}>{offer.title}</h3>
            <p className={styles.text}>{offer.text}</p>
            <span className={styles.meta}>{offer.meta}</span>
          </Offer>
        );
      })}
    </div>
  );
}
