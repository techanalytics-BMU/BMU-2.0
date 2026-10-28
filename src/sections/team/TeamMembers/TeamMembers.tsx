'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Badge from '@/components/ui/Badge/Badge';
import { teamMembers } from '@/data/team/teamMembers';
import { useInView } from '@/hooks/useInView';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import styles from './TeamMembers.module.css';

const PLACEHOLDER = '/images/team/placeholder-person.svg';
const PUPIL_RANGE = 4; // px the pupils can move from the centre of the eye

// Team: tall pills in staggered columns that drift past each other as you scroll (--progress).
// Each shows name and role at the top and a black-and-white photo tinted by the pill's colour;
// hovering (or tapping) a pill brings the photo back to colour and pops on a fun-fact sticker.
// The last pill is empty – a little face whose eyes follow the cursor, inviting you to join.
export default function TeamMembers() {
  const { badge, heading, description, members, hiring } = teamMembers;
  const sectionRef = useScrollProgress<HTMLElement>({ mode: 'pinned' });
  const header = useInView<HTMLDivElement>();
  const grid = useInView<HTMLUListElement>({ threshold: 0.15 });
  const hiringView = useInView<HTMLLIElement>({ threshold: 0, once: false });
  const faceRef = useRef<HTMLSpanElement>(null);

  // The face's pupils look towards the pointer, anywhere on the page (only while it is on screen)
  useEffect(() => {
    const face = faceRef.current;
    if (!face || !hiringView.inView) return;
    let frame = 0;
    let x = 0;
    let y = 0;

    const look = () => {
      frame = 0;
      const rect = face.getBoundingClientRect();
      const dx = x - (rect.left + rect.width / 2);
      const dy = y - (rect.top + rect.height / 2);
      const reach = Math.min(Math.hypot(dx, dy) / 160, 1); // looks fully sideways from 160px away
      const angle = Math.atan2(dy, dx);
      face.style.setProperty('--px', `${(Math.cos(angle) * reach * PUPIL_RANGE).toFixed(2)}px`);
      face.style.setProperty('--py', `${(Math.sin(angle) * reach * PUPIL_RANGE).toFixed(2)}px`);
    };
    const onMove = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      if (!frame) frame = requestAnimationFrame(look);
    };

    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', onMove);
    };
  }, [hiringView.inView]);

  return (
    <section ref={sectionRef} id="team" className={styles.section}>
      <div ref={header.ref} className={styles.header} data-in-view={header.inView}>
        <Badge>{badge}</Badge>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.description}>{description}</p>
      </div>

      <ul ref={grid.ref} className={styles.grid} data-in-view={grid.inView}>
        {members.map((member, i) => (
          <li
            key={`${member.name}-${member.role}`}
            className={`${styles.pill} ${styles[member.tone]}`}
            style={{ '--i': i } as React.CSSProperties}
            tabIndex={member.funFact ? 0 : undefined} // a tap or Tab shows the sticker too
          >
            <span className={styles.text}>
              <span className={styles.name}>{member.name}</span>
              <span className={styles.role}>{member.role}</span>
            </span>
            <span className={styles.photoWrap}>
              <Image
                src={member.photo ?? PLACEHOLDER}
                alt={member.name}
                fill
                sizes="(max-width: 860px) 45vw, 200px"
                className={styles.photo}
              />
            </span>
            {member.funFact && (
              <span className={styles.sticker} aria-hidden="true">
                {member.funFact}
              </span>
            )}
          </li>
        ))}

        <li
          ref={hiringView.ref}
          className={`${styles.pill} ${styles.hiring}`}
          style={{ '--i': members.length } as React.CSSProperties}
        >
          <Link href={hiring.href} className={styles.hiringLink}>
            <span className={styles.text}>
              <span className={styles.name}>{hiring.title}</span>
              <span className={styles.role}>{hiring.text}</span>
            </span>
            <span ref={faceRef} className={styles.face} aria-hidden="true">
              <span className={styles.eye}>
                <span className={styles.pupil} />
              </span>
              <span className={styles.eye}>
                <span className={styles.pupil} />
              </span>
              <span className={styles.mouth} />
            </span>
          </Link>
        </li>
      </ul>
    </section>
  );
}
