import Image from 'next/image';
import Link from 'next/link';
import { formatDate, toneOf, visualOf } from '@/lib/blog/posts';
import type { BlogPostSummary } from '@/types/blog';
import styles from './BlogCard.module.css';

type Props = {
  post: BlogPostSummary;
  all: BlogPostSummary[]; // every post, newest first – fixes the card's colour
  index?: number; // position on screen – staggers the entrance
  minRead: string; // '{count} min read'
};

// Compact tinted card for an article: category and title on the left, date · read time and an
// arrow at the bottom, the cover (or the category's chrome object) large on the right, cropped
// by the edge. Used on /blog, /work and under each article ("Keep reading").
export default function BlogCard({ post, all, index = 0, minRead }: Props) {
  const visual = visualOf(post);

  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`${styles.card} ${styles[toneOf(post, all)]}`}
      style={{ '--i': index } as React.CSSProperties}
    >
      <span className={styles.text}>
        {post.category && <span className={styles.category}>{post.category}</span>}
        <span className={styles.title}>{post.title}</span>
        <span className={styles.meta}>
          {post.published_at && (
            <time dateTime={post.published_at}>{formatDate(post.published_at)}</time>
          )}
          <span aria-hidden="true">·</span>
          <span>{minRead.replace('{count}', String(post.read_minutes))}</span>
        </span>
      </span>

      {visual && (
        <Image
          src={visual}
          alt=""
          width={240}
          height={240}
          className={post.cover_image_url ? styles.cover : styles.object}
        />
      )}
    </Link>
  );
}
