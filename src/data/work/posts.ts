import type { WorkPost } from '@/types/work';

/*
 * All articles shown on /work – each one gets its own page at /work/<slug>.
 *
 * To add an article: copy one of the posts below, paste it anywhere in the list and change it.
 * The order here doesn't matter – the site sorts by `date` (newest first).
 *   slug      lowercase words with dashes, unique, never change it once published
 *   category  one of: Brand & Design · Web & AI · UGC & Creator Marketing ·
 *             Social & Personal Brand · Marketing & Visibility · Content & Production
 *   date      'YYYY-MM-DD'
 *   featured  true on one post – the newest featured post is shown large at the top
 *   body      blocks: paragraph · heading · list · quote · image
 *
 * PLACEHOLDERS – the posts below are samples to show the layout. Replace them with real articles.
 */
export const posts: WorkPost[] = [
  {
    slug: 'win-on-google-maps-bengaluru',
    title: 'How Bengaluru businesses can win on Google Maps',
    excerpt:
      'Most local customers choose from the first three results on the map. Here is how to earn your place there – and keep it.',
    category: 'Marketing & Visibility',
    date: '2025-09-18',
    readTime: 6,
    author: 'BMU Team',
    featured: true,
    body: [
      {
        type: 'paragraph',
        text: 'When someone nearby searches for what you sell, Google shows a map with three businesses under it. Those three get most of the calls, the direction requests and the visits. Getting into that list is less about luck and more about a handful of habits.',
      },
      { type: 'heading', text: 'Start with a complete profile' },
      {
        type: 'list',
        items: [
          'Choose the most specific primary category you can.',
          'Add real photos of your space, team and work – and keep adding them.',
          'Keep your hours, phone number and address identical everywhere online.',
        ],
      },
      {
        type: 'quote',
        text: 'A profile that is updated every week looks like a business that is open and busy.',
      },
      {
        type: 'paragraph',
        text: 'Then ask every happy customer for a review, and reply to every review you get. Over a few months these small steps compound into a profile people trust.',
      },
    ],
  },
  {
    slug: 'websites-that-turn-visitors-into-enquiries',
    title: 'What makes a website turn visitors into enquiries',
    excerpt:
      'A beautiful site that nobody contacts you from is a brochure. These are the details that turn a visit into a conversation.',
    category: 'Web & AI',
    date: '2025-09-04',
    readTime: 5,
    author: 'BMU Team',
    body: [
      {
        type: 'paragraph',
        text: 'Visitors decide in seconds whether a page is for them. The first screen should say what you do, who it is for and what to do next – in plain words.',
      },
      { type: 'heading', text: 'Make the next step obvious' },
      {
        type: 'list',
        items: [
          'One clear call to action per page.',
          'A contact form with as few fields as you can manage.',
          'A WhatsApp button for people who would rather message.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Speed matters as much as design: a page that loads slowly on a phone loses people before they see anything at all.',
      },
    ],
  },
  {
    slug: 'founder-brand-people-follow',
    title: 'Building a founder brand people actually follow',
    excerpt:
      'People follow people, not logos. A simple routine for founders who want to be known for what they know.',
    category: 'Social & Personal Brand',
    date: '2025-08-22',
    readTime: 4,
    author: 'BMU Team',
    body: [
      {
        type: 'paragraph',
        text: 'The founders who grow an audience are rarely the ones who post the most. They are the ones who post consistently about the few things they know better than anyone else.',
      },
      { type: 'heading', text: 'Pick three themes' },
      {
        type: 'paragraph',
        text: 'Choose three topics you can talk about for years – your craft, your industry and your journey – and let every post fit one of them.',
      },
      { type: 'quote', text: 'Consistency beats brilliance. Show up every week.' },
    ],
  },
  {
    slug: 'why-creator-videos-feel-trustworthy',
    title: 'Why creator-led videos feel more trustworthy',
    excerpt:
      'Real faces, real voices and real use. What makes user-generated content land – and how to brief it well.',
    category: 'UGC & Creator Marketing',
    date: '2025-08-09',
    readTime: 4,
    author: 'BMU Team',
    body: [
      {
        type: 'paragraph',
        text: 'A creator holding your product in their own kitchen says something a studio shoot cannot: someone like me uses this.',
      },
      { type: 'heading', text: 'Brief the outcome, not the script' },
      {
        type: 'list',
        items: [
          'Share the one feeling the video should leave behind.',
          'List the must-say points – then let the creator say them their way.',
          'Ask for two or three hooks so you can test which one stops the scroll.',
        ],
      },
    ],
  },
  {
    slug: 'rebrand-checklist-growing-businesses',
    title: 'A rebrand checklist for growing businesses',
    excerpt:
      'When your brand no longer matches the business you have become – what to keep, what to change and in what order.',
    category: 'Brand & Design',
    date: '2025-07-25',
    readTime: 7,
    author: 'BMU Team',
    body: [
      {
        type: 'paragraph',
        text: 'A rebrand is not a new logo. It is a decision about who you are for, followed by everything that has to change to show it.',
      },
      { type: 'heading', text: 'The order that works' },
      {
        type: 'list',
        items: [
          'Positioning – who you serve and why they should choose you.',
          'Verbal identity – your name, tagline and tone of voice.',
          'Visual identity – logo, colours, type and imagery.',
          'Roll-out – website, social profiles, signage and packaging.',
        ],
      },
      {
        type: 'paragraph',
        text: 'Keep what your customers already recognise and love. Recognition is expensive to rebuild.',
      },
    ],
  },
  {
    slug: 'planning-a-property-walkthrough-film',
    title: 'Planning a property walkthrough film',
    excerpt:
      'Drone shots, golden hour and a story buyers can picture themselves in. A shoot plan for real-estate projects.',
    category: 'Content & Production',
    date: '2025-07-10',
    readTime: 5,
    author: 'BMU Team',
    body: [
      {
        type: 'paragraph',
        text: 'Buyers do not buy square feet – they buy mornings on the balcony and evenings in the garden. A good walkthrough film shows the life, not just the layout.',
      },
      { type: 'heading', text: 'Plan the light' },
      {
        type: 'paragraph',
        text: 'Shoot exteriors and drone footage in the hour after sunrise or before sunset, and interiors with every light on.',
      },
      { type: 'quote', text: 'Show the view from the window before you show the window.' },
    ],
  },
  {
    slug: 'google-ads-or-meta-ads-where-to-start',
    title: 'Google Ads or Meta Ads: where should you start?',
    excerpt:
      'One captures demand, the other creates it. How to choose your first paid channel – and when to add the second.',
    category: 'Marketing & Visibility',
    date: '2025-06-28',
    readTime: 6,
    author: 'BMU Team',
    body: [
      {
        type: 'paragraph',
        text: 'Google Ads reach people who are already searching for what you offer. Meta Ads reach people who are not looking yet but might be interested. Which one to start with depends on whether demand for your product already exists.',
      },
      { type: 'heading', text: 'A simple rule of thumb' },
      {
        type: 'list',
        items: [
          'People already search for it? Start with Google.',
          'It is new, visual or an impulse buy? Start with Meta.',
          'Add the second channel once the first one pays for itself.',
        ],
      },
    ],
  },
];
