import type { LocalityProfile } from '@/types/pseo';
import type { LocalitySlug } from '../slugs';

// South Bengaluru – BMU's home ground (studio in JP Nagar 9th Phase). In the sheet's order.
export const southLocalities = {
  adugodi: {
    coords: [12.943, 77.608],
    character:
      'An older neighbourhood on Hosur Road between Koramangala and Wilson Garden that grew from the village of Adugodi, which stood here before Koramangala was laid out. Bosch’s long-standing Adugodi campus is on Hosur Road, and Nexus Koramangala (formerly Forum Mall) sits on the area’s southern edge. Behind the main road are tight lanes of small houses and rental rooms, home to working families and people employed in nearby Koramangala.',
    businesses: [
      'small eateries and tea stalls',
      'mobile phone and electronics repair shops',
      'clinics and pharmacies',
      'rental rooms and PGs',
      'grocery and provision stores',
      'two-wheeler workshops',
      'tailors and alteration shops',
    ],
    landmarks: ['Bosch campus, Hosur Road', 'Dairy Circle', 'Christ University, Hosur Road'],
    nearby: [
      'koramangala',
      'lakkasandra',
      'wilson-garden',
      'koramangala-5th-block',
      'neelasandra',
      'btm-layout',
    ],
    competition: 'medium',
    searchHabits:
      'Residents mostly look for everyday services within walking distance – clinics, provision stores, repairs – and many ask neighbours or search in Kannada first. Office workers and mall visitors passing along Hosur Road search Google Maps for food and quick services, often without realising they are in Adugodi rather than Koramangala.',
    realEstate:
      'Mostly older independent houses and small rental buildings on narrow plots, with very little new apartment supply. Buyers are usually local families and small investors who rent rooms to people working in Koramangala and along Hosur Road.',
    industries: [
      'retail',
      'restaurants-and-food',
      'clinics-and-doctors',
      'electronics-and-appliances',
      'automotive',
    ],
  },

  akshayanagar: {
    coords: [12.873, 77.62],
    character:
      'A residential area of plotted layouts and high-rise apartment complexes between Hulimavu and Begur, which grew quickly from the early 2010s. It is reached from Bannerghatta Road by the BDA 80 Feet Road and from Begur along the Hulimavu–Begur Road, where large gated projects such as DLF New Town stand. Its residents are largely IT and corporate employees who work on Bannerghatta Road, in Electronic City and around the Outer Ring Road.',
    businesses: [
      'daily-needs stores serving apartment complexes',
      'pre-schools and day cares',
      'gyms and fitness studios',
      'clinics and diagnostic collection centres',
      'home services – plumbers, electricians and cleaners',
      'interior design and furnishing studios',
      'bakeries and cloud kitchens',
    ],
    landmarks: ['DLF New Town', 'Hulimavu–Begur Road', 'BDA 80 Feet Road', 'Yelenahalli Road'],
    nearby: ['hulimavu', 'begur', 'arekere', 'bilekahalli', 'gottigere', 'hongasandra'],
    competition: 'medium',
    searchHabits:
      'Apartment residents find services through community apps and WhatsApp groups for their gated complex, then check Google Maps reviews before booking. Searches often name the project or road – “salon near DLF New Town”, “day care Akshayanagar”.',
    realEstate:
      'An apartment-led market with large gated towers along the Hulimavu–Begur Road and smaller plotted layouts in between, where independent houses are still going up. Buyers are mostly salaried professionals buying their first or second home, and rental demand from tech workers is steady.',
    industries: [
      'real-estate',
      'interior-design',
      'education-and-schools',
      'fitness-and-sports',
      'home-services',
    ],
  },

  anekal: {
    coords: [12.709, 77.697],
    character:
      'A taluk town at the southern edge of Bengaluru Urban district, about 36 km from the city centre and close to the Tamil Nadu border near Hosur. The old town has its own markets, government offices, colleges and temples and is known for its Karaga and Dasara festivities, while farmland and new plotted layouts spread out towards Chandapura and Attibele. Alliance University’s campus is on its outskirts, and many residents commute to the industrial areas of Jigani, Bommasandra and Electronic City.',
    businesses: [
      'agricultural and dairy supply stores',
      'plotted layout developers',
      'schools and PU colleges',
      'clinics and nursing homes',
      'two-wheeler and tractor dealers',
      'kalyana mantapas',
      'provision and hardware stores',
    ],
    landmarks: [
      'Sri Thimmaraya Swamy Temple',
      'Muthyala Maduvu (Pearl Valley) falls',
      'Chandapura–Anekal Road',
      'Alliance University',
    ],
    nearby: ['chandapura', 'attibele', 'jigani', 'bommasandra', 'sarjapur'],
    competition: 'low',
    searchHabits:
      'Customers search in Kannada as much as in English, and many still rely on word of mouth and WhatsApp forwards. Few local businesses do any search marketing, so a complete Google profile and Kannada content reach people in the town and surrounding villages quickly.',
    realEstate:
      'Mostly plots – approved layouts, farmland and some gated plotted projects – plus independent houses in the old town. Buyers are investors expecting the city to keep moving south, and workers from the Hosur Road industrial belt looking for affordable homes.',
    industries: [
      'real-estate',
      'agriculture-and-agritech',
      'education-and-schools',
      'construction-and-contractors',
      'higher-education',
    ],
  },

  anjanapura: {
    coords: [12.857, 77.553],
    character:
      'A newer BDA layout, officially named Lal Bahadur Shastri Nagara, laid out in eleven blocks east of Kanakapura Road and north of NICE Road, just beyond JP Nagar 8th and 9th Phases. Much of it is still being built up, with new independent houses rising among empty sites and older villages. Its oldest landmark is an Anjaneya temple with inscriptions and hero stones, from the village that stood here before the layout.',
    businesses: [
      'building contractors and civil engineers',
      'hardware and building-material shops',
      'water tanker and borewell services',
      'grocery and provision stores',
      'pre-schools and small schools',
      'clinics and pharmacies',
    ],
    landmarks: [
      'Anjanapura 80 Feet Road (Nadaprabhu Kempegowda Road)',
      'NICE Road',
      'Silk Institute Metro station',
      'Anjaneya temple and hero stones',
    ],
    nearby: [
      'jp-nagar',
      'talaghattapura',
      'gottigere',
      'konanakunte',
      'doddakallasandra',
      'kanakapura-road',
    ],
    competition: 'low',
    searchHabits:
      'Families building or moving into new houses search for contractors, interiors, borewell services and schools, usually adding the block number – “Anjanapura 3rd Block”. Many owners still live elsewhere while they build, so they search from across the city before they visit.',
    realEstate:
      'A BDA plotted layout where many sites are still empty and owners are building independent houses and rental floors, with a few small apartment projects nearby. Buyers are families building their own homes and long-term investors who bought sites through BDA allotments and auctions.',
    industries: [
      'construction-and-contractors',
      'real-estate',
      'interior-design',
      'home-services',
      'education-and-schools',
    ],
  },

  arekere: {
    coords: [12.886, 77.6],
    character:
      'A residential area on Bannerghatta Road named after Arekere Lake, split by the road itself into eastern and western halves. Panduranga Nagar, on the west side, has Fortis Hospital and Apollo Hospitals opposite IIM Bangalore, while the east side runs into Hulimavu and Doresanipalya. Growth since the early 2000s came with IT and BPO offices along the road, so many residents are professionals in apartments set among older layouts.',
    businesses: [
      'hospitals, clinics and pharmacies',
      'diagnostic labs',
      'apartment complexes',
      'restaurants and takeaways',
      'schools and pre-schools',
      'gyms',
      'service apartments for patients’ families',
    ],
    landmarks: [
      'Arekere Gate junction',
      'Arekere Lake',
      'Fortis Hospital, Bannerghatta Road',
      'Panduranga Nagar',
    ],
    nearby: [
      'mico-layout',
      'hulimavu',
      'bilekahalli',
      'puttenahalli',
      'bannerghatta-road',
      'akshayanagar',
    ],
    competition: 'medium',
    searchHabits:
      'Patients and their families – many from outside Bengaluru – search for hospitals, pharmacies and places to stay near Arekere by name. Local residents search Google Maps for daily services and food delivery, and lean on apartment WhatsApp groups for trusted recommendations.',
    realEstate:
      'A mix of mid-sized apartment complexes, older BDA and private layouts with independent houses, and rental buildings close to the hospitals. Demand comes from families and professionals who want Bannerghatta Road access, and rentals stay in steady demand.',
    industries: [
      'healthcare-and-hospitals',
      'clinics-and-doctors',
      'real-estate',
      'hospitality-and-hotels',
      'education-and-schools',
    ],
  },

  attibele: {
    coords: [12.778, 77.77],
    character:
      'A border town on Hosur Road where Karnataka meets Tamil Nadu, with the Attibele check post on the highway and the industrial town of Hosur just across the state line. It is one of the industrial areas of Anekal taluk, and goods vehicles, factory buses and interstate buses keep the highway busy through the day. Workers from both states live here, and affordable layouts and apartments are spreading along the highway and the road to Sarjapur.',
    businesses: [
      'manufacturing and engineering units',
      'transport and logistics firms',
      'warehouses and godowns',
      'lodges, dhabas and highway eateries',
      'hardware and industrial supply shops',
      'plotted layout developers',
    ],
    landmarks: [
      'Attibele check post on the Tamil Nadu border',
      'Hosur Road (NH 44)',
      'Attibele Industrial Area',
      'Attibele–Sarjapur Road',
    ],
    nearby: ['chandapura', 'anekal', 'bommasandra', 'sarjapur', 'jigani'],
    competition: 'low',
    searchHabits:
      'Searches come in Kannada, Tamil and English, and many customers are on the move – truck drivers, travellers and factory staff looking for food, lodging, repairs and transport. Businesses here also draw customers from Hosur, so it pays to be visible to searches from both sides of the border.',
    realEstate:
      'Mostly plotted layouts and independent houses, with a few budget apartment projects along Hosur Road and the Sarjapur road. Buyers are factory and warehouse workers, small investors and families who work in Hosur or the Bommasandra–Chandapura belt.',
    industries: [
      'manufacturing',
      'logistics-and-transport',
      'industrial-and-b2b-supplies',
      'real-estate',
      'automotive',
    ],
  },

  'btm-layout': {
    coords: [12.916, 77.61],
    character:
      'Named after the old villages of Byrasandra, Tavarekere and Madiwala, BTM Layout is a dense residential area between Bannerghatta Road and Hosur Road, split into 1st and 2nd Stage. It is known for its large number of paying-guest hostels, and software training institutes, budget eateries and phone shops line its main roads. Most residents are young IT employees, students and job-seekers, alongside older families who bought here in the 1980s and 90s.',
    businesses: [
      'paying-guest hostels',
      'software training and coaching institutes',
      'budget restaurants and messes',
      'mobile and electronics shops',
      'clinics and pharmacies',
      'salons',
      'gyms',
    ],
    landmarks: ['Madiwala Lake', 'Udupi Garden junction', 'BTM Layout Metro station'],
    nearby: ['madiwala', 'silk-board', 'koramangala', 'jayanagar', 'jp-nagar', 'hsr-layout'],
    competition: 'high',
    searchHabits:
      'Searches are price-led and mobile-first – “PG near me”, “meals near Silk Board”, “tuition BTM 2nd Stage”. Residents compare reviews and prices on Google and food apps, and often enquire on WhatsApp before visiting.',
    realEstate:
      'A built-up market of independent houses, small apartment buildings and PG blocks, with almost no open land. Buyers are largely investors after rental income from students and IT workers, plus a smaller number of families buying older apartments.',
    industries: [
      'coaching-and-test-prep',
      'restaurants-and-food',
      'clinics-and-doctors',
      'retail',
      'beauty-and-cosmetics',
    ],
  },

  banashankari: {
    coords: [12.921, 77.565],
    character:
      'A large residential area named after the Banashankari Amma temple on Kanakapura Road, spread over six stages that get newer the further west and south they go. The older stages are settled, Kannada-speaking middle-class neighbourhoods with temples, kalyana mantapas and tuition centres on most main roads. The later stages, towards Uttarahalli and Kengeri, have newer houses and apartments and more open land.',
    businesses: [
      'tuition and coaching centres',
      'kalyana mantapas and wedding services',
      'clinics and nursing homes',
      'sweet shops and darshinis',
      'saree and jewellery shops',
      'grocery and provision stores',
    ],
    landmarks: [
      'Banashankari Temple',
      'Banashankari Metro station',
      'Banashankari TTMC bus terminal',
    ],
    nearby: [
      'banashankari-3rd-stage',
      'jayanagar',
      'padmanabhanagar',
      'kathriguppe',
      'thyagarajanagar',
      'jp-nagar',
    ],
    competition: 'medium',
    searchHabits:
      'Families choose on reputation and on recommendations from relatives and neighbours, and Kannada searches are common for temples, wedding services and tuition. Parents spend a lot of time comparing coaching centres and schools on Google reviews before enrolling.',
    realEstate:
      'Mostly independent houses on BDA plots in the older stages, with apartments and newer layouts in the 5th and 6th Stages. Buyers are largely south Bengaluru families who want to stay close to relatives, schools and temples.',
    industries: [
      'coaching-and-test-prep',
      'education-and-schools',
      'clinics-and-doctors',
      'jewellery',
      'events-and-weddings',
    ],
  },

  'banashankari-3rd-stage': {
    coords: [12.932, 77.548],
    character:
      'The stage of Banashankari that reaches out to the Outer Ring Road (the 100 Feet Ring Road), with its own busy shopping streets serving south-west Bengaluru. PES University’s Ring Road campus is at its edge, so students, coaching institutes and budget eateries are as much a part of the area as long-settled Kannada families in independent houses. Kathriguppe, Ittamadu and Hosakerehalli sit within or right next to it.',
    businesses: [
      'coaching institutes and engineering-entrance classes',
      'clothing, saree and footwear showrooms',
      'banks and finance offices',
      'restaurants, darshinis and juice shops',
      'clinics, dental and eye hospitals',
      'mobile and electronics stores',
      'PGs for students',
    ],
    landmarks: ['PES University (Ring Road campus)', '100 Feet Ring Road (Outer Ring Road)'],
    nearby: [
      'banashankari',
      'kathriguppe',
      'ittamadu',
      'hosakerehalli',
      'girinagar',
      'padmanabhanagar',
    ],
    competition: 'medium',
    searchHabits:
      'Students and parents search for coaching, PGs and food around PES University, often with the college or the Ring Road in the query. Families from across the stage shop on its main roads and compare showrooms, clinics and tuition centres on Google reviews, with plenty of Kannada searches in the mix.',
    realEstate:
      'Independent houses on BDA plots make up most of the stage, and many have been rebuilt with shops on the ground floor and rental floors above. Buyers are mainly local families and investors, and student rentals near PES University are in steady demand.',
    industries: [
      'coaching-and-test-prep',
      'higher-education',
      'retail',
      'fashion-and-apparel',
      'clinics-and-doctors',
    ],
  },

  'bannerghatta-road': {
    coords: [12.888, 77.597],
    character:
      'An arterial road that runs south from Dairy Circle towards Bannerghatta National Park, passing Bilekahalli, Arekere, Hulimavu and Gottigere. It is known for large hospitals – Jayadeva, Fortis and Apollo among them – and for the apartment complexes that went up along it through the 2000s and 2010s. Residents are mostly families and working professionals, and the hospitals draw patients from across the city and beyond.',
    businesses: [
      'multi-speciality hospitals',
      'clinics, pharmacies and diagnostic labs',
      'apartment complexes',
      'schools',
      'car showrooms and service centres',
      'restaurants and food courts',
    ],
    landmarks: [
      'Dairy Circle',
      'Jayadeva Hospital',
      'Vega City Mall',
      'Bannerghatta Biological Park',
    ],
    nearby: ['bilekahalli', 'arekere', 'hulimavu', 'jp-nagar', 'btm-layout', 'gottigere'],
    competition: 'medium',
    searchHabits:
      'Health searches dominate – patients and their families look up specialists, hospitals and diagnostic tests by name and by road, often from outside Bengaluru. Apartment residents search Google Maps for schools, daily needs and services close to their gate, especially at weekends.',
    realEstate:
      'An established apartment corridor with large gated complexes built over the last two decades, and newer projects further south towards Gottigere and the national park. Buyers are mainly families and salaried professionals who want easy access to the hospitals, schools and the Outer Ring Road.',
    industries: [
      'healthcare-and-hospitals',
      'clinics-and-doctors',
      'real-estate',
      'education-and-schools',
      'automotive',
    ],
  },

  basavanagudi: {
    coords: [12.942, 77.575],
    character:
      'One of the oldest parts of Bengaluru, laid out in the late 1890s and named after the Bull Temple (Dodda Basavana Gudi). It is closely tied to Kannada literature, music and food, with temples, old houses, bookshops and long-running eateries around Gandhi Bazaar and DVG Road. Many families have lived here for generations, and the yearly Kadalekai Parishe groundnut fair near the Bull Temple draws crowds from across the city.',
    businesses: [
      'darshinis and South Indian restaurants',
      'sweet and savoury shops',
      'saree and textile shops',
      'flower, pooja and temple-supply stores',
      'clinics and nursing homes',
      'colleges and coaching centres',
      'bookshops',
    ],
    landmarks: ['Bull Temple', 'Gandhi Bazaar', 'DVG Road', 'BMS College of Engineering'],
    nearby: ['hanumanthanagar', 'nr-colony', 'thyagarajanagar', 'jayanagar', 'chamarajpet'],
    competition: 'medium',
    searchHabits:
      'Residents tend to stay loyal to shops and doctors they have used for years, and word of mouth still decides a lot. Kannada searches are common, and visitors from other parts of the city look up the area’s well-known eateries and shops by name.',
    realEstate:
      'A small, very mature market of old independent houses and bungalows, where land rarely comes up for sale. Redevelopment into small apartment buildings is gradual, and buyers are usually families with a long attachment to the area.',
    industries: [
      'restaurants-and-food',
      'retail',
      'higher-education',
      'coaching-and-test-prep',
      'religious-and-spiritual',
    ],
  },

  begur: {
    coords: [12.873, 77.634],
    character:
      'An old village off Hosur Road whose Panchalingeshwara temple holds a Western Ganga inscription about 1,100 years old – the earliest known record of the name “Bengaluru”. The village core, with its temples, the remains of a small fort and Begur Lake, is now ringed by private layouts, apartment projects and rental housing along Begur Road. Residents are a mix of old landowning families and newer arrivals who work in Electronic City, Bommanahalli and HSR Layout.',
    businesses: [
      'building contractors and hardware shops',
      'PGs and rental housing',
      'grocery and provision stores',
      'schools and tuition centres',
      'clinics and pharmacies',
      'small builders and apartment projects',
      'temple and pooja-item shops',
    ],
    landmarks: ['Panchalingeshwara Temple and its inscription', 'Begur Lake', 'Begur Road'],
    nearby: [
      'akshayanagar',
      'hongasandra',
      'bommanahalli',
      'singasandra',
      'hulimavu',
      'electronic-city',
    ],
    competition: 'low',
    searchHabits:
      'Most searches are for services close to home – schools, clinics, PGs and contractors – typed on phones with “Begur” or “Begur Road” in the query. Kannada is common among long-time residents, while newer apartment dwellers depend on Google Maps reviews and community groups.',
    realEstate:
      'A fast-filling mix of private layouts with independent houses, mid-sized apartment projects and rental buildings along Begur Road. Buyers are first-time home buyers and investors drawn by prices below HSR Layout or BTM Layout and the short trip to Electronic City.',
    industries: [
      'real-estate',
      'construction-and-contractors',
      'education-and-schools',
      'religious-and-spiritual',
      'clinics-and-doctors',
    ],
  },

  bilekahalli: {
    coords: [12.898, 77.607],
    character:
      'A suburb off the east side of Bannerghatta Road, known above all as the home of IIM Bangalore and its large campus. Behind it, narrow roads lead into Vijaya Bank Layout and other residential pockets that filled up with apartments and rental housing as IT companies and hospitals grew along the road. Students, faculty, hospital staff and young professionals live alongside families who settled here before the boom.',
    businesses: [
      'PGs and rental flats',
      'clinics, pharmacies and diagnostic labs',
      'restaurants and cafés',
      'salons',
      'grocery and daily-needs stores',
      'small IT and back-office firms',
    ],
    landmarks: ['IIM Bangalore', 'Vijaya Bank Layout', 'Bannerghatta Road'],
    nearby: [
      'arekere',
      'mico-layout',
      'btm-layout',
      'hulimavu',
      'bommanahalli',
      'bannerghatta-road',
    ],
    competition: 'medium',
    searchHabits:
      'A large share of searches come from students and working professionals – food delivery, PGs, laundry and gyms – mostly on phones and in English. Residents of the inner layouts search with the layout name, since narrow roads make “nearest” matter more than usual.',
    realEstate:
      'Apartments and independent houses packed into older private layouts, with plenty of rental stock aimed at students, hospital staff and IT employees. Little land is left, so most new supply is small apartment buildings on redeveloped plots.',
    industries: [
      'higher-education',
      'healthcare-and-hospitals',
      'real-estate',
      'restaurants-and-food',
      'it-services-and-software',
    ],
  },

  bommanahalli: {
    coords: [12.902, 77.626],
    character:
      'A former village on Hosur Road just south of Silk Board that has become a dense, mixed area of older houses, small industries and newer apartments along Begur Road and Hongasandra. Garment factories and small manufacturing units employ many workers here, and young IT employees rent nearby for the short trip to HSR Layout, Electronic City and the Outer Ring Road. The Yellow Line metro now has a station at Bommanahalli on Hosur Road.',
    businesses: [
      'garment and small manufacturing units',
      'PGs and rental housing',
      'budget restaurants and messes',
      'hardware and building-material shops',
      'clinics and pharmacies',
      'schools',
      'apartment projects along Begur Road',
    ],
    landmarks: ['Bommanahalli Metro station', 'Hosur Road', 'Bommanahalli junction'],
    nearby: ['hongasandra', 'hsr-layout', 'silk-board', 'begur', 'btm-layout', 'bilekahalli'],
    competition: 'low',
    searchHabits:
      'Customers are price-sensitive and search close to home on their phones, mostly for daily needs, clinics, schools and rentals. Many local businesses rely on walk-ins, so even a basic, accurate Google listing helps one stand out.',
    realEstate:
      'An affordable mix of older independent houses, rental buildings and mid-sized apartment projects along Begur Road and Hongasandra. Buyers are first-time home buyers and investors drawn by the location between HSR Layout, BTM Layout and Electronic City.',
    industries: [
      'textiles-and-garments',
      'manufacturing',
      'real-estate',
      'education-and-schools',
      'clinics-and-doctors',
    ],
  },

  bommasandra: {
    coords: [12.816, 77.686],
    character:
      'An industrial town on Hosur Road beyond Electronic City, built around the KIADB Bommasandra Industrial Area with its pharmaceutical, biotech, engineering and electronics units. Narayana Health City, Narayana Health’s large hospital campus, is here, and Biocon Park sits on the Bommasandra–Jigani Link Road. The Yellow Line metro ends at Bommasandra, and workers live in older village housing, rental blocks and new apartments on the roads off the highway.',
    businesses: [
      'pharmaceutical and biotech units',
      'engineering and auto-component manufacturers',
      'industrial suppliers and service firms',
      'pharmacies, lodges and eateries serving hospital visitors',
      'PGs and worker housing',
      'transport and logistics operators',
    ],
    landmarks: [
      'Narayana Health City',
      'Bommasandra Industrial Area',
      'Biocon Park',
      'Bommasandra Metro station',
    ],
    nearby: [
      'electronic-city-phase-2',
      'chandapura',
      'jigani',
      'electronic-city',
      'attibele',
      'anekal',
    ],
    competition: 'low',
    searchHabits:
      'Much of the search activity is business-to-business – buyers looking for manufacturers, job-work units, suppliers and service firms in the industrial area. Patients and families coming to Narayana Health City from other states search for stays, food and transport nearby.',
    realEstate:
      'Mostly industrial plots and sheds, with affordable apartments, rental buildings and plotted layouts around the old village and along the roads to Jigani and Chandapura. Buyers are workers and managers in the industrial area and investors renting to them.',
    industries: [
      'pharma-and-medical-devices',
      'biotech-and-life-sciences',
      'manufacturing',
      'healthcare-and-hospitals',
      'industrial-and-b2b-supplies',
    ],
  },

  chandapura: {
    coords: [12.8, 77.706],
    character:
      'A town on Hosur Road in Anekal taluk, about 6 km beyond Electronic City, where the road to Anekal branches off at Chandapura Circle. It has grown from a market village into an affordable housing area for people who work in Electronic City, Bommasandra and Hosur, with the Karnataka Housing Board’s Surya Nagar township close by. Its weekly Saturday santhe, selling vegetables, fruit and cattle, still draws buyers from the surrounding villages.',
    businesses: [
      'budget apartment and plotted projects',
      'traders at the weekly santhe',
      'hardware and building-material stores',
      'PGs and rental housing',
      'schools and clinics',
      'two-wheeler showrooms and garages',
    ],
    landmarks: [
      'Chandapura Circle',
      'Chandapura–Anekal Road',
      'KHB Surya Nagar',
      'Heelalige railway station',
    ],
    nearby: ['bommasandra', 'anekal', 'attibele', 'jigani', 'electronic-city-phase-2'],
    competition: 'low',
    searchHabits:
      'Residents are mostly working families who search on their phones, in Kannada and English, for schools, clinics, rentals and repairs close to the circle. Many newcomers weigh Chandapura against Electronic City for a home or a rental, so businesses gain from appearing in both sets of searches.',
    realEstate:
      'An affordable market of budget apartments, KHB housing in Surya Nagar and plotted layouts along the Chandapura–Anekal Road. Buyers are first-time home buyers and investors betting on continued growth along Hosur Road.',
    industries: [
      'real-estate',
      'construction-and-contractors',
      'manufacturing',
      'education-and-schools',
      'retail',
    ],
  },

  chikkalasandra: {
    coords: [12.909, 77.552],
    character:
      'A crowded residential area between Padmanabhanagar, Uttarahalli and Subramanyapura that grew from a village into a dense neighbourhood of houses, small apartment buildings and shops. It is known locally as “Mini Chittoor” for its large community with roots in Chittoor district of Andhra Pradesh, and Telugu is heard on its streets as often as Kannada. Most residents are working families, traders and small business owners.',
    businesses: [
      'grocery and provision stores',
      'tailoring and textile shops',
      'small hotels serving Andhra-style meals',
      'clinics and pharmacies',
      'tuition centres',
      'hardware and building-material shops',
      'mobile and electronics shops',
    ],
    landmarks: ['Chikkalasandra Lake', 'Uttarahalli Main Road'],
    nearby: [
      'padmanabhanagar',
      'uttarahalli',
      'subramanyapura',
      'kumaraswamy-layout',
      'kathriguppe',
      'vasanthapura',
    ],
    competition: 'low',
    searchHabits:
      'Searches mix Kannada, Telugu and English, and many shoppers still pick shops by word of mouth within the community. A Google listing that mentions Telugu- and Kannada-speaking staff, with reviews from local customers, helps a business stand out.',
    realEstate:
      'Mostly independent houses and small apartment buildings on private layouts, with many owners renting out upper floors. Buyers are middle-income families and local investors who want to stay close to Banashankari and Uttarahalli.',
    industries: [
      'retail',
      'restaurants-and-food',
      'clinics-and-doctors',
      'coaching-and-test-prep',
      'real-estate',
    ],
  },

  doddakallasandra: {
    coords: [12.88, 77.553],
    character:
      'A former village on Kanakapura Road in the Konanakunte area, now one of the stops on the Green Line metro. Doddakallasandra Lake, restored a few years ago, sits among independent houses, small apartment blocks and newer gated projects. Residents are a mix of long-time families and young households who moved south for the metro and lower costs.',
    businesses: [
      'grocery and daily-needs stores',
      'pre-schools and tuition centres',
      'clinics and pharmacies',
      'bakeries and darshinis',
      'interior and furnishing shops',
      'small builders and apartment projects',
    ],
    landmarks: ['Doddakallasandra Lake', 'Doddakallasandra Metro station', 'Kanakapura Road'],
    nearby: [
      'konanakunte',
      'narayana-nagar',
      'talaghattapura',
      'kanakapura-road',
      'vasanthapura',
      'anjanapura',
    ],
    competition: 'low',
    searchHabits:
      'People here search Google Maps for daily needs within walking distance of the metro station or the lake, and often type the station name rather than the locality. Kannada searches are common among older residents, while younger families rely on reviews and apartment groups.',
    realEstate:
      'A mid-range market of independent houses, builder floors and small apartment projects, with a few larger gated developments near the metro. Buyers are families moving out from Jayanagar, JP Nagar and Banashankari who want metro access at a lower cost.',
    industries: [
      'real-estate',
      'construction-and-contractors',
      'education-and-schools',
      'retail',
      'clinics-and-doctors',
    ],
  },

  'electronic-city': {
    coords: [12.845, 77.66],
    character:
      'An industrial and IT township on Hosur Road in Bengaluru’s far south, set up by KEONICS in the late 1970s and now home to the Infosys campus and the offices of many other tech and electronics companies. Its industrial land is split into several phases, starting with Phase 1 and Phase 2, and it is run by its own industrial township authority, with apartments, PGs and older villages around it. The elevated expressway from Silk Board and the Yellow Line metro connect it to the rest of the city.',
    businesses: [
      'IT and electronics companies',
      'manufacturing units',
      'PGs and budget hotels',
      'apartment complexes',
      'restaurants and food courts',
      'engineering and management colleges',
      'hospitals and clinics',
    ],
    landmarks: [
      'Infosys campus',
      'Electronic City elevated expressway',
      'Hosur Road',
      'Electronic City Metro station',
    ],
    nearby: [
      'electronic-city-phase-2',
      'bommasandra',
      'singasandra',
      'begur',
      'hosur-road',
      'jigani',
    ],
    competition: 'medium',
    searchHabits:
      'Employees and students search on their phones for food, PGs and services within the township, especially on weekdays. B2B buyers search for manufacturers, suppliers and service firms around the industrial phases.',
    realEstate:
      'An affordable, apartment-led market with large projects around Phase 1 and Phase 2 and along Hosur Road, plus plotted layouts further out. Buyers are tech employees buying near work and investors renting to the large workforce.',
    industries: [
      'it-services-and-software',
      'manufacturing',
      'real-estate',
      'higher-education',
      'hospitality-and-hotels',
    ],
  },

  'electronic-city-phase-2': {
    coords: [12.84, 77.677],
    character:
      'The second phase of Electronic City’s industrial township, on KIADB land off Hosur Road, with campuses of companies such as Tech Mahindra and Hewlett Packard Enterprise alongside smaller IT, electronics and R&D units. It is reached from Hosur Road and Huskur Road, and the Yellow Line’s Infosys Foundation Konappana Agrahara and Huskur Road stations bring the metro close. Around it, older villages and new layouts towards Huskur and Hebbagodi have filled with PGs, rental flats and budget apartments for the workforce.',
    businesses: [
      'IT, electronics and R&D campuses',
      'PGs and co-living for tech employees',
      'canteens, messes and cloud kitchens',
      'transport and employee-shuttle operators',
      'budget apartments and rentals',
      'gyms and sports facilities',
      'laundry and home services',
    ],
    landmarks: [
      'Electronic City Phase 2 industrial area',
      'Huskur Road',
      'Huskur Road Metro station',
      'Infosys Foundation Konappana Agrahara Metro station',
    ],
    nearby: ['electronic-city', 'bommasandra', 'chandapura', 'singasandra', 'jigani'],
    competition: 'medium',
    searchHabits:
      'Employees search on weekday evenings and at lunch for food, PGs, gyms and laundry close to their office gate, and many name the phase or the company campus in the query. Companies in the phase search for vendors – catering, facility services, transport and IT hardware – so B2B visibility matters as much as consumer search.',
    realEstate:
      'Rental-led demand from the large workforce supports PGs, co-living buildings and compact apartments, with bigger gated projects further out towards Huskur and Chandapura. Buyers are mainly employees who want a short trip to work and investors who rent to them.',
    industries: [
      'it-services-and-software',
      'manufacturing',
      'real-estate',
      'hospitality-and-hotels',
      'restaurants-and-food',
    ],
  },

  girinagar: {
    coords: [12.942, 77.546],
    character:
      'A residential area in south-west Bengaluru that began as the Writers’ and Artists’ Colony and is named after former President V. V. Giri and the hill (giri) on its western side, Hirannayya Gudda. It is divided into four phases of independent houses on quiet roads, with Avalahalli and Muneshwara Block to the north and Hosakerehalli to the south, close to Mysore Road and the Outer Ring Road. Its residents are largely settled middle-class families, many of whom built their own homes here.',
    businesses: [
      'clinics and diagnostic centres',
      'tuition centres and music classes',
      'provision stores and bakeries',
      'darshinis and sweet shops',
      'tailors and boutiques',
      'home services – plumbers, electricians and painters',
    ],
    landmarks: [
      '50 Feet Road',
      '80 Feet Road',
      'Swami Vivekananda Park',
      'Deepanjali Nagar Metro station',
    ],
    nearby: [
      'srinagar',
      'hosakerehalli',
      'banashankari-3rd-stage',
      'nayandahalli',
      'deepanjali-nagar',
      'hanumanthanagar',
    ],
    competition: 'medium',
    searchHabits:
      'Residents tend to choose doctors, tutors and shops by reputation and stay with them for years, and Kannada searches are common. Younger families check Google reviews and search with the phase number – “Girinagar 2nd Phase clinic”.',
    realEstate:
      'Almost entirely independent houses on layout plots, with very few large apartment projects. New supply comes from old houses being rebuilt as rental floors, and buyers are mostly families from south-west Bengaluru who want a quiet street close to Banashankari.',
    industries: [
      'clinics-and-doctors',
      'coaching-and-test-prep',
      'home-services',
      'real-estate',
      'restaurants-and-food',
    ],
  },

  gottigere: {
    coords: [12.856, 77.59],
    character:
      'A fast-growing suburb at the southern end of Bannerghatta Road, named after Gottigere Lake, which lies near NICE Road. The Pink Line metro’s southern terminus at Kalena Agrahara, earlier named Gottigere, is on the main road, and the road carries on south towards Bannerghatta Biological Park. Apartment blocks, colleges and older villages sit side by side, and many residents work on Bannerghatta Road and in Electronic City.',
    businesses: [
      'apartment projects and builders',
      'engineering and degree colleges',
      'PGs and hostels for students',
      'grocery and daily-needs stores',
      'sports arenas and fitness centres',
      'clinics and pharmacies',
    ],
    landmarks: [
      'Gottigere Lake',
      'Kalena Agrahara Metro station',
      'AMC Engineering College',
      'NICE Road',
    ],
    nearby: ['hulimavu', 'akshayanagar', 'anjanapura', 'arekere', 'bannerghatta-road', 'jp-nagar'],
    competition: 'low',
    searchHabits:
      'Students search for PGs, food and transport around the colleges, while families in new apartments look up schools, clinics and home services on Google Maps. Many queries include “Bannerghatta Road”, because residents identify with the road more than the village name.',
    realEstate:
      'An upcoming market of mid-sized apartment projects and plotted layouts, with land still available along and off Bannerghatta Road. Buyers are first-time buyers and young families priced out of areas closer to the city, plus investors watching the metro.',
    industries: [
      'real-estate',
      'higher-education',
      'education-and-schools',
      'construction-and-contractors',
      'sports-and-academies',
    ],
  },

  'hsr-layout': {
    coords: [12.912, 77.638],
    character:
      'A BDA layout from the 1980s between Hosur Road and Sarjapur Road – the name comes from Hosur–Sarjapur Road – divided into seven sectors. Its closeness to Silk Board, the Outer Ring Road and Electronic City made it a favourite with tech workers and early-stage startups, and many houses have been turned into rental floors, offices and paying-guest accommodation. 27th Main and the roads around the BDA Complex carry most of the cafés, restaurants and gyms.',
    businesses: [
      'startups and small tech offices',
      'cafés and cloud kitchens',
      'gyms and fitness studios',
      'paying-guest and co-living spaces',
      'salons and grooming studios',
      'pet clinics and pet stores',
      'D2C brands',
    ],
    landmarks: ['Agara Lake', 'HSR BDA Complex', '27th Main Road'],
    nearby: [
      'koramangala-1st-block',
      'silk-board',
      'bommanahalli',
      'kudlu',
      'bellandur',
      'sarjapur-road',
    ],
    competition: 'high',
    searchHabits:
      'A young, app-first audience that books, orders and discovers almost everything on the phone – Google Maps, Instagram and delivery apps. Residents also move often, so there is a steady stream of newcomers searching for gyms, salons, clinics and services from scratch.',
    realEstate:
      'Mainly independent houses on BDA plots, rebuilt as three- or four-floor rental buildings, with a few apartment complexes on the edges. Strong rental demand from tech workers means many buyers are investors and landlords rather than owner-occupiers.',
    industries: [
      'saas-and-tech-startups',
      'restaurants-and-food',
      'fitness-and-sports',
      'e-commerce-and-d2c',
      'beauty-and-cosmetics',
    ],
  },

  hanumanthanagar: {
    coords: [12.944, 77.563],
    character:
      'One of the older parts of south Bengaluru, next to Basavanagudi, named after the Ramanjaneya temple on Ramanjaneya Gudda beside the Kengal Hanumanthaiah Kalaa Soudha. Its hills shape the neighbourhood – the Kumaraswamy temple on Mount Joy is reached by a long flight of steps – and the Kalaa Soudha and local arts institutions give it a strong link with music and theatre. It is a settled, largely Kannada-speaking area of independent houses and the home of the Hanumanthanagar Co-operative Bank’s head office.',
    businesses: [
      'music, dance and art classes',
      'clinics and nursing homes',
      'tuition centres',
      'darshinis and sweet shops',
      'co-operative banks and finance offices',
      'pooja-item and flower shops',
      'printing and stationery shops',
    ],
    landmarks: [
      'Kengal Hanumanthaiah Kalaa Soudha',
      'Ramanjaneya Gudda temple',
      'Kumaraswamy Temple, Mount Joy',
      'Hanumanthanagar Park',
    ],
    nearby: [
      'basavanagudi',
      'srinagar',
      'nr-colony',
      'girinagar',
      'banashankari',
      'thyagarajanagar',
    ],
    competition: 'medium',
    searchHabits:
      'Kannada is widely used in searches and on signboards, and residents lean on long-standing relationships with their doctor, tutor and bank. Parents search for music, dance and art teachers, and performances at the Kalaa Soudha bring visitors who look up eateries nearby.',
    realEstate:
      'An old, closely held market of independent houses, many on sloping plots around the hills. Properties change hands slowly, and redevelopment usually means a family rebuilding its house with a floor or two to rent out.',
    industries: [
      'clinics-and-doctors',
      'coaching-and-test-prep',
      'banking-and-nbfc',
      'religious-and-spiritual',
      'media-and-entertainment',
    ],
  },

  hongasandra: {
    coords: [12.895, 77.632],
    character:
      'A dense locality off Hosur Road between Bommanahalli and Kudlu Gate, stretching back along Begur Main Road. Its narrow streets are packed with rental buildings, small shops and workshops, and many residents are garment and factory workers, delivery riders and young IT employees. The Yellow Line metro has a station named after it on Hosur Road.',
    businesses: [
      'rental buildings and PGs',
      'garment and small manufacturing units',
      'budget restaurants and messes',
      'mobile, electronics and repair shops',
      'grocery and provision stores',
      'clinics and pharmacies',
    ],
    landmarks: ['Hongasandra Metro station', 'Begur Main Road', 'Hosur Road'],
    nearby: ['bommanahalli', 'begur', 'kudlu', 'singasandra', 'bilekahalli', 'akshayanagar'],
    competition: 'low',
    searchHabits:
      'Customers are budget-conscious and search on their phones for food, rentals, repairs and clinics close to home, with English mixed with Kannada and other languages. WhatsApp and word of mouth among co-workers carry a lot of weight.',
    realEstate:
      'Mostly older independent houses rebuilt as rental buildings, with some small apartment projects towards Begur Road. Buyers are investors after rental income and families who work on Hosur Road and want to stay near the metro.',
    industries: [
      'textiles-and-garments',
      'real-estate',
      'restaurants-and-food',
      'retail',
      'clinics-and-doctors',
    ],
  },

  hosakerehalli: {
    coords: [12.93, 77.536],
    character:
      'A former village on the Outer Ring Road in south-west Bengaluru, next to Banashankari 3rd Stage and Girinagar, whose name means “village of the new lake”. PES University stands beside Hosakerehalli Lake, and the Hosakerehalli flyover carries Ring Road traffic over the junction. The old village lanes now sit among private layouts and apartment buildings filled with students, families and people who commute along the Ring Road.',
    businesses: [
      'PGs and student housing',
      'coaching and engineering-entrance centres',
      'cafés, juice shops and budget eateries',
      'stationery, printing and photocopy shops',
      'clinics and pharmacies',
      'small apartment builders',
    ],
    landmarks: ['Hosakerehalli Lake', 'PES University', 'Hosakerehalli flyover', 'Outer Ring Road'],
    nearby: [
      'banashankari-3rd-stage',
      'girinagar',
      'ittamadu',
      'nayandahalli',
      'rr-nagar',
      'kathriguppe',
    ],
    competition: 'medium',
    searchHabits:
      'Students search for PGs, food, printing and coaching around the PES campus, mostly in English and on their phones. Families in the older village and layouts search in Kannada for clinics, schools and home services.',
    realEstate:
      'A mix of village houses, private layouts and mid-sized apartment buildings, with strong rental demand from students and staff of PES University. Buyers are investors and families who want Ring Road access at lower cost than the inner Banashankari stages.',
    industries: [
      'higher-education',
      'coaching-and-test-prep',
      'real-estate',
      'restaurants-and-food',
      'printing-and-packaging',
    ],
  },

  'hosur-road': {
    coords: [12.889, 77.637],
    character:
      'The national highway (NH 44) that runs south-east from the city through Adugodi and Silk Board, past Bommanahalli, Kudlu Gate, Singasandra and Electronic City, towards Bommasandra and the Tamil Nadu border at Attibele. Beyond Silk Board it carries the elevated expressway above and the Yellow Line metro alongside, and it is lined with offices, showrooms, hotels, factories and apartment projects. For businesses it works as one long corridor – people living anywhere along it shop, work and search “on Hosur Road”.',
    businesses: [
      'car and two-wheeler showrooms',
      'hotels and service apartments',
      'IT offices and tech parks',
      'factories and warehouses',
      'apartment projects',
      'restaurants, dhabas and food courts',
      'hospitals and diagnostic centres',
    ],
    landmarks: ['Electronic City Elevated Expressway', 'Kudlu Gate', 'Hosa Road junction'],
    nearby: [
      'bommanahalli',
      'hongasandra',
      'kudlu',
      'singasandra',
      'silk-board',
      'electronic-city',
    ],
    competition: 'medium',
    searchHabits:
      'Commuters and residents search along the corridor rather than by neighbourhood – “car service Hosur Road”, “hotel near Hosur Road” – and decide on the phone from Google Maps listings. Many customers are travelling through, so clear directions, parking details and opening hours make a real difference.',
    realEstate:
      'A long, mixed corridor of large apartment projects, older rental buildings, commercial frontage and industrial land. Buyers are tech employees working in Electronic City and on the Outer Ring Road, and frontage on the highway is sought for showrooms and offices.',
    industries: [
      'automotive',
      'hospitality-and-hotels',
      'real-estate',
      'manufacturing',
      'logistics-and-transport',
    ],
  },

  hulimavu: {
    coords: [12.877, 77.603],
    character:
      'A suburb on Bannerghatta Road south of Arekere, recognised across south Bengaluru for Royal Meenakshi Mall, the Meenakshi Temple beside it and Hulimavu Lake. Christ University’s Bannerghatta Road campus is close by, and tall residential towers rise alongside older houses and the lake, which residents’ groups have worked to restore. Residents include families in apartments, students and staff of nearby colleges, and professionals working along Bannerghatta Road.',
    businesses: [
      'restaurants and food courts',
      'retail and fashion stores',
      'PGs and student housing',
      'clinics and pharmacies',
      'pre-schools and schools',
      'gyms and sports facilities',
    ],
    landmarks: ['Royal Meenakshi Mall', 'Meenakshi Temple', 'Hulimavu Lake'],
    nearby: ['arekere', 'akshayanagar', 'gottigere', 'begur', 'bannerghatta-road', 'puttenahalli'],
    competition: 'medium',
    searchHabits:
      'Weekend searches spike around the mall and temple – food, shopping and parking – while weekday searches come from students and apartment residents looking for services close by. Residents’ and lake groups are active, and recommendations shared there influence which businesses get calls.',
    realEstate:
      'High-rise and mid-sized apartment complexes dominate new supply, with older independent houses in the village core. Buyers are salaried families who want Bannerghatta Road schools and hospitals within reach, and there is steady rental demand from students and young professionals.',
    industries: [
      'retail',
      'restaurants-and-food',
      'real-estate',
      'higher-education',
      'religious-and-spiritual',
    ],
  },

  ittamadu: {
    coords: [12.923, 77.543],
    character:
      'A former village in Banashankari 3rd Stage, between Hosakerehalli and AGS Layout, that has filled in quickly over the last decade or so with houses and small apartment buildings. It has a cluster of temples – Raghavendra Swamy, Dattatreya and Shanishwara among them – and a string of private schools along its roads. Residents are mostly middle-income families, many of whom moved here because it costs less than the older Banashankari stages.',
    businesses: [
      'private schools and pre-schools',
      'tuition centres',
      'grocery and provision stores',
      'bakeries and darshinis',
      'clinics and pharmacies',
      'hardware and building-material shops',
    ],
    landmarks: ['Ittamadu Main Road', 'Sri Raghavendra Swamy Mandira', 'Hosakerehalli Lake'],
    nearby: [
      'banashankari-3rd-stage',
      'hosakerehalli',
      'kathriguppe',
      'uttarahalli',
      'chikkalasandra',
      'padmanabhanagar',
    ],
    competition: 'low',
    searchHabits:
      'Parents compare schools and tuition centres closely, searching by name and reading Google reviews, and Kannada is common in everyday searches. Small shops get most of their business from within a few streets, so accurate Maps listings and WhatsApp ordering work well.',
    realEstate:
      'Independent houses and small apartment buildings on private layouts, plus a few mid-sized projects off the Ring Road. Buyers are mainly middle-income families and first-time buyers who want a Banashankari 3rd Stage address at a lower cost.',
    industries: [
      'education-and-schools',
      'coaching-and-test-prep',
      'real-estate',
      'retail',
      'religious-and-spiritual',
    ],
  },

  'jp-nagar': {
    coords: [12.906, 77.585],
    character:
      'A large BDA layout in south Bengaluru, named after Jayaprakash Narayan and laid out in phases that run from 1st Phase near Jayanagar out to 9th Phase near Kanakapura Road. The older phases are settled family neighbourhoods of independent houses, while the later phases have newer apartment blocks and gated communities. Residents range from retired government employees to IT professionals who work on Bannerghatta Road and the Outer Ring Road.',
    businesses: [
      'clinics and diagnostic centres',
      'schools and tuition centres',
      'darshinis and family restaurants',
      'gyms and yoga studios',
      'salons and beauty parlours',
      'interior design studios',
      'property brokers and small builders',
    ],
    landmarks: ['Ranga Shankara', 'JP Nagar Metro station', 'Brigade Millennium'],
    nearby: [
      'puttenahalli',
      'sarakki',
      'jayanagar',
      'btm-layout',
      'kumaraswamy-layout',
      'bannerghatta-road',
    ],
    competition: 'medium',
    searchHabits:
      'Families search Google Maps for clinics, schools and home services close to their phase, and lean heavily on reviews and apartment WhatsApp groups before they call. Searches mix English and Kannada, and many include the phase number – “dentist JP Nagar 6th Phase”.',
    realEstate:
      'A mature market of independent houses and builder floors in the older phases, with apartment complexes and gated communities in the 7th, 8th and 9th Phases. Buyers are mostly families moving up within south Bengaluru, and many older houses are being rebuilt as rental floors.',
    industries: [
      'clinics-and-doctors',
      'education-and-schools',
      'interior-design',
      'restaurants-and-food',
      'real-estate',
    ],
  },

  jayanagar: {
    coords: [12.931, 77.584],
    character:
      'One of Bengaluru’s oldest planned neighbourhoods, laid out in the late 1940s with wide tree-lined roads, numbered blocks and plenty of parks. Many families have lived here for generations, and the area has a strong Kannada middle-class identity. Commercial life centres on the 4th Block shopping complex and the streets around it, which draw shoppers from across south Bengaluru.',
    businesses: [
      'saree and silk stores',
      'jewellery showrooms',
      'clinics and diagnostic centres',
      'coaching centres and tuition classes',
      'darshinis and sweet shops',
      'salons and beauty parlours',
      'cafés',
    ],
    landmarks: ['Ashoka Pillar', 'South End Circle', 'Ragigudda Anjaneya Temple'],
    nearby: [
      'jayanagar-4th-block',
      'basavanagudi',
      'jp-nagar',
      'btm-layout',
      'thyagarajanagar',
      'banashankari',
    ],
    competition: 'high',
    searchHabits:
      'Older residents still choose by word of mouth and long-standing shop names, while their children check Google reviews and Instagram first. Shoppers come from across south Bengaluru, and searches often name the block – “4th Block saree shop”, “9th Block dentist”.',
    realEstate:
      'A mature, tightly held market of independent houses on BDA plots, with very little vacant land left. New supply comes from older homes being redeveloped into builder floors and small apartment buildings, mostly bought by families who already have roots in south Bengaluru.',
    industries: [
      'jewellery',
      'retail',
      'clinics-and-doctors',
      'coaching-and-test-prep',
      'restaurants-and-food',
    ],
  },

  'jayanagar-4th-block': {
    coords: [12.926, 77.583],
    character:
      'The commercial centre of Jayanagar, built around the 4th Block shopping complex, which has served south Bengaluru shoppers for decades with its shops, eateries and market stalls. The Jayanagar TTMC bus terminal stands opposite and Jayanagar metro station on the Green Line is close by, so the block sees a steady flow of commuters as well as shoppers. Showrooms for silk sarees, jewellery, footwear and electronics line the surrounding roads, while the residential cross streets behind them stay quiet.',
    businesses: [
      'silk saree and textile showrooms',
      'jewellery showrooms',
      'footwear and fashion stores',
      'eateries, juice shops and sweet stalls',
      'electronics and mobile stores',
      'opticians and clinics',
      'flower and vegetable sellers',
    ],
    landmarks: [
      'Jayanagar 4th Block shopping complex',
      'Jayanagar TTMC',
      'Jayanagar Metro station',
    ],
    nearby: [
      'jayanagar',
      'jp-nagar',
      'btm-layout',
      'thyagarajanagar',
      'basavanagudi',
      'banashankari',
    ],
    competition: 'high',
    searchHabits:
      'Shoppers plan trips here from across south Bengaluru, searching by shop name and “4th Block” – “saree shop 4th Block”, “jewellers near Jayanagar complex” – and checking parking and timings. In festival and wedding seasons searches and walk-ins rise sharply, and Instagram posts and WhatsApp catalogues help showrooms get chosen before the visit.',
    realEstate:
      'Shop space around the complex is tightly held and mostly leased to established traders and retail brands rather than sold. The residential streets are older independent houses on BDA plots, owned by families with long roots in Jayanagar.',
    industries: [
      'retail',
      'fashion-and-apparel',
      'jewellery',
      'restaurants-and-food',
      'electronics-and-appliances',
    ],
  },

  jigani: {
    coords: [12.779, 77.644],
    character:
      'An industrial town in Anekal taluk south of Electronic City, built around the KIADB Jigani Industrial Area and known for its many granite cutting and polishing units. Engineering, electrical and electronics factories work alongside the granite yards, and the Bommasandra–Jigani Link Road ties the area to Hosur Road. Gated plotted layouts and apartments have grown up around the old town since the mid-2000s, among lakes such as Jigani Lake and Hennagara Lake.',
    businesses: [
      'granite cutting and polishing units',
      'engineering and fabrication workshops',
      'electrical and electronics manufacturers',
      'industrial suppliers and transporters',
      'plotted layout developers',
      'worker housing and PGs',
      'schools and clinics',
    ],
    landmarks: ['Jigani Industrial Area', 'Bommasandra–Jigani Link Road', 'Jigani Lake'],
    nearby: ['bommasandra', 'anekal', 'chandapura', 'electronic-city', 'attibele'],
    competition: 'low',
    searchHabits:
      'Much of the search activity is B2B – builders and architects looking for granite suppliers, and companies looking for fabricators, job-work and industrial services. Residents of the layouts search for schools, clinics and home services, often in Kannada.',
    realEstate:
      'Industrial plots and sheds in the KIADB area, surrounded by gated plotted layouts, villas and some apartment projects. Buyers are industrial workers and managers, and investors drawn by plot sizes that are hard to find closer to the city.',
    industries: [
      'manufacturing',
      'industrial-and-b2b-supplies',
      'construction-and-contractors',
      'real-estate',
      'logistics-and-transport',
    ],
  },

  'kanakapura-road': {
    coords: [12.879, 77.552],
    character:
      'The stretch of Kanakapura Road south of the Outer Ring Road – Konanakunte, Doddakallasandra, Vajarahalli and Thalaghattapura – is one of south Bengaluru’s newer apartment belts. Growth picked up after the Green Line metro was extended to Silk Institute, and large gated projects now sit beside older villages and plotted layouts. Further out, the road crosses NICE Road and continues past the Art of Living ashram towards the resorts and farmland on the way to Kanakapura.',
    businesses: [
      'apartment projects and builders',
      'CBSE and international schools',
      'supermarkets and daily-needs stores',
      'clinics and pharmacies',
      'interior design and modular kitchen studios',
      'resorts and farm stays further out',
    ],
    landmarks: [
      'Green Line metro along the road',
      'NICE Road junction',
      'Art of Living International Centre',
    ],
    nearby: [
      'konanakunte',
      'doddakallasandra',
      'talaghattapura',
      'yelachenahalli',
      'anjanapura',
      'jp-nagar',
    ],
    competition: 'low',
    searchHabits:
      'Many residents are new to the area and search Google Maps for everything from schools to plumbers, often adding the apartment or metro station name. Recommendations travel fast through apartment WhatsApp groups and residents’ associations.',
    realEstate:
      'An upcoming market led by large gated apartment projects near the metro, with plotted layouts and villa projects further south. Buyers are mainly first-time home buyers and families moving out from older south Bengaluru areas such as Jayanagar and Banashankari.',
    industries: [
      'real-estate',
      'construction-and-contractors',
      'interior-design',
      'education-and-schools',
      'hospitality-and-hotels',
    ],
  },

  kathriguppe: {
    coords: [12.926, 77.553],
    character:
      'A busy residential and shopping area within Banashankari 3rd Stage, between Padmanabhanagar and Hosakerehalli, centred on Kathriguppe Main Road. The main road is crowded with clothing stores, bakeries, banks and clinics, while the side streets are BDA houses, many rebuilt with rental floors. It is a settled family neighbourhood with a strong Kannada character.',
    businesses: [
      'clothing and saree stores',
      'bakeries and sweet shops',
      'banks and finance offices',
      'clinics and dental practices',
      'tuition centres',
      'grocery stores and supermarkets',
      'mobile and electronics shops',
    ],
    landmarks: ['Kathriguppe Main Road', 'Devegowda Petrol Bunk junction'],
    nearby: [
      'banashankari-3rd-stage',
      'padmanabhanagar',
      'ittamadu',
      'banashankari',
      'chikkalasandra',
      'hosakerehalli',
    ],
    competition: 'medium',
    searchHabits:
      'Shoppers search by shop name or simply “Kathriguppe” plus what they want, and many still decide on a reputation built over years. Kannada searches are common, and a growing number of local stores take orders on WhatsApp and through delivery apps.',
    realEstate:
      'BDA plots with independent houses make up most of the area, and many have been redeveloped with shops below and rental floors above. Buyers are local families and investors, and commercial frontage on the main road is tightly held.',
    industries: [
      'retail',
      'fashion-and-apparel',
      'clinics-and-doctors',
      'banking-and-nbfc',
      'restaurants-and-food',
    ],
  },

  konanakunte: {
    coords: [12.884, 77.566],
    character:
      'A former village on Kanakapura Road whose junction, Konanakunte Cross, has become a major stop on the southern Green Line. The Prestige Group’s Forum mall at the junction (Forum Falcon City, also called Forum South Bengaluru) and the Prestige Falcon City township beside it have made Konanakunte Cross a place to shop and eat out for the whole of Kanakapura Road. Behind the main road are older village lanes and private layouts that reach towards JP Nagar’s later phases.',
    businesses: [
      'mall retail and fashion brands',
      'restaurants, cafés and food courts',
      'apartment projects and builders',
      'clinics and diagnostic centres',
      'schools and pre-schools',
      'gyms and fitness studios',
    ],
    landmarks: [
      'Konanakunte Cross Metro station',
      'Forum Falcon City mall',
      'Prestige Falcon City',
    ],
    nearby: [
      'doddakallasandra',
      'narayana-nagar',
      'yelachenahalli',
      'vasanthapura',
      'kanakapura-road',
      'anjanapura',
    ],
    competition: 'medium',
    searchHabits:
      'Residents of the large apartment townships search for restaurants, salons, gyms and clinics near the mall or the metro, mostly on phones and in English. Visitors from across south Bengaluru look up the mall’s stores and eateries by name, so businesses near the junction can catch that traffic with good Maps listings.',
    realEstate:
      'Large gated apartment townships near the metro and mall, with independent houses and smaller projects in the older layouts behind. Buyers are professionals and families moving south from JP Nagar, Jayanagar and Banashankari, and new launches still draw investor interest.',
    industries: [
      'real-estate',
      'retail',
      'restaurants-and-food',
      'fitness-and-sports',
      'interior-design',
    ],
  },

  koramangala: {
    coords: [12.935, 77.624],
    character:
      'Originally a BDA residential layout divided into numbered blocks, Koramangala became the city’s startup district in the 2010s, with founders and young teams working out of converted houses and co-working spaces. 80 Feet Road, 5th Block and the roads around Sony World Junction are lined with restaurants, cafés, pubs and brand stores. Older families in independent houses live alongside professionals in shared flats and the residents of the National Games Village.',
    businesses: [
      'startups and co-working spaces',
      'restaurants, cafés and microbreweries',
      'D2C and ecommerce brands',
      'boutique gyms and fitness studios',
      'salons and skin clinics',
      'cloud kitchens',
    ],
    landmarks: [
      'Nexus Koramangala (formerly Forum Mall)',
      'Sony World Junction',
      '80 Feet Road',
      'St John’s Medical College Hospital',
    ],
    nearby: [
      'koramangala-5th-block',
      'koramangala-1st-block',
      'adugodi',
      'ejipura',
      'hsr-layout',
      'btm-layout',
    ],
    competition: 'high',
    searchHabits:
      'Customers are mostly young professionals who search “near me” on their phones, discover places on Instagram and food apps, and compare ratings before deciding. Many businesses bid on the same local keywords here, so reviews and a well-kept Google profile carry a lot of weight.',
    realEstate:
      'Mostly independent houses on BDA plots, many rebuilt as rental floors or offices, plus a few older apartment blocks. Buyers are long-term investors and families who want a central south-east address, and very little new supply comes up.',
    industries: [
      'saas-and-tech-startups',
      'restaurants-and-food',
      'e-commerce-and-d2c',
      'fitness-and-sports',
      'coworking-and-office-space',
    ],
  },

  'koramangala-1st-block': {
    coords: [12.926, 77.633],
    character:
      'The southern end of Koramangala, around Jakkasandra Extension, where Koramangala meets HSR Layout. The old village of Jakkasandra, with its Venugopala Swamy temple bearing Ganga-era inscriptions, sits next to streets of BDA houses, small apartment buildings and homes converted into offices. It is quieter and more residential than the restaurant streets of the 4th and 5th Blocks, and Sarjapur Road and the Outer Ring Road at Agara are a short drive away.',
    businesses: [
      'small tech and startup offices',
      'co-living and PG buildings',
      'cafés and cloud kitchens',
      'pre-schools and day cares',
      'salons and clinics',
      'home bakers and home-run businesses',
    ],
    landmarks: ['Jakkasandra Extension', 'Venugopala Swamy Temple, Jakkasandra', 'Sarjapur Road'],
    nearby: [
      'koramangala',
      'hsr-layout',
      'koramangala-5th-block',
      'madiwala',
      'silk-board',
      'bellandur',
    ],
    competition: 'medium',
    searchHabits:
      'Residents search by block – “Koramangala 1st Block”, “Jakkasandra” – when they want something within walking distance, and fall back on wider Koramangala results for restaurants and shopping. Many are working professionals who book services online in the evening and expect quick replies on WhatsApp.',
    realEstate:
      'Independent houses on BDA plots, many rebuilt as rental floors, alongside small apartment buildings and a few homes turned into offices. Demand comes from tenants working in HSR Layout, on Sarjapur Road and the Outer Ring Road, and from long-term owners who rarely sell.',
    industries: [
      'saas-and-tech-startups',
      'restaurants-and-food',
      'coworking-and-office-space',
      'education-and-schools',
      'home-services',
    ],
  },

  'koramangala-5th-block': {
    coords: [12.934, 77.618],
    character:
      'The block on Koramangala’s western side that takes in Jyoti Nivas College and the Koramangala Industrial Layout, and the part of the neighbourhood people mean when they talk about going out in Koramangala. Jyoti Nivas College Road and the lanes around it are packed with pubs, restaurants and cafés, and the industrial layout has been taken over by startup offices, co-working spaces and brand stores. Weekday crowds are office workers and students; at weekends it draws people from across the city.',
    businesses: [
      'pubs and bars',
      'restaurants and cafés',
      'startup offices and co-working spaces',
      'D2C and fashion brand stores',
      'salons and grooming studios',
      'cloud kitchens',
    ],
    landmarks: ['Jyoti Nivas College', 'Jyoti Nivas College Road', 'Koramangala Industrial Layout'],
    nearby: [
      'koramangala',
      'adugodi',
      'koramangala-1st-block',
      'madiwala',
      'btm-layout',
      'ejipura',
    ],
    competition: 'high',
    searchHabits:
      'Searches are heavily evening- and weekend-driven – “pubs in Koramangala 5th Block”, “brunch near JNC Road” – and people compare Zomato and Swiggy ratings, Instagram posts and Google reviews before choosing. Office teams in the industrial layout search at lunch and for team outings, so visibility for group and corporate bookings helps.',
    realEstate:
      'A largely commercial market: houses and industrial-layout plots let out as restaurants, offices and co-working floors, with homes on the quieter streets. Owners are long-term holders who prefer leasing, so most activity is rentals rather than sales.',
    industries: [
      'restaurants-and-food',
      'saas-and-tech-startups',
      'coworking-and-office-space',
      'fashion-and-apparel',
      'higher-education',
    ],
  },

  kudlu: {
    coords: [12.882, 77.65],
    character:
      'A former village east of Hosur Road, reached through Kudlu Gate, that sits between HSR Layout, Haralur and Electronic City. Its farmland has given way to a dense spread of mid-range apartment complexes from several well-known developers, with older village houses and rental buildings in between. Most residents are IT employees who commute to HSR Layout, the Outer Ring Road or Electronic City.',
    businesses: [
      'apartment complexes',
      'supermarkets and daily-needs stores',
      'pre-schools and day cares',
      'gyms and sports facilities',
      'clinics and pharmacies',
      'home services – cleaning, repairs and pest control',
      'restaurants and cloud kitchens',
    ],
    landmarks: ['Kudlu Gate Metro station', 'Haralur Road', 'Kudlu Main Road'],
    nearby: ['hsr-layout', 'singasandra', 'hongasandra', 'hosur-road', 'bommanahalli', 'harlur'],
    competition: 'medium',
    searchHabits:
      'Residents of large complexes search on their phones for services delivered to the door, and recommendations travel quickly through apartment apps and WhatsApp groups. Searches often use “Kudlu Gate” or “near HSR” rather than “Kudlu”, so listings should mention all three.',
    realEstate:
      'An apartment-led market of mid-range gated complexes, mostly two- and three-bedroom homes, with older village housing in between. Buyers are IT professionals buying close to work and investors renting to them.',
    industries: [
      'real-estate',
      'home-services',
      'education-and-schools',
      'fitness-and-sports',
      'interior-design',
    ],
  },

  'kumaraswamy-layout': {
    coords: [12.906, 77.563],
    character:
      'A BDA layout formed in the late 1970s on the southern side of Banashankari, in two stages, with ISRO Layout – built in the mid-1980s for ISRO employees – on its edge. Dayananda Sagar College of Engineering, set up in 1979, and the wider Dayananda Sagar group of institutions bring a large student population to the area. Away from the campus it is a laid-back residential layout with a Geological Survey of India office, large parks and easy access to Yelachenahalli metro station on Kanakapura Road.',
    businesses: [
      'PGs and student housing',
      'coaching and engineering tuition centres',
      'stationery, printing and photocopy shops',
      'clinics and hospitals',
      'darshinis and bakeries',
      'schools',
    ],
    landmarks: [
      'Dayananda Sagar College of Engineering',
      'ISRO Layout',
      'Atal Bihari Vajpayee Park',
    ],
    nearby: [
      'yelachenahalli',
      'padmanabhanagar',
      'jp-nagar',
      'vasanthapura',
      'chikkalasandra',
      'banashankari',
    ],
    competition: 'medium',
    searchHabits:
      'Students search for PGs, food, printouts and coaching around the Dayananda Sagar campus, while families search in Kannada and English for schools, clinics and services in their stage. Many of the area’s schools and clinics are chosen on reputation, so Google reviews and word of mouth among neighbours count.',
    realEstate:
      'Independent houses on BDA plots make up most of the layout, with new apartment buildings and rental floors replacing older homes. Buyers are families who want a quieter address near Banashankari and the metro, and investors renting to students.',
    industries: [
      'higher-education',
      'education-and-schools',
      'coaching-and-test-prep',
      'clinics-and-doctors',
      'real-estate',
    ],
  },

  lakkasandra: {
    coords: [12.944, 77.6],
    character:
      'A small, older neighbourhood between Wilson Garden and Adugodi, close to Dairy Circle where Hosur Road meets Bannerghatta Road. NIMHANS, the national institute for mental health and neurosciences, is right next to it, and the underground section of the Pink Line metro has a station at Lakkasandra. Its lanes hold working-class homes, small shops and lodgings used by the families of patients visiting the hospitals nearby.',
    businesses: [
      'lodges and rooms for patients’ families',
      'pharmacies and medical supply shops',
      'small eateries and tea stalls',
      'grocery and provision stores',
      'auto and two-wheeler repair shops',
      'tailors and small retailers',
    ],
    landmarks: ['NIMHANS', 'Dairy Circle', 'Lakkasandra Metro station (Pink Line)'],
    nearby: [
      'wilson-garden',
      'adugodi',
      'sudhama-nagar',
      'jayanagar',
      'koramangala-5th-block',
      'btm-layout',
    ],
    competition: 'medium',
    searchHabits:
      'Many searches come from people outside Bengaluru – patients and relatives looking for rooms, food, pharmacies and transport near NIMHANS – in a range of Indian languages as well as English. Local residents shop within the neighbourhood and rely on familiar shopkeepers more than online reviews.',
    realEstate:
      'Small independent houses and rental buildings on narrow plots, with little room for new projects. Demand comes from people who work at the hospitals and in central Bengaluru, and from landlords renting rooms to visitors.',
    industries: [
      'healthcare-and-hospitals',
      'hospitality-and-hotels',
      'clinics-and-doctors',
      'restaurants-and-food',
      'retail',
    ],
  },

  madiwala: {
    coords: [12.922, 77.618],
    character:
      'One of the oldest localities in south-east Bengaluru, on Hosur Road between Koramangala, BTM Layout and Silk Board, named after the washerfolk (madivala) who once lived here. Its Someshwara temple carries inscriptions from Chola times, and Madiwala Market, run by the city corporation, draws shoppers for vegetables, fruit, fish and household goods. The streets around it are dense with lodges, PGs, eateries and travel agents serving a large working and migrant population.',
    businesses: [
      'vegetable, fruit and fish traders',
      'lodges and budget hotels',
      'PGs and rental rooms',
      'bus booking and travel agents',
      'budget eateries and messes',
      'mobile and electronics shops',
      'clinics and pharmacies',
    ],
    landmarks: ['Madiwala Market', 'Someshwara Temple, Madiwala', 'Hosur Road'],
    nearby: [
      'btm-layout',
      'koramangala',
      'silk-board',
      'koramangala-5th-block',
      'koramangala-1st-block',
      'adugodi',
    ],
    competition: 'medium',
    searchHabits:
      'Shoppers come to the market in person and rarely search for it, but lodges, PGs, travel agents and eateries depend on “near me” searches from people new to the city or passing through on Hosur Road. Many customers come from other states and search in English or their own language, so clear, simple listings with photos and directions get more calls.',
    realEstate:
      'Old, densely built independent houses and rental buildings, with very little open land. Buyers are mostly investors after rental income from workers and students, and shop space near the market is tightly held.',
    industries: [
      'retail',
      'restaurants-and-food',
      'hospitality-and-hotels',
      'travel-and-tourism',
      'real-estate',
    ],
  },

  'mico-layout': {
    coords: [12.891, 77.596],
    character:
      'A residential layout on the west side of Bannerghatta Road, roughly opposite IIM Bangalore, developed by the BDA in the late 1970s and usually called Arekere Mico Layout. It is made up of independent houses on BDA plots and the large L&T South City apartment complex, with Apollo Hospitals and Fortis Hospital close by on the main road. Addresses often mix it with neighbouring Arekere and BTM Layout 2nd Stage.',
    businesses: [
      'clinics, dental and physiotherapy practices',
      'pharmacies and diagnostic labs',
      'pre-schools and tuition centres',
      'cafés and bakeries',
      'salons and beauty parlours',
      'home services and interior contractors',
    ],
    landmarks: ['L&T South City', 'Apollo Hospitals, Bannerghatta Road'],
    nearby: ['arekere', 'bilekahalli', 'puttenahalli', 'jp-nagar', 'btm-layout', 'hulimavu'],
    competition: 'medium',
    searchHabits:
      'Families search for doctors, schools and home services with “Mico Layout” or “Arekere” in the query, and many rely on recommendations in apartment and layout residents’ groups. Professionals book salons, gyms and food on apps in the evening.',
    realEstate:
      'Independent houses on BDA plots, many rebuilt as multi-floor homes with rental units, plus large apartment complexes such as L&T South City. Buyers are families and professionals who value the location between JP Nagar and Bannerghatta Road, and resale supply is limited.',
    industries: [
      'clinics-and-doctors',
      'healthcare-and-hospitals',
      'education-and-schools',
      'real-estate',
      'beauty-and-cosmetics',
    ],
  },

  'nr-colony': {
    coords: [12.943, 77.569],
    character:
      'Narasimharaja Colony, always called NR Colony, is an old residential neighbourhood between Basavanagudi and Hanumanthanagar, close to Bull Temple Road. It is home to the APS group of colleges and their grounds, and the Ramakrishna Math in Basavanagudi is a short walk away. Its quiet streets of old houses belong mostly to long-settled, Kannada-speaking families with close ties to the area’s temples, music and schools.',
    businesses: [
      'PU and degree colleges',
      'tuition and coaching centres',
      'clinics and nursing homes',
      'darshinis and sweet shops',
      'music and dance classes',
      'stationery and book shops',
    ],
    landmarks: ['APS College and grounds', 'Bull Temple Road', 'Ramakrishna Math, Basavanagudi'],
    nearby: [
      'basavanagudi',
      'hanumanthanagar',
      'thyagarajanagar',
      'srinagar',
      'chamarajpet',
      'jayanagar',
    ],
    competition: 'medium',
    searchHabits:
      'Students search for PU and degree colleges, coaching and food around the APS campus, while older residents choose doctors, shops and teachers by a reputation built over decades. Kannada searches and Kannada content work well here.',
    realEstate:
      'A small, very mature market of old independent houses that rarely come up for sale. When they do, buyers are usually families already rooted in Basavanagudi and Hanumanthanagar, and rebuilt houses often add a rental floor.',
    industries: [
      'higher-education',
      'coaching-and-test-prep',
      'education-and-schools',
      'clinics-and-doctors',
      'religious-and-spiritual',
    ],
  },

  'narayana-nagar': {
    coords: [12.877, 77.563],
    character:
      'A residential area just off Kanakapura Road in the Konanakunte area, lying east of Doddakallasandra and laid out in blocks of private layouts. It is quieter than the main road, with independent houses, builder floors and small apartment blocks, and both Doddakallasandra and Konanakunte Cross metro stations within reach. Residents are mostly middle-income families who commute to JP Nagar, Jayanagar and Bannerghatta Road.',
    businesses: [
      'grocery and provision stores',
      'tuition centres and pre-schools',
      'clinics and pharmacies',
      'building contractors and hardware shops',
      'bakeries and darshinis',
      'salons',
    ],
    landmarks: ['Kanakapura Road', 'Konanakunte Cross Metro station', 'Doddakallasandra Lake'],
    nearby: [
      'doddakallasandra',
      'konanakunte',
      'anjanapura',
      'kanakapura-road',
      'jp-nagar',
      'talaghattapura',
    ],
    competition: 'low',
    searchHabits:
      'Residents search close to home and often add the block – “Narayana Nagar 1st Block” – or the nearest metro station. Kannada searches are common, and families lean on neighbourhood WhatsApp groups for tutors, domestic help and repair services.',
    realEstate:
      'Independent houses and builder floors on private layouts, with a few small apartment projects. Buyers are middle-income families and first-time buyers looking for metro access at prices below JP Nagar.',
    industries: [
      'real-estate',
      'construction-and-contractors',
      'education-and-schools',
      'home-services',
      'retail',
    ],
  },

  padmanabhanagar: {
    coords: [12.916, 77.558],
    character:
      'An upmarket residential neighbourhood in south Bengaluru, between Banashankari 2nd Stage, Kathriguppe and Kumaraswamy Layout, known as the home of former Prime Minister H. D. Deve Gowda. Lakshmikantha Park, with its temple and medicinal trees cared for by senior citizens, is a local landmark. For a residential area it has a wide spread of schools, nursing homes and specialty hospitals.',
    businesses: [
      'schools and PU colleges',
      'nursing homes and specialty hospitals',
      'eye and dental clinics',
      'diagnostic centres',
      'sweet shops and darshinis',
      'boutiques and tailoring shops',
    ],
    landmarks: ['Lakshmikantha Park and temple', 'Outer Ring Road at Kadirenahalli'],
    nearby: [
      'kathriguppe',
      'kumaraswamy-layout',
      'chikkalasandra',
      'banashankari',
      'uttarahalli',
      'thyagarajanagar',
    ],
    competition: 'medium',
    searchHabits:
      'Families choose schools, hospitals and specialists carefully, searching by name and reading Google reviews, and older residents prefer to call or visit after a recommendation. Searches mix Kannada and English, often naming Padmanabhanagar or a nearby park or road.',
    realEstate:
      'A settled market of independent houses, with a growing number of premium builder floors and boutique apartment buildings on redeveloped plots. Buyers are well-off south Bengaluru families who want to stay close to Banashankari and Jayanagar.',
    industries: [
      'education-and-schools',
      'healthcare-and-hospitals',
      'clinics-and-doctors',
      'real-estate',
      'interior-design',
    ],
  },

  puttenahalli: {
    coords: [12.89, 77.586],
    character:
      'A former village in JP Nagar 7th Phase, known for Puttenahalli Lake, which residents revived and have looked after since around 2010 through the Puttenahalli Neighbourhood Lake Improvement Trust, under an agreement with the city corporation. The lake sits between the Brigade Millennium and L&T South City complexes, with the MLR Convention Centre beside it, and the streets around mix apartments, old village houses and private layouts. Residents include IT professionals, retired couples and long-time village families.',
    businesses: [
      'apartment complexes',
      'convention halls and event venues',
      'pre-schools and tuition centres',
      'cafés and bakeries',
      'clinics and pharmacies',
      'yoga and fitness classes',
    ],
    landmarks: ['Puttenahalli Lake', 'MLR Convention Centre', 'Puttenahalli Main Road'],
    nearby: ['jp-nagar', 'mico-layout', 'arekere', 'yelachenahalli', 'sarakki', 'konanakunte'],
    competition: 'medium',
    searchHabits:
      'Residents are civic-minded and well connected – lake volunteers, apartment associations and neighbourhood groups share recommendations widely. Searches often say “JP Nagar 7th Phase” rather than Puttenahalli, and searches for event venues peak in the wedding seasons.',
    realEstate:
      'Large apartment complexes and gated communities alongside independent houses in older layouts, with homes overlooking the lake especially sought after. Buyers are professionals and families moving within south Bengaluru who want green space close to Bannerghatta Road.',
    industries: [
      'real-estate',
      'events-and-weddings',
      'education-and-schools',
      'fitness-and-sports',
      'interior-design',
    ],
  },

  sarakki: {
    coords: [12.902, 77.579],
    character:
      'An area in JP Nagar’s early phases named after Sarakki Lake, a large lake on Puttenahalli Main Road. Sarakki Industrial Layout, which reaches Bannerghatta Road, mixes small factories and workshops with offices, co-working buildings and Gopalan Innovation Mall, while JP Nagar metro station on the Kanakapura Road side is also known as Sarakki. Its residential streets are home to long-settled families as well as people who work in the industrial layout.',
    businesses: [
      'small manufacturing units and workshops',
      'offices and co-working spaces',
      'mall retail and multiplex',
      'restaurants and darshinis',
      'clinics and pharmacies',
      'auto workshops and spare-parts dealers',
    ],
    landmarks: ['Sarakki Lake', 'Sarakki Industrial Layout', 'Gopalan Innovation Mall'],
    nearby: [
      'jp-nagar',
      'puttenahalli',
      'yelachenahalli',
      'jayanagar',
      'btm-layout',
      'kumaraswamy-layout',
    ],
    competition: 'medium',
    searchHabits:
      'B2B searches for fabricators, suppliers and service vendors in the industrial layout sit alongside residents’ everyday searches for clinics, food and repairs. Many people search for “JP Nagar 1st Phase” or “JP Nagar 3rd Phase” rather than Sarakki, so listings should carry both names.',
    realEstate:
      'A mature mix of independent houses and older apartment buildings in the residential phases, with industrial and commercial plots in the layout. Commercial space is sought for offices and showrooms, and residential buyers are mostly families moving within JP Nagar.',
    industries: [
      'manufacturing',
      'industrial-and-b2b-supplies',
      'retail',
      'clinics-and-doctors',
      'real-estate',
    ],
  },

  'silk-board': {
    coords: [12.917, 77.623],
    character:
      'Named after the Central Silk Board, whose office stands at the junction, Silk Board is where Hosur Road meets the Outer Ring Road – one of Bengaluru’s most congested junctions and a byword for traffic. The Electronic City Elevated Expressway starts here and the Yellow Line has a Central Silk Board station, so large numbers of commuters pass through between BTM Layout, HSR Layout, Madiwala and Bommanahalli. Private buses bound for Tamil Nadu and Kerala also pick up passengers around the junction.',
    businesses: [
      'PGs and co-living for commuters',
      'budget hotels and lodges',
      'bus booking and travel agents',
      'quick-service restaurants and tea stalls',
      'car and bike service centres',
      'clinics and pharmacies',
    ],
    landmarks: [
      'Central Silk Board junction',
      'Central Silk Board Metro station',
      'Central Silk Board office',
      'Outer Ring Road',
    ],
    nearby: [
      'btm-layout',
      'hsr-layout',
      'madiwala',
      'bommanahalli',
      'koramangala-1st-block',
      'hosur-road',
    ],
    competition: 'high',
    searchHabits:
      'Searches here mostly come from people on the move – commuters, bus passengers and newcomers looking for PGs, food, ATMs and hotels “near Silk Board”. Because the junction is such a well-known reference point, many people in BTM Layout and HSR Layout also search with Silk Board in the query.',
    realEstate:
      'Very little housing right at the junction; the streets around it in BTM Layout, Madiwala and HSR Layout have rental buildings, PGs and commercial frontage. Buyers are investors after rental income or space for offices and showrooms close to the junction.',
    industries: [
      'hospitality-and-hotels',
      'travel-and-tourism',
      'real-estate',
      'restaurants-and-food',
      'automotive',
    ],
  },

  singasandra: {
    coords: [12.875, 77.642],
    character:
      'A residential area on Hosur Road about 5 km north of Electronic City, between Kudlu Gate and Hosa Road, that has become a popular address for IT professionals working in Electronic City and HSR Layout. Its streets mix village houses and rental blocks with gated apartment projects, and Chikka Begur Lake and the Manipal County club are close by. The Yellow Line metro has a Singasandra station on Hosur Road.',
    businesses: [
      'apartment complexes',
      'PGs and rental flats',
      'restaurants and cloud kitchens',
      'schools and pre-schools',
      'clinics and hospitals',
      'gyms and sports clubs',
    ],
    landmarks: ['Singasandra Metro station', 'Manipal County', 'Chikka Begur Lake'],
    nearby: ['kudlu', 'hongasandra', 'begur', 'hosur-road', 'electronic-city', 'bommanahalli'],
    competition: 'low',
    searchHabits:
      'Young professionals search on their phones for food delivery, gyms, laundry and rentals, often naming the metro station or their apartment complex. Families compare schools and clinics on Google reviews and in apartment groups before committing.',
    realEstate:
      'Mid-range gated apartments and smaller builder projects, alongside older village houses rebuilt as rentals. Buyers are tech employees and investors who want quick access to Electronic City and the metro.',
    industries: [
      'real-estate',
      'education-and-schools',
      'restaurants-and-food',
      'fitness-and-sports',
      'it-services-and-software',
    ],
  },

  srinagar: {
    coords: [12.943, 77.554],
    character:
      'A settled residential locality in south Bengaluru between Hanumanthanagar to the east and Girinagar to the west, close to Banashankari 3rd Stage. It takes in pockets such as Raghavendra Block, with the Srinagar bus station, the 50 Feet Road and Kumaraswamy Temple Road as everyday reference points. It is quieter and less congested than neighbouring Banashankari, with independent houses, smaller apartment buildings and neighbourhood shops.',
    businesses: [
      'provision stores and bakeries',
      'clinics and pharmacies',
      'tuition centres',
      'pooja-item and flower shops',
      'tailors and boutiques',
      'small hotels and darshinis',
    ],
    landmarks: ['Srinagar bus station', '50 Feet Road', 'Kumaraswamy Temple Road'],
    nearby: [
      'hanumanthanagar',
      'girinagar',
      'banashankari-3rd-stage',
      'nr-colony',
      'basavanagudi',
      'hosakerehalli',
    ],
    competition: 'medium',
    searchHabits:
      'Families search for services close to home in Kannada and English, and word of mouth among neighbours still decides a lot. Searches for the name easily get mixed up with Srinagar in Kashmir, so businesses here do better adding “Bengaluru”, “Banashankari” or the block name.',
    realEstate:
      'Independent houses and smaller apartment complexes, with little large-scale development. Buyers are middle- and upper-middle-class families who want a quieter street close to Banashankari, Hanumanthanagar and Basavanagudi.',
    industries: [
      'clinics-and-doctors',
      'coaching-and-test-prep',
      'retail',
      'religious-and-spiritual',
      'real-estate',
    ],
  },

  subramanyapura: {
    coords: [12.896, 77.547],
    character:
      'A residential suburb on the south-western edge of the city, next to Uttarahalli, Vasanthapura and Chikkalasandra, that grew from a village into a spread of private layouts and apartment buildings. Its lakes are a big part of local life – Dore Kere, an old lake known for its birdlife, and Subramanyapura Lake, which has struggled with sewage and encroachment. Families who wanted space within reach of Banashankari and Kanakapura Road make up most of the population.',
    businesses: [
      'grocery stores and supermarkets',
      'schools and tuition centres',
      'clinics and pharmacies',
      'hardware and building-material shops',
      'small builders and apartment projects',
      'bakeries and darshinis',
    ],
    landmarks: ['Dore Kere', 'Subramanyapura Lake', 'Subramanyapura Main Road'],
    nearby: [
      'uttarahalli',
      'vasanthapura',
      'chikkalasandra',
      'kumaraswamy-layout',
      'talaghattapura',
      'doddakallasandra',
    ],
    competition: 'low',
    searchHabits:
      'Searches are local and mobile – schools, tutors, clinics and contractors near home – with a good share in Kannada. Lake-walk groups and residents’ associations are active, and recommendations shared there carry weight.',
    realEstate:
      'Independent houses and builder floors on private layouts, with a growing number of mid-sized apartment projects. Buyers are middle-income families and first-time buyers who want lower prices than the inner Banashankari stages.',
    industries: [
      'education-and-schools',
      'real-estate',
      'construction-and-contractors',
      'clinics-and-doctors',
      'retail',
    ],
  },

  talaghattapura: {
    coords: [12.866, 77.538],
    character:
      'The southern end of the Green Line on Kanakapura Road, where the Thalaghattapura and Silk Institute stations sit close to NICE Road. Silk Institute station takes its name from the sericulture research institute on Kanakapura Road, and the land around it – VISL Layout, Vakil Garden City and other layouts – has filled with apartment and villa projects. Older village houses and plotted layouts still lie between them, and many residents are young families who bought here for the metro.',
    businesses: [
      'apartment and villa projects',
      'builders and real estate agents',
      'schools and pre-schools',
      'supermarkets and daily-needs stores',
      'interior design and furnishing firms',
      'clinics and pharmacies',
    ],
    landmarks: ['Thalaghattapura Metro station', 'Silk Institute Metro station', 'NICE Road'],
    nearby: [
      'anjanapura',
      'doddakallasandra',
      'subramanyapura',
      'kanakapura-road',
      'uttarahalli',
      'narayana-nagar',
    ],
    competition: 'low',
    searchHabits:
      'New residents search from scratch for everything – schools, doctors, groceries, interiors – usually naming the metro station or their project. Builders and agents compete for property searches here, so property queries are more crowded than everyday services.',
    realEstate:
      'An upcoming market led by apartment towers and villa projects near the metro and NICE Road, with plotted layouts further out. Buyers are first-time buyers, young families and investors who expect the area to keep filling in.',
    industries: [
      'real-estate',
      'construction-and-contractors',
      'interior-design',
      'education-and-schools',
      'retail',
    ],
  },

  thyagarajanagar: {
    coords: [12.932, 77.568],
    character:
      'One of the older localities of south Bengaluru, usually counted as part of Basavanagudi and sitting between Basavanagudi, Banashankari 2nd Stage and Jayanagar. It is a compact neighbourhood of old houses and narrow roads, with several temples, long-running provision stores and small eateries. Many families have lived here for generations, and Yediyur Lake and the Green Line on Kanakapura Road are close by.',
    businesses: [
      'provision stores and bakeries',
      'darshinis and sweet shops',
      'clinics and nursing homes',
      'tuition and music classes',
      'tailors and saree shops',
      'printing and small offices',
    ],
    landmarks: ['Yediyur Lake', 'Kanakapura Road'],
    nearby: [
      'basavanagudi',
      'nr-colony',
      'banashankari',
      'jayanagar',
      'hanumanthanagar',
      'padmanabhanagar',
    ],
    competition: 'medium',
    searchHabits:
      'Residents usually search in Kannada or simply ask neighbours, and shops survive on loyal regulars. Newer families and tenants use Google Maps and delivery apps, often searching under Basavanagudi or Banashankari instead of Thyagarajanagar.',
    realEstate:
      'Old independent houses on small plots, gradually being rebuilt as builder floors and small apartment buildings. Buyers are mostly families with existing ties to Basavanagudi and Jayanagar.',
    industries: [
      'retail',
      'clinics-and-doctors',
      'restaurants-and-food',
      'religious-and-spiritual',
      'coaching-and-test-prep',
    ],
  },

  uttarahalli: {
    coords: [12.906, 77.545],
    character:
      'A former village on the south-western edge of the city that has been absorbed by Bengaluru’s growth over the last two decades. The old village core now sits among private layouts, mid-sized apartment buildings and neighbourhoods such as Subramanyapura and Poornaprajna Layout. It appeals to families who want to stay in south Bengaluru for less than Banashankari or JP Nagar would cost.',
    businesses: [
      'grocery and provision stores',
      'tuition centres and small schools',
      'clinics and pharmacies',
      'hardware and building-material shops',
      'small builders and apartment projects',
      'darshinis and bakeries',
      'salons',
    ],
    landmarks: ['Uttarahalli Main Road', 'Turahalli Forest'],
    nearby: [
      'subramanyapura',
      'chikkalasandra',
      'vasanthapura',
      'ittamadu',
      'rr-nagar',
      'banashankari',
    ],
    competition: 'low',
    searchHabits:
      'Customers search close to home – Google Maps searches with the road or layout name, and a good deal of Kannada. Competition for these searches is lighter than in older south Bengaluru, so a complete Google profile with recent reviews stands out quickly.',
    realEstate:
      'A mix of independent houses in private layouts, small apartment buildings and a few larger gated projects. Buyers are mainly middle-income families and first-time buyers looking for space within reach of Banashankari and Kanakapura Road.',
    industries: [
      'education-and-schools',
      'coaching-and-test-prep',
      'real-estate',
      'construction-and-contractors',
      'clinics-and-doctors',
    ],
  },

  vasanthapura: {
    coords: [12.892, 77.556],
    character:
      'An old village south of Kumaraswamy Layout, known for the Vasantha Vallabharaya Swamy temple on a hillock, said to be more than 600 years old, and for ISKCON’s temple and Krishna Leela Park at Vasantha Vallabha Nagar. Around the hill, private layouts and apartment buildings have filled the land between Subramanyapura and Kanakapura Road. Residents are a mix of village families and middle-income households who moved here for space and lower costs.',
    businesses: [
      'pooja-item and flower shops',
      'grocery and provision stores',
      'schools and tuition centres',
      'clinics and pharmacies',
      'small builders and contractors',
      'bakeries and darshinis',
    ],
    landmarks: [
      'Vasantha Vallabharaya Swamy Temple',
      'ISKCON Vasanthapura and Krishna Leela Park',
      'Vasanthapura Main Road',
    ],
    nearby: [
      'subramanyapura',
      'kumaraswamy-layout',
      'konanakunte',
      'doddakallasandra',
      'uttarahalli',
      'yelachenahalli',
    ],
    competition: 'low',
    searchHabits:
      'Temple visitors from across Bengaluru search for directions, timings and food nearby, especially at weekends and on festival days. Residents search locally in Kannada and English for schools, clinics and home services.',
    realEstate:
      'Plotted private layouts with independent houses and builder floors, and a growing number of mid-sized apartment projects. Buyers are middle-income families and first-time buyers looking for affordable homes near Kanakapura Road.',
    industries: [
      'religious-and-spiritual',
      'real-estate',
      'education-and-schools',
      'construction-and-contractors',
      'retail',
    ],
  },

  yelachenahalli: {
    coords: [12.896, 77.57],
    character:
      'A former village on Kanakapura Road between Kumaraswamy Layout and Konanakunte, now known for its metro station, which opened in 2017 and was the Green Line’s southern terminus until the line was extended to Silk Institute in 2021. The station also serves Reserve Bank Layout and Kumaraswamy Layout, and the streets around it have filled with shops, clinics and apartment buildings. Residents range from long-time village families to professionals who chose the area for the metro.',
    businesses: [
      'shops and showrooms on Kanakapura Road',
      'clinics and diagnostic centres',
      'tuition and coaching centres',
      'restaurants and bakeries',
      'PGs and rental flats near the metro',
      'two-wheeler showrooms and service centres',
    ],
    landmarks: ['Yelachenahalli Metro station', 'Kanakapura Road', 'Reserve Bank Layout'],
    nearby: [
      'kumaraswamy-layout',
      'konanakunte',
      'jp-nagar',
      'puttenahalli',
      'vasanthapura',
      'sarakki',
    ],
    competition: 'medium',
    searchHabits:
      'Searches often name the metro station – “clinic near Yelachenahalli metro” – because it is the reference point for the area. Commuters search for food and quick services on the way to and from the station, while families search in Kannada and English for schools and doctors.',
    realEstate:
      'A mix of independent houses, builder floors and mid-sized apartment buildings, with commercial frontage along Kanakapura Road. Buyers are families and professionals who want metro access within south Bengaluru, and rentals near the station are in steady demand.',
    industries: [
      'retail',
      'clinics-and-doctors',
      'coaching-and-test-prep',
      'real-estate',
      'automotive',
    ],
  },
} satisfies Partial<Record<LocalitySlug, LocalityProfile>>;
