import type { Service } from '@/types/pseo';
import type { ServiceSlug } from './slugs';

// Content for every service, keyed by slug and ordered as in SERVICE_SLUGS. Each entry feeds the
// service hub and every Service × Industry / Locality / City page. No prices until the client
// confirms them.
export const services: Record<ServiceSlug, Service> = {
  // ---------- Marketing & Visibility ----------
  seo: {
    slug: 'seo',
    name: 'SEO',
    title: 'SEO',
    agencyNoun: 'SEO agency',
    group: 'Marketing & Visibility',
    summary:
      'SEO that gets your business found – technical fixes, service pages and content that help you rank for what customers search.',
    intro:
      'SEO is the work of getting your website to show up when people search Google for what you sell. It covers three things: a site Google can crawl and understand, pages that answer the exact searches your customers make, and links and mentions from other sites that show you’re trustworthy. Done well, it brings a steady flow of enquiries you don’t pay for per click.',
    whyItMatters:
      'Most buyers check Google before they call, even when someone has recommended you. If your site is slow, thin or missing the pages they search for, those enquiries go to a competitor who ranks above you – and you never see the leads you lost.',
    deliverables: [
      {
        title: 'Technical SEO audit',
        text: 'A crawl of your site that lists broken pages, slow templates, indexing problems and duplicate content, ranked by what to fix first.',
      },
      {
        title: 'Keyword and page map',
        text: 'The searches worth targeting, each assigned to one page so your own pages don’t compete with each other.',
      },
      {
        title: 'On-page optimisation',
        text: 'Rewritten titles, meta descriptions, headings, internal links and schema markup on your most important pages.',
      },
      {
        title: 'Service and location pages',
        text: 'New pages for the services and areas you cover that currently have nothing on your site to rank.',
      },
      {
        title: 'Content plan and articles',
        text: 'Guides and articles written around the questions buyers ask before they pick up the phone.',
      },
      {
        title: 'Links and citations',
        text: 'Outreach to relevant directories, publications, suppliers and partners for genuine links back to your site.',
      },
    ],
    process: [
      {
        title: 'Audit and baseline',
        text: 'We crawl the site, connect Google Search Console and Analytics, and record where you rank today.',
      },
      {
        title: 'Keyword research',
        text: 'We find the searches with buying intent in your category and map each one to a page.',
      },
      {
        title: 'Fix, then build',
        text: 'Technical fixes go first, then on-page changes, then new pages and content in order of priority.',
      },
      {
        title: 'Track and expand',
        text: 'Each month we check rankings and enquiries, strengthen pages close to page one and add the next set of content.',
      },
    ],
    timeline:
      'Technical fixes can show in Search Console within a few weeks, but SEO usually takes 3–6 months to show steady movement in rankings and traffic. Highly competitive keywords can take longer.',
    reportsOn: [
      'Organic search traffic',
      'Keyword rankings',
      'Enquiries from organic search',
      'Pages indexed',
    ],
    faqs: [
      {
        q: 'How long before SEO starts working?',
        a: 'Most sites see early movement within 2–3 months and steadier results by 3–6 months. It depends on how competitive your keywords are, the state of your site and how much new content is added.',
      },
      {
        q: 'Can you guarantee a first-page ranking?',
        a: 'No, and no honest agency can – Google decides rankings, not us. What we commit to is the work: fixing what holds the site back, building the pages customers search for and reporting on movement every month.',
      },
      {
        q: 'Do I need a new website for SEO?',
        a: 'Usually not – most sites can be fixed and extended. If your platform makes basic changes hard, or the site is very slow on mobile, we’ll explain the trade-off before recommending a rebuild.',
      },
      {
        q: 'What’s the difference between SEO and Google Ads?',
        a: 'Google Ads puts you at the top of the results for as long as you pay for each click. SEO earns the unpaid listings below the ads, which takes longer but keeps bringing visitors without a per-click cost, so many businesses run ads for quick leads while SEO builds up.',
      },
    ],
    localAngle:
      'When most of your customers live or work close by, SEO is about winning searches that include the area name or “near me”, not citywide keywords you can’t serve. We build a page for this area that mentions the roads, landmarks and nearby localities customers recognise, and link it to your Google Business Profile so your website and Maps listing support each other.',
    related: ['local-seo', 'content-marketing', 'website-development', 'ai-search-visibility'],
  },

  'local-seo': {
    slug: 'local-seo',
    name: 'local SEO',
    title: 'Local SEO',
    agencyNoun: 'local SEO agency',
    group: 'Marketing & Visibility',
    summary:
      'Local SEO to rank in Google Maps and “near me” searches – profile, reviews, citations and location pages for your service area.',
    intro:
      'Local SEO gets your business into the map pack – the three listings with a map that Google shows for searches like “dentist near me”. It works on your Google Business Profile, reviews, directory listings and the location pages on your website together. Google ranks local results on relevance, distance and prominence, and each of these needs its own work.',
    whyItMatters:
      'For local searches, the map pack appears above the regular results, and many people call or ask for directions straight from it. If you’re not in it, customers a few streets away can choose a competitor without ever seeing your name.',
    deliverables: [
      {
        title: 'Local ranking audit',
        text: 'A grid check of where you appear in Google Maps across your service area, and who outranks you at each point.',
      },
      {
        title: 'Business Profile optimisation',
        text: 'Correct categories, services, hours, attributes, photos and description on your Google Business Profile.',
      },
      {
        title: 'Citation cleanup',
        text: 'The same name, address and phone number on Justdial, Sulekha and the directories that matter in your category.',
      },
      {
        title: 'Location pages',
        text: 'A page on your website for each area or branch, with real local detail rather than swapped place names.',
      },
      {
        title: 'Review request system',
        text: 'A simple way for staff to ask happy customers for a Google review by WhatsApp or SMS, plus reply templates.',
      },
      {
        title: 'Local links',
        text: 'Mentions from local associations, events, suppliers and neighbourhood publications that point back to you.',
      },
    ],
    process: [
      {
        title: 'Map the service area',
        text: 'We list the areas you actually serve and the searches people there use to find your kind of business.',
      },
      {
        title: 'Fix the foundations',
        text: 'We correct your Business Profile, your details across directories and the location signals on your site.',
      },
      {
        title: 'Build prominence',
        text: 'We grow reviews, local links and location content in the parts of your area where you’re weakest.',
      },
      {
        title: 'Track by area',
        text: 'We re-run the Maps grid each month and change tactics where rankings stall.',
      },
    ],
    timeline:
      'Profile and citation fixes often show in Maps within 4–8 weeks. Ranking across a wider area, or against well-established competitors, usually takes 3–6 months of steady reviews and content.',
    reportsOn: [
      'Map pack rankings by area',
      'Calls from Google Maps',
      'Direction requests',
      'Website clicks from Maps',
    ],
    faqs: [
      {
        q: 'Why does my business show up for some people and not others?',
        a: 'Google’s local results change with the searcher’s location, so you can rank first for someone across the road and not appear for someone two kilometres away. Local SEO works on widening the area where you rank, not on a single position.',
      },
      {
        q: 'Do I need an address in the area I want to rank in?',
        a: 'Distance is one of Google’s local ranking factors, so it’s hard to rank in Maps far from your address. For areas further away, location pages on your website and regular organic search are the more realistic route.',
      },
      {
        q: 'How many reviews do I need?',
        a: 'There’s no fixed number. What matters is how you compare with the businesses around you – how many reviews, how recent and how you reply – and a steady flow each month looks more natural than a sudden burst.',
      },
      {
        q: 'Can I buy reviews to rank faster?',
        a: 'No. Fake reviews break Google’s policies and can lead to reviews being removed or the profile being restricted. We help you ask real customers at the right moment, which is slower but safe.',
      },
    ],
    localAngle:
      'For a business that depends on walk-ins or home visits from one neighbourhood, local SEO is often the main search channel, because people searching nearby are usually on their phones and ready to call or visit. We focus on ranking across the streets and nearby localities you can actually serve, rather than chasing the whole city.',
    related: ['google-business-profile', 'seo', 'website-development', 'google-ads'],
    abroad: {
      'Citation cleanup':
        'The same name, address and phone number on Apple Maps, Bing and the directories that matter in your city and category.',
    },
  },

  'google-business-profile': {
    slug: 'google-business-profile',
    name: 'Google Business Profile optimisation',
    title: 'Google Business Profile Optimisation',
    agencyNoun: 'Google Business Profile optimisation services',
    group: 'Marketing & Visibility',
    summary:
      'Set up, verify and manage your Google Business Profile – categories, photos, posts and review replies, kept current every month.',
    intro:
      'Your Google Business Profile is the listing that appears in Google Maps and beside the search results when someone looks up your business or your category nearby. It shows your hours, phone number, photos, reviews and services, and for many customers it’s the first – sometimes the only – thing they see before calling. We set it up properly and keep it active.',
    whyItMatters:
      'An unclaimed or half-filled profile can show the wrong hours, an old number or photos uploaded by strangers, and anyone can suggest edits to it. A profile with few photos, no recent posts and unanswered reviews also looks less trustworthy next to a competitor who keeps theirs current.',
    deliverables: [
      {
        title: 'Setup and verification',
        text: 'Claiming or creating the profile and completing Google’s verification, which may need a short video of your premises.',
      },
      {
        title: 'Categories and services',
        text: 'The right primary and secondary categories, services, products and attributes so you show for the right searches.',
      },
      {
        title: 'Photos and videos',
        text: 'Clear, well-lit photos of the outside, inside, team and work, added regularly rather than all at once.',
      },
      {
        title: 'Regular posts',
        text: 'Updates, offers and events posted to the profile on a fixed schedule so it never looks abandoned.',
      },
      {
        title: 'Review replies',
        text: 'A reply to every review within a few days, and a short review link your team can share with customers.',
      },
      {
        title: 'Monitoring and fixes',
        text: 'Watching for unwanted suggested edits, duplicate listings and spam competitors, and reporting them to Google.',
      },
    ],
    process: [
      {
        title: 'Claim and verify',
        text: 'We get owner access to the existing listing, or create one, and complete the verification Google asks for.',
      },
      {
        title: 'Fix and complete',
        text: 'We correct every field, remove duplicates and fill in categories, services, description, hours and photos.',
      },
      {
        title: 'Set up reviews',
        text: 'We create a review link and a short WhatsApp message your staff can send after each visit or job.',
      },
      {
        title: 'Keep it active',
        text: 'Each month we post updates, add photos, reply to reviews and read the profile’s performance data.',
      },
    ],
    timeline:
      'Verification can take anywhere from a few days to a few weeks, depending on the method Google asks for. Once the profile is complete and active, changes in calls and direction requests usually show within 1–3 months.',
    reportsOn: [
      'Profile views',
      'Calls from the profile',
      'Direction requests',
      'New reviews and rating',
    ],
    faqs: [
      {
        q: 'Is Google Business Profile free?',
        a: 'Yes, the profile itself is free to create and manage. You pay us for the time to set it up, keep it active and handle reviews, and there’s no fee to Google unless you also run ads.',
      },
      {
        q: 'My profile got suspended. Can you fix it?',
        a: 'Many suspensions can be resolved. They usually come from details that break Google’s guidelines, like keywords added to the business name or an address that doesn’t meet the rules, so we find the cause, correct it and file a reinstatement request with evidence.',
      },
      {
        q: 'Can I have a profile without a shop or office?',
        a: 'Yes. Service-area businesses – home cleaning, pest control, interior designers who visit clients – can hide their address and list the areas they serve instead. You still need a genuine address for verification.',
      },
      {
        q: 'Can I get a bad review removed?',
        a: 'Only if it breaks Google’s policies, such as spam, offensive content or a fake review – those can be flagged for removal. For genuine negative reviews, a calm, specific reply usually does more for your reputation than trying to remove it.',
      },
    ],
    localAngle:
      'For a business serving one neighbourhood, the profile is often the main way new customers find you – it’s what shows when they search your category with the area name or tap “near me” in Maps. Photos of your storefront and its surroundings, posts about local offers and steady reviews from nearby customers all help people in the area recognise and trust you.',
    related: ['local-seo', 'seo', 'photography', 'whatsapp-automation'],
  },

  'google-ads': {
    slug: 'google-ads',
    name: 'Google Ads',
    title: 'Google Ads',
    agencyNoun: 'Google Ads agency',
    group: 'Marketing & Visibility',
    summary:
      'Google Ads – Search, Performance Max and YouTube – built around leads and sales, with conversion tracking set up before spend starts.',
    intro:
      'Google Ads puts your business in front of people at the moment they search for what you sell. Search campaigns show text ads above the organic results, while Performance Max, Display and YouTube campaigns reach people across Google’s network. You pay when someone clicks, so the work is in choosing the right keywords, writing ads that earn the click and sending people to pages that turn that click into an enquiry.',
    whyItMatters:
      'Badly set up accounts spend on broad keywords, irrelevant searches and clicks from areas you don’t serve, and without conversion tracking there’s no way to tell which rupees produced leads. The money goes to Google either way – the setup decides whether it comes back as customers.',
    deliverables: [
      {
        title: 'Account audit or setup',
        text: 'A fresh account with a clean structure, or a review of your current one showing exactly where spend is wasted.',
      },
      {
        title: 'Keyword research',
        text: 'Keywords grouped by intent, with match types and a negative keyword list that blocks irrelevant searches.',
      },
      {
        title: 'Conversion tracking',
        text: 'Tracking for form fills, calls and WhatsApp clicks through Google Tag Manager and GA4, so every lead is counted.',
      },
      {
        title: 'Ads and assets',
        text: 'Responsive search ads, sitelinks, callouts, call assets and images written around your actual offers.',
      },
      {
        title: 'Landing page changes',
        text: 'Specific fixes to the page each campaign sends people to, or a new landing page where the old one can’t convert.',
      },
      {
        title: 'Ongoing optimisation',
        text: 'Weekly search term reviews, bid and budget changes, and ad tests based on cost per lead.',
      },
    ],
    process: [
      {
        title: 'Tracking first',
        text: 'We install and test conversion tracking before launch, so results are measured from the first click.',
      },
      {
        title: 'Build the campaigns',
        text: 'We structure campaigns by service and location, with tight keyword groups and ads that match them.',
      },
      {
        title: 'Launch and clean up',
        text: 'In the first weeks we watch search terms closely, add negative keywords and pause what isn’t converting.',
      },
      {
        title: 'Scale what works',
        text: 'Once cost per lead is stable, we move budget to the strongest campaigns and test new keywords and ads.',
      },
    ],
    timeline:
      'Search campaigns can produce enquiries in the first week or two. Expect 4–8 weeks of data and adjustments before cost per lead settles at a level you can plan around.',
    reportsOn: ['Cost per lead', 'Conversions', 'Click-through rate', 'Search impression share'],
    faqs: [
      {
        q: 'How much should I spend on Google Ads?',
        a: 'It depends on what a click costs in your category and how many leads you need. We check keyword costs during research and suggest a starting budget that can gather enough data in a month to judge results, and ad spend is paid directly to Google, separate from our fee.',
      },
      {
        q: 'Why am I getting clicks but no leads?',
        a: 'Usually it’s one of three things: keywords that are too broad, a landing page that doesn’t match the ad, or tracking that isn’t recording leads that are actually coming in. We check all three before touching the budget.',
      },
      {
        q: 'Should I use Performance Max?',
        a: 'It can work well once conversion tracking is reliable and there’s enough data, but it gives you less control over where ads appear. For most service businesses we start with Search campaigns and add Performance Max once there’s a clear baseline to compare against.',
      },
      {
        q: 'Who owns the Google Ads account?',
        a: 'You do. We set up or work inside an account in your business’s name with manager access, so the data and history stay with you if you ever change agencies.',
      },
    ],
    localAngle:
      'For a business serving one locality, Google Ads can be limited to a small radius around your location, so you only pay for clicks from people close enough to become customers. We also put the area in the ad text and add call and location assets, so the ad reads as a nearby business rather than a citywide one.',
    related: ['performance-marketing', 'local-seo', 'website-development', 'marketing-automation'],
  },

  'meta-ads': {
    slug: 'meta-ads',
    name: 'Meta ads',
    title: 'Meta Ads',
    agencyNoun: 'Meta ads agency',
    group: 'Marketing & Visibility',
    summary:
      'Facebook and Instagram ads that bring leads and sales – audience setup, creative testing and lead forms tied to your WhatsApp or CRM.',
    intro:
      'Meta ads run on Facebook and Instagram from one Ads Manager account, and can send people straight into a WhatsApp chat or an instant lead form. Unlike Google, people aren’t searching for you – the ads reach them while they scroll, based on their location, interests and behaviour. That makes Meta strong for creating demand: launches, offers, events and products people don’t yet know they want.',
    whyItMatters:
      'Boosting posts from the app gives you little control over objectives and audiences, and the same creative running for months stops working as people tune it out. Without tracking and fast follow-up, cheap leads turn into numbers that never answer the phone.',
    deliverables: [
      {
        title: 'Pixel and Conversions API',
        text: 'Meta Pixel and Conversions API set up so Meta can see which ads produce real leads and purchases.',
      },
      {
        title: 'Campaign structure',
        text: 'Campaigns built around one objective each – leads, sales or messages – with sensible audience and budget splits.',
      },
      {
        title: 'Creative testing',
        text: 'Several ad concepts at a time across reels, static images and carousels, with clear tests on hooks and offers.',
      },
      {
        title: 'Lead forms and WhatsApp ads',
        text: 'Instant forms with qualifying questions, or click-to-WhatsApp ads that open a chat with your team.',
      },
      {
        title: 'Lead routing',
        text: 'Leads sent to your CRM, Google Sheet or WhatsApp in real time so your team can call while interest is high.',
      },
      {
        title: 'Weekly optimisation',
        text: 'Pausing tired ads, adding fresh creative and shifting budget toward the ads that bring leads you can close.',
      },
    ],
    process: [
      {
        title: 'Tracking and audiences',
        text: 'We set up the Pixel and Conversions API and build audiences from location, customer lists and site visitors.',
      },
      {
        title: 'Creative brief',
        text: 'We plan three to five ad angles from your offers and common customer objections, and produce the first set of ads.',
      },
      {
        title: 'Launch and learn',
        text: 'We give campaigns time to get through Meta’s learning phase before judging them, then cut the weak ads.',
      },
      {
        title: 'Refresh and scale',
        text: 'We add new creative regularly, raise budgets on ad sets that hit target and feed lead quality back into targeting.',
      },
    ],
    timeline:
      'Lead campaigns usually bring in the first leads within a week. It typically takes 3–6 weeks of testing creative and audiences before cost per lead and lead quality settle.',
    reportsOn: [
      'Cost per lead',
      'Return on ad spend',
      'Qualified lead rate',
      'Cost per WhatsApp conversation',
    ],
    faqs: [
      {
        q: 'Facebook leads are cheap but poor quality. Can that be fixed?',
        a: 'Usually, yes. Qualifying questions, the “higher intent” instant form type and calling leads within minutes all help, and we send lead outcomes back to Meta so it learns which kind of lead you actually want.',
      },
      {
        q: 'Do I need new ads every month?',
        a: 'Yes, regularly. The same people see your ads again and again, and results drop as they tune them out, so we plan a steady supply of new hooks and formats to keep campaigns from stalling.',
      },
      {
        q: 'Facebook or Instagram – which should I use?',
        a: 'You don’t usually have to choose. One campaign can run on both, and Meta shifts budget toward the placements where results are cheapest; we check the breakdown and exclude placements that bring poor leads.',
      },
      {
        q: 'What’s the minimum budget for Meta ads?',
        a: 'Meta lets you start small, but a budget that’s too low takes a long time to gather enough results to optimise. We suggest a starting budget based on your cost-per-lead goal and lead volume, and ad spend is paid directly to Meta.',
      },
    ],
    localAngle:
      'Meta ads can be set to a tight radius around your location, so a business serving one neighbourhood reaches residents and people who work nearby without paying for the rest of the city. Ads that show your storefront, your team or a familiar local spot also feel more relevant to nearby viewers than generic stock images.',
    related: ['performance-marketing', 'ugc', 'video-production', 'whatsapp-automation'],
  },

  'performance-marketing': {
    slug: 'performance-marketing',
    name: 'performance marketing',
    title: 'Performance Marketing',
    agencyNoun: 'performance marketing agency',
    group: 'Marketing & Visibility',
    summary:
      'Paid campaigns across Google, Meta and more, run against a cost-per-lead or ROAS target and judged on the leads and sales they bring.',
    intro:
      'Performance marketing means running paid campaigns where every rupee is measured against a business result – a lead, a booking or a sale. We plan the channel mix across Google Ads, Meta ads and others such as YouTube or LinkedIn, set a target cost per lead or return on ad spend, and move budget toward whatever hits it. The focus is the whole path from ad to landing page to follow-up, not one platform’s dashboard.',
    whyItMatters:
      'When Google and Meta are run separately, each platform claims credit for the same customers and nobody can say what a lead really costs. Without one target and one source of truth, budgets get set by habit rather than by what brings in revenue.',
    deliverables: [
      {
        title: 'Target and budget plan',
        text: 'An agreed cost-per-lead or ROAS target, with the monthly budget split across channels.',
      },
      {
        title: 'Cross-channel tracking',
        text: 'GA4, Tag Manager, platform pixels and UTM rules, so every lead is tied to the campaign that brought it.',
      },
      {
        title: 'Channel campaigns',
        text: 'Campaigns on Google, Meta and other platforms where your buyers spend time, run by one team.',
      },
      {
        title: 'Landing page tests',
        text: 'Fast, focused pages for each campaign, tested against each other to raise the conversion rate.',
      },
      {
        title: 'CRM feedback loop',
        text: 'Lead outcomes from your CRM or sales sheet fed back so campaigns optimise for customers, not form fills.',
      },
      {
        title: 'One weekly report',
        text: 'Spend, leads, cost per lead and revenue across every channel, in one place.',
      },
    ],
    process: [
      {
        title: 'Work out the numbers',
        text: 'We calculate what a lead or sale is worth to you and set the target the campaigns must hit.',
      },
      {
        title: 'Fix tracking and baseline',
        text: 'We repair tracking across all channels and measure current results before changing anything.',
      },
      {
        title: 'Test across channels',
        text: 'We run controlled campaigns on two or three channels to see which brings leads at the target cost.',
      },
      {
        title: 'Reallocate weekly',
        text: 'Budget moves toward the channels and campaigns beating the target, and away from the ones that aren’t.',
      },
    ],
    timeline:
      'Leads usually start coming in during the first 1–2 weeks. Reaching a stable cost per lead across channels typically takes 6–12 weeks, depending on budget and how quickly your team reports lead outcomes.',
    reportsOn: [
      'Blended cost per lead',
      'Return on ad spend',
      'Cost per acquisition',
      'Revenue by channel',
    ],
    faqs: [
      {
        q: 'How is performance marketing different from just running ads?',
        a: 'Running ads means managing a platform. Performance marketing means managing a target – we’re judged on cost per lead or sale across every channel, and we’ll cut a channel that misses it, even if its own dashboard looks good.',
      },
      {
        q: 'What ROAS should I expect?',
        a: 'It depends on your margins, price point and category, so we don’t quote a number before seeing your data. We work backwards from your margins to the ROAS you need to be profitable, then report honestly on how close the campaigns get.',
      },
      {
        q: 'Do I need a big budget to start?',
        a: 'You need enough to gather meaningful data on at least one channel within a month. With a smaller budget we start with the single channel most likely to work for your business and add others once it’s profitable.',
      },
      {
        q: 'What do you need from our sales team?',
        a: 'Mainly feedback on lead quality – which leads were reached, qualified and closed. Even a shared sheet updated weekly lets us optimise for real customers instead of cheap form fills.',
      },
    ],
    localAngle:
      'For a business that serves one neighbourhood, the cost-per-lead target has to allow for a small, fixed audience – the same people see your ads often, so creative needs refreshing sooner and budgets reach a natural ceiling. We set a radius that matches how far customers will travel and use search, Maps and social together to cover that area without overspending.',
    related: ['google-ads', 'meta-ads', 'marketing-automation', 'ugc'],
  },

  'ai-search-visibility': {
    slug: 'ai-search-visibility',
    name: 'AI search visibility',
    title: 'AI Search Visibility',
    agencyNoun: 'AI search optimisation agency',
    group: 'Marketing & Visibility',
    summary:
      'Help ChatGPT, Gemini, Perplexity and Google AI Overviews find, understand and recommend your business when people ask for options.',
    intro:
      'More people now ask ChatGPT, Gemini, Perplexity or Google’s AI Overviews questions like “which interior designer should I hire for a 2BHK?”. These tools build answers from web pages, reviews, directories and forum discussions, and they name or cite the businesses they can find clear, consistent information about. AI search visibility is the work of making your business one of those sources.',
    whyItMatters:
      'If the information about your business online is thin, inconsistent or buried, AI tools either leave you out or describe you wrongly – and the person asking may never look at a search results page at all. Competitors who appear in comparison articles, reviews and directories get named instead.',
    deliverables: [
      {
        title: 'AI visibility check',
        text: 'A set of buyer questions asked in ChatGPT, Gemini, Perplexity and Google, recording who gets mentioned and cited.',
      },
      {
        title: 'Consistent business facts',
        text: 'Your name, services, locations and key facts made consistent across your site, Business Profile, directories and social profiles.',
      },
      {
        title: 'Answer-ready pages',
        text: 'Clear pages and FAQs that state who you serve, what you offer and how you differ, in plain, quotable sentences.',
      },
      {
        title: 'Structured data',
        text: 'Schema markup for your organisation, services, locations and FAQs so machines can read the facts on your site.',
      },
      {
        title: 'Third-party mentions',
        text: 'Work to get you listed in the comparison articles, directories and industry roundups that AI answers draw on.',
      },
      {
        title: 'Crawler access check',
        text: 'Making sure robots.txt and your hosting don’t block the crawlers that AI search tools rely on.',
      },
    ],
    process: [
      {
        title: 'Prompt research',
        text: 'We list the questions your buyers ask AI tools and test where you appear in the answers today.',
      },
      {
        title: 'Source mapping',
        text: 'We find which websites, reviews and listings those answers are drawing on for your category.',
      },
      {
        title: 'Fix and publish',
        text: 'We correct inconsistent facts, add answer-ready content to your site and work on the outside sources that matter.',
      },
      {
        title: 'Re-test monthly',
        text: 'We run the same prompts each month and track mentions, descriptions and citations over time.',
      },
    ],
    timeline:
      'Tools that search the web live, such as Perplexity and Google AI Overviews, can reflect changes within weeks of pages being indexed. Answers that lean on a model’s training data change more slowly, so plan on 3–6 months to see a consistent shift.',
    reportsOn: [
      'Mentions in AI answers',
      'Citations to your website',
      'Share of prompts you appear in',
      'Visits from AI tools',
    ],
    faqs: [
      {
        q: 'Is this different from SEO?',
        a: 'It overlaps a lot – AI tools often draw on pages that already rank well, so strong SEO helps. The difference is that AI answers also lean on reviews, directories, forums and comparison articles, so the work goes well beyond your own website.',
      },
      {
        q: 'Can you get ChatGPT to recommend my business?',
        a: 'No one can guarantee that – these tools decide their own answers, and the answers change often. What we can do is make sure accurate, consistent information about you exists in the places they read, which improves your chances of being included.',
      },
      {
        q: 'How do you measure results?',
        a: 'We track a fixed set of buyer questions across ChatGPT, Gemini, Perplexity and Google AI Overviews each month, recording whether you’re mentioned, how you’re described and whether your site is cited. We also watch your analytics for visits that come from AI tools.',
      },
      {
        q: 'An AI tool says something wrong about my business. Can it be fixed?',
        a: 'Usually by fixing the source. Wrong answers often come from an outdated listing, an old article or details that differ across sites, so we find and correct those sources and use the tools’ own feedback options where they exist.',
      },
    ],
    localAngle:
      'When someone asks an AI tool for a recommendation in a specific neighbourhood, it tends to draw on Maps listings, reviews and local directories that mention the area. Making sure those sources clearly tie your business to this locality – with the same name, address and services everywhere – gives AI answers the details they need to include you.',
    related: ['seo', 'local-seo', 'google-business-profile', 'content-marketing'],
  },

  'digital-marketing': {
    slug: 'digital-marketing',
    name: 'digital marketing',
    title: 'Digital Marketing',
    agencyNoun: 'digital marketing agency',
    group: 'Marketing & Visibility',
    summary:
      'One monthly digital marketing plan – SEO, Google and Meta ads, social media and a single report, run together by one team.',
    intro:
      'Digital marketing, as we run it, is one monthly retainer that covers the whole online side of your business – search, Google Maps, Google and Meta ads, social media and the reporting that ties them together. Instead of a separate freelancer for each channel, one team plans the month, decides where the effort and ad budget go, and makes sure your ads, posts and website all say the same thing. You approve one plan and deal with one point of contact.',
    whyItMatters:
      'When SEO, ads and social media sit with different people, nobody owns the whole picture – an ad promotes an offer the website never mentions, and the Instagram page goes quiet in the week a campaign launches. The owner ends up coordinating vendors and comparing reports that don’t match, which is the work they wanted to hand over in the first place.',
    deliverables: [
      {
        title: 'Full digital audit',
        text: 'A review of your website, Google Business Profile, ad accounts and social pages – what each one brings in today and where enquiries slip away.',
      },
      {
        title: 'Channel plan',
        text: 'A written plan of which channels run first, the job each one does and how the monthly ad budget is shared between them.',
      },
      {
        title: 'Search and Maps upkeep',
        text: 'Monthly SEO fixes and new pages, plus Google Business Profile posts, photos and review replies, handled inside the same plan.',
      },
      {
        title: 'Google and Meta campaigns',
        text: 'Search, Facebook and Instagram campaigns managed by the same team that writes your posts and pages, so the offer matches everywhere.',
      },
      {
        title: 'Social media calendar',
        text: 'A monthly set of posts and reels for your main platforms, timed around the offers and launches your ads are pushing.',
      },
      {
        title: 'One report, one review call',
        text: 'Enquiries, spend and results from every channel in a single report, walked through on a monthly call that ends with next month’s decisions.',
      },
    ],
    process: [
      {
        title: 'Audit every channel',
        text: 'We go through each channel you already use, add tracking where it’s missing and note what each one brings in today.',
      },
      {
        title: 'Choose where to start',
        text: 'We agree the goals for the next quarter and start with the two or three channels closest to how your customers already buy.',
      },
      {
        title: 'Run one calendar',
        text: 'Ads, posts, SEO tasks and offers sit in one shared monthly calendar, so every channel carries the same message at the same time.',
      },
      {
        title: 'Review and add channels',
        text: 'Each month we compare the channels side by side, cut what isn’t pulling its weight and add the next channel once the first ones are steady.',
      },
    ],
    timeline:
      'Ads can bring enquiries within the first few weeks, while SEO, Maps and organic social build more slowly over 3–6 months. The clearest picture of what the combined plan is doing usually comes at the end of the first quarter.',
    reportsOn: [
      'Enquiries by channel',
      'Cost per enquiry from ads',
      'Search and Maps visibility',
      'Social reach and profile visits',
    ],
    faqs: [
      {
        q: 'What does a digital marketing retainer include?',
        a: 'A typical plan covers SEO and Google Business Profile upkeep, Google and Meta ad management, a monthly social media calendar and one combined report. The exact scope is agreed in writing at the start, so you know which channels are covered and how much work goes into each.',
      },
      {
        q: 'How is this different from performance marketing?',
        a: 'Performance marketing covers paid campaigns only and is judged on cost per lead or return on ad spend. A digital marketing retainer also runs the unpaid channels – search, Maps and social – which take longer to build but keep bringing customers in during the months your ad budget is lower.',
      },
      {
        q: 'Do we need every channel from day one?',
        a: 'No. Switching everything on at once usually spreads the budget and the team’s attention too thin for any channel to work properly, so we start with the channels that suit how your customers buy and add the rest in stages.',
      },
      {
        q: 'Is ad spend part of the monthly fee?',
        a: 'No. Ad budgets are paid directly to Google and Meta from accounts in your business’s name, separate from the retainer, so you can always see what went to the platforms and what went to us.',
      },
    ],
    localAngle:
      'For a business serving one neighbourhood, a combined plan means the same local message shows up in several places at once – the Maps listing, a short-radius ad, the Instagram page and an area page on the website. We size the plan to the streets you can actually serve, so the budget reaches nearby customers in several ways instead of reaching the whole city once.',
    related: ['seo', 'performance-marketing', 'social-media-management', 'website-design'],
  },

  'content-marketing': {
    slug: 'content-marketing',
    name: 'content marketing',
    title: 'Content Marketing',
    agencyNoun: 'content marketing agency',
    group: 'Marketing & Visibility',
    summary:
      'Blogs, guides, page copy and newsletters that answer your customers’ questions, rank in Google and get quoted in AI answers.',
    intro:
      'Content marketing is the writing and publishing programme behind your website – blog posts, buying guides, service and landing-page copy, FAQs, case-study write-ups and email newsletters. Each piece answers a question your customers already ask, using real detail from your business, so it can rank in Google, be quoted in AI answers and be forwarded to a lead who is still deciding. We plan the topics, interview your team for the substance, then write, edit and publish.',
    whyItMatters:
      'Buyers arrive with questions – cost, process, timelines, what can go wrong – and if your site doesn’t answer them, they read a competitor’s guide or a marketplace listing instead. Articles written only to fill a keyword list, with nothing a customer couldn’t read elsewhere, struggle to rank and give your sales team nothing worth sending.',
    deliverables: [
      {
        title: 'Question research',
        text: 'The questions buyers ask at each stage, gathered from search data, reviews, sales calls and the enquiries in your WhatsApp and inbox.',
      },
      {
        title: 'Editorial calendar',
        text: 'A month-by-month plan of what gets written, who it’s for, the search it targets and where it will be shared.',
      },
      {
        title: 'Expert interviews',
        text: 'Short calls with you or your team to capture the examples, opinions and price ranges only your business can give.',
      },
      {
        title: 'Guides and articles',
        text: 'In-depth pieces on costs, options, process and mistakes to avoid, written for people who are still comparing.',
      },
      {
        title: 'Sales page copy',
        text: 'Service, location and landing-page copy that sets out the offer, the proof and the next step in the order buyers look for them.',
      },
      {
        title: 'Newsletters and case studies',
        text: 'Email newsletters to past enquiries and customers, and write-ups of real projects – with the client’s permission – that sales can share.',
      },
    ],
    process: [
      {
        title: 'Collect the questions',
        text: 'We pull questions from Search Console, keyword tools, reviews and your sales team, and group them by how close the buyer is to deciding.',
      },
      {
        title: 'Plan the calendar',
        text: 'We pick the topics most likely to lead to enquiries, choose a format for each and agree a publishing rhythm your team can support.',
      },
      {
        title: 'Interview, write, check',
        text: 'Each piece starts with a short interview, is drafted and edited by us, and goes to you for a fact check before it’s published.',
      },
      {
        title: 'Publish and refresh',
        text: 'We publish with internal links and schema, share each piece by email and social, and update older articles when rankings slip or facts change.',
      },
    ],
    timeline:
      'A new article can be indexed within days or weeks, but most take 3–6 months to settle into steady rankings, and a growing library can keep adding visits beyond that. Rewritten service pages and newsletters can show in enquiries sooner, because they reach people who are already looking.',
    reportsOn: [
      'Organic visits to content',
      'Rankings for target questions',
      'Enquiries that started on a content page',
      'Newsletter clicks and replies',
    ],
    faqs: [
      {
        q: 'How is content marketing different from SEO?',
        a: 'SEO covers the technical health of your site, the keyword strategy and links. Content marketing is the writing itself – the guides, pages and newsletters SEO points at – and the two work together, because a well-built site still needs something worth ranking.',
      },
      {
        q: 'How often should we publish?',
        a: 'Steady beats frequent. Two or three well-researched pieces a month, kept up for a year, tend to do more than a burst of short posts that stops after a quarter – and updating a strong older article counts as publishing too.',
      },
      {
        q: 'Can’t AI tools write this for us?',
        a: 'They can produce a draft quickly, but a draft built from what’s already online adds nothing a customer hasn’t seen. Google’s guidance judges content on whether it’s helpful and original rather than how it was produced, so the experience and detail from your own business is what makes a piece worth ranking.',
      },
      {
        q: 'Who checks the facts?',
        a: 'You do, before anything goes live. We write from interviews and your materials, flag every claim that needs confirming – prices, timelines, medical or legal points – and publish only after your sign-off.',
      },
    ],
    localAngle:
      'For a business serving one neighbourhood, useful content is local in its detail – the nearby areas you cover, parking and timings, and the questions customers ask at the counter or on WhatsApp. A handful of pages and guides built on those questions serves nearby searchers better than a stream of citywide articles competing with every business in the city.',
    related: ['seo', 'ai-search-visibility', 'website-design', 'marketing-automation'],
  },

  // ---------- Social & Personal Brand ----------
  'social-media-management': {
    slug: 'social-media-management',
    name: 'social media management',
    title: 'Social Media Management',
    agencyNoun: 'social media marketing agency',
    group: 'Social & Personal Brand',
    summary:
      'Monthly Instagram, Facebook and LinkedIn management – content calendar, reels, design, captions, posting and replies to comments and DMs.',
    intro:
      'Social media management covers planning, creating and posting content on your brand’s Instagram, Facebook, LinkedIn and YouTube, plus replying to comments and messages. We plan a monthly calendar around your business goals, shoot and design the posts, write the captions and publish on schedule. Your pages stay active without your team having to chase it.',
    whyItMatters:
      'Customers check your Instagram before they visit, buy or book, and a page that last posted months ago makes people wonder whether you’re still open. Posting without a plan also wastes time – random content gets little reach and doesn’t move anyone closer to buying.',
    deliverables: [
      {
        title: 'Monthly content calendar',
        text: 'A plan of every post for the month, shared for your approval before anything goes live.',
      },
      {
        title: 'Reels and short video',
        text: 'Scripted, shot and edited reels made for Instagram and YouTube Shorts.',
      },
      {
        title: 'Posts and carousels',
        text: 'Static posts and carousels designed in your brand colours, fonts and style.',
      },
      {
        title: 'Captions and hashtags',
        text: 'Captions written in your brand’s voice, with relevant hashtags and a clear next step for the reader.',
      },
      {
        title: 'Comment and DM replies',
        text: 'Replies to comments and messages within agreed hours, with enquiries passed straight to your team.',
      },
      {
        title: 'Monthly insights report',
        text: 'What worked, what didn’t and what changes next month, based on reach, saves, shares and enquiries.',
      },
    ],
    process: [
      {
        title: 'Brand and page audit',
        text: 'We review your current pages, competitors and audience, and agree tone, content pillars and goals.',
      },
      {
        title: 'Plan the month',
        text: 'We build the content calendar and shoot list and get your sign-off.',
      },
      {
        title: 'Shoot in batches',
        text: 'We shoot reels and photos in planned sessions and design the rest of the month’s posts.',
      },
      {
        title: 'Publish and review',
        text: 'We post on schedule, handle comments and DMs, and shape the next month from the numbers.',
      },
    ],
    timeline:
      'The first month goes into setup, shooting and finding the formats that suit your brand. Reach and follower growth usually build gradually over 3–6 months of consistent posting.',
    reportsOn: ['Reach', 'Engagement rate', 'Profile visits and link clicks', 'DM enquiries'],
    faqs: [
      {
        q: 'How many posts a month do I need?',
        a: 'It depends on your goals and how much there is to show, but consistency matters more than volume. A realistic starting point for many businesses is three or four posts a week, mostly reels, plus regular stories.',
      },
      {
        q: 'Do you come to our location to shoot?',
        a: 'Yes. Reels and photos of your actual space, team and products feel far more real than stock content, so we plan shoot days at your location.',
      },
      {
        q: 'Will social media bring me leads?',
        a: 'It can, especially with a clear offer and an easy way to enquire, like a WhatsApp link in the bio. Organic social mostly builds trust and recall, so for predictable lead volume we usually pair it with Meta ads.',
      },
      {
        q: 'Do I have to approve every post?',
        a: 'You approve the monthly calendar and can review posts before they go live. Once the tone is settled, you can choose to approve just the calendar.',
      },
    ],
    localAngle:
      'For a business serving one neighbourhood, social media works when it feels local – content featuring your space, your regulars and nearby spots people recognise. Location tags, local hashtags and collab posts with businesses down the road help your content reach people who can actually walk in.',
    related: ['meta-ads', 'video-production', 'instagram-marketing', 'influencer-marketing'],
  },

  'instagram-marketing': {
    slug: 'instagram-marketing',
    name: 'Instagram marketing',
    title: 'Instagram Marketing',
    agencyNoun: 'Instagram marketing agency',
    group: 'Social & Personal Brand',
    summary:
      'Instagram growth for your business – profile and highlights, a reels-first calendar, stories, collabs, DM replies and Instagram ads.',
    intro:
      'Instagram marketing focuses on one platform and works every part of it – the profile and highlights people check first, reels that reach new viewers, stories for the people who already follow you, collaborations with other accounts and the DMs where enquiries arrive. We plan a reels-first calendar, shoot and edit the content, set up replies for the messages it brings in and add Instagram-placement ads when a strong reel deserves more reach.',
    whyItMatters:
      'On Instagram, enquiries arrive as DMs, comments and story replies, and a message left on “seen” for a day is often a customer who has already moved on to the next account. Reels resized from other platforms, with no hook in the first seconds and no reason to save or share, seldom reach anyone beyond your existing followers.',
    deliverables: [
      {
        title: 'Profile and highlights',
        text: 'A rewritten bio and name field, pinned posts, and highlights for services, prices, reviews and location, so a first visit answers the usual questions.',
      },
      {
        title: 'Reels-first calendar',
        text: 'A monthly plan led by reels, with hooks, scripts, shoots and vertical edits, plus carousels where a topic needs more explaining.',
      },
      {
        title: 'Stories on most days',
        text: 'Polls, question boxes, behind-the-scenes clips and offer reminders that keep you in followers’ story tray between posts.',
      },
      {
        title: 'Collab posts',
        text: 'Joint reels with nearby businesses, partner brands and creators, published as Collab posts so they show on both accounts.',
      },
      {
        title: 'DM replies and lead capture',
        text: 'Saved replies for common questions, comment-to-DM flows that send a price list or booking link, and serious enquiries passed to your team.',
      },
      {
        title: 'Instagram-placement ads',
        text: 'Reel and story ads limited to Instagram placements, putting budget behind the posts and offers already working organically.',
      },
    ],
    process: [
      {
        title: 'Audit the account',
        text: 'We study your insights, your strongest and weakest posts, and the accounts your customers already follow in your category.',
      },
      {
        title: 'Fix the profile first',
        text: 'We rewrite the bio and set up highlights and DM replies, so new viewers who arrive from reels have a reason to follow or message.',
      },
      {
        title: 'Shoot and post',
        text: 'We shoot reels in monthly batches, post them on a steady rhythm and run stories around them on most days.',
      },
      {
        title: 'Learn and amplify',
        text: 'We look at which reels get watched through, shared and saved, make more like them and put a small ad budget behind the strongest.',
      },
    ],
    timeline:
      'A clearer profile and faster DM replies help from the first week, and Instagram ads can add reach within days. Organic growth from reels is uneven from one post to the next, so judge it on the trend across three months or more rather than on any single reel.',
    reportsOn: [
      'Reach to non-followers',
      'Reel shares and saves',
      'Profile visits and follows',
      'DM and story-reply enquiries',
    ],
    faqs: [
      {
        q: 'How is this different from social media management or Meta ads?',
        a: 'Social media management keeps all your platforms posted and answered, and Meta ads covers paid campaigns across Facebook and Instagram. Instagram marketing goes deep on one platform – profile, reels, stories, collabs, DMs and Instagram ads planned together – for businesses whose customers mostly find and message them there.',
      },
      {
        q: 'Should we buy followers to look established?',
        a: 'No. Bought followers never book, buy or message, and because they don’t engage, they pull down your engagement rate and make the account look less active to real visitors and to brands you might collaborate with. Buying followers or likes also goes against Instagram’s rules on inauthentic activity.',
      },
      {
        q: 'What should we do with Instagram DMs?',
        a: 'Treat them like phone enquiries – reply quickly, answer the question asked and move serious buyers to a call, a booking link or WhatsApp. We set up saved replies and simple automations for common questions, and agree reply hours with your team.',
      },
      {
        q: 'Do collaborations with other accounts help?',
        a: 'Often, yes. A Collab post appears on both accounts and is shown to both sets of followers, so partnering with a nearby business, supplier or creator whose audience overlaps yours puts you in front of people who already trust them.',
      },
    ],
    localAngle:
      'For a business serving one neighbourhood, a smaller following of people who live or work nearby is worth more than reach across the city, so the profile is built for them – location-tagged reels, a highlight with directions and timings, and story offers for regulars. A small Instagram ad budget aimed at a short radius then shows your strongest reels to nearby people who don’t follow you yet.',
    related: ['social-media-management', 'meta-ads', 'influencer-marketing', 'video-production'],
  },

  'personal-branding': {
    slug: 'personal-branding',
    name: 'personal branding',
    title: 'Personal Branding',
    agencyNoun: 'personal branding agency',
    group: 'Social & Personal Brand',
    summary:
      'Personal branding for founders, doctors and experts – positioning, scripted videos and steady posts on Instagram, YouTube and LinkedIn.',
    intro:
      'Personal branding builds the public reputation of a person rather than a company – a founder, doctor, lawyer, coach or consultant. We help you decide what you want to be known for, then turn your knowledge into regular videos and posts on Instagram, YouTube and LinkedIn. People buy from people they feel they know, and a visible expert gets referrals, speaking invites and enquiries that a logo alone doesn’t.',
    whyItMatters:
      'Most experts have the knowledge but not the time or the system to share it, so they post once in a while and then stop. Meanwhile, less experienced people who show up every week become the names clients recognise and trust.',
    deliverables: [
      {
        title: 'Positioning session',
        text: 'A working session to define your audience, the topics you’ll own and how you want to come across.',
      },
      {
        title: 'Content idea bank',
        text: 'A list of video and post ideas drawn from the questions your clients and patients actually ask.',
      },
      {
        title: 'Scripts and hooks',
        text: 'Short scripts written in your voice, so recording takes minutes rather than hours of planning.',
      },
      {
        title: 'Batch recording sessions',
        text: 'Planned sessions where we record several weeks of videos in one sitting.',
      },
      {
        title: 'Editing and posting',
        text: 'Edited reels, shorts and carousels published to your profiles on a set schedule.',
      },
      {
        title: 'Profile setup',
        text: 'Bio, highlights, banner, featured links and pinned posts arranged to turn profile visitors into enquiries.',
      },
    ],
    process: [
      {
        title: 'Find your angle',
        text: 'We interview you, study your audience and peers, and agree the few topics you’ll be known for.',
      },
      {
        title: 'Build the content bank',
        text: 'We turn your expertise into a list of ideas and write the first month of scripts.',
      },
      {
        title: 'Record in batches',
        text: 'We shoot several weeks of content in one session at your office, clinic or our studio.',
      },
      {
        title: 'Publish and refine',
        text: 'We post, track which topics and formats people respond to, and shape the next batch around them.',
      },
    ],
    timeline:
      'Profiles usually look sharper and more active within the first month. Building a recognisable audience takes consistency, so expect 3–6 months before engagement and inbound enquiries pick up noticeably.',
    reportsOn: [
      'Follower growth',
      'Average views per video',
      'Profile visits',
      'Inbound enquiries and DMs',
    ],
    faqs: [
      {
        q: 'I’m not comfortable on camera. Will this work for me?',
        a: 'Most people aren’t at first. Scripts, a teleprompter and short takes make it much easier, and you can start with carousels or seated talking-head videos while you get used to it.',
      },
      {
        q: 'How much of my time does it take?',
        a: 'Plan for a recording session of a few hours every few weeks, plus a short monthly call to review ideas. We handle the research, scripting, editing and posting.',
      },
      {
        q: 'Which platform should I focus on?',
        a: 'It depends on who you want to reach. LinkedIn suits B2B founders and consultants, Instagram suits doctors, coaches and consumer brands, and YouTube suits people who explain things in depth – we usually start with one main platform and adapt content for the others.',
      },
      {
        q: 'Will this help my business, or just my profile?',
        a: 'Both, if it’s planned that way. Content that shows how you think and work brings people to you, and clear links to your business – a booking page, WhatsApp or website – turn that attention into enquiries.',
      },
    ],
    localAngle:
      'For a professional whose clients come from one neighbourhood – a doctor, lawyer, architect or fitness coach – a personal brand turns local word of mouth into something people can find and check online. Content that answers the questions nearby clients ask, tagged with your practice location, helps people in the area know you before they ever walk in.',
    related: ['linkedin-branding', 'video-production', 'social-media-management', 'photography'],
  },

  'linkedin-branding': {
    slug: 'linkedin-branding',
    name: 'LinkedIn branding',
    title: 'LinkedIn Branding',
    agencyNoun: 'LinkedIn marketing agency',
    group: 'Social & Personal Brand',
    summary:
      'LinkedIn for founders and B2B companies – profile rewrite, ghostwritten posts and a company page that builds trust with buyers.',
    intro:
      'LinkedIn is where B2B buyers, investors, partners and senior hires check who you are before they reply. LinkedIn branding covers the founder’s personal profile and the company page: a clear profile, regular posts written in your voice and steady engagement with the people you want to reach. Posts from people usually travel further on LinkedIn than posts from company pages, so we start with the founder or leadership team.',
    whyItMatters:
      'A half-finished profile and a company page with no recent posts make even a strong business look small or inactive to someone checking you out before a meeting. Without consistent posting, the deals that start with “I’ve been following your posts” go to someone else.',
    deliverables: [
      {
        title: 'Profile rewrite',
        text: 'Headline, About section, experience, Featured section and banner rewritten around who you help and how.',
      },
      {
        title: 'Content strategy',
        text: 'Topics, formats and a posting rhythm tied to the buyers, investors or hires you want to reach.',
      },
      {
        title: 'Ghostwritten posts',
        text: 'Posts drafted from conversations with you, in your voice, and published only after your approval.',
      },
      {
        title: 'Carousels and visuals',
        text: 'Document carousels, simple graphics and short videos designed for the LinkedIn feed.',
      },
      {
        title: 'Company page management',
        text: 'A complete company page with regular updates on work, hiring and news that your team can reshare.',
      },
      {
        title: 'Engagement playbook',
        text: 'Guidance on whose posts to comment on and who to connect with, plus message templates for follow-ups.',
      },
    ],
    process: [
      {
        title: 'Interview and audit',
        text: 'We review your profile and page, study peers in your space and interview you about your expertise and goals.',
      },
      {
        title: 'Rebuild the profile',
        text: 'We rewrite your profile and company page so visitors understand what you do within seconds.',
      },
      {
        title: 'Write and schedule',
        text: 'We draft a month of posts at a time from short recorded calls with you, and schedule them once approved.',
      },
      {
        title: 'Engage and adjust',
        text: 'We track which posts bring profile views, connection requests and conversations, and write more like them.',
      },
    ],
    timeline:
      'A rewritten profile works from day one for anyone who looks you up. Reach and inbound conversations usually build over 3–6 months of posting a few times a week.',
    reportsOn: ['Post impressions', 'Profile views', 'Follower growth', 'Inbound conversations'],
    faqs: [
      {
        q: 'Will the posts sound like me?',
        a: 'They should – each post starts from a conversation with you, using your opinions and your examples. You approve everything before it goes out, and the voice gets closer to yours each month.',
      },
      {
        q: 'Should we post from my profile or the company page?',
        a: 'Both, but the founder’s profile usually reaches more people, because LinkedIn tends to show posts from people more readily than posts from pages. The company page works as the home for case studies, hiring and announcements that your team reshares.',
      },
      {
        q: 'How often should I post on LinkedIn?',
        a: 'Two to four times a week is a rhythm most founders can keep up with help. Consistency over months matters more than one post that happens to go viral.',
      },
      {
        q: 'Can LinkedIn really bring B2B leads?',
        a: 'It can, but rarely from a single post. It works by keeping you visible to the right people, so you’re the name they remember when a need comes up – and the posts give your sales team something useful to share in conversations.',
      },
    ],
    localAngle:
      'For a B2B company serving businesses in one part of the city, LinkedIn lets you reach the decision-makers who work in the offices, factories and business parks around you. Posts about local events, clients and the business community nearby build a reputation within a few kilometres that cold calls rarely manage.',
    related: ['personal-branding', 'pitch-decks', 'video-production', 'marketing-automation'],
  },

  // ---------- UGC & Creator Marketing ----------
  ugc: {
    slug: 'ugc',
    name: 'UGC videos',
    title: 'UGC Videos',
    agencyNoun: 'UGC agency',
    group: 'UGC & Creator Marketing',
    summary:
      'UGC-style videos made with real creators – unboxings, reviews and testimonials for Meta ads, Instagram and product pages.',
    intro:
      'UGC (user-generated content) videos are short, phone-shot videos that look like a real customer talking about your product or service – unboxings, honest reviews, “how I use it” demos and before-and-afters. We brief creators, manage the shoots and edit the videos into ads and organic posts. Because they look like the content people already watch on Instagram, they’re often less likely to be scrolled past than a polished advert.',
    whyItMatters:
      'Paid social burns through creative fast, and polished studio ads are slow and costly to replace every few weeks. Without a steady supply of new, believable videos, ad results drop as audiences tune out the same few ads.',
    deliverables: [
      {
        title: 'Creator sourcing',
        text: 'A shortlist of creators who match your target customer in age, language and look.',
      },
      {
        title: 'Scripts and briefs',
        text: 'Hook options, talking points and shot lists for each creator, written around real customer objections.',
      },
      {
        title: 'Shoot coordination',
        text: 'Sending products, scheduling shoots and handling revisions with each creator.',
      },
      {
        title: 'Hook variations',
        text: 'Several opening hooks for each video, so ads can be tested without reshooting.',
      },
      {
        title: 'Edits for ads',
        text: 'Cuts sized for Reels, Stories and feed, with captions, text overlays and music.',
      },
      {
        title: 'Written usage rights',
        text: 'Clear terms covering where and for how long you can run each video, including as paid ads.',
      },
    ],
    process: [
      {
        title: 'Angle research',
        text: 'We study your reviews, customer questions and competitor ads to find the angles worth testing.',
      },
      {
        title: 'Cast creators',
        text: 'We shortlist creators, share profiles for your approval and agree deliverables and usage rights.',
      },
      {
        title: 'Brief and shoot',
        text: 'Creators film to our brief, and we review the raw footage before editing starts.',
      },
      {
        title: 'Edit and test',
        text: 'We cut several versions with different hooks, hand them over for ads and report which angles perform.',
      },
    ],
    timeline:
      'The first batch of videos is usually ready within 2–3 weeks of approving the brief, depending on product shipping and creator schedules. Ad test results follow within a week or two of launch.',
    reportsOn: ['Hook rate', 'Hold rate', 'Cost per purchase or lead', 'Click-through rate'],
    faqs: [
      {
        q: 'What’s the difference between UGC and influencer marketing?',
        a: 'With influencer marketing you pay for access to a creator’s audience. With UGC you pay for the video itself, which usually runs from your brand’s account or as an ad, so the creator’s follower count matters less than how believable they are on camera.',
      },
      {
        q: 'Are the creators real customers?',
        a: 'They’re real people who use the product for the shoot, but they are paid for the content. We brief them to give honest reactions, and we don’t script false claims or present the videos as unpaid reviews.',
      },
      {
        q: 'Can we use the videos on our website and marketplace listings?',
        a: 'Yes, if the usage rights cover it. We agree where and for how long you can use each video – ads, social, website, Amazon listings – before the shoot, so there are no surprises later.',
      },
      {
        q: 'How many videos should we start with?',
        a: 'Enough to test several angles at once – usually a handful of creators with two or three hook variations each. One or two videos rarely tell you clearly what works.',
      },
    ],
    localAngle:
      'For a business serving one neighbourhood, UGC is most convincing when creators who live nearby film at your shop, clinic or café, so the videos show the real place local viewers can visit. Familiar faces and surroundings make an ad targeted to the area feel more like a neighbour’s recommendation.',
    related: ['meta-ads', 'influencer-marketing', 'performance-marketing', 'video-production'],
  },

  'influencer-marketing': {
    slug: 'influencer-marketing',
    name: 'influencer marketing',
    title: 'Influencer Marketing',
    agencyNoun: 'influencer marketing agency',
    group: 'UGC & Creator Marketing',
    summary:
      'Influencer campaigns with Instagram and YouTube creators – matching, briefs, negotiation, ASCI-compliant disclosure and tracking.',
    intro:
      'Influencer marketing pays creators to feature your brand for their audience on Instagram, YouTube and other platforms. We find creators whose followers match your customers, check that their audience and engagement are genuine, negotiate deliverables, brief them and track what each collaboration brings in. It suits launches, store openings, new menus and products where trust in a familiar face speeds up the decision.',
    whyItMatters:
      'Choosing creators by follower count alone often means paying for inflated or irrelevant audiences, and campaigns without tracking leave you guessing what the money bought. Missing disclosure labels can also break ASCI’s influencer guidelines, which puts both the brand and the creator at risk.',
    deliverables: [
      {
        title: 'Creator shortlist',
        text: 'Creators matched to your audience by location, niche, language and engagement, not just follower count.',
      },
      {
        title: 'Audience vetting',
        text: 'Checks on follower quality, engagement patterns and past brand work before you commit.',
      },
      {
        title: 'Negotiation and agreements',
        text: 'Deliverables, timelines, usage rights and payment terms agreed in writing with each creator.',
      },
      {
        title: 'Creative briefs',
        text: 'Key messages, dos and don’ts and disclosure rules, with room left for the creator’s own style.',
      },
      {
        title: 'Campaign coordination',
        text: 'Product delivery, store visits or event invites, draft approvals and posting schedules.',
      },
      {
        title: 'Tracking and reporting',
        text: 'Unique codes, links and UTM tags for each creator, and a report on reach, clicks and sales.',
      },
    ],
    process: [
      {
        title: 'Define the goal',
        text: 'We agree what the campaign is for – awareness, footfall, sign-ups or sales – and how it will be measured.',
      },
      {
        title: 'Find and vet creators',
        text: 'We shortlist creators, review their audience data and get your approval on the final list.',
      },
      {
        title: 'Brief and approve',
        text: 'Creators get the brief, and we check drafts for accuracy and correct disclosure before anything is posted.',
      },
      {
        title: 'Track and reuse',
        text: 'We track results per creator and, where the rights allow, reuse the strongest content in ads.',
      },
    ],
    timeline:
      'A campaign usually takes 3–5 weeks from brief to content going live, depending on creator availability. Reach shows within days of posting, and the effect on sales or footfall is clearest in the first few weeks.',
    reportsOn: [
      'Reach and views',
      'Engagement rate',
      'Link clicks and code uses',
      'Cost per result',
    ],
    faqs: [
      {
        q: 'Micro or macro influencers – which is better?',
        a: 'For most local and niche businesses, a group of smaller creators with engaged, relevant followers often gives more useful reach for the money than one big name. Larger creators make sense for wide launches where reach matters more than precision.',
      },
      {
        q: 'How do you know if an influencer’s followers are real?',
        a: 'We compare engagement with follower count, read the comments, check audience location and growth history, and ask for screenshots of their audience insights. Sudden follower spikes and generic comments are warning signs.',
      },
      {
        q: 'Do influencers have to label paid posts?',
        a: 'Yes. ASCI’s guidelines require paid or gifted collaborations to be clearly disclosed with a label such as #ad or “Paid partnership”, so we include disclosure in every brief and check it before content goes live.',
      },
      {
        q: 'Can influencers bring footfall to a physical store?',
        a: 'Yes, when the content gives people a reason to visit soon – an opening, a new menu or a limited offer. Walk-in codes or a mention at the counter help you count the visits each creator brought.',
      },
    ],
    localAngle:
      'For a business serving one neighbourhood, the right creators are often local food, lifestyle and parenting pages whose followers live nearby, rather than big citywide names. A few visits from area-focused creators can put a new store, menu or clinic in front of the people most likely to walk in.',
    related: ['ugc', 'social-media-management', 'meta-ads', 'video-production'],
  },

  // ---------- Brand & Design ----------
  'brand-identity': {
    slug: 'brand-identity',
    name: 'brand identity design',
    title: 'Brand Identity Design',
    agencyNoun: 'branding agency',
    group: 'Brand & Design',
    summary:
      'Logo, colours, typography and brand guidelines that make your business look consistent and recognisable everywhere it appears.',
    intro:
      'Brand identity is the visual system people recognise you by – logo, colour palette, typefaces, imagery style and how these come together on signage, packaging, social posts and your website. We start with who you’re for and how you want to be seen, then design the identity. A set of guidelines makes sure everyone who creates something for your brand gets it right.',
    whyItMatters:
      'Without a defined identity, every designer, printer and staff member improvises, and your brand looks different on the shop board, on Instagram and on the invoice. That inconsistency makes a business look smaller and less established than it is, and harder to remember.',
    deliverables: [
      {
        title: 'Brand discovery',
        text: 'A workshop and competitor review to agree your audience, personality and positioning.',
      },
      {
        title: 'Logo suite',
        text: 'A primary logo, secondary versions and an icon mark, tested at small sizes and in a single colour.',
      },
      {
        title: 'Colour and typography',
        text: 'A colour palette with print and screen codes, and font pairings for headings and body text.',
      },
      {
        title: 'Brand guidelines',
        text: 'A guidelines document showing correct and incorrect use of every element, with examples.',
      },
      {
        title: 'Brand applications',
        text: 'Business cards, letterheads, social media templates and signage mock-ups in the new identity.',
      },
      {
        title: 'Master file pack',
        text: 'Final files in AI, SVG, PNG and PDF, organised for printers, developers and future designers.',
      },
    ],
    process: [
      {
        title: 'Discovery',
        text: 'We interview the founders, review competitors and agree what the brand should stand for.',
      },
      {
        title: 'Concepts',
        text: 'We present two or three distinct identity directions, each shown on real-world mock-ups.',
      },
      {
        title: 'Refinement',
        text: 'We develop the chosen direction through agreed rounds of feedback.',
      },
      {
        title: 'Guidelines and handover',
        text: 'We build the guidelines, templates and final file pack, and walk your team through them.',
      },
    ],
    timeline:
      'A full identity usually takes 4–8 weeks, depending on how quickly feedback comes back. A logo refresh without full guidelines can be quicker.',
    reportsOn: [
      'Milestones against timeline',
      'Feedback rounds used',
      'Touchpoints rebranded',
      'Files delivered by format',
    ],
    faqs: [
      {
        q: 'Is a logo the same as a brand identity?',
        a: 'No – the logo is one part of it. A brand identity also includes colours, fonts, imagery style and the rules for using them, so your brand looks the same on a hoarding, a reel or a WhatsApp catalogue.',
      },
      {
        q: 'How many logo options will I get?',
        a: 'We present two or three distinct directions rather than a long list of small variations, each shown on real applications like signage and packaging. It’s easier to choose well between a few thought-through options.',
      },
      {
        q: 'We already have a logo. Can you work with it?',
        a: 'Yes. If your logo already has recognition, we can refine it – cleaner lines, better colours, versions that work at small sizes – and build the rest of the identity around it instead of starting over.',
      },
      {
        q: 'Should I trademark my logo?',
        a: 'If the name and logo matter to your business, it’s worth applying for a trademark with India’s Trade Marks Registry. Ask a trademark attorney to run a search before the design is final, so you don’t invest in a mark someone else already owns.',
      },
    ],
    localAngle:
      'For a business serving one neighbourhood, the identity has to work on the street first – on a shop board seen from across the road, a delivery bag and a WhatsApp profile picture. We design with those everyday local touchpoints in mind, so you stand out from the shops beside you.',
    related: ['packaging-design', 'website-design', 'social-media-management', 'photography'],
  },

  'packaging-design': {
    slug: 'packaging-design',
    name: 'packaging design',
    title: 'Packaging Design',
    agencyNoun: 'packaging design agency',
    group: 'Brand & Design',
    summary:
      'Packaging design for D2C and retail products – boxes, labels, pouches and print-ready dielines that stand out on shelf and online.',
    intro:
      'Packaging design covers the box, label, pouch or jar your product comes in – its structure, graphics, copy and printed information. Packaging has several jobs at once: stand out on a shelf or a marketplace thumbnail, explain the product in seconds, carry the mandatory details and survive printing and shipping. We design with your printer’s specifications and dielines in hand, so what you approve is what gets produced.',
    whyItMatters:
      'Packaging is often the first physical contact a customer has with your brand, and in a crowded aisle or search result it decides whether you’re picked up or passed over. Mistakes in mandatory label details or print files can mean reprinting an entire run.',
    deliverables: [
      {
        title: 'Shelf and category review',
        text: 'A look at competitor packs in stores and on marketplaces to find how your product can stand apart.',
      },
      {
        title: 'Packaging concepts',
        text: 'Two or three design directions shown as 3D mock-ups on your actual pack format.',
      },
      {
        title: 'Label and copy layout',
        text: 'A clear front-of-pack hierarchy and a back-of-pack layout for ingredients, usage and mandatory declarations.',
      },
      {
        title: 'Print-ready dieline artwork',
        text: 'Final artwork built on your printer’s dieline, with bleed, colour settings and finishes marked.',
      },
      {
        title: 'Range system',
        text: 'Rules for flavours, sizes and variants so the range stays consistent as it grows.',
      },
      {
        title: 'Listing images',
        text: 'Clean pack renders for Amazon, Flipkart, quick-commerce apps and your own website.',
      },
    ],
    process: [
      {
        title: 'Brief and specs',
        text: 'We gather product details, pack format, printer specifications and the mandatory label information.',
      },
      {
        title: 'Concepts on shelf',
        text: 'We design concepts and show them as realistic mock-ups beside the competitor packs they’ll sit next to.',
      },
      {
        title: 'Refine and proof',
        text: 'We refine the chosen design and check text, barcodes and colour against the printer’s proof.',
      },
      {
        title: 'Print handover',
        text: 'We deliver final artwork files and answer the printer’s questions before the run.',
      },
    ],
    timeline:
      'Design usually takes 4–8 weeks from brief to print-ready files. Printing, sampling and proofing add time on top, which varies by printer and material.',
    reportsOn: [
      'Concept approvals',
      'Proof corrections before print',
      'SKUs delivered print-ready',
      'Timeline against launch date',
    ],
    faqs: [
      {
        q: 'Can you work with our existing printer?',
        a: 'Yes. We design to your printer’s dieline and specifications and coordinate with them on proofs. If you don’t have a printer yet, we can tell you what to ask for when you get quotes.',
      },
      {
        q: 'What information has to be on the label?',
        a: 'In India, packaged goods generally need the details required under the Legal Metrology rules – such as net quantity, MRP, manufacturer details and a consumer care contact – and food products also need FSSAI labelling. We lay all of it out clearly, but the final content should be confirmed by your compliance team or consultant.',
      },
      {
        q: 'How do I make the pack work online as well as in store?',
        a: 'Online shoppers first see your pack as a small thumbnail, so the brand name and product type must be readable at that size. We test designs at thumbnail scale and create listing images alongside the print files.',
      },
      {
        q: 'Can you redesign our packaging without losing existing customers?',
        a: 'Yes. We keep the cues customers already recognise – colour, logo placement, shape – and improve the rest, so the new pack feels like an upgrade rather than a different product.',
      },
    ],
    localAngle:
      'For a bakery, sweet shop, café or home-grown brand serving one neighbourhood, packaging is how your product travels – boxes and bags carried down the street, gifted to friends and photographed for Instagram. We design packs that look good in hand and on the counter, and carry your name clearly enough that people can find you again.',
    related: ['brand-identity', 'photography', 'ugc', 'website-development'],
  },

  'ui-ux-design': {
    slug: 'ui-ux-design',
    name: 'UI/UX design',
    title: 'UI/UX Design',
    agencyNoun: 'UI/UX design agency',
    group: 'Brand & Design',
    summary:
      'UI/UX design for websites, web apps and mobile apps – user research, wireframes, Figma prototypes and design systems for developers.',
    intro:
      'UI/UX design decides how a website or app works and feels. UX covers the structure – what users need to do, which screens they see and in what order – while UI covers the visual design of every button, form and screen. We design in Figma, test clickable prototypes with real users and give developers a design system they can build from without guessing.',
    whyItMatters:
      'Apps and sites built without proper design often look fine in screenshots but confuse people at the step that matters – sign-up, checkout or booking. Fixing a flow after it’s been coded costs far more than getting it right in a prototype.',
    deliverables: [
      {
        title: 'User research',
        text: 'Interviews, an analytics review and competitor analysis to understand what users are trying to do.',
      },
      {
        title: 'Flows and wireframes',
        text: 'Maps of every key journey and simple low-fidelity layouts for each screen.',
      },
      {
        title: 'Visual design',
        text: 'High-fidelity screens for mobile and desktop in your brand style.',
      },
      {
        title: 'Clickable prototype',
        text: 'A Figma prototype you can tap through and test before any code is written.',
      },
      {
        title: 'Design system',
        text: 'Reusable components, colours, type styles and spacing rules documented for developers.',
      },
      {
        title: 'Developer handover',
        text: 'Annotated Figma files covering states, interactions and edge cases like errors and empty screens.',
      },
    ],
    process: [
      {
        title: 'Research',
        text: 'We talk to users and stakeholders, review analytics and list the tasks the product must make easy.',
      },
      {
        title: 'Structure first',
        text: 'We map the journeys and test the structure with plain wireframes before adding any visual design.',
      },
      {
        title: 'Design and test',
        text: 'We design the screens, link them into a prototype and run usability tests with a few real users.',
      },
      {
        title: 'Hand over and support',
        text: 'We prepare the design system and stay available to developers while they build.',
      },
    ],
    timeline:
      'A focused redesign of a few key flows usually takes 3–6 weeks. A new product with many screens can take 8–12 weeks, mostly depending on scope and how quickly feedback comes back.',
    reportsOn: [
      'Task success in usability tests',
      'Screens designed and approved',
      'Usability issues fixed',
      'Conversion rate after launch',
    ],
    faqs: [
      {
        q: 'What’s the difference between UI and UX?',
        a: 'UX is about how the product works – the steps, the structure and whether people can complete their task easily. UI is how it looks – layout, colours, typography and components – and a good-looking screen with a confusing flow still loses users.',
      },
      {
        q: 'Do you only design, or also build?',
        a: 'Both. We can hand the designs to your developers, or our own web and app team can build what we design, which keeps the handover tight.',
      },
      {
        q: 'Can you improve our existing app without a full redesign?',
        a: 'Yes. We can start with a UX audit to find the screens where users drop off, then redesign those flows first. Many products need fixes in the right places rather than a full overhaul.',
      },
      {
        q: 'Why do you design in Figma?',
        a: 'Figma lets you, your team and your developers review the same live file, leave comments on screens and click through prototypes in a browser without installing anything. It’s also the format most development teams expect to receive.',
      },
    ],
    localAngle:
      'For a business serving one neighbourhood, good UX mostly means making the few things local customers want to do on a phone quick – call, get directions, check timings, book a slot or order. We make those actions the most obvious things on screen, so someone nearby can act in a couple of taps.',
    related: ['website-development', 'web-apps', 'mobile-apps', 'brand-identity'],
  },

  'pitch-decks': {
    slug: 'pitch-decks',
    name: 'pitch decks',
    title: 'Pitch Decks',
    agencyNoun: 'pitch deck design agency',
    group: 'Brand & Design',
    summary:
      'Investor and sales pitch decks – story, structure, copy and design that make your business easy to understand and act on.',
    intro:
      'A pitch deck is the short presentation you use to raise funding or win a client. Investor decks cover the problem, your solution, the market, traction, team and the ask; sales decks walk a buyer from their problem to why you’re the right choice. We work on the story and the words as much as the design, so each slide makes one clear point.',
    whyItMatters:
      'Investors and buyers often skim a deck before deciding whether to take a meeting, and a cluttered or confusing one gets closed early. Good businesses lose meetings because the deck buries the key numbers or tries to say everything at once.',
    deliverables: [
      {
        title: 'Story and structure',
        text: 'A slide-by-slide outline built for your audience – investors, enterprise buyers or partners.',
      },
      {
        title: 'Slide copywriting',
        text: 'Headlines and slide text rewritten so each slide makes one point in plain language.',
      },
      {
        title: 'Charts and diagrams',
        text: 'Clear visuals for market size, traction, unit economics, financials and how your product works.',
      },
      {
        title: 'Custom slide design',
        text: 'A deck designed in your brand style, delivered in PowerPoint, Keynote or Google Slides.',
      },
      {
        title: 'Send and present versions',
        text: 'A detailed version to email ahead of a meeting and a lighter one to present live.',
      },
      {
        title: 'Editable master slides',
        text: 'Templates your team can use to update numbers and add slides without breaking the design.',
      },
    ],
    process: [
      {
        title: 'Brief and materials',
        text: 'We review your current deck, numbers and notes, and talk through who you’re pitching to.',
      },
      {
        title: 'Agree the storyline',
        text: 'We settle the outline and the key message of every slide before any design starts.',
      },
      {
        title: 'Write and design',
        text: 'We write the copy and design the slides, then share a full draft for feedback.',
      },
      {
        title: 'Refine for questions',
        text: 'We refine from your feedback and the questions you expect, and can run through the pitch with you.',
      },
    ],
    timeline:
      'Most decks take 1–3 weeks, depending on how ready the numbers and story are. Redesigning a deck whose storyline is already agreed can be quicker.',
    reportsOn: [
      'Slides delivered',
      'Feedback rounds used',
      'Versions delivered',
      'Meetings booked from the deck',
    ],
    faqs: [
      {
        q: 'How many slides should an investor deck have?',
        a: 'Most investor decks land at around 10–15 main slides, with extra detail in an appendix. The aim is a deck someone can follow without you in the room, then go deeper in the meeting.',
      },
      {
        q: 'Do you write the content or just design it?',
        a: 'Both. Many decks struggle because of the story and wording rather than the visuals, so we work on structure and copy first – you provide the facts and numbers, and we make them clear.',
      },
      {
        q: 'Should the deck include financial projections?',
        a: 'For investor decks, usually yes – a summary of revenue, costs and key assumptions for the next few years. The model itself should come from you or your finance adviser, and we present the numbers clearly and point out where investors are likely to push back.',
      },
      {
        q: 'Can I use the same deck for investors and customers?',
        a: 'It’s better not to. Investors want to know whether the business can grow and return their money, while customers want to know whether you solve their problem, so the order, emphasis and ask are different even when the facts overlap.',
      },
    ],
    localAngle:
      'For a business pitching to clients in one part of the city – a builder presenting to residents, a school meeting parents or a B2B firm selling to companies nearby – a deck that speaks to that local audience lands better than a generic one. We tailor the examples, proof points and maps to the area you serve, so the audience sees you know their neighbourhood.',
    related: ['brand-identity', 'linkedin-branding', 'website-development', 'video-production'],
  },

  // ---------- Web & AI ----------
  'website-design': {
    slug: 'website-design',
    name: 'website design',
    title: 'Website Design',
    agencyNoun: 'website design company',
    group: 'Web & AI',
    summary:
      'Website design that turns visits into enquiries – page structure, mobile-first layouts and well-placed call, form and WhatsApp buttons.',
    intro:
      'Website design decides how your site looks and how it works for a visitor – which pages exist, what goes on each one, the order of the information and what someone sees first on a phone screen. We plan the structure, design every key page for mobile and desktop, and place calls, forms and WhatsApp buttons where visitors are ready to use them. You approve the designs page by page, and your developer or our build team follows them exactly.',
    whyItMatters:
      'Visitors decide within seconds whether a site has what they came for, and a homepage that opens with a slider, a slogan and no clear offer sends them back to the search results. Sites designed on a desktop and squeezed onto phones also bury what mobile visitors want most – the price, the address and a button to call.',
    deliverables: [
      {
        title: 'Site structure and navigation',
        text: 'The list of pages, the menu and the links between them, planned around the services customers look for and the questions they ask.',
      },
      {
        title: 'Wireframes',
        text: 'Plain layouts of the homepage, service pages and contact page that settle the order of information before any styling starts.',
      },
      {
        title: 'Copy hierarchy',
        text: 'The headline, supporting line, proof and call to action for each section, with word counts so the content fits the layout.',
      },
      {
        title: 'Mobile-first page designs',
        text: 'Full-colour designs of every key page in your brand style, drawn for the phone screen first and then widened for desktop.',
      },
      {
        title: 'Conversion elements',
        text: 'Sticky call and WhatsApp buttons, short enquiry forms, reviews, maps and trust signals placed where visitors make their decision.',
      },
      {
        title: 'Build-ready Figma files',
        text: 'Designs with spacing, colours, type styles, image sizes and interaction notes, so the built site matches what you approved.',
      },
    ],
    process: [
      {
        title: 'Study the visitor',
        text: 'We look at your analytics, competitor sites and the searches people use, and list what a visitor must find on each page.',
      },
      {
        title: 'Structure before style',
        text: 'We agree the page list and wireframes first, so content and order are settled before colours and images come in.',
      },
      {
        title: 'Design and click through',
        text: 'We design each key page, link the screens into a clickable prototype and test it on a phone, so you can try the site before it’s built.',
      },
      {
        title: 'Hand over and review the build',
        text: 'We hand the approved files to the developer and check the built pages against the designs before launch.',
      },
    ],
    timeline:
      'Designing a typical business site takes about 2–5 weeks, depending on how many different page layouts it needs and how quickly feedback and content come in. The build follows as a separate stage, and the effect on enquiries can be measured once the new site has had a few weeks of real traffic.',
    reportsOn: [
      'Visit-to-enquiry conversion rate',
      'Call and WhatsApp button clicks',
      'Form starts and completions',
      'Engagement on key pages',
    ],
    faqs: [
      {
        q: 'What’s the difference between website design and website development?',
        a: 'Design decides what the site looks like and how it works for visitors – the pages, layout, content order and calls to action. Development turns those designs into a working site with a CMS, speed work, integrations and hosting, and we can do both or hand our designs to your own developer.',
      },
      {
        q: 'Can you redesign our site without changing the platform?',
        a: 'Usually, yes. WordPress, Shopify and most other platforms can take a new design on the existing setup, and we check what your theme or build allows before designing, so nothing you approve turns out to be impossible to build.',
      },
      {
        q: 'Do you use templates?',
        a: 'Where budget is tight, we can start from a well-made theme, but the page structure, copy order and conversion elements are still planned for your business. A template decides how a site looks – it can’t know what your customers need to see first.',
      },
      {
        q: 'Do we need our content ready before design starts?',
        a: 'Not all of it, but design works far better with real headlines and offers than with placeholder text. We give you a content outline for each page, and can write the copy too if writing is what’s holding things up.',
      },
    ],
    localAngle:
      'For a business serving one neighbourhood, many visitors arrive from a Maps listing or a local search on their phone, already nearby and choosing between two or three options. We design the first mobile screen for that moment – a photo of your actual storefront they’ll recognise on arrival, recent reviews from local customers and one clear button to call or message.',
    related: ['website-development', 'brand-identity', 'content-marketing', 'seo'],
  },

  'website-development': {
    slug: 'website-development',
    name: 'website development',
    title: 'Website Development',
    agencyNoun: 'website development company',
    group: 'Web & AI',
    summary:
      'Fast, mobile-first websites built to bring enquiries – clear service pages, call and WhatsApp buttons, SEO setup and tracking.',
    intro:
      'Website development covers planning, designing and building your business website – the pages, the content structure, the code and the setup behind it. We build sites that load quickly on phones, explain what you do on the first screen and make it easy to call, WhatsApp or fill in a form. Every site goes live with basic SEO, analytics and conversion tracking already in place.',
    whyItMatters:
      'A slow, outdated or confusing site loses people who were ready to enquire – including the ones you paid to bring there through ads. Many business sites also can’t be updated without the original developer, so prices, offers and team details quietly go out of date.',
    deliverables: [
      {
        title: 'Sitemap and content plan',
        text: 'A page structure built around your services and the searches your customers make.',
      },
      {
        title: 'Custom design',
        text: 'A design in your brand style, shown as mobile and desktop mock-ups before the build starts.',
      },
      {
        title: 'Responsive build',
        text: 'A fast site on a platform that suits how you’ll manage it – WordPress, Shopify or a custom build.',
      },
      {
        title: 'Page copy',
        text: 'Clear, specific copy written or edited for each service, so visitors know what you do and what it involves.',
      },
      {
        title: 'SEO and tracking setup',
        text: 'Titles, meta descriptions, schema, sitemap, GA4, Search Console and conversion tracking configured at launch.',
      },
      {
        title: 'Training and handover',
        text: 'A walkthrough so your team can update text, images and blog posts without needing a developer.',
      },
    ],
    process: [
      {
        title: 'Plan the pages',
        text: 'We agree goals, pages and features, and map out the content each page needs.',
      },
      {
        title: 'Design key templates',
        text: 'We design the homepage and main page templates for mobile and desktop, then refine them with you.',
      },
      {
        title: 'Build and test',
        text: 'We develop the site, add content, and test speed, forms and tracking on real phones and browsers.',
      },
      {
        title: 'Launch and train',
        text: 'We set up redirects from any old site, go live, submit the sitemap to Google and train your team.',
      },
    ],
    timeline:
      'A typical business website takes 3–8 weeks, depending on the number of pages and how quickly content is ready. Larger sites, online stores and custom features take longer.',
    reportsOn: [
      'Core Web Vitals',
      'Form, call and WhatsApp enquiries',
      'Conversion rate',
      'Pages indexed by Google',
    ],
    faqs: [
      {
        q: 'WordPress or a custom-built site – which do I need?',
        a: 'WordPress suits most content-led business sites and is easy for your team to update. A custom build makes sense when you need speed, unusual features or integrations a theme can’t handle well, and we recommend based on how you’ll use and update the site.',
      },
      {
        q: 'Will my website be ready for SEO?',
        a: 'Yes. Every site launches with clean URLs, page titles, meta descriptions, schema, an XML sitemap and Search Console set up, while ongoing ranking work – content and links – is a separate SEO engagement.',
      },
      {
        q: 'Will redesigning my website hurt my rankings?',
        a: 'It can if old URLs disappear without redirects. We map every existing page that gets traffic or links and set up 301 redirects, so Google and visitors land on the right new page.',
      },
      {
        q: 'Who owns the website and domain?',
        a: 'You should, and we set it up that way. The domain and hosting are registered in your business’s name, and you get all the admin logins at launch.',
      },
    ],
    localAngle:
      'For a business serving one neighbourhood, the website needs to answer local questions fast – exactly where you are, which areas you cover, your timings and how to reach you – with a map, click-to-call and WhatsApp buttons on every page. A dedicated page for the area, with directions from nearby landmarks, also helps you appear when people search for your service with the locality name.',
    related: ['seo', 'website-design', 'ai-chatbots', 'google-ads'],
  },

  'web-apps': {
    slug: 'web-apps',
    name: 'web app development',
    title: 'Web App Development',
    agencyNoun: 'web app development company',
    group: 'Web & AI',
    summary:
      'Custom web apps – customer portals, booking systems, dashboards and internal tools – planned, designed and built around how you work.',
    intro:
      'A web app is software that runs in the browser – a customer portal, booking system, dealer dashboard, inventory tool or SaaS product. Unlike a website, it has logins, stored data and workflows. We help you define what the first version must do, design the screens and build it, so you can launch, learn from real users and add features from there.',
    whyItMatters:
      'Many businesses run key operations on spreadsheets, WhatsApp groups and off-the-shelf tools that don’t talk to each other, which causes missed bookings, duplicate work and data nobody trusts. Building too much at once is the other common mistake – it delays launch and spends budget on features users may not need.',
    deliverables: [
      {
        title: 'Scope and MVP plan',
        text: 'A written scope listing the features for version one, what can wait and why.',
      },
      {
        title: 'UX and screen design',
        text: 'User flows and screens designed in Figma and approved before development starts.',
      },
      {
        title: 'Front-end and back-end build',
        text: 'A responsive app with user accounts, roles, a database and an admin panel.',
      },
      {
        title: 'System integrations',
        text: 'Connections to payment gateways such as Razorpay, WhatsApp, email, CRMs or your existing systems.',
      },
      {
        title: 'Testing and security',
        text: 'Testing across browsers and devices, role-based access and protection of user data.',
      },
      {
        title: 'Deployment and support',
        text: 'Cloud hosting setup, documentation and a support period after launch.',
      },
    ],
    process: [
      {
        title: 'Discovery and scope',
        text: 'We map your users, workflows and must-have features, and agree a scope for version one.',
      },
      {
        title: 'Design and prototype',
        text: 'We design the key flows and test them as a clickable prototype with the people who will use them.',
      },
      {
        title: 'Build in sprints',
        text: 'We develop in short sprints and show you working features every week or two.',
      },
      {
        title: 'Launch and iterate',
        text: 'We deploy, monitor real use and plan the next set of features from user feedback.',
      },
    ],
    timeline:
      'A focused first version usually takes 8–16 weeks, depending on features and integrations. Complex platforms with many user roles take longer, which is why we scope a smaller first release.',
    reportsOn: ['Features shipped per sprint', 'Active users', 'Uptime and errors', 'Open bugs'],
    faqs: [
      {
        q: 'What’s an MVP and why start there?',
        a: 'An MVP is the smallest version of the product that solves the core problem for real users. Launching it first lets you learn what people actually use before spending on everything else, and gets you to market sooner.',
      },
      {
        q: 'Can a web app replace our spreadsheets and WhatsApp groups?',
        a: 'Often, yes. If your team tracks orders, bookings or leads across sheets and chats, a simple internal tool can put it all in one place with the right access for each person, and we start by mapping how the work flows today.',
      },
      {
        q: 'Should we build a web app or a mobile app first?',
        a: 'For most business tools and early products, a web app is quicker to build and update, and works on phones through the browser. A native mobile app makes sense when you need reliable push notifications, offline use, phone features or daily use by customers.',
      },
      {
        q: 'What happens after launch?',
        a: 'We fix bugs found after launch, monitor performance and can keep building features in planned phases. You also get documentation, so another team can work on the app if you ever need them to.',
      },
    ],
    localAngle:
      'For a business that serves one neighbourhood – a clinic, school, gym or group of outlets – a web app often means online bookings, memberships, fee payments or order tracking for local customers. We keep the customer side simple enough to open from a WhatsApp link on a phone, and build the staff side around how your front desk actually works.',
    related: ['ui-ux-design', 'mobile-apps', 'ai-chatbots', 'marketing-automation'],
  },

  'mobile-apps': {
    slug: 'mobile-apps',
    name: 'mobile app development',
    title: 'Mobile App Development',
    agencyNoun: 'mobile app development company',
    group: 'Web & AI',
    summary:
      'Android and iOS app development – scope, design, build, Play Store and App Store launch, and updates after release.',
    intro:
      'Mobile app development covers planning, designing and building apps for Android and iPhone, then getting them through Google Play and App Store review. Many apps are now built with cross-platform frameworks such as React Native or Flutter, so one codebase runs on both – we recommend this unless the app needs heavy use of native features. We focus on apps people will open again and again: ordering, booking, loyalty, learning and field-team tools.',
    whyItMatters:
      'An app that’s slow, crashes or asks for too much on first open gets uninstalled quickly, and poor store reviews put off new users. Many businesses also build an app when a mobile-friendly website would do, and spend on something customers rarely open.',
    deliverables: [
      {
        title: 'App scope',
        text: 'A clear case for the app, the features for version one and what can wait for later releases.',
      },
      {
        title: 'App screen design',
        text: 'Screens and flows designed and tested as a prototype on real phones before development.',
      },
      {
        title: 'Cross-platform build',
        text: 'One codebase for Android and iOS, with native modules where the app needs them.',
      },
      {
        title: 'Back end and admin panel',
        text: 'The server, database and dashboard your team uses to manage content, orders or users.',
      },
      {
        title: 'Store submission',
        text: 'Play Store and App Store listings, screenshots, privacy details and review submission.',
      },
      {
        title: 'Analytics and crash reporting',
        text: 'Event tracking and crash monitoring, so you can see how the app is used and where it breaks.',
      },
    ],
    process: [
      {
        title: 'Validate the idea',
        text: 'We check what the app must do that a website can’t, and agree what goes in the first release.',
      },
      {
        title: 'Design and prototype',
        text: 'We design the screens and test the main flows on real phones with real users.',
      },
      {
        title: 'Build with test releases',
        text: 'We build in sprints, send test builds to your phone and fix issues before release.',
      },
      {
        title: 'Launch and update',
        text: 'We handle store submission, watch reviews and crash reports, and plan regular updates.',
      },
    ],
    timeline:
      'A focused first version usually takes 10–20 weeks, plus time for store review. New personal Google Play developer accounts also have to run a closed test before public release, so we plan for that early.',
    reportsOn: ['Installs', 'Active users', 'Crash-free sessions', 'Store rating'],
    faqs: [
      {
        q: 'Do I need a mobile app or just a good website?',
        a: 'If customers will use it often – ordering, booking, tracking, learning – or you need push notifications, offline use or phone features like the camera or location, an app makes sense. If they’ll visit once or twice, a fast mobile website usually does the job for less.',
      },
      {
        q: 'Android or iPhone first?',
        a: 'With a cross-platform build you don’t have to choose, because both launch from the same code. If budget forces a choice, Android has a much larger user base in India, but iPhone users can matter more for premium products.',
      },
      {
        q: 'How long does app store approval take?',
        a: 'Apple’s review often takes a day or two, though it can take longer if they ask questions or reject a build, and Google Play review times vary from hours to several days. We prepare privacy details and test logins in advance to avoid delays.',
      },
      {
        q: 'What does it take to keep an app running?',
        a: 'Plan for ongoing costs beyond the build – hosting, Apple’s developer account fee, updates for new Android and iOS versions, and bug fixes. Apps that aren’t updated gradually break as phones and operating systems change.',
      },
    ],
    localAngle:
      'For a business serving one neighbourhood – a supermarket, restaurant, school or gym – an app makes sense when the same local customers order, book or check in again and again. Simple reordering, saved addresses and push notifications about nearby offers turn a one-time download into a habit.',
    related: ['ui-ux-design', 'web-apps', 'marketing-automation', 'whatsapp-automation'],
  },

  'ai-chatbots': {
    slug: 'ai-chatbots',
    name: 'AI chatbots',
    title: 'AI Chatbots',
    agencyNoun: 'AI chatbot development company',
    group: 'Web & AI',
    summary:
      'AI chatbots for your website and WhatsApp that answer questions from your own information, qualify leads and book appointments.',
    intro:
      'An AI chatbot answers customer questions on your website or WhatsApp at any hour, using your own information – services, prices, timings, policies and FAQs. Chatbots built on large language models understand questions written in everyday language, not just fixed menu options. We set them up to collect contact details, qualify the enquiry and hand over to your team when a person is needed.',
    whyItMatters:
      'Enquiries come in after hours and on weekends, and a customer who waits hours for a reply often messages the next business instead. Your team also spends hours answering the same questions about price, location and timings that a well-trained bot could handle.',
    deliverables: [
      {
        title: 'Knowledge base setup',
        text: 'Your services, prices, FAQs and policies organised into the source the bot answers from.',
      },
      {
        title: 'Conversation design',
        text: 'Greeting, qualifying questions and hand-off rules written around your typical enquiries.',
      },
      {
        title: 'Website and WhatsApp setup',
        text: 'The bot installed on your site and connected to your WhatsApp Business number.',
      },
      {
        title: 'Lead capture',
        text: 'Names, numbers and requirements collected and sent to your CRM, Google Sheet or team WhatsApp.',
      },
      {
        title: 'Booking and hand-off',
        text: 'Appointment booking through your calendar, and live handover to a staff member when needed.',
      },
      {
        title: 'Monitoring and retraining',
        text: 'Regular reviews of conversations to fix wrong answers and fill in missing information.',
      },
    ],
    process: [
      {
        title: 'Map the enquiries',
        text: 'We go through your common questions, chats and calls to decide what the bot handles and what needs a person.',
      },
      {
        title: 'Build the knowledge base',
        text: 'We gather and structure your information and set clear limits on what the bot will answer.',
      },
      {
        title: 'Test with real questions',
        text: 'We test against real customer questions, including awkward and off-topic ones, before going live.',
      },
      {
        title: 'Launch and improve',
        text: 'We go live, read the conversation logs and update answers and flows every month.',
      },
    ],
    timeline:
      'A focused website or WhatsApp chatbot usually goes live in 2–4 weeks. WhatsApp deployment also depends on Meta’s business verification and number setup, which can add a few days.',
    reportsOn: [
      'Conversations handled',
      'Leads captured',
      'Hand-offs to staff',
      'Unanswered questions',
    ],
    faqs: [
      {
        q: 'Will the chatbot give wrong answers?',
        a: 'AI chatbots can get things wrong if they’re left to guess, so we limit them to your approved information and set them to hand over when they’re unsure. We also review conversations regularly to catch and fix mistakes.',
      },
      {
        q: 'Can it reply in Kannada or Hindi?',
        a: 'Yes – current AI models can understand and reply in Kannada, Hindi, Tamil and other Indian languages, as well as messages that mix them with English. We test the languages your customers actually use before launch.',
      },
      {
        q: 'Will it replace my staff?',
        a: 'No. It handles the repetitive first questions and collects details, so your staff spend their time on conversations that need a person – complex questions, negotiations and complaints.',
      },
      {
        q: 'Can it connect to my booking system or CRM?',
        a: 'In most cases, yes. Chatbots can send leads to CRMs such as Zoho or HubSpot, to Google Sheets or email, and book slots through Google Calendar or booking tools that offer an API – we check your systems during scoping.',
      },
    ],
    localAngle:
      'For a business serving one neighbourhood, many chatbot questions are local ones – the exact location, parking, which nearby areas you deliver to or visit, and today’s timings. We train the bot on those details so it answers them correctly and sends a map link or booking slot straight away.',
    related: ['whatsapp-automation', 'marketing-automation', 'website-development', 'web-apps'],
  },

  'whatsapp-automation': {
    slug: 'whatsapp-automation',
    name: 'WhatsApp automation',
    title: 'WhatsApp Automation',
    agencyNoun: 'WhatsApp automation agency',
    group: 'Web & AI',
    summary:
      'WhatsApp Business API setup with broadcasts, automated follow-ups, catalogues and a team inbox, so no enquiry or reorder slips through.',
    intro:
      'WhatsApp automation uses the WhatsApp Business Platform (the API) to message customers at scale – broadcasts to opted-in lists, instant replies, order and appointment updates, follow-ups and product catalogues. Unlike the free WhatsApp Business app, the API supports several agents on one number, approved message templates and connections to your website, CRM and ads. We set it up through a Meta business partner platform and build the flows your team needs.',
    whyItMatters:
      'For many Indian customers, WhatsApp is the easiest way to reach a business, but running it from one phone means slow replies, lost chats and no record of who followed up. Sending bulk messages from a regular number can also get it restricted or banned.',
    deliverables: [
      {
        title: 'API setup and verification',
        text: 'Meta business verification, display name approval and your number connected to the WhatsApp Business Platform.',
      },
      {
        title: 'Message templates',
        text: 'Marketing and utility templates written and submitted for Meta’s approval.',
      },
      {
        title: 'Broadcast campaigns',
        text: 'Segmented broadcasts to opted-in customers for offers, launches, reminders and festive timings.',
      },
      {
        title: 'Automated flows',
        text: 'Instant replies, lead qualification, follow-ups, and reminders for abandoned carts or missed appointments.',
      },
      {
        title: 'WhatsApp catalogue',
        text: 'Your products or services set up as a catalogue customers can browse and order from inside the chat.',
      },
      {
        title: 'Shared team inbox',
        text: 'One number answered by several team members, with tags, assignments and full chat history.',
      },
    ],
    process: [
      {
        title: 'Choose and connect',
        text: 'We pick a suitable Meta business partner platform, complete verification and connect your number.',
      },
      {
        title: 'Build opt-ins',
        text: 'We add opt-in points on your website, ads, QR codes and billing counter so your list grows the right way.',
      },
      {
        title: 'Create templates and flows',
        text: 'We write templates, build automated journeys and connect them to your CRM or online store.',
      },
      {
        title: 'Send and refine',
        text: 'We run broadcasts, track replies, blocks and opt-outs, and adjust timing, frequency and content.',
      },
    ],
    timeline:
      'Setup usually takes 1–2 weeks, depending mainly on Meta’s business verification. Template approvals often come through within a day, so the first broadcasts can go out soon after.',
    reportsOn: [
      'Messages delivered and read',
      'Reply rate',
      'Orders or bookings from WhatsApp',
      'Block and opt-out rate',
    ],
    faqs: [
      {
        q: 'What’s the difference between the WhatsApp Business app and the API?',
        a: 'The app is free and works on a phone plus a few linked devices, which suits very small teams. The API runs through a provider platform instead, and allows many agents on one number, automated flows, broadcasts to large opted-in lists and connections to other software.',
      },
      {
        q: 'Does WhatsApp charge for messages?',
        a: 'Yes – Meta charges for template messages by category (marketing, utility or authentication), and rates vary by country. Free-form replies within 24 hours of a customer messaging you are currently free, and all Meta charges are separate from any provider or agency fee.',
      },
      {
        q: 'Can I message anyone who has my number saved?',
        a: 'No. WhatsApp requires customers to opt in before a business messages them. Messaging people who haven’t opted in leads to blocks and reports, which can lower your messaging limits or get the number restricted.',
      },
      {
        q: 'Can I keep my current WhatsApp number?',
        a: 'Usually, yes. An existing number can be moved to the API, and some providers now support using the Business app and the API on the same number, so we check which option suits you before migrating, as chat history is handled differently in each.',
      },
    ],
    localAngle:
      'For a business serving one neighbourhood, WhatsApp is often how regulars already talk to you – orders, bookings and “are you open today?”. Automation turns those chats into a list you can message about local offers, festive timings and new arrivals, with quick replies so nobody nearby waits for an answer.',
    related: ['ai-chatbots', 'marketing-automation', 'meta-ads', 'performance-marketing'],
  },

  'marketing-automation': {
    slug: 'marketing-automation',
    name: 'marketing automation',
    title: 'Marketing Automation',
    agencyNoun: 'marketing automation agency',
    group: 'Web & AI',
    summary:
      'CRM setup, lead routing and automated email and WhatsApp follow-ups, so every lead gets a fast reply and a clear next step.',
    intro:
      'Marketing automation connects the places leads come from – website forms, ads, WhatsApp and calls – to a CRM, then follows up automatically. Each lead is assigned to the right salesperson, gets an instant acknowledgement and receives a planned series of emails or WhatsApp messages until they’re ready to buy. We set up the CRM, build the workflows and make sure your team actually uses them.',
    whyItMatters:
      'Leads that arrive through five channels and land in inboxes, phones and spreadsheets get missed, duplicated or called days late. Without a CRM and follow-up rules you also can’t tell which campaigns bring buyers, so marketing budget follows guesses.',
    deliverables: [
      {
        title: 'CRM setup',
        text: 'A CRM such as Zoho, HubSpot or LeadSquared configured with your pipeline stages, fields and users.',
      },
      {
        title: 'Lead source integration',
        text: 'Website forms, Meta and Google lead forms, WhatsApp and call tracking all feeding into one place.',
      },
      {
        title: 'Lead routing rules',
        text: 'Automatic assignment by service, location or source, with alerts so new leads are called quickly.',
      },
      {
        title: 'Nurture sequences',
        text: 'Email and WhatsApp sequences for new leads, no-shows, quotes sent and past customers.',
      },
      {
        title: 'Lead scoring',
        text: 'Simple scoring based on fit and behaviour, so sales knows who to call first.',
      },
      {
        title: 'Dashboards and training',
        text: 'Pipeline and lead-source reports, plus training so your team keeps the CRM up to date.',
      },
    ],
    process: [
      {
        title: 'Map the funnel',
        text: 'We map every lead source, what happens to a lead today and where leads get lost.',
      },
      {
        title: 'Set up the CRM',
        text: 'We configure the CRM around your real sales stages and import your existing contacts.',
      },
      {
        title: 'Connect and automate',
        text: 'We connect forms, ads and WhatsApp, then build routing, reminders and nurture flows.',
      },
      {
        title: 'Train and tune',
        text: 'We train the team, watch adoption in the first weeks and refine sequences from the results.',
      },
    ],
    timeline:
      'A focused CRM and automation setup usually takes 3–6 weeks. Results from nurture sequences build over the following months as leads move through them.',
    reportsOn: ['Lead response time', 'Leads by source', 'Lead-to-customer rate', 'Pipeline value'],
    faqs: [
      {
        q: 'Which CRM should we use?',
        a: 'It depends on team size, budget and how you sell. Zoho CRM and HubSpot suit many small and mid-sized businesses, while sales-heavy teams in sectors like real estate and education may prefer LeadSquared, which is built for high lead volumes.',
      },
      {
        q: 'Will automated messages feel spammy?',
        a: 'Not if they’re useful and well timed. We write sequences that answer real questions – pricing, process, proof – space them out and stop them as soon as a lead replies or books.',
      },
      {
        q: 'Our sales team won’t use a CRM. What then?',
        a: 'That’s common, and usually because the CRM asks for too much. We keep fields to a minimum, automate what we can and set up the mobile app and WhatsApp alerts so an update takes seconds.',
      },
      {
        q: 'Can this work with the tools we already use?',
        a: 'Usually, yes. Most CRMs connect to Meta and Google lead forms, website forms and WhatsApp providers directly or through tools like Zapier or Make, and we check your current tools before suggesting any changes.',
      },
    ],
    localAngle:
      'For a business serving one neighbourhood, automation keeps local customers coming back – appointment reminders, service-due alerts, festival offers and review requests sent at the right moment. Because customers live close by and are likely to return, a well-kept list of past customers can bring repeat business without extra ad spend.',
    related: ['whatsapp-automation', 'ai-chatbots', 'performance-marketing', 'google-ads'],
  },

  // ---------- Content & Production ----------
  photography: {
    slug: 'photography',
    name: 'photography',
    title: 'Photography',
    agencyNoun: 'commercial photography services',
    group: 'Content & Production',
    summary:
      'Commercial photography for products, food, interiors and teams – planned shoots and edited images ready for ads, websites and marketplaces.',
    intro:
      'Commercial photography covers the images a business uses to sell – product shots for Amazon and your website, food photography for menus and delivery apps, interiors for hotels, clinics and real estate, and portraits and office shots for corporate use. We plan each shoot around where the images will be used. Then we light, style and edit them so they look consistent across every channel.',
    whyItMatters:
      'Customers judge quality from photos before they see the real thing, and dark phone pictures make a good product, dish or space look ordinary. Stock images make you look like everyone else and can mislead customers about what they’re getting.',
    deliverables: [
      {
        title: 'Shot list',
        text: 'Every image needed, with angles, props and the channel each one is for, agreed before the shoot.',
      },
      {
        title: 'Product photography',
        text: 'White-background and styled product images that meet marketplace image requirements.',
      },
      {
        title: 'Food photography',
        text: 'Styled dish and menu shots for Swiggy and Zomato listings, printed menus and social media.',
      },
      {
        title: 'Interiors and spaces',
        text: 'Wide, well-lit images of rooms, showrooms and properties with accurate colour and straight lines.',
      },
      {
        title: 'Corporate portraits',
        text: 'Consistent headshots and team photos for your website, LinkedIn and press use.',
      },
      {
        title: 'Editing and delivery',
        text: 'Colour-corrected, retouched images in the sizes you need for web, print and social.',
      },
    ],
    process: [
      {
        title: 'Brief and shot list',
        text: 'We agree what the images are for, the visual style and the full list of shots.',
      },
      {
        title: 'Pre-production',
        text: 'We arrange props, food styling, models or location access, and plan the lighting.',
      },
      {
        title: 'Shoot',
        text: 'We shoot at your location or in our studio, checking frames with you on screen as we go.',
      },
      {
        title: 'Select and retouch',
        text: 'We pick the strongest frames, retouch them and deliver final images in every size you need.',
      },
    ],
    timeline:
      'Most shoots can be scheduled within 1–2 weeks of agreeing the brief. Edited images are usually delivered within a week of the shoot, depending on the number of images and how much retouching they need.',
    reportsOn: [
      'Images delivered against shot list',
      'Turnaround time',
      'Listing click-through rate',
      'Engagement on posts using new images',
    ],
    faqs: [
      {
        q: 'Can you shoot at our location?',
        a: 'Yes. Food, interiors and corporate shoots usually happen at your premises, and product shoots can happen there or in our studio. We bring the lighting and equipment the shoot needs.',
      },
      {
        q: 'Do you shoot for Amazon and Flipkart?',
        a: 'Yes. Marketplaces have their own image rules – Amazon, for example, requires a pure white background for the main image – so we shoot and edit to each platform’s requirements and add lifestyle and detail shots for the rest of the listing.',
      },
      {
        q: 'How many photos will we get?',
        a: 'That’s agreed in the shot list before the shoot, based on what you need. Planning by use – website banners, listings, social posts – gets you the right images rather than hundreds of similar ones.',
      },
      {
        q: 'Can we use the photos for ads and print?',
        a: 'Yes – we deliver high-resolution files for print alongside web sizes. If the shoot involves models, we agree usage in advance so the images can also run in ads.',
      },
    ],
    localAngle:
      'For a business serving one neighbourhood, real photos of your shopfront, interiors, team and products help nearby customers recognise you on Google Maps, Instagram and delivery apps. One well-planned shoot can refresh your Business Profile, website and social pages with images of the actual place people will visit.',
    related: [
      'video-production',
      'google-business-profile',
      'social-media-management',
      'packaging-design',
    ],
  },

  'video-production': {
    slug: 'video-production',
    name: 'video production',
    title: 'Video Production',
    agencyNoun: 'video production company',
    group: 'Content & Production',
    summary:
      'Video production for reels, ads, brand films and testimonials – scripting, shooting and editing in formats made for Instagram and YouTube.',
    intro:
      'Video production covers everything from a single reel to a full brand film: concept, script, shoot, edit, music, captions and the versions each platform needs. We make short reels and ads for Instagram and YouTube, customer testimonials, product demos, property and space walkthroughs, and longer brand films. Every video starts with where it will run and what it should get people to do.',
    whyItMatters:
      'Instagram and YouTube both push short video heavily, and businesses that only post photos miss much of that reach. Footage shot without a plan often looks fine but says nothing, and ends up unused on a hard drive.',
    deliverables: [
      {
        title: 'Concept and script',
        text: 'Ideas, scripts and opening hooks written for the platform and the audience.',
      },
      {
        title: 'Storyboard and shot list',
        text: 'A plan of every scene, location and shot, so the shoot day runs to time.',
      },
      {
        title: 'Shoot day',
        text: 'Camera, lighting, sound and crew for shoots at your location or in our studio.',
      },
      {
        title: 'Editing and motion graphics',
        text: 'Edited cuts with captions, music, text overlays and simple animation.',
      },
      {
        title: 'Platform versions',
        text: 'Vertical, square and horizontal versions sized for reels, ads, YouTube and your website.',
      },
      {
        title: 'B-roll library',
        text: 'Extra clips of your space, team and products, handed over for future posts and ads.',
      },
    ],
    process: [
      {
        title: 'Brief and concept',
        text: 'We agree the goal, audience and channels, then pitch concepts and hooks.',
      },
      {
        title: 'Pre-production',
        text: 'We finalise scripts, storyboards, locations, people on camera and the shoot schedule.',
      },
      {
        title: 'Shoot',
        text: 'We shoot to the plan and capture extra B-roll for future reels and ads.',
      },
      {
        title: 'Edit and revise',
        text: 'We edit, share drafts for feedback and deliver the final versions for every platform.',
      },
    ],
    timeline:
      'Reels and short ads are usually delivered within a week of the shoot. A brand film with scripting, several locations and motion graphics typically takes 3–6 weeks from brief to final cut.',
    reportsOn: [
      'Views and watch time',
      'Hook rate',
      'Average watch percentage',
      'Clicks or enquiries from video',
    ],
    faqs: [
      {
        q: 'How long should a reel or ad be?',
        a: 'Short – usually under 30 seconds for ads and 15–60 seconds for most reels, with the main point in the first few seconds. Brand films and YouTube videos can run longer, because people choose to watch them.',
      },
      {
        q: 'Is a phone enough, or do we need professional equipment?',
        a: 'For quick, informal reels, a good phone works well and can feel more natural. For brand films, product demos, interiors and anything where sound and lighting matter, professional cameras and audio make a clear difference.',
      },
      {
        q: 'Who writes the script?',
        a: 'We do, after talking to you about the message and the audience. You approve the script before the shoot, and we can adjust lines on the day if something isn’t working.',
      },
      {
        q: 'Can one shoot give us content for a whole month?',
        a: 'Often, yes. With a planned shot list, one shoot day can produce several reels, ad variations, photos and B-roll, as long as the month’s content is planned before the shoot.',
      },
    ],
    localAngle:
      'For a business serving one neighbourhood, videos shot in your actual space – with your team, your regulars and the streets around you – feel familiar to nearby viewers in a way stock-style content can’t. We plan shoots that show what it’s like to visit, so people in the area know what to expect before they walk in.',
    related: ['social-media-management', 'meta-ads', 'ugc', 'drone-shoots'],
  },

  'drone-shoots': {
    slug: 'drone-shoots',
    name: 'drone shoots',
    title: 'Drone Shoots',
    agencyNoun: 'drone shoot services',
    group: 'Content & Production',
    summary:
      'Aerial drone video and photos for real estate, resorts, events and construction – planned within India’s drone rules and edited for use.',
    intro:
      'Drone shoots capture aerial video and photos that show scale, location and surroundings in a way ground cameras can’t – a villa project with its access roads, a resort’s layout, a wedding venue or a construction site’s progress. We plan the flight path and shots in advance and check airspace and permissions. Then we edit the footage into walkthroughs, reels and ad cuts.',
    whyItMatters:
      'For property, hospitality and large events, buyers want to see the setting – what’s around, how big it is, how far the main road is – and ground photos alone can’t show that. Flying without checking airspace zones and site permissions risks a cancelled shoot or legal trouble.',
    deliverables: [
      {
        title: 'Site recce and shot plan',
        text: 'A site visit or map study to plan angles, flight paths and the time of day with the right light.',
      },
      {
        title: 'Airspace and permission check',
        text: 'Checking the location on the Digital Sky airspace map and arranging permission where the zone requires it.',
      },
      {
        title: 'Aerial video',
        text: 'Smooth, stabilised aerial footage in high resolution, including reveals, orbits and fly-throughs.',
      },
      {
        title: 'Aerial photography',
        text: 'High-resolution stills of the property, site or venue from several heights and angles.',
      },
      {
        title: 'Construction progress shoots',
        text: 'Repeat flights from the same points at set intervals to show progress to buyers and investors.',
      },
      {
        title: 'Edited films and reels',
        text: 'Walkthrough films, reels and ad cuts combining aerial and ground footage with music and captions.',
      },
    ],
    process: [
      {
        title: 'Brief and zone check',
        text: 'We confirm the location and the shots you need, and check which airspace zone the site falls in.',
      },
      {
        title: 'Plan and permissions',
        text: 'We plan the flight, get consent from the site owner and apply for any permission the zone needs.',
      },
      {
        title: 'Fly and shoot',
        text: 'We fly in suitable weather and light, often early morning or late afternoon, after a safety check on site.',
      },
      {
        title: 'Edit and deliver',
        text: 'We edit the footage into the formats you need and deliver within the agreed time.',
      },
    ],
    timeline:
      'Shoots in green zones can usually be scheduled within days, weather permitting, while yellow-zone locations need prior permission that adds time. Edited videos are usually delivered within a week of the shoot.',
    reportsOn: [
      'Shots delivered against plan',
      'Turnaround time',
      'Views on aerial reels',
      'Enquiries from listings using aerials',
    ],
    faqs: [
      {
        q: 'Is it legal to fly a drone for a commercial shoot?',
        a: 'Yes, within India’s Drone Rules. Airspace is divided into green zones where no prior permission is needed, yellow zones that need air traffic control permission and red zones that are off-limits without central government approval. Areas around airports and defence land are restricted, so we check every location before confirming a date.',
      },
      {
        q: 'Can you fly over a gated community or event venue?',
        a: 'Only with permission from the property owner or management, and with care around people. For weddings and events, we plan flights over open areas and keep a safe distance from guests.',
      },
      {
        q: 'What happens if it rains or is too windy?',
        a: 'Drones can’t fly safely in rain or strong wind, so we watch the forecast and reschedule if needed. Shoots during the monsoon months need some flexibility on dates.',
      },
      {
        q: 'Can drone footage be used in real estate ads?',
        a: 'Yes, and it’s one of its most common uses – showing the project, its surroundings and how it connects to main roads. Ads for RERA-registered projects also need to show the registration number, and the visuals shouldn’t misrepresent the site or its amenities.',
      },
    ],
    localAngle:
      'For a business serving one neighbourhood, aerial footage shows exactly where you are and what’s around you – the main road, nearby landmarks and how easy it is to reach, which matters most for property projects, schools, hospitals and event venues. Because parts of the city fall in restricted airspace near airports and defence land, we check this location’s zone before confirming a shoot date.',
    related: ['video-production', 'photography', 'meta-ads', 'social-media-management'],
  },
};
