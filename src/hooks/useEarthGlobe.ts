'use client';

import { useEffect, useRef } from 'react';
import type { LandingHeroEarth } from '@/types/landing';

type EarthGlobeOptions = {
  earth: LandingHeroEarth; // define outside the component so it stays the same between renders
  horizonLatitude?: number; // latitude on the globe's top edge (the horizon); CSS --earth-horizon on the canvas overrides it
  startLongitude?: number; // longitude facing the viewer when the page opens
  speed?: number; // degrees per second the globe turns – the land drifts from right to left
};

const DEG = Math.PI / 180;
const GREEN = '140, 198, 63';
const LIGHT = '214, 245, 160';
const HALO = '226, 255, 120'; // city glow, yellow-green
// A dark, muted earth at night: grey-olive continents with a faint dot texture on a near-black ocean;
// only the city glows, the arcs and the horizon are bright
const LAND_FILL = 'rgb(40, 45, 32)'; // continents
const LAND_DOT = 'rgb(150, 162, 118)'; // their faint dot texture
// The oceans: the same grey with the same dot texture, a touch darker – so the whole globe is
// covered (no empty black when the wide Pacific turns into view) and the continents still show
const SEA_FILL = '23, 26, 19'; // the land is 40, 45, 32
const SEA_DOT_ALPHA = 0.22; // the land's dots are 0.38
const TOWN_LIGHT = '#e8ff9a';
const TOWN_SHARE = 0.015; // share of land dots that glow as towns
const GOLD = '255, 172, 82'; // India's city lights at night
const INDIA_LIGHT = '#ffd88f';
const INDIA_SCATTER = 360; // small town lights sprinkled across India, besides the city clusters

// Repeatable random numbers (the same lights every load)
const seededRandom = (seed: number) => () => {
  seed = (seed + 0x6d2b79f5) | 0;
  let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

// India's outline → rings of [lon, lat]
const parseRings = (text: string) =>
  text.split('|').map((ring) => ring.split(';').map((point) => point.split(',').map(Number) as [number, number]));

const insideRing = (ring: [number, number][], lon: number, lat: number) => {
  let odd = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i];
    const [xj, yj] = ring[j];
    if (yi > lat !== yj > lat && lon < ((xj - xi) * (lat - yi)) / (yj - yi) + xi) odd = !odd;
  }
  return odd;
};
const FPS = 30; // the globe turns slowly, so 30 frames a second is plenty
const ARC_LIFE = 9; // seconds per arc: draws in slowly (40%), holds, fades
const MAX_ARCS = 7; // arcs in the air at once
const ARC_EVERY: [number, number] = [1.2, 2.2]; // seconds between new arcs (random in this range)
const ARC_SPAN: [number, number] = [18, 60]; // how far apart the two cities are, in degrees – long arcs
const ARC_STRIPS = 6; // the visible globe is split into this many upright strips – arcs spread across them
const ROUTE_POINTS = 48;

const angleBetween = (a: [number, number, number], b: [number, number, number]) =>
  Math.acos(Math.min(1, a[0] * b[0] + a[1] * b[1] + a[2] * b[2]));

// The run-length land map (see LandingHeroEarth) → one byte per 0.5° cell, 1 = land
function decodeLand(land: string) {
  const rows = land.split(',');
  const runs = (row: string) => Array.from({ length: row.length / 2 }, (_, i) => parseInt(row.slice(i * 2, i * 2 + 2), 36));
  const cols = runs(rows[0]).reduce((sum, n) => sum + n, 0);
  const grid = new Uint8Array(rows.length * cols);
  rows.forEach((row, r) => {
    let c = 0;
    runs(row).forEach((n, i) => {
      if (i % 2) grid.fill(1, r * cols + c, r * cols + c + n);
      c += n;
    });
  });
  return { grid, rows: rows.length, cols };
}

// Point on the unit sphere: x east, y north, z towards longitude 0 on the equator
const toVector = (lat: number, lon: number): [number, number, number] => [
  Math.cos(lat * DEG) * Math.sin(lon * DEG),
  Math.sin(lat * DEG),
  Math.cos(lat * DEG) * Math.cos(lon * DEG),
];

/**
 * Draws a dotted earth on the canvas the returned ref is attached to, turning slowly so the land
 * drifts from right to left: land dots, town and city lights (with flares), India's warm city lights and
 * glowing arcs between cities. The globe is the circle of the canvas parent's ::after
 * (its width and top), so the drawing lines up with the CSS rim and glow.
 * Pauses while off screen; shows a still globe when "reduce motion" is on.
 */
export function useEarthGlobe<T extends HTMLCanvasElement>({
  earth,
  horizonLatitude = 52, // all of India (8–35°N) fits in the visible part of the globe
  startLongitude = 59, // India starts just right of the middle (in view straight away) and drifts left
  speed = 1, // a full turn in 6 minutes
}: EarthGlobeOptions) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext('2d');
    const host = canvas?.parentElement;
    if (!canvas || !ctx || !host) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const land = decodeLand(earth.land);
    // Tilt that brings the horizon latitude up to the top edge (set in build – CSS can change it)
    let horizon = horizonLatitude;
    let sinT = 0;
    let cosT = 1;

    // India's lights at night: a cluster round each city (bigger for bigger cities) plus small towns
    // sprinkled over the mainland (its outline is only used to keep those inside India – not drawn)
    const indiaRings = parseRings(earth.india);
    const indiaLights: { v: [number, number, number]; size: number }[] = [];
    const random = seededRandom(7);
    const spread = () => random() + random() + random() - 1.5; // −1.5…1.5, mostly near 0
    for (const city of earth.indiaCities) {
      indiaLights.push({ v: toVector(city.lat, city.lon), size: 1.4 + city.weight * 0.35 });
      for (let k = 0; k < 6 + city.weight * 9; k++) {
        const r = 0.35 * Math.sqrt(city.weight);
        indiaLights.push({
          v: toVector(city.lat + spread() * r, city.lon + spread() * r),
          size: 0.6 + random() * 0.7,
        });
      }
    }
    for (let placed = 0, tries = 0; placed < INDIA_SCATTER && tries < INDIA_SCATTER * 6; tries++) {
      const lon = 68 + random() * 29.5;
      const lat = 6.7 + random() * 30.4;
      if (!insideRing(indiaRings[0], lon, lat)) continue;
      indiaLights.push({ v: toVector(lat, lon), size: 0.5 + random() * 0.6 });
      placed++;
    }

    // One soft round light, drawn once and stamped for every India light (much cheaper than a gradient each)
    const glowSprite = document.createElement('canvas');
    glowSprite.width = glowSprite.height = 32;
    const sprite = glowSprite.getContext('2d');
    if (sprite) {
      const g = sprite.createRadialGradient(16, 16, 0, 16, 16, 16);
      g.addColorStop(0, '#fff6d8');
      g.addColorStop(0.18, INDIA_LIGHT);
      g.addColorStop(0.45, `rgba(${GOLD}, 0.3)`);
      g.addColorStop(1, `rgba(${GOLD}, 0)`);
      sprite.fillStyle = g;
      sprite.fillRect(0, 0, 32, 32);
    }

    const cities = earth.cities.map((c) => ({ ...c, v: toVector(c.lat, c.lon) }));
    const byName = new Map(cities.map((c) => [c.name, c]));
    // Fixed routes – only for the still globe ("reduce motion"); otherwise arcs jump between random cities
    const routes = earth.routes.flatMap(([from, to]) => {
      const a = byName.get(from);
      const b = byName.get(to);
      return a && b ? [{ a: a.v, b: b.v, angle: angleBetween(a.v, b.v) }] : [];
    });
    type Arc = { a: [number, number, number]; b: [number, number, number]; angle: number; born: number };
    let flying: Arc[] = [];
    let nextArc = 0;
    let seeded = false;

    let width = 0;
    let height = 0;
    let radius = 0;
    let sized = false; // false while the canvas has no size yet (hidden, or mid-resize) – nothing to draw
    let cx = 0;
    let cy = 0;
    let dotSize = 1.5;
    let cellSize = 7; // the land fill square per dot – the gap between dots, so they join up
    let dots = new Float32Array(0); // sinLat, cosLat, lon (radians) per land dot
    let seaDots = new Float32Array(0); // the same, per ocean dot
    let lit = new Uint8Array(0); // 1 = this land dot glows as a town
    let visible = new Float32Array(0); // per frame: x, y, fade, lit of the dots facing us
    let frame = 0;
    let lastTime = 0;
    let lastDraw = 0;
    let elapsed = 0;

    // Size the canvas, read the globe's circle and lay out the land dots for its size
    const build = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const globe = getComputedStyle(host, '::after');
      radius = parseFloat(globe.width) / 2 || width;
      // A canvas with no size gives a 0 radius, and the rim (radius − 2) would be negative –
      // which canvas refuses to draw. Wait for the next resize instead.
      sized = width > 0 && height > 0 && radius > 2;
      if (!sized) return;
      cx = width / 2;
      cy = (parseFloat(globe.top) || height * 0.7) + radius;
      // A --earth-horizon on the canvas (e.g. in a media query) overrides horizonLatitude
      horizon = parseFloat(getComputedStyle(canvas).getPropertyValue('--earth-horizon')) || horizonLatitude;
      const tilt = (90 - horizon) * DEG;
      sinT = Math.sin(tilt);
      cosT = Math.cos(tilt);

      // About 7px between dots at the front of the globe, never finer than the 0.5° map
      const spacing = Math.max(0.5, 7 / (radius * DEG));
      dotSize = Math.min(2, Math.max(1, radius * spacing * DEG * 0.24));
      cellSize = radius * spacing * DEG + 1;
      // Only the band that can reach the screen: from the horizon down to the bottom edge
      const reach = Math.acos(Math.max(-1, 1 - (height - (cy - radius)) / radius)) / DEG;
      const minLat = horizon - reach - 5;
      const values: number[] = [];
      const sea: number[] = []; // the dots between the continents, on the same grid
      const cellLat = 180 / land.rows;
      const cellLon = 360 / land.cols;
      for (let lat = 90 - spacing / 2; lat > Math.max(minLat, -90); lat -= spacing) {
        const row = Math.min(land.rows - 1, Math.floor((90 - lat) / cellLat));
        const step = spacing / Math.max(Math.cos(lat * DEG), 0.05);
        for (let lon = -180 + step / 2; lon < 180; lon += step) {
          const col = Math.min(land.cols - 1, Math.floor((lon + 180) / cellLon));
          (land.grid[row * land.cols + col] ? values : sea).push(Math.sin(lat * DEG), Math.cos(lat * DEG), lon * DEG);
        }
      }
      dots = Float32Array.from(values);
      seaDots = Float32Array.from(sea);
      // Towns: a fixed scatter (same every load), so the lights don't jump about on resize
      lit = Uint8Array.from({ length: dots.length / 3 }, (_, d) => {
        const h = Math.sin(dots[d * 3 + 2] * 913.7 + dots[d * 3] * 437.1) * 43758.5453;
        return h - Math.floor(h) < TOWN_SHARE ? 1 : 0;
      });
      visible = new Float32Array((dots.length / 3) * 4);
    };

    // Turn (about the poles), then tilt towards the viewer → [x, y, z], z > 0 = facing us
    const turnAndTilt = (v: [number, number, number], turn: number, lift = 1): [number, number, number] => {
      const s = Math.sin(turn);
      const c = Math.cos(turn);
      const x = v[0] * c - v[2] * s;
      const z = v[0] * s + v[2] * c;
      const y = v[1];
      return [x * lift, (y * cosT + z * sinT) * lift, (-y * sinT + z * cosT) * lift];
    };

    const draw = (still = false) => {
      ctx.clearRect(0, 0, width, height);
      if (!sized) return;
      // Turns slowly so the land drifts from right to left
      const turn = (startLongitude + speed * elapsed) * DEG;
      const lowest = (cy - height) / radius; // y below this is under the bottom of the screen

      // The oceans first: one darker grey disc (fading out towards the horizon like the land – the
      // stops follow the land's fade, (2z)^1.5 with z = √(1 − r²)), then its faint dot texture
      const ocean = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
      for (const r of [0, 0.6, 0.8, 0.866, 0.92, 0.96, 0.985, 1]) {
        ocean.addColorStop(r, `rgba(${SEA_FILL}, ${0.9 * Math.min(1, 2 * Math.sqrt(1 - r * r)) ** 1.5})`);
      }
      ctx.globalAlpha = 1;
      ctx.fillStyle = ocean;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = LAND_DOT;
      const half = dotSize / 2;
      for (let i = 0; i < seaDots.length; i += 3) {
        const sinLat = seaDots[i];
        const cosLat = seaDots[i + 1];
        const l = seaDots[i + 2] - turn;
        const z0 = cosLat * Math.cos(l);
        const y = sinLat * cosT + z0 * sinT;
        if (y < lowest) continue;
        const z = -sinLat * sinT + z0 * cosT;
        if (z <= 0) continue;
        ctx.globalAlpha = SEA_DOT_ALPHA * Math.min(1, z * 2) ** 1.5;
        ctx.fillRect(cx + radius * cosLat * Math.sin(l) - half, cy - radius * y - half, dotSize, dotSize);
      }

      // Land, in three passes over the dots facing us (all fading out towards the horizon,
      // where they crowd together): 1. dark olive cells that join up into solid continents
      let count = 0;
      ctx.fillStyle = LAND_FILL;
      const cellHalf = cellSize / 2;
      for (let i = 0, d = 0; i < dots.length; i += 3, d++) {
        const sinLat = dots[i];
        const cosLat = dots[i + 1];
        const l = dots[i + 2] - turn;
        const z0 = cosLat * Math.cos(l);
        const y = sinLat * cosT + z0 * sinT;
        if (y < lowest) continue;
        const z = -sinLat * sinT + z0 * cosT;
        if (z <= 0) continue;
        const sx = cx + radius * cosLat * Math.sin(l);
        const sy = cy - radius * y;
        const fade = Math.min(1, z * 2) ** 1.5;
        ctx.globalAlpha = 0.9 * fade;
        ctx.fillRect(sx - cellHalf, sy - cellHalf, cellSize, cellSize);
        visible[count * 4] = sx;
        visible[count * 4 + 1] = sy;
        visible[count * 4 + 2] = fade;
        visible[count * 4 + 3] = lit[d];
        count++;
      }
      // 2. the faint dot texture on top
      ctx.fillStyle = LAND_DOT;
      for (let j = 0; j < count; j++) {
        ctx.globalAlpha = 0.38 * visible[j * 4 + 2];
        ctx.fillRect(visible[j * 4] - half, visible[j * 4 + 1] - half, dotSize, dotSize);
      }
      // 3. scattered towns glowing yellow-green, like lights seen from space
      ctx.fillStyle = TOWN_LIGHT;
      for (let j = 0; j < count; j++) {
        if (!visible[j * 4 + 3]) continue;
        ctx.globalAlpha = 0.7 * visible[j * 4 + 2];
        ctx.fillRect(visible[j * 4] - dotSize * 0.65, visible[j * 4 + 1] - dotSize * 0.65, dotSize * 1.3, dotSize * 1.3);
      }

      const onScreen = (p: [number, number, number]) => p[2] > 0.02 && p[1] > lowest;
      const fadeOf = (z: number) => Math.min(1, z * 2) ** 1.5;

      // India at night: soft round warm lights, added together so the city clusters bloom
      ctx.globalCompositeOperation = 'lighter';
      for (const light of indiaLights) {
        const p = turnAndTilt(light.v, turn);
        if (!onScreen(p)) continue;
        const s = light.size * dotSize * 3.2;
        ctx.globalAlpha = 0.85 * fadeOf(p[2]);
        ctx.drawImage(glowSprite, cx + radius * p[0] - s / 2, cy - radius * p[1] - s / 2, s, s);
      }
      ctx.globalCompositeOperation = 'source-over';

      // Arcs jump slowly between random cities in view: a new one every ARC_EVERY seconds (a few at
      // once to start), each drawing in, holding, then fading over ARC_LIFE
      if (!still) {
        flying = flying.filter((arc) => elapsed - arc.born < ARC_LIFE);
        // Only cities facing us (not right on the horizon), so arcs stay over the globe, below the text
        const inView = cities.filter((city) => {
          const p = turnAndTilt(city.v, turn);
          return onScreen(p) && p[2] > 0.22;
        });
        // Spread them out: which strip of the screen a point is in, and how busy each strip is
        const stripOf = (v: [number, number, number]) => {
          const x = cx + radius * turnAndTilt(v, turn)[0];
          return Math.min(ARC_STRIPS - 1, Math.max(0, Math.floor((x / width) * ARC_STRIPS)));
        };
        const launch = (born: number) => {
          const busy = new Array(ARC_STRIPS).fill(0);
          const used = new Set<[number, number, number]>();
          for (const arc of flying) {
            busy[stripOf(arc.a)]++;
            busy[stripOf(arc.b)]++;
            used.add(arc.a);
            used.add(arc.b);
          }
          // Cities not already in an arc, quietest strips first (random order within a strip)
          const free = inView
            .filter((city) => !used.has(city.v))
            .map((city) => ({ city, strip: stripOf(city.v), order: Math.random() }))
            .sort((p, q) => busy[p.strip] - busy[q.strip] || p.order - q.order);
          const from = free[0];
          if (!from) return;
          // The far end: another quiet strip, the right distance away
          const to = free.find(
            ({ city, strip }) =>
              strip !== from.strip &&
              angleBetween(from.city.v, city.v) >= ARC_SPAN[0] * DEG &&
              angleBetween(from.city.v, city.v) <= ARC_SPAN[1] * DEG
          );
          if (!to) return;
          flying.push({ a: from.city.v, b: to.city.v, angle: angleBetween(from.city.v, to.city.v), born });
        };
        if (!seeded && inView.length > 1) {
          seeded = true;
          for (let k = 0; k < 5; k++) launch(elapsed - k * (ARC_LIFE / 6));
        }
        if (elapsed >= nextArc && flying.length < MAX_ARCS && inView.length > 1) {
          launch(elapsed);
          nextArc = elapsed + ARC_EVERY[0] + Math.random() * (ARC_EVERY[1] - ARC_EVERY[0]);
        }
      }
      const arcs = still
        ? routes.map((route) => ({ ...route, phase: 0.5 }))
        : flying.map((arc) => ({ ...arc, phase: (elapsed - arc.born) / ARC_LIFE }));

      // Arcs: lifted great circles that draw in, hold, then fade
      ctx.lineCap = 'round';
      arcs.forEach((route) => {
        // No check on the end cities: as the globe turns, any part that goes behind it is hidden below
        if (still && (!onScreen(turnAndTilt(route.a, turn)) || !onScreen(turnAndTilt(route.b, turn)))) return;
        const phase = route.phase;
        const drawn = Math.min(1, phase / 0.4);
        const alpha = phase < 0.75 ? 1 : 1 - (phase - 0.75) / 0.25;
        const rise = 0.05 + 0.16 * (route.angle / Math.PI); // longer arcs rise higher, but stay close to the globe
        const sinAngle = Math.sin(route.angle) || 1;
        let head: [number, number] | null = null; // last drawn point (none if it's all hidden)
        let wasHidden = false;
        ctx.beginPath();
        for (let k = 0; k <= ROUTE_POINTS; k++) {
          const t = k / ROUTE_POINTS;
          if (t > drawn) break;
          // Spherical interpolation between the two cities, raised in the middle
          const wa = Math.sin((1 - t) * route.angle) / sinAngle;
          const wb = Math.sin(t * route.angle) / sinAngle;
          const v: [number, number, number] = [
            route.a[0] * wa + route.b[0] * wb,
            route.a[1] * wa + route.b[1] * wb,
            route.a[2] * wa + route.b[2] * wb,
          ];
          const p = turnAndTilt(v, turn, 1 + rise * Math.sin(Math.PI * t));
          const sx = cx + radius * p[0];
          const sy = cy - radius * p[1];
          // Hidden behind the globe: on the far side and inside its outline
          const hidden = p[2] < 0 && p[0] * p[0] + p[1] * p[1] < 1;
          if (hidden) {
            wasHidden = true;
            continue;
          }
          if (k === 0 || wasHidden) ctx.moveTo(sx, sy);
          else ctx.lineTo(sx, sy);
          wasHidden = false;
          head = [sx, sy];
        }
        // A soft luminous glow under a fine bright line – stacked strokes (a blur on long arcs is slow)
        ctx.strokeStyle = `rgb(${HALO})`;
        ctx.globalAlpha = 0.08 * alpha;
        ctx.lineWidth = 9;
        ctx.stroke();
        ctx.globalAlpha = 0.2 * alpha;
        ctx.lineWidth = 4;
        ctx.stroke();
        ctx.globalAlpha = 0.95 * alpha;
        ctx.strokeStyle = `rgb(${LIGHT})`;
        ctx.lineWidth = 1.4;
        ctx.stroke();
        // Bright spark at the tip while it's drawing
        if (drawn < 1 && head) {
          ctx.beginPath();
          ctx.arc(head[0], head[1], 2.8, 0, Math.PI * 2);
          ctx.fillStyle = '#ffffff';
          ctx.fill();
        }
        ctx.shadowBlur = 0;
      });

      // City lights: a wide yellow-green glow and a bright core, twinkling (Bengaluru a little bigger)
      cities.forEach((city, i) => {
        const p = turnAndTilt(city.v, turn);
        if (!onScreen(p)) return;
        const sx = cx + radius * p[0];
        const sy = cy - radius * p[1];
        const twinkle = still ? 1 : 0.7 + 0.3 * Math.sin(elapsed * 2.2 + i * 1.9);
        const size = (city.name === 'Bengaluru' ? 1.5 : 1) * (0.6 + 0.6 * Math.min(1, p[2] * 2));
        const reach = 24 * size;
        const glow = ctx.createRadialGradient(sx, sy, 0, sx, sy, reach);
        glow.addColorStop(0, `rgba(${HALO}, 0.85)`);
        glow.addColorStop(0.25, `rgba(${HALO}, 0.35)`);
        glow.addColorStop(1, `rgba(${GREEN}, 0)`);
        ctx.globalAlpha = twinkle;
        ctx.fillStyle = glow;
        ctx.fillRect(sx - reach, sy - reach, reach * 2, reach * 2);
        ctx.beginPath();
        ctx.arc(sx, sy, 2 * size, 0, Math.PI * 2);
        ctx.fillStyle = '#fbffe8';
        ctx.fill();
        // Lens-flare streaks on the bigger lights (the ones facing us)
        if (size > 0.95) {
          const flare = reach * 1.6;
          const streak = ctx.createLinearGradient(sx - flare, sy, sx + flare, sy);
          streak.addColorStop(0, `rgba(${HALO}, 0)`);
          streak.addColorStop(0.5, `rgba(${HALO}, 0.75)`);
          streak.addColorStop(1, `rgba(${HALO}, 0)`);
          ctx.globalAlpha = twinkle * 0.8;
          ctx.fillStyle = streak;
          ctx.fillRect(sx - flare, sy - 0.6, flare * 2, 1.2);
          ctx.globalAlpha = twinkle * 0.45;
          ctx.fillRect(sx - 0.6, sy - flare * 0.45, 1.2, flare * 0.9);
        }
      });

      // Atmosphere: a yellow-green haze thickening towards the edge, and a bright glowing horizon
      const haze = ctx.createRadialGradient(cx, cy, radius * 0.78, cx, cy, radius);
      haze.addColorStop(0, `rgba(${HALO}, 0)`);
      haze.addColorStop(0.75, `rgba(${HALO}, 0.08)`);
      haze.addColorStop(1, `rgba(${HALO}, 0.32)`);
      ctx.globalAlpha = 1;
      ctx.fillStyle = haze;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fill();
      // The glow is three soft strokes stacked (a blur on a circle this big is slow)
      ctx.beginPath();
      ctx.arc(cx, cy, radius - 2, Math.PI, Math.PI * 2);
      for (const [lineWidth, alpha] of [
        [26, 0.07],
        [12, 0.16],
        [3, 0.85],
      ]) {
        ctx.strokeStyle = `rgba(${lineWidth > 3 ? HALO : LIGHT}, ${alpha})`;
        ctx.lineWidth = lineWidth;
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
    };

    const tick = (time: number) => {
      const dt = lastTime ? Math.min((time - lastTime) / 1000, 0.05) : 0;
      lastTime = time;
      elapsed += dt;
      if (time - lastDraw >= 1000 / FPS - 2) {
        lastDraw = time;
        draw();
      }
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
    draw(reduceMotion);

    const resizeObserver = new ResizeObserver(() => {
      build();
      draw(reduceMotion);
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
  }, [earth, horizonLatitude, startLongitude, speed]);

  return ref;
}
