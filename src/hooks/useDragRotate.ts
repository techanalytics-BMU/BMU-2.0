'use client';

import { useEffect, useRef } from 'react';

type DragRotateOptions = {
  autoSpeed?: number; // degrees per second the element keeps rotating on its own
  sensitivity?: number; // degrees of rotation per pixel dragged sideways
  maxSpeed?: number; // max extra degrees per second after a fast swipe
  friction?: number; // 0–1, how quickly a swipe's extra speed fades back to autoSpeed
  smoothing?: number; // 0–1, how quickly the element catches up with the finger (lower = smoother)
  verticalRange?: number; // how far it can be dragged up/down, as a share of the area's height (0 = off)
};

/**
 * Continuously rotates an element around its Y axis. The user can drag (mouse) or swipe (touch):
 * - sideways   → rotate it faster or the other way
 * - up / down  → move it up or down (within `verticalRange`) to see the top and bottom
 * On touch screens each swipe locks to one direction. Once the element reaches its
 * top/bottom limit, a vertical swipe carries on scrolling the page, so it never traps the user
 * (give the area `touch-action: none`).
 * - `areaRef`   → the element that listens for drags/swipes
 * - `targetRef` → the element that moves
 * The animation only runs while the area is on screen.
 */
export function useDragRotate<Area extends HTMLElement, Target extends HTMLElement>({
  autoSpeed = 6,
  sensitivity = 0.12,
  maxSpeed = 40,
  friction = 0.95,
  smoothing = 0.12,
  verticalRange = 0,
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
    let goal = 0; // where the rotation is heading – rotation eases towards it
    let offsetY = 0; // vertical position shown (px)
    let goalY = 0; // vertical position it is heading to
    let swipeSpeed = 0; // extra degrees per second from the last swipe
    let direction = -1; // -1 = cards move right, 1 = cards move left
    let dragging = false;
    let pointerType = 'mouse';
    let axis: 'x' | 'y' | 'both' | null = null; // touch swipes lock to one direction
    let startX = 0;
    let startY = 0;
    let lastX = 0;
    let lastY = 0;
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
      const ease = 1 - Math.pow(1 - smoothing, dt * 60);
      rotation += (goal - rotation) * ease;
      offsetY += (goalY - offsetY) * ease;
      target.style.transform = `translateY(${offsetY.toFixed(1)}px) rotateY(${rotation}deg)`;
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
      pointerType = event.pointerType;
      axis = pointerType === 'touch' ? null : 'both';
      distance = 0;
      swipeSpeed = 0;
      startX = lastX = event.clientX;
      startY = lastY = event.clientY;
      lastMoveTime = event.timeStamp;
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!dragging) return;
      const dx = event.clientX - lastX;
      const dy = event.clientY - lastY;
      const dt = (event.timeStamp - lastMoveTime) / 1000;
      lastX = event.clientX;
      lastY = event.clientY;
      lastMoveTime = event.timeStamp;
      distance += Math.abs(dx) + Math.abs(dy);

      // Touch: decide the direction once the finger has moved a little
      if (axis === null) {
        const tx = event.clientX - startX;
        const ty = event.clientY - startY;
        if (Math.hypot(tx, ty) < 8) return;
        axis = Math.abs(tx) > Math.abs(ty) ? 'x' : 'y';
      }

      if (axis !== 'y') {
        const delta = -dx * sensitivity; // drag right → cards move right
        goal += delta;
        if (delta !== 0) direction = Math.sign(delta);
        if (dt > 0) swipeSpeed = swipeSpeed * 0.7 + (delta / dt) * 0.3;
      }

      if (axis !== 'x') {
        const limit = area.clientHeight * verticalRange;
        const next = goalY + dy; // drag down → cards move down (shows the top ones)
        goalY = Math.max(-limit, Math.min(limit, next));
        // Past the limit on touch: scroll the page instead, so the user is never stuck
        const leftover = next - goalY;
        if (pointerType === 'touch' && leftover !== 0) window.scrollBy(0, -leftover);
      }
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
  }, [autoSpeed, sensitivity, maxSpeed, friction, smoothing, verticalRange]);

  return { areaRef, targetRef };
}
