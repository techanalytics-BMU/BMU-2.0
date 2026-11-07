import { site } from '@/data/site';
import shared from './ServiceGroupPage.module.css';
import { HeroText, Offer, vars, type VibeProps } from './ServiceGroupParts';
import styles from './ServiceGroupMarketing.module.css';

export const servicesHeading = 'How you get found';
export const headBeside = true;

// Marketing & Visibility, the moment it pays off: someone searches, and you're the first result,
// with your pin on the map
export function Hero({ page, price }: VibeProps) {
  return (
    <header className={styles.hero}>
      <HeroText page={page} price={price} />

      <div className={styles.panel} aria-hidden="true">
        <div className={styles.search}>
          <svg viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="6.5" />
            <path d="M16 16l4.5 4.5" />
          </svg>
          <span>the best near me</span>
        </div>

        <div className={styles.answers}>
          <ol className={styles.results}>
            <li className={styles.first}>
              <span className={styles.rank}>1</span>
              <span>
                <b>Your business</b>
                <small>yourbrand.com</small>
              </span>
            </li>
            <li>
              <span className={styles.rank}>2</span>
              <span>
                <i />
                <i />
              </span>
            </li>
            <li>
              <span className={styles.rank}>3</span>
              <span>
                <i />
                <i />
              </span>
            </li>
          </ol>

          <svg className={styles.map} viewBox="0 0 220 240" preserveAspectRatio="xMidYMid slice">
            <g className={styles.streets}>
              <path d="M-10 60L230 30M-10 150L230 120M-10 225L230 200M50-10L80 250M150-10L175 250" />
            </g>
            <path className={styles.route} d="M34 214C70 196 58 150 104 142S150 92 162 62" />
            <circle className={styles.start} cx="34" cy="214" r="5" />
            <path
              className={styles.pin}
              d="M162 62c-13-16-20-26-20-36a20 20 0 0 1 40 0c0 10-7 20-20 36z"
            />
            <circle className={styles.pinDot} cx="162" cy="26" r="7" />
          </svg>
        </div>
      </div>
    </header>
  );
}

// The services as a page of results, each with the address it really lives at
export function Offers({ offers }: VibeProps) {
  const domain = new URL(site.url).hostname.replace('www.', '');
  return (
    <ol className={styles.serp}>
      {offers.map((offer, i) => (
        <li key={offer.title} className={shared.rise} style={vars({ '--i': i + 3 })}>
          <Offer item={offer} className={styles.result}>
            <span className={styles.url}>
              {domain}
              {offer.href?.split('/').join(' › ')}
            </span>
            <h3 className={styles.title}>{offer.title}</h3>
            <p className={styles.text}>{offer.text}</p>
            <span className={styles.meta}>{offer.meta}</span>
          </Offer>
        </li>
      ))}
    </ol>
  );
}
