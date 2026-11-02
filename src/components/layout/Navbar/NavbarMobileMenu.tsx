'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
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

const pad = (n: number) => String(n).padStart(2, '0');

// Phones and tablets: the menu fills the screen, opening as a circle that grows from the burger.
// Big numbered links rise in one after another; "Services" opens the six service groups in place.
// The buttons and the phone number and email sit at the bottom. Stays mounted so it can animate;
// `inert` keeps it out of reach while closed. (Desktop never shows it – see the CSS.)
export default function NavbarMobileMenu({ id, open, pathname, account, onClose }: Props) {
  const [servicesOpen, setServicesOpen] = useState(false);
  // However the menu closes (a link, the burger, Escape), it opens next time with Services folded
  const [wasOpen, setWasOpen] = useState(open);
  if (open !== wasOpen) {
    setWasOpen(open);
    if (!open) setServicesOpen(false);
  }
  const close = () => {
    setServicesOpen(false);
    onClose();
  };

  return (
    <div
      id={id}
      className={styles.menu}
      data-open={open}
      inert={!open}
      data-lenis-prevent // the menu scrolls on its own
    >
      <nav aria-label="Menu" className={styles.nav}>
        <ul className={styles.links}>
          {navLinks.map((link, i) => (
            <li key={link.href} className={styles.item} style={{ '--i': i } as React.CSSProperties}>
              {link.menu ? (
                <>
                  <button
                    type="button"
                    className={styles.link}
                    aria-expanded={servicesOpen}
                    aria-controls={`${id}-services`}
                    onClick={() => setServicesOpen(!servicesOpen)}
                  >
                    <span className={styles.index}>{pad(i + 1)}</span>
                    <span className={styles.label}>{link.label}</span>
                    <span className={styles.plus} aria-hidden="true" />
                  </button>

                  {/* The six service groups, opening in place */}
                  <div
                    id={`${id}-services`}
                    className={styles.services}
                    data-open={servicesOpen}
                    inert={!servicesOpen}
                  >
                    <ul className={styles.serviceList}>
                      {servicesMenu.items.map((item, j) => (
                        <li key={item.title} style={{ '--j': j } as React.CSSProperties}>
                          <Link href={item.href ?? link.href} className={styles.service} onClick={close}>
                            <span className={styles.serviceIcon}>
                              <Image src={item.icon} alt="" width={40} height={40} />
                            </span>
                            <span className={styles.serviceText}>
                              <span className={styles.serviceTitle}>{item.title}</span>
                              <span className={styles.serviceDescription}>{item.description}</span>
                            </span>
                          </Link>
                        </li>
                      ))}
                      <li style={{ '--j': servicesMenu.items.length } as React.CSSProperties}>
                        <Link href={link.href} className={styles.allServices} onClick={close}>
                          All services
                        </Link>
                      </li>
                    </ul>
                  </div>
                </>
              ) : (
                <Link
                  href={link.href}
                  className={styles.link}
                  aria-current={pathname === link.href ? 'page' : undefined}
                  onClick={close}
                >
                  <span className={styles.index}>{pad(i + 1)}</span>
                  <span className={styles.label}>{link.label}</span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.footer} style={{ '--i': navLinks.length } as React.CSSProperties}>
        <div className={styles.buttons}>
          <Button href={navCta.href} onClick={close}>
            {navCta.label}
          </Button>
          <Button href={account.href} variant="secondary" onClick={close}>
            {account.label}
          </Button>
        </div>
        <div className={styles.contact}>
          <a href={site.phoneHref}>{site.phone}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </div>
      </div>
    </div>
  );
}
