import shared from './ServiceGroupPage.module.css';
import { HeroText, Offer, pad, vars, type VibeProps } from './ServiceGroupParts';
import styles from './ServiceGroupBrand.module.css';

const SHADES = ['#ffffff', '#b5bac2', '#6d7279', '#2a2d31'];

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

// Brand & Design, a page from a brand guidelines book: a mark drawn on its construction lines, the
// way a logo is really built, with its type and colours beside it
export function Hero({ page, price }: VibeProps) {
  return (
    <header className={styles.hero}>
      <HeroText page={page} price={price} />

      <div className={styles.plate} aria-hidden="true">
        <span className={`${styles.crop} ${styles.topLeft}`} />
        <span className={`${styles.crop} ${styles.topRight}`} />
        <span className={`${styles.crop} ${styles.bottomLeft}`} />
        <span className={`${styles.crop} ${styles.bottomRight}`} />

        <svg className={styles.mark} viewBox="0 0 400 400">
          <g className={styles.guides}>
            <path pathLength={1} d="M0 200H400" />
            <path pathLength={1} d="M200 0V400" />
            <path pathLength={1} d="M40 40L360 360" />
            <path pathLength={1} d="M360 40L40 360" />
            <rect pathLength={1} x="60" y="60" width="280" height="280" />
            <circle pathLength={1} cx="200" cy="200" r="140" />
            <circle pathLength={1} cx="200" cy="130" r="70" />
            <circle pathLength={1} cx="200" cy="270" r="70" />
          </g>
          {/* The mark itself: two circles and a stem, cut from the lines above */}
          <path
            className={styles.shape}
            d="M130 60H200A70 70 0 0 1 244 184A70 70 0 0 1 200 340H130Z"
          />
          <circle className={styles.dot} cx="200" cy="200" r="4" />
          <text className={styles.note} x="344" y="56">
            x
          </text>
          <text className={styles.note} x="12" y="196">
            Clear space
          </text>
        </svg>

        <div className={styles.spec}>
          <span className={styles.specimen}>Aa</span>
          <ul className={styles.shades}>
            {SHADES.map((shade) => (
              <li key={shade} style={{ background: shade }} />
            ))}
          </ul>
        </div>
      </div>
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
