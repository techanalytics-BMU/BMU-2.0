import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { LOCALITY_PAGE_SLUGS, isLocality, isService, localServices } from '@/lib/pseo/catalog';
import { pageMetadata } from '@/lib/pseo/metadata';
import { serviceLocality } from '@/lib/pseo/pages';
import PseoTemplate from '@/sections/pseo/PseoTemplate/PseoTemplate';

// /[service]/bengaluru/[area] – e.g. /seo/bengaluru/koramangala
// (Service × Bengaluru locality – the 10 local services in every locality on the sheet)
type Props = { params: Promise<{ slug: string; area: string }> };

export const dynamicParams = false;
export const generateStaticParams = () =>
  localServices.flatMap((slug) => LOCALITY_PAGE_SLUGS.map((area) => ({ slug, area })));

const load = async ({ params }: Props) => {
  const { slug, area } = await params;
  return isService(slug) && isLocality(area) ? serviceLocality(slug, area) : null;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const page = await load(props);
  return page ? pageMetadata(page) : {};
}

export default async function ServiceLocalityPage(props: Props) {
  const page = await load(props);
  if (!page) notFound();
  return <PseoTemplate page={page} />;
}
