import shared from './ServiceGroupPage.module.css';
import { HeroText, Offer, pad, vars, type VibeProps } from './ServiceGroupParts';
import styles from './ServiceGroupBrand.module.css';
import { BrandIndex, BrandStack } from './ServiceGroupBrandLayers';

export const servicesHeading = 'The system, plate by plate';
export const headBeside = false;

// A fine line drawing on each plate: the system, the mark, the layouts
const PLATE_ART = [
  <>
    <circle cx="40" cy="40" r="34" />
    <circle cx="40" cy="40" r="22" />
    <circle cx="40" cy="40" r="10" />
    <path d="M0 40H80M40 0V80" />
  </>,
  <>
    <rect x="6" y="6" width="68" height="68" />
    <path d="M26 20H44A10 10 0 0 1 50 38A11 11 0 0 1 44 60H26Z" />
  </>,
  <>
    <rect x="4" y="10" width="42" height="60" />
    <rect x="52" y="10" width="24" height="26" />
    <rect x="52" y="44" width="24" height="26" />
    <path d="M12 24H38M12 34H30" />
  </>,
];

// Brand & Design, the system taken apart: its four layers – mark, type, colour, grid – lifted off
// one another like glass plates (the moving parts are in ServiceGroupBrandLayers.tsx). They fly in
// and draw themselves, then take turns sliding out of the stack while the index under the words
// keeps time; after the last, the stack presses into one card and bursts open again. The stack turns
// towards the mouse, and pointing at a layer in the index pulls that one out.
export function Hero({ page, price }: VibeProps) {
  return (
    <header className={styles.hero}>
      <HeroText page={page} price={price}>
        <BrandIndex />
      </HeroText>
      <BrandStack />
    </header>
  );
}

// The services as numbered plates, trimmed with printers' crop marks
export function Offers({ offers }: VibeProps) {
  return (
    <div className={styles.plates}>
      {offers.map((offer, i) => (
        <Offer
          key={offer.title}
          item={offer}
          className={`${styles.card} ${shared.rise}`}
          style={vars({ '--i': i + 3 })}
        >
          <span className={`${styles.crop} ${styles.topLeft}`} aria-hidden="true" />
          <span className={`${styles.crop} ${styles.bottomRight}`} aria-hidden="true" />
          <span className={styles.number}>Plate {pad(i + 1)}</span>
          <svg className={styles.art} viewBox="0 0 80 80" aria-hidden="true">
            {PLATE_ART[i % PLATE_ART.length]}
          </svg>
          <h3 className={styles.title}>{offer.title}</h3>
          <p className={styles.text}>{offer.text}</p>
          <span className={styles.meta}>{offer.meta}</span>
        </Offer>
      ))}
    </div>
  );
}
