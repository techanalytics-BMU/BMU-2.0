import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button/Button';
import { workArticle } from '@/data/work/workArticle';
import { formatDate, relatedPosts, toneOf, visualOf } from '@/lib/work';
import type { WorkPost, WorkPostBlock } from '@/types/work';
import cardStyles from '../WorkCard/WorkCard.module.css';
import WorkCard from '../WorkCard/WorkCard';
import styles from './WorkArticle.module.css';
import WorkReadingProgress from './WorkReadingProgress';

function Block({ block }: { block: WorkPostBlock }) {
  switch (block.type) {
    case 'heading':
      return <h2 className={styles.h2}>{block.text}</h2>;
    case 'list':
      return (
        <ul className={styles.list}>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case 'quote':
      return <blockquote className={styles.quote}>{block.text}</blockquote>;
    case 'image':
      return (
        <figure className={styles.figure}>
          <Image
            src={block.src}
            alt={block.alt}
            width={1360}
            height={860}
            sizes="(max-width: 760px) 100vw, 680px"
            className={styles.image}
          />
          {block.caption && <figcaption className={styles.caption}>{block.caption}</figcaption>}
        </figure>
      );
    default:
      return <p className={styles.p}>{block.text}</p>;
  }
}

// One article: back link, category, title, intro and author line; a large tinted cover with the
// post's image (or its category's chrome object); the body; then "Keep reading" and a call to action.
export default function WorkArticle({ post }: { post: WorkPost }) {
  const t = workArticle;
  const visual = visualOf(post);
  const related = relatedPosts(post);

  return (
    <article className={styles.article}>
      <WorkReadingProgress targetId="article-body" />

      <header className={styles.header}>
        <Link href="/work#articles" className={styles.back}>
          <span aria-hidden="true">←</span> {t.back}
        </Link>
        <Link
          href={`/work?category=${encodeURIComponent(post.category)}#articles`}
          className={styles.category}
        >
          {post.category}
        </Link>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.excerpt}>{post.excerpt}</p>
        <p className={styles.meta}>
          <span className={styles.avatar} aria-hidden="true">
            {post.author.charAt(0)}
          </span>
          {post.author}
          <span aria-hidden="true">·</span>
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden="true">·</span>
          {t.minRead.replace('{count}', String(post.readTime))}
        </p>
      </header>

      <div className={`${styles.cover} ${cardStyles[toneOf(post)]}`}>
        {visual && (
          <Image
            src={visual}
            alt=""
            width={420}
            height={420}
            priority
            className={post.cover ? styles.coverImage : styles.coverObject}
          />
        )}
      </div>

      <div id="article-body" className={styles.body}>
        {post.body.map((block, i) => (
          <Block key={i} block={block} />
        ))}
      </div>

      {related.length > 0 && (
        <section className={styles.related} aria-labelledby="related-heading">
          <h2 id="related-heading" className={styles.relatedHeading}>
            {t.relatedHeading}
          </h2>
          <div className={styles.relatedGrid}>
            {related.map((other) => (
              <WorkCard key={other.slug} post={other} minRead={t.minRead} />
            ))}
          </div>
        </section>
      )}

      <aside className={styles.cta}>
        <div>
          <p className={styles.ctaHeading}>{t.ctaHeading}</p>
          <p className={styles.ctaText}>{t.ctaText}</p>
        </div>
        <Button href={t.cta.href}>{t.cta.label}</Button>
      </aside>
    </article>
  );
}
