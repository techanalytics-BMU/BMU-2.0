import type { Metadata } from 'next';
import { TeamFounders, TeamHero, TeamMembers } from '@/sections/team';

export const metadata: Metadata = {
  title: 'Our Team',
  description:
    'Meet the founders and the team behind BMU Marketing – strategists, designers, editors and engineers in Bengaluru.',
};

// Team page – add new sections below in display order
export default function TeamPage() {
  return (
    <main>
      <TeamHero />
      <TeamFounders />
      <TeamMembers />
    </main>
  );
}
