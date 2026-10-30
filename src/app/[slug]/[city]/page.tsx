import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  CITY_PAGE_SLUGS,
  OTHER_MARKET_SLUGS,
  isCity,
  isMarket,
  isService,
  localServices,
} from '@/lib/pseo/catalog';
import { pageMetadata } from '@/lib/pseo/metadata';
import { serviceCity, serviceMarket } from '@/lib/pseo/pages';
import PseoTemplate from '@/sections/pseo/PseoTemplate/PseoTemplate';

// /[service]/[city] – e.g. /seo/pune (Service × Indian city) or /seo/riyadh (Service × city
// abroad). Built for the 10 local services in every place with a written profile; indexed as set
// in launch.ts. Dubai has its own route (/[service]/dubai), beside its areas.
type Props = { params: Promise<{ slug: string; city: string }> };

export const dynamicParams = false;
export const generateStaticParams = () =>
  localServices.flatMap((slug) =>
    [...CITY_PAGE_SLUGS, ...OTHER_MARKET_SLUGS].map((city) => ({ slug, city }))
  );

const load = async ({ params }: Props) => {
  const { slug, city } = await params;
  if (!isService(slug)) return null;
  if (isCity(city)) return serviceCity(slug, city);
  if (isMarket(city) && city !== 'dubai') return serviceMarket(slug, city);
  return null;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const page = await load(props);
  return page ? pageMetadata(page) : {};
}

export default async function ServiceCityPage(props: Props) {
  const page = await load(props);
  if (!page) notFound();
  return <PseoTemplate page={page} />;
}
