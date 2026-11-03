'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import Button from '@/components/ui/Button/Button';
import { navAccount, navCta, navDashboard, navLinks, navLogin } from '@/data/navigation';
import { useSignedIn } from '@/hooks/useSignedIn';
import styles from './Navbar.module.css';
import NavbarMobileMenu from './NavbarMobileMenu';
import NavbarServicesMenu from './NavbarServicesMenu';

const SERVICES_PANEL_ID = 'services-panel';
const MOBILE_MENU_ID = 'mobile-menu';
const PHONE_MENU = '(max-width: 900px)'; // same breakpoint as the CSS
const OPEN_DELAY = 90; // ms the pointer rests on "Services" before the panel opens
const CLOSE_DELAY = 220; // ms to move between "Services" and the panel before it closes
const SCROLLED_AT = 24; // px scrolled before the bar's glass fades in
const HIDE_AFTER = 480; // px – above this the bar never hides

// A link stands for its page and everything under it (/services/seo → Services)
const isCurrent = (pathname: string, href: string) =>
  pathname === href || pathname.startsWith(`${href}/`);

// The navbar keeps one size: transparent over the hero at the top of a page, with its glass
// fading in once the page scrolls. It slips away while you scroll down and comes back as soon as
// you scroll up.
// A soft glass pill slides behind the links to the one under the pointer (and rests on the
// current page). "Services" opens a panel on hover (a click pins it; Escape, an outside click or
// moving focus away closes it). Phones get a full-screen menu instead (NavbarMobileMenu).
// Both remember the page they were opened on, so going to another page closes them.
export default function Navbar() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);
  const indicatorRef = useRef<HTMLSpanElement>(null);
  const servicesButtonRef = useRef<HTMLButtonElement>(null);
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const hoverTimer = useRef<number | undefined>(undefined);
  const openedByHover = useRef(false);

  const [servicesOpenOn, setServicesOpenOn] = useState<string | null>(null);
  const [menuOpenOn, setMenuOpenOn] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
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
    window.clearTimeout(hoverTimer.current);
    if (openedByHover.current) {
      openedByHover.current = false; // already open from hovering – the click pins it
    } else if (servicesOpen) {
      closeServices();
    } else {
      setServicesOpenOn(pathname);
    }
  };

  // Scrolling: glass or not, hidden or shown
  useEffect(() => {
    let lastY = window.scrollY;
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      setScrolled(y > SCROLLED_AT);
      if (Math.abs(y - lastY) > 6) {
        setHidden(y > lastY && y > HIDE_AFTER);
        lastY = y;
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  // The sliding pill behind the links: under the pointer, else on "Services" while its panel is
  // open, else on the current page's link – or out of sight. It appears in place (no slide in
  // from the side) and only slides between links.
  const activeIndex = navLinks.findIndex((link) => isCurrent(pathname, link.href));
  const servicesIndex = navLinks.findIndex((link) => link.menu);
  const target = hovered ?? (servicesOpen ? servicesIndex : activeIndex);
  useEffect(() => {
    const indicator = indicatorRef.current;
    const link = target >= 0 ? linksRef.current?.children[target]?.firstElementChild : null;
    if (!indicator) return;
    if (!(link instanceof HTMLElement)) {
      indicator.dataset.visible = 'false';
      return;
    }
    const appearing = indicator.dataset.visible !== 'true';
    if (appearing) indicator.style.transition = 'opacity 0.25s ease';
    indicator.style.setProperty('--x', `${link.offsetLeft}px`);
    indicator.style.setProperty('--w', `${link.offsetWidth}px`);
    indicator.dataset.visible = 'true';
    if (appearing) {
      void indicator.offsetWidth; // apply the new place before the slide comes back on
      indicator.style.transition = '';
    }
  }, [target]);

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

  // Phone menu: lock the page behind it, close on Escape, and close if the screen grows past
  // the phone breakpoint (e.g. a tablet turned sideways)
  useEffect(() => {
    if (!menuOpen) return;
    const close = () => setMenuOpenOn(null);
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
        data-scrolled={scrolled}
        data-hidden={hidden && !servicesOpen && !menuOpen}
        onFocus={() => setHidden(false)} // a keyboard user tabbing in always sees it
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
              width={84}
              height={40}
              priority
            />
          </Link>

          <nav aria-label="Main" className={styles.nav}>
            <div className={styles.linksWrap} onPointerLeave={() => setHovered(null)}>
              <span ref={indicatorRef} className={styles.indicator} aria-hidden="true" />
              <ul ref={linksRef} className={styles.links}>
                {navLinks.map((link, i) => (
                  <li
                    key={link.href}
                    onPointerEnter={(event) => {
                      if (event.pointerType === 'mouse') setHovered(i);
                      if (link.menu) hoverIn(event);
                    }}
                    onPointerLeave={link.menu ? hoverOut : undefined}
                  >
                    {link.menu ? (
                      <button
                        ref={servicesButtonRef}
                        type="button"
                        className={styles.link}
                        data-current={i === activeIndex || undefined}
                        aria-expanded={servicesOpen}
                        aria-controls={SERVICES_PANEL_ID}
                        onClick={onServicesClick}
                      >
                        {link.label}
                      </button>
                    ) : (
                      <Link
                        href={link.href}
                        className={styles.link}
                        aria-current={pathname === link.href ? 'page' : undefined}
                        data-current={i === activeIndex || undefined}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Login (Dashboard / My account while logged in), then the main button */}
          <div className={styles.actions}>
            <Link
              href={account.href}
              className={`${styles.login} ${signedIn === 'checking' ? styles.loginChecking : ''}`}
            >
              {account.label}
            </Link>
            <Button href={navCta.href} size="sm" className={styles.cta}>
              <span className={styles.liveDot} aria-hidden="true" />
              {navCta.label}
            </Button>
          </div>

          {/* Phones: two lines that turn into a cross */}
          <button
            ref={menuToggleRef}
            type="button"
            className={styles.menuToggle}
            data-open={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls={MOBILE_MENU_ID}
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

      <NavbarMobileMenu
        id={MOBILE_MENU_ID}
        open={menuOpen}
        pathname={pathname}
        account={account}
        onClose={closeMenu}
      />

      {/* Dims the page behind the services panel */}
      <div className={styles.backdrop} data-open={servicesOpen} aria-hidden="true" />
    </>
  );
}
