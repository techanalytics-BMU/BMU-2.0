import type { MarketProfile } from '@/types/pseo';
import type { MarketSlug } from '../abroad';

// USA & Canada, in marketBase order. Time differences as of late 2026: the US and Ontario still
// change clocks; British Columbia stays on UTC−7 all year (since March 2026) and Alberta on UTC−6
// all year (from 1 November 2026).
export const northAmericaMarkets = {
  'new-york': {
    coords: [40.713, -74.006],
    character:
      'New York is the centre of US finance, media and fashion – Wall Street and the New York Stock Exchange downtown, publishers, broadcasters and ad agencies in Midtown, and fashion houses and showrooms around the Garment District. Beneath the big employers, the five boroughs run on small businesses: restaurants and bodegas, salons, dental and medical practices, law firms and contractors, each serving a few dense blocks. Rents are high and attention is crowded, so a business has to stand out within its own neighbourhood, not just the city.',
    businesses: [
      'restaurants, bars and bakeries',
      'law firms and accountants',
      'dental, medical and therapy practices',
      'fashion and beauty brands',
      'real estate brokerages and property managers',
      'fitness and wellness studios',
      'financial and fintech firms',
    ],
    languages:
      'English, with Spanish widely spoken and Chinese, Russian, Bengali, Haitian Creole and many other languages in particular neighbourhoods',
    competition: 'high',
    searchHabits:
      'Customers search by neighbourhood or subway stop – ‘dentist Upper West Side’, ‘brunch near Union Square’ – and check Yelp and Google reviews before they walk in. Restaurants are booked through Resy and OpenTable, apartments are found on StreetEasy, and Instagram and TikTok decide which new food and fashion spots get a queue outside.',
    industries: [
      'fintech',
      'fashion-and-apparel',
      'media-and-entertainment',
      'real-estate',
      'restaurants-and-food',
    ],
    timeDifference: '9 h 30 min behind India (10 h 30 min in winter)',
    workingHours:
      'Your morning is our evening, so we take calls at the start of your day and work through your night – changes are usually ready by the time you are back at your desk.',
    currency: 'USD',
    indianCommunity:
      'Jackson Heights in Queens has long been the city’s South Asian shopping area, with sari shops, jewellers and restaurants along 74th Street, and Indian-American professionals are well established in the city’s finance, healthcare and tech firms.',
  },
  'jersey-city': {
    coords: [40.718, -74.043],
    character:
      'Jersey City sits across the Hudson from Lower Manhattan, one PATH stop from the World Trade Center. Its Exchange Place and Newport waterfront holds back offices and trading floors for banks and financial firms, and new residential towers have brought in young professionals who work on both sides of the river. Away from the water, Journal Square, The Heights and Greenville are older neighbourhoods of family-run shops, restaurants and services.',
    businesses: [
      'financial services and back-office operations',
      'Indian grocers, jewellers and restaurants',
      'real estate agents and managers of new rental towers',
      'dental and medical practices',
      'waterfront cafes, bars and restaurants',
      'childcare, tutoring and after-school programmes',
      'logistics and warehousing firms in nearby Kearny and Secaucus',
    ],
    languages:
      'English, with Spanish, Hindi, Gujarati, Tagalog and Arabic in different neighbourhoods',
    competition: 'medium',
    searchHabits:
      'People weigh local options against Manhattan, so searches usually name the city or the neighbourhood – ‘Jersey City’, ‘JC Heights’, ‘Downtown JC’ – to keep results on this side of the river. Neighbourhood Facebook groups, Nextdoor and Google reviews carry weight, and shoppers around Newark Avenue often hear about new stores through WhatsApp.',
    industries: [
      'fintech',
      'real-estate',
      'logistics-and-transport',
      'restaurants-and-food',
      'clinics-and-doctors',
    ],
    timeDifference: '9 h 30 min behind India (10 h 30 min in winter)',
    workingHours:
      'We hold calls in your early morning – evening for us in Bengaluru – and carry on working while New Jersey sleeps, so updates arrive before your commute.',
    currency: 'USD',
    indianCommunity:
      'India Square, on Newark Avenue near Journal Square, is lined with Indian grocers, sari and jewellery shops and restaurants, and many Indian IT and finance professionals live in the city.',
  },
  'san-francisco': {
    coords: [37.775, -122.419],
    character:
      'San Francisco is where much of the US technology and venture-capital world meets – startups in SoMa and Mission Bay, the headquarters of Salesforce, Uber, DoorDash and Yelp, and AI companies including OpenAI and Anthropic. The Financial District, tourism around Fisherman’s Wharf and Union Square, and a dense restaurant and bar scene make up much of the rest of the economy. It is a compact, hilly city of distinct neighbourhoods, from the Mission to the Richmond, where many residents rent.',
    businesses: [
      'SaaS and AI startups',
      'venture-backed consumer apps',
      'restaurants, cafes and bars',
      'hotels and tour operators',
      'fitness, yoga and wellness studios',
      'law firms and accountants serving startups',
      'biotech firms in Mission Bay',
    ],
    languages: 'English, with Cantonese, Mandarin, Spanish and Tagalog in many neighbourhoods',
    competition: 'high',
    searchHabits:
      'Business buyers research on G2, LinkedIn, Reddit and Hacker News, and more of them now ask ChatGPT or Perplexity for shortlists – so showing up in AI answers matters alongside Google rankings. Consumers lean on Yelp, Google Maps and Instagram, and book restaurants through Resy and OpenTable.',
    industries: [
      'saas-and-tech-startups',
      'fintech',
      'biotech-and-life-sciences',
      'restaurants-and-food',
      'hospitality-and-hotels',
    ],
    timeDifference: '12 h 30 min behind India (13 h 30 min in winter)',
    workingHours:
      'Our morning in Bengaluru is your evening, so we can talk at the end of your day or early the next morning, and the work gets done while you sleep.',
    currency: 'USD',
    indianCommunity:
      'Indian-American founders, engineers and investors are a well-known part of the Bay Area’s startup and venture-capital world.',
  },
  'san-jose': {
    coords: [37.338, -121.886],
    character:
      'San Jose is Silicon Valley’s largest city and its corporate side – Adobe has its headquarters downtown, Cisco and PayPal are in North San Jose, and semiconductor and hardware firms fill the business parks along Highway 101 and Interstate 880. It is more suburban and family-oriented than San Francisco, with single-family homes and most trips made by car. Large Vietnamese and Mexican-American communities give East San Jose and Story Road their own shops, restaurants and services.',
    businesses: [
      'semiconductor and hardware companies',
      'enterprise software firms',
      'Vietnamese restaurants, bakeries and shops',
      'dental, medical and paediatric practices',
      'tutoring, coding and after-school academies',
      'home services – solar, HVAC, remodelling and landscaping',
      'real estate agents serving families',
    ],
    languages: 'English, Spanish and Vietnamese, with Mandarin, Hindi and Tagalog also common',
    competition: 'high',
    searchHabits:
      'Homeowners look for contractors, dentists and tutors on Google Maps, Yelp and Nextdoor, and ask neighbourhood groups for referrals before they call. Vietnamese- and Spanish-speaking customers often search in their own language, and B2B buyers at the valley’s hardware and software firms research vendors on LinkedIn and industry review sites.',
    industries: [
      'it-services-and-software',
      'saas-and-tech-startups',
      'coaching-and-test-prep',
      'home-services',
      'real-estate',
    ],
    timeDifference: '12 h 30 min behind India (13 h 30 min in winter)',
    workingHours:
      'We are online during your early morning and evening, and your afternoon is our night – so a change you ask for after lunch is usually done by the next morning.',
    currency: 'USD',
    indianCommunity:
      'Indian families and engineers are well established across the South Bay, from the Indian grocers and restaurants along El Camino Real in Santa Clara and Sunnyvale to networks such as TiE, founded in Silicon Valley in 1992.',
  },
  'los-angeles': {
    coords: [34.052, -118.244],
    character:
      'Los Angeles runs on entertainment and image – film and TV studios, streaming companies, music labels and the creators, agents and managers around them. The ports of Los Angeles and Long Beach handle a large share of US imports from Asia, which supports warehousing and logistics across the region, and the downtown Fashion District is still a centre for apparel wholesale and manufacturing. Many beauty, wellness, fitness and food brands are built around the creators and influencers based in the city.',
    businesses: [
      'production companies and post-production studios',
      'beauty, skincare and wellness brands',
      'apparel brands and Fashion District wholesalers',
      'restaurants, food trucks and cafes',
      'fitness studios and personal trainers',
      'importers and logistics firms',
      'real estate agents and property developers',
    ],
    languages:
      'English and Spanish, with Korean, Armenian, Tagalog, Chinese and Persian in particular communities',
    competition: 'high',
    searchHabits:
      'Discovery often starts on Instagram and TikTok – a restaurant, salon or brand can fill up after one creator’s video – and is then checked on Google Maps and Yelp. The city is so spread out that people search by area, such as ‘Silver Lake’, ‘the Valley’ or ‘Westside’, and many searches are made in Spanish.',
    industries: [
      'media-and-entertainment',
      'beauty-and-cosmetics',
      'fashion-and-apparel',
      'e-commerce-and-d2c',
      'restaurants-and-food',
    ],
    timeDifference: '12 h 30 min behind India (13 h 30 min in winter)',
    workingHours:
      'Roughly as your working day ends, ours begins, so briefs you send in the afternoon are worked on overnight and calls fit into your early morning or evening.',
    currency: 'USD',
    indianCommunity:
      'Pioneer Boulevard in Artesia, in south-east Los Angeles County, has a long-established Little India of sari shops, jewellers, sweet shops and restaurants.',
  },
  seattle: {
    coords: [47.606, -122.332],
    character:
      'Seattle’s economy is built around a few very large employers – Amazon in South Lake Union, Microsoft across Lake Washington in Redmond, Boeing’s aircraft plants in Everett and Renton – and the cloud, software and logistics firms that grew up around them. Starbucks and Nordstrom are headquartered in the city, Costco in nearby Issaquah, and the Port of Seattle links the region to trade with Asia. Biotech and health research around Fred Hutchinson Cancer Center and the University of Washington form a second large sector.',
    businesses: [
      'cloud and software companies',
      'Amazon sellers and e-commerce brands',
      'aerospace suppliers',
      'coffee shops and roasters',
      'biotech and health research firms',
      'outdoor and recreation retailers',
      'home services and contractors',
    ],
    languages:
      'English, with Spanish, Chinese, Vietnamese, Somali and Amharic in parts of the city',
    competition: 'high',
    searchHabits:
      'Buyers here tend to research before they commit – reading Reddit threads, comparing Google and Yelp reviews and asking on Nextdoor – and many work in tech, so they notice slow sites and vague claims. B2B buyers use LinkedIn heavily, and AI assistants are part of how many of them build vendor shortlists.',
    industries: [
      'it-services-and-software',
      'saas-and-tech-startups',
      'aviation-and-aerospace',
      'biotech-and-life-sciences',
      'e-commerce-and-d2c',
    ],
    timeDifference: '12 h 30 min behind India (13 h 30 min in winter)',
    workingHours:
      'Calls fit your early morning or your evening, and the bulk of our work happens during your night, so updates are waiting at the start of your day.',
    currency: 'USD',
    indianCommunity:
      'Many Indian engineers work at Microsoft and Amazon, and Indian grocers, restaurants and temples are an established part of Bellevue and Redmond on the Eastside.',
  },
  chicago: {
    coords: [41.878, -87.63],
    character:
      'Chicago’s economy is unusually broad – futures and options trading at CME Group and Cboe, the headquarters of McDonald’s, United Airlines and Mondelez, and the law, consulting and accounting firms of the Loop. All of the largest US freight railroads meet here, so manufacturers, food processors and distributors cluster across the city and its suburbs. Neighbourhoods such as Pilsen, Chinatown, Wicker Park and West Ridge each have their own shopping streets and customers.',
    businesses: [
      'manufacturers and industrial distributors',
      'food and beverage producers',
      'law, accounting and consulting firms',
      'restaurants, bars and pizzerias',
      'trucking, rail and warehousing firms',
      'dental and medical practices',
      'home services – HVAC, roofing and snow removal',
    ],
    languages:
      'English and Spanish, with Polish, Chinese, Arabic, Hindi and Urdu in particular neighbourhoods',
    competition: 'high',
    searchHabits:
      'Customers search by neighbourhood – ‘Lincoln Park dentist’, ‘pizza in Logan Square’ – and lean on Google and Yelp reviews, and Spanish-language searches are common on the Southwest Side. Demand swings with the seasons: patios, festivals and tourism peak in summer, while winter brings searches for furnace repair, delivery and indoor activities.',
    industries: [
      'manufacturing',
      'logistics-and-transport',
      'fmcg-and-consumer-goods',
      'legal-services',
      'restaurants-and-food',
    ],
    timeDifference: '10 h 30 min behind India (11 h 30 min in winter)',
    workingHours:
      'We take calls in your morning, which is our evening, and do the work during your night – so feedback you give one day is usually acted on by the next.',
    currency: 'USD',
    indianCommunity:
      'Devon Avenue in West Ridge has been Chicago’s Indian and Pakistani shopping street for decades, with sari shops, jewellers, grocers and restaurants.',
  },
  dallas: {
    coords: [32.777, -96.797],
    character:
      'Dallas and the wider Dallas–Fort Worth area have grown on corporate relocations and fast-spreading suburbs – Texas Instruments and Southwest Airlines are based in Dallas, Toyota’s North American headquarters is in Plano, and Frisco, McKinney and Prosper keep adding new homes and shopping centres. Texas has no state income tax, which helps draw companies and families from other states. Finance, telecoms, real estate, construction and logistics around DFW Airport make up much of the business scene.',
    businesses: [
      'home builders and real estate agents',
      'roofing, HVAC and other home services',
      'banks, insurers and financial advisers',
      'restaurants and barbecue joints',
      'car dealerships',
      'logistics and distribution firms',
      'medical, dental and med-spa practices',
    ],
    languages:
      'English and Spanish, with Vietnamese, Korean, Hindi and Telugu common in suburbs such as Garland, Carrollton, Irving and Plano',
    competition: 'high',
    searchHabits:
      'Almost everyone drives, so ‘near me’ searches on Google Maps and the reviews behind them decide which roofer, dentist or restaurant gets the call, and Nextdoor is busy in the newer suburbs. Spring hailstorms bring sudden spikes in roofing and auto-repair searches, and home buyers looking at new builds start on Zillow and on builders’ own sites.',
    industries: [
      'real-estate',
      'construction-and-contractors',
      'home-services',
      'telecom-and-internet',
      'logistics-and-transport',
    ],
    timeDifference: '10 h 30 min behind India (11 h 30 min in winter)',
    workingHours:
      'Calls fit into your morning, which is evening for us, and our working day runs while Texas sleeps – so a request from one afternoon is normally done by the next morning.',
    currency: 'USD',
    indianCommunity:
      'Irving, Plano, Frisco and Coppell have large Indian-American communities, with Indian grocers, restaurants and temples and many Indian-American professionals in the area’s tech and finance firms.',
  },
  houston: {
    coords: [29.76, -95.37],
    character:
      'Houston is the centre of the US oil and gas industry – producers, oilfield service companies and engineering firms fill the Energy Corridor on the west side, and refineries and petrochemical plants line the Houston Ship Channel down to the Port of Houston. The Texas Medical Center, with dozens of hospitals, medical schools and research institutions, and NASA’s Johnson Space Center near Clear Lake give the city two more major sectors. With no zoning code, shops, clinics, offices and homes sit side by side across a very spread-out city.',
    businesses: [
      'oil, gas and energy services firms',
      'engineering firms and industrial suppliers',
      'hospitals, clinics and specialist practices',
      'Tex-Mex, Vietnamese and Cajun restaurants',
      'storm restoration, roofing and air-conditioning contractors',
      'petrochemical and plastics companies',
      'law firms, including personal injury practices',
    ],
    languages: 'English and Spanish, with Vietnamese, Chinese, Arabic, Urdu and Hindi widely used',
    competition: 'high',
    searchHabits:
      'Searches in Spanish are a large part of local demand, especially for healthcare, legal and home services, and customers lean on Google Maps reviews in a city where everything is a drive away. Hurricane season and summer heat drive surges in searches for generators, roof repairs, flood restoration and air-conditioning service.',
    industries: [
      'energy-and-solar',
      'healthcare-and-hospitals',
      'chemicals',
      'industrial-and-b2b-supplies',
      'home-services',
    ],
    timeDifference: '10 h 30 min behind India (11 h 30 min in winter)',
    workingHours:
      'We are available early in your day – our evening – and do the work through your night, so you start each morning with the changes in place.',
    currency: 'USD',
    indianCommunity:
      'The Mahatma Gandhi District along Hillcroft Avenue is Houston’s long-established South Asian shopping area, and Sugar Land, to the south-west, has a large Indian-American community.',
  },
  atlanta: {
    coords: [33.749, -84.388],
    character:
      'Atlanta is a corporate and transport city – Coca-Cola, Delta Air Lines, Home Depot and UPS are headquartered in the metro area, and Hartsfield-Jackson Atlanta International Airport makes it a natural base for logistics and distribution. Payment processors and fintech firms cluster here, and film and TV production is a major industry, with studios such as Tyler Perry Studios on the south-west side. The city has a large, long-established Black business community and historically Black colleges such as Morehouse, Spelman and Clark Atlanta, alongside Georgia Tech and Emory.',
    businesses: [
      'logistics, freight and distribution firms',
      'payment and fintech companies',
      'film, TV and music production',
      'hair salons, barbers and beauty brands',
      'restaurants and soul food kitchens',
      'real estate agents and home builders in the suburbs',
      'clinics and dental practices',
    ],
    languages:
      'English, with Spanish, Korean, Vietnamese and Chinese along Buford Highway and in Gwinnett County',
    competition: 'high',
    searchHabits:
      'Instagram does a lot of the work for salons, barbers, restaurants and beauty brands, and customers check Google reviews before booking. The metro area sprawls across many counties, so people search by suburb – ‘Alpharetta’, ‘Decatur’, ‘Marietta’ – and traffic on the Perimeter makes distance a real factor in who they choose.',
    industries: [
      'logistics-and-transport',
      'fintech',
      'media-and-entertainment',
      'beauty-and-cosmetics',
      'restaurants-and-food',
    ],
    timeDifference: '9 h 30 min behind India (10 h 30 min in winter)',
    workingHours:
      'Our evening in Bengaluru is your morning, which is when we hold calls; after that we keep working through your night, so the next round of changes is ready when your day begins.',
    currency: 'USD',
  },
  boston: {
    coords: [42.36, -71.059],
    character:
      'Boston’s economy rests on universities, hospitals and research – Harvard and MIT across the river in Cambridge, Boston University and Northeastern in the city, and teaching hospitals such as Massachusetts General and those of the Longwood Medical Area. Biotech and life-sciences companies cluster in Kendall Square and the Seaport, and Fidelity, State Street and Liberty Mutual make it a major centre for asset management and insurance. Each September brings a new wave of students, which shapes demand for housing, food, fitness and services.',
    businesses: [
      'biotech and medical device companies',
      'universities, colleges and research labs',
      'hospitals and specialist clinics',
      'asset managers and insurers',
      'restaurants, cafes and bars',
      'student housing and property managers',
      'tutoring and test-prep services',
    ],
    languages:
      'English, with Spanish, Haitian Creole, Portuguese, Cape Verdean Creole, Chinese and Vietnamese in different neighbourhoods',
    competition: 'high',
    searchHabits:
      'Many customers read reviews, Reddit threads and comparison articles before deciding, while students and new arrivals each autumn look up everything from dentists to gyms on Google Maps. Life-sciences and healthcare buyers are reached mainly through LinkedIn, conferences and specialist content rather than broad ads.',
    industries: [
      'higher-education',
      'biotech-and-life-sciences',
      'healthcare-and-hospitals',
      'insurance',
      'saas-and-tech-startups',
    ],
    timeDifference: '9 h 30 min behind India (10 h 30 min in winter)',
    workingHours:
      'Calls fit early in your day, which is evening in Bengaluru, and our working hours run through your night, so revisions are ready by the following morning.',
    currency: 'USD',
  },
  'washington-dc': {
    coords: [38.907, -77.037],
    character:
      'Washington, DC runs on the federal government and the organisations that work with it – agencies, Congress, government contractors, law firms, think tanks, and the lobbyists and trade associations of K Street. The World Bank, the IMF and most of the world’s embassies to the US add an international layer, and the Northern Virginia suburbs hold many technology and defence contractors as well as Amazon’s second headquarters in Arlington. Tourism around the National Mall and the Smithsonian museums supports hotels, restaurants and tour companies.',
    businesses: [
      'government contractors and consultancies',
      'law and lobbying firms',
      'non-profits, trade associations and think tanks',
      'hotels, restaurants and tour operators',
      'universities and training providers',
      'cybersecurity and IT services firms',
      'real estate agents and property managers',
    ],
    languages:
      'English, with Spanish, Amharic, Korean, Vietnamese and French also widely used across the city and its suburbs',
    competition: 'high',
    searchHabits:
      'Much of the buying here is B2B and built on relationships – agencies and contractors are researched on LinkedIn and at industry events, and federal opportunities are found on SAM.gov. Residents across DC, Maryland and Virginia (‘the DMV’) search by neighbourhood or suburb – ‘Capitol Hill’, ‘Arlington’, ‘Bethesda’ – and rely on Google reviews and Yelp.',
    industries: [
      'government-and-psu',
      'ngos-and-non-profits',
      'legal-services',
      'it-services-and-software',
      'hospitality-and-hotels',
    ],
    timeDifference: '9 h 30 min behind India (10 h 30 min in winter)',
    workingHours:
      'We schedule calls for your morning, our evening, and work through your night, which gives you overnight turnaround on drafts and edits.',
    currency: 'USD',
  },
  toronto: {
    coords: [43.653, -79.383],
    character:
      'Toronto is Canada’s largest city and its financial centre – the Toronto Stock Exchange, the big banks’ main offices on Bay Street, and insurers such as Manulife and Sun Life. Tech and AI work clusters around the MaRS Discovery District and the Vector Institute, and the city is a major location for film and TV production. A large share of residents were born outside Canada, and neighbourhoods such as Chinatown, Koreatown, Little Italy and Gerrard India Bazaar each have their own shops and customers.',
    businesses: [
      'banks, insurers and wealth managers',
      'tech startups and software firms',
      'restaurants, cafes and food halls',
      'condo developers and real estate brokerages',
      'dental, physiotherapy and medical clinics',
      'film and TV production companies',
      'immigration and settlement services',
    ],
    languages:
      'English, with Mandarin, Cantonese, Tagalog, Tamil, Punjabi, Persian and many other languages in different neighbourhoods',
    competition: 'high',
    searchHabits:
      'Searches usually name a neighbourhood or an intersection – ‘Leslieville brunch’, ‘dentist near Yonge and Eglinton’ – and Google reviews matter more than Yelp, with HomeStars for contractors and Realtor.ca or HouseSigma for property. Food delivery runs through Uber Eats, DoorDash and SkipTheDishes, and email campaigns must follow Canada’s anti-spam law (CASL), which requires consent before sending.',
    industries: [
      'fintech',
      'insurance',
      'real-estate',
      'saas-and-tech-startups',
      'restaurants-and-food',
    ],
    timeDifference: '9 h 30 min behind India (10 h 30 min in winter)',
    workingHours:
      'Your mornings overlap with our evenings in Bengaluru, so we hold calls then and do the work during your night – edits are usually ready when you log on.',
    currency: 'CAD',
    indianCommunity:
      'Gerrard India Bazaar on Gerrard Street East has been a South Asian shopping street since the 1970s, and large Indian communities live in Scarborough and in neighbouring Brampton and Mississauga.',
  },
  mississauga: {
    coords: [43.589, -79.644],
    character:
      'Mississauga, just west of Toronto, is home to Toronto Pearson International Airport, so trucking, warehousing and distribution firms fill the industrial areas around Malton and the airport. Many multinationals run their Canadian head offices here – Microsoft Canada and Walmart Canada among them, along with a large group of pharmaceutical companies – while Square One Shopping Centre anchors the city centre. Port Credit on Lake Ontario and Streetsville on the Credit River keep an older, village-style main street feel.',
    businesses: [
      'trucking, freight and logistics companies',
      'warehouses and distribution centres',
      'pharmaceutical and life-sciences offices',
      'South Asian and Middle Eastern restaurants and grocers',
      'banquet halls and wedding services',
      'immigration consultants and settlement services',
      'real estate agents and mortgage brokers',
    ],
    languages: 'English, with Urdu, Arabic, Punjabi, Polish, Mandarin and Tagalog widely spoken',
    competition: 'medium',
    searchHabits:
      'Many customers search in English but decide through community networks – WhatsApp groups, places of worship and word of mouth – especially for weddings, immigration help, driving schools and real estate. Logistics and pharma buyers research suppliers on Google and LinkedIn, so results need to show up for Mississauga, Peel Region and the wider GTA at once.',
    industries: [
      'logistics-and-transport',
      'pharma-and-medical-devices',
      'events-and-weddings',
      'study-abroad-and-immigration',
      'real-estate',
    ],
    timeDifference: '9 h 30 min behind India (10 h 30 min in winter)',
    workingHours:
      'We take calls in your morning, our evening in India, and our working day falls during your night, so revised files are waiting for you the next day.',
    currency: 'CAD',
    indianCommunity:
      'Mississauga and neighbouring Brampton are the centre of the Greater Toronto Area’s South Asian community, with Indian and Pakistani grocers, sweet shops and banquet halls, and many South Asian-owned trucking, real estate and immigration businesses.',
  },
  vancouver: {
    coords: [49.283, -123.121],
    character:
      'Vancouver’s economy is shaped by its port, its scenery and its ties to Asia – the Port of Vancouver handles much of Canada’s trade across the Pacific, and cruise ships, hotels and tour operators serve visitors heading to Stanley Park, Granville Island and Whistler. Film and TV production, visual effects and video-game studios employ many creative and technical workers, and Lululemon and Arc’teryx both began in the Vancouver area. High housing costs make real estate, development and mortgage services a large part of local business.',
    businesses: [
      'real estate developers, agents and mortgage brokers',
      'film, TV and visual effects studios',
      'video-game developers',
      'outdoor, activewear and wellness brands',
      'hotels, tour operators and cruise services',
      'Chinese, Japanese and Korean restaurants',
      'import and export businesses tied to the port',
    ],
    languages:
      'English, with Cantonese, Mandarin, Punjabi, Tagalog and Korean widely used across the region',
    competition: 'high',
    searchHabits:
      'Many Chinese-speaking residents search and share recommendations on WeChat and Xiaohongshu (RED) as well as Google, so many businesses market in English and Chinese side by side. Others rely on Google Maps reviews, Instagram for food and outdoor brands, and Realtor.ca and REW.ca for property.',
    industries: [
      'real-estate',
      'media-and-entertainment',
      'gaming-and-esports',
      'travel-and-tourism',
      'fashion-and-apparel',
    ],
    timeDifference: '12 h 30 min behind India, all year',
    workingHours:
      'British Columbia no longer changes its clocks, so the gap stays fixed: we talk in your early morning or evening and work through your night.',
    currency: 'CAD',
    indianCommunity:
      'The Punjabi Market on Main Street and the large Punjabi community in neighbouring Surrey make Indo-Canadian businesses – from trucking and real estate to restaurants and sweet shops – a familiar part of the region.',
  },
  calgary: {
    coords: [51.045, -114.072],
    character:
      'Calgary is the head-office city of Canada’s oil and gas industry – Suncor, Cenovus, Canadian Natural Resources, TC Energy and Imperial Oil are all based here – as well as of WestJet and the CPKC railway. Alberta has no provincial sales tax, and clean energy, agricultural technology and software are growing alongside oil and gas. Every July the Calgary Stampede fills hotels, bars and event venues, and Banff and the Rockies, about 90 minutes west, bring visitors all year.',
    businesses: [
      'oil and gas producers and energy service firms',
      'engineering and construction companies',
      'home builders and renovation contractors',
      'roofing, furnace and other home services',
      'ranching, agribusiness and farm equipment suppliers',
      'restaurants, bars and event venues',
      'trucking and logistics firms',
    ],
    languages:
      'English, with Punjabi, Tagalog, Mandarin, Cantonese, Spanish and Arabic among the most common other languages',
    competition: 'medium',
    searchHabits:
      'Homeowners search for furnace repair in winter and for roofers and auto-glass repair after summer hailstorms, so home-service demand comes in sharp bursts. Energy-sector buyers are reached through LinkedIn and industry events, and Stampede season brings a rush of searches for restaurants, events and western wear each July.',
    industries: [
      'energy-and-solar',
      'construction-and-contractors',
      'home-services',
      'agriculture-and-agritech',
      'logistics-and-transport',
    ],
    timeDifference: '11 h 30 min behind India, all year',
    workingHours:
      'Alberta now keeps the same time all year, so the overlap never shifts: we take calls in your morning, which is our evening, and work while you sleep.',
    currency: 'CAD',
    indianCommunity:
      'North-east Calgary has a large Punjabi and wider South Asian community, with Indian grocers, restaurants, gurdwaras and many family-run businesses.',
  },
} satisfies Partial<Record<MarketSlug, MarketProfile>>;
