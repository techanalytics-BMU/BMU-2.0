export type TeamHeroContent = {
  wordStart: string; // big word, before the pill window ("TE")
  wordEnd: string; // after the pill window ("AM")
  image?: string; // .webp team photo inside the pill – an atmospheric placeholder is shown until set
  captionHeading: string; // fades in once the pill has filled the screen
  captionText: string;
};

export type TeamFounder = {
  name: string;
  role: string;
  photo?: string; // .webp, square – a silhouette is shown until set
};

export type TeamFoundersContent = {
  heading: string;
  subheading: string; // small spaced capitals under the heading
  founders: TeamFounder[]; // the co-founders, shown as a pair, left to right in this order
};

export type TeamMember = {
  name: string;
  role: string;
  photo?: string; // .webp portrait, any colour – shown black and white, tinted by the pill
  tone: 'lime' | 'mist' | 'sand' | 'sage'; // pill colour
  funFact?: string; // sticker that pops on when the pill is hovered or tapped
};

export type TeamMembersContent = {
  badge: string;
  heading: string;
  description: string;
  members: TeamMember[];
  // Last pill: an empty one with a little face whose eyes follow the cursor
  hiring: {
    title: string;
    text: string;
    href: string;
  };
};
