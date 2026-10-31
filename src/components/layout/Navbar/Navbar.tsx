'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import Button from '@/components/ui/Button/Button';
import { navAccount, navCta, navDashboard, navLinks, navLogin, servicesMenu } from '@/data/navigation';
import { useSignedIn } from '@/hooks/useSignedIn';
import type { ServicesMenuItem } from '@/types/navigation';
import styles from './Navbar.module.css';
import NavbarServicesMenu from './NavbarServicesMenu';

const SERVICES_PANEL_ID = 'services-panel';
const SERVICES_LIST_ID = 'services-list';
const PHONE_MENU = '(max-width: 900px)'; // same breakpoint as the menu sheet in the CSS
const OPEN_DELAY = 90; // ms the pointer rests on "Services" before the panel opens
const CLOSE_DELAY = 220; // ms to move between "Services" and the panel before it closes

// One service in the phone menu: chrome icon in a tile, title, one-line description
function ServiceRow({ item, onClick }: { item: ServicesMenuItem; onClick: () => void }) {
  const content = (
    <>
      <span className={styles.subIcon}>
        <Image src={item.icon} alt="" width={40} height={40} />
      </span>
      <span className={styles.subText}>
        <span className={styles.subTitle}>{item.title}</span>
        <span className={styles.subDescription}>{item.description}</span>
      </span>
    </>
  );

  return item.href ? (
    <Link href={item.href} className={styles.subItem} onClick={onClick}>
      {content}
    </Link>
  ) : (
    <div className={styles.subItem}>{content}</div>
  );
}

// Desktop: "Services" opens a panel on hover (a click pins it open; Escape, an outside click or
// moving focus away closes it). Phones: the burger opens a menu sheet, where "Services" expands
// into a list. Both remember the page they were opened on, so going to another page closes them.
export default function Navbar() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const servicesButtonRef = useRef<HTMLButtonElement>(null);
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const hoverTimer = useRef<number | undefined>(undefined);
  const openedByHover = useRef(false);

  const [servicesOpenOn, setServicesOpenOn] = useState<string | null>(null);
  const [menuOpenOn, setMenuOpenOn] = useState<string | null>(null);
  const [phoneServicesOpen, setPhoneServicesOpen] = useState(false);
  const servicesOpen = servicesOpenOn === pathname;
  const menuOpen = menuOpenOn === pathname;

  // Login, or – while someone is logged in – Dashboard (staff, SEO writers) / My account (clients)
  const signedIn = useSignedIn();
  const account =
    signedIn === 'checking' || signedIn === 'out'
      ? navLogin
      : signedIn === 'client'
        ? navAccount
        : navDashboard;

  const closeServices = () => {
    openedByHover.current = false;
    setServicesOpenOn(null);
  };
  const closeMenu = () => {
    setMenuOpenOn(null);
    setPhoneServicesOpen(false);
    closeServices();
  };

  // Mouse only: open after a short rest on "Services"; close a moment after the pointer has
  // left both "Services" and the panel – unless a click pinned the panel open
  const hoverIn = (event: React.PointerEvent) => {
    if (event.pointerType !== 'mouse') return;
    window.clearTimeout(hoverTimer.current);
    if (servicesOpen) return;
    hoverTimer.current = window.setTimeout(() => {
      openedByHover.current = true;
      setServicesOpenOn(pathname);
    }, OPEN_DELAY);
  };
  const hoverOut = (event: React.PointerEvent) => {
    if (event.pointerType !== 'mouse') return;
    window.clearTimeout(hoverTimer.current);
    hoverTimer.current = window.setTimeout(() => {
      if (openedByHover.current) closeServices();
    }, CLOSE_DELAY);
  };

  const onServicesClick = () => {
    if (window.matchMedia(PHONE_MENU).matches) {
      setPhoneServicesOpen(!phoneServicesOpen);
      return;
    }
    window.clearTimeout(hoverTimer.current);
    if (openedByHover.current) {
      openedByHover.current = false; // already open from hovering – the click pins it
    } else if (servicesOpen) {
      closeServices();
    } else {
      setServicesOpenOn(pathname);
    }
  };

  // Services panel: close on Escape (focus back on "Services") or a click outside the navbar
  useEffect(() => {
    if (!servicesOpen) return;
    const close = () => {
      openedByHover.current = false;
      setServicesOpenOn(null);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      close();
      servicesButtonRef.current?.focus();
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) close();
    };
    window.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, [servicesOpen]);

  // Phone menu sheet: lock the page behind it, close on Escape, and close if the screen
  // grows past the phone breakpoint (e.g. a tablet turned sideways)
  useEffect(() => {
    if (!menuOpen) return;
    const close = () => {
      setMenuOpenOn(null);
      setPhoneServicesOpen(false);
    };
    const root = document.documentElement;
    const phoneMenu = window.matchMedia(PHONE_MENU);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      close();
      menuToggleRef.current?.focus();
    };
    const onResize = () => {
      if (!phoneMenu.matches) close();
    };
    root.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    phoneMenu.addEventListener('change', onResize);
    return () => {
      root.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
      phoneMenu.removeEventListener('change', onResize);
    };
  }, [menuOpen]);

  return (
    <>
      <header
        ref={headerRef}
        className={styles.navbar}
        onBlur={(event) => {
          // Keyboard: tabbing out of the navbar closes the services panel
          if (servicesOpen && !event.currentTarget.contains(event.relatedTarget as Node)) {
            closeServices();
          }
        }}
      >
        <div className={styles.bar}>
          <Link href="/" className={styles.logo} onClick={closeMenu}>
            <Image
              src="/images/common/bmu-logo-light.webp"
              alt="BMU Marketing"
              width={75}
              height={36}
              priority
            />
          </Link>

          <nav
            aria-label="Main"
            className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}
            data-lenis-prevent // the sheet scrolls on its own on phones
          >
            <ul className={styles.links}>
              {navLinks.map((link, i) => (
                <li
                  key={link.href}
                  style={{ '--i': i } as React.CSSProperties}
                  onPointerEnter={link.menu ? hoverIn : undefined}
                  onPointerLeave={link.menu ? hoverOut : undefined}
                >
                  {link.menu ? (
                    <>
                      <button
                        ref={servicesButtonRef}
                        type="button"
                        className={`${styles.link} ${styles.menuButton} ${servicesOpen ? styles.active : ''}`}
                        aria-expanded={servicesOpen || phoneServicesOpen}
                        aria-controls={`${SERVICES_PANEL_ID} ${SERVICES_LIST_ID}`}
                        onClick={onServicesClick}
                      >
                        <span className={styles.menuLabel} data-label={link.label}>
                          {link.label}
                        </span>
                        <span className={styles.chevron} aria-hidden="true" />
                      </button>

                      {/* Phones: the services, expanding under "Services" in the menu sheet */}
                      <div
                        id={SERVICES_LIST_ID}
                        className={styles.subMenu}
                        data-open={phoneServicesOpen}
                        inert={!phoneServicesOpen}
                      >
                        <ul className={styles.subList}>
                          {servicesMenu.items.map((item, j) => (
                            <li key={item.title} style={{ '--j': j } as React.CSSProperties}>
                              <ServiceRow item={item} onClick={closeMenu} />
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className={`${styles.link} ${pathname === link.href ? styles.active : ''}`}
                      aria-current={pathname === link.href ? 'page' : undefined}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Call Us (phone icon only, to the contact page) and Login – their glow moves only on hover.
                Login becomes Dashboard / My account while someone is logged in. */}
            <div className={styles.actions}>
              <Button
                href={navCta.href}
                size="sm"
                ariaLabel={navCta.label}
                className={styles.cta}
                onClick={closeMenu}
              >
                <Image src="/icons/common/navbar-call-icon.svg" alt="" width={24} height={24} />
              </Button>
              <Button
                href={account.href}
                variant="secondary"
                size="sm"
                className={`${styles.login} ${signedIn === 'checking' ? styles.loginChecking : ''}`}
                onClick={closeMenu}
              >
                {account.label}
              </Button>
            </div>
          </nav>

          {/* Burger: two lines that turn into a cross */}
          <button
            ref={menuToggleRef}
            type="button"
            className={styles.menuToggle}
            data-open={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => {
              if (menuOpen) {
                closeMenu();
              } else {
                closeServices();
                setMenuOpenOn(pathname);
              }
            }}
          >
            <span className={styles.menuIcon} aria-hidden="true" />
          </button>
        </div>

        <NavbarServicesMenu
          id={SERVICES_PANEL_ID}
          open={servicesOpen}
          onClose={closeServices}
          onPointerEnter={hoverIn}
          onPointerLeave={hoverOut}
        />
      </header>

      {/* Dims the page behind the services panel or the phone menu (tapping it closes the menu) */}
      <div
        className={styles.backdrop}
        data-open={servicesOpen || menuOpen}
        data-sheet={menuOpen}
        onClick={closeMenu}
        aria-hidden="true"
      />
    </>
  );
}
