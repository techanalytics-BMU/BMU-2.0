// Industry profiles, part 2 of 3: events and weddings through agriculture
import type { IndustryProfile } from '@/types/pseo';
import type { IndustrySlug } from '../slugs';

export const industriesPart2 = {
  'events-and-weddings': {
    name: 'wedding and event businesses',
    title: 'Events & Weddings',
    marketingLabel: 'Wedding and event marketing',
    businessNoun: 'wedding or events business',
    audience: 'wedding planners, decorators, venues and wedding photographers',
    customers: 'couples, their families and corporate event teams',
    intro:
      'Couples start planning months ahead, and they shortlist planners, decorators, venues and photographers mostly on Instagram and WhatsApp. Each booking is large and happens once, so marketing has to earn the trust of families who have never hired anyone like you before. BMU helps wedding and event businesses in Bengaluru show their real work, reach couples while they’re still shortlisting and turn enquiries into booked dates.',
    challenges: [
      {
        title: 'Customers who buy once',
        text: 'A couple books a planner or a photographer once, so there’s no repeat business to lean on. Every season needs a fresh stream of enquiries, built on referrals and visible proof.',
      },
      {
        title: 'Portfolios that look alike',
        text: 'Mandap setups, floral walls and candid shots start to blur together on Instagram. Couples need to see what sets your work apart – style, scale, budget range and how you run the day.',
      },
      {
        title: 'Enquiries that only ask the price',
        text: 'Many messages just say “package price?” and go quiet. Without questions about the date, guest count and budget, sales time goes to people who were never going to book.',
      },
      {
        title: 'Muhurtham-driven cash flow',
        text: 'Bookings bunch around auspicious dates and leave lean months in between. Corporate events, birthdays and smaller functions can fill the gaps, but only if they’re marketed on their own.',
      },
    ],
    buyerJourney: [
      {
        stage: 'Inspiration',
        text: 'Couples save reels, follow decor and photography pages and collect ideas on Instagram and Pinterest long before they enquire.',
      },
      {
        stage: 'Shortlist & enquire',
        text: 'They search for venues and vendors by area, budget and style, and message a handful on WhatsApp or Instagram for packages.',
      },
      {
        stage: 'Meet & compare',
        text: 'Families visit venues, meet planners, look through full albums and reviews and compare quotes – with parents often having the final say.',
      },
      {
        stage: 'Book & refer',
        text: 'They pay an advance to block the date. A well-run day brings reviews, tagged posts and referrals to friends getting married next.',
      },
    ],
    channels: [
      {
        service: 'instagram-marketing',
        why: 'Instagram is where couples build their vendor shortlist. A profile with highlights for each service, reels of real setups and events, and fast DM replies turns saved posts into enquiries with a date and budget attached.',
      },
      {
        service: 'google-business-profile',
        why: 'Once a family has a shortlist, they look up each venue, planner and decorator by name on Google. A profile with real event photos, capacity and parking details for venues, and recent reviews from couples settles many doubts before the first call.',
      },
      {
        service: 'meta-ads',
        why: 'Instagram and Facebook ads aimed at people in the planning window – by age, location and wedding-related interests – put your real events in front of couples who are still choosing. Lead forms that ask for the date, guest count and budget keep “price?” messages out of your inbox.',
      },
      {
        service: 'local-seo',
        why: 'Searches like “wedding decorators near me”, “banquet hall with parking” and “candid wedding photographer” happen on Google Maps. Ranking there in the areas you serve brings families who want vendors they can meet easily.',
      },
      {
        service: 'video-production',
        why: 'Wedding films, highlight reels and venue walkthroughs show what a photo can’t – how a hall feels when it’s full, how the decor looks lit at night and how calmly your team runs the day. The same footage works in ads, reels and sales meetings.',
      },
      {
        service: 'google-ads',
        why: 'Search ads on “wedding planners in Bengaluru”, “reception venues” or “corporate event organisers” reach families and HR teams who are actively booking. Landing pages with real budget ranges and an enquiry form that asks for the date filter out casual browsers.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Most wedding conversations happen on WhatsApp, often late at night. An instant reply with a brochure and a few qualifying questions, plus reminders for venue visits and payment milestones, keeps enquiries moving without someone glued to the phone.',
      },
      {
        service: 'website-design',
        why: 'A portfolio site with full galleries by event type, starting prices, venue details and a date-first enquiry form gives couples more than an Instagram grid. It also makes a business look established to the parents who are paying.',
      },
      {
        service: 'seo',
        why: 'Pages for each service and event type – haldi and mehendi decor, reception venues, destination weddings, corporate offsites – rank for the specific searches families make while planning. They bring enquiries that don’t stop when the ad budget does.',
      },
      {
        service: 'drone-shoots',
        why: 'Aerial shots of an outdoor venue, a farmhouse wedding or a large decor setup show scale that ground cameras miss. They make strong opening shots for wedding films and venue promotions.',
      },
    ],
    seasonality:
      'Bookings follow the muhurtham calendar rather than one fixed season. In Karnataka, Ashada (around June–July) and Dhanurmasa (mid-December to mid-January) are traditionally avoided for weddings, so the months either side fill up fast – and corporate events add December parties and the offsites companies hold before March.',
    kpis: [
      'Enquiries with date and budget',
      'Venue visits or meetings booked',
      'Cost per booked event',
      'Reviews and referrals',
    ],
    faqs: [
      {
        q: 'How early should we start advertising for the wedding season?',
        a: 'A few months before the season, while couples are still shortlisting. By the time the main muhurtham dates are close, most families have already booked their venue and key vendors.',
      },
      {
        q: 'Should we show our prices online?',
        a: 'A starting range helps – it filters out enquiries that won’t fit and saves both sides time. Detailed packages can wait for a call, once you know the date, guest count and scope.',
      },
      {
        q: 'Is Instagram enough, or do we need Google too?',
        a: 'Instagram shows your style and creates desire; Google catches families who already know what they want and are searching by area or venue type. Most wedding businesses get bookings from both, and Google reviews help close them.',
      },
      {
        q: 'How do we get more referrals from past couples?',
        a: 'Ask at the right moment – just after the album or film is delivered – with a review link and a request to tag you. Featuring real couples, with their consent, gives the next couple the confidence to book.',
      },
    ],
    localAngle:
      'Families like to meet planners and see venues in person, so vendors close to home or to the venue have an edge. Being easy to find on Maps, with real event photos and reviews from nearby weddings, turns that into bookings.',
  },
  automotive: {
    name: 'automotive dealers and service centres',
    title: 'Automotive',
    marketingLabel: 'Automotive marketing',
    businessNoun: 'dealership',
    audience:
      'car and two-wheeler dealerships, used car dealers, service centres and accessories stores',
    customers: 'car and bike buyers, owners due for a service and people upgrading their vehicle',
    intro:
      'Vehicle buyers research online for weeks, then walk into a showroom ready to negotiate. Dealers compete for those test drives with other dealers of the same brand as much as with rival brands, while service centres, used car dealers and accessories stores compete with local garages and online sellers for the same owners. BMU helps automotive businesses in Bengaluru win test drives, service bookings and repeat customers.',
    challenges: [
      {
        title: 'Competing with same-brand dealers',
        text: 'Several dealers of the same brand often target the same city, so leads go to whoever replies fastest with the most attractive offer.',
      },
      {
        title: 'Leads that leak',
        text: 'Leads from the website, the manufacturer’s portal, social media and calls land in different places. Without one system, many are never followed up.',
      },
      {
        title: 'Trust in used vehicles',
        text: 'Used car and bike buyers worry about accident history, odometer readings and paperwork. Dealers who show inspection reports, service records and help with the RC transfer stand apart from classified listings.',
      },
      {
        title: 'Keeping service customers',
        text: 'After the free service period, many owners move to local garages. Keeping them takes reminders and visible value.',
      },
    ],
    buyerJourney: [
      {
        stage: 'Research',
        text: 'Buyers watch reviews and compare models, prices and resale value on CarDekho, BikeWale, YouTube and brand websites.',
      },
      {
        stage: 'Dealer enquiry',
        text: 'They contact a few dealers for the on-road price, offers, exchange value, finance options and waiting period.',
      },
      {
        stage: 'Test drive',
        text: 'They book a test drive or ride – at the nearest showroom or at home – or inspect a used vehicle in person.',
      },
      {
        stage: 'Purchase & service',
        text: 'They negotiate, arrange finance and book; delivery and after-sales service decide whether they return.',
      },
    ],
    channels: [
      {
        service: 'google-ads',
        why: 'Search ads on model, “on-road price” and “test drive” searches in the city reach buyers close to deciding. Fast local landing pages with offers and test-drive booking turn those clicks into showroom visits.',
      },
      {
        service: 'meta-ads',
        why: 'Instagram and Facebook lead ads for test drives, launch events and exchange offers reach likely buyers around the dealership. Instant forms that ask about model and timeline filter out casual browsers.',
      },
      {
        service: 'google-business-profile',
        why: 'Separate, well-managed profiles for the showroom and the service centre bring calls, directions and service bookings. Reviews of the sales and service experience weigh heavily with buyers.',
      },
      {
        service: 'local-seo',
        why: 'Ranking for “car service near me”, “two-wheeler showroom near me”, used-car searches and accessories searches such as “car seat covers” brings buyers and owners who want a dealer or workshop close by.',
      },
      {
        service: 'performance-marketing',
        why: 'A dealership running Google, Meta and the manufacturer’s lead programme at once needs one view of cost per test drive and cost per booking by channel. Moving budget each week towards the campaigns that produce showroom visits – not just form fills – keeps spend honest.',
      },
      {
        service: 'marketing-automation',
        why: 'A CRM that pulls in leads from the manufacturer, website, social media and calls, assigns them to sales consultants and tracks follow-up stops enquiries slipping away.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Test-drive confirmations, quote sharing, finance follow-ups and service reminders on WhatsApp keep buyers and owners engaged with the dealership.',
      },
      {
        service: 'video-production',
        why: 'Walkaround videos, feature explainers, used-car inspection videos and delivery moments give buyers the detail they look for on YouTube and Instagram – from the dealer rather than a reviewer.',
      },
      {
        service: 'social-media-management',
        why: 'Regular posts of deliveries, new arrivals, offers and service tips keep the dealership visible locally and build a community of owners.',
      },
      {
        service: 'website-development',
        why: 'For used car dealers and multi-brand outlets, a website with searchable inventory, prices and photos is the showroom online. For new vehicle dealers, fast offer and booking pages matter most.',
      },
    ],
    seasonality:
      'Sales peak around Navratri, Dasara and Diwali, and around Ugadi and Akshaya Tritiya, when many buyers prefer to take delivery. Year-end offers in December bring another rush, and service and accessories demand rises before the monsoon and long holiday trips.',
    kpis: [
      'Cost per test drive',
      'Lead-to-test-drive rate',
      'Test-drive-to-booking rate',
      'Service bookings',
    ],
    faqs: [
      {
        q: 'Can dealers run their own ads alongside the manufacturer’s?',
        a: 'Yes, but most manufacturers have guidelines for dealer advertising – on logos, offers and keywords. Local campaigns built within those rules focus on what the brand doesn’t cover: your location, your offers and your service.',
      },
      {
        q: 'How do we stop losing leads?',
        a: 'Bring every lead source into one CRM, assign leads automatically and track response times. Speed matters because buyers usually contact several dealers.',
      },
      {
        q: 'How do we keep customers coming back for service?',
        a: 'Timely service reminders on WhatsApp, easy online booking and clear pricing all help. Owners who feel looked after are less likely to switch to a local garage once the free services end.',
      },
      {
        q: 'How do we sell more used vehicles online?',
        a: 'List every vehicle with real photos, the year, kilometres driven, ownership history and price, and take listings down the day they sell. Inspection reports and quick WhatsApp replies win buyers who are comparing many similar listings.',
      },
    ],
    localAngle:
      'Buyers usually visit the nearest dealer of their chosen brand, and owners service where it’s convenient. Strong Maps listings for both showroom and workshop, with good reviews, win buyers and owners in the surrounding area.',
  },
  'electric-vehicles': {
    name: 'electric vehicle businesses',
    title: 'Electric Vehicles',
    marketingLabel: 'EV marketing',
    businessNoun: 'EV business',
    audience: 'EV brands, electric two-wheeler and car dealers, and charging operators',
    customers: 'daily commuters, fleet operators and first-time EV buyers',
    intro:
      'Electric scooters are now a familiar sight on Bengaluru’s commutes, and delivery fleets and families are looking at electric vehicles too – but most buyers still have questions about range, charging and battery life before they commit. EV marketing has to answer those doubts honestly, get people onto a test ride and show them where they’ll charge. BMU works with EV brands, dealers and charging businesses on the content, campaigns and local presence that do that.',
    challenges: [
      {
        title: 'Range and charging doubts',
        text: 'Buyers worry about real-world range, charging time and whether they can charge at home in an apartment. Marketing that skips these questions loses people at the last step.',
      },
      {
        title: 'Explaining the total cost',
        text: 'An EV often costs more upfront than a petrol equivalent and saves money over time. That case needs clear running-cost comparisons, not slogans.',
      },
      {
        title: 'A crowded, fast-changing market',
        text: 'New brands and models launch often, and buyers find it hard to tell an established name from a new one. Service network, warranty and battery terms carry a lot of weight.',
      },
      {
        title: 'Charging needs two audiences',
        text: 'Charging operators have to win the drivers who use their chargers and the apartments, offices and property owners who host them – two very different sales conversations.',
      },
    ],
    buyerJourney: [
      {
        stage: 'Research',
        text: 'Buyers read reviews, watch range tests on YouTube and ask owners in forums and WhatsApp groups about real-world experience.',
      },
      {
        stage: 'Test ride',
        text: 'They book a test ride or drive, often at home or at the nearest experience centre, and check charging options where they live.',
      },
      {
        stage: 'Cost check',
        text: 'They compare the on-road price, running costs, battery warranty and any subsidy or finance offers against a petrol vehicle.',
      },
      {
        stage: 'Buy & charge',
        text: 'They buy and set up home or public charging, and their first months of range and service decide what they tell other people.',
      },
    ],
    channels: [
      {
        service: 'google-ads',
        why: 'Search ads on “electric scooter price”, “EV test ride” and model-comparison searches catch buyers close to deciding. Landing pages that show the on-road price, real range and the nearest experience centre turn those clicks into booked test rides.',
      },
      {
        service: 'content-marketing',
        why: 'Plain explainers on range in city traffic, charging in an apartment, battery warranty and running costs answer what buyers ask before they visit. Sales teams can send the same pieces on WhatsApp when a buyer hesitates.',
      },
      {
        service: 'meta-ads',
        why: 'Instagram and Facebook ads with test-ride offers, owner stories and launch events reach commuters around a showroom or service area. Lead forms that ask about daily distance and charging access help sales teams prioritise.',
      },
      {
        service: 'video-production',
        why: 'Range tests on real routes, charging demos and feature walkthroughs make claims believable. Buyers trust seeing it work more than reading a spec sheet.',
      },
      {
        service: 'google-business-profile',
        why: 'For EV dealers, experience centres and charging stations, a profile with the exact location, charger types, timings and reviews is how people find you on Maps. Charging points in particular get searched by drivers who need one now.',
      },
      {
        service: 'local-seo',
        why: 'Ranking for “EV showroom near me”, “electric scooter service centre” and “EV charging station near me” puts dealers and charging points in front of nearby people who are ready to act.',
      },
      {
        service: 'seo',
        why: 'Model pages, comparison pages and guides to choosing an EV rank through the long research phase buyers go through. Over time they bring people who have already decided to go electric and are choosing which one.',
      },
      {
        service: 'ugc',
        why: 'Owner-style videos – a day of commuting, an overnight charge at home, a weekend trip out of the city – answer doubts in a way brand ads can’t. They also keep creative fresh for paid campaigns.',
      },
      {
        service: 'linkedin-branding',
        why: 'For EV brands and charging operators selling to fleets, apartments and businesses, LinkedIn reaches fleet managers, facility heads and property developers. Posts on deployments, partnerships and charger uptime build the credibility those deals need.',
      },
    ],
    seasonality:
      'Purchases follow the same festival peaks as other vehicles – Navratri, Dasara, Diwali and Ugadi – and changes to subsidies or EV policy can pull demand forward or hold it back. Fuel price increases and major launches also bring spikes in research.',
    kpis: [
      'Cost per test ride booked',
      'Test-ride-to-booking rate',
      'Charger location views and directions',
      'Cost per qualified fleet lead',
    ],
    faqs: [
      {
        q: 'How do we deal with range anxiety in our marketing?',
        a: 'Address it directly, with figures from your own real-world tests explained for typical city use, and show where buyers can charge. Vague claims get found out quickly in owner groups and reviews.',
      },
      {
        q: 'Should we mention subsidies in our ads?',
        a: 'Only if they apply today and you state them accurately – subsidy schemes and state incentives change, and an out-of-date figure misleads buyers. Many brands keep subsidy details on one page they update, rather than in every ad.',
      },
      {
        q: 'Do EV dealers need their own marketing if the brand advertises nationally?',
        a: 'Yes. National campaigns build awareness, but the dealer still has to win the test ride locally – with Maps visibility, local offers, quick follow-up and a good service reputation.',
      },
      {
        q: 'How do charging operators get more users?',
        a: 'Make every location easy to find, with accurate charger types, timings and access details on Google Maps and in the charging apps drivers use, and ask regular users for reviews. For new sites, tie-ups with nearby apartments, offices and fleets bring steady users.',
      },
    ],
    localAngle:
      'EV buyers want service and charging close to where they live and work. A dealer or charging point wins its area by being easy to find on Maps, showing real owner reviews and offering test rides at home.',
  },
  'it-services-and-software': {
    name: 'IT services and software companies',
    title: 'IT Services & Software',
    marketingLabel: 'IT services marketing',
    businessNoun: 'IT services company',
    audience:
      'IT services firms, technology consultancies, outsourcing companies and development shops',
    customers: 'CTOs, IT heads, founders and procurement teams in India and abroad',
    intro:
      'A Bengaluru IT services firm or development shop competes with a great many others that list the same technologies on their homepage. Buyers – often overseas – shortlist on specialisation, case studies and who they’ve heard of, long before they send an RFP. BMU helps IT services companies choose a clear niche, prove it with content and case studies, and turn LinkedIn and search into a steady flow of qualified conversations.',
    challenges: [
      {
        title: 'Sounding like everyone else',
        text: '“Custom software development” and “digital transformation” appear on almost every IT firm’s website. Without a clear specialisation by industry, technology or problem, buyers can’t tell why they should call you.',
      },
      {
        title: 'Referral-dependent pipelines',
        text: 'Many IT firms grow on referrals and repeat clients. When those slow down, there’s no marketing engine to fall back on.',
      },
      {
        title: 'Long, committee-led deals',
        text: 'An engagement may need sign-off from a CTO, a business head and procurement, sometimes in another time zone. Each wants different proof – technical depth, business impact and commercial terms.',
      },
      {
        title: 'Case studies under NDA',
        text: 'Client confidentiality often means you can’t show the logo. Case studies have to explain the problem, approach and outcome in a way the client will approve.',
      },
    ],
    buyerJourney: [
      {
        stage: 'Brief',
        text: 'A company needs a product built, a system modernised or a team extended, and someone is asked to find vendors.',
      },
      {
        stage: 'Longlist',
        text: 'They search Google, ask peers and AI tools, check review platforms such as Clutch and look at LinkedIn to build a longlist.',
      },
      {
        stage: 'Evaluate',
        text: 'They read case studies, meet the team on discovery calls and compare proposals on approach, rates and risk.',
      },
      {
        stage: 'Pilot & expand',
        text: 'Many start with a small pilot or a fixed-scope project. Delivery and communication decide whether it grows into a long engagement.',
      },
    ],
    channels: [
      {
        service: 'linkedin-branding',
        why: 'The people who hire IT partners spend time on LinkedIn. A company page and leadership profiles that post about specific problems solved – migrations, integrations, products shipped – build the familiarity that gets a firm onto shortlists.',
      },
      {
        service: 'seo',
        why: 'Service pages built around specific capabilities – “Salesforce implementation partner”, “dedicated Flutter developers”, “legacy application modernisation” – rank for searches with clear intent. Pages by industry and technology bring buyers who already know what they need.',
      },
      {
        service: 'content-marketing',
        why: 'Detailed case studies, architecture write-ups and buyer guides such as “how to choose an offshore development partner” prove expertise in a way a list of services can’t. They become the material sales teams send at every stage of a deal.',
      },
      {
        service: 'website-design',
        why: 'An IT firm’s website has to make its niche obvious in seconds, show case studies by industry and make booking a call easy. A clear structure for services, industries and work does more than a generic template with stock photos of people at laptops.',
      },
      {
        service: 'ai-search-visibility',
        why: 'Buyers increasingly ask ChatGPT or Perplexity to suggest development partners for a technology or industry. Consistent descriptions, review-platform profiles and specific capability pages make it more likely the firm is named and described accurately.',
      },
      {
        service: 'personal-branding',
        why: 'Clients buy from people they trust. Founders and technical leads who share honest lessons from real projects give buyers a sense of how the firm thinks before the first call.',
      },
      {
        service: 'performance-marketing',
        why: 'LinkedIn and Google campaigns aimed at specific job titles, company sizes and countries, measured on cost per qualified meeting rather than clicks, add pipeline when referrals slow. Budget goes only where meetings turn into proposals.',
      },
      {
        service: 'google-ads',
        why: 'Search ads on high-intent phrases – “hire React developers”, “ERP implementation partner” – reach buyers ready to talk. Careful negative keywords keep out job seekers and students, who search many of the same terms.',
      },
      {
        service: 'marketing-automation',
        why: 'A CRM that tracks every lead from first visit to signed contract, with email nurture for buyers who aren’t ready yet, stops long deal cycles going cold. It also shows which channels produce revenue, not just enquiries.',
      },
      {
        service: 'pitch-decks',
        why: 'A capabilities deck and proposal template that explain the approach, team and relevant case studies the same way every time make sales calls and RFP responses sharper. Sales staff stop rebuilding slides for every prospect.',
      },
    ],
    seasonality:
      'Demand is fairly steady, but it follows clients’ budget cycles – Indian clients plan around the April financial year, while many US and European clients set budgets in the last quarter of the calendar year. Decisions slow over the Christmas and New Year holidays in export markets.',
    kpis: [
      'Qualified meetings booked',
      'Proposals sent',
      'Pipeline value by channel',
      'Cost per qualified lead',
    ],
    faqs: [
      {
        q: 'How do we stand out among so many IT services firms?',
        a: 'Narrow down. Pick the industries, technologies or problems where your work is strongest and say so clearly everywhere. A specialist gets shortlisted more often than a generalist, even if you still take other work.',
      },
      {
        q: 'Can we publish case studies if clients won’t let us use their name?',
        a: 'Usually, yes. Describe the client by industry and size, explain the problem, your approach and the outcome, and get their approval on the text – specific technical detail convinces more than a logo does.',
      },
      {
        q: 'Is LinkedIn or Google better for finding clients?',
        a: 'They do different jobs. LinkedIn builds familiarity with the people who hire vendors; Google catches buyers searching for a specific capability right now. Most IT firms need both, plus case studies that make either one convert.',
      },
      {
        q: 'How do we reach clients in the US or UK from Bengaluru?',
        a: 'Write for those buyers – their terminology, time zones and concerns about communication and security – and aim content and campaigns at those countries. Reviews on the platforms they use and case studies from similar clients carry weight.',
      },
    ],
    localAngle:
      'Many companies still prefer an IT partner they can meet in person. A firm wins clients in its own business district through local tech meetups, a well-reviewed Google profile and being findable for “software company near me”.',
  },
  'saas-and-tech-startups': {
    name: 'SaaS and tech startups',
    title: 'SaaS & Tech Startups',
    marketingLabel: 'SaaS and startup marketing',
    businessNoun: 'tech startup',
    audience: 'founders of B2B SaaS, consumer app and deep-tech startups',
    customers: 'business buyers, app users and early adopters – and the investors backing them',
    intro:
      'Bengaluru tech startups have to prove demand quickly, on limited runway, while competing for attention with better-funded rivals. Founders need a brand that looks credible, a product that converts and channels that show traction to customers and investors alike. BMU works with SaaS, consumer app and deep-tech founders from first launch to growth – brand, product design, pitch decks and performance.',
    challenges: [
      {
        title: 'Limited runway, pressure for traction',
        text: 'Every rupee of marketing has to show results quickly, but brand and channels take time to build.',
      },
      {
        title: 'Finding the channel that works',
        text: 'Early startups often try everything at once. Without focused tests, budgets spread thin and nothing is learned.',
      },
      {
        title: 'Looking credible from day one',
        text: 'Customers, partners and investors judge a startup by its brand, website and deck before it has a track record.',
      },
      {
        title: 'Explaining a new category',
        text: 'Deep-tech products and new SaaS categories often solve problems buyers don’t yet have words for. Messaging has to start from the buyer’s pain, not the technology.',
      },
    ],
    buyerJourney: [
      {
        stage: 'Problem awareness',
        text: 'Customers notice a problem, or come across the startup through content, ads, a founder’s post or a referral.',
      },
      {
        stage: 'Evaluation',
        text: 'They check the website, pricing, reviews on G2 or the app store, the founders and the alternatives.',
      },
      {
        stage: 'Trial or demo',
        text: 'They sign up for a free trial, install the app or book a demo – and decide within the first few sessions whether it’s worth keeping.',
      },
      {
        stage: 'Adoption & advocacy',
        text: 'If the product delivers, they pay, stay and recommend it.',
      },
    ],
    channels: [
      {
        service: 'pitch-decks',
        why: 'A clear, well-designed deck tells the problem, solution, traction and plan in a way investors can follow in minutes. The same story is reused in partner and enterprise sales conversations.',
      },
      {
        service: 'ui-ux-design',
        why: 'Good product design reduces drop-off in onboarding and makes the product easier to sell. Clear flows and a consistent design system also speed up engineering.',
      },
      {
        service: 'seo',
        why: 'Content that answers the questions target customers search – use cases, integrations, “alternative to” comparisons – builds a lead source that keeps compounding long after a funding round’s ad budget is spent.',
      },
      {
        service: 'website-design',
        why: 'A marketing site that says what the product does and for whom on the first screen, with proof, pricing and a clear sign-up or demo button, is often a startup’s first sales conversation. Page structure and copy matter more than animation.',
      },
      {
        service: 'brand-identity',
        why: 'A distinct name, logo, visual system and voice make a young startup look credible to customers and investors – and keep every launch, ad and slide consistent.',
      },
      {
        service: 'linkedin-branding',
        why: 'For B2B startups, the founder’s LinkedIn is often the first sales channel. Regular posts about the problem, lessons and progress build an audience of buyers, hires and investors.',
      },
      {
        service: 'content-marketing',
        why: 'Product tutorials, customer stories, founder essays and a newsletter give buyers reasons to trust a young product. The same pieces feed sales emails, onboarding and LinkedIn.',
      },
      {
        service: 'performance-marketing',
        why: 'Structured tests across Google, Meta and LinkedIn – with clear targets for cost per sign-up, demo or activated user – show which channel can scale before the budget is committed.',
      },
      {
        service: 'ai-search-visibility',
        why: 'Buyers increasingly ask ChatGPT and Perplexity to compare tools in a category. Clear positioning, comparison content and mentions across the web help a new startup appear in those answers.',
      },
      {
        service: 'mobile-apps',
        why: 'For consumer startups, the Android and iOS app is often the product itself. Getting a solid first version into users’ hands quickly is what proves demand.',
      },
    ],
    seasonality:
      'Startup marketing follows the company’s own milestones – launches, funding rounds and accelerator demo days – more than the festival calendar. B2B startups often see buying slow over the year-end holidays and budgets reset with the new financial year in April.',
    kpis: [
      'Cost per sign-up or demo',
      'Activation rate',
      'Customer acquisition cost',
      'Monthly recurring revenue growth',
    ],
    faqs: [
      {
        q: 'When should a startup start spending on marketing?',
        a: 'As soon as the product solves a real problem for a defined customer – which can be early. Start with the basics – brand, website, founder presence – and test paid channels in small amounts before scaling.',
      },
      {
        q: 'What makes a good pitch deck?',
        a: 'A clear problem, a simple explanation of the solution, evidence of traction, the market, the business model, the team and the ask. Good design makes it easy to follow, but the story has to hold up first.',
      },
      {
        q: 'Should we hire in-house or work with an agency?',
        a: 'Early on, an agency gives access to brand, design and performance skills without hiring several people. As channels prove themselves, many startups bring the core roles in-house and keep the agency for specialist work.',
      },
      {
        q: 'How much should we spend testing a channel?',
        a: 'Enough to get a clear answer, which depends on click costs and conversion rates in your category. Set a budget and time limit for each test, and decide in advance what result would justify scaling it.',
      },
    ],
    localAngle:
      'Bengaluru’s startup community is dense, so founder networks, meetups, co-working spaces and local tech events are real channels. A startup that shows up consistently in that ecosystem gets introductions to customers, hires and investors.',
  },
  'e-commerce-and-d2c': {
    name: 'e-commerce and D2C brands',
    title: 'E-commerce & D2C',
    marketingLabel: 'E-commerce marketing',
    businessNoun: 'D2C brand',
    audience: 'D2C brands, Shopify and WooCommerce stores, and marketplace sellers',
    customers: 'online shoppers across India',
    intro:
      'E-commerce and D2C brands live on margins: what it costs to win a customer against what that customer is worth over time. Rising ad costs and marketplace fees squeeze both sides. BMU helps online-first brands – from Shopify stores to Amazon and Flipkart sellers – build profitable acquisition, a store that converts and the retention that turns first orders into repeat customers.',
    challenges: [
      {
        title: 'Rising acquisition costs',
        text: 'Paid social and search costs rise as more brands compete for the same audiences. Brands that rely on a single channel feel it first.',
      },
      {
        title: 'Marketplace dependence',
        text: 'Amazon and Flipkart bring volume, but fees, price competition and limited customer data reduce the brand’s control.',
      },
      {
        title: 'Returns and cash on delivery',
        text: 'Refused COD orders and returns eat into margins, especially in fashion and accessories.',
      },
      {
        title: 'One-time buyers',
        text: 'Many customers order once and disappear. Without retention marketing, every sale has to be paid for again.',
      },
    ],
    buyerJourney: [
      {
        stage: 'Discovery',
        text: 'Shoppers find products through ads, creators, search and marketplace listings.',
      },
      {
        stage: 'Consideration',
        text: 'They read reviews, compare prices across the brand site and marketplaces, and look at photos and videos.',
      },
      {
        stage: 'Purchase',
        text: 'They buy wherever the price, delivery time and payment options suit them – often with a first-order offer.',
      },
      {
        stage: 'Repeat',
        text: 'The delivery experience, reminders and offers decide whether they come back.',
      },
    ],
    channels: [
      {
        service: 'performance-marketing',
        why: 'Running Meta, Google and marketplace ads against target ROAS and acquisition cost – with budgets moved each week to what’s profitable – keeps growth tied to profit rather than revenue at any cost.',
      },
      {
        service: 'meta-ads',
        why: 'Instagram and Facebook drive discovery for many D2C categories. Structured creative testing, catalogue ads and retargeting turn scroll-stopping content into orders.',
      },
      {
        service: 'google-ads',
        why: 'Shopping, Performance Max and search campaigns catch shoppers searching for a product type or the brand name. Feed quality and product titles matter as much as bids.',
      },
      {
        service: 'ugc',
        why: 'Creator-style unboxings, try-ons and product demos keep D2C ad creative fresh. A regular supply prevents the fatigue that drives costs up.',
      },
      {
        service: 'website-development',
        why: 'A fast Shopify or WooCommerce store with clear product pages, reviews, trust signals and a smooth checkout gets more orders from every rupee of ad spend. Clean integrations with payments, shipping and marketplace inventory stop operations breaking as orders grow.',
      },
      {
        service: 'seo',
        why: 'Category, product and buying-guide content brings shoppers from search without paying per click. Over time it lowers the blended cost of acquiring a customer.',
      },
      {
        service: 'packaging-design',
        why: 'For an online-only brand, packaging is the first physical contact with the customer. It protects the product, carries the legally required information and creates the unboxing moment people share.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Abandoned-cart reminders, COD confirmations, order updates and reorder nudges on WhatsApp recover lost sales and cut down on refused COD orders.',
      },
      {
        service: 'marketing-automation',
        why: 'Email and WhatsApp flows – welcome, post-purchase, win-back – and customer segments turn one-time buyers into repeat customers without new ad spend.',
      },
      {
        service: 'influencer-marketing',
        why: 'Creators with engaged audiences in your category build awareness and trust and supply content for ads. Tracked links and codes show which ones actually sell.',
      },
    ],
    seasonality:
      'The festive season around Dasara and Diwali, with the big marketplace sale events, is the main peak for most categories. End-of-season sales, Valentine’s Day, Raksha Bandhan and the new year bring smaller spikes depending on the product.',
    compliance:
      'The Consumer Protection (E-Commerce) Rules require clear seller details, total prices and return policies, and the government’s guidelines on dark patterns prohibit tactics such as false urgency and hidden charges. Packaged products also need Legal Metrology declarations such as MRP and net quantity.',
    kpis: ['ROAS', 'Customer acquisition cost', 'Conversion rate', 'Repeat purchase rate'],
    faqs: [
      {
        q: 'Should we focus on our own website or on marketplaces?',
        a: 'Most brands need both. Marketplaces give reach and buyers who already trust the platform, while your own store keeps margin and customer data for repeat marketing. The right balance depends on your category and how often customers reorder.',
      },
      {
        q: 'What ROAS should we aim for?',
        a: 'It depends on your margins, average order value and repeat rate – there’s no universal number. Work out what you can afford to pay for a customer, then set the ROAS target from that.',
      },
      {
        q: 'How do we reduce COD refusals and returns?',
        a: 'Confirm COD orders on WhatsApp before dispatch, offer a small incentive for prepaid payment and make product details accurate so expectations match. Each step removes orders that would have been refused.',
      },
      {
        q: 'How often should we refresh ad creative?',
        a: 'Watch the numbers – when frequency rises and click-through drops, it’s time. Growing brands usually need a regular pipeline of new creative rather than occasional big shoots.',
      },
    ],
    localAngle:
      'E-commerce sells nationally, but a Bengaluru brand can use same-day delivery in the city, local pop-ups and city-targeted campaigns to test products and build an early, loyal customer base close to home.',
  },
  retail: {
    name: 'retail stores and chains',
    title: 'Retail',
    marketingLabel: 'Retail marketing',
    businessNoun: 'retail store',
    audience: 'supermarkets, specialty stores, multi-store chains and franchise owners',
    customers: 'local shoppers, families and people searching for a product nearby',
    intro:
      'Retail stores compete with e-commerce and quick-commerce apps on convenience, and with each other on footfall. Shoppers now search before they visit – checking stock, timings, reviews and offers – and a chain or franchise has to get that right at every location. BMU helps stores show up in those searches, give people a reason to visit and keep regular customers coming back.',
    challenges: [
      {
        title: 'Online and quick-commerce competition',
        text: 'Customers compare store prices with Amazon and Flipkart, and groceries arrive in minutes from quick-commerce apps. Stores have to sell what apps can’t – trying, advice, range and taking it home today.',
      },
      {
        title: 'Measuring footfall from marketing',
        text: 'It’s hard to know which ad or post brought someone into the store, so budgets get spent on guesswork.',
      },
      {
        title: 'Many locations, many listings',
        text: 'Chains and franchises often have outdated or duplicate listings on Google and JustDial – wrong timings, old numbers, missing photos – that send customers to the wrong outlet or to a competitor.',
      },
      {
        title: 'Festival-only spikes',
        text: 'Many stores are busy mainly around festivals. Steady footfall through the year needs repeat-customer marketing.',
      },
    ],
    buyerJourney: [
      {
        stage: 'Need & search',
        text: 'Shoppers search for a product or store nearby, often on Google Maps with “near me”.',
      },
      {
        stage: 'Check the store',
        text: 'They look at reviews, photos, timings and whether the store is likely to have what they want.',
      },
      {
        stage: 'Visit & buy',
        text: 'They visit, compare in person and buy – sometimes after checking prices online.',
      },
      {
        stage: 'Return',
        text: 'Good service, WhatsApp updates and loyalty offers bring them back for the next purchase.',
      },
    ],
    channels: [
      {
        service: 'google-business-profile',
        why: 'For a store, the Google profile is the shop window online. Accurate hours, product photos, posts about offers and steady reviews – kept up to date for every outlet – turn “near me” searches into visits.',
      },
      {
        service: 'local-seo',
        why: 'Ranking in Maps for product and category searches – “supermarket near me”, “electronics store”, “furniture showroom” – puts the store in front of people ready to buy today.',
      },
      {
        service: 'meta-ads',
        why: 'Location-targeted Instagram and Facebook ads around each store promote new arrivals, sales and festive offers to shoppers within a realistic drive.',
      },
      {
        service: 'whatsapp-automation',
        why: 'A WhatsApp list of past customers is a direct channel for new arrivals, sale previews and restocks – bringing regulars back without paying for reach each time.',
      },
      {
        service: 'digital-marketing',
        why: 'For a chain or franchise, one monthly plan covering listings for every outlet, local ads, social posts and a single report stops each store doing its own thing. Head office can see which outlets and campaigns bring footfall.',
      },
      {
        service: 'social-media-management',
        why: 'Regular posts of new stock, product ideas and store moments keep the store in mind and give shoppers a reason to visit instead of ordering online.',
      },
      {
        service: 'google-ads',
        why: 'Search and Performance Max campaigns with store-visit goals and local inventory reach shoppers deciding where to buy nearby, especially around festivals.',
      },
      {
        service: 'website-development',
        why: 'A website or online catalogue with products, store locations and click-and-collect or WhatsApp ordering connects online browsing to in-store sales.',
      },
      {
        service: 'photography',
        why: 'Professional photos of the store and products make listings, ads and catalogues look trustworthy – which matters when shoppers are deciding whether a visit is worth it.',
      },
    ],
    seasonality:
      'Footfall peaks around Diwali, Dasara, Ugadi, Christmas and the wedding season, along with end-of-season sales. Back-to-school months matter for stationery, uniform and electronics stores.',
    kpis: [
      'Store visits and direction requests',
      'Calls from Google',
      'Repeat customer rate',
      'Sales during campaigns',
    ],
    faqs: [
      {
        q: 'How do we measure whether online marketing brings footfall?',
        a: 'Track direction requests and calls from Google, use offer codes or WhatsApp opt-ins in ads, and ask customers at billing. Together they give a reasonable picture.',
      },
      {
        q: 'How do we compete with online prices?',
        a: 'Compete on what online can’t offer – seeing and trying products, expert advice, same-day pickup and after-sales service – and say so clearly in your marketing. Showing in-store prices online, where you can, also stops shoppers assuming you’re more expensive.',
      },
      {
        q: 'How should a franchise split marketing between head office and outlets?',
        a: 'Head office usually owns the brand, website and wider campaigns, while each outlet needs its own accurate Google profile, local offers and reviews. Shared templates and a common calendar keep stores consistent without slowing them down.',
      },
      {
        q: 'How should we use WhatsApp for our store?',
        a: 'Collect numbers at billing with permission, then send useful updates – new stock, sale previews, festive offers – rather than daily messages. Respect opt-outs to keep the list healthy.',
      },
    ],
    localAngle:
      'Most store customers live or work nearby, so a store wins its neighbourhood with accurate listings, a strong Maps presence and regular offers sent to local customers on WhatsApp.',
  },
  'fmcg-and-consumer-goods': {
    name: 'FMCG and consumer goods brands',
    title: 'FMCG & Consumer Goods',
    marketingLabel: 'FMCG marketing',
    businessNoun: 'FMCG brand',
    audience:
      'packaged food, beverage and personal care brands, from regional companies to new challengers',
    customers: 'household shoppers, retailers and distributors',
    intro:
      'An FMCG brand has to win twice – once with the distributor and shopkeeper who decide whether it gets shelf space, and again with the shopper choosing in a few seconds between familiar names. Regional and challenger brands rarely have a TV budget, so digital has to build recognition, back up trade partners and push sales in the markets where the product is stocked. BMU helps food, beverage and personal care brands do that, from the pack to the campaign.',
    challenges: [
      {
        title: 'Shelf space before shoppers',
        text: 'Distributors want proof that a product will move before they take it on, and without distribution there’s nothing for shoppers to buy. Marketing has to support the trade conversation and consumer demand at the same time.',
      },
      {
        title: 'Competing with big-budget brands',
        text: 'National FMCG companies dominate TV, shelves and search results. A smaller brand has to choose its markets, its story and its channels carefully.',
      },
      {
        title: 'Decisions made in seconds',
        text: 'A shopper spends moments choosing a snack, a drink or a shampoo. Pack, price and familiarity decide it, so the brand has to be recognised before the shopper reaches the shelf.',
      },
      {
        title: 'Every app is a new shelf',
        text: 'Getting listed on Blinkit, Zepto, Swiggy Instamart and BigBasket is only the start. Each app needs its own product content, ratings and ad spend before the brand gets seen.',
      },
    ],
    buyerJourney: [
      {
        stage: 'Exposure',
        text: 'Shoppers notice the brand in a reel, a creator’s review, a sampling stall or on the shelf beside names they know.',
      },
      {
        stage: 'Trial',
        text: 'They try it once – often because of a small pack, an offer or a recommendation – in a store or on a quick-commerce app.',
      },
      {
        stage: 'Habit',
        text: 'If it tastes, works or feels right, it goes on the regular list. Price and availability decide whether the habit holds.',
      },
      {
        stage: 'Loyalty & reach',
        text: 'Repeat buyers rate it on apps, recommend it and ask for it in other stores – which helps the brand win more distribution.',
      },
    ],
    channels: [
      {
        service: 'packaging-design',
        why: 'On a shelf or a quick-commerce thumbnail, the pack is the ad. Clear brand blocking, a readable product name and benefit, and the mandatory label details laid out properly decide whether a shopper picks it up.',
      },
      {
        service: 'instagram-marketing',
        why: 'Recipes, routines, behind-the-scenes posts and reels that show the product in use build the recognition that makes a shopper reach for it. Instagram is also where distributors and retail buyers check whether a brand has a following.',
      },
      {
        service: 'influencer-marketing',
        why: 'Food, home and beauty creators with regional audiences introduce a product to the people most likely to try it. Tying each campaign to the cities where the product is stocked turns attention into sales.',
      },
      {
        service: 'meta-ads',
        why: 'Geo-targeted Instagram and Facebook ads in the cities and pin codes where the product is available drive trial with offers and sampling. Measuring sales in those areas keeps ad spend tied to distribution.',
      },
      {
        service: 'performance-marketing',
        why: 'Ads on Meta, Google and inside the quick-commerce and marketplace apps, run against sales and ROAS by platform, show which channels actually move product. In-app ads sit closest to the purchase, so they need their own budget and reporting.',
      },
      {
        service: 'ugc',
        why: 'Taste tests, unboxings and routines filmed creator-style supply a steady stream of ad creative and listing videos. They look native in reels and stories in a way polished brand films don’t.',
      },
      {
        service: 'brand-identity',
        why: 'A distinct logo, colour system and tone make a challenger brand recognisable across packs, shelves, ads and trade materials. Consistency is what lets a small budget add up.',
      },
      {
        service: 'photography',
        why: 'Clean pack shots, lifestyle images and food styling are needed for every app listing, ad and distributor catalogue. A consistent product image library, built once, saves reshoots for every platform.',
      },
      {
        service: 'video-production',
        why: 'Short brand films and product videos for YouTube, Instagram and in-store screens give a challenger brand a polished presence without a TV budget.',
      },
      {
        service: 'content-marketing',
        why: 'Recipes, usage ideas and ingredient explainers on the website and YouTube answer what shoppers search for and give them more reasons to use the product. They also give retail partners material to share.',
      },
    ],
    seasonality:
      'Demand shifts by category – beverages, ice cream and summer personal care rise from March to May, while sweets, dry fruits and gift packs peak around Raksha Bandhan, Diwali and other festivals. Distributors stock up ahead of the festive season, so trade marketing has to start earlier than consumer campaigns.',
    compliance:
      'Packaged food must follow FSSAI’s labelling rules and the Legal Metrology (Packaged Commodities) Rules – including MRP, net quantity and manufacturer details – and nutrition or health claims in ads have to meet FSSAI’s advertising and claims regulations. ASCI’s guidelines also require influencer posts to be clearly labelled as ads.',
    kpis: [
      'Sales in campaign markets',
      'ROAS by platform',
      'App ratings and reviews',
      'Repeat purchase rate',
    ],
    faqs: [
      {
        q: 'Can digital marketing help us get distribution?',
        a: 'It helps. Distributors and modern-trade buyers look for signs that a product will sell – a following, ratings, sales on apps and visible campaigns in their area. Those signals make trade conversations easier, though the sales team still has to close them.',
      },
      {
        q: 'Should we sell on quick-commerce apps?',
        a: 'For most urban food, beverage and personal care brands, yes – many city shoppers now buy everyday items there. Margins, listing terms and ad costs vary by app, so start with the platforms that fit your category and price point.',
      },
      {
        q: 'How do we compete with large FMCG brands on a small budget?',
        a: 'Focus on a few markets, one clear difference and channels where you can be seen often. Concentrated spend in one city usually teaches you more than thin spend across the country.',
      },
      {
        q: 'What must go on our packaging by law?',
        a: 'Packaged products need the declarations required by the Legal Metrology rules – such as MRP, net quantity, manufacturer details and date of manufacture – and food products also need FSSAI labelling, including the licence number. Design should work from the current regulations and your compliance team’s checklist.',
      },
    ],
    localAngle:
      'An FMCG brand wins a neighbourhood shop by shop. Sampling in local supermarkets and apartment community events, plus ads aimed at the pin codes where it’s stocked, turns local availability into repeat buyers.',
  },
  'banking-and-nbfc': {
    name: 'banks and NBFCs',
    title: 'Banking & NBFC',
    marketingLabel: 'Banking and NBFC marketing',
    businessNoun: 'bank or NBFC',
    audience:
      'NBFCs, cooperative and small finance banks, microfinance institutions and gold loan companies',
    customers: 'borrowers, depositors and small business owners',
    intro:
      'People choose a lender on trust and convenience – how quickly a loan is sanctioned, how clear the charges are and whether there’s a branch nearby when something goes wrong. Banks and NBFCs compete with each other and with app-based lenders for the same borrowers, under RBI rules on what they say and how they say it. BMU helps lenders, gold loan companies and microfinance institutions bring in qualified applications, support their branches and keep customers informed.',
    challenges: [
      {
        title: 'Rules on every message',
        text: 'RBI’s fair practices and digital lending rules govern how loans, rates and charges are communicated. Every ad, landing page and WhatsApp message has to be accurate and complete.',
      },
      {
        title: 'Fear of fake lenders',
        text: 'Fake loan apps and impersonation scams have made borrowers wary of unfamiliar names. A lender has to show its registration, real branches and real people before anyone shares documents.',
      },
      {
        title: 'Expensive loan keywords',
        text: 'Searches for personal, business and gold loans attract many bidders, so clicks are costly and many applicants won’t qualify. Pre-qualifying on the landing page saves money and branch time.',
      },
      {
        title: 'Branches and field teams',
        text: 'Gold loan, MSME and microfinance lending still runs through branches and field officers. Marketing has to send leads to the right branch quickly and support the people who meet customers face to face.',
      },
    ],
    buyerJourney: [
      {
        stage: 'Need',
        text: 'A cash need – a business expansion, a medical bill, a wedding, school fees – or a plan to park savings sets it off.',
      },
      {
        stage: 'Compare',
        text: 'They compare rates, processing fees, eligibility and speed online and with people they know, and check that the lender is RBI-registered and genuine.',
      },
      {
        stage: 'Apply',
        text: 'They apply online, through a call-back or at a branch and submit KYC documents – dropping off if the process feels slow or unclear.',
      },
      {
        stage: 'Repay & return',
        text: 'Clear EMI reminders, quick service and fair treatment decide whether they come back for another loan, a renewal or a deposit.',
      },
    ],
    channels: [
      {
        service: 'google-ads',
        why: 'Search ads on “gold loan near me”, “MSME business loan” and “FD interest rates” reach people actively looking for credit or a deposit. Landing pages that show eligibility, documents and the nearest branch – after Google’s financial services verification is complete – filter out applicants who won’t qualify.',
      },
      {
        service: 'google-business-profile',
        why: 'Every branch needs its own accurate profile with timings, services, photos and replies to reviews. For gold loans and walk-in customers it’s often the first thing they check – and fake listings with scam numbers make a verified official one essential.',
      },
      {
        service: 'local-seo',
        why: 'Ranking each branch for “gold loan near me”, “loan against property” and “NBFC near me” in its area sends walk-in customers to the right branch. Consistent branch details across Google, JustDial and the website support it.',
      },
      {
        service: 'seo',
        why: 'Guides and calculators – EMI, eligibility, gold loan per gram, FD returns – rank for the questions borrowers search before they apply. They bring applicants who understand the product and cut calls asking the same questions.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Document checklists, application status, EMI reminders and gold loan renewal alerts on WhatsApp reduce drop-offs and missed payments. Messages should come from a verified business account so customers can tell them apart from scams.',
      },
      {
        service: 'marketing-automation',
        why: 'A CRM that routes online leads to the nearest branch or relationship manager, tracks follow-up and nurtures applicants who aren’t ready yet stops expensive leads going cold.',
      },
      {
        service: 'meta-ads',
        why: 'Instagram and Facebook ads in Kannada and other regional languages, targeted around branches, work for gold loans, MSME loans and deposits when the creative explains one product clearly. Lead forms with eligibility questions keep quality up.',
      },
      {
        service: 'video-production',
        why: 'Short explainers on how a gold loan works, which documents are needed or how to spot a fake lender, in the languages customers speak, build trust before the branch visit.',
      },
      {
        service: 'website-development',
        why: 'A secure, fast website with product pages, calculators, a branch locator, grievance redressal details and the RBI registration on display gives a lender both credibility and applications.',
      },
    ],
    seasonality:
      'Gold loan and personal loan demand tends to rise around the festive and wedding seasons and the school-admission months, and farm-linked lending follows sowing and harvest cycles. Tax-saving deposits draw more interest towards the financial year-end in March.',
    compliance:
      'Lenders must follow RBI’s fair practices and transparency rules – including a clear statement of the interest rate, annual percentage rate and charges – and the digital lending guidelines require the regulated lender to be named in any loan offered through an app or partner. Claims about rates or approval times have to be accurate and not misleading.',
    kpis: [
      'Cost per qualified application',
      'Application completion rate',
      'Leads routed to branches',
      'Disbursals from digital leads',
    ],
    faqs: [
      {
        q: 'How do we stand out from loan apps that promise instant approval?',
        a: 'Be clear and specific – real rates, real timelines, the documents needed – and show that you’re registered and have branches people can visit. Many borrowers are now looking for exactly that reassurance.',
      },
      {
        q: 'Can we run Google Ads for loans?',
        a: 'Yes, once Google’s financial services verification is complete, and as long as ads and landing pages follow its policies and RBI’s disclosure rules. Expect high click costs and plan landing pages that qualify applicants.',
      },
      {
        q: 'How do we market gold loans without sounding pushy?',
        a: 'Focus on what borrowers worry about – the safety of their gold, how it’s valued, the rate and how quickly they can get it back – and make the nearest branch easy to find. Calm, practical information works better than urgency.',
      },
      {
        q: 'Should microfinance and rural lending be marketed online at all?',
        a: 'Mostly it’s branch- and field-led, but WhatsApp updates, regional-language video and accurate branch listings support field officers and help customers check you’re genuine. Digital supports the relationship rather than replacing it.',
      },
    ],
    localAngle:
      'Gold loan and small business customers usually choose a branch they can reach easily and that people they know trust. A branch with an accurate Maps listing, genuine reviews and a known local manager wins its area.',
  },
  fintech: {
    name: 'fintech companies',
    title: 'Fintech',
    marketingLabel: 'Fintech marketing',
    businessNoun: 'fintech company',
    audience: 'payments, digital lending and wealth-tech companies, from seed stage to scale',
    customers: 'app users, retail investors, merchants and businesses that move money online',
    intro:
      'A fintech product asks people to trust an app with their money, their credit history or their savings – usually without ever meeting anyone. That puts the weight on product design, clear communication and acquisition costs that still add up after KYC drop-offs. BMU works with payments, lending and wealth-tech teams on onboarding flows, compliant campaigns and content that turn installs into active users.',
    challenges: [
      {
        title: 'An install is not a customer',
        text: 'Many users download an app and leave at KYC, bank linking or the first transaction. Paying for installs without fixing onboarding wastes the budget.',
      },
      {
        title: 'Regulated claims at app speed',
        text: 'RBI and SEBI rules apply to ads, landing pages and creator posts – no promised returns, clear charges, the regulated entity named. Fast-moving growth teams need a review process that doesn’t stall every campaign.',
      },
      {
        title: 'Crowded app stores and search',
        text: 'Payments, credit and investing apps compete for the same keywords and the same users. Without a clear difference, acquisition turns into a bidding war.',
      },
      {
        title: 'Proving you’re legitimate',
        text: 'Loan app scams have made users and platforms cautious. A fintech has to show its licences, lending partners and grievance contacts clearly to earn trust and pass ad reviews.',
      },
    ],
    buyerJourney: [
      {
        stage: 'Discover',
        text: 'Users hear about the app from a creator, a friend’s referral, an ad or a search for a specific need – a credit line, a mutual fund, a payment gateway.',
      },
      {
        stage: 'Check trust',
        text: 'They read app store reviews, look for the licence or lending partner and search the app’s name with words like “safe” or “fraud”.',
      },
      {
        stage: 'Onboard',
        text: 'They install, complete KYC and link a bank account – the stage where many users drop off.',
      },
      {
        stage: 'Activate & stay',
        text: 'A first payment, investment or loan that goes smoothly, and useful nudges after it, decide whether they keep using the app.',
      },
    ],
    channels: [
      {
        service: 'performance-marketing',
        why: 'Running Google App campaigns, Meta and affiliate channels against cost per KYC-complete user or first transaction – not cost per install – shows which sources bring real customers. Budget moves each week to what activates.',
      },
      {
        service: 'ui-ux-design',
        why: 'Onboarding, KYC, bank linking and the first transaction are where fintech users leave. Clear screens, honest fee display and fewer steps get more users through from the same acquisition spend.',
      },
      {
        service: 'seo',
        why: 'Calculators and explainers – “SIP calculator”, “how a credit line works”, “payment gateway charges” – rank for the questions people ask before choosing an app. Over time they bring users with intent at a lower cost than paid installs.',
      },
      {
        service: 'content-marketing',
        why: 'Plain-language guides, newsletters and in-app education on credit scores, investing basics and fraud safety build the trust a money app needs. They also give support and growth teams material that has already been checked against the rules.',
      },
      {
        service: 'ai-search-visibility',
        why: 'People now ask ChatGPT and Gemini which app to use for investing, credit or payments. Accurate, consistent descriptions of products, fees and licences across your site and trusted sources help AI tools describe you correctly.',
      },
      {
        service: 'meta-ads',
        why: 'Instagram and Facebook campaigns with single-product creative – a UPI feature, a credit line, a first SIP – reach users at scale. Creative has to pass Meta’s financial ad policies and carry the disclosures RBI or SEBI require.',
      },
      {
        service: 'influencer-marketing',
        why: 'Finance creators reach people who trust them more than any ad, but the rules are tight. Creators must label paid posts under ASCI’s guidelines, and for investment products SEBI bars regulated entities from working with unregistered creators who give advice or claim returns.',
      },
      {
        service: 'google-ads',
        why: 'Search ads on product searches – “payment gateway for small business”, “open demat account”, “business current account” – catch users and merchants ready to sign up. Google’s financial services verification, and its Play Store rules for lending apps, have to be cleared first.',
      },
      {
        service: 'marketing-automation',
        why: 'Event-based email, SMS, WhatsApp and push journeys – KYC reminders, first-transaction nudges, re-engagement – bring back users who stalled. Segmenting by product and stage stops the messages feeling like spam.',
      },
      {
        service: 'linkedin-branding',
        why: 'For B2B payments, payroll and business lending products, LinkedIn reaches CFOs, finance heads and founders. Founder and product posts about how money moves inside a business build the credibility those deals need.',
      },
    ],
    seasonality:
      'Demand gathers around specific moments – tax-saving investments from January to March, festive shopping and credit in October and November, and spikes whenever markets are in the news. Payments products follow merchants’ festive and sale-season volumes.',
    compliance:
      'Digital lending must follow RBI’s digital lending guidelines, including naming the regulated lender and giving borrowers a key fact statement with the annual percentage rate before the loan. Investment platforms fall under SEBI’s advertising rules, which bar promising returns, and SEBI restricts regulated entities from associating with unregistered creators who give advice or claim returns.',
    kpis: [
      'Cost per KYC-complete user',
      'Install-to-activation rate',
      'First-transaction rate',
      '30-day retention',
    ],
    faqs: [
      {
        q: 'Why do so many users drop off after installing?',
        a: 'Usually because of friction in KYC or bank linking, unclear fees, or a first screen that doesn’t show the value quickly. Funnel analytics show the exact step, and fixing it often matters more than new acquisition spend.',
      },
      {
        q: 'Can we work with finance influencers?',
        a: 'Yes, with care. Paid posts must be labelled under ASCI’s guidelines, and for investment products SEBI bars regulated entities from associating with unregistered creators who give advice or claim returns. Choose creators who stick to education and approve scripts in advance.',
      },
      {
        q: 'How do we get through Google and Meta ad reviews?',
        a: 'Complete Google’s financial services verification, put your licence or lending partner details on the landing page and avoid claims the platforms flag, such as guaranteed approval or assured returns. Clear disclosures help both the review and the conversion rate.',
      },
      {
        q: 'Should we focus on app store optimisation or the website?',
        a: 'Both. App store listings decide installs from searches inside the stores, while the website and its content build trust and rank on Google. Many users check both before they download.',
      },
    ],
    localAngle:
      'Fintech sells nationally, but merchant and payments products are still won street by street. Field teams signing up shops, QR standees at the counter and local referral offers bring a neighbourhood’s merchants onto the platform.',
  },
  insurance: {
    name: 'insurance businesses',
    title: 'Insurance',
    marketingLabel: 'Insurance marketing',
    businessNoun: 'insurance agency',
    audience: 'insurance agents and advisors, brokers and insurtech platforms',
    customers: 'families, individuals and businesses buying health, life, motor and business cover',
    intro:
      'Insurance is bought rarely and judged when a claim is made, so people choose an advisor or platform they believe will stand by them. Agents compete on personal trust, brokers on advice and claims support, and insurtechs on comparison and speed. BMU helps all three explain cover clearly, stay within IRDAI’s advertising rules and keep in touch through every renewal.',
    challenges: [
      {
        title: 'A purchase people put off',
        text: 'Few people wake up wanting insurance. Marketing has to connect cover to real moments – a new baby, a home loan, a parent’s health – without trading on fear.',
      },
      {
        title: 'Renewals that slip away',
        text: 'Health and motor policies come up for renewal every year, and customers who hear nothing often switch to whoever reminds them first.',
      },
      {
        title: 'Claims shape reputation',
        text: 'One badly handled claim becomes a review or a WhatsApp forward. Agents and brokers who help clients through claims need to make that visible.',
      },
      {
        title: 'Fine print nobody reads',
        text: 'Waiting periods, sub-limits, exclusions and riders confuse buyers, and IRDAI’s rules don’t allow ads to gloss over them. Clear explanation is both the compliance requirement and the sales advantage.',
      },
    ],
    buyerJourney: [
      {
        stage: 'Trigger',
        text: 'A life event – marriage, a child, a new car, a home loan, a hospital bill or an employer policy that falls short – starts the search.',
      },
      {
        stage: 'Research & compare',
        text: 'They compare premiums and cover on aggregator sites, read claim experiences and ask friends who they use.',
      },
      {
        stage: 'Talk to someone',
        text: 'Many still want an advisor to explain waiting periods, exclusions and riders before they pay – on a call, on WhatsApp or in person.',
      },
      {
        stage: 'Renew & claim',
        text: 'Renewal reminders and support during a claim decide whether they stay, add family members and refer others.',
      },
    ],
    channels: [
      {
        service: 'personal-branding',
        why: 'People buy insurance from someone they trust. An advisor who explains cover in short videos and posts – what a waiting period means, how to file a claim – becomes the person friends recommend.',
      },
      {
        service: 'google-business-profile',
        why: 'An agent’s or broker’s office profile, with reviews that mention help with claims and quick replies to questions, is often checked before anyone shares personal details. It also appears for “insurance agent near me” searches.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Renewal reminders, premium due dates, policy documents and claim-status updates on WhatsApp keep customers from lapsing or drifting to another agent. A renewal reminder sent on time is usually the easiest sale an insurance business makes.',
      },
      {
        service: 'google-ads',
        why: 'Search ads on “health insurance for parents”, “term insurance advisor” and “commercial vehicle insurance” reach people ready to buy. Landing pages that explain cover clearly and qualify by age, family size or fleet size cut wasted calls.',
      },
      {
        service: 'content-marketing',
        why: 'Plain guides on choosing cover, comparing policies, understanding exclusions and making a claim answer the questions people are embarrassed to ask. They make the advisor or platform look like the helpful option.',
      },
      {
        service: 'local-seo',
        why: 'Ranking for “insurance agent near me”, “health insurance advisor” and “insurance broker” in the area brings people who want someone local to sit down with. Listing the lines you handle – health, life, motor, commercial – on the profile helps Google match you to the right searches.',
      },
      {
        service: 'seo',
        why: 'For insurtechs and brokers, pages for each product and customer type – group health insurance for startups, shop insurance, cover for senior citizens – rank for specific searches with clear intent. They bring buyers who know what they need.',
      },
      {
        service: 'meta-ads',
        why: 'Instagram and Facebook lead ads for family health cover, term plans and insurance for parents work when the creative explains one product simply. Short forms that ask for age and city help advisors call back the right people.',
      },
      {
        service: 'linkedin-branding',
        why: 'Brokers selling group health, liability and commercial cover reach HR heads, CFOs and founders on LinkedIn. Posts on claims handled, common policy gaps and renewal planning build the authority corporate buyers look for.',
      },
      {
        service: 'marketing-automation',
        why: 'A CRM that tracks every policy’s renewal date, family members and cross-sell opportunities turns a book of customers into a planned pipeline. For insurtechs, drop-off journeys recover quotes that were started but never paid.',
      },
    ],
    seasonality:
      'Life and health insurance sales rise from January to March as people look for tax-saving options before the financial year ends. Motor insurance follows vehicle sales around Dasara and Diwali, and renewals keep demand steady through the rest of the year.',
    compliance:
      'Insurance advertisements in India fall under IRDAI’s advertising and disclosure regulations, which require ads to be accurate, identify the insurer and its registration, and not misrepresent benefits, exclusions or premiums. Agents and brokers also have to follow the rules set by IRDAI and by the insurers whose products they promote.',
    kpis: [
      'Cost per qualified quote request',
      'Quote-to-policy rate',
      'Renewal retention rate',
      'Policies per customer',
    ],
    faqs: [
      {
        q: 'Can insurance agents run their own ads?',
        a: 'Yes, within IRDAI’s rules and the guidelines of the insurers they represent. Ads must describe products accurately and carry the required disclosures, so check them with your insurer before they run.',
      },
      {
        q: 'How do we get more renewals?',
        a: 'Remind customers well before the due date, make payment easy through WhatsApp or a link, and use the renewal to review their cover. Customers who hear from you only at renewal time are the easiest to lose.',
      },
      {
        q: 'Should we show premiums in our marketing?',
        a: 'Indicative starting premiums can help, as long as they’re accurate and the conditions are stated. Real premiums depend on age, health and cover, so the ad should lead to a proper quote.',
      },
      {
        q: 'Is social media useful for an insurance advisor?',
        a: 'Yes, when it teaches rather than sells – explaining terms, sharing claim tips, answering common questions. That content is what makes people message you when they finally need cover.',
      },
    ],
    localAngle:
      'Many families still buy insurance from an advisor they can meet, and they find one through neighbours and reviews. An agent with a strong local profile, reviews that mention claims help and a presence at community events wins the households nearby.',
  },
  'accounting-and-ca-firms': {
    name: 'CA firms and accountants',
    title: 'Accounting & CA Firms',
    marketingLabel: 'CA firm marketing',
    businessNoun: 'CA firm',
    audience: 'CA firms, tax consultants, GST practitioners and company registration services',
    customers: 'small business owners, startups, salaried professionals and NRIs',
    intro:
      'Most people find an accountant through a referral, then stay for years if the work is on time and the advice is clear. The searches that do happen – GST registration, ITR filing, company incorporation, a notice from the tax department – are urgent and usually local. BMU helps CA firms and tax practices be found for those searches, explain their services within ICAI’s rules and turn one-off filings into long-term clients.',
    challenges: [
      {
        title: 'Professional rules on promotion',
        text: 'ICAI’s ethics rules limit how chartered accountants can advertise and solicit work. Marketing has to inform rather than sell.',
      },
      {
        title: 'Cheap online filing platforms',
        text: 'Tax filing apps and online registration platforms advertise low fixed fees for ITR, GST and incorporation. A firm has to show why advice and accountability are worth paying more for.',
      },
      {
        title: 'Deadline-driven demand',
        text: 'Enquiries surge before income-tax and audit due dates, then fall away. Year-round work such as bookkeeping, GST returns and payroll is what smooths out the gaps.',
      },
      {
        title: 'Expertise in plain words',
        text: 'Clients don’t know the difference between presumptive taxation and a full tax audit, or between an LLP and a private limited company. Firms that explain these simply earn the trust that turns a filing into a retainer.',
      },
    ],
    buyerJourney: [
      {
        stage: 'Trigger',
        text: 'A deadline, a tax notice, a new business, a question about foreign income or a funding round sends someone looking for help.',
      },
      {
        stage: 'Search & ask',
        text: 'They ask friends and other business owners, and search Google for “CA near me”, “GST registration” or the exact problem they have.',
      },
      {
        stage: 'First call',
        text: 'They call or WhatsApp two or three firms and judge how clearly each explains the process, documents and fees.',
      },
      {
        stage: 'Engage & stay',
        text: 'A filing or registration done on time, with a reminder before the next deadline, turns them into a monthly or annual client.',
      },
    ],
    channels: [
      {
        service: 'google-business-profile',
        why: 'A CA firm’s profile with its services listed, office photos, timings and genuine client reviews is what people see when they search “chartered accountant near me”. Posts before each tax deadline remind nearby businesses the firm is there.',
      },
      {
        service: 'local-seo',
        why: 'Ranking in Maps for “CA near me”, “GST consultant” and “income tax filing” in the firm’s area brings small businesses and salaried professionals who want someone they can visit. Keeping the firm’s name, address and phone number identical on Google, JustDial and the website helps Maps trust the listing.',
      },
      {
        service: 'seo',
        why: 'Pages for each service – GST registration, ITR filing for NRIs, company incorporation, statutory audit – and guides to common tax notices rank for the specific problems people search. They show expertise in the informational way ICAI’s rules allow.',
      },
      {
        service: 'content-marketing',
        why: 'Deadline reminders, Budget explainers and plain guides to GST and income-tax changes, shared through a newsletter and the website, keep existing clients informed and bring new ones who found the answer useful.',
      },
      {
        service: 'linkedin-branding',
        why: 'Partners who post clear explanations of tax changes and compliance deadlines reach founders, CFOs and business owners on LinkedIn. It builds a reputation for expertise without direct promotion.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Document checklists, deadline reminders and filing status updates on WhatsApp make tax season smoother for clients and staff. A message to existing clients before each due date brings in the ones who would otherwise leave it late.',
      },
      {
        service: 'website-design',
        why: 'A simple, credible website with services, partner qualifications, firm registration details and a clear enquiry route reassures clients before they call. ICAI has guidelines on what a CA firm’s website may show, so the design has to work within them.',
      },
      {
        service: 'google-ads',
        why: 'For tax consultants and company registration services, search ads on “private limited company registration”, “GST registration online” and “ITR filing help” reach people ready to pay. CA firms should check ICAI’s current guidance before running any paid promotion.',
      },
      {
        service: 'marketing-automation',
        why: 'A CRM that tracks each client’s filings, due dates and services lets a firm offer the next service – GST returns after registration, an audit as the business grows – at the right moment.',
      },
    ],
    seasonality:
      'Demand peaks before the income-tax return deadline in July and the tax-audit deadlines in September and October, with another rush before the financial year closes on 31 March. GST and TDS returns keep a steady monthly and quarterly rhythm in between.',
    compliance:
      'Chartered accountants are bound by ICAI’s Code of Ethics, which restricts advertising and soliciting clients; firm websites and informational content are allowed within ICAI’s guidelines. Tax consultants and registration services that aren’t CA firms aren’t covered by ICAI, but still can’t make misleading claims about refunds or outcomes.',
    kpis: [
      'Enquiries from search and Maps',
      'Consultation calls booked',
      'One-off clients moved to retainers',
      'Client retention rate',
    ],
    faqs: [
      {
        q: 'Are CA firms allowed to do digital marketing?',
        a: 'Within limits. ICAI’s rules restrict advertising and soliciting, but a website, accurate listings and informative content are allowed within its guidelines. We keep content educational and check it against current ICAI guidance.',
      },
      {
        q: 'How do we compete with cheap online filing platforms?',
        a: 'Don’t compete on price for simple returns. Show the value of advice – planning, notices handled, someone accountable – and aim at clients whose needs go beyond a basic filing.',
      },
      {
        q: 'Which services should we put on our website first?',
        a: 'The ones people search for that lead to ongoing work – GST registration and returns, ITR filing, company incorporation and bookkeeping. Each deserves its own page with the process, documents and who it’s for.',
      },
      {
        q: 'How do we turn tax-season clients into year-round ones?',
        a: 'Follow up after the filing with a short review of what else they need – GST, bookkeeping, advance tax, payroll. Reminders before the next deadline keep the relationship going.',
      },
    ],
    localAngle:
      'Small business owners like an accountant close enough to drop off documents and sit down with before a deadline. A firm with a complete Maps profile, reviews from local businesses and timely deadline posts wins the shops, offices and households around it.',
  },
  'legal-services': {
    name: 'law firms and advocates',
    title: 'Legal Services',
    marketingLabel: 'Legal marketing',
    businessNoun: 'law firm',
    audience: 'law firms, independent advocates and legal consultancies',
    customers:
      'individuals facing a legal problem, families and businesses that need legal counsel',
    intro:
      'People look for a lawyer at stressful moments – a property dispute, a divorce, a cheque bounce notice, a contract gone wrong – and want someone they can trust quickly. Bar Council of India rules restrict advocates from advertising, so legal marketing in India works through information: a clear website, useful content and accurate listings. BMU helps law firms and advocates be found and understood, within those rules.',
    challenges: [
      {
        title: 'Advertising is restricted',
        text: 'Advocates can’t solicit work or run promotional ads under the Bar Council of India rules. Visibility has to come from permitted information, useful content and reputation.',
      },
      {
        title: 'Clients don’t know what they need',
        text: 'Most people can’t tell whether they need a civil, criminal or consumer lawyer, or a legal notice rather than a suit. Content has to meet them at the problem, not at the legal term.',
      },
      {
        title: 'Trust at a stressful moment',
        text: 'People hire a lawyer when something has already gone wrong. They need to see experience with their kind of matter and a clear first step before they call.',
      },
      {
        title: 'Calls looking for free advice',
        text: 'Many enquiries want a quick answer over the phone. Explaining clearly how consultations work, and what they cost, saves time on both sides.',
      },
    ],
    buyerJourney: [
      {
        stage: 'Problem',
        text: 'A notice, a dispute, a family matter or a business need makes someone realise they need legal help.',
      },
      {
        stage: 'Search & ask',
        text: 'They ask people they trust and search the problem itself – “how to reply to a legal notice”, “property dispute lawyer” – often reading several explainers first.',
      },
      {
        stage: 'Check credentials',
        text: 'They look at the firm’s website for practice areas, enrolment and experience, and at how clearly the lawyer explains things.',
      },
      {
        stage: 'Consult & engage',
        text: 'A first consultation decides it – how clearly the lawyer sets out the process, likely timelines and fees.',
      },
    ],
    channels: [
      {
        service: 'website-design',
        why: 'Within the Bar Council’s rules, a website can set out the firm’s name, contact details, enrolment, qualifications and areas of practice. Designing it so a visitor quickly sees whether the firm handles their kind of matter, and how to book a consultation, is where legal marketing starts.',
      },
      {
        service: 'content-marketing',
        why: 'Plain explainers on common problems – drafting a will, replying to a legal notice, what a cheque bounce case involves, how a mutual consent divorce works – answer people’s questions and show expertise without promotion.',
      },
      {
        service: 'seo',
        why: 'Pages for each practice area and guides to common legal questions rank for the searches people make before they call anyone. Search visibility for informational content is one of the few ways advocates can be found without advertising.',
      },
      {
        service: 'google-business-profile',
        why: 'An accurate office listing with the address, hours and practice areas helps people who already know the firm’s name find it and confirm it’s genuine. It has to stay factual – the same limits apply as for the website.',
      },
      {
        service: 'local-seo',
        why: 'Many matters – property, family, consumer, tenancy – are heard in local courts, so people often look for a lawyer near home or near the court. Accurate, consistent listings help the right firm appear for those searches.',
      },
      {
        service: 'linkedin-branding',
        why: 'Corporate and commercial lawyers reach founders, in-house counsel and business owners on LinkedIn by explaining new laws and judgments. Educational posts build a reputation without soliciting work.',
      },
      {
        service: 'ai-search-visibility',
        why: 'People now ask ChatGPT and Gemini legal questions before they speak to a lawyer. Clear, accurate explainers and consistent firm information make it more likely those answers draw on the firm’s work and describe it correctly.',
      },
      {
        service: 'personal-branding',
        why: 'Clients hire an advocate, not a logo. Talks, articles and well-reasoned commentary on judgments build the personal reputation that referrals depend on.',
      },
      {
        service: 'video-production',
        why: 'Short videos explaining a legal process step by step – registering a property, filing a consumer complaint – make the law less intimidating and keep the firm’s content informative rather than promotional.',
      },
    ],
    seasonality:
      'Demand is fairly steady and driven by life and business events rather than seasons. Court vacations slow some litigation work, while new laws, tax changes and the financial year-end bring bursts of corporate and compliance queries.',
    compliance:
      'The Bar Council of India rules bar advocates from soliciting work or advertising, directly or indirectly, and a website may carry only permitted details such as name, contact information, enrolment, qualifications and areas of practice. Marketing for advocates has to stay informational – no promotional ads, claims of success or comparisons with other lawyers.',
    kpis: [
      'Consultation requests',
      'Visits to practice-area pages',
      'Calls and direction requests from Google',
      'Enquiries by practice area',
    ],
    faqs: [
      {
        q: 'Can lawyers advertise in India?',
        a: 'Not in the usual sense – the Bar Council of India rules prohibit advocates from soliciting work or advertising. A website with the permitted details, informative articles and accurate listings are the accepted ways to be visible.',
      },
      {
        q: 'Can we run Google Ads for our law firm?',
        a: 'For advocates, paid ads promoting legal services conflict with the Bar Council rules, so we don’t recommend them. Legal consultancies and document services that aren’t practising advocates may have more room, but should check their position first.',
      },
      {
        q: 'What should a law firm’s website include?',
        a: 'The details the rules permit – name, contact, enrolment, qualifications and areas of practice – plus a clear explanation of how you work and helpful content on common questions. It should inform, not sell.',
      },
      {
        q: 'How long does content take to bring enquiries?',
        a: 'Usually several months, while search engines come to trust the pages. Good legal explainers keep bringing people for years, which makes them worth the patience.',
      },
    ],
    localAngle:
      'People often want a lawyer near home or near the court where their matter will be heard. An accurate, complete listing and a website that clearly explains practice areas help a firm be found by people in the surrounding area.',
  },
  'hr-and-recruitment': {
    name: 'HR and recruitment firms',
    title: 'HR & Recruitment',
    marketingLabel: 'HR and recruitment marketing',
    businessNoun: 'recruitment agency',
    audience:
      'staffing agencies, recruitment consultants, executive search firms and HR tech companies',
    customers: 'HR heads, hiring managers and founders – and the candidates they want to reach',
    intro:
      'A recruitment business markets to two audiences at once – employers who need roles filled and candidates who need to trust the agency with their career. In Bengaluru both have plenty of choice, from job portals and LinkedIn to in-house talent teams. BMU helps staffing agencies, recruiters and HR tech companies win client mandates, attract the right candidates and show what they specialise in.',
    challenges: [
      {
        title: 'Two audiences, one brand',
        text: 'Employers want speed and quality; candidates want honesty and good roles. The brand has to speak to both without confusing either.',
      },
      {
        title: 'Competing with portals and LinkedIn',
        text: 'Employers can post on Naukri, LinkedIn and other portals themselves. An agency has to show what it adds – reach, screening and time saved.',
      },
      {
        title: 'Generalist positioning',
        text: '“We hire for all roles” sounds like every other agency. Specialising by function, industry or seniority is what wins mandates.',
      },
      {
        title: 'Fake job offers',
        text: 'Job scams on WhatsApp and Telegram have made candidates wary of unknown recruiters. Agencies need verifiable profiles, real job listings and a clearly stated policy on fees.',
      },
    ],
    buyerJourney: [
      {
        stage: 'Hiring need',
        text: 'A role stays open too long, a project needs a team quickly or a company opens in a new city.',
      },
      {
        stage: 'Shortlist partners',
        text: 'HR asks peers, searches for agencies by specialisation and checks LinkedIn for who places similar roles.',
      },
      {
        stage: 'Trial mandate',
        text: 'They give one or two roles to a few agencies and compare speed, profile quality and communication.',
      },
      {
        stage: 'Preferred vendor',
        text: 'Agencies that deliver get more mandates and a place on the empanelled list, and candidates they treat well refer others.',
      },
    ],
    channels: [
      {
        service: 'linkedin-branding',
        why: 'Employers and candidates both judge a recruiter on LinkedIn. A company page and recruiter profiles that share live roles, hiring insights for a specialisation and placements (with consent) build credibility on both sides.',
      },
      {
        service: 'seo',
        why: 'Pages for each specialisation and city – “IT staffing in Bengaluru”, “executive search for manufacturing”, “contract staffing for warehouses” – rank for the searches HR teams make when they need a partner. Properly marked-up job pages also bring candidates in through Google’s job listings.',
      },
      {
        service: 'website-design',
        why: 'A site with separate paths for employers and candidates, a job board, specialisations, the hiring process and an easy way to submit a mandate or a CV serves both audiences without mixing them up.',
      },
      {
        service: 'personal-branding',
        why: 'In recruitment, clients follow recruiters. Founders and senior consultants who post salary trends, hiring advice and market updates for their niche become the first call when a role opens.',
      },
      {
        service: 'content-marketing',
        why: 'Salary guides, hiring checklists and market updates for a specialisation give HR teams something worth downloading – and a reason to share their contact details. For HR tech, comparison pages and use cases do the same job.',
      },
      {
        service: 'google-ads',
        why: 'Search ads on “staffing agency in Bengaluru”, “bulk hiring partner” or “payroll outsourcing” reach employers with an urgent need. Excluding job seekers’ searches keeps the budget on clients.',
      },
      {
        service: 'meta-ads',
        why: 'For volume hiring – delivery, retail, warehouse and customer support roles – Instagram and Facebook ads with short application forms in local languages reach candidates who aren’t on job portals.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Interview schedules, document requests, offer updates and joining reminders on WhatsApp cut no-shows and keep candidates engaged. A verified business account helps candidates trust the messages.',
      },
      {
        service: 'marketing-automation',
        why: 'A CRM that tracks mandates, candidates and follow-ups, with nurture emails to employers between hires, keeps the pipeline full on both sides.',
      },
      {
        service: 'google-business-profile',
        why: 'Candidates and clients look up an agency’s office on Maps before they visit or share documents. A verified profile with photos, timings and reviews is a quick way to show the agency is genuine.',
      },
    ],
    seasonality:
      'Hiring tends to pick up in the new financial year, after appraisals and bonus payouts, and slows over the December holidays. Volume hiring for retail, e-commerce and logistics peaks ahead of the festive season, and campus hiring follows the academic calendar.',
    kpis: [
      'Client mandates won',
      'Qualified candidate applications',
      'Time to shortlist',
      'Cost per placement',
    ],
    faqs: [
      {
        q: 'Should a recruitment agency specialise?',
        a: 'Usually, yes. Employers look for partners who know their roles and talent pool, and a clear niche makes marketing far easier to aim. You can still take other mandates – just lead with your strength.',
      },
      {
        q: 'How do we reach candidates who aren’t on job portals?',
        a: 'Targeted social ads, referrals, communities and recruiter content on LinkedIn reach people who aren’t actively searching. For volume roles, short regional-language application forms on Facebook and Instagram help.',
      },
      {
        q: 'Do we need separate marketing for employers and candidates?',
        a: 'Mostly, yes. Keep one brand but use different pages, messages and channels – employers respond to case studies and speed, candidates to clear roles, salaries and how you treat them.',
      },
      {
        q: 'How do we show we’re not a job scam?',
        a: 'Keep a verified Google profile and company page, list real roles with company details where clients allow, message candidates from an official WhatsApp business account and state your fee policy clearly. Then link to all of these from every job post, so a cautious candidate can check you in a minute.',
      },
    ],
    localAngle:
      'For blue-collar and volume hiring, candidates come from nearby. A staffing agency wins its area with an office that’s easy to find on Maps, regular walk-in drives and job posts shared in local community groups.',
  },
  manufacturing: {
    name: 'manufacturers',
    title: 'Manufacturing',
    marketingLabel: 'Manufacturing marketing',
    businessNoun: 'manufacturer',
    audience:
      'industrial manufacturers, machinery builders, component makers and contract manufacturers',
    customers: 'procurement teams, engineers and OEM buyers in India and abroad',
    intro:
      'Industrial buyers search online, check capabilities and certifications, and shortlist suppliers long before a sales call. Many manufacturers in Peenya, Bommasandra and Bengaluru’s other industrial areas still rely on trade fairs, IndiaMART and referrals. BMU helps manufacturers present their capabilities clearly, reach the right buyers and build a pipeline of serious enquiries.',
    challenges: [
      {
        title: 'An outdated online presence',
        text: 'Many manufacturers have old websites that don’t show capabilities, certifications or capacity – so buyers move on to a competitor who looks more established.',
      },
      {
        title: 'Long, multi-person buying decisions',
        text: 'Engineers, procurement and management all influence the decision. Marketing has to give each of them what they need.',
      },
      {
        title: 'Dependence on portals and trade fairs',
        text: 'IndiaMART and exhibitions bring leads, but often price-shopping ones, and the big trade fairs come round only a few times a year.',
      },
      {
        title: 'Explaining technical capability',
        text: 'What makes a manufacturer good – tolerances, processes, quality systems – is hard to get across in a brochure.',
      },
    ],
    buyerJourney: [
      {
        stage: 'Requirement',
        text: 'An engineer or buyer has a part, product or capacity requirement and starts looking.',
      },
      {
        stage: 'Supplier search',
        text: 'They search Google, B2B portals and LinkedIn, and check websites for capabilities and certifications.',
      },
      {
        stage: 'RFQ & evaluation',
        text: 'They send RFQs, compare quotes, request samples and may audit the facility.',
      },
      {
        stage: 'Order & long-term supply',
        text: 'A trial order leads to repeat supply if quality, delivery and communication hold up.',
      },
    ],
    channels: [
      {
        service: 'website-design',
        why: 'For a manufacturer, the website is the capability statement – products, processes, machinery, certifications, industries served and a clear RFQ form. It’s what buyers check before they ever call, so its structure has to answer an engineer’s questions in the order they ask them.',
      },
      {
        service: 'seo',
        why: 'Ranking for product, process and specification searches – “CNC machining in Bengaluru”, “sheet metal fabrication supplier”, “precision components manufacturer” – brings engineers and buyers with real requirements.',
      },
      {
        service: 'linkedin-branding',
        why: 'Procurement heads, engineers and decision-makers are on LinkedIn. A company page and leadership profiles that share capabilities, projects and plant updates keep the manufacturer in front of the right people.',
      },
      {
        service: 'google-ads',
        why: 'Search campaigns on product and process keywords reach buyers actively looking for a supplier. Careful targeting filters out retail and job searches that waste industrial budgets.',
      },
      {
        service: 'video-production',
        why: 'Plant tours, process videos and machine demonstrations show capability and scale that a brochure can’t – especially for export buyers who can’t visit.',
      },
      {
        service: 'photography',
        why: 'Professional photos of the facility, machinery and products make the website, catalogues and LinkedIn look as capable as the operation really is.',
      },
      {
        service: 'pitch-decks',
        why: 'A well-structured capability deck supports sales meetings, trade-fair conversations and partner or investor discussions, explaining products, processes and industries served the same way every time.',
      },
      {
        service: 'drone-shoots',
        why: 'Aerial footage of the plant shows scale, infrastructure and layout – useful in corporate films and for buyers who want to see the facility before an audit.',
      },
      {
        service: 'marketing-automation',
        why: 'A CRM that tracks RFQs, quotes and follow-ups across long sales cycles makes sure no enquiry is lost and shows which channels bring orders.',
      },
      {
        service: 'ai-search-visibility',
        why: 'Buyers now ask AI tools to suggest suppliers for a part or process. Clear capability pages and consistent listings help ChatGPT and Gemini mention the manufacturer accurately.',
      },
    ],
    seasonality:
      'Demand follows customers’ budget cycles, with procurement often active around the start and end of the financial year. Major trade fairs create peaks in enquiries and follow-up, and export demand follows buyers’ own calendars.',
    kpis: [
      'RFQs received',
      'Qualified enquiries',
      'Quote-to-order rate',
      'Cost per qualified enquiry',
    ],
    faqs: [
      {
        q: 'Does digital marketing work for B2B manufacturing?',
        a: 'Yes. Buyers search online before contacting suppliers, so a clear website, search visibility and a LinkedIn presence bring enquiries from people who already understand what you do.',
      },
      {
        q: 'Should we stay on IndiaMART?',
        a: 'It can remain a useful source, but it puts you next to many competitors on price. Your own website and search presence bring buyers who come to you directly.',
      },
      {
        q: 'How do we reach export buyers?',
        a: 'Through a website written for international buyers, search visibility in your target markets, LinkedIn and video that shows the facility. Export buyers often do much of their shortlisting online.',
      },
      {
        q: 'What should a manufacturing website include?',
        a: 'Products, processes, machinery, capacity, certifications, industries served, quality systems and an easy RFQ form. Real photos and videos of the plant matter more than stock images.',
      },
    ],
    localAngle:
      'Industrial buyers often prefer suppliers close by for faster delivery and easier audits. Clear listings with location, capabilities and photos help a manufacturer appear when buyers in the region search for a supplier nearby.',
  },
  'industrial-and-b2b-supplies': {
    name: 'industrial distributors and suppliers',
    title: 'Industrial & B2B Supplies',
    marketingLabel: 'Industrial supplies marketing',
    businessNoun: 'industrial distributor',
    audience: 'distributors, wholesalers, authorised dealers and industrial equipment suppliers',
    customers: 'purchase managers, maintenance teams, contractors and retailers who reorder',
    intro:
      'A distributor wins on range, stock, price and how fast the material reaches the site – and loses the order to whoever sends the quote first. Buyers find suppliers on IndiaMART, on Google and through sales reps, then reorder from the ones who make it easy. BMU helps industrial distributors, wholesalers and equipment suppliers get found for the products they stock, turn enquiries into quotes quickly and keep repeat buyers ordering.',
    challenges: [
      {
        title: 'Large catalogues, thin listings',
        text: 'A distributor may stock many brands and part numbers, but if they aren’t online with specifications, a buyer searching for that exact item finds someone else.',
      },
      {
        title: 'Price-shopping on portals',
        text: 'Portal enquiries often go to several suppliers at once, and the lowest quote wins. Without channels of its own, a distributor’s margins stay under pressure.',
      },
      {
        title: 'Slow quotes lose orders',
        text: 'Maintenance and project buyers need price and availability fast. An enquiry that waits a day for a quote has often been placed elsewhere.',
      },
      {
        title: 'Reorders depend on one rep',
        text: 'Repeat business often lives in a salesperson’s phone. When that person is busy or leaves, regular buyers drift away.',
      },
    ],
    buyerJourney: [
      {
        stage: 'Requirement',
        text: 'A machine breaks down, a project starts or stock runs low, and someone needs a part, a consumable or a piece of equipment.',
      },
      {
        stage: 'Find suppliers',
        text: 'They search Google and IndiaMART by product, brand or part number, and call suppliers they already know.',
      },
      {
        stage: 'Quote & compare',
        text: 'They ask two or three suppliers for price, availability, delivery time and credit terms.',
      },
      {
        stage: 'Order & reorder',
        text: 'They order from the one that’s fast and reliable, then reorder by WhatsApp or phone the next time.',
      },
    ],
    channels: [
      {
        service: 'website-development',
        why: 'A searchable product catalogue with brands, part numbers, specifications, datasheets and a quote button on every page turns a distributor’s range into something buyers can find. Linking it to stock or ERP data keeps it accurate as items come and go.',
      },
      {
        service: 'seo',
        why: 'Product, brand and part-number pages – “authorised bearing distributor”, “pneumatic fittings supplier”, “safety shoes wholesale” – rank for the exact searches buyers type. Each page brings a buyer who already knows what they want.',
      },
      {
        service: 'google-ads',
        why: 'Search ads on product and brand searches within your delivery area reach buyers with an immediate need. Ads that mention stock, delivery speed and GST invoicing, linked to a fast quote form, compete on what buyers actually care about.',
      },
      {
        service: 'performance-marketing',
        why: 'Running Google, LinkedIn and portal spend together against cost per qualified quote request – and tracking which leads became orders – shows where a B2B budget actually pays back. Spend moves to the channels that bring repeat accounts, not one-off price checks.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Most reorders already happen on WhatsApp. A business catalogue, quick quote templates, order confirmations and dispatch updates make ordering faster for buyers and less dependent on one salesperson.',
      },
      {
        service: 'marketing-automation',
        why: 'A CRM that logs every enquiry from the website, portals and calls, tracks quote follow-ups and flags accounts that haven’t reordered stops business slipping through the cracks.',
      },
      {
        service: 'google-business-profile',
        why: 'Contractors and maintenance teams often search for a supplier nearby and drive over for urgent parts. A warehouse or counter profile with product categories, timings and photos brings in those walk-in and call-in buyers.',
      },
      {
        service: 'local-seo',
        why: 'Ranking in Maps for “electrical wholesaler near me”, “hardware supplier” or “industrial tools shop” in your area catches buyers who need material today.',
      },
      {
        service: 'linkedin-branding',
        why: 'For equipment suppliers and authorised dealers, LinkedIn reaches plant heads, purchase managers and project engineers. Posts on new product lines, installations and brand partnerships keep the business on their supplier list.',
      },
      {
        service: 'photography',
        why: 'Clear product photos on a consistent background make catalogues, portal listings and the website look reliable – and save buyers asking for pictures before they place an order.',
      },
    ],
    seasonality:
      'Demand follows customers’ project and maintenance calendars – construction and infrastructure supplies slow in the monsoon, while factories buy around planned shutdowns and towards the start and end of the financial year. Steady consumables keep a base of repeat orders through the year.',
    kpis: ['Quote requests', 'Quote-to-order rate', 'Repeat order rate', 'Time to send a quote'],
    faqs: [
      {
        q: 'Is IndiaMART enough for a distributor?',
        a: 'It brings enquiries, but usually alongside several competitors quoting on price. Your own catalogue, search visibility and WhatsApp reorder process bring buyers who come to you directly and stay.',
      },
      {
        q: 'Should we put prices on our website?',
        a: 'For standard items with stable prices, showing a price or range speeds up orders. For items with volatile prices or volume discounts, a fast quote button works better.',
      },
      {
        q: 'Can we list everything we stock online?',
        a: 'Yes, if the data is organised – part numbers, brands, specifications and categories. Start with the fast-moving and higher-margin lines, then add the rest in batches.',
      },
      {
        q: 'How do we get more repeat orders?',
        a: 'Make reordering easy – a WhatsApp catalogue, saved quotes, reminders timed to each buyer’s usual reorder cycle – and follow up when a regular customer goes quiet. Repeat buyers are the cheapest orders to win.',
      },
    ],
    localAngle:
      'Contractors, workshops and maintenance teams buy urgent items from the nearest supplier who has them in stock. A distributor wins its industrial belt with an accurate Maps listing, stock shown online and quick replies on WhatsApp.',
  },
  'logistics-and-transport': {
    name: 'logistics and transport companies',
    title: 'Logistics & Transport',
    marketingLabel: 'Logistics marketing',
    businessNoun: 'logistics company',
    audience:
      'courier companies, freight and trucking operators, packers and movers, and warehousing providers',
    customers: 'businesses shipping goods, online sellers and families relocating',
    intro:
      'Logistics is a trust business – customers hand over their goods and hope they arrive on time and intact. Courier and moving customers decide quickly, from Maps and reviews, while freight and warehousing clients compare capacity, coverage and reliability over weeks. BMU helps logistics and transport companies win both: local bookings from people who need a move or a pickup, and contracts from businesses that need a dependable partner.',
    challenges: [
      {
        title: 'Fake movers and bait quotes',
        text: 'Fake packers and movers listings, and quotes that rise on moving day, have made customers suspicious. Genuine firms have to prove they’re real with reviews, an office and itemised quotes.',
      },
      {
        title: 'Rate-only comparisons',
        text: 'Freight and courier buyers often compare only per-kg or per-trip rates. Without showing reliability, tracking and coverage, the cheapest quote wins.',
      },
      {
        title: 'Long B2B sales cycles',
        text: 'Warehousing and contract logistics deals involve operations, finance and procurement, and switching providers is a big decision. Marketing has to stay present for months.',
      },
      {
        title: 'Showing what can’t be seen',
        text: 'Network coverage, fleet, warehouse systems and on-time performance are hard to show on a website. Buyers need proof, not claims.',
      },
    ],
    buyerJourney: [
      {
        stage: 'Need',
        text: 'A family plans a move, a seller needs shipping, or a business outgrows its warehouse or transporter.',
      },
      {
        stage: 'Search & quotes',
        text: 'Families search “packers and movers near me” and call several; businesses search by route, service and city and ask for rate cards.',
      },
      {
        stage: 'Verify',
        text: 'They check reviews, the office address, GST details and transit insurance – and businesses ask for client references or a site visit.',
      },
      {
        stage: 'Book & repeat',
        text: 'A move that goes smoothly earns a review; a business that gets reliable service and tracking signs a longer contract.',
      },
    ],
    channels: [
      {
        service: 'google-business-profile',
        why: 'For packers and movers and courier counters, the Maps listing is the storefront. A verified profile with the real office address, photos of your own team and trucks, and genuine reviews separates a real company from the fake listings customers fear.',
      },
      {
        service: 'local-seo',
        why: 'Ranking for “packers and movers near me”, “courier service” and “goods transport” in each area you serve brings customers ready to book this week. A separate, accurate listing for each branch or depot lets each one rank in its own area.',
      },
      {
        service: 'google-ads',
        why: 'Search ads on “home shifting”, “office relocation”, “part load transport Bengaluru to Chennai” or “warehouse for rent” reach people with an immediate need. Call-focused ads with a quick quote form suit how moving and freight customers buy.',
      },
      {
        service: 'seo',
        why: 'Route pages, service pages and city pages – inter-city moving, bike transport, cold-chain freight, 3PL warehousing – rank for the specific searches families and businesses make. Over time they cut dependence on paid leads.',
      },
      {
        service: 'website-design',
        why: 'A site with clear services, coverage maps, a quote or rate-request form, packing and insurance details, and proof such as client logos (with permission) helps families and businesses decide. Separate paths for household moves and B2B logistics keep each audience on track.',
      },
      {
        service: 'linkedin-branding',
        why: 'Supply chain heads, operations managers and founders choose freight and warehousing partners. A LinkedIn presence with network updates, new warehouse capacity and client stories keeps the company on their shortlist.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Quote follow-ups, survey bookings, pickup confirmations, tracking links and delivery updates on WhatsApp keep customers informed and cut down on “where is my shipment” calls.',
      },
      {
        service: 'web-apps',
        why: 'A customer portal for bookings, tracking, proof of delivery and invoices makes a logistics company easier to work with than one that runs on phone calls. For B2B clients, it can tip the decision.',
      },
      {
        service: 'video-production',
        why: 'Short videos of packing, loading, warehouse operations and the fleet show care and capacity that a rate card can’t. They work in ads, sales emails and on the website.',
      },
    ],
    seasonality:
      'House moves rise in the April–June school holidays and around month-ends, when rental agreements turn over, while courier and freight volumes climb through the festive and sale season from September to December. Warehousing demand follows e-commerce and retail stocking ahead of festivals.',
    kpis: ['Quote requests', 'Booked moves or shipments', 'Cost per booking', 'B2B contracts won'],
    faqs: [
      {
        q: 'How do we stand out from fake packers and movers?',
        a: 'Show proof – a verified Google profile with your real address, photos of your own team and trucks, written itemised quotes and genuine reviews. Customers who have heard horror stories look for exactly these signals.',
      },
      {
        q: 'Which works better for a logistics company – ads or SEO?',
        a: 'Ads bring bookings quickly for urgent needs such as moves and part loads; SEO builds steady enquiries for routes and services over time. Most logistics firms run both, with ads covering the gap while pages rank.',
      },
      {
        q: 'How do we win more B2B contracts?',
        a: 'Make your network, capacity and reliability easy to verify – coverage pages, case studies, a client portal and a LinkedIn presence. B2B buyers take time, so stay in touch with useful updates while they decide.',
      },
      {
        q: 'Should we publish moving and transport charges on our website?',
        a: 'Indicative ranges by distance or load help filter enquiries, as long as you explain what changes the final price. A quick survey or quote form keeps the conversation going.',
      },
    ],
    localAngle:
      'Moving and courier customers book a company close by whose office they can find. A logistics business wins its area with a verified Maps listing, reviews from local moves and quick callbacks.',
  },
  'textiles-and-garments': {
    name: 'textile and garment businesses',
    title: 'Textiles & Garments',
    marketingLabel: 'Textile and garment marketing',
    businessNoun: 'textile business',
    audience: 'garment exporters, textile mills, fabric suppliers and saree wholesalers',
    customers: 'international brands and buying houses, domestic retailers and resellers',
    intro:
      'Bengaluru and the towns around it make garments for international brands, and the wholesale lanes of Chickpet supply sarees and fabric to retailers across Karnataka and beyond. Much of this trade still runs on long relationships, buying-house contacts and phone calls. BMU helps exporters, mills and wholesalers show their capability and range online, reach new buyers and run the WhatsApp-driven reseller trade properly.',
    challenges: [
      {
        title: 'Relationship-only sales',
        text: 'Many exporters and mills depend on a few buyers and agents. When the order book shrinks, there’s no quick way to reach new ones.',
      },
      {
        title: 'Proving compliance and capacity',
        text: 'International buyers check certifications, social and environmental audits and capacity before they visit. If that isn’t easy to find, the factory doesn’t make the shortlist.',
      },
      {
        title: 'Catalogues that change every week',
        text: 'Saree and fabric wholesalers add new designs constantly. Sending them as WhatsApp photo dumps makes it hard for retailers to browse, order and reorder.',
      },
      {
        title: 'Price pressure from every side',
        text: 'Domestic retailers compare wholesale rates across markets and B2B apps, and export buyers compare across countries. Positioning has to show quality, reliability and speed, not just price.',
      },
    ],
    buyerJourney: [
      {
        stage: 'Sourcing need',
        text: 'A brand needs a new vendor for a category, or a retailer needs fresh stock for a season or festival.',
      },
      {
        stage: 'Discover suppliers',
        text: 'Buyers search online and on B2B portals, visit trade fairs and wholesale markets and ask agents; resellers follow wholesalers on Instagram and WhatsApp.',
      },
      {
        stage: 'Samples & audit',
        text: 'Export buyers ask for samples, costing and a factory audit; retailers ask for catalogues, rates and minimum order quantities.',
      },
      {
        stage: 'Orders & repeat',
        text: 'An approved sample and an order delivered on time lead to repeat seasons, and wholesalers keep the retailers who find reordering easy.',
      },
    ],
    channels: [
      {
        service: 'website-design',
        why: 'For an exporter or mill, the website is the capability statement buyers check before they reply – product categories, machinery, capacity, certifications, audits and a clear sourcing enquiry form. For wholesalers, a catalogue that can be browsed by design and fabric matters more.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Saree and fabric wholesale already runs on WhatsApp. A business catalogue organised by collection, broadcast lists for new arrivals and quick order confirmations replace photo dumps and make reordering easy for retailers and resellers.',
      },
      {
        service: 'linkedin-branding',
        why: 'Sourcing managers at brands and buying houses are on LinkedIn. A company page and leadership profiles that share capability, certifications and factory updates keep an exporter visible between trade fairs.',
      },
      {
        service: 'seo',
        why: 'Pages for each product and capability – “knitwear manufacturer in Bengaluru”, “private label garment manufacturer”, “silk saree wholesaler” – rank for the searches sourcing teams and retailers make. Content written for overseas buyers widens the funnel beyond agents.',
      },
      {
        service: 'photography',
        why: 'Clean, colour-accurate photos of fabrics, garments and sarees make catalogues, listings and the website usable for buyers who can’t see the material in person. Poor photos lead to returns and disputes.',
      },
      {
        service: 'video-production',
        why: 'Factory tours, process videos and close-ups of drape, weave and texture show quality and scale to buyers who can’t visit. They shorten the step before a sample request.',
      },
      {
        service: 'instagram-marketing',
        why: 'For saree and fabric wholesalers, Instagram is where boutique owners and resellers spot new designs. Reels of fresh arrivals, rates and minimum quantities in highlights, and quick DM replies bring in trade buyers.',
      },
      {
        service: 'google-ads',
        why: 'Search ads on “private label garment manufacturer”, “saree wholesale” and specific fabric searches reach buyers ready to source. Targeting by country for exporters and by state for wholesalers keeps spend on real trade buyers.',
      },
      {
        service: 'google-business-profile',
        why: 'Retailers visiting a wholesale market look up shops by name and product. A profile with the exact shop location, photos of the range and wholesale timings helps buyers find you among many similar shops.',
      },
    ],
    seasonality:
      'Export orders follow international buyers’ spring–summer and autumn–winter seasons, with sampling months ahead of each. Domestic saree and fabric wholesale peaks before Dasara, Diwali, Ugadi and the wedding season, when retailers stock up.',
    kpis: [
      'Sourcing enquiries from new buyers',
      'Sample requests',
      'Retailer reorders',
      'Wholesale orders from new retailers',
    ],
    faqs: [
      {
        q: 'Can digital marketing bring export buyers?',
        a: 'It can bring enquiries and make you easier to shortlist. Buyers increasingly research suppliers online before reaching out, so a clear website, a LinkedIn presence and content for your categories help – alongside trade fairs and agents, not instead of them.',
      },
      {
        q: 'How should a saree wholesaler use WhatsApp?',
        a: 'Use a WhatsApp Business catalogue organised by collection and price band, broadcast new arrivals to retailers who have opted in and confirm orders with templates. It’s far easier for buyers than scrolling through hundreds of forwarded photos.',
      },
      {
        q: 'What should an exporter’s website include?',
        a: 'Product categories, capacity, machinery, certifications and audits, sustainability practices, buyers served (where you’re allowed to say) and a sourcing enquiry form. Real factory photos and videos matter more than stock images.',
      },
      {
        q: 'Is Instagram useful for a B2B textile business?',
        a: 'For wholesalers and fabric suppliers selling to boutiques and resellers, yes – many trade buyers discover designs there. For exporters, LinkedIn and the website matter more.',
      },
    ],
    localAngle:
      'Retailers and resellers still visit wholesale markets to feel the fabric. A wholesaler wins its market lane with an exact Maps pin, photos of the shop and range, and fast replies when buyers message before they come.',
  },
  'agriculture-and-agritech': {
    name: 'agriculture and agritech businesses',
    title: 'Agriculture & Agritech',
    marketingLabel: 'Agribusiness marketing',
    businessNoun: 'agribusiness',
    audience:
      'agri input companies, farm equipment dealers, agritech startups and organic produce brands',
    customers: 'farmers, farmer producer organisations, dealers and city households buying organic',
    intro:
      'Farmers decide carefully and on proof – what a neighbour used, what the dealer recommends, what they saw work in a field. Agri input companies, equipment dealers and agritech startups have to reach them in Kannada and other regional languages, on the phones and apps they already use, and back up the dealers who make the sale. Organic produce brands sell to a different buyer – city households who want to know where their food comes from – and BMU works on both sides.',
    challenges: [
      {
        title: 'Trust is built in the field',
        text: 'Farmers rely on demonstrations, neighbours and local dealers more than ads. Digital has to show real results from real farms, not studio claims.',
      },
      {
        title: 'Language and format',
        text: 'Text-heavy English campaigns miss most farmers. Video, voice notes and simple visuals in the local language work far better.',
      },
      {
        title: 'Seasonal, weather-dependent demand',
        text: 'Input and equipment sales cluster around sowing seasons and swing with the monsoon. Campaigns have to be ready weeks before the window opens.',
      },
      {
        title: 'Dealer-led sales',
        text: 'Most inputs and equipment are sold through dealers and distributors. Marketing has to send farmers to the nearest dealer and help that dealer close the sale.',
      },
    ],
    buyerJourney: [
      {
        stage: 'Problem in the field',
        text: 'A pest attack, a new season, a labour shortage or a falling yield sets a farmer looking for a solution.',
      },
      {
        stage: 'Ask & watch',
        text: 'They ask the dealer, other farmers and Krishi Vigyan Kendra staff, and watch videos on YouTube and WhatsApp in their own language.',
      },
      {
        stage: 'See it work',
        text: 'A field demonstration, a neighbour’s results or a trial pack convinces them more than any brochure.',
      },
      {
        stage: 'Buy & repeat',
        text: 'They buy from the local dealer or an agritech app, and come back next season if the crop shows the difference.',
      },
    ],
    channels: [
      {
        service: 'video-production',
        why: 'Field demonstrations, farmer testimonials and how-to videos in Kannada and other regional languages are how agri brands explain a product. They travel on YouTube, Facebook and WhatsApp to farmers who would rather watch than read.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Crop-stage advisories, weather-linked reminders, dealer locations and order updates on WhatsApp keep farmers and dealers engaged through the season. Voice notes and images in the local language work better than long text.',
      },
      {
        service: 'meta-ads',
        why: 'Instagram and Facebook ads in regional languages, targeted by district and crop-growing area, reach farmers and young rural buyers on their phones. Click-to-WhatsApp ads suit buyers who want to ask questions before they buy.',
      },
      {
        service: 'social-media-management',
        why: 'A steady YouTube and Facebook presence with crop tips, field results and live Q&A sessions builds the trust farmers need before trying a new input, machine or app.',
      },
      {
        service: 'google-business-profile',
        why: 'Equipment dealers, input shops and service centres get found on Maps by farmers and FPOs looking for the nearest dealer. A complete profile with the brands stocked, timings and photos turns that search into a visit.',
      },
      {
        service: 'seo',
        why: 'For agritech startups and organic brands, guides on crop problems, farm machinery comparisons and organic sourcing rank for the questions people search, in English and in regional languages. They bring farmers, buyers and partners who are already looking.',
      },
      {
        service: 'instagram-marketing',
        why: 'For organic produce brands selling to city homes, Instagram shows the farm, the harvest and the people behind it. Reels from the field and clear delivery details turn interest into orders and subscriptions.',
      },
      {
        service: 'performance-marketing',
        why: 'For agritech apps and organic subscription brands, Google and Meta campaigns run against cost per install, registered farmer or first order show what can scale. Timing campaigns to the crop calendar matters as much as targeting.',
      },
      {
        service: 'website-design',
        why: 'A clear website with products by crop, a dealer locator, regional-language pages and – for organic brands – farm stories and online ordering makes an agribusiness credible to farmers, dealers, investors and buyers alike.',
      },
      {
        service: 'drone-shoots',
        why: 'Aerial footage of demonstration plots, orchards and large farms shows results and scale that ground shots miss. It works in films for farmers and dealers, investor decks and organic brand stories.',
      },
    ],
    seasonality:
      'Demand follows the crop calendar – inputs and equipment peak before kharif sowing with the south-west monsoon in June and July, and again before rabi sowing around October and November, and a weak or late monsoon shifts everything. Organic produce sells more steadily, with seasonal fruit and festive gifting bringing spikes.',
    compliance:
      'Food sold as organic has to meet FSSAI’s organic food regulations – generally certification under NPOP or PGS-India and the Jaivik Bharat logo – so “organic” claims in ads must match the certification held. Claims about yields or pest control for agri inputs should be backed by evidence and not be misleading.',
    kpis: [
      'Dealer enquiries and visits',
      'Cost per farmer lead',
      'WhatsApp opt-ins by district',
      'Repeat orders per season',
    ],
    faqs: [
      {
        q: 'Do farmers really respond to digital marketing?',
        a: 'Many do – smartphones, YouTube and WhatsApp are now common in rural Karnataka and across India. What works is regional-language video, practical advice and a clear route to the nearest dealer, not polished English ads.',
      },
      {
        q: 'How can marketing support our dealers?',
        a: 'Run local ads that send farmers to their shops, keep their Maps listings accurate, give them WhatsApp-ready product videos and posters, and pass on leads from their area quickly. Dealers who see enquiries coming from your campaigns tend to push your products harder.',
      },
      {
        q: 'Which language should our campaigns be in?',
        a: 'The language your farmers speak – Kannada across most of Karnataka, with Telugu, Tamil or Marathi near the state borders and other languages wherever else you sell. English works mainly for investors, B2B buyers and city consumers.',
      },
      {
        q: 'How should an organic brand prove it’s genuinely organic?',
        a: 'Show your certification clearly, explain your sourcing and farms, and let customers see the process through photos and videos. Vague “natural” or “organic” claims without certification lose trust and may break FSSAI rules.',
      },
    ],
    localAngle:
      'In the city, organic produce brands win a neighbourhood through apartment deliveries, weekend markets and residents’ word of mouth. In farming areas, input and equipment sellers win through the local dealer’s Maps listing and field demonstrations.',
  },
} satisfies Partial<Record<IndustrySlug, IndustryProfile>>;
