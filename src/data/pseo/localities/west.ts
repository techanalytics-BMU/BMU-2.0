import type { LocalityProfile } from '@/types/pseo';
import type { LocalitySlug } from '../slugs';

// West Bengaluru – older Kannada-first layouts, the Magadi Road and Mysore Road corridors, the
// industrial belts next to Peenya and Kumbalgodu, and the edge towns of Bidadi and Nelamangala.
export const westLocalities = {
  andrahalli: {
    coords: [13.01, 77.486],
    character:
      'A fast-grown residential area in north-west Bengaluru between Herohalli and Peenya 2nd Stage, built up from an old village into a dense spread of revenue layouts and small independent houses. Many residents work in the factories of Peenya and the industrial estates around Hegganahalli. Andrahalli Main Road carries most of its shops, clinics and daily traffic.',
    businesses: [
      'provision stores and supermarkets',
      'hardware and building-material shops',
      'clinics and pharmacies',
      'tuition centres and small private schools',
      'two-wheeler service shops',
      'fabrication and small engineering units',
    ],
    landmarks: ['Andrahalli Main Road', 'Peenya 2nd Stage', 'Magadi Road'],
    nearby: ['herohalli', 'sunkadakatte', 'hegganahalli', 'dodda-gollarahatti', 'laggere'],
    competition: 'low',
    searchHabits:
      'Most searches happen on phones, often in Kannada, for everyday needs close to home – a clinic open late, a tuition class, a plumber or electrician. People add “Andrahalli Main Road” or “Peenya 2nd Stage” to narrow results, and many call a few listings to compare before choosing.',
    realEstate:
      'Mostly independent houses on small plots in revenue and private layouts, many built floor by floor with upper floors let out. Buyers are budget-minded families and small investors, and rental demand comes from people working in Peenya.',
    industries: [
      'real-estate',
      'construction-and-contractors',
      'education-and-schools',
      'clinics-and-doctors',
      'industrial-and-b2b-supplies',
    ],
  },

  attiguppe: {
    coords: [12.962, 77.53],
    character:
      'A compact, settled residential area south-west of Vijayanagar, between Chord Road and Chandra Layout. Its streets are lined with independent houses, small apartment buildings and neighbourhood shops, and the Attiguppe metro station on the Purple Line gives residents a direct ride to Majestic and MG Road. Most households are long-time Kannada-speaking families, with tenants renting the upper floors.',
    businesses: [
      'clinics, dental practices and pharmacies',
      'bakeries and darshinis',
      'tuition and music classes',
      'tailoring shops and boutiques',
      'mobile repair shops',
      'beauty parlours',
    ],
    landmarks: ['Attiguppe metro station', 'Chord Road'],
    nearby: [
      'hampi-nagar',
      'chandra-layout',
      'vijayanagar',
      'bapuji-nagar',
      'deepanjali-nagar',
      'moodalapalya',
    ],
    competition: 'medium',
    searchHabits:
      'Residents look for services a short walk or ride away and often type “near Attiguppe metro” or “Vijayanagar” rather than the ward name. Older residents still go by word of mouth, while their children check Google ratings and Instagram before trying somewhere new.',
    realEstate:
      'A built-up market of independent houses and small apartment blocks, with older homes being rebuilt as multi-floor rental buildings. The metro keeps rental demand steady from working professionals and students.',
    industries: [
      'clinics-and-doctors',
      'coaching-and-test-prep',
      'beauty-and-cosmetics',
      'restaurants-and-food',
      'real-estate',
    ],
  },

  'bapuji-nagar': {
    coords: [12.956, 77.54],
    character:
      'A dense, working-class neighbourhood just off Mysore Road, near the KSRTC Satellite Bus Station and the Gali Anjaneya Temple. Narrow streets mix small houses with workshops, small godowns and corner shops, and many families have lived here for generations. The bus station and Mysore Road bring a steady flow of passengers, drivers and traders past its edges.',
    businesses: [
      'small workshops and fabrication units',
      'auto-repair and spare-parts shops',
      'grocery and provision stores',
      'clinics and pharmacies',
      'meat and fish shops',
      'tea stalls and small eateries',
    ],
    landmarks: ['Gali Anjaneya Temple', 'KSRTC Mysore Road Satellite Bus Station', 'Mysore Road'],
    nearby: [
      'deepanjali-nagar',
      'hampi-nagar',
      'attiguppe',
      'mysore-road',
      'srinagar',
      'rpc-layout',
    ],
    competition: 'medium',
    searchHabits:
      'Searches are mostly on mobile and practical – repair shops, spare parts, doctors, groceries – and many are in Kannada. Small traders here get much of their business from calls and WhatsApp, so a correct phone number and Google Maps pin matter more than a polished website.',
    realEstate:
      'Small independent houses and mixed-use buildings with shops below and rooms above, mostly held by long-time owners. Little changes hands; most activity is rebuilding on existing plots and renting out shop frontage.',
    industries: [
      'automotive',
      'industrial-and-b2b-supplies',
      'retail',
      'clinics-and-doctors',
      'logistics-and-transport',
    ],
  },

  basaveshwaranagar: {
    coords: [12.99, 77.538],
    character:
      'A large, established residential area laid out in stages just west of Rajajinagar along West of Chord Road. Most residents are Kannada-speaking middle-class families who have lived here for decades, and the main roads carry a dense mix of eateries, sweet shops, clinics, banks and coaching classes. Modi Hospital and the Basaveshwaranagar bus stand are its everyday reference points.',
    businesses: [
      'restaurants, darshinis and sweet shops',
      'clinics, nursing homes and diagnostic centres',
      'coaching centres and tuition classes',
      'gyms and yoga studios',
      'saree and textile shops',
      'banks and CA offices',
    ],
    landmarks: ['West of Chord Road', 'Modi Hospital', 'Basaveshwaranagar bus stand'],
    nearby: [
      'kurubarahalli',
      'kamakshipalya',
      'govindaraja-nagar',
      'prashanth-nagar',
      'rajajinagar',
      'mahalakshmi-layout',
    ],
    competition: 'medium',
    searchHabits:
      'Families here are loyal and go by reputation, so years of good reviews count for more than discounts. Searches mix Kannada and English, and people tend to add “Basaveshwaranagar” to searches for restaurants, doctors and classes instead of relying on “near me”.',
    realEstate:
      'A mature market of independent houses on planned layout plots, with older homes steadily replaced by small apartment buildings. Resale homes are sought by families already living in west Bengaluru, and ground-floor commercial space on the main roads is in steady demand.',
    industries: [
      'restaurants-and-food',
      'clinics-and-doctors',
      'coaching-and-test-prep',
      'fitness-and-sports',
      'real-estate',
    ],
  },

  bidadi: {
    coords: [12.799, 77.387],
    character:
      'A town in Ramanagara taluk on the old Bengaluru–Mysuru highway, beyond Kengeri and Kumbalgodu – a separate town on the city’s edge rather than a Bengaluru neighbourhood. The Bidadi industrial area holds large factories including Toyota Kirloskar Motor’s plant, and Wonderla and the Eagleton golf resort draw weekend visitors from the city. The town itself is small, with a market street, schools and roadside eateries known for thatte idli.',
    businesses: [
      'factories and their vendor units',
      'highway eateries and thatte idli stalls',
      'resorts and weekend stays',
      'schools and PU colleges',
      'farm-supply and agricultural shops',
      'hardware and building-material shops',
      'transport and logistics operators',
    ],
    landmarks: [
      'Toyota Kirloskar Motor plant',
      'Wonderla Bengaluru',
      'Bidadi Industrial Area',
      'Bengaluru–Mysuru Expressway',
    ],
    nearby: ['kumbalgodu', 'kengeri', 'kengeri-satellite-town', 'tavarekere'],
    competition: 'low',
    searchHabits:
      'Two very different groups search here: Bengaluru visitors looking on their phones for resorts, food and day trips, and residents and factory staff searching in Kannada for schools, clinics and services in town. Industrial buyers look for suppliers, transporters and contractors near the industrial area.',
    realEstate:
      'Plotted layouts, farmland and villa or resort-style projects make up most of the market, bought by investors expecting the town to grow as Bengaluru spreads along the Mysuru road. Rental demand comes from factory employees and contract staff.',
    industries: [
      'manufacturing',
      'automotive',
      'hospitality-and-hotels',
      'travel-and-tourism',
      'real-estate',
    ],
  },

  binnypet: {
    coords: [12.966, 77.563],
    character:
      'An old industrial neighbourhood west of the City Railway Station, named after Binny Mills, the textile mill that once employed much of the area. Part of the mill land has been redeveloped into apartment towers and a mall, which stand beside older streets of workers’ housing, small shops and wholesale trade spilling over from Cottonpet and Chickpet. It sits between Magadi Road and Mysore Road, a short ride from Majestic.',
    businesses: [
      'wholesale and trading firms',
      'textile and garment traders',
      'transport and goods-delivery operators',
      'grocery and provision stores',
      'clinics and pharmacies',
      'eateries and tea stalls',
    ],
    landmarks: ['Binny Mills', 'Tank Bund Road', 'KSR Bengaluru City Railway Station'],
    nearby: ['cottonpet', 'chamarajpet', 'magadi-road', 'majestic', 'chickpet', 'kr-market'],
    competition: 'medium',
    searchHabits:
      'Traders and wholesale buyers search by product and area – “wholesale … Binnypet”, “near City Market” – and do much of their business over phone calls and WhatsApp. Newer apartment residents search like the rest of the city, on their phones, for food delivery, gyms, doctors and home services.',
    realEstate:
      'Two markets side by side: high-rise apartments on the former mill land, bought by families who want a central address, and old houses and commercial plots in the surrounding streets that rarely come up for sale.',
    industries: [
      'textiles-and-garments',
      'retail',
      'industrial-and-b2b-supplies',
      'real-estate',
      'logistics-and-transport',
    ],
  },

  'chandra-layout': {
    coords: [12.957, 77.524],
    character:
      'A residential layout south-west of Vijayanagar, between Attiguppe and Nagarbhavi, made up of streets of independent houses. It is a quiet family area of Kannada-speaking households, many of them long-time owners, and its main road has a short run of clinics, bakeries, schools and shops. Nagarbhavi Circle on the Outer Ring Road and the Attiguppe metro station are each a few minutes away.',
    businesses: [
      'clinics and dental practices',
      'schools and preschools',
      'bakeries and condiment stores',
      'tuition and dance classes',
      'tailors and boutiques',
      'salons',
    ],
    landmarks: ['Chandra Layout Main Road', 'Nagarabhavi Road', 'Nagarbhavi Circle'],
    nearby: [
      'attiguppe',
      'hampi-nagar',
      'nagarbhavi',
      'moodalapalya',
      'nayandahalli',
      'vijayanagar',
    ],
    competition: 'medium',
    searchHabits:
      'Families search for schools, doctors and home services close to the layout and give weight to recommendations from neighbours and residents’ WhatsApp groups. Many searches are in Kannada, and people use “Chandra Layout” and “Vijayanagar” interchangeably when looking for something nearby.',
    realEstate:
      'A stable market of independent houses on layout plots, with some owners rebuilding to add rental floors. Sales are mostly resale, to families who already know the area.',
    industries: [
      'education-and-schools',
      'clinics-and-doctors',
      'home-services',
      'beauty-and-cosmetics',
    ],
  },

  'deepanjali-nagar': {
    coords: [12.952, 77.536],
    character:
      'A mixed residential and industrial stretch along Mysore Road, between the Satellite Bus Station and Nayandahalli, with the BHEL campus on its edge. Small houses and apartment buildings sit behind a main road lined with workshops, shops and eateries. The Deepanjali Nagar metro station on the Purple Line makes it an easy commute into the city.',
    businesses: [
      'auto-repair garages and spare-parts dealers',
      'hardware and electrical shops',
      'clinics and pharmacies',
      'small manufacturing and job-work units',
      'provision stores',
      'PG accommodation and rental rooms',
    ],
    landmarks: ['Deepanjali Nagar metro station', 'BHEL, Mysore Road', 'Mysore Road'],
    nearby: [
      'bapuji-nagar',
      'hampi-nagar',
      'mysore-road',
      'attiguppe',
      'chandra-layout',
      'nayandahalli',
    ],
    competition: 'medium',
    searchHabits:
      'Commuters search on their phones around the metro station for food, pharmacies, PGs and repairs. Local workshops get found on Google Maps and JustDial when a customer types a part or service together with “Mysore Road”.',
    realEstate:
      'Small independent houses and older apartment buildings, with rentals in demand from metro commuters and workers. Plots facing the main road are valued for commercial use.',
    industries: [
      'automotive',
      'manufacturing',
      'industrial-and-b2b-supplies',
      'clinics-and-doctors',
      'real-estate',
    ],
  },

  'dodda-gollarahatti': {
    coords: [12.989, 77.473],
    character:
      'A former village on Magadi Road past Herohalli and Byadarahalli, now one of the urbanising pockets at Bengaluru’s western edge. Revenue layouts, small independent houses and vacant plots have spread across what was farmland, and parts of it still feel semi-rural. Most residents are young families and workers who commute along Magadi Road.',
    businesses: [
      'building-material and hardware shops',
      'real-estate agents and plot developers',
      'provision stores',
      'clinics and pharmacies',
      'small private schools',
      'two-wheeler garages',
    ],
    landmarks: ['Magadi Road', 'Byadarahalli'],
    nearby: ['herohalli', 'andrahalli', 'sunkadakatte', 'ullal', 'gnana-ganga-nagar'],
    competition: 'low',
    searchHabits:
      'Searches are local and practical – plots, contractors, building materials, schools and clinics – and mostly in Kannada on mobile. Many people still find shops and contractors by asking around, so a business that shows up on Google Maps with photos, reviews and the right pin is easy to notice.',
    realEstate:
      'An early-stage market of plotted layouts and small independent houses, many on revenue land, so buyers check approvals and khata carefully. Buyers are budget-conscious families and investors expecting Magadi Road to keep developing, including the planned metro line to Kadabagere.',
    industries: [
      'real-estate',
      'construction-and-contractors',
      'education-and-schools',
      'industrial-and-b2b-supplies',
    ],
  },

  'gnana-ganga-nagar': {
    coords: [12.953, 77.491],
    character:
      'A cluster of residential layouts on the north-western side of Bangalore University’s Jnanabharathi campus, strung along Ullal Main Road towards Ullal. It is made up of society and private layouts of independent houses, home to salaried families rather than the students who fill the campus side. The university’s wooded land and Mallathahalli Lake nearby keep its streets quieter than the main roads around it.',
    businesses: [
      'provision stores and supermarkets',
      'clinics and diagnostic centres',
      'preschools and tuition classes',
      'bakeries and small eateries',
      'interior and construction contractors',
      'plumbing and electrical services',
    ],
    landmarks: [
      'Ullal Main Road',
      'Bangalore University, Jnanabharathi campus',
      'Mallathahalli Lake',
    ],
    nearby: ['ullal', 'mallathahalli', 'jnana-bharathi', 'nagarbhavi', 'kengeri-satellite-town'],
    competition: 'low',
    searchHabits:
      'The name is spelt several ways – Gnana Ganga Nagar, Jnana Ganga Nagar – so residents often search by layout name or “Ullal Main Road” instead. Families lean on neighbours and layout WhatsApp groups for recommendations, then check Google reviews before calling.',
    realEstate:
      'Mostly independent houses on society and private layout plots, with a few low-rise apartment buildings and vacant sites still being built on. Buyers are families looking for a quieter address within reach of Nagarbhavi and Mysore Road.',
    industries: [
      'real-estate',
      'construction-and-contractors',
      'interior-design',
      'clinics-and-doctors',
      'education-and-schools',
    ],
  },

  'govindaraja-nagar': {
    coords: [12.977, 77.538],
    character:
      'A dense middle-class residential area north of Vijayanagar, on either side of Chord Road up to Magadi Road, that gives its name to the surrounding assembly constituency. Its layouts – MC Layout, Agrahara Dasarahalli and others – are packed with independent houses, and the main roads are lined with shops, clinics and small businesses serving them. It is solidly Kannada-speaking and locally rooted.',
    businesses: [
      'clinics, nursing homes and labs',
      'grocery, provision and department stores',
      'tuition centres',
      'tailoring and boutique shops',
      'hardware and paint shops',
      'small eateries and condiment shops',
    ],
    landmarks: ['Chord Road', 'MC Layout', 'Agrahara Dasarahalli'],
    nearby: [
      'vijayanagar',
      'prashanth-nagar',
      'rpc-layout',
      'magadi-road',
      'kamakshipalya',
      'basaveshwaranagar',
    ],
    competition: 'medium',
    searchHabits:
      'People here mostly search in Kannada or mixed Kannada-English and trust a reputation built over years. Searches often name a layout – MC Layout, Agrahara Dasarahalli – or say “near Vijayanagar”, so businesses that list those names in their profiles show up more often.',
    realEstate:
      'A tightly built market of independent houses on small plots, with older homes being replaced by multi-floor buildings let to tenants. Fresh supply is rare, and buyers are mostly families with roots in west Bengaluru.',
    industries: [
      'retail',
      'clinics-and-doctors',
      'coaching-and-test-prep',
      'fashion-and-apparel',
      'home-services',
    ],
  },

  'hampi-nagar': {
    coords: [12.959, 77.535],
    character:
      'A residential pocket of Vijayanagar 2nd Stage beside Chord Road, between Attiguppe and Bapuji Nagar. Its cross streets hold independent houses and small apartment buildings, while the stretch towards Chord Road and Chandra Layout Main Road has cafés, ice-cream parlours, clinics and shops used by the surrounding layouts. Long-settled families live alongside younger tenants who commute from the Attiguppe metro.',
    businesses: [
      'cafés, ice-cream parlours and bakeries',
      'clinics and physiotherapy centres',
      'tuition and music classes',
      'beauty parlours and salons',
      'stationery and xerox shops',
      'home-food and catering services',
    ],
    landmarks: ['Chord Road', 'Vijayanagar 2nd Stage', 'Attiguppe metro station'],
    nearby: [
      'attiguppe',
      'bapuji-nagar',
      'deepanjali-nagar',
      'chandra-layout',
      'vijayanagar',
      'rpc-layout',
    ],
    competition: 'medium',
    searchHabits:
      'Younger residents find cafés, salons and classes on Instagram and Google, while older families stick with names they know and ask neighbours. Searches often say “Vijayanagar 2nd Stage” or “near Attiguppe metro” rather than Hampi Nagar.',
    realEstate:
      'Independent houses and small apartment buildings on settled plots, with rebuilding rather than new layouts adding supply. Rentals near Chord Road and the metro are in steady demand.',
    industries: [
      'restaurants-and-food',
      'beauty-and-cosmetics',
      'clinics-and-doctors',
      'coaching-and-test-prep',
    ],
  },

  hegganahalli: {
    coords: [13.003, 77.51],
    character:
      'A densely built working-class area just south of Peenya 2nd Stage, where houses sit side by side with workshops and small factories. The Doddanna Industrial Estate and the units along Hegganahalli Main Road supply Peenya’s larger manufacturers, and many residents work in them. Modest rents draw factory workers, tenants and small business owners.',
    businesses: [
      'small engineering and fabrication units',
      'machine shops and job-work units',
      'hardware, electrical and tool shops',
      'provision stores',
      'clinics and pharmacies',
      'eateries and tea stalls for workers',
    ],
    landmarks: ['Hegganahalli Main Road', 'Doddanna Industrial Estate', 'Peenya 2nd Stage'],
    nearby: ['sunkadakatte', 'laggere', 'andrahalli', 'herohalli', 'kurubarahalli', 'peenya'],
    competition: 'low',
    searchHabits:
      'Industrial buyers search for job-work, fabrication and machining by process and area – “CNC job work Peenya”, “sheet metal Hegganahalli” – while residents search in Kannada for clinics, shops and repairs close by. Many deals still start with a phone call or an IndiaMART enquiry.',
    realEstate:
      'Small independent houses and rental buildings packed into revenue layouts, plus industrial sheds and small plots around the estates. Demand comes from workers renting rooms and small manufacturers looking for affordable shed space.',
    industries: [
      'manufacturing',
      'industrial-and-b2b-supplies',
      'real-estate',
      'clinics-and-doctors',
    ],
  },

  herohalli: {
    coords: [12.991, 77.487],
    character:
      'A former village on Magadi Road that has grown into a large suburb of revenue layouts and new apartment buildings at Bengaluru’s western edge. Herohalli Lake and its park give the area some open space, and Andrahalli Main Road links it north towards Peenya. Residents are a mix of long-time local families and newer arrivals who chose it for more affordable homes.',
    businesses: [
      'apartment builders and layout developers',
      'supermarkets and provision stores',
      'schools and preschools',
      'clinics and diagnostic centres',
      'hardware and building-material shops',
      'gyms',
    ],
    landmarks: ['Herohalli Lake Park', 'Magadi Road', 'Andrahalli Main Road'],
    nearby: [
      'dodda-gollarahatti',
      'sunkadakatte',
      'andrahalli',
      'hegganahalli',
      'mallathahalli',
      'ullal',
    ],
    competition: 'low',
    searchHabits:
      'Newer residents search on their phones, often in English, for schools, doctors, gyms and home services, and swap recommendations in apartment WhatsApp groups. Long-time residents search in Kannada and go by advice from relatives and neighbours.',
    realEstate:
      'A growing market of mid-sized apartment projects, independent houses and plotted layouts, aimed at first-time buyers who find Vijayanagar and Basaveshwaranagar too expensive. The planned Hosahalli–Kadabagere metro line along Magadi Road is part of the case buyers make for the area.',
    industries: [
      'real-estate',
      'construction-and-contractors',
      'education-and-schools',
      'interior-design',
      'clinics-and-doctors',
    ],
  },

  'jnana-bharathi': {
    coords: [12.943, 77.509],
    character:
      'The area around Bangalore University’s large, wooded Jnanabharathi campus, between Nagarbhavi, Mallathahalli and Mysore Road. Life here revolves around the university: students, research scholars, faculty and staff live in the hostels and quarters on campus and in the rental rooms and PGs around it. The Jnanabharathi metro station on Mysore Road connects the campus’s southern edge to the city.',
    businesses: [
      'PGs, hostels and rental rooms',
      'xerox, printing and stationery shops',
      'coaching centres',
      'canteens, juice shops and budget eateries',
      'bookshops',
      'clinics and pharmacies',
    ],
    landmarks: [
      'Bangalore University, Jnanabharathi campus',
      'Jnanabharathi metro station',
      'Mysore Road',
    ],
    nearby: ['nagarbhavi', 'nayandahalli', 'rr-nagar', 'gnana-ganga-nagar', 'mallathahalli'],
    competition: 'low',
    searchHabits:
      'Students search on their phones, mostly in English, for PGs, food, printing and coaching, and compare options on Google and Instagram. Faculty and families nearby search for clinics, schools and home services, often in Kannada.',
    realEstate:
      'There is little private property on the campus itself, so the market is in the layouts around its edges – independent houses, rental buildings and PGs let to students and staff. Rental demand rises and falls with the academic year.',
    industries: [
      'higher-education',
      'coaching-and-test-prep',
      'restaurants-and-food',
      'real-estate',
    ],
  },

  kamakshipalya: {
    coords: [12.984, 77.528],
    character:
      'An older, busy area on Magadi Road just west of Basaveshwaranagar, running up to the Sumanahalli junction where Magadi Road meets the Outer Ring Road. Small houses, rental buildings and shops crowd the streets off the main road, home largely to working- and lower-middle-class Kannada families. Magadi Road traffic makes it a through route, so roadside shops and services see plenty of passing trade.',
    businesses: [
      'auto-repair garages and tyre shops',
      'hardware and plumbing supply shops',
      'grocery and provision stores',
      'clinics and pharmacies',
      'sweet and snacks shops',
      'mobile and electronics shops',
    ],
    landmarks: ['Magadi Road', 'Sumanahalli junction', 'Kaveripura'],
    nearby: [
      'prashanth-nagar',
      'basaveshwaranagar',
      'govindaraja-nagar',
      'moodalapalya',
      'kurubarahalli',
      'sunkadakatte',
    ],
    competition: 'medium',
    searchHabits:
      'Searches are mostly in Kannada and on mobile, for things needed quickly – a mechanic, a pharmacy, a tailor – and people choose by distance and how fast someone answers the phone. Shops on Magadi Road gain from appearing on Google Maps for drivers passing through.',
    realEstate:
      'Independent houses and small rental buildings on tight plots, with shops on the ground floor along Magadi Road. Rents are affordable and in demand from workers, and owners are steadily adding floors.',
    industries: ['automotive', 'retail', 'clinics-and-doctors', 'home-services', 'real-estate'],
  },

  kengeri: {
    coords: [12.912, 77.484],
    character:
      'An old town on Mysore Road at the city’s south-western edge, with Kengeri Satellite Town laid out beside it as a planned residential township. The Purple Line metro now runs through Kengeri, and the area has filled with apartments and layouts for families looking for more affordable homes. Engineering colleges, warehouses and highway eateries along Mysore Road make up much of its commercial side.',
    businesses: [
      'apartment projects and plotted layouts',
      'schools and PU colleges',
      'engineering colleges',
      'clinics and nursing homes',
      'hardware and building-material shops',
      'restaurants and dhabas on Mysore Road',
      'warehouses and logistics',
    ],
    landmarks: ['Mysore Road', 'Kengeri Metro station', 'Kengeri TTMC bus terminal'],
    nearby: ['kengeri-satellite-town', 'rr-nagar', 'jnana-bharathi', 'kumbalgodu', 'ullal'],
    competition: 'low',
    searchHabits:
      'Many residents commute towards the city, so they search on their phones in the evenings and at weekends for schools, clinics and services near home. Kannada searches are common, and people often add “Kengeri Satellite Town” or the layout name to narrow the results.',
    realEstate:
      'An affordable, expanding market of plotted layouts, independent houses and mid-sized apartment projects, helped by the metro and Mysore Road. Buyers are first-time home owners, salaried families and investors buying plots for the long term.',
    industries: [
      'real-estate',
      'construction-and-contractors',
      'higher-education',
      'education-and-schools',
    ],
  },

  'kengeri-satellite-town': {
    coords: [12.926, 77.482],
    character:
      'A planned residential township laid out north of Kengeri railway station, separate from the old Kengeri town on Mysore Road. Its streets of independent houses are calmer and more spread out than old Kengeri, and most residents are settled families. To the west, Kommaghatta Main Road leads to the BDA’s Nadaprabhu Kempegowda Layout, which is gradually filling with new homes.',
    businesses: [
      'clinics and nursing homes',
      'schools and preschools',
      'supermarkets and provision stores',
      'bakeries and darshinis',
      'house-construction and interior contractors',
      'tuition and yoga classes',
    ],
    landmarks: ['Kengeri railway station', 'Kommaghatta Main Road', 'Nadaprabhu Kempegowda Layout'],
    nearby: [
      'kengeri',
      'ullal',
      'gnana-ganga-nagar',
      'jnana-bharathi',
      'rr-nagar',
      'mallathahalli',
    ],
    competition: 'low',
    searchHabits:
      'Residents type “Kengeri Satellite Town” in full to separate it from old Kengeri, and look for clinics, schools and house-construction help within the township. Older residents still rely on names they know and neighbours’ advice.',
    realEstate:
      'Independent houses on planned township sites make up most of the market, alongside the rebuilding of older homes and new construction in Nadaprabhu Kempegowda Layout nearby. Buyers want a planned, quieter address with the Kengeri metro and Mysore Road close at hand.',
    industries: [
      'real-estate',
      'construction-and-contractors',
      'clinics-and-doctors',
      'education-and-schools',
      'interior-design',
    ],
  },

  kumbalgodu: {
    coords: [12.878, 77.445],
    character:
      'An industrial belt on Mysore Road beyond Kengeri, at the city’s south-western edge, built around the KIADB Kumbalgodu Industrial Area and a KSSIDC industrial estate. Factories, warehouses and engineering units line the highway, while the old village and newer layouts around them house the workers. Rajarajeshwari Medical College and Hospital and ACS College of Engineering at nearby Kambipura bring students and patients to the area.',
    businesses: [
      'manufacturing and engineering units',
      'warehouses and logistics operators',
      'industrial suppliers and machine shops',
      'highway eateries and dhabas',
      'student PGs and rental rooms',
      'clinics and pharmacies',
    ],
    landmarks: [
      'Kumbalgodu Industrial Area',
      'Bengaluru–Mysuru Expressway',
      'Rajarajeshwari Medical College and Hospital',
    ],
    nearby: ['kengeri', 'kengeri-satellite-town', 'bidadi', 'tavarekere', 'rr-nagar'],
    competition: 'low',
    searchHabits:
      'Most searches are B2B: procurement teams look for manufacturers, job-work units, transporters and industrial suppliers by product and location, on Google and IndiaMART. Workers and students nearby search on mobile for rooms, food and clinics.',
    realEstate:
      'Industrial plots and sheds in the KIADB and KSSIDC estates, plus plotted layouts and small apartment projects along the highway. Buyers are manufacturers, warehouse operators and investors expecting growth along the Mysuru corridor.',
    industries: [
      'manufacturing',
      'industrial-and-b2b-supplies',
      'logistics-and-transport',
      'higher-education',
      'healthcare-and-hospitals',
    ],
  },

  kurubarahalli: {
    coords: [13.001, 77.536],
    character:
      'A residential area in north-west Bengaluru between Basaveshwaranagar and Mahalakshmi Layout, along Pipeline Road and Modi Hospital Main Road. It grew from an old village into a dense neighbourhood of independent houses and small apartment buildings, taking in pockets such as JC Nagar and Kirloskar Colony. Its largely Kannada-speaking population is served by a steady mix of neighbourhood shops, clinics and small offices.',
    businesses: [
      'clinics and diagnostic centres',
      'grocery and department stores',
      'tuition centres',
      'bakeries and condiment stores',
      'beauty parlours',
      'electrical and hardware shops',
    ],
    landmarks: ['Pipeline Road', 'Modi Hospital Main Road', 'JC Nagar'],
    nearby: [
      'basaveshwaranagar',
      'nandini-layout',
      'mahalakshmi-layout',
      'laggere',
      'kamakshipalya',
      'rajajinagar',
    ],
    competition: 'medium',
    searchHabits:
      'People search in Kannada and English for clinics, tutors and shops close to home and often name the better-known area next door – Basaveshwaranagar or Mahalakshmi Layout – in their searches. Recommendations from family and neighbours carry a lot of weight.',
    realEstate:
      'Independent houses on small plots and low-rise apartments, mostly resale, with older houses rebuilt into rental floors. Buyers are local families and those who find Basaveshwaranagar and Rajajinagar out of reach.',
    industries: ['clinics-and-doctors', 'retail', 'coaching-and-test-prep', 'real-estate'],
  },

  laggere: {
    coords: [13.011, 77.521],
    character:
      'A crowded, fast-grown area on the Outer Ring Road next to Peenya Industrial Area, home to many of the workers who keep Peenya’s factories running. Houses are small and close together in revenue layouts, with shops on almost every street, and Laggere Main Road is busy through the day.',
    businesses: [
      'small manufacturing and job-work units',
      'hardware and electrical shops',
      'provision stores and vegetable markets',
      'clinics and pharmacies',
      'mobile and electronics shops',
      'two-wheeler garages',
    ],
    landmarks: ['Laggere Main Road', 'Outer Ring Road', 'Peenya Industrial Area'],
    nearby: [
      'nandini-layout',
      'hegganahalli',
      'kurubarahalli',
      'peenya',
      'mahalakshmi-layout',
      'sunkadakatte',
    ],
    competition: 'low',
    searchHabits:
      'Most searches are on mobile and in Kannada, for affordable clinics, shops and repairs nearby, and people prefer to call or WhatsApp before visiting. Small manufacturers find buyers and suppliers through IndiaMART, JustDial and word of mouth in Peenya.',
    realEstate:
      'Densely built independent houses and rental buildings on small plots, many on revenue land. Demand is mostly for rentals from factory workers, with buyers looking for affordable houses close to Peenya.',
    industries: ['manufacturing', 'industrial-and-b2b-supplies', 'clinics-and-doctors', 'retail'],
  },

  'magadi-road': {
    coords: [12.976, 77.55],
    character:
      'One of west Bengaluru’s main arterial roads, running from Binnypet and the city centre out past Kamakshipalya and Sumanahalli towards Magadi. Its inner stretch, around the Magadi Road metro station and GT World Mall, is lined with traders, showrooms, hardware dealers and eateries, with older residential pockets on either side. Further out it turns into a corridor of new layouts and apartments, with a metro line to Kadabagere planned along it.',
    businesses: [
      'hardware and building-material dealers',
      'automobile showrooms and service centres',
      'wholesale and trading firms',
      'restaurants and bakeries',
      'clinics and nursing homes',
      'furniture shops',
    ],
    landmarks: ['GT World Mall', 'Magadi Road metro station', 'Sumanahalli junction'],
    nearby: [
      'rpc-layout',
      'govindaraja-nagar',
      'binnypet',
      'rajajinagar',
      'basaveshwaranagar',
      'kamakshipalya',
    ],
    competition: 'medium',
    searchHabits:
      'Searches are often for a product or dealer plus “Magadi Road” – hardware, auto parts, furniture – from buyers across west Bengaluru who know the road better than the layouts around it. Shoppers heading to GT World Mall and nearby eateries find places on Google Maps and Instagram.',
    realEstate:
      'Commercial frontage on the inner stretch is in demand from showrooms and traders, with older houses behind it. Further out, around Sunkadakatte and beyond, apartments and plotted layouts make up most new supply.',
    industries: [
      'retail',
      'automotive',
      'industrial-and-b2b-supplies',
      'furniture-and-home-decor',
      'real-estate',
    ],
  },

  'mahalakshmi-layout': {
    coords: [13.011, 77.545],
    character:
      'A planned residential layout in north-west Bengaluru between Rajajinagar and Yeshwanthpur, known across the city for its Sri Prasanna Veeranjaneya Swamy temple. It is a settled, middle-class Kannada neighbourhood of independent houses and small apartments, with the Mahalakshmi metro station on the Green Line at its edge. Its main roads have clinics, schools, sweet shops and puja stores serving the layout and nearby Nandini Layout.',
    businesses: [
      'clinics and dental practices',
      'schools and coaching centres',
      'sweet shops and darshinis',
      'puja-item and flower shops',
      'gyms and yoga centres',
      'tailors and boutiques',
    ],
    landmarks: ['Sri Prasanna Veeranjaneya Swamy Temple', 'Mahalakshmi metro station'],
    nearby: [
      'nandini-layout',
      'kurubarahalli',
      'subramanyanagar',
      'yeshwanthpur',
      'rajajinagar',
      'laggere',
    ],
    competition: 'medium',
    searchHabits:
      'Residents use the temple and the metro station as reference points, so directions and searches like “near Mahalakshmi Layout temple” are common. Searches mix Kannada and English, and families go by reviews and long-standing reputation.',
    realEstate:
      'A mature market of independent houses with some small apartment buildings, mostly resale. Buyers are families who want a settled layout with metro access, close to Rajajinagar and Malleshwaram.',
    industries: [
      'clinics-and-doctors',
      'education-and-schools',
      'religious-and-spiritual',
      'retail',
      'fitness-and-sports',
    ],
  },

  mallathahalli: {
    coords: [12.965, 77.5],
    character:
      'A former village west of Nagarbhavi that has grown into layouts such as Vinayaka Layout and NGEF Layout around Mallathahalli Lake. Dr Ambedkar Institute of Technology sits here near the Outer Ring Road, so engineering students share the area with families in independent houses. Kengunte Circle is the junction most people use to give directions.',
    businesses: [
      'student PGs and rental rooms',
      'xerox, stationery and computer shops',
      'budget eateries and juice shops',
      'clinics and pharmacies',
      'house-construction contractors',
      'provision stores',
    ],
    landmarks: ['Mallathahalli Lake', 'Dr Ambedkar Institute of Technology', 'Kengunte Circle'],
    nearby: [
      'nagarbhavi',
      'gnana-ganga-nagar',
      'ullal',
      'jnana-bharathi',
      'moodalapalya',
      'sunkadakatte',
    ],
    competition: 'low',
    searchHabits:
      'Engineering students search in English for PGs, food, printing and laptop repair near the college, while families search in Kannada and English for clinics, tutors and builders. Many people use “Nagarbhavi” and “Mallathahalli” interchangeably in searches.',
    realEstate:
      'Independent houses in society layouts, plus rental buildings and PGs aimed at students. Buyers are families who want a quieter area near Nagarbhavi and the Outer Ring Road.',
    industries: [
      'higher-education',
      'real-estate',
      'construction-and-contractors',
      'restaurants-and-food',
    ],
  },

  moodalapalya: {
    coords: [12.971, 77.522],
    character:
      'A residential area on Nagarabhavi Road between Vijayanagar and Nagarbhavi, made up of layouts such as GKW Layout with closely built independent houses. It is a settled Kannada middle-class neighbourhood, and its main road carries a long run of shops, clinics and eateries. Sitting between Vijayanagar’s shopping streets and the Outer Ring Road, it is a short trip to either.',
    businesses: [
      'clinics and diagnostic labs',
      'supermarkets and provision stores',
      'bakeries and sweet shops',
      'tuition centres',
      'salons and beauty parlours',
      'electrical and plumbing contractors',
    ],
    landmarks: ['Nagarabhavi Road', 'GKW Layout', 'Outer Ring Road'],
    nearby: [
      'prashanth-nagar',
      'attiguppe',
      'chandra-layout',
      'kamakshipalya',
      'vijayanagar',
      'nagarbhavi',
    ],
    competition: 'medium',
    searchHabits:
      'Families search for nearby clinics, tutors and home services, mostly in Kannada or mixed language, and trust neighbours’ suggestions. Businesses on Nagarabhavi Road are found by people driving between Vijayanagar and Nagarbhavi, so Google Maps visibility matters.',
    realEstate:
      'Independent houses on small layout plots, with a few low-rise apartments and older homes being rebuilt for rental income. Most buyers are west Bengaluru families moving within the area.',
    industries: ['clinics-and-doctors', 'retail', 'home-services', 'coaching-and-test-prep'],
  },

  'mysore-road': {
    coords: [12.947, 77.53],
    character:
      'The highway corridor running south-west from the city market area through Bapuji Nagar, Deepanjali Nagar, Nayandahalli and RR Nagar towards Kengeri and on to Mysuru. Its inner stretch mixes the KSRTC Satellite Bus Station, BHEL, workshops, showrooms and godowns with older residential pockets, and the Purple Line metro runs along much of it. Further out come colleges such as RV College of Engineering, tech campuses and newer apartment projects.',
    businesses: [
      'automobile showrooms and service centres',
      'warehouses and transport companies',
      'industrial suppliers and workshops',
      'hotels and highway restaurants',
      'engineering and degree colleges',
      'hardware and building-material dealers',
    ],
    landmarks: [
      'Mysore Road metro station',
      'KSRTC Mysore Road Satellite Bus Station',
      'RV College of Engineering',
    ],
    nearby: [
      'deepanjali-nagar',
      'nayandahalli',
      'bapuji-nagar',
      'chandra-layout',
      'rr-nagar',
      'jnana-bharathi',
    ],
    competition: 'medium',
    searchHabits:
      'Searches along the corridor are often a business type plus “Mysore Road” – car service, transport, hotels, wholesale supplies – from buyers across the city and from travellers heading to Mysuru. B2B buyers compare suppliers on Google and IndiaMART before calling.',
    realEstate:
      'Commercial and industrial property dominates the inner stretch, with showrooms, godowns and workshops on the main road. Further out towards RR Nagar and Kengeri, apartment projects and layouts draw buyers who want metro access.',
    industries: [
      'automotive',
      'logistics-and-transport',
      'industrial-and-b2b-supplies',
      'hospitality-and-hotels',
      'higher-education',
    ],
  },

  nagarbhavi: {
    coords: [12.958, 77.511],
    character:
      'A residential area in west Bengaluru along the Outer Ring Road, between Vijayanagar and RR Nagar, made up largely of BDA and society layouts with independent houses. It is home to the National Law School of India University and borders Bangalore University’s Jnanabharathi campus, so students and faculty are part of the local mix. Most residents are settled families, with students renting rooms near the campuses.',
    businesses: [
      'coaching centres and tuition classes',
      'clinics and pharmacies',
      'student PGs and rental rooms',
      'restaurants, bakeries and juice shops',
      'supermarkets',
      'construction and interior contractors',
    ],
    landmarks: [
      'National Law School of India University',
      'Bangalore University, Jnanabharathi campus',
      'Nagarbhavi Circle',
      'Outer Ring Road',
    ],
    nearby: [
      'chandra-layout',
      'mallathahalli',
      'jnana-bharathi',
      'moodalapalya',
      'vijayanagar',
      'nayandahalli',
    ],
    competition: 'low',
    searchHabits:
      'Families search in Kannada and English for doctors, tutors and home services close to their layout, and rely on neighbours’ recommendations. Students search on their phones for food, PGs, printing and stationery around the campuses.',
    realEstate:
      'Mainly independent houses on BDA and society layout plots, with a smaller number of apartment buildings. Buyers are mostly families who want a quieter west Bengaluru address with good links along the Outer Ring Road.',
    industries: [
      'coaching-and-test-prep',
      'higher-education',
      'real-estate',
      'clinics-and-doctors',
    ],
  },

  'nandini-layout': {
    coords: [13.013, 77.534],
    character:
      'A residential area in north-west Bengaluru between Mahalakshmi Layout and Laggere, close to where the Outer Ring Road meets Tumakuru Road at Goraguntepalya. Its layouts, including Jai Maruthi Nagar, are filled with the independent houses of middle-class Kannada families. Kanteerava Studio, where the memorials of Dr Rajkumar and Puneeth Rajkumar stand, is on its northern edge.',
    businesses: [
      'clinics and nursing homes',
      'schools and tuition centres',
      'grocery and department stores',
      'bakeries and sweet shops',
      'auto-repair garages',
      'electrical and hardware shops',
    ],
    landmarks: ['Kanteerava Studio', 'Nandini Layout Road', 'Outer Ring Road'],
    nearby: [
      'mahalakshmi-layout',
      'kurubarahalli',
      'laggere',
      'yeshwanthpur',
      'peenya',
      'basaveshwaranagar',
    ],
    competition: 'medium',
    searchHabits:
      'People here search in Kannada or mixed Kannada-English for clinics, schools and services within the layout, and often name Nandini Layout or Jai Maruthi Nagar rather than relying on “near me”. Word of mouth among neighbours still decides a lot.',
    realEstate:
      'Independent houses on layout plots with some apartment buildings, mostly resale and rebuilding. Buyers are families who want a settled address near Yeshwanthpur and the Outer Ring Road.',
    industries: ['clinics-and-doctors', 'education-and-schools', 'retail', 'home-services'],
  },

  nayandahalli: {
    coords: [12.943, 77.522],
    character:
      'A junction area where the Outer Ring Road crosses Mysore Road, centred on the Nayandahalli flyover and metro station. Workshops, small factories, godowns and transport yards line the roads, with Pantarapalya and other dense residential pockets behind them. Trucks, buses and commuters pass through all day, so most businesses here serve trade and traffic rather than walk-in shoppers.',
    businesses: [
      'small manufacturing and fabrication units',
      'godowns and transport operators',
      'auto-repair garages and spare-parts dealers',
      'hardware and building-material dealers',
      'eateries and tea stalls',
      'PGs and rental rooms',
    ],
    landmarks: ['Nayandahalli metro station', 'Nayandahalli junction', 'Pantarapalya'],
    nearby: [
      'mysore-road',
      'jnana-bharathi',
      'chandra-layout',
      'deepanjali-nagar',
      'rr-nagar',
      'nagarbhavi',
    ],
    competition: 'low',
    searchHabits:
      'Business buyers search for fabricators, transporters and suppliers with “Mysore Road” or “Nayandahalli” in the query, and usually call before visiting. Residents search on mobile in Kannada for clinics, shops and repairs close by.',
    realEstate:
      'Industrial sheds, godowns and commercial plots on the main roads, with small houses and rental buildings behind. Demand comes from small manufacturers and logistics firms needing space close to the city, and from tenants who want metro access.',
    industries: [
      'manufacturing',
      'logistics-and-transport',
      'automotive',
      'industrial-and-b2b-supplies',
    ],
  },

  nelamangala: {
    coords: [13.097, 77.394],
    character:
      'A taluk town on Bengaluru’s north-western edge, where Tumakuru Road (NH-48) and the highway to Hassan and Mangaluru (NH-75) split – a town in its own right rather than a city neighbourhood. It has its own market, bus stands and taluk offices, surrounded by villages and farmland. The highways have made it a base for warehouses, logistics parks and factories, stretching out towards the Dobbaspet industrial area.',
    businesses: [
      'warehouses and logistics parks',
      'manufacturing and processing units',
      'highway hotels and restaurants',
      'agricultural and farm-supply shops',
      'schools and PU colleges',
      'hardware and building-material dealers',
      'clinics and nursing homes',
    ],
    landmarks: [
      'Tumakuru Road (NH-48)',
      'Bengaluru–Mangaluru highway (NH-75)',
      'Nelamangala bus stand',
    ],
    nearby: ['dasarahalli', 'chikkabanavara', 'hesaraghatta', 'andrahalli', 'peenya'],
    competition: 'low',
    searchHabits:
      'Residents search in Kannada for schools, clinics and shops in town, while companies from Bengaluru search for warehouse space, transporters and labour contractors “near Nelamangala”. Travellers on the highways search for food and places to stay on the way.',
    realEstate:
      'A mix of town houses, plotted layouts on the outskirts, and warehousing and industrial land along the highways. Buyers include local families, plot investors and companies leasing or buying land for logistics.',
    industries: [
      'logistics-and-transport',
      'manufacturing',
      'agriculture-and-agritech',
      'real-estate',
      'education-and-schools',
    ],
  },

  'prashanth-nagar': {
    coords: [12.978, 77.531],
    character:
      'A small residential neighbourhood on Nagarabhavi Road between Govindaraja Nagar and Kamakshipalya, part of the dense belt of Kannada middle-class layouts in west Bengaluru. Its streets are made up of independent houses, many rebuilt with rental floors, and corner shops, clinics and schools serve the immediate blocks. Vijayanagar’s shopping streets and Magadi Road are both a short drive away.',
    businesses: [
      'grocery and provision stores',
      'clinics and pharmacies',
      'preschools and tuition classes',
      'tailoring shops',
      'bakeries and darshinis',
      'electricians and plumbing services',
    ],
    landmarks: ['Nagarabhavi Road', 'Magadi Road'],
    nearby: [
      'kamakshipalya',
      'govindaraja-nagar',
      'vijayanagar',
      'moodalapalya',
      'basaveshwaranagar',
    ],
    competition: 'medium',
    searchHabits:
      'Because Prashanth Nagar is small, residents often search using Vijayanagar or Govindaraja Nagar, and local businesses are found as much through those names as their own. Most searches are in Kannada or mixed language, on mobile.',
    realEstate:
      'Independent houses on small plots, with resale homes and rebuilt rental buildings making up the market. Buyers are mainly families already living in and around Govindarajanagar.',
    industries: ['clinics-and-doctors', 'education-and-schools', 'retail', 'home-services'],
  },

  'rpc-layout': {
    coords: [12.969, 77.545],
    character:
      'A residential layout in Vijayanagar 2nd Stage, just east of Chord Road around the Hosahalli metro station, close to where Vijayanagar meets Magadi Road. It is an older neighbourhood of independent houses and small apartments, home to established middle-class families. The Vijayanagar Club is one of its social centres, and the streets have a good share of clinics, classes and professional offices.',
    businesses: [
      'clinics and physiotherapy centres',
      'coaching and tuition centres',
      'sports and fitness classes',
      'restaurants and bakeries',
      'salons and boutiques',
      'CA and small professional offices',
    ],
    landmarks: ['Hosahalli metro station', 'Vijayanagar Club', 'Chord Road'],
    nearby: [
      'vijayanagar',
      'magadi-road',
      'govindaraja-nagar',
      'hampi-nagar',
      'bapuji-nagar',
      'binnypet',
    ],
    competition: 'medium',
    searchHabits:
      'Searches usually say “Vijayanagar 2nd Stage” or “near Hosahalli metro” rather than RPC Layout, so businesses here gain from listing all three names. Residents are comfortable searching in English and check Google reviews before choosing a doctor, tutor or restaurant.',
    realEstate:
      'A mature market of independent houses and small apartment blocks, with rebuilding on older plots. Resale homes are bought by families who want Vijayanagar’s amenities with metro access.',
    industries: [
      'clinics-and-doctors',
      'coaching-and-test-prep',
      'fitness-and-sports',
      'restaurants-and-food',
      'accounting-and-ca-firms',
    ],
  },

  'rr-nagar': {
    coords: [12.927, 77.517],
    character:
      'Rajarajeshwari Nagar, named after the Rajarajeshwari temple, is a large residential suburb off Mysore Road in south-west Bengaluru. It is made up of planned layouts with independent houses and a growing number of apartment complexes, and is popular with families who want space and quieter streets. RV College of Engineering and Global Village Tech Park on Mysore Road bring students and tech workers to its edges.',
    businesses: [
      'schools and coaching centres',
      'apartment complexes and layouts',
      'clinics and diagnostic centres',
      'kalyana mantapas and event halls',
      'supermarkets',
      'restaurants and bakeries',
      'gyms',
    ],
    landmarks: [
      'Rajarajeshwari Temple',
      'Global Village Tech Park',
      'RV College of Engineering',
      'Mysore Road',
    ],
    nearby: [
      'nayandahalli',
      'jnana-bharathi',
      'hosakerehalli',
      'kengeri',
      'uttarahalli',
      'nagarbhavi',
    ],
    competition: 'medium',
    searchHabits:
      'Families look for schools, doctors and services within a few kilometres and trust Google reviews and recommendations from neighbours. Searches mix Kannada and English, and people use both the full name, Rajarajeshwari Nagar, and the short form, RR Nagar.',
    realEstate:
      'A settled market of independent houses in society and private layouts, with newer apartment projects towards Kengeri and Mysore Road. Buyers are mostly families who work in west and south Bengaluru, and the Purple Line metro on Mysore Road has added to interest.',
    industries: [
      'education-and-schools',
      'higher-education',
      'real-estate',
      'clinics-and-doctors',
      'fitness-and-sports',
    ],
  },

  rajajinagar: {
    coords: [12.991, 77.554],
    character:
      'A large planned residential area in west Bengaluru, named after C. Rajagopalachari and divided into numbered blocks, with an industrial area of small manufacturing units on its edge. It has a strong Kannada middle-class and trading community, and Dr Rajkumar Road is lined with showrooms, jewellers, restaurants and banks. The ISKCON temple and Orion Mall at Brigade Gateway sit on its northern side.',
    businesses: [
      'small manufacturing and engineering units',
      'jewellery and textile showrooms',
      'clinics and nursing homes',
      'coaching centres',
      'sweet shops and restaurants',
      'automobile showrooms and service centres',
      'wholesale and trading firms',
    ],
    landmarks: ['ISKCON Temple', 'Orion Mall', 'Dr Rajkumar Road'],
    nearby: [
      'srirampura',
      'subramanyanagar',
      'basaveshwaranagar',
      'magadi-road',
      'malleshwaram',
      'mahalakshmi-layout',
    ],
    competition: 'medium',
    searchHabits:
      'Many businesses here are family-run and well established, and customers often find them by name or through long-standing relationships. Younger buyers search Google and Instagram for showrooms and restaurants on Dr Rajkumar Road, while B2B buyers look for manufacturers and suppliers by product and area.',
    realEstate:
      'A mature market of independent houses and commercial buildings, with apartments coming up on larger redeveloped plots and a few big mixed-use projects such as Brigade Gateway. Buyers are mostly families and business owners with ties to west Bengaluru.',
    industries: [
      'manufacturing',
      'jewellery',
      'retail',
      'clinics-and-doctors',
      'coaching-and-test-prep',
    ],
  },

  srirampura: {
    coords: [12.994, 77.566],
    character:
      'An old, densely populated neighbourhood between Malleshwaram, Rajajinagar and Okalipuram, close to the city centre. Narrow streets of small houses, workshops and shops run back from the main roads, and the community is largely working-class, with families who have lived here for generations. The Srirampura metro station on the Green Line and Mantri Square on Sampige Road are a short walk away.',
    businesses: [
      'small shops and kirana stores',
      'auto-repair and two-wheeler garages',
      'beauty parlours and salons',
      'clinics and pharmacies',
      'meat, fish and vegetable shops',
      'small eateries and tea stalls',
    ],
    landmarks: ['Srirampura metro station', 'Okalipuram', 'Mantri Square Mall'],
    nearby: [
      'seshadripuram',
      'malleshwaram',
      'rajajinagar',
      'subramanyanagar',
      'majestic',
      'magadi-road',
    ],
    competition: 'medium',
    searchHabits:
      'Most customers come from the surrounding streets and find businesses by walking past or asking around, but younger residents now search on their phones for food, repairs and services. Searches mix Kannada and English.',
    realEstate:
      'Small, old houses and mixed-use buildings on tight plots, rarely sold and often rebuilt or rented out. Closeness to Malleshwaram and the metro keeps rental demand steady.',
    industries: ['retail', 'automotive', 'clinics-and-doctors', 'restaurants-and-food'],
  },

  subramanyanagar: {
    coords: [13.004, 77.557],
    character:
      'A residential area between Rajajinagar and Malleshwaram along Dr Rajkumar Road, including Subramanyanagar 2nd Stage. Its quieter streets of independent houses and apartments sit behind one of west Bengaluru’s busiest roads, with Brigade Gateway and Orion Mall at its northern end. Residents are mostly established middle-class families, joined by apartment owners who work across the city.',
    businesses: [
      'clinics and diagnostic centres',
      'restaurants and cafés',
      'coaching centres',
      'salons and spas',
      'supermarkets',
      'apartment maintenance and home services',
    ],
    landmarks: ['Brigade Gateway and Orion Mall', 'Kuvempu Road metro station', 'Dr Rajkumar Road'],
    nearby: [
      'rajajinagar',
      'srirampura',
      'mahalakshmi-layout',
      'malleshwaram',
      'kurubarahalli',
      'yeshwanthpur',
    ],
    competition: 'medium',
    searchHabits:
      'Two kinds of searcher: shoppers and diners heading to Orion Mall, who use Google and Instagram, and the families who live here, who search in Kannada and English for doctors, classes and services near Rajajinagar.',
    realEstate:
      'Independent houses and older apartment buildings, plus high-rise homes at Brigade Gateway. Buyers range from local families to professionals who want a central west Bengaluru address near the metro.',
    industries: [
      'retail',
      'restaurants-and-food',
      'clinics-and-doctors',
      'beauty-and-cosmetics',
      'real-estate',
    ],
  },

  sunkadakatte: {
    coords: [12.993, 77.503],
    character:
      'A busy junction area on Magadi Road between Kamakshipalya and Herohalli, where Hegganahalli Main Road heads north towards Peenya. It grew quickly from an old village into a dense spread of revenue layouts and rental buildings, home to factory workers, small traders and families looking for affordable housing. Shops, banks, clinics and eateries cluster around the Magadi Road junction.',
    businesses: [
      'provision stores and supermarkets',
      'mobile and electronics shops',
      'clinics and diagnostic labs',
      'tuition centres',
      'bakeries and eateries',
      'hardware and building-material shops',
    ],
    landmarks: ['Magadi Road', 'Hegganahalli Main Road'],
    nearby: [
      'hegganahalli',
      'herohalli',
      'andrahalli',
      'kamakshipalya',
      'mallathahalli',
      'laggere',
    ],
    competition: 'low',
    searchHabits:
      'Searches come mostly from mobile users in Kannada, for affordable clinics, classes, shops and repairs near the junction. Sunkadakatte is a well-known bus stop name, so people use it as the anchor for directions and searches across the layouts around it.',
    realEstate:
      'Independent houses and rental buildings on small revenue-layout plots, with a few small apartment projects. Demand is steady for rentals and for low-cost houses within reach of Peenya and Magadi Road.',
    industries: ['retail', 'clinics-and-doctors', 'coaching-and-test-prep', 'real-estate'],
  },

  tavarekere: {
    coords: [12.963, 77.401],
    character:
      'A small town and hobli centre on Magadi Road in Bangalore South taluk, well beyond the city’s built-up edge, where Bengaluru’s spread meets farmland. It serves the surrounding villages with a market, schools and clinics, and a road north from here leads towards Nelamangala. Plotted layouts and farmhouse projects are appearing along Magadi Road as the city moves west.',
    businesses: [
      'agricultural input and farm-supply shops',
      'dairy and poultry businesses',
      'plot developers and real-estate agents',
      'schools and PU colleges',
      'clinics and pharmacies',
      'hardware and building-material shops',
    ],
    landmarks: ['Magadi Road', 'Nelamangala Road'],
    nearby: ['dodda-gollarahatti', 'ullal', 'kengeri-satellite-town', 'herohalli', 'kumbalgodu'],
    competition: 'low',
    searchHabits:
      'Searches for “Tavarekere” often bring up the Tavarekere near BTM Layout in south Bengaluru, so local businesses need “Magadi Road” in their name or listing to be found. Residents search in Kannada for schools, clinics, farm supplies and services in town.',
    realEstate:
      'Mostly plotted layouts, farmland and farmhouse plots, with a small market of independent houses in town. Buyers are investors and Bengaluru families buying land for the long term as Magadi Road develops.',
    industries: [
      'agriculture-and-agritech',
      'real-estate',
      'education-and-schools',
      'construction-and-contractors',
    ],
  },

  ullal: {
    coords: [12.955, 77.479],
    character:
      'An old village on the city’s western edge, beside Ullal Lake, now surrounded by Ullal Upanagara and the BDA’s large Sir M Visvesvaraya Layout. Much of the layout land is still being built on, so finished houses, vacant sites and construction sit side by side. Residents are a mix of the original village families and newer owners who built on allotted BDA sites.',
    businesses: [
      'house-construction contractors',
      'building-material and hardware shops',
      'provision stores',
      'clinics and pharmacies',
      'preschools and tuition classes',
      'interior and modular-kitchen workshops',
    ],
    landmarks: ['Ullal Lake', 'Sir M Visvesvaraya Layout', 'Ullal Upanagara'],
    nearby: [
      'gnana-ganga-nagar',
      'mallathahalli',
      'kengeri-satellite-town',
      'dodda-gollarahatti',
      'jnana-bharathi',
      'herohalli',
    ],
    competition: 'low',
    searchHabits:
      'Site owners search for architects, contractors, building materials and interiors as they build, often comparing quotes over WhatsApp. Settled residents search in Kannada and English for schools, clinics and shops, often adding “Ullal Upanagara” or “Sir MV Layout” to find what is close.',
    realEstate:
      'Mostly BDA sites in Sir M Visvesvaraya Layout being built on or resold, alongside independent houses in Ullal Upanagara. Buyers are families building their own homes and investors holding sites.',
    industries: [
      'construction-and-contractors',
      'real-estate',
      'interior-design',
      'architecture',
      'education-and-schools',
    ],
  },

  vijayanagar: {
    coords: [12.971, 77.537],
    character:
      'An established residential area in west Bengaluru with a large Kannada-speaking middle-class population. Its main roads and the streets off Chord Road carry a dense mix of clinics, textile shops, jewellers and eateries that serve the surrounding layouts. The Purple Line metro links it directly to Majestic and MG Road.',
    businesses: [
      'clinics and diagnostic centres',
      'textile and saree shops',
      'jewellery stores',
      'coaching and tuition centres',
      'darshinis and sweet shops',
      'gyms',
      'mobile and electronics shops',
    ],
    landmarks: ['Vijayanagar Metro station', 'Chord Road', 'Magadi Road'],
    nearby: [
      'govindaraja-nagar',
      'rpc-layout',
      'attiguppe',
      'hampi-nagar',
      'prashanth-nagar',
      'rajajinagar',
    ],
    competition: 'medium',
    searchHabits:
      'People from surrounding areas such as Chandra Layout and Govindarajanagar treat Vijayanagar as their shopping and clinic destination, so many searches say “near Vijayanagar” rather than a specific street. Kannada searches are common, and reviews and family recommendations weigh heavily.',
    realEstate:
      'A mature market of independent houses and small apartment buildings with very little new land. Supply comes mostly from resale homes and the redevelopment of older houses, bought mainly by families already living in west Bengaluru.',
    industries: [
      'retail',
      'jewellery',
      'clinics-and-doctors',
      'coaching-and-test-prep',
      'fitness-and-sports',
    ],
  },
} satisfies Partial<Record<LocalitySlug, LocalityProfile>>;
