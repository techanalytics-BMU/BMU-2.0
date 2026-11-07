import shared from './ServiceGroupPage.module.css';
import { HeroText, Offer, vars, type VibeProps } from './ServiceGroupParts';
import styles from './ServiceGroupUgc.module.css';

export const servicesHeading = 'Made for the feed';
export const headBeside = false;

// One phone: a person talking to camera, with the feed's buttons down the side
function Phone({ className = '' }: { className?: string }) {
  return (
    <div className={`${styles.phone} ${className}`}>
      <span className={styles.person} />
      <span className={styles.side}>
        <i />
        <i />
        <i />
      </span>
      <span className={styles.caption}>
        <i />
        <i />
      </span>
    </div>
  );
}

// UGC & Creator Marketing, the feed itself: three phones, each a real person with something to say
export function Hero({ page, price }: VibeProps) {
  return (
    <header className={styles.hero}>
      <HeroText page={page} price={price} />

      <div className={styles.phones} aria-hidden="true">
        <Phone className={styles.left} />
        <Phone className={styles.right} />
        <Phone className={styles.middle} />
      </div>
    </header>
  );
}

// The services as a row of stories: the same tall shape as the videos, with the feed's progress
// marks across the top showing how far along the row each one is
export function Offers({ offers }: VibeProps) {
  return (
    <div className={styles.stories}>
      {offers.map((offer, i) => (
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
          <h3 className={styles.title}>{offer.title}</h3>
          <p className={styles.text}>{offer.text}</p>
          <span className={styles.meta}>{offer.meta}</span>
        </Offer>
      ))}
    </div>
  );
}
