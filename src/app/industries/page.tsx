import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/pseo/metadata';
import { industriesIndex } from '@/lib/pseo/pages';
import PseoTemplate from '@/sections/pseo/PseoTemplate/PseoTemplate';

// /industries – every industry hub
export const metadata: Metadata = pageMetadata(industriesIndex());

export default function IndustriesPage() {
  return <PseoTemplate page={industriesIndex()} />;
}
