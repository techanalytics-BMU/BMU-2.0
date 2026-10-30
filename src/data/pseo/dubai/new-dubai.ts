import type { DubaiAreaProfile } from '@/types/pseo';
import type { DubaiAreaSlug } from '../abroad';

// Downtown & Sheikh Zayed Road, New Dubai and Outer Dubai areas
export const newDubaiAreas = {
  'downtown-dubai': {
    coords: [25.197, 55.274],
    character:
      'Downtown Dubai is the district built around Burj Khalifa, The Dubai Mall and the Dubai Fountain lake, ringed by apartment towers and hotels. Residents are mostly professionals and families in high-rise flats, while the daily crowd is tourists, shoppers and visitors heading to Dubai Opera or the cafés on the Boulevard. Shopfronts here sit beside some of the city’s biggest retail and dining names, so a small brand has to work hard to be noticed.',
    businesses: [
      'luxury and fashion retailers',
      'restaurants and cafés along the Boulevard',
      'hotels and serviced apartments',
      'real estate brokerages and holiday-home operators',
      'beauty salons and aesthetic clinics',
      'tour and attraction operators',
    ],
    landmarks: [
      'Burj Khalifa',
      'The Dubai Mall',
      'Dubai Opera',
      'Burj Khalifa/Dubai Mall metro station',
    ],
    nearby: ['business-bay', 'difc', 'al-satwa', 'jumeirah'],
    competition: 'high',
    searchHabits:
      'Visitors and residents search in English on Google Maps for restaurants, salons and things to do “near Dubai Mall”, then book tables and treatments through Instagram and WhatsApp. Searches for Downtown apartments and short stays run through Bayut, Property Finder and holiday-let platforms.',
    industries: [
      'real-estate',
      'hospitality-and-hotels',
      'restaurants-and-food',
      'retail',
      'beauty-and-cosmetics',
    ],
  },
  'business-bay': {
    coords: [25.186, 55.267],
    character:
      'Business Bay is a dense grid of office and residential towers on both banks of the canal between Sheikh Zayed Road and Al Khail Road. Its office floors are full of small and mid-sized companies – general traders, consultancies, agencies and company-setup providers – while its apartments are rented by young professionals who walk to work along Marasi Drive.',
    businesses: [
      'company formation and PRO service providers',
      'general trading companies',
      'marketing and management consultancies',
      'real estate developers and brokerages',
      'interior fit-out contractors',
      'canal-side cafés and restaurants',
      'hotels and serviced apartments',
    ],
    landmarks: [
      'Bay Avenue',
      'Marasi Drive',
      'JW Marriott Marquis Hotel Dubai',
      'Dubai Water Canal',
    ],
    nearby: ['downtown-dubai', 'difc', 'al-quoz', 'oud-metha'],
    competition: 'high',
    searchHabits:
      'Searches here are mostly business-to-business and in English – “company setup in Business Bay”, auditors, fit-out firms, printers – checked on Google and LinkedIn before a call or a WhatsApp message. People living in the canal-side towers rely on Talabat and Deliveroo for most meals and groceries.',
    industries: [
      'real-estate',
      'coworking-and-office-space',
      'accounting-and-ca-firms',
      'interior-design',
      'hospitality-and-hotels',
    ],
  },
  difc: {
    coords: [25.212, 55.281],
    character:
      'The Dubai International Financial Centre is a financial free zone beside Sheikh Zayed Road with its own courts and a legal system based on English common law, laid out around The Gate building. Its towers hold banks, wealth and asset managers, law firms, family offices and fintech start-ups, and Gate Village adds art galleries and fine-dining restaurants that fill up after office hours.',
    businesses: [
      'banks and wealth managers',
      'law firms and legal consultancies',
      'family offices and asset managers',
      'fintech start-ups',
      'fine-dining restaurants and lounges',
      'art galleries',
      'executive search and HR consultancies',
    ],
    landmarks: ['The Gate', 'Gate Village', 'ICD Brookfield Place', 'Jumeirah Emirates Towers'],
    nearby: ['downtown-dubai', 'business-bay', 'al-satwa', 'jumeirah'],
    competition: 'high',
    searchHabits:
      'Clients here research slowly and in English – on Google, LinkedIn and financial and legal directories – comparing a firm’s website, its partners’ profiles and published insight before asking for a meeting. Restaurant and lounge bookings work the other way, driven by Instagram, Google Maps reviews and table-booking apps.',
    industries: [
      'banking-and-nbfc',
      'fintech',
      'legal-services',
      'insurance',
      'restaurants-and-food',
    ],
    freeZone: 'DIFC',
  },
  'al-quoz': {
    coords: [25.143, 55.232],
    character:
      'Al Quoz is a long strip of warehouses, workshops and low-rise industrial units between Sheikh Zayed Road and Al Khail Road, with labour accommodation and older villa blocks in its residential section. Many warehouses have been turned into art galleries, photo and film studios, fitness boxes and design showrooms, especially around Alserkal Avenue, so garages and creative studios often share the same street.',
    businesses: [
      'car repair garages and auto workshops',
      'furniture makers and joinery workshops',
      'art galleries and creative studios',
      'printing and signage companies',
      'gyms and fitness studios',
      'building-material and hardware suppliers',
      'photo and video studios',
    ],
    landmarks: ['Alserkal Avenue', 'Times Square Center', 'Al Khail Road'],
    nearby: ['al-barsha', 'dubai-hills-estate', 'business-bay', 'jumeirah'],
    competition: 'medium',
    searchHabits:
      'Customers usually find Al Quoz businesses by searching Google Maps for a specific job – “car AC repair Al Quoz”, “furniture workshop Dubai”, “photo studio rental” – then calling or asking for a WhatsApp location pin, because warehouse unit numbers are hard to find. Galleries and studios depend on Instagram and event listings for footfall.',
    industries: [
      'automotive',
      'furniture-and-home-decor',
      'photography-and-creative',
      'industrial-and-b2b-supplies',
      'fitness-and-sports',
    ],
  },
  'dubai-marina': {
    coords: [25.08, 55.14],
    character:
      'Dubai Marina is a waterfront neighbourhood of residential towers built around a man-made canal, between Sheikh Zayed Road and the JBR beachfront. Young professionals, renting families and a steady flow of tourists live side by side here, and the Marina Walk promenade is lined with restaurants, yacht-charter desks and shisha cafés.',
    businesses: [
      'yacht charter and water-sports operators',
      'restaurants, bars and beach clubs',
      'holiday-home and short-let operators',
      'real estate brokerages',
      'gyms, yoga and pilates studios',
      'salons and spas',
      'pet groomers and vets',
    ],
    landmarks: ['Dubai Marina Mall', 'Marina Walk', 'Cayan Tower', 'The Walk at JBR'],
    nearby: ['jlt', 'palm-jumeirah', 'dubai-internet-city', 'jebel-ali'],
    competition: 'high',
    searchHabits:
      'Searches are mobile and “near me” – brunch, dentists, gyms, dog groomers – and people check Google Maps star ratings and recent Instagram posts before booking. Tourists add searches for yacht hire and boat tours in English, Russian and other languages, often confirmed over WhatsApp.',
    industries: [
      'real-estate',
      'hospitality-and-hotels',
      'restaurants-and-food',
      'travel-and-tourism',
      'fitness-and-sports',
    ],
  },
  jlt: {
    coords: [25.069, 55.142],
    character:
      'Jumeirah Lakes Towers is a cluster of mixed-use towers set around artificial lakes, across Sheikh Zayed Road from Dubai Marina, and is run by DMCC, the free zone headquartered in Almas Tower. Its office floors are home to commodity and diamond traders, crypto and tech firms, shipping brokers and many small trading licences, while tower podiums hold cafés, groceries, nurseries and clinics for the residents above.',
    businesses: [
      'commodity, diamond and precious-metal traders',
      'crypto and blockchain companies',
      'shipping and freight brokers',
      'business-setup and accounting firms',
      'clinics and pharmacies in tower podiums',
      'cafés and casual restaurants',
    ],
    landmarks: ['Almas Tower', 'DMCC metro station', 'JLT Park', 'Uptown Tower'],
    nearby: ['dubai-marina', 'dubai-internet-city', 'jumeirah-village-circle', 'jebel-ali'],
    competition: 'high',
    searchHabits:
      'Much of JLT’s business traffic is B2B and international – firms look up trading partners, auditors and setup consultants on Google and LinkedIn in English, and many enquiries come from outside the UAE. Residents search Google Maps by cluster letter (“café in Cluster D”) and order quick deliveries through Talabat and Noon.',
    industries: [
      'fintech',
      'logistics-and-transport',
      'jewellery',
      'accounting-and-ca-firms',
      'coworking-and-office-space',
    ],
    freeZone: 'DMCC',
  },
  'al-barsha': {
    coords: [25.11, 55.198],
    character:
      'Al Barsha is a large residential area behind Mall of the Emirates, with mid-rise apartment blocks near Sheikh Zayed Road and villas further inland in Al Barsha 2 and 3. Its families, hotel staff and office workers support a dense mix of clinics, nurseries, supermarkets and Lebanese, Filipino and South Asian restaurants, while the hotels around the mall bring in shoppers and tourists.',
    businesses: [
      'family clinics and dental practices',
      'nurseries and private schools',
      'mid-range hotels',
      'supermarkets and grocery stores',
      'restaurants and cafeterias',
      'car rental companies',
      'salons and barbershops',
    ],
    landmarks: [
      'Mall of the Emirates',
      'Mall of the Emirates metro station',
      'Al Barsha Pond Park',
    ],
    nearby: ['al-quoz', 'dubai-internet-city', 'dubai-hills-estate', 'jumeirah-village-circle'],
    competition: 'high',
    searchHabits:
      'Residents search Google Maps for everyday services close to home – paediatricians, nurseries, laundries, AC repair – and trust parent groups, WhatsApp recommendations and Google reviews. Searches come in English and Arabic, with Hindi, Urdu, Malayalam and Tagalog common among the area’s South Asian and Filipino residents.',
    industries: [
      'clinics-and-doctors',
      'education-and-schools',
      'restaurants-and-food',
      'hospitality-and-hotels',
      'retail',
    ],
  },
  'dubai-internet-city': {
    coords: [25.095, 55.159],
    character:
      'Dubai Internet City is a technology free zone of low and mid-rise office buildings beside Sheikh Zayed Road, run by TECOM Group alongside neighbouring Dubai Media City and Dubai Knowledge Park. Regional offices of global tech companies sit next to software houses, media firms and start-ups in the in5 incubator, and the daytime population is almost entirely office staff.',
    businesses: [
      'software and IT services companies',
      'SaaS and tech start-ups',
      'media, advertising and production houses',
      'IT hardware and networking resellers',
      'training and professional education providers',
      'office cafés and quick-service restaurants',
    ],
    landmarks: ['in5 Tech', 'Dubai Media City', 'Dubai Knowledge Park', 'Sheikh Zayed Road'],
    nearby: ['dubai-marina', 'palm-jumeirah', 'al-barsha', 'jlt'],
    competition: 'medium',
    searchHabits:
      'Decision-makers here buy after research, not walk-ins: they search Google and LinkedIn in English for vendors, read case studies and reviews, and expect a fast reply to a demo or proposal request. Hiring drives, events and product launches are promoted mostly on LinkedIn.',
    industries: [
      'it-services-and-software',
      'saas-and-tech-startups',
      'media-and-entertainment',
      'edtech',
      'telecom-and-internet',
    ],
    freeZone: 'Dubai Internet City (TECOM)',
  },
  'palm-jumeirah': {
    coords: [25.112, 55.139],
    character:
      'Palm Jumeirah is the palm-shaped artificial island off Al Sufouh, with apartment buildings along its trunk, private villas on the fronds and resort hotels on the outer crescent. Many residents are wealthy owners and long-stay tenants, and much of the island’s commercial life – beach clubs, spas, restaurants and holiday homes – serves hotel guests and visitors.',
    businesses: [
      'resort hotels and beach clubs',
      'fine-dining and beachfront restaurants',
      'luxury holiday-home operators',
      'prime real estate brokerages',
      'spas, wellness and aesthetic clinics',
      'jet-ski and water-sports operators',
      'villa interior designers and landscapers',
    ],
    landmarks: ['Atlantis, The Palm', 'Nakheel Mall', 'The Palm Tower', 'Palm Jumeirah Monorail'],
    nearby: ['dubai-marina', 'dubai-internet-city', 'al-barsha', 'jlt'],
    competition: 'high',
    searchHabits:
      'High-value searches – frond villas, private chefs, interior designers – start on Google, Bayut and Property Finder and move quickly to WhatsApp, with buyers judging a firm by its photography, reviews and Instagram feed. A large share of enquiries comes from overseas buyers and holidaymakers searching in English and several European languages.',
    industries: [
      'real-estate',
      'hospitality-and-hotels',
      'interior-design',
      'beauty-and-cosmetics',
      'events-and-weddings',
    ],
  },
  'dubai-hills-estate': {
    coords: [25.107, 55.245],
    character:
      'Dubai Hills Estate is a master-planned community by Emaar and Meraas, laid out around an 18-hole golf course and a long central park off Al Khail Road. It is mainly villas, townhouses and mid-rise apartments lived in by families, with schools, a hospital and Dubai Hills Mall inside the community and new phases still being built.',
    businesses: [
      'real estate brokerages and developer sales offices',
      'interior design and fit-out firms',
      'nurseries and after-school academies',
      'family restaurants and cafés',
      'clinics and pharmacies',
      'landscaping, pool and home-maintenance services',
      'golf and sports coaching',
    ],
    landmarks: [
      'Dubai Hills Mall',
      'Dubai Hills Golf Club',
      'Dubai Hills Park',
      'King’s College Hospital London – Dubai Hills',
    ],
    nearby: ['al-barsha', 'al-quoz', 'jumeirah-village-circle', 'business-bay'],
    competition: 'medium',
    searchHabits:
      'New homeowners search Google for interior designers, curtain and furniture shops, pool maintenance and nurseries “in Dubai Hills”, and ask for recommendations in community Facebook and WhatsApp groups. Off-plan and resale searches run through Bayut, Property Finder and developer websites.',
    industries: [
      'real-estate',
      'interior-design',
      'home-services',
      'education-and-schools',
      'healthcare-and-hospitals',
    ],
  },
  'jumeirah-village-circle': {
    coords: [25.059, 55.209],
    character:
      'Jumeirah Village Circle is a large, still-growing community of mid-rise apartment buildings and townhouses on a ring-road layout between Al Khail Road and Hessa Street. Comparatively affordable rents draw young families, first-time buyers and buy-to-let investors, and ground-floor units are filling with groceries, laundries, nurseries, salons and delivery-led restaurants.',
    businesses: [
      'grocery stores and minimarts',
      'laundry and dry-cleaning services',
      'nurseries and early-learning centres',
      'salons and barbershops',
      'property management and brokerage firms',
      'cafés and delivery-led restaurants',
      'pet shops and vets',
    ],
    landmarks: ['Circle Mall', 'Al Khail Road', 'Hessa Street'],
    nearby: ['al-barsha', 'dubai-hills-estate', 'jlt', 'dubai-marina'],
    competition: 'medium',
    searchHabits:
      'Searches are hyper-local and practical – “laundry JVC”, “nursery near me”, “JVC studio for rent” – made on phones through Google Maps, Talabat, Noon and Bayut, with most questions and bookings sent over WhatsApp. Investors comparing off-plan launches read developer pages and property portals side by side.',
    industries: ['real-estate', 'home-services', 'retail', 'restaurants-and-food', 'pet-care'],
  },
  'dubai-silicon-oasis': {
    coords: [25.121, 55.383],
    character:
      'Dubai Silicon Oasis is a technology free zone and residential community on the Dubai–Al Ain Road, combining offices and light-industrial units for electronics and tech firms with apartments and villas where many of their staff live. Universities and the Dtec start-up campus give it a steady student and founder population alongside the families.',
    businesses: [
      'electronics and semiconductor companies',
      'IT and software firms',
      'tech start-ups and incubated founders',
      'universities and training institutes',
      'supermarkets and community retail',
      'clinics',
      'restaurants and cafés',
    ],
    landmarks: [
      'Dtec (Dubai Technology Entrepreneur Campus)',
      'Silicon Central Mall',
      'Rochester Institute of Technology Dubai',
      'Dubai–Al Ain Road',
    ],
    nearby: ['international-city', 'mirdif', 'al-qusais'],
    competition: 'medium',
    searchHabits:
      'Tech companies here search Google and LinkedIn for suppliers, recruiters and engineering partners, while residents find clinics, schools and restaurants on Google Maps and order through Talabat and Careem. Students at the campus universities make Instagram and TikTok more important here than in most business districts.',
    industries: [
      'it-services-and-software',
      'electronics-and-appliances',
      'saas-and-tech-startups',
      'higher-education',
      'real-estate',
    ],
    freeZone: 'Dubai Silicon Oasis (DSO)',
  },
  'international-city': {
    coords: [25.163, 55.405],
    character:
      'International City is a large low-rise residential and trading district next to Dragon Mart, divided into country-themed clusters such as China, England, France and Persia. Its affordable studios house many workers and small traders from China, South Asia and Africa, and its ground floors are packed with wholesale shops, Asian restaurants, supermarkets and small trading offices tied to the Dragon Mart trade.',
    businesses: [
      'wholesale and import traders',
      'Chinese and Asian restaurants',
      'supermarkets and grocery wholesalers',
      'furniture and building-material showrooms',
      'mobile phone and electronics shops',
      'cargo agents and freight forwarders',
      'budget salons and laundries',
    ],
    landmarks: ['Dragon Mart', 'Dragon Mart 2', 'China Cluster'],
    nearby: ['dubai-silicon-oasis', 'mirdif', 'al-qusais'],
    competition: 'low',
    searchHabits:
      'Shoppers and traders search Google Maps for a product or “wholesale near Dragon Mart”, in English, Chinese, Hindi or Urdu, then deal by WhatsApp – many shops share price lists only there, and Chinese-run businesses also use WeChat. Residents look for rooms on Dubizzle and Facebook groups and order food and groceries through Talabat and Noon.',
    industries: [
      'retail',
      'industrial-and-b2b-supplies',
      'restaurants-and-food',
      'furniture-and-home-decor',
      'logistics-and-transport',
    ],
  },
  'dubai-investments-park': {
    coords: [24.988, 55.17],
    character:
      'Dubai Investments Park is a mixed industrial and residential development off Sheikh Mohammed Bin Zayed Road, between Jebel Ali and Expo City Dubai. Factories, warehouses and labour accommodation sit beside residential pockets such as Green Community and newer apartment blocks, so the area has both B2B manufacturers and a family customer base.',
    businesses: [
      'light manufacturers and assembly plants',
      'warehousing and third-party logistics',
      'food processing and packaging companies',
      'steel fabricators and building-material suppliers',
      'staff accommodation providers',
      'schools and nurseries',
      'supermarkets and cafeterias',
    ],
    landmarks: [
      'Green Community',
      'Dubai Investment Park metro station',
      'Sheikh Mohammed Bin Zayed Road',
    ],
    nearby: ['jebel-ali', 'dubai-south', 'jumeirah-village-circle'],
    competition: 'low',
    searchHabits:
      'Industrial buyers search Google in English for a specific capability – “steel fabrication Dubai”, “cold storage warehouse”, “packaging manufacturer UAE” – and check a company’s website, certifications and LinkedIn before sending an RFQ by email. Families in Green Community and the newer apartments look for schools, clinics and groceries on Google Maps and in community WhatsApp groups.',
    industries: [
      'manufacturing',
      'logistics-and-transport',
      'industrial-and-b2b-supplies',
      'printing-and-packaging',
      'construction-and-contractors',
    ],
  },
  'jebel-ali': {
    coords: [25.01, 55.1],
    character:
      'Jebel Ali, in Dubai’s south-west, is built around Jebel Ali Port and the Jebel Ali Free Zone (JAFZA) beside it, where warehouses, distribution centres, factories and regional trading headquarters line the free-zone roads. Around them are the Jebel Ali industrial areas, labour accommodation and residential communities such as Discovery Gardens near Ibn Battuta Mall.',
    businesses: [
      'import, export and re-export traders',
      'freight forwarders and customs brokers',
      'warehousing and cold-chain operators',
      'manufacturers and assembly plants',
      'heavy equipment and spare-parts suppliers',
      'marine and shipping services',
      'staff canteens and cafeterias',
    ],
    landmarks: ['Jebel Ali Port', 'Ibn Battuta Mall', 'Jebel Ali Industrial Area'],
    nearby: ['dubai-marina', 'jlt', 'dubai-investments-park', 'dubai-south'],
    competition: 'medium',
    searchHabits:
      'Buyers are mostly companies – often overseas importers – searching Google in English for freight forwarders, warehouse space and suppliers “in JAFZA”, with Arabic, Hindi and Urdu common in local trade, before moving to email, phone and WhatsApp for quotes. A clear website listing services, certifications and contact details matters more here than social media.',
    industries: [
      'logistics-and-transport',
      'manufacturing',
      'industrial-and-b2b-supplies',
      'fmcg-and-consumer-goods',
      'automotive',
    ],
    freeZone: 'Jebel Ali Free Zone (JAFZA)',
  },
  'dubai-south': {
    coords: [24.9, 55.17],
    character:
      'Dubai South is a large government-led development around Al Maktoum International Airport (DWC) in the far south of the city, split into logistics, aviation, business-park and residential districts. It is still filling up: air cargo, aviation and e-commerce fulfilment companies lead, while new apartment and villa communities and Expo City Dubai next door are bringing in families and event visitors.',
    businesses: [
      'air cargo and freight companies',
      'aviation services and maintenance firms',
      'e-commerce fulfilment and logistics operators',
      'free-zone business-setup consultants',
      'property developers and brokerages',
      'event and exhibition suppliers',
      'community grocers and cafés',
    ],
    landmarks: [
      'Al Maktoum International Airport (DWC)',
      'Expo City Dubai',
      'Expo 2020 metro station',
    ],
    nearby: ['dubai-investments-park', 'jebel-ali', 'jumeirah-village-circle'],
    competition: 'low',
    searchHabits:
      'Companies weighing a move here search Google and LinkedIn in English for free-zone setup, warehouse leasing and aviation suppliers, and want detailed answers before a site visit. Residents of the new communities use Google Maps and delivery apps, but fewer local shops are listed yet, so a complete Google Business Profile stands out quickly.',
    industries: [
      'aviation-and-aerospace',
      'logistics-and-transport',
      'e-commerce-and-d2c',
      'real-estate',
    ],
    freeZone: 'Dubai South',
  },
} satisfies Partial<Record<DubaiAreaSlug, DubaiAreaProfile>>;
