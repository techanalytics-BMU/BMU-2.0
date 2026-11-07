import shared from './ServiceGroupPage.module.css';
import { HeroText, Offer, pad, vars, type VibeProps } from './ServiceGroupParts';
import styles from './ServiceGroupContent.module.css';

export const servicesHeading = 'On the shot list';
export const headBeside = false;

// Content & Production, the view through the camera: the whole screen is the viewfinder, with the
// words framed in the middle of the shot
export function Hero({ page, price }: VibeProps) {
  return (
    <header className={styles.hero}>
      <div className={styles.viewfinder} aria-hidden="true">
        <span className={`${styles.corner} ${styles.topLeft}`} />
        <span className={`${styles.corner} ${styles.topRight}`} />
        <span className={`${styles.corner} ${styles.bottomLeft}`} />
        <span className={`${styles.corner} ${styles.bottomRight}`} />
        <span className={styles.thirds} />
        <span className={styles.rec}>
          <i />
          REC
        </span>
        <span className={styles.format}>16:9</span>
        <span className={styles.timecode}>00:00:24:12</span>
        <span className={styles.level}>
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
        </span>
      </div>

      <HeroText page={page} price={price} className={styles.words} />
    </header>
  );
}

// The services as frames on a strip of film, each one a scene
export function Offers({ offers }: VibeProps) {
  return (
    <div className={styles.strip}>
      {offers.map((offer, i) => (
        <Offer
          key={offer.title}
          item={offer}
          className={`${styles.frame} ${shared.rise}`}
          style={vars({ '--i': i + 3 })}
        >
          <span className={styles.scene}>
            <span>Scene {pad(i + 1)}</span>
            <span>Take 1</span>
          </span>
          <h3 className={styles.title}>{offer.title}</h3>
          <p className={styles.text}>{offer.text}</p>
          <span className={styles.meta}>{offer.meta}</span>
        </Offer>
      ))}
    </div>
  );
}
