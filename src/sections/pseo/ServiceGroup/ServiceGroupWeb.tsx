import shared from './ServiceGroupPage.module.css';
import { HeroText, Offer, vars, type VibeProps } from './ServiceGroupParts';
import styles from './ServiceGroupWeb.module.css';

export const servicesHeading = 'What we build';
export const headBeside = true;

function Dots() {
  return (
    <span className={styles.dots}>
      <i />
      <i />
      <i />
    </span>
  );
}

// Web & AI, a live product: a browser rising out of the page, a website on its screen and a chatbot
// taking an enquiry in the corner
export function Hero({ page, price }: VibeProps) {
  return (
    <header className={styles.hero}>
      <HeroText page={page} price={price} className={styles.words} />

      <div className={styles.window} aria-hidden="true">
        <div className={styles.bar}>
          <Dots />
          <span className={styles.address}>yourbrand.com</span>
        </div>
        <div className={styles.screen}>
          <div className={styles.site}>
            <div className={styles.siteNav}>
              <i className={styles.logo} />
              <i />
              <i />
              <i />
            </div>
            <i className={styles.lineLong} />
            <i className={styles.lineShort} />
            <i className={styles.button} />
            <div className={styles.tiles}>
              <i />
              <i />
              <i />
            </div>
          </div>

          <div className={styles.chat}>
            <p className={styles.bot}>Hi! What can I help you with?</p>
            <p className={styles.visitor}>A quote for a new website</p>
            <p className={styles.bot}>Happy to help. What’s your name?</p>
          </div>
        </div>
      </div>
    </header>
  );
}

// A small picture of each service: the site on two screens, or the chatbot's conversation
function Preview({ index }: { index: number }) {
  if (index % 2 === 0) {
    return (
      <div className={styles.devices} aria-hidden="true">
        <span className={styles.desktop}>
          <i />
          <i />
          <i />
        </span>
        <span className={styles.phone}>
          <i />
          <i />
        </span>
      </div>
    );
  }
  return (
    <div className={styles.bubbles} aria-hidden="true">
      <i />
      <i />
      <i />
    </div>
  );
}

// The services as product windows
export function Offers({ offers }: VibeProps) {
  return (
    <div className={styles.windows}>
      {offers.map((offer, i) => (
        <Offer
          key={offer.title}
          item={offer}
          className={`${styles.card} ${shared.rise}`}
          style={vars({ '--i': i + 3 })}
        >
          <div className={styles.bar}>
            <Dots />
          </div>
          <Preview index={i} />
          <div className={styles.details}>
            <h3 className={styles.title}>{offer.title}</h3>
            <p className={styles.text}>{offer.text}</p>
            <span className={styles.meta}>{offer.meta}</span>
          </div>
        </Offer>
      ))}
    </div>
  );
}
