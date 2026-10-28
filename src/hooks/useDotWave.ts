'use client';

import { useEffect, useRef } from 'react';

type DotWaveOptions = {
  columns?: number; // dots across
  rows?: number; // dots into the distance
  speed?: number; // 1 = default pace of the swell
};

/**
 * Draws a 3D field of dots rolling like a slow ocean swell on a canvas – seen from slightly
 * above, fading out into the distance. Crests catch a faint lime light.
 * Put `ref` on a <canvas> sized by CSS. Pauses while off screen; draws one still frame
 * when "reduce motion" is on.
 */
export function useDotWave<T extends HTMLCanvasElement>({
  columns = 120,
  rows = 36,
  speed = 1,
}: DotWaveOptions = {}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let width = 0;
    let height = 0;
    let frame = 0;
    let running = false;
    let start = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (time: number) => {
      const t = (time / 1000) * speed;
      ctx.clearRect(0, 0, width, height);

      const fov = 320; // camera focal length – lower = stronger perspective
      const spread = width * 1.7; // the field is wider than the screen, so its sides run off it
      const depthSpacing = 22;
      const amplitude = Math.min(height * 0.11, 64);
      const horizon = height * 0.2; // where the far edge of the field sits
      const eye = 320; // camera height above the field – higher shows more of it

      for (let r = 0; r < rows; r++) {
        const z = r * depthSpacing;
        const scale = fov / (fov + z);
        const depthFade = 1 - r / rows; // near rows bright, far rows dim

        for (let c = 0; c < columns; c++) {
          const u = c / (columns - 1) - 0.5;
          const x = u * spread;
          // Two crossing swells plus a gentle ripple
          const wave =
            Math.sin(c * 0.11 + t * 0.7) * 0.6 +
            Math.sin(r * 0.32 - t * 0.5 + c * 0.03) * 0.5 +
            Math.cos((c + r) * 0.07 + t * 0.9) * 0.25;
          const y = wave * amplitude;

          const px = width / 2 + x * scale;
          const py = horizon + (eye - y) * scale * 0.8;
          if (px < -4 || px > width + 4 || py < -4 || py > height + 4) continue;

          // Brighter in the middle of the screen, dimmer towards the sides
          const centre = 1 - Math.min(Math.abs(u) * 1.6, 1);
          const crest = Math.max(0, wave) / 1.35; // 0 → 1 on the highest crests
          const alpha = (0.08 + 0.75 * depthFade * (0.35 + 0.65 * centre)) * (0.55 + 0.45 * crest);
          const size = Math.max(0.6, 1.9 * scale);

          // White dots; the tallest crests near the middle pick up a lime tint
          const lime = crest * centre;
          const red = Math.round(255 - 115 * lime);
          const green = Math.round(255 - 57 * lime);
          const blue = Math.round(255 - 192 * lime);
          ctx.fillStyle = `rgba(${red}, ${green}, ${blue}, ${alpha.toFixed(3)})`;
          ctx.fillRect(px - size / 2, py - size / 2, size, size);
        }
      }
    };

    const loop = (time: number) => {
      if (!start) start = time;
      draw(time - start + 4000); // start mid-swell rather than flat
      frame = requestAnimationFrame(loop);
    };

    const play = () => {
      if (running || reduceMotion) return;
      running = true;
      frame = requestAnimationFrame(loop);
    };
    const pause = () => {
      running = false;
      cancelAnimationFrame(frame);
    };

    resize();
    draw(4000);

    const onResize = () => {
      resize();
      if (!running) draw(4000);
    };
    window.addEventListener('resize', onResize);

    const observer = new IntersectionObserver(([entry]) =>
      entry.isIntersecting ? play() : pause()
    );
    observer.observe(canvas);

    return () => {
      pause();
      observer.disconnect();
      window.removeEventListener('resize', onResize);
    };
  }, [columns, rows, speed]);

  return ref;
}
