import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SERVICE_SLUGS } from '@/data/pseo/slugs';
import { isService } from '@/lib/pseo/catalog';
import { pageMetadata } from '@/lib/pseo/metadata';
import { serviceHub } from '@/lib/pseo/pages';
import PseoTemplate from '@/sections/pseo/PseoTemplate/PseoTemplate';

// /services/[service] – the main page for one service (category 1: service hubs)
type Props = { params: Promise<{ service: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => SERVICE_SLUGS.map((service) => ({ service }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service } = await params;
  return isService(service) ? pageMetadata(serviceHub(service)) : {};
}

export default async function ServiceHubPage({ params }: Props) {
  const { service } = await params;
  if (!isService(service)) notFound();
  return <PseoTemplate page={serviceHub(service)} />;
}
