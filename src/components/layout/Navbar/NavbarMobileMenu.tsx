'use client';

import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button/Button';
import { navCta, navLinks, servicesMenu } from '@/data/navigation';
import { site } from '@/data/site';
import type { NavLink } from '@/types/navigation';
import styles from './NavbarMobileMenu.module.css';

type Props = {
  id: string;
  open: boolean;
  pathname: string;
  account: NavLink; // Login, or Dashboard / My account while someone is logged in
  onClose: () => void;
};

// Line icons for the page links (by href); any other page gets a small dot
const PAGE_ICONS: Record<string, React.ReactNode> = {
  '/about': (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 11v5M12 7.6h.01" />
    </>
  ),
  '/work': (
    <>
      <rect x="3.5" y="7" width="17" height="12.5" rx="2.5" />
      <path d="M9 7V5.6A1.6 1.6 0 0 1 10.6 4h2.8A1.6 1.6 0 0 1 15 5.6V7M3.5 12.5h17" />
    </>
  ),
  '/team': (
    <>
      <circle cx="9.5" cy="8.5" r="3" />
      <path d="M4 19a5.5 5.5 0 0 1 11 0M16 5.8a3 3 0 0 1 0 5.4M17.6 14.4A5.5 5.5 0 0 1 20.5 19" />
    </>
  ),
};

const isCurrent = (pathname: string, href: string) =>
  pathname === href || pathname.startsWith(`${href}/`);

// Phones and tablets: the menu fills the screen, opening as a circle that grows from the burger.
// Everything is in view at once, nothing folded away: the pages as one glass list (an icon, the
// name and a line on what's there), the six service groups as a grid of tiles with their chrome
// icons, and a dock at the bottom – "Let's talk", one-tap call / WhatsApp / email, and Login.
// Stays mounted so it can animate; `inert` keeps it out of reach while closed.
export default function NavbarMobileMenu({ id, open, pathname, account, onClose }: Props) {
  const pages = navLinks.filter((link) => !link.menu);
  const services = navLinks.find((link) => link.menu);
  let step = 0; // entrance order

  return (
    <div id={id} className={styles.menu} data-open={open} inert={!open}>
      <div className={styles.scroll} data-lenis-prevent>
        <p className={styles.status} style={{ '--i': step++ } as React.CSSProperties}>
          <span className={styles.statusDot} aria-hidden="true" />
          Reply within one working day
        </p>

        <nav aria-label="Menu">
          <ul className={styles.pages}>
            {pages.map((link) => {
              const current = isCurrent(pathname, link.href);
              return (
                <li key={link.href} style={{ '--i': step++ } as React.CSSProperties}>
                  <Link
                    href={link.href}
                    className={styles.page}
                    aria-current={pathname === link.href ? 'page' : undefined}
                    data-current={current || undefined}
                    onClick={onClose}
                  >
                    <span className={styles.pageIcon}>
                      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                        {PAGE_ICONS[link.href] ?? <circle cx="12" cy="12" r="2.5" />}
                      </svg>
                    </span>
                    <span className={styles.pageText}>
                      <span className={styles.pageTitle}>{link.label}</span>
                      {link.description && (
                        <span className={styles.pageHint}>{link.description}</span>
                      )}
                    </span>
                    {current && <span className={styles.currentDot} aria-hidden="true" />}
                  </Link>
                </li>
              );
            })}
          </ul>

          {services && (
            <>
              <div className={styles.sectionHead} style={{ '--i': step++ } as React.CSSProperties}>
                <p className={styles.sectionLabel}>{services.label}</p>
                <Link href={services.href} className={styles.sectionLink} onClick={onClose}>
                  All services
                </Link>
              </div>
              <ul className={styles.services}>
                {servicesMenu.items.map((item, j) => (
                  <li key={item.title} style={{ '--i': step + j * 0.5 } as React.CSSProperties}>
                    <Link
                      href={item.href ?? services.href}
                      className={styles.service}
                      data-current={(item.href && isCurrent(pathname, item.href)) || undefined}
                      onClick={onClose}
                    >
                      <Image src={item.icon} alt="" width={56} height={56} className={styles.serviceIcon} />
                      <span className={styles.serviceTitle}>{item.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </nav>
      </div>

      {/* The dock: always at the bottom, the page scrolling under it */}
      <div className={styles.dock}>
        <Button href={navCta.href} className={styles.cta} onClick={onClose}>
          <span className={styles.statusDot} aria-hidden="true" />
          {navCta.label}
        </Button>
        <div className={styles.quick}>
          <a href={site.phoneHref} className={styles.quickButton} aria-label={`Call ${site.phone}`}>
            <Image src="/icons/common/phone.svg" alt="" width={18} height={18} />
          </a>
          <a
            href={site.whatsapp}
            className={styles.quickButton}
            aria-label="WhatsApp us"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/icons/social/whatsapp.svg" alt="" width={18} height={18} />
          </a>
          <a href={`mailto:${site.email}`} className={styles.quickButton} aria-label={`Email ${site.email}`}>
            <Image src="/icons/common/mail.svg" alt="" width={18} height={18} />
          </a>
          <Link href={account.href} className={styles.account} onClick={onClose}>
            {account.label}
          </Link>
        </div>
      </div>
    </div>
  );
}
