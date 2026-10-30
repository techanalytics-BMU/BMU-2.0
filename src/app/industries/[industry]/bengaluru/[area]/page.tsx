import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { LOCAL_INDUSTRIES, LOCALITY_PAGE_SLUGS, isIndustry, isLocality } from '@/lib/pseo/catalog';
import { pageMetadata } from '@/lib/pseo/metadata';
import { industryLocality } from '@/lib/pseo/pages';
import PseoTemplate from '@/sections/pseo/PseoTemplate/PseoTemplate';

// /industries/[industry]/bengaluru/[area] – e.g. real estate marketing in Whitefield
// (Industry × Bengaluru locality – only the industries in LOCAL_INDUSTRIES)
type Props = { params: Promise<{ industry: string; area: string }> };

export const dynamicParams = false;
export const generateStaticParams = () =>
  LOCAL_INDUSTRIES.flatMap((industry) => LOCALITY_PAGE_SLUGS.map((area) => ({ industry, area })));

const load = async ({ params }: Props) => {
  const { industry, area } = await params;
  return isIndustry(industry) && isLocality(area) ? industryLocality(industry, area) : null;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const page = await load(props);
  return page ? pageMetadata(page) : {};
}

export default async function IndustryLocalityPage(props: Props) {
  const page = await load(props);
  if (!page) notFound();
  return <PseoTemplate page={page} />;
}
