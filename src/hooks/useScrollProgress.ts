'use client';

import { useEffect, useRef } from 'react';

type ScrollProgressOptions = {
  /**
   * 'enter'  – 0 when the element's top reaches the bottom of the screen, 1 after scrolling
   *            `distance` screen heights (or once the whole element is visible, if shorter).
   * 'pinned' – for a tall element with a `position: sticky` child: 0 when its top reaches the
   *            top of the screen, 1 when its bottom reaches the bottom (the whole "pinned" stretch).
   */
  mode?: 'enter' | 'pinned';
  distance?: number; // 'enter' mode only
};

/**
 * Sets a `--progress` CSS variable (0 → 1) on the element as the page scrolls,
 * so CSS can tie animations directly to the scroll position. Scrolling back reverses it.
 * Updates once per frame and never re-renders React.
 */
export function useScrollProgress<T extends HTMLElement>({
  mode = 'enter',
  distance = 0.8,
}: ScrollProgressOptions = {}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Respect the device's "reduce motion" setting: show the end state
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const clamp = (value: number) => Math.min(Math.max(value, 0), 1);
    let frame = 0;

    const update = () => {
      frame = 0;
      const viewportHeight = window.innerHeight;
      const { top, height } = element.getBoundingClientRect();
      let progress = 1;
      if (!reduceMotion && mode === 'pinned') {
        progress = clamp(-top / Math.max(height - viewportHeight, 1));
      } else if (!reduceMotion) {
        const span = Math.min(viewportHeight * distance, height);
        progress = clamp((viewportHeight - top) / span);
      }
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
  }, [mode, distance]);

  return ref;
}
