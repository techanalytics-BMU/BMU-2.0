import { CAMPAIGN_FIELDS } from './fields';

// Browser-side helpers for the lead forms (contact page and popup).
// Browser storage can be blocked (private windows, settings) – everything still works without it.

const CAMPAIGN_KEY = 'bmu-campaign'; // sessionStorage: where this visit came from
const LEAD_SENT_KEY = 'bmu-lead-popup-sent'; // sessionStorage: they sent us their details this visit

/**
 * On the first page of a visit: remember the ?utm_… tags, the website that sent them and the page
 * they landed on, so a form sent later in the visit (on another page) still knows.
 */
export function rememberCampaign() {
  try {
    if (sessionStorage.getItem(CAMPAIGN_KEY)) return;
    const params = new URLSearchParams(window.location.search);
    const campaign: Record<string, string> = { landing_page: window.location.pathname };
    for (const field of CAMPAIGN_FIELDS) {
      const value = field.startsWith('utm_') ? params.get(field) : null;
      if (value) campaign[field] = value;
    }
    if (document.referrer && new URL(document.referrer).origin !== window.location.origin) {
      campaign.referrer = document.referrer;
    }
    sessionStorage.setItem(CAMPAIGN_KEY, JSON.stringify(campaign));
  } catch {
    // not remembered – fine
  }
}

/** Adds the current page and the visit's campaign details to a form before it's sent */
export function addVisitDetails(data: FormData) {
  data.set('page_path', window.location.pathname);
  try {
    const campaign = JSON.parse(sessionStorage.getItem(CAMPAIGN_KEY) ?? '{}');
    for (const field of CAMPAIGN_FIELDS) {
      if (typeof campaign[field] === 'string') data.set(field, campaign[field]);
    }
  } catch {
    // no campaign details – fine
  }
}

/**
 * They've sent their details (either form) – the lead popup stays away for the rest of this visit
 * and comes back on their next one (a repeat send is tagged REPEAT in the dashboard)
 */
export function markLeadSent() {
  try {
    sessionStorage.setItem(LEAD_SENT_KEY, '1');
  } catch {
    // not remembered – fine
  }
}

/** Whether they've sent their details during this visit */
export function leadSentThisVisit() {
  try {
    // Earlier versions remembered a send forever – that marker is cleared, so the popup returns
    localStorage.removeItem(LEAD_SENT_KEY);
    return sessionStorage.getItem(LEAD_SENT_KEY) === '1';
  } catch {
    return false;
  }
}
