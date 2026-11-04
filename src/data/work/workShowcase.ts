import type {
  WorkCategory,
  WorkCategoryId,
  WorkProject,
  WorkReview,
  WorkShowcaseContent,
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
  ugc: { id: 'ugc', label: 'UGC', ratio: 9 / 16 },
  'insta-videos': { id: 'insta-videos', label: 'Insta Videos', ratio: 9 / 16 },
};

const SAMPLES = '/images/work/samples';
const SAMPLE_VIDEOS = '/videos/work/samples';

const sampleReview: WorkReview = {
  quote:
    'The client’s review goes here: what they needed, what you made, and what changed once it went live.',
  name: 'Client name',
  role: 'Role, Company',
};

const sampleVideo = (id: string, clip: string, category: WorkCategoryId, title: string) => ({
  id,
  category,
  client: 'Client name',
  title,
  media: [
    {
      image: `${SAMPLES}/${clip}.webp`,
      video: `${SAMPLE_VIDEOS}/${clip}.webm`,
      alt: `Sample video standing in for a ${title.toLowerCase()}`,
    },
  ],
  review: sampleReview,
  services: ['Script', 'Shoot', 'Edit'],
  sample: true,
});

const sampleImage = (
  id: string,
  images: string[],
  category: WorkCategoryId,
  title: string,
  services: string[]
) => ({
  id,
  category,
  client: 'Client name',
  title,
  media: images.map((image) => ({
    image: `${SAMPLES}/${image}.svg`,
    alt: `Sample artwork standing in for a ${title.toLowerCase()}`,
  })),
  review: sampleReview,
  services,
  sample: true,
});

// The work, in the order it appears in each panel. Add real work at the top and delete a sample each time
// (their files are in public/images/work/samples and public/videos/work/samples):
// {
//   id: 'client-launch-reel',
//   category: 'insta-videos',
//   client: 'Client',
//   title: 'Launch reel',
//   media: [{ image: '/images/work/client-reel.webp', video: '/videos/work/client-reel.mp4', alt: '…' }],
//   review: { quote: '…', name: '…', role: 'Founder, Client' },
//   services: ['Script', 'Shoot', 'Edit'],
// },
const projects: WorkProject[] = [
  sampleImage('sample-website-1', ['website-1'], 'websites', 'Website', ['Design', 'Development']),
  sampleVideo('sample-reel-1', 'clip-1', 'insta-videos', 'Instagram reel'),
  sampleVideo('sample-ugc-1', 'clip-2', 'ugc', 'UGC video'),
  sampleImage('sample-poster-1', ['poster-1'], 'graphic-design', 'Poster', ['Concept', 'Design']),
  sampleImage('sample-app-1', ['app-1', 'app-2'], 'ui-ux', 'App design', ['Research', 'UI/UX']),
  sampleImage('sample-poster-2', ['poster-2'], 'graphic-design', 'Campaign artwork', ['Concept', 'Design']),
  sampleVideo('sample-reel-2', 'clip-3', 'insta-videos', 'Instagram reel'),
  sampleVideo('sample-ugc-2', 'clip-4', 'ugc', 'UGC video'),
  sampleImage('sample-website-2', ['website-2'], 'websites', 'Website', ['Design', 'Development']),
  sampleImage('sample-poster-3', ['poster-3'], 'graphic-design', 'Social artwork', ['Concept', 'Design']),
];

// Samples stay on your computer: the live site only ever shows real work, and the whole section
// stays hidden until there is some
export const workProjects = projects.filter(
  (project) => !project.sample || process.env.NODE_ENV === 'development'
);
