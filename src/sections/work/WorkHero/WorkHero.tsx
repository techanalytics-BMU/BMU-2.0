import Image from 'next/image';
import Button from '@/components/ui/Button/Button';
import { workHero } from '@/data/work/workHero';
import type { WorkClientLogo } from '@/types/work';
import styles from './WorkHero.module.css';

// The client's logo once it's added, its name in the meantime
function ClientLogo({ client }: { client: WorkClientLogo }) {
  if (client.logo) {
    return (
      <Image src={client.logo} alt={client.name} width={140} height={40} className={styles.logo} />
    );
  }
  return <span className={styles.wordmark}>{client.name}</span>;
}

// Work hero: the heading under a light from above, over the site's planet (as on the landing and
// service pages). The client names run along the planet's surface.
export default function WorkHero() {
  const { heading, subheading, cta, clientsLabel, clients } = workHero;

  return (
    <section id="work-hero" className={styles.section}>
      <div className={styles.grid} aria-hidden="true" />

      <div className={styles.inner}>
        <h1
          className={`${styles.heading} ${styles.rise}`}
          style={{ '--delay': '0.1s' } as React.CSSProperties}
        >
          {heading}
        </h1>
        <p
          className={`${styles.subheading} ${styles.rise}`}
          style={{ '--delay': '0.25s' } as React.CSSProperties}
        >
          {subheading}
        </p>
        <div className={styles.rise} style={{ '--delay': '0.4s' } as React.CSSProperties}>
          <Button href={cta.href} variant="accent">
            {cta.label}
          </Button>
        </div>
      </div>

      <div className={styles.space} aria-hidden="true">
        <div className={styles.planet} />
      </div>

      <div
        className={`${styles.clients} ${styles.rise}`}
        style={{ '--delay': '0.55s' } as React.CSSProperties}
      >
        <p className={styles.clientsLabel}>{clientsLabel}</p>
        {/* Two copies side by side; the track slides left by one copy, then loops seamlessly */}
        <div className={styles.marquee}>
          <ul className={styles.names}>
            {[0, 1].map((copy) =>
              clients.map((client, i) => (
                <li key={`${copy}-${i}`} aria-hidden={copy === 1 || undefined}>
                  <ClientLogo client={client} />
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}
