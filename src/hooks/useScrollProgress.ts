'use client';

import { useEffect, useRef } from 'react';

type ScrollProgressOptions = {
  distance?: number; // how much scrolling (in screen heights) takes progress from 0 to 1
};

/**
 * Sets a `--progress` CSS variable (0 → 1) on the element as it scrolls into view:
 * 0 when its top reaches the bottom of the screen, 1 after scrolling `distance` screen heights
 * (or once the whole element is visible, if it is shorter).
 * CSS can then tie animations directly to the scroll position. Scrolling back reverses it.
 * Updates once per frame and never re-renders React.
 */
export function useScrollProgress<T extends HTMLElement>({ distance = 0.8 }: ScrollProgressOptions = {}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Respect the device's "reduce motion" setting: show the end state
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let frame = 0;

    const update = () => {
      frame = 0;
      const viewportHeight = window.innerHeight;
      const { top, height } = element.getBoundingClientRect();
      // Finish after `distance` screens, or once the whole element is on screen if it is
      // shorter than that – so it always completes, even at the very end of the page.
      const span = Math.min(viewportHeight * distance, height);
      const progress = reduceMotion ? 1 : Math.min(Math.max((viewportHeight - top) / span, 0), 1);
      element.style.setProperty('--progress', progress.toFixed(4));
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [distance]);

  return ref;
}
