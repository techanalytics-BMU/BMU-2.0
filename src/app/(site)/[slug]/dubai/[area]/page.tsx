import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { DUBAI_AREA_SLUGS, isDubaiArea, isService, localServices } from '@/lib/pseo/catalog';
import { pageMetadata } from '@/lib/pseo/metadata';
import { serviceDubaiArea } from '@/lib/pseo/pages';
import PseoTemplate from '@/sections/pseo/PseoTemplate/PseoTemplate';

// /[service]/dubai/[area] – e.g. /seo/dubai/business-bay (Service × Dubai area – the 10 local
// services in every Dubai area in src/data/pseo/abroad.ts)
type Props = { params: Promise<{ slug: string; area: string }> };

export const dynamicParams = false;
export const generateStaticParams = () =>
  localServices.flatMap((slug) => DUBAI_AREA_SLUGS.map((area) => ({ slug, area })));

const load = async ({ params }: Props) => {
  const { slug, area } = await params;
  return isService(slug) && isDubaiArea(area) ? serviceDubaiArea(slug, area) : null;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const page = await load(props);
  return page ? pageMetadata(page) : {};
}

export default async function ServiceDubaiAreaPage(props: Props) {
  const page = await load(props);
  if (!page) notFound();
  return <PseoTemplate page={page} />;
}
