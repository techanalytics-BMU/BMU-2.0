export type WorkClientLogo = {
  name: string; // also the alt text
  logo?: string; // .svg / .webp in public/images/work/clients/ – a placeholder wordmark is shown until set
};

export type WorkHeroContent = {
  heading: string;
  subheading: string;
  cta: { label: string; href: string };
  clientsLabel: string; // small line beside the logo strip
  clients: WorkClientLogo[];
};

export type WorkCategoryId = 'graphic-design' | 'websites' | 'ui-ux' | 'videos';

export type WorkCategory = {
  id: WorkCategoryId;
  label: string;
  ratio: number; // width ÷ height of its pieces
};

// One page of a website, as a full-length screenshot (top to bottom)
export type WorkTourPage = {
  path: string; // shown in the address bar, e.g. '/community'
  image: string;
  width: number; // the screenshot's size in pixels
  height: number;
};

// A website playing by itself: each page scrolls down, then it moves on to the next one
export type WorkTour = {
  device: 'browser' | 'phone';
  site: string; // the address, without https:// – e.g. 'chiranvifarm.com'
  pages: WorkTourPage[];
};

export type WorkMedia = {
  image: string; // the picture – for a video or a tour, the frame shown before it plays
  video?: string; // .mp4 file or link
  youtube?: string; // a YouTube video's id (the part after /shorts/ or ?v=) – plays in YouTube's player
  tour?: WorkTour;
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
  media: WorkMedia[]; // each one gets its own thumbnail – left empty, the project waits off the page
  review?: WorkReview;
  services: string[];
  link?: string; // the live site or post
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
