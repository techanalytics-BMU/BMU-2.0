import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { catalog, parseServiceFor } from '@/lib/pseo/catalog';
import { pageMetadata } from '@/lib/pseo/metadata';
import { serviceBusiness, serviceIndustry } from '@/lib/pseo/pages';
import PseoTemplate from '@/sections/pseo/PseoTemplate/PseoTemplate';

// /[service]-for-[industry] – e.g. /seo-for-real-estate (Service × Industry)
// /[service]-for-[business] – e.g. /local-seo-for-dental-clinics (Service × Business type)
// Only the services an industry or business type lists in its channel mix get a page; every
// other root URL is a 404.
type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () =>
  catalog()
    .filter((entry) => entry.group === 'service-industry' || entry.group === 'service-business')
    .map((entry) => ({ slug: entry.path.slice(1) }));

const load = async ({ params }: Props) => {
  const match = parseServiceFor((await params).slug);
  if (!match) return null;
  return match.kind === 'industry'
    ? serviceIndustry(match.service, match.industry)
    : serviceBusiness(match.service, match.business);
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const page = await load(props);
  return page ? pageMetadata(page) : {};
}

export default async function ServiceForPage(props: Props) {
  const page = await load(props);
  if (!page) notFound();
  return <PseoTemplate page={page} />;
}
