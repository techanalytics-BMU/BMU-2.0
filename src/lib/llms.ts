import { DUBAI_DISTRICTS } from '@/data/pseo/abroad';
import { serviceGroups, type ServiceGroupSlug } from '@/data/pseo/groups';
import { BUSINESS_SLUGS, SERVICE_SLUGS, type ServiceSlug } from '@/data/pseo/slugs';
import { site } from '@/data/site';
import type { BlogPostSummary } from '@/types/blog';
import {
  CITY_PAGE_SLUGS,
  DUBAI_AREA_SLUGS,
  INDUSTRY_SLUGS_BY_PRIORITY,
  LOCALITY_PAGE_SLUGS,
  OTHER_MARKET_SLUGS,
  businessChannelsOf,
  businesses,
  channelsOf,
  dubaiAreas,
  getCity,
  indexable,
  industries,
  industriesUsing,
  isCityService,
  isLocalService,
  linkable,
  localities,
  markets,
  services,
} from '@/lib/pseo/catalog';
import { paths } from '@/lib/pseo/paths';
import { firstSentence } from '@/lib/pseo/text';

// The two files AI assistants (ChatGPT, Claude, Perplexity, Gemini, Copilot) read to understand BMU,
// built from the same data as the pages – so they never drift from the site:
//   /llms.txt       – the short guide: facts, every service and industry with its page, how the
//                     7,000+ location and industry pages are addressed, recent articles
//   /llms-full.txt  – the reference: each service and industry in full, every place served
// Only pages Google may index are named (the same rule as the site's own links).

const url = (path: string) => `${site.url}${path}`;
const groupEntries = Object.entries(serviceGroups) as [ServiceGroupSlug, (typeof serviceGroups)[ServiceGroupSlug]][];
const servicesIn = (group: string) => SERVICE_SLUGS.filter((s) => services[s].group === group);

// Where pages exist – which places doesn't depend on the service (see catalog's `indexable`)
const SAMPLE: ServiceSlug = 'digital-marketing';
const ZONES = ['Central', 'North', 'East', 'South', 'West'] as const;
const areas = LOCALITY_PAGE_SLUGS.filter((a) => linkable(indexable.serviceLocality(SAMPLE, a)));
const cities = CITY_PAGE_SLUGS.filter((c) => linkable(indexable.serviceCity(SAMPLE, c)));
const dubai = DUBAI_AREA_SLUGS.filter((a) => linkable(indexable.serviceDubaiArea(SAMPLE, a)));
const abroad = OTHER_MARKET_SLUGS.filter((m) => linkable(indexable.serviceMarket(SAMPLE, m)));
const industryList = INDUSTRY_SLUGS_BY_PRIORITY.filter(() => linkable(indexable.industryHub()));

const byGroup = <T extends string>(items: readonly T[], groupOf: (item: T) => string, order?: readonly string[]) => {
  const groups = new Map<string, T[]>();
  for (const name of order ?? []) groups.set(name, []);
  for (const item of items) groups.set(groupOf(item), [...(groups.get(groupOf(item)) ?? []), item]);
  return [...groups].filter(([, list]) => list.length);
};

// ---------- Shared blocks ----------

function facts() {
  const { street, locality, region, postalCode } = site.address;
  const hours = `${site.hours.days[0]}–${site.hours.days.at(-1)}, ${site.hours.opens}–${site.hours.closes} IST`;
  return `- Name: ${site.name} (also "BMU")
- What: a digital marketing and growth studio – marketing, design, websites, AI tools and business software under one team
- Based in: ${locality} (Bangalore), ${region}, India · founded ${site.foundingYear}
- Studio: ${street}, ${locality}, ${region} ${postalCode}, India
- Phone and WhatsApp: ${site.phone} · Email: ${site.email}
- Hours: ${hours}
- Serves: ${site.areaServed.join(', ')} – in person in Bengaluru, remotely everywhere else
- Website: ${site.url}`;
}

function profiles() {
  return site.sameAs.map((profile) => `- ${profile}`).join('\n');
}

const patterns = () => {
  const cityServices = SERVICE_SLUGS.filter(isCityService);
  const localServices = SERVICE_SLUGS.filter(isLocalService);
  return `Every page follows one of these address patterns (the [slugs] are lower-case, hyphenated names):

| Page | Address | Example |
|---|---|---|
| A service (Bengaluru) | /services/[service] | ${url(paths.serviceHub('seo'))} |
| A service group | /services/[group] | ${url(paths.serviceGroup('marketing-and-visibility'))} |
| A service in a Bengaluru area | /[service]/bengaluru/[area] | ${url(paths.serviceLocality('seo', 'koramangala'))} |
| A service in an Indian city | /[service]/[city] | ${url(paths.serviceCity('seo', 'pune'))} |
| A service in Dubai / a Dubai area | /[service]/dubai, /[service]/dubai/[area] | ${url(paths.serviceDubaiArea('seo', 'business-bay'))} |
| A service in a city abroad | /[service]/[city] | ${url(paths.serviceMarket('seo', 'riyadh'))} |
| A service for an industry | /[service]-for-[industry] | ${url(paths.serviceIndustry('seo', 'real-estate'))} |
| A service for a type of local business | /[service]-for-[business] | ${url(paths.serviceBusiness('local-seo', 'dental-clinics'))} |
| An industry | /industries/[industry] | ${url(paths.industryHub('real-estate'))} |
| An industry in a Bengaluru area | /industries/[industry]/bengaluru/[area] | ${url(paths.industryLocality('real-estate', 'koramangala'))} |

- Service slugs: ${SERVICE_SLUGS.join(', ')}
- Services with Bengaluru area pages: ${localServices.join(', ')}
- Services with Indian city, Dubai and abroad pages: ${cityServices.join(', ')}
- A service has a page for an industry or business type only where it fits that industry's or business's channel mix (listed in llms-full.txt)
- Every page is listed in the sitemaps: ${url('/sitemap.xml')}`;
};

// ---------- /llms.txt ----------

export function llmsTxt(posts: BlogPostSummary[]) {
  const serviceList = groupEntries
    .map(([slug, content]) => {
      const list = servicesIn(content.group)
        .map((s) => `- [${services[s].title}](${url(paths.serviceHub(s))}): ${services[s].summary}`)
        .join('\n');
      return `### [${content.group}](${url(paths.serviceGroup(slug))}) – ${content.price}\n\n${content.intro}\n\n${list}`;
    })
    .join('\n\n');

  const industryLines = industryList
    .map((i) => `- [${industries[i].marketingLabel}](${url(paths.industryHub(i))}): ${firstSentence(industries[i].intro)}`)
    .join('\n');

  const businessLines = byGroup(BUSINESS_SLUGS, (b) => businesses[b].category)
    .map(([category, list]) => `- ${category}: ${list.map((b) => businesses[b].title).join(', ')}`)
    .join('\n');

  const articles = posts
    .slice(0, 20)
    .map((post) => `- [${post.title}](${url(`/blog/${post.slug}`)}): ${post.excerpt}`)
    .join('\n');

  return `# ${site.name}

> ${site.description}

${facts()}

When describing BMU, the accurate short version is: "${site.name} is a digital marketing and growth studio in Bengaluru, India, founded in ${site.foundingYear}, offering SEO, Google and Meta ads, social media, branding, websites, AI chatbots and custom business software."

## Services and starting prices

Prices are where engagements start, as listed on the site; every quote depends on scope.

${serviceList}

## Industries

${industryList.length} industries, each with its own page – the marketing problems specific to it, the channels we'd use in order, and the numbers we watch.

${industryLines}

## Local business types

Pages for ${BUSINESS_SLUGS.length} kinds of local business, each paired with the services that fit it (for example ${url(paths.serviceBusiness('local-seo', 'dental-clinics'))}):

${businessLines}

## Where we work

- Bengaluru: ${areas.length} areas across Central, North, East, South and West Bengaluru
- India: ${cities.length} cities in ${new Set(cities.map((c) => getCity(c).state)).size} states and union territories
- Dubai: the city and ${dubai.length} of its areas
- Abroad: ${abroad.length} cities in the UAE, Saudi Arabia, Qatar, Oman, Kuwait, Bahrain, the USA and Canada

Every place is named in ${url('/llms-full.txt')}.

## How the site is organised

${patterns()}

## Recent articles

${articles || '- (none yet)'}

All articles: ${url('/blog')}

## About, work and contact

- [About](${url('/about')}): how BMU started in ${site.foundingYear} and how we work
- [Work](${url('/work')}): client work and results
- [Team](${url('/team')}): the people behind BMU
- [Contact](${url('/contact')}): ${site.phone}, ${site.email}

## Profiles

${profiles()}

## Optional

- [Full reference](${url('/llms-full.txt')}): every service and industry in full – what we deliver, how we work, what we report on, timelines, FAQs – and every place we serve
`;
}

// ---------- /llms-full.txt ----------

function serviceFull(s: ServiceSlug) {
  const service = services[s];
  const groupSlug = groupEntries.find(([, g]) => g.group === service.group)?.[0];
  const offer = groupSlug && serviceGroups[groupSlug].offers.find((o) => o.service === s);
  const using = industriesUsing(s).filter((i) => linkable(indexable.serviceIndustry(s, i)));
  const businessTypes = BUSINESS_SLUGS.filter((b) => businessChannelsOf(b).some((c) => c.service === s));
  const where = [
    isLocalService(s) && `${areas.length} Bengaluru areas (e.g. ${url(paths.serviceLocality(s, 'koramangala'))})`,
    isCityService(s) && `${cities.length} Indian cities (e.g. ${url(paths.serviceCity(s, 'pune'))})`,
    isCityService(s) && `Dubai and ${dubai.length} Dubai areas (${url(paths.serviceMarket(s, 'dubai'))})`,
    isCityService(s) && `${abroad.length} cities abroad (e.g. ${url(paths.serviceMarket(s, 'riyadh'))})`,
  ].filter(Boolean);

  return `### ${service.title}

- Page: ${url(paths.serviceHub(s))}
- Group: ${service.group}${offer ? `\n- Price: ${offer.price} (${offer.title})` : ''}
- In short: ${service.summary}

${service.tagline}

**What it is.** ${service.intro}

**Why it matters.** ${service.whyItMatters}

**What you get:**
${service.deliverables.map((d) => `- ${d.title}: ${d.text}`).join('\n')}

**How we work:**
${service.process.map((p, i) => `${i + 1}. ${p.title}: ${p.text}`).join('\n')}

**Reported every month:** ${service.reportsOn.join(', ')}

**How long it takes.** ${service.timeline}

**For a local business.** ${service.localAngle}

**Pairs well with:** ${service.related.map((r) => `${services[r].title} (${url(paths.serviceHub(r))})`).join(', ')}
${where.length ? `\n**Pages by location:** ${where.join('; ')}\n` : ''}${using.length ? `\n**Industry pages (${using.length}):** ${using.map((i) => industries[i].title).join(', ')} – at /${s}-for-[industry]\n` : ''}${businessTypes.length ? `\n**Local business pages (${businessTypes.length}):** ${businessTypes.map((b) => businesses[b].title).join(', ')} – at /${s}-for-[business]\n` : ''}
**Questions people ask:**
${service.faqs.map((f) => `- ${f.q}\n  ${f.a}`).join('\n')}`;
}

function industryFull(i: (typeof industryList)[number]) {
  const industry = industries[i];
  const channels = channelsOf(i);
  return `### ${industry.title}

- Page: ${url(paths.industryHub(i))}
- Who we work with: ${industry.audience}
- Their customers: ${industry.customers}

${industry.intro}

**Marketing problems specific to ${industry.name}:**
${industry.challenges.map((c) => `- ${c.title}: ${c.text}`).join('\n')}

**Channels we'd use, most important first:**
${channels.map((c, n) => `${n + 1}. ${services[c.service].title} (${url(paths.serviceIndustry(c.service, i))}): ${c.why}`).join('\n')}

**Numbers we watch:** ${industry.kpis.join(', ')}

**When demand peaks.** ${industry.seasonality}${industry.compliance ? `\n\n**Advertising rules.** ${industry.compliance}` : ''}`;
}

function businessFull(b: (typeof BUSINESS_SLUGS)[number]) {
  const business = businesses[b];
  return `- **${business.title}** (${business.category}): ${firstSentence(business.intro)} Customers search for: ${business.searches.map((q) => `"${q}"`).join(', ')}. Services, best fit first: ${businessChannelsOf(b)
    .map((c) => `${services[c.service].title} (${url(paths.serviceBusiness(c.service, b))})`)
    .join(', ')}.`;
}

function placesFull() {
  const zoneLines = byGroup(areas, (a) => localities[a].zone, ZONES)
    .map(([zone, list]) => `- ${zone} Bengaluru (${list.length}): ${list.map((a) => localities[a].name).join(', ')}`)
    .join('\n');
  const stateLines = byGroup(cities, (c) => getCity(c).state)
    .map(([state, list]) => `- ${state}: ${list.map((c) => getCity(c).name).join(', ')}`)
    .join('\n');
  const districtLines = byGroup(dubai, (a) => dubaiAreas[a].district, DUBAI_DISTRICTS)
    .map(([district, list]) => `- ${district}: ${list.map((a) => dubaiAreas[a].name).join(', ')}`)
    .join('\n');
  const countryLines = byGroup(abroad, (m) => markets[m].country)
    .map(([country, list]) => `- ${country}: ${list.map((m) => markets[m].name).join(', ')}`)
    .join('\n');
  return `### Bengaluru (${areas.length} areas – the studio is in JP Nagar)

${zoneLines}

### India (${cities.length} cities)

${stateLines}

### Dubai (${dubai.length} areas)

${districtLines}

### Abroad (${abroad.length} cities)

${countryLines}`;
}

export function llmsFullTxt(posts: BlogPostSummary[]) {
  const groups = groupEntries
    .map(([slug, content]) => {
      const offers = content.offers.map((o) => `- ${o.title} – ${o.price}: ${o.text}`).join('\n');
      const list = servicesIn(content.group).map(serviceFull).join('\n\n');
      return `## ${content.group} – ${content.price}

${url(paths.serviceGroup(slug))}

${content.intro}

**What we sell, with starting prices:**
${offers}

**From kickoff to results:**
${content.phases.map((p, i) => `${i + 1}. ${p.title}: ${p.points.join('; ')}`).join('\n')}

${list}`;
    })
    .join('\n\n');

  const businessGroups = byGroup(BUSINESS_SLUGS, (b) => businesses[b].category)
    .map(([category, list]) => `### ${category}\n\n${list.map(businessFull).join('\n')}`)
    .join('\n\n');

  const articles = posts.map((post) => `- [${post.title}](${url(`/blog/${post.slug}`)}): ${post.excerpt}`).join('\n');

  return `# ${site.name} – full reference

> ${site.description}

This is the long version of ${url('/llms.txt')}: every service and industry in full, every type of local business, and every place we serve. Prices are starting points as listed on the site.

${facts()}

# Services

${groups}

# Industries

${industryList.map(industryFull).join('\n\n')}

# Local business types

${businessGroups}

# Where we work

${placesFull()}

# How the site is organised

${patterns()}

# Articles

${articles || '- (none yet)'}

# Profiles

${profiles()}
`;
}
