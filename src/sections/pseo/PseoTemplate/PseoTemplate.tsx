import Link from 'next/link';
import Badge from '@/components/ui/Badge/Badge';
import Button from '@/components/ui/Button/Button';
import { hasPlaces } from '@/lib/pseo/regions';
import { leadSentences } from '@/lib/pseo/text';
import type { PageLink, PageSection, PseoPage, SectionItem } from '@/types/pseo';
import PseoMobileBar from './PseoMobileBar';
import PseoMore from './PseoMore';
import PseoNearby from './PseoNearby';
import PseoGridLight from './PseoGridLight';
import PseoProgress from './PseoProgress';
import PseoReveal from './PseoReveal';
import styles from './PseoTemplate.module.css';

// The one template behind every programmatic SEO page (service and industry hubs, Service ×
// Industry / Business type / Locality / City / Dubai area / city abroad, and the /services and
// /industries indexes). Each page arrives as data (src/lib/pseo/pages.ts); this only draws it.
// Server-rendered, so every word – FAQ answers included – is in the HTML crawlers read.
// To restyle all of them at once, change this file and its stylesheet.
//
// Layout, landing-page style: a full-screen hero (the heading in silver, on a grid under light
// from above, a planet's lit horizon across the bottom) →
// "At a glance" facts → the sections, each with its own entrance (the first text section lights up word by word as you
// scroll, cards tip up into place, the timeline fills in, searches type themselves) → FAQ → a
// full-width closing call to action over a planet horizon with light running along arcs.
// Every call to action is the same single button, to the contact page. Phones get a sticky bar.

// Structured data, as one JSON-LD graph ("<" escaped so the text can never close the script tag)
export function JsonLd({ schema }: { schema: PseoPage['schema'] }) {
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
// at a time. Lists only one or two over stay whole (a button for two more isn't worth it). A
// directory of more than 40 links shows its first 6 blocks (two rows), each with its first 12.
const LIMIT = { cards: 6, index: 6, directory: { links: 40, groups: 6, each: 12 } };
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

// Twelve bars, one a month, the last (this month) lit – a drawing of a report, not real figures.
// The heights come from the measure's name, so a page always draws the same bars.
function monthBars(seed: string) {
  let s = 0;
  for (const ch of seed) s = (Math.imul(s, 31) + ch.charCodeAt(0)) | 0;
  return Array.from({ length: 12 }, (_, month) => {
    s = (Math.imul(s, 1103515245) + 12345) | 0;
    const noise = ((s >>> 16) & 0x7fff) / 0x7fff;
    return Math.round(30 + 42 * (month / 11) + 28 * noise) / 100;
  });
}

// The numbers a service is measured by, as one sheet of the monthly report: a column per
// measure (a row on phones) – its number, its name and a year of bars
function Report({ items }: { items: SectionItem[] }) {
  const n = items.length;
  return (
    <div className={`${styles.report} ${styles.rise}`} style={vars({ '--i': 1 })}>
      <p className={styles.reportHead}>
        <span>Monthly report</span>
        <span>
          {pad(n)} {n === 1 ? 'measure' : 'measures'}
        </span>
      </p>
      <ol
        className={styles.metrics}
        style={vars({ '--cols': n % 3 === 0 ? 3 : n, '--cols-tablet': n % 3 === 0 ? 3 : 2 })}
      >
        {items.map((item, i) => (
          <li key={item.title} className={styles.metric} style={vars({ '--i': i })}>
            <span className={styles.metricIndex} aria-hidden="true">
              {pad(i + 1)}
            </span>
            <span className={styles.metricName}>{item.title}</span>
            <span className={styles.bars} aria-hidden="true">
              {monthBars(item.title).map((height, month) => (
                <span key={month} style={vars({ '--h': height, '--m': month })} />
              ))}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

// Columns for a grid of tiles (ticks, stats), so every row is full or the last one sits centred:
// 4 in a row, 5 as 3 + 2, 7 as 4 + 3 …; tablets get 2 or 3
const tileColumns = (n: number) => ({
  '--cols': n <= 4 ? n : n % 3 === 0 || n === 5 ? 3 : 4,
  '--cols-tablet': n <= 3 || n % 3 === 0 ? Math.min(n, 3) : 2,
});

// The words every link in a list starts with ("Video Production for", "SEO in")
function sharedPrefix(labels: string[]) {
  if (labels.length < 3) return '';
  const words = labels.map((label) => label.split(' '));
  let n = 0;
  while (words.every((w) => w.length > n + 1 && w[n] === words[0][n])) n++;
  return n ? `${words[0].slice(0, n).join(' ')} ` : '';
}

// Only the part that differs shows ("Pune", "Real estate") – the section heading already says the
// rest – and the whole label stays in the link for search engines and screen readers
function LinkText({ label, prefix }: { label: string; prefix: string }) {
  return (
    <>
      {prefix && <span className={styles.srOnly}>{prefix}</span>}
      <span className={styles.name}>{label.slice(prefix.length)}</span>
    </>
  );
}

// Long lists of places and business types, as blocks three a row: one per group (a state,
// country, district, zone or category) – its name and count, then its links. A long list shows
// two rows of blocks, each with its first dozen links, then "Show all".
function Directory({ links }: { links: PageLink[] }) {
  const prefix = sharedPrefix(links.map((link) => link.label));
  const groups: { name?: string; links: PageLink[] }[] = [];
  for (const link of links) {
    const group = groups.find((g) => g.name === link.group);
    if (group) group.links.push(link);
    else groups.push({ name: link.group, links: [link] });
  }
  const long = links.length > LIMIT.directory.links;
  const hiddenGroup = (g: number) => long && g >= LIMIT.directory.groups;
  const hiddenLink = (g: number, i: number) => hiddenGroup(g) || (long && i >= LIMIT.directory.each);
  const hidden = groups.some((group, g) => group.links.some((_, i) => hiddenLink(g, i)));
  const shown = hidden ? Math.min(groups.length, LIMIT.directory.groups) : groups.length;

  const list = (
    <ul
      className={`${styles.blocks} ${styles.dirBlocks}`}
      style={vars({ '--cols': Math.min(shown, 3) })}
    >
      {groups.map((group, g) => (
        <li
          key={group.name ?? g}
          className={`${styles.rise} ${hiddenGroup(g) ? styles.extra : ''}`}
          style={vars({ '--i': g })}
        >
          <div className={styles.block}>
            {group.name && (
              <div className={styles.dirHead}>
                <h3 className={styles.dirLabel}>{group.name}</h3>
                <span className={styles.dirCount}>{group.links.length}</span>
              </div>
            )}
            <ul className={styles.dirLinks}>
              {group.links.map((link, i) => (
                <li key={link.href} className={hiddenLink(g, i) ? styles.extra : undefined}>
                  <Link href={link.href} className={styles.dirLink}>
                    <LinkText label={link.label} prefix={prefix} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ul>
  );
  return hidden ? <PseoMore total={links.length}>{list}</PseoMore> : list;
}

// Links with a line about each (industries, services, areas next door), as numbered blocks three
// a row: the number, the name, then the whole line – never cut short. Two rows, then "Show all".
function IndexTable({ links }: { links: PageLink[] }) {
  const prefix = sharedPrefix(links.map((link) => link.label));
  const total = links.length;
  const shown = collapses(total, LIMIT.index) ? LIMIT.index : total;
  return (
    <Collapsible total={total} limit={LIMIT.index}>
      <ul
        className={`${styles.blocks} ${styles.indexBlocks}`}
        style={vars({ '--cols': Math.min(shown, 3) })}
      >
        {links.map((link, i) => (
          <li
            key={link.href}
            className={`${styles.rise} ${extra(i, total, LIMIT.index)}`}
            style={vars({ '--i': i })}
          >
            <Link href={link.href} className={`${styles.block} ${styles.indexCard}`}>
              <span className={styles.indexNo} aria-hidden="true">
                {pad(i + 1)}
              </span>
              <span className={styles.indexName}>
                <LinkText label={link.label} prefix={prefix} />
              </span>
              {link.note && <span className={styles.indexNote}>{link.note}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </Collapsible>
  );
}

// Spans of time in a note ("1–2 weeks", "6–12 weeks", "3 months") – picked out in white with a
// lime underline that draws itself in
const DURATION = /(\d+(?:[–-]\d+)?\s(?:days?|weeks?|months?|years?))/g;

function withDurations(text: string) {
  return text.split(DURATION).map((part, i) =>
    i % 2 ? (
      <strong key={i} className={styles.duration}>
        {part}
      </strong>
    ) : (
      part
    )
  );
}

// "01 · The problem" over a paragraph of the opening section (just the number without a label)
function NoteLabel({ index, label }: { index: number; label?: string }) {
  return (
    <p className={styles.noteLabel}>
      <span className={styles.noteNumber}>{pad(index)}</span>
      {label}
    </p>
  );
}

// The page's first text section, as an editorial spread: the heading pinned on the left; on the
// right the opening paragraph set large – lighting up word by word as it scrolls up, while a lime
// line beside it fills – then the rest as numbered notes that rise in, a hairline drawing across
// above each
function Opening({ section, eyebrow }: { section: PageSection & { kind: 'prose' }; eyebrow?: string }) {
  const [lead, ...rest] = section.paragraphs;
  const labels = section.labels ?? [];
  const words = lead.split(' ');
  return (
    <PseoReveal id={section.id} className={`${styles.section} ${styles.split} ${styles.opening}`}>
      <div className={styles.splitHead}>
        <SectionHead {...headOf(section)} eyebrow={eyebrow} align="start" />
      </div>
      <div className={styles.openingBody}>
        <PseoProgress className={styles.statement} distance={0.75}>
          {labels[0] && <NoteLabel index={1} label={labels[0]} />}
          <p className={styles.statementText} style={vars({ '--n': words.length })}>
            {words.map((word, i) => (
              <span key={i} className={styles.word} style={vars({ '--i': i })}>
                {word}{' '}
              </span>
            ))}
          </p>
        </PseoProgress>
        {rest.map((text, i) => (
          <div key={text} className={`${styles.note} ${styles.rise}`} style={vars({ '--i': i + 2 })}>
            <NoteLabel index={i + 2} label={labels[i + 1]} />
            <p className={styles.noteText}>{withDurations(text)}</p>
          </div>
        ))}
      </div>
    </PseoReveal>
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
      // The page's first text section: an editorial spread (see Opening)
      if (statement) {
        return <Opening section={section} eyebrow={repeated ? undefined : section.eyebrow} />;
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

    // Searches customers type, as search bars that type themselves; measures as a monthly
    // report; other lists as ticks
    case 'checks':
      return (
        <PseoReveal id={section.id} className={styles.section}>
          {head}
          {section.display === 'metrics' ? (
            <Report items={section.items} />
          ) : section.display === 'search' ? (
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

    // Places and business types as a directory; links with a line about each as an index
    case 'links':
      return (
        <PseoReveal
          id={section.id}
          className={`${styles.section} ${section.compact ? styles.directory : ''}`}
        >
          {head}
          {section.compact ? (
            <Directory links={section.links} />
          ) : (
            <IndexTable links={section.links} />
          )}
        </PseoReveal>
      );

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

// The hero grid's squares that light up in turn: [columns from the centre, rows from the top].
// Phones only show the middle five columns, so some sit near the centre; none go below row 5,
// where the horizon starts on a laptop.
const CELLS: [number, number][] = [
  [-4, 1],
  [2, 0],
  [-2, 4],
  [5, 2],
  [1, 2],
  [-6, 3],
  [3, 4],
  [-1, 5],
  [6, 0],
  [-3, 2],
  [4, 5],
];

// Light running along arcs over the closing planet (viewBox 1440 × 600, stretched to fit)
const ARCS = [
  'M 120 600 Q 420 180 760 560',
  'M 560 580 Q 900 90 1320 600',
  'M 300 600 Q 700 300 1100 580',
  'M 900 590 Q 1180 280 1440 470',
];

export default function PseoTemplate({ page }: { page: PseoPage }) {
  const statementId = page.sections.find((s) => s.kind === 'prose')?.id;

  return (
    <main className={styles.page}>
      <JsonLd schema={page.schema} />

      <header className={styles.hero}>
        {/* The backdrop: a grid (a few squares lighting up in turn, brighter lines round the
            mouse) under light from above, and a planet's lit horizon across the bottom */}
        <div className={styles.grid} aria-hidden="true">
          {CELLS.map(([x, y], i) => (
            <span key={`${x},${y}`} className={styles.cell} style={vars({ '--x': x, '--y': y, '--i': i })} />
          ))}
        </div>
        <PseoGridLight className={styles.gridLight} />
        <div className={styles.horizon} aria-hidden="true" />

        <div className={styles.heroInner}>
          <h1 className={styles.h1}>
            <span className={styles.lineMask}>
              <span className={styles.line}>{page.h1}</span>
            </span>
            {page.h1Accent && (
              <span className={styles.lineMask}>
                <span className={styles.line} style={vars({ '--delay': '0.5s' })}>
                  {page.h1Accent}
                </span>
              </span>
            )}
          </h1>
          {/* about four lines: whole sentences only */}
          <p className={styles.intro}>{leadSentences(page.intro)}</p>
          <div id="pseo-hero-actions" className={styles.actions}>
            <Button href="/contact" variant="accent">
              Know more
            </Button>
            {hasPlaces(page.path) && <PseoNearby path={page.path} />}
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
