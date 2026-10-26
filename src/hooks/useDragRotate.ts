'use client';

import { useEffect, useRef } from 'react';

type DragRotateOptions = {
  autoSpeed?: number; // degrees per second the element keeps rotating on its own
  sensitivity?: number; // degrees of rotation per pixel dragged
  maxSpeed?: number; // max extra degrees per second after a fast swipe
  friction?: number; // 0–1, how quickly a swipe's extra speed fades back to autoSpeed
  smoothing?: number; // 0–1, how quickly the element catches up with the finger (lower = smoother)
};

/**
 * Continuously rotates an element around its Y axis, and lets the user
 * swipe (touch) or drag (mouse) to turn it, with smooth easing.
 * - `areaRef`   → the element that listens for swipes
 * - `targetRef` → the element that rotates
 * Vertical swipes still scroll the page (set `touch-action: pan-y` on the area).
 * The animation only runs while the area is on screen.
 */
export function useDragRotate<Area extends HTMLElement, Target extends HTMLElement>({
  autoSpeed = 6,
  sensitivity = 0.12,
  maxSpeed = 40,
  friction = 0.95,
  smoothing = 0.12,
}: DragRotateOptions = {}) {
  const areaRef = useRef<Area>(null);
  const targetRef = useRef<Target>(null);

  useEffect(() => {
    const area = areaRef.current;
    const target = targetRef.current;
    if (!area || !target) return;

    // Respect the device's "reduce motion" setting: no automatic spin
    const auto = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : autoSpeed;
    let rotation = 0; // what is shown
    let goal = 0; // where the ring is heading – rotation eases towards it
    let swipeSpeed = 0; // extra degrees per second from the last swipe
    let direction = -1; // -1 = cards move right, 1 = cards move left
    let dragging = false;
    let lastX = 0;
    let lastMoveTime = 0;
    let distance = 0;
    let frame = 0;
    let lastFrameTime = 0;

    // Time-based, so the speed is the same on 60 Hz, 120 Hz and slow devices
    const tick = (time: number) => {
      const dt = lastFrameTime ? Math.min((time - lastFrameTime) / 1000, 0.05) : 0;
      lastFrameTime = time;

      if (!dragging) {
        swipeSpeed *= Math.pow(friction, dt * 60);
        if (Math.abs(swipeSpeed) < 0.2) swipeSpeed = 0;
        goal += (auto * direction + swipeSpeed) * dt;
      }
      rotation += (goal - rotation) * (1 - Math.pow(1 - smoothing, dt * 60));
      target.style.transform = `rotateY(${rotation}deg)`;
      frame = requestAnimationFrame(tick);
    };

    const start = () => {
      if (frame) return;
      lastFrameTime = 0;
      frame = requestAnimationFrame(tick);
    };

    const stop = () => {
      cancelAnimationFrame(frame);
      frame = 0;
    };

    const onPointerDown = (event: PointerEvent) => {
      dragging = true;
      distance = 0;
      swipeSpeed = 0;
      lastX = event.clientX;
      lastMoveTime = event.timeStamp;
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!dragging) return;
      const dx = event.clientX - lastX;
      const dt = (event.timeStamp - lastMoveTime) / 1000;
      lastX = event.clientX;
      lastMoveTime = event.timeStamp;
      distance += Math.abs(dx);

      const delta = -dx * sensitivity; // drag right → cards move right
      goal += delta;
      if (delta !== 0) direction = Math.sign(delta);
      if (dt > 0) swipeSpeed = swipeSpeed * 0.7 + (delta / dt) * 0.3;
    };

    const onPointerUp = (event: PointerEvent) => {
      if (!dragging) return;
      dragging = false;
      // Finger held still before release → no extra spin
      if (event.timeStamp - lastMoveTime > 100) swipeSpeed = 0;
      swipeSpeed = Math.max(-maxSpeed, Math.min(maxSpeed, swipeSpeed));
    };

    // A drag should not count as a click on a card
    const onClickCapture = (event: MouseEvent) => {
      if (distance > 5) {
        event.preventDefault();
        event.stopPropagation();
      }
    };

    // Only animate while the section is visible
    const observer = new IntersectionObserver(([entry]) =>
      entry.isIntersecting ? start() : stop()
    );
    observer.observe(area);

    area.addEventListener('pointerdown', onPointerDown);
    area.addEventListener('click', onClickCapture, true);
    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointercancel', onPointerUp);

    return () => {
      stop();
      observer.disconnect();
      area.removeEventListener('pointerdown', onPointerDown);
      area.removeEventListener('click', onClickCapture, true);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointercancel', onPointerUp);
    };
  }, [autoSpeed, sensitivity, maxSpeed, friction, smoothing]);

  return { areaRef, targetRef };
}
