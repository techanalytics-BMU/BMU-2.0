import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button/Button';
import { site } from '@/data/site';
import type { PageSection, PseoPage, SectionItem } from '@/types/pseo';
import PseoMobileBar from './PseoMobileBar';
import styles from './PseoTemplate.module.css';

// The one template behind every programmatic SEO page (service and industry hubs, Service ×
// Industry / Business type / Locality / City / Dubai area / city abroad, and the /services and
// /industries indexes). Each page arrives as data (src/lib/pseo/pages.ts); this only draws it.
// Server-rendered, so every word – FAQ answers included – is in the HTML crawlers read.
// To restyle all of them at once, change this file and its stylesheet.
//
// Layout: hero (text + "At a glance" card over a planet horizon) → numbered sections → FAQ beside
// a help card → related links → closing call to action. Phones get a sticky contact bar.

// Structured data, as one JSON-LD graph ("<" escaped so the text can never close the script tag)
function JsonLd({ schema }: { schema: PseoPage['schema'] }) {
  const json = JSON.stringify({ '@context': 'https://schema.org', '@graph': schema }).replace(
    /</g,
    '\\u003c'
  );
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}

const pad = (n: number) => String(n).padStart(2, '0');

// A card in a grid; the whole card is the link when it has one
function Card({ item, index }: { item: SectionItem; index: number }) {
  const where = item.tag?.startsWith('Where');
  const body = (
    <>
      <span className={styles.cardTop}>
        <span className={styles.cardIndex}>{pad(index + 1)}</span>
        {item.tag && (
          <span className={`${styles.tag} ${where ? styles.tagLive : ''}`}>{item.tag}</span>
        )}
      </span>
      <h3 className={styles.cardTitle}>{item.title}</h3>
      {item.text && <p className={styles.cardText}>{item.text}</p>}
    </>
  );
  return (
    <li className={styles.card} data-live={where || undefined}>
      {item.href ? (
        <Link href={item.href} className={styles.cardLink}>
          {body}
        </Link>
      ) : (
        <div className={styles.cardBody}>{body}</div>
      )}
    </li>
  );
}

function SectionHead({ section, number }: { section: PageSection; number: number }) {
  return (
    <div className={styles.sectionHead}>
      {section.eyebrow && (
        <p className={styles.eyebrow}>
          <span className={styles.eyebrowNumber}>{pad(number)}</span>
          {section.eyebrow}
        </p>
      )}
      <h2 className={styles.h2}>{section.heading}</h2>
      {'intro' in section && section.intro && (
        <p className={styles.sectionIntro}>{section.intro}</p>
      )}
    </div>
  );
}

const SearchIcon = () => (
  <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true" className={styles.searchIcon}>
    <circle cx="8.5" cy="8.5" r="5.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
    <path d="m12.6 12.6 4.4 4.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

function Section({ section, number }: { section: PageSection; number: number }) {
  const head = <SectionHead section={section} number={number} />;

  switch (section.kind) {
    // Heading pinned on the left, the text on the right – the first paragraph set larger
    case 'prose':
      return (
        <section id={section.id} className={`${styles.section} ${styles.prose}`}>
          <div className={styles.proseHead}>{head}</div>
          <div className={styles.paragraphs}>
            {section.paragraphs.map((text, i) => (
              <p key={text} className={i === 0 ? styles.lead : undefined}>
                {text}
              </p>
            ))}
          </div>
        </section>
      );

    // Searches customers type, drawn as search boxes; other lists as ticks in a panel
    case 'checks':
      return (
        <section id={section.id} className={styles.section}>
          {head}
          {section.display === 'search' ? (
            <ul className={styles.searches}>
              {section.items.map((item) => (
                <li key={item.title} className={styles.search}>
                  <SearchIcon />
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
          ) : (
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
          )}
        </section>
      );

    case 'links':
      return (
        <section id={section.id} className={styles.section}>
          {head}
          {/* Long lists (every locality, every city) read better as plain text columns */}
          {section.compact ? (
            <ul className={styles.linkColumns}>
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          ) : (
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
          )}
        </section>
      );

    // A numbered timeline; the stages where this page's service works are lit
    case 'steps':
      return (
        <section id={section.id} className={styles.section}>
          {head}
          <ol
            className={styles.timeline}
            style={{ '--steps': section.items.length } as React.CSSProperties}
          >
            {section.items.map((item, i) => (
              <li
                key={item.title}
                className={styles.step}
                data-live={item.tag?.startsWith('Where') || undefined}
              >
                <span className={styles.node}>{i + 1}</span>
                <h3 className={styles.stepTitle}>{item.title}</h3>
                {item.text && <p className={styles.stepText}>{item.text}</p>}
                {item.tag && <span className={`${styles.tag} ${styles.tagLive}`}>{item.tag}</span>}
              </li>
            ))}
          </ol>
        </section>
      );

    default:
      return (
        <section id={section.id} className={styles.section}>
          {head}
          <ol className={styles.cards} data-count={section.items.length}>
            {section.items.map((item, i) => (
              <Card key={item.title} item={item} index={i} />
            ))}
          </ol>
        </section>
      );
  }
}

const WhatsAppIcon = () => <Image src="/icons/social/whatsapp.svg" alt="" width={16} height={16} />;

export default function PseoTemplate({ page }: { page: PseoPage }) {
  const related = page.related.filter((group) => group.links.length);
  // WhatsApp opens with the page's subject already typed – "…free audit – SEO Agency in Koramangala"
  const subject = page.title.split(' | ')[0];
  const whatsapp = `${site.whatsapp}?text=${encodeURIComponent(
    `Hi BMU, I’d like a free audit – ${subject}.`
  )}`;
  let number = 0;

  return (
    <main className={styles.page}>
      <JsonLd schema={page.schema} />

      <header className={styles.hero}>
        <div className={styles.sky} aria-hidden="true" />
        <div className={styles.horizon} aria-hidden="true" />

        <div className={styles.heroInner}>
          <div className={styles.heroText}>
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

            <p className={styles.kicker}>{page.eyebrow}</p>
            <h1 className={styles.h1}>
              <span className={styles.line}>{page.h1}</span>
              {page.h1Accent && <span className="text-accent">{page.h1Accent}</span>}
            </h1>
            <p className={styles.intro}>{page.intro}</p>

            <div id="pseo-hero-actions" className={styles.actions}>
              <Button href="/contact" variant="accent">
                Get a free audit
              </Button>
              <Button href={whatsapp} variant="secondary">
                <WhatsAppIcon />
                WhatsApp us
              </Button>
            </div>
          </div>

          {page.facts.length > 0 && (
            <aside className={styles.glance} aria-label="At a glance">
              <p className={styles.glanceTitle}>At a glance</p>
              <dl className={styles.facts}>
                {page.facts.map((fact) => (
                  <div key={fact.label} className={styles.fact}>
                    <dt>{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
              </dl>
              <p className={styles.glanceNote}>
                <span className={styles.liveDot} aria-hidden="true" />
                Free audit · reply within one working day
              </p>
            </aside>
          )}
        </div>
      </header>

      <div className={styles.body}>
        {page.sections.map((section) => (
          <Section
            key={section.id}
            section={section}
            number={section.eyebrow ? ++number : number}
          />
        ))}

        {page.faqs.length > 0 && (
          <section id="faq" className={`${styles.section} ${styles.faqSection}`}>
            <div className={styles.faqAside}>
              <div className={styles.sectionHead}>
                <p className={styles.eyebrow}>
                  <span className={styles.eyebrowNumber}>{pad(++number)}</span>
                  FAQ
                </p>
                <h2 className={styles.h2}>Questions people ask</h2>
              </div>
              <div className={styles.help}>
                <p className={styles.helpTitle}>Still have a question?</p>
                <p className={styles.helpText}>
                  Ask us on WhatsApp or give us a call – we’re happy to talk it through.
                </p>
                <div className={styles.helpActions}>
                  <Button href={whatsapp} variant="secondary" size="sm">
                    <WhatsAppIcon />
                    WhatsApp us
                  </Button>
                  <a href={site.phoneHref} className={styles.textLink}>
                    {site.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.faqs}>
              {page.faqs.map((faq, i) => (
                <details key={faq.q} className={styles.faq} open={i === 0}>
                  <summary>
                    <span>{faq.q}</span>
                    <span className={styles.faqIcon} aria-hidden="true" />
                  </summary>
                  <p>{faq.a}</p>
                </details>
              ))}
            </div>
          </section>
        )}

        {related.length > 0 && (
          <nav aria-label="Related pages" className={styles.related}>
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
          </nav>
        )}

        <section id="pseo-cta" className={styles.cta}>
          <div className={styles.ctaHorizon} aria-hidden="true" />
          <h2 className={styles.ctaHeading}>{page.cta.heading}</h2>
          <p className={styles.ctaText}>{page.cta.text}</p>
          <div className={styles.ctaActions}>
            <Button href="/contact" variant="accent">
              Start my free audit
            </Button>
            <Button href={whatsapp} variant="secondary">
              <WhatsAppIcon />
              WhatsApp us
            </Button>
          </div>
          <a href={site.phoneHref} className={styles.ctaCall}>
            or call {site.phone}
          </a>
        </section>
      </div>

      <PseoMobileBar whatsapp={whatsapp} />
    </main>
  );
}
