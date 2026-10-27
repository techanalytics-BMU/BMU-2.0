import Image from 'next/image';
import Link from 'next/link';
import { servicesMenu } from '@/data/navigation';
import type { ServicesMenuItem } from '@/types/navigation';
import styles from './NavbarServicesMenu.module.css';

type Props = {
  id: string;
  open: boolean;
  onClose: () => void;
  onPointerEnter: (event: React.PointerEvent) => void; // keeps the panel open while hovered
  onPointerLeave: (event: React.PointerEvent) => void;
};

function Card({
  item,
  index,
  onClose,
}: {
  item: ServicesMenuItem;
  index: number;
  onClose: () => void;
}) {
  const content = (
    <>
      <span className={styles.text}>
        <span className={styles.title}>{item.title}</span>
        <span className={styles.description}>{item.description}</span>
      </span>
      <Image src={item.icon} alt="" width={200} height={200} className={styles.icon} />
    </>
  );
  const style = { '--i': index } as React.CSSProperties;

  return item.href ? (
    <Link href={item.href} className={styles.card} style={style} onClick={onClose}>
      {content}
    </Link>
  ) : (
    <div className={styles.card} style={style}>
      {content}
    </div>
  );
}

// Cursor spotlight: every card gets the pointer position relative to itself (--mx / --my),
// so the light and the glowing border edge follow the cursor across the whole grid
function trackPointer(event: React.PointerEvent<HTMLDivElement>) {
  for (const card of event.currentTarget.children as HTMLCollectionOf<HTMLElement>) {
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${event.clientX - rect.left}px`);
    card.style.setProperty('--my', `${event.clientY - rect.top}px`);
  }
}

// Desktop panel that drops down from "Services" in the navbar: a bento grid of the service
// groups, each with a chrome icon. Stays mounted so it can fade in and out; `inert` keeps it
// out of the tab order while closed. (Phones list the services inside the menu sheet instead.)
export default function NavbarServicesMenu({
  id,
  open,
  onClose,
  onPointerEnter,
  onPointerLeave,
}: Props) {
  return (
    <div
      id={id}
      className={styles.panel}
      data-open={open}
      inert={!open}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      data-lenis-prevent // let the panel scroll on its own (Lenis handles the page)
    >
      <div className={styles.grid} onPointerMove={trackPointer}>
        {servicesMenu.items.map((item, i) => (
          <Card key={item.title} item={item} index={i} onClose={onClose} />
        ))}
      </div>
    </div>
  );
}
