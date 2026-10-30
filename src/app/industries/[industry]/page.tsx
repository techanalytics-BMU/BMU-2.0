import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { INDUSTRY_SLUGS } from '@/data/pseo/slugs';
import { isIndustry } from '@/lib/pseo/catalog';
import { pageMetadata } from '@/lib/pseo/metadata';
import { industryHub } from '@/lib/pseo/pages';
import PseoTemplate from '@/sections/pseo/PseoTemplate/PseoTemplate';

// /industries/[industry] – the main page for one industry (category 2: industry hubs)
type Props = { params: Promise<{ industry: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => INDUSTRY_SLUGS.map((industry) => ({ industry }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { industry } = await params;
  return isIndustry(industry) ? pageMetadata(industryHub(industry)) : {};
}

export default async function IndustryHubPage({ params }: Props) {
  const { industry } = await params;
  if (!isIndustry(industry)) notFound();
  return <PseoTemplate page={industryHub(industry)} />;
}
