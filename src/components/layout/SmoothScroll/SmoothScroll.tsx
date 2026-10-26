'use client';

import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { useEffect } from 'react';

// Slow, steady page scrolling for mouse wheel / trackpad (https://github.com/darkroomengineering/lenis).
// Touch screens keep their native scrolling. Lenis still moves the real page scroll,
// so the scroll-driven sections (useScrollProgress, position: sticky) keep working.
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const lenis = new Lenis({
      lerp: 0.07, // lower = slower, smoother glide (default 0.1)
      wheelMultiplier: 0.8, // each wheel step scrolls a little less
      anchors: true, // smooth scroll for in-page links like #pricing
    });

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return null;
}
