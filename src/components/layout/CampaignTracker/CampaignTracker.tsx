'use client';

import { useEffect } from 'react';
import { rememberCampaign } from '@/lib/leads/browser';

// Remembers where this visit came from (ad tags, referring website, landing page) so the lead
// forms can send it along. Shows nothing. Added in src/app/(site)/layout.tsx.
export default function CampaignTracker() {
  useEffect(() => {
    rememberCampaign();
  }, []);

  return null;
}
