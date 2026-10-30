'use client';

import { useParticleField } from '@/hooks/useParticleField';

// White and lime only – lighter than the landing hero's field
const COLORS = [
  { color: '#ffffff', weight: 0.6 },
  { color: '#8cc63f', weight: 0.4 },
];

// Particles orbiting the hero's beacon on flat ovals (canvas, see src/hooks/useParticleField.ts).
// The canvas is one screen tall, sitting on the hero's bottom edge; centerY and tilt match the
// beacon's place (--beacon) and the rings' flatness (--flat) in PseoTemplate.module.css.
export default function PseoOrbitField({ className }: { className: string }) {
  const ref = useParticleField<HTMLCanvasElement>({
    motion: 'orbit',
    colors: COLORS,
    tilt: 0.28,
    centerY: 0.84,
    density: 4200,
    maxParticles: 240,
    period: 70,
  });
  return <canvas ref={ref} className={className} aria-hidden="true" />;
}
