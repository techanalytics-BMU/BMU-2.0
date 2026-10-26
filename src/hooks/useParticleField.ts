'use client';

import { useEffect, useRef } from 'react';

type ParticleColor = { color: string; weight: number; outline?: string }; // outline makes dark particles visible

// White, lime green and black (with a faint light edge so it shows on black)
const DEFAULT_COLORS: ParticleColor[] = [
  { color: '#ffffff', weight: 0.55 },
  { color: '#8cc63f', weight: 0.3 },
  { color: '#000000', weight: 0.15, outline: 'rgba(255, 255, 255, 0.45)' },
];

type ParticleFieldOptions = {
  /**
   * 'zigzag' – each particle wanders around, switching direction back and forth (zig-zag)
   * 'orbit'  – particles orbit a centre on tilted ovals, like a solar system
   */
  motion?: 'zigzag' | 'orbit';
  colors?: ParticleColor[]; // define outside the component so it stays the same between renders
  density?: number; // one particle per this many square pixels
  maxParticles?: number;
  speed?: number; // zigzag: average speed in px per second
  tilt?: number; // orbit: 0–1, how flat the orbits look
  centerY?: number; // orbit: vertical centre, as a share of the height
  period?: number; // orbit: seconds for a particle 300px from the centre to complete one orbit
};

type Particle = {
  x: number;
  y: number;
  size: number;
  color: string;
  outline?: string;
  twinkle: number; // phase offset
  depth: number; // 0 = far (small, dim) … 1 = near (big, bright)
  // zigzag
  heading: number; // overall direction (radians), drifts slowly
  turn: number; // how far each zig / zag swings from the heading
  side: 1 | -1; // current zig or zag
  angle: number; // current moving direction (eases towards heading ± turn)
  velocity: number;
  switchIn: number; // seconds until the next zig/zag switch
  interval: number;
  // orbit
  radius: number;
  orbitAngle: number;
  orbitSpeed: number;
};

const random = (min: number, max: number) => min + Math.random() * (max - min);

/**
 * Draws tiny particles on the canvas the returned ref is attached to.
 * Pauses while off screen; shows still particles when "reduce motion" is on.
 */
export function useParticleField<T extends HTMLCanvasElement>({
  motion = 'zigzag',
  colors = DEFAULT_COLORS,
  density = 6000,
  maxParticles = 320,
  speed = 28,
  tilt = 0.38,
  centerY = 0.42,
  period = 60,
}: ParticleFieldOptions = {}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let width = 0;
    let height = 0;
    let flatness = tilt;
    let particles: Particle[] = [];
    let frame = 0;
    let lastTime = 0;
    let elapsed = 0;

    const pickColor = () => {
      let roll = Math.random();
      for (const c of colors) {
        if ((roll -= c.weight) <= 0) return c;
      }
      return colors[0];
    };

    // (Re)create the particles to fit the canvas size
    const build = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Orbit mode: tall screens get rounder orbits, big enough to reach every corner
      flatness = Math.min(0.9, Math.max(tilt, (height / width) * tilt));
      const maxRadius = Math.max(width / 2, height / (2 * flatness)) * 1.1;
      const minRadius = Math.min(width, height) * 0.08;
      // Orbit mode spreads particles over the whole orbit area, zigzag over the screen
      const area = motion === 'orbit' ? Math.PI * maxRadius * maxRadius * flatness : width * height;
      const count = Math.min(maxParticles, Math.round(area / density));

      particles = Array.from({ length: count }, () => {
        const { color, outline } = pickColor();
        const heading = random(0, Math.PI * 2);
        const turn = random(0.6, 1.2); // ~35°–70°
        const interval = random(0.5, 1.4);
        const radius = minRadius + (maxRadius - minRadius) * Math.sqrt(Math.random());
        return {
          x: random(0, width),
          y: random(0, height),
          size: random(0.5, 1.9),
          color,
          outline,
          twinkle: random(0, Math.PI * 2),
          depth: Math.random(),
          heading,
          turn,
          side: Math.random() < 0.5 ? 1 : -1,
          angle: heading,
          velocity: speed * random(0.5, 1.5),
          switchIn: random(0, interval),
          interval,
          radius,
          orbitAngle: random(0, Math.PI * 2),
          orbitSpeed: ((Math.PI * 2) / period) * Math.pow(300 / radius, 1.5) * random(0.8, 1.2),
        };
      });
    };

    const moveZigzag = (p: Particle, dt: number) => {
      // Switch between zig and zag
      p.switchIn -= dt;
      if (p.switchIn <= 0) {
        p.side = p.side === 1 ? -1 : 1;
        p.switchIn = p.interval;
      }
      // The overall route slowly drifts so particles roam "here and there"
      p.heading += random(-0.6, 0.6) * dt;
      // Turn quickly (but not instantly) into the new zig/zag direction
      const targetAngle = p.heading + p.side * p.turn;
      p.angle += (targetAngle - p.angle) * Math.min(1, dt * 10);

      p.x += Math.cos(p.angle) * p.velocity * dt;
      p.y += Math.sin(p.angle) * p.velocity * dt;

      // Wrap around the edges
      if (p.x < -5) p.x = width + 5;
      else if (p.x > width + 5) p.x = -5;
      if (p.y < -5) p.y = height + 5;
      else if (p.y > height + 5) p.y = -5;
    };

    const moveOrbit = (p: Particle, dt: number) => {
      p.orbitAngle += p.orbitSpeed * dt;
      p.x = width / 2 + Math.cos(p.orbitAngle) * p.radius;
      p.y = height * centerY + Math.sin(p.orbitAngle) * p.radius * flatness;
      p.depth = (Math.sin(p.orbitAngle) + 1) / 2; // near side of the orbit = bigger, brighter
    };

    const draw = (dt: number) => {
      elapsed += dt;
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        if (motion === 'orbit') moveOrbit(p, dt);
        else moveZigzag(p, dt);
        if (p.x < -4 || p.x > width + 4 || p.y < -4 || p.y > height + 4) continue;

        const size = p.size * (0.6 + 0.7 * p.depth);
        const shimmer = 0.75 + 0.25 * Math.sin(elapsed * 1.6 + p.twinkle);
        ctx.globalAlpha = (0.3 + 0.7 * p.depth) * shimmer;

        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
        if (p.outline) {
          ctx.lineWidth = 0.6;
          ctx.strokeStyle = p.outline;
          ctx.stroke();
        }
      }
      ctx.globalAlpha = 1;
    };

    const tick = (time: number) => {
      const dt = lastTime ? Math.min((time - lastTime) / 1000, 0.05) : 0;
      lastTime = time;
      draw(dt);
      frame = requestAnimationFrame(tick);
    };

    const start = () => {
      if (frame || reduceMotion) return;
      lastTime = 0;
      frame = requestAnimationFrame(tick);
    };

    const stop = () => {
      cancelAnimationFrame(frame);
      frame = 0;
    };

    build();
    draw(0);

    const resizeObserver = new ResizeObserver(() => {
      build();
      draw(0);
    });
    resizeObserver.observe(canvas);

    // Only animate while visible
    const intersectionObserver = new IntersectionObserver(([entry]) =>
      entry.isIntersecting ? start() : stop()
    );
    intersectionObserver.observe(canvas);

    return () => {
      stop();
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
    };
  }, [motion, colors, density, maxParticles, speed, tilt, centerY, period]);

  return ref;
}
