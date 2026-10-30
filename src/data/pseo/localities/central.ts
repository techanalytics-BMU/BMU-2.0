import type { LocalityProfile } from '@/types/pseo';
import type { LocalitySlug } from '../slugs';

// Central Bengaluru – the 40 Central-zone localities on the sheet, in sheet order
export const centralLocalities = {
  'ashok-nagar': {
    coords: [12.969, 77.609],
    character:
      'Ashok Nagar covers Magrath Road and the streets around Garuda Mall and the Bangalore Football Stadium, just south-east of the MG Road–Brigade Road crossing. Office blocks, the mall, Hosmat Hospital and old Cantonment schools and churches share the area with quieter lanes of older homes and apartment buildings. Shoppers, football crowds and hospital visitors come in from across the city, while residents are a mix of long-settled Cantonment families and professionals renting close to work.',
    businesses: [
      'mall-based fashion and lifestyle stores',
      'hospitals and specialist clinics',
      'restaurants, cafés and food courts',
      'small corporate and professional offices',
      'serviced apartments and business hotels',
      'football academies and sports coaching',
    ],
    landmarks: ['Garuda Mall', 'Magrath Road', 'Bangalore Football Stadium', 'Hosmat Hospital'],
    nearby: [
      'brigade-road',
      'residency-road',
      'mg-road',
      'richmond-town',
      'austin-town',
      'vivek-nagar',
    ],
    competition: 'high',
    searchHabits:
      'Most searches come from people already heading into the area – mall shoppers checking store timings and parking, patients and families looking up hospitals and pharmacies, office staff hunting for lunch “near Garuda Mall”. People search by landmark here far more than by the name Ashok Nagar.',
    realEstate:
      'Mostly commercial and mixed-use – offices, retail and hospital buildings – with a limited stock of older apartments and a few redeveloped residential blocks in the inner lanes. Office tenants want a central address without paying for MG Road frontage, and homes are bought or rented by professionals working in the centre.',
    industries: [
      'retail',
      'healthcare-and-hospitals',
      'restaurants-and-food',
      'sports-and-academies',
      'fashion-and-apparel',
    ],
  },

  'austin-town': {
    coords: [12.961, 77.614],
    character:
      'Austin Town, officially Ferdinand Kittel Nagara, was built around 1920 as a Cantonment suburb of small cottages for working families, and it is still a tight-knit area of narrow streets, small houses and BDA flats. Football runs deep here – the area produced players who represented India at the 1948 and 1952 Olympics – and Nandan Ground is the centre of local sport. Many families are Tamil-speaking, and it borders Victoria Layout, Neelasandra and Vivek Nagar.',
    businesses: [
      'provision stores and bakeries',
      'clinics, dentists and maternity homes',
      'tuition centres and small private schools',
      'tailors and beauty parlours',
      'sports goods and football coaching',
      'small eateries and tea stalls',
    ],
    landmarks: ['Nandan Ground', 'St Philomena’s Hospital', 'Rashtriya Military School'],
    nearby: [
      'ashok-nagar',
      'neelasandra',
      'vivek-nagar',
      'langford-town',
      'richmond-town',
      'ejipura',
    ],
    competition: 'low',
    searchHabits:
      'Residents mostly choose shops, doctors and tutors within walking distance, through family, church and neighbourhood networks. Phone searches tend to be practical – a pharmacy, a clinic’s timings, a repair service – and Tamil is widely used alongside Kannada and English.',
    realEstate:
      'A dense, settled market of small independent houses, rented portions and older BDA apartments, with old cottages occasionally rebuilt as multi-storey family homes. Buyers and tenants are mostly families already connected to the area or working in the city centre close by.',
    industries: ['clinics-and-doctors', 'sports-and-academies', 'coaching-and-test-prep', 'retail'],
  },

  'benson-town': {
    coords: [12.997, 77.604],
    character:
      'An old Cantonment neighbourhood just north-east of the Cantonment railway station, built along Millers Road and Benson Cross Road with quiet residential streets of bungalows and newer low-rise apartments. United Theological College and several churches and mosques sit among the homes, and the Quddus Saheb Eidgah on Millers Road fills for Eid prayers. Shops and clinics cluster along Millers Road, while the inner streets stay residential.',
    businesses: [
      'clinics, dentists and diagnostic labs',
      'bakeries and meat shops',
      'supermarkets and provision stores',
      'boutiques and tailors',
      'tuition classes and pre-schools',
      'car repair garages',
    ],
    landmarks: [
      'Millers Road',
      'Benson Cross Road',
      'United Theological College',
      'Bangalore Cantonment railway station',
    ],
    nearby: [
      'jayamahal',
      'frazer-town',
      'vasanth-nagar',
      'shivajinagar',
      'cunningham-road',
      'richards-town',
    ],
    competition: 'low',
    searchHabits:
      'Families here are long-term residents who rely on recommendations from relatives and their parish or mosque community, then check Google reviews before visiting. Searches are usually for one specific need – a paediatrician, a home tutor, a bakery that takes cake orders – rather than general browsing.',
    realEstate:
      'A tightly held market of older bungalows and independent houses, with new supply coming from boutique apartment buildings on redeveloped plots. Buyers are mostly well-off families who want a quiet street close to the centre and the Cantonment station.',
    industries: [
      'clinics-and-doctors',
      'real-estate',
      'education-and-schools',
      'restaurants-and-food',
    ],
  },

  'brigade-road': {
    coords: [12.971, 77.607],
    character:
      'Brigade Road runs south from MG Road towards Hosur Road and is one of the city’s oldest shopping streets, lined with fashion, footwear, sports and electronics stores, pubs and fast-food outlets. Side lanes such as Rest House Road hold bars, cafés and small offices, and St Joseph’s College of Commerce brings students in every day. The street fills with young shoppers at weekends and with some of the city’s biggest crowds on New Year’s Eve.',
    businesses: [
      'fashion and footwear stores',
      'sports and electronics showrooms',
      'pubs and bars',
      'fast-food outlets and cafés',
      'mobile phone and accessory stores',
      'small offices above the shopfronts',
    ],
    landmarks: ['Samsung Opera House', 'Rest House Road', 'St Joseph’s College of Commerce'],
    nearby: [
      'mg-road',
      'church-street',
      'residency-road',
      'ashok-nagar',
      'richmond-town',
      'shanthala-nagar',
    ],
    competition: 'high',
    searchHabits:
      'Searches come mostly from visitors – shoppers checking whether a brand has a Brigade Road store, groups looking up pubs and happy hours, students searching for cheap eats near college. They spike in the evenings, at weekends and in the run-up to New Year’s Eve.',
    realEstate:
      'Almost entirely commercial: street-front retail, upper-floor offices and a few hotels, with very little housing. Retail tenants are national and international chains alongside long-running local stores.',
    industries: [
      'retail',
      'fashion-and-apparel',
      'restaurants-and-food',
      'electronics-and-appliances',
      'higher-education',
    ],
  },

  chamarajpet: {
    coords: [12.958, 77.567],
    character:
      'Laid out in 1892 and named after Maharaja Chamarajendra Wadiyar, Chamarajpet is a grid of main roads and cross roads just south-west of KR Market, with a temple on many of its main roads. It is home to the Kannada Sahitya Parishat and Tipu Sultan’s Summer Palace, and every Ramanavami season the Fort High School grounds host a long-running classical music festival. Old Kannada-speaking families live alongside traders, and the area is known for its agarbatti (incense stick) makers.',
    businesses: [
      'agarbatti and pooja-item makers',
      'sweet shops and old-style eateries',
      'clinics, nursing homes and eye hospitals',
      'schools, PU colleges and coaching classes',
      'provision and household stores',
    ],
    landmarks: [
      'Tipu Sultan’s Summer Palace',
      'Kannada Sahitya Parishat',
      'Fort High School grounds',
      'Kote Venkataramana Temple',
    ],
    nearby: ['kr-market', 'cottonpet', 'chickpet', 'basavanagudi', 'binnypet', 'mysore-road'],
    competition: 'medium',
    searchHabits:
      'Kannada searches are common, and many older residents still go by family doctors, known shops and word of mouth. Ramanavami concerts, temple festivals and the wedding season shape what younger families look up – caterers, flowers, pooja supplies and music classes.',
    realEstate:
      'A built-up market of old independent houses on a tight grid of blocks, many being rebuilt as multi-storey homes with rental floors or shops below. Buyers are mostly families with roots in old Bengaluru who value being close to KR Market and Basavanagudi.',
    industries: [
      'education-and-schools',
      'religious-and-spiritual',
      'clinics-and-doctors',
      'fmcg-and-consumer-goods',
      'restaurants-and-food',
    ],
  },

  chickpet: {
    coords: [12.97, 77.577],
    character:
      'Chickpet is the heart of the old Bengaluru Pete laid out in Kempegowda’s time – a dense grid of narrow streets around Avenue Road, Balepet and Mamulpet, packed with wholesale and retail shops. It is known above all for silk sarees, wedding fabrics and dress materials, and a large Marwari trading community runs many of its businesses. Families come from across the city and nearby towns for wedding shopping, and Chickpet Metro station has made it far easier to reach.',
    businesses: [
      'silk saree and wedding-wear wholesalers',
      'fabric and dress-material shops',
      'jewellery and silver shops',
      'bangle and fancy-goods stores',
      'book and stationery wholesalers',
      'small eateries and sweet shops',
    ],
    landmarks: ['Avenue Road', 'Chickpet Metro station', 'Balepet', 'Mamulpet'],
    nearby: ['cottonpet', 'kr-market', 'majestic', 'chamarajpet', 'sampangi-rama-nagar'],
    competition: 'high',
    searchHabits:
      'Shoppers usually search for a specific shop or product – “silk saree shops in Chickpet”, “wholesale dress material Bengaluru” – and then move to WhatsApp for catalogues, prices and repeat orders. Retailers from smaller towns find suppliers the same way, so Google Maps listings with clear photos and phone numbers matter.',
    realEstate:
      'An old commercial market of narrow, deep shop buildings, many rebuilt into multi-storey retail and godown space. Most demand is for shop frontage and storage rather than homes, and buyers are largely traders expanding within the market.',
    industries: [
      'textiles-and-garments',
      'fashion-and-apparel',
      'jewellery',
      'retail',
      'events-and-weddings',
    ],
  },

  'church-street': {
    coords: [12.975, 77.604],
    character:
      'A short street running parallel to MG Road between St Mark’s Road and Brigade Road, Church Street packs bookshops, pubs, cafés and restaurants into a few hundred metres. Blossom Book House and the Indian Coffee House sit beside newer bars and dessert shops, and its stone-paved surface makes it pleasant to walk. It is busiest in the evenings and at weekends, when students, office workers and tourists fill it.',
    businesses: [
      'pubs and bars',
      'cafés and casual restaurants',
      'new and second-hand bookshops',
      'dessert and bakery outlets',
      'small offices and co-working spaces',
      'fashion and accessory stores',
    ],
    landmarks: ['Blossom Book House', 'Indian Coffee House', 'Koshy’s, St Mark’s Road'],
    nearby: [
      'mg-road',
      'brigade-road',
      'shanthala-nagar',
      'residency-road',
      'lavelle-road',
      'cubbon-park',
    ],
    competition: 'high',
    searchHabits:
      '“Pubs near Church Street”, “cafés on Church Street” and “bookshop near MG Road” are typical searches, usually made on the spot or while planning an evening out. Visitors compare ratings, menus and photos quickly, so a complete Maps listing and recent reviews decide where people walk in.',
    realEstate:
      'A small, purely commercial strip of ground-floor restaurants and shops with offices above. Tenants are food and drink brands, bookshops and small firms that want footfall in the city centre.',
    industries: [
      'restaurants-and-food',
      'retail',
      'hospitality-and-hotels',
      'media-and-entertainment',
    ],
  },

  'commercial-street': {
    coords: [12.982, 77.608],
    character:
      'One of Bengaluru’s oldest shopping streets, Commercial Street runs through Tasker Town between OPH Road and Kamaraj Road, with Dispensary Road and Ibrahim Sahib Street branching off it. Its shops sell clothes, fabrics, footwear, jewellery, bags and accessories at every price point, and it is among the most crowded streets in the city, especially before festivals. Parking on the street is very limited, which shapes how and when people visit.',
    businesses: [
      'clothing and ethnic-wear stores',
      'fabric and tailoring shops',
      'footwear stores',
      'jewellery and imitation-jewellery shops',
      'bag and accessory sellers',
      'street-food and snack outlets',
    ],
    landmarks: ['Kamaraj Road', 'Dispensary Road', 'Ibrahim Sahib Street'],
    nearby: [
      'shivajinagar',
      'infantry-road',
      'mg-road',
      'ulsoor',
      'cunningham-road',
      'frazer-town',
    ],
    competition: 'high',
    searchHabits:
      'Shoppers plan trips around festivals, weddings and sales, searching for a particular shop, fabric or tailor before they set out and checking timings and parking on Google Maps. Stores that post new arrivals on Instagram and share catalogues on WhatsApp keep buyers coming back between visits.',
    realEstate:
      'A crowded retail market of small shopfronts, many in old buildings that have been rebuilt or extended upwards. Demand is almost entirely from retailers, and frontage on the main street is what tenants compete for.',
    industries: ['fashion-and-apparel', 'retail', 'jewellery', 'textiles-and-garments'],
  },

  'cooke-town': {
    coords: [13.002, 77.623],
    character:
      'Cooke Town is a green Cantonment suburb laid out around 1900 and named after G. H. Cooke, a Collector of the Civil and Military Station, with old bungalows, parks and quiet streets off Hutchins Road. Many bungalows have given way to apartments, but Milton Street Park and Cooke Town Park keep it leafy, and small cafés serving French, Lebanese and Vietnamese food have opened among the homes. Expatriates, students from abroad and a large Tamil community live here.',
    businesses: [
      'independent cafés and restaurants',
      'bakeries and meat shops',
      'salons and beauty studios',
      'clinics and pharmacies',
      'pre-schools and tuition centres',
      'charities and community organisations',
    ],
    landmarks: ['Hutchins Road', 'Milton Street Park', 'Bangalore East railway station'],
    nearby: [
      'richards-town',
      'cox-town',
      'frazer-town',
      'lingarajapuram',
      'kammanahalli',
      'banaswadi',
    ],
    competition: 'medium',
    searchHabits:
      'With old families, expatriates and students living side by side, searches run in English, Tamil and Kannada and often come from people new to the city looking for doctors, salons, groceries and home services. The cafés get much of their custom from people who find them on Instagram and Google Maps.',
    realEstate:
      'A sought-after market where old bungalows are being redeveloped into boutique and premium apartment buildings, and independent houses are now scarce. Buyers include business families and senior professionals, and rentals are popular with expatriates and students.',
    industries: [
      'restaurants-and-food',
      'beauty-and-cosmetics',
      'clinics-and-doctors',
      'real-estate',
      'ngos-and-non-profits',
    ],
  },

  cottonpet: {
    coords: [12.969, 77.569],
    character:
      'Cottonpet takes its name from the cotton market of the old Pete and lies on the western side of Chickpet, between Sultanpet, Binnypet and the City railway station. Its streets are lined with textile wholesalers, small lodges and old trading buildings, and Sultanpet next door is where much of Bengaluru goes to order wedding invitation cards. The dargah of Hazrat Tawakkal Mastan on Old Taluk Cutchery Road is visited every year by the Karaga procession, a long-standing sign of the area’s mixed Hindu and Muslim character.',
    businesses: [
      'textile and fabric wholesalers',
      'wedding-card printers and designers',
      'lodges and budget hotels',
      'wholesale grocery and grain traders',
      'small eateries and biryani houses',
    ],
    landmarks: [
      'Cottonpet Main Road',
      'Old Taluk Cutchery (OTC) Road',
      'Hazrat Tawakkal Mastan Dargah',
      'Sultanpet',
    ],
    nearby: ['chickpet', 'majestic', 'kr-market', 'chamarajpet', 'binnypet', 'magadi-road'],
    competition: 'medium',
    searchHabits:
      'Much of the business is trade-to-trade, so retailers and families arrive with a phone number or a WhatsApp catalogue rather than searching broadly. When people do search, it is for a product and the area together – “wedding cards Sultanpet”, “wholesale fabric Cottonpet” – and they rely on the shop’s Google listing to find it in the narrow lanes.',
    realEstate:
      'An old, crowded market of shop-houses and narrow commercial buildings, where most new construction replaces old structures with shops, godowns and lodges. Demand comes from traders and hoteliers rather than home buyers.',
    industries: [
      'textiles-and-garments',
      'printing-and-packaging',
      'events-and-weddings',
      'hospitality-and-hotels',
    ],
  },

  'cox-town': {
    coords: [12.995, 77.624],
    character:
      'Cox Town, officially Sarvagnanagara, was laid out after the plague years to ease crowding in the Cantonment and is named after A. R. Cox, a Collector of the Civil and Military Station. Several of its roads – Assaye Road, Meanee Avenue – are named after battles of the Madras Sappers, and its green, mostly residential streets also include Wheeler Road and Charles Campbell Road. It has large Tamil and Anglo-Indian communities and a Sindhi Colony with its own temple and community hall.',
    businesses: [
      'bakeries and sweet shops',
      'street-side fruit and vegetable sellers',
      'clinics and pharmacies',
      'tailors and boutiques',
      'tuition centres and pre-schools',
      'IT and technology offices',
    ],
    landmarks: ['Wheeler Road', 'Charles Campbell Road', 'Assaye Road'],
    nearby: ['frazer-town', 'cooke-town', 'richards-town', 'ulsoor', 'jogupalya', 'lingarajapuram'],
    competition: 'medium',
    searchHabits:
      'Recommendations travel through residents’ association WhatsApp groups, churches and community halls, and many families have used the same shops for decades. Online searches, in English and Tamil, are for practical needs – a doctor, a tailor, a caterer for a family function.',
    realEstate:
      'Mostly independent houses and older bungalows, with low-rise apartment buildings replacing some of them. Limited commercial development keeps supply tight, and buyers are families who want a quiet, green street close to Ulsoor and Frazer Town.',
    industries: [
      'clinics-and-doctors',
      'restaurants-and-food',
      'education-and-schools',
      'real-estate',
    ],
  },

  'cubbon-park': {
    coords: [12.974, 77.592],
    character:
      'Cubbon Park is the green centre of the city – a large public park laid out in 1870, with the state’s main government and civic buildings around it, including Vidhana Soudha, the High Court in Attara Kacheri, the State Central Library and the Government Museum. Few people live here; its edges along Kasturba Road and Cubbon Road are taken up by offices, courts, museums, hotels and sports venues. Walkers, runners and families use the park every morning and at weekends.',
    businesses: [
      'government departments and public offices',
      'advocates’ chambers and law firms near the High Court',
      'banks and corporate offices',
      'hotels and restaurants on its edges',
      'museums and cultural venues',
      'running groups and fitness trainers',
    ],
    landmarks: [
      'Vidhana Soudha',
      'Attara Kacheri (Karnataka High Court)',
      'State Central Library',
      'Government Museum',
    ],
    nearby: [
      'lavelle-road',
      'sampangi-rama-nagar',
      'mg-road',
      'infantry-road',
      'shanthala-nagar',
      'race-course-road',
    ],
    competition: 'medium',
    searchHabits:
      'Most searches are made by people passing through – lawyers and litigants at the High Court, visitors to government offices, museum-goers and morning walkers – looking for parking, breakfast, photocopy and notary services or a place to meet. Searches peak on weekday mornings and at weekends, when walkers and families come to the park.',
    realEstate:
      'There is almost no residential market – the park and government land take up most of the area. Commercial space along Kasturba Road, Vittal Mallya Road and Cubbon Road is prime office and hotel property, leased to corporates, banks and hotel groups.',
    industries: [
      'legal-services',
      'government-and-psu',
      'hospitality-and-hotels',
      'fitness-and-sports',
      'banking-and-nbfc',
    ],
  },

  'cunningham-road': {
    coords: [12.987, 77.595],
    character:
      'Cunningham Road, named after Francis Cunningham of the Madras Army, is one of the busiest commercial streets in Vasanth Nagar. It is lined with office buildings, banks, law firms, co-working spaces, cafés and design showrooms, and Fortis Hospital stands on it. Few people live on the road itself, but the homes, colleges and hospitals of Vasanth Nagar around it keep it busy through the day.',
    businesses: [
      'law firms and consultancies',
      'co-working spaces and corporate offices',
      'cafés and restaurants',
      'banks and wealth management firms',
      'premium furniture and décor showrooms',
      'hospitals and diagnostic centres',
    ],
    landmarks: ['Fortis Hospital, Cunningham Road', 'Queens Road', 'Ali Askar Road'],
    nearby: [
      'vasanth-nagar',
      'infantry-road',
      'palace-road',
      'shivajinagar',
      'benson-town',
      'race-course-road',
    ],
    competition: 'high',
    searchHabits:
      'Searches come from professionals working on the road and from patients visiting its hospitals – “cafés on Cunningham Road”, “co-working space near Cunningham Road”, “lawyer Cunningham Road”. Firms here compete for the same high-value clients, who look at websites, reviews and LinkedIn pages before they call.',
    realEstate:
      'Mainly office buildings old and new, showrooms and a few luxury apartment projects in the lanes behind the road. Tenants are law firms, consultancies, banks and design brands that want a central address near Cubbon Park.',
    industries: [
      'legal-services',
      'coworking-and-office-space',
      'healthcare-and-hospitals',
      'banking-and-nbfc',
      'furniture-and-home-decor',
    ],
  },

  ejipura: {
    coords: [12.946, 77.627],
    character:
      'Ejipura is a dense, mostly residential area between Vivek Nagar and Koramangala, with the National Games Village and Koramangala Indoor Stadium next to it. Its narrow streets of small houses, rented rooms and PG accommodation house many people who work in Koramangala’s offices, shops and restaurants, alongside older families from the original village. The Intermediate Ring Road runs along its edge and carries most of its traffic.',
    businesses: [
      'PG accommodation and rental housing',
      'small eateries and tiffin rooms',
      'grocery and convenience stores',
      'mobile phone and electronics repair',
      'salons',
      'clothing stores',
    ],
    landmarks: [
      'National Games Village',
      'Koramangala Indoor Stadium',
      'Intermediate Ring Road',
      'Koramangala TTMC',
    ],
    nearby: ['vivek-nagar', 'neelasandra', 'koramangala', 'domlur', 'austin-town', 'adugodi'],
    competition: 'medium',
    searchHabits:
      'Many residents are young tenants who search on their phones for PG rooms, food delivery, laundry, gyms and repairs. Local businesses compete for the same “near me” searches as Koramangala, so an accurate Google Maps pin and listing is essential.',
    realEstate:
      'A crowded market of small independent houses, rental buildings and PGs, with demand driven by tenants working in Koramangala and nearby. Redevelopment happens slowly, one plot at a time.',
    industries: [
      'restaurants-and-food',
      'home-services',
      'fitness-and-sports',
      'retail',
      'real-estate',
    ],
  },

  'frazer-town': {
    coords: [12.998, 77.615],
    character:
      'An old Cantonment-era neighbourhood laid out in the early 1900s and officially renamed Pulikeshi Nagar, though most people still call it Frazer Town. It has large Muslim and Christian communities, old bungalows, churches and mosques, and Mosque Road is known across the city for its food, especially on Ramzan evenings. Coles Road and Mosque Road carry most of its shops, and Bangalore East railway station sits on its north-eastern edge.',
    businesses: [
      'biryani, kebab and Mughlai restaurants',
      'bakeries and dessert shops',
      'clothing and textile stores',
      'clinics and pharmacies',
      'tailors and boutiques',
      'seasonal Ramzan food stalls',
    ],
    landmarks: ['Mosque Road', 'Coles Road', 'St Francis Xavier’s Cathedral', 'Coles Park'],
    nearby: ['cox-town', 'cooke-town', 'richards-town', 'benson-town', 'shivajinagar', 'ulsoor'],
    competition: 'medium',
    searchHabits:
      'Food searches rise sharply in the evenings and during Ramzan, when people from all over Bengaluru look up Mosque Road eateries by name. Local residents rely on community networks and word of mouth for clinics, tailors and services.',
    realEstate:
      'A mature market of old bungalows, independent houses and low-rise apartments, with occasional redevelopment of larger plots. Supply is limited, and buyers are often families with ties to the area and its communities.',
    industries: ['restaurants-and-food', 'retail', 'clinics-and-doctors', 'fashion-and-apparel'],
  },

  'infantry-road': {
    coords: [12.982, 77.599],
    character:
      'Infantry Road is a one-way street of about 1.6 km in the central business district, named after the British infantry barracks that once stood nearby. It links the Raj Bhavan side with Commercial Street and is lined with office buildings, hotels, clinics and colleges rather than shops. Property developers, professional firms and company branch offices are based here, and the city’s traffic police headquarters is on the road.',
    businesses: [
      'property developers’ and corporate offices',
      'law and chartered accountancy firms',
      'hotels and serviced apartments',
      'clinics and diagnostic centres',
      'restaurants and cafés',
      'travel agencies',
    ],
    landmarks: ['Safina Plaza', 'Raj Bhavan', 'Indian Express building, Queens Road'],
    nearby: [
      'commercial-street',
      'shivajinagar',
      'cunningham-road',
      'cubbon-park',
      'vasanth-nagar',
      'mg-road',
    ],
    competition: 'medium',
    searchHabits:
      'Searches here are mostly business-to-business and appointment-led – clients looking up a firm’s office, patients searching for a clinic’s address, visitors booking a hotel near Commercial Street. A precise Google Maps pin matters on a one-way road where people easily overshoot the entrance.',
    realEstate:
      'An office corridor of older and newer office blocks, with some hotels and very little housing. Tenants are developers, professional firms and company branch offices that want to be close to Vidhana Soudha, the courts and MG Road.',
    industries: [
      'real-estate',
      'legal-services',
      'accounting-and-ca-firms',
      'hospitality-and-hotels',
      'clinics-and-doctors',
    ],
  },

  jayamahal: {
    coords: [12.999, 77.597],
    character:
      'Jayamahal is a quiet, upmarket residential area north of the Cantonment railway station, between Palace Grounds and Benson Town. Wide roads such as Jayamahal Road and Nandidurga Road are lined with large old houses and newer apartment buildings, and the Jayamahal Palace Hotel – once Arni Hall, a 19th-century mansion – stands in its own grounds here. Palace Grounds next door hosts weddings, exhibitions and concerts that bring crowds and traffic on event days.',
    businesses: [
      'heritage hotel and banquet venues',
      'wedding decorators and caterers',
      'clinics and diagnostic labs',
      'cafés and bakeries',
      'sports turfs and swimming clubs',
      'pre-schools and day-care centres',
    ],
    landmarks: ['Jayamahal Palace Hotel', 'Jayamahal Road', 'Nandidurga Road'],
    nearby: [
      'benson-town',
      'vasanth-nagar',
      'palace-road',
      'sadashivanagar',
      'frazer-town',
      'rt-nagar',
    ],
    competition: 'low',
    searchHabits:
      'Residents are established families who choose doctors, schools and contractors through personal recommendation and then check reviews. Searches jump around big events at Palace Grounds, when visitors look for parking, food and places to stay nearby.',
    realEstate:
      'Large independent houses on Jayamahal Road and Nandidurga Road are slowly being rebuilt as premium apartment buildings, which now make up much of the new supply. Demand comes from families who want a central address near the Cantonment station and Palace Grounds.',
    industries: [
      'events-and-weddings',
      'hospitality-and-hotels',
      'real-estate',
      'clinics-and-doctors',
    ],
  },

  'kr-market': {
    coords: [12.964, 77.577],
    character:
      'KR Market – Krishna Rajendra Market, or City Market – is Bengaluru’s main wholesale market for flowers and a major one for vegetables and fruit, busy from before dawn as traders, florists and hotel buyers stock up. Around it lie the old Bangalore Fort, Victoria Hospital and Bangalore Medical College, the Kalasipalya bus stand and the flyover towards Mysore Road. Its streets are crowded with handcarts, mini-trucks and shoppers through most of the day.',
    businesses: [
      'wholesale flower traders and garland makers',
      'vegetable and fruit commission agents',
      'pooja and temple-supply stores',
      'pharmacies and diagnostic labs near the hospitals',
      'small eateries and tea stalls',
      'goods transport and loading services',
    ],
    landmarks: [
      'KR Market (City Market)',
      'KR Market Metro station',
      'Bangalore Fort',
      'Victoria Hospital',
    ],
    nearby: ['chickpet', 'chamarajpet', 'cottonpet', 'majestic', 'sudhama-nagar', 'basavanagudi'],
    competition: 'medium',
    searchHabits:
      'Trade here runs on phone calls, WhatsApp and long relationships between growers, agents and buyers, so many traders have little online presence. Event decorators, caterers and families shopping before weddings and festivals search for flower and vegetable suppliers by name and use Google Maps to find the right stall.',
    realEstate:
      'A congested commercial zone of market stalls, old shop buildings and godowns, with government and hospital land around it. There is little housing, and demand comes from traders who need storage and shop space close to the market.',
    industries: [
      'agriculture-and-agritech',
      'retail',
      'events-and-weddings',
      'healthcare-and-hospitals',
      'logistics-and-transport',
    ],
  },

  'langford-town': {
    coords: [12.958, 77.604],
    character:
      'Langford Town is a small Cantonment-era neighbourhood around Langford Road, between Richmond Town, Shanti Nagar and Hosur Road. It mixes old bungalows, apartment blocks built on their plots and crowded lanes of smaller homes, with mosques and Tamil-medium schools serving long-settled communities. The Hockey Stadium, Johnson Market and the Baldwin schools are all a short walk away.',
    businesses: [
      'supermarkets and provision stores',
      'restaurants and small hotels',
      'eye and specialist clinics',
      'bank branches',
      'salons and beauty parlours',
      'colleges and training institutes',
    ],
    landmarks: ['Langford Road', 'Bangalore Hockey Stadium', 'Johnson Market'],
    nearby: [
      'richmond-town',
      'shanti-nagar',
      'austin-town',
      'neelasandra',
      'wilson-garden',
      'ashok-nagar',
    ],
    competition: 'medium',
    searchHabits:
      'People here search close to home – clinics, pharmacies, grocery delivery and eateries within a kilometre or so. Johnson Market’s meat shops and eateries also draw searches from across the Cantonment side of the city.',
    realEstate:
      'A central market where old bungalows and family houses are steadily being redeveloped into mid-sized and premium apartment buildings. Buyers like being a short drive from MG Road and Lalbagh, and rentals are in demand from professionals working in the city centre.',
    industries: ['real-estate', 'clinics-and-doctors', 'restaurants-and-food', 'retail'],
  },

  'lavelle-road': {
    coords: [12.972, 77.597],
    character:
      'Lavelle Road is a short, tree-lined street a block east of Cubbon Park, running up to MG Road, and one of the city’s most upmarket addresses. Restaurants, bars, designer stores, private banks and boutique offices occupy its old bungalows and new buildings, with UB City and the JW Marriott on Vittal Mallya Road a short walk away. Its evening crowd is affluent – diners, hotel guests and professionals from nearby offices.',
    businesses: [
      'fine-dining restaurants and bars',
      'designer and luxury boutiques',
      'private banks and wealth managers',
      'boutique offices and consultancies',
      'premium salons and spas',
    ],
    landmarks: ['UB City', 'Vittal Mallya Road', 'Cubbon Park'],
    nearby: [
      'shanthala-nagar',
      'cubbon-park',
      'residency-road',
      'church-street',
      'sampangi-rama-nagar',
      'mg-road',
    ],
    competition: 'high',
    searchHabits:
      'Diners and shoppers here search with intent – “fine dining Lavelle Road”, “bar near UB City” – and compare menus, photos and reviews before booking. High-income clients researching private banks, designers or clinics expect a polished website and an active Instagram presence.',
    realEstate:
      'A small, premium market of commercial buildings, converted bungalows and a handful of luxury apartments. Space is leased to restaurants, luxury brands and wealth managers, and the few homes that come up attract very wealthy buyers.',
    industries: [
      'restaurants-and-food',
      'fashion-and-apparel',
      'banking-and-nbfc',
      'hospitality-and-hotels',
      'beauty-and-cosmetics',
    ],
  },

  'mg-road': {
    coords: [12.975, 77.607],
    character:
      'Mahatma Gandhi Road – South Parade in the Cantonment era – is the core of Bengaluru’s central business district, together with Brigade Road, Church Street, Residency Road and Lavelle Road. Corporate offices, banks, hotels, shopping streets and pubs sit side by side, and the area fills with office workers by day and visitors in the evenings and at weekends. Few people live on the road itself, though the lanes around it have some older homes and serviced apartments.',
    businesses: [
      'corporate and regional offices',
      'banks and financial firms',
      'hotels',
      'pubs and restaurants',
      'cafés',
      'fashion and lifestyle stores',
      'law and consulting firms',
    ],
    landmarks: [
      'MG Road Metro station',
      'Anil Kumble Circle',
      'Trinity Circle',
      'Cauvery Emporium',
    ],
    nearby: [
      'brigade-road',
      'church-street',
      'residency-road',
      'ulsoor',
      'cubbon-park',
      'commercial-street',
    ],
    competition: 'high',
    searchHabits:
      'Searches come from office workers, shoppers and visitors, many of them from outside the area – “restaurants near MG Road”, “hotel near Brigade Road”. B2B buyers looking for firms in the central business district expect a professional website and a complete Google profile before they make contact.',
    realEstate:
      'Largely a commercial market of offices, retail space and hotels, with a small number of luxury apartments and serviced residences in the surrounding lanes. Buyers and tenants are corporates, retailers and wealthy individuals.',
    industries: [
      'banking-and-nbfc',
      'hospitality-and-hotels',
      'restaurants-and-food',
      'retail',
      'legal-services',
    ],
  },

  majestic: {
    coords: [12.977, 77.574],
    character:
      'Majestic, around Gandhi Nagar, is the city’s main transport interchange: Kempegowda Bus Station, KSR Bengaluru City railway station and the Majestic metro interchange all meet here. The streets around them are packed with lodges, budget hotels, travel agents, eateries and shops serving travellers, and Gandhi Nagar has long been the base of the Kannada film trade, with distributors’ offices and old single-screen theatres. Crowds move through day and night.',
    businesses: [
      'lodges and budget hotels',
      'travel agents and bus ticket booking offices',
      'eateries and darshinis',
      'film distribution offices',
      'clothing and footwear shops',
      'mobile phone and electronics shops',
    ],
    landmarks: [
      'Kempegowda Bus Station',
      'KSR Bengaluru City railway station',
      'Nadaprabhu Kempegowda Metro station',
      'Freedom Park',
    ],
    nearby: ['cottonpet', 'chickpet', 'kr-market', 'seshadripuram', 'race-course-road', 'binnypet'],
    competition: 'high',
    searchHabits:
      'Searches are dominated by travellers arriving or leaving – “lodge near Majestic”, “hotel near Bangalore City railway station”, “bus to Mysuru from Majestic” – usually made on a phone with only minutes to decide. Kannada and English are both widely used, and reviews, photos and a phone number that gets answered decide which lodge or eatery is chosen.',
    realEstate:
      'A dense commercial market of hotels, lodges, shops and offices, with very little housing. Demand comes from hoteliers, retailers and transport businesses that need to be close to the bus and railway stations.',
    industries: [
      'hospitality-and-hotels',
      'travel-and-tourism',
      'media-and-entertainment',
      'logistics-and-transport',
      'restaurants-and-food',
    ],
  },

  malleshwaram: {
    coords: [13.003, 77.569],
    character:
      'One of Bengaluru’s first planned extensions, laid out in the late 1890s on a grid of main roads and numbered cross roads around Sampige Road and Margosa Road. It keeps much of its old character – temples, old family homes, the 8th Cross market and long-running eateries and silk shops – while Mantri Square mall and newer cafés bring in a younger crowd. The Indian Institute of Science sits on its northern edge.',
    businesses: [
      'silk and saree shops',
      'jewellery stores',
      'traditional eateries and sweet shops',
      'flower and pooja stores',
      'clinics and nursing homes',
      'coaching classes',
      'cafés',
    ],
    landmarks: [
      'Sampige Road',
      '8th Cross market',
      'Kadu Malleshwara Temple',
      'Mantri Square Mall',
    ],
    nearby: [
      'sadashivanagar',
      'seshadripuram',
      'rajajinagar',
      'yeshwanthpur',
      'mathikere',
      'srirampura',
    ],
    competition: 'medium',
    searchHabits:
      'Long-time residents rely on familiar shops and family doctors, while visitors from across the city search for Malleshwaram’s eateries, silk shops and markets by name. Kannada and English searches are both common, and festival seasons bring clear peaks for silks, flowers and sweets.',
    realEstate:
      'A tightly held market of old independent houses, with new supply mostly from redevelopment into low-rise apartments. Buyers are usually families with a connection to the area who value its closeness to the city centre.',
    industries: [
      'retail',
      'jewellery',
      'restaurants-and-food',
      'clinics-and-doctors',
      'coaching-and-test-prep',
    ],
  },

  neelasandra: {
    coords: [12.952, 77.614],
    character:
      'Neelasandra is a crowded residential area of modest homes between Hosur Road and Vivek Nagar, just south of Austin Town. Its streets are lined with small houses, rented portions, neighbourhood temples and many small government and private schools, and the Infant Jesus Church stands on its Bazaar Street edge with Vivek Nagar. Daily life revolves around local shops, schools and places of worship rather than offices.',
    businesses: [
      'provision and general stores',
      'small private schools and tuition classes',
      'neighbourhood clinics and pharmacies',
      'electrical and appliance repair shops',
      'beauty parlours and tailors',
      'meat shops and small eateries',
    ],
    landmarks: ['Hosur Road', 'Neelasandra Bazaar Street'],
    nearby: ['vivek-nagar', 'austin-town', 'ejipura', 'langford-town', 'adugodi', 'wilson-garden'],
    competition: 'low',
    searchHabits:
      'Families look for value and convenience close to home – a nearby school, a clinic open late, a repair shop – and decide mostly by word of mouth and WhatsApp groups. Tamil and Kannada are both common, and shops do well with simple, accurate Google listings that show phone numbers and timings.',
    realEstate:
      'An affordable, densely built market of small independent houses, rented portions and multi-storey family buildings on small plots. Most demand is from tenants and local families, and supply grows only as old houses are rebuilt.',
    industries: ['education-and-schools', 'clinics-and-doctors', 'retail', 'home-services'],
  },

  'palace-road': {
    coords: [12.99, 77.588],
    character:
      'Palace Road runs north from Basaveshwara Circle towards Bangalore Palace, linking the High Grounds area with Vasanth Nagar. Mount Carmel College and the Shangri-La hotel stand on it, and Palace Grounds, just beyond, hosts large weddings, exhibitions and concerts. The road itself is mostly institutional and commercial, with large houses and luxury apartments in the lanes off it.',
    businesses: [
      'luxury hotels and banquet halls',
      'colleges and coaching institutes',
      'wedding planners, decorators and caterers',
      'restaurants and cafés',
      'corporate offices',
    ],
    landmarks: ['Mount Carmel College', 'Shangri-La Hotel', 'Bangalore Palace'],
    nearby: [
      'vasanth-nagar',
      'race-course-road',
      'cunningham-road',
      'jayamahal',
      'sadashivanagar',
      'seshadripuram',
    ],
    competition: 'medium',
    searchHabits:
      'Searches come from students and parents looking at colleges and coaching, families planning weddings and functions at the hotels and Palace Grounds, and visitors looking for a hotel near the palace. Event-related searches rise sharply in the wedding season and before big exhibitions.',
    realEstate:
      'Very limited residential stock – large independent houses and a few luxury apartment buildings in the lanes off the road – alongside hotel, college and office land. Buyers are high-net-worth families, and new supply is rare.',
    industries: [
      'hospitality-and-hotels',
      'higher-education',
      'events-and-weddings',
      'coaching-and-test-prep',
    ],
  },

  'race-course-road': {
    coords: [12.983, 77.584],
    character:
      'Race Course Road runs past the Bangalore Turf Club’s race course in High Grounds, west of Cubbon Park, and is lined with hotels and offices rather than homes. The Taj West End, a garden hotel, sits across the road from the race course, and Basaveshwara Circle is at its eastern end. Race days, and weddings and conferences at the hotels, bring visitors from across the city.',
    businesses: [
      'luxury and business hotels',
      'banquet and conference venues',
      'corporate offices',
      'restaurants and bars',
      'event management companies',
    ],
    landmarks: ['Bangalore Turf Club', 'Taj West End', 'Basaveshwara Circle'],
    nearby: [
      'palace-road',
      'seshadripuram',
      'majestic',
      'cubbon-park',
      'sampangi-rama-nagar',
      'vasanth-nagar',
    ],
    competition: 'medium',
    searchHabits:
      'Most searches come from people heading to an event – a race day, a wedding, a conference at one of the hotels – looking up venues, parking, restaurants and places to stay. Corporate planners compare venues online well in advance, so detailed listings with photos, capacities and contact details win enquiries.',
    realEstate:
      'Mostly hotel, club and institutional land with some office buildings. Residential supply is minimal – a few apartment buildings in the lanes of High Grounds and Kumara Park – and buyers are wealthy families who want to be close to the centre.',
    industries: [
      'hospitality-and-hotels',
      'events-and-weddings',
      'restaurants-and-food',
      'real-estate',
    ],
  },

  'residency-road': {
    coords: [12.969, 77.603],
    character:
      'Residency Road, officially Field Marshal Cariappa Road, runs from Richmond Circle to Mayo Hall a few hundred metres south of MG Road. It is a road of institutions and offices – the Bangalore Club, Bishop Cotton Boys’ School at the St Mark’s Road corner, St Patrick’s Church at the Brigade Road junction, ITC Gardenia and several office towers. Traffic is heavy through the day, and most people here are working or visiting rather than living on the road.',
    businesses: [
      'corporate and regional offices',
      'luxury and business hotels',
      'banks and insurance offices',
      'restaurants, bars and cafés',
      'private clubs and event venues',
      'serviced apartments',
    ],
    landmarks: ['Bangalore Club', 'ITC Gardenia', 'St Patrick’s Church', 'Mayo Hall'],
    nearby: [
      'brigade-road',
      'shanthala-nagar',
      'richmond-town',
      'ashok-nagar',
      'lavelle-road',
      'mg-road',
    ],
    competition: 'high',
    searchHabits:
      'Searches come from business travellers and office staff – “hotel on Residency Road”, “restaurants near Richmond Circle”, “bank branch Residency Road” – and from parents looking up the schools nearby. They peak on weekdays, when office staff look for lunch, parking and services they can reach on foot.',
    realEstate:
      'A commercial corridor of office towers, hotels and institutional campuses, with a small number of luxury apartments in the streets behind it. Office tenants are banks, consultancies and company headquarters that want a central address.',
    industries: [
      'hospitality-and-hotels',
      'banking-and-nbfc',
      'insurance',
      'education-and-schools',
      'restaurants-and-food',
    ],
  },

  'richards-town': {
    coords: [13.004, 77.617],
    character:
      'Richards Town was laid out in the early 1900s as part of the Civil and Military Station and still has wide roads, garden bungalows and its old street names. Richards Park, with its old bandstand, is the heart of the neighbourhood, and the Holy Ghost Church, built by the Redemptorists, stands nearby on Clarke Road. It is mostly residential, giving way to the busier food streets of Frazer Town to the south.',
    businesses: [
      'family doctors and clinics',
      'bakeries and small cafés',
      'pre-schools and tuition centres',
      'boutiques and tailors',
      'pharmacies and provision stores',
    ],
    landmarks: ['Richards Park', 'Holy Ghost Church', 'Clarke Road'],
    nearby: [
      'cooke-town',
      'frazer-town',
      'cox-town',
      'benson-town',
      'lingarajapuram',
      'kammanahalli',
    ],
    competition: 'low',
    searchHabits:
      'Residents find services through parish networks, the residents’ association and neighbours. Online searches are usually for something specific and nearby – a physiotherapist, a pet groomer, a caterer for a family function.',
    realEstate:
      'A small, well-kept market of garden bungalows and independent houses, with some redevelopment into villas and low-rise apartments. Buyers value the wide roads and the park, and include both old families and professionals moving in.',
    industries: [
      'clinics-and-doctors',
      'education-and-schools',
      'restaurants-and-food',
      'real-estate',
    ],
  },

  'richmond-town': {
    coords: [12.963, 77.601],
    character:
      'Richmond Town, officially Sir Mirza Ismail Nagara, dates from the 1880s and is named after Thomas Richmond; it grew up with British, Anglo-Indian, Parsi and Muslim trading families, and old bungalows still line Richmond Road and the streets off it. Many of those bungalows have since become apartment buildings, offices and schools – Baldwin Girls’ High School is here – and Sacred Heart Church on Richmond Road remains a landmark. It sits between Residency Road and Langford Town, a short drive from MG Road.',
    businesses: [
      'schools and colleges',
      'boutique offices and consultancies',
      'restaurants and cafés',
      'clinics and specialist doctors',
      'serviced apartments and guest houses',
    ],
    landmarks: [
      'Richmond Road',
      'Richmond Circle',
      'Sacred Heart Church',
      'Baldwin Girls’ High School',
    ],
    nearby: [
      'langford-town',
      'residency-road',
      'shanti-nagar',
      'ashok-nagar',
      'sampangi-rama-nagar',
      'austin-town',
    ],
    competition: 'medium',
    searchHabits:
      'Residents and office staff search in English for schools, clinics, cafés and services close to Richmond Road, and many expect to book or enquire online. Parents researching the area’s long-established schools make up a steady share of searches.',
    realEstate:
      'A mature, central market where many old bungalows have been replaced by mid-rise and premium apartment buildings, with commercial use along Richmond Road. Buyers want a central address close to MG Road and good schools, and rentals are popular with professionals and expatriates.',
    industries: [
      'education-and-schools',
      'real-estate',
      'clinics-and-doctors',
      'restaurants-and-food',
    ],
  },

  sadashivanagar: {
    coords: [13.007, 77.581],
    character:
      'A quiet, leafy residential area just north of the city centre, made up largely of large bungalows on wide roads around Sankey Tank. It is home to many senior politicians, industrialists and film families, and commercial activity is limited to a few streets on its edges. Palace Grounds, used for weddings, concerts and exhibitions, lies on its eastern side.',
    businesses: [
      'specialist clinics and doctors’ practices',
      'boutiques and designer studios',
      'cafés and restaurants on its edges',
      'architects and interior designers',
      'event and wedding services near Palace Grounds',
      'premium salons',
    ],
    landmarks: ['Sankey Tank', 'Mekhri Circle', 'Palace Grounds', 'Bellary Road'],
    nearby: [
      'malleshwaram',
      'jayamahal',
      'palace-road',
      'mathikere',
      'sanjay-nagar',
      'dollars-colony',
    ],
    competition: 'low',
    searchHabits:
      'Residents choose mostly through personal networks and established names, then check a business’s website and reviews before making contact. Searches tend to be for specific, high-end services – specialist doctors, architects, designers – rather than general “near me” browsing.',
    realEstate:
      'A small, exclusive bungalow market where large plots rarely change hands. New supply comes from the occasional luxury low-rise apartment building on a redeveloped bungalow plot, and buyers are wealthy families and business owners.',
    industries: [
      'architecture',
      'interior-design',
      'clinics-and-doctors',
      'real-estate',
      'events-and-weddings',
    ],
  },

  'sampangi-rama-nagar': {
    coords: [12.966, 77.592],
    character:
      'Sampangi Rama Nagar is the older residential and administrative quarter south of Cubbon Park, around Sree Kanteerava Stadium – built on the bed of the old Sampangi tank – and the Kanteerava Indoor Stadium. Its lanes off Rajaram Mohan Roy Road and near Hudson Circle mix small houses and apartment blocks with offices, hospitals and a local vegetable market. Athletes and coaches training at the stadiums are as much a part of daily life as office workers and residents.',
    businesses: [
      'sports coaching and training academies',
      'sports goods shops',
      'hospitals and clinics',
      'small offices and professional firms',
      'vegetable and provision stores',
      'small eateries and tea stalls',
    ],
    landmarks: [
      'Sree Kanteerava Stadium',
      'Kanteerava Indoor Stadium',
      'Hudson Circle',
      'Rajaram Mohan Roy Road',
    ],
    nearby: [
      'cubbon-park',
      'lavelle-road',
      'shanti-nagar',
      'sudhama-nagar',
      'richmond-town',
      'kr-market',
    ],
    competition: 'medium',
    searchHabits:
      'Searches mix the local and the city-wide: residents look for clinics, groceries and tuition nearby, while people from across Bengaluru search for coaching, events and matches at the Kanteerava stadiums. Parents choosing sports coaching for their children compare academies on Google reviews and Instagram.',
    realEstate:
      'A small, central market of older independent houses and apartment buildings, hemmed in by stadium, government and office land. Buyers and tenants value being minutes from Cubbon Park, MG Road and the city’s civic offices.',
    industries: [
      'sports-and-academies',
      'fitness-and-sports',
      'clinics-and-doctors',
      'government-and-psu',
    ],
  },

  seshadripuram: {
    coords: [12.993, 77.575],
    character:
      'Seshadripuram grew in the same late-19th-century wave of extensions as Malleshwaram and Chamarajpet and takes its name from Dewan K. Seshadri Iyer. Lying between Malleshwaram and Gandhi Nagar, it is a settled middle-class area of old houses, apartment blocks and small shops, known for the schools and colleges of the Seshadripuram educational institutions. Kumara Park West and Sirur Park Road bring offices, clinics and eateries close to the homes.',
    businesses: [
      'schools, colleges and coaching classes',
      'clinics and nursing homes',
      'darshinis and sweet shops',
      'chartered accountants and small offices',
      'stationery and photocopy shops',
      'provision stores',
    ],
    landmarks: ['Sirur Park Road', 'Kumara Park West', 'Mantri Square Mall'],
    nearby: [
      'malleshwaram',
      'majestic',
      'race-course-road',
      'palace-road',
      'sadashivanagar',
      'rajajinagar',
    ],
    competition: 'medium',
    searchHabits:
      'Students and parents drive many searches – colleges, PU coaching, tuition and hostels – alongside everyday Kannada and English searches for doctors, eateries and services. Families tend to trust established names and reviews from people they know.',
    realEstate:
      'A built-up market of older independent houses and mid-sized apartment buildings, with steady redevelopment of old homes into flats and rental floors. Buyers are families who want to stay central, close to Malleshwaram, Majestic and the colleges.',
    industries: [
      'higher-education',
      'coaching-and-test-prep',
      'education-and-schools',
      'clinics-and-doctors',
      'accounting-and-ca-firms',
    ],
  },

  'shanthala-nagar': {
    coords: [12.972, 77.6],
    character:
      'Shanthala Nagar is the locality name used in addresses for the St Mark’s Road side of the central business district – the streets between Lavelle Road, Residency Road and MG Road, including St Mark’s Cathedral and Bishop Cotton Boys’ School. It is an area of banks, offices, hotels and long-running restaurants rather than homes, with the State Bank of India’s local head office on St Mark’s Road. Office workers and students fill its pavements on weekdays, and its restaurants draw diners in the evenings.',
    businesses: [
      'banks and financial institutions',
      'corporate offices',
      'hotels',
      'restaurants and cafés',
      'schools',
      'insurance and investment firms',
    ],
    landmarks: [
      'St Mark’s Road',
      'St Mark’s Cathedral',
      'Bishop Cotton Boys’ School',
      'State Bank of India local head office',
    ],
    nearby: [
      'lavelle-road',
      'church-street',
      'residency-road',
      'mg-road',
      'cubbon-park',
      'brigade-road',
    ],
    competition: 'high',
    searchHabits:
      'Most searches come from people working in or visiting the CBD – “bank near St Mark’s Road”, “breakfast near MG Road”, “hotel near Cubbon Park” – and many search by the road name rather than “Shanthala Nagar”. Businesses here do well to use both names in their listings and pages.',
    realEstate:
      'A commercial market of office buildings, bank premises, hotels and institutional campuses, with a handful of upmarket apartments. Tenants are financial institutions, corporates and hospitality brands.',
    industries: [
      'banking-and-nbfc',
      'insurance',
      'hospitality-and-hotels',
      'restaurants-and-food',
      'education-and-schools',
    ],
  },

  'shanti-nagar': {
    coords: [12.956, 77.596],
    character:
      'Shanti Nagar lies between Lalbagh’s main gate and Richmond Town, on either side of Kengal Hanumanthaiah Road, still widely called Double Road. It is home to the Shanthinagar bus station and the central offices of BMTC and KSRTC, and its streets mix government offices, banks, schools and old residential layouts. It is busy by day with commuters, office staff and long-distance bus passengers, and quieter in the residential lanes behind the main road.',
    businesses: [
      'government and transport offices',
      'bank branches',
      'schools and pre-schools',
      'restaurants and darshinis',
      'lodges and small hotels',
      'travel agencies and bus operators',
    ],
    landmarks: [
      'Kengal Hanumanthaiah Road (Double Road)',
      'Shanthinagar bus station',
      'BMTC central offices',
      'Lalbagh main gate',
    ],
    nearby: [
      'sudhama-nagar',
      'wilson-garden',
      'langford-town',
      'richmond-town',
      'sampangi-rama-nagar',
      'lakkasandra',
    ],
    competition: 'medium',
    searchHabits:
      'Searches come from travellers catching long-distance buses at the Shanthinagar terminal, staff and visitors at the transport and government offices, and residents of the older layouts. Many are quick phone searches for food, lodging and parking, while residents lean on neighbours’ recommendations for services.',
    realEstate:
      'A central market of older independent houses, government quarters and low-rise apartments, with some new apartment buildings on redeveloped plots. Buyers like the location between Lalbagh, Richmond Town and Jayanagar.',
    industries: [
      'logistics-and-transport',
      'government-and-psu',
      'travel-and-tourism',
      'education-and-schools',
      'banking-and-nbfc',
    ],
  },

  shivajinagar: {
    coords: [12.986, 77.605],
    character:
      'Shivajinagar is one of the oldest and most crowded parts of the Cantonment, built around Russell Market, St Mary’s Basilica and the Shivajinagar bus station. Its lanes are full of meat, fish and fruit sellers, biryani and kebab houses, clothes and footwear shops and wholesale traders, and it has a large Muslim community alongside Tamil Christian and other families. Bowring and Lady Curzon Hospital, one of the city’s oldest public hospitals, stands on its edge, and the September feast at St Mary’s draws large crowds.',
    businesses: [
      'meat, fish and poultry sellers',
      'fruit and dry-fruit traders',
      'biryani and kebab houses',
      'clothing and footwear shops',
      'mobile phone and accessory shops',
      'pharmacies and clinics near Bowring Hospital',
    ],
    landmarks: [
      'Russell Market',
      'St Mary’s Basilica',
      'Shivajinagar Bus Station',
      'Bowring and Lady Curzon Hospital',
    ],
    nearby: [
      'commercial-street',
      'infantry-road',
      'frazer-town',
      'benson-town',
      'cunningham-road',
      'ulsoor',
    ],
    competition: 'medium',
    searchHabits:
      'Shoppers search for Russell Market traders, meat shops and dry-fruit sellers by name, and caterers and restaurants from other areas come here to buy in bulk. Many shops still take orders by phone and WhatsApp from customers who have bought from them for years.',
    realEstate:
      'A dense, old market of shop-houses, small commercial buildings and crowded residential lanes, with redevelopment happening building by building. Demand is mainly from traders and families who already live and work here.',
    industries: [
      'restaurants-and-food',
      'retail',
      'fashion-and-apparel',
      'healthcare-and-hospitals',
    ],
  },

  'sudhama-nagar': {
    coords: [12.958, 77.59],
    character:
      'Sudhama Nagar is a small, central residential area between Lalbagh Road and Kengal Hanumanthaiah Road, a short walk from Lalbagh. Its quiet cross roads of older houses and apartment buildings sit behind busy main roads lined with banks, hospitals, government offices and the Urvashi Theatre. Lalbagh, KR Market and the Shanthinagar bus station are all within easy reach.',
    businesses: [
      'hospitals and specialist clinics',
      'bank branches',
      'restaurants and darshinis',
      'management and pharmacy colleges',
      'lodges and small hotels',
      'clothing stores',
    ],
    landmarks: ['Lalbagh Road', 'Kengal Hanumanthaiah Road', 'Urvashi Theatre'],
    nearby: [
      'shanti-nagar',
      'sampangi-rama-nagar',
      'wilson-garden',
      'kr-market',
      'basavanagudi',
      'richmond-town',
    ],
    competition: 'low',
    searchHabits:
      'Residents are settled families who mostly search in Kannada and English for nearby doctors, schools, groceries and home services. Patients coming from other parts of the city to the hospitals on Lalbagh Road and KH Road also search for pharmacies, food and stays nearby.',
    realEstate:
      'A compact market of older independent houses and mid-sized apartment buildings, with occasional new projects on redeveloped plots. Buyers are families who want a central, residential pocket close to Lalbagh and the old city markets.',
    industries: [
      'healthcare-and-hospitals',
      'higher-education',
      'banking-and-nbfc',
      'clinics-and-doctors',
    ],
  },

  ulsoor: {
    coords: [12.979, 77.623],
    character:
      'Ulsoor, or Halasuru, is one of the city’s older settlements, centred on Ulsoor Lake just east of MG Road. It has a strong Tamil heritage, the old Someshwara temple, a gurudwara by the lake and long-running markets, and the Madras Engineer Group’s centre borders it. Its narrow residential lanes sit a short walk from the offices and hotels of the central business district.',
    businesses: [
      'neighbourhood shops and markets',
      'restaurants and cafés',
      'small hotels and guest houses',
      'clinics',
      'flower and pooja shops',
      'boutiques and tailors',
    ],
    landmarks: [
      'Ulsoor Lake',
      'Halasuru Someshwara Temple',
      'Gurudwara Sri Guru Singh Sabha',
      'Halasuru Metro station',
    ],
    nearby: [
      'mg-road',
      'commercial-street',
      'cox-town',
      'jogupalya',
      'indiranagar',
      'hal-2nd-stage',
    ],
    competition: 'medium',
    searchHabits:
      'Local residents shop on foot and go by word of mouth, while office workers and hotel guests from the MG Road side search on their phones for food and services nearby. People visiting the lake and temples also look up eateries and shops close by.',
    realEstate:
      'A small, central market of older independent houses, low-rise apartments and a few premium apartment buildings near the lake. Buyers value the location close to MG Road and Indiranagar, and supply is limited.',
    industries: ['restaurants-and-food', 'hospitality-and-hotels', 'retail', 'clinics-and-doctors'],
  },

  'vasanth-nagar': {
    coords: [12.992, 77.593],
    character:
      'Vasanth Nagar is an upmarket central neighbourhood between the Cantonment railway station and Cunningham Road, with Palace Road on its western side. It holds some of the city’s well-known hospitals and colleges – Bhagwan Mahaveer Jain Hospital, Fortis Hospital on Cunningham Road and Mount Carmel College – alongside old bungalows, apartment buildings and offices on Millers Road and Thimmaiah Road. Its streets are busy with patients, students and office staff during the day.',
    businesses: [
      'hospitals, clinics and diagnostic centres',
      'colleges and coaching institutes',
      'cafés, bakeries and restaurants',
      'pharmacies and medical suppliers',
      'boutiques and saree stores',
      'corporate and NGO offices',
    ],
    landmarks: ['Bhagwan Mahaveer Jain Hospital', 'Millers Tank Bund Road', 'Thimmaiah Road'],
    nearby: [
      'cunningham-road',
      'palace-road',
      'jayamahal',
      'benson-town',
      'infantry-road',
      'shivajinagar',
    ],
    competition: 'medium',
    searchHabits:
      'Health searches make up a large share – patients and families from across Bengaluru and other towns look up hospitals, specialists, pharmacies and places to stay nearby. Residents and students search on their phones for cafés, salons and services, mostly in English.',
    realEstate:
      'A premium, mature market of older bungalows, independent houses and upscale apartment buildings, with new luxury projects on redeveloped plots. Buyers are business families and senior professionals who want to live centrally.',
    industries: [
      'healthcare-and-hospitals',
      'higher-education',
      'clinics-and-doctors',
      'restaurants-and-food',
      'real-estate',
    ],
  },

  'vivek-nagar': {
    coords: [12.954, 77.621],
    character:
      'Vivek Nagar lies between MG Road and Koramangala, hemmed in by Army land – the ASC Centre with its golf course and other military establishments – with the National Games Village to its south. It is known across the city for the Infant Jesus Church, whose Thursday Masses and January feast draw large crowds, and its lanes hold Tamil temples, schools and small shops. Most of the area is dense residential housing.',
    businesses: [
      'flower, candle and religious-goods stalls',
      'bakeries and eateries',
      'meat and fish shops',
      'mobile phone shops',
      'clinics and pharmacies',
      'clothing stores',
    ],
    landmarks: ['Infant Jesus Church', 'Viveknagar Bus Station', 'Lower Agaram Road', 'ASC Centre'],
    nearby: ['neelasandra', 'ejipura', 'austin-town', 'koramangala', 'adugodi', 'ashok-nagar'],
    competition: 'medium',
    searchHabits:
      'Visitors to the Infant Jesus Church search for Mass timings, parking and places to eat, with clear peaks on Thursdays and during the feast. Residents mostly go by word of mouth and search in English, Tamil and Kannada for clinics, schools and repairs.',
    realEstate:
      'A crowded market of small independent houses and low-rise apartment buildings with little room to grow, because Army land surrounds it. Most demand is from families already living here and from tenants working in Koramangala and the city centre.',
    industries: [
      'religious-and-spiritual',
      'restaurants-and-food',
      'clinics-and-doctors',
      'retail',
      'education-and-schools',
    ],
  },

  'wilson-garden': {
    coords: [12.949, 77.597],
    character:
      'Wilson Garden is a densely built neighbourhood between Lalbagh and Hosur Road, south of Shanti Nagar, laid out on a grid of numbered cross roads. Many of its houses double as shops and godowns – wholesale flower traders in particular have moved into homes along its cross roads – and its main roads are lined with eateries, clinics and small businesses. Flowers being loaded and unloaded add to the traffic, a long-running concern for residents.',
    businesses: [
      'wholesale flower traders',
      'eateries and darshinis',
      'clinics and pharmacies',
      'provision and general stores',
      'tuition centres',
      'bakeries and sweet shops',
    ],
    landmarks: ['Hosur Road', 'Siddaiah Road', 'Lalbagh'],
    nearby: [
      'shanti-nagar',
      'lakkasandra',
      'adugodi',
      'sudhama-nagar',
      'langford-town',
      'jayanagar',
    ],
    competition: 'medium',
    searchHabits:
      'Residents search mostly for nearby food, doctors and services, in Kannada, Tamil and English, while florists, decorators and event planners from across the city look up Wilson Garden’s flower wholesalers by name. Traders take many of their orders over WhatsApp and phone calls.',
    realEstate:
      'A dense market of independent houses on small plots, many rebuilt as multi-storey buildings with rental floors, shops or godowns. Buyers are local families and small business owners, and the central location keeps rental demand steady.',
    industries: [
      'events-and-weddings',
      'agriculture-and-agritech',
      'restaurants-and-food',
      'clinics-and-doctors',
    ],
  },
} satisfies Partial<Record<LocalitySlug, LocalityProfile>>;
