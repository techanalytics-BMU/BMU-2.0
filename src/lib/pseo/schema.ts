import { site } from '@/data/site';
import type { Faq, PageLink } from '@/types/pseo';

// JSON-LD (structured data) for the programmatic pages. One business description everywhere –
// the same name, phone and address as the rest of the site.

const absolute = (path: string) => `${site.url}${path}`;

export const businessSchema = () => ({
  '@type': 'ProfessionalService',
  '@id': `${site.url}/#business`,
  name: site.name,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    ...(site.address.postalCode ? { postalCode: site.address.postalCode } : {}),
    addressCountry: site.address.country,
  },
  geo: { '@type': 'GeoCoordinates', latitude: site.coords[0], longitude: site.coords[1] },
  ...(site.sameAs.length ? { sameAs: site.sameAs } : {}),
});

export const serviceSchema = ({
  name,
  description,
  path,
  serviceType,
  areaServed,
  audience,
}: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
  areaServed: string;
  audience?: string;
}) => ({
  '@type': 'Service',
  name,
  description,
  url: absolute(path),
  serviceType,
  provider: { '@id': `${site.url}/#business` },
  areaServed: { '@type': 'Place', name: areaServed },
  ...(audience ? { audience: { '@type': 'BusinessAudience', audienceType: audience } } : {}),
});

export const faqSchema = (faqs: Faq[]) => ({
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
});

export const breadcrumbSchema = (crumbs: PageLink[]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((crumb, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: crumb.label,
    item: absolute(crumb.href),
  })),
});
