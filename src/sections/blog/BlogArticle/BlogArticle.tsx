import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button/Button';
import { blogArticle } from '@/data/blog/blogArticle';
import { site } from '@/data/site';
import { formatDate, relatedPosts, visualOf } from '@/lib/blog/posts';
import { slugify } from '@/lib/blog/text';
import type { BlogBlock, BlogPost, BlogPostSummary } from '@/types/blog';
import BlogCard from '../BlogCard/BlogCard';
import styles from './BlogArticle.module.css';
import BlogContents from './BlogContents';
import BlogReadingProgress from './BlogReadingProgress';
import BlogShare from './BlogShare';
import BlogText from './BlogText';

const CONTENTS_FROM = 3; // H2 headings needed before the table of contents is shown

/** An id for every H2 (for the table of contents and "jump to" links), unique within the post */
function headingIds(blocks: BlogBlock[]) {
  const used = new Map<string, number>();
  return blocks.map((block) => {
    if (block.type !== 'h2') return undefined;
    const base = slugify(block.text) || 'section';
    const seen = used.get(base) ?? 0;
    used.set(base, seen + 1);
    return seen ? `${base}-${seen + 1}` : base;
  });
}

function Block({ block, id }: { block: BlogBlock; id?: string }) {
  switch (block.type) {
    case 'intro':
      return (
        <p className={styles.intro}>
          <BlogText text={block.text} />
        </p>
      );
    case 'h2':
      return (
        <h2 id={id} className={styles.h2}>
          {block.text}
        </h2>
      );
    case 'h3':
      return <h3 className={styles.h3}>{block.text}</h3>;
    case 'list': {
      const List = block.ordered ? 'ol' : 'ul';
      return (
        <List className={block.ordered ? styles.orderedList : styles.list}>
          {block.items.map((item, i) => (
            <li key={i}>
              <BlogText text={item} />
            </li>
          ))}
        </List>
      );
    }
    case 'table':
      return (
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                {block.headers.map((header, i) => (
                  <th key={i} scope="col">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                    <td key={j}>
                      <BlogText text={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case 'tip':
    case 'warning':
      return (
        <aside className={styles.callout} data-kind={block.type}>
          <span className={styles.calloutIcon} aria-hidden="true">
            {block.type === 'tip' ? '💡' : '⚠️'}
          </span>
          <p>
            <BlogText text={block.text} />
          </p>
        </aside>
      );
    case 'quote':
      return <blockquote className={styles.quote}>{block.text}</blockquote>;
    case 'image':
      if (!block.src) return null; // no picture chosen yet
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
          {(block.caption || block.credit) && (
            <figcaption className={styles.caption}>
              {block.caption}
              {block.caption && block.credit && ' · '}
              {block.credit && <span className={styles.credit}>{block.credit}</span>}
            </figcaption>
          )}
        </figure>
      );
    case 'services':
      return (
        <div className={styles.services}>
          {block.items.map((item) => (
            <Link key={item.slug} href={`/services/${item.slug}`} className={styles.service}>
              <span className={styles.serviceName}>{item.name}</span>
              <span className={styles.serviceReason}>{item.reason}</span>
              <span className={styles.serviceLink} aria-hidden="true">
                View service →
              </span>
            </Link>
          ))}
        </div>
      );
    case 'cta':
      return (
        <aside className={styles.inlineCta}>
          <p className={styles.inlineCtaText}>{block.text}</p>
          <Button href={block.buttonLink}>{block.buttonText}</Button>
        </aside>
      );
    default:
      return (
        <p className={styles.p}>
          <BlogText text={block.text} />
        </p>
      );
  }
}

type Props = {
  post: BlogPost;
  all: BlogPostSummary[]; // every published post – for "Keep reading" and the card colours
};

/** The card beside the article: free audit, Call / WhatsApp, and the services the post links to */
function Enquiry({ post }: { post: BlogPost }) {
  const t = blogArticle.enquiry;
  const services = [
    ...new Map(
      post.content
        .flatMap((block) => (block.type === 'services' ? block.items : []))
        .filter((item) => item.slug)
        .map((item) => [item.slug, item.name] as const)
    ),
  ];

  return (
    <div className={styles.enquiry}>
      <p className={styles.enquiryEyebrow}>{t.eyebrow}</p>
      <p className={styles.enquiryTitle}>{t.title}</p>
      <p className={styles.enquiryText}>{t.text}</p>
      <Button href={t.cta.href} className={styles.enquiryButton}>
        {t.cta.label}
      </Button>
      <div className={styles.enquiryContacts}>
        <a href={site.phoneHref} className={styles.enquiryContact}>
          <Image src="/icons/common/phone.svg" alt="" width={16} height={16} />
          {t.call}
        </a>
        <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className={styles.enquiryContact}>
          <Image src="/icons/social/whatsapp.svg" alt="" width={16} height={16} />
          {t.whatsapp}
        </a>
      </div>

      {services.length > 0 ? (
        <div className={styles.enquiryServices}>
          <p className={styles.enquiryServicesLabel}>{t.servicesLabel}</p>
          {services.map(([slug, name]) => (
            <Link key={slug} href={`/services/${slug}`} className={styles.enquiryService}>
              {name}
              <span aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
      ) : (
        post.category && (
          <div className={styles.enquiryServices}>
            <Link
              href={`/blog?category=${encodeURIComponent(post.category)}#articles`}
              className={styles.enquiryService}
            >
              {t.categoryLabel.replace('{category}', post.category)}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        )
      )}
    </div>
  );
}

// One article (/blog/<slug>), as a full page: the cover edge to edge with the title, intro,
// author line (with "Updated …" once edited) and tags on it over a dark fade (no cover: black
// and lime with the category's chrome object). Below: the table of contents (3+ H2s), the article
// with its FAQs and share buttons, and a sticky enquiry card – three columns on wide screens, one
// on phones. Then "Keep reading" and a call to action.
export default function BlogArticle({ post, all }: Props) {
  const t = blogArticle;
  const visual = visualOf(post);
  const related = relatedPosts(post.slug, post.category, all);
  const ids = headingIds(post.content);
  const contents = post.content.flatMap((block, i) =>
    block.type === 'h2' && ids[i] ? [{ id: ids[i]!, text: block.text }] : []
  );
  // Edited a day or more after publishing → show the update date too
  const updated =
    post.published_at &&
    new Date(post.updated_at).getTime() - new Date(post.published_at).getTime() > 86400000;

  return (
    <article className={styles.article}>
      <BlogReadingProgress targetId="article-body" />

      <div className={styles.hero}>
        {post.cover_image_url ? (
          <Image
            src={post.cover_image_url}
            alt={post.cover_image_alt ?? ''}
            fill
            priority
            sizes="100vw"
            className={styles.heroPhoto}
          />
        ) : (
          <>
            <div className={styles.heroPanel} aria-hidden="true" />
            {visual && (
              <Image src={visual} alt="" width={420} height={420} priority className={styles.heroObject} />
            )}
          </>
        )}

        <div className={styles.heroInner}>
          <header className={styles.header}>
            <h1 className={styles.title}>{post.title}</h1>
            {post.excerpt && <p className={styles.excerpt}>{post.excerpt}</p>}
            <p className={styles.meta}>
              <span className={styles.avatar} aria-hidden="true">
                {post.author_name.charAt(0)}
              </span>
              {post.author_name}
              {post.published_at && (
                <>
                  <span aria-hidden="true">·</span>
                  <time dateTime={post.published_at}>{formatDate(post.published_at)}</time>
                </>
              )}
              {updated && (
                <>
                  <span aria-hidden="true">·</span>
                  <time dateTime={post.updated_at}>
                    {t.updated.replace('{date}', formatDate(post.updated_at))}
                  </time>
                </>
              )}
              <span aria-hidden="true">·</span>
              {t.minRead.replace('{count}', String(post.read_minutes))}
            </p>
            {post.tags.length > 0 && (
              <ul className={styles.tags}>
                {post.tags.map((tag) => (
                  <li key={tag} className={styles.tag}>
                    {tag}
                  </li>
                ))}
              </ul>
            )}
          </header>
        </div>
      </div>

      <div className={styles.layout} data-contents={contents.length >= CONTENTS_FROM}>
        {contents.length >= CONTENTS_FROM && <BlogContents label={t.contents} items={contents} />}

        <div id="article-body" className={styles.body}>
          {post.content.map((block, i) => (
            <Block key={i} block={block} id={ids[i]} />
          ))}

          {post.faqs.length > 0 && (
            <section className={styles.faqs} aria-labelledby="faq-heading">
              <h2 id="faq-heading" className={styles.h2}>
                {t.faqHeading}
              </h2>
              {post.faqs.map((faq, i) => (
                <details key={i} className={styles.faq} open={i === 0}>
                  <summary className={styles.faqQuestion}>{faq.question}</summary>
                  <p className={styles.faqAnswer}>
                    <BlogText text={faq.answer} />
                  </p>
                </details>
              ))}
            </section>
          )}

          <BlogShare url={`${site.url}/blog/${post.slug}`} title={post.title} labels={t.share} />
        </div>

        <aside className={styles.aside}>
          <Enquiry post={post} />
        </aside>
      </div>

      {related.length > 0 && (
        <section className={styles.related} aria-labelledby="related-heading">
          <h2 id="related-heading" className={styles.relatedHeading}>
            {t.relatedHeading}
          </h2>
          <div className={styles.relatedGrid}>
            {related.map((other) => (
              <BlogCard key={other.slug} post={other} all={all} minRead={t.minRead} />
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
