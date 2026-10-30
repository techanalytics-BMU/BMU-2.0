import Link from 'next/link';
import Badge from '@/components/ui/Badge/Badge';
import Button from '@/components/ui/Button/Button';
import { site } from '@/data/site';
import type { PageSection, PseoPage, SectionItem } from '@/types/pseo';
import styles from './PseoTemplate.module.css';

// The one template behind every programmatic SEO page (service and industry hubs, Service ×
// Industry, Service × Locality, Industry × Locality, Service × City, and the /services and
// /industries indexes). Each page arrives as data (src/lib/pseo/pages.ts); this only draws it.
// Server-rendered, so every word – FAQ answers included – is in the HTML crawlers read.
// To restyle all of them at once, change this file and its stylesheet.

// Structured data, as one JSON-LD graph ("<" escaped so the text can never close the script tag)
function JsonLd({ schema }: { schema: PseoPage['schema'] }) {
  const json = JSON.stringify({ '@context': 'https://schema.org', '@graph': schema }).replace(
    /</g,
    '\\u003c'
  );
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}

function Item({
  item,
  index,
  kind,
}: {
  item: SectionItem;
  index: number;
  kind: 'cards' | 'steps';
}) {
  const body = (
    <>
      <span className={styles.itemTop}>
        {kind === 'steps' ? (
          <span className={styles.stepNumber}>{String(index + 1).padStart(2, '0')}</span>
        ) : null}
        {item.tag && <span className={styles.tag}>{item.tag}</span>}
      </span>
      <h3 className={styles.itemTitle}>{item.title}</h3>
      {item.text && <p className={styles.itemText}>{item.text}</p>}
    </>
  );
  return (
    <li className={`${styles.item} ${item.tag?.startsWith('Where') ? styles.highlight : ''}`}>
      {item.href ? (
        <Link href={item.href} className={styles.itemLink}>
          {body}
        </Link>
      ) : (
        body
      )}
    </li>
  );
}

function Section({ section }: { section: PageSection }) {
  const head = (
    <div className={styles.sectionHead}>
      {section.eyebrow && <p className={styles.eyebrow}>{section.eyebrow}</p>}
      <h2 className={styles.h2}>{section.heading}</h2>
      {'intro' in section && section.intro && (
        <p className={styles.sectionIntro}>{section.intro}</p>
      )}
    </div>
  );

  switch (section.kind) {
    case 'prose':
      return (
        <section id={section.id} className={`${styles.section} ${styles.prose}`}>
          {head}
          <div className={styles.paragraphs}>
            {section.paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
          </div>
        </section>
      );
    case 'checks':
      return (
        <section id={section.id} className={styles.section}>
          {head}
          <ul className={styles.checks}>
            {section.items.map((item) => (
              <li key={item.title}>
                <span className={styles.tick} aria-hidden="true" />
                <span>
                  <strong>{item.title}</strong>
                  {item.text && <span className={styles.checkText}>{item.text}</span>}
                </span>
              </li>
            ))}
          </ul>
        </section>
      );
    case 'links':
      // Long lists (every locality, every city) read better as plain text columns than as cards
      if (section.compact) {
        return (
          <section id={section.id} className={styles.section}>
            {head}
            <ul className={styles.linkColumns}>
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </section>
        );
      }
      return (
        <section id={section.id} className={styles.section}>
          {head}
          <ul className={styles.links}>
            {section.links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={styles.linkCard}>
                  <span className={styles.linkLabel}>{link.label}</span>
                  {link.note && <span className={styles.linkNote}>{link.note}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      );
    default:
      return (
        <section id={section.id} className={styles.section}>
          {head}
          <ol className={section.kind === 'steps' ? styles.steps : styles.cards}>
            {section.items.map((item, i) => (
              <Item
                key={item.title}
                item={item}
                index={i}
                kind={section.kind === 'steps' ? 'steps' : 'cards'}
              />
            ))}
          </ol>
        </section>
      );
  }
}

export default function PseoTemplate({ page }: { page: PseoPage }) {
  const related = page.related.filter((group) => group.links.length);

  return (
    <main className={styles.page}>
      <JsonLd schema={page.schema} />

      <header className={styles.hero}>
        <nav aria-label="Breadcrumb" className={styles.breadcrumbs}>
          <ol>
            {page.breadcrumbs.map((crumb, i) => (
              <li key={crumb.href}>
                {i < page.breadcrumbs.length - 1 ? (
                  <Link href={crumb.href}>{crumb.label}</Link>
                ) : (
                  <span aria-current="page">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <Badge>{page.eyebrow}</Badge>
        <h1 className={styles.h1}>
          <span className={styles.line}>{page.h1}</span>
          {page.h1Accent && <span className="text-accent">{page.h1Accent}</span>}
        </h1>
        <p className={styles.intro}>{page.intro}</p>
        <div className={styles.actions}>
          <Button href="/contact" variant="accent">
            Get a free audit
          </Button>
          <Button href={site.whatsapp} variant="secondary">
            WhatsApp us
          </Button>
        </div>
      </header>

      {page.facts.length > 0 && (
        <dl className={styles.facts}>
          {page.facts.map((fact) => (
            <div key={fact.label} className={styles.fact}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      )}

      {page.sections.map((section) => (
        <Section key={section.id} section={section} />
      ))}

      {page.faqs.length > 0 && (
        <section id="faq" className={styles.section}>
          <div className={styles.sectionHead}>
            <p className={styles.eyebrow}>FAQ</p>
            <h2 className={styles.h2}>Questions people ask</h2>
          </div>
          <div className={styles.faqs}>
            {page.faqs.map((faq, i) => (
              <details key={faq.q} className={styles.faq} open={i === 0}>
                <summary>{faq.q}</summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className={`${styles.section} ${styles.related}`}>
          {related.map((group) => (
            <div key={group.heading}>
              <h2 className={styles.relatedHeading}>{group.heading}</h2>
              <ul>
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      )}

      <section className={styles.cta}>
        <h2 className={styles.ctaHeading}>{page.cta.heading}</h2>
        <p className={styles.ctaText}>{page.cta.text}</p>
        <div className={styles.actions}>
          <Button href="/contact" variant="accent">
            Get a free audit
          </Button>
          <Button href={site.phoneHref} variant="secondary">
            Call {site.phone}
          </Button>
        </div>
      </section>
    </main>
  );
}
