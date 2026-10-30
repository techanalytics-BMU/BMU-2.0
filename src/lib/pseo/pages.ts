import { DUBAI_DISTRICTS, type DubaiAreaSlug, type MarketSlug } from '@/data/pseo/abroad';
import { site } from '@/data/site';
import {
  BUSINESS_SLUGS,
  INDUSTRY_SLUGS,
  SERVICE_SLUGS,
  type BusinessSlug,
  type CitySlug,
  type IndustrySlug,
  type ServiceSlug,
} from '@/data/pseo/slugs';
import type { Competition, Faq, PageLink, PageSection, PseoPage, SectionItem } from '@/types/pseo';
import {
  CITY_PAGE_SLUGS,
  DUBAI_AREA_SLUGS,
  LOCAL_INDUSTRIES,
  LOCALITY_PAGE_SLUGS,
  MARKET_SLUGS,
  OTHER_MARKET_SLUGS,
  businessChannelsOf,
  dubaiAreas,
  markets,
  businesses,
  businessesUsing,
  channelsOf,
  exists,
  getCity,
  indexable,
  industries,
  industriesUsing,
  isLocalIndustry,
  isLocalService,
  linkable,
  localServices,
  localities,
  services,
  type AreaSlug,
} from './catalog';
import { paths } from './paths';
import { breadcrumbSchema, businessSchema, faqSchema, serviceSchema } from './schema';
import {
  clip,
  distanceKm,
  firstSentence,
  listJoin,
  lowerFirst,
  rotate,
  upperFirst,
  withArticle,
} from './text';

// Builds every programmatic page from the entity data (services, industries, business types,
// localities, cities).
// Each builder mixes facts from BOTH of its entities – rank in the industry's channel mix, distance
// from the studio, local competition, the buyer-journey stage a service covers, nearby areas – so
// sibling pages differ in substance, not just in a swapped name.

const crumb = {
  home: { label: 'Home', href: '/' },
  services: { label: 'Services', href: paths.services() },
  industries: { label: 'Industries', href: paths.industries() },
};

const withSchema = (
  page: Omit<PseoPage, 'schema'>,
  extra: Record<string, unknown>[] = []
): PseoPage => ({
  ...page,
  schema: [
    businessSchema(),
    ...extra,
    ...(page.faqs.length ? [faqSchema(page.faqs)] : []),
    breadcrumbSchema(page.breadcrumbs),
  ],
});

// Keep only links to pages that are indexable (or everything while developing)
const keep = (links: (PageLink & { live: boolean })[]): PageLink[] =>
  links.filter((link) => linkable(link.live)).map(({ live: _live, ...link }) => link);

const ctaFor = (who: string) => ({
  heading: 'Get a free audit',
  text: `Tell us about your ${who}. We’ll review what you’re doing now and send a plan and a quote – free, within one working day.`,
});

// ---------- Local helpers ----------

const competitionLabel: Record<Competition, string> = {
  high: 'High',
  medium: 'Moderate',
  low: 'Low',
};

// How crowded a place is, written for one service or industry ("SEO", "real estate marketing")
const competitionText = (place: string, what: string, level: Competition) =>
  ({
    high: `${place} is one of the more crowded places for ${what}: lots of businesses chase the same searches and the same customers. Winning here takes a sharper niche, a steady flow of reviews and work that’s clearly local – generic campaigns get lost.`,
    medium: `Competition for ${what} in ${place} is moderate. Established businesses are online, but many local searches still turn up thin or outdated listings, so consistent, well-targeted work tends to show results sooner than in the city’s busiest hubs.`,
    low: `${place} is still fairly quiet online, so a business that invests in ${what} early can stand out quickly – and claim the local searches before competitors do.`,
  })[level];

// Distance from the JP Nagar studio, as a fact and as an answer
const studio = (coords: [number, number], place: string) => {
  const km = distanceKm(site.coords, coords);
  if (km < 3) {
    return {
      fact: 'Our studio is here',
      answer: `Yes – our studio is in JP Nagar 9th Phase, so ${place} is home ground. You can drop in, or we can come to you.`,
    };
  }
  const rounded = Math.round(km);
  return {
    fact: `About ${rounded} km from our studio`,
    answer: `Yes. Our studio is in JP Nagar, about ${rounded} km from ${place} as the crow flies, so we can meet in ${place} or at the studio – day to day, most of the work runs over WhatsApp and calls.`,
  };
};

const nearbyAreas = (area: AreaSlug) =>
  localities[area].nearby
    .filter((slug): slug is AreaSlug => slug !== area && slug in localities)
    .map((slug) => ({
      slug,
      name: localities[slug].name,
      km: Math.max(1, Math.round(distanceKm(localities[area].coords, localities[slug].coords))),
    }));

// Where in the buyer's journey each service does its work (stage 1 = discovering, 4 = deciding)
const JOURNEY_STAGES: Record<ServiceSlug, number[]> = {
  seo: [0],
  'local-seo': [0],
  'google-business-profile': [0, 1],
  'google-ads': [0],
  'meta-ads': [0, 1],
  'performance-marketing': [0, 3],
  'ai-search-visibility': [0, 1],
  'digital-marketing': [0, 1],
  'content-marketing': [0, 1],
  'social-media-management': [0, 1],
  'instagram-marketing': [0, 1],
  'personal-branding': [1],
  'linkedin-branding': [0, 1],
  ugc: [0, 1],
  'influencer-marketing': [0],
  'brand-identity': [1, 2],
  'packaging-design': [2, 3],
  'ui-ux-design': [1, 2],
  'pitch-decks': [2, 3],
  'website-design': [1, 2],
  'website-development': [1, 2],
  'web-apps': [2, 3],
  'mobile-apps': [2, 3],
  'ai-chatbots': [1, 2],
  'whatsapp-automation': [2, 3],
  'marketing-automation': [2, 3],
  photography: [0, 1],
  'video-production': [0, 1],
  'drone-shoots': [0, 1],
};

// `abroad` swaps in the reworded texts for deliverables that name Indian platforms
const deliverables = (service: ServiceSlug, heading: string, abroad = false): PageSection => ({
  kind: 'cards',
  id: 'deliverables',
  eyebrow: 'What you get',
  heading,
  items: services[service].deliverables.map((item) => {
    const text = abroad ? services[service].abroad?.[item.title] : undefined;
    return text ? { ...item, text } : item;
  }),
});

const process = (service: ServiceSlug): PageSection => ({
  kind: 'steps',
  id: 'process',
  eyebrow: 'How we work',
  heading: `How we run ${services[service].name}`,
  items: services[service].process,
});

const ZONES = ['Central', 'North', 'East', 'South', 'West'] as const;

// One compact link section per Bengaluru zone – for hubs that link to every locality
const zoneSections = (
  id: string,
  link: (area: AreaSlug) => PageLink & { live: boolean }
): PageSection[] =>
  ZONES.flatMap((zone) => {
    const links = keep(
      LOCALITY_PAGE_SLUGS.filter((area) => localities[area].zone === zone).map(link)
    );
    return links.length
      ? [
          {
            kind: 'links' as const,
            id: `${id}-${zone.toLowerCase()}`,
            eyebrow: 'Across Bengaluru',
            heading: `${zone} Bengaluru`,
            links,
            compact: true,
          },
        ]
      : [];
  });

// A business type has no hub of its own – the page for its first-ranked service stands in for it
const businessLink = (business: BusinessSlug, label = businesses[business].title) => {
  const top = businessChannelsOf(business)[0]?.service ?? 'local-seo';
  return {
    label,
    href: paths.serviceBusiness(top, business),
    live: exists.serviceBusiness(top, business) && indexable.serviceBusiness(top, business),
  };
};

// ---------- Index pages: /services and /industries ----------

export const servicesIndex = (): PseoPage => {
  const groups = [...new Set(SERVICE_SLUGS.map((slug) => services[slug].group))];
  return withSchema({
    kind: 'index',
    path: paths.services(),
    title: 'Digital Marketing Services in Bengaluru | BMU Marketing',
    description: clip(
      'SEO, ads, social media, branding, websites, AI and video production from one team in Bengaluru. See every service BMU Marketing offers.'
    ),
    eyebrow: 'Services',
    h1: 'Every service',
    h1Accent: 'from one team.',
    intro:
      'Strategy, search, ads, social, design, websites, AI and production – run by one team in Bengaluru, so every channel works to the same plan.',
    facts: [
      { label: 'Services', value: String(SERVICE_SLUGS.length) },
      { label: 'Service groups', value: String(groups.length) },
      { label: 'Industries', value: String(INDUSTRY_SLUGS.length) },
      { label: 'Based in', value: 'JP Nagar, Bengaluru' },
    ],
    sections: groups.map((group) => ({
      kind: 'links' as const,
      id: group.toLowerCase().replace(/[^a-z]+/g, '-'),
      heading: group,
      links: keep(
        SERVICE_SLUGS.filter((slug) => services[slug].group === group).map((slug) => ({
          label: services[slug].title,
          href: paths.serviceHub(slug),
          note: services[slug].summary,
          live: indexable.serviceHub(),
        }))
      ),
    })),
    faqs: [],
    related: [
      {
        heading: 'Browse by industry',
        links: [{ label: 'All industries', href: paths.industries() }],
      },
    ],
    breadcrumbs: [crumb.home, crumb.services],
    cta: ctaFor('business'),
    indexable: true,
  });
};

export const industriesIndex = (): PseoPage =>
  withSchema({
    kind: 'index',
    path: paths.industries(),
    title: 'Industry Marketing in Bengaluru | BMU Marketing',
    description: clip(
      'Marketing built for your sector – real estate, healthcare, restaurants, education, retail and more. See how BMU Marketing works with each industry.'
    ),
    eyebrow: 'Industries',
    h1: 'Marketing built',
    h1Accent: 'for your industry.',
    intro:
      'Every industry has its own customers, seasons and rules. These pages show the channels that work for each one, and how we run them.',
    facts: [
      { label: 'Industries', value: String(INDUSTRY_SLUGS.length) },
      { label: 'Business types', value: String(BUSINESS_SLUGS.length) },
      { label: 'Bengaluru areas', value: String(LOCALITY_PAGE_SLUGS.length) },
      { label: 'Based in', value: 'JP Nagar, Bengaluru' },
    ],
    sections: [
      {
        kind: 'links',
        id: 'all-industries',
        heading: 'Choose your industry',
        links: keep(
          INDUSTRY_SLUGS.map((slug) => ({
            label: industries[slug].marketingLabel,
            href: paths.industryHub(slug),
            note: firstSentence(industries[slug].intro),
            live: indexable.industryHub(),
          }))
        ),
      },
      {
        kind: 'links',
        id: 'businesses',
        eyebrow: 'Local businesses',
        heading: 'Or find your type of business',
        links: keep(BUSINESS_SLUGS.map((slug) => businessLink(slug))),
        compact: true,
      },
    ],
    faqs: [],
    related: [
      { heading: 'Browse by service', links: [{ label: 'All services', href: paths.services() }] },
    ],
    breadcrumbs: [crumb.home, crumb.industries],
    cta: ctaFor('business'),
    indexable: true,
  });

// ---------- 1. Service hub: /services/[service] ----------

export const serviceHub = (slug: ServiceSlug): PseoPage => {
  const service = services[slug];
  const using = industriesUsing(slug);
  const sections: PageSection[] = [
    {
      kind: 'prose',
      id: 'why',
      eyebrow: 'Why it matters',
      heading: `What ${service.name} does for your business`,
      paragraphs: [service.whyItMatters, service.timeline],
    },
    deliverables(slug, `${service.title}, done properly`),
    process(slug),
    {
      kind: 'checks',
      id: 'reports',
      eyebrow: 'Reporting',
      heading: 'What you’ll see every month',
      items: service.reportsOn.map((title) => ({ title })),
    },
  ];

  const byIndustry = keep(
    using.map((industry) => ({
      label: `${service.title} for ${industries[industry].name}`,
      href: paths.serviceIndustry(slug, industry),
      note: firstSentence(channelsOf(industry).find((c) => c.service === slug)?.why ?? ''),
      live: indexable.serviceIndustry(slug, industry),
    }))
  );
  if (byIndustry.length) {
    sections.push({
      kind: 'links',
      id: 'industries',
      eyebrow: 'By industry',
      heading: `${service.title} for your industry`,
      links: byIndustry,
    });
  }

  const byBusiness = keep(
    businessesUsing(slug).map((business) => ({
      label: `${service.title} for ${businesses[business].name}`,
      href: paths.serviceBusiness(slug, business),
      live: indexable.serviceBusiness(slug, business),
    }))
  );
  if (byBusiness.length) {
    sections.push({
      kind: 'links',
      id: 'businesses',
      eyebrow: 'By type of business',
      heading: `${service.title} for local businesses`,
      links: byBusiness,
      compact: true,
    });
  }

  const local = isLocalService(slug);
  if (local) {
    sections.push(
      ...zoneSections('areas', (area) => ({
        label: `${service.title} in ${localities[area].name}`,
        href: paths.serviceLocality(slug, area),
        live: indexable.serviceLocality(slug, area),
      }))
    );
    const byCity = keep(
      CITY_PAGE_SLUGS.map((city) => ({
        label: `${service.title} in ${getCity(city).name}`,
        href: paths.serviceCity(slug, city),
        live: indexable.serviceCity(slug, city),
      }))
    );
    if (byCity.length) {
      sections.push({
        kind: 'links',
        id: 'cities',
        eyebrow: 'Across India',
        heading: `${service.title} in other cities`,
        links: byCity,
        compact: true,
      });
    }
    const inDubai = keep([
      {
        label: `${service.title} in Dubai`,
        href: paths.serviceMarket(slug, 'dubai'),
        live: indexable.serviceMarket(slug, 'dubai'),
      },
      ...DUBAI_AREA_SLUGS.map((area) => ({
        label: `${service.title} in ${dubaiAreas[area].name}`,
        href: paths.serviceDubaiArea(slug, area),
        live: indexable.serviceDubaiArea(slug, area),
      })),
    ]);
    if (inDubai.length) {
      sections.push({
        kind: 'links',
        id: 'dubai',
        eyebrow: 'Across Dubai',
        heading: `${service.title} in Dubai`,
        links: inDubai,
        compact: true,
      });
    }
    const abroad = keep(
      OTHER_MARKET_SLUGS.map((market) => ({
        label: `${service.title} in ${markets[market].name}`,
        href: paths.serviceMarket(slug, market),
        live: indexable.serviceMarket(slug, market),
      }))
    );
    if (abroad.length) {
      sections.push({
        kind: 'links',
        id: 'international',
        eyebrow: 'International',
        heading: `${service.title} in the GCC, USA and Canada`,
        links: abroad,
        compact: true,
      });
    }
  }

  const page = {
    kind: 'service-hub' as const,
    path: paths.serviceHub(slug),
    title: `${upperFirst(service.agencyNoun)} in Bengaluru | ${site.name}`,
    description: clip(`${service.summary} ${upperFirst(service.agencyNoun)} in Bengaluru.`),
    eyebrow: service.group,
    h1: upperFirst(service.agencyNoun),
    h1Accent: 'in Bengaluru.',
    intro: service.intro,
    facts: [
      { label: 'Part of', value: service.group },
      { label: 'Tailored for', value: `${using.length} industries` },
      ...(local
        ? [{ label: 'Bengaluru areas', value: `${LOCALITY_PAGE_SLUGS.length} localities` }]
        : []),
      { label: 'We report on', value: service.reportsOn[0] },
    ],
    sections,
    faqs: service.faqs,
    related: [
      {
        heading: 'Works well with',
        links: keep(
          service.related.map((other) => ({
            label: services[other].title,
            href: paths.serviceHub(other),
            note: services[other].summary,
            live: indexable.serviceHub(),
          }))
        ),
      },
    ],
    breadcrumbs: [
      crumb.home,
      crumb.services,
      { label: service.title, href: paths.serviceHub(slug) },
    ],
    cta: ctaFor('business'),
    indexable: indexable.serviceHub(),
  };
  return withSchema(page, [
    serviceSchema({
      name: `${service.title} in Bengaluru`,
      description: service.summary,
      path: page.path,
      serviceType: service.title,
      areaServed: 'Bengaluru',
    }),
  ]);
};

// ---------- 2. Industry hub: /industries/[industry] ----------

export const industryHub = (slug: IndustrySlug): PseoPage => {
  const industry = industries[slug];
  const channels = channelsOf(slug);
  const sections: PageSection[] = [
    {
      kind: 'cards',
      id: 'challenges',
      eyebrow: 'The challenge',
      heading: `What makes ${industry.name} hard to market`,
      items: industry.challenges,
    },
    {
      kind: 'steps',
      id: 'journey',
      eyebrow: 'Buyer journey',
      heading: `How ${industry.customers} decide`,
      items: industry.buyerJourney.map(({ stage, text }) => ({ title: stage, text })),
    },
    {
      kind: 'cards',
      id: 'channels',
      eyebrow: 'Channel mix',
      heading: `What works for ${industry.name}, in order`,
      items: channels.map(({ service, why }, i) => {
        const live = indexable.serviceIndustry(service, slug);
        return {
          title: services[service].title,
          text: why,
          tag: `#${i + 1}`,
          ...(linkable(live) ? { href: paths.serviceIndustry(service, slug) } : {}),
        };
      }),
    },
    {
      kind: 'prose',
      id: 'timing',
      eyebrow: industry.compliance ? 'Timing and rules' : 'Timing',
      heading: industry.compliance ? 'Seasons and advertising rules' : 'When demand peaks',
      paragraphs: [industry.seasonality, ...(industry.compliance ? [industry.compliance] : [])],
    },
    {
      kind: 'checks',
      id: 'kpis',
      eyebrow: 'Measuring it',
      heading: 'The numbers we watch',
      items: industry.kpis.map((title) => ({ title })),
    },
    {
      kind: 'checks',
      id: 'specialities',
      eyebrow: 'Specialities',
      heading: `${industry.title} we work with`,
      items: industry.subSegments.map((title) => ({ title: upperFirst(title) })),
    },
  ];

  // The specific local business types that belong to this industry
  const kinds = keep(
    BUSINESS_SLUGS.filter((business) => businesses[business].industry === slug).map((business) => ({
      ...businessLink(business),
      note: firstSentence(businesses[business].intro),
    }))
  );
  if (kinds.length) {
    sections.push({
      kind: 'links',
      id: 'businesses',
      eyebrow: 'By type of business',
      heading: `${industry.title}, business by business`,
      links: kinds,
    });
  }

  if (isLocalIndustry(slug)) {
    sections.push(
      ...zoneSections('areas', (area) => ({
        label: `${industry.marketingLabel} in ${localities[area].name}`,
        href: paths.industryLocality(slug, area),
        live: indexable.industryLocality(slug, area),
      }))
    );
  }

  // Related industries: the ones whose top channels overlap most with this one's
  const top = new Set(channels.slice(0, 4).map((c) => c.service));
  const similar = INDUSTRY_SLUGS.filter((other) => other !== slug)
    .map((other) => ({
      other,
      overlap: channelsOf(other)
        .slice(0, 4)
        .filter((c) => top.has(c.service)).length,
    }))
    .sort((a, b) => b.overlap - a.overlap)
    .slice(0, 4);

  const page = {
    kind: 'industry-hub' as const,
    path: paths.industryHub(slug),
    title: `${industry.marketingLabel} Agency in Bengaluru | ${site.name}`,
    description: clip(
      `${industry.marketingLabel} in Bengaluru for ${industry.audience}. ${firstSentence(industry.intro)}`
    ),
    eyebrow: 'Industries',
    h1: industry.marketingLabel,
    h1Accent: 'in Bengaluru.',
    intro: industry.intro,
    facts: [
      { label: 'We work with', value: upperFirst(industry.audience) },
      { label: 'Their customers', value: upperFirst(industry.customers) },
      {
        label: 'Top channels',
        value: listJoin(channels.slice(0, 3).map((c) => services[c.service].title)),
      },
    ],
    sections,
    faqs: industry.faqs,
    related: [
      {
        heading: 'Similar industries',
        links: keep(
          similar.map(({ other }) => ({
            label: industries[other].marketingLabel,
            href: paths.industryHub(other),
            live: indexable.industryHub(),
          }))
        ),
      },
    ],
    breadcrumbs: [
      crumb.home,
      crumb.industries,
      { label: industry.title, href: paths.industryHub(slug) },
    ],
    cta: ctaFor(industry.businessNoun),
    indexable: indexable.industryHub(),
  };
  return withSchema(page, [
    serviceSchema({
      name: `${industry.marketingLabel} in Bengaluru`,
      description: firstSentence(industry.intro),
      path: page.path,
      serviceType: industry.marketingLabel,
      areaServed: 'Bengaluru',
      audience: industry.audience,
    }),
  ]);
};

// ---------- 3. Service × Industry: /[service]-for-[industry] ----------

export const serviceIndustry = (
  serviceSlug: ServiceSlug,
  industrySlug: IndustrySlug
): PseoPage | null => {
  if (!exists.serviceIndustry(serviceSlug, industrySlug)) return null;
  const service = services[serviceSlug];
  const industry = industries[industrySlug];
  const channels = channelsOf(industrySlug);
  const rank = channels.findIndex((c) => c.service === serviceSlug);
  const channel = channels[rank];
  const others = channels.filter((c) => c.service !== serviceSlug);
  const stages = JOURNEY_STAGES[serviceSlug];
  const seed = `${serviceSlug}/${industrySlug}`;

  const measures = [...new Set([...service.reportsOn, ...industry.kpis])].slice(0, 6);

  const faqs: Faq[] = [
    {
      q: `Is ${service.name} worth it for ${withArticle(industry.businessNoun)}?`,
      a: `For ${industry.name}, we rank ${service.name} #${rank + 1} of the ${channels.length} channels we’d consider. ${channel.why}`,
    },
    {
      q: `How long does ${service.name} take to work for ${industry.name}?`,
      a: `${service.timeline} Timing matters too: ${lowerFirst(industry.seasonality)}`,
    },
    {
      q: `What should ${withArticle(industry.businessNoun)} pair with ${service.name}?`,
      a: `${listJoin(others.slice(0, 3).map((c) => services[c.service].name))}. ${firstSentence(others[0]?.why ?? '')}`,
    },
    ...(industry.compliance
      ? [
          {
            q: `Are there advertising rules for ${industry.name}?`,
            a: `${industry.compliance} We build these into every campaign before anything goes live.`,
          },
        ]
      : []),
    ...rotate(service.faqs, seed, 1),
    ...rotate(industry.faqs, seed, 1),
  ];

  const sections: PageSection[] = [
    {
      kind: 'cards',
      id: 'challenges',
      eyebrow: 'The challenge',
      heading: `What makes ${industry.name} different`,
      items: industry.challenges,
    },
    {
      kind: 'steps',
      id: 'journey',
      eyebrow: 'Buyer journey',
      heading: `Where ${service.name} fits in how ${industry.customers} decide`,
      items: industry.buyerJourney.map(({ stage, text }, i) => ({
        title: stage,
        text,
        ...(stages.includes(i) ? { tag: `Where ${service.name} works` } : {}),
      })),
    },
    deliverables(serviceSlug, `${service.title} for ${industry.name}: what you get`),
    process(serviceSlug),
    {
      kind: 'checks',
      id: 'measures',
      eyebrow: 'Measuring it',
      heading: 'What we track',
      items: measures.map((title) => ({ title })),
    },
  ];

  const pairWith = others.slice(0, 4).map(({ service: other, why }) => {
    const live = indexable.serviceIndustry(other, industrySlug);
    return {
      title: services[other].title,
      text: firstSentence(why),
      ...(linkable(live) ? { href: paths.serviceIndustry(other, industrySlug) } : {}),
    } satisfies SectionItem;
  });
  sections.push({
    kind: 'cards',
    id: 'pair',
    eyebrow: 'Works well alongside',
    heading: `The rest of the ${industry.name} channel mix`,
    items: pairWith,
  });

  if (industry.compliance) {
    sections.push({
      kind: 'prose',
      id: 'rules',
      eyebrow: 'Rules',
      heading: 'Advertising rules we follow',
      paragraphs: [industry.compliance],
    });
  }

  const page = {
    kind: 'service-industry' as const,
    path: paths.serviceIndustry(serviceSlug, industrySlug),
    title: `${service.title} for ${industry.title} in Bengaluru | ${site.name}`,
    description: clip(`${service.title} for ${industry.name}: ${lowerFirst(channel.why)}`),
    eyebrow: industry.marketingLabel,
    h1: `${service.title} for`,
    h1Accent: `${industry.name}.`,
    intro: channel.why,
    facts: [
      { label: `Rank in the ${industry.name} mix`, value: `#${rank + 1} of ${channels.length}` },
      { label: 'Their customers', value: upperFirst(industry.customers) },
      {
        label: 'Works at',
        value: stages
          .map((i) => industry.buyerJourney[i]?.stage)
          .filter(Boolean)
          .join(' · '),
      },
      { label: 'We work with', value: upperFirst(industry.audience) },
    ],
    sections,
    faqs,
    related: [
      {
        heading: `More for ${industry.name}`,
        links: [
          { label: industry.marketingLabel, href: paths.industryHub(industrySlug) },
          ...keep(
            others.slice(4, 8).map(({ service: other }) => ({
              label: `${services[other].title} for ${industry.name}`,
              href: paths.serviceIndustry(other, industrySlug),
              live: indexable.serviceIndustry(other, industrySlug),
            }))
          ),
        ],
      },
      {
        heading: `${service.title} for specific businesses`,
        links: keep(
          BUSINESS_SLUGS.filter(
            (business) =>
              businesses[business].industry === industrySlug &&
              exists.serviceBusiness(serviceSlug, business)
          ).map((business) => ({
            label: `${service.title} for ${businesses[business].name}`,
            href: paths.serviceBusiness(serviceSlug, business),
            live: indexable.serviceBusiness(serviceSlug, business),
          }))
        ),
      },
      {
        heading: `${service.title} for other industries`,
        links: [
          { label: `${service.title} in Bengaluru`, href: paths.serviceHub(serviceSlug) },
          ...keep(
            rotate(
              industriesUsing(serviceSlug).filter((other) => other !== industrySlug),
              seed,
              4
            ).map((other) => ({
              label: `${service.title} for ${industries[other].name}`,
              href: paths.serviceIndustry(serviceSlug, other),
              live: indexable.serviceIndustry(serviceSlug, other),
            }))
          ),
        ],
      },
    ],
    breadcrumbs: [
      crumb.home,
      crumb.services,
      { label: service.title, href: paths.serviceHub(serviceSlug) },
      { label: `For ${industry.name}`, href: paths.serviceIndustry(serviceSlug, industrySlug) },
    ],
    cta: ctaFor(industry.businessNoun),
    indexable: indexable.serviceIndustry(serviceSlug, industrySlug),
  };
  return withSchema(page, [
    serviceSchema({
      name: `${service.title} for ${industry.title}`,
      description: firstSentence(channel.why),
      path: page.path,
      serviceType: service.title,
      areaServed: 'Bengaluru',
      audience: industry.audience,
    }),
  ]);
};

// ---------- 3b. Service × Business type: /[service]-for-[business] ----------

// The sheet's "typical customer value", in words a business owner recognises
const VALUE_LABEL = {
  High: 'High-ticket, considered decision',
  Medium: 'Mid-ticket, often repeat',
  Low: 'Smaller, frequent jobs',
} as const;

export const serviceBusiness = (
  serviceSlug: ServiceSlug,
  businessSlug: BusinessSlug
): PseoPage | null => {
  if (!exists.serviceBusiness(serviceSlug, businessSlug)) return null;
  const service = services[serviceSlug];
  const business = businesses[businessSlug];
  const parent = industries[business.industry];
  const channels = businessChannelsOf(businessSlug);
  const rank = channels.findIndex((c) => c.service === serviceSlug);
  const channel = channels[rank];
  const others = channels.filter((c) => c.service !== serviceSlug);
  const seed = `${serviceSlug}/${businessSlug}`;
  const parentPage = exists.serviceIndustry(serviceSlug, business.industry);
  const siblings = BUSINESS_SLUGS.filter(
    (other) =>
      other !== businessSlug &&
      businesses[other].category === business.category &&
      exists.serviceBusiness(serviceSlug, other)
  );

  const faqs: Faq[] = [
    {
      q: `Is ${service.name} worth it for ${withArticle(business.businessNoun)}?`,
      a: `For ${business.name}, we rank ${service.name} #${rank + 1} of the ${channels.length} channels we’d start with. ${channel.why}`,
    },
    {
      q: `How long does ${service.name} take to work for ${business.name}?`,
      a: service.timeline,
    },
    ...(others.length
      ? [
          {
            q: `What should ${withArticle(business.businessNoun)} pair with ${service.name}?`,
            a: `${upperFirst(listJoin(others.slice(0, 3).map((c) => services[c.service].name)))}. ${firstSentence(others[0].why)}`,
          },
        ]
      : []),
    ...rotate(business.faqs, seed, 2),
    ...rotate(service.faqs, seed, 1),
  ];

  const sections: PageSection[] = [
    {
      kind: 'prose',
      id: 'customers',
      eyebrow: 'Your customers',
      heading: `How customers choose ${withArticle(business.businessNoun)}`,
      paragraphs: [business.intro, business.localAngle],
    },
    {
      kind: 'cards',
      id: 'challenges',
      eyebrow: 'The challenge',
      heading: `What makes marketing ${business.name} different`,
      items: business.challenges,
    },
    {
      kind: 'checks',
      id: 'searches',
      eyebrow: 'How they search',
      heading: 'Searches we build around',
      intro: `${service.title} for ${business.name} starts with what customers actually type – searches like these:`,
      items: business.searches.map((search) => ({ title: `“${search}”` })),
    },
    deliverables(serviceSlug, `${service.title} for ${business.name}: what you get`),
    process(serviceSlug),
    {
      kind: 'checks',
      id: 'measures',
      eyebrow: 'Measuring it',
      heading: 'What we track',
      items: [...new Set([...service.reportsOn, ...parent.kpis])]
        .slice(0, 6)
        .map((title) => ({ title })),
    },
  ];

  if (others.length) {
    sections.push({
      kind: 'cards',
      id: 'pair',
      eyebrow: 'Works well alongside',
      heading: `The rest of the mix for ${business.name}`,
      items: others.slice(0, 4).map(({ service: other, why }) => {
        const live = indexable.serviceBusiness(other, businessSlug);
        return {
          title: services[other].title,
          text: firstSentence(why),
          tag: `#${channels.findIndex((c) => c.service === other) + 1}`,
          ...(linkable(live) ? { href: paths.serviceBusiness(other, businessSlug) } : {}),
        } satisfies SectionItem;
      }),
    });
  }

  if (parent.compliance) {
    sections.push({
      kind: 'prose',
      id: 'rules',
      eyebrow: 'Rules',
      heading: `Advertising rules in ${parent.name}`,
      paragraphs: [parent.compliance],
    });
  }

  const page = {
    kind: 'service-business' as const,
    path: paths.serviceBusiness(serviceSlug, businessSlug),
    title: `${service.title} for ${business.title} in Bengaluru | ${site.name}`,
    description: clip(`${service.title} for ${business.name}: ${lowerFirst(channel.why)}`),
    eyebrow: business.category,
    h1: `${service.title} for`,
    h1Accent: `${business.name}.`,
    intro: channel.why,
    facts: [
      { label: `Rank for ${business.name}`, value: `#${rank + 1} of ${channels.length}` },
      { label: 'Their customers', value: upperFirst(business.customers) },
      { label: 'Customer value', value: VALUE_LABEL[business.customerValue] },
      { label: 'Part of', value: parent.title },
    ],
    sections,
    faqs,
    related: [
      {
        heading: `More for ${business.name}`,
        links: keep(
          others.slice(4).map(({ service: other }) => ({
            label: `${services[other].title} for ${business.name}`,
            href: paths.serviceBusiness(other, businessSlug),
            live: indexable.serviceBusiness(other, businessSlug),
          }))
        ),
      },
      {
        heading: parent.title,
        links: [
          { label: parent.marketingLabel, href: paths.industryHub(business.industry) },
          ...(parentPage
            ? keep([
                {
                  label: `${service.title} for ${parent.name}`,
                  href: paths.serviceIndustry(serviceSlug, business.industry),
                  live: indexable.serviceIndustry(serviceSlug, business.industry),
                },
              ])
            : []),
        ],
      },
      {
        heading: `${service.title} for similar businesses`,
        links: [
          { label: `${service.title} in Bengaluru`, href: paths.serviceHub(serviceSlug) },
          ...keep(
            rotate(siblings, seed, 5).map((other) => ({
              label: `${service.title} for ${businesses[other].name}`,
              href: paths.serviceBusiness(serviceSlug, other),
              live: indexable.serviceBusiness(serviceSlug, other),
            }))
          ),
        ],
      },
    ],
    breadcrumbs: [
      crumb.home,
      crumb.services,
      { label: service.title, href: paths.serviceHub(serviceSlug) },
      { label: `For ${business.name}`, href: paths.serviceBusiness(serviceSlug, businessSlug) },
    ],
    cta: ctaFor(business.businessNoun),
    indexable: indexable.serviceBusiness(serviceSlug, businessSlug),
  };
  return withSchema(page, [
    serviceSchema({
      name: `${service.title} for ${business.title}`,
      description: firstSentence(channel.why),
      path: page.path,
      serviceType: service.title,
      areaServed: 'Bengaluru',
      audience: business.name,
    }),
  ]);
};

// ---------- 4. Service × Bengaluru locality: /[service]/bengaluru/[area] ----------

export const serviceLocality = (serviceSlug: ServiceSlug, areaSlug: AreaSlug): PseoPage | null => {
  if (!exists.serviceLocality(serviceSlug)) return null;
  const service = services[serviceSlug];
  const area = localities[areaSlug];
  const near = nearbyAreas(areaSlug);
  const visit = studio(area.coords, area.name);
  const seed = `${serviceSlug}/${areaSlug}`;
  const localIndustries = area.industries.filter((industry) =>
    exists.serviceIndustry(serviceSlug, industry)
  );

  const faqs: Faq[] = [
    { q: `Do you work with businesses in ${area.name}?`, a: visit.answer },
    {
      q: `How competitive is ${service.name} in ${area.name}?`,
      a: competitionText(area.name, service.name, area.competition),
    },
    {
      q: `Which businesses in ${area.name} get the most from ${service.name}?`,
      a: `Around ${area.name} we mostly see ${listJoin(area.businesses.slice(0, 4))}.${
        localIndustries.length
          ? ` ${service.title} tends to pay off fastest for ${listJoin(localIndustries.map((i) => industries[i].name))} – sectors that are strong here.`
          : ''
      }`,
    },
    ...(near.length
      ? [
          {
            q: `Do you cover areas near ${area.name}?`,
            a: `Yes – including ${listJoin(near.slice(0, 4).map((n) => n.name))}. The same team runs ${service.name} across south, east, north and west Bengaluru.`,
          },
        ]
      : []),
    ...rotate(service.faqs, seed, 1),
  ];

  const sections: PageSection[] = [
    {
      kind: 'prose',
      id: 'area',
      eyebrow: `${area.zone} Bengaluru`,
      heading: `Doing business in ${area.name}`,
      paragraphs: [area.character, area.searchHabits],
    },
    {
      kind: 'prose',
      id: 'competition',
      eyebrow: 'Local competition',
      heading: `How crowded ${service.name} is in ${area.name}`,
      paragraphs: [
        competitionText(area.name, service.name, area.competition),
        `We build for the way people here describe where they are – ${listJoin(area.landmarks.slice(0, 3))} – so you show up for the searches your customers actually make.`,
      ],
    },
    {
      kind: 'checks',
      id: 'businesses',
      eyebrow: 'Who we help',
      heading: `Businesses we work with in ${area.name}`,
      items: area.businesses.map((title) => ({ title: upperFirst(title) })),
    },
    deliverables(serviceSlug, `${service.title} in ${area.name}: what you get`),
    process(serviceSlug),
  ];

  const byIndustry = localIndustries.map((industry) => {
    const live = indexable.serviceIndustry(serviceSlug, industry);
    return {
      title: `${service.title} for ${industries[industry].name}`,
      text: firstSentence(channelsOf(industry).find((c) => c.service === serviceSlug)?.why ?? ''),
      ...(linkable(live) ? { href: paths.serviceIndustry(serviceSlug, industry) } : {}),
    } satisfies SectionItem;
  });
  if (byIndustry.length) {
    sections.push({
      kind: 'cards',
      id: 'industries',
      eyebrow: 'Strong here',
      heading: `${service.title} for ${area.name}’s main industries`,
      items: byIndustry,
    });
  }

  const nearLinks = keep(
    near.map((n) => ({
      label: `${service.title} in ${n.name}`,
      href: paths.serviceLocality(serviceSlug, n.slug),
      note: `About ${n.km} km away`,
      live: indexable.serviceLocality(serviceSlug, n.slug),
    }))
  );
  if (nearLinks.length) {
    sections.push({
      kind: 'links',
      id: 'nearby',
      eyebrow: 'Nearby',
      heading: 'Areas next door',
      links: nearLinks,
    });
  }

  const page = {
    kind: 'service-locality' as const,
    path: paths.serviceLocality(serviceSlug, areaSlug),
    title: `${upperFirst(service.agencyNoun)} in ${area.name}, Bengaluru | ${site.name}`,
    description: clip(
      `${upperFirst(service.agencyNoun)} in ${area.name}, Bengaluru – for ${area.businesses[0]} and other local businesses. ${service.summary}`
    ),
    eyebrow: `${area.zone} Bengaluru`,
    h1: upperFirst(service.agencyNoun),
    h1Accent: `in ${area.name}.`,
    intro: `${service.localAngle} ${area.searchHabits}`,
    facts: [
      { label: 'Distance', value: visit.fact },
      { label: 'Local competition', value: competitionLabel[area.competition] },
      { label: 'Common here', value: area.businesses.slice(0, 2).map(upperFirst).join(' · ') },
      { label: 'Landmarks', value: area.landmarks.slice(0, 2).join(' · ') },
    ],
    sections,
    faqs,
    related: [
      {
        heading: `Other services in ${area.name}`,
        links: keep(
          localServices
            .filter((other) => other !== serviceSlug)
            .map((other) => ({
              label: `${services[other].title} in ${area.name}`,
              href: paths.serviceLocality(other, areaSlug),
              live: indexable.serviceLocality(other, areaSlug),
            }))
        ),
      },
      {
        // the zone the sheet puts this area in, beyond its next-door neighbours
        heading: `More in ${area.zone} Bengaluru`,
        links: keep(
          rotate(
            LOCALITY_PAGE_SLUGS.filter(
              (other) =>
                other !== areaSlug &&
                localities[other].zone === area.zone &&
                !near.some((n) => n.slug === other)
            ),
            seed,
            6
          ).map((other) => ({
            label: `${service.title} in ${localities[other].name}`,
            href: paths.serviceLocality(serviceSlug, other),
            live: indexable.serviceLocality(serviceSlug, other),
          }))
        ),
      },
      {
        heading: `More about ${service.name}`,
        links: [
          { label: `${service.title} in Bengaluru`, href: paths.serviceHub(serviceSlug) },
          ...keep(
            localIndustriesFor(areaSlug).map((industry) => ({
              label: `${industries[industry].marketingLabel} in ${area.name}`,
              href: paths.industryLocality(industry, areaSlug),
              live: indexable.industryLocality(industry, areaSlug),
            }))
          ),
        ],
      },
    ],
    breadcrumbs: [
      crumb.home,
      crumb.services,
      { label: service.title, href: paths.serviceHub(serviceSlug) },
      { label: area.name, href: paths.serviceLocality(serviceSlug, areaSlug) },
    ],
    cta: ctaFor(`business in ${area.name}`),
    indexable: indexable.serviceLocality(serviceSlug, areaSlug),
  };
  return withSchema(page, [
    serviceSchema({
      name: `${service.title} in ${area.name}, Bengaluru`,
      description: service.summary,
      path: page.path,
      serviceType: service.title,
      areaServed: `${area.name}, Bengaluru`,
    }),
  ]);
};

// Industries with locality pages that are strong in an area
const localIndustriesFor = (area: AreaSlug) =>
  LOCAL_INDUSTRIES.filter((industry) => localities[area].industries.includes(industry));

// ---------- 5. Industry × Bengaluru locality: /industries/[industry]/bengaluru/[area] ----------

export const industryLocality = (
  industrySlug: IndustrySlug,
  areaSlug: AreaSlug
): PseoPage | null => {
  if (!exists.industryLocality(industrySlug)) return null;
  const industry = industries[industrySlug];
  const area = localities[areaSlug];
  const near = nearbyAreas(areaSlug);
  const visit = studio(area.coords, area.name);
  const channels = channelsOf(industrySlug);
  const seed = `${industrySlug}/${areaSlug}`;
  const strongHere = area.industries.includes(industrySlug);
  // (search habits get their own section below)
  const market =
    industrySlug === 'real-estate' ? [area.realEstate, area.character] : [area.character];
  const label = industry.marketingLabel.toLowerCase();

  const faqs: Faq[] = [
    {
      q: `How do you market ${withArticle(industry.businessNoun)} in ${area.name}?`,
      a: `${industry.localAngle} In ${area.name}, ${lowerFirst(area.searchHabits)}`,
    },
    {
      q: `Is ${label} competitive in ${area.name}?`,
      a: competitionText(area.name, label, area.competition),
    },
    { q: `Do you work with ${industry.name} in ${area.name}?`, a: visit.answer },
    ...(industry.compliance
      ? [{ q: `Are there advertising rules for ${industry.name}?`, a: industry.compliance }]
      : []),
    ...rotate(industry.faqs, seed, 1),
  ];

  const sections: PageSection[] = [
    {
      kind: 'prose',
      id: 'market',
      eyebrow: `${area.zone} Bengaluru`,
      heading: `${industry.title} in ${area.name}`,
      paragraphs: market,
    },
    {
      kind: 'prose',
      id: 'local',
      eyebrow: 'Reaching customers',
      heading: `How people in ${area.name} find ${industry.name}`,
      paragraphs: [
        area.searchHabits,
        `Local searches use the names people know – ${listJoin(area.landmarks.slice(0, 3))} – so your listings, pages and ads should use them too.`,
      ],
    },
    {
      kind: 'cards',
      id: 'channels',
      eyebrow: 'Channel mix',
      heading: `What we’d run for ${withArticle(industry.businessNoun)} in ${area.name}`,
      // the key sentence only – the full reasoning lives on the industry and Service × Industry pages
      items: channels.slice(0, 6).map(({ service, why }, i) => {
        // link to the local service page where there is one, otherwise the industry one
        const local = exists.serviceLocality(service);
        const live = local
          ? indexable.serviceLocality(service, areaSlug)
          : indexable.serviceIndustry(service, industrySlug);
        const href = local
          ? paths.serviceLocality(service, areaSlug)
          : paths.serviceIndustry(service, industrySlug);
        return {
          title: services[service].title,
          text: firstSentence(why),
          tag: `#${i + 1}`,
          ...(linkable(live) ? { href } : {}),
        };
      }),
    },
    {
      kind: 'prose',
      id: 'timing',
      eyebrow: industry.compliance ? 'Timing and rules' : 'Timing',
      heading: industry.compliance ? 'Seasons and advertising rules' : 'When demand peaks',
      paragraphs: [industry.seasonality, ...(industry.compliance ? [industry.compliance] : [])],
    },
  ];

  const nearLinks = keep(
    near.map((n) => ({
      label: `${industry.marketingLabel} in ${n.name}`,
      href: paths.industryLocality(industrySlug, n.slug),
      note: `About ${n.km} km away`,
      live: indexable.industryLocality(industrySlug, n.slug),
    }))
  );
  if (nearLinks.length) {
    sections.push({
      kind: 'links',
      id: 'nearby',
      eyebrow: 'Nearby',
      heading: 'Areas next door',
      links: nearLinks,
    });
  }

  const page = {
    kind: 'industry-locality' as const,
    path: paths.industryLocality(industrySlug, areaSlug),
    title: `${industry.marketingLabel} in ${area.name}, Bengaluru | ${site.name}`,
    description: clip(
      `${industry.marketingLabel} in ${area.name}, Bengaluru. ${firstSentence(market[0])}`
    ),
    eyebrow: industry.marketingLabel,
    h1: industry.marketingLabel,
    h1Accent: `in ${area.name}.`,
    intro: `${industry.localAngle} ${firstSentence(market[0])}`,
    facts: [
      { label: 'Distance', value: visit.fact },
      { label: 'Local competition', value: competitionLabel[area.competition] },
      ...(strongHere ? [{ label: 'Locally', value: 'One of the area’s main sectors' }] : []),
      { label: 'Top channel', value: services[channels[0].service].title },
    ],
    sections,
    faqs,
    related: [
      {
        heading: `More ${label}`,
        links: [
          {
            label: `${industry.marketingLabel} in Bengaluru`,
            href: paths.industryHub(industrySlug),
          },
          ...keep(
            LOCAL_INDUSTRIES.filter((other) => other !== industrySlug).map((other) => ({
              label: `${industries[other].marketingLabel} in ${area.name}`,
              href: paths.industryLocality(other, areaSlug),
              live: indexable.industryLocality(other, areaSlug),
            }))
          ),
        ],
      },
    ],
    breadcrumbs: [
      crumb.home,
      crumb.industries,
      { label: industry.title, href: paths.industryHub(industrySlug) },
      { label: area.name, href: paths.industryLocality(industrySlug, areaSlug) },
    ],
    cta: ctaFor(`${industry.businessNoun} in ${area.name}`),
    indexable: indexable.industryLocality(industrySlug, areaSlug),
  };
  return withSchema(page, [
    serviceSchema({
      name: `${industry.marketingLabel} in ${area.name}, Bengaluru`,
      description: firstSentence(industry.localAngle),
      path: page.path,
      serviceType: industry.marketingLabel,
      areaServed: `${area.name}, Bengaluru`,
      audience: industry.audience,
    }),
  ]);
};

// ---------- 6. Service × city: /[service]/[city] ----------

export const serviceCity = (serviceSlug: ServiceSlug, citySlug: CitySlug): PseoPage | null => {
  if (!exists.serviceCity(serviceSlug, citySlug)) return null;
  const service = services[serviceSlug];
  const city = getCity(citySlug);
  const seed = `${serviceSlug}/${citySlug}`;
  const cityIndustries = city.industries.filter((industry) =>
    exists.serviceIndustry(serviceSlug, industry)
  );
  const km = Math.round(distanceKm(site.coords, city.coords));
  // Close enough to drive to for a shoot or a meeting (Mysuru, Hosur, Tumakuru…)
  const visitable = km <= 400;
  // The closest other cities with pages – same state first, then by distance
  const nearestCities = CITY_PAGE_SLUGS.filter((other) => other !== citySlug)
    .map((other) => {
      const entry = getCity(other);
      return {
        slug: other,
        name: entry.name,
        km: Math.round(distanceKm(city.coords, entry.coords)),
        sameState: entry.state === city.state,
      };
    })
    .sort((a, b) => Number(b.sameState) - Number(a.sameState) || a.km - b.km)
    .slice(0, 6);

  const faqs: Faq[] = [
    {
      q: `Do you work with businesses in ${city.name}?`,
      a: visitable
        ? `Yes. ${city.name} is about ${km} km from our Bengaluru studio, close enough for us to come over for shoots, workshops and planning meetings. Day to day, the work runs over calls and WhatsApp.`
        : `Yes – from our studio in Bengaluru, about ${km} km away. Planning, reporting and reviews happen over calls and WhatsApp, and we plan in-person visits when a shoot or workshop needs them.`,
    },
    {
      q: `How competitive is ${service.name} in ${city.name}?`,
      a: competitionText(city.name, service.name, city.competition),
    },
    {
      q: `Which languages should ${service.name} in ${city.name} use?`,
      a: `Customers in ${city.name} mostly use ${city.languages}. ${city.searchHabits}`,
    },
    ...rotate(service.faqs, seed, 2),
  ];

  const sections: PageSection[] = [
    {
      kind: 'prose',
      id: 'city',
      eyebrow: city.state,
      heading: `Doing business in ${city.name}`,
      paragraphs: [city.character, city.searchHabits],
    },
    {
      kind: 'prose',
      id: 'competition',
      eyebrow: 'Local competition',
      heading: `How crowded ${service.name} is in ${city.name}`,
      paragraphs: [
        competitionText(city.name, service.name, city.competition),
        `Plan campaigns for the languages your customers actually use – in ${city.name}, that’s ${city.languages}.`,
      ],
    },
    {
      kind: 'checks',
      id: 'businesses',
      eyebrow: 'Who we help',
      heading: `Businesses we work with in ${city.name}`,
      items: city.businesses.map((title) => ({ title: upperFirst(title) })),
    },
    deliverables(serviceSlug, `${service.title} in ${city.name}: what you get`),
    process(serviceSlug),
  ];

  const byIndustry = cityIndustries.map((industry) => {
    const live = indexable.serviceIndustry(serviceSlug, industry);
    return {
      title: `${service.title} for ${industries[industry].name}`,
      text: firstSentence(channelsOf(industry).find((c) => c.service === serviceSlug)?.why ?? ''),
      ...(linkable(live) ? { href: paths.serviceIndustry(serviceSlug, industry) } : {}),
    } satisfies SectionItem;
  });
  if (byIndustry.length) {
    sections.push({
      kind: 'cards',
      id: 'industries',
      eyebrow: 'Strong here',
      heading: `${service.title} for ${city.name}’s main industries`,
      items: byIndustry,
    });
  }

  const page = {
    kind: 'service-city' as const,
    path: paths.serviceCity(serviceSlug, citySlug),
    title: `${upperFirst(service.agencyNoun)} in ${city.name} | ${site.name}`,
    description: clip(
      `${upperFirst(service.agencyNoun)} in ${city.name}, ${city.state}. ${service.summary}`
    ),
    eyebrow: city.state,
    h1: upperFirst(service.agencyNoun),
    h1Accent: `in ${city.name}.`,
    intro: `${firstSentence(service.intro)} ${firstSentence(city.character)}`,
    facts: [
      { label: 'From our studio', value: `About ${km} km` },
      { label: 'Languages', value: upperFirst(city.languages) },
      { label: 'Local competition', value: competitionLabel[city.competition] },
      {
        label: 'How we work',
        value: visitable ? 'Remote, with visits' : 'Remotely, from Bengaluru',
      },
    ],
    sections,
    faqs,
    related: [
      {
        heading: `Other services in ${city.name}`,
        links: keep(
          localServices
            .filter((other) => other !== serviceSlug)
            .map((other) => ({
              label: `${services[other].title} in ${city.name}`,
              href: paths.serviceCity(other, citySlug),
              live: indexable.serviceCity(other, citySlug),
            }))
        ),
      },
      {
        heading: `${service.title} nearby`,
        links: [
          { label: `${service.title} in Bengaluru`, href: paths.serviceHub(serviceSlug) },
          ...keep(
            nearestCities.map((other) => ({
              label: `${service.title} in ${other.name}`,
              href: paths.serviceCity(serviceSlug, other.slug),
              live: indexable.serviceCity(serviceSlug, other.slug),
            }))
          ),
        ],
      },
    ],
    breadcrumbs: [
      crumb.home,
      crumb.services,
      { label: service.title, href: paths.serviceHub(serviceSlug) },
      { label: city.name, href: paths.serviceCity(serviceSlug, citySlug) },
    ],
    cta: ctaFor(`business in ${city.name}`),
    indexable: indexable.serviceCity(serviceSlug, citySlug),
  };
  return withSchema(page, [
    serviceSchema({
      name: `${service.title} in ${city.name}`,
      description: service.summary,
      path: page.path,
      serviceType: service.title,
      areaServed: `${city.name}, ${city.state}`,
    }),
  ]);
};

// ---------- 7. Service × city abroad: /[service]/[market] (Dubai's is /[service]/dubai) ----------

// One compact link section per Dubai district – for the Dubai page and hubs
const dubaiDistrictSections = (serviceSlug: ServiceSlug): PageSection[] =>
  DUBAI_DISTRICTS.flatMap((district) => {
    const links = keep(
      DUBAI_AREA_SLUGS.filter((area) => dubaiAreas[area].district === district).map((area) => ({
        label: `${services[serviceSlug].title} in ${dubaiAreas[area].name}`,
        href: paths.serviceDubaiArea(serviceSlug, area),
        live: indexable.serviceDubaiArea(serviceSlug, area),
      }))
    );
    return links.length
      ? [
          {
            kind: 'links' as const,
            id: `dubai-${district.toLowerCase().replace(/[^a-z]+/g, '-')}`,
            eyebrow: 'Across Dubai',
            heading: district,
            links,
            compact: true,
          },
        ]
      : [];
  });

// "Do you work with businesses in …?" for anywhere outside India
const remoteAnswer = (workingHours: string) =>
  `Yes – remotely, from our studio in Bengaluru. ${workingHours} Planning, reviews and reports happen over video calls and WhatsApp.`;

export const serviceMarket = (
  serviceSlug: ServiceSlug,
  marketSlug: MarketSlug
): PseoPage | null => {
  if (!exists.serviceMarket(serviceSlug)) return null;
  const service = services[serviceSlug];
  const market = markets[marketSlug];
  const seed = `${serviceSlug}/${marketSlug}`;
  const marketIndustries = market.industries.filter((industry) =>
    exists.serviceIndustry(serviceSlug, industry)
  );
  // The closest other cities abroad – same region first, then by distance
  const nearest = MARKET_SLUGS.filter((other) => other !== marketSlug)
    .map((other) => ({
      slug: other,
      name: markets[other].name,
      km: Math.round(distanceKm(market.coords, markets[other].coords)),
      sameRegion: markets[other].region === market.region,
    }))
    .sort((a, b) => Number(b.sameRegion) - Number(a.sameRegion) || a.km - b.km)
    .slice(0, 6);

  const faqs: Faq[] = [
    { q: `Do you work with businesses in ${market.name}?`, a: remoteAnswer(market.workingHours) },
    {
      q: `How competitive is ${service.name} in ${market.name}?`,
      a: competitionText(market.name, service.name, market.competition),
    },
    {
      q: `Which languages should ${service.name} in ${market.name} use?`,
      a: `Customers in ${market.name} mostly use ${market.languages}. ${market.searchHabits}`,
    },
    ...(market.indianCommunity
      ? [
          {
            q: `Do you work with Indian-owned businesses in ${market.name}?`,
            a: `Yes, and with local brands too. ${market.indianCommunity} Either way, we plan around the customers you want to reach.`,
          },
        ]
      : []),
    ...rotate(service.faqs, seed, 2),
  ];

  const sections: PageSection[] = [
    {
      kind: 'prose',
      id: 'city',
      eyebrow: market.country,
      heading: `Doing business in ${market.name}`,
      paragraphs: [market.character, market.searchHabits],
    },
    {
      kind: 'prose',
      id: 'competition',
      eyebrow: 'Local competition',
      heading: `How crowded ${service.name} is in ${market.name}`,
      paragraphs: [
        competitionText(market.name, service.name, market.competition),
        `Plan campaigns for the languages your customers actually use – in ${market.name}, that’s ${market.languages}.`,
      ],
    },
    {
      kind: 'checks',
      id: 'businesses',
      eyebrow: 'Who we help',
      heading: `Businesses we work with in ${market.name}`,
      items: market.businesses.map((title) => ({ title: upperFirst(title) })),
    },
    deliverables(serviceSlug, `${service.title} in ${market.name}: what you get`, true),
    process(serviceSlug),
    {
      kind: 'prose',
      id: 'working',
      eyebrow: 'Working together',
      heading: `Working with us from ${market.name}`,
      paragraphs: [remoteAnswer(market.workingHours).replace(/^Yes – r/, 'R')],
    },
  ];

  const byIndustry = marketIndustries.map((industry) => {
    const live = indexable.serviceIndustry(serviceSlug, industry);
    return {
      title: `${service.title} for ${industries[industry].name}`,
      text: firstSentence(channelsOf(industry).find((c) => c.service === serviceSlug)?.why ?? ''),
      ...(linkable(live) ? { href: paths.serviceIndustry(serviceSlug, industry) } : {}),
    } satisfies SectionItem;
  });
  if (byIndustry.length) {
    sections.push({
      kind: 'cards',
      id: 'industries',
      eyebrow: 'Strong here',
      heading: `${service.title} for ${market.name}’s main industries`,
      items: byIndustry,
    });
  }
  // Dubai's page is the hub for its areas
  if (marketSlug === 'dubai') sections.push(...dubaiDistrictSections(serviceSlug));

  const page = {
    kind: 'service-market' as const,
    path: paths.serviceMarket(serviceSlug, marketSlug),
    title: `${upperFirst(service.agencyNoun)} in ${market.name} | ${site.name}`,
    description: clip(
      `${upperFirst(service.agencyNoun)} in ${market.name}, ${market.country}. ${service.summary}`
    ),
    eyebrow: market.country,
    h1: upperFirst(service.agencyNoun),
    h1Accent: `in ${market.name}.`,
    intro: `${firstSentence(service.intro)} ${firstSentence(market.character)}`,
    facts: [
      { label: 'Country', value: market.country },
      { label: 'Time difference', value: market.timeDifference },
      { label: 'Languages', value: upperFirst(market.languages) },
      { label: 'Local competition', value: competitionLabel[market.competition] },
    ],
    sections,
    faqs,
    related: [
      {
        heading: `Other services in ${market.name}`,
        links: keep(
          localServices
            .filter((other) => other !== serviceSlug)
            .map((other) => ({
              label: `${services[other].title} in ${market.name}`,
              href: paths.serviceMarket(other, marketSlug),
              live: indexable.serviceMarket(other, marketSlug),
            }))
        ),
      },
      {
        heading: `${service.title} nearby`,
        links: [
          { label: `${service.title} in Bengaluru`, href: paths.serviceHub(serviceSlug) },
          ...keep(
            nearest.map((other) => ({
              label: `${service.title} in ${other.name}`,
              href: paths.serviceMarket(serviceSlug, other.slug),
              live: indexable.serviceMarket(serviceSlug, other.slug),
            }))
          ),
        ],
      },
    ],
    breadcrumbs: [
      crumb.home,
      crumb.services,
      { label: service.title, href: paths.serviceHub(serviceSlug) },
      { label: market.name, href: paths.serviceMarket(serviceSlug, marketSlug) },
    ],
    cta: ctaFor(`business in ${market.name}`),
    indexable: indexable.serviceMarket(serviceSlug, marketSlug),
  };
  return withSchema(page, [
    serviceSchema({
      name: `${service.title} in ${market.name}`,
      description: service.summary,
      path: page.path,
      serviceType: service.title,
      areaServed: `${market.name}, ${market.country}`,
    }),
  ]);
};

// ---------- 8. Service × Dubai area: /[service]/dubai/[area] ----------

export const serviceDubaiArea = (
  serviceSlug: ServiceSlug,
  areaSlug: DubaiAreaSlug
): PseoPage | null => {
  if (!exists.serviceDubaiArea(serviceSlug)) return null;
  const service = services[serviceSlug];
  const area = dubaiAreas[areaSlug];
  const dubai = markets.dubai;
  const seed = `${serviceSlug}/dubai/${areaSlug}`;
  const near = area.nearby
    .filter((slug) => slug !== areaSlug && slug in dubaiAreas)
    .map((slug) => ({
      slug,
      name: dubaiAreas[slug].name,
      km: Math.max(1, Math.round(distanceKm(area.coords, dubaiAreas[slug].coords))),
    }));
  const areaIndustries = area.industries.filter((industry) =>
    exists.serviceIndustry(serviceSlug, industry)
  );

  const faqs: Faq[] = [
    { q: `Do you work with businesses in ${area.name}?`, a: remoteAnswer(dubai.workingHours) },
    {
      q: `How competitive is ${service.name} in ${area.name}?`,
      a: competitionText(area.name, service.name, area.competition),
    },
    {
      q: `Which businesses in ${area.name} get the most from ${service.name}?`,
      a: `Around ${area.name} we mostly see ${listJoin(area.businesses.slice(0, 4))}.${
        areaIndustries.length
          ? ` ${service.title} tends to pay off fastest for ${listJoin(areaIndustries.map((i) => industries[i].name))} – sectors that are strong here.`
          : ''
      }`,
    },
    ...(near.length
      ? [
          {
            q: `Do you cover areas near ${area.name}?`,
            a: `Yes – including ${listJoin(near.slice(0, 4).map((n) => n.name))}, and the rest of Dubai.`,
          },
        ]
      : []),
    ...rotate(service.faqs, seed, 1),
  ];

  const sections: PageSection[] = [
    {
      kind: 'prose',
      id: 'area',
      eyebrow: `${area.district}, Dubai`,
      heading: `Doing business in ${area.name}`,
      paragraphs: [area.character, area.searchHabits],
    },
    {
      kind: 'prose',
      id: 'competition',
      eyebrow: 'Local competition',
      heading: `How crowded ${service.name} is in ${area.name}`,
      paragraphs: [
        competitionText(area.name, service.name, area.competition),
        `We build for the way people here describe where they are – ${listJoin(area.landmarks.slice(0, 3))} – so you show up for the searches your customers actually make.`,
      ],
    },
    {
      kind: 'checks',
      id: 'businesses',
      eyebrow: 'Who we help',
      heading: `Businesses we work with in ${area.name}`,
      items: area.businesses.map((title) => ({ title: upperFirst(title) })),
    },
    deliverables(serviceSlug, `${service.title} in ${area.name}: what you get`, true),
    process(serviceSlug),
  ];

  const byIndustry = areaIndustries.map((industry) => {
    const live = indexable.serviceIndustry(serviceSlug, industry);
    return {
      title: `${service.title} for ${industries[industry].name}`,
      text: firstSentence(channelsOf(industry).find((c) => c.service === serviceSlug)?.why ?? ''),
      ...(linkable(live) ? { href: paths.serviceIndustry(serviceSlug, industry) } : {}),
    } satisfies SectionItem;
  });
  if (byIndustry.length) {
    sections.push({
      kind: 'cards',
      id: 'industries',
      eyebrow: 'Strong here',
      heading: `${service.title} for ${area.name}’s main industries`,
      items: byIndustry,
    });
  }

  const nearLinks = keep(
    near.map((n) => ({
      label: `${service.title} in ${n.name}`,
      href: paths.serviceDubaiArea(serviceSlug, n.slug),
      note: `About ${n.km} km away`,
      live: indexable.serviceDubaiArea(serviceSlug, n.slug),
    }))
  );
  if (nearLinks.length) {
    sections.push({
      kind: 'links',
      id: 'nearby',
      eyebrow: 'Nearby',
      heading: 'Areas next door',
      links: nearLinks,
    });
  }

  const page = {
    kind: 'service-dubai-area' as const,
    path: paths.serviceDubaiArea(serviceSlug, areaSlug),
    title: `${upperFirst(service.agencyNoun)} in ${area.name}, Dubai | ${site.name}`,
    description: clip(
      `${upperFirst(service.agencyNoun)} in ${area.name}, Dubai – for ${area.businesses[0]} and other local businesses. ${service.summary}`
    ),
    eyebrow: `${area.district}, Dubai`,
    h1: upperFirst(service.agencyNoun),
    h1Accent: `in ${area.name}.`,
    intro: `${service.localAngle} ${area.searchHabits}`,
    facts: [
      { label: 'District', value: area.district },
      { label: 'Local competition', value: competitionLabel[area.competition] },
      area.freeZone
        ? { label: 'Free zone', value: area.freeZone }
        : {
            label: 'Common here',
            value: area.businesses.slice(0, 2).map(upperFirst).join(' · '),
          },
      { label: 'Landmarks', value: area.landmarks.slice(0, 2).join(' · ') },
    ],
    sections,
    faqs,
    related: [
      {
        heading: `Other services in ${area.name}`,
        links: keep(
          localServices
            .filter((other) => other !== serviceSlug)
            .map((other) => ({
              label: `${services[other].title} in ${area.name}`,
              href: paths.serviceDubaiArea(other, areaSlug),
              live: indexable.serviceDubaiArea(other, areaSlug),
            }))
        ),
      },
      {
        heading: `More in ${area.district}`,
        links: keep(
          rotate(
            DUBAI_AREA_SLUGS.filter(
              (other) =>
                other !== areaSlug &&
                dubaiAreas[other].district === area.district &&
                !near.some((n) => n.slug === other)
            ),
            seed,
            6
          ).map((other) => ({
            label: `${service.title} in ${dubaiAreas[other].name}`,
            href: paths.serviceDubaiArea(serviceSlug, other),
            live: indexable.serviceDubaiArea(serviceSlug, other),
          }))
        ),
      },
      {
        heading: `More about ${service.name}`,
        links: [
          ...keep([
            {
              label: `${service.title} in Dubai`,
              href: paths.serviceMarket(serviceSlug, 'dubai'),
              live: indexable.serviceMarket(serviceSlug, 'dubai'),
            },
          ]),
          { label: `${service.title} in Bengaluru`, href: paths.serviceHub(serviceSlug) },
        ],
      },
    ],
    breadcrumbs: [
      crumb.home,
      crumb.services,
      { label: service.title, href: paths.serviceHub(serviceSlug) },
      { label: 'Dubai', href: paths.serviceMarket(serviceSlug, 'dubai') },
      { label: area.name, href: paths.serviceDubaiArea(serviceSlug, areaSlug) },
    ],
    cta: ctaFor(`business in ${area.name}`),
    indexable: indexable.serviceDubaiArea(serviceSlug, areaSlug),
  };
  return withSchema(page, [
    serviceSchema({
      name: `${service.title} in ${area.name}, Dubai`,
      description: service.summary,
      path: page.path,
      serviceType: service.title,
      areaServed: `${area.name}, Dubai`,
    }),
  ]);
};
