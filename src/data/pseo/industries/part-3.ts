// Industry profiles, part 3 of 3 – energy-and-solar to chemicals (19 industries)
import type { IndustryProfile } from '@/types/pseo';
import type { IndustrySlug } from '../slugs';

export const industriesPart3 = {
  'energy-and-solar': {
    name: 'solar and energy companies',
    title: 'Energy & Solar',
    marketingLabel: 'Solar marketing',
    businessNoun: 'solar company',
    audience: 'rooftop solar installers, EPC companies and inverter and battery dealers',
    customers: 'homeowners, housing societies, factories and commercial building owners',
    intro:
      'A rooftop solar system is a considered purchase – homeowners compare quotes, subsidies and payback for weeks, and factories run it past finance and engineering. Inverter and battery dealers face a different buyer: someone who has just sat through a power cut and wants backup quickly. BMU helps solar installers, EPC companies and dealers reach both, explain the numbers honestly and turn enquiries into site surveys.',
    challenges: [
      {
        title: 'Quotes that look alike',
        text: 'To a homeowner, three quotes for a 3 kW system look the same. Panel and inverter brands, structure quality and service terms are what differ, and they have to be explained simply.',
      },
      {
        title: 'Subsidy and net-metering confusion',
        text: 'Buyers hear about subsidies and net metering but don’t know the steps, the paperwork or who deals with BESCOM. The installer who explains the process clearly wins the trust.',
      },
      {
        title: 'Lead portals and price shoppers',
        text: 'Aggregator leads are often shared with several installers, so the enquiry turns into a price war before anyone has seen the roof.',
      },
      {
        title: 'Long commercial sales cycles',
        text: 'For factories and commercial buildings, the owner, plant engineer and finance team all weigh in, and a proposal can sit for months between site survey and order.',
      },
    ],
    buyerJourney: [
      {
        stage: 'Trigger & research',
        text: 'A rising electricity bill, a new house or repeated power cuts start the search – “rooftop solar for home”, “inverter battery near me” – plus YouTube videos on payback.',
      },
      {
        stage: 'Quotes & site survey',
        text: 'They call two or three installers, compare system size, brands and price, and book a roof survey with the ones they trust.',
      },
      {
        stage: 'Finance & paperwork',
        text: 'They check subsidy eligibility, loan or EMI options and the net-metering process; businesses compare buying outright with a power purchase agreement.',
      },
      {
        stage: 'Installation & service',
        text: 'Installation, net-meter commissioning and the first few bills decide whether they leave a review and refer neighbours.',
      },
    ],
    channels: [
      {
        service: 'local-seo',
        why: 'Homeowners want an installer who can survey quickly and service the system for years, so ranking in Maps for “solar panel installers near me” and “rooftop solar company” brings buyers ready to book a survey.',
      },
      {
        service: 'google-ads',
        why: 'Search campaigns on “3 kW rooftop solar price”, “solar installation for home” and “inverter battery dealer” reach buyers who are comparing, with survey bookings and calls tracked as conversions and DIY and job searches excluded.',
      },
      {
        service: 'seo',
        why: 'Separate pages for independent houses, housing societies, commercial and industrial EPC, and each battery or inverter range let the business rank for the exact searches buyers make, instead of one generic “solar solutions” page.',
      },
      {
        service: 'content-marketing',
        why: 'Plain guides to the subsidy steps, net metering, on-grid versus hybrid systems and realistic payback answer what every buyer asks – and give the sales team something useful to send after the first call.',
      },
      {
        service: 'google-business-profile',
        why: 'Photos of completed rooftops, reviews that mention system size and after-sales service, and posts on subsidy updates make the installer look established when buyers check before booking a survey.',
      },
      {
        service: 'meta-ads',
        why: 'Facebook and Instagram ads showing real installations and a simple bill-savings explainer reach independent-house owners and housing societies, with lead forms that ask for roof type and monthly bill so enquiries are qualified before the call.',
      },
      {
        service: 'video-production',
        why: 'Installation walkthroughs, testimonials filmed on customers’ own roofs and explainers on how net metering works build trust in a system meant to last decades.',
      },
      {
        service: 'linkedin-branding',
        why: 'EPC companies selling to factories, warehouses and commercial buildings reach plant heads and finance teams on LinkedIn, where founders and engineers can share commissioned projects and technical lessons.',
      },
      {
        service: 'drone-shoots',
        why: 'Aerial footage of large commercial rooftops and ground-mounted plants shows scale and finish in a way ground photos can’t – useful in case studies and EPC proposals.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Survey reminders, quote follow-ups, installation updates and panel-cleaning and service reminders on WhatsApp keep a slow decision moving and open referral conversations later.',
      },
    ],
    seasonality:
      'Enquiries rise before and through summer, when bills and power cuts peak, and inverter and battery sales jump during outages. Commercial buyers often push orders through before 31 March, installation work slows in the monsoon, and every change to subsidy schemes creates a burst of interest.',
    compliance:
      'Mention government subsidies only as the current scheme defines them – under PM Surya Ghar, for example, the subsidy is applied for through the national portal and depends on using a registered vendor – and present savings and payback as estimates based on the customer’s own bills, not promises.',
    kpis: [
      'Site-survey bookings',
      'Cost per qualified lead',
      'Survey-to-order rate',
      'Capacity sold (kW)',
    ],
    faqs: [
      {
        q: 'How do we stop competing only on price per kW?',
        a: 'Show what the price includes – panel and inverter brands, structure, wiring, warranties and service visits – and back it with real installations and reviews. Buyers who understand the difference stop comparing only the headline number.',
      },
      {
        q: 'Are solar lead-generation portals worth paying for?',
        a: 'They can fill gaps, but their leads are often shared with several installers. Your own search, Maps and ads presence brings enquiries that come to you alone, at a cost you can track.',
      },
      {
        q: 'How do we market to factories and commercial buildings?',
        a: 'Through LinkedIn, case studies from your own commissioned projects, a proposal-ready website and direct outreach to plant and facility heads. These deals take longer, so follow-up matters as much as the first lead.',
      },
      {
        q: 'Should an inverter and battery dealer market differently from an installer?',
        a: 'Yes. Battery buyers usually need a solution within days, so Maps visibility, call ads during outage season and quick WhatsApp replies matter more than long guides.',
      },
    ],
    localAngle:
      'Rooftop solar sells street by street – one visible installation and a satisfied neighbour lead to the next enquiry. Maps visibility for the area, photos of nearby installations and referral offers for existing customers work better than broad citywide ads.',
  },

  'home-services': {
    name: 'home services businesses',
    title: 'Home Services',
    marketingLabel: 'Home services marketing',
    businessNoun: 'home services company',
    audience:
      'plumbing, electrical, cleaning, pest-control and repair businesses, from single-van operators to multi-area service brands',
    customers: 'homeowners, tenants, apartment associations and property managers',
    intro:
      'When a pipe bursts or the power trips, people search, call the first credible number and book within the hour. For cleaning, pest control and planned repairs they compare more, read reviews and look for clear prices. BMU helps home services businesses get found in both moments, answer fast and earn the repeat bookings that keep the calendar steady.',
    challenges: [
      {
        title: 'Losing jobs to aggregators',
        text: 'Apps like Urban Company and listings on JustDial and Sulekha take a share of every job and own the customer relationship. A business needs its own direct demand to protect margins.',
      },
      {
        title: 'Missed calls are missed jobs',
        text: 'Urgent customers ring the next number if nobody answers. Without fast replies on calls and WhatsApp, marketing spend leaks away.',
      },
      {
        title: 'Trust at the door',
        text: 'Customers are letting a stranger into their home. Verified technicians, real reviews and clear prices decide who gets the booking.',
      },
      {
        title: 'One-off jobs',
        text: 'A plumber fixes a leak and may never hear from that customer again. Service plans, AMC reminders and seasonal offers turn one call into a relationship.',
      },
    ],
    buyerJourney: [
      {
        stage: 'Urgent search',
        text: 'A leak, a short circuit or a cockroach problem triggers a “near me” search on Google Maps – usually on a phone, often with “open now”.',
      },
      {
        stage: 'Quick check',
        text: 'They glance at the rating, a few reviews and whether prices are clear, then call or WhatsApp the first two that look reliable.',
      },
      {
        stage: 'Visit & quote',
        text: 'A technician inspects, quotes and fixes – how punctual and transparent they are matters more than the ad that brought them.',
      },
      {
        stage: 'Repeat & refer',
        text: 'A follow-up message, a review request and a reminder for the next service bring them back – and into the apartment WhatsApp group as a recommendation.',
      },
    ],
    channels: [
      {
        service: 'google-business-profile',
        why: 'The profile is often the only thing a customer checks before calling. Correct service areas and hours, photos of technicians and finished jobs, and a steady flow of reviews that mention the actual work decide who gets the call.',
      },
      {
        service: 'local-seo',
        why: 'Ranking in Maps for each service – “plumber near me”, “electrician open now”, “bathroom leakage repair”, “cockroach pest control” – brings urgent jobs without paying an aggregator commission.',
      },
      {
        service: 'google-ads',
        why: 'Call-only and search ads for urgent, higher-value jobs – leakage, rewiring, termite treatment, deep cleaning – scheduled for the hours the team can actually answer, with spend measured per booked job rather than per click.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Instant replies with starting prices, slot booking, technician arrival updates and reminders for the next pest-control round or AC service turn one job into repeat business.',
      },
      {
        service: 'website-design',
        why: 'A simple site with one page per service, starting prices or inspection charges, service areas and a book-now button converts visitors from ads and Maps – and stops them going back to the app.',
      },
      {
        service: 'seo',
        why: 'Pages that answer what people search before a planned job – “cost of bathroom waterproofing”, “how often to do pest control at home” – bring customers who are comparing calmly, not just in a hurry.',
      },
      {
        service: 'meta-ads',
        why: 'Facebook and Instagram ads for planned services – deep cleaning before Diwali, pre-monsoon pest control, sofa cleaning packages – reach households in the service area with a clear offer and a booking link.',
      },
      {
        service: 'social-media-management',
        why: 'Before-and-after posts, short maintenance tips and technician introductions keep the business familiar, so customers remember the name the next time something breaks.',
      },
      {
        service: 'ai-chatbots',
        why: 'A chatbot on the website and WhatsApp that quotes standard jobs, checks the PIN code and books a slot captures enquiries late in the evening, when no one is free to answer.',
      },
    ],
    seasonality:
      'Demand moves with the weather – pest control, waterproofing and leakage repairs before and during the monsoon, AC and electrical work in summer, and deep cleaning before Diwali and other festivals. House moves around lease renewals and the start of the school year also bring cleaning and repair bookings.',
    kpis: [
      'Calls and WhatsApp enquiries',
      'Cost per booked job',
      'Repeat booking rate',
      'New reviews per month',
    ],
    faqs: [
      {
        q: 'Should we stay on Urban Company and JustDial?',
        a: 'They can keep the calendar full, but they take a commission and own the customer. Building your own Maps presence, reviews and WhatsApp list over time brings direct bookings you keep.',
      },
      {
        q: 'How do we get more Google reviews?',
        a: 'Ask at the end of every job, while the customer is happy, and send a direct review link on WhatsApp. Reply to every review, including critical ones – it shows new customers how you handle problems.',
      },
      {
        q: 'Should we show prices online?',
        a: 'For standard jobs, yes – starting prices or inspection charges reduce price-shopping calls and build trust. For work that depends on inspection, explain how the quote is worked out.',
      },
      {
        q: 'Should we advertise one service or all of them?',
        a: 'Start with the services that have the healthiest margins and that your team can deliver reliably, then add others. Separate campaigns per service show which ones actually pay back.',
      },
    ],
    localAngle:
      'Home services are won within a short travel radius – the business that answers fastest and has the most recent reviews from nearby homes gets the job. Accurate service-area listings, apartment-community referrals and quick response times decide who the neighbourhood calls.',
  },

  'furniture-and-home-decor': {
    name: 'furniture and home decor businesses',
    title: 'Furniture & Home Decor',
    marketingLabel: 'Furniture marketing',
    businessNoun: 'furniture store',
    audience: 'furniture showrooms, mattress brands, home decor stores and lighting retailers',
    customers: 'new homeowners, families upgrading their homes, interior designers and offices',
    intro:
      'Furniture is a high-value, look-and-feel purchase. People browse for weeks on Instagram, Pinterest and marketplaces, but most still want to sit on the sofa or lie on the mattress before they pay. BMU helps furniture, mattress, decor and lighting businesses show their range well online, bring serious buyers into the showroom and sell online where the product allows.',
    challenges: [
      {
        title: 'Photos that undersell the product',
        text: 'Texture, finish, scale and colour sell furniture. Poor photos or supplier catalogue images make a good piece look ordinary next to the online brands.',
      },
      {
        title: 'Competing with online brands',
        text: 'Pepperfry, Urban Ladder, IKEA and D2C mattress brands advertise heavily and offer free delivery and trials. Stores have to sell what they can’t – touch, customisation and local service.',
      },
      {
        title: 'Long gaps between purchases',
        text: 'A family may buy a sofa once in ten years. Marketing has to catch them at the right moment – a new home, a wedding, a renovation.',
      },
      {
        title: 'Showroom visits are hard to track',
        text: 'Many buyers research online and then simply walk in, so it’s hard to tell which ad or post brought them.',
      },
    ],
    buyerJourney: [
      {
        stage: 'Inspiration',
        text: 'A move, a renovation or a wedding starts the search on Instagram, Pinterest and marketplace apps, where they save styles and price ranges.',
      },
      {
        stage: 'Shortlist & compare',
        text: 'They compare designs, materials, sizes and prices across websites and showrooms, and ask about delivery, customisation and warranty.',
      },
      {
        stage: 'Showroom visit',
        text: 'Most want to see, touch and test the piece – especially sofas, beds and mattresses – before paying.',
      },
      {
        stage: 'Delivery & after-sales',
        text: 'Delivery, assembly and how problems are handled decide the review and whether they come back for the next room.',
      },
    ],
    channels: [
      {
        service: 'instagram-marketing',
        why: 'Furniture and decor are discovered visually. Reels of styled rooms, new collections, lighting at night and craftsmanship close-ups build the saved-post wishlist that later becomes a showroom visit.',
      },
      {
        service: 'photography',
        why: 'Lifestyle shots of furniture in real rooms, plus clean product photos showing finish, fabric and dimensions, lift every listing, ad and catalogue – and reduce returns from buyers who misjudged size or colour.',
      },
      {
        service: 'google-business-profile',
        why: 'Accurate showroom hours, location, photos of the display floor and reviews mentioning delivery and build quality turn “furniture shop near me” searches into weekend visits.',
      },
      {
        service: 'local-seo',
        why: 'Ranking in Maps for “sofa shop near me”, “mattress store” and “lighting showroom” puts the store in front of people who are ready to visit this week.',
      },
      {
        service: 'meta-ads',
        why: 'Catalogue and carousel ads for new collections, festive sales and showroom events reach new homeowners and families within driving distance, optimised for WhatsApp enquiries and store visits rather than clicks.',
      },
      {
        service: 'google-ads',
        why: 'Search and Performance Max campaigns on product searches – “solid wood dining table”, “orthopaedic mattress”, “L-shaped sofa” – with local inventory and showroom-visit tracking.',
      },
      {
        service: 'website-development',
        why: 'A catalogue site with dimensions, materials, price ranges, room inspiration and WhatsApp or online ordering lets buyers shortlist before visiting – and lets mattress and decor brands sell directly.',
      },
      {
        service: 'seo',
        why: 'Category pages and buying guides – sofa fabrics, mattress firmness, dining tables for small apartments – rank through the long research phase and send buyers to the showroom already half decided.',
      },
      {
        service: 'ugc',
        why: 'Creator-style videos of real homes, unboxings and mattress trials work well as ads for mattress and decor brands and answer the “will it look right in my house” question.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Sharing catalogues, quotes and delivery updates on WhatsApp, and inviting past buyers to new-collection previews, keeps a slow decision moving.',
      },
    ],
    seasonality:
      'Dasara, Diwali and the wedding season are the main buying periods, along with year-end and online sale events for mattresses and decor. Housewarmings and moves into newly handed-over apartments keep demand coming through the rest of the year.',
    kpis: [
      'Showroom visits and direction requests',
      'Catalogue and WhatsApp enquiries',
      'Online orders and average order value',
      'Enquiry-to-sale rate',
    ],
    faqs: [
      {
        q: 'How do we compete with Pepperfry, Urban Ladder and IKEA?',
        a: 'Lean on what they can’t offer – trying the piece in person, customisation, local delivery and after-sales service – and show it clearly in photos, reels and reviews. Price is only one part of a furniture decision.',
      },
      {
        q: 'Should a furniture store sell online?',
        a: 'Smaller, standard items like decor, lighting and mattresses sell well online. For large or custom pieces, a website that drives showroom visits and WhatsApp enquiries usually works better than a full checkout.',
      },
      {
        q: 'How do we know whether online ads bring showroom visits?',
        a: 'Track direction requests and calls from Google, use WhatsApp-click ads and visit-linked offers, and ask customers at billing how they found you. Together they give a reliable picture.',
      },
      {
        q: 'Is it worth working with interior designers?',
        a: 'Often, yes. Designers recommend stores to their clients, so a trade programme and a clear catalogue they can browse on the website or Instagram can bring steady referred sales.',
      },
    ],
    localAngle:
      'Furniture buyers usually visit stores within a reasonable drive, especially for large pieces. A strong Maps presence, a showroom that looks as good online as in person and ads aimed at nearby new apartment handovers bring the neighbourhood in.',
  },

  'electronics-and-appliances': {
    name: 'electronics and appliance businesses',
    title: 'Electronics & Appliances',
    marketingLabel: 'Electronics marketing',
    businessNoun: 'electronics store',
    audience:
      'electronics and appliance stores, mobile shops and appliance brands with dealer networks',
    customers: 'families buying appliances, smartphone buyers, students and small offices',
    intro:
      'Electronics buyers can compare prices on Amazon and Flipkart in seconds, so a store or brand has to give them another reason to choose it – a demo, a better exchange offer, quick installation, honest advice or service nearby. BMU helps electronics stores, mobile shops and appliance brands show up when buyers search, promote offers in the moments that matter and keep customers for the next upgrade.',
    challenges: [
      {
        title: 'Price comparison on every product',
        text: 'Model numbers make comparison easy, so stores competing only on price lose to marketplaces and large chains. Bundles, exchange offers and after-sales service are what set them apart.',
      },
      {
        title: 'Short launch and offer windows',
        text: 'Phone launches and festive sales last days, not months. Offers, stock and ads have to go live together or the moment is lost.',
      },
      {
        title: 'Dealers and brands out of step',
        text: 'Appliance brands need dealers to push the right models and offers, and dealers need brand-quality creative they rarely have.',
      },
      {
        title: 'Little repeat contact',
        text: 'A customer buys a refrigerator, then disappears for years. Without warranty, service and upgrade reminders, the next purchase goes elsewhere.',
      },
    ],
    buyerJourney: [
      {
        stage: 'Research online',
        text: 'They read reviews, watch YouTube comparisons and check marketplace prices for the models they’re considering.',
      },
      {
        stage: 'Check local options',
        text: 'They look for stores nearby, compare in-store offers, EMI and exchange deals, and ask on WhatsApp whether the model is in stock.',
      },
      {
        stage: 'Demo & buy',
        text: 'In the store they compare picture, sound or build quality and decide – often swayed by an exchange price or a bundle.',
      },
      {
        stage: 'Installation & service',
        text: 'Delivery, installation and how warranty claims are handled decide the review and where they buy next time.',
      },
    ],
    channels: [
      {
        service: 'google-business-profile',
        why: 'Store hours, brand authorisations, offer posts and reviews that mention prices and service make the store the obvious pick when someone searches “mobile shop near me” or “LED TV showroom”.',
      },
      {
        service: 'local-seo',
        why: 'Ranking in Maps for category searches – “AC dealer near me”, “refrigerator showroom”, “washing machine shop” – catches buyers who have finished their research and want to buy locally.',
      },
      {
        service: 'google-ads',
        why: 'Search and Performance Max campaigns with local inventory ads for the models actually in stock, timed around launches and festive sales, and measured on calls, direction requests and store sales.',
      },
      {
        service: 'meta-ads',
        why: 'Offer-led Facebook and Instagram ads – exchange deals, no-cost EMI, festive bundles – targeted around the store reach people thinking about an upgrade who haven’t decided where to buy.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Launch-date and festive-offer broadcasts to past buyers, stock checks on request, and service and warranty reminders bring customers back for the next phone or appliance.',
      },
      {
        service: 'instagram-marketing',
        why: 'Reels of new launches, unboxings, quick side-by-side comparisons and in-store demos keep the shop visible to younger buyers who discover gadgets on Instagram.',
      },
      {
        service: 'seo',
        why: 'For appliance brands and larger stores, model and comparison pages – “1.5 ton inverter AC price”, “front load vs top load washing machine” – rank for the research buyers do before choosing a store or brand.',
      },
      {
        service: 'ugc',
        why: 'Creator-style reviews and demo videos give appliance brands relatable ad creative and answer practical questions – noise, capacity, ease of use – that spec sheets don’t.',
      },
      {
        service: 'website-development',
        why: 'Appliance brands need model specifications, a dealer locator and service-request and warranty-registration forms; larger stores need a catalogue that shows current stock and offers.',
      },
    ],
    seasonality:
      'Dasara, Diwali and the big online sale events set the largest peaks, and summer drives AC, cooler and refrigerator sales. Major phone launches, such as new iPhones each September, create short spikes, and big cricket tournaments often lift TV sales.',
    kpis: [
      'Store visits and direction requests',
      'Calls and WhatsApp enquiries',
      'Sales during offer periods',
      'Repeat and referral purchases',
    ],
    faqs: [
      {
        q: 'How do local stores compete with Amazon and Flipkart?',
        a: 'By offering what marketplaces can’t – a hands-on demo, same-day delivery and installation, an exchange on the spot and a person to call when something goes wrong. Marketing should say that clearly instead of trying to match prices.',
      },
      {
        q: 'Can we use brand names and logos in our ads?',
        a: 'Authorised dealers can usually use brand names within the brand’s dealer guidelines, while unauthorised use of logos can cause problems with the brand and with ad platforms. Check your dealer agreement before running brand-led campaigns.',
      },
      {
        q: 'Is WhatsApp marketing useful for an electronics store?',
        a: 'Yes, when it’s used for useful messages – launch dates, festive offers, service reminders – sent to customers who opted in. Too many messages lead to blocks, which also hurts the account’s reach.',
      },
      {
        q: 'Should an appliance brand focus on dealers or direct sales?',
        a: 'Usually both. The brand’s site and ads create demand, and a dealer locator plus ready-made creative help dealers convert it. Many brands also sell accessories and smaller products directly online.',
      },
    ],
    localAngle:
      'Electronics buyers prefer a store they can return to for service, so they choose one close to home. Maps visibility, posted offers and a WhatsApp list of past customers in the area keep the store in mind for the next upgrade.',
  },

  'telecom-and-internet': {
    name: 'telecom and internet providers',
    title: 'Telecom & Internet',
    marketingLabel: 'ISP marketing',
    businessNoun: 'internet service provider',
    audience: 'regional ISPs, fibre broadband providers and local cable operators',
    customers: 'households, apartment communities, people working from home and small businesses',
    intro:
      'Broadband is sold building by building. A regional ISP can only sell where its fibre reaches, competes with national brands that advertise everywhere, and loses customers the week service drops. BMU helps ISPs, broadband providers and cable operators market to the areas they actually serve, turn availability checks into connections and keep churn down with better service communication.',
    challenges: [
      {
        title: 'Selling only where the network reaches',
        text: 'Ads seen by people outside the serviceable area waste money and frustrate prospects. Targeting has to follow the network map, down to apartment complexes and PIN codes.',
      },
      {
        title: 'Competing with national brands',
        text: 'Large telcos bundle broadband with mobile, OTT and DTH and advertise heavily. Regional providers win on local service, consistent speeds and responsiveness – and have to prove it.',
      },
      {
        title: 'Churn after outages',
        text: 'One bad week of downtime and slow support can trigger cancellations and angry reviews. Communication during an outage matters as much as the fix.',
      },
      {
        title: 'Cable subscribers moving to OTT',
        text: 'Cable operators are watching viewers shift to streaming, so they need to market broadband and OTT bundles to keep their subscriber base.',
      },
    ],
    buyerJourney: [
      {
        stage: 'Move or switch',
        text: 'A new home, a work-from-home setup or frustration with the current provider starts the search for broadband options.',
      },
      {
        stage: 'Check availability',
        text: 'They find out which providers serve their building – often by asking in the apartment WhatsApp group or the association.',
      },
      {
        stage: 'Compare plans',
        text: 'They compare speed, price, installation charges, router and OTT bundles – and, above all, what neighbours say about uptime and support.',
      },
      {
        stage: 'Install & stay',
        text: 'Quick installation, stable speeds and fast fault resolution decide whether they renew or switch.',
      },
    ],
    channels: [
      {
        service: 'local-seo',
        why: 'Ranking in Maps for “broadband connection near me” and “fibre internet provider” in the areas the network actually covers brings households that are ready to sign up.',
      },
      {
        service: 'google-business-profile',
        why: 'A profile for each branch or service office, with accurate hours, plan posts and replies to every review – especially outage complaints – shows prospects that problems get handled.',
      },
      {
        service: 'google-ads',
        why: 'Search campaigns on broadband and fibre plan searches, geo-targeted to serviceable PIN codes, with availability checks and calls tracked as conversions rather than raw clicks.',
      },
      {
        service: 'meta-ads',
        why: 'Facebook and Instagram ads radius-targeted around apartment complexes and layouts where fibre has just arrived, with a launch offer and a WhatsApp availability check.',
      },
      {
        service: 'seo',
        why: 'Coverage pages by area and apartment complex, plan pages and guides on the speeds needed for work from home or gaming rank for availability searches and let prospects check before they call.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Renewal reminders, payment links, planned-maintenance notices and outage updates on WhatsApp cut support calls and give customers fewer reasons to leave.',
      },
      {
        service: 'ai-chatbots',
        why: 'A chatbot that checks serviceability by address, explains plans, raises fault tickets and shares ticket status answers the most common questions instantly – including at night, when outages hurt most.',
      },
      {
        service: 'website-design',
        why: 'A site with an availability checker, a simple plan comparison, clear installation charges and a self-service area makes signing up easier than calling around.',
      },
      {
        service: 'social-media-management',
        why: 'Maintenance notices, network upgrade news, plan offers and local updates keep subscribers informed and show prospects the provider is active and accountable.',
      },
    ],
    seasonality:
      'Sign-ups rise when people move – new apartment handovers, lease renewals and the start of the academic year bring students and families into new areas. The monsoon brings more outages, so it’s when service communication matters most for churn.',
    kpis: [
      'Availability checks and enquiries',
      'New connections installed',
      'Cost per connection',
      'Monthly churn rate',
    ],
    faqs: [
      {
        q: 'How do we stop ads reaching areas we don’t serve?',
        a: 'Target by PIN code or a tight radius around serviceable buildings, put an availability check before the lead form and exclude areas outside the network. It saves budget and avoids disappointed prospects.',
      },
      {
        q: 'How can a regional ISP compete with Jio and Airtel?',
        a: 'By being the provider with the faster local response – named area support, quick installation, honest speeds – and showing reviews and apartment endorsements that prove it. National brands find local attention hard to match.',
      },
      {
        q: 'Do online reviews matter for an ISP?',
        a: 'A lot. Prospects read them to judge uptime and support, and one unanswered complaint can outweigh several good reviews. Replying quickly and publicly shows how faults are handled.',
      },
      {
        q: 'How do we sell into a new apartment complex?',
        a: 'Work with the association, run a launch offer for residents, use radius-targeted ads and notices in the complex, and make the first installations fast. Early residents’ word of mouth decides the rest.',
      },
    ],
    localAngle:
      'For an ISP, a neighbourhood is won one apartment complex at a time – a well-served building leads to the next through association recommendations and resident WhatsApp groups. Area coverage pages, Maps presence and launch offers in newly connected buildings do the rest.',
  },

  'media-and-entertainment': {
    name: 'media and entertainment companies',
    title: 'Media & Entertainment',
    marketingLabel: 'Media and entertainment marketing',
    businessNoun: 'media company',
    audience: 'production houses, OTT platforms, music labels, independent artists and publishers',
    customers: 'viewers, listeners, readers, advertisers and distribution partners',
    intro:
      'Media businesses sell attention, and attention moves fast. A film has a few weeks around release, a song has days to catch on, and an OTT title competes with thousands of others in the same app. BMU helps production houses, OTT platforms, music labels and publishers build audiences before launch, make the most of release windows and turn one success into a following that comes back.',
    challenges: [
      {
        title: 'Short release windows',
        text: 'A film’s first weekend or a song’s first week shapes everything after. Campaigns have to be planned and built well before release, not started on the day.',
      },
      {
        title: 'Algorithms decide reach',
        text: 'YouTube, Instagram and streaming-app recommendations decide who sees content. Thumbnails, hooks, metadata and posting rhythm matter as much as the work itself.',
      },
      {
        title: 'Regional audiences, national noise',
        text: 'Kannada and other regional-language content competes with Hindi and English releases for the same screen time, so it has to find its core audience precisely.',
      },
      {
        title: 'Turning viewers into a business',
        text: 'Views alone don’t pay the bills. Tickets, subscriptions, streams, ad sales and licensing each need different audiences and messages.',
      },
    ],
    buyerJourney: [
      {
        stage: 'Discovery',
        text: 'People come across a trailer, a song clip or an article through a reel, a YouTube recommendation, a friend’s share or a news mention.',
      },
      {
        stage: 'Buzz check',
        text: 'They look at reactions, reviews, comments and what creators and friends are saying before committing their time or money.',
      },
      {
        stage: 'Watch, stream or buy',
        text: 'They book a ticket, press play, stream the track, subscribe or buy the book – often within days of first hearing about it.',
      },
      {
        stage: 'Follow & return',
        text: 'If they enjoyed it, they follow the channel, artist or publisher, and the next release starts with an audience already waiting.',
      },
    ],
    channels: [
      {
        service: 'video-production',
        why: 'Teasers, behind-the-scenes films, cast and artist interviews and vertical cut-downs for reels and Shorts give a release enough content to keep feeds active through the whole campaign.',
      },
      {
        service: 'social-media-management',
        why: 'A release calendar across Instagram, YouTube, Facebook and X – countdowns, character posters, song drops, audience reactions – builds anticipation week by week and keeps conversation going after launch.',
      },
      {
        service: 'influencer-marketing',
        why: 'Creators who review films, react to music or recommend books reach exactly the audiences a release needs, especially in regional languages, where a few trusted voices carry real weight.',
      },
      {
        service: 'meta-ads',
        why: 'Trailer and song-clip ads targeted by language, location and interest, with ticket-booking, streaming or subscription links, turn interest into action during the release window.',
      },
      {
        service: 'instagram-marketing',
        why: 'Reels audio, song-led trends, creator collaborations and artist-led stories help music and films travel on Instagram, where many releases now find their first audience.',
      },
      {
        service: 'google-ads',
        why: 'YouTube ads for trailers and music videos, and search ads on title, cast and “where to watch” searches, capture release-time demand and send it to the right booking or streaming page.',
      },
      {
        service: 'seo',
        why: 'For publishers and OTT platforms, well-structured title, author, episode and topic pages rank for the searches people make after hearing about something – and keep earning traffic long after launch.',
      },
      {
        service: 'website-development',
        why: 'A publisher or OTT site has to stay fast through traffic spikes and support subscriptions, paywalls or ad slots; a film or label release needs a microsite with trailer, credits and booking or streaming links.',
      },
      {
        service: 'content-marketing',
        why: 'Newsletters, editorial series and behind-the-story articles give publishers and labels an audience they own, instead of one that depends entirely on platform algorithms.',
      },
      {
        service: 'personal-branding',
        why: 'Directors, musicians and authors with a visible voice of their own carry every future project; a steady personal presence turns their following into each release’s first audience.',
      },
    ],
    seasonality:
      'Film releases cluster around festivals, long weekends and holidays – Sankranti, Dasara, Diwali, Christmas and the summer break – while big cricket tournaments compete for the same screen time. Publishing has its own peaks around literature festivals and year-end gifting.',
    kpis: [
      'Views and watch time',
      'Followers and subscribers gained',
      'Tickets, streams or subscriptions',
      'Cost per subscriber or ticket',
    ],
    faqs: [
      {
        q: 'When should a film or series start its digital campaign?',
        a: 'Usually weeks before release – first look, teaser, then songs and trailer – so the audience is built by launch day. Starting at release leaves too little time for buzz to grow.',
      },
      {
        q: 'Do paid ads work for music?',
        a: 'They can push a song to the right listeners in its first days, when platforms are deciding how widely to recommend it. Ads do most when they run alongside creator content and reels, not instead of them.',
      },
      {
        q: 'How do regional-language releases reach their audience?',
        a: 'Target ads by language and location, work with creators who speak to that audience in its own language, and write captions, titles and metadata in that language too. Precise reach beats broad national spend.',
      },
      {
        q: 'Can we use popular songs or film clips in our marketing?',
        a: 'Only with the right permissions. Music and film clips are copyrighted, and platforms remove posts or mute audio when rights aren’t cleared – so plan licences into the campaign.',
      },
    ],
    localAngle:
      'For a theatre release, a live show or an independent label, the first fans are often local. Ads around the cinemas and venues showing the work, local creators and community pages fill early shows and give word of mouth somewhere to start.',
  },

  'photography-and-creative': {
    name: 'photographers and creative studios',
    title: 'Photography & Creative',
    marketingLabel: 'Photography marketing',
    businessNoun: 'photography studio',
    audience: 'photographers, videographers, studios and design agencies',
    customers: 'couples, families, brands, ad agencies and corporate marketing teams',
    intro:
      'Creative businesses are hired on their portfolio and on trust – a couple booking a wedding shoot or a brand choosing a design agency wants to see work like theirs and know the team will deliver. BMU helps photographers, videographers, studios and design agencies show the right work to the right clients, get found when those clients search and fill the calendar outside peak season.',
    challenges: [
      {
        title: 'One portfolio for everything',
        text: 'Weddings, products, newborns and corporate events in one gallery confuse every kind of client. Each service needs its own focused portfolio and page.',
      },
      {
        title: 'Instagram reach is unpredictable',
        text: 'Many creatives rely entirely on Instagram, then lose enquiries when reach drops. Search, referrals and a proper website spread the risk.',
      },
      {
        title: 'Price comparison on a craft',
        text: 'Clients compare packages on hours and deliverables, not on style or skill. Showing process, experience and complete stories helps justify the price.',
      },
      {
        title: 'Feast-and-famine bookings',
        text: 'Wedding season is packed, then months go quiet. Commercial, corporate and product work can fill the gaps if it’s marketed separately.',
      },
    ],
    buyerJourney: [
      {
        stage: 'Search & scroll',
        text: 'Clients search “product photographer near me” or “pre-wedding shoot”, browse Instagram and ask friends or colleagues for names.',
      },
      {
        stage: 'Portfolio check',
        text: 'They look at full galleries and films, not only highlights, to judge style, consistency and whether the work suits them.',
      },
      {
        stage: 'Enquiry & package',
        text: 'They message two or three shortlisted creatives on WhatsApp or Instagram, compare packages and ask about dates, deliverables and turnaround.',
      },
      {
        stage: 'Shoot, delivery & referral',
        text: 'How the shoot feels and how quickly the edits arrive decide the review, the tag on social media and the referral.',
      },
    ],
    channels: [
      {
        service: 'instagram-marketing',
        why: 'Instagram is the portfolio most clients check first. Reels of shoots in progress, before-and-after edits, client stories and a highlight for each service turn followers into enquiries – as long as DMs are answered quickly.',
      },
      {
        service: 'website-design',
        why: 'A portfolio site with a separate gallery per service, package starting points, client stories and an enquiry form that asks for date, location and type of shoot filters serious clients from casual ones.',
      },
      {
        service: 'local-seo',
        why: 'Ranking in Maps for “photo studio near me”, “maternity photographer” and “passport photo studio” brings clients who want someone nearby, especially for studio sessions and walk-ins.',
      },
      {
        service: 'google-business-profile',
        why: 'A profile whose gallery changes every week, reviews that mention the type of shoot and posts about open dates help a studio stand out among many similar-looking listings.',
      },
      {
        service: 'seo',
        why: 'Pages for each shoot type – e-commerce product photography, corporate headshots, newborn sessions – and posts on locations and planning rank for the searches clients make before contacting anyone.',
      },
      {
        service: 'google-ads',
        why: 'Search campaigns on commercial searches – “e-commerce product photography”, “corporate video production company”, “brand identity design agency” – bring business clients whose budgets justify the click.',
      },
      {
        service: 'linkedin-branding',
        why: 'Design agencies and commercial photographers win brand and corporate work on LinkedIn, where marketing heads look for partners; case studies and behind-the-scenes posts keep them in mind.',
      },
      {
        service: 'meta-ads',
        why: 'Ads built around a short film or gallery, targeted to the city and to the right age groups and interests, with a WhatsApp booking button, fill wedding, maternity and newborn calendars.',
      },
      {
        service: 'personal-branding',
        why: 'Clients often hire the person behind the camera. A photographer or creative director with a visible point of view – their approach, stories and opinions on craft – earns trust and can charge for their name.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Automatic replies with package PDFs, availability checks, shoot-day reminders and delivery updates let a small team answer every enquiry fast, even mid-shoot.',
      },
    ],
    seasonality:
      'Wedding work follows the wedding season and auspicious muhurtham dates, leaving quieter months that commercial, corporate and product shoots can fill. Brand work rises before Diwali and other festive campaigns, and corporate events cluster near the financial year-end.',
    kpis: [
      'Enquiries by shoot type',
      'Enquiry-to-booking rate',
      'Average booking value',
      'Reviews and referrals',
    ],
    faqs: [
      {
        q: 'Is Instagram enough for a photographer?',
        a: 'It’s essential but risky on its own, because reach changes without notice. A website, a Google profile and search visibility bring enquiries from people who never found you on Instagram.',
      },
      {
        q: 'Should we show prices on our website?',
        a: 'Starting prices or package ranges filter out clients who aren’t a fit while leaving room for custom quotes. Full price lists suit studio and standard shoots better than weddings.',
      },
      {
        q: 'How do we get more commercial clients?',
        a: 'Build a separate portfolio and page for commercial work, show product listings or campaigns you shot, and be visible on LinkedIn and in search, where marketing teams look.',
      },
      {
        q: 'How do we stand out when everyone’s work looks similar?',
        a: 'Pick a clear style and a few specialisms, show complete stories rather than only highlights, and let client reviews describe the experience. A distinct point of view is easier to remember than a long list of services.',
      },
    ],
    localAngle:
      'Studio sessions, newborn shoots and walk-in work like passport photos come from nearby, so a studio wins its neighbourhood with an up-to-date Maps listing, recent work from local clients and partnerships with nearby schools, salons and event venues.',
  },

  'ngos-and-non-profits': {
    name: 'NGOs and non-profits',
    title: 'NGOs & Non-profits',
    marketingLabel: 'NGO marketing',
    businessNoun: 'NGO',
    audience: 'NGOs, trusts, foundations and companies running CSR programmes',
    customers: 'individual donors, CSR teams, volunteers and the communities they serve',
    intro:
      'NGOs compete for attention, donations and CSR funding with a fraction of a company’s budget. Donors give when they understand the cause, trust the organisation and can see the impact. BMU helps NGOs and foundations tell their story clearly, reach donors and CSR partners and make giving easy – and helps companies show what the CSR programmes they fund are achieving.',
    challenges: [
      {
        title: 'Small budgets, big goals',
        text: 'Marketing budgets are usually tight, so every rupee has to work hard and free tools have to be used well.',
      },
      {
        title: 'Proving impact',
        text: 'Donors and CSR teams want evidence of where the money goes. Stories without numbers, or numbers without stories, don’t persuade.',
      },
      {
        title: 'Trust in a crowded space',
        text: 'Donors are wary of unfamiliar organisations. Registrations, transparency and visible work build credibility.',
      },
      {
        title: 'One-time donors',
        text: 'Many donations are one-offs, triggered by a single appeal. Turning them into monthly givers takes a plan.',
      },
    ],
    buyerJourney: [
      {
        stage: 'Awareness',
        text: 'People come across the cause through social media, the news, a friend or a campaign.',
      },
      {
        stage: 'Trust check',
        text: 'They look at the website, registrations, reports and social proof before giving.',
      },
      {
        stage: 'Donation or engagement',
        text: 'They donate or volunteer – or, for CSR teams, ask for a proposal.',
      },
      {
        stage: 'Relationship',
        text: 'Impact updates and thank-you messages decide whether they give again.',
      },
    ],
    channels: [
      {
        service: 'website-development',
        why: 'An NGO website has to make giving easy – a fast donation page with UPI and cards, clear registrations, impact reports and stories. It’s where donors decide whether to trust the organisation.',
      },
      {
        service: 'social-media-management',
        why: 'Regular stories from the field – the people helped, the volunteers, the progress – keep supporters connected and bring new ones in.',
      },
      {
        service: 'video-production',
        why: 'Short documentaries and field videos show impact in a way reports can’t. They anchor donation appeals, CSR presentations and fundraising events.',
      },
      {
        service: 'linkedin-branding',
        why: 'CSR heads and corporate decision-makers are on LinkedIn. Sharing impact, partnerships and the founder’s perspective there opens CSR conversations.',
      },
      {
        service: 'seo',
        why: 'Ranking for cause and donation searches – “donate for children’s education”, “elderly care NGOs in Bengaluru” – brings donors and volunteers who are already looking to help.',
      },
      {
        service: 'meta-ads',
        why: 'Targeted Facebook and Instagram campaigns around giving moments – festivals, the financial year-end, emergencies – reach people likely to support the cause.',
      },
      {
        service: 'content-marketing',
        why: 'Field stories, programme updates and plain summaries of the annual report, shared as articles and a donor newsletter, show supporters and CSR partners what their money did between appeals.',
      },
      {
        service: 'pitch-decks',
        why: 'A clear CSR proposal deck – the problem, the programme, the budget and measurable outcomes – helps an NGO win and renew corporate funding.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Thank-you messages, receipts, impact updates and campaign appeals on WhatsApp keep donors close and encourage repeat giving.',
      },
      {
        service: 'google-ads',
        why: 'Search ads reach people actively looking to donate or volunteer for a cause. Registered NGOs should also check whether they qualify for Google’s nonprofit programme, which can include free search ad credit.',
      },
    ],
    seasonality:
      'Giving rises before the financial year-end, when donors look for 80G deductions, and during festivals and the Daan Utsav ‘Joy of Giving’ week in early October. CSR budgets are usually planned early in the financial year and spent by its end.',
    compliance:
      'Only promise 80G tax benefits if the organisation holds a valid 80G registration, and issue proper receipts. Accepting donations from foreign sources requires FCRA registration, so international fundraising campaigns need to check this first.',
    kpis: [
      'Donations raised',
      'Cost per donor',
      'Recurring donors',
      'CSR proposals and partnerships',
    ],
    faqs: [
      {
        q: 'How can an NGO market itself on a small budget?',
        a: 'Start with the free and low-cost basics – a clear website with easy donations, a Google profile, regular social stories and WhatsApp updates. Paid campaigns can then amplify specific appeals.',
      },
      {
        q: 'How do we attract CSR funding?',
        a: 'CSR teams look for clear programmes, measurable outcomes, proper registrations – including CSR-1 – and good reporting. A strong proposal deck, an impact-focused website and an active LinkedIn presence for the founders help get meetings.',
      },
      {
        q: 'How do we turn one-time donors into monthly donors?',
        a: 'Thank them quickly, show the impact of their gift and then invite them to give monthly through a simple UPI AutoPay or card mandate. Regular updates keep recurring donors committed.',
      },
      {
        q: 'Do NGOs need a website if they’re active on social media?',
        a: 'Yes. Donors and CSR teams check registrations, reports and financials before giving, and a website is where they expect to find them. It’s also where donations should be processed securely.',
      },
    ],
    localAngle:
      'Local donors and volunteers often support causes they can see in their own neighbourhood. Sharing local programme stories, events and volunteering opportunities, with a Google profile for the centre, builds a supporter base nearby.',
  },

  'government-and-psu': {
    name: 'government bodies and PSUs',
    title: 'Government & PSU',
    marketingLabel: 'Government and PSU marketing',
    businessNoun: 'public sector organisation',
    audience:
      'public sector undertakings, municipal bodies, government departments and tourism boards',
    customers:
      'citizens, tourists and visitors, investors, and the businesses and customers PSUs serve',
    intro:
      'Public bodies communicate to inform citizens, increase the use of services, promote a destination or attract investment – and every rupee spent is accountable. The work is usually bought through tenders, empanelment or the Government e-Marketplace (GeM), with defined scopes and reporting. BMU supports public sector undertakings, municipal bodies and tourism boards with campaigns, websites and content that reach people clearly, in the languages they use.',
    challenges: [
      {
        title: 'Reaching every citizen',
        text: 'Public messages have to work in Kannada and English, often more languages, for every age group and for people on basic phones and slow connections.',
      },
      {
        title: 'Procurement shapes the work',
        text: 'Agencies are engaged through tenders, empanelment or GeM with fixed scopes, so campaigns must be planned to the brief and documented to the standard an audit expects.',
      },
      {
        title: 'Accuracy and approvals',
        text: 'Every post and creative goes through official approval, and a wrong date or figure becomes a public problem. Speed has to come from planning, not shortcuts.',
      },
      {
        title: 'Proving public value',
        text: 'Reach alone isn’t enough – departments need to show that a campaign led to registrations, service use, visitor numbers or awareness, in reports they can present.',
      },
    ],
    buyerJourney: [
      {
        stage: 'Hear about it',
        text: 'Citizens or visitors come across a scheme, service or destination through news, social media, hoardings, WhatsApp forwards or search.',
      },
      {
        stage: 'Find the official source',
        text: 'They search to confirm it’s genuine and look for the official website or handle, wary of fake pages and misinformation.',
      },
      {
        stage: 'Understand & act',
        text: 'They read eligibility, steps or travel details, then register, apply, pay, book or plan a visit – usually on a phone.',
      },
      {
        stage: 'Get help & share',
        text: 'Helplines, FAQs and replies on social media decide whether the experience is smooth, and whether they recommend it to others.',
      },
    ],
    channels: [
      {
        service: 'social-media-management',
        why: 'Official handles that post scheme updates, service notices and events in Kannada and English, answer citizen questions and correct misinformation quickly become the source people check first.',
      },
      {
        service: 'website-design',
        why: 'A site that is accessible, bilingual, mobile-first and organised around what citizens need to do – apply, pay, check status, find a contact – reduces helpline load and builds trust.',
      },
      {
        service: 'video-production',
        why: 'Short explainers on how to use a service or apply for a scheme, and destination films for tourism boards, communicate more clearly than circulars – on social media, public screens and at events.',
      },
      {
        service: 'content-marketing',
        why: 'Plain-language guides, FAQs and step-by-step explainers for schemes and services, written in the languages people use, answer questions before they become complaints.',
      },
      {
        service: 'ai-chatbots',
        why: 'A WhatsApp or website chatbot that answers common questions on services, timings and documents in Kannada and English, round the clock, takes pressure off call centres and front offices.',
      },
      {
        service: 'meta-ads',
        why: 'Facebook and Instagram campaigns for registration drives, awareness campaigns and tourism promotion can target specific districts, languages and age groups, with results that go straight into the report.',
      },
      {
        service: 'instagram-marketing',
        why: 'For tourism boards, Instagram is where trips get imagined – reels of destinations, festivals and food, creator collaborations and reposts from visitors make a place feel worth the journey.',
      },
      {
        service: 'drone-shoots',
        why: 'Aerial footage of heritage sites, landscapes, infrastructure projects and public events gives tourism films and project updates a sense of scale – flown within the Drone Rules and site permissions.',
      },
      {
        service: 'seo',
        why: 'Well-structured pages for each service, scheme and destination help official sources rank first, ahead of agents and unofficial sites that copy – and sometimes garble – the information.',
      },
      {
        service: 'website-development',
        why: 'Secure, maintainable builds that handle traffic spikes on results or registration days and connect to payment, application and grievance systems keep public services available when demand peaks.',
      },
    ],
    seasonality:
      'Work follows the financial year – new budgets from April and a push to complete spending before 31 March – along with scheme launches, fee and tax deadlines and public events. Tourism promotion peaks ahead of holiday seasons and major festivals such as Mysuru Dasara.',
    compliance:
      'Government websites are expected to follow the Guidelines for Indian Government Websites (GIGW) on accessibility, multilingual content and security, and publicity has to follow the Supreme Court’s guidelines on government advertising as well as the body’s own procurement and approval rules.',
    kpis: [
      'Reach by district and language',
      'Registrations or applications',
      'Queries resolved online',
      'Engagement on official channels',
    ],
    faqs: [
      {
        q: 'How do government bodies hire a marketing agency?',
        a: 'Usually through a tender, an empanelment process or the Government e-Marketplace (GeM), with eligibility criteria and a defined scope. Requirements differ by department, so the bid documents are the place to start.',
      },
      {
        q: 'Can government campaigns be measured like commercial ones?',
        a: 'Yes, with the right goals – registrations, applications, helpline use, website visits or visitor enquiries rather than sales. Agreeing these at the start makes the final report meaningful.',
      },
      {
        q: 'How should we handle criticism on official pages?',
        a: 'Answer factual questions promptly, point people to the right grievance channel and correct misinformation calmly. Deleting criticism usually draws more attention than responding to it.',
      },
      {
        q: 'Do government websites have special requirements?',
        a: 'Yes. They are expected to follow GIGW on accessibility, multilingual content, security and regular updates, and many must work well on low-end phones. These belong in the brief from day one.',
      },
    ],
    localAngle:
      'For a municipal body or local office, communication works ward by ward – notices about water supply, roadworks, waste collection or health camps in the local language, shared through resident groups and local pages, reach people far better than citywide posts.',
  },

  'pet-care': {
    name: 'pet care businesses',
    title: 'Pet Care',
    marketingLabel: 'Pet care marketing',
    businessNoun: 'pet care business',
    audience: 'pet shops, veterinary clinics, groomers, boarding centres and pet food brands',
    customers: 'pet parents – mostly dog and cat owners – and first-time adopters',
    intro:
      'Pet parents treat their animals like family and choose vets, groomers and food carefully – they read reviews, ask in community groups and stay loyal once they trust someone. BMU helps pet shops, vets, groomers and pet food brands earn that trust online, get found nearby and build the repeat relationship pet care depends on.',
    challenges: [
      {
        title: 'Trust before the first visit',
        text: 'Nobody hands their pet to an unknown groomer or vet without checking reviews, photos and how the place looks. Thin listings lose to well-documented competitors.',
      },
      {
        title: 'Competing with quick-commerce and online stores',
        text: 'Pet food and supplies now arrive in minutes from apps, so pet shops need to sell advice, grooming and services the apps can’t.',
      },
      {
        title: 'Pet food is a crowded shelf',
        text: 'New pet food brands compete with large international labels in stores and online, and have to earn trust on ingredients and pet health without overclaiming.',
      },
      {
        title: 'Keeping the routine going',
        text: 'Vaccinations, grooming and food are recurring needs, but without reminders customers drift to whoever is closest or cheapest.',
      },
    ],
    buyerJourney: [
      {
        stage: 'Need or first pet',
        text: 'A new pet, an illness, a grooming need or an empty food bag triggers a search – “vet near me open now”, “dog grooming at home”.',
      },
      {
        stage: 'Check reviews & community',
        text: 'They read reviews, look at photos and ask in apartment and pet-parent WhatsApp and Instagram groups.',
      },
      {
        stage: 'First visit or order',
        text: 'They book an appointment, try a groomer or order a trial pack – and watch closely how their pet is treated.',
      },
      {
        stage: 'Routine & loyalty',
        text: 'Reminders for vaccinations, grooming and refills, plus a good experience, turn one visit into years of business.',
      },
    ],
    channels: [
      {
        service: 'google-business-profile',
        why: 'For vets, groomers and pet shops, the profile is where pet parents check ratings, hours, emergency availability and photos of the space. Reviews describing how the pet was handled carry the most weight.',
      },
      {
        service: 'local-seo',
        why: 'Ranking in Maps for “vet near me”, “pet shop near me” and “dog grooming” – often searched with “open now” – brings urgent and routine visits from the immediate area.',
      },
      {
        service: 'instagram-marketing',
        why: 'Pets perform on Instagram. Grooming transformations, happy regulars, vet tips and reposts from pet parents build a following that turns into bookings and store visits.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Vaccination and deworming reminders, grooming slot bookings, food refill prompts and order updates on WhatsApp keep the routine – and the customer – coming back.',
      },
      {
        service: 'google-ads',
        why: 'Search ads for emergency vet care, home grooming and pet boarding reach pet parents who need help today, with calls and bookings tracked as the result.',
      },
      {
        service: 'meta-ads',
        why: 'Facebook and Instagram ads for grooming packages, new-pet starter kits and food trial offers reach pet parents around the clinic or store – or across India for a pet food brand.',
      },
      {
        service: 'influencer-marketing',
        why: 'Pet influencers and pet-parent creators give food and accessory brands believable reviews and reach audiences that already trust their recommendations.',
      },
      {
        service: 'seo',
        why: 'Pages and guides on vaccination schedules, breed care, grooming frequency and nutrition rank for what new pet parents search – and position the clinic or shop as the one to trust.',
      },
      {
        service: 'website-development',
        why: 'Pet food and accessory brands need a store that handles subscriptions and repeat orders; clinics and groomers need online booking that captures the pet’s details up front.',
      },
      {
        service: 'packaging-design',
        why: 'Pet food packaging has to stand out on shelves and in marketplace thumbnails while clearly showing ingredients, life stage and feeding guidance.',
      },
    ],
    seasonality:
      'Demand is steady but shifts with the weather – ticks, fleas, skin problems and grooming needs rise in the monsoon and summer, and boarding peaks over Diwali, Christmas and the summer holidays when owners travel. Diwali fireworks also bring anxiety-related vet enquiries.',
    kpis: [
      'Appointments and grooming bookings',
      'Calls and direction requests',
      'Repeat visit rate',
      'Online repeat orders',
    ],
    faqs: [
      {
        q: 'How can a vet clinic market itself?',
        a: 'Keep the Google profile complete with hours and emergency information, ask for reviews after visits, share useful care tips and send vaccination reminders. Informative content builds trust without making claims about treatments.',
      },
      {
        q: 'How do pet shops compete with apps that deliver in minutes?',
        a: 'Sell what the apps can’t – advice, grooming, trying on harnesses and staff who know the pet – and keep regulars on a WhatsApp list for refills and new stock.',
      },
      {
        q: 'Do pet influencers actually sell products?',
        a: 'For food, treats and accessories they often do, because followers trust a creator whose pet they’ve watched for months. Start with smaller creators whose audiences match your price point and track sales with codes.',
      },
      {
        q: 'How should a new pet food brand build trust?',
        a: 'Be clear about ingredients, sourcing and which pets the food suits, show real pets eating it and collect honest reviews from early buyers. Avoid health claims you can’t support.',
      },
    ],
    localAngle:
      'Pet parents rarely travel far for a vet, groomer or pet shop, so the business with the strongest reviews in the area and a presence in local pet-parent groups and walking spots wins the neighbourhood.',
  },

  'coworking-and-office-space': {
    name: 'coworking spaces and office providers',
    title: 'Coworking & Office Space',
    marketingLabel: 'Coworking marketing',
    businessNoun: 'coworking space',
    audience: 'coworking operators, managed office providers and virtual office services',
    customers:
      'freelancers, startups, growing companies, enterprise teams and businesses that need a registered address',
    intro:
      'Coworking buyers range from a freelancer who wants a hot desk tomorrow to a company that needs 200 seats in a managed office next quarter. They compare location, commute, price per seat and the feel of the space, and most sign only after a tour. BMU helps coworking operators and office providers fill seats, book tours and reach both the walk-in member and the enterprise buyer.',
    challenges: [
      {
        title: 'Large brands dominate search',
        text: 'National operators spend heavily on ads and broker listings, so independent spaces have to win on location, community and value for specific searches.',
      },
      {
        title: 'Brokers take a cut',
        text: 'Office-space brokers and aggregators bring deals but charge commission. Direct demand protects margins, especially on larger teams.',
      },
      {
        title: 'Very different buyers',
        text: 'A day-pass user, a 10-seat startup and an enterprise facilities team need different messages, pricing and sales processes.',
      },
      {
        title: 'Occupancy gaps',
        text: 'An empty cabin earns nothing. When a large client leaves, the space needs a pipeline ready to fill those seats quickly.',
      },
    ],
    buyerJourney: [
      {
        stage: 'Search by location',
        text: 'They search “coworking space near me”, “managed office near metro” or “virtual office for GST registration”, usually around their team’s commute.',
      },
      {
        stage: 'Compare options',
        text: 'They compare price per seat, amenities, meeting rooms, parking, contract terms and reviews across a few spaces and brokers.',
      },
      {
        stage: 'Tour & trial',
        text: 'Most book a tour or a day pass to check the space, the internet, the noise and the community before committing.',
      },
      {
        stage: 'Sign & expand',
        text: 'They sign a short agreement, and good service and easy upgrades decide whether they renew and grow in the same space.',
      },
    ],
    channels: [
      {
        service: 'google-ads',
        why: 'Search campaigns on “coworking space near me”, “managed office space” and “virtual office for GST registration”, split by product and centre, with tour bookings as the conversion – so budget follows what actually fills seats.',
      },
      {
        service: 'local-seo',
        why: 'Ranking in Maps for coworking and office-space searches around each centre catches teams who want to stay close to home, the metro or their clients.',
      },
      {
        service: 'google-business-profile',
        why: 'Each centre needs its own profile with photos of desks, cabins and meeting rooms, amenities, access hours and member reviews – often the first thing a prospect checks.',
      },
      {
        service: 'seo',
        why: 'A page for each centre, product pages for hot desks, private cabins, managed offices and virtual offices, and clear answers on GST and company registration addresses rank for searches the big brands cover thinly.',
      },
      {
        service: 'website-design',
        why: 'Floor plans, photos, seat pricing or ranges, a virtual tour and a simple book-a-tour form make the space easy to shortlist without a phone call.',
      },
      {
        service: 'linkedin-branding',
        why: 'Founders, HR and facilities heads deciding on space for growing teams are on LinkedIn; posts on member companies, events and flexible-office planning keep the operator in front of them.',
      },
      {
        service: 'meta-ads',
        why: 'Instagram and Facebook ads for day passes, community events and launch offers reach freelancers and early-stage founders who choose a space on feel as much as price.',
      },
      {
        service: 'photography',
        why: 'Bright, well-composed photos and short walkthrough clips of desks, cabins, cafeterias and meeting rooms decide whether a space makes the shortlist on listings, ads and the website.',
      },
      {
        service: 'marketing-automation',
        why: 'A CRM that routes enquiries by product and seat count, books tours and follows up on proposals keeps enterprise and startup leads from slipping through.',
      },
      {
        service: 'social-media-management',
        why: 'Posts on member events, workshops and the people working in the space show the community that makes coworking feel different from a regular office.',
      },
    ],
    seasonality:
      'Demand follows hiring and funding – teams expand after funding rounds and at the start of the financial year, and corporate decisions slow over the December holidays. Virtual-office demand is fairly steady, tied to new business and GST registrations.',
    kpis: ['Tour bookings', 'Cost per tour', 'Tour-to-signing rate', 'Occupancy rate'],
    faqs: [
      {
        q: 'Should we rely on office-space brokers?',
        a: 'Brokers help with larger deals, but they take a commission and show your space alongside competitors. Building direct demand through search, Maps and LinkedIn reduces that dependence over time.',
      },
      {
        q: 'How do we compete with national coworking brands?',
        a: 'Focus on what they can’t match locally – a specific location, a closer community, flexible terms or better value – and target searches for your area and products rather than broad terms.',
      },
      {
        q: 'How do we market virtual offices?',
        a: 'Explain clearly what the address can and can’t be used for, which documents are provided and how mail is handled. Most buyers search for registration addresses, so search ads and clear pages work well.',
      },
      {
        q: 'Is it worth running events in the space?',
        a: 'Often, yes. Events bring potential members in for a first visit, give social media real content and show the community that sets the space apart.',
      },
    ],
    localAngle:
      'Most members choose a space within an easy commute, so each centre wins its area through its own Maps listing, reviews from local members, events for nearby founders and freelancers, and partnerships with businesses next door.',
  },

  'security-services': {
    name: 'security service providers',
    title: 'Security Services',
    marketingLabel: 'Security services marketing',
    businessNoun: 'security agency',
    audience:
      'manned guarding agencies, CCTV installers and access-control and security systems integrators',
    customers: 'apartment associations, facility managers, factories, retail stores and homeowners',
    intro:
      'Security is bought on trust and proof. Apartment associations and facility managers want licensed, well-supervised guards and quick response; homeowners and shops want CCTV that works when they need the footage. BMU helps security agencies, CCTV installers and access-control integrators look credible online, reach the people who decide and win contracts that renew.',
    challenges: [
      {
        title: 'Bought on price, judged on service',
        text: 'Guarding contracts often go to the lowest bid, then get cancelled when service slips. Agencies have to show supervision, training and response, not just a rate per guard.',
      },
      {
        title: 'Committee decisions',
        text: 'Association committees and corporate admin teams decide together, often on a fixed renewal cycle, so the agency has to be on the shortlist before the contract comes up.',
      },
      {
        title: 'A crowded CCTV market',
        text: 'Installers compete with online sellers of DIY cameras and many small dealers. System design, installation quality and service are what set them apart.',
      },
      {
        title: 'Little visible proof',
        text: 'Security work is invisible when it goes well, and many clients prefer not to be named, so case studies and reviews take effort to gather.',
      },
    ],
    buyerJourney: [
      {
        stage: 'Trigger',
        text: 'A theft, an audit, a new building or an expiring contract makes the association, facility head or owner start looking.',
      },
      {
        stage: 'Shortlist',
        text: 'They search online, ask other associations and facility managers for references, and check licences, client sectors and reviews.',
      },
      {
        stage: 'Site survey & proposal',
        text: 'Agencies or installers survey the site, propose manpower or a system design and quote, and the committee compares bids.',
      },
      {
        stage: 'Contract & renewal',
        text: 'Day-to-day service, reporting and how incidents are handled decide whether the contract renews or goes back out to bid.',
      },
    ],
    channels: [
      {
        service: 'seo',
        why: 'Pages for each service and client type – apartment security, factory guarding, CCTV for shops, access control for offices – rank for the specific searches facility managers and committees make.',
      },
      {
        service: 'google-business-profile',
        why: 'A complete profile with licence details, office address, photos of uniformed teams and installations, and reviews from associations and businesses answers the first “are they genuine?” check.',
      },
      {
        service: 'local-seo',
        why: 'Ranking in Maps for “security agency near me”, “CCTV installation near me” and “access control system dealer” brings enquiries from buildings close enough to service well.',
      },
      {
        service: 'google-ads',
        why: 'Search ads on CCTV installation, video door phones and guarding services, with calls and site-survey requests as conversions – and negative keywords to keep out people searching for guard jobs.',
      },
      {
        service: 'website-design',
        why: 'A site that shows the licence, training process, supervision and reporting, sectors served and a site-survey request form makes the agency look like a safe choice to a committee.',
      },
      {
        service: 'linkedin-branding',
        why: 'Facility managers, admin heads and corporate security leads are on LinkedIn; company and founder posts on training, compliance and incident readiness keep the agency visible to them.',
      },
      {
        service: 'video-production',
        why: 'Short videos of guard training, control-room monitoring and installation work show standards that brochures can only claim.',
      },
      {
        service: 'meta-ads',
        why: 'Facebook and Instagram ads for home and shop CCTV packages and video door phones reach owners in the service area with a clear offer and a WhatsApp enquiry button.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Survey scheduling, quote follow-ups, AMC renewal reminders and incident updates on WhatsApp keep client communication fast and on record.',
      },
    ],
    seasonality:
      'Guarding contracts often come up at the start of the financial year or when an association’s new committee takes charge, and new building handovers create fresh demand. Home CCTV enquiries rise before festival travel and holidays, when homes are left empty.',
    compliance:
      'Private security agencies need a licence under the Private Security Agencies (Regulation) Act, 2005, so quote it accurately in marketing, and avoid uniforms, insignia or wording that suggest a police or armed-forces connection.',
    kpis: ['Site-survey requests', 'Proposals submitted', 'Contract win rate', 'Contract renewals'],
    faqs: [
      {
        q: 'How do security agencies win apartment contracts?',
        a: 'Usually through a committee decision after a few quotes, references and a site survey. Local search visibility, strong references from nearby associations and contact before renewal dates put you on the shortlist.',
      },
      {
        q: 'Can we show our clients in marketing?',
        a: 'Only with their permission – many clients prefer not to be named for security reasons. Anonymous case studies by sector and testimonials from willing clients work well instead.',
      },
      {
        q: 'How do we get customers instead of job applicants?',
        a: 'Keep recruitment on a separate careers page and channels, add job-related negative keywords to search ads, and make service pages and forms clearly about what clients need.',
      },
      {
        q: 'Should a CCTV installer sell online?',
        a: 'Standard home and shop packages can be promoted online with clear starting prices, but most buyers still want a site visit. Online marketing pays off when its goal is booking that visit.',
      },
    ],
    localAngle:
      'Security clients want a provider who can reach the site quickly when something goes wrong, so agencies win nearby apartments, shops and offices through Maps visibility, references from neighbouring associations and a reputation for fast response.',
  },

  'printing-and-packaging': {
    name: 'printing and packaging businesses',
    title: 'Printing & Packaging',
    marketingLabel: 'Printing and packaging marketing',
    businessNoun: 'printing company',
    audience: 'printing presses, packaging manufacturers and signage makers',
    customers:
      'D2C and FMCG brands, restaurants, retailers, corporates, event organisers and agencies',
    intro:
      'Print and packaging buyers want three answers fast – can you make it, what does it cost at my quantity, and when can I have it. A D2C brand ordering its first custom boxes and a corporate buying annual print runs both search online and ask for samples before they order. BMU helps printing presses, packaging manufacturers and signage makers show their capabilities clearly, rank for what buyers search and turn quote requests into repeat orders.',
    challenges: [
      {
        title: 'Quote requests that go nowhere',
        text: 'Many enquiries are price checks with unclear quantities or specifications. Better forms and qualification save the sales team hours.',
      },
      {
        title: 'Hard to show quality online',
        text: 'Board quality, finishes, colour accuracy and sharpness are physical. Photos, videos and sample kits have to do the work a factory visit would.',
      },
      {
        title: 'Portals push price wars',
        text: 'IndiaMART and online print platforms put many suppliers side by side on price, so reliability and capability get lost.',
      },
      {
        title: 'Repeat business needs attention',
        text: 'Brands reorder packaging and print regularly, but they switch suppliers if nobody follows up when stock is likely to run low.',
      },
    ],
    buyerJourney: [
      {
        stage: 'Requirement',
        text: 'A brand needs custom boxes, a restaurant needs takeaway packaging, an office needs print or a store needs a new sign board.',
      },
      {
        stage: 'Search & shortlist',
        text: 'They search Google, IndiaMART and Instagram, check minimum order quantities, materials and turnaround, and ask for quotes.',
      },
      {
        stage: 'Samples & proofs',
        text: 'They compare samples, digital proofs and prices, and judge whether the supplier understands their brand and deadline.',
      },
      {
        stage: 'Order & reorder',
        text: 'A smooth first order delivered on time leads to repeat runs, new SKUs and referrals.',
      },
    ],
    channels: [
      {
        service: 'seo',
        why: 'Pages for each product and process – mailer boxes, rigid boxes, food-grade packaging, offset printing, acrylic and LED signage – with MOQs and finishes rank for the specific searches buyers make.',
      },
      {
        service: 'google-ads',
        why: 'Search ads on high-intent terms – “custom printed boxes manufacturer”, “corrugated box supplier”, “shop signage makers” – with quote requests as conversions and negatives for DIY and retail searches.',
      },
      {
        service: 'website-development',
        why: 'Product categories, materials, finishes, MOQs, a gallery of real jobs and a quote form that captures size, quantity and deadline help buyers qualify themselves before they call.',
      },
      {
        service: 'google-business-profile',
        why: 'Photos of the press, finished jobs and signage installations, plus reviews from business clients, help buyers who want a printer they can visit or collect from.',
      },
      {
        service: 'local-seo',
        why: 'Ranking in Maps for “printing press near me”, “visiting card printing” and “sign board makers” brings urgent jobs from nearby shops, events and offices that need delivery fast.',
      },
      {
        service: 'linkedin-branding',
        why: 'Brand managers, procurement teams and agency producers are on LinkedIn; capability posts, new materials and finished client work keep the business on their supplier list.',
      },
      {
        service: 'instagram-marketing',
        why: 'Unboxing-style reels, finish close-ups and signage installs show quality in motion – and reach D2C founders, who often look for packaging partners on Instagram.',
      },
      {
        service: 'video-production',
        why: 'Short videos of presses running, finishing processes and boxes being assembled show capacity to buyers who can’t visit the factory.',
      },
      {
        service: 'photography',
        why: 'Clean, well-lit shots of boxes, print and signage, both on their own and in use, make the portfolio, website and catalogue look as good as the work.',
      },
      {
        service: 'marketing-automation',
        why: 'A CRM that tracks quotes, sample dispatches and reorder dates prompts follow-ups when a client’s stock is likely to be running low.',
      },
    ],
    seasonality:
      'Demand rises before Diwali for gift boxes, corporate gifting and festive packaging, and before the wedding season for invitations. Calendars, diaries and corporate print peak towards the end of the calendar year, while events and exhibitions keep signage work going year-round.',
    kpis: [
      'Quote requests',
      'Quote-to-order rate',
      'Repeat order rate',
      'Cost per qualified enquiry',
    ],
    faqs: [
      {
        q: 'How do we get more business clients and fewer small one-off jobs?',
        a: 'Build pages and ads around business products – packaging runs, corporate print, signage contracts – and show minimum quantities upfront. That filters enquiries before they reach the team.',
      },
      {
        q: 'Is IndiaMART still worth it?',
        a: 'It can bring leads, but many are price comparisons across several suppliers. Your own website and search presence bring buyers who choose you for capability, not only price.',
      },
      {
        q: 'How do we show print quality online?',
        a: 'Use close-up photos and videos of finishes, real client jobs and sample kits for serious prospects. Buyers trust what they can see and touch more than descriptions.',
      },
      {
        q: 'Should we target D2C brands on Instagram?',
        a: 'Yes, if you make short-run or custom packaging. Many D2C founders find suppliers there, so unboxing content and a clear MOQ and pricing guide work well.',
      },
    ],
    localAngle:
      'Urgent print and signage jobs go to whoever can deliver today, so a press wins its area through Maps visibility, quick quotes on WhatsApp and steady relationships with nearby shops, offices and event organisers.',
  },

  'gaming-and-esports': {
    name: 'gaming and esports businesses',
    title: 'Gaming & Esports',
    marketingLabel: 'Gaming marketing',
    businessNoun: 'gaming company',
    audience: 'game studios, gaming cafés and esports organisations',
    customers: 'players, streamers, competitive teams, fans and sponsors',
    intro:
      'Gamers spot marketing that doesn’t understand them instantly. A studio has to build a community before launch, a gaming café has to fill its rigs on weekday afternoons and an esports organisation has to grow a fan base sponsors will pay to reach. BMU helps gaming businesses market where players already spend their time – Discord, YouTube, Instagram and live streams – in a voice that fits.',
    challenges: [
      {
        title: 'Discovery in crowded stores',
        text: 'Thousands of games launch on app stores and Steam every month. Without wishlists, a community and strong store pages, a launch can disappear in days.',
      },
      {
        title: 'Authenticity matters',
        text: 'Players reject ads that feel generic or misrepresent gameplay. Creative has to show the real game and speak their language.',
      },
      {
        title: 'Off-peak hours at cafés',
        text: 'Gaming cafés fill up on evenings and weekends but sit empty on weekday mornings and afternoons. Offers and events have to shift demand.',
      },
      {
        title: 'Proving value to sponsors',
        text: 'Esports organisations need audience numbers and engagement sponsors can trust, not just tournament results.',
      },
    ],
    buyerJourney: [
      {
        stage: 'Discovery',
        text: 'Players find a game, café or team through streamers, YouTube videos, reels, friends and store recommendations.',
      },
      {
        stage: 'Check the community',
        text: 'They watch gameplay, read reviews and look at Discord or social pages to see whether people like them play there.',
      },
      {
        stage: 'Try it',
        text: 'They wishlist or download the game, book a session at the café or follow the team through a tournament.',
      },
      {
        stage: 'Stay & bring friends',
        text: 'Updates, events, tournaments and community recognition keep them playing – and bring their squad along.',
      },
    ],
    channels: [
      {
        service: 'social-media-management',
        why: 'Regular posts across Instagram, X, YouTube and Discord – patch notes, clips, memes, match results and community highlights – keep players engaged between launches and tournaments.',
      },
      {
        service: 'influencer-marketing',
        why: 'Streamers and gaming creators whose audiences play the same genre drive more wishlists, downloads and café visits than broad ads – especially when they play live.',
      },
      {
        service: 'video-production',
        why: 'Gameplay trailers, devlogs, tournament highlights and café walkthroughs show the real thing, which is what players need to see before they commit time or money.',
      },
      {
        service: 'instagram-marketing',
        why: 'Reels of clutch moments, café setups, cosplay and tournament atmosphere reach players and fans who discover gaming content in short video.',
      },
      {
        service: 'meta-ads',
        why: 'Ads built from real gameplay and targeted to players of similar titles push installs and pre-registrations; for cafés, location-targeted offers fill off-peak slots.',
      },
      {
        service: 'google-ads',
        why: 'App campaigns and YouTube ads drive installs for mobile games, while search ads catch “gaming café near me” and “PS5 gaming lounge” searches for cafés.',
      },
      {
        service: 'local-seo',
        why: 'For a gaming café, ranking in Maps for “gaming café near me” and “PC gaming centre” with real photos of the rigs and the game list brings walk-ins from nearby students and young professionals.',
      },
      {
        service: 'website-development',
        why: 'A studio needs a fast site with trailers, a press kit, store links and a newsletter sign-up; a café needs slot booking; an esports organisation needs a sponsor-ready site with rosters and results.',
      },
      {
        service: 'pitch-decks',
        why: 'Studios raising funds and esports organisations pitching sponsors need decks that explain the game or the audience, the numbers and the plan clearly to people who don’t play.',
      },
      {
        service: 'google-business-profile',
        why: 'A café’s profile with photos of the setup, the console and PC titles available, hourly prices and reviews decides whether a group of friends chooses it for the evening.',
      },
    ],
    seasonality:
      'Cafés and tournaments are busiest during school and college holidays, weekends and long festival breaks, and quietest in exam months. Studios plan launches around platform sale events and try to avoid clashing with major releases.',
    compliance:
      'The Promotion and Regulation of Online Gaming Act, 2025 bans online money games – whether based on skill or chance – and their advertising in India, so this work covers esports, studios making games played without stakes, and gaming cafés, not real-money gaming.',
    kpis: [
      'Wishlists, pre-registrations or installs',
      'Cost per install',
      'Café bookings and footfall',
      'Community growth on Discord and social',
    ],
    faqs: [
      {
        q: 'How early should a game start marketing?',
        a: 'Months before launch – a store page, a trailer and a community channel give time to collect wishlists and feedback. A launch without an audience waiting usually struggles to get noticed.',
      },
      {
        q: 'Do gaming influencers work for small studios?',
        a: 'Yes, often better than ads. Smaller streamers who love the genre cost less, are trusted by their viewers and are more likely to keep playing after the paid stream.',
      },
      {
        q: 'How do gaming cafés fill quiet hours?',
        a: 'Use off-peak pricing, student offers, weekday tournaments and group packages, and promote them on Instagram, WhatsApp and Maps to people nearby.',
      },
      {
        q: 'What do sponsors look for in an esports organisation?',
        a: 'Audience size and engagement, who that audience is, professionalism and how the sponsor’s brand will appear. A clear deck and a consistent social presence make those conversations easier.',
      },
    ],
    localAngle:
      'A gaming café draws players who can get there after class or work, so it wins its area with a Maps listing full of real setup photos, local tournaments and community nights, and a following among nearby students.',
  },

  'sports-and-academies': {
    name: 'sports academies and sports goods businesses',
    title: 'Sports & Academies',
    marketingLabel: 'Sports academy marketing',
    businessNoun: 'sports academy',
    audience:
      'cricket, football, badminton and other coaching academies, and sports goods stores and brands',
    customers: 'parents enrolling children, aspiring and recreational players, schools and clubs',
    intro:
      'A sports academy is chosen almost like a school – parents compare coaches, facilities, batch timings, distance and how other children have progressed there. Sports goods buyers want expert advice and the right fit, and often check prices online first. BMU helps academies fill batches and summer camps, and helps sports goods stores and brands reach players who know exactly what they need.',
    challenges: [
      {
        title: 'Parents decide, children play',
        text: 'Marketing has to reassure parents about safety, coaching quality and the commute while also exciting the child. Both need to picture themselves there.',
      },
      {
        title: 'Claims about selection and results',
        text: 'Academies are tempted to promise state or national selection. Parents trust honest coaching credentials, structured programmes and real progress more.',
      },
      {
        title: 'Summer-camp spikes, empty batches later',
        text: 'Enrolments surge in the April–May holidays and drop when school resumes. Year-round batches need a plan of their own.',
      },
      {
        title: 'Sports goods compete with marketplaces',
        text: 'Bats, rackets, boots and shuttles are easy to compare online, so stores win on fitting advice, bat knocking-in, racket stringing and trying before buying.',
      },
    ],
    buyerJourney: [
      {
        stage: 'Interest & search',
        text: 'A child’s interest, a school recommendation or the summer holidays start the search for “cricket academy near me” or “badminton coaching for kids”.',
      },
      {
        stage: 'Compare academies',
        text: 'Parents compare coaches’ backgrounds, facilities, batch timings, fees, distance and reviews from other parents.',
      },
      {
        stage: 'Trial session',
        text: 'Most attend a trial class to see the coaching, the ground or court and how their child responds.',
      },
      {
        stage: 'Enrol & progress',
        text: 'Regular updates, matches and visible progress decide whether they renew for the next term – and where they buy the kit.',
      },
    ],
    channels: [
      {
        service: 'local-seo',
        why: 'Parents rarely drive far for a weekly batch, so ranking in Maps for “cricket academy near me”, “football coaching for kids” and “badminton classes” decides which academy they call.',
      },
      {
        service: 'google-business-profile',
        why: 'Photos of the nets, courts or ground, coach introductions, batch timings and parent reviews answer most of what parents check before booking a trial.',
      },
      {
        service: 'instagram-marketing',
        why: 'Reels of drills, match moments, student progress and coaching tips show the quality of training – with parental consent for every child shown – and reach both parents and young players.',
      },
      {
        service: 'meta-ads',
        why: 'Facebook and Instagram ads for summer camps, new batches and trial classes, targeted to parents within a short radius, with clear fees and a WhatsApp booking button.',
      },
      {
        service: 'google-ads',
        why: 'Search ads on “summer cricket camp”, “badminton coaching near me” and specific gear catch parents and players at the moment they decide; for stores, shopping ads show the products actually in stock.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Trial reminders, fee reminders, batch changes, match updates and renewal offers on WhatsApp keep parents informed and reduce drop-offs between terms.',
      },
      {
        service: 'website-design',
        why: 'Programmes by age and level, coach credentials, facilities, fees and a trial-booking form – or, for a store, a catalogue with sizes and stock – make the decision easy.',
      },
      {
        service: 'video-production',
        why: 'Short films of coaching sessions, coach introductions and a season’s progress give parents a real sense of the programme, across the website, ads and Instagram.',
      },
      {
        service: 'seo',
        why: 'Pages for each sport, age group and programme, and guides on choosing a first bat, a badminton racket or football boots, rank for the questions parents and players search.',
      },
    ],
    seasonality:
      'Summer camps in April and May are the biggest enrolment period, with a second push when regular batches restart after schools reopen in June. Cricket gear sells most before and during the season, and big tournaments such as the IPL and World Cups lift interest in coaching and kit.',
    kpis: [
      'Trial class bookings',
      'Trial-to-enrolment rate',
      'Term renewal rate',
      'Store visits and kit sales',
    ],
    faqs: [
      {
        q: 'How do we fill batches outside summer-camp season?',
        a: 'Run year-round programmes with clear levels, build tie-ups with schools and apartment communities, and invite summer-camp families to continue through WhatsApp. Trial classes in June and July catch parents planning the school year.',
      },
      {
        q: 'Can we use photos of students in our marketing?',
        a: 'Only with written consent from parents, and without sharing personal details such as full names and schools. Parents are rightly careful about how their children appear online.',
      },
      {
        q: 'Should we advertise our students’ achievements?',
        a: 'Real achievements can be shared with permission, but don’t imply every child will be selected for teams or tournaments. Parents trust honest descriptions of coaching and progress more than promises.',
      },
      {
        q: 'How do sports goods stores compete with online prices?',
        a: 'Offer what online can’t – fitting, knocking-in, stringing, trying gear before buying and advice from people who play – and make sure your Google profile and Instagram show it.',
      },
    ],
    localAngle:
      'Parents choose academies within a short drive of home or school, and players buy kit where they train. Academies and sports stores win their neighbourhood through Maps visibility, school and apartment partnerships and the word of mouth that passes between parents at the ground.',
  },

  'religious-and-spiritual': {
    name: 'religious and spiritual services',
    title: 'Religious & Spiritual',
    marketingLabel: 'Spiritual services marketing',
    businessNoun: 'spiritual services provider',
    audience:
      'temples and trusts, spiritual and meditation centres, astrologers and pooja and priest-booking services',
    customers:
      'devotees, families planning ceremonies, people seeking guidance and devotees in other cities and abroad',
    intro:
      'People come to temples, spiritual centres, astrologers and pooja services for something personal, and they choose by trust – tradition, reputation, how respectfully things are done and what people they know say. Marketing here has to inform and invite, never pressure or promise. BMU helps temples, centres and spiritual service providers share timings, events and services clearly, reach people who are looking and make booking simple.',
    challenges: [
      {
        title: 'Trust without promises',
        text: 'Claims of guaranteed results or miracles damage credibility and can break the law. Marketing has to describe the service, the people and the tradition honestly.',
      },
      {
        title: 'Information scattered across WhatsApp',
        text: 'Timings, festival schedules and seva details often live in forwarded messages and outdated listings, so devotees arrive at the wrong time or can’t find how to book.',
      },
      {
        title: 'Serving devotees far away',
        text: 'Families in other cities or abroad want to book poojas, make offerings or watch rituals live, and need a reliable, transparent way to do it.',
      },
      {
        title: 'Crowded, uneven astrology market',
        text: 'Astrology apps and many individual practitioners compete for the same searches. A clear specialisation, stated training and genuine reviews set a practitioner apart.',
      },
    ],
    buyerJourney: [
      {
        stage: 'An occasion or question',
        text: 'A housewarming, a naming ceremony, a festival, horoscope matching before a marriage or a personal difficulty prompts the search.',
      },
      {
        stage: 'Ask & search',
        text: 'They ask family and friends, search for a priest, a pooja service or a temple’s timings, and check reviews and listings.',
      },
      {
        stage: 'Check & book',
        text: 'They confirm the priest’s or astrologer’s background, the rituals included, the language and the dakshina or fee, then book by phone, WhatsApp or online.',
      },
      {
        stage: 'Experience & return',
        text: 'How respectfully and punctually things are done decides whether they return for the next ceremony and recommend it in their community.',
      },
    ],
    channels: [
      {
        service: 'google-business-profile',
        why: 'Accurate darshan and pooja timings, festival-day changes, photos, directions and parking details make the profile the source devotees trust – and cut down calls asking the same questions.',
      },
      {
        service: 'local-seo',
        why: 'Ranking in Maps for “purohit for housewarming near me”, “Satyanarayana pooja booking” and temple or centre searches brings families planning ceremonies and newcomers to the area.',
      },
      {
        service: 'website-development',
        why: 'Seva and pooja listings, online booking and donations with proper receipts, a festival calendar and live-stream links serve devotees nearby and far away.',
      },
      {
        service: 'social-media-management',
        why: 'Festival announcements, darshan photos, discourse clips and event updates on Facebook, Instagram and YouTube keep the community connected – in the tradition’s own tone.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Broadcasts of festival schedules, seva reminders, booking confirmations and receipts reach devotees where they already share religious news, without relying on forwards.',
      },
      {
        service: 'video-production',
        why: 'Live streams and recordings of festivals, rituals and discourses let distant devotees take part and introduce the temple, centre or teacher to new people.',
      },
      {
        service: 'seo',
        why: 'A clear page for each pooja or service – what’s included, how long it takes, the language used, what the family should arrange – ranks for the questions people search while planning a ceremony.',
      },
      {
        service: 'content-marketing',
        why: 'Articles explaining festivals, rituals and their meaning, in Kannada and English, make a temple or centre a trusted reference – and answer questions without making claims about outcomes.',
      },
      {
        service: 'personal-branding',
        why: 'For astrologers, priests and spiritual teachers, a consistent and respectful presence – training or lineage, talks, interviews – builds the trust that brings consultations, without promising results.',
      },
      {
        service: 'google-ads',
        why: 'Search ads for pooja bookings and ceremony services, written to describe what’s offered – rituals, priests, languages, timings – rather than what it will achieve, reach families planning an event.',
      },
    ],
    seasonality:
      'Demand follows the religious calendar – for temples and pooja services, Ugadi, Sankranti, Shivaratri, Ganesha Chaturthi, Dasara and Diwali, plus auspicious muhurtham dates for weddings and housewarmings – and each faith’s own major festivals. Horoscope matching rises ahead of the wedding season.',
    compliance:
      'The Drugs and Magic Remedies (Objectionable Advertisements) Act bans advertising talismans, mantras or charms as cures for illness, and Karnataka’s 2017 law against inhuman evil practices and black magic bans several practices outright. Spiritual and astrology marketing should describe services and never promise health, wealth, marriage or other outcomes.',
    kpis: [
      'Pooja and consultation bookings',
      'Calls and direction requests',
      'Online donations and seva bookings',
      'Live-stream and video views',
    ],
    faqs: [
      {
        q: 'Is it appropriate for a temple to do digital marketing?',
        a: 'Most of it is simply clear communication – accurate timings, festival schedules, directions and a safe way to book sevas or donate. Done respectfully, it serves devotees rather than selling to them.',
      },
      {
        q: 'How can an astrologer market without making false promises?',
        a: 'Describe your training, your approach and the consultations you offer, share educational content and let genuine reviews speak. Avoid guarantees about marriage, health, wealth or careers – they mislead clients and can break the law.',
      },
      {
        q: 'How do we accept online donations properly?',
        a: 'Use a secure payment gateway or UPI, issue receipts automatically and be clear about how funds are used. Mention tax benefits such as 80G only if the trust actually holds the registration.',
      },
      {
        q: 'How do pooja booking services build trust?',
        a: 'Show who the priests are, their tradition and languages, exactly what each package includes and what the family needs to arrange. Clear pricing and punctuality earn the reviews that bring the next booking.',
      },
    ],
    localAngle:
      'Temples and spiritual centres serve the families around them first, and priests and astrologers are often found through neighbours. Accurate local listings, community WhatsApp groups and visible festival events keep the neighbourhood connected and bring in families who have just moved nearby.',
  },

  'aviation-and-aerospace': {
    name: 'aviation and aerospace companies',
    title: 'Aviation & Aerospace',
    marketingLabel: 'Aerospace marketing',
    businessNoun: 'aerospace company',
    audience:
      'aerospace component and engineering suppliers, flight schools and drone manufacturers and service providers',
    customers:
      'OEM and tier-1 procurement and engineering teams, defence and space programmes, aspiring pilots and their families, and enterprise and government drone buyers',
    intro:
      'Aerospace buyers are engineers, quality heads and procurement teams who shortlist suppliers on certifications, capability and track record – usually through months of formal vendor qualification. Flight schools sell a long, expensive training path to students and parents, and drone companies sell to farms, surveyors, enterprises and government buyers. BMU helps each present precise, accurate information to buyers who check every claim.',
    challenges: [
      {
        title: 'Credibility comes first',
        text: 'Buyers look for AS9100 and other quality approvals, programme experience and facility capability before they’ll talk. A vague website rules a supplier out early.',
      },
      {
        title: 'Long qualification cycles',
        text: 'Becoming an approved supplier can take months of audits, samples and first-article inspection, so marketing has to keep relationships warm throughout.',
      },
      {
        title: 'Confidential work',
        text: 'Defence and OEM programmes often can’t be named, so suppliers have to show capability through processes, machines and anonymised case studies.',
      },
      {
        title: 'High-stakes student decisions',
        text: 'Pilot training is a large investment, and families compare DGCA approval, fleet, instructors and how long training really takes. Overpromising airline jobs backfires.',
      },
    ],
    buyerJourney: [
      {
        stage: 'Requirement or ambition',
        text: 'An engineering team needs a part or process, a programme needs a new vendor, a surveyor or farm needs drones, or a student decides to become a pilot.',
      },
      {
        stage: 'Research & shortlist',
        text: 'Buyers search, check websites, certifications and LinkedIn and meet suppliers at shows like Aero India; students compare flight schools’ approvals, fleet and fees.',
      },
      {
        stage: 'Qualification & evaluation',
        text: 'Suppliers go through RFQs, audits and samples; drone buyers ask for demos and trials; students visit the school and talk to current trainees.',
      },
      {
        stage: 'Contract & relationship',
        text: 'Approved suppliers win repeat orders for years if quality holds, while flight schools and drone companies grow through referrals and alumni.',
      },
    ],
    channels: [
      {
        service: 'website-development',
        why: 'A capability-led site – processes, machines, materials, certifications, quality systems and sectors served, with a secure RFQ form – is what procurement and quality teams check before any meeting.',
      },
      {
        service: 'linkedin-branding',
        why: 'Procurement heads, programme managers and engineers in aerospace and defence are on LinkedIn; leadership posts on certifications, facility additions and show participation keep the company on their radar.',
      },
      {
        service: 'seo',
        why: 'Pages on specific capabilities – 5-axis machining of aerospace alloys, composite parts, drone survey services, CPL training – rank for the technical searches engineers and students make.',
      },
      {
        service: 'video-production',
        why: 'Facility tours, process videos, training-flight footage and drone demonstrations show capability to buyers who can’t easily visit, and work in bids, shows and investor meetings.',
      },
      {
        service: 'pitch-decks',
        why: 'Capability decks for OEM and tier-1 meetings, and investor decks for drone and space startups, present technology, certifications, capacity and roadmap clearly to technical and financial audiences.',
      },
      {
        service: 'google-ads',
        why: 'Search ads for flight-school admissions, drone pilot training and drone survey services capture high-intent searches; for component suppliers, narrow campaigns on process keywords reach buyers with real requirements.',
      },
      {
        service: 'content-marketing',
        why: 'Technical articles, application notes and plain guides to the pilot training path or drone regulations show expertise and give engineers and students reasons to trust the company.',
      },
      {
        service: 'meta-ads',
        why: 'For flight schools and drone pilot training, Instagram and Facebook ads with real training footage reach students and parents, stating fees, duration and approvals rather than job promises.',
      },
      {
        service: 'photography',
        why: 'Precise photography of components, assemblies, clean rooms, aircraft and drones makes catalogues, websites and show stands look as exact as the work.',
      },
      {
        service: 'drone-shoots',
        why: 'Aerial footage of airfields, training flights and production facilities shows scale and infrastructure in corporate films, show videos and admissions material.',
      },
    ],
    seasonality:
      'Aerospace marketing builds towards Aero India in Bengaluru, held every two years, and follows customers’ budget cycles and programme milestones. Flight-school enquiries rise after Class 12 results and whenever airline hiring is in the news.',
    compliance:
      'Flight schools and drone training centres should quote their DGCA approval exactly and avoid promising jobs or salaries – ASCI’s guidelines on education advertising expect such claims to be substantiated. Drone products and services should be presented within what the Drone Rules, 2021 allow – registration, certification and airspace zones – not as free to fly anywhere.',
    kpis: [
      'RFQs and qualified enquiries',
      'Vendor registrations and audits',
      'Admission enquiries',
      'Demo and trial requests',
    ],
    faqs: [
      {
        q: 'Does digital marketing work for aerospace suppliers?',
        a: 'It doesn’t replace audits and relationships, but buyers research suppliers online first. A precise website, a LinkedIn presence and search visibility for your capabilities get you onto shortlists you might otherwise never hear about.',
      },
      {
        q: 'How do we market work we can’t name?',
        a: 'Show processes, machines, materials, tolerances and certifications, and describe programmes by sector without naming customers. Engineers judge capability from detail, not logos.',
      },
      {
        q: 'How should a flight school market itself responsibly?',
        a: 'Be clear about approvals, fleet, instructors, training duration, total cost and what students need to qualify. Honest information builds trust with families making a large investment and avoids claims that can’t be backed up.',
      },
      {
        q: 'Who buys from drone companies?',
        a: 'Agriculture, survey and mapping, infrastructure, security and government buyers are common customers. Each needs its own pages, demos and case studies, because their questions differ.',
      },
    ],
    localAngle:
      'Aerospace suppliers cluster near the manufacturers and industrial areas they serve, and buyers looking for a nearby vendor check location-specific listings and capability pages. Flight schools and drone training centres draw students from the surrounding region and need clear listings with directions, approvals and photos.',
  },

  'biotech-and-life-sciences': {
    name: 'biotech and life sciences companies',
    title: 'Biotech & Life Sciences',
    marketingLabel: 'Biotech marketing',
    businessNoun: 'biotech company',
    audience:
      'biotech startups, contract research organisations (CROs) and testing and research labs',
    customers:
      'pharma and biotech R&D teams, research scientists, hospitals and diagnostic partners, investors and grant bodies',
    intro:
      'Life sciences buyers are scientists and R&D managers. They read the data, check accreditations and ask detailed questions before they trust a CRO, a lab or a new technology – and a biotech startup also has to persuade investors and partners. BMU helps biotech startups, CROs and labs explain complex work accurately, reach researchers and procurement teams and build credibility without overstating results.',
    challenges: [
      {
        title: 'Explaining complex science simply',
        text: 'The science has to be accurate for experts and clear for investors and business teams, often on the same page.',
      },
      {
        title: 'Credibility before contact',
        text: 'Sponsors check accreditations such as NABL, GLP compliance and ISO, the team’s publications and its track record before sending samples or a study.',
      },
      {
        title: 'Small, specialised audiences',
        text: 'A service may have only a few hundred genuine buyers, so broad advertising wastes money and precise targeting matters.',
      },
      {
        title: 'Claims that need care',
        text: 'Overstating efficacy or results damages credibility with scientists and can break the rules on health claims.',
      },
    ],
    buyerJourney: [
      {
        stage: 'Research need',
        text: 'A research team needs a study, an assay, a testing service or a technology partner – or an investor is scouting a field.',
      },
      {
        stage: 'Search & due diligence',
        text: 'They search, read publications and case studies, check accreditations and ask colleagues and LinkedIn contacts for referrals.',
      },
      {
        stage: 'Technical discussion & proposal',
        text: 'Scientists on both sides discuss scope, methods, timelines and data handling; the CRO or lab sends a proposal and often runs a pilot.',
      },
      {
        stage: 'Study & partnership',
        text: 'Data quality, communication and confidentiality during the first project decide repeat studies and long-term partnerships.',
      },
    ],
    channels: [
      {
        service: 'website-development',
        why: 'Clear service and platform pages, accreditations, instruments, team credentials, publications and a confidential enquiry form are what sponsors and partners check before reaching out.',
      },
      {
        service: 'linkedin-branding',
        why: 'Scientists, R&D heads and investors are active on LinkedIn; posts from founders and principal scientists on publications, conferences and capabilities build trust in a small, connected field.',
      },
      {
        service: 'content-marketing',
        why: 'Application notes, technical blogs, webinars and plain-language explainers show expertise to scientists and help investors and business teams understand the technology.',
      },
      {
        service: 'seo',
        why: 'Pages for specific assays, models, testing methods and therapeutic areas rank for the precise searches researchers make – where small search volumes still mean valuable enquiries.',
      },
      {
        service: 'pitch-decks',
        why: 'Investor and partnership decks that set out the science, data, IP, regulatory path and commercial plan clearly help biotech startups raise funds and win collaborations.',
      },
      {
        service: 'video-production',
        why: 'Lab walkthroughs, platform explainers and scientist interviews show facilities and expertise to international sponsors who can’t easily visit.',
      },
      {
        service: 'google-ads',
        why: 'Narrowly targeted search campaigns on service terms – “bioanalytical CRO”, “genome sequencing service”, “stability testing lab” – reach researchers and procurement teams with real needs, with job and course searches excluded.',
      },
      {
        service: 'marketing-automation',
        why: 'A CRM that tracks enquiries, proposals and follow-ups across long scientific sales cycles, with nurture emails announcing new capabilities and publications, keeps the pipeline moving.',
      },
      {
        service: 'brand-identity',
        why: 'A biotech startup’s name, visual identity and core message have to look credible to scientists and investors alike – distinctive without overclaiming what the science does.',
      },
    ],
    seasonality:
      'Demand follows research budgets, grant cycles and the financial year-end, when sponsors often finalise studies. Scientific conferences and industry events such as the Bengaluru Tech Summit and BioAsia create peaks in meetings and follow-up.',
    compliance:
      'Health and therapeutic claims need care – the Drugs and Magic Remedies Act and the Drugs and Cosmetics Rules restrict how drugs and treatments can be promoted to the public – and accreditations such as NABL, GLP or ISO should be quoted exactly as certified.',
    kpis: [
      'Qualified enquiries',
      'Proposals sent',
      'Proposal-to-study conversion',
      'Investor and partner meetings',
    ],
    faqs: [
      {
        q: 'Does digital marketing work for a CRO or lab?',
        a: 'Yes, if it’s precise. Sponsors research providers online, so a detailed website, search visibility for your specific services and an active LinkedIn presence get you onto shortlists.',
      },
      {
        q: 'How technical should our content be?',
        a: 'Technical enough to earn scientists’ respect, with plain-language summaries for business and investor readers. Many companies keep a detailed version and a short overview of each capability.',
      },
      {
        q: 'Can we talk about our results and data?',
        a: 'Share published or approved data with proper context and avoid overstating efficacy. Unsupported claims undermine trust with scientists and can break the rules on health claims.',
      },
      {
        q: 'Should a biotech startup invest in marketing before it has a product?',
        a: 'A clear website, a credible brand and a founder presence on LinkedIn help with hiring, partnerships and fundraising long before launch. Paid campaigns can wait until there’s something to sell.',
      },
    ],
    localAngle:
      'Life sciences work clusters around research institutions and incubators, and many collaborations start with people close by. Clear listings, a presence at local scientific events and visibility in incubator and institute networks help a lab or startup become the first call for nearby teams.',
  },

  chemicals: {
    name: 'chemical manufacturers and traders',
    title: 'Chemicals',
    marketingLabel: 'Chemical industry marketing',
    businessNoun: 'chemical company',
    audience: 'speciality and commodity chemical manufacturers, distributors and traders',
    customers:
      'procurement teams, R&D chemists and plant heads in pharma, paints, textiles, water treatment, food and other industries, plus export buyers',
    intro:
      'Chemical buyers search by product name, CAS number and grade, and they shortlist suppliers who show specifications, certifications and reliable supply. Manufacturers compete on quality and technical support, traders on availability and price, and both lose buyers to portals when their own presence is thin. BMU helps chemical manufacturers and traders publish accurate product information, rank for what buyers search and build steady repeat business.',
    challenges: [
      {
        title: 'Products buyers can’t find',
        text: 'Many chemical websites list only categories, so a buyer searching for a specific compound, grade or CAS number never lands on the supplier who makes it.',
      },
      {
        title: 'Price wars on portals',
        text: 'IndiaMART and TradeIndia bring enquiries, but buyers compare many suppliers on price per kilo, which hurts manufacturers selling on quality and consistency.',
      },
      {
        title: 'Technical buyers need documents',
        text: 'Procurement and R&D teams want specifications, certificates of analysis, safety data sheets and certifications before they’ll even request a sample.',
      },
      {
        title: 'Volatile demand and pricing',
        text: 'Raw material prices and end-industry demand swing, so marketing has to support both winning new customers and keeping existing ones.',
      },
    ],
    buyerJourney: [
      {
        stage: 'Sourcing need',
        text: 'A plant, formulation team or distributor needs a chemical, a grade or an alternative supplier – often because of price or supply problems.',
      },
      {
        stage: 'Search by product',
        text: 'They search by product name, CAS number or application, check B2B portals and supplier websites, and ask for TDS, SDS and certifications.',
      },
      {
        stage: 'Samples & approval',
        text: 'They test samples, audit or approve the supplier and negotiate price, packing and delivery terms.',
      },
      {
        stage: 'Repeat supply',
        text: 'Consistent quality, documentation and on-time delivery turn a trial order into a long-term supply contract.',
      },
    ],
    channels: [
      {
        service: 'seo',
        why: 'Individual product pages with name, CAS number, grades, applications, packing and downloadable TDS and SDS rank for the exact searches procurement teams make – the biggest gap on most chemical websites.',
      },
      {
        service: 'website-development',
        why: 'A searchable product catalogue, a document library, certifications, plant capabilities and an enquiry form that captures product, grade, quantity and destination turn visits into serious RFQs.',
      },
      {
        service: 'google-ads',
        why: 'Search campaigns on product and application keywords, filtered for B2B intent with negatives for retail, academic and job searches, reach buyers ready to request a quote.',
      },
      {
        service: 'linkedin-branding',
        why: 'Procurement heads, R&D chemists and plant managers are on LinkedIn; posts on new products, capacity additions, certifications and exhibitions keep the company visible to them.',
      },
      {
        service: 'content-marketing',
        why: 'Application guides, technical articles and comparisons of grades and alternatives answer what R&D teams search before approaching a supplier – and show the expertise behind the product.',
      },
      {
        service: 'ai-search-visibility',
        why: 'Buyers increasingly ask AI tools to suggest suppliers for a compound or application. Clear product pages and consistent listings help ChatGPT, Gemini and Perplexity mention the company accurately.',
      },
      {
        service: 'video-production',
        why: 'Plant tours, quality-lab walkthroughs and process videos show capability, safety practices and scale to export buyers who can’t visit before ordering.',
      },
      {
        service: 'pitch-decks',
        why: 'A capability deck covering product range, capacity, certifications, quality control and export experience supports distributor meetings, exhibitions and buyer audits.',
      },
      {
        service: 'marketing-automation',
        why: 'A CRM that tracks enquiries, samples, approvals and reorder cycles helps sales teams follow up at the right time and shows which channels bring repeat buyers.',
      },
      {
        service: 'google-business-profile',
        why: 'A complete profile for the plant or trading office, with product categories, photos and reviews from business buyers, helps industrial buyers who search for a supplier nearby.',
      },
    ],
    seasonality:
      'Demand follows the end industries – paints and construction chemicals slow in the monsoon, and agrochemicals follow the kharif and rabi seasons – along with financial-year procurement cycles and the major chemical industry exhibitions.',
    kpis: [
      'RFQs and qualified enquiries',
      'Sample requests',
      'Sample-to-order rate',
      'Repeat order value',
    ],
    faqs: [
      {
        q: 'Should every product have its own page?',
        a: 'Yes, for the products you want to sell. Buyers search by exact name, CAS number and grade, and a page with specifications and documents is what ranks and converts.',
      },
      {
        q: 'How do we reduce our dependence on IndiaMART?',
        a: 'Keep it as one source while building your own product pages, search ads and LinkedIn presence. Direct enquiries usually come from buyers weighing quality and reliability, not only price.',
      },
      {
        q: 'Should we publish TDS and SDS online?',
        a: 'Publishing them, or offering them through a simple request form, helps buyers qualify you faster. Some companies keep detailed documents behind a form to capture the enquiry.',
      },
      {
        q: 'How should traders market differently from manufacturers?',
        a: 'Traders compete on range, availability, location and delivery speed, so stock-led product pages and quick quotes matter most. Manufacturers lean more on capability, quality systems and technical support.',
      },
    ],
    localAngle:
      'Industrial buyers often prefer a supplier close enough for fast delivery and easy audits. Traders and manufacturers near industrial areas win local accounts through accurate listings, clear product ranges and quick responses to enquiries.',
  },
} satisfies Partial<Record<IndustrySlug, IndustryProfile>>;
