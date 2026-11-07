import shared from './ServiceGroupPage.module.css';
import { HeroText, Offer, vars, type VibeProps } from './ServiceGroupParts';
import styles from './ServiceGroupSocial.module.css';

export const servicesHeading = 'Tell us what you need';
export const headBeside = true;

// What each square of the grid holds, like any real feed: photos, reels, quotes and carousels
const POSTS = ['photo', 'reel', 'quote', 'reel', 'carousel', 'photo', 'quote', 'photo', 'reel'];

const GLYPHS: Record<string, React.ReactNode> = {
  photo: <path d="M4 18l5-6 4 4 3-3 4 5z" />,
  reel: <path d="M9 6.5v11l9-5.5z" />,
  quote: <path d="M6 15c0-4 2-7 5-8l1 1.5c-2 1-3 2.5-3 3.5h2v5H6zm8 0c0-4 2-7 5-8l1 1.5c-2 1-3 2.5-3 3.5h2v5h-5z" />,
  carousel: <path d="M5 7h10v10H5zM17 9h2v10H9v-1h8z" />,
};

// Social & Personal Brand, a profile: the page opens like the account you'd build, with a face at
// the top and a planned grid of posts beside it
export function Hero({ page, price }: VibeProps) {
  return (
    <header className={styles.hero}>
      <div className={styles.profile}>
        <span className={styles.avatar} aria-hidden="true">
          <span className={styles.face} />
        </span>
        <HeroText page={page} price={price} />
      </div>

      <ul className={styles.grid} aria-hidden="true">
        {POSTS.map((post, i) => (
          <li key={i} className={styles.post} style={vars({ '--i': i })} data-post={post}>
            <svg viewBox="0 0 24 24">{GLYPHS[post]}</svg>
          </li>
        ))}
      </ul>
    </header>
  );
}

// The services as a conversation: what you'd ask for, and what we'd say back
export function Offers({ offers }: VibeProps) {
  return (
    <div className={styles.thread}>
      {offers.map((offer, i) => (
        <Offer
          key={offer.title}
          item={offer}
          className={`${styles.exchange} ${shared.rise}`}
          style={vars({ '--i': i + 3 })}
        >
          <h3 className={styles.ask}>{offer.title}</h3>
          <div className={styles.reply}>
            <p className={styles.text}>{offer.text}</p>
            <span className={styles.meta}>{offer.meta}</span>
          </div>
        </Offer>
      ))}
    </div>
  );
}
