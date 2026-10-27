'use client';

import { useEffect, useRef } from 'react';

type ScrollProgressOptions = {
  /**
   * 'enter'  – 0 when the element's top reaches the bottom of the screen, 1 after scrolling
   *            `distance` screen heights (sooner if the page ends before that).
   * 'pinned' – for a tall element with a `position: sticky` child: 0 as soon as its top enters
   *            the screen (so the animation starts while it scrolls in – no blank wait), 1 when its
   *            bottom reaches the bottom of the screen (the end of the pinned stretch).
   *            If CSS turns the pinning off (element shorter than the screen, e.g. on phones),
   *            see `unpinned` below.
   */
  mode?: 'enter' | 'pinned';
  distance?: number; // 'enter' mode only
  /**
   * 'pinned' mode, when CSS turns the pinning off:
   * 'passing'  – 0 as the element enters at the bottom, 1 as it leaves at the top (default)
   * 'onScreen' – 0 once it is fully on screen, 1 when its top reaches the top of the screen
   *              (nothing moves until the whole element can be seen)
   */
  unpinned?: 'passing' | 'onScreen';
};

/**
 * Sets a `--progress` CSS variable (0 → 1) on the element as the page scrolls,
 * so CSS can tie animations directly to the scroll position. Scrolling back reverses it.
 * Updates once per frame and never re-renders React.
 */
export function useScrollProgress<T extends HTMLElement>({
  mode = 'enter',
  distance = 0.8,
  unpinned = 'passing',
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
        if (height > viewportHeight) {
          progress = clamp((viewportHeight - top) / Math.max(height, 1));
        } else if (unpinned === 'onScreen') {
          // At least 40% of a screen of scrolling, so an element nearly as tall as the screen doesn't flick past
          const span = Math.max(viewportHeight - height, viewportHeight * 0.4);
          progress = clamp((viewportHeight - height - top) / span);
        } else {
          progress = clamp((viewportHeight - top) / (viewportHeight + height));
        }
      } else if (!reduceMotion) {
        // Never longer than the scrolling left on the page, so it always completes
        const maxScroll = document.documentElement.scrollHeight - viewportHeight;
        const reachable = viewportHeight - (top + window.scrollY) + maxScroll;
        const span = Math.max(Math.min(viewportHeight * distance, reachable), 1);
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
  }, [mode, distance, unpinned]);

  return ref;
}
