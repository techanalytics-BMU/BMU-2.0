import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/pseo/metadata';
import { servicesIndex } from '@/lib/pseo/pages';
import PseoTemplate from '@/sections/pseo/PseoTemplate/PseoTemplate';

// /services – every service, grouped as in the navbar's Services menu
export const metadata: Metadata = pageMetadata(servicesIndex());

export default function ServicesPage() {
  return <PseoTemplate page={servicesIndex()} />;
}
