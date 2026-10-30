import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isService, localServices } from '@/lib/pseo/catalog';
import { pageMetadata } from '@/lib/pseo/metadata';
import { serviceMarket } from '@/lib/pseo/pages';
import PseoTemplate from '@/sections/pseo/PseoTemplate/PseoTemplate';

// /[service]/dubai – e.g. /seo/dubai (Service × Dubai, the hub for /[service]/dubai/[area])
type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => localServices.map((slug) => ({ slug }));

const load = async ({ params }: Props) => {
  const { slug } = await params;
  return isService(slug) ? serviceMarket(slug, 'dubai') : null;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const page = await load(props);
  return page ? pageMetadata(page) : {};
}

export default async function ServiceDubaiPage(props: Props) {
  const page = await load(props);
  if (!page) notFound();
  return <PseoTemplate page={page} />;
}
