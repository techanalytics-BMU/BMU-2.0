'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

// The sheen on the lime heading words (.text-accent in globals.css) repaints them on every frame,
// even off screen. This marks the ones out of view with data-offscreen, so CSS can rest them.
export default function TextAccentPause() {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        (entry.target as HTMLElement).dataset.offscreen = String(!entry.isIntersecting);
      }
    });
    document.querySelectorAll('.text-accent').forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
