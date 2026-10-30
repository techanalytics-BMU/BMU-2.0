'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './PseoMobileBar.module.css';

// Phones only: once the hero's button has scrolled away, a bar at the bottom keeps the contact
// page one tap away. It hides again while the closing call to action or the footer is on screen,
// so it never covers their own buttons.
export default function PseoMobileBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('pseo-hero-actions');
    const cta = document.getElementById('pseo-cta');
    const footer = document.querySelector('footer');
    if (!hero) return;

    const visible = new Map<Element, boolean>();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => visible.set(entry.target, entry.isIntersecting));
      setShow(![hero, cta, footer].some((el) => el && visible.get(el)));
    });
    [hero, cta, footer].forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.bar} data-show={show} aria-hidden={!show}>
      <Link href="/contact" className={styles.button} tabIndex={show ? 0 : -1}>
        Know more
      </Link>
    </div>
  );
}
