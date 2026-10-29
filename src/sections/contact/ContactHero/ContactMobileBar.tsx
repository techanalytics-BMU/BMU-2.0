'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import type { ContactHeroContent } from '@/types/contact';
import styles from './ContactMobileBar.module.css';

// Phones only: once the form has scrolled out of view, a bar at the bottom keeps the two quickest
// ways to get in touch one tap away – WhatsApp, or back up to the free-audit form. It hides again
// while the form or the footer is on screen.
export default function ContactMobileBar({ bar }: { bar: ContactHeroContent['mobileBar'] }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const form = document.getElementById('contact-form-area');
    const footer = document.querySelector('footer');
    if (!form) return;

    const visible = new Map<Element, boolean>();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => visible.set(entry.target, entry.isIntersecting));
      setShow(!visible.get(form) && !(footer && visible.get(footer)));
    });
    observer.observe(form);
    if (footer) observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  const toForm = () => {
    const card = document.getElementById('contact-form');
    card?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // then put the cursor in the first box, once the scroll has (mostly) finished
    window.setTimeout(
      () => card?.querySelector<HTMLElement>('input')?.focus({ preventScroll: true }),
      700
    );
  };

  return (
    <div className={styles.bar} data-show={show} aria-hidden={!show}>
      <Link href={bar.whatsapp.href} className={styles.whatsapp} tabIndex={show ? 0 : -1}>
        <Image src="/icons/social/whatsapp.svg" alt="" width={18} height={18} />
        {bar.whatsapp.label}
      </Link>
      <button type="button" className={styles.form} onClick={toForm} tabIndex={show ? 0 : -1}>
        {bar.form}
      </button>
    </div>
  );
}
