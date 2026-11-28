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
  filterLabel: 'Type of work',
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

// In the order of the filters and panels; the first one starts open
export const workCategories: Record<WorkCategoryId, WorkCategory> = {
  logos: { id: 'logos', label: 'Logos', ratio: 4 / 5, byClient: true },
  'graphic-design': { id: 'graphic-design', label: 'Graphic Design', ratio: 4 / 5, byClient: true },
  websites: { id: 'websites', label: 'Websites', ratio: 16 / 10, byClient: true },
  'ui-ux': { id: 'ui-ux', label: 'UI/UX', ratio: 4 / 3, byClient: true },
  videos: { id: 'videos', label: 'UGC & Insta Videos', ratio: 9 / 16, byClient: true },
};

const COVERS = '/images/work/videos'; // each video's first frame (.webp)
const VIDEOS = '/videos/work'; // the videos themselves (.mp4, H.264, 720 × 1280)
const CHIRANVI = '/images/work/chiranvi-farm'; // full-length screenshots of chiranvifarm.com
// Screenshots of stellar23resorts.com (the home page's top 7000 px – the whole page is much longer)
const STELLAR = '/images/work/stellar-23-resorts';
const CLEVERLN = '/images/work/cleverln'; // full-length screenshots of cleverln.com

// A video: the same video's YouTube id (for the player's "Watch on YouTube"), and its file name –
// the same for the .mp4 and its cover
const short = (youtube: string, name: string, alt: string) => ({
  image: `${COVERS}/${name}.webp`,
  video: `${VIDEOS}/${name}.mp4`,
  youtube,
  alt,
});
// A video that isn't on YouTube (no "Watch on YouTube" in the player's menu)
const clip = (name: string, alt: string) => ({
  image: `${COVERS}/${name}.webp`,
  video: `${VIDEOS}/${name}.mp4`,
  alt,
});

// The pages a website tour walks through, in order: each path's screenshot is
// <folder>/<device>-<path without the slash>.webp ('home' for '/'; '/#services' → 'services' on a
// one-page site), sizes in pixels
const tourPages = (
  folder: string,
  paths: string[],
  device: 'desktop' | 'mobile',
  sizes: [number, number][]
): WorkTourPage[] =>
  paths.map((path, i) => ({
    path,
    image: `${folder}/${device}-${path === '/' ? 'home' : path.replace(/^\/#?/, '')}.webp`,
    width: sizes[i][0],
    height: sizes[i][1],
  }));

const CHIRANVI_PATHS = ['/', '/community', '/reviews', '/contact-us'];
const STELLAR_PATHS = ['/', '/accomodation', '/packages', '/contact']; // the site's own spelling
const CLEVERLN_PATHS = ['/', '/courses', '/workshops', '/opportunities'];
// CoreCrete is one long page, so the tour stops at its sections; the "How we work" stop runs on to
// the end of the page (FAQ, contact, footer)
const CORECRETE = '/images/work/corecrete';
const CORECRETE_PATHS = ['/', '/#services', '/#projects', '/#process'];
// Homely, an interior design studio – also one page, toured the same way
const HOMELY = '/images/work/homely';
const HOMELY_PATHS = ['/', '/#services', '/#projects', '/#process'];

const SERENO = '/images/work/sereno-dental'; // full-length screenshots of the Sereno Dental concept site
const SERENO_SITE = 'https://dental-clinic-4s9g.vercel.app/';

const EARTHELLA = '/images/work/earthella-nuts'; // logo and packaging posters
const SHARAVATI = '/images/work/sharavati'; // logo and juice pouch posters

// Said about the logo and the packaging, so it sits beside both
const earthellaReview: WorkReview = {
  quote:
    'Bold colours and a clear logo: our packaging now stands out on any shelf and feels natural and premium.',
  name: 'Vivek M',
  role: 'Founder, Earthella Nuts',
};

// Each client's strip is a gradient in its brand colours (dark enough for the white name); a client
// missing here gets FALLBACK_GRADIENT
export const clientGradients: Record<string, string> = {
  'The Decor Hut': 'linear-gradient(160deg, #7a4b2a, #2b1a10)',
  'House of Dirish': 'linear-gradient(160deg, #8a6a3c, #2a2016)',
  'Avinnyya Interior Design': 'linear-gradient(160deg, #6d5a7a, #221c28)',
  'SB Wears': 'linear-gradient(160deg, #3a5a8a, #141e2e)',
  'Toni & Guy': 'linear-gradient(160deg, #6a6a6a, #1c1c1c)',
  Buttons: 'linear-gradient(160deg, #a8455a, #2e1218)',
  'Cafe Social Crust': 'linear-gradient(160deg, #a86a2a, #2e1c0c)',
  'Chiranvi Farm': 'linear-gradient(160deg, #6f9a35, #1c2e12)',
  'Stellar 23 Resorts': 'linear-gradient(160deg, #2f6f8f, #a8843a 70%, #2a2010)',
  CleverLN: 'linear-gradient(160deg, #1f8a4c, #13294b)',
  CoreCrete: 'linear-gradient(160deg, #b3203a, #3a0d16 60%, #141414)',
  Homely: 'linear-gradient(160deg, #c9ad8a, #6b5440 55%, #1e1813)',
  'Earthella Nuts': 'linear-gradient(160deg, #2f6b3a, #c0613a)',
  Sharavati: 'linear-gradient(160deg, #e8771f, #c2185b 50%, #5b2a86)',
  'Sereno Dental': 'linear-gradient(160deg, #8fa9d6, #2a3a5c 60%, #12182a)',
};
export const FALLBACK_GRADIENT = 'linear-gradient(160deg, #4a5a3a, #161a12)';

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
  {
    id: 'sb-wears-reels',
    category: 'videos',
    client: 'SB Wears',
    title: 'Fashion reels',
    media: [clip('sb-wears-1', 'SB Wears: a model in a blue floral puff-sleeve dress, ending on the SB Wears logo')],
    review: {
      quote:
        'BMU styled and shot every outfit with care. The videos are bright and lively, and show off the fabric and fit beautifully.',
      name: 'Harshitha CM',
      role: 'Founder, SB Wears',
    },
    services: ['Shoot', 'Edit'],
  },
  {
    id: 'toni-and-guy-reels',
    category: 'videos',
    client: 'Toni & Guy',
    title: 'Salon reels',
    media: [
      clip('toni-and-guy-1', 'Toni & Guy JP Nagar 9th Phase: a hair wash, colour, cut and blow-dry, start to finish'),
    ],
    review: {
      quote:
        'Every cut, colour and finish looks as good on screen as it does in our chairs. Our reels finally match the salon.',
      name: 'Nirmal M',
      role: 'Branch Owner, Toni & Guy',
    },
    services: ['Shoot', 'Edit'],
  },
  // Videos to come – they appear once their videos are added to `media`
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
        'They captured our food, our people and the feel of the cafe perfectly. Every shot looks delicious.',
      name: 'Sowmya E N',
      role: 'Founder, Cafe Social Crust',
    },
    services: ['Shoot', 'Edit'],
  },

  // ---------- Websites ----------
  {
    id: 'cleverln-website',
    category: 'websites',
    client: 'CleverLN',
    title: 'Learning and careers platform',
    media: [
      {
        image: `${CLEVERLN}/desktop-cover.webp`,
        tour: {
          device: 'browser',
          site: 'cleverln.com',
          pages: tourPages(CLEVERLN, CLEVERLN_PATHS, 'desktop', [
            [1440, 4510],
            [1440, 4041],
            [1440, 1799],
            [1440, 4799],
          ]),
        },
        alt: 'The CleverLN website scrolling through its home, courses, workshops and job opportunities pages',
      },
    ],
    review: {
      quote:
        'Students go from browsing courses to joining workshops and applying for jobs without ever feeling lost.',
      name: 'John Durairaj',
      role: 'Founder, CleverLN',
    },
    services: ['Design', 'Development'],
    link: 'https://www.cleverln.com/',
  },
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
          pages: tourPages(CHIRANVI, CHIRANVI_PATHS, 'desktop', [
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
  // A concept site (no client yet), so a line about it instead of a review – one page, 1440 × 6792
  {
    id: 'sereno-dental-website',
    category: 'websites',
    client: 'Sereno Dental',
    title: 'Dental clinic website · Concept',
    media: [
      {
        image: `${SERENO}/desktop-cover.webp`,
        tour: {
          device: 'browser',
          site: 'dental-clinic-4s9g.vercel.app',
          pages: [{ path: '/', image: `${SERENO}/desktop-home.webp`, width: 1440, height: 6792 }],
        },
        alt: 'The Sereno Dental website scrolling from its tooth hero through treatments, dentists, first visit, reviews and booking',
      },
    ],
    summary:
      'A calm one-page site for a family dental clinic, from treatments and dentists to WhatsApp booking.',
    services: ['Design', 'Development'],
    link: SERENO_SITE,
  },
  {
    id: 'stellar-23-resorts-website',
    category: 'websites',
    client: 'Stellar 23 Resorts',
    title: 'Lakeside resort website',
    media: [
      {
        image: `${STELLAR}/desktop-cover.webp`,
        tour: {
          device: 'browser',
          site: 'stellar23resorts.com',
          pages: tourPages(STELLAR, STELLAR_PATHS, 'desktop', [
            [1440, 7000],
            [1440, 2818],
            [1440, 3818],
            [1440, 1669],
          ]),
        },
        alt: 'The Stellar 23 Resorts website scrolling through its home, accommodation, packages and contact pages',
      },
    ],
    review: {
      quote:
        'Our website finally feels like Stellar: the lake, rooms and activities all come through, and booking takes a couple of clicks.',
      name: 'Mitesh Deverapally',
      role: 'Founder, Stellar 23 Resorts',
    },
    services: ['Design', 'Development'],
    link: 'https://stellar23resorts.com/',
  },
  {
    id: 'corecrete-website',
    category: 'websites',
    client: 'CoreCrete',
    title: 'Construction company website',
    media: [
      {
        image: `${CORECRETE}/desktop-cover.webp`,
        tour: {
          device: 'browser',
          site: 'bmu-construction-bbxi.vercel.app',
          pages: tourPages(CORECRETE, CORECRETE_PATHS, 'desktop', [
            [1440, 3826],
            [1440, 3510],
            [1440, 986],
            [1440, 3938],
          ]),
        },
        alt: 'The CoreCrete construction website scrolling through its home, services, projects and how-we-work sections',
      },
    ],
    review: {
      quote:
        'Homeowners see our services, past projects and process in one scroll, then book a site visit right away.',
      name: 'Arjun Chakravarthy',
      role: 'Founder, CoreCrete',
    },
    services: ['Design', 'Development'],
    link: 'https://bmu-construction-bbxi.vercel.app/',
  },
  {
    id: 'homely-website',
    category: 'websites',
    client: 'Homely',
    title: 'Interior design studio website',
    media: [
      {
        image: `${HOMELY}/desktop-cover.webp`,
        tour: {
          device: 'browser',
          site: 'interior-design-l59x.vercel.app',
          pages: tourPages(HOMELY, HOMELY_PATHS, 'desktop', [
            [1440, 1973],
            [1440, 757],
            [1440, 960],
            [1440, 3172],
          ]),
        },
        alt: 'The Homely interior design website scrolling through its home, services, projects and process sections',
      },
    ],
    review: {
      quote:
        'The site feels like walking into our studio: calm, warm and full of homes we are proud of.',
      name: 'Jagdheesh Pandey',
      role: 'Founder, Homely',
    },
    services: ['Design', 'Development'],
    link: 'https://interior-design-l59x.vercel.app/',
  },

  // ---------- UI/UX ----------
  {
    id: 'cleverln-mobile',
    category: 'ui-ux',
    client: 'CleverLN',
    title: 'Mobile learning experience',
    media: [
      {
        image: `${CLEVERLN}/mobile-cover.webp`,
        tour: {
          device: 'phone',
          site: 'cleverln.com',
          pages: tourPages(CLEVERLN, CLEVERLN_PATHS, 'mobile', [
            [600, 8992],
            [600, 6191],
            [600, 4606],
            [600, 8866],
          ]),
        },
        alt: 'The CleverLN website on a phone, scrolling through its home, courses, workshops and job opportunities pages',
      },
    ],
    review: {
      quote:
        'Most learners sign up on their phones, and CleverLN feels like an app there: fast, clear and easy to use.',
      name: 'John Durairaj',
      role: 'Founder, CleverLN',
    },
    services: ['UI/UX', 'Mobile design'],
    link: 'https://www.cleverln.com/',
  },
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
          pages: tourPages(CHIRANVI, CHIRANVI_PATHS, 'mobile', [
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
  // The same concept site on a phone – 600 × 10557
  {
    id: 'sereno-dental-mobile',
    category: 'ui-ux',
    client: 'Sereno Dental',
    title: 'Mobile clinic experience · Concept',
    media: [
      {
        image: `${SERENO}/mobile-cover.webp`,
        tour: {
          device: 'phone',
          site: 'dental-clinic-4s9g.vercel.app',
          pages: [{ path: '/', image: `${SERENO}/mobile-home.webp`, width: 600, height: 10557 }],
        },
        alt: 'The Sereno Dental website on a phone, scrolling through treatments, dentists, reviews, FAQs and booking',
      },
    ],
    summary:
      'Built for the phone first: clear sections, answers to common worries up front and WhatsApp booking a tap away.',
    services: ['UI/UX', 'Mobile design'],
    link: SERENO_SITE,
  },
  {
    id: 'stellar-23-resorts-mobile',
    category: 'ui-ux',
    client: 'Stellar 23 Resorts',
    title: 'Mobile booking experience',
    media: [
      {
        image: `${STELLAR}/mobile-cover.webp`,
        tour: {
          device: 'phone',
          site: 'stellar23resorts.com',
          pages: tourPages(STELLAR, STELLAR_PATHS, 'mobile', [
            [600, 10769],
            [600, 6974],
            [600, 6525],
            [600, 4154],
          ]),
        },
        alt: 'The Stellar 23 Resorts website on a phone, scrolling through its home, accommodation, packages and contact pages',
      },
    ],
    review: {
      quote:
        'Most guests find us on their phones, and the site works beautifully there. Booking is just a thumb away.',
      name: 'Mitesh Deverapally',
      role: 'Founder, Stellar 23 Resorts',
    },
    services: ['UI/UX', 'Mobile design'],
    link: 'https://stellar23resorts.com/',
  },
  {
    id: 'corecrete-mobile',
    category: 'ui-ux',
    client: 'CoreCrete',
    title: 'Mobile enquiry experience',
    media: [
      {
        image: `${CORECRETE}/mobile-cover.webp`,
        tour: {
          device: 'phone',
          site: 'bmu-construction-bbxi.vercel.app',
          pages: tourPages(CORECRETE, CORECRETE_PATHS, 'mobile', [
            [600, 3782],
            [600, 4341],
            [600, 1131],
            [600, 6908],
          ]),
        },
        alt: 'The CoreCrete construction website on a phone, scrolling through its home, services, projects and how-we-work sections',
      },
    ],
    review: {
      quote:
        'Most enquiries come from phones, and calling or WhatsApping us is now just one tap from any section.',
      name: 'Arjun Chakravarthy',
      role: 'Founder, CoreCrete',
    },
    services: ['UI/UX', 'Mobile design'],
    link: 'https://bmu-construction-bbxi.vercel.app/',
  },
  {
    id: 'homely-mobile',
    category: 'ui-ux',
    client: 'Homely',
    title: 'Mobile studio experience',
    media: [
      {
        image: `${HOMELY}/mobile-cover.webp`,
        tour: {
          device: 'phone',
          site: 'interior-design-l59x.vercel.app',
          pages: tourPages(HOMELY, HOMELY_PATHS, 'mobile', [
            [600, 2445],
            [600, 869],
            [600, 1298],
            [600, 5917],
          ]),
        },
        alt: 'The Homely interior design website on a phone, scrolling through its home, services, projects and process sections',
      },
    ],
    review: {
      quote:
        'Most clients browse on their phones, and our projects look beautiful there. Booking a visit takes a single tap.',
      name: 'Jagdheesh Pandey',
      role: 'Founder, Homely',
    },
    services: ['UI/UX', 'Mobile design'],
    link: 'https://interior-design-l59x.vercel.app/',
  },

  // ---------- Logos (1200 × 1513; each on its brand colour and on a light background) ----------
  {
    id: 'earthella-nuts-logo',
    category: 'logos',
    client: 'Earthella Nuts',
    title: 'Logo design',
    ratio: 1200 / 1513,
    media: [
      {
        image: `${EARTHELLA}/logo-green.webp`,
        alt: 'Earthella Nuts logo: cream rounded lettering on green, with two leaves growing from the second e',
      },
      {
        image: `${EARTHELLA}/logo-cream.webp`,
        alt: 'Earthella Nuts logo on cream: white lettering with a thick green outline and two leaves',
      },
    ],
    review: earthellaReview,
    services: ['Concept', 'Logo design'],
  },
  {
    id: 'chiranvi-farm-logo',
    category: 'logos',
    client: 'Chiranvi Farm',
    title: 'Logo design',
    ratio: 1200 / 1513,
    media: [
      {
        image: `${CHIRANVI}/logo-green.webp`,
        alt: 'Chiranvi Farm logo in white on dark green: a cow and two leaves inside a C, beside the name',
      },
      {
        image: `${CHIRANVI}/logo-white.webp`,
        alt: 'Chiranvi Farm logo on white: a yellow cow and leaves inside a green circle, with the name in green',
      },
    ],
    review: {
      quote:
        'The cow and leaf inside the C tells our whole story at a glance. It looks just as good on a milk bottle as it does on our website.',
      name: 'Praveen',
      role: 'Founder, Chiranvi Farm',
    },
    services: ['Concept', 'Logo design'],
  },
  {
    id: 'sharavati-logo',
    category: 'logos',
    client: 'Sharavati',
    title: 'Logo design',
    ratio: 1200 / 1513,
    media: [
      {
        image: `${SHARAVATI}/logo-green.webp`,
        alt: 'Sharavati logo: flowing white script on dark green, with a leaf above the second a',
      },
      {
        image: `${SHARAVATI}/logo-light.webp`,
        alt: 'Sharavati logo on pale green: flowing black script with a green leaf above the second a',
      },
    ],
    review: {
      quote:
        'The flowing script and the little leaf feel natural and warm, exactly how we want people to see Sharavati.',
      name: 'Sharanya',
      role: 'Founder, Sharavati',
    },
    services: ['Concept', 'Logo design'],
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
    review: earthellaReview,
    services: ['Concept', 'Packaging design'],
  },
  // Product packaging, each on a deep backdrop taken from its own colours (public/images/work/chiranvi-farm, 1200 × 1513)
  {
    id: 'chiranvi-farm-packaging',
    category: 'graphic-design',
    client: 'Chiranvi Farm',
    title: 'Packaging design',
    ratio: 1200 / 1513,
    media: [
      {
        image: `${CHIRANVI}/ghee-3.webp`,
        alt: 'Chiranvi Farms Desi Ghee jar with a gold lid and a gold label on a green band with golden cows',
      },
      {
        image: `${CHIRANVI}/milk-3.webp`,
        alt: 'Chiranvi Farms Desi Cow Milk glass bottle with a gold cap and a gold label on a green band with golden cows',
      },
      {
        image: `${CHIRANVI}/macaroni.webp`,
        alt: 'Chiranvi Farm Palak Flavour Macaroni round label, cream and green, with green macaroni and spinach leaves',
      },
    ],
    review: {
      quote:
        'From milk to macaroni, every pack now looks like it comes from the same farm, clean, honest and easy to spot on the shelf.',
      name: 'Praveen',
      role: 'Founder, Chiranvi Farm',
    },
    services: ['Packaging design', 'Label design'],
  },
  // Chia seeds juice pouch posters, four flavours (public/images/work/sharavati, 1200 × 1513)
  {
    id: 'sharavati-packaging',
    category: 'graphic-design',
    client: 'Sharavati',
    title: 'Packaging design',
    ratio: 1200 / 1513,
    media: [
      {
        image: `${SHARAVATI}/orange.webp`,
        alt: 'Sharavati Chia Seeds Juice orange pouch beside a glass of orange chia juice and sliced oranges',
      },
      {
        image: `${SHARAVATI}/litchi.webp`,
        alt: 'Sharavati Chia Seeds Juice litchi pouch in pink beside a glass of pink chia juice and litchis',
      },
      {
        image: `${SHARAVATI}/lemon.webp`,
        alt: 'Sharavati Chia Seeds Juice lemon pouch in yellow beside a glass of lemon chia juice and lemons',
      },
      {
        image: `${SHARAVATI}/blueberry.webp`,
        alt: 'Sharavati Chia Seeds Juice blueberry pouch in purple beside a glass of blueberry chia juice',
      },
    ],
    review: {
      quote:
        'Every flavour has its own colour, but the pouches still look like one family. They stand out on the shelf and in our posts.',
      name: 'Sharanya',
      role: 'Founder, Sharavati',
    },
    services: ['Packaging design', 'Label design'],
  },
];
