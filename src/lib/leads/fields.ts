// Names shared by the forms (browser) and src/lib/leads/actions.ts (server)

/** Hidden "trap" field – people never see it, bots fill it in */
export const HONEYPOT_FIELD = 'bmu_hp';

/** Where the visit came from – remembered on arrival (src/lib/leads/browser.ts), sent with the form */
export const CAMPAIGN_FIELDS = [
  'landing_page',
  'referrer',
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
] as const;
