import type {
  WorkCategory,
  WorkCategoryId,
  WorkProject,
  WorkShowcaseContent,
  WorkTourPage,
} from '@/types/work';

export const workShowcase: WorkShowcaseContent = {
  heading: 'See the work. Hear it from the client.',
  subheading: 'Open a type of work and pick a piece. What the client said sits right beside it.',
  stage: {
    servicesLabel: 'What we did',
    cta: { label: 'Know more', href: '/contact' },
    visitLabel: 'See it live',
    previousLabel: 'Previous',
    nextLabel: 'Next',
    soundLabel: 'Turn sound on',
    player: {
      play: 'Play',
      pause: 'Pause',
      mute: 'Mute',
      unmute: 'Unmute',
      fullscreen: 'Full screen',
      exitFullscreen: 'Exit full screen',
      more: 'More options',
      speed: 'Playback speed',
      normalSpeed: 'Normal',
      watchOnYouTube: 'Watch on YouTube',
      replay: 'Replay',
      progress: 'Video progress',
    },
  },
};

// In the order of the panels; the first one starts open
export const workCategories: Record<WorkCategoryId, WorkCategory> = {
  'graphic-design': { id: 'graphic-design', label: 'Graphic Design', ratio: 4 / 5 },
  websites: { id: 'websites', label: 'Websites', ratio: 16 / 10 },
  'ui-ux': { id: 'ui-ux', label: 'UI/UX', ratio: 4 / 3 },
  videos: { id: 'videos', label: 'UGC & Insta Videos', ratio: 9 / 16 },
};

const COVERS = '/images/work/videos'; // each video's first frame (.webp)
const VIDEOS = '/videos/work'; // the videos themselves (.mp4, H.264, 720 × 1280)
const CHIRANVI = '/images/work/chiranvi-farm'; // full-length screenshots of chiranvifarm.com

// A video: the same video's YouTube id (for the player's "Watch on YouTube"), and its file name –
// the same for the .mp4 and its cover
const short = (youtube: string, name: string, alt: string) => ({
  image: `${COVERS}/${name}.webp`,
  video: `${VIDEOS}/${name}.mp4`,
  youtube,
  alt,
});

// The Chiranvi Farm pages the tours walk through, in order (screenshot sizes in pixels)
const chiranviPages = (device: 'desktop' | 'mobile', sizes: [number, number][]): WorkTourPage[] =>
  ['/', '/community', '/reviews', '/contact-us'].map((path, i) => ({
    path,
    image: `${CHIRANVI}/${device}-${path === '/' ? 'home' : path.slice(1)}.webp`,
    width: sizes[i][0],
    height: sizes[i][1],
  }));

const EARTHELLA = '/images/work/earthella-nuts'; // packaging posters

// The work, in the order it appears in each panel. A project with no media yet (videos still to
// come) stays off the page until its links are added.
export const workProjects: WorkProject[] = [
  // ---------- UGC & Insta Videos ----------
  {
    id: 'decor-hut-reels',
    category: 'videos',
    client: 'The Decor Hut',
    title: 'Showroom reels',
    media: [
      short('zok4cC0mtlg', 'decor-hut-1', 'Decor Hut x BMU Marketing: inside the showroom'),
      short('Fl79VYsyvWU', 'decor-hut-2', 'The finishing touch every home needs, at The Decor Hut'),
    ],
    review: {
      quote:
        'Every shot was well planned and the edits are crisp. Our showroom finally looks as good on screen as in person.',
      name: 'Nanvitha VK',
      role: 'Founder, The Decor Hut',
    },
    services: ['Shoot', 'Edit'],
  },
  {
    id: 'house-of-dirish-reels',
    category: 'videos',
    client: 'House of Dirish',
    title: 'Rug story reels',
    media: [
      short('l-ALB3dkSZQ', 'house-of-dirish-1', 'The art behind every rug, at House of Dirish'),
      short('Jft0ZA8VADg', 'house-of-dirish-2', 'The right rug changes everything, by House of Dirish'),
    ],
    review: {
      quote:
        'Rugs are hard to film, but BMU captured every colour and weave. Each edit tells the story behind a rug in under a minute.',
      name: 'Dirish',
      role: 'Founder, House of Dirish',
    },
    services: ['Shoot', 'Edit'],
  },
  {
    id: 'avinnyya-reels',
    category: 'videos',
    client: 'Avinnyya Interior Design',
    title: 'Founder-led reels',
    media: [
      short('FH0DVLtE0_o', 'avinnyya-1', 'Turning spaces into stories, with Avinnyya'),
      short('GyCYQ4KV88s', 'avinnyya-2', 'Avinnyya explaining her interior design work on camera'),
    ],
    review: {
      quote:
        'The team made being on camera easy, and the videos explain our design work better than I could in words.',
      name: 'Avinnyya',
      role: 'Founder, Avinnyya Interior Design',
    },
    services: ['Shoot', 'Edit'],
  },
  // Videos to come – they appear once their videos are added to `media`
  {
    id: 'sb-wears-reels',
    category: 'videos',
    client: 'SB Wears',
    title: 'Fashion reels',
    media: [],
    review: {
      quote:
        'BMU styled and shot every outfit with care. The videos are bright and lively, and show off the fabric and fit beautifully.',
      name: 'Harshitha CM',
      role: 'Founder, SB Wears',
    },
    services: ['Shoot', 'Edit'],
  },
  {
    id: 'buttons-reels',
    category: 'videos',
    client: 'Buttons',
    title: 'Brand reels',
    media: [],
    review: {
      quote:
        'BMU understood our brand from the first call. The shoot was smooth, and the edits are sharp, stylish and made for Instagram.',
      name: 'Hariprasad Gowda',
      role: 'Founder, Buttons',
    },
    services: ['Shoot', 'Edit'],
  },
  {
    id: 'cafe-social-crust-reels',
    category: 'videos',
    client: 'Cafe Social Crust',
    title: 'Cafe reels',
    media: [],
    review: {
      quote:
        'They captured our food, our people and the feel of the cafe perfectly. Every shot looks delicious, and the edit has a lovely rhythm.',
      name: 'Sowmya E N',
      role: 'Founder, Cafe Social Crust',
    },
    services: ['Shoot', 'Edit'],
  },

  // ---------- Websites ----------
  {
    id: 'chiranvi-farm-website',
    category: 'websites',
    client: 'Chiranvi Farm',
    title: 'Farm-to-home dairy store',
    media: [
      {
        image: `${CHIRANVI}/desktop-cover.webp`,
        tour: {
          device: 'browser',
          site: 'chiranvifarm.com',
          pages: chiranviPages('desktop', [
            [1440, 5017],
            [1440, 1936],
            [1440, 2404],
            [1440, 3099],
          ]),
        },
        alt: 'The Chiranvi Farm website scrolling through its home, community, reviews and contact pages',
      },
    ],
    review: {
      quote:
        'BMU built a website as fresh as our milk: fast, easy to shop on and great on every screen, with every detail thought through.',
      name: 'Praveen',
      role: 'Founder, Chiranvi Farm',
    },
    services: ['Design', 'Development'],
    link: 'https://www.chiranvifarm.com/',
  },

  // ---------- UI/UX ----------
  {
    id: 'chiranvi-farm-mobile',
    category: 'ui-ux',
    client: 'Chiranvi Farm',
    title: 'Mobile shopping experience',
    media: [
      {
        image: `${CHIRANVI}/mobile-cover.webp`,
        tour: {
          device: 'phone',
          site: 'chiranvifarm.com',
          pages: chiranviPages('mobile', [
            [600, 9655],
            [600, 2743],
            [600, 5994],
            [600, 4365],
          ]),
        },
        alt: 'The Chiranvi Farm website on a phone, scrolling through its home, community, reviews and contact pages',
      },
    ],
    review: {
      quote:
        'On a phone, choosing products or starting a subscription is just a tap or two away. Clean, easy and as good as our desktop site.',
      name: 'Praveen',
      role: 'Founder, Chiranvi Farm',
    },
    services: ['UI/UX', 'Mobile design'],
    link: 'https://www.chiranvifarm.com/',
  },

  // ---------- Graphic Design ----------
  // Packaging posters for three products (public/images/work/earthella-nuts, 1200 × 1513)
  {
    id: 'earthella-nuts-packaging',
    category: 'graphic-design',
    client: 'Earthella Nuts',
    title: 'Packaging design',
    ratio: 1200 / 1513,
    media: [
      {
        image: `${EARTHELLA}/almonds.webp`,
        alt: 'Earthella Nuts Mamra Almonds pouch in green, with a bowl of almonds on a white wave label',
      },
      {
        image: `${EARTHELLA}/cashews.webp`,
        alt: 'Earthella Nuts W240 Cashews pouch in coral, with a bowl of cashews on a white wave label',
      },
      {
        image: `${EARTHELLA}/raisins.webp`,
        alt: 'Earthella Nuts Brown Raisins pouch in brown and orange, with a bowl of raisins on a white wave label',
      },
    ],
    review: {
      quote:
        'Bold colours and a clear logo: our packaging now stands out on any shelf and feels natural and premium.',
      name: 'Vivek M',
      role: 'Founder, Earthella Nuts',
    },
    services: ['Concept', 'Packaging design'],
  },
];
