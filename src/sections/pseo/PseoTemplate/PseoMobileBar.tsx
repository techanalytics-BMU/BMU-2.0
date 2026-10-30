'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './PseoMobileBar.module.css';

// Phones only: once the hero's buttons have scrolled away, a bar at the bottom keeps the two
// quickest ways to get in touch one tap away. It hides again while the closing call to action or
// the footer is on screen, so it never covers their own buttons.
export default function PseoMobileBar({ whatsapp }: { whatsapp: string }) {
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
      <Link href={whatsapp} className={styles.whatsapp} tabIndex={show ? 0 : -1}>
        <Image src="/icons/social/whatsapp.svg" alt="" width={18} height={18} />
        WhatsApp
      </Link>
      <Link href="/contact" className={styles.audit} tabIndex={show ? 0 : -1}>
        Get a free audit
      </Link>
    </div>
  );
}
