import Image from 'next/image';
import Link from 'next/link';
import { footer } from '@/data/footer';
import { serviceAreas } from '@/data/serviceAreas';
import type { FooterLink } from '@/types/footer';
import styles from './Footer.module.css';
import FooterServiceAreas from './FooterServiceAreas';
import FooterSignature from './FooterSignature';
import FooterSubscribe from './FooterSubscribe';

// Link when an href is set in src/data/footer.ts, plain text until then
function FooterItem({ item, className }: { item: FooterLink; className?: string }) {
  return item.href ? (
    <Link href={item.href} className={className}>
      {item.label}
    </Link>
  ) : (
    <span className={className}>{item.label}</span>
  );
}

// Site footer – shown on every page (added in src/app/layout.tsx). It continues the look of the
// free-trial section: brand + social · Site map · Resources · newsletter card → tabs block →
// the wordmark dissolving into a green horizon → bottom line.
export default function Footer() {
  const { tagline, social, columns, join, wordmark, backToTop, bottom } = footer;

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo} aria-label="BMU Marketing – home">
              <Image
                src="/images/common/bmu-logo-light.webp"
                alt="BMU Marketing"
                width={112}
                height={54}
              />
            </Link>
            <p className={styles.tagline}>{tagline}</p>

            <ul className={styles.social}>
              {social.map((item) => {
                const icon = (
                  <Image src={`/icons/social/${item.platform}.svg`} alt="" width={16} height={16} />
                );
                return (
                  <li key={item.platform}>
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.label}
                        className={styles.socialButton}
                      >
                        {icon}
                      </a>
                    ) : (
                      <span role="img" aria-label={item.label} className={styles.socialButton}>
                        {icon}
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title} className={styles.column}>
              <h2 className={styles.columnTitle}>{column.title}</h2>
              <ul className={styles.links}>
                {column.links.map((link) => (
                  <li key={link.label}>
                    <FooterItem item={link} className={styles.link} />
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className={styles.join}>
            <h2 className={styles.columnTitle}>{join.title}</h2>
            <p className={styles.joinHeading}>{join.heading}</p>
            <p className={styles.joinText}>{join.description}</p>
            <FooterSubscribe newsletter={join.newsletter} />
          </div>
        </div>

        <FooterServiceAreas groups={serviceAreas.groups} />
      </div>

      <FooterSignature wordmark={wordmark} backToTop={backToTop} />

      <p className={styles.bottom}>
        {bottom.copyright} · {bottom.location}
      </p>
    </footer>
  );
}
