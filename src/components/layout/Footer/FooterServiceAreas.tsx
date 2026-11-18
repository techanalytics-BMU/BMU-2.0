'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useId, useState } from 'react';
import type {
  FooterPlaceColumn,
  FooterService,
  FooterServiceLinks,
  ServiceAreasGroup,
  ServiceAreasItem,
} from '@/types/footer';
import styles from './FooterServiceAreas.module.css';

// The footer's link lists, each a block of its own, one under the other: green label → heading
// with a count → list, with a hairline between blocks. The lists are built on the server – see
// src/data/serviceAreas.ts.
//
// They follow the page. On a page about a service (/services/seo, /seo/pune, /seo-for-real-estate)
// its own lists come first – Locations (Bangalore / India / Dubai / International: "SEO Agency in
// Pune") and Industries ("SEO for Real Estate") – then the services. Everywhere else: Services,
// Industry Marketing, then Digital Marketing's Locations.
//
// A long list shows its first few, and its "All …" button opens the rest in place. Phones show
// fewer. The service's own page (/services/seo) carries every place link from the start, so
// search engines find all its place pages.

const PLACES_SHOWN = 10; // a Locations column, before its "All …" button is pressed
const INDUSTRIES_SHOWN = 16; // the Industries list (four rows of four)

// The service a page is about, from its address; the longest match wins ('local-seo' over 'seo')
function serviceOf(pathname: string, slugs: string[]) {
  const [first = '', second = ''] = pathname.split('/').filter(Boolean);
  const segment = first === 'services' ? second : first;
  return slugs
    .filter((slug) => segment === slug || segment.startsWith(`${slug}-for-`))
    .sort((a, b) => b.length - a.length)[0];
}

function Heading({ id, label, heading, count }: { id: string; label: string; heading: string; count: number }) {
  return (
    <>
      <p className={styles.label}>{label}</p>
      <div className={styles.headingRow}>
        <h2 id={id} className={styles.heading}>
          {heading}
        </h2>
        <span className={styles.count}>{count}</span>
      </div>
    </>
  );
}

// "All 52 industries" / "Show fewer". `short`: the list fits on larger screens, so the button
// shows on phones only (they show fewer).
function AllButton({
  open,
  label,
  controls,
  short,
  onToggle,
}: {
  open: boolean;
  label: string;
  controls: string;
  short: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      className={`${styles.viewAll} ${styles.allButton}`}
      data-short={short || undefined}
      aria-expanded={open}
      aria-controls={controls}
      onClick={onToggle}
    >
      {open ? 'Show fewer' : label}
    </button>
  );
}

// Services / Industry Marketing – the same on every page
function Group({ group }: { group: ServiceAreasGroup }) {
  const [open, setOpen] = useState(false);
  const headingId = `service-areas-${group.id}`;
  const listId = `${headingId}-list`;
  return (
    <section aria-labelledby={headingId} className={styles.group}>
      <Heading
        id={headingId}
        label={group.label}
        heading={group.heading}
        count={group.total ?? group.items.length}
      />
      <ul id={listId} className={styles.list} data-expanded={open}>
        {group.items.map((item: ServiceAreasItem) => (
          <li key={item.label}>
            {item.href ? (
              <Link href={item.href} className={styles.item}>
                {item.label}
              </Link>
            ) : (
              <span className={styles.item}>{item.label}</span>
            )}
          </li>
        ))}
      </ul>
      <div className={styles.actions}>
        {/* Phones only (hidden on larger screens in the CSS) */}
        <button
          type="button"
          className={styles.more}
          aria-expanded={open}
          aria-controls={listId}
          onClick={() => setOpen(!open)}
        >
          {open ? 'Show less' : `Show all ${group.items.length}`}
        </button>
        {group.more?.href && (
          <Link href={group.more.href} className={styles.viewAll}>
            {group.more.label}
          </Link>
        )}
      </div>
    </section>
  );
}

// The service's industry pages: "SEO for Real Estate"
function Industries({ slug, service, links }: { slug: string; service: FooterService; links: FooterServiceLinks }) {
  const [open, setOpen] = useState(false);
  const listId = useId();
  const all = service.industries.map((i) => links.industries[i]);
  const shown = open ? all : all.slice(0, INDUSTRIES_SHOWN);
  return (
    <section aria-labelledby="service-areas-industries" className={styles.group}>
      <Heading
        id="service-areas-industries"
        label="Industries"
        heading={`${service.title} for Every Industry`}
        count={all.length}
      />
      <ul id={listId} className={styles.list} data-expanded={open}>
        {shown.map((industry) => (
          <li key={industry.slug}>
            <Link href={`/${slug}-for-${industry.slug}`} className={styles.item}>
              {`${service.title} for ${industry.title}`}
            </Link>
          </li>
        ))}
      </ul>
      {all.length > 8 && (
        <div className={styles.actions}>
          <AllButton
            open={open}
            label={`All ${all.length} industries`}
            controls={listId}
            short={all.length <= INDUSTRIES_SHOWN}
            onToggle={() => setOpen(!open)}
          />
        </div>
      )}
    </section>
  );
}

function PlaceColumn({
  column,
  slug,
  service,
  whole,
}: {
  column: FooterPlaceColumn;
  slug: string;
  service: FooterService;
  whole: boolean; // every link in the page from the start, the extra ones hidden until opened
}) {
  const [open, setOpen] = useState(false);
  const listId = useId();
  const places = open || whole ? column.places : column.places.slice(0, PLACES_SHOWN);
  return (
    <div className={styles.column} data-expanded={open}>
      <h3 className={styles.columnTitle}>{column.title}</h3>
      <ul id={listId} className={styles.columnList}>
        {places.map((place) => (
          <li key={place.path}>
            <Link href={`/${slug}/${place.path}`} className={styles.item}>
              {`${service.noun} in ${place.name}`}
            </Link>
          </li>
        ))}
      </ul>
      {/* Phones show 5 a column */}
      {column.places.length > 5 && (
        <AllButton
          open={open}
          label={column.all}
          controls={listId}
          short={column.places.length <= PLACES_SHOWN}
          onToggle={() => setOpen(!open)}
        />
      )}
    </div>
  );
}

// The service's place pages: "SEO Agency in Pune"
function Locations({ slug, service, links, whole }: { slug: string; service: FooterService; links: FooterServiceLinks; whole: boolean }) {
  const columns = links.columns.filter((column) => !column.local || service.local);
  const total = columns.reduce((sum, column) => sum + column.places.length, 0);
  const where = service.local ? 'Bangalore, India & Abroad' : 'India & Abroad';
  return (
    <section aria-labelledby="service-areas-locations" className={styles.group}>
      <Heading
        id="service-areas-locations"
        label="Locations"
        heading={`${service.title} Across ${where}`}
        count={total}
      />
      <div className={styles.columns} data-count={columns.length}>
        {columns.map((column) => (
          <PlaceColumn
            key={`${slug}-${column.title}`} // a new service starts with its columns closed
            column={column}
            slug={slug}
            service={service}
            whole={whole}
          />
        ))}
      </div>
    </section>
  );
}

export default function FooterServiceAreas({
  groups,
  links,
}: {
  groups: ServiceAreasGroup[];
  links: FooterServiceLinks;
}) {
  const pathname = usePathname() ?? '';
  const slug = serviceOf(pathname, Object.keys(links.services));
  const service = slug ? links.services[slug] : undefined;
  const ownPlaces = Boolean(slug && service?.places);
  const ownIndustries = Boolean(slug && service && service.industries.length > 0);
  const placeSlug = ownPlaces ? slug! : links.fallback;

  const locations = (
    <Locations
      key={`locations-${placeSlug}`}
      slug={placeSlug}
      service={links.services[placeSlug]}
      links={links}
      whole={pathname === `/services/${placeSlug}`}
    />
  );

  return (
    <div id="service-areas" className={styles.areas}>
      {ownPlaces && locations}
      {ownIndustries && (
        <Industries key={`industries-${slug}`} slug={slug!} service={service!} links={links} />
      )}
      {groups
        .filter((group) => !(ownIndustries && group.id === 'industries'))
        .map((group) => (
          <Group key={group.id} group={group} />
        ))}
      {!ownPlaces && locations}
    </div>
  );
}
