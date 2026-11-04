export type WorkClientLogo = {
  name: string; // also the alt text
  logo?: string; // .svg / .webp in public/images/work/clients/ – a placeholder wordmark is shown until set
};

export type WorkHeroContent = {
  badge: string;
  heading: string;
  clientsLabel: string; // small line above the logo strip
  clients: WorkClientLogo[];
};

export type WorkCategoryId = 'graphic-design' | 'websites' | 'ui-ux' | 'ugc' | 'insta-videos';

export type WorkCategory = {
  id: WorkCategoryId;
  label: string;
  ratio: number; // width ÷ height of its pieces
};

export type WorkMedia = {
  image: string; // the picture – for a video, the frame shown before it plays
  video?: string; // .mp4 file or link
  alt: string; // what it shows, for people who can't see it
};

export type WorkReview = {
  quote: string; // the client's real words
  name: string;
  role: string; // "Founder, Company"
  photo?: string;
};

export type WorkProject = {
  id: string;
  category: WorkCategoryId;
  client: string;
  title: string;
  ratio?: number; // only when this piece isn't the shape of its category
  media: WorkMedia[]; // each one gets its own thumbnail
  review?: WorkReview;
  services: string[];
  link?: string; // the live site or post
  sample?: boolean; // placeholder – shown while developing, never on the live site
};

export type WorkShowcaseContent = {
  heading: string;
  subheading: string;
  stage: {
    servicesLabel: string;
    cta: { label: string; href: string };
    visitLabel: string;
    previousLabel: string;
    nextLabel: string;
    soundLabel: string;
  };
};

// The blog itself (posts, listing and article text) is in ./blog.ts
