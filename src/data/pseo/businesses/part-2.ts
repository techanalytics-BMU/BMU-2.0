// Written profiles for local business types 28–53 (home services, education, property, weddings)
import type { BusinessProfile } from '@/types/pseo';
import type { BusinessSlug } from '../slugs';

export const businessesPart2 = {
  plumbers: {
    name: 'plumbers',
    title: 'Plumbers',
    businessNoun: 'plumbing business',
    industry: 'home-services',
    customers:
      'households and apartment associations dealing with leaks, blocked drains, low water pressure and sump, tank or motor problems – usually wanting someone at the door the same day',
    intro:
      'Most plumbing jobs start with water where it shouldn’t be and a phone in hand – the customer searches, scans the map results and calls whoever looks genuine and picks up. Marketing has to win that one call: a verified listing that appears for nearby searches, recent reviews that mention quick arrival and fair pricing, and a number that is always answered.',
    challenges: [
      {
        title: 'Fake listings crowd the map',
        text: 'Lead sellers create many Maps listings with made-up addresses and pass the calls to whichever plumber pays. A genuine plumber with a real workshop ends up buried under names that don’t exist.',
      },
      {
        title: 'Aggregators set the price',
        text: 'Home-service apps and lead platforms take a commission or sell the same enquiry to several plumbers, so the job goes to whoever calls back first at the lowest rate.',
      },
      {
        title: 'Customers fear the bill',
        text: 'People can’t see inside a wall or a drain, so they worry about being overcharged once the plumber arrives. Without a stated visiting charge and reviews that mention honest pricing, they keep calling around.',
      },
    ],
    searches: [
      'plumber near me',
      'plumber near me open now',
      'bathroom leakage repair',
      'kitchen sink blockage plumber',
      'water motor repair near me',
    ],
    channels: [
      {
        service: 'google-business-profile',
        why: 'A verified profile with a real address or a correctly set service area, accurate hours, a service list – leak repair, drain cleaning, tank and motor work – and job photos is what earns the call from Maps. Asking every customer for a review that mentions the job and how fast you arrived builds the one signal fake listings can’t copy.',
      },
      {
        service: 'google-ads',
        why: 'Call ads limited to a few kilometres and to the hours someone can actually attend put your number in front of people with a leak right now. Tracking calls by search term shows which jobs – blocked drains, leak detection, motor repair – are worth paying for.',
      },
      {
        service: 'local-seo',
        why: 'Map rankings for “plumber near me” depend on distance, relevance and prominence, so the listing, website and directory entries need the same name, number and address everywhere. A page for each kind of job helps Google match the business to searches like “bathroom leakage repair”.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Customers can send a photo or video of the leak and get an instant reply with the visiting charge and an arrival window. Reminders for tank cleaning or a pipe check months later bring past customers back instead of letting them search again.',
      },
      {
        service: 'website-design',
        why: 'A simple mobile page with a click-to-call button, the areas covered, visiting charges and real job photos gives Maps and ad visitors a reason to call. It also shows Google and customers that this is a working plumber, not another lead-selling front.',
      },
    ],
    faqs: [
      {
        q: 'How do we compete with fake plumber listings on Google Maps?',
        a: 'Keep your own profile verified, accurate and active – real photos, real reviews and the same details everywhere – and report listings that clearly break Google’s guidelines through suggest an edit or Google’s redressal form. Removal is neither guaranteed nor quick, so a strong genuine profile matters more than chasing every fake one.',
      },
      {
        q: 'Should we list our prices online?',
        a: 'Showing your visiting charge and starting prices for common jobs, such as replacing a tap or clearing a drain, reduces the fear of being overcharged. Final prices can still depend on what you find on site, as long as you say so clearly.',
      },
      {
        q: 'Are leads from apps and listing platforms worth paying for?',
        a: 'They can fill quiet days, but the customer belongs to the platform and is often called by several plumbers. Your own Maps presence and a list of past customers mean the next leak comes straight to you.',
      },
    ],
    localAngle:
      'A plumber’s market is the area they can reach within half an hour, and customers there choose on Maps ranking, recent reviews and who answers first. Repeat work from apartment associations and neighbours passing on the number keeps the phone ringing between emergencies.',
  },

  electricians: {
    name: 'electricians',
    title: 'Electricians',
    businessNoun: 'electrician',
    industry: 'home-services',
    customers:
      'homeowners, tenants and small offices needing fixes for tripping MCBs and dead sockets, new fittings, inverter or EV charger installation and rewiring of older homes',
    intro:
      'People look for an electrician in two moods – urgently when the power trips and won’t come back, and more carefully when they’re rewiring a house or adding an EV charger. Marketing has to catch the urgent call on Maps and also prove enough skill and safety to win the bigger, planned jobs.',
    challenges: [
      {
        title: 'Small jobs drown out big ones',
        text: 'Fan fitting and switch repairs bring a stream of low-value calls, while rewiring, panel upgrades and charger installations – the profitable work – need their own visibility and a site visit to quote.',
      },
      {
        title: 'Safety needs proof',
        text: 'Customers letting someone work on their wiring want to know the electrician is licensed and careful. Photos of neat distribution boards and reviews that mention safe, tidy work matter more here than in most trades.',
      },
      {
        title: 'Fake listings and app pricing',
        text: 'Fake “electrician near me” listings divert calls to lead sellers, and app-based platforms anchor customers to low fixed prices for small jobs. An independent electrician has to look clearly genuine and explain what their rate covers.',
      },
    ],
    searches: [
      'electrician near me',
      'mcb keeps tripping',
      'house rewiring cost',
      'ev charger installation at home',
      'inverter installation near me',
    ],
    channels: [
      {
        service: 'local-seo',
        why: 'Ranking in Maps for “electrician near me” and for specific jobs – MCB repair, inverter installation, wiring – brings the urgent calls from homes within reach. Consistent details across the website and directories, plus a page for each job type, help Google trust a real local electrician over a fake listing.',
      },
      {
        service: 'google-business-profile',
        why: 'The profile should list each service, show photos of finished boards and installations, and mention your licence in the description. Reviews that talk about safety, tidiness and arriving on time are what make a customer pick you over the next listing.',
      },
      {
        service: 'seo',
        why: 'Guides on rewiring an older home, sizing an inverter or installing an EV charger in an apartment parking bay rank for the planned searches that lead to larger jobs. They also give customers confidence in you before the site visit.',
      },
      {
        service: 'google-ads',
        why: 'Run two kinds of campaign – call ads for urgent fault searches in a tight radius, and lead forms for rewiring and charger installation that ask for property type and size. Judge the second on cost per booked site visit, not per click.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Customers can send a photo of the board or the fault before you visit, so you quote sensibly and bring the right parts. Reminders for inverter battery checks and a follow-up after a rewiring job bring repeat and referral work.',
      },
    ],
    faqs: [
      {
        q: 'How do we get more rewiring and installation jobs instead of only small repairs?',
        a: 'Give the bigger jobs their own pages, ads and photos, and offer a site visit rather than a phone quote. Someone planning a rewire searches differently from someone with a tripped MCB, and wants answers on cost, time and disruption.',
      },
      {
        q: 'Does showing our licence really help?',
        a: 'Yes – customers worry about safety with electrical work, and a stated licence alongside photos of tidy installations reassures them. It also sets you apart from listings that give no detail about who will turn up.',
      },
      {
        q: 'Is it worth targeting EV charger installation?',
        a: 'Home charger installation is a growing search as more households buy electric cars, and apartment installations often need a site check and the association’s approval. Clear content on that process and a simple enquiry form can bring planned, higher-value jobs.',
      },
    ],
    localAngle:
      'Electricians win their area through quick response on urgent calls and the trust that follows a safe, tidy job, which turns into referrals within the same building or street. A Maps listing with plenty of recent local reviews is what new customers in that radius check first.',
  },

  carpenters: {
    name: 'carpenters',
    title: 'Carpenters',
    businessNoun: 'carpentry business',
    industry: 'home-services',
    customers:
      'homeowners and tenants needing furniture repairs, door and lock fixes, custom wardrobes, beds, shelves and TV units, plus interior firms that subcontract woodwork',
    intro:
      'A carpenter gets two kinds of enquiry: quick fixes – a door that won’t close, a broken hinge, flat-pack furniture to assemble – and custom work such as wardrobes, beds and storage built to fit the room. The repairs come from Maps and word of mouth, while custom jobs are won by showing finished work and quoting clearly.',
    challenges: [
      {
        title: 'Finished work goes unseen',
        text: 'Most carpenters never photograph their jobs, so a skilled craftsman has nothing to show a customer who is also looking at furniture brands. Photos and short videos of finished pieces are the portfolio that wins custom orders.',
      },
      {
        title: 'Ready-made and modular rivals',
        text: 'Customers wonder whether custom carpentry is worth it next to ready-made furniture or factory-made modular units. A carpenter has to show where custom work wins – odd-sized rooms, solid materials, changes and repairs later.',
      },
      {
        title: 'Quotes judged on price alone',
        text: 'Customers compare quotes without knowing the difference between plywood grades, laminates or hinges and channels. Unless the materials are explained, the cheapest quote wins.',
      },
    ],
    searches: [
      'carpenter near me',
      'furniture repair near me',
      'wardrobe carpenter near me',
      'door lock repair carpenter',
      'furniture assembly service',
    ],
    channels: [
      {
        service: 'google-business-profile',
        why: 'Separate service entries for repairs, custom wardrobes, beds and assembly, with a steady flow of before-and-after photos, help the profile show for both quick-fix and custom searches. Reviews that mention neat finishing and on-time work carry the most weight.',
      },
      {
        service: 'instagram-marketing',
        why: 'Reels of a wardrobe going from bare wall to finished unit, close-ups of joinery and hardware, and quick repair transformations make woodwork easy to judge. A highlight per job type and a WhatsApp button on the profile turn viewers into site-visit requests.',
      },
      {
        service: 'local-seo',
        why: 'Ranking in Maps for “carpenter near me” and “furniture repair near me” brings the steady repair calls that keep a team busy between larger jobs. Matching details on directories and a page per service help Google place the business correctly.',
      },
      {
        service: 'photography',
        why: 'A short shoot of finished wardrobes, beds or TV units in good light gives the carpenter a portfolio that can sit next to furniture brands. The same photos serve the Google profile, Instagram, WhatsApp quotes and any website.',
      },
      {
        service: 'meta-ads',
        why: 'Ads showing finished custom storage, aimed at homeowners around recently handed-over apartment projects, bring custom-work enquiries rather than small repairs. A short form asking for the item, room size and timeline shows which site visits are worth making.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Customers send photos and measurements of the space or the broken piece and get a quick rough estimate and a visit slot. A WhatsApp catalogue of past designs and laminate options helps them decide before you arrive.',
      },
    ],
    faqs: [
      {
        q: 'Should a carpenter market repairs or custom work?',
        a: 'Most do both, but they need different messages. Repairs win on response time and Maps visibility, while custom wardrobes and units win on photos of finished work and clear quotes – so give each its own posts, services and ads.',
      },
      {
        q: 'How do we explain why our quote is higher than someone else’s?',
        a: 'Break the quote into materials, hardware and labour, and name the grade of plywood or board and the fittings you’ll use. Showing a finished piece made with the same materials makes the difference easy to see.',
      },
      {
        q: 'Is Instagram useful for a small carpentry business?',
        a: 'Yes, because custom woodwork is chosen by how it looks. Short videos of jobs in progress and finished units, posted regularly, give customers a reason to call you rather than walk into a furniture store.',
      },
    ],
    localAngle:
      'Carpenters live on referrals from the same building or street – the neighbour who sees a new wardrobe and asks for the number. A Maps listing with recent local reviews and photos tagged by service turns those referrals into calls and catches people nearby who don’t know anyone yet.',
  },

  painters: {
    name: 'painters',
    title: 'Painters',
    businessNoun: 'painting contractor',
    industry: 'home-services',
    customers:
      'homeowners repainting before a festival, a housewarming or a new tenant, landlords between tenancies, and housing societies planning exterior and waterproofing work',
    intro:
      'House painting is a planned purchase – customers search for costs per square foot, compare a few contractors and want an inspection and a written quote before they agree. Marketing has to get the painter onto that shortlist with clear pricing information, real before-and-after work and reviews that mention clean, on-time jobs.',
    challenges: [
      {
        title: 'Paint brands sell painting too',
        text: 'Large paint companies run their own painting services with big ad budgets and packaged offers. An independent contractor has to show what they offer instead – flexibility, personal supervision and quotes the customer can discuss directly.',
      },
      {
        title: 'Festive rush, monsoon lull',
        text: 'Demand peaks before Diwali, Dasara and housewarming dates and drops in the monsoon, when exterior work stops. Without planning, painters are overbooked for weeks and then idle.',
      },
      {
        title: 'Quotes that aren’t comparable',
        text: 'One quote includes putty, primer and two coats, another doesn’t, so customers compare totals and pick the cheapest. Explaining what each quote covers is part of the selling.',
      },
    ],
    searches: [
      'painters near me',
      'house painting cost per sq ft',
      'interior painting cost for 2bhk',
      'exterior painting and waterproofing',
      'texture painting for living room',
    ],
    channels: [
      {
        service: 'google-ads',
        why: 'Search ads on cost and service searches – “house painting cost per sq ft”, “2BHK interior painting” – reach people planning a job in the next few weeks. Counting a booked site inspection as the conversion, and raising budgets before the festive season, keeps spend on serious customers.',
      },
      {
        service: 'seo',
        why: 'Pages that explain painting costs by home size, the steps in a proper job and the difference between paint finishes answer what customers ask before they call. Colour idea posts and waterproofing guides bring in planners months before they book.',
      },
      {
        service: 'google-business-profile',
        why: 'Before-and-after photos of real homes, services listed from interior painting to waterproofing and texture work, and reviews that mention clean-up and timelines help a contractor stand out from brand services on Maps.',
      },
      {
        service: 'meta-ads',
        why: 'Short before-and-after videos shown to homeowners nearby in the weeks before Diwali catch people who intend to repaint but haven’t started searching. A free-inspection form keeps the next step simple, and cost per inspection shows whether the ads pay.',
      },
      {
        service: 'instagram-marketing',
        why: 'Reels of a room transformation, texture and stencil finishes and colour combinations give customers ideas and proof of quality. A highlight for each finish helps them decide what they want before the inspection.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Sending an itemised quote and the chosen shades on WhatsApp right after the inspection, then a follow-up a few days later, wins jobs that would otherwise go quiet. A reminder years later brings repeat repainting work.',
      },
    ],
    faqs: [
      {
        q: 'How do we compete with the paint companies’ own painting services?',
        a: 'Don’t try to match their ad spend. Show your own completed homes, explain your process and materials, offer personal supervision and quote clearly – many customers prefer a local contractor they can talk to directly.',
      },
      {
        q: 'When should painters advertise most?',
        a: 'Start a few weeks before the festive season and common housewarming months, when customers are planning, and cut exterior painting ads during the monsoon. Waterproofing enquiries tend to rise just before and during the rains, so that service can take the budget then.',
      },
      {
        q: 'Should we show prices per square foot on our website?',
        a: 'Indicative ranges help customers budget and filter out mismatched enquiries. Explain what changes the price – wall condition, putty work, paint grade and number of coats – so the quote after inspection doesn’t feel like a surprise.',
      },
    ],
    localAngle:
      'Painters win nearby customers through visible work – a freshly painted exterior that neighbours notice – and Maps reviews that mention tidy, on-time jobs. A housing society that sees one good exterior often invites the same contractor to quote for the whole complex.',
  },

  'pest-control-services': {
    name: 'pest control services',
    title: 'Pest Control Services',
    businessNoun: 'pest control company',
    industry: 'home-services',
    customers:
      'households dealing with cockroaches, termites, bed bugs, rodents and mosquitoes, plus restaurants, offices and warehouses that need regular treatment under a contract',
    intro:
      'People search for pest control when the problem is already visible – termites in a wardrobe, cockroaches in the kitchen, bed bugs after a trip – and they want it gone quickly, safely and without endless repeat visits. Marketing has to answer their worries about chemicals, children and pets, show the company is licensed and dependable, and turn one-off treatments into annual contracts.',
    challenges: [
      {
        title: 'Fear of chemicals',
        text: 'Families with babies, elderly parents or pets worry about what is being sprayed in their home. Without clear information on the method, the products and how long to stay out, they hesitate or pick a cheaper, less careful provider.',
      },
      {
        title: 'One-time customers',
        text: 'Most homes call once, pay for a treatment and forget the company’s name. The business grows only if it turns those jobs into annual maintenance contracts and timely follow-up treatments.',
      },
      {
        title: 'Cheap operators undercut',
        text: 'Unlicensed operators and fake listings quote very low prices and skip follow-up visits. A proper company has to explain what its price includes – inspection, the right treatment and a service warranty.',
      },
    ],
    searches: [
      'pest control near me',
      'termite treatment for home cost',
      'cockroach control for 2bhk',
      'bed bug treatment near me',
      'pest control for restaurant',
    ],
    channels: [
      {
        service: 'local-seo',
        why: 'Ranking in Maps for “pest control near me” and pest-specific searches – termites, bed bugs, cockroaches – brings urgent household calls from the surrounding area. A page for each pest and consistent business details everywhere help Google match the right problem to your listing.',
      },
      {
        service: 'seo',
        why: 'Pages that explain how termite, bed bug and cockroach treatments work, how many visits they take and what precautions families should take rank for the research people do before calling. They also reassure customers before the technician arrives.',
      },
      {
        service: 'google-ads',
        why: 'Campaigns split by pest, and by homes versus commercial premises, show which treatments bring paying customers. Call tracking and booked-inspection forms measure cost per job rather than cost per click.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Reminders for the second bed bug visit, the next quarterly treatment or contract renewal stop customers drifting to another provider. Messages before each visit on how to prepare the home cut down on wasted trips.',
      },
      {
        service: 'google-business-profile',
        why: 'A profile listing each pest treated, the licence noted in the description, photos of technicians and equipment, and reviews that mention results gives the company credibility over unknown listings. Posts before the monsoon about termites and mosquitoes catch the seasonal rise in searches.',
      },
      {
        service: 'website-design',
        why: 'A website with separate home and commercial sections, treatment details, safety information and an inspection booking form converts both kinds of enquiry. Restaurants and offices in particular look for treatment records and contract terms before they call.',
      },
    ],
    faqs: [
      {
        q: 'How do we turn one-time customers into annual contracts?',
        a: 'Offer a clear annual plan at the first visit, explain why pests return without follow-up treatment, and send reminders before the next visit is due. Customers who see results from the first treatment are the easiest to convert.',
      },
      {
        q: 'Should we talk about the chemicals we use?',
        a: 'Yes, in plain language – what is used, why, and what precautions the family should take. Openness about safety is one of the strongest reasons customers choose a company, especially homes with babies or pets.',
      },
      {
        q: 'Is commercial pest control worth marketing separately?',
        a: 'Usually, because restaurants, offices and warehouses search differently and buy on contracts. Food businesses also need regular pest control to meet food safety hygiene requirements, so they value records and reliable scheduling over the lowest price.',
      },
    ],
    localAngle:
      'Pests spread across a building, so a successful treatment in one flat often leads to calls from neighbours and then the apartment association. Reviews from nearby homes and society-wide contracts make a pest control company the default name in its area.',
  },

  'home-cleaning-services': {
    name: 'home cleaning services',
    title: 'Home Cleaning Services',
    businessNoun: 'home cleaning service',
    industry: 'home-services',
    customers:
      'working couples, families and elderly residents in apartments who want reliable weekly or fortnightly cleaning by the same trained staff',
    intro:
      'Regular home cleaning is bought on trust and kept on consistency – customers want vetted staff, the same person each visit and a schedule that doesn’t slip. Marketing has to win the first booking from people tired of unreliable help, then keep them on a monthly plan long enough to be profitable.',
    challenges: [
      {
        title: 'Letting strangers into the home',
        text: 'Customers worry about who will be inside their home while they’re at work. Background checks, uniforms, ID cards and reviews from other households in the same building matter more than the price.',
      },
      {
        title: 'Competing with informal help',
        text: 'Most households already use local domestic help paid in cash. A cleaning service has to show what it adds – trained staff, proper equipment, a replacement when someone is on leave – to justify the cost.',
      },
      {
        title: 'Churn after the first month',
        text: 'Many customers try a plan and cancel after one missed visit or a change of cleaner. Keeping them depends on scheduling, communication and quick fixes, not just new leads.',
      },
    ],
    searches: [
      'home cleaning services near me',
      'weekly house cleaning service',
      'maid service for apartment',
      'bathroom and kitchen cleaning service',
      'part time maid near me',
    ],
    channels: [
      {
        service: 'google-business-profile',
        why: 'New customers look for reviews that mention the same cleaner each week, punctuality and honesty, so the profile should collect them steadily and answer each one. Photos of uniformed staff with proper equipment separate a managed service from informal help.',
      },
      {
        service: 'meta-ads',
        why: 'Ads aimed at working professionals in large apartment complexes nearby, offering a trial clean, bring in plan sign-ups from the buildings your team already covers. The number to watch is how many trial customers stay on a monthly plan, not cost per lead.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Visit confirmations with the cleaner’s name, easy rescheduling and monthly renewal reminders keep a recurring service running and cut cancellations. A one-tap feedback message after each visit flags problems before the customer leaves.',
      },
      {
        service: 'local-seo',
        why: 'Ranking for “home cleaning services near me” and “maid service” only where your team can reach reliably brings customers who fit a route. Clear service-area and plan pages help Google and customers see exactly where you work.',
      },
      {
        service: 'social-media-management',
        why: 'Posts introducing the team, cleaning checklists, training sessions and customer stories build the trust a recurring service depends on. Residents who see the brand regularly are more willing to give it a try.',
      },
      {
        service: 'google-ads',
        why: 'Search campaigns on recurring-intent terms – “weekly cleaning”, “maid service for apartment” – kept apart from one-off deep cleaning searches bring customers who want a plan. Tracking sign-ups by plan type shows which searches are worth the spend.',
      },
    ],
    faqs: [
      {
        q: 'How do we convince customers to switch from their regular maid?',
        a: 'Focus on what a managed service provides – a backup when staff are on leave, background checks, trained cleaning methods and someone accountable when something goes wrong. Many customers switch only after their current help becomes unreliable, so be visible when they start looking.',
      },
      {
        q: 'How can we reduce cancellations?',
        a: 'Keep the same cleaner with each home where possible, confirm every visit and act quickly on complaints. A short feedback message after each visit catches problems while they can still be fixed.',
      },
      {
        q: 'Should we run ads for both regular cleaning and deep cleaning?',
        a: 'Yes, but separately. People searching for a one-off deep clean want a price and a date, while recurring customers want trust and a plan, so mixing them in one campaign wastes budget and blurs the message.',
      },
    ],
    localAngle:
      'A recurring cleaning service is most efficient in a tight cluster of apartment complexes, where staff can cover several homes without long travel and one happy resident recommends you in the society WhatsApp group. Concentrating marketing on the buildings you already serve keeps routes efficient and referrals likely.',
  },

  'deep-cleaning-services': {
    name: 'deep cleaning services',
    title: 'Deep Cleaning Services',
    businessNoun: 'deep cleaning company',
    industry: 'home-services',
    customers:
      'tenants moving in or out, landlords between tenants, new flat owners after interior work, and families preparing for Diwali, a housewarming or visiting relatives',
    intro:
      'Deep cleaning is a one-off job tied to a date – a move, a handover, a festival or the end of renovation work – so customers search for a price by home size and book whoever can come that week. Marketing has to show clear package prices, before-and-after proof and open slots, and be visible exactly when those moments arrive.',
    challenges: [
      {
        title: 'No repeat business by default',
        text: 'A customer who books a move-out clean may not need you again for a year or more. The business needs a constant flow of new customers and reasons for past ones to come back.',
      },
      {
        title: 'Price-per-BHK comparisons',
        text: 'Customers compare packages by BHK without seeing what each includes – sofa shampooing, kitchen degreasing, window and balcony tracks. A clear checklist often decides who wins the booking.',
      },
      {
        title: 'Peaks that are hard to staff',
        text: 'Demand jumps before Diwali and around month-end moving dates, then falls away. Marketing has to fill the quieter weeks with post-renovation and office work so trained teams stay busy.',
      },
    ],
    searches: [
      'full home deep cleaning cost',
      'deep cleaning services near me',
      'move in cleaning service',
      'post construction cleaning near me',
      'sofa and carpet cleaning',
    ],
    channels: [
      {
        service: 'google-ads',
        why: 'Search ads for “2BHK deep cleaning”, “move-out cleaning” and “post construction cleaning” reach customers with a date in mind, and showing the starting package price in the ad filters out bargain hunters. Budgets can rise in the weeks before Diwali and around month-end, when moving demand peaks.',
      },
      {
        service: 'seo',
        why: 'Package pages by home size, a checklist of what each includes and a guide to cleaning after interior work rank for the price research customers do. Move-in and move-out pages also catch tenants worried about getting their deposit back.',
      },
      {
        service: 'google-business-profile',
        why: 'Before-and-after photos of kitchens, bathrooms and freshly renovated flats, with reviews that name the job, help a first-time customer trust a company they’ve never used. Festive offers posted on the profile catch seasonal searches.',
      },
      {
        service: 'meta-ads',
        why: 'In the run-up to Diwali and the housewarming months, ads showing a greasy kitchen turned spotless reach households who will want a clean but haven’t searched yet. Retargeting people who looked at your prices brings them back to pick a date.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Customers send photos of the space and get a quote and slot options within minutes, which matters when they’re booking around a move. A message before next year’s festival season brings one-off customers back.',
      },
      {
        service: 'local-seo',
        why: 'Ranking in Maps for deep cleaning, sofa cleaning and move-in cleaning nearby wins customers who want a team that can arrive quickly with equipment. A separate service entry for each job helps the listing appear for each kind of search.',
      },
    ],
    faqs: [
      {
        q: 'How do we get repeat business from one-off customers?',
        a: 'Keep their details, ask for a review after the job, and send a reminder before the next festival season. Offering a sofa, carpet or kitchen-only clean in between gives them a reason to come back sooner.',
      },
      {
        q: 'Should we publish package prices?',
        a: 'Starting prices by home size, with a list of what’s included, help customers compare and make your quote easier to accept. Note what changes the price – heavy post-renovation dust or extra rooms – so there are no disputes on the day.',
      },
      {
        q: 'Is it worth targeting landlords and property managers?',
        a: 'Yes – they need cleaning between every tenancy and can become regular customers. A simple handover-cleaning package and quick booking on WhatsApp suit how they work.',
      },
    ],
    localAngle:
      'Deep cleaning teams travel with machines and supplies, so they do well within a radius they can cover easily, where large apartment complexes see regular move-ins, move-outs and handovers. Reviews from those buildings and visibility in their resident groups keep bookings coming each month.',
  },

  'ac-repair-and-service': {
    name: 'AC repair and service businesses',
    title: 'AC Repair & Service Businesses',
    businessNoun: 'AC service business',
    industry: 'home-services',
    customers:
      'households and small offices with split and window ACs needing servicing before summer, gas refilling, repairs when cooling fails, and installation or removal when they move',
    intro:
      'AC repair demand is sharply seasonal – searches rise as summer approaches and turn urgent when a unit stops cooling in the heat, and customers book whoever can come today. Marketing has to be ready before the rush, win those urgent calls against fake brand listings and turn one-time service customers into annual maintenance contracts.',
    challenges: [
      {
        title: 'Fake brand service centres',
        text: 'Searches for a brand’s service number are full of listings and ads posing as authorised centres. Customers who get burned by these become suspicious of every independent repairer, so being clear about who you are matters.',
      },
      {
        title: 'Distrust of gas refills',
        text: 'Customers have heard of technicians who push unnecessary gas refilling or parts. Clear diagnosis, transparent charges and reviews that mention honesty set a business apart.',
      },
      {
        title: 'A few busy months, then quiet',
        text: 'Demand concentrates in the hot months and drops through the monsoon and winter. Annual contracts, pre-season service offers and installation work help even out the year.',
      },
    ],
    searches: [
      'ac service near me',
      'ac not cooling repair',
      'split ac gas refilling charges',
      'ac installation and uninstallation',
      'ac amc for home',
    ],
    channels: [
      {
        service: 'google-ads',
        why: 'Search budgets for “AC service near me” and “AC not cooling” should rise just before and through the hot months and fall afterwards, with call ads for urgent repairs. Ad text can name the brands you service but must not imply you’re an authorised centre – that keeps both the ad account and the customer’s trust safe.',
      },
      {
        service: 'google-business-profile',
        why: 'A verified listing under your real business name, with the brands and AC types you handle, the visiting charge and photos of your technicians, separates you from fake brand listings. Reviews that mention an honest diagnosis are worth more than any ad.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Pre-summer service reminders to past customers, AMC renewal messages and visit confirmations with the technician’s name turn a seasonal customer list into repeat business. Customers can also send a photo of the unit’s nameplate so the technician brings the right parts.',
      },
      {
        service: 'local-seo',
        why: 'Ranking in Maps for AC service and repair searches within your service radius brings the urgent calls when a unit fails. Pages by job – servicing, gas refilling, installation, uninstallation – help Google show the listing for the right search.',
      },
      {
        service: 'meta-ads',
        why: 'In the weeks before summer, ads offering a pre-season service or an AMC to homes nearby catch customers before their AC fails. Offers for servicing several units in one apartment complex can fill a technician’s day in a single building.',
      },
      {
        service: 'seo',
        why: 'Pages on why an AC stops cooling, how often to service it and what proper gas refilling involves rank for the questions people search before calling. They show you won’t oversell, which is the main worry in this trade.',
      },
    ],
    faqs: [
      {
        q: 'How do we compete with fake “authorised service centre” listings?',
        a: 'Use your real business name, say plainly that you’re an independent multi-brand service if that’s what you are, and build reviews that mention honest pricing. Report listings that clearly break Google’s rules, but put most of your effort into a strong genuine profile.',
      },
      {
        q: 'When should we start advertising for summer?',
        a: 'A few weeks before the heat sets in, when people start thinking about servicing, with budget kept ready for the urgent repair searches that follow. Reduce spend once demand falls and shift the focus to AMC renewals and installations.',
      },
      {
        q: 'Are annual maintenance contracts worth promoting?',
        a: 'Yes – an AMC brings revenue in the quiet months and stops the customer searching again next summer. Offer it right after a good service visit, when the customer is most satisfied.',
      },
    ],
    localAngle:
      'AC service is won within a short travel radius, where technicians can reach several homes a day during the rush. Clusters of customers in the same apartment complex, built through society offers and neighbour referrals, keep routes efficient and reviews local.',
  },

  'appliance-repair': {
    name: 'appliance repair businesses',
    title: 'Appliance Repair Businesses',
    businessNoun: 'appliance repair business',
    industry: 'home-services',
    customers:
      'households with washing machines, refrigerators, microwaves, geysers and water purifiers that have broken down after the warranty ends, wanting a quick fix at a fair price',
    intro:
      'Appliance repair searches are specific – an appliance, often a brand and a fault, such as a front-load washing machine that won’t drain – and the customer wants someone who knows that machine and can come soon. Marketing has to show up for those exact searches, earn trust in a category full of fake helpline numbers and make the cost of a visit clear before anyone arrives.',
    challenges: [
      {
        title: 'Searches name the brand',
        text: 'Many customers search with a brand name expecting the company’s own service centre. An independent repairer has to rank for those searches honestly, as a multi-brand service, without implying authorisation.',
      },
      {
        title: 'Fake customer care numbers',
        text: 'Scam listings and ads posing as brand helplines take advance payments or overcharge, so customers distrust any number they find online. A verifiable identity, a real address and reviews are what rebuild that trust.',
      },
      {
        title: 'Repair or replace doubts',
        text: 'Owners of an older machine wonder whether to fix it or buy new, and many decide before they call. Honest advice and a clear inspection charge win the job and the review.',
      },
    ],
    searches: [
      'washing machine repair near me',
      'fridge not cooling repair',
      'front load washing machine not draining',
      'microwave oven repair near me',
      'ro water purifier service',
    ],
    channels: [
      {
        service: 'seo',
        why: 'A page for each appliance and common fault – a fridge not cooling, a washing machine not spinning, a geyser not heating – ranks for the exact searches customers type and shows you know the machine. Pages for the brands you repair, stating clearly that you’re independent, catch brand searches without misleading anyone.',
      },
      {
        service: 'local-seo',
        why: 'Ranking in Maps for appliance repair near the customer brings the same-day calls, and consistent details across your website and directories help Google trust a genuine business over scam listings. Choosing the right categories and listing each appliance as a service widens the searches the listing appears for.',
      },
      {
        service: 'google-business-profile',
        why: 'Photos of your workshop, technicians and spare parts stock, a clear list of appliances and brands serviced, and reviews that name the specific repair show customers a real business. Answering complaints in public shows an accountability that scam numbers never offer.',
      },
      {
        service: 'google-ads',
        why: 'Campaigns split by appliance show which repairs bring profitable jobs, so budget can follow the work you most want. Ads should say “multi-brand service” plainly, and every call should be tracked through to a booked visit.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Customers send the model number and a short video of the fault, so the technician arrives with the likely part and a fair estimate. Updates on part arrival and the next visit time reduce frustration on two-visit jobs.',
      },
      {
        service: 'ai-chatbots',
        why: 'A chatbot on the website and WhatsApp asks for the appliance, brand, age and fault, states the inspection charge and books a slot at any hour. It captures late enquiries that would otherwise go to the next number in the results.',
      },
    ],
    faqs: [
      {
        q: 'Can we advertise repairs for specific brands?',
        a: 'You can say which brands you repair, but don’t present yourself as a brand’s authorised service centre unless you are one. Ad platforms and customers both treat that as misleading, and being open about being an independent multi-brand service builds more trust.',
      },
      {
        q: 'How do we deal with customers who think we’re another scam listing?',
        a: 'Make your identity easy to check – a real business name, address, workshop photos and technician IDs – and avoid asking for large advance payments. Reviews that describe specific repairs carry the most weight.',
      },
      {
        q: 'Should we show repair prices online?',
        a: 'Show the inspection or visiting charge and typical ranges for common repairs, and explain that parts are charged separately. Customers are far more likely to book when they know what the visit will cost.',
      },
    ],
    localAngle:
      'Appliance repair works within the radius a technician can cover in a day, and customers there choose on Maps ranking, reviews and how soon someone can come. Satisfied customers call back for their other appliances and pass the number to neighbours, so every good job adds to the local list.',
  },

  'packers-and-movers': {
    name: 'packers and movers',
    title: 'Packers & Movers',
    businessNoun: 'packers and movers company',
    industry: 'logistics-and-transport',
    customers:
      'families and working professionals shifting homes within the city or to another city, people sending a car or bike, and companies relocating offices or employees',
    intro:
      'Shifting customers search by route and home size, collect several quotes and worry most about damage, hidden charges and movers who hold goods back for more money. Marketing has to put the company on the shortlist for the routes it actually runs, then earn trust with transparent quotes, real reviews and a visible track record.',
    challenges: [
      {
        title: 'A category hit by fraud',
        text: 'Stories of fake movers who raise the price mid-move or hold belongings until extra money is paid make customers suspicious of every company they find online. A genuine mover has to prove it is real before price even comes up.',
      },
      {
        title: 'Leads shared with rivals',
        text: 'Lead platforms often sell the same shifting enquiry to several movers, who then race each other on price within minutes. Owning search and Maps visibility gives the company enquiries it doesn’t have to share.',
      },
      {
        title: 'Every route is its own market',
        text: 'A customer moving to Hyderabad or Pune searches for that route, not for movers in general. Covering the routes the company runs, with honest transit times and what affects the price, is what brings intercity jobs.',
      },
    ],
    searches: [
      'packers and movers near me',
      'packers and movers bangalore to hyderabad',
      'house shifting charges for 2bhk',
      'bike transport bangalore to chennai',
      'local shifting within bangalore',
    ],
    channels: [
      {
        service: 'google-ads',
        why: 'Separate campaigns for local shifting, each intercity route and vehicle transport show which moves bring profitable jobs, and lead forms that ask for home size, moving date and destination give the sales team what it needs to quote. Measuring cost per confirmed booking, not per lead, avoids paying for price shoppers.',
      },
      {
        service: 'seo',
        why: 'A page for each route the company runs – with typical transit times, what affects the cost and how goods are packed – ranks for the route searches customers type. Shifting checklists and guides to transit insurance catch customers early in their planning.',
      },
      {
        service: 'google-business-profile',
        why: 'A verified listing with the real office and warehouse address, photos of your own team packing and your own trucks, and reviews that mention specific moves and routes help customers tell a genuine company from a fake one. Calm, specific replies to complaints show accountability.',
      },
      {
        service: 'local-seo',
        why: 'Ranking in Maps for “packers and movers near me” and local shifting searches brings in-city moves, which are frequent among tenants changing flats. Matching details across directories and the website help Google trust the listing over look-alike names.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Customers can share a video walkthrough of their home for a quick estimate, then receive the itemised quote, packing-date confirmation and updates on moving day on WhatsApp. Clear written communication heads off disputes about the final bill.',
      },
      {
        service: 'video-production',
        why: 'Short videos of the packing process – wrapping, labelling, loading – show the care customers worry about and work in ads, on the profile and in quote follow-ups. A real move filmed from start to finish answers more questions than any brochure.',
      },
    ],
    faqs: [
      {
        q: 'How do we get customers to trust us in a category with so many scams?',
        a: 'Make every detail verifiable – registered business name, GST number, office address, photos of your own team and trucks – and always give a written, itemised quote. Reviews that mention specific routes and moves reassure customers more than general praise.',
      },
      {
        q: 'Should we pay for leads from listing platforms?',
        a: 'They can fill gaps, but the same lead often goes to several movers, so winning depends on speed and price. Your own route pages, ads and Maps presence bring enquiries that come only to you.',
      },
      {
        q: 'Is it worth creating a page for every route?',
        a: 'Only for routes you run regularly. A useful page with real transit times, packing details and what affects the cost can rank for that route, while thin copies of the same page for dozens of cities won’t help.',
      },
    ],
    localAngle:
      'Local shifting jobs come from the area around the office and warehouse, where customers check Maps reviews and ask neighbours who moved recently. Strong local visibility also feeds intercity work, since many long-distance moves start with a search near the customer’s current home.',
  },

  'modular-kitchen-designers': {
    name: 'modular kitchen designers',
    title: 'Modular Kitchen Designers',
    businessNoun: 'modular kitchen studio',
    industry: 'interior-design',
    customers:
      'new flat owners nearing possession, families replacing a worn-out kitchen, and homeowners who want the kitchen and wardrobes done without a full interior project',
    intro:
      'Kitchen buyers usually know roughly what they want – L-shaped or parallel, a particular finish, more storage – and compare studios on design, materials, hardware and the final quote. Marketing has to show finished kitchens that look like the customer’s own layout, explain materials clearly and turn experience-centre visits into signed orders.',
    challenges: [
      {
        title: 'Quotes nobody can compare',
        text: 'One studio quotes BWP plywood with soft-close fittings, another quotes particle board with basic hardware, and the customer sees only the totals. Studios that spell out specifications avoid being judged on price alone.',
      },
      {
        title: 'Big interior brands',
        text: 'National interior brands advertise modular kitchens heavily with packaged prices and fixed timelines. An independent studio has to show custom design, finishing quality and direct access to the designer.',
      },
      {
        title: 'Showroom visits that go quiet',
        text: 'Customers visit several experience centres, collect 3D designs and stop replying. Follow-up with relevant finished kitchens and a clear next step decides who signs.',
      },
    ],
    searches: [
      'modular kitchen near me',
      'modular kitchen price for l shaped kitchen',
      'parallel kitchen design',
      'modular kitchen cost for 2bhk',
      'acrylic vs laminate kitchen cabinets',
    ],
    channels: [
      {
        service: 'meta-ads',
        why: 'Ads featuring finished kitchens in layouts common to new apartment projects, aimed at owners around recently handed-over buildings, reach buyers before they start collecting quotes. Lead forms that ask for layout, possession date and budget help decide who gets a showroom invitation first.',
      },
      {
        service: 'google-ads',
        why: 'Search ads on “modular kitchen near me”, layout and price searches catch customers ready to visit a showroom. Tracking cost per showroom visit and per signed order shows whether the campaign brings real projects or just brochure requests.',
      },
      {
        service: 'instagram-marketing',
        why: 'Reels of finished kitchens, close-ups of drawer systems, tall units and countertop edges, and short material explainers make quality visible. Highlights by layout – L-shaped, U-shaped, parallel, island – help customers find kitchens like their own.',
      },
      {
        service: 'photography',
        why: 'Kitchens are hard to photograph well – glossy shutters, tight spaces, mixed lighting – and phone pictures undersell them. A proper shoot of each finished kitchen supplies ads, the website, the Google profile and sales presentations.',
      },
      {
        service: 'seo',
        why: 'Guides comparing materials and finishes – plywood vs HDHMR, acrylic vs laminate, quartz vs granite – and layout pages answer what customers research for weeks. They bring enquiries from people who already value quality over the lowest quote.',
      },
      {
        service: 'google-business-profile',
        why: 'An accurate experience-centre location, photos of display and installed kitchens, and reviews that mention finishing and timelines bring showroom visits from nearby searches.',
      },
      {
        service: 'whatsapp-automation',
        why: 'After a showroom visit, sending the 3D design, a specification sheet and photos of a similar finished kitchen, followed by timed check-ins, keeps the studio in the conversation while the customer compares.',
      },
    ],
    faqs: [
      {
        q: 'How do we show customers why our kitchen costs more?',
        a: 'Itemise the carcass material, shutter finish, hardware brand and countertop, and show the same specification in a finished kitchen. Customers who understand what they’re paying for are less likely to choose on the total alone.',
      },
      {
        q: 'Should we market kitchens separately from full home interiors?',
        a: 'If kitchens are your main business, yes. Kitchen buyers search for layouts, materials and kitchen prices, and campaigns built for those searches give clearer messages than general interior ads.',
      },
      {
        q: 'When do kitchen enquiries usually come in?',
        a: 'Many arrive as new apartment projects approach possession and in the months before festivals and housewarming dates. Keeping track of possession timelines in nearby projects helps time ads and offers.',
      },
    ],
    localAngle:
      'Kitchen buyers want to touch the finishes before ordering, so studios win customers within a reasonable drive of their experience centre. Installed kitchens in nearby apartment projects, shown with the owner’s permission, are the strongest proof for neighbours with the same layout.',
  },

  'home-renovation-contractors': {
    name: 'home renovation contractors',
    title: 'Home Renovation Contractors',
    businessNoun: 'renovation contractor',
    industry: 'construction-and-contractors',
    customers:
      'owners of older independent houses and flats renovating bathrooms, kitchens, flooring and waterproofing, landlords upgrading to rent at a better rate, and families adding a floor or a room',
    intro:
      'Renovation is a big, anxious purchase – owners have heard of contractors who overrun budgets, vanish mid-job or leave leaks behind – so they search carefully, ask for references and want to see finished work. Marketing has to show real before-and-after projects, explain how the contractor controls cost and time, and stay in touch through a decision that can take months.',
    challenges: [
      {
        title: 'Trust after bad experiences',
        text: 'Many owners have had, or heard of, a renovation going wrong. Proof of finished, comparable projects and references from past clients matter more than any offer.',
      },
      {
        title: 'Scope that keeps changing',
        text: 'A job starts with the bathroom and grows to the kitchen, or hidden damage appears once walls are opened. Clear packages and honest explanations of what can change keep enquiries realistic.',
      },
      {
        title: 'Long gaps before a decision',
        text: 'Owners often enquire months before they’re ready, waiting for funds, a tenant to leave or an auspicious date. Without follow-up, the contractor is forgotten when the job finally starts.',
      },
    ],
    searches: [
      'home renovation contractors near me',
      'bathroom renovation cost',
      'old house renovation ideas',
      'waterproofing contractors near me',
      'kitchen remodelling contractors',
    ],
    channels: [
      {
        service: 'google-ads',
        why: 'Running bathroom, kitchen, waterproofing and full-home renovation as separate campaigns shows which work brings profitable projects. Lead forms that ask for property type, age and scope filter out small repair jobs before a site visit is booked.',
      },
      {
        service: 'seo',
        why: 'Cost guides, renovation checklists and before-and-after case pages answer what owners research before calling a contractor. Pages on seepage, waterproofing and renovating older houses catch searches that often lead to bigger work.',
      },
      {
        service: 'video-production',
        why: 'Walkthroughs of a renovated home – before, during and after – with the owner describing the experience give prospects confidence a photo can’t. They work on YouTube, Instagram and in follow-up messages.',
      },
      {
        service: 'google-business-profile',
        why: 'Project photos grouped by renovation type, an accurate office location and reviews that mention budget control and timelines help nearby owners shortlist the contractor. A measured reply to every critical review shows the accountability customers fear they won’t get.',
      },
      {
        service: 'meta-ads',
        why: 'Before-and-after ads shown to owners of older homes nearby reach people thinking about renovation but not yet searching. A free site inspection gives them a low-pressure first step.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Regular progress photos during the job reduce owner anxiety and earn referrals, while scheduled follow-ups keep early enquiries warm until they’re ready to start.',
      },
    ],
    faqs: [
      {
        q: 'How do we prove we’re reliable when customers have heard horror stories?',
        a: 'Show complete projects with before, during and after photos, share references with permission and explain your process – written estimates, payment milestones and how changes are priced. Customers trust a clear process more than claims.',
      },
      {
        q: 'Should we show renovation prices?',
        a: 'Indicative ranges for common jobs, such as a bathroom renovation, help customers budget and filter mismatched enquiries. Explain what drives the cost – materials, plumbing changes, structural work – so the final quote makes sense.',
      },
      {
        q: 'Is it worth marketing waterproofing separately?',
        a: 'Often, yes, because leakage and seepage are urgent problems that people search for on their own, especially around the monsoon. A waterproofing job done well frequently leads to a larger renovation.',
      },
    ],
    localAngle:
      'Renovation contractors grow through older neighbourhoods, where houses of a similar age have similar problems and one finished project draws enquiries from the same street. Local reviews and project photos on Maps help nearby owners find that proof when they search.',
  },

  'solar-panel-installers': {
    name: 'solar panel installers',
    title: 'Solar Panel Installers',
    businessNoun: 'solar installation company',
    industry: 'energy-and-solar',
    customers:
      'independent house owners looking to cut electricity bills, apartment associations powering common areas, and small businesses and factories with large usable roofs',
    intro:
      'Rooftop solar is a considered, high-value purchase – owners research system size, subsidies, net metering and payback for weeks, then compare quotes from a few installers. Marketing has to answer those questions clearly, show completed installations and after-sales support, and guide interested owners to a site survey.',
    challenges: [
      {
        title: 'Subsidy and approval confusion',
        text: 'Owners are unsure how the government rooftop subsidy, net metering and the electricity company’s approvals fit together, and many stop at that point. Installers who explain the process step by step keep the enquiries others lose.',
      },
      {
        title: 'Quotes compared on kW price',
        text: 'Customers compare cost per kilowatt without looking at panel and inverter brands, the mounting structure or warranty terms. Explaining the components decides whether a better system wins.',
      },
      {
        title: 'Worries about after-sales',
        text: 'A rooftop system is expected to run for many years, and owners fear the installer won’t be around for cleaning, inverter faults or claims. A visible track record and a service commitment are part of the sale.',
      },
    ],
    searches: [
      'solar panel installation near me',
      'rooftop solar subsidy for home',
      '3kw solar system price',
      'on grid solar system for home',
      'solar panel for apartment',
    ],
    channels: [
      {
        service: 'seo',
        why: 'Guides on sizing a system, the rooftop subsidy, net metering and payback rank for the research owners do for weeks before calling. Separate pages for homes, apartments and commercial roofs bring each kind of customer to the right answers.',
      },
      {
        service: 'google-ads',
        why: 'Search ads on rooftop solar, system-size and subsidy searches reach owners ready for a survey. Lead forms that ask for the monthly electricity bill, roof type and whether they own the roof qualify enquiries, and cost per completed site survey is the number to watch.',
      },
      {
        service: 'meta-ads',
        why: 'Ads showing local installations, with a plain explanation of the subsidy process, reach independent house owners nearby who haven’t started researching. Retargeting people who read the subsidy guide brings them back to book a survey.',
      },
      {
        service: 'drone-shoots',
        why: 'Aerial footage of finished rooftop and commercial installations shows the scale and neatness of the work in a way ground photos can’t. It works in ads, on the website and in proposals to apartment associations and factory owners.',
      },
      {
        service: 'google-business-profile',
        why: 'Photos of completed installations, residential and commercial services listed separately, and reviews that mention the approval process and after-sales support help owners shortlist the installer. Posts on subsidy changes keep the profile current.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Sending the proposal, system specifications and subsidy steps after the survey, followed by timed check-ins, keeps the installer in a long decision. After installation, cleaning and service reminders keep the customer happy enough to refer neighbours.',
      },
    ],
    faqs: [
      {
        q: 'How do we explain the subsidy without confusing customers?',
        a: 'Lay out the steps in order – eligibility, application, installation, inspection and net metering – and update the page as rules change. Point customers to the official PM Surya Ghar portal for current subsidy amounts rather than quoting figures that may be out of date.',
      },
      {
        q: 'Should we target apartments as well as independent houses?',
        a: 'Apartment associations can install solar for common areas such as lifts, pumps and corridor lighting, with the decision made by the committee. They need different material – proposals, survey reports and a presentation for the association – rather than consumer ads.',
      },
      {
        q: 'How long does solar marketing take to bring results?',
        a: 'Owners research for weeks or months, so search content and follow-up build over time while ads bring surveys sooner. Tracking surveys and signed installations, not just leads, shows what’s working.',
      },
    ],
    localAngle:
      'Solar installers win neighbourhoods one rooftop at a time – owners notice panels on a nearby house and ask who installed them. Reviews from local installations, and owners willing to show their system to prospects, are the strongest marketing an installer has.',
  },

  'car-service-centres': {
    name: 'car service centres',
    title: 'Car Service Centres',
    businessNoun: 'car service centre',
    industry: 'automotive',
    customers:
      'car owners past the free-service period, cab and fleet operators, and drivers needing repairs, AC work, denting and painting or a cashless insurance claim',
    intro:
      'Car owners choose a workshop on convenience, trust and price – they search for one near home or office, check reviews and compare the cost with the authorised dealer. Marketing has to show honest estimates, genuine parts and skilled mechanics, and bring owners back service after service.',
    challenges: [
      {
        title: 'The overbilling fear',
        text: 'Owners worry about inflated bills and parts they didn’t need. Itemised estimates, approval before any extra work and reviews that mention fair pricing win their trust.',
      },
      {
        title: 'Dealers and app platforms',
        text: 'Authorised dealers hold on to owners during warranty, and app-based service platforms advertise low package prices. An independent workshop has to show its own value – experienced mechanics, personal attention and open pricing.',
      },
      {
        title: 'Long gaps between visits',
        text: 'A car needs servicing once or twice a year, so owners forget where they went last time. Reminders based on date or kilometres bring them back before they search again.',
      },
    ],
    searches: [
      'car service near me',
      'car ac repair near me',
      'car denting and painting near me',
      'cashless car insurance garage near me',
      'periodic car service cost',
    ],
    channels: [
      {
        service: 'google-business-profile',
        why: 'A listing with service categories, workshop photos, opening hours and reviews that mention specific cars and repairs is the first thing an owner checks. Responding to reviews about billing shows you take pricing seriously.',
      },
      {
        service: 'local-seo',
        why: 'Ranking in Maps for “car service near me” and for repair types – AC, denting and painting, insurance claims – brings owners within a convenient drive. A page for each service, and for the makes you know well, helps Google match the right search.',
      },
      {
        service: 'google-ads',
        why: 'Search ads on service-type and model searches, with pickup-and-drop and clear starting prices in the ad, bring owners ready to book. Tracking booked services by campaign shows which repairs are worth the spend.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Service-due reminders, estimate approvals with photos of worn parts and progress updates make the visit transparent and bring owners back next time. A review link sent at delivery builds the profile steadily.',
      },
      {
        service: 'seo',
        why: 'Pages on service costs and common problems for popular models – AC not cooling, warning lights, brake noise – rank for the questions owners search before booking. They show the workshop knows the cars that come to it.',
      },
      {
        service: 'meta-ads',
        why: 'Ads to car owners nearby for monsoon check-ups, pre-trip inspections or festive service packages fill bays in quiet weeks. A form that asks for the car model helps plan the workshop’s schedule.',
      },
    ],
    faqs: [
      {
        q: 'How do we win owners away from the authorised dealer?',
        a: 'Many owners switch after the warranty period if they find a workshop they trust. Show transparent pricing, explain the parts you use, offer pickup and drop and collect reviews that mention honesty – then remind them when the next service is due.',
      },
      {
        q: 'Is insurance claim work worth promoting?',
        a: 'If you have cashless tie-ups with insurers, yes – owners often search for a cashless garage right after an accident. Clear information on which insurers you work with and how the claim runs saves them a stressful search.',
      },
      {
        q: 'How do we get more Google reviews from customers?',
        a: 'Ask at delivery, when the car is clean and the owner is pleased, and send a review link on WhatsApp the same day. Reviews that mention the car and the work done carry the most weight.',
      },
    ],
    localAngle:
      'Owners pick a workshop near home or office so drop-off fits into the day, which makes Maps ranking within a few kilometres the main source of new customers. Fleet operators and neighbours who share a good experience bring steady repeat work.',
  },

  'tuition-centres': {
    name: 'tuition centres',
    title: 'Tuition Centres',
    businessNoun: 'tuition centre',
    industry: 'coaching-and-test-prep',
    customers:
      'parents of CBSE, ICSE and state board students looking for subject tuition, board exam preparation for class 10 and PUC, and help with weak subjects close to home',
    intro:
      'Parents choose a tuition centre close to home or school, usually on other parents’ word and their own child’s progress, and they compare batch timings, batch size and the teachers’ experience. Marketing has to make the centre visible to parents within a few kilometres, show how students are taught and tracked, and fill batches before the academic year begins.',
    challenges: [
      {
        title: 'A tiny catchment',
        text: 'Most students won’t travel far after school, so the centre competes only with options nearby. Broad, city-wide marketing wastes money.',
      },
      {
        title: 'Parent referrals rule',
        text: 'Parents ask other parents in school and apartment WhatsApp groups before anything else. A centre with no reviews or presence in those circles struggles to get a trial class.',
      },
      {
        title: 'Enrolment comes in bursts',
        text: 'Most students join around the start of the academic year or before board exams, then enrolment stalls. Filling a batch late in the year is much harder.',
      },
    ],
    searches: [
      'tuition classes near me',
      'maths tuition for class 10',
      'cbse tuition for class 8 near me',
      'sslc tuition near me',
      'puc science tuition near me',
    ],
    channels: [
      {
        service: 'google-business-profile',
        why: 'Parents check the profile for location, batch timings, classes and boards covered, and reviews from other parents. Classroom photos and posts on new batches and test schedules keep the listing active through the year.',
      },
      {
        service: 'local-seo',
        why: 'Ranking in Maps for “tuition near me” and for subject, class and board searches – “maths tuition for class 10”, “ICSE tuition” – brings parents within reach. A page for each class group and board helps Google show the centre for the right search.',
      },
      {
        service: 'meta-ads',
        why: 'Ads shown to parents within a few kilometres, offering trial classes or announcing new batches before the academic year, fill seats referrals don’t. A form asking for class, board and subject lets you schedule the right trial.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Trial class confirmations, regular progress notes, test scores and fee reminders keep parents informed – and informed parents recommend the centre in their groups.',
      },
      {
        service: 'social-media-management',
        why: 'Posts on teaching methods, exam preparation tips and student achievements, shared with consent, show parents what happens in class. Regular posting keeps the centre in mind when parents discuss tuition.',
      },
      {
        service: 'google-ads',
        why: 'Search ads on board, class and subject tuition searches in a tight radius reach parents looking right now, especially in the months before exams. Tracking trial bookings and enrolments shows what each search term is worth.',
      },
    ],
    faqs: [
      {
        q: 'How do we get more students through referrals?',
        a: 'Keep parents informed with regular updates and test results on WhatsApp, and ask satisfied parents for reviews and introductions. A small benefit for families who bring another student can help, as long as teaching quality comes first.',
      },
      {
        q: 'Can we advertise our students’ marks?',
        a: 'You can share genuine results with the student’s and parents’ consent, presented accurately. Consumer protection guidelines on coaching ads treat exaggerated or misleading results claims seriously, so avoid implying every student will score the same.',
      },
      {
        q: 'When should we run ads for new batches?',
        a: 'A few weeks before the academic year starts and again before board exam preparation begins, when parents are deciding. Ads in the middle of a term rarely fill seats on their own.',
      },
    ],
    localAngle:
      'A tuition centre’s students usually live or study within a short distance, so being known in nearby schools, apartment complexes and parent groups matters more than wide reach. Maps visibility and reviews from local parents make the centre the first name suggested when someone asks.',
  },

  preschools: {
    name: 'preschools',
    title: 'Preschools',
    businessNoun: 'preschool',
    industry: 'education-and-schools',
    customers:
      'parents of children aged about two to six who want a structured early-learning programme – Montessori, play-way or a defined curriculum – that prepares the child for formal school',
    intro:
      'Preschool parents research the curriculum, teacher qualifications, safety and how children move on to primary school, then visit two or three centres before deciding. Marketing has to explain the learning approach clearly, show real classrooms and teachers, and turn enquiries into visits ahead of each intake.',
    challenges: [
      {
        title: 'Curriculum labels blur together',
        text: 'Montessori, play-way, Reggio-inspired and franchise curricula sound alike to most parents. A preschool has to show what its approach looks like in a child’s actual day.',
      },
      {
        title: 'Franchise brands with big budgets',
        text: 'National preschool franchises advertise heavily and benefit from name recognition. An independent preschool needs to show what makes its teachers and programme different.',
      },
      {
        title: 'Safety questions come first',
        text: 'Parents ask about CCTV, staff background checks, hygiene and pick-up procedures before anything else. Answering them openly online makes a visit far more likely.',
      },
    ],
    searches: [
      'preschool near me',
      'montessori school near me',
      'nursery admission near me',
      'lkg admission near me',
      'preschool fees near me',
    ],
    channels: [
      {
        service: 'local-seo',
        why: 'Ranking in Maps for “preschool near me”, “Montessori near me” and nursery and LKG admission searches brings parents within the short drive most families will consider. Programme pages that name the curriculum and age groups help Google show the preschool for curriculum-specific searches.',
      },
      {
        service: 'meta-ads',
        why: 'Ads shown to parents of young children nearby, with classroom activities and an invitation to an open day, fill visits ahead of the intake. Measuring cost per visit, not per lead, keeps the focus on families who are serious.',
      },
      {
        service: 'seo',
        why: 'Pages explaining the curriculum, a typical day, teacher qualifications, safety measures and the move to primary school answer what parents research for weeks. They help the preschool rank for curriculum and admission searches beyond the map results.',
      },
      {
        service: 'google-business-profile',
        why: 'Parents check photos, reviews and timings before calling, so the profile needs classroom and activity photos, accurate hours and a steady stream of reviews from current parents. Posts about open days and admission dates keep it current.',
      },
      {
        service: 'instagram-marketing',
        why: 'Reels of classroom activities, teacher introductions and children’s projects, shared with parents’ consent, show what learning looks like day to day. A regular feed reassures parents comparing several preschools.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Visit confirmations, the prospectus, admission reminders and a follow-up after the visit move parents towards admission. Updates through the year keep current parents engaged and ready to refer.',
      },
      {
        service: 'video-production',
        why: 'A short film of a day at the preschool – arrival, activities, meals, pick-up – lets working parents see the environment before they visit. It works in ads, on the website and in WhatsApp follow-ups.',
      },
    ],
    faqs: [
      {
        q: 'How do we compete with big preschool franchises?',
        a: 'Show what parents can’t get from a brand name – your teachers, how you track each child, your class sizes and your safety practices. Real activity photos and reviews from local parents carry more weight than a logo.',
      },
      {
        q: 'When do preschool admissions usually happen?',
        a: 'Enquiries for the June academic year usually begin around October and peak between November and February, though many preschools also take children mid-year. Being visible early puts you on the shortlist when parents start visiting.',
      },
      {
        q: 'Should we explain how our programme fits the National Education Policy?',
        a: 'NEP 2020 brings ages three to eight into one foundational stage, and some parents ask about it. If your programme is built around it, explain in plain words what children learn and how, rather than listing policy terms.',
      },
    ],
    localAngle:
      'Parents want a preschool within a short, safe commute of home, so the market is the surrounding streets and apartment complexes. Reviews from local parents, open days and a presence in residents’ groups make it the familiar choice.',
  },

  'play-schools': {
    name: 'play schools',
    title: 'Play Schools',
    businessNoun: 'play school',
    industry: 'education-and-schools',
    customers:
      'parents of toddlers, often between one and a half and three years old, looking for a gentle, play-based first step away from home within walking distance or a short drive',
    intro:
      'A play school is often a child’s first time away from family, so parents decide on warmth, safety and distance – usually after a visit and a trial session. Marketing has to reach parents in a very small radius, show caring teachers and happy children, and make a trial easy to book.',
    challenges: [
      {
        title: 'A very small catchment',
        text: 'Parents of toddlers want somewhere a few minutes from home, so the market may be a handful of apartment complexes. Marketing has to be precise rather than wide.',
      },
      {
        title: 'Separation anxiety',
        text: 'Parents worry about how their child will settle in. Explaining the settling-in routine, introducing the teachers and sharing other parents’ experiences address their biggest fear.',
      },
      {
        title: 'Small batches, small budgets',
        text: 'Batches and fees are small, so expensive lead generation quickly stops making sense. Referrals, Maps visibility and community presence have to do most of the work.',
      },
    ],
    searches: [
      'play school near me',
      'playgroup for 2 year old',
      'play school with daycare near me',
      'play school fees near me',
    ],
    channels: [
      {
        service: 'google-business-profile',
        why: 'Most parents find a play school on Maps, so the profile needs warm photos of the play areas, accurate timings, age groups and reviews from local parents. Personal replies to each review show the attention parents are looking for.',
      },
      {
        service: 'meta-ads',
        why: 'Ads shown only to parents of toddlers within a couple of kilometres, inviting them to a trial session or a summer playgroup, fill seats without paying to reach families too far away. Cost per trial booked is the number to track.',
      },
      {
        service: 'instagram-marketing',
        why: 'Short videos of circle time, outdoor play and festival celebrations, shared with parents’ consent, show the warmth parents want to see. Stories and highlights on the settling-in routine reassure first-time parents.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Trial confirmations, settling-in tips before the first day and photos of the day for current parents keep families reassured and talking about the play school to friends.',
      },
      {
        service: 'photography',
        why: 'A professional shoot of the play areas, activities and teachers gives a small play school photos as welcoming as the place feels. Good images make the Maps profile, ads and Instagram far more convincing.',
      },
      {
        service: 'local-seo',
        why: 'Ranking for “play school near me” and “playgroup” searches in the immediate neighbourhood brings parents who want somewhere close. A simple website with the programme, timings and photos helps Google trust the listing.',
      },
    ],
    faqs: [
      {
        q: 'How do we get more parents to book a trial session?',
        a: 'Make booking easy on WhatsApp, show the play areas and teachers in photos and explain how the first days work. Parents who read other local parents’ reviews feel safer trying.',
      },
      {
        q: 'Is it worth advertising for such a small area?',
        a: 'Yes, if the targeting is tight – a couple of kilometres around the play school and parents of young children only. A small, focused budget can do more than broad ads that reach families who would never travel to you.',
      },
      {
        q: 'How is marketing a play school different from marketing a preschool?',
        a: 'A play school sells comfort, play and a gentle first step, while a preschool sells a structured curriculum and school readiness. Keeping that difference clear helps the parents looking for each one find you.',
      },
    ],
    localAngle:
      'Play schools are chosen almost entirely on distance and word of mouth, so the target is the apartment complexes and streets within a short walk or drive. Good Maps reviews and mentions in residents’ WhatsApp groups often fill a batch on their own.',
  },

  'daycare-centres': {
    name: 'daycare centres',
    title: 'Daycare Centres',
    businessNoun: 'daycare centre',
    industry: 'education-and-schools',
    customers:
      'working parents who need safe full-day or after-school care for infants, toddlers and school-age children, with hours, meals and updates that fit an office day',
    intro:
      'Working parents often search for daycare under pressure – maternity leave ending, a nanny leaving, a new job – and choose on safety, hours, meals and how close it is to home or office. Marketing has to answer those practical questions upfront, show the facility and caregivers openly and make visits easy to book.',
    challenges: [
      {
        title: 'Safety above everything',
        text: 'Parents need to trust the caregivers, the premises and the hygiene before leaving a baby or toddler for a full day. CCTV access, staff checks and clear routines have to be visible before the visit.',
      },
      {
        title: 'Hours and logistics decide',
        text: 'Opening hours, late pick-up, meals, nap routines and holiday closures matter as much as activities. A centre that leaves these vague loses parents to one that lists them plainly.',
      },
      {
        title: 'Near home or near work',
        text: 'Some parents want care near home, others near the office, so daycares compete both in residential areas and around business districts. Marketing has to reach both groups.',
      },
    ],
    searches: [
      'daycare near me',
      'daycare for 1 year old',
      'full day daycare with food',
      'after school daycare near me',
      'creche near me',
    ],
    channels: [
      {
        service: 'google-ads',
        why: 'Search ads on infant, full-day and after-school daycare searches reach parents who need a place soon, often within weeks. A form that asks for the child’s age and start date helps schedule visits and manage the waitlist.',
      },
      {
        service: 'google-business-profile',
        why: 'The profile should show opening hours, age groups, meal and nap routines and photos of rooms and outdoor areas, along with reviews from working parents. Accurate hours matter more here than for almost any other business.',
      },
      {
        service: 'local-seo',
        why: 'Ranking in Maps for “daycare near me”, “creche” and age-specific searches, both around homes and near the offices you serve, brings parents who need care on their daily route.',
      },
      {
        service: 'meta-ads',
        why: 'Ads shown to working parents nearby, featuring caregivers, routines and safety features, reach families planning care before maternity leave ends. Retargeting website visitors brings them back to book a visit.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Visit confirmations, the fee and routine sheet and a follow-up after the visit move parents to enrolment. For enrolled children, daily updates and photos keep parents reassured – and reassured parents refer colleagues.',
      },
      {
        service: 'linkedin-branding',
        why: 'A LinkedIn presence for the founder and the centre helps when approaching HR teams about corporate childcare tie-ups. Establishments with 50 or more employees must provide creche facilities under the Maternity Benefit Act, and some meet that through a nearby daycare.',
      },
    ],
    faqs: [
      {
        q: 'How do we reassure parents about safety?',
        a: 'Be specific online – CCTV access for parents if you offer it, caregiver background checks, hygiene routines, pick-up authorisation and first-aid training. Parents notice when these details are missing.',
      },
      {
        q: 'Can a daycare get corporate tie-ups?',
        a: 'Yes. Under the Maternity Benefit Act, establishments with 50 or more employees must provide creche facilities, and some do this by partnering with a daycare near their office. A clear proposal, a facility visit and references from current parents help with HR teams.',
      },
      {
        q: 'How do we handle a waitlist without losing parents?',
        a: 'Keep waitlisted parents updated with realistic timelines and offer part-time or after-school slots where possible. An honest waitlist builds goodwill even with families who end up elsewhere.',
      },
    ],
    localAngle:
      'Daycare is chosen on the daily route – near home, near the office or on the way between – so Maps visibility along that route matters more than wide reach. Recommendations in residents’ groups and among colleagues are the strongest source of new families.',
  },

  'international-schools': {
    name: 'international schools',
    title: 'International Schools',
    businessNoun: 'international school',
    industry: 'education-and-schools',
    customers:
      'relocating, expatriate and NRI families and high-income local parents choosing IB or Cambridge curricula, often with university abroad in mind',
    intro:
      'Choosing an international school is a long, high-fee decision – parents compare IB, Cambridge and national boards, visit several campuses and weigh fees against teachers, facilities and university outcomes. Marketing has to support months of research with clear curriculum information, real campus life and a well-run admissions process.',
    challenges: [
      {
        title: 'A long, multi-person decision',
        text: 'Parents, grandparents and sometimes an employer’s relocation team are involved, and the decision can stretch over several months. Follow-up has to stay useful without becoming pushy.',
      },
      {
        title: 'Justifying the fees',
        text: 'Fees are high, so parents examine teacher qualifications, class sizes, facilities and outcomes closely. Vague claims don’t survive that scrutiny – specific, honest detail does.',
      },
      {
        title: 'Relocation doesn’t follow the calendar',
        text: 'Families moving to the city for work enquire at any time of year, often from abroad and at short notice. The school has to be findable and responsive outside the usual admission season.',
      },
    ],
    searches: [
      'ib schools in bangalore',
      'igcse schools near me',
      'international schools in bangalore fees',
      'ib vs igcse vs cbse',
      'cambridge curriculum schools near me',
    ],
    channels: [
      {
        service: 'seo',
        why: 'Pages on each programme – IB PYP, MYP and DP, or Cambridge IGCSE and A Levels – with admission steps, fee structure and university pathways rank for the research parents do. Comparison content on IB, Cambridge and national boards answers their first big question.',
      },
      {
        service: 'ai-search-visibility',
        why: 'Many relocating parents now ask ChatGPT, Gemini or Perplexity to compare international schools and curricula in a new city. Clear, factual pages on programmes, accreditation, fees and admissions make it more likely the school is mentioned and described correctly in those answers.',
      },
      {
        service: 'google-ads',
        why: 'Search ads on curriculum and international school searches, including searches made from other cities and countries by families planning a move, bring parents ready to enquire. Campus-visit bookings and applications are the conversions to optimise for, not form fills.',
      },
      {
        service: 'video-production',
        why: 'A campus film, teacher and student voices and a look at a typical day give relocating families, who may not be able to visit early, a real sense of the school.',
      },
      {
        service: 'marketing-automation',
        why: 'An admissions CRM that tracks each family from enquiry to visit, assessment and offer, with personalised follow-up at each step, stops enquiries going cold during a months-long decision.',
      },
      {
        service: 'meta-ads',
        why: 'Ads shown to professionals and families in the school’s catchment, promoting open days and curriculum information sessions, build awareness before admissions. Retargeting website visitors keeps the school in mind through a long decision.',
      },
      {
        service: 'drone-shoots',
        why: 'Aerial footage of the campus, sports fields and facilities shows the scale parents are paying for and makes a strong opening for the campus film and ads.',
      },
    ],
    faqs: [
      {
        q: 'How do we reach relocating families before they arrive?',
        a: 'Make sure the school appears for curriculum and international school searches made from other cities and countries, and keep admission information complete online. Relationships with relocation consultants and corporate HR teams also bring families early.',
      },
      {
        q: 'Can we talk about our students’ university admissions?',
        a: 'Yes, if the information is genuine, accurate and shared with consent. ASCI guidelines for educational institutions expect claims about results and achievements to be truthful and backed by evidence.',
      },
      {
        q: 'How early do families start the process?',
        a: 'Local families often begin researching months before the academic year, while relocating families can enquire at any time. Staying visible and responsive all year matters more for international schools than for most.',
      },
    ],
    localAngle:
      'Even at high fees, families weigh the daily commute, so international schools draw most strongly from neighbourhoods within a reasonable drive and along the routes their buses serve. Visibility in those neighbourhoods and among nearby corporate offices brings the families most likely to apply.',
  },

  'ielts-coaching': {
    name: 'IELTS coaching centres',
    title: 'IELTS Coaching Centres',
    businessNoun: 'IELTS coaching centre',
    industry: 'coaching-and-test-prep',
    customers:
      'students planning to study abroad, professionals applying for migration or work visas, and nurses and healthcare workers preparing for overseas registration – each needing a target band score by a deadline',
    intro:
      'IELTS students arrive with a target band and a deadline – a university intake, a visa application – and choose a centre on trainer quality, mock tests, batch timings and whether classes are available online. Marketing has to reach them when the deadline becomes real, show honestly how the centre improves scores and turn demo classes into enrolments.',
    challenges: [
      {
        title: 'Free material everywhere',
        text: 'YouTube lessons, free mock tests and apps make students question why they should pay. A centre has to show the value of personal feedback on writing and speaking, which free material can’t give.',
      },
      {
        title: 'Consultants who coach for free',
        text: 'Many study abroad consultants bundle IELTS coaching with their admission services. Standalone centres have to compete on teaching quality and the attention each student gets.',
      },
      {
        title: 'Students want guarantees',
        text: 'Students ask for a guaranteed band, but promising one is misleading and runs against consumer protection guidelines for coaching ads. Marketing has to show a credible process instead.',
      },
    ],
    searches: [
      'ielts coaching near me',
      'ielts coaching fees',
      'ielts online coaching with mock test',
      'ielts general training classes for canada pr',
      'pte vs ielts',
    ],
    channels: [
      {
        service: 'google-ads',
        why: 'Search ads on IELTS coaching, Academic versus General Training and country-specific searches reach students with a deadline. Measuring cost per demo attended and per enrolment shows which searches bring paying students.',
      },
      {
        service: 'seo',
        why: 'Pages on band requirements, the four test sections, preparation timelines and how IELTS compares with PTE answer what students research. Free resources such as sample essays with trainer feedback show the teaching quality before a demo.',
      },
      {
        service: 'instagram-marketing',
        why: 'Reels with speaking tips, common writing mistakes and short mock speaking test clips reach students early, and a regular schedule builds trust in the trainers. Story quizzes keep followers engaged until they enrol.',
      },
      {
        service: 'meta-ads',
        why: 'Ads aimed at students and young professionals interested in studying or working abroad, offering a free mock test or demo class, fill the funnel ahead of each new batch.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Demo reminders, mock test schedules, band feedback and batch start alerts keep students engaged from first enquiry to exam day.',
      },
      {
        service: 'local-seo',
        why: 'Ranking in Maps for “IELTS coaching near me” brings students who prefer in-person classes near home, college or work. Reviews that mention a specific band improvement are the proof they look for.',
      },
      {
        service: 'ai-chatbots',
        why: 'A chatbot answers questions on batches, fees, test formats and online options at any hour, including evenings after work or college, and books demo classes on the spot.',
      },
    ],
    faqs: [
      {
        q: 'Can we advertise our students’ band scores?',
        a: 'You can share genuine results with the student’s consent and accurate details of the course they took. Guidelines on coaching ads prohibit promises of guaranteed scores and misleading success claims, so avoid implying every student will reach the same band.',
      },
      {
        q: 'Should we offer online IELTS coaching?',
        a: 'Many students and working professionals prefer online or hybrid classes, which widens your market beyond the neighbourhood. Your marketing then has to compete with national online brands on trainer quality and personal feedback.',
      },
      {
        q: 'How do we compete with study abroad consultants offering free coaching?',
        a: 'Focus on what a specialist centre offers – experienced trainers, detailed feedback on writing and speaking, regular full mock tests. Referral partnerships with consultants who don’t coach in-house can also bring a steady flow of students.',
      },
    ],
    localAngle:
      'Students who choose in-person classes want a centre near home, college or work, so Maps ranking and reviews within that radius bring most walk-ins. Ties with nearby colleges and study abroad consultants add a steady referral stream.',
  },

  'real-estate-agents': {
    name: 'real estate agents',
    title: 'Real Estate Agents',
    businessNoun: 'real estate agency',
    industry: 'real-estate',
    customers:
      'tenants looking for rental homes, buyers of resale and new flats and plots, and landlords and NRI owners who want their property let or sold',
    intro:
      'Most buyers and tenants start on property portals and Google, then pick an agent who knows the neighbourhood, has relevant listings and replies quickly on WhatsApp. Marketing has to build the agent’s own visibility and reputation so enquiries arrive directly, not only through shared portal leads.',
    challenges: [
      {
        title: 'Portal dependence',
        text: 'Paid listings on MagicBricks and 99acres bring leads that other agents are also chasing, and the cost adds up. An agent needs direct enquiries from their own search and social presence.',
      },
      {
        title: 'No-brokerage competition',
        text: 'Platforms that connect owners and tenants directly encourage customers to skip brokerage. Agents have to show what they add – verified listings, negotiation, paperwork and time saved.',
      },
      {
        title: 'Trust and credentials',
        text: 'Customers are wary of agents who take advance payments or misrepresent properties. A visible RERA registration, real reviews and a consistent track record set a genuine agent apart.',
      },
    ],
    searches: [
      '2bhk flat for rent near me',
      'real estate agents near me',
      'resale flats near me',
      'property dealers near me',
      'plots for sale near me',
    ],
    channels: [
      {
        service: 'google-business-profile',
        why: 'A profile listing the areas and property types you handle, your RERA registration in the description, photos of properties and reviews from past tenants and buyers brings direct calls from nearby searches – calls no other agent is sharing.',
      },
      {
        service: 'instagram-marketing',
        why: 'Reels of property walkthroughs, short neighbourhood guides and new listings build an audience that sees the agent as the local expert. Quick replies to DMs and a link to a WhatsApp chat turn viewers into site-visit requests.',
      },
      {
        service: 'local-seo',
        why: 'Ranking in Maps for “real estate agents near me” and for searches tied to the neighbourhoods you work brings buyers and tenants who value local knowledge. Matching details and a page for each area you cover help Google place the agency correctly.',
      },
      {
        service: 'personal-branding',
        why: 'Buyers and landlords choose the person as much as the agency. A personal brand on Instagram, YouTube or LinkedIn built on local market updates and honest advice brings repeat clients and referrals over years.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Broadcasting new listings to opted-in buyers and tenants whose budget and area match, with photos and a location pin, gets properties seen within hours. Automated follow-ups after site visits keep each conversation moving.',
      },
      {
        service: 'meta-ads',
        why: 'Ads for new listings or rental availability, aimed at people living in or moving to the area, bring enquiries without relying only on portals. Instant forms that ask for budget, configuration and move-in date filter casual browsers.',
      },
      {
        service: 'seo',
        why: 'Neighbourhood guides, rent and price explainers and buying checklists rank for the research tenants and buyers do, and bring enquiries that come only to you.',
      },
    ],
    faqs: [
      {
        q: 'Do real estate agents need RERA registration to advertise?',
        a: 'Under RERA, agents who help sell plots, apartments or buildings in registered projects must register with the state’s real estate regulatory authority. Showing your registration number on your listings, profile and ads builds trust and keeps you on the right side of the rules.',
      },
      {
        q: 'Should we keep paying for portal listings?',
        a: 'Portals remain a major source of buyers and tenants, so many agents keep a presence there. Building your own Google profile, social presence and database of buyers alongside them reduces your dependence on shared leads.',
      },
      {
        q: 'How do we compete with no-brokerage platforms?',
        a: 'Show what you save the customer – time, verified listings, negotiation and help with agreements and paperwork. Reviews that describe that help are more persuasive than arguing about brokerage.',
      },
    ],
    localAngle:
      'An agent’s value is local knowledge – realistic rents and prices, which buildings have water or maintenance problems, which streets flood – so customers look for someone established in the area they want. Maps reviews and steady activity on local listings make that agent the obvious call.',
  },

  'wedding-planners': {
    name: 'wedding planners',
    title: 'Wedding Planners',
    businessNoun: 'wedding planning company',
    industry: 'events-and-weddings',
    customers:
      'couples and their families planning weddings, receptions and pre-wedding functions, from intimate ceremonies to destination weddings, who want décor, vendors and logistics handled',
    intro:
      'Couples find wedding planners on Instagram, wedding directories and through friends, then judge them on weddings they’ve actually planned, how well they understand the family’s traditions and whether they fit the budget. Marketing has to show finished weddings in detail, win the trust of parents as well as couples, and stay in touch through a decision that often starts many months before the date.',
    challenges: [
      {
        title: 'Every customer books once',
        text: 'A couple usually needs a planner once, so the business depends on a steady flow of new enquiries and referrals from past clients and vendors.',
      },
      {
        title: 'Showing real weddings',
        text: 'Planners need photos and films of weddings they’ve run, but those belong to the couple and the photographer. Permission and credit have to be arranged for every portfolio piece.',
      },
      {
        title: 'Budget mismatch',
        text: 'Many enquiries come from couples whose budget doesn’t match the planner’s scale. Clear information on the weddings you take on and your starting fees filters early.',
      },
    ],
    searches: [
      'wedding planners in bangalore',
      'destination wedding planners',
      'wedding planner cost',
      'south indian wedding planner',
      'small wedding planners near me',
    ],
    channels: [
      {
        service: 'instagram-marketing',
        why: 'Instagram is where couples shortlist planners. Reels of décor reveals, behind-the-scenes setup and full wedding stories told with the couple’s permission show the planner’s style and range, and collaboration posts with photographers and venues reach their audiences too.',
      },
      {
        service: 'personal-branding',
        why: 'Families often choose the planner as a person – someone they trust with the biggest event in their lives. A visible founder brand, built on real stories, planning advice and how problems were solved on the day, earns that trust.',
      },
      {
        service: 'seo',
        why: 'Pages for each wedding type and tradition, venue guides, budget breakdowns and real wedding stories rank for the research couples do long before they call. They also prove experience with the ceremonies a family cares about.',
      },
      {
        service: 'meta-ads',
        why: 'Ads aimed at engaged couples and their families, showing real weddings, bring enquiries during the planning window. Asking for date, guest count and budget in the form qualifies enquiries before the first call.',
      },
      {
        service: 'google-ads',
        why: 'Search ads on wedding planner and destination wedding searches catch couples ready to speak to planners. Counting consultations booked, not just enquiries, shows which searches bring serious couples.',
      },
      {
        service: 'whatsapp-automation',
        why: 'After the first call, sending a portfolio of similar weddings, package outlines and a planning timeline, followed by timed check-ins, keeps the planner in mind while the family decides.',
      },
    ],
    faqs: [
      {
        q: 'How do we get more wedding enquiries from Instagram?',
        a: 'Post complete wedding stories rather than only décor shots, show the planning behind them and reply quickly to DMs. Collaborating with the photographers, decorators and venues you’ve worked with puts your work in front of their followers too.',
      },
      {
        q: 'Should we list on wedding directories?',
        a: 'Directories such as WedMeGood are where many couples browse, so a complete profile with real weddings and reviews is worth having. Your own website and Instagram bring enquiries that don’t depend on where the directory ranks you.',
      },
      {
        q: 'How far ahead should we market for the wedding season?',
        a: 'Couples often book planners many months before the date, and auspicious dates fill early. Stay visible all year with real weddings and planning content, and increase ad spend ahead of the main season.',
      },
    ],
    localAngle:
      'Much of a planner’s work comes through referrals from past couples and from the venues, photographers and decorators they work with in the same city. Strong relationships with nearby venues and a well-reviewed Google profile keep the planner on local couples’ shortlists.',
  },

  'wedding-photographers': {
    name: 'wedding photographers',
    title: 'Wedding Photographers',
    businessNoun: 'wedding photography studio',
    industry: 'events-and-weddings',
    customers:
      'couples booking candid photography, cinematic films and pre-wedding shoots, often with parents involved in the decision and the budget',
    intro:
      'Couples choose a wedding photographer on style – they scroll portfolios, save reels and compare how each photographer handles light, emotion and rituals – and then on price and availability for their date. Marketing has to make the portfolio easy to find and judge, and convert enquiries quickly, because each date can be sold only once.',
    challenges: [
      {
        title: 'Portfolios that look alike',
        text: 'Many studios post the same kinds of shots, so couples struggle to tell them apart. A recognisable style and full wedding stories are what set a photographer apart.',
      },
      {
        title: 'One wedding per team per day',
        text: 'A team can cover only one wedding a day, and peak muhurtham dates fill first. Marketing also has to fill quieter dates, smaller functions and pre-wedding shoots.',
      },
      {
        title: 'Packages compared on price',
        text: 'Couples compare totals without comparing team size, hours covered, albums, films or editing time. Clear package details stop the studio being judged on price alone.',
      },
    ],
    searches: [
      'wedding photographers in bangalore',
      'candid wedding photographer',
      'pre wedding shoot locations near bangalore',
      'wedding photography packages',
      'cinematic wedding videographer',
    ],
    channels: [
      {
        service: 'instagram-marketing',
        why: 'Instagram is the main shortlist for couples. Full wedding carousels, short highlight reels and behind-the-scenes clips, posted with the couple’s permission, show style and personality, and tagging venues and planners puts the work in front of their followers.',
      },
      {
        service: 'website-design',
        why: 'A portfolio website with full galleries, film links, package outlines and a date-availability enquiry form lets couples judge the work properly, which an Instagram grid can’t. Image-heavy pages need careful design so they still load quickly on a phone.',
      },
      {
        service: 'seo',
        why: 'A portfolio page for each wedding, named by venue and tradition, ranks for searches couples make about venues and styles. Guides to pre-wedding shoot locations bring in couples early in their planning.',
      },
      {
        service: 'video-production',
        why: 'A studio brand film showing how the team works on the day – unobtrusive, organised, at ease with the family – answers the question a portfolio can’t. Short cuts of it make strong ads and profile reels.',
      },
      {
        service: 'meta-ads',
        why: 'Ads aimed at engaged couples, featuring highlight reels and pre-wedding shoots, reach them during the planning window. Retargeting portfolio visitors brings them back to check whether their date is free.',
      },
      {
        service: 'google-business-profile',
        why: 'Reviews from couples and a profile with recent wedding photos help the studio appear for local photographer searches and reassure parents, who often check Google before approving a booking.',
      },
    ],
    faqs: [
      {
        q: 'How do we stand out from the many wedding photographers on Instagram?',
        a: 'Show full wedding stories in a consistent style, not just isolated favourite frames, and explain how you work on the day. Couples choose the photographer whose work feels like the way they want to remember the wedding.',
      },
      {
        q: 'Should we show package prices?',
        a: 'Starting prices with clear inclusions – team size, hours, photo and film deliverables – help couples decide whether to enquire. Custom quotes can still follow after a call.',
      },
      {
        q: 'Is a website still worth it if couples find us on Instagram?',
        a: 'Yes. A website lets couples view complete galleries and films, ranks for venue and style searches, and gives you an enquiry process that doesn’t depend on one app.',
      },
    ],
    localAngle:
      'Wedding photographers build their name through the venues, planners and decorators they work with nearby, and guests often discover them at weddings they attend. Credits from local venues and planners, plus Google reviews, keep the studio on nearby couples’ shortlists.',
  },

  'pg-accommodations': {
    name: 'PG accommodations',
    title: 'PG Accommodations',
    businessNoun: 'PG',
    industry: 'hospitality-and-hotels',
    customers:
      'students and young professionals moving to the city for college or work, often from other states, and their parents – all wanting a safe, clean room with food close to college, office or the metro',
    intro:
      'PG seekers search by location first – near a college, tech park or metro station – then compare rent, food, cleanliness, safety and house rules, usually after seeing photos online and visiting once. Marketing has to keep the PG visible for those location searches, show rooms and food honestly and fill beds quickly when they come free.',
    challenges: [
      {
        title: 'Constant turnover',
        text: 'Residents leave when they change jobs or finish courses, so beds come free all year and every empty week costs money. Marketing has to keep enquiries coming steadily, not just in one season.',
      },
      {
        title: 'Photos nobody believes',
        text: 'Many listings use flattering or old photos, so seekers distrust what they see online. Recent, honest photos and videos of rooms, bathrooms and food build trust before the visit.',
      },
      {
        title: 'Co-living brands and listing apps',
        text: 'Branded co-living operators and listing platforms advertise heavily and appear in many searches. An independent PG has to compete on value, food and a well-run, homely place.',
      },
    ],
    searches: [
      'pg near me',
      'ladies pg near me with food',
      'pg for working professionals near me',
      'single room pg with attached bathroom',
      'co-living near me',
    ],
    channels: [
      {
        service: 'google-business-profile',
        why: 'Most PG seekers check Maps first, so the profile needs the exact location, whether it’s for men, women or both, room options, meal details and recent photos. Residents’ reviews about food, cleanliness and safety decide most shortlists.',
      },
      {
        service: 'local-seo',
        why: 'Ranking in Maps for “PG near me” and for searches around nearby colleges, offices and metro stations brings seekers who care most about the commute. Naming those landmarks on the listing and website helps Google match the searches.',
      },
      {
        service: 'google-ads',
        why: 'Search ads on PG searches around specific offices and colleges, with the rent range and food details in the ad, reach seekers ready to visit. Switching campaigns on only when beds are free keeps spend tied to occupancy.',
      },
      {
        service: 'instagram-marketing',
        why: 'Room tours, the week’s menu, cleaning routines and everyday resident moments in reels show what living at the PG is really like. Seekers moving from another city can judge the place before they arrive.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Instant replies with photos, rent, the menu and the location pin answer the first questions, and visit confirmations and follow-ups convert interested seekers. Notice-period reminders to current residents help you plan vacancies in advance.',
      },
      {
        service: 'photography',
        why: 'A proper shoot of rooms, bathrooms, the dining area and common spaces gives honest, well-lit photos that look professional on Maps, listing sites and ads without misrepresenting the place.',
      },
    ],
    faqs: [
      {
        q: 'How do we fill beds quickly when someone leaves?',
        a: 'Keep the Google profile and listings current, have photos and details ready to send on WhatsApp, and run short ad bursts while a bed is free. Asking leaving residents to refer colleagues or juniors often fills the bed before it’s empty.',
      },
      {
        q: 'How important is food in PG marketing?',
        a: 'Very – food is one of the things residents most often praise or complain about in reviews. Showing the menu and the kitchen honestly sets expectations and attracts residents who will stay.',
      },
      {
        q: 'Should a ladies’ PG market differently?',
        a: 'Yes. Safety features such as CCTV, secure entry, a resident warden and clear visitor rules matter most, and parents are often part of the decision. Making those details clear online helps both the resident and the family feel comfortable.',
      },
    ],
    localAngle:
      'A PG’s market is defined by what’s nearby – a college, a tech park, a metro station – and seekers search with those names in mind. Mentioning them on the listing and collecting reviews from residents who work or study there wins the people searching for them.',
  },

  'banquet-halls': {
    name: 'banquet halls',
    title: 'Banquet Halls',
    businessNoun: 'banquet hall',
    industry: 'hospitality-and-hotels',
    customers:
      'families hosting birthdays, naming ceremonies, engagements and anniversaries, and companies planning conferences, offsites, trainings and annual parties',
    intro:
      'People look for a banquet hall by capacity, date and location, then compare per-plate prices, menus, parking and whether outside caterers or decorators are allowed. Marketing has to show the hall clearly in different setups, keep packages and availability easy to understand, and fill weekdays as well as weekends.',
    challenges: [
      {
        title: 'Empty weekdays',
        text: 'Weekends and auspicious dates fill easily while weekdays sit empty. Corporate events, small family functions and weekday packages need marketing of their own.',
      },
      {
        title: 'Per-plate comparisons',
        text: 'Customers compare per-plate rates without comparing menus, hall size, air conditioning, parking and service. Clear package details stop the hall losing on price alone.',
      },
      {
        title: 'Photos that don’t show the space',
        text: 'Empty-hall photos rarely show how the space works for a birthday versus a conference. Customers need to see real events in different setups.',
      },
    ],
    searches: [
      'banquet hall near me',
      'party hall for birthday near me',
      'small party hall for 50 people',
      'banquet hall with parking',
      'banquet hall per plate cost',
    ],
    channels: [
      {
        service: 'google-business-profile',
        why: 'A profile with capacity, setups, menu options, parking details and photos of real events brings calls from people searching nearby. Reviews that mention the food, service and hall staff carry great weight with the next host.',
      },
      {
        service: 'local-seo',
        why: 'Ranking in Maps for “banquet hall near me”, “party hall” and event-specific searches brings families who want a venue close to their guests. A page for each event type helps the hall appear for birthdays, engagements and corporate events alike.',
      },
      {
        service: 'google-ads',
        why: 'Search ads split by event – birthday parties, engagements, corporate events – reach hosts with a date in mind. Asking for date, guest count and event type in the form lets the team reply with availability quickly, and hall visits booked show what’s working.',
      },
      {
        service: 'meta-ads',
        why: 'Ads aimed at families and businesses nearby, promoting weekday packages, small-party offers and festive celebrations, fill dates that would otherwise sit empty.',
      },
      {
        service: 'seo',
        why: 'Pages on hosting each kind of event – capacity, layouts, menus and packages – rank for hosts comparing halls. Corporate event pages bring weekday business from companies nearby.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Sending the menu, package options, available dates and a video tour right after an enquiry keeps the hall in the running, and a follow-up after the visit helps close the booking.',
      },
    ],
    faqs: [
      {
        q: 'How do we get more weekday bookings?',
        a: 'Create packages for corporate events, small family functions and weekday celebrations, and market them separately from weekend bookings. Businesses nearby often need a venue for meetings, trainings and annual parties.',
      },
      {
        q: 'Should we show per-plate prices online?',
        a: 'Starting prices with what they include help hosts shortlist and cut time spent on mismatched enquiries. Final quotes can still depend on menu, date and guest count.',
      },
      {
        q: 'How do we show the hall well online?',
        a: 'Use photos and short videos of real events in different setups – a birthday, a conference, an engagement – rather than only empty-hall shots. A short walkthrough video helps people shortlist before they visit.',
      },
    ],
    localAngle:
      'Most functions are held close to where the host and guests live, so banquet halls win within a short drive. Reviews from local events and a well-kept Maps listing make the hall the first option families nearby consider.',
  },

  'wedding-venues': {
    name: 'wedding venues',
    title: 'Wedding Venues',
    businessNoun: 'wedding venue',
    industry: 'events-and-weddings',
    customers:
      'couples and families booking a kalyana mantapa, lawn, convention hall or resort for the wedding and reception, usually around a muhurtham date fixed months ahead',
    intro:
      'Wedding venues are booked around auspicious dates, guest count and tradition – families shortlist on capacity, the mandap and dining arrangements, rooms for relatives, parking and the catering and décor options. Marketing has to show the venue in real weddings, keep available dates and packages clear, and reach families as soon as the date is fixed.',
    challenges: [
      {
        title: 'Muhurtham crunch, lean months',
        text: 'Auspicious dates sell out early, while months such as Ashada see few weddings. Marketing has to fill smaller functions and off-season dates without discounting the peak.',
      },
      {
        title: 'Packages tied to vendors',
        text: 'Families compare whether catering and décor are in-house, limited to partners or open to outside vendors. Clear package terms decide many shortlists.',
      },
      {
        title: 'Elders make the call',
        text: 'Parents and elders usually make or approve the choice, often after visiting several venues. Marketing has to reach the couple online and the family through visits and referrals.',
      },
    ],
    searches: [
      'kalyana mantapa near me',
      'wedding venues in bangalore',
      'outdoor wedding lawns',
      'wedding halls with rooms',
      'resort wedding venues near bangalore',
    ],
    channels: [
      {
        service: 'seo',
        why: 'Pages on capacity, mandap and dining layouts, guest rooms, packages and real weddings rank for the searches families make when comparing venues. A page for each ceremony and tradition the venue hosts helps the right families find it.',
      },
      {
        service: 'instagram-marketing',
        why: 'Reels of real weddings, décor setups, the mandap and the lawn lit up at night show couples what the venue can become. Tagging decorators, planners and photographers puts the venue in front of their followers.',
      },
      {
        service: 'google-ads',
        why: 'Search ads on venue, mantapa and lawn searches, with capacity and package details in the ad, catch families who have just fixed a date. Asking for the date, guest count and ceremony in the form lets the venue reply with availability within the hour.',
      },
      {
        service: 'drone-shoots',
        why: 'Aerial footage shows the full scale of the venue – lawns, halls, parking and approach road – which families care about and ground photos can’t capture. It makes a strong opening shot for reels, ads and the website.',
      },
      {
        service: 'video-production',
        why: 'A venue film and a walkthrough of each space during a real wedding help families shortlisting from other cities, or elders who can’t visit every option.',
      },
      {
        service: 'google-business-profile',
        why: 'Accurate capacity, amenities, photos from real weddings and reviews from families bring calls and visits from Maps searches, especially for “kalyana mantapa near me”.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Sending available dates, package details, menus and a video tour right after an enquiry keeps the venue in the running, and reminders as the date nears help families finalise.',
      },
    ],
    faqs: [
      {
        q: 'How do we fill off-season dates?',
        a: 'Promote engagements, receptions, sangeet nights and smaller functions in the lean months, and market to families whose plans don’t depend on peak dates. Keep peak-date pricing firm so off-season offers don’t undercut it.',
      },
      {
        q: 'Should we work with wedding planners and decorators?',
        a: 'Yes – planners and decorators recommend venues to families, and tagging each other in real wedding content widens everyone’s reach. Clear policies on outside vendors make the venue easier to recommend.',
      },
      {
        q: 'How far ahead do families book a wedding venue?',
        a: 'Many book as soon as the muhurtham date is fixed, which can be many months ahead for popular dates. Staying visible all year means being on the shortlist when the date is set.',
      },
    ],
    localAngle:
      'Families choose a venue within easy reach of their home and guests, so venues win most strongly in the surrounding area and among communities that already hold weddings there. Reviews from local weddings and ties with nearby planners and decorators bring steady referrals.',
  },
} satisfies Partial<Record<BusinessSlug, BusinessProfile>>;
