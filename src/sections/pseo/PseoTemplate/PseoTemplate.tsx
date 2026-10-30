import Link from 'next/link';
import Badge from '@/components/ui/Badge/Badge';
import Button from '@/components/ui/Button/Button';
import type { PageSection, PseoPage, SectionItem } from '@/types/pseo';
import PseoMobileBar from './PseoMobileBar';
import PseoMore from './PseoMore';
import PseoOrbitField from './PseoOrbitField';
import PseoProgress from './PseoProgress';
import PseoReveal from './PseoReveal';
import styles from './PseoTemplate.module.css';

// The one template behind every programmatic SEO page (service and industry hubs, Service ×
// Industry / Business type / Locality / City / Dubai area / city abroad, and the /services and
// /industries indexes). Each page arrives as data (src/lib/pseo/pages.ts); this only draws it.
// Server-rendered, so every word – FAQ answers included – is in the HTML crawlers read.
// To restyle all of them at once, change this file and its stylesheet.
//
// Layout, landing-page style: a full-screen hero (the heading over a glowing beacon with radar
// pings and orbiting particles) → "At a glance" facts → a band of big words drifting sideways →
// the sections, each with its own entrance (the first text section lights up word by word as you
// scroll, cards tip up into place, the timeline fills in, searches type themselves) → FAQ → a
// full-width closing call to action over a planet horizon with light running along arcs.
// Every call to action is the same single button, to the contact page. Phones get a sticky bar.

// Structured data, as one JSON-LD graph ("<" escaped so the text can never close the script tag)
function JsonLd({ schema }: { schema: PseoPage['schema'] }) {
  const json = JSON.stringify({ '@context': 'https://schema.org', '@graph': schema }).replace(
    /</g,
    '\\u003c'
  );
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}

const pad = (n: number) => String(n).padStart(2, '0');

// Custom properties for the stylesheet (React's style type doesn't know them)
const vars = (values: Record<string, string | number>) => values as React.CSSProperties;

function SectionHead({
  eyebrow,
  heading,
  intro,
  align = 'center',
}: {
  eyebrow?: string;
  heading: string;
  intro?: string;
  align?: 'center' | 'start';
}) {
  return (
    <div className={`${styles.sectionHead} ${styles.rise}`} data-align={align}>
      {eyebrow && <Badge>{eyebrow}</Badge>}
      <h2 className={styles.h2}>{heading}</h2>
      {intro && <p className={styles.sectionIntro}>{intro}</p>}
    </div>
  );
}

const headOf = (section: PageSection) => ({
  eyebrow: section.eyebrow,
  heading: section.heading,
  intro: 'intro' in section ? section.intro : undefined,
});

// How many items a long list shows before "Show all" – a page asks for attention on a few things
// at a time. Lists only one or two over stay whole (a button for two more isn't worth it).
const LIMIT = { cards: 6, tiles: 8, rows: 12 };
const collapses = (total: number, limit: number) => total > limit + 2;

// Past the limit: hidden until "Show all" is pressed (see PseoMore)
const extra = (index: number, total: number, limit: number) =>
  collapses(total, limit) && index >= limit ? styles.extra : '';

function Collapsible({
  total,
  limit,
  children,
}: {
  total: number;
  limit: number;
  children: React.ReactNode;
}) {
  return collapses(total, limit) ? <PseoMore total={total}>{children}</PseoMore> : children;
}

// A card in a grid; the whole card is the link when it has one. Tips up into place on entrance.
function Card({
  item,
  index,
  className = '',
}: {
  item: SectionItem;
  index: number;
  className?: string;
}) {
  const where = item.tag?.startsWith('Where');
  // A rank tag ("#1") only repeats the card's number – left out
  const tag = item.tag && !/^#\d+$/.test(item.tag) ? item.tag : undefined;
  const body = (
    <>
      <span className={styles.cardTop}>
        <span className={styles.cardIndex}>{pad(index + 1)}</span>
        {tag && <span className={`${styles.tag} ${where ? styles.tagLive : ''}`}>{tag}</span>}
      </span>
      <h3 className={styles.cardTitle}>{item.title}</h3>
      {item.text && <p className={styles.cardText}>{item.text}</p>}
      {item.meta && <span className={styles.cardMeta}>{item.meta}</span>}
    </>
  );
  return (
    <li
      className={`${styles.card} ${styles.tilt} ${className}`}
      data-live={where || undefined}
      style={vars({ '--i': index })}
    >
      {item.href ? (
        <Link href={item.href} className={styles.cardInner}>
          {body}
        </Link>
      ) : (
        <div className={styles.cardInner}>{body}</div>
      )}
    </li>
  );
}

const SearchIcon = () => (
  <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true" className={styles.searchIcon}>
    <circle cx="8.5" cy="8.5" r="5.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
    <path d="m12.6 12.6 4.4 4.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const Tick = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" className={styles.tick}>
    <circle cx="12" cy="12" r="11" />
    <path d="m7.5 12.4 3.1 3.1 5.9-6.4" pathLength={1} />
  </svg>
);

// Columns for a grid of tiles (ticks, links), so every row is full or the last one sits centred:
// 4 in a row, 5 as 3 + 2, 7 as 4 + 3 …; tablets get 2 or 3
const tileColumns = (n: number) => ({
  '--cols': n <= 4 ? n : n % 3 === 0 || n === 5 ? 3 : 4,
  '--cols-tablet': n <= 3 || n % 3 === 0 ? Math.min(n, 3) : 2,
});

// The words every link in a list starts with ("Video Production for", "SEO in") – dimmed, so
// the part that differs stands out. The link text itself stays whole.
function sharedPrefix(labels: string[]) {
  if (labels.length < 3) return '';
  const words = labels.map((label) => label.split(' '));
  let n = 0;
  while (words.every((w) => w.length > n + 1 && w[n] === words[0][n])) n++;
  return n ? `${words[0].slice(0, n).join(' ')} ` : '';
}

// In rows the prefix shows dimmed; on tiles only the name shows ("Real estate") – the section
// heading already says it – and the prefix stays in the link for search engines and screen readers
function LinkText({
  label,
  prefix,
  tile = false,
}: {
  label: string;
  prefix: string;
  tile?: boolean;
}) {
  return (
    <>
      {prefix && <span className={tile ? styles.srOnly : styles.prefix}>{prefix}</span>}
      <span className={styles.name}>{label.slice(prefix.length)}</span>
    </>
  );
}

// The first text section: its opening paragraph set large, lighting up word by word as it
// scrolls up the screen
function Statement({ text }: { text: string }) {
  const words = text.split(' ');
  return (
    <PseoProgress className={styles.statement} distance={0.75}>
      <p className={styles.statementText} style={vars({ '--n': words.length })}>
        {words.map((word, i) => (
          <span key={i} className={styles.word} style={vars({ '--i': i })}>
            {word}{' '}
          </span>
        ))}
      </p>
    </PseoProgress>
  );
}

function Section({
  section,
  statement,
  repeated,
}: {
  section: PageSection;
  statement: boolean;
  repeated: boolean; // same badge as the section above – left out
}) {
  const head = (
    <SectionHead {...headOf(section)} eyebrow={repeated ? undefined : section.eyebrow} />
  );

  switch (section.kind) {
    case 'prose': {
      // The statement: centred, the opening paragraph lighting up, the rest below
      if (statement) {
        const [lead, ...rest] = section.paragraphs;
        return (
          <PseoReveal id={section.id} className={styles.section}>
            {head}
            <Statement text={lead} />
            {rest.length > 0 && (
              <div className={`${styles.statementMore} ${styles.rise}`}>
                {rest.map((text) => (
                  <p key={text}>{text}</p>
                ))}
              </div>
            )}
          </PseoReveal>
        );
      }
      // Later text sections: heading pinned on the left, the text on the right
      return (
        <PseoReveal id={section.id} className={`${styles.section} ${styles.split}`}>
          <div className={styles.splitHead}>
            <SectionHead {...headOf(section)} align="start" />
          </div>
          <div className={`${styles.paragraphs} ${styles.rise}`}>
            {section.paragraphs.map((text, i) => (
              <p key={text} className={i === 0 ? styles.lead : undefined}>
                {text}
              </p>
            ))}
          </div>
        </PseoReveal>
      );
    }

    // Searches customers type, as search bars that type themselves; other lists as ticks
    case 'checks':
      return (
        <PseoReveal id={section.id} className={styles.section}>
          {head}
          {section.display === 'search' ? (
            <ul className={styles.searches}>
              {section.items.map((item, i) => (
                <li
                  key={item.title}
                  className={`${styles.search} ${styles.rise}`}
                  style={vars({ '--i': i, '--chars': item.title.length })}
                >
                  <SearchIcon />
                  <span className={styles.searchText}>{item.title}</span>
                </li>
              ))}
            </ul>
          ) : (
            <div className={styles.checksWrap}>
              <ul className={styles.checks} style={vars(tileColumns(section.items.length))}>
                {section.items.map((item, i) => (
                  <li
                    key={item.title}
                    className={`${styles.checkTile} ${styles.rise}`}
                    style={vars({ '--i': i + 1 })}
                  >
                    <Tick />
                    <span>
                      <span className={styles.checkTitle}>{item.title}</span>
                      {item.text && <span className={styles.checkText}>{item.text}</span>}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </PseoReveal>
      );

    case 'links': {
      const prefix = sharedPrefix(section.links.map((link) => link.label));
      const total = section.links.length;
      return (
        <PseoReveal
          id={section.id}
          className={`${styles.section} ${section.compact ? styles.directory : ''}`}
        >
          {head}
          {/* Long lists (every locality, every city) as rows in a grid, lined up across columns */}
          {section.compact ? (
            <Collapsible total={total} limit={LIMIT.rows}>
              <ul className={`${styles.linkRows} ${styles.rise}`}>
                {section.links.map((link, i) => (
                  <li key={link.href} className={extra(i, total, LIMIT.rows)}>
                    <Link href={link.href} className={styles.linkRow}>
                      <LinkText label={link.label} prefix={prefix} />
                    </Link>
                  </li>
                ))}
              </ul>
            </Collapsible>
          ) : (
            <Collapsible total={total} limit={LIMIT.tiles}>
              <ul
                className={styles.links}
                style={vars(tileColumns(collapses(total, LIMIT.tiles) ? LIMIT.tiles : total))}
              >
                {section.links.map((link, i) => (
                  <li
                    key={link.href}
                    className={`${styles.rise} ${extra(i, total, LIMIT.tiles)}`}
                    style={vars({ '--i': i })}
                  >
                    <Link href={link.href} className={styles.linkCard}>
                      <span className={styles.linkLabel}>
                        <LinkText label={link.label} prefix={prefix} tile />
                      </span>
                      {link.note && <span className={styles.linkNote}>{link.note}</span>}
                    </Link>
                  </li>
                ))}
              </ul>
            </Collapsible>
          )}
        </PseoReveal>
      );
    }

    // A timeline that fills in as it scrolls up; the stages where this page's service works are lime
    case 'steps':
      return (
        <PseoReveal id={section.id} className={styles.section}>
          {head}
          <PseoProgress className={styles.timelineWrap} distance={0.7}>
            <ol className={styles.timeline} style={vars({ '--steps': section.items.length })}>
              {section.items.map((item, i) => (
                <li
                  key={item.title}
                  className={styles.step}
                  data-live={item.tag?.startsWith('Where') || undefined}
                  style={vars({ '--i': i })}
                >
                  <span className={styles.node}>{i + 1}</span>
                  <div className={styles.stepBody}>
                    <h3 className={styles.stepTitle}>{item.title}</h3>
                    {item.text && <p className={styles.stepText}>{item.text}</p>}
                    {item.tag && (
                      <span className={`${styles.tag} ${styles.tagLive}`}>{item.tag}</span>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </PseoProgress>
        </PseoReveal>
      );

    // Big figures, each with a label and a line under it
    case 'stats':
      return (
        <PseoReveal id={section.id} className={styles.section}>
          {head}
          <ul className={styles.stats} style={vars(tileColumns(section.items.length))}>
            {section.items.map((stat, i) => (
              <li
                key={stat.label}
                className={`${styles.stat} ${styles.rise}`}
                style={vars({ '--i': i + 1 })}
              >
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
                {stat.text && <span className={styles.statText}>{stat.text}</span>}
              </li>
            ))}
          </ul>
        </PseoReveal>
      );

    // A roadmap: phases side by side on a line, each with its points
    case 'phases':
      return (
        <PseoReveal id={section.id} className={styles.section}>
          {head}
          <ol className={styles.phases} style={vars({ '--phases': section.items.length })}>
            {section.items.map((phase, i) => (
              <li
                key={phase.title}
                className={`${styles.phase} ${styles.tilt}`}
                style={vars({ '--i': i + 1 })}
              >
                <span className={styles.phaseLabel}>Phase {pad(i + 1)}</span>
                <h3 className={styles.phaseTitle}>{phase.title}</h3>
                <ul className={styles.phasePoints}>
                  {phase.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </PseoReveal>
      );

    default:
      return (
        <PseoReveal id={section.id} className={styles.section}>
          {head}
          <Collapsible total={section.items.length} limit={LIMIT.cards}>
            <ol
              className={styles.cards}
              data-count={
                collapses(section.items.length, LIMIT.cards) ? LIMIT.cards : section.items.length
              }
            >
              {section.items.map((item, i) => (
                <Card
                  key={item.title}
                  item={item}
                  index={i}
                  className={extra(i, section.items.length, LIMIT.cards)}
                />
              ))}
            </ol>
          </Collapsible>
        </PseoReveal>
      );
  }
}

// The words for the drifting band: the page's first list of ticks (who we work with, what's
// common here), else its first cards (what you get)
function marqueeWords(page: PseoPage) {
  let checks: SectionItem[] | undefined;
  let cards: SectionItem[] | undefined;
  for (const section of page.sections) {
    if (section.kind === 'checks' && section.display !== 'search') checks ??= section.items;
    if (section.kind === 'cards') cards ??= section.items;
  }
  return (checks ?? cards ?? []).map((item) => item.title);
}

// Light running along arcs over the closing planet (viewBox 1440 × 600, stretched to fit)
const ARCS = [
  'M 120 600 Q 420 180 760 560',
  'M 560 580 Q 900 90 1320 600',
  'M 300 600 Q 700 300 1100 580',
  'M 900 590 Q 1180 280 1440 470',
];

export default function PseoTemplate({ page }: { page: PseoPage }) {
  const statementId = page.sections.find((s) => s.kind === 'prose')?.id;
  const marquee = marqueeWords(page);

  return (
    <main className={styles.page}>
      <JsonLd schema={page.schema} />

      <header className={styles.hero}>
        <div className={styles.sky} aria-hidden="true" />
        <PseoOrbitField className={styles.field} />
        {/* The beacon: orbit rings, a turning light sweep, radar pings, a beam and the core */}
        <div className={styles.system} aria-hidden="true">
          <span className={styles.ring} />
          <span className={styles.ring} />
          <span className={styles.ring} />
          <span className={styles.ring} />
          <span className={styles.sweep} />
          {[0, 1, 2].map((i) => (
            <span key={i} className={styles.ping} style={vars({ '--i': i })} />
          ))}
          <span className={styles.beam} />
          <span className={styles.core} />
        </div>

        <div className={styles.heroInner}>
          <h1 className={styles.h1}>
            <span className={styles.lineMask}>
              <span className={`${styles.line} ${styles.lineFill}`}>{page.h1}</span>
            </span>
            {page.h1Accent && (
              <span className={styles.lineMask}>
                {/* inner span: the line's slide-up would otherwise replace the accent's sheen */}
                <span className={styles.line} style={vars({ '--delay': '0.32s' })}>
                  <span className="text-accent">{page.h1Accent}</span>
                </span>
              </span>
            )}
          </h1>
          <p className={styles.intro}>{page.intro}</p>
          <div id="pseo-hero-actions" className={styles.actions}>
            <Button href="/contact" variant="accent">
              Know more
            </Button>
          </div>
        </div>
      </header>

      {page.facts.length > 0 && (
        <PseoReveal className={styles.glance} label="At a glance">
          <dl className={`${styles.facts} ${styles.rise}`}>
            {page.facts.map((fact, i) => (
              <div key={fact.label} className={`${styles.fact} ${styles.rise}`} style={vars({ '--i': i + 1 })}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </PseoReveal>
      )}

      {marquee.length >= 4 && (
        <div className={styles.marquee} aria-hidden="true">
          <div className={styles.marqueeTrack} style={vars({ '--count': marquee.length })}>
            {/* two copies, so the band can loop without a seam */}
            {[0, 1].map((copy) => (
              <ul key={copy} className={styles.marqueeList}>
                {marquee.map((word) => (
                  <li key={word}>{word}</li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      )}

      <div className={styles.body}>
        {page.sections.map((section, i) => (
          <Section
            key={section.id}
            section={section}
            statement={section.id === statementId}
            repeated={i > 0 && section.eyebrow === page.sections[i - 1].eyebrow}
          />
        ))}

        {page.faqs.length > 0 && (
          <PseoReveal id="faq" className={styles.section}>
            <SectionHead eyebrow="FAQ" heading="Questions people ask" />
            <div className={styles.faqs}>
              {page.faqs.map((faq, i) => (
                <details
                  key={faq.q}
                  className={`${styles.faq} ${styles.rise}`}
                  open={i === 0}
                  style={vars({ '--i': i + 1 })}
                >
                  <summary>
                    <span>{faq.q}</span>
                    <span className={styles.faqIcon} aria-hidden="true" />
                  </summary>
                  <p>{faq.a}</p>
                </details>
              ))}
            </div>
            <div className={`${styles.help} ${styles.rise}`} style={vars({ '--i': page.faqs.length + 1 })}>
              <p>
                <strong>Still have a question?</strong> Tell us about your business – we’re happy to
                talk it through.
              </p>
              <Button href="/contact" variant="secondary" size="sm">
                Know more
              </Button>
            </div>
          </PseoReveal>
        )}
      </div>

      <PseoReveal id="pseo-cta" className={styles.finale}>
        <div className={styles.finaleSky} aria-hidden="true" />
        <div className={styles.planet} aria-hidden="true" />
        <svg
          className={styles.arcs}
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {ARCS.map((d, i) => (
            <g key={d}>
              <path className={styles.arc} d={d} />
              <path className={styles.arcPulse} d={d} pathLength={1} style={vars({ '--i': i })} />
            </g>
          ))}
        </svg>
        <div className={styles.finaleInner}>
          <h2 className={`${styles.finaleHeading} ${styles.rise}`}>{page.cta.heading}</h2>
          <p className={`${styles.finaleText} ${styles.rise}`} style={vars({ '--i': 1 })}>
            {page.cta.text}
          </p>
          <div className={`${styles.finaleActions} ${styles.rise}`} style={vars({ '--i': 2 })}>
            <Button href="/contact" variant="accent">
              Know more
            </Button>
          </div>
        </div>
      </PseoReveal>

      <PseoMobileBar />
    </main>
  );
}
