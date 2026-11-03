'use client';

import { useEffect, useRef } from 'react';

// A brighter patch of the hero's grid that follows the mouse (touch screens never see it). Sits
// in the hero and listens on it; the stylesheet draws the lines and masks them to --mx / --my.
export default function PseoGridLight({ className }: { className: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const light = ref.current;
    const hero = light?.parentElement;
    if (!light || !hero) return;
    let frame = 0;
    let x = 0;
    let y = 0;
    const place = () => {
      frame = 0;
      const box = hero.getBoundingClientRect();
      light.style.setProperty('--mx', `${x - box.left}px`);
      light.style.setProperty('--my', `${y - box.top}px`);
      light.dataset.on = 'true';
    };
    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return;
      x = event.clientX;
      y = event.clientY;
      if (!frame) frame = requestAnimationFrame(place);
    };
    const onLeave = () => {
      light.dataset.on = 'false';
    };
    hero.addEventListener('pointermove', onMove);
    hero.addEventListener('pointerleave', onLeave);
    return () => {
      cancelAnimationFrame(frame);
      hero.removeEventListener('pointermove', onMove);
      hero.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return <span ref={ref} className={className} aria-hidden="true" />;
}
