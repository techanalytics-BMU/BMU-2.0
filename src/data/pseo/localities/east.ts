import type { LocalityProfile } from '@/types/pseo';
import type { LocalitySlug } from '../slugs';

// East Bengaluru locality profiles, in sheet order. `krishnarajapuram` has no entry – it is the
// same place as `kr-puram` and its pages redirect there.
export const eastLocalities = {
  'aecs-layout': {
    coords: [12.962, 77.716],
    character:
      'A planned layout of independent houses and low-rise apartment buildings tucked behind ITPL Main Road, between Brookefield and Kundalahalli, and divided into lettered blocks. It is quieter than the main road, and many owners have added rental floors for people working at ITPL and the Kundalahalli and Brookefield offices. Daily needs are met by the shops, clinics and small eateries on Kundalahalli Main Road.',
    businesses: [
      'rental homes and PG accommodation',
      'tiffin services and home kitchens',
      'grocery and daily-needs stores',
      'clinics and pharmacies',
      'tuition and hobby classes',
      'salons',
    ],
    landmarks: ['Kundalahalli Main Road', 'ITPL Main Road', 'Brookefield Mall'],
    nearby: ['brookefield', 'kundalahalli', 'thubarahalli', 'munnekollal', 'marathahalli'],
    competition: 'medium',
    searchHabits:
      'Tenants who move in for a job at a nearby tech park look up tiffin services, laundry and repairs on Google Maps in their first weeks. Long-time owners in the independent houses lean more on neighbours’ recommendations and a few trusted local shops.',
    realEstate:
      'Mostly independent houses on plots, many rebuilt as three- or four-floor buildings with rental units, plus a handful of small apartment blocks. Plots rarely come up for sale, and buyers are families and investors who want steady rent from tech tenants.',
    industries: ['real-estate', 'home-services', 'clinics-and-doctors', 'restaurants-and-food'],
  },

  avalahalli: {
    coords: [13.038, 77.74],
    character:
      'This Avalahalli is the one on Old Madras Road beyond KR Puram, around Virgonagar – not the areas of the same name near Yelahanka or off Kanakapura Road. Village homes, small industrial units and warehouses sit beside newer apartment and plotted projects, with Budigere Cross a short way east. Most residents commute to KR Puram, Whitefield or the city by road.',
    businesses: [
      'small manufacturing and fabrication units',
      'warehouses and transport businesses',
      'building-material and hardware suppliers',
      'apartment and plotted projects',
      'grocery and daily-needs stores',
      'schools',
    ],
    landmarks: ['Old Madras Road (NH 75)', 'Virgonagar', 'Budigere Cross'],
    nearby: ['virgonagar', 'medahalli', 'bhattarahalli', 'budigere-cross', 'hoskote'],
    competition: 'low',
    searchHabits:
      'Factory owners and traders search for suppliers, transporters and repair services along Old Madras Road, often by phone call after finding a listing. Many families search in Kannada and rely on word of mouth, so a Google profile with the right spelling of Avalahalli and a working phone number matters.',
    realEstate:
      'An outer, upcoming market of plotted layouts, independent houses and a few gated apartment projects along Old Madras Road, with land still changing hands. Buyers are families priced out of KR Puram and Whitefield, and investors watching the corridor towards Hoskote and the planned Peripheral Ring Road (Bengaluru Business Corridor).',
    industries: [
      'manufacturing',
      'industrial-and-b2b-supplies',
      'logistics-and-transport',
      'real-estate',
    ],
  },

  balagere: {
    coords: [12.938, 77.727],
    character:
      'Balagere is a former village between Panathur and Varthur, reached by Balagere Road off Varthur Road. Its farmland has been taken up by large gated apartment complexes such as Sobha Dream Acres, so most residents are young tech families who moved in during the last decade. The old village lanes and the new towers sit next to each other, and the roads in between are still narrow.',
    businesses: [
      'gated apartment complexes',
      'supermarkets and daily-needs stores',
      'play schools and daycare centres',
      'cafés and cloud kitchens',
      'gyms and fitness studios',
      'interior design and home-furnishing studios',
    ],
    landmarks: ['Balagere Road', 'Sobha Dream Acres', 'Varthur Road'],
    nearby: ['panathur', 'varthur', 'gunjur', 'munnekollal', 'kadubeesanahalli'],
    competition: 'medium',
    searchHabits:
      'Residents search by the name of their apartment complex as much as by Balagere, and ask for recommendations in complex WhatsApp groups before trying anyone new. Delivery apps and Google Maps are used for almost everything, since walking to a market is rarely an option.',
    realEstate:
      'Large gated apartment complexes from the last decade dominate, with a steady flow of resale flats and rentals and some plotted land still left near the village. Buyers are tech professionals working on the Outer Ring Road and in Whitefield, plus investors renting to them.',
    industries: ['real-estate', 'interior-design', 'education-and-schools', 'home-services'],
  },

  belathur: {
    coords: [13.001, 77.748],
    character:
      'An old village just north of Kadugodi, close to Whitefield railway station and the eastern end of the Purple Line metro. It is a cheaper residential pocket next to the Whitefield tech belt, with village houses, small apartment buildings and newer gated projects along Belathur Main Road. Many residents are families who have lived here for generations, joined by tenants working at ITPL and in the EPIP Zone.',
    businesses: [
      'rental houses and small apartment buildings',
      'grocery stores and meat shops',
      'schools and tuition centres',
      'clinics and pharmacies',
      'two-wheeler workshops',
      'building-material suppliers',
    ],
    landmarks: [
      'Belathur Main Road',
      'Whitefield railway station',
      'Whitefield (Kadugodi) Metro station',
    ],
    nearby: ['kadugodi', 'whitefield', 'hoodi', 'itpl', 'hope-farm'],
    competition: 'low',
    searchHabits:
      'Long-time residents search in Kannada or simply call shops they already know, while newer tenants use Google Maps to find doctors, schools and repairs near the metro. Few local businesses here have complete Google profiles, so a well-kept listing stands out.',
    realEstate:
      'A mix of village houses, small builder apartments and a few gated projects, cheaper than Whitefield proper. Buyers are first-time owners and investors who want rental demand from tech workers near the metro and railway station.',
    industries: ['real-estate', 'education-and-schools', 'clinics-and-doctors', 'retail'],
  },

  bellandur: {
    coords: [12.928, 77.677],
    character:
      'Bellandur takes its name from the village beside Bellandur Lake, the largest lake in Bengaluru, and has been turned by the Outer Ring Road tech parks – RMZ Ecospace, Embassy Tech Village and others – into a dense area of high-rise apartments. Most residents are young tech professionals and families who chose the area to be close to work. Infrastructure has struggled to keep up, and traffic on the Outer Ring Road and Sarjapur Road is a daily concern.',
    businesses: [
      'tech offices and business parks',
      'high-rise apartment complexes',
      'PGs and co-living spaces',
      'restaurants and cloud kitchens',
      'gyms and fitness studios',
      'hospitals and clinics',
    ],
    landmarks: ['Bellandur Lake', 'RMZ Ecospace', 'Embassy Tech Village', 'Outer Ring Road'],
    nearby: [
      'devarabisanahalli',
      'kadubeesanahalli',
      'sarjapur-road',
      'hsr-layout',
      'marathahalli',
      'harlur',
    ],
    competition: 'high',
    searchHabits:
      'A young, salaried, app-first audience that orders, books and discovers through the phone – Google Maps, Instagram, food and service apps. Searches peak in the evenings and at weekends, and new businesses compete hard for reviews and visibility within a small radius.',
    realEstate:
      'A large apartment market of high-rise gated complexes built for the Outer Ring Road workforce, with strong rental demand. Buyers are tech professionals buying near work and investors renting to them.',
    industries: [
      'real-estate',
      'restaurants-and-food',
      'healthcare-and-hospitals',
      'fitness-and-sports',
    ],
  },

  bhattarahalli: {
    coords: [13.025, 77.712],
    character:
      'A stretch of Old Madras Road just past KR Puram, beside TC Palya and Medahalli, where the highway and its service road are lined with showrooms, workshops and shops. Behind the main road are older village streets, small apartment buildings and newer layouts. Rents are lower than in the Whitefield tech belt, so many residents are families and tenants who commute to ITPL, the Outer Ring Road or the city.',
    businesses: [
      'vehicle showrooms and workshops',
      'hardware and building-material stores',
      'schools and tuition centres',
      'clinics and pharmacies',
      'budget lodges and eateries',
      'rental housing',
    ],
    landmarks: ['Old Madras Road (NH 75)', 'TC Palya Main Road', 'KR Puram railway station'],
    nearby: ['tc-palya', 'medahalli', 'kr-puram', 'ramamurthy-nagar', 'avalahalli'],
    competition: 'low',
    searchHabits:
      'Highway traffic brings searches for vehicle service, spare parts, fuel and food along Old Madras Road, while residents look for schools, clinics and tuition close to home. Kannada and English searches are both common, and many customers still call before visiting.',
    realEstate:
      'Affordable independent houses, small builder apartments and plotted layouts, with a few mid-size gated projects near the highway. Buyers are first-time owners and families who want a KR Puram address without its prices.',
    industries: ['automotive', 'real-estate', 'education-and-schools', 'retail'],
  },

  brookefield: {
    coords: [12.966, 77.716],
    character:
      'A residential and commercial area between Marathahalli and Whitefield, around ITPL Main Road and Kundalahalli Gate. It grew as families of tech employees looked for homes close to ITPL and the Outer Ring Road, and has a mix of apartment complexes and independent houses in layouts such as AECS Layout. Day-to-day life revolves around the shops, restaurants and clinics along the main road and near Brookefield Mall.',
    businesses: [
      'apartment complexes',
      'restaurants and cafés',
      'gyms and fitness studios',
      'clinics and diagnostic centres',
      'play schools and daycare centres',
      'salons',
      'PG accommodation',
    ],
    landmarks: ['Brookefield Mall', 'Kundalahalli Gate', 'ITPL Main Road'],
    nearby: ['aecs-layout', 'kundalahalli', 'doddanekundi', 'marathahalli', 'itpl', 'whitefield'],
    competition: 'medium',
    searchHabits:
      'Families search for services close to home – daycare, tuition, doctors, salons – and trust recommendations in apartment and layout WhatsApp groups. Working professionals search “near me” on their phones in the evenings for food and fitness.',
    realEstate:
      'A settled market of apartment complexes from the 2000s and 2010s and independent houses in layouts, with little new land. Buyers are mainly tech professionals and families who want to be close to ITPL without living in Whitefield proper.',
    industries: [
      'restaurants-and-food',
      'fitness-and-sports',
      'clinics-and-doctors',
      'education-and-schools',
    ],
  },

  'budigere-cross': {
    coords: [13.046, 77.75],
    character:
      'A road junction rather than an old neighbourhood: here Old Madras Road meets the road that runs north to Budigere and on towards the airport side, and south towards Whitefield. The farmland around Konadasapura village is being turned into large apartment, villa and plotted projects, while the junction itself has highway eateries, shops and service stations. Hoskote is a few kilometres further east.',
    businesses: [
      'apartment, villa and plotted projects',
      'highway restaurants and dhabas',
      'fuel stations and vehicle service',
      'building-material suppliers',
      'schools',
      'warehouses',
    ],
    landmarks: ['Old Madras Road (NH 75)', 'Budigere Road', 'Konadasapura'],
    nearby: ['avalahalli', 'virgonagar', 'medahalli', 'hoskote', 'belathur'],
    competition: 'low',
    searchHabits:
      'Most searches are from people choosing a home – buyers compare projects on property portals, YouTube walkthroughs and Google Maps before visiting a site. The few residents and highway travellers search for food, fuel and essentials along the main road.',
    realEstate:
      'A new, project-led market of gated apartments, villas and plotted developments sold on its access to Whitefield, the airport side and the planned ring road. Buyers are mostly investors and tech professionals planning to move in once the area is built up.',
    industries: [
      'real-estate',
      'construction-and-contractors',
      'interior-design',
      'logistics-and-transport',
    ],
  },

  'cv-raman-nagar': {
    coords: [12.986, 77.663],
    character:
      'Named after the physicist C. V. Raman, this is an established residential area between Old Madras Road and Old Airport Road, shaped by defence research establishments such as LRDE and the DRDO township. Bagmane Tech Park brought large IT offices to its edge, so retired scientists and defence families now live alongside young tech employees. Leafy layouts, government housing and mid-size apartment complexes make up most of the area.',
    businesses: [
      'IT offices in and around Bagmane Tech Park',
      'apartment complexes',
      'schools and coaching centres',
      'clinics and diagnostic centres',
      'restaurants and food courts',
      'PG accommodation',
    ],
    landmarks: [
      'Bagmane Tech Park',
      'DRDO Township',
      'Old Madras Road',
      'Baiyappanahalli Metro station',
    ],
    nearby: [
      'kaggadasapura',
      'new-thippasandra',
      'malleshpalya',
      'old-madras-road',
      'vimanapura',
      'indiranagar',
    ],
    competition: 'medium',
    searchHabits:
      'Office workers at Bagmane Tech Park search for lunch, gyms and PGs within walking distance, while older residents choose doctors, schools and services by reputation and neighbours’ advice. Parents put real effort into comparing schools and tuition online.',
    realEstate:
      'A mature market of apartment complexes, independent houses and government or institutional housing, with limited new supply. Buyers and tenants are professionals working at Bagmane Tech Park and in Indiranagar, plus families who value its central east location.',
    industries: [
      'it-services-and-software',
      'aviation-and-aerospace',
      'education-and-schools',
      'clinics-and-doctors',
      'real-estate',
    ],
  },

  carmelaram: {
    coords: [12.907, 77.706],
    character:
      'Carmelaram sits on Sarjapur Road between Doddakannelli and Dommasandra, around the railway station of the same name on the line to Hosur. Older village housing in pockets such as Chikkabellandur sits alongside mid-size apartment complexes, villas and a growing number of schools. Most newer residents are tech families working on the Outer Ring Road or at the Wipro campus a short drive away.',
    businesses: [
      'apartment and villa communities',
      'CBSE and international schools',
      'play schools and daycare centres',
      'supermarkets and daily-needs stores',
      'clinics and paediatricians',
      'bakeries and family restaurants',
    ],
    landmarks: ['Carmelaram railway station', 'Sarjapur Road', 'Gear School Road'],
    nearby: ['sarjapur-road', 'kasavanahalli', 'dommasandra', 'gunjur', 'harlur', 'varthur'],
    competition: 'medium',
    searchHabits:
      'Parents compare schools, daycare and activity classes on Google reviews and in apartment WhatsApp groups, often searching by “Carmelaram” or the name of their complex. Weekend searches for family restaurants and home services are common.',
    realEstate:
      'Mid-size gated apartment complexes and villa projects, with some plotted land and independent houses near the village core and the railway line. Buyers are tech families who want to stay on Sarjapur Road for its schools without paying for the stretch closer to the Outer Ring Road.',
    industries: ['real-estate', 'education-and-schools', 'clinics-and-doctors', 'interior-design'],
  },

  devarabisanahalli: {
    coords: [12.925, 77.69],
    character:
      'A former village on the Outer Ring Road between Bellandur and Kadubeesanahalli, now almost entirely given over to large office campuses and the gated homes around them. Embassy Tech Village stands on its stretch of the Outer Ring Road, and the Adarsh Palm Retreat villa community lies behind it near Devarabisanahalli Lake. A large office workforce arrives every weekday, while the resident population is smaller and mostly affluent.',
    businesses: [
      'tech offices and business parks',
      'food courts and quick-service restaurants',
      'cafés and coffee chains',
      'villa and apartment communities',
      'gyms and corporate wellness services',
      'cab and transport services',
    ],
    landmarks: [
      'Embassy Tech Village',
      'Adarsh Palm Retreat',
      'Devarabisanahalli Lake',
      'Outer Ring Road',
    ],
    nearby: ['bellandur', 'kadubeesanahalli', 'panathur', 'marathahalli', 'sarjapur-road'],
    competition: 'high',
    searchHabits:
      'Weekday searches come from office workers looking for lunch, coffee, quick services and team-outing venues near their campus, mostly on Google Maps and food apps. B2B buyers inside the tech parks search for vendors, caterers and corporate gifting suppliers.',
    realEstate:
      'A small, premium residential market of villas and gated apartments next to the office campuses, with large commercial office space dominating land use. Buyers are senior tech professionals and investors renting to people who work in the adjoining tech parks.',
    industries: [
      'it-services-and-software',
      'restaurants-and-food',
      'coworking-and-office-space',
      'real-estate',
    ],
  },

  doddanekundi: {
    coords: [12.971, 77.696],
    character:
      'Doddanekundi lies between Marathahalli and Mahadevapura, east of the Outer Ring Road, and is known for the Doddanekundi Industrial Area, where older factory plots have largely become offices and tech campuses. Around it are the old village, Doddanekundi Lake and layouts of independent houses and apartments filled with tenants who work nearby. The junction at Kartik Nagar on the Outer Ring Road is its busiest point.',
    businesses: [
      'tech offices and back-office centres',
      'PGs and rental apartments',
      'budget restaurants and darshinis',
      'printing, IT hardware and office suppliers',
      'clinics and pharmacies',
      'two-wheeler service centres',
    ],
    landmarks: [
      'Doddanekundi Industrial Area',
      'Doddanekundi Lake',
      'Outer Ring Road (Kartik Nagar)',
    ],
    nearby: ['marathahalli', 'mahadevapura', 'brookefield', 'old-airport-road', 'kaggadasapura'],
    competition: 'medium',
    searchHabits:
      'Office managers search for vendors, printing, IT hardware and catering near the industrial area, often by phone during working hours. Tenants search “near me” for PGs, food and laundry, and move often, so fresh Google reviews matter.',
    realEstate:
      'A rental-heavy market of PGs, builder apartments and older independent houses, with commercial office space on the former industrial plots. Buyers are mostly investors who rent to employees of the nearby offices.',
    industries: [
      'it-services-and-software',
      'industrial-and-b2b-supplies',
      'real-estate',
      'restaurants-and-food',
    ],
  },

  domlur: {
    coords: [12.961, 77.639],
    character:
      'A compact area where Old Airport Road meets the Inner Ring Road, wedged between Indiranagar, Koramangala and the old HAL airport. It combines a BDA residential layout with large office complexes such as Embassy Golf Links Business Park and Diamond District, so office workers dominate its daytime population. The residential streets are quieter, with independent houses and older apartment buildings.',
    businesses: [
      'corporate offices and tech companies',
      'restaurants, cafés and food courts',
      'serviced apartments and business hotels',
      'co-working spaces',
      'clinics',
      'gyms',
    ],
    landmarks: [
      'Domlur flyover',
      'Embassy Golf Links Business Park',
      'Diamond District',
      'Old Airport Road',
    ],
    nearby: [
      'indiranagar',
      'hal-2nd-stage',
      'kodihalli',
      'koramangala',
      'ulsoor',
      'old-airport-road',
    ],
    competition: 'medium',
    searchHabits:
      'Weekday lunchtime and after-work searches from office workers drive much of the local demand – food, quick services and gyms near the office. B2B buyers also search for firms and suppliers around the business parks.',
    realEstate:
      'A small residential market of independent houses and older apartment buildings, with premium apartments in mixed developments such as Diamond District. Demand comes mainly from professionals who want to live close to the business parks.',
    industries: [
      'saas-and-tech-startups',
      'restaurants-and-food',
      'hospitality-and-hotels',
      'clinics-and-doctors',
    ],
  },

  dommasandra: {
    coords: [12.88, 77.75],
    character:
      'Dommasandra is the village and junction on Sarjapur Road on the way out to Sarjapur town, where the road from Varthur and Gunjur comes in at Dommasandra Circle. It is outside the city limits, and its fields have been filling with villa communities, plotted layouts, apartment projects and schools. The village market around the circle still serves the surrounding villages as well as the new residents.',
    businesses: [
      'villa and plotted developments',
      'international and CBSE schools',
      'building-material and hardware suppliers',
      'grocery stores and village market shops',
      'clinics and pharmacies',
      'restaurants and bakeries',
    ],
    landmarks: ['Dommasandra Circle', 'Sarjapur Road', 'Varthur–Sarjapur Road'],
    nearby: ['sarjapur', 'carmelaram', 'gunjur', 'varthur', 'sarjapur-road'],
    competition: 'low',
    searchHabits:
      'New residents search Google Maps for schools, doctors, groceries and repairs and often name “Dommasandra” or their villa community, while villagers rely on shops they know. Fewer businesses compete online, so a clear Google profile with directions from the circle helps.',
    realEstate:
      'An upcoming market of villa communities, plotted layouts and newer apartment projects, with farmland still being converted. Buyers are tech professionals from the Outer Ring Road and Whitefield who want more space, and investors expecting the corridor to fill in.',
    industries: [
      'real-estate',
      'education-and-schools',
      'construction-and-contractors',
      'architecture',
    ],
  },

  gunjur: {
    coords: [12.922, 77.736],
    character:
      'Gunjur is a former village just south of Varthur, on the road that runs from Varthur down to Dommasandra and Sarjapur Road. It has become one of the main villa and low-rise gated-community belts of south-east Bengaluru, while the village core keeps its temples, small shops and older homes. Roads are narrow and almost everyone depends on a car.',
    businesses: [
      'villa and gated communities',
      'supermarkets and daily-needs stores',
      'landscaping and gardening services',
      'interior design and furnishing studios',
      'clinics and pharmacies',
      'play schools and activity centres',
    ],
    landmarks: ['Varthur–Sarjapur Road', 'Varthur Lake'],
    nearby: ['varthur', 'balagere', 'panathur', 'carmelaram', 'dommasandra'],
    competition: 'low',
    searchHabits:
      'Homeowners in the villa communities search for gardeners, pest control, solar and inverter servicing and repairs, and ask neighbours on WhatsApp before booking. Searches usually name the community or “Gunjur, Varthur”, so listings that mention both get found.',
    realEstate:
      'Villa communities and low-rise gated apartments dominate, with plotted layouts still on sale around the village. Buyers are senior tech professionals and NRIs who want an independent home within reach of Whitefield and the Outer Ring Road.',
    industries: [
      'real-estate',
      'home-services',
      'interior-design',
      'education-and-schools',
      'energy-and-solar',
    ],
  },

  'hal-2nd-stage': {
    coords: [12.967, 77.643],
    character:
      'HAL 2nd Stage is the part of Indiranagar that carries much of its commercial address – 12th Main, Indiranagar Double Road and long stretches of 100 Feet Road fall within it – along with quieter residential cross roads towards Domlur and Kodihalli. Its housing is mostly older BDA bungalows on generous plots, many now leased to restaurants, brand stores, clinics and small offices. Businesses here trade on the Indiranagar name but compete street by street.',
    businesses: [
      'restaurants and bars on 12th Main',
      'designer boutiques and brand stores',
      'aesthetic, dental and skin clinics',
      'startup offices in converted houses',
      'furniture and home-décor showrooms',
      'pet clinics and grooming studios',
    ],
    landmarks: ['12th Main Road', 'Indiranagar Double Road', '100 Feet Road (Domlur end)'],
    nearby: ['indiranagar', 'domlur', 'kodihalli', 'jeevan-bima-nagar', 'ulsoor'],
    competition: 'high',
    searchHabits:
      'Customers search for “Indiranagar” far more often than “HAL 2nd Stage”, so businesses here need the Indiranagar name on their Google profile and website while keeping the exact address for Maps. Diners and shoppers come from across the city and choose by Instagram, Zomato ratings and reviews.',
    realEstate:
      'Large independent houses on BDA plots, many leased or rebuilt for commercial use, with a few boutique apartment buildings. Commercial frontage on 12th Main and 100 Feet Road is in steady demand from restaurants and brands, while residential buyers are established families and HNIs.',
    industries: [
      'restaurants-and-food',
      'fashion-and-apparel',
      'beauty-and-cosmetics',
      'clinics-and-doctors',
      'saas-and-tech-startups',
    ],
  },

  hagadur: {
    coords: [12.966, 77.762],
    character:
      'Hagadur is an old village east of Whitefield Main Road, spread along Hagadur Road and Immadihalli Road. Mid-size apartment complexes, villas and PGs have filled its open land for people working at ITPL and in the EPIP Zone, while the village lanes and temples remain at its centre. Its narrow roads are often congested at office hours.',
    businesses: [
      'mid-size apartment complexes',
      'PGs and rental housing',
      'grocery and daily-needs stores',
      'clinics and pharmacies',
      'tuition centres and play schools',
      'home-food and tiffin services',
    ],
    landmarks: ['Hagadur Road', 'Immadihalli Road', 'Whitefield Main Road'],
    nearby: ['whitefield', 'ramagondanahalli', 'siddapura', 'hope-farm', 'kadugodi'],
    competition: 'medium',
    searchHabits:
      'Residents search with “Whitefield” in the query – “near Hagadur, Whitefield” – and judge local services by Google reviews and apartment group recommendations. Tenants new to the city search for PGs, tiffin and furniture rental.',
    realEstate:
      'A mid-priced Whitefield market of builder apartments, gated complexes and a few villa projects, with a large rental pool. Buyers are tech employees who want to be close to ITPL and the EPIP Zone at a lower price than the main Whitefield roads.',
    industries: ['real-estate', 'home-services', 'clinics-and-doctors', 'education-and-schools'],
  },

  harlur: {
    coords: [12.909, 77.665],
    character:
      'Harlur (also spelt Haralur) is a former village between HSR Layout and Sarjapur Road, reached by Harlur Main Road from Sarjapur Road and by lanes from Kudlu and Somasundarapalya. Over the last fifteen years it has become a cluster of large gated apartment complexes, home mainly to tech families who work on the Outer Ring Road and in HSR Layout. Shops and services have grown along Harlur Main Road to serve them.',
    businesses: [
      'gated apartment complexes',
      'supermarkets and organic stores',
      'play schools, daycare and activity classes',
      'cafés and cloud kitchens',
      'gyms, yoga and dance studios',
      'clinics and paediatricians',
    ],
    landmarks: ['Harlur Main Road', 'Sarjapur Road'],
    nearby: ['hsr-layout', 'kudlu', 'kasavanahalli', 'sarjapur-road', 'bellandur'],
    competition: 'medium',
    searchHabits:
      'Parents search for after-school classes, daycare and paediatricians and lean on apartment WhatsApp groups, where one strong recommendation can fill a batch. Spelling varies – Harlur, Haralur – so businesses should use both on their profiles.',
    realEstate:
      'A market of large gated apartment complexes with active resale and rentals, and very little vacant land left. Buyers are tech professionals and NRIs who want to be near HSR Layout and the Outer Ring Road.',
    industries: [
      'real-estate',
      'education-and-schools',
      'fitness-and-sports',
      'clinics-and-doctors',
    ],
  },

  hoodi: {
    coords: [12.992, 77.716],
    character:
      'Hoodi is a former village on Whitefield Main Road between Mahadevapura and ITPL, where the road to KR Puram and Graphite India Road meet at Hoodi Circle. The Purple Line metro and the Hoodi railway halt make it one of the better-connected parts of the Whitefield corridor. Office campuses along the main road sit beside dense rental housing and large apartment complexes.',
    businesses: [
      'tech offices and business centres',
      'apartment complexes and PGs',
      'restaurants and fast-food outlets',
      'hotels and serviced apartments',
      'clinics and diagnostic centres',
      'car and two-wheeler service centres',
    ],
    landmarks: ['Hoodi Metro station', 'Hoodi Circle', 'Graphite India Road'],
    nearby: ['mahadevapura', 'itpl', 'kundalahalli', 'kr-puram', 'belathur', 'doddanekundi'],
    competition: 'medium',
    searchHabits:
      'Commuters search on the move – food, pharmacies and services near Hoodi metro or on their route to ITPL. Business travellers staying in serviced apartments and hotels search for restaurants and cabs nearby.',
    realEstate:
      'A mix of large apartment complexes, builder flats and rental housing, with demand helped by the metro. Buyers are tech employees and investors renting to them; commercial space along Whitefield Main Road is in demand from offices and showrooms.',
    industries: [
      'it-services-and-software',
      'real-estate',
      'hospitality-and-hotels',
      'restaurants-and-food',
    ],
  },

  'hope-farm': {
    coords: [12.983, 77.753],
    character:
      'Hope Farm is the junction in north Whitefield where Whitefield Main Road, the road to Kadugodi and Channasandra Road meet, now served by the Hopefarm Channasandra metro station. Banks, shops, restaurants and clinics crowd the junction, and the streets around it mix older Whitefield bungalows with apartment complexes and PGs. It is a daily crossing point for people heading to ITPL and the EPIP Zone.',
    businesses: [
      'restaurants, bakeries and juice shops',
      'banks and ATMs',
      'clinics and pharmacies',
      'PGs and rental apartments',
      'mobile and electronics stores',
      'salons',
    ],
    landmarks: [
      'Hope Farm Junction',
      'Hopefarm Channasandra Metro station',
      'Whitefield Main Road',
    ],
    nearby: ['whitefield', 'kadugodi', 'itpl', 'belathur', 'hagadur'],
    competition: 'high',
    searchHabits:
      'Heavy foot and vehicle traffic means many searches are quick “near me” look-ups for food, cash, medicines or a salon close to the junction or the metro. Businesses that show up on Google Maps with accurate hours and photos catch passers-by.',
    realEstate:
      'Older independent houses and Whitefield bungalows, apartment complexes and rental buildings, with commercial frontage at the junction in short supply. Buyers and tenants are tech professionals who want to be near the metro and ITPL.',
    industries: ['restaurants-and-food', 'retail', 'real-estate', 'banking-and-nbfc'],
  },

  hoskote: {
    coords: [13.073, 77.792],
    character:
      'Hoskote is a separate town beyond KR Puram on Old Madras Road, the taluk headquarters on the highway towards Kolar and Chennai. It has its own old town, market and large lake, an industrial area with automotive and manufacturing plants, and a growing ring of layouts, apartments and warehouses as Bengaluru spreads east. Many city visitors know it for the early-morning biryani spots along the highway.',
    businesses: [
      'manufacturing units in the industrial area',
      'warehouses and logistics parks',
      'biryani joints and highway restaurants',
      'plotted layouts and apartment projects',
      'wholesale and retail shops',
      'hospitals, nursing homes and colleges',
    ],
    landmarks: [
      'Old Madras Road (NH 75)',
      'Hoskote Lake',
      'Hoskote Industrial Area',
      'MVJ Medical College and Research Hospital',
    ],
    nearby: ['budigere-cross', 'avalahalli', 'virgonagar', 'medahalli', 'kadugodi'],
    competition: 'low',
    searchHabits:
      'Town residents often search in Kannada for shops, doctors and services; factory and warehouse managers search for B2B suppliers and transporters; and city visitors search for the biryani spots at weekends. A Google profile that clearly says Hoskote – not just Bengaluru – helps all three find you.',
    realEstate:
      'Plotted layouts, independent houses and newer apartment and villa projects at prices well below the city, with industrial and warehouse land in demand. Buyers are local families, people working in the industrial area, and investors watching the highway and ring-road projects.',
    industries: [
      'manufacturing',
      'logistics-and-transport',
      'automotive',
      'real-estate',
      'restaurants-and-food',
    ],
  },

  itpl: {
    coords: [12.986, 77.731],
    character:
      'This locality takes its name from the International Tech Park Bangalore, the India–Singapore venture that opened in the 1990s and started Whitefield’s growth as an IT area. Inside the campus are office towers, food courts and Park Square Mall; outside, Pattandur Agrahara and the stretches of ITPL Main Road and Whitefield Main Road are lined with business hotels, serviced apartments, restaurants and PGs for the people who work there. Weekday life follows office shifts.',
    businesses: [
      'tech companies and global capability centres',
      'business hotels and serviced apartments',
      'food courts and restaurants',
      'PGs and co-living spaces',
      'corporate caterers and event venues',
      'cab and travel services',
    ],
    landmarks: [
      'International Tech Park Bangalore (ITPL)',
      'Park Square Mall',
      'Pattandur Agrahara Metro station',
      'ITPL Main Road',
    ],
    nearby: ['whitefield', 'hoodi', 'kundalahalli', 'hope-farm', 'brookefield', 'kadugodi'],
    competition: 'high',
    searchHabits:
      'Employees and visiting staff search for lunch, team-dinner venues, hotels and cabs within walking distance of the ITPL gates, mostly around office hours. Companies inside the park search for caterers, event venues, corporate gifting and facility services.',
    realEstate:
      'Mostly commercial – office towers inside and around the park – with apartments, serviced apartments and PGs in Pattandur Agrahara and nearby lanes. Investors buy flats here to rent to ITPL employees, and short-stay demand from visiting staff is steady.',
    industries: [
      'it-services-and-software',
      'hospitality-and-hotels',
      'restaurants-and-food',
      'coworking-and-office-space',
      'hr-and-recruitment',
    ],
  },

  indiranagar: {
    coords: [12.972, 77.641],
    character:
      'Named after Indira Gandhi and laid out by the BDA in the late 1970s, Indiranagar was a quiet residential area before 100 Feet Road and 12th Main filled with restaurants, pubs, cafés and fashion stores. Many independent houses have since been converted into shops, offices and brand stores. Residents range from long-time families and retired defence officers to expats and young professionals.',
    businesses: [
      'pubs, bars and restaurants',
      'cafés and dessert shops',
      'fashion and lifestyle stores',
      'salons and aesthetic clinics',
      'boutique fitness studios',
      'D2C brand stores',
      'startups and small offices',
    ],
    landmarks: ['100 Feet Road', '12th Main Road', 'Indiranagar Metro station', 'CMH Road'],
    nearby: [
      'hal-2nd-stage',
      'domlur',
      'jogupalya',
      'new-thippasandra',
      'ulsoor',
      'cv-raman-nagar',
    ],
    competition: 'high',
    searchHabits:
      'Customers discover places through Instagram, food apps and Google Maps, and many plan evenings out from other parts of the city. With so many similar businesses on the same streets, photos, reviews and a strong Instagram presence decide who gets the visit.',
    realEstate:
      'Independent houses on BDA plots, many now in commercial or mixed use, alongside a limited number of apartment buildings. Buyers are mostly investors and businesses looking for street frontage, plus families who want a central east Bengaluru address.',
    industries: ['restaurants-and-food', 'beauty-and-cosmetics', 'retail', 'fashion-and-apparel'],
  },

  'jeevan-bima-nagar': {
    coords: [12.968, 77.656],
    character:
      'Jeevan Bima Nagar grew around housing for LIC employees – the name comes from LIC’s Jeevan Bima – and is a settled, middle-class residential area between HAL 3rd Stage, New Thippasandra and Kodihalli. Its main road is busy with buses, markets, sweet shops and clinics, while the inner streets are lined with independent houses and small apartment buildings. Many families have lived here for decades.',
    businesses: [
      'grocery, sweet and provision stores',
      'clinics and diagnostic labs',
      'tuition and coaching centres',
      'tailors and boutiques',
      'darshinis and small restaurants',
      'pharmacies',
    ],
    landmarks: ['Jeevan Bima Nagar Main Road', 'HAL 3rd Stage', 'Old Airport Road'],
    nearby: [
      'kodihalli',
      'new-thippasandra',
      'hal-2nd-stage',
      'murugeshpalya',
      'vimanapura',
      'indiranagar',
    ],
    competition: 'medium',
    searchHabits:
      'Families have used the same doctors, tailors and tutors for years, so a new business wins through Google reviews and referrals rather than ads alone. Many residents search for a specific shop by name on Jeevan Bima Nagar Main Road before heading out.',
    realEstate:
      'A settled market of independent houses on small plots and low-rise apartment buildings, with older homes being rebuilt into rental floors. Buyers are families who want to stay near Indiranagar and Old Airport Road at a lower price.',
    industries: ['clinics-and-doctors', 'coaching-and-test-prep', 'retail', 'real-estate'],
  },

  jogupalya: {
    coords: [12.975, 77.628],
    character:
      'Jogupalya is an older, densely built neighbourhood between Ulsoor and Indiranagar, beside Old Madras Road and a short walk from Halasuru metro station. Narrow lanes of small houses, rented rooms, local shops and workshops make it one of the more working-class pockets on this upmarket side of the city. Many residents work in the homes, shops and offices of Indiranagar and MG Road.',
    businesses: [
      'grocery and provision stores',
      'tailoring and alteration shops',
      'mobile repair shops',
      'two-wheeler workshops',
      'small eateries and tea stalls',
      'clinics and pharmacies',
    ],
    landmarks: ['Halasuru Metro station', 'Old Madras Road', 'Ulsoor Lake'],
    nearby: ['ulsoor', 'indiranagar', 'hal-2nd-stage', 'domlur', 'cox-town'],
    competition: 'low',
    searchHabits:
      'Customers are price-conscious and often find a shop by asking around or through WhatsApp, with Kannada, Tamil and English all common. Simple Google listings with a phone number and timings are often enough to stand out.',
    realEstate:
      'Small independent houses and rental rooms on narrow plots, with little large-scale redevelopment. It remains one of the few affordable rental pockets close to Indiranagar and MG Road.',
    industries: ['retail', 'home-services', 'clinics-and-doctors', 'automotive'],
  },

  'kr-puram': {
    coords: [13.005, 77.687],
    character:
      'Krishnarajapuram is an old town on Old Madras Road at the eastern edge of the city, with a major railway station and the KR Puram cable-stayed bridge where the Outer Ring Road crosses the tracks. It is a busy transport junction with a mix of older housing, markets, small businesses and newer apartments. Its position between the city and the Whitefield–Mahadevapura tech corridor, now on the Purple Line metro, has made it a residential option for people working in east Bengaluru.',
    businesses: [
      'wholesale and retail shops',
      'budget hotels and lodges',
      'transport and logistics businesses',
      'clinics and nursing homes',
      'schools',
      'apartment projects',
      'automobile dealers and workshops',
    ],
    landmarks: [
      'KR Puram railway station',
      'KR Puram cable-stayed bridge',
      'Tin Factory',
      'Old Madras Road',
    ],
    nearby: [
      'tc-palya',
      'ramamurthy-nagar',
      'mahadevapura',
      'hoodi',
      'bhattarahalli',
      'old-madras-road',
    ],
    competition: 'medium',
    searchHabits:
      'A cost-conscious, mixed audience that compares prices and reviews on the phone before choosing local shops, clinics, schools and services. Travellers using the railway station search for budget hotels, food and cabs nearby.',
    realEstate:
      'An affordable, mixed market of older independent houses, small apartment buildings and newer gated projects along Old Madras Road and the Outer Ring Road. Buyers are often IT employees and families who want easy access to both Whitefield and the city by metro.',
    industries: [
      'retail',
      'real-estate',
      'education-and-schools',
      'automotive',
      'clinics-and-doctors',
    ],
  },

  kadubeesanahalli: {
    coords: [12.94, 77.697],
    character:
      'Kadubeesanahalli is the stretch of the Outer Ring Road between Marathahalli and Devarabisanahalli where Prestige Tech Park stands and Panathur Main Road branches off to the east. Behind the office towers is an old village core of narrow lanes, now packed with PGs, rental apartments and small eateries. Its population swells on weekdays with people working in the tech parks.',
    businesses: [
      'tech offices and business parks',
      'PGs and co-living buildings',
      'lunch places, cloud kitchens and tea stalls',
      'gyms',
      'laundry and home services',
      'pharmacies and clinics',
    ],
    landmarks: ['Prestige Tech Park', 'Outer Ring Road', 'Panathur Main Road'],
    nearby: ['devarabisanahalli', 'panathur', 'marathahalli', 'bellandur', 'munnekollal'],
    competition: 'high',
    searchHabits:
      'Office workers search for lunch delivery, PGs, gyms and laundry within a short walk or ride of Prestige Tech Park. Many are new to Bengaluru and search only in English, comparing ratings on Google Maps, food apps and rental apps.',
    realEstate:
      'Commercial office space dominates the Outer Ring Road frontage; behind it, PGs, co-living buildings and builder apartments serve tenants. Buyers are mainly investors after rental income from tech employees.',
    industries: [
      'it-services-and-software',
      'restaurants-and-food',
      'real-estate',
      'fitness-and-sports',
    ],
  },

  kadugodi: {
    coords: [12.999, 77.761],
    character:
      'Kadugodi is the old village at the far eastern end of Whitefield, where the Purple Line metro ends at Whitefield (Kadugodi) station. The forest patch of Kadugodi Tree Park and the old village market sit near newer apartment complexes and layouts that have grown since the metro arrived. It is a gateway for commuters coming in from Hoskote and the villages to the east.',
    businesses: [
      'markets and wholesale provision stores',
      'builder apartments and gated projects',
      'transport and goods-carrier services',
      'schools and tuition centres',
      'clinics and nursing homes',
      'eateries and bakeries',
    ],
    landmarks: [
      'Whitefield (Kadugodi) Metro station',
      'Kadugodi Tree Park',
      'Whitefield–Hoskote Road',
    ],
    nearby: ['belathur', 'hope-farm', 'whitefield', 'hagadur', 'itpl'],
    competition: 'low',
    searchHabits:
      'Metro commuters search for parking, food and services around the station, while families from the old village search for schools and clinics by name and shop at the local market. Businesses that mention the metro station in their listings get found by people passing through.',
    realEstate:
      'Affordable builder apartments, independent houses and new gated projects, with demand rising since the metro reached here. Buyers are first-time owners working in Whitefield and investors expecting rents to follow the metro.',
    industries: ['real-estate', 'retail', 'logistics-and-transport', 'education-and-schools'],
  },

  kaggadasapura: {
    coords: [12.982, 77.677],
    character:
      'Kaggadasapura is a former village between CV Raman Nagar and Mahadevapura that grew quickly as a lower-cost place to live for people working at Bagmane Tech Park and on the Outer Ring Road. Kaggadasapura Main Road is lined with small shops and services, and the lanes behind it are full of builder apartments and rental buildings. Young couples and small families make up much of the population.',
    businesses: [
      'builder apartments and rental buildings',
      'grocery stores and supermarkets',
      'gyms and fitness studios',
      'tuition centres and play schools',
      'clinics and pharmacies',
      'packers and movers',
    ],
    landmarks: ['Kaggadasapura Main Road', 'Kaggadasapura Lake', 'Malleshpalya Main Road'],
    nearby: ['cv-raman-nagar', 'malleshpalya', 'doddanekundi', 'mahadevapura', 'kr-puram'],
    competition: 'medium',
    searchHabits:
      'Tenants moving in search for movers, furniture, home services and tuition, comparing options on Google Maps and rental and service apps. Turnover is high, so new residents are searching for local services all year round.',
    realEstate:
      'Builder apartments and small gated complexes on former village land, with a large rental market. Buyers are first-time owners and investors attracted by prices below CV Raman Nagar and Indiranagar.',
    industries: ['real-estate', 'home-services', 'education-and-schools', 'fitness-and-sports'],
  },

  kasavanahalli: {
    coords: [12.903, 77.677],
    character:
      'Kasavanahalli lies just off Sarjapur Road beside Kaikondrahalli, between Harlur and Carmelaram, with Central Jail Road running south towards Parappana Agrahara. It is home to Amrita Vishwa Vidyapeetham’s Bengaluru campus and to many gated apartment complexes, so engineering students and tech families make up most of its population. Student hostels, PGs and eateries cluster around the campus.',
    businesses: [
      'student PGs and hostels',
      'gated apartment complexes',
      'cafés and budget eateries',
      'printing and stationery shops',
      'coaching centres',
      'supermarkets and clinics',
    ],
    landmarks: [
      'Amrita Vishwa Vidyapeetham (Bengaluru campus)',
      'Sarjapur Road',
      'Central Jail Road',
    ],
    nearby: ['harlur', 'carmelaram', 'sarjapur-road', 'bellandur', 'kudlu'],
    competition: 'medium',
    searchHabits:
      'Students search for PGs, food, printing and exam coaching near the campus, mostly on Instagram and Google Maps. Families in the apartment complexes look for schools, doctors and home services and rely on WhatsApp group recommendations.',
    realEstate:
      'Gated apartment complexes with a strong rental pool, plus PGs and hostels catering to students. Buyers are tech professionals working on the Outer Ring Road and investors renting to students and young employees.',
    industries: [
      'higher-education',
      'real-estate',
      'restaurants-and-food',
      'coaching-and-test-prep',
    ],
  },

  'kasturi-nagar': {
    coords: [13.003, 77.659],
    character:
      'Kasturi Nagar is a planned residential layout on the Outer Ring Road between Ramamurthy Nagar, Banaswadi and Dooravani Nagar, close to the Tin Factory junction and the old ITI township. Its streets of independent houses and low-rise apartments are home to long-time families as well as tenants working in Whitefield and north-east Bengaluru. It is quieter than the busy ring road it sits on.',
    businesses: [
      'clinics and diagnostic centres',
      'schools and tuition centres',
      'bakeries, sweet shops and restaurants',
      'grocery and provision stores',
      'salons',
      'car and bike service centres',
    ],
    landmarks: ['Outer Ring Road', 'Tin Factory', 'Benniganahalli Metro station'],
    nearby: ['ramamurthy-nagar', 'banaswadi', 'old-madras-road', 'cv-raman-nagar', 'kr-puram'],
    competition: 'medium',
    searchHabits:
      'Families choose doctors, schools and services on reputation, checking Google reviews and asking neighbours, with both Kannada and English searches common. Outer Ring Road traffic also brings “near me” searches for food and vehicle service.',
    realEstate:
      'A settled market of independent houses on layout plots and low-rise apartments, with some rebuilding into rental floors. Buyers are families who want a well-connected address near the metro and the Outer Ring Road.',
    industries: ['clinics-and-doctors', 'education-and-schools', 'real-estate', 'retail'],
  },

  kodihalli: {
    coords: [12.964, 77.647],
    character:
      'Kodihalli is a small, upmarket pocket on Old Airport Road between Domlur and the HAL area, home to The Leela Palace hotel and Manipal Hospital. Behind the main road are quiet streets of independent houses that run into HAL 2nd Stage and Jeevan Bima Nagar. The hotel and hospital bring a steady flow of visitors from across the city and outside Bengaluru.',
    businesses: [
      'luxury hotels and banquet venues',
      'hospitals and specialist clinics',
      'pharmacies and diagnostic labs',
      'restaurants and cafés',
      'serviced apartments and guest houses',
      'corporate offices',
    ],
    landmarks: ['The Leela Palace', 'Manipal Hospital, Old Airport Road', 'Old Airport Road'],
    nearby: [
      'domlur',
      'hal-2nd-stage',
      'jeevan-bima-nagar',
      'murugeshpalya',
      'old-airport-road',
      'indiranagar',
    ],
    competition: 'high',
    searchHabits:
      'Patients and their families search for pharmacies, diagnostics, food and short stays near the hospital, often from outside the city. Wedding and event planners search for venues, decorators and caterers around the hotel.',
    realEstate:
      'A small, high-value market of independent houses and a few premium apartment buildings, with commercial space along Old Airport Road. Buyers are established families and investors; guest houses and serviced apartments serve hospital visitors.',
    industries: [
      'healthcare-and-hospitals',
      'hospitality-and-hotels',
      'events-and-weddings',
      'clinics-and-doctors',
    ],
  },

  kundalahalli: {
    coords: [12.968, 77.721],
    character:
      'Kundalahalli runs from Kundalahalli Gate north towards the EPIP Zone, and has its own stop on the Purple Line metro. The old village sits among apartment complexes, PGs and office buildings, and many residents work within walking distance. Kundalahalli Lake gives the area a stretch of open space between the housing and the offices.',
    businesses: [
      'tech offices',
      'apartment complexes and PGs',
      'quick-service restaurants and cafés',
      'laundry and home services',
      'gyms',
      'clinics and pharmacies',
    ],
    landmarks: ['Kundalahalli Metro station', 'Kundalahalli Lake', 'EPIP Zone'],
    nearby: ['brookefield', 'aecs-layout', 'itpl', 'thubarahalli', 'siddapura', 'whitefield'],
    competition: 'medium',
    searchHabits:
      'Residents and office workers search “near Kundalahalli metro” for food, PGs and services, and since the metro opened more people arrive by train and look for last-mile options nearby. Apartment WhatsApp groups drive recommendations for home services.',
    realEstate:
      'Apartment complexes, builder flats and PGs with strong rental demand from the EPIP Zone and ITPL. Buyers are tech employees who want a short commute and investors renting to them.',
    industries: [
      'it-services-and-software',
      'real-estate',
      'restaurants-and-food',
      'home-services',
    ],
  },

  mahadevapura: {
    coords: [12.992, 77.701],
    character:
      'A former village between KR Puram and Marathahalli that now sits in the middle of the eastern Outer Ring Road tech corridor. Office campuses line the Outer Ring Road, while Whitefield Main Road has two large malls, Phoenix Marketcity and VR Bengaluru, that draw shoppers from across east Bengaluru. Housing is a mix of large apartment complexes for tech employees and older village streets.',
    businesses: [
      'tech offices and business parks',
      'apartment complexes',
      'malls and large-format retail',
      'restaurants and food courts',
      'hotels and serviced apartments',
      'hospitals and clinics',
    ],
    landmarks: ['Phoenix Marketcity', 'VR Bengaluru', 'Outer Ring Road', 'Whitefield Main Road'],
    nearby: ['kr-puram', 'hoodi', 'doddanekundi', 'kaggadasapura', 'marathahalli', 'brookefield'],
    competition: 'medium',
    searchHabits:
      'Shoppers and diners search for brands and restaurants in or near the malls, and plan weekend visits on Google Maps and Instagram. Office workers on the Outer Ring Road search for lunch, quick services and accommodation close to work.',
    realEstate:
      'An apartment-led market of large gated complexes built for the tech workforce, with steady demand from people who want to live close to the Outer Ring Road offices. Buyers are salaried professionals and investors looking for rental income from tech workers.',
    industries: ['real-estate', 'retail', 'restaurants-and-food', 'hospitality-and-hotels'],
  },

  malleshpalya: {
    coords: [12.974, 77.671],
    character:
      'Malleshpalya is a modest residential area between New Thippasandra, CV Raman Nagar and Kaggadasapura, next to the BEML township. Its streets of independent houses and small apartment buildings are home to families who have lived here for decades and younger tenants who work at Bagmane Tech Park and in Indiranagar. Malleshpalya Main Road carries most of its shops.',
    businesses: [
      'grocery and provision stores',
      'clinics and pharmacies',
      'tuition centres',
      'bakeries and darshinis',
      'tailors and boutiques',
      'electricians, plumbers and repair shops',
    ],
    landmarks: ['Malleshpalya Main Road', 'BEML Township', 'New Thippasandra Main Road'],
    nearby: [
      'new-thippasandra',
      'cv-raman-nagar',
      'kaggadasapura',
      'vimanapura',
      'jeevan-bima-nagar',
    ],
    competition: 'low',
    searchHabits:
      'Residents mostly shop and book services within the neighbourhood, searching Google for a nearby doctor, tutor or repair person and trusting neighbours’ word. Kannada and English are both used, and a phone call usually follows a search.',
    realEstate:
      'Independent houses and small apartment buildings, with older homes slowly rebuilt into rental floors. Buyers are local families and investors who want a cheaper base near Indiranagar and CV Raman Nagar.',
    industries: ['clinics-and-doctors', 'education-and-schools', 'retail', 'home-services'],
  },

  marathahalli: {
    coords: [12.956, 77.701],
    character:
      'Marathahalli grew around the junction of the Outer Ring Road and Old Airport Road, marked by the Marathahalli Bridge, and is now a dense commercial stretch of east Bengaluru. It is known for software training institutes, PGs, budget electronics shops and multi-cuisine restaurants that serve the large workforce of the nearby tech parks. Traffic is heavy, and many residents are young professionals and job-seekers in rented accommodation.',
    businesses: [
      'software training institutes',
      'PGs and hostels',
      'budget and multi-cuisine restaurants',
      'mobile, laptop and electronics stores',
      'clinics and hospitals',
      'gyms',
    ],
    landmarks: ['Marathahalli Bridge', 'Outer Ring Road', 'Old Airport Road', 'Prestige Tech Park'],
    nearby: [
      'munnekollal',
      'kadubeesanahalli',
      'doddanekundi',
      'aecs-layout',
      'bellandur',
      'old-airport-road',
    ],
    competition: 'high',
    searchHabits:
      'Many people searching for courses here are recent graduates, including many from other states, who compare institutes on Google reviews and YouTube and ask about placements before enrolling. Office workers along the Outer Ring Road search for lunch, gyms and services near their tech park.',
    realEstate:
      'A busy rental market of PGs, older apartment buildings and independent houses, with larger apartment complexes along the Outer Ring Road and towards Varthur and Sarjapur Road. Buyers are often investors renting to tech workers, along with professionals buying near their offices.',
    industries: [
      'coaching-and-test-prep',
      'restaurants-and-food',
      'real-estate',
      'fitness-and-sports',
    ],
  },

  medahalli: {
    coords: [13.021, 77.721],
    character:
      'Medahalli is a former village on Old Madras Road just east of Bhattarahalli, where the built-up city begins to thin out towards Virgonagar and Budigere Cross. Plotted layouts and newer apartment projects are going up on its farmland, while the highway frontage has showrooms, warehouses, eateries and small workshops. Village families and new arrivals now live side by side.',
    businesses: [
      'plotted layouts and apartment projects',
      'warehouses and godowns',
      'vehicle showrooms and repair workshops',
      'highway eateries',
      'building-material suppliers',
      'grocery and daily-needs stores',
    ],
    landmarks: ['Old Madras Road (NH 75)', 'Virgonagar'],
    nearby: ['bhattarahalli', 'tc-palya', 'avalahalli', 'virgonagar', 'kr-puram'],
    competition: 'low',
    searchHabits:
      'Home buyers looking at projects here research on property portals and YouTube, while local customers search for hardware, vehicle repair and groceries close to the highway. Many businesses here have no Google profile yet, so even a basic, accurate one stands out.',
    realEstate:
      'An early-stage market of plotted layouts, independent houses and a few apartment projects, still cheaper than KR Puram. Buyers are local families, investors and people working in Whitefield and KR Puram who want more space.',
    industries: [
      'real-estate',
      'construction-and-contractors',
      'logistics-and-transport',
      'automotive',
    ],
  },

  munnekollal: {
    coords: [12.948, 77.709],
    character:
      'Munnekollal is a dense residential area south of Marathahalli, between Varthur Road and Panathur, that grew as an affordable place to rent for people working in Marathahalli and the Outer Ring Road tech parks. Lanes of builder apartments, PGs and small shops branch off Munnekollal Main Road around the old village. Many residents are young professionals and couples from other states.',
    businesses: [
      'PGs and builder apartments',
      'small restaurants and tiffin centres',
      'grocery and provision stores',
      'mobile and electronics repair shops',
      'tuition centres',
      'clinics and pharmacies',
    ],
    landmarks: ['Munnekollal Main Road', 'Varthur Road', 'Marathahalli Bridge'],
    nearby: ['marathahalli', 'aecs-layout', 'kadubeesanahalli', 'panathur', 'balagere'],
    competition: 'medium',
    searchHabits:
      'Residents, many of them new to Bengaluru, search in English for affordable food, PGs, repairs and services close to home. Prices and reviews decide most choices, and many people find businesses through Google Maps or recommendations from flatmates.',
    realEstate:
      'Mostly builder apartments and PGs on small plots, with a large and fast-turning rental market. Buyers are investors who rent to tech workers and some first-time owners looking for a cheaper base near Marathahalli.',
    industries: ['real-estate', 'restaurants-and-food', 'home-services', 'coaching-and-test-prep'],
  },

  murugeshpalya: {
    coords: [12.959, 77.656],
    character:
      'Murugeshpalya sits on Old Airport Road opposite HAL Airport, between Kodihalli and Vimanapura, where the giant Shiva statue at the Shivoham Shiva Temple draws visitors. Behind the main road are dense residential lanes off Wind Tunnel Road with independent houses, small apartment buildings and rental homes. Many residents have links to HAL and the aerospace establishments nearby.',
    businesses: [
      'restaurants and bakeries on Old Airport Road',
      'car showrooms and service centres',
      'pooja stores and temple-related shops',
      'PG accommodation and rental housing',
      'clinics and pharmacies',
      'hardware and electrical stores',
    ],
    landmarks: ['Shivoham Shiva Temple', 'Wind Tunnel Road', 'HAL Airport', 'Old Airport Road'],
    nearby: [
      'kodihalli',
      'vimanapura',
      'jeevan-bima-nagar',
      'old-airport-road',
      'domlur',
      'hal-2nd-stage',
    ],
    competition: 'medium',
    searchHabits:
      'Temple visitors from across the city search for directions, parking and food nearby, especially at weekends and on Maha Shivaratri. Residents search for local services and doctors and often add “Old Airport Road” to the query.',
    realEstate:
      'Independent houses and small apartment buildings on the lanes, with commercial frontage on Old Airport Road in steady demand. Buyers are families and investors who want a central east location near Indiranagar and Domlur.',
    industries: [
      'automotive',
      'religious-and-spiritual',
      'restaurants-and-food',
      'aviation-and-aerospace',
    ],
  },

  'new-thippasandra': {
    coords: [12.975, 77.657],
    character:
      'New Thippasandra is a busy residential and shopping area north-east of Indiranagar, between HAL 3rd Stage and CV Raman Nagar, laid out beside the older Thippasandra village. New Thippasandra Main Road is a long strip of clothing, jewellery, sweet and household stores, supermarkets, clinics and restaurants used by the surrounding neighbourhoods. The side streets are mostly independent houses and small apartment buildings.',
    businesses: [
      'clothing and saree stores',
      'jewellery shops',
      'sweet shops and restaurants',
      'supermarkets and household stores',
      'clinics and diagnostic centres',
      'salons and beauty parlours',
    ],
    landmarks: ['New Thippasandra Main Road', '80 Feet Road, HAL 3rd Stage'],
    nearby: ['jeevan-bima-nagar', 'malleshpalya', 'cv-raman-nagar', 'indiranagar', 'hal-2nd-stage'],
    competition: 'medium',
    searchHabits:
      'Shoppers from nearby areas search for specific stores on New Thippasandra Main Road, especially before festivals and weddings, and check Google photos and timings before going. Families choose clinics and salons on reviews and long-standing reputation.',
    realEstate:
      'Independent houses and low-rise apartments, many rebuilt with shops on the ground floor and homes above. Commercial frontage on the main road is in demand from retailers; residential buyers are families who want to be close to Indiranagar.',
    industries: [
      'retail',
      'fashion-and-apparel',
      'jewellery',
      'clinics-and-doctors',
      'restaurants-and-food',
    ],
  },

  'old-airport-road': {
    coords: [12.958, 77.67],
    character:
      'Old Airport Road – also called HAL Airport Road – runs from Domlur past HAL Airport to Marathahalli, and was the city’s route to its airport until Kempegowda International opened in 2008. It is now a commercial corridor of car showrooms, hospitals, hotels, restaurants and offices, with HAL’s campuses and other aerospace establishments along its length. Residential neighbourhoods such as Murugeshpalya, Vimanapura and Kodihalli open off it.',
    businesses: [
      'car showrooms and service centres',
      'hospitals and specialist clinics',
      'hotels and banquet halls',
      'restaurants and bars',
      'aerospace and engineering suppliers',
      'corporate offices',
    ],
    landmarks: [
      'HAL Airport',
      'HAL Heritage Centre and Aerospace Museum',
      'Suranjan Das Road junction',
    ],
    nearby: ['murugeshpalya', 'vimanapura', 'kodihalli', 'domlur', 'marathahalli', 'doddanekundi'],
    competition: 'high',
    searchHabits:
      'Customers name the road itself – “on Old Airport Road” – and search for car showrooms, service centres, hospitals and restaurants they can reach by car from across east Bengaluru. Corporate buyers search for hotels and event venues for meetings and functions.',
    realEstate:
      'Mostly commercial frontage – showrooms, hotels, hospitals and offices – with apartment complexes and independent houses on the side roads. Commercial space is in demand from brands that want visibility on a main road; residential buyers are professionals working in the area.',
    industries: [
      'automotive',
      'aviation-and-aerospace',
      'healthcare-and-hospitals',
      'hospitality-and-hotels',
    ],
  },

  'old-madras-road': {
    coords: [12.993, 77.664],
    character:
      'Old Madras Road, the old highway to Chennai, runs east from Ulsoor past Indiranagar, Baiyappanahalli and Dooravani Nagar to KR Puram before continuing towards Hoskote. This city stretch has the Sir M. Visvesvaraya railway terminal at Baiyappanahalli, public-sector campuses such as ITI, and a long line of car and bike showrooms, hotels and newer apartment towers. It is a traffic-heavy road that people mostly pass along rather than stroll.',
    businesses: [
      'car and bike showrooms',
      'hotels and lodges',
      'apartment projects',
      'transport and logistics companies',
      'restaurants and bars',
      'hospitals and clinics',
    ],
    landmarks: [
      'Sir M. Visvesvaraya Terminal (Baiyappanahalli)',
      'Baiyappanahalli Metro station',
      'ITI Limited, Dooravani Nagar',
    ],
    nearby: [
      'cv-raman-nagar',
      'kasturi-nagar',
      'ramamurthy-nagar',
      'kr-puram',
      'indiranagar',
      'kaggadasapura',
    ],
    competition: 'medium',
    searchHabits:
      'Businesses here draw customers from far along the road, so searches often name a landmark – “near Baiyappanahalli metro”, “opposite ITI”. Travellers arriving at the railway terminal search for cabs, hotels and food close by.',
    realEstate:
      'Commercial frontage and showrooms along the highway, with large apartment projects behind it in Dooravani Nagar, Benniganahalli and towards KR Puram. Buyers are professionals who want metro access, and investors renting to them.',
    industries: [
      'automotive',
      'real-estate',
      'hospitality-and-hotels',
      'logistics-and-transport',
      'government-and-psu',
    ],
  },

  panathur: {
    coords: [12.932, 77.711],
    character:
      'Panathur is a former village on Panathur Main Road, which links the Outer Ring Road at Kadubeesanahalli with Varthur Road by way of Balagere. Its open land has become a dense spread of high-rise gated complexes and builder apartments for Outer Ring Road employees. The railway underbridge on the main road is a well-known bottleneck at office hours.',
    businesses: [
      'high-rise gated complexes',
      'builder apartments and PGs',
      'cafés, restaurants and cloud kitchens',
      'supermarkets',
      'play schools and daycare centres',
      'home cleaning and repair services',
    ],
    landmarks: ['Panathur Main Road', 'Panathur railway underbridge', 'Balagere Road'],
    nearby: [
      'kadubeesanahalli',
      'balagere',
      'munnekollal',
      'devarabisanahalli',
      'varthur',
      'gunjur',
    ],
    competition: 'medium',
    searchHabits:
      'Residents order and book almost everything through apps and Google Maps, and plan errands around Panathur Road traffic, so delivery and home visits matter more than walk-ins. Apartment WhatsApp groups are the first stop for recommendations.',
    realEstate:
      'Large high-rise gated complexes and builder apartments with an active resale and rental market. Buyers are tech professionals working at the Outer Ring Road parks and investors renting to them.',
    industries: ['real-estate', 'restaurants-and-food', 'home-services', 'education-and-schools'],
  },

  ramagondanahalli: {
    coords: [12.958, 77.742],
    character:
      'Ramagondanahalli lies on Varthur Road just north of Varthur Kodi, where Hagadur Road branches off towards Whitefield. It is the southern approach to Whitefield, with gated apartment complexes, villas and older village homes on either side of a congested road. Most residents are tech families working at ITPL, the EPIP Zone and the Outer Ring Road.',
    businesses: [
      'gated apartment complexes and villas',
      'supermarkets and organic stores',
      'restaurants and bakeries',
      'play schools and activity classes',
      'clinics and pharmacies',
      'car service centres',
    ],
    landmarks: ['Varthur Road', 'Varthur Kodi junction', 'Hagadur Road junction'],
    nearby: ['siddapura', 'varthur', 'hagadur', 'whitefield', 'thubarahalli'],
    competition: 'medium',
    searchHabits:
      'Residents rarely search for “Ramagondanahalli” – they type “Varthur Road, Whitefield” or the name of their complex – so businesses need those terms on their listings. Recommendations travel through apartment WhatsApp groups.',
    realEstate:
      'Gated apartments and villa communities with a steady resale and rental market, alongside some village plots. Buyers are tech professionals who want a Whitefield address at a slightly lower price than the main Whitefield roads.',
    industries: ['real-estate', 'education-and-schools', 'restaurants-and-food', 'home-services'],
  },

  'ramamurthy-nagar': {
    coords: [13.013, 77.678],
    character:
      'Ramamurthy Nagar is a large, mostly middle-class residential area north of Old Madras Road, between Banaswadi and KR Puram, spread along Ramamurthy Nagar Main Road and the Outer Ring Road. Layouts of independent houses and small apartment buildings have filled in over decades, and the main road has markets, schools, hospitals and showrooms. Long-settled families live alongside tech employees who commute to Whitefield and Manyata.',
    businesses: [
      'schools and tuition centres',
      'clinics, hospitals and nursing homes',
      'clothing and textile stores',
      'function halls and caterers',
      'supermarkets and provision stores',
      'two-wheeler and car showrooms',
    ],
    landmarks: ['Ramamurthy Nagar Main Road', 'Outer Ring Road', 'Kalkere Lake'],
    nearby: ['kasturi-nagar', 'kr-puram', 'tc-palya', 'banaswadi', 'horamavu', 'old-madras-road'],
    competition: 'medium',
    searchHabits:
      'Families compare schools, tuition and clinics on Google reviews and through relatives and neighbours, and both Kannada and English searches are common. Wedding and family-function searches – halls, caterers, decorators – are frequent here.',
    realEstate:
      'A broad, mid-priced market of independent houses, builder apartments and a few gated complexes, with active rentals. Buyers are families upgrading within east Bengaluru and IT employees who want access to both Whitefield and Manyata Tech Park.',
    industries: [
      'education-and-schools',
      'clinics-and-doctors',
      'retail',
      'real-estate',
      'events-and-weddings',
    ],
  },

  sarjapur: {
    coords: [12.86, 77.786],
    character:
      'Sarjapur is the old market town at the far end of Sarjapur Road, in Anekal taluk beyond Dommasandra, where roads lead on towards Attibele and Hosur. The town still serves the surrounding farming villages, while large plotted developments, villa projects and apartment townships are being built on the land around it as the Sarjapur Road belt stretches outwards. It is distinct from the busier Sarjapur Road stretch near the Outer Ring Road.',
    businesses: [
      'plotted layouts and villa projects',
      'farm-supply and agri-input shops',
      'building-material and hardware suppliers',
      'schools',
      'clinics and nursing homes',
      'grocery and market shops',
    ],
    landmarks: ['Sarjapur town centre', 'Sarjapur–Attibele Road', 'Sarjapur Road'],
    nearby: ['dommasandra', 'carmelaram', 'gunjur', 'attibele', 'chandapura'],
    competition: 'low',
    searchHabits:
      'Town residents search in Kannada and rely on shops they know, while home buyers from the city research plots and villa projects on property portals and YouTube before visiting. Searches for “Sarjapur” often come from people comparing projects, not from locals.',
    realEstate:
      'An outer, plot-led market of plotted developments, villa communities and a few apartment townships, with agricultural land still being converted. Buyers are investors and tech professionals planning ahead, plus local families building their own homes.',
    industries: [
      'real-estate',
      'construction-and-contractors',
      'agriculture-and-agritech',
      'education-and-schools',
    ],
  },

  'sarjapur-road': {
    coords: [12.912, 77.684],
    character:
      'Sarjapur Road runs south-east from Koramangala to Sarjapur town, and the stretch beyond the Outer Ring Road – Kaikondrahalli, Doddakannelli, Kasavanahalli, Carmelaram and Dommasandra – has become a long belt of apartments and villa communities. Wipro’s headquarters campus and the Outer Ring Road tech parks brought tech families here, followed by a large number of international and CBSE schools. Large gated communities sit alongside villages that are still being absorbed into the city.',
    businesses: [
      'apartment and villa projects',
      'international and CBSE schools',
      'play schools and daycare centres',
      'restaurants and cafés',
      'supermarkets and daily-needs stores',
      'clinics and paediatricians',
      'interior design studios',
    ],
    landmarks: ['Wipro’s Sarjapur Road campus', 'Kaikondrahalli Lake', 'Iblur junction'],
    nearby: ['kasavanahalli', 'carmelaram', 'harlur', 'bellandur', 'dommasandra', 'hsr-layout'],
    competition: 'medium',
    searchHabits:
      'Families research schools, daycare, clinics and home services carefully online, and recommendations in apartment WhatsApp groups carry a lot of weight. Searches usually name the apartment complex or a stretch such as “Sarjapur Road” or “Dommasandra” rather than a postal locality.',
    realEstate:
      'An active market of large gated apartment and villa projects from national and Bengaluru developers, with plotted developments further out towards Sarjapur town. Buyers are mainly tech professionals, NRIs and investors.',
    industries: [
      'real-estate',
      'construction-and-contractors',
      'education-and-schools',
      'interior-design',
    ],
  },

  siddapura: {
    coords: [12.957, 77.733],
    character:
      'This Siddapura is the one on Varthur Road in Whitefield – not the older Siddapura near Jayanagar – between Thubarahalli and Ramagondanahalli, with Siddapura Road running north into Whitefield. It is a compact mix of builder apartments, rental buildings, a few gated complexes and the remains of the old village. Its position between Kundalahalli Gate and Varthur makes it popular with tenants working at ITPL and on the Outer Ring Road.',
    businesses: [
      'builder apartments and rental buildings',
      'PG accommodation',
      'grocery and provision stores',
      'gyms and fitness studios',
      'clinics and pharmacies',
      'small restaurants and bakeries',
    ],
    landmarks: ['Varthur Road', 'Siddapura Road'],
    nearby: ['thubarahalli', 'ramagondanahalli', 'kundalahalli', 'whitefield', 'varthur'],
    competition: 'medium',
    searchHabits:
      'Tenants search on their phones for gyms, food, groceries and repairs close to home, usually adding “Whitefield” to the query. Because the name is shared with an area in south Bengaluru, a precise Google Maps pin matters.',
    realEstate:
      'Mostly builder apartments and independent rental buildings, with a few gated complexes and plots in the village. Buyers are investors renting to tech workers and first-time owners looking for a Whitefield address on a budget.',
    industries: ['real-estate', 'retail', 'fitness-and-sports', 'clinics-and-doctors'],
  },

  'tc-palya': {
    coords: [13.022, 77.703],
    character:
      'TC Palya – short for Thambuchetty Palya – is a residential area north of Old Madras Road between KR Puram and Bhattarahalli, spread along TC Palya Main Road. It grew from a village into layouts of independent houses, small apartment buildings and a few gated projects, with schools, function halls and shops along the main road. Most residents are families rather than short-term tenants.',
    businesses: [
      'schools and tuition centres',
      'function halls and caterers',
      'clinics and pharmacies',
      'grocery and provision stores',
      'hardware and paint shops',
      'bakeries and small restaurants',
    ],
    landmarks: ['TC Palya Main Road', 'Ramamurthy Nagar Main Road', 'Old Madras Road'],
    nearby: ['ramamurthy-nagar', 'bhattarahalli', 'kr-puram', 'medahalli', 'horamavu'],
    competition: 'low',
    searchHabits:
      'Families search for schools, doctors and home repairs nearby and rely on neighbours and church, temple or community groups for recommendations. Searches use both “TC Palya” and “Thambuchetty Palya”, so listings should carry both names.',
    realEstate:
      'Independent houses on layout plots, small builder apartments and a few gated projects, priced below Ramamurthy Nagar and KR Puram. Buyers are families buying their first home in east Bengaluru.',
    industries: [
      'real-estate',
      'education-and-schools',
      'events-and-weddings',
      'clinics-and-doctors',
    ],
  },

  thubarahalli: {
    coords: [12.955, 77.722],
    character:
      'Thubarahalli is the strip of Varthur Road just east of Kundalahalli Gate, with Thubarahalli Palya and the old village behind it. Shops, restaurants and service centres line the main road, while the lanes hold mid-size apartment complexes and rental buildings filled with people who work at ITPL, Brookefield and the Outer Ring Road. It sits between the busier Brookefield side and the gated communities further towards Varthur.',
    businesses: [
      'restaurants and bakeries on Varthur Road',
      'apartment complexes and rental buildings',
      'car and bike service centres',
      'supermarkets',
      'gyms',
      'clinics and diagnostic centres',
    ],
    landmarks: ['Varthur Road', 'Kundalahalli Gate'],
    nearby: ['kundalahalli', 'aecs-layout', 'siddapura', 'brookefield', 'munnekollal'],
    competition: 'medium',
    searchHabits:
      'Drivers on Varthur Road search for food, vehicle service and quick errands along their route, while residents look up gyms, clinics and home services within a short ride. Most customers find businesses through Google Maps rather than walking past.',
    realEstate:
      'Mid-size apartment complexes, builder flats and rental buildings with steady tenant demand. Buyers are tech professionals and investors who want to be close to Brookefield and ITPL.',
    industries: ['real-estate', 'restaurants-and-food', 'automotive', 'fitness-and-sports'],
  },

  varthur: {
    coords: [12.939, 77.744],
    character:
      'Varthur is an old village around Varthur Lake on the south-eastern edge of the city, where roads to Whitefield, Sarjapur and Gunjur meet. Its fields and open land have steadily given way to gated communities and villa projects, while the village core keeps its market and older homes. Narrow roads and heavy traffic remain a constant issue as the area fills in.',
    businesses: [
      'villa and apartment projects',
      'international schools',
      'construction and building-material suppliers',
      'grocery and daily-needs stores',
      'clinics',
      'restaurants',
    ],
    landmarks: ['Varthur Lake', 'Varthur Kodi junction', 'Varthur Main Road'],
    nearby: ['gunjur', 'balagere', 'ramagondanahalli', 'siddapura', 'panathur', 'whitefield'],
    competition: 'low',
    searchHabits:
      'New residents search Google Maps for almost everything – schools, doctors, groceries, home services – often naming their gated community or “Varthur Road”. Fewer local businesses compete for these searches, so a well-kept Google profile and reviews go a long way.',
    realEstate:
      'An upcoming market of villa communities, gated apartment projects and plotted layouts, still adding new supply. Buyers are tech professionals working in Whitefield and on the Outer Ring Road, along with investors who expect the area to mature.',
    industries: [
      'real-estate',
      'construction-and-contractors',
      'architecture',
      'interior-design',
      'education-and-schools',
    ],
  },

  vimanapura: {
    coords: [12.962, 77.664],
    character:
      'Vimanapura – “aircraft town” – grew around Hindustan Aeronautics Limited and its airport, and much of it is still HAL township and staff housing close to the runway. Around the township, Jagadish Nagar and the neighbouring layouts have independent houses and small apartment buildings, with Old Airport Road running past. HAL’s presence still gives the area a quiet, orderly feel that sets it apart from the busy road outside.',
    businesses: [
      'aerospace and engineering suppliers',
      'schools and tuition centres',
      'clinics and pharmacies',
      'grocery and provision stores',
      'bakeries and darshinis',
      'PG and rental housing',
    ],
    landmarks: ['HAL Airport', 'HAL Township', 'Jagadish Nagar'],
    nearby: [
      'murugeshpalya',
      'old-airport-road',
      'malleshpalya',
      'kodihalli',
      'cv-raman-nagar',
      'jeevan-bima-nagar',
    ],
    competition: 'low',
    searchHabits:
      'A settled, close-knit community where word of mouth and long-standing relationships decide most choices, with Kannada and English both common. Engineering and defence suppliers search for vendors and job-work partners near HAL.',
    realEstate:
      'A large share of land is institutional, so the private market is small – independent houses and low-rise apartments in the layouts around the township. Buyers are families with ties to the area and professionals who want to be near Old Airport Road and Indiranagar.',
    industries: [
      'aviation-and-aerospace',
      'government-and-psu',
      'education-and-schools',
      'clinics-and-doctors',
    ],
  },

  virgonagar: {
    coords: [13.034, 77.73],
    character:
      'Virgonagar is a settlement within Avalahalli on Old Madras Road, and gives its name to the post office that serves this whole stretch from Bhattarahalli to Budigere Cross. North of the highway, roads lead to Bidarahalli and the East Point group’s engineering college and hospital, which bring students, patients and staff to the area every day. Layouts, small apartment buildings and PGs have grown around them.',
    businesses: [
      'student PGs and hostels',
      'colleges and coaching centres',
      'hospital, clinics and pharmacies',
      'eateries, bakeries and juice shops',
      'printing and stationery shops',
      'layouts and apartment projects',
    ],
    landmarks: [
      'East Point College of Engineering and Technology',
      'Old Madras Road (NH 75)',
      'Hirandahalli Main Road',
    ],
    nearby: ['avalahalli', 'medahalli', 'budigere-cross', 'bhattarahalli', 'hoskote'],
    competition: 'low',
    searchHabits:
      'Students and staff search for PGs, food, printing and transport near the campus, and patients’ families search for pharmacies and places to eat near the hospital. Because many addresses on this stretch say “Virgonagar”, businesses here get found by people searching that name rather than their village.',
    realEstate:
      'Plotted layouts, independent houses and small apartment buildings, with PGs and rental rooms serving students. Buyers are local families and investors who expect demand from the college and the Old Madras Road corridor.',
    industries: [
      'higher-education',
      'healthcare-and-hospitals',
      'real-estate',
      'coaching-and-test-prep',
    ],
  },

  whitefield: {
    coords: [12.97, 77.75],
    character:
      'Whitefield began as an Anglo-Indian settlement in the 1880s and stayed largely rural until the International Tech Park (ITPL) opened in the 1990s. It is now one of Bengaluru’s main IT employment areas, with ITPL, the EPIP Zone and many other office campuses surrounded by gated communities, villa projects and international schools. The Purple Line metro now reaches Whitefield (Kadugodi), linking it directly to the city centre.',
    businesses: [
      'IT and tech companies',
      'gated communities and villa projects',
      'international schools',
      'hospitals and clinics',
      'cafés and restaurants',
      'business hotels and serviced apartments',
      'gyms and clubs',
    ],
    landmarks: [
      'International Tech Park Bangalore (ITPL)',
      'EPIP Zone',
      'Whitefield Main Road',
      'Whitefield (Kadugodi) Metro station',
    ],
    nearby: ['itpl', 'hope-farm', 'hagadur', 'kundalahalli', 'brookefield', 'kadugodi'],
    competition: 'high',
    searchHabits:
      'Residents are largely tech professionals and their families, many from other states and countries, who search in English on their phones and decide by Google reviews and community groups. Parents put a lot of research into schools and activities, and expect businesses to reply quickly on WhatsApp.',
    realEstate:
      'A large, established market of gated apartment complexes and villa communities, with new projects still launching towards Varthur and Hoskote. Buyers are tech professionals, NRIs and investors, and rental demand from IT employees is strong.',
    industries: [
      'real-estate',
      'education-and-schools',
      'healthcare-and-hospitals',
      'hospitality-and-hotels',
      'restaurants-and-food',
    ],
  },
} satisfies Partial<Record<LocalitySlug, LocalityProfile>>;
