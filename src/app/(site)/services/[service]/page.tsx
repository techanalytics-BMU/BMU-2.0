import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SERVICE_GROUP_SLUGS } from '@/data/pseo/groups';
import { SERVICE_SLUGS } from '@/data/pseo/slugs';
import { isService, isServiceGroup } from '@/lib/pseo/catalog';
import { pageMetadata } from '@/lib/pseo/metadata';
import { serviceGroupPage, serviceHub } from '@/lib/pseo/pages';
import PseoTemplate from '@/sections/pseo/PseoTemplate/PseoTemplate';

// /services/[service] – the main page for one service (category 1: service hubs), and the
// overview page for each of the six service groups in the navbar's Services menu
// (/services/marketing-and-visibility …)
type Props = { params: Promise<{ service: string }> };

export const dynamicParams = false;
export const generateStaticParams = () =>
  [...SERVICE_GROUP_SLUGS, ...SERVICE_SLUGS].map((service) => ({ service }));

const pageFor = (slug: string) =>
  isServiceGroup(slug) ? serviceGroupPage(slug) : isService(slug) ? serviceHub(slug) : null;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = pageFor((await params).service);
  return page ? pageMetadata(page) : {};
}

export default async function ServicePage({ params }: Props) {
  const page = pageFor((await params).service);
  if (!page) notFound();
  return <PseoTemplate page={page} />;
}
