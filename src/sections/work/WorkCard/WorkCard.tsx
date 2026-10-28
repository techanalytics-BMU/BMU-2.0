import Image from 'next/image';
import Link from 'next/link';
import { formatDate, toneOf, visualOf } from '@/lib/work';
import type { WorkPost } from '@/types/work';
import styles from './WorkCard.module.css';

type Props = {
  post: WorkPost;
  index?: number; // position on screen – staggers the entrance
  minRead: string; // '{count} min read'
};

// Compact tinted card for an article: category and title on the left, date · read time and an
// arrow at the bottom, the cover (or the category's chrome object) large on the right, cropped
// by the edge. Used on /work and under each article ("Keep reading").
export default function WorkCard({ post, index = 0, minRead }: Props) {
  const visual = visualOf(post);

  return (
    <Link
      href={`/work/${post.slug}`}
      className={`${styles.card} ${styles[toneOf(post)]}`}
      style={{ '--i': index } as React.CSSProperties}
    >
      <span className={styles.text}>
        <span className={styles.category}>{post.category}</span>
        <span className={styles.title}>{post.title}</span>
        <span className={styles.meta}>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden="true">·</span>
          <span>{minRead.replace('{count}', String(post.readTime))}</span>
        </span>
      </span>

      {visual && (
        <Image
          src={visual}
          alt=""
          width={240}
          height={240}
          className={post.cover ? styles.cover : styles.object}
        />
      )}

      <span className={styles.arrow} aria-hidden="true">
        ↗
      </span>
    </Link>
  );
}
