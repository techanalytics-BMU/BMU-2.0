import Image from 'next/image';
import Link from 'next/link';
import { footer } from '@/data/footer';
import type { FooterLink } from '@/types/footer';
import styles from './Footer.module.css';

const CONTACT_ICONS = {
  address: '/icons/common/location.svg',
  email: '/icons/common/mail.svg',
  phone: '/icons/common/phone.svg',
};

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

// Site footer – shown on every page (added in src/app/layout.tsx)
export default function Footer() {
  const { tagline, contact, social, columns, copyright, legal } = footer;

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Image
            src="/images/common/bmu-logo-light.webp"
            alt="BMU Marketing"
            width={116}
            height={56}
            className={styles.logo}
          />
          <p className={styles.tagline}>{tagline}</p>

          <ul className={styles.contact}>
            {contact.map((item) => (
              <li key={item.type} className={styles.contactItem}>
                <Image src={CONTACT_ICONS[item.type]} alt="" width={18} height={18} />
                <FooterItem item={item} />
              </li>
            ))}
          </ul>

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
      </div>

      <div className={styles.bottom}>
        <p>{copyright}</p>
        <ul className={styles.legal}>
          {legal.map((item) => (
            <li key={item.label}>
              <FooterItem item={item} className={styles.link} />
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
