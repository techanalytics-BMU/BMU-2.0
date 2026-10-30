import type { IndustryProfile } from '@/types/pseo';
import type { IndustrySlug } from '../slugs';

// Industry profiles 1–20: property and spaces, health, education, fashion and beauty, food,
// hospitality and travel. `channels` is ranked by importance and decides which
// Service × Industry pages are built.
export const industriesPart1 = {
  'real-estate': {
    name: 'real estate',
    title: 'Real Estate',
    marketingLabel: 'Real estate marketing',
    businessNoun: 'real estate business',
    audience: 'developers, brokers, channel partners and co-living operators',
    customers: 'home buyers, NRI buyers, investors and tenants',
    intro:
      'Property buyers in Bengaluru shortlist online long before they call. They compare projects on MagicBricks and 99acres, watch walkthrough videos, check RERA details and ask around on WhatsApp – and people looking for an office floor or a co-living room do much the same. BMU builds the search presence, ads and follow-up systems that turn that research into site visits, and site visits into bookings or signed leases.',
    challenges: [
      {
        title: 'Expensive, low-intent leads',
        text: 'Portal and social leads often include people who are only browsing, have the wrong budget or never answer the phone. Sales teams spend hours calling leads that were never going to visit.',
      },
      {
        title: 'Long, multi-month decisions',
        text: 'A home or a plot is the biggest purchase most families make. Buyers take months, involve parents and spouses, and go quiet in between – so a project that stops following up loses them to one that doesn’t.',
      },
      {
        title: 'Projects that look the same online',
        text: 'Every apartment listing promises connectivity and a clubhouse, and every plotted layout promises appreciation. Without real footage, clear floor plans or layout maps and a reason to choose, a project disappears among similar launches in the same corridor.',
      },
      {
        title: 'Leads shared with channel partners',
        text: 'Developers, brokers and channel partners often advertise the same project to the same audience. That pushes up ad costs and creates disputes over who brought in the buyer.',
      },
    ],
    buyerJourney: [
      {
        stage: 'Search & shortlist',
        text: 'Buyers search by locality, budget and configuration – a 3BHK, a villa, a 30×40 plot – on Google, property portals and Instagram, then shortlist a handful of projects.',
      },
      {
        stage: 'Site visit',
        text: 'They book a visit to the experience centre, show flat or layout – usually on a weekend, often after a call or WhatsApp exchange with the sales team.',
      },
      {
        stage: 'Comparison & loan',
        text: 'Families compare price per square foot, the developer’s track record, RERA status, title and approvals, possession dates and home loan eligibility.',
      },
      {
        stage: 'Booking',
        text: 'They pay the booking amount, often after a second visit, a negotiation and a nudge from a launch offer or an upcoming price revision.',
      },
    ],
    channels: [
      {
        service: 'google-ads',
        why: 'Search ads catch buyers at the moment they type a locality, configuration and budget. Campaigns built around project names, micro-markets and “ready to move” intent bring leads with clearer intent than broad portal traffic.',
      },
      {
        service: 'meta-ads',
        why: 'Instagram and Facebook ads with walkthrough videos and floor plans reach families and NRIs who fit the profile but aren’t searching yet. Instant forms that ask about budget and timeline filter out casual browsers before the sales team calls.',
      },
      {
        service: 'performance-marketing',
        why: 'Running Google, Meta, LinkedIn and portal budgets against one cost-per-site-visit target shows which channel actually fills the experience centre. Spend moves to what produces visits and bookings – or, for commercial leasing, meetings with occupiers – not just form fills.',
      },
      {
        service: 'website-design',
        why: 'A project microsite designed around one action – booking a site visit – converts ad traffic that a portal listing can’t. The RERA number, floor plans or layout map, price band and location map sit up front, with separate pages per tower, phase or villa type to keep each campaign focused.',
      },
      {
        service: 'drone-shoots',
        why: 'Aerial footage shows what a brochure can’t – the approach road, construction progress and the distance to the metro or a tech park. For plotted layouts and villa communities it’s the clearest way to show internal roads, parks and how plots sit on the land.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Buyers would rather WhatsApp than take a call. Automated replies with the brochure, price sheet and location pin go out within minutes of an enquiry, and scheduled follow-ups keep the project in front of them through a long decision.',
      },
      {
        service: 'marketing-automation',
        why: 'A CRM that routes each lead to the right sales person, logs every call and site visit and sends nurture messages stops leads slipping through. It also settles channel partner attribution with a clear record of who brought whom.',
      },
      {
        service: 'seo',
        why: 'Ranking for locality and project searches – “new apartments in Thanisandra”, “villa plots on Kanakapura Road”, “co-living near Manyata Tech Park” – builds a lead source that doesn’t stop when the ad budget does. Area guides catch buyers and tenants early in their research.',
      },
      {
        service: 'video-production',
        why: 'Show-flat walkthroughs, amenity tours and short explainers answer the questions buyers ask on the first call. They work on YouTube, Instagram Reels and in the sales team’s WhatsApp follow-ups.',
      },
      {
        service: 'google-business-profile',
        why: 'Brokers, co-living operators and experience centres all get “near me” searches – “real estate agent near me”, “PG near me”. A verified profile with photos, timings, reviews and the right category puts the office or property on Maps, where tenants and walk-in buyers look first.',
      },
    ],
    seasonality:
      'Bookings cluster around auspicious days such as Ugadi, Akshaya Tritiya, Dasara and Diwali, when developers run festive offers, and Pitru Paksha is traditionally a slow fortnight. New launches and price revisions create their own peaks, while co-living demand follows campus joining dates and office hiring.',
    compliance:
      'Under RERA, a project – including a plotted development – must be registered with K-RERA before it’s advertised or sold, and every ad must show its RERA registration number. Agents and channel partners need their own RERA registration too.',
    kpis: [
      'Cost per qualified lead',
      'Site visits booked',
      'Visit-to-booking rate',
      'Cost per booking',
    ],
    faqs: [
      {
        q: 'Are property portal leads or Google Ads leads better?',
        a: 'They do different jobs. Portal leads are often shared with several other projects, while your own search and social campaigns send buyers straight to you. Most projects need both, judged on site visits and bookings rather than lead volume.',
      },
      {
        q: 'How do we cut down on junk leads?',
        a: 'Ask qualifying questions in the form – budget, configuration, timeline – and respond within minutes on call or WhatsApp. Feeding site-visit and booking data back into the ad platforms also improves lead quality over time.',
      },
      {
        q: 'When should marketing start for a new launch?',
        a: 'As soon as the project is RERA-registered, and ideally a few weeks before the public launch. That gives time to build the microsite, shoot content and warm up an audience before prices are announced.',
      },
      {
        q: 'Does the same marketing work for co-living and office leasing?',
        a: 'The tools overlap but the audience doesn’t. Co-living fills through Google Maps, Instagram and quick WhatsApp replies to students and young professionals, while office leasing is won through LinkedIn, property consultants and search ads on “office space for rent” near business districts – each needs its own campaigns and landing pages.',
      },
    ],
    localAngle:
      'Most buyers want to live near work, schools and family, so they search by neighbourhood first. Projects that show real commute times, nearby schools and hospitals, and footage of the actual area win buyers who have already chosen that part of the city.',
  },
  'interior-design': {
    name: 'interior designers',
    title: 'Interior Design',
    marketingLabel: 'Interior design marketing',
    businessNoun: 'interior design studio',
    audience:
      'interior design studios, modular kitchen firms, office fit-out companies and turnkey contractors',
    customers: 'new homeowners, families renovating, and companies fitting out offices',
    intro:
      'Interior design is bought with the eyes. Homeowners collect ideas for months and pick the studio whose finished homes look like the one they want, while a company fitting out an office picks the firm that has already delivered a similar floor on time. BMU helps interior businesses in Bengaluru show their work properly, get found when new flat owners and admin teams start searching, and follow up until the quote is signed.',
    challenges: [
      {
        title: 'Competing with large modular brands',
        text: 'National modular interior companies spend heavily on ads and promise fixed timelines. Independent studios need to show why custom design and personal attention are worth choosing.',
      },
      {
        title: 'Price-shopping on quotes',
        text: 'Clients collect several quotes and compare totals without comparing materials, hardware or finish. Studios that don’t explain their specifications get pushed on price.',
      },
      {
        title: 'Leads that arrive too early',
        text: 'Many enquiries come from buyers whose flats are months from possession. Without regular follow-up, they forget the studio by the time they’re ready.',
      },
      {
        title: 'Office projects run differently',
        text: 'Office fit-outs are won through referrals, landlords and property consultants, with deadlines tied to a lease start. A studio known only on Instagram rarely reaches the people who sign those contracts.',
      },
    ],
    buyerJourney: [
      {
        stage: 'Inspiration',
        text: 'Homeowners save ideas on Instagram, Pinterest and YouTube home tours, often while their flat is still being built.',
      },
      {
        stage: 'Shortlist & consult',
        text: 'Near possession – or a lease start, for offices – they search for designers, check reviews and portfolios, and book consultations with a few firms.',
      },
      {
        stage: 'Design & quote',
        text: 'They compare 3D designs, material specifications, quotes and timelines side by side.',
      },
      {
        stage: 'Sign-up & execution',
        text: 'They sign with the studio they trust most and pay in stages as the work progresses.',
      },
    ],
    channels: [
      {
        service: 'instagram-marketing',
        why: 'Instagram is an interior designer’s showroom. Reels of finished homes, before-and-after walkthroughs, kitchen details and material stories – plus quick replies to DMs – keep the studio in mind through a decision that can take months.',
      },
      {
        service: 'meta-ads',
        why: 'Instagram and Facebook ads showing finished homes reach people who have just bought a flat or are nearing possession. Location targeting around newly completed apartment projects puts the studio in front of them before they start collecting quotes.',
      },
      {
        service: 'google-ads',
        why: 'Search ads on “interior designers for 2BHK” and “modular kitchen designers” catch homeowners ready to book a consultation. Separate kitchen, wardrobe, full-home and office campaigns show which work brings profitable projects.',
      },
      {
        service: 'photography',
        why: 'Interiors need professional photography – controlled light, styling and the right angles. Phone photos taken at handover make strong work look average, while good images make a finished project usable on the website, in ads and on design platforms.',
      },
      {
        service: 'seo',
        why: 'Pages on costs, materials and styles – “2BHK interior cost”, “plywood vs MDF for kitchens” – answer what homeowners search during research. They bring enquiries from people who already understand what they’re buying.',
      },
      {
        service: 'google-business-profile',
        why: 'Clients check Google reviews before visiting a studio. A profile with project photos, an accurate experience-centre location and recent reviews helps an independent studio stand next to the big brands.',
      },
      {
        service: 'video-production',
        why: 'Home tour videos, ideally with the owners showing their own space, give prospects a confidence that a 3D render can’t. They work on YouTube, Reels and in follow-up messages.',
      },
      {
        service: 'website-design',
        why: 'A website laid out by room, style and budget – kitchens, wardrobes, full homes, offices – with package details and a consultation booking form gives ad and search traffic a clear next step. Separate sections for modular kitchens and office fit-outs let each campaign land on work that matches the search.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Prospects months from possession need regular, light-touch follow-up. Scheduled WhatsApp messages with newly finished homes and design ideas keep the studio in the conversation until they’re ready to start.',
      },
      {
        service: 'linkedin-branding',
        why: 'Office fit-outs are bought by founders, admin heads and facility managers, and they look for vendors on LinkedIn. Posting completed workspaces, handover timelines and the founder’s view on workplace design keeps the firm on shortlists for corporate projects.',
      },
    ],
    seasonality:
      'Demand follows possession dates in new apartment projects and rises in the months before Diwali and planned griha pravesha dates, as families want homes ready for the festival or housewarming. Office fit-outs follow lease renewals and expansion plans, which often firm up around the financial year.',
    kpis: [
      'Consultations booked',
      'Cost per consultation',
      'Quote-to-sign rate',
      'Average project value',
    ],
    faqs: [
      {
        q: 'How do we compete with big modular interior brands?',
        a: 'Don’t try to match their ad budgets. Show what they can’t – custom design, the designer’s personal involvement, finished homes in nearby projects and honest specifications – and target people searching for exactly that.',
      },
      {
        q: 'Should we show prices on our website?',
        a: 'Starting prices for common scopes, such as a 2BHK or a modular kitchen, help filter enquiries. Explaining what changes the price – materials, hardware, finishes – makes the sales conversation easier.',
      },
      {
        q: 'Which works better for interior designers – Google or Instagram?',
        a: 'Instagram builds desire and keeps the studio in mind during research; Google catches people ready to book a consultation. Most studios need both, with budgets split by what produces signed projects.',
      },
      {
        q: 'Can the same marketing win office interior projects?',
        a: 'Only partly. Homeowners respond to Instagram and Google Maps, while office projects come through LinkedIn, property consultants and referrals, and buyers want case studies with timelines and square footage. Studios that do both usually keep a separate commercial portfolio and campaign.',
      },
    ],
    localAngle:
      'Interior designers win neighbourhoods one apartment complex at a time. A studio that finishes a few homes in a large project and shows them online often gets the neighbours next – owners like to see work in a layout identical to their own.',
  },
  'construction-and-contractors': {
    name: 'construction companies and contractors',
    title: 'Construction & Contractors',
    marketingLabel: 'Construction marketing',
    businessNoun: 'construction company',
    audience:
      'civil contractors, house construction companies, renovation firms and waterproofing specialists',
    customers:
      'plot owners building a home, homeowners renovating or fixing leaks, and businesses commissioning civil work',
    intro:
      'For a contractor, every finished job is the next client’s proof. A family building on their plot, a homeowner with a leaking terrace and a business planning a warehouse all want to see completed work, clear pricing and a team they can trust with a large cheque. BMU helps construction businesses in Bengaluru show that proof online and turn it into enquiries.',
    challenges: [
      {
        title: 'Trust before any money changes hands',
        text: 'Stories of delays, cost overruns and poor materials make clients cautious. Without visible completed projects and reviews, a contractor ends up competing on price alone.',
      },
      {
        title: 'Quotes that aren’t comparable',
        text: 'Clients compare per-square-foot rates without knowing what each package includes. Builders who don’t explain their specifications lose to cheaper quotes with hidden extras.',
      },
      {
        title: 'Repair jobs go to whoever answers',
        text: 'Waterproofing and repair enquiries are urgent – water coming through a ceiling in the monsoon – and homeowners call the first few names on Maps. A missed call or a slow inspection loses the job.',
      },
      {
        title: 'Little content from site',
        text: 'Contractors are busy on site and rarely document progress. Without photos, videos and stage-wise updates, there’s nothing to show the next prospect.',
      },
    ],
    buyerJourney: [
      {
        stage: 'Research & shortlist',
        text: 'Plot owners search for house construction companies, homeowners search for renovation or waterproofing help, and both ask friends who built or repaired recently.',
      },
      {
        stage: 'Site visit or inspection',
        text: 'They visit ongoing sites and finished homes – or have the contractor inspect the problem – to check workmanship, materials and how the team runs a job.',
      },
      {
        stage: 'Quote comparison',
        text: 'They compare packages, per-square-foot rates, warranties, payment stages and timelines from three or four contractors.',
      },
      {
        stage: 'Agreement',
        text: 'They sign with the contractor whose team, contract terms and stage-wise payment plan they trust most.',
      },
    ],
    channels: [
      {
        service: 'seo',
        why: 'Ranking for searches like “house construction company in Bengaluru”, “duplex house builders” or “terrace waterproofing contractors” reaches people who have already decided to spend. Package, cost and method explainer pages answer their first questions and bring enquiries all year.',
      },
      {
        service: 'google-business-profile',
        why: 'Clients check reviews and photos before they call a contractor. A complete profile with project photos, the right service categories, service areas and steady reviews from past clients is often the first proof they see.',
      },
      {
        service: 'google-ads',
        why: 'Search campaigns on construction-intent keywords catch plot owners who want quotes this month. Tight targeting by area and job type keeps the budget away from DIY and building-material searches.',
      },
      {
        service: 'local-seo',
        why: 'Renovation, repair and waterproofing are “near me” jobs – homeowners want someone who can inspect this week. Ranking in the Maps pack across the areas the team actually covers turns monsoon leaks and pre-festival renovations into calls.',
      },
      {
        service: 'video-production',
        why: 'Stage-wise construction videos – foundation, structure, finishing, handover – show workmanship in a way a quote can’t. Handover walkthroughs with the owner build the trust a large contract needs.',
      },
      {
        service: 'website-design',
        why: 'A website with construction packages, specification sheets, a project gallery and a cost estimator gives clients something concrete to compare. Separate pages for new builds, renovation and waterproofing make sure each enquiry lands on work that matches it.',
      },
      {
        service: 'meta-ads',
        why: 'Instagram and Facebook ads with finished-home tours reach people planning a home who haven’t started looking for a builder. They also retarget visitors who viewed your packages page.',
      },
      {
        service: 'drone-shoots',
        why: 'Drone footage of ongoing and completed projects shows scale, progress and finish quality from angles a phone can’t reach. The same footage doubles as monthly progress updates for current clients.',
      },
      {
        service: 'social-media-management',
        why: 'Regular posts of site progress, material choices and handovers keep the contractor visible to the people who will refer the next client. Instagram and Facebook become a living portfolio.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Automated WhatsApp replies send packages and project galleries the moment someone enquires. Stage-wise updates to current clients keep them informed – which is what turns them into referrers.',
      },
    ],
    seasonality:
      'Many families plan bhoomi puja and griha pravesha around auspicious dates, and new construction often starts once the monsoon eases, so build enquiries rise from late monsoon into the new year. Waterproofing runs the other way – demand peaks just before and during the monsoon, when leaks show up.',
    kpis: [
      'Qualified enquiries',
      'Site visits and inspections',
      'Quote-to-contract rate',
      'Cost per signed job',
    ],
    faqs: [
      {
        q: 'Should we publish our construction rates online?',
        a: 'Showing a starting rate per package filters out mismatched enquiries and builds trust, as long as you list exactly what each package includes. Clients who see the specifications upfront are easier to close than those comparing a single number.',
      },
      {
        q: 'How do we get enquiries beyond referrals?',
        a: 'Referrals stay important, but search visibility, a well-reviewed Google profile and regular project content create a second, steadier source. Ads can then fill the gaps between projects.',
      },
      {
        q: 'Is Instagram useful for a construction business?',
        a: 'Yes – homeowners use it to collect ideas and check builders’ past work. Progress reels and handover videos show quality in a way that’s hard to fake.',
      },
      {
        q: 'Should renovation and waterproofing be marketed separately from new builds?',
        a: 'Usually, yes. They’re searched differently and decided faster – a leak needs fixing this month – so they need their own pages, Maps categories and ad campaigns. Keeping them apart also shows which line of work is worth promoting.',
      },
    ],
    localAngle:
      'A contractor’s strongest proof is a finished home a few streets away. Showing completed and ongoing projects by neighbourhood, with reviews from owners nearby, wins clients who want someone who already knows the local soil, approvals and suppliers.',
  },
  architecture: {
    name: 'architects',
    title: 'Architecture',
    marketingLabel: 'Architecture marketing',
    businessNoun: 'architecture practice',
    audience: 'architecture practices, landscape architects and urban planning studios',
    customers:
      'homeowners, developers, businesses, institutions and public bodies commissioning buildings and spaces',
    intro:
      'Clients choose an architect on the strength of their work and the way they think – whether the brief is a home, a campus landscape or a neighbourhood plan. The practices that win good commissions make that work easy to find, easy to understand and easy to share. BMU helps Bengaluru architects and planners build a portfolio presence – website, photography, search and LinkedIn – that brings the right projects in.',
    challenges: [
      {
        title: 'Work that is never properly photographed',
        text: 'Many finished projects are documented only on a phone at handover. Without strong images, the portfolio undersells the practice.',
      },
      {
        title: 'Being confused with contractors',
        text: 'Clients searching online often can’t tell an architect from a design-build firm or interior contractor, and end up comparing on fees alone.',
      },
      {
        title: 'Limits on how architects can advertise',
        text: 'Professional conduct rules restrict promotional advertising, so practices rely on reputation, publications and referrals – which grow slowly without a deliberate plan.',
      },
      {
        title: 'Long gaps between commissions',
        text: 'Projects are few and large, and public and institutional work often arrives through tenders and empanelment. A practice that only markets itself when it’s quiet finds the pipeline empty when a big project ends.',
      },
    ],
    buyerJourney: [
      {
        stage: 'Inspiration & discovery',
        text: 'Clients collect references on Instagram and Pinterest, read design features and ask friends or peers who built recently.',
      },
      {
        stage: 'Portfolio review',
        text: 'They study websites and project pages to judge style, scale and the kind of clients the practice works with.',
      },
      {
        stage: 'First meetings',
        text: 'They meet two or three practices to discuss the brief, approach, fees and timelines.',
      },
      {
        stage: 'Commission',
        text: 'They appoint the practice whose thinking, portfolio and working style feel right for the project.',
      },
    ],
    channels: [
      {
        service: 'website-design',
        why: 'An architect’s website is the portfolio. Project pages with drawings, materials, the brief and the outcome let clients judge the thinking behind the work, not just the photographs.',
      },
      {
        service: 'photography',
        why: 'Architectural photography with the right light, lenses and composition is what makes a project publishable. The images feed the website, award entries, magazine features and social posts for years.',
      },
      {
        service: 'seo',
        why: 'Ranking for searches like “residential architect in Bengaluru”, “landscape architect for villa” or “sustainable architecture firm” brings clients looking for a designer, not a contractor. Detailed project and process pages give Google something substantial to rank.',
      },
      {
        service: 'social-media-management',
        why: 'Instagram and Pinterest are where many homeowners first find architects. A consistent feed of finished projects, sketches and site moments shows the practice’s design language long before the first meeting.',
      },
      {
        service: 'linkedin-branding',
        why: 'Developers, corporates, institutions and government consultants look for architects and planners on LinkedIn. A practice page and partner profiles that share projects, competitions and talks keep the firm in mind for larger commissions and tender shortlists.',
      },
      {
        service: 'content-marketing',
        why: 'Project write-ups, design essays and short pieces on bye-laws, climate-responsive design or native planting answer what clients ask before they commission. The same writing feeds award entries, magazine pitches and the practice’s newsletter.',
      },
      {
        service: 'personal-branding',
        why: 'Clients often hire the principal as much as the practice. Talks, writing and interviews make the founder recognisable for a point of view, which attracts projects that fit it.',
      },
      {
        service: 'video-production',
        why: 'Short films moving through a finished building or landscape explain light, flow and material in a way still images can’t. They work on Instagram and YouTube and in client presentations.',
      },
      {
        service: 'google-business-profile',
        why: 'Plenty of clients still search “architects near me”. A complete profile with project photos and client reviews puts the studio on the map for people starting a home or office project nearby.',
      },
      {
        service: 'drone-shoots',
        why: 'Aerial views show how a building sits on its site – landscape, context and roofscape. For villas, campuses, landscape schemes and larger plans, they complete the portfolio.',
      },
    ],
    seasonality:
      'Demand follows the property cycle more than the calendar. Homeowners usually begin design work a few months before they plan to start construction, and institutional, commercial and public briefs tend to follow budget approvals around the financial year.',
    compliance:
      'Only people registered with the Council of Architecture can use the title ‘architect’, and the Council’s professional conduct rules limit how architects advertise. Marketing should lean on portfolio, publications and information rather than promotional claims.',
    kpis: [
      'Qualified project enquiries',
      'Portfolio page views',
      'Enquiry-to-meeting rate',
      'Commissions won',
    ],
    faqs: [
      {
        q: 'Can architects run ads in India?',
        a: 'The Council of Architecture’s professional conduct rules restrict advertising of professional services, so most practices focus on portfolio, search visibility, publications and social media. If you’re considering paid promotion, check the current rules first.',
      },
      {
        q: 'How many projects should our website show?',
        a: 'Fewer, well-documented projects work better than a long gallery. A focused set with good photographs, drawings and a short story about each brief shows both range and depth.',
      },
      {
        q: 'Is Instagram worth the effort for an architecture firm?',
        a: 'For residential and landscape work, yes – it’s where many clients first see a practice’s style. For institutional, commercial and planning work, LinkedIn and published features usually matter more.',
      },
      {
        q: 'How do we attract larger commercial projects?',
        a: 'Larger clients look for track record, process and stability. Detailed project write-ups, LinkedIn presence for the partners, talks and award entries build the credibility that gets a practice onto shortlists.',
      },
    ],
    localAngle:
      'Homeowners often look for an architect who has already built nearby and understands local plot sizes, bye-laws and approvals. Showing completed projects in the area, with reviews from their owners, makes that familiarity visible.',
  },
  'healthcare-and-hospitals': {
    name: 'healthcare and hospitals',
    title: 'Healthcare & Hospitals',
    marketingLabel: 'Healthcare marketing',
    businessNoun: 'hospital',
    audience: 'multi-speciality hospitals, nursing homes and day-care surgery centres',
    customers: 'patients and their families, referring doctors and corporate clients',
    intro:
      'Patients choose a hospital on trust – the doctor, the speciality, the reviews and whether it’s close enough to reach in an emergency. In Bengaluru most of that choice now starts on Google, whether the need is a cardiac consultation, a planned day-care procedure or a nursing home bed for an elderly parent. BMU helps hospitals get found for the right specialities, explain their care clearly and handle enquiries quickly, within the rules that govern medical advertising.',
    challenges: [
      {
        title: 'Competing with large hospital chains',
        text: 'Big chains dominate search ads and listings. A mid-sized hospital, nursing home or day-care surgery centre has to win on specific specialities and its own catchment rather than everything at once.',
      },
      {
        title: 'Marketing within medical advertising rules',
        text: 'Claims about cures, guaranteed outcomes and doctors’ self-promotion are restricted. Campaigns have to inform and build trust without crossing those lines.',
      },
      {
        title: 'Reviews that shape reputation',
        text: 'A few unhappy reviews about billing or waiting times can outweigh good clinical work. Hospitals need a steady way to collect feedback and respond to it.',
      },
      {
        title: 'Enquiries that go unanswered',
        text: 'Calls to a busy front desk often ring out, and online enquiries wait for hours. Patients simply call the next hospital.',
      },
    ],
    buyerJourney: [
      {
        stage: 'Symptom or speciality search',
        text: 'Patients and families search for a symptom, procedure or speciality, often with “near me”, and read about the condition.',
      },
      {
        stage: 'Doctor & hospital check',
        text: 'They check the doctor’s experience, the hospital’s reviews, insurance tie-ups and how far it is.',
      },
      {
        stage: 'Enquiry & appointment',
        text: 'They call, WhatsApp or book online to ask about availability, package estimates and cashless insurance.',
      },
      {
        stage: 'Visit & treatment',
        text: 'The consultation and the experience at the hospital decide whether they return, leave a review and recommend it.',
      },
    ],
    channels: [
      {
        service: 'local-seo',
        why: 'For a hospital, distance matters – especially in an emergency. Ranking in Google Maps for each speciality and for “hospital near me” across the surrounding area brings calls and walk-ins from people who need care now.',
      },
      {
        service: 'seo',
        why: 'Speciality and procedure pages – knee replacement, cardiac care, cataract and other day-care surgery, maternity packages – written for patients and reviewed by the hospital’s doctors rank for the searches families make before choosing. Doctor profile pages and a clean site structure build the medical credibility Google looks for in health content.',
      },
      {
        service: 'google-business-profile',
        why: 'The Google profile is often the first thing a patient sees. Accurate departments, OPD timings, emergency numbers, photos and replies to reviews make the hospital look organised and trustworthy.',
      },
      {
        service: 'google-ads',
        why: 'Search campaigns for high-value specialities, day-care procedures and health check-up packages reach patients actively choosing where to go. Careful keyword and copy choices keep campaigns within Google’s healthcare policies and Indian medical advertising rules.',
      },
      {
        service: 'website-development',
        why: 'A hospital website needs fast doctor search, department pages, online appointment booking linked to the hospital’s own system, and clear insurance and TPA information. It’s where most patients go before deciding to visit.',
      },
      {
        service: 'content-marketing',
        why: 'Doctor-reviewed guides – preparing for a day-care procedure, recovery after surgery, when chest pain needs the emergency room – answer what families worry about late at night. Sent on WhatsApp after a consultation, the same guides cut repeat calls to the front desk.',
      },
      {
        service: 'ai-search-visibility',
        why: 'Patients increasingly ask ChatGPT, Gemini and Google’s AI Overviews which hospitals to consider for a procedure. Clear speciality pages, doctor profiles and consistent listings help these tools describe the hospital accurately.',
      },
      {
        service: 'meta-ads',
        why: 'Instagram and Facebook suit health check-up packages, screening camps and awareness campaigns in the hospital’s area. They build familiarity with local families before a need arises.',
      },
      {
        service: 'video-production',
        why: 'Doctor explainer videos, facility tours and patient education content answer common questions and make the hospital feel familiar before the first visit.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Appointment reminders, report-ready alerts and post-discharge follow-ups on WhatsApp cut no-shows and make the patient experience smoother. A simple WhatsApp assistant can also answer OPD timings and insurance questions at any hour.',
      },
    ],
    seasonality:
      'Fever, dengue and respiratory cases rise during and after the monsoon and at seasonal changes. Health check-up campaigns do well around awareness days such as World Heart Day and at the new year, while planned surgery often waits for school holidays, when families can take time off.',
    compliance:
      'The Drugs and Magic Remedies (Objectionable Advertisements) Act bans ads claiming to cure the conditions it lists, and NMC professional conduct rules restrict doctors’ self-promotion. Hospital ads should inform – specialities, facilities, timings – without promising outcomes.',
    kpis: [
      'Appointment enquiries',
      'Cost per appointment',
      'Calls from Google Maps',
      'Review rating and volume',
    ],
    faqs: [
      {
        q: 'Can hospitals advertise on Google and Facebook?',
        a: 'Yes, within the rules. Ads can describe specialities, facilities, packages and timings but shouldn’t promise cures or outcomes. Google and Meta also have their own healthcare policies, and some treatments need extra care or certification.',
      },
      {
        q: 'Which specialities should we promote first?',
        a: 'Start with departments that have capacity, strong doctors and healthy margins – and that patients actively search for. Promoting a department that can’t take more patients only creates bad reviews.',
      },
      {
        q: 'How should we handle negative reviews?',
        a: 'Reply promptly and politely, without sharing any patient details, and take the conversation offline. Fixing the recurring cause – billing, waiting times, discharge delays – matters more than the reply itself.',
      },
      {
        q: 'Should our doctors be on social media?',
        a: 'Doctors sharing patient education builds trust in the hospital, as long as it stays informational. Content on conditions, prevention and when to see a specialist works better than promotional posts and stays within professional conduct rules.',
      },
    ],
    localAngle:
      'Most patients choose a hospital within a short drive, and in an emergency the nearest trusted name wins. Strong Maps rankings, accurate emergency details and reviews from local families make the hospital the obvious choice in its catchment.',
  },
  'clinics-and-doctors': {
    name: 'clinics and doctors',
    title: 'Clinics & Doctors',
    marketingLabel: 'Clinic marketing',
    businessNoun: 'clinic',
    audience:
      'dental, dermatology, IVF, eye, orthopaedic, physiotherapy and paediatric clinics, and doctors in private practice',
    customers:
      'local patients, parents of young children and people looking for a particular specialist',
    intro:
      'Clinics live and die by their neighbourhood and their reviews. A patient with toothache, a parent with a feverish child or a couple considering IVF searches nearby, reads reviews, looks the doctor up and books whoever answers first. BMU helps Bengaluru clinics and doctors rank in Google Maps, run compliant ads for key treatments and build a doctor’s reputation through patient education, within the rules of medical practice.',
    challenges: [
      {
        title: 'Crowded “near me” results',
        text: 'There are often several clinics of the same speciality within a short distance. Small differences in reviews, photos and Maps ranking decide who gets the call.',
      },
      {
        title: 'Strict limits on self-promotion',
        text: 'NMC conduct rules restrict how doctors advertise themselves, and clinics can’t promise cures or guaranteed results. Ads and posts have to persuade through clarity and trust instead.',
      },
      {
        title: 'No-shows and one-time patients',
        text: 'Patients book and don’t turn up, or finish one visit and never return for follow-ups, vaccinations or other treatments the clinic offers.',
      },
      {
        title: 'Aggregators and scattered listings',
        text: 'Practo and similar platforms bring patients but list competitors on the same page, and a doctor who consults in two places often has outdated timings spread across old listings.',
      },
    ],
    buyerJourney: [
      {
        stage: 'Search or referral',
        text: 'Patients search for a treatment or speciality near them on Google, Maps or Practo – or type a doctor’s name after a referral.',
      },
      {
        stage: 'Compare reviews & doctor',
        text: 'They read reviews, check the doctor’s qualifications and look at photos of the clinic.',
      },
      {
        stage: 'Book',
        text: 'They call, WhatsApp or book online – often choosing the clinic that replies fastest with a convenient slot.',
      },
      {
        stage: 'Treat & return',
        text: 'A good experience, clear aftercare and timely reminders bring them back and prompt a review.',
      },
    ],
    channels: [
      {
        service: 'google-business-profile',
        why: 'For a clinic, the Google profile does more work than the website. The right categories, a treatment list, photos of the clinic, accurate timings for each doctor and a steady flow of reviews decide whether a patient calls you or the clinic down the road.',
      },
      {
        service: 'local-seo',
        why: 'Ranking in the Maps pack for searches like “dentist near me”, “skin clinic near me” or “paediatrician near me” puts the clinic in front of patients who want to book today. Consistent details across Google, Practo and JustDial help that ranking hold.',
      },
      {
        service: 'google-ads',
        why: 'Search ads for specific treatments – implants, aligners, IVF consultations, LASIK, physiotherapy for back pain – bring patients with a clear need. Ads that state the treatment, the doctor’s qualifications and the location, without outcome claims, stay compliant and still give patients a reason to call.',
      },
      {
        service: 'seo',
        why: 'Treatment pages that explain procedures, recovery and costs in plain language rank for the questions patients search before booking. They also save doctors time answering the same questions in every consultation.',
      },
      {
        service: 'personal-branding',
        why: 'For doctors, personal branding means patient education – short videos and posts explaining conditions, treatments and when to seek help. Done consistently, it builds a recognised, trusted name without crossing into self-promotion.',
      },
      {
        service: 'website-design',
        why: 'A fast, mobile-first clinic site with doctor profiles, a page for each treatment and a booking button on every page gives Maps and ad traffic somewhere credible to land. For a doctor consulting in several places, one site with every location and timing ends the confusion of scattered listings.',
      },
      {
        service: 'meta-ads',
        why: 'Instagram and Facebook suit elective treatments – aligners, skin and hair care, physiotherapy programmes – that patients think about for weeks. Educational ad creative builds familiarity with the doctor before the first visit.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Appointment confirmations, reminders, vaccination schedules for young patients and post-treatment check-ins on WhatsApp reduce no-shows and bring patients back for follow-ups and reviews.',
      },
      {
        service: 'digital-marketing',
        why: 'Most clinics have no marketing staff, and the doctor’s time is the scarcest thing in the building. One monthly plan that runs the Google profile, ads, social posts and reporting together gives the clinic a single view of new patients, reviewed in one short meeting.',
      },
      {
        service: 'ai-search-visibility',
        why: 'Patients now ask AI assistants which clinic or specialist to see for a treatment in their area. Consistent listings, detailed treatment pages and genuine reviews help those answers include the clinic and describe the doctor accurately.',
      },
    ],
    seasonality:
      'Most clinic work runs through the year, with peaks tied to the speciality – fever and respiratory cases for paediatricians around the monsoon, skin and hair concerns in summer, and cosmetic dental and skin treatments before the wedding season and festivals. Patient education works all year, since people research a doctor long before they book.',
    compliance:
      'The Drugs and Magic Remedies (Objectionable Advertisements) Act bans ads claiming to cure the conditions it lists, and NMC conduct rules restrict doctors’ self-promotion, so marketing should inform rather than solicit. IVF and diagnostic clinics must also follow the PCPNDT Act, which prohibits any advertising of sex determination.',
    kpis: [
      'Appointments booked',
      'Cost per new patient',
      'Calls and direction requests from Maps',
      'No-show rate',
    ],
    faqs: [
      {
        q: 'Is Practo enough, or do we need our own marketing?',
        a: 'Practo and similar platforms help, but they show competitors next to you and you don’t own the patient relationship. A strong Google profile, website and WhatsApp follow-up bring patients who come to you directly.',
      },
      {
        q: 'Are doctors allowed to market themselves in India?',
        a: 'Direct self-advertising is restricted by NMC professional conduct rules, but sharing accurate information and educating patients is a different matter. Correct listings, a clinic website and educational content are the usual, safer route.',
      },
      {
        q: 'Can we post before-and-after photos?',
        a: 'With care. They need the patient’s written consent, must be genuine and unedited, and shouldn’t imply a guaranteed result. Platforms such as Meta also restrict some before-and-after content in ads.',
      },
      {
        q: 'How quickly can a new clinic get patients online?',
        a: 'A properly set-up Google profile and search ads can bring enquiries within the first few weeks. Maps rankings and reviews take a few months to build, so it pays to start both together.',
      },
    ],
    localAngle:
      'Most clinic patients come from a few kilometres around. The clinic that ranks first in Maps for its speciality, with recent reviews, clear consulting timings and photos of a clean, modern space, gets the first call.',
  },
  'pharma-and-medical-devices': {
    name: 'pharma and medical device companies',
    title: 'Pharma & Medical Devices',
    marketingLabel: 'Pharma marketing',
    businessNoun: 'pharma company',
    audience:
      'pharma manufacturers, PCD franchise companies, distributors and medical equipment suppliers',
    customers: 'distributors, stockists, hospital buyers, doctors, pharmacies and labs',
    intro:
      'Pharma and medical device marketing is business-to-business. A manufacturer needs distributors and franchise partners, a distributor needs pharmacies and hospitals, and an equipment supplier needs the biomedical team that signs off a purchase. BMU helps Bengaluru pharma and device companies get found by trade buyers, present their range and certifications clearly and follow up every enquiry – without promoting prescription products to the public.',
    challenges: [
      {
        title: 'Rules on who you can target',
        text: 'Prescription medicines can’t be advertised to the public, and promotion to doctors follows its own code. Marketing has to reach trade buyers and professionals without stepping over either line.',
      },
      {
        title: 'Portal leads shared with many',
        text: 'Enquiries from IndiaMART and similar B2B portals usually go to several suppliers at once. The fastest, most credible reply wins; without one, price becomes the only lever.',
      },
      {
        title: 'Large catalogues, little detail online',
        text: 'Many manufacturers and distributors list hundreds of products with only a name and a pack size. Buyers searching by molecule, composition or equipment model can’t find them.',
      },
      {
        title: 'Credibility that has to be proven',
        text: 'Distributors and hospital buyers want to see licences, GMP certification, capacity and service support before ordering. Without that up front, a capable manufacturer looks like a trader.',
      },
    ],
    buyerJourney: [
      {
        stage: 'Requirement',
        text: 'A distributor wants a new range, a franchise seeker looks for a company to partner with, or a hospital needs equipment replaced.',
      },
      {
        stage: 'Search & shortlist',
        text: 'Buyers search Google and B2B portals by molecule, product or model, ask peers and shortlist a few suppliers.',
      },
      {
        stage: 'Documents & samples',
        text: 'They ask for the product list, rates, licences and certificates – and, for equipment, a demo or a site visit.',
      },
      {
        stage: 'Trial order & repeat',
        text: 'A first order or purchase order follows; delivery, margins and after-sales service decide whether they reorder or sign an AMC.',
      },
    ],
    channels: [
      {
        service: 'seo',
        why: 'Product pages built around molecule, composition, pack size and equipment model match the way trade buyers search, and pages for franchise and third-party manufacturing enquiries reach partners looking for a supplier. This traffic keeps arriving between trade fairs and sales calls.',
      },
      {
        service: 'google-ads',
        why: 'Search campaigns on trade terms – “PCD pharma franchise in Karnataka”, “ICU equipment supplier”, “surgical instruments wholesaler” – reach buyers with a live requirement. Copy and landing pages are checked against Google’s healthcare policies, which restrict anything that promotes prescription drugs.',
      },
      {
        service: 'website-development',
        why: 'A searchable catalogue – by molecule, therapy area or equipment category – with downloadable product lists, certificates and an enquiry button on every item turns the website into a sales tool. A CRM connection sends each enquiry to the right regional sales person.',
      },
      {
        service: 'linkedin-branding',
        why: 'Hospital administrators, procurement heads, biomedical engineers and export buyers are reachable on LinkedIn in a way they aren’t on Instagram. Regular posts on plant capabilities, launches and installations, and active profiles for the founders and sales heads, build familiarity before the sales call.',
      },
      {
        service: 'content-marketing',
        why: 'Product monographs, equipment application notes, comparison guides and installation case notes give buyers and doctors the detail they need to justify a purchase internally. The same pieces become email newsletters and sales-team handouts.',
      },
      {
        service: 'google-business-profile',
        why: 'Medical equipment suppliers and distributors get searches like “surgical shop near me” and “medical equipment supplier” from clinics, labs and families renting hospital beds. A verified profile with product categories, photos of the showroom or warehouse and opening hours turns them into calls.',
      },
      {
        service: 'marketing-automation',
        why: 'A CRM that captures leads from the website, IndiaMART and trade fairs, routes them by region and product line and schedules follow-ups stops enquiries going cold in a sales rep’s phone. It also shows which sources bring orders, not just calls.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Distributors and pharmacies already order over WhatsApp. Broadcast lists for new launches, rate updates and trade schemes, with an automated product catalogue, keep the company in front of its trade network every week.',
      },
      {
        service: 'video-production',
        why: 'Equipment demos, installation walkthroughs and plant or warehouse tours answer buyers’ questions about quality before a visit. They’re useful in sales follow-ups, on LinkedIn and at trade fairs.',
      },
      {
        service: 'packaging-design',
        why: 'For franchise and third-party brands, the carton and label have to carry the required details – composition, batch number, dates, price and licence number – and still look distinct on a chemist’s shelf. Good packaging design works within those rules and gives a new range a recognisable family look.',
      },
    ],
    seasonality:
      'Demand is fairly steady through the year. Monsoon months lift demand for fever, cough and anti-infective ranges, and hospital and lab equipment purchases often bunch around budget approvals and the March financial year-end.',
    compliance:
      'Prescription medicines can’t be advertised to the public in India, and the Drugs and Magic Remedies Act bans claims to treat the conditions it lists, so campaigns are aimed at doctors, pharmacists and trade buyers. Promotion to healthcare professionals is also governed by the Uniform Code for Pharmaceutical Marketing Practices.',
    kpis: [
      'Qualified trade enquiries',
      'Cost per B2B lead',
      'Enquiry-to-order rate',
      'Repeat orders',
    ],
    faqs: [
      {
        q: 'Can we advertise our medicines online?',
        a: 'Not to the public. Prescription medicines can’t be promoted to consumers in India, and Google and Meta restrict pharma ads further. Campaigns aimed at distributors, franchise partners and hospital buyers are usually workable, with the copy checked against each platform’s policy.',
      },
      {
        q: 'Is IndiaMART enough for B2B leads?',
        a: 'It brings volume, but the same enquiry often reaches several suppliers. Your own website, search presence and LinkedIn bring buyers who came looking for you, and a CRM makes sure both kinds of lead are followed up.',
      },
      {
        q: 'Does LinkedIn work for medical equipment sales?',
        a: 'It works well for reaching hospital administrators, procurement teams and biomedical engineers, who rarely respond to consumer-style ads. Consistent posts on installations and service support, plus direct outreach by the sales team, usually do more than LinkedIn ads alone.',
      },
      {
        q: 'How long does B2B pharma marketing take to show results?',
        a: 'Search ads can bring enquiries within weeks, but trade buyers take time to trust a new supplier, and SEO and LinkedIn build over months. Judge it on orders and repeat orders over a few quarters rather than on enquiries in the first month.',
      },
    ],
    localAngle:
      'Distributors and equipment suppliers win most of their business from the hospitals, clinics, labs and pharmacies they can deliver to quickly. A Maps listing with stock categories, delivery hours and a direct number, backed by regular WhatsApp updates, makes them the default supplier for the area.',
  },
  'wellness-and-ayurveda': {
    name: 'wellness and Ayurveda',
    title: 'Wellness & Ayurveda',
    marketingLabel: 'Wellness marketing',
    businessNoun: 'wellness centre',
    audience:
      'Ayurveda centres, naturopathy clinics, therapists and mental health practices, and nutritionists',
    customers: 'people seeking preventive care, therapy or a natural approach to their health',
    intro:
      'People come to wellness on their own terms – after reading about Panchakarma, being told to watch their diet or finally deciding to talk to someone about anxiety. They research carefully, read reviews and want to trust the practitioner before they book. BMU helps Ayurveda centres, naturopathy clinics, therapists and nutritionists in Bengaluru explain what they offer honestly and get found by people already looking for it.',
    challenges: [
      {
        title: 'Health claims under strict rules',
        text: 'Ads can’t promise cures, and claims about treating listed conditions such as diabetes or obesity are banned outright. Marketing has to explain the approach without promising results.',
      },
      {
        title: 'Explaining unfamiliar therapies',
        text: 'Many people don’t know what Panchakarma, a naturopathy stay or a nutrition programme actually involves, how long it takes or what it costs. That uncertainty stops them booking.',
      },
      {
        title: 'Sensitive, private decisions',
        text: 'Mental health clients in particular need privacy and reassurance. Public reviews and testimonials are harder to collect, and marketing has to feel calm rather than promotional.',
      },
      {
        title: 'Credibility against online noise',
        text: 'Social media is full of unqualified health advice. BAMS doctors, qualified dietitians and RCI-registered psychologists need to make their credentials visible to stand apart from it.',
      },
    ],
    buyerJourney: [
      {
        stage: 'Concern or curiosity',
        text: 'A health worry, a doctor’s suggestion, stress at work or a friend’s experience starts the search.',
      },
      {
        stage: 'Research the approach',
        text: 'They read about the therapy or programme, watch practitioners explain it and check qualifications and reviews.',
      },
      {
        stage: 'First consultation',
        text: 'They book a consultation – in person or online – to judge the practitioner and understand the plan and the cost.',
      },
      {
        stage: 'Programme & follow-through',
        text: 'They commit to a programme, a course of sessions or a stay, and continue if they feel heard and see progress.',
      },
    ],
    channels: [
      {
        service: 'seo',
        why: 'People research wellness before they book – “Panchakarma treatment cost”, “online therapist for anxiety”, “PCOS diet plan”. Pages that answer those searches plainly, written or reviewed by qualified practitioners, bring visitors who already understand the approach.',
      },
      {
        service: 'google-business-profile',
        why: 'An Ayurveda centre, therapy practice or nutrition clinic is often found through “near me” searches. A complete profile with qualifications, services, photos of the space and steady reviews does much of the reassuring before the first call.',
      },
      {
        service: 'personal-branding',
        why: 'In wellness, people choose the practitioner more than the brand. Regular talks, reels and articles from the vaidya, therapist or nutritionist build a recognisable voice and the trust a long programme needs.',
      },
      {
        service: 'content-marketing',
        why: 'Guides to what happens during a Panchakarma programme, how therapy sessions work or what a nutrition plan involves remove the uncertainty that stops people booking. A monthly newsletter keeps past clients in touch between programmes.',
      },
      {
        service: 'instagram-marketing',
        why: 'Instagram suits nutritionists, therapists and yoga-led wellness centres – short explainers, myth-busting reels, recipes and calm glimpses of the centre build familiarity. DMs are often where the first question is asked, so replies need to be quick and careful.',
      },
      {
        service: 'local-seo',
        why: 'Ranking in Maps for “Ayurveda centre near me”, “psychologist near me” or “dietitian near me” across the surrounding area brings people ready to book a first consultation.',
      },
      {
        service: 'google-ads',
        why: 'Search ads for specific programmes – Panchakarma packages, online counselling, nutrition consultations – reach people ready to book. Ads avoid cure claims and follow Google’s healthcare policies, which restrict some health services.',
      },
      {
        service: 'website-design',
        why: 'A calm, clear website with practitioner credentials, programme pages that explain duration and cost, and an easy consultation booking – including online sessions – helps people who are nervous about the first step.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Session reminders, diet check-ins and post-programme follow-ups on WhatsApp keep clients on track, which is where most wellness programmes succeed or fail. Messages for therapy clients stay brief and discreet.',
      },
      {
        service: 'meta-ads',
        why: 'Instagram and Facebook ads can promote workshops, retreats and introductory consultations to people nearby who follow yoga, nutrition or Ayurveda. Meta restricts ads about weight loss and health conditions, so creative focuses on the experience and the practitioner rather than results.',
      },
    ],
    seasonality:
      'Many people book Ayurvedic and Panchakarma programmes in the monsoon, which Ayurvedic tradition treats as the right season for them, and nutrition enquiries rise in January and before weddings. Mental health enquiries are steadier, with awareness rising around World Mental Health Day in October and exam season for students.',
    compliance:
      'The Drugs and Magic Remedies (Objectionable Advertisements) Act bans ads claiming to cure the conditions it lists, among them diabetes and obesity, and it applies to Ayurvedic and herbal treatments as much as to modern medicine. Mental health services should avoid outcome promises and never share a client’s story without clear consent.',
    kpis: [
      'Consultations booked',
      'Cost per consultation',
      'Programme completion rate',
      'Repeat and referred clients',
    ],
    faqs: [
      {
        q: 'What can an Ayurveda centre say in its ads?',
        a: 'Describe the therapies, the practitioners’ qualifications, the setting and what a programme involves. Avoid claims that a treatment cures a specific disease – the Drugs and Magic Remedies Act bans this for listed conditions, and Google and Meta have their own restrictions.',
      },
      {
        q: 'How can therapists market without compromising confidentiality?',
        a: 'Lead with education rather than testimonials – what therapy involves, how to choose a therapist, how sessions are priced. Ask for reviews in a way that lets clients stay anonymous, and never use anything about a client without explicit consent.',
      },
      {
        q: 'Should nutritionists sell programmes online?',
        a: 'Many do, with online consultations and structured plans offered across the country. A clear website, Instagram content and WhatsApp follow-up let a nutritionist reach well beyond their neighbourhood while still seeing clients in person nearby.',
      },
      {
        q: 'Is Instagram or Google more important for wellness?',
        a: 'Google catches people who have decided to book – “Ayurveda centre near me” or “therapist near me”. Instagram builds the familiarity that gets people to that point, so most practices need both, with Google first.',
      },
    ],
    localAngle:
      'Wellness clients often want a centre they can reach for regular sessions, so the neighbourhood matters. Maps visibility, reviews that mention the practitioner by name and talks for local residents’ associations and offices build trust nearby.',
  },
  'fitness-and-sports': {
    name: 'fitness and sports businesses',
    title: 'Fitness & Sports',
    marketingLabel: 'Fitness marketing',
    businessNoun: 'fitness business',
    audience:
      'gyms, yoga and Pilates studios, sports training centres and fitness equipment sellers',
    customers: 'working professionals, students and anyone starting or returning to fitness',
    intro:
      'People choose a gym or studio that’s close, looks right and feels welcoming on a trial visit, and most memberships are sold in a few busy windows. Yoga studios, sports training centres and equipment sellers face the same short decision with different products. BMU helps Bengaluru fitness businesses win trial visits nearby, keep members engaged enough to renew and sell equipment to people who have just started training.',
    challenges: [
      {
        title: 'New-year joiners who don’t stay',
        text: 'Many members join with enthusiasm and stop coming within weeks. Renewals suffer unless the gym or studio keeps them engaged.',
      },
      {
        title: 'Price wars with chains and apps',
        text: 'Large chains, low-priced memberships and fitness apps compete for the same people. Independent gyms and studios need to sell coaching, class quality and community instead of price.',
      },
      {
        title: 'Trainers carry the reputation',
        text: 'Members follow good trainers and instructors. When one leaves, members can go too unless the business’s own brand is strong.',
      },
      {
        title: 'Explaining the class format',
        text: 'Newcomers aren’t sure what reformer Pilates, aerial yoga, functional training or a kickboxing class involves. Without a clear explanation, they hesitate to try.',
      },
    ],
    buyerJourney: [
      {
        stage: 'Decide to start',
        text: 'A new year, a health scare or an upcoming wedding prompts someone to look for a gym, a class or equipment for home.',
      },
      {
        stage: 'Search & compare',
        text: 'They search “gym near me” or a class type and check photos, reviews, equipment, schedules and prices.',
      },
      {
        stage: 'Trial visit or class',
        text: 'They walk in or book a free trial to see the space, the crowd and the trainers.',
      },
      {
        stage: 'Join & renew',
        text: 'They buy a membership or class pack, and the next few months decide whether they renew.',
      },
    ],
    channels: [
      {
        service: 'google-business-profile',
        why: 'People looking for a gym or studio usually start with “near me”. A complete profile with equipment and class photos, timings, membership details and recent reviews decides which ones they visit for a trial.',
      },
      {
        service: 'local-seo',
        why: 'Ranking in the Maps pack within a few kilometres – for gyms, CrossFit, yoga, Pilates or women-only batches – brings walk-ins from people who have already decided to join somewhere nearby.',
      },
      {
        service: 'instagram-marketing',
        why: 'Workout reels, trainer tips, class clips and member stories show a gym or studio’s energy and community – often what makes someone pick one over another at the same price. Collaborations with local running and cycling groups, and quick DM replies to trial questions, turn followers into walk-ins.',
      },
      {
        service: 'meta-ads',
        why: 'Location-targeted Instagram and Facebook ads with trial offers and class clips reach people living and working nearby, especially around the new year and before summer. Equipment sellers use catalogue ads to show home-gym gear to people already interested in fitness.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Trial follow-ups, class reminders, pack-expiry nudges and renewal reminders on WhatsApp keep members engaged and reduce the drop-off that hurts renewals.',
      },
      {
        service: 'google-ads',
        why: 'Search ads on “gym near me”, “yoga classes near me” and equipment searches such as “treadmill for home” catch people ready to join or buy. Budgets run hardest in the new-year and pre-summer peaks, when intent is highest.',
      },
      {
        service: 'personal-branding',
        why: 'Building the owner’s and head trainers’ profiles on Instagram and YouTube turns their expertise into the business’s brand. People join coaches and instructors they already follow.',
      },
      {
        service: 'ugc',
        why: 'Short videos from members – a first workout, a progress update, a favourite class – feel real to prospects, make the space feel welcoming to beginners and work well as ad creative.',
      },
      {
        service: 'seo',
        why: 'For equipment sellers, product and comparison pages – “treadmill vs cross-trainer”, “commercial gym equipment supplier” – rank for buying research. For gyms and studios, pages that explain each class or programme catch people searching a format before they search a location.',
      },
      {
        service: 'website-design',
        why: 'A site with class descriptions, schedules, trainer profiles and online trial booking – or, for equipment sellers, clear product pages with delivery and installation details – lets people commit the moment they’re ready.',
      },
    ],
    seasonality:
      'Joining peaks in January with new-year resolutions and again before summer and the wedding season, and yoga studios see extra interest around International Yoga Day on 21 June. Retention matters most from February onwards, when early-year joiners tend to drop off, and equipment sellers do well in festive marketplace sales.',
    kpis: [
      'Trial visits booked',
      'Trial-to-membership rate',
      'Cost per new member',
      'Renewal rate',
    ],
    faqs: [
      {
        q: 'How do we get more people in for a trial?',
        a: 'Make it easy and specific – a free session, a clear booking link and a quick WhatsApp reply. Promote it to people within a few kilometres, where joining is realistic.',
      },
      {
        q: 'How do we compete with cheaper chains?',
        a: 'Don’t compete on price. Show coaching, community, cleanliness and the trainers members actually work with – things a low-priced membership rarely includes.',
      },
      {
        q: 'How can marketing help with renewals?',
        a: 'Keep members engaged between visits – progress check-ins, challenges, class updates and timely renewal reminders on WhatsApp. Members who feel noticed are more likely to stay.',
      },
      {
        q: 'Should we post transformation photos?',
        a: 'Only with the member’s clear consent and without implying guaranteed results. Meta restricts before-and-after imagery in some ads, so these usually work better as organic posts than paid campaigns.',
      },
    ],
    localAngle:
      'People rarely join a gym or studio far from home or work, so a fitness business wins its neighbourhood by ranking first in Maps for each class type, showing a real community on Instagram and making the trial visit easy.',
  },
  'education-and-schools': {
    name: 'schools and preschools',
    title: 'Education & Schools',
    marketingLabel: 'School marketing',
    businessNoun: 'school',
    audience: 'CBSE, ICSE, state board and international schools, and preschools',
    customers: 'parents of young children and teenagers',
    intro:
      'Choosing a school is one of the most researched decisions a Bengaluru family makes. Parents compare boards, fees, facilities and the daily commute, read reviews and ask other parents for months before admissions open – and for a preschool, they want to see the classroom and meet the teachers. BMU helps schools stay visible through that research, present themselves honestly and fill their admission funnel each year.',
    challenges: [
      {
        title: 'A short, competitive admission window',
        text: 'Most enquiries arrive within a few months each year. Schools that start late find parents have already shortlisted elsewhere.',
      },
      {
        title: 'Parents trust other parents',
        text: 'Word of mouth and parent WhatsApp groups carry more weight than ads, so reputation has to be built in the open.',
      },
      {
        title: 'Every school sounds the same',
        text: 'Every school claims holistic learning and good facilities. Without real proof – teachers, activities, student work – the claims blur together.',
      },
      {
        title: 'Turning enquiries into campus visits',
        text: 'Parents enquire at many schools but visit only a few. Slow responses and generic follow-up lose them.',
      },
    ],
    buyerJourney: [
      {
        stage: 'Research',
        text: 'Parents search for schools by board and area, read reviews and ask in parent groups.',
      },
      {
        stage: 'Shortlist & enquiry',
        text: 'They enquire at a handful of schools about fees, the admission process and seat availability.',
      },
      {
        stage: 'Campus visit',
        text: 'They tour the campus, meet the principal or admissions team and judge the environment.',
      },
      {
        stage: 'Application & admission',
        text: 'They apply, complete any assessment or interaction, and pay fees at the school that feels right.',
      },
    ],
    channels: [
      {
        service: 'seo',
        why: 'Parents search “CBSE schools in” an area and compare options for weeks. Pages on curriculum, facilities, fee structure and the admission process help the school appear – and answer their questions – throughout that research.',
      },
      {
        service: 'google-business-profile',
        why: 'Parents check the Google profile for photos, reviews, location and office timings before they call. Reviews from current parents carry particular weight with families choosing where to send a child.',
      },
      {
        service: 'local-seo',
        why: 'Preschools and daycares are chosen largely by distance, and “preschool near me” or “daycare near me” searches start in Maps. Ranking in the Maps pack across the school’s catchment brings parents who can realistically manage the daily drop-off.',
      },
      {
        service: 'meta-ads',
        why: 'Instagram and Facebook ads reach parents in the school’s catchment during admission season, promoting open houses, campus tours and application deadlines.',
      },
      {
        service: 'google-ads',
        why: 'Search ads during admissions catch parents actively comparing schools by board and area. Campaigns optimised for campus-visit bookings, not just form fills, bring families who are serious.',
      },
      {
        service: 'social-media-management',
        why: 'Posts of classroom activities, events, sports and student work show parents what daily life at the school looks like. It’s the closest thing to a campus visit before they visit.',
      },
      {
        service: 'video-production',
        why: 'A campus film, teacher introductions and activity highlights let parents see the school before they arrive. For large campuses, a few aerial shots of the grounds and sports facilities make a strong opening.',
      },
      {
        service: 'website-design',
        why: 'A school website should make admissions easy – clear eligibility, fee information, an online enquiry or application form and a campus-tour booking, laid out so a parent on a phone finds each in seconds.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Parents would rather message than call, so admissions run on WhatsApp. Automated replies with the prospectus, reminders about open houses and deadlines, and updates during the admission process keep families moving forward.',
      },
      {
        service: 'marketing-automation',
        why: 'An admissions CRM tracks every enquiry from first contact to admission, so no parent is forgotten and the school can see which channels bring families who actually join.',
      },
    ],
    seasonality:
      'Admission enquiries for the June academic year usually begin around October and peak between November and February. Preschool intakes, international schools with rolling admissions and mid-year transfers bring smaller peaks outside that window.',
    compliance:
      'ASCI’s guidelines for educational institutions apply – claims about affiliation, results, toppers or rankings must be true and backed by evidence, and ads shouldn’t guarantee admissions or marks.',
    kpis: [
      'Admission enquiries',
      'Campus visits',
      'Enquiry-to-admission rate',
      'Cost per admission',
    ],
    faqs: [
      {
        q: 'When should a school start admission marketing?',
        a: 'A few months before admissions open, so the school is visible when parents begin researching. Starting when forms open means competing with schools parents have already shortlisted.',
      },
      {
        q: 'How do we get more parents to visit the campus?',
        a: 'Make it easy – a simple booking form, weekend slots and quick WhatsApp replies – and give a reason, such as an open house or a demo class. Follow up personally after every visit.',
      },
      {
        q: 'Can we advertise our board results?',
        a: 'You can share genuine results, presented responsibly – accurate figures, the right year and students’ consent. ASCI guidelines require claims about results and achievements to be truthful and supported by evidence.',
      },
      {
        q: 'How important are Google reviews for a school?',
        a: 'Very – parents read them closely. Encourage satisfied parents to leave honest reviews and reply calmly to every one, including the critical ones.',
      },
    ],
    localAngle:
      'Distance and the daily commute weigh heavily in school choice, so schools win families within a few kilometres. Strong Maps visibility, reviews from local parents and a presence in community and apartment groups make the school a familiar name nearby.',
  },
  'coaching-and-test-prep': {
    name: 'coaching institutes and tuition centres',
    title: 'Coaching & Test Prep',
    marketingLabel: 'Coaching institute marketing',
    businessNoun: 'coaching institute',
    audience: 'NEET, JEE, UPSC, CAT and IELTS coaching institutes, and tuition centres',
    customers: 'school and college students, exam aspirants and their parents',
    intro:
      'Coaching institutes sell a promise of progress, and students and parents weigh it carefully. They read reviews, ask seniors about results, compare faculty and sit a demo class before paying a year’s fees – whether the goal is NEET, a civil services rank, a CAT percentile or an IELTS band. BMU helps Bengaluru institutes reach the right aspirants, show their teaching honestly and turn demo classes into enrolments.',
    challenges: [
      {
        title: 'Intense competition for the same students',
        text: 'Large national brands and local institutes advertise to the same students for the same exams, pushing up the cost of every lead.',
      },
      {
        title: 'Results claims under scrutiny',
        text: 'Claims about toppers, ranks and selections are regulated and checked. Institutes have to show outcomes without exaggerating them.',
      },
      {
        title: 'Demo classes that don’t convert',
        text: 'Many students attend a free demo and never enrol. The follow-up after the demo matters as much as the class itself.',
      },
      {
        title: 'Batch-based demand',
        text: 'Enrolment bunches around batch start dates and exam calendars, so marketing has to build momentum ahead of each batch.',
      },
    ],
    buyerJourney: [
      {
        stage: 'Goal & search',
        text: 'A student settles on an exam or a subject they need help with and searches for institutes – nearby or online.',
      },
      {
        stage: 'Compare institutes',
        text: 'They compare faculty, results, fees, batch timings and reviews, and ask seniors or friends.',
      },
      {
        stage: 'Demo class',
        text: 'They attend a free demo or counselling session to judge the teaching.',
      },
      {
        stage: 'Enrol',
        text: 'They join a batch, often prompted by a start date, a scholarship test or an instalment option.',
      },
    ],
    channels: [
      {
        service: 'google-ads',
        why: 'Search ads on course and exam searches – “NEET coaching near me”, “IELTS classes in Jayanagar”, “CAT coaching weekend batch” – reach students who are deciding now. Optimising for demo bookings rather than form fills keeps the focus on students who turn up.',
      },
      {
        service: 'meta-ads',
        why: 'Instagram and Facebook ads with faculty clips, student stories and batch announcements reach students and parents before they start searching. Lead forms for demo classes and scholarship tests bring in a steady flow of new enquiries ahead of each batch.',
      },
      {
        service: 'local-seo',
        why: 'For offline centres, ranking in Maps for “coaching near me”, “tuition centre near me” and exam-specific searches brings students who want a centre close to home, school or college.',
      },
      {
        service: 'google-business-profile',
        why: 'Parents and students check reviews, classroom photos and batch timings on Google before visiting a centre. A complete profile for each branch, with the courses listed and replies to every review, wins the comparison against the centre down the road.',
      },
      {
        service: 'seo',
        why: 'Exam guides, syllabus breakdowns, previous-paper analysis and course comparison pages rank for the questions students search for months. They bring aspirants who already trust the institute’s expertise.',
      },
      {
        service: 'marketing-automation',
        why: 'A CRM that tracks every lead from enquiry to demo to enrolment, with automatic counsellor assignment, stops leads going cold and shows which campaigns produce paying students.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Demo reminders, batch start alerts and fee instalment follow-ups on WhatsApp turn interest into attendance and attendance into enrolment.',
      },
      {
        service: 'personal-branding',
        why: 'Students often follow a teacher, not an institute. Building the profiles of senior faculty on YouTube and Instagram brings in students who already like how they teach.',
      },
      {
        service: 'video-production',
        why: 'Teaching clips, concept explainers and student testimonials let aspirants judge the teaching before a demo. A YouTube channel of free lessons also builds a long-term audience.',
      },
      {
        service: 'instagram-marketing',
        why: 'Students spend their evenings on Instagram. Short concept explainers, exam-day tips, faculty reels and batch announcements keep the institute in their feed through a long preparation year, and DMs become an easy way to ask about the next batch.',
      },
    ],
    seasonality:
      'Long-term NEET and JEE batches fill after Class 10 and 12 results in April and May, while crash courses sell in the weeks before each exam. UPSC and CAT enrolments follow their exam dates, and IELTS and GRE demand tracks the September and January intakes at universities abroad.',
    compliance:
      'ASCI’s guidelines on education advertising require claims about results, ranks and selections to be truthful and backed by evidence. The Central Consumer Protection Authority has also issued guidelines against misleading coaching ads, covering claims such as guaranteed selection and the use of successful students’ results.',
    kpis: ['Cost per lead', 'Demo attendance rate', 'Demo-to-enrolment rate', 'Cost per enrolment'],
    faqs: [
      {
        q: 'Can we advertise our toppers and selections?',
        a: 'Yes, if the results are genuine and presented accurately – with the student’s consent and clear details of the course they took. Both ASCI and the consumer protection guidelines for coaching ads treat misleading results claims seriously.',
      },
      {
        q: 'How do we improve demo-to-enrolment conversion?',
        a: 'Follow up personally within a day and give a clear next step – a batch start date, a scholarship test or an instalment plan. Tracking each lead in a CRM shows where students drop off.',
      },
      {
        q: 'Should we focus on online or offline students?',
        a: 'It depends on the exam. School-level coaching and tuition usually stay local, while UPSC, CAT and IELTS preparation can sell across the country online. The channel mix should follow where your students actually come from.',
      },
      {
        q: 'Is YouTube worth it for an institute?',
        a: 'For many institutes, yes. Free lessons and exam guidance build trust and an audience, and some of those viewers go on to join paid batches.',
      },
    ],
    localAngle:
      'Students – and parents of younger students – prefer a centre close to home, school or college. Maps rankings, reviews from local students and a presence in neighbourhood groups and nearby schools fill local batches.',
  },
  'higher-education': {
    name: 'colleges and universities',
    title: 'Higher Education',
    marketingLabel: 'Higher education marketing',
    businessNoun: 'college',
    audience:
      'degree, engineering, management and professional colleges, universities and online degree providers',
    customers: 'students, working professionals and parents',
    intro:
      'Students choose a college on outcomes, reputation and campus life, and they research it on Google, YouTube and Instagram; parents check approvals, placements and fees, and working professionals weighing an online degree or MBA check whether it fits around a job. Bengaluru draws applicants from across India, so the competition is national. BMU helps colleges and universities reach applicants early, answer their questions honestly and turn applications into admissions.',
    challenges: [
      {
        title: 'A short, intense admission season',
        text: 'Decisions happen in a few weeks after board and entrance results. A college needs to be known well before then.',
      },
      {
        title: 'Students and parents want different things',
        text: 'Students care about campus life and peers; parents care about placements, safety and fees. Marketing has to speak to both.',
      },
      {
        title: 'Claims under scrutiny',
        text: 'Placement, ranking and approval claims are checked closely by parents and regulators. Exaggeration damages trust quickly.',
      },
      {
        title: 'Applicants who apply everywhere',
        text: 'Students apply to many colleges at once. Without fast counselling and follow-up, applications don’t turn into admissions.',
      },
    ],
    buyerJourney: [
      {
        stage: 'Explore courses',
        text: 'Students search for courses and colleges around results and entrance exams, and watch campus and student videos.',
      },
      {
        stage: 'Compare & shortlist',
        text: 'With their parents, they compare fees, approvals, placements, rankings and location – or, for online degrees, flexibility and total cost.',
      },
      {
        stage: 'Counselling & visit',
        text: 'They speak to admission counsellors, attend open days and visit campuses.',
      },
      {
        stage: 'Apply & enrol',
        text: 'They apply, accept an offer and pay fees – sometimes after waiting for counselling rounds.',
      },
    ],
    channels: [
      {
        service: 'google-ads',
        why: 'Search ads on course and city searches – “BCom colleges in Bengaluru”, “MBA admissions in Bengaluru”, “online MBA for working professionals” – reach applicants in the short window when they’re choosing. Campaigns tied to application deadlines keep spend focused.',
      },
      {
        service: 'meta-ads',
        why: 'Instagram is where students spend their time. Ads with student life, campus tours and course highlights reach them before results and keep the college in mind when they decide.',
      },
      {
        service: 'seo',
        why: 'Course pages, fee and eligibility details and admission guides rank for the questions students and parents search for months. They bring applicants who have already done their research.',
      },
      {
        service: 'performance-marketing',
        why: 'Colleges buy leads from Google, Meta and education portals at very different prices and quality. Running them against one cost-per-enrolment target, with counsellors’ feedback on lead quality fed back in, shows where the admissions budget should actually go.',
      },
      {
        service: 'instagram-marketing',
        why: 'Students judge a college by its Instagram – fests, clubs, sports, labs, alumni stories. Reels made with student ambassadors and quick replies to DMs in admission season show applicants the campus they’d be joining.',
      },
      {
        service: 'marketing-automation',
        why: 'An admissions CRM routes leads to counsellors, tracks every call and application stage, and sends deadline reminders and document checklists by WhatsApp and email. It shows which campaigns produce enrolments rather than just enquiries.',
      },
      {
        service: 'video-production',
        why: 'Campus tours, faculty introductions and student testimonial videos answer the questions students and parents ask. They’re useful in ads, on YouTube and during counselling.',
      },
      {
        service: 'ugc',
        why: 'Short videos made by current students – a day on campus, a fest, a lab session – feel credible to applicants in a way polished college ads don’t.',
      },
      {
        service: 'website-design',
        why: 'A college website needs clear course pages, approvals, fee structures, placement information and a simple application form. It’s what parents check before they trust anything else, so each programme needs a page that answers their questions without a phone call.',
      },
      {
        service: 'ai-search-visibility',
        why: 'Students increasingly ask ChatGPT and Gemini which colleges to consider for a course. Clear, consistent course and approval information helps AI tools describe the college accurately.',
      },
    ],
    seasonality:
      'Undergraduate demand peaks after PUC and Class 12 results and entrance results, usually from April to July. Postgraduate admissions follow entrance exams such as CAT, KMAT and PGCET, and online degree programmes usually admit in two cycles a year.',
    compliance:
      'ASCI’s guidelines for educational institutions require claims about placements, salaries, rankings and approvals to be truthful and backed by evidence. Recognition from bodies such as UGC, AICTE or NAAC – and UGC entitlement for online degrees – should be stated only where the institution currently holds it.',
    kpis: [
      'Applications',
      'Cost per application',
      'Application-to-enrolment rate',
      'Cost per enrolment',
    ],
    faqs: [
      {
        q: 'When should a college start admission campaigns?',
        a: 'Build awareness in the months before results, then increase spend around results and application deadlines. Students who already know the college convert faster when it matters.',
      },
      {
        q: 'How should we present placement numbers?',
        a: 'Accurately – with the year, the batch size and how many students were placed. ASCI guidelines require placement claims to be backed by evidence, and parents do check.',
      },
      {
        q: 'Can we market online degrees the same way as campus programmes?',
        a: 'Not quite. Online learners are usually working adults who compare flexibility, total fees, EMI options and UGC entitlement, and they respond to search and LinkedIn more than to campus-life content.',
      },
      {
        q: 'How do we turn enquiries into admissions?',
        a: 'Respond quickly, assign each lead to a counsellor, follow up on WhatsApp and invite them to campus. A CRM makes sure no enquiry is forgotten in the busy season.',
      },
    ],
    localAngle:
      'Many students, especially at undergraduate level, prefer a college within commuting distance. Strong local search presence, links with nearby PU colleges and reviews from local students help a college win applicants from its own area.',
  },
  edtech: {
    name: 'edtech companies',
    title: 'EdTech',
    marketingLabel: 'Edtech marketing',
    businessNoun: 'edtech company',
    audience: 'online course platforms, upskilling and certification providers, and LMS companies',
    customers: 'students, working professionals, parents and corporate learning teams',
    intro:
      'Edtech companies sell nationally through apps and web funnels, and their marketing stands or falls on what a paying learner costs against what that learner is worth. Learners compare free content, reviews and outcomes before paying, and schools or companies buying an LMS run a full software evaluation. BMU helps Bengaluru edtech teams build acquisition funnels that bring paying users, not just sign-ups, and the content and nurture that keep them.',
    challenges: [
      {
        title: 'Rising acquisition costs',
        text: 'Paid social and search get more expensive as more platforms chase the same learners. Without sharp creative and a tight funnel, the cost of a paying user climbs past what the course earns.',
      },
      {
        title: 'Free content everywhere',
        text: 'YouTube and free courses cover most topics. Paid programmes have to show clearly what learners get – mentorship, projects, certification, community – that free content doesn’t.',
      },
      {
        title: 'Sign-ups that never pay or finish',
        text: 'Many users register for a free class or trial and never convert, and paying learners who don’t complete a course rarely buy the next one or recommend it.',
      },
      {
        title: 'Outcome claims under scrutiny',
        text: 'Placement, salary-hike and job-guarantee claims are watched closely by regulators and learners alike. Overstating them damages trust quickly.',
      },
    ],
    buyerJourney: [
      {
        stage: 'Goal or trigger',
        text: 'A career switch, an appraisal, an exam or a manager’s request sets the goal.',
      },
      {
        stage: 'Free content & comparison',
        text: 'Learners watch free lessons and webinars, read reviews and compare syllabus, mentors, fees and outcomes across platforms.',
      },
      {
        stage: 'Trial or counselling',
        text: 'They try a free class, a trial week or a call with a counsellor – or, for an LMS, a demo and a pilot.',
      },
      {
        stage: 'Pay, learn & renew',
        text: 'They pay upfront, in EMIs or by subscription; completion and results decide renewals, upsells and referrals.',
      },
    ],
    channels: [
      {
        service: 'performance-marketing',
        why: 'Running Meta, Google, YouTube and affiliate spend against one cost-per-paying-learner target – not cost per lead – is how edtech budgets stay profitable. Cohorts tracked by channel show which sources bring learners who pay, finish and renew.',
      },
      {
        service: 'meta-ads',
        why: 'Instagram and Facebook ads built around a hook – a free masterclass, a career-switch story, a short skill demo – fill webinar and trial funnels across the country. Fresh creative every few weeks keeps costs from creeping up as audiences tire.',
      },
      {
        service: 'google-ads',
        why: 'Search campaigns on course and certification intent – “data analytics course with placement support”, “PMP certification online”, “LMS for schools” – reach learners and buyers comparing options. YouTube campaigns in the same account show the teaching before the click.',
      },
      {
        service: 'marketing-automation',
        why: 'Email and WhatsApp sequences that move a webinar sign-up to a counselling call, and a trial user to a paid plan, do most of the converting in edtech. Lead scoring sends counsellors the learners most likely to buy.',
      },
      {
        service: 'content-marketing',
        why: 'Career guides, skill roadmaps, syllabus breakdowns and free resources answer what learners search before they pay, and build an audience that costs nothing per visit. A newsletter keeps free users close until a programme fits them.',
      },
      {
        service: 'seo',
        why: 'Ranking for course, skill and comparison searches – “how to become a data analyst”, “PMP certification cost in India” – brings learners who are already researching. Technical SEO matters too, because course catalogues and blog libraries grow into thousands of pages.',
      },
      {
        service: 'ugc',
        why: 'Learner-style videos – a working professional explaining why they enrolled, a quick look inside the platform – feel more believable than polished brand ads and refresh ad creative quickly. They suit Reels, Shorts and YouTube pre-roll.',
      },
      {
        service: 'website-design',
        why: 'Course landing pages that state the outcome, syllabus, mentors, fees and EMI options clearly, with one sign-up action, decide how much of the ad budget turns into trials. Each programme and webinar gets its own page so campaigns can be tested cleanly.',
      },
      {
        service: 'linkedin-branding',
        why: 'Upskilling programmes for professionals and LMS sales to companies are won on LinkedIn. Founder and instructor posts, learner stories and content for HR and L&D heads build credibility before the demo.',
      },
      {
        service: 'ui-ux-design',
        why: 'Onboarding, the course player and checkout decide whether a trial user becomes a paying learner. UX work on those flows – fewer steps, clearer progress, simpler payments – improves conversion without adding ad spend.',
      },
    ],
    seasonality:
      'Sign-ups rise in January with new-year goals and around appraisal season, when professionals plan a switch or a promotion. Student-focused products follow exam and admission calendars, and corporate LMS deals often close around budget planning near the financial year-end.',
    compliance:
      'ASCI’s education guidelines require placement, salary and job-guarantee claims to be truthful and backed by evidence. The CCPA’s 2023 guidelines on dark patterns also bar tactics such as false urgency, subscription traps and charges revealed only at checkout.',
    kpis: [
      'Cost per paying learner',
      'Trial-to-paid conversion',
      'Course completion rate',
      'Customer lifetime value',
    ],
    faqs: [
      {
        q: 'Should we optimise ads for leads or for sales?',
        a: 'For sales wherever you can. Optimising for cheap leads fills the funnel with people who never pay; feeding payment and counselling outcomes back into Meta and Google teaches them to find buyers instead.',
      },
      {
        q: 'Do free webinars and masterclasses still work?',
        a: 'They do when the session teaches something useful and leads naturally to the paid programme. The follow-up sequence after the webinar matters as much as attendance.',
      },
      {
        q: 'How do we market an LMS to schools and companies?',
        a: 'Treat it as a B2B sale: LinkedIn, search ads on software terms, case studies and demos, with a CRM tracking each account. Consumer-style ads rarely reach the people who sign the contract.',
      },
      {
        q: 'What can we say about placements and outcomes?',
        a: 'Only what you can prove – with the cohort, the period and how many learners were counted. ASCI’s guidelines require evidence for such claims, and learners increasingly check reviews before believing them.',
      },
    ],
    localAngle:
      'Edtech sells nationally, but offline centres, hybrid bootcamps and campus partnerships still win learners locally through location-targeted ads and Maps listings. Testing a hybrid batch in one neighbourhood before scaling keeps the risk small.',
  },
  'study-abroad-and-immigration': {
    name: 'study abroad and immigration consultants',
    title: 'Study Abroad & Immigration',
    marketingLabel: 'Study abroad marketing',
    businessNoun: 'study abroad consultancy',
    audience: 'overseas education consultants and visa and immigration consultants',
    customers:
      'students planning a degree abroad, their parents, and professionals and families applying for visas',
    intro:
      'Studying or settling abroad is a decision families research for a year or more, and they hand a consultant their documents, their savings and their deadlines. Bengaluru students and professionals compare consultants on reviews, real student stories, transparency about fees and how quickly someone answers on WhatsApp. BMU helps study abroad and visa consultancies earn that trust online and turn enquiries into counselling sessions and signed files.',
    challenges: [
      {
        title: 'Trust in a crowded field',
        text: 'Every consultancy claims high visa success and university tie-ups, and stories of fraud make families cautious. Verifiable reviews, a real office and transparent fees are what set a firm apart.',
      },
      {
        title: 'Leads that shop around',
        text: 'Students enquire with several consultants at once, often only to compare free services. Slow or generic follow-up loses them to whoever counsels first.',
      },
      {
        title: 'Policies that change quickly',
        text: 'Visa rules, caps and work-permit policies in countries such as Canada, the UK, Australia and the US can change with little notice. Content and campaigns have to keep up or they mislead.',
      },
      {
        title: 'A long, multi-step journey',
        text: 'From shortlisting universities to test scores, applications, loans and visas, the process runs for months. Consultants who don’t stay in touch through each step lose the student midway.',
      },
    ],
    buyerJourney: [
      {
        stage: 'Explore countries & courses',
        text: 'Students and parents research countries, courses, costs and work rights, and watch videos from students already abroad.',
      },
      {
        stage: 'Shortlist consultants',
        text: 'They compare consultants on reviews, office visits, fees and how clearly their questions are answered.',
      },
      {
        stage: 'Counselling & applications',
        text: 'They sign up for counselling, take tests such as IELTS or PTE, and apply to a shortlist of universities or for the right visa.',
      },
      {
        stage: 'Visa & departure',
        text: 'Loan, visa filing and pre-departure support decide whether they recommend the consultant to friends and siblings.',
      },
    ],
    channels: [
      {
        service: 'seo',
        why: 'Students search for months before they enquire – “MS in Germany cost”, “UK post-study work visa”, “Canada PR points calculator”. Country, course and visa pages kept current rank for those questions and bring enquiries from people already serious about going.',
      },
      {
        service: 'google-ads',
        why: 'Search ads on consultant and country intent – “study abroad consultants in Bengaluru”, “Australia student visa consultant” – catch students ready to talk. Separate campaigns by country and intake show which destinations bring students who actually sign up.',
      },
      {
        service: 'content-marketing',
        why: 'Country guides, cost breakdowns, scholarship lists, SOP advice and intake calendars answer the questions families ask at every stage. Updated quickly when visa rules change, they make the consultancy a source students trust – and share in their own WhatsApp groups.',
      },
      {
        service: 'meta-ads',
        why: 'Instagram and Facebook ads promoting free counselling sessions, university fairs and webinars reach students and parents months before an intake. Lead forms that ask about country, course, test scores and budget filter out casual browsers.',
      },
      {
        service: 'google-business-profile',
        why: 'Families want to visit a real office before paying fees. A verified profile with photos of the office and team, reviews from students who went abroad and accurate hours is often where a cautious parent decides the firm is genuine.',
      },
      {
        service: 'marketing-automation',
        why: 'A CRM that tracks each student from enquiry to counselling, application, offer letter and visa – with reminders for document deadlines – stops files stalling. It also shows which campaigns bring students who actually fly.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Students and parents expect answers on WhatsApp. Automated replies with country guides, document checklists and counselling-slot bookings, plus broadcast alerts for intakes and university fairs, keep the consultancy in the conversation.',
      },
      {
        service: 'instagram-marketing',
        why: 'Reels with students already abroad – a campus walk, a first part-time job, a city guide – are the most persuasive content a consultancy has. Instagram Lives with counsellors and quick DM replies about intakes turn followers into counselling bookings.',
      },
      {
        service: 'video-production',
        why: 'Counsellor explainers on visa steps, interviews with students who got their visas and recorded webinars answer the questions every family asks. They work on YouTube, in ads and in follow-up messages.',
      },
      {
        service: 'ai-search-visibility',
        why: 'Students now ask ChatGPT and Gemini which consultants to trust or how to apply for a visa. Clear, current guides, consistent listings and genuine reviews help those tools mention the consultancy accurately.',
      },
    ],
    seasonality:
      'Enquiries build roughly a year before the main September intake for the US, UK and Canada, with a second wave for January intakes and Australia’s February and July intakes. Visa and immigration enquiries spike whenever a country announces a policy change.',
    compliance:
      'No consultant can guarantee a visa or an admission – embassies and universities decide – so ads that promise one risk action under ASCI’s code and consumer protection law. Agents recruiting people for jobs abroad also need a registration certificate under the Emigration Act.',
    kpis: [
      'Cost per counselling session',
      'Counselling-to-sign-up rate',
      'Applications filed',
      'Cost per signed student',
    ],
    faqs: [
      {
        q: 'Can we advertise our visa success rate?',
        a: 'Only if it’s accurate and you can show how it’s calculated – the period, the country and the number of applications. Never imply a guaranteed visa; only the embassy decides, and misleading claims can draw complaints under ASCI and consumer law.',
      },
      {
        q: 'Which countries should we promote?',
        a: 'Those where you have strong university relationships and counsellors who know the visa process well, and where demand is steady. Watch policy news closely – a sudden rule change can make a campaign misleading overnight.',
      },
      {
        q: 'How do we stand out from the many consultants in Bengaluru?',
        a: 'Specialise and show proof – a clear focus such as public universities in Germany or college programmes in Canada, transparent fees and real student stories on video. Families trust specific expertise more than a long list of countries.',
      },
      {
        q: 'When should we run campaigns for each intake?',
        a: 'Start about a year before the main September intake, and again several months ahead of January intakes. Students need that long for tests and applications, so late campaigns mostly find students who have already chosen someone.',
      },
    ],
    localAngle:
      'Families prefer a consultant they can visit with documents in hand, so an office within easy reach – with Maps reviews from local students and seminars at nearby colleges and PU colleges – brings steady walk-ins.',
  },
  'fashion-and-apparel': {
    name: 'fashion brands and boutiques',
    title: 'Fashion & Apparel',
    marketingLabel: 'Fashion marketing',
    businessNoun: 'fashion brand',
    audience: 'boutiques, ethnic wear stores, D2C clothing brands and designer labels',
    customers: 'shoppers buying for everyday wear, festivals and weddings, online and in store',
    intro:
      'Fashion is discovered on Instagram first and checked everywhere else. Shoppers in Bengaluru spot a kurta, a saree or a new label in their feed, look for reviews and sizing, then buy on the website, a marketplace or in the boutique. BMU helps fashion brands and boutiques look as good online as their pieces do in person, and turn that attention into orders and store visits.',
    challenges: [
      {
        title: 'Content that ages fast',
        text: 'New collections, drops and festive edits need fresh photos and reels every few weeks. A brand that can’t keep up with content falls out of the feed.',
      },
      {
        title: 'Returns and sizing doubts',
        text: 'Online shoppers hesitate over fit, fabric and colour, and returns eat into margins. Clear sizing, true-to-colour photos and fabric details reduce both.',
      },
      {
        title: 'Marketplace dependence',
        text: 'Myntra, Amazon and Ajio bring volume but set the terms and keep the customer. Brands need their own website and repeat buyers to protect their margins.',
      },
      {
        title: 'Standing out in a crowded feed',
        text: 'Thousands of labels sell similar silhouettes. Without a recognisable look and story, a brand ends up competing on discounts.',
      },
    ],
    buyerJourney: [
      {
        stage: 'Discovery',
        text: 'Shoppers see a piece on Instagram, in a creator’s reel or on a friend, often while planning for a festival or a wedding.',
      },
      {
        stage: 'Browse & check',
        text: 'They browse the collection, check sizing, fabric, price and reviews, and send screenshots to family or friends.',
      },
      {
        stage: 'Online or in store',
        text: 'Everyday pieces are often bought online; bridal and occasion wear usually means a boutique visit or a video call to see the fabric.',
      },
      {
        stage: 'Repeat & refer',
        text: 'New-arrival messages, easy exchanges and a good fit bring them back for the next occasion.',
      },
    ],
    channels: [
      {
        service: 'instagram-marketing',
        why: 'Instagram is where fashion is discovered. Reels of new drops, styling ideas, try-ons and the studio at work, plus collaborations and fast DM replies about sizes and prices, turn followers into buyers.',
      },
      {
        service: 'meta-ads',
        why: 'Catalogue and dynamic ads show the right piece to people who browsed it, while new-collection and festive campaigns reach audiences similar to past buyers. Testing creative by collection keeps acquisition costs in check.',
      },
      {
        service: 'photography',
        why: 'Fashion needs consistent lookbook, on-model and flat-lay photography with colours true to the fabric. The same shoot feeds the website, marketplaces, ads and Instagram, and cuts returns caused by colour surprises.',
      },
      {
        service: 'influencer-marketing',
        why: 'Fashion buyers trust creators whose style they follow. Gifting and paid collaborations with micro creators around a drop or festive edit bring sales and content for ads – with the ad disclosure ASCI requires.',
      },
      {
        service: 'performance-marketing',
        why: 'Running Meta, Google Shopping and marketplace ads against one ROAS and acquisition-cost target shows which channels bring profitable customers once returns are counted. Budgets then move by collection and season.',
      },
      {
        service: 'ugc',
        why: 'Creator-style try-on videos, haul clips and fit checks answer the sizing and fabric questions that hold back online orders. A steady supply keeps ad creative fresh through each season.',
      },
      {
        service: 'website-development',
        why: 'A fast Shopify or custom store with size guides, fabric details, reviews, clear COD rules and easy exchanges keeps the margin and customer data that marketplaces don’t share. WhatsApp and Instagram integrations let shoppers move between chat and checkout.',
      },
      {
        service: 'google-business-profile',
        why: 'Boutiques and ethnic wear stores are searched as “boutique near me”, “saree shop near me” and “designer blouse stitching”. A profile with new-arrival photos, timings and reviews brings shoppers who want to touch the fabric before they buy.',
      },
      {
        service: 'seo',
        why: 'Collection and category pages built around what people search – “Kanjeevaram silk sarees online”, “linen shirts for men”, “Indo-western outfits for engagement” – bring buyers without paying for each click. Style guides catch shoppers planning an occasion.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Most boutiques already sell over WhatsApp, so the chat works as a second shop counter. Catalogue sharing, new-arrival broadcasts, order updates and festive previews for past customers turn one purchase into a habit.',
      },
    ],
    seasonality:
      'Ethnic wear peaks before Ugadi, Varamahalakshmi, Dasara, Diwali and Eid and through the wedding season. Western and D2C labels lean on festive marketplace sales and the end-of-season sales in January and July.',
    kpis: ['ROAS', 'Repeat purchase rate', 'Return rate', 'Store visits and WhatsApp orders'],
    faqs: [
      {
        q: 'Should we sell on our own website or on marketplaces?',
        a: 'Usually both. Marketplaces bring reach and borrowed trust; your own website keeps the margin and the customer data you need for repeat sales. Many brands send new shoppers from ads to the website and let marketplaces handle the rest.',
      },
      {
        q: 'How often should a fashion brand post new content?',
        a: 'Several times a week on Instagram, with reels around every drop. Fashion feeds move quickly, so planning shoots by collection rather than one big shoot a year keeps content fresh.',
      },
      {
        q: 'Do influencers actually sell clothes?',
        a: 'The right ones do – creators whose followers share their style, size range and budget. Track each collaboration with a code or link, and build longer partnerships with those who bring orders.',
      },
      {
        q: 'How can a boutique compete with big online brands?',
        a: 'By being personal – custom fittings, curated pieces, quick WhatsApp service and a recognisable style. Show the owner, the craft and real customers, and make the boutique easy to find on Google Maps.',
      },
    ],
    localAngle:
      'Boutiques and ethnic wear stores draw most buyers from nearby, especially for occasion wear that needs fittings. Strong Maps visibility, Instagram content that shows the store and its owner, and WhatsApp previews for local regulars keep the boutique in mind before every festival.',
  },
  jewellery: {
    name: 'jewellers and jewellery brands',
    title: 'Jewellery',
    marketingLabel: 'Jewellery marketing',
    businessNoun: 'jeweller',
    audience: 'gold and diamond jewellers, silver jewellers and fashion jewellery brands',
    customers:
      'brides and their families, gift buyers, and people buying gold, diamond, silver and fashion jewellery',
    intro:
      'Jewellery is bought on trust, occasion and emotion. A family buying wedding gold wants a jeweller they can rely on, a young professional buying everyday diamonds or silver wants design and transparency, and a fashion jewellery shopper wants something new every season. BMU helps Bengaluru jewellers and jewellery brands show their pieces beautifully and bring buyers to the showroom or the checkout.',
    challenges: [
      {
        title: 'Trust in purity and pricing',
        text: 'Buyers worry about purity, making charges and buyback terms. Clear BIS hallmark and HUID information and transparent pricing build confidence.',
      },
      {
        title: 'Pieces that are hard to photograph',
        text: 'Metal and stones are difficult to shoot well. Poor photos make fine work look cheap online.',
      },
      {
        title: 'Competing with national chains',
        text: 'Large jewellery chains advertise heavily around every festival. Regional and independent jewellers need a sharper story and strong local reach.',
      },
      {
        title: 'Online research, offline purchase',
        text: 'Many buyers research online but buy in the showroom, which makes it hard to see which marketing works without proper tracking.',
      },
    ],
    buyerJourney: [
      {
        stage: 'Occasion',
        text: 'A wedding, festival, anniversary or auspicious gold-buying day sets the need and the timeline.',
      },
      {
        stage: 'Browse designs',
        text: 'Buyers browse Instagram, websites and catalogues, and save designs to show the family.',
      },
      {
        stage: 'Showroom or online',
        text: 'For gold and bridal sets they visit showrooms to see and try pieces; silver and fashion jewellery is often bought online.',
      },
      {
        stage: 'Purchase & return',
        text: 'They buy after comparing designs, making charges and offers – and come back for the next occasion.',
      },
    ],
    channels: [
      {
        service: 'instagram-marketing',
        why: 'A consistent Instagram feed of new designs, bridal looks and styling reels keeps the jeweller in mind until the next occasion comes round. Live sessions showing new collections and quick DM replies with weights and prices bring buyers to the showroom.',
      },
      {
        service: 'meta-ads',
        why: 'Instagram and Facebook ads with close-up reels of pieces reach brides, families and gift buyers ahead of each occasion. Catalogue ads and retargeting bring back people who browsed a collection.',
      },
      {
        service: 'photography',
        why: 'Jewellery photography needs controlled lighting, macro work and careful retouching to show metal and stones accurately. It’s the foundation of every catalogue, listing and ad.',
      },
      {
        service: 'google-business-profile',
        why: 'For a showroom, the Google profile is where buyers check location, timings, reviews and photos before visiting. Showing current collections there brings footfall from nearby searches.',
      },
      {
        service: 'google-ads',
        why: 'Search ads on “gold jewellery showroom near me”, “diamond engagement rings” and bridal searches reach buyers with clear intent. Call and store-visit tracking shows what the ads bring to the showroom.',
      },
      {
        service: 'video-production',
        why: 'Short videos of a piece catching the light, or a bride trying on a set, show sparkle and scale that still photos can’t.',
      },
      {
        service: 'local-seo',
        why: 'Families search “gold jewellery shop near me” or “silver jewellery near me” before deciding where to go. Ranking in the Maps pack across the surrounding area, with consistent details everywhere the showroom is listed, brings walk-ins on festival days when people buy quickly.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Buyers ask for designs and prices on WhatsApp. Catalogue sharing, gold rate updates and festival previews for past customers bring them back for each occasion.',
      },
      {
        service: 'website-development',
        why: 'A website with collections, transparent price breakdowns, certification details and showroom appointment booking builds trust before the visit – or lets silver and fashion jewellery brands sell directly.',
      },
      {
        service: 'influencer-marketing',
        why: 'Fashion and bridal creators styling pieces introduce collections to engaged audiences, particularly for D2C, silver and lightweight jewellery brands.',
      },
    ],
    seasonality:
      'Demand peaks around Akshaya Tritiya, Dhanteras and Diwali and through the wedding season. Varamahalakshmi and other regional festivals bring extra spikes in South India, while Valentine’s Day and anniversaries drive gifting and diamond sales.',
    kpis: [
      'Showroom visits from ads',
      'Cost per enquiry',
      'Online sales or ROAS',
      'Average order value',
    ],
    faqs: [
      {
        q: 'How do we tell whether ads bring people to the showroom?',
        a: 'Use call tracking, WhatsApp click tracking, offer codes and Google’s store-visit data where available. Asking every walk-in how they heard about you, and logging it, fills the gaps.',
      },
      {
        q: 'Is Instagram good for selling gold jewellery?',
        a: 'Instagram works well for showing designs and building desire, even when the purchase happens in store. For lightweight, silver and fashion pieces, it can drive direct online sales too.',
      },
      {
        q: 'Should we show prices online?',
        a: 'For silver and fashion jewellery, yes. For gold, showing the day’s gold rate and clear making charges builds trust, even if final prices are confirmed in store.',
      },
      {
        q: 'When should we start festival campaigns?',
        a: 'A few weeks before the date. Akshaya Tritiya and Dhanteras buyers often plan or pre-book their purchases, so early visibility matters.',
      },
    ],
    localAngle:
      'Families often buy gold from a jeweller near home or one they’ve used for generations. Strong Maps visibility, reviews and festival-time ads in the surrounding area bring new families into the showroom.',
  },
  'beauty-and-cosmetics': {
    name: 'salons and beauty brands',
    title: 'Beauty & Cosmetics',
    marketingLabel: 'Beauty marketing',
    businessNoun: 'beauty business',
    audience: 'salons, cosmetic and skincare brands, and makeup academies',
    customers: 'salon clients, beauty shoppers and aspiring makeup artists',
    intro:
      'Beauty is bought on trust and on looks – a salon’s real work, a serum’s reviews, an academy’s student portfolios. In Bengaluru, salon clients find someone nearby on Google or Instagram, product buyers follow creators and compare ingredients, and future makeup artists look at what past students now do. BMU helps salons, beauty brands and academies earn that trust online and turn it into bookings, orders and enrolments.',
    challenges: [
      {
        title: 'Clients follow stylists',
        text: 'When a stylist or makeup artist moves on, regular clients often follow. The salon’s own brand has to stand on its own.',
      },
      {
        title: 'A crowded, look-alike category',
        text: 'Many brands sell similar formulations with similar claims, and new salons open on every busy street. Without a distinct identity and story, a business competes only on discounts.',
      },
      {
        title: 'Claims that must be backed up',
        text: 'Ingredient and efficacy claims are regulated and closely watched. Overpromising damages trust and invites complaints.',
      },
      {
        title: 'Winning the second visit or order',
        text: 'The first booking or order is expensive to win. Profit comes from clients who rebook every few weeks and shoppers who reorder, which needs its own plan.',
      },
    ],
    buyerJourney: [
      {
        stage: 'Need or discovery',
        text: 'An occasion, a skin concern or a creator’s video starts the search – for a salon, a product or a course.',
      },
      {
        stage: 'Check real results',
        text: 'They look at real work on Instagram, read Google and marketplace reviews, and compare ingredients, prices or course content.',
      },
      {
        stage: 'Book, buy or enrol',
        text: 'They book a salon slot on WhatsApp or online, buy on the brand site, Nykaa or a quick-commerce app, or sign up for an academy batch.',
      },
      {
        stage: 'Return & refer',
        text: 'A good result, a timely reminder and a reorder nudge bring them back; a great one brings their friends.',
      },
    ],
    channels: [
      {
        service: 'instagram-marketing',
        why: 'Instagram is the portfolio for salons and academies and the shop window for beauty brands. Reels of cuts, colour and bridal looks, product textures and student work – with collaborations and quick DM replies – turn viewers into bookings and orders.',
      },
      {
        service: 'meta-ads',
        why: 'For brands, Instagram and Facebook campaigns that test hooks, creators and offers quickly – and retarget cart abandoners – build a steady flow of first orders. For salons and academies, location-targeted ads fill weekday slots and new batches.',
      },
      {
        service: 'google-business-profile',
        why: 'Clients choose salons from the Google profile – services, prices, photos of real work and reviews. Keeping it current, with new work photos every week, keeps the salon or academy visible in nearby searches.',
      },
      {
        service: 'influencer-marketing',
        why: 'Beauty buyers trust creators who share their skin or hair concerns, and salon clients trust local creators who show the result. Micro creators bring credibility and a library of content for ads.',
      },
      {
        service: 'ugc',
        why: 'Creator-style videos of real people applying a product, or a client reacting to a new cut, are what keep beauty ads working. A steady supply of fresh UGC holds off ad fatigue.',
      },
      {
        service: 'local-seo',
        why: 'Ranking for “salon near me”, “bridal makeup artist” and “makeup course near me” in the surrounding area brings clients and students who are ready to book.',
      },
      {
        service: 'performance-marketing',
        why: 'Managing Meta, Google and marketplace ads against one ROAS and acquisition-cost target shows which channels bring profitable customers, not just cheap clicks. It’s how a skincare D2C brand knows when to scale spend.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Appointment reminders and “time for your next visit” messages bring salon clients back on schedule, and reorder reminders and routine tips do the same for product buyers. Both cut the cost of winning customers twice.',
      },
      {
        service: 'packaging-design',
        why: 'In beauty, the pack is part of the product. It has to stand out on a shelf and in a thumbnail, carry the required claims and ingredient information, and feel worth photographing.',
      },
      {
        service: 'seo',
        why: 'Content on ingredients, routines and concerns – “niacinamide for oily skin”, “hair fall in monsoon” – ranks for what beauty buyers search, and service pages for keratin, balayage or bridal packages do the same for salons. Both bring traffic that doesn’t depend on ad spend.',
      },
    ],
    seasonality:
      'Salon and bridal bookings rise before Diwali, Dasara, Ugadi and Christmas and through the wedding season, when brides book trials weeks ahead. Product sales follow festive and marketplace sale events, and the mix shifts with the weather – sunscreen in summer, frizz and hair-fall care in the monsoon, moisturisers in winter.',
    compliance:
      'Cosmetics can’t be advertised as treating or curing a medical condition, and ASCI requires efficacy claims to be substantiated. Influencer posts must carry a clear ad disclosure under ASCI’s influencer guidelines.',
    kpis: [
      'Bookings from Google and Instagram',
      'Repeat visit or reorder rate',
      'ROAS',
      'Customer acquisition cost',
    ],
    faqs: [
      {
        q: 'How do we stop losing clients when a stylist leaves?',
        a: 'Build loyalty to the salon as well as the stylist – consistent service standards, a recognisable brand and regular contact on WhatsApp. Featuring the whole team in your content helps clients trust more than one person.',
      },
      {
        q: 'Should we sell on our own website or on Nykaa and Amazon?',
        a: 'Usually both. Marketplaces bring volume and borrowed trust; your own website keeps margins and customer data for repeat marketing. Many brands send ad traffic to the website and use marketplaces for reach.',
      },
      {
        q: 'What claims can we make about our products?',
        a: 'Only claims you can substantiate – through testing, ingredient data or studies. Avoid medical claims such as curing acne or stopping hair loss, and make sure creators don’t make them on your behalf.',
      },
      {
        q: 'How should a makeup academy market its courses?',
        a: 'Show student work and what graduates go on to do, with their consent – bridal portfolios, freelance bookings, salon jobs – rather than promising income. Instagram reels of classes, demo workshops and quick WhatsApp follow-up after enquiries fill most batches.',
      },
    ],
    localAngle:
      'Most salon clients come from close by and visit every few weeks, so owning the Maps results nearby, collecting reviews steadily and staying in touch on WhatsApp makes the salon a neighbourhood habit. Beauty brands use the same area targeting for pop-ups and salon partnerships.',
  },
  'restaurants-and-food': {
    name: 'restaurants and food businesses',
    title: 'Restaurants & Food',
    marketingLabel: 'Restaurant marketing',
    businessNoun: 'restaurant',
    audience: 'restaurants, cafés, cloud kitchens, bakeries and caterers',
    customers: 'diners, families, office groups, delivery customers and people planning events',
    intro:
      'Diners decide where to eat in minutes – a Google search, a scroll through Instagram, a look at Swiggy or Zomato ratings. Cafés and bakeries win on habit, cloud kitchens on delivery-app visibility, and caterers on trust for one big order. BMU handles the search, social and content work that fills tables, grows direct orders and books events for Bengaluru food businesses.',
    challenges: [
      {
        title: 'Aggregator commissions',
        text: 'Swiggy and Zomato bring orders but take a commission on each one and own the customer relationship. Food businesses need ways to build direct orders and repeat visits.',
      },
      {
        title: 'A crowded neighbourhood',
        text: 'Popular areas have dozens of places to eat within walking distance. Without strong Maps presence and fresh content, a new restaurant or café is easy to miss.',
      },
      {
        title: 'Ratings that swing quickly',
        text: 'A few poor reviews about service or a late delivery can pull a rating down and hurt orders for weeks.',
      },
      {
        title: 'Weekday and off-peak slumps',
        text: 'Weekends often fill on their own; weekday lunches, café afternoons and early evenings don’t. Marketing has to drive traffic for specific times.',
      },
    ],
    buyerJourney: [
      {
        stage: 'Craving or occasion',
        text: 'Someone decides to eat out, order in or book food for an event – a date, a family dinner, a team lunch, a birthday – and opens Google, Instagram or a delivery app.',
      },
      {
        stage: 'Browse nearby options',
        text: 'They scan Maps results, photos, menus, ratings and recent reels for places close by.',
      },
      {
        stage: 'Check & choose',
        text: 'They weigh prices, reviews, ambience and availability, then book a table, place an order or ask for a quote.',
      },
      {
        stage: 'Visit & come back',
        text: 'A good meal, smooth service and a reason to return – a new dish, an event, a WhatsApp message – turn them into a regular.',
      },
    ],
    channels: [
      {
        service: 'google-business-profile',
        why: 'Diners pick restaurants and cafés from the Google profile – photos, menu, price range, opening hours and reviews. Keeping it complete, with fresh photos and replies to reviews, is one of the simplest ways to fill tables.',
      },
      {
        service: 'local-seo',
        why: 'Ranking in Maps for “restaurants near me” and specific cravings – biryani, rooftop dinner, South Indian breakfast, a work-friendly café, a custom birthday cake – puts the business in front of people deciding right now.',
      },
      {
        service: 'instagram-marketing',
        why: 'Instagram is where Bengaluru discovers new places to eat. Reels of signature dishes, the kitchen and the room on a busy night, plus collaborations and quick DM replies about reservations, keep the business in feeds and give people something to share.',
      },
      {
        service: 'influencer-marketing',
        why: 'Bengaluru’s food creators can fill a new restaurant’s first weekends. Working with local food bloggers whose followers live nearby turns a launch or a new menu into visits.',
      },
      {
        service: 'photography',
        why: 'Professional food and ambience photography lifts every listing – Google, Swiggy, Zomato, the menu and ads. Appetising dish photos give delivery customers a reason to pick you from a long list.',
      },
      {
        service: 'meta-ads',
        why: 'Location-targeted Instagram and Facebook ads promote weekday offers, events and new menus to people within a few kilometres. They’re useful for filling the slots that don’t fill themselves.',
      },
      {
        service: 'whatsapp-automation',
        why: 'A WhatsApp list of regulars is a direct channel no aggregator controls. Broadcasts about new dishes, weekend events, festive cake pre-orders and birthday offers bring people back without paying a commission.',
      },
      {
        service: 'google-ads',
        why: 'Search ads earn their keep on higher-value bookings – private dining, birthday parties, corporate lunches and catering – where one enquiry is worth many regular covers.',
      },
      {
        service: 'website-development',
        why: 'A simple website with the menu, location, table booking and direct ordering lets regulars order without aggregator mark-ups. It also helps the business rank for its own name and gives caterers a page for menus and quotes.',
      },
      {
        service: 'brand-identity',
        why: 'A café’s or cloud kitchen’s name, logo, colours, cups and packaging are what people photograph, share and recognise on a delivery app. For a cloud kitchen with no shopfront, the brand is the only storefront it has.',
      },
    ],
    seasonality:
      'Weekends are the steady peak, with spikes around Christmas and New Year’s Eve and during the IPL for places with screens. Ramzan evenings drive iftar and biryani demand, rainy monsoon evenings push delivery orders up, bakeries peak at Christmas and caterers through the wedding season and festivals.',
    kpis: [
      'Calls and directions from Google Maps',
      'Table bookings',
      'Direct orders',
      'Repeat customer rate',
    ],
    faqs: [
      {
        q: 'How do we reduce our dependence on Swiggy and Zomato?',
        a: 'Keep the aggregators for discovery, but build a direct channel alongside them – a website with ordering, a WhatsApp list of regulars and in-store prompts to order direct next time. Each direct order keeps both the commission and the customer.',
      },
      {
        q: 'Do food bloggers and influencers actually bring customers?',
        a: 'They can, when they’re local and their audience lives nearby. Look at where their followers are and how they engage, not just follower counts, and give them something specific to feature.',
      },
      {
        q: 'How often should a restaurant or café post on Instagram?',
        a: 'Consistency matters more than volume – a few good posts and reels a week, with stories on busy days. Real dishes and real people do better than stock-style graphics.',
      },
      {
        q: 'How should we handle bad reviews on Google and Zomato?',
        a: 'Reply quickly and politely, acknowledge the problem and offer to make it right offline. Then fix the cause – a slow kitchen, a cold delivery – because patterns in reviews matter more than any single one.',
      },
    ],
    localAngle:
      'Most diners eat within a few kilometres of home or work, so a restaurant or café wins its neighbourhood by owning the Maps results for its cuisine, staying active on Instagram and keeping its regulars on a WhatsApp list.',
  },
  'hospitality-and-hotels': {
    name: 'hotels and resorts',
    title: 'Hospitality & Hotels',
    marketingLabel: 'Hospitality marketing',
    businessNoun: 'hotel',
    audience: 'business and boutique hotels, resorts, homestays and banquet halls',
    customers:
      'business travellers, families, weekend travellers, wedding parties and corporate event planners',
    intro:
      'Guests compare photos, reviews and prices across several tabs before they book, and every booking that comes through an OTA costs a commission. City hotels compete for business travellers and event guests, resorts and homestays within driving distance of Bengaluru sell weekend escapes, and banquet halls compete for weddings and corporate events. BMU helps hospitality businesses win more of those comparisons and take more bookings directly.',
    challenges: [
      {
        title: 'Commission-heavy OTA bookings',
        text: 'MakeMyTrip, Booking.com and other OTAs bring guests but take a commission on every booking and keep the guest relationship. Moving even part of that to direct bookings makes a real difference to margins.',
      },
      {
        title: 'Weekday and weekend imbalance',
        text: 'Business hotels fill on weekdays and empty at weekends, while resorts and homestays see the opposite. Marketing has to target the gaps.',
      },
      {
        title: 'Selling an experience, not a room',
        text: 'Guests choose a resort for the setting, activities and food, and a banquet hall for how the room looks on the night. Static room photos convey none of that.',
      },
      {
        title: 'Reviews on many platforms',
        text: 'Reviews sit on Google, OTAs and travel sites. Monitoring and replying to all of them takes a system.',
      },
    ],
    buyerJourney: [
      {
        stage: 'Inspiration or need',
        text: 'A business trip, a wedding, a long weekend or a reel of a resort starts the search.',
      },
      {
        stage: 'Search & compare',
        text: 'Guests compare properties on Google, Google Hotels, OTAs and Instagram by location, setting, amenities and price; event planners compare halls by capacity and catering.',
      },
      {
        stage: 'Enquire & book',
        text: 'They check availability and packages – often over WhatsApp or a call – then book directly or through an OTA.',
      },
      {
        stage: 'Stay & return',
        text: 'The stay or event itself, the follow-up and direct-booking perks decide whether they come back and book direct next time.',
      },
    ],
    channels: [
      {
        service: 'google-business-profile',
        why: 'A hotel’s Google profile feeds Google Maps and Google Hotels, where many guests start. Accurate amenities, current photos, booking links, banquet capacity and replies to reviews all help guests and planners choose you.',
      },
      {
        service: 'google-ads',
        why: 'Search campaigns on the property’s own name stop OTAs capturing guests who already want to stay with you, and campaigns on “resorts near Bangalore” or “banquet hall for 300 guests” catch people ready to book. Date-specific campaigns around city events help fill gaps.',
      },
      {
        service: 'website-development',
        why: 'A fast website with a direct booking engine, room and package details, clear rates and an event enquiry form gives guests a reason to book direct. It’s the foundation for cutting OTA commissions.',
      },
      {
        service: 'instagram-marketing',
        why: 'Instagram is where people pick their next getaway or venue. Reels of mornings at the resort, the food, rooms at dusk and a decorated hall on a wedding night sell the experience before anyone checks the price, and DMs often become bookings.',
      },
      {
        service: 'photography',
        why: 'Professional room, lobby, restaurant and venue photography lifts the property on every OTA, on Google and on its own site – wherever guests compare listings side by side.',
      },
      {
        service: 'drone-shoots',
        why: 'Aerial footage of the property – the pool against the hills, the plantation, the lawn set up for a reception – is what stops someone scrolling. It becomes the hero visual for ads, the website and OTA listings.',
      },
      {
        service: 'seo',
        why: 'Ranking for searches like “hotels near Manyata Tech Park”, “hotels near Bengaluru airport” or “weekend getaways from Bengaluru” brings guests looking for exactly what the property offers. Pages for nearby venues, activities and occasions catch travellers with a specific reason to stay.',
      },
      {
        service: 'meta-ads',
        why: 'Instagram and Facebook ads reach Bengaluru families and couples planning a weekend away, and couples planning a wedding. Midweek offers, festive packages, banquet deals and offsite packages can each go to the audience most likely to book them.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Guests ask about availability and packages on WhatsApp. Quick automated replies with rates and photos, then pre-arrival directions and post-stay review requests, keep every step smooth – and past guests can later receive direct-booking offers.',
      },
      {
        service: 'influencer-marketing',
        why: 'Travel creators show a resort or homestay through a guest’s eyes. Hosting creators whose followers take weekend trips from the city brings both content and bookings.',
      },
    ],
    seasonality:
      'Business travel is steady on weekdays outside holiday periods, while leisure, wedding and banquet demand rises from October to February. Long weekends, the Dasara break, Christmas–New Year and summer holidays fill resorts and homestays, and the monsoon draws a different crowd to hill and forest properties.',
    kpis: ['Direct booking share', 'Occupancy rate', 'Average daily rate', 'Event enquiries'],
    faqs: [
      {
        q: 'How can a hotel get more direct bookings?',
        a: 'Make booking direct easy and worth it – a fast booking engine, a clear rate or perk advantage for direct guests, and search ads on your own name. Then use WhatsApp and email to bring past guests back directly.',
      },
      {
        q: 'Should we stop using OTAs?',
        a: 'No – OTAs bring guests who wouldn’t find you otherwise. The aim is to balance them with direct bookings, especially for repeat guests and corporate clients.',
      },
      {
        q: 'Why bid on our own hotel name in Google Ads?',
        a: 'Because OTAs often bid on it too. If you don’t appear at the head of the results, a guest searching for your hotel can end up booking it through an OTA, and you pay commission on a guest you’d already won.',
      },
      {
        q: 'How do we fill weekdays at a resort?',
        a: 'Target the people who can travel midweek – corporate offsites, retired couples, remote workers – with packages built for them. Promote these separately instead of running the same weekend ads all week.',
      },
    ],
    localAngle:
      'Most hotel guests want to stay near something specific – a tech park, a hospital, a wedding venue, the airport. Pages and ads built around those nearby landmarks catch guests whose decision is mostly about location.',
  },
  'travel-and-tourism': {
    name: 'travel agencies and tour operators',
    title: 'Travel & Tourism',
    marketingLabel: 'Travel marketing',
    businessNoun: 'travel agency',
    audience: 'travel agents, tour operators and holiday package companies',
    customers: 'families, honeymooners, group travellers, pilgrims and corporate travel teams',
    intro:
      'Holidays are planned for weeks and booked on trust. Travellers watch destination reels, compare itineraries and ask friends who went last year before paying a large advance. BMU helps Bengaluru travel agencies and tour operators turn that inspiration into enquiries and those enquiries into confirmed trips.',
    challenges: [
      {
        title: 'Competing with OTAs on price',
        text: 'Online travel platforms show low prices instantly. Agencies need to sell what they do better – planning, local knowledge and support during the trip.',
      },
      {
        title: 'Enquiries that never convert',
        text: 'Many people request quotes from several agencies just to compare. Without fast, personal follow-up, they go quiet.',
      },
      {
        title: 'Trust with large advance payments',
        text: 'Customers worry about paying a big advance to an agency they’ve only met online. Reviews, a real office and visible past trips matter.',
      },
      {
        title: 'Seasonal cash flow',
        text: 'Demand bunches around school holidays and festivals. Agencies need to build demand early and find products for the off-season.',
      },
    ],
    buyerJourney: [
      {
        stage: 'Inspiration',
        text: 'A reel, a friend’s trip or an upcoming holiday sparks the idea of a destination.',
      },
      {
        stage: 'Research & enquiry',
        text: 'They search for packages, compare itineraries and send enquiries to a few agencies – often on WhatsApp.',
      },
      {
        stage: 'Quote comparison',
        text: 'They compare inclusions, hotels and price, and notice how quickly and clearly each agency responds.',
      },
      {
        stage: 'Booking & trip',
        text: 'They pay an advance, then the balance; how the trip goes decides reviews and repeat bookings.',
      },
    ],
    channels: [
      {
        service: 'meta-ads',
        why: 'Instagram and Facebook ads with destination reels reach people while they’re still dreaming about a trip. Lead forms for specific packages – a Kashmir family tour, a Bali honeymoon – bring enquiries with a clear destination and budget.',
      },
      {
        service: 'google-ads',
        why: 'Search ads on package searches – “Kerala tour package from Bangalore”, “Europe group tour” – catch travellers ready to compare quotes. Separate campaigns by destination show which trips are actually profitable.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Travellers enquire and decide on WhatsApp. Instant replies that capture dates, group size and budget, itineraries sent within minutes, scheduled follow-ups and broadcast lists for new departures keep the agency in the conversation.',
      },
      {
        service: 'instagram-marketing',
        why: 'Regular reels of destinations, past group trips and customer photos build the trust and desire that make people enquire. Instagram is often where a traveller decides an agency is real, so DMs need answering as quickly as calls.',
      },
      {
        service: 'seo',
        why: 'Package and itinerary pages built around how people search – “Char Dham yatra package from Bangalore”, “7-day Vietnam itinerary” – rank for ready-to-compare searches. Destination pages catch travellers months before they book, without paying for every click.',
      },
      {
        service: 'content-marketing',
        why: 'Destination guides, visa checklists, packing lists and when-to-visit pieces, plus a newsletter of upcoming group departures, keep past and future travellers coming back between trips. They also give the sales team something useful to send instead of another price reminder.',
      },
      {
        service: 'ugc',
        why: 'Short videos from real travellers on your tours – the hotel, the view, the guide – feel more believable than stock destination footage and make strong ad creative.',
      },
      {
        service: 'marketing-automation',
        why: 'A CRM that tracks every enquiry, quote and follow-up – and reminds past travellers when it’s time to plan the next holiday – turns one-off customers into repeat ones.',
      },
      {
        service: 'google-business-profile',
        why: 'Many travellers want to visit an agency before paying a large advance. A verified profile with the office address, photos of past group trips, accurate hours and reviews from returning travellers settles the question of whether the agency is genuine.',
      },
      {
        service: 'website-design',
        why: 'A website with package pages, clear inclusions and exclusions, reviews and a short enquiry form gives ad traffic somewhere credible to land. Pages laid out by destination and trip type make the agency look established and let each campaign land on the right trip.',
      },
    ],
    seasonality:
      'Bookings build ahead of the summer holidays, the Dasara and Diwali breaks and Christmas–New Year. Honeymoon demand follows the wedding season, and pilgrimage tours follow the religious calendar.',
    kpis: [
      'Cost per enquiry',
      'Enquiry-to-booking rate',
      'Revenue per booking',
      'Repeat travellers',
    ],
    faqs: [
      {
        q: 'How can a travel agency compete with MakeMyTrip and other OTAs?',
        a: 'Don’t compete on price alone. Sell planning, local knowledge, curated group departures and support during the trip – and prove it with reviews and real traveller content.',
      },
      {
        q: 'Should we advertise on Google or Instagram?',
        a: 'Instagram builds desire for a destination; Google catches people already comparing packages. Most agencies use Instagram for reach and Google for ready-to-book searches.',
      },
      {
        q: 'How fast should we reply to enquiries?',
        a: 'As fast as you can – travellers usually contact several agencies, and the first clear, personal reply often wins. Automated WhatsApp replies cover the gaps when the team is busy.',
      },
      {
        q: 'When should we start promoting a holiday season?',
        a: 'Several weeks to a few months ahead, depending on the trip. International and summer holidays are planned earlier than weekend or domestic getaways.',
      },
    ],
    localAngle:
      'Many travellers still prefer an agency they can visit before paying a large advance. A well-reviewed Google profile, a real office address and trips promoted in local community and apartment groups build that trust nearby.',
  },
} satisfies Partial<Record<IndustrySlug, IndustryProfile>>;
