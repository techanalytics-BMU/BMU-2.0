'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Button from '@/components/ui/Button/Button';
import { navCta, navLinks } from '@/data/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={styles.navbar}>
      <div className={styles.bar}>
        {/* Logo – replace the "B" mark with the logo SVG when available */}
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          <span className={styles.logoMark} aria-hidden="true">
            B
          </span>
          <span className={styles.logoText}>
            BMU <em>Marketing</em>
            <span className={styles.accent}>.</span>
          </span>
        </Link>

        <nav aria-label="Main" className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.links}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className={`${styles.link} ${pathname === link.href ? styles.active : ''}`}
                  aria-current={pathname === link.href ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Button href={navCta.href} size="sm" className={styles.cta}>
            {navCta.label}
            <Image src="/icons/common/navbar-cta-icon.svg" alt="" width={24} height={24} />
          </Button>
        </nav>

        <button
          type="button"
          className={styles.menuToggle}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Image
            src={menuOpen ? '/icons/common/close.svg' : '/icons/common/menu.svg'}
            alt=""
            width={24}
            height={24}
          />
        </button>
      </div>
    </header>
  );
}
