'use client';

import { useEffect, useRef, useState } from 'react';

type InViewOptions = {
  threshold?: number; // 0–1, how much of the element must be visible
  once?: boolean; // true = stays "in view" after the first time
};

/**
 * Tells you when an element scrolls into view – used to start animations.
 * Put `ref` on the element and use `inView` (e.g. as `data-in-view={inView}`).
 */
export function useInView<T extends HTMLElement>({ threshold = 0.3, once = true }: InViewOptions = {}) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold }
    );
    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, once]);

  return { ref, inView };
}
