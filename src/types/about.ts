import type { NavLink } from './navigation';

// Every About section opens like the rest of the site: a pill badge, a centred heading
// (optionally with a second line in lime) and a short line under it.
export type AboutHeaderContent = {
  badge: string;
  heading: string;
  accent?: string; // second line of the heading, in lime
  description?: string;
};

export type AboutHeroContent = {
  wordStart: string; // 'AB' – left of the planet (which stands in for the O)
  wordEnd: string; // 'UT'
  statement: string; // shown inside the opened window
  accent: string; // end of the statement, in lime
  stats: { value: string; label: string }[]; // along the bottom of the window (4 fit best)
};

export type AboutStoryContent = AboutHeaderContent & {
  chapters: {
    title: string;
    text: string;
    figure: string; // big number on the card – '2018', '5', '1'
    caption: string; // what the number means
  }[];
};

export type AboutModelContent = AboutHeaderContent & {
  offLabel: string; // first tab – the scattered vendors
  onLabel: string; // second tab – one BMU team
  noOwner: string; // in the empty middle while the vendors are scattered
  vendors: {
    role: string; // while scattered – 'Ads agency'
    status: string; // its excuse – 'Blames the website'
    service: string; // once in BMU's orbit – 'Performance ads'
  }[]; // 5 – they sit in a pentagon around the BMU core
  team: {
    name: string; // alt text of the logo in the core
    tag: string; // small line under each service once in orbit
  };
};

export type AboutJourneyContent = AboutHeaderContent & {
  liveLabel: string; // tag next to the current milestone
  milestones: {
    marker: string; // big text – a year or a short phrase
    title: string;
    text: string;
    current?: boolean; // where BMU is now – ringed node and the live tag
  }[];
};

export type AboutPrinciple = {
  title: string;
  text: string;
  icon: 'team' | 'pricing' | 'report' | 'own'; // also picks the little animated scene
  scene: {
    caption: string; // small heading inside the scene
    rows: { label: string; value: string }[];
    badge: string; // pops in at the end of the scene
  };
};

export type AboutPrinciplesContent = AboutHeaderContent & {
  items: AboutPrinciple[];
};

export type AboutBenefit = {
  title: string;
  text: string;
  visual: 'cost' | 'reach' | 'connect' | 'growth'; // the looping line drawing on the card
};

export type AboutBenefitsContent = AboutHeaderContent & {
  items: AboutBenefit[]; // 4 – one row of compact cards
};

export type AboutFounderContent = {
  badge: string;
  quote: string; // lights up word by word as you scroll
  name: string;
  place: string;
};

export type AboutCtaContent = {
  heading: string;
  text: string;
  cta: NavLink;
};
