import type {
  WorkCategory,
  WorkCategoryId,
  WorkProject,
  WorkReview,
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
  },
};

// In the order of the panels; the first one starts open
export const workCategories: Record<WorkCategoryId, WorkCategory> = {
  'graphic-design': { id: 'graphic-design', label: 'Graphic Design', ratio: 4 / 5 },
  websites: { id: 'websites', label: 'Websites', ratio: 16 / 10 },
  'ui-ux': { id: 'ui-ux', label: 'UI/UX', ratio: 4 / 3 },
  videos: { id: 'videos', label: 'UGC & Insta Videos', ratio: 9 / 16 },
};

const VIDEOS = '/images/work/videos'; // each video's cover, the frame YouTube shows for it
const CHIRANVI = '/images/work/chiranvi-farm'; // full-length screenshots of chiranvifarm.com

// A YouTube Short: its id and its cover in public/images/work/videos
const short = (youtube: string, cover: string, alt: string) => ({
  image: `${VIDEOS}/${cover}.webp`,
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

// ---------- Samples – Graphic Design only, until the real work is added ----------
const SAMPLES = '/images/work/samples';

const sampleReview: WorkReview = {
  quote:
    'The client’s review goes here: what they needed, what you made, and what changed once it went live.',
  name: 'Client name',
  role: 'Role, Company',
};

const samplePoster = (id: string, image: string, title: string) => ({
  id,
  category: 'graphic-design' as const,
  client: 'Client name',
  title,
  media: [{ image: `${SAMPLES}/${image}.svg`, alt: `Sample artwork standing in for a ${title.toLowerCase()}` }],
  review: sampleReview,
  services: ['Concept', 'Design'],
});

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
        'The BMU team planned every shot before the shoot day and kept it relaxed throughout. The edits came out crisp and beautifully paced, and our showroom finally looks on screen the way it feels when you walk in.',
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
        'Rugs are hard to film – the colour, the texture, the weave. BMU captured all of it. They knew exactly which light and angles to use, and the edit tells the story behind each rug in under a minute.',
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
        'I’m not used to being on camera, but the team made it easy with clear direction and lots of patience. The final videos look polished and professional, and they explain our design work better than I could in words.',
      name: 'Avinnyya',
      role: 'Founder, Avinnyya Interior Design',
    },
    services: ['Shoot', 'Edit'],
  },
  // Videos to come – they appear once their YouTube links are added to `media`
  {
    id: 'sb-wears-reels',
    category: 'videos',
    client: 'SB Wears',
    title: 'Fashion reels',
    media: [],
    review: {
      quote:
        'From styling each outfit to the final cut, BMU handled the whole shoot with care. The videos are bright and lively, and they show off the fabric and fit beautifully – exactly the feel we wanted for SB Wears.',
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
        'The BMU team understood our brand from the very first call. The shoot was smooth and well organised, and the edits are sharp, stylish and made for Instagram. Great work from start to finish.',
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
        'They captured the food, the people and the feel of our cafe perfectly. Every shot looks delicious and the edit has a lovely rhythm. Working with BMU was easy and genuinely fun.',
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
        'BMU built us a website that feels as fresh as our milk. It’s fast, simple to shop on and looks great on every screen. They thought through every detail, from products to subscriptions, and kept us involved at every step.',
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
        'On a phone, everything a customer needs – choosing products, starting a subscription, reaching us – is just a tap or two away. The design is clean, easy to use and every bit as good as our desktop site.',
      name: 'Praveen',
      role: 'Founder, Chiranvi Farm',
    },
    services: ['UI/UX', 'Mobile design'],
    link: 'https://www.chiranvifarm.com/',
  },

  // ---------- Graphic Design (samples) ----------
  samplePoster('sample-poster-1', 'poster-1', 'Poster'),
  samplePoster('sample-poster-2', 'poster-2', 'Campaign artwork'),
  samplePoster('sample-poster-3', 'poster-3', 'Social artwork'),
];
