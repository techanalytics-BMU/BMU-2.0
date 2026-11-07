import Link from 'next/link';
import Button from '@/components/ui/Button/Button';
import { serviceGroups, type ServiceGroupSlug } from '@/data/pseo/groups';
import type { PseoPage } from '@/types/pseo';
import { JsonLd } from '../PseoTemplate/PseoTemplate';
import PseoMobileBar from '../PseoTemplate/PseoMobileBar';
import PseoReveal from '../PseoTemplate/PseoReveal';
import * as Brand from './ServiceGroupBrand';
import * as Content from './ServiceGroupContent';
import * as Marketing from './ServiceGroupMarketing';
import { pad, SectionHead, vars } from './ServiceGroupParts';
import styles from './ServiceGroupPage.module.css';
import * as Social from './ServiceGroupSocial';
import * as Ugc from './ServiceGroupUgc';
import * as Web from './ServiceGroupWeb';

// Each group lives in its own world: a hero and a services section of its own
const VIBES = {
  'brand-and-design': Brand,
  'web-and-ai': Web,
  'ugc-and-creator-marketing': Ugc,
  'social-and-personal-brand': Social,
  'marketing-and-visibility': Marketing,
  'content-and-production': Content,
};

type Section = PseoPage['sections'][number];

const sectionOf = <K extends Section['kind']>(page: PseoPage, id: string, kind: K) => {
  const section = page.sections.find((s) => s.id === id);
  return section?.kind === kind ? (section as Section & { kind: K }) : undefined;
};

// The six overview pages in the navbar's Services menu. Each opens in its own world – a brand
// guidelines sheet, a live product, the feed, a profile, a results page, a viewfinder – then shares
// the plain sections after it. The pages for single services (/services/seo …) stay on PseoTemplate.
export default function ServiceGroupPage({
  slug,
  page,
}: {
  slug: ServiceGroupSlug;
  page: PseoPage;
}) {
  const { Hero, Offers, servicesHeading, headBeside } = VIBES[slug];
  const { price } = serviceGroups[slug];
  const services = sectionOf(page, 'services', 'cards');
  const results = sectionOf(page, 'results', 'stats');
  const roadmap = sectionOf(page, 'roadmap', 'phases');
  const everyService = sectionOf(page, 'all-services', 'links');

  return (
    <main className={styles.page}>
      <JsonLd schema={page.schema} />

      <Hero page={page} price={price} offers={services?.items ?? []} />

      {services && (
        <PseoReveal
          id="services"
          className={`${styles.section} ${headBeside ? styles.headBeside : ''}`}
        >
          <SectionHead
            eyebrow={services.eyebrow}
            heading={servicesHeading}
            intro={services.intro}
          />
          <Offers page={page} price={price} offers={services.items} />
        </PseoReveal>
      )}

      {results && (
        <PseoReveal id="results" className={styles.section}>
          <SectionHead eyebrow={results.eyebrow} heading={results.heading} />
          <dl className={styles.stats}>
            {results.items.map((stat, i) => (
              <div key={stat.label} className={`${styles.stat} ${styles.rise}`} style={vars({ '--i': i + 2 })}>
                <dd className={styles.statValue}>{stat.value}</dd>
                <dt className={styles.statLabel}>{stat.label}</dt>
                {stat.text && <dd className={styles.statText}>{stat.text}</dd>}
              </div>
            ))}
          </dl>
        </PseoReveal>
      )}

      {roadmap && (
        <PseoReveal id="roadmap" className={styles.section}>
          <SectionHead eyebrow={roadmap.eyebrow} heading={roadmap.heading} />
          <ol className={styles.phases}>
            {roadmap.items.map((phase, i) => (
              <li key={phase.title} className={`${styles.phase} ${styles.rise}`} style={vars({ '--i': i + 2 })}>
                <span className={styles.phaseNumber}>{pad(i + 1)}</span>
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
      )}

      {everyService && everyService.links.length > 0 && (
        <PseoReveal id="all-services" className={styles.section}>
          <SectionHead eyebrow={everyService.eyebrow} heading={everyService.heading} />
          <ul className={styles.links}>
            {everyService.links.map((link, i) => (
              <li key={link.href} className={styles.rise} style={vars({ '--i': Math.min(i + 2, 8) })}>
                <Link href={link.href} className={styles.link}>
                  <span className={styles.linkLabel}>{link.label}</span>
                  {link.note && <span className={styles.linkNote}>{link.note}</span>}
                </Link>
              </li>
            ))}
          </ul>
        </PseoReveal>
      )}

      <PseoReveal id="pseo-cta" className={styles.closing}>
        <h2 className={`${styles.heading} ${styles.rise}`}>{page.cta.heading}</h2>
        <p className={`${styles.closingText} ${styles.rise}`} style={vars({ '--i': 1 })}>
          {page.cta.text}
        </p>
        <div className={styles.rise} style={vars({ '--i': 2 })}>
          <Button href="/contact" variant="accent">
            Know more
          </Button>
        </div>
        <div className={styles.horizon} aria-hidden="true" />
      </PseoReveal>

      <PseoMobileBar />
    </main>
  );
}
