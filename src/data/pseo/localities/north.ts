import type { LocalityProfile } from '@/types/pseo';
import type { LocalitySlug } from '../slugs';

// North Bengaluru localities, in the sheet's order. Zones follow the sheet (so Peenya, Yeshwanthpur
// and Banaswadi sit here). Coords are approximate locality centres.
export const northLocalities = {
  amruthahalli: {
    coords: [13.067, 77.605],
    character:
      'A former village north of Hebbal, east of Bellary Road, that has filled up with independent houses, small apartment blocks and paying-guest buildings as Manyata Tech Park and the airport road have grown around it. Many residents are tech workers renting their first home in north Bengaluru, living alongside older families from the original village around Amruthahalli Lake. Amruthahalli Main Road carries most of the area’s shops and services.',
    businesses: [
      'paying-guest and rental accommodation',
      'grocery and daily-needs stores',
      'clinics and pharmacies',
      'tiffin centres and small restaurants',
      'tuition centres',
      'two-wheeler service garages',
    ],
    landmarks: ['Amruthahalli Lake', 'Amruthahalli Main Road'],
    nearby: ['byatarayanapura', 'sahakara-nagar', 'jakkur', 'thanisandra', 'hebbal', 'kodigehalli'],
    competition: 'medium',
    searchHabits:
      'Many residents are newcomers renting near Manyata, so they find tiffin services, laundries, gyms and repair shops through Google Maps and food apps rather than word of mouth. Longer-settled families still rely on neighbours and local WhatsApp groups, and many search in Kannada.',
    realEstate:
      'Independent houses on small village plots, many rebuilt as rental floors and paying-guest buildings, with a growing number of mid-sized apartment projects. Tenant demand from Manyata employees draws small investors and landlords.',
    industries: [
      'real-estate',
      'restaurants-and-food',
      'clinics-and-doctors',
      'coaching-and-test-prep',
      'home-services',
    ],
  },

  'arabic-college': {
    coords: [13.031, 77.616],
    character:
      'A densely built neighbourhood off Nagawara Main Road, named after Darul Uloom Sabeelur Rashad, the long-established Islamic seminary that locals call the Arabic College. Its lanes are lined with small houses, family-run shops and eateries, and Urdu is widely spoken alongside Kannada. Although Manyata Tech Park and the Outer Ring Road are close by, it feels like an older market neighbourhood rather than an IT suburb.',
    businesses: [
      'meat and poultry shops',
      'biryani and kebab restaurants',
      'tailoring and garment shops',
      'mobile phone and accessory stores',
      'clinics and pharmacies',
      'schools and madrasas',
      'hardware and building-material dealers',
    ],
    landmarks: ['Darul Uloom Sabeelur Rashad', 'Nagawara Main Road'],
    nearby: ['nagawara', 'rt-nagar', 'hbr-layout', 'lingarajapuram', 'hebbal'],
    competition: 'medium',
    searchHabits:
      'Shopping is local and word of mouth carries most weight, with WhatsApp used heavily to share offers, menus and contact numbers. Searches mix Urdu, Kannada and English, so Google Business Profiles with clear photos, prices and a WhatsApp number work better than long web pages.',
    realEstate:
      'A tightly built market of small independent houses and narrow multi-storey buildings with shops on the ground floor, and almost no vacant land. Most buyers and tenants are families already living in the area or nearby.',
    industries: [
      'restaurants-and-food',
      'retail',
      'fashion-and-apparel',
      'clinics-and-doctors',
      'education-and-schools',
    ],
  },

  'bel-road': {
    coords: [13.031, 77.569],
    character:
      'New BEL Road runs through RMV Extension 2nd Stage in north Bengaluru and takes its name from Bharat Electronics, whose Jalahalli campus lies to the north-west. It is one of north Bengaluru’s main eating-out and shopping streets, with restaurants, cafés, bakeries and showrooms on both sides, and it is also home to ISRO’s headquarters at Antariksh Bhavan and to Ramaiah Memorial Hospital. Students from the Ramaiah colleges and IISc, scientists, doctors and long-settled families make up much of the crowd.',
    businesses: [
      'restaurants, cafés and dessert shops',
      'hospitals, clinics and diagnostic labs',
      'pharmacies and medical-supply stores',
      'clothing and footwear showrooms',
      'bank branches',
      'coaching centres for engineering and medical entrances',
      'opticians and electronics stores',
    ],
    landmarks: ['ISRO Headquarters (Antariksh Bhavan)', 'Ramaiah Memorial Hospital'],
    nearby: [
      'dollars-colony',
      'mathikere',
      'sanjay-nagar',
      'sadashivanagar',
      'malleshwaram',
      'yeshwanthpur',
    ],
    competition: 'high',
    searchHabits:
      'Students and young professionals look up restaurants, cafés and dessert places on Instagram, Zomato and Google Maps, often searching “New BEL Road” by name. Patients and their families search for doctors, labs and pharmacies near Ramaiah Hospital, and reviews decide which clinic gets the call.',
    realEstate:
      'An established market of independent houses and older apartment buildings in RMV 2nd Stage, with ground floors on the main road converted into shops, restaurants and clinics. Commercial space on the road is sought by food brands and healthcare providers, while the homes behind it suit families who want to stay close to central Bengaluru.',
    industries: [
      'restaurants-and-food',
      'healthcare-and-hospitals',
      'clinics-and-doctors',
      'coaching-and-test-prep',
      'retail',
    ],
  },

  bagalur: {
    coords: [13.133, 77.669],
    character:
      'A large village north-east of Bengaluru, roughly halfway between Hennur and the airport, at the far end of the Hennur–Bagalur Road. Since that road became a toll-free alternative route to the airport, plotted layouts, villa projects and a few apartment developments have spread along it, though much of the surrounding land is still farmland. The village itself remains agricultural and Kannada-speaking.',
    businesses: [
      'plotted layouts and villa projects',
      'construction-material and hardware suppliers',
      'wedding and convention halls',
      'schools',
      'dairy and poultry farms',
      'grocery and agri-input shops',
    ],
    landmarks: ['Hennur–Bagalur Road', 'Kempegowda International Airport (to the north-west)'],
    nearby: ['kogilu', 'kothanur', 'yelahanka', 'kempegowda-airport-area', 'sadahalli'],
    competition: 'low',
    searchHabits:
      'Most online interest comes from outside – Bengaluru families and investors comparing plots and villas along the Hennur–Bagalur Road on property portals and YouTube walk-through videos before they call. Village residents depend on local contacts and Kannada word of mouth.',
    realEstate:
      'An upcoming market led by plotted developments, farm plots and villa projects, with a few apartment projects closer to the main road. Buyers are mostly investors and families planning a future home within reach of the airport and north Bengaluru’s offices.',
    industries: [
      'real-estate',
      'construction-and-contractors',
      'agriculture-and-agritech',
      'events-and-weddings',
      'education-and-schools',
    ],
  },

  banaswadi: {
    coords: [13.012, 77.65],
    character:
      'An established residential area in north-east Bengaluru, between Kammanahalli, Ramamurthy Nagar and Kasturi Nagar, with its own railway station. It is a settled mix of independent houses, older apartment buildings and newer mid-sized complexes, home to families from many language communities and to professionals who commute to the Outer Ring Road and Whitefield. Banaswadi Main Road and the streets around the station carry most of its shops, clinics and eateries.',
    businesses: [
      'clinics and nursing homes',
      'schools and pre-schools',
      'bakeries and family restaurants',
      'supermarkets and provision stores',
      'salons and beauty parlours',
      'tuition and coaching centres',
      'car and two-wheeler service centres',
    ],
    landmarks: ['Banaswadi railway station', 'Banaswadi Main Road'],
    nearby: [
      'kammanahalli',
      'hrbr-layout',
      'kalyan-nagar',
      'ramamurthy-nagar',
      'kasturi-nagar',
      'horamavu',
    ],
    competition: 'medium',
    searchHabits:
      'Long-settled residents stay loyal to businesses they know, while newer apartment households search Google Maps for clinics, tuition and home services and read reviews first. Searches often pair Banaswadi with a nearby name, such as “near Banaswadi railway station”.',
    realEstate:
      'A mature resale market of independent houses and older apartments, with small builders replacing old houses with apartment blocks and rental floors. Buyers are mostly families moving within north-east Bengaluru who want schools and hospitals close by.',
    industries: [
      'clinics-and-doctors',
      'education-and-schools',
      'restaurants-and-food',
      'retail',
      'automotive',
    ],
  },

  byatarayanapura: {
    coords: [13.065, 77.594],
    character:
      'An old village on Bellary Road between Hebbal and Yelahanka that gives its name to an assembly constituency. The village core of narrow lanes and independent houses is now surrounded by newer layouts, apartment blocks and commercial buildings along the highway, with Sahakara Nagar to the west. Airport traffic runs straight past, and the roadside is lined with showrooms, eateries and fuel stations.',
    businesses: [
      'car and two-wheeler showrooms',
      'highway restaurants and darshinis',
      'paying-guest accommodation',
      'hardware and building-material stores',
      'clinics and pharmacies',
      'small builders and property brokers',
    ],
    landmarks: ['Bellary Road (NH 44)', 'Jakkur Aerodrome (to the north)'],
    nearby: ['sahakara-nagar', 'amruthahalli', 'kodigehalli', 'jakkur', 'hebbal', 'yelahanka'],
    competition: 'medium',
    searchHabits:
      'Residents of the newer layouts search in English for schools, clinics and services, while older village households use Kannada and local contacts. Showrooms and service centres on Bellary Road draw customers from across north Bengaluru, who compare them online before visiting.',
    realEstate:
      'A mix of old village houses, plotted layouts and apartment buildings, with commercial plots on Bellary Road used for showrooms and offices. Buyers include families working around Hebbal and Manyata and investors drawn by the airport road.',
    industries: [
      'automotive',
      'real-estate',
      'restaurants-and-food',
      'construction-and-contractors',
      'clinics-and-doctors',
    ],
  },

  chikkabanavara: {
    coords: [13.08, 77.5],
    character:
      'A growing suburb on the north-western edge of Bengaluru, beyond Jalahalli, built up around Chikkabanavara railway station on the main line to Tumakuru, where the line to Kunigal and Hassan branches off. Affordable layouts and apartment blocks have replaced much of the farmland, housing people who work in Peenya’s factories and students from the colleges towards Soladevanahalli. The old village and its lake, just north of the station, still sit at the centre, and the area remains largely Kannada-speaking.',
    businesses: [
      'affordable apartment and plotted-layout projects',
      'paying-guest hostels for students',
      'small manufacturing and fabrication units',
      'schools and pre-university colleges',
      'grocery and hardware stores',
      'clinics and pharmacies',
    ],
    landmarks: [
      'Chikkabanavara railway station',
      'Chikkabanavara Lake',
      'Acharya Institute of Technology (Soladevanahalli)',
    ],
    nearby: ['jalahalli-west', 'dasarahalli', 'peenya', 'hesaraghatta', 'jalahalli'],
    competition: 'low',
    searchHabits:
      'Many households are first-time home owners who search in Kannada and English for schools, clinics and home services and check with neighbours before deciding. Students search for paying-guest rooms, food and transport near their college.',
    realEstate:
      'An affordable market of plotted layouts, independent houses and budget-to-mid-range apartments, with new projects marketed on their links to Tumkur Road and Peenya. Buyers are mostly first-time home owners working in north-west Bengaluru.',
    industries: [
      'real-estate',
      'education-and-schools',
      'higher-education',
      'manufacturing',
      'construction-and-contractors',
    ],
  },

  dasarahalli: {
    coords: [13.045, 77.514],
    character:
      'A dense residential and trading area on Tumkur Road next to Peenya Industrial Area, around the 8th Mile junction. Much of it grew as housing for Peenya’s factory workers, and it had its own town administration before being absorbed into the city in 2007. Today the main road is a continuous strip of shops, eateries and service businesses, served by the Dasarahalli Metro station on the Green Line.',
    businesses: [
      'wholesale and retail shops along Tumkur Road',
      'small workshops and fabrication units',
      'transport and goods-carrier operators',
      'darshinis and military hotels',
      'clinics and nursing homes',
      'mobile and electronics stores',
      'rental housing for factory workers',
    ],
    landmarks: ['Dasarahalli Metro station', 'Tumkur Road (NH 48)', '8th Mile junction'],
    nearby: ['peenya', 'jalahalli', 'jalahalli-west', 'chikkabanavara', 'laggere'],
    competition: 'medium',
    searchHabits:
      'Customers are mostly working families who shop on Tumkur Road and search in Kannada and English, with Hindi common among workers from other states. Many shops get their trade from walk-ins and phone calls, so an accurate Google Maps listing with a working number matters more than a website.',
    realEstate:
      'A crowded market of small independent houses, rental buildings and budget apartments, with land along Tumkur Road used for shops and warehouses. Buyers are mostly working families and small landlords who build rental floors for Peenya’s workforce.',
    industries: [
      'retail',
      'manufacturing',
      'logistics-and-transport',
      'clinics-and-doctors',
      'restaurants-and-food',
    ],
  },

  devanahalli: {
    coords: [13.247, 77.712],
    character:
      'A historic town north of Bengaluru, known for Devanahalli Fort and as the birthplace of Tipu Sultan. Kempegowda International Airport, which opened beside it in 2008, has turned the surrounding farmland into plotted layouts, villa projects, airport hotels, warehouses and business parks. The town itself remains small, with a market area and a largely local, Kannada-speaking population.',
    businesses: [
      'plotted layouts and villa projects',
      'airport hotels and service apartments',
      'resorts and wedding venues',
      'warehousing and logistics',
      'cab and travel operators',
      'schools',
    ],
    landmarks: ['Kempegowda International Airport', 'Devanahalli Fort', 'Bellary Road (NH 44)'],
    nearby: ['kempegowda-airport-area', 'sadahalli', 'bagalur', 'yelahanka'],
    competition: 'low',
    searchHabits:
      'Most search interest comes from outside the town – property buyers across Bengaluru researching plots and villas near the airport, and travellers looking for airport hotels, cabs and places to eat. Local residents rely more on word of mouth and Kannada searches.',
    realEstate:
      'An upcoming market led by plotted developments and villa projects, with some apartments, sold largely on closeness to the airport. Buyers are mainly investors and Bengaluru families planning for the future rather than moving in straight away.',
    industries: [
      'real-estate',
      'hospitality-and-hotels',
      'travel-and-tourism',
      'events-and-weddings',
      'logistics-and-transport',
    ],
  },

  'doddaballapur-road': {
    coords: [13.13, 77.567],
    character:
      'The road that runs north-west from Yelahanka towards Doddaballapura, past Avalahalli and on to Rajanukunte. Its first few kilometres are lined with engineering colleges, schools, apartment projects and plotted layouts, and further out it opens into farmland, plant nurseries and farmhouses. The corridor attracts students, faculty and families who want more space than Yelahanka offers while staying within reach of the airport road.',
    businesses: [
      'engineering and management colleges',
      'student hostels and paying-guest rooms',
      'plotted layouts and villa projects',
      'plant nurseries and farmhouses',
      'schools',
      'warehouses and small industrial units',
    ],
    landmarks: [
      'Doddaballapur Main Road',
      'BMS Institute of Technology and Management (Avalahalli)',
    ],
    nearby: ['yelahanka-new-town', 'yelahanka', 'rajanukunte', 'jakkur', 'vidyaranyapura'],
    competition: 'low',
    searchHabits:
      'Students and parents search in detail for colleges, hostels and courses, often comparing several institutions along the road. Property seekers find layouts and villa projects through portals and builders’ ads that use Doddaballapur Road as the address.',
    realEstate:
      'An emerging market of plotted layouts, villa communities and a growing number of apartment projects, with farm plots further from Yelahanka. Buyers are investors, faculty and professionals working in north Bengaluru, and families looking ahead to the airport region’s growth.',
    industries: [
      'higher-education',
      'real-estate',
      'education-and-schools',
      'construction-and-contractors',
      'agriculture-and-agritech',
    ],
  },

  'dollars-colony': {
    coords: [13.036, 77.575],
    character:
      'A leafy, upmarket residential enclave in RMV Extension 2nd Stage, just off New BEL Road, known for its large independent houses on wide, quiet streets. The name is usually said to come from early residents who had earned in dollars abroad, and it is still home to business families, senior professionals, scientists and retired officials. Many older bungalows are being replaced by small, high-end apartment buildings.',
    businesses: [
      'premium clinics and specialist doctors',
      'gourmet food stores and bakeries',
      'interior design and home-décor studios',
      'salons and spas',
      'schools and pre-schools',
      'boutique builders of luxury apartments',
    ],
    landmarks: ['New BEL Road', 'Sanjay Nagar Main Road'],
    nearby: ['bel-road', 'sanjay-nagar', 'mathikere', 'sadashivanagar', 'hebbal', 'ganganagar'],
    competition: 'medium',
    searchHabits:
      'Residents are affluent and selective – they search for specialist doctors, premium home services and interiors by name, read reviews closely and act on personal referrals from neighbours and clubs. Many prefer a call or a WhatsApp message to a booking form, so a responsive phone line matters.',
    realEstate:
      'A tightly held market of large independent houses and bungalow plots, where homes seldom come up for sale and are often redeveloped into a few premium apartments. Buyers are wealthy families, NRIs and senior executives who want a quiet address close to central Bengaluru.',
    industries: [
      'real-estate',
      'interior-design',
      'clinics-and-doctors',
      'architecture',
      'beauty-and-cosmetics',
    ],
  },

  'gangamma-circle': {
    coords: [13.058, 77.546],
    character:
      'A busy junction in Jalahalli where the roads from Jalahalli East, Jalahalli West, Jalahalli village and Jalahalli Cross meet, named after the old Sri Gangamma Devi Temple, known locally as Gangamma Gudi. It sits on the road past the Air Force Station towards MS Palya and works as the shopping centre for the surrounding layouts. Many households nearby are families of Air Force personnel and of current and retired BEL and HMT employees.',
    businesses: [
      'grocery, vegetable and provision stores',
      'bank branches and ATMs',
      'darshinis and sweet shops',
      'clinics, labs and pharmacies',
      'clothing and saree shops',
      'mobile and electronics repair shops',
    ],
    landmarks: ['Sri Gangamma Devi Temple (Gangamma Gudi)', 'Air Force Station Jalahalli East'],
    nearby: ['jalahalli', 'jalahalli-west', 'vidyaranyapura', 'mathikere', 'peenya', 'bel-road'],
    competition: 'medium',
    searchHabits:
      'Shoppers are mainly residents of the nearby layouts who know the circle well, so many search for a shop by name or simply add “near Gangamma Circle”. Kannada is widely used, older customers prefer to phone ahead, and a correct Google Maps pin helps people find shops in the crowded lanes.',
    realEstate:
      'A settled market of independent houses, many built by PSU and defence employees decades ago, with a gradual shift to rental floors and small apartment buildings. Buyers are mostly families who already live in north-west Bengaluru.',
    industries: [
      'retail',
      'clinics-and-doctors',
      'restaurants-and-food',
      'banking-and-nbfc',
      'fashion-and-apparel',
    ],
  },

  ganganagar: {
    coords: [13.025, 77.59],
    character:
      'A settled residential neighbourhood between Bellary Road and RT Nagar, just south of Hebbal, with CBI Road running through it. Its streets are mostly independent houses and small apartment buildings, many owned by long-settled families, alongside government employees and professionals who value its quick access to both the airport road and the city centre. Shops and eateries cluster along CBI Road and the roads into RT Nagar.',
    businesses: [
      'bakeries and sweet shops',
      'clinics and diagnostic centres',
      'tuition and coaching centres',
      'provision stores and supermarkets',
      'salons',
      'tailors and boutiques',
    ],
    landmarks: ['CBI Road', 'Bellary Road'],
    nearby: ['rt-nagar', 'hebbal', 'sanjay-nagar', 'sadashivanagar', 'jayamahal'],
    competition: 'medium',
    searchHabits:
      'Residents stay loyal to neighbourhood shops and often find new ones through family and WhatsApp groups. When they do search, it is usually for one specific need close by – a doctor, a tutor, a tailor – with “Ganganagar” or “RT Nagar” in the query.',
    realEstate:
      'Most homes are independent houses on layout plots that pass down within families, and those that do sell are often rebuilt as builder floors. Buyers like being a short drive from both Hebbal and the city centre.',
    industries: ['clinics-and-doctors', 'coaching-and-test-prep', 'retail', 'restaurants-and-food'],
  },

  'hbr-layout': {
    coords: [13.034, 77.63],
    character:
      'Hennur–Bellary Road Layout, usually shortened to HBR Layout, is a BDA layout of five blocks that spreads across both sides of the Outer Ring Road between Nagawara and Hennur. Its older blocks are streets of independent houses owned by long-settled families, while newer rental buildings and paying-guest houses fill up with people working at Manyata Tech Park next door. The main roads through the blocks, and the BDA shopping complex in the 2nd Block, carry restaurants, bakeries, clinics and everyday shops.',
    businesses: [
      'paying-guest and rental housing',
      'restaurants, bakeries and biryani outlets',
      'clinics and diagnostic labs',
      'gyms and fitness studios',
      'supermarkets and meat shops',
      'car and bike service garages',
    ],
    landmarks: ['BDA Complex, HBR Layout 2nd Block', 'Outer Ring Road', 'Manyata Tech Park'],
    nearby: [
      'nagawara',
      'hennur',
      'hennur-bande',
      'kalyan-nagar',
      'kammanahalli',
      'arabic-college',
    ],
    competition: 'medium',
    searchHabits:
      'Tenants working at Manyata look for food, gyms, laundry and repairs on Google Maps and delivery apps, usually adding the block number to the search. Long-time owners lean on neighbours, local WhatsApp groups and shops they have used for years.',
    realEstate:
      'A mature layout market of independent houses on BDA plots, many rebuilt as three- and four-storey rental buildings, with a few apartment complexes on the edges. Rental demand from Manyata employees makes it popular with small landlords and investors.',
    industries: [
      'real-estate',
      'restaurants-and-food',
      'clinics-and-doctors',
      'fitness-and-sports',
      'home-services',
    ],
  },

  'hrbr-layout': {
    coords: [13.019, 77.647],
    character:
      'A planned layout of numbered blocks right beside Kalyan Nagar, just off the Outer Ring Road – the two are so intertwined that many shops give both names in their address. HRBR’s inner streets are quieter, with independent houses, small apartment buildings and many rental floors, while its main roads have filled with cafés, salons, boutiques and clinics. Residents include long-settled families, professionals who work on the ring road and students from colleges in north-east Bengaluru.',
    businesses: [
      'cafés, dessert shops and cloud kitchens',
      'salons and beauty studios',
      'boutiques and tailoring studios',
      'clinics and dental practices',
      'student hostels and paying-guest rooms',
      'coaching and language institutes',
    ],
    landmarks: ['Outer Ring Road', 'Kalyan Nagar'],
    nearby: [
      'kalyan-nagar',
      'kammanahalli',
      'banaswadi',
      'hbr-layout',
      'horamavu',
      'kasturi-nagar',
    ],
    competition: 'medium',
    searchHabits:
      'Young residents and students find cafés, salons and boutiques through Instagram reels and Google Maps, try new openings quickly and leave reviews just as quickly. People use “HRBR”, “Kalyan Nagar” and “Kammanahalli” almost interchangeably in searches, so a listing that names the block and a nearby landmark is easier to find.',
    realEstate:
      'A rental-led market: owners of layout plots have added floors to let to students and young professionals, and many houses on the main roads now have a shop or café on the ground floor. Buyers are mostly local landlords and investors rather than first-time home owners.',
    industries: [
      'restaurants-and-food',
      'beauty-and-cosmetics',
      'fashion-and-apparel',
      'clinics-and-doctors',
      'coaching-and-test-prep',
    ],
  },

  hebbal: {
    coords: [13.036, 77.597],
    character:
      'Hebbal sits where Bellary Road – the route to the airport – meets the Outer Ring Road, around the Hebbal flyover and Hebbal Lake. Since the airport opened in 2008 it has become a corporate and residential area with business parks, premium apartment projects and hotels, and Manyata Tech Park lies just to the east. Residents are largely professionals and families who want quick access to both the city and the airport.',
    businesses: [
      'apartment projects and developers',
      'business hotels',
      'corporate offices',
      'hospitals and clinics',
      'car showrooms on Bellary Road',
      'restaurants',
    ],
    landmarks: ['Hebbal flyover', 'Hebbal Lake', 'Esteem Mall', 'Kirloskar Business Park'],
    nearby: ['rt-nagar', 'ganganagar', 'sanjay-nagar', 'kodigehalli', 'nagawara', 'amruthahalli'],
    competition: 'medium',
    searchHabits:
      'A lot of search interest is about property – home buyers from across the city research projects around Hebbal online, often for months before a site visit. Residents and office workers search on their phones for restaurants, hospitals and services along Bellary Road and the Outer Ring Road.',
    realEstate:
      'A premium apartment market shaped by the airport road, with large gated projects and luxury towers around Hebbal Lake and Bellary Road. Buyers are senior professionals, business owners and NRIs, many of whom see north Bengaluru as a long-term investment.',
    industries: [
      'real-estate',
      'hospitality-and-hotels',
      'healthcare-and-hospitals',
      'automotive',
      'interior-design',
    ],
  },

  'hegde-nagar': {
    coords: [13.071, 77.632],
    character:
      'A residential area off Thanisandra Main Road, north of Manyata Tech Park, that has changed from village lanes and farmland into a mix of independent houses, rental buildings and apartment complexes. It shares its PIN code with Thanisandra and is often described as part of it, but its streets are quieter and less dominated by large gated projects. Residents include long-settled local families and tech professionals who work at Manyata and on the Outer Ring Road.',
    businesses: [
      'apartment and builder-floor projects',
      'schools and play schools',
      'grocery and meat shops',
      'clinics and pharmacies',
      'small restaurants and bakeries',
      'interior and modular-kitchen workshops',
    ],
    landmarks: ['Thanisandra Main Road', 'Manyata Tech Park (to the south)'],
    nearby: ['thanisandra', 'kothanur', 'jakkur', 'amruthahalli', 'hennur', 'kogilu'],
    competition: 'low',
    searchHabits:
      'Newer residents search on their phones for schools, clinics, groceries and home services, often adding “Thanisandra” or “near Manyata” because Hegde Nagar itself is less widely known. Older residents depend on local shops and word of mouth.',
    realEstate:
      'A mixed market of independent houses, builder floors and mid-sized apartment projects, with some plots still available. Buyers and tenants are largely people working at Manyata and on the Outer Ring Road.',
    industries: [
      'real-estate',
      'education-and-schools',
      'interior-design',
      'clinics-and-doctors',
      'retail',
    ],
  },

  hennur: {
    coords: [13.04, 77.643],
    character:
      'Hennur Road runs north-east from the Outer Ring Road towards Kothanur and Bagalur, and the area along it has changed from villages and farmland into apartments and gated communities since the airport opened. It is popular with families who want quick access to Manyata, the Outer Ring Road and the airport. Restaurants, cafés and microbreweries have opened along the main road in recent years.',
    businesses: [
      'apartment and villa projects',
      'international and CBSE schools',
      'restaurants, cafés and microbreweries',
      'gyms and fitness studios',
      'interior design studios',
      'clinics and pharmacies',
    ],
    landmarks: ['Hennur Main Road', 'Hennur Cross', 'Hennur–Bagalur Road'],
    nearby: ['hennur-bande', 'hbr-layout', 'kothanur', 'kalyan-nagar', 'thanisandra', 'horamavu'],
    competition: 'medium',
    searchHabits:
      'Residents research schools, restaurants and home services online and lean on apartment WhatsApp groups and Instagram for new places to try. Diners from other parts of north and east Bengaluru look up Hennur Road restaurants and breweries by name, especially at weekends.',
    realEstate:
      'A growing apartment and villa market, with large gated projects along Hennur Road and further out towards Kothanur and Bagalur. Buyers are families and professionals working in north and east Bengaluru, and access to the airport road attracts investors.',
    industries: [
      'real-estate',
      'construction-and-contractors',
      'education-and-schools',
      'restaurants-and-food',
      'interior-design',
    ],
  },

  'hennur-bande': {
    coords: [13.029, 77.637],
    character:
      'An older, tightly built pocket beside HBR Layout, just off Hennur Main Road – “bande” is Kannada for rock. Its narrow lanes are packed with small houses, rental rooms and family-run shops, a clear contrast with the gated apartment projects further up Hennur Road. Many residents are working families who have lived here for years, alongside tenants employed in nearby offices, shops and construction sites.',
    businesses: [
      'small grocery and provision stores',
      'meat and fish shops',
      'mobile recharge and repair shops',
      'tailors',
      'small eateries and tea stalls',
      'clinics and pharmacies',
    ],
    landmarks: ['Hennur Main Road', 'HBR Layout'],
    nearby: ['hennur', 'hbr-layout', 'kalyan-nagar', 'kammanahalli', 'lingarajapuram', 'nagawara'],
    competition: 'low',
    searchHabits:
      'Much of the trade is walk-in and paid by cash or UPI, with customers finding shops by word of mouth rather than search. When people do search, it is on their phones, in several languages, for basics such as a doctor, a recharge shop or a tailor – so a simple Google Maps listing with photos and a phone number is enough to stand out.',
    realEstate:
      'A crowded market of small independent houses and rental rooms on narrow plots, with very little new construction. Property mostly changes hands between local families and small landlords.',
    industries: ['retail', 'clinics-and-doctors', 'restaurants-and-food', 'home-services'],
  },

  hesaraghatta: {
    coords: [13.139, 77.486],
    character:
      'A rural edge of north-west Bengaluru, centred on Hesaraghatta Lake, a reservoir built on the Arkavathy river that once supplied drinking water to the city. The area is still largely farmland and open grassland, with government livestock and poultry farms, plant nurseries and dairies, and it is home to the Indian Institute of Horticultural Research and the Nrityagram dance village. City residents come out at weekends for the lake and the open landscape, while plotted layouts are slowly spreading along Hesaraghatta Road.',
    businesses: [
      'plant nurseries and horticulture farms',
      'dairy and poultry farms',
      'farm stays and weekend homes',
      'plotted layouts and farm plots',
      'roadside eateries on Hesaraghatta Road',
      'schools',
    ],
    landmarks: [
      'Hesaraghatta Lake',
      'ICAR–Indian Institute of Horticultural Research',
      'Nrityagram',
    ],
    nearby: [
      'chikkabanavara',
      'jalahalli-west',
      'vidyaranyapura',
      'doddaballapur-road',
      'rajanukunte',
    ],
    competition: 'low',
    searchHabits:
      'Searches about Hesaraghatta mostly come from city residents planning a day trip, a farm stay or a land purchase, who look for directions, photos and reviews. Local farming families rely on Kannada and personal contacts, and search mainly for agricultural supplies and services.',
    realEstate:
      'A low-density market of agricultural land, farm plots and a few plotted layouts. Buyers are mostly city investors and people looking for farmland or a weekend home close to Bengaluru.',
    industries: [
      'agriculture-and-agritech',
      'travel-and-tourism',
      'real-estate',
      'hospitality-and-hotels',
    ],
  },

  horamavu: {
    coords: [13.027, 77.66],
    character:
      'A former village on the Outer Ring Road east of Kalyan Nagar that has filled with mid-sized apartment complexes and independent houses since the early 2000s. It is popular with salaried families who commute to Manyata, the ring road offices and Whitefield via KR Puram, and its main roads are lined with supermarkets, schools, clinics and eateries. The old village lanes still run between the newer blocks.',
    businesses: [
      'apartment complexes and builders',
      'schools and play schools',
      'supermarkets and daily-needs stores',
      'clinics and diagnostic centres',
      'tuition and activity classes',
      'restaurants and takeaway outlets',
      'interior and furniture shops',
    ],
    landmarks: ['Horamavu Main Road', 'Outer Ring Road'],
    nearby: ['kalyan-nagar', 'hrbr-layout', 'banaswadi', 'ramamurthy-nagar', 'kr-puram', 'hennur'],
    competition: 'medium',
    searchHabits:
      'Families in the apartment complexes ask in their society WhatsApp groups first and check Google reviews second, especially for tutors, paediatricians and home repairs. Many local businesses take orders over WhatsApp and deliver within a few streets.',
    realEstate:
      'A large mid-range apartment market with many resale flats from the 2000s and 2010s, alongside independent houses in the old village core and newer projects on the edges. Buyers are mostly salaried families buying a first home and investors renting to tech workers.',
    industries: [
      'real-estate',
      'education-and-schools',
      'clinics-and-doctors',
      'interior-design',
      'home-services',
    ],
  },

  jakkur: {
    coords: [13.078, 77.609],
    character:
      'A former village between Bellary Road and Thanisandra, known for Jakkur Aerodrome, home to the state’s Government Flying Training School, and for Jakkur Lake, which is fed with treated water through a constructed wetland. The JNCASR research campus sits beside it, and the land around has filled with apartment projects, villa communities and older village houses. Residents are a mix of scientists, airport and Manyata workers and long-settled local families.',
    businesses: [
      'apartment and villa projects',
      'schools and play schools',
      'restaurants and cafés',
      'clinics',
      'gyms and sports facilities',
      'flying and aviation training',
    ],
    landmarks: [
      'Jakkur Aerodrome',
      'Jakkur Lake',
      'Jawaharlal Nehru Centre for Advanced Scientific Research (JNCASR)',
    ],
    nearby: [
      'amruthahalli',
      'byatarayanapura',
      'thanisandra',
      'hegde-nagar',
      'yelahanka',
      'kogilu',
    ],
    competition: 'medium',
    searchHabits:
      'Home buyers from across Bengaluru research Jakkur projects online, comparing the drive to the airport and to Manyata. Residents of the new apartments and villas search on their phones for schools, cafés, clinics and services and use Google reviews to choose between them.',
    realEstate:
      'A growing market of mid-range and premium apartments and villa communities, with independent houses in the old village. Buyers are professionals and families who want to live between the airport road and Manyata, plus investors.',
    industries: [
      'real-estate',
      'education-and-schools',
      'aviation-and-aerospace',
      'restaurants-and-food',
      'interior-design',
    ],
  },

  jalahalli: {
    coords: [13.05, 77.542],
    character:
      'An older north-west Bengaluru suburb that grew up around public-sector industry – Bharat Electronics’ Jalahalli campus and the HMT factories and township – in the decades after independence. Its layouts are filled with independent houses built by PSU employees, many of whom retired here, and the old Jalahalli village with its markets sits among them. Newer apartment projects have come up on its edges as families look for quieter areas close to Yeshwanthpur and Peenya.',
    businesses: [
      'clinics and nursing homes',
      'schools and coaching centres',
      'darshinis and sweet shops',
      'provision and vegetable stores',
      'bank branches',
      'electronics and electrical repair shops',
    ],
    landmarks: ['Bharat Electronics (BEL) Jalahalli campus', 'HMT township', 'Gangamma Circle'],
    nearby: [
      'gangamma-circle',
      'jalahalli-west',
      'mathikere',
      'vidyaranyapura',
      'peenya',
      'yeshwanthpur',
    ],
    competition: 'medium',
    searchHabits:
      'An older population that often searches in Kannada, phones before visiting and leans on long-standing recommendations for doctors and tutors. Their children and newer apartment residents search in English on Google Maps and expect to book or message online.',
    realEstate:
      'BEL, HMT and other institutions hold large campuses here, so private housing is concentrated in older layouts of independent houses and a handful of newer apartment projects. Homes that come up for sale are usually bought by families already living in north-west Bengaluru.',
    industries: [
      'clinics-and-doctors',
      'education-and-schools',
      'coaching-and-test-prep',
      'real-estate',
      'retail',
    ],
  },

  'jalahalli-west': {
    coords: [13.05, 77.528],
    character:
      'The western side of Jalahalli, close to Jalahalli Cross on Tumkur Road, shaped by the Air Force Station and the Indian Air Force training establishments based here. It is a quieter residential area of defence housing, Air Force families, retired servicemen and middle-class layouts, with a growing number of apartment projects for people working in Peenya and along Tumkur Road.',
    businesses: [
      'apartment projects and small builders',
      'schools and tuition centres',
      'clinics and pharmacies',
      'supermarkets and provision stores',
      'packers and movers',
      'tiffin centres and bakeries',
    ],
    landmarks: [
      'Air Force Station Jalahalli West',
      'Kendriya Vidyalaya No. 1, Jalahalli West',
      'Jalahalli Metro station',
    ],
    nearby: [
      'jalahalli',
      'gangamma-circle',
      'dasarahalli',
      'peenya',
      'chikkabanavara',
      'vidyaranyapura',
    ],
    competition: 'low',
    searchHabits:
      'Defence families move in and out on postings, so newcomers rely on Google Maps and reviews to find schools, doctors, movers and home services quickly. Settled residents and retired servicemen prefer recommendations from neighbours and community groups.',
    realEstate:
      'A mix of independent houses, defence-linked housing and newer mid-range apartments, with more land available towards the northern edges. Buyers include serving and retired defence personnel and families working in Peenya and along Tumkur Road.',
    industries: [
      'real-estate',
      'education-and-schools',
      'clinics-and-doctors',
      'home-services',
      'logistics-and-transport',
    ],
  },

  'kalyan-nagar': {
    coords: [13.022, 77.64],
    character:
      'A residential area on the Outer Ring Road in north-east Bengaluru, next to HRBR Layout, HBR Layout and Kammanahalli, made up mostly of independent houses and small apartment buildings. Over the last decade its main roads have filled with restaurants, cafés, bakeries and boutiques that draw diners from across north and east Bengaluru. Residents are a mix of long-settled families and professionals working at Manyata and along the Outer Ring Road.',
    businesses: [
      'restaurants and cafés',
      'bakeries and dessert shops',
      'salons and beauty studios',
      'gyms and fitness studios',
      'boutiques and clothing stores',
      'clinics',
      'coaching centres',
    ],
    landmarks: ['Outer Ring Road', 'HRBR Layout', 'Kammanahalli Main Road'],
    nearby: ['hrbr-layout', 'hbr-layout', 'kammanahalli', 'banaswadi', 'horamavu', 'hennur'],
    competition: 'medium',
    searchHabits:
      'Customers discover restaurants, salons and boutiques on Instagram and Google Maps, and new openings are quickly judged by their reviews. Families also search for tuition, clinics and home services, usually naming Kalyan Nagar, HRBR or Kammanahalli.',
    realEstate:
      'A largely built-up market of independent houses on layout plots and small apartment buildings, with older homes being converted into rental floors and shops. Buyers are families who want a settled neighbourhood close to the Outer Ring Road.',
    industries: [
      'restaurants-and-food',
      'beauty-and-cosmetics',
      'fitness-and-sports',
      'retail',
      'fashion-and-apparel',
    ],
  },

  kammanahalli: {
    coords: [13.015, 77.637],
    character:
      'An older residential area of north-east Bengaluru built around Kammanahalli Main Road, next to Kalyan Nagar and HRBR Layout. Since the early 2000s, private colleges here have drawn many international students, largely from Africa and the Middle East, so long-settled Indian families now live alongside an unusually mixed student population. The main road reflects that, with eateries, grocery stores and salons serving both.',
    businesses: [
      'restaurants serving Indian, African and Middle Eastern food',
      'student rooms and paying-guest housing',
      'grocery and cosmetics stores',
      'salons and barbershops',
      'clothing and footwear stores',
      'clinics and pharmacies',
      'bakeries and cafés',
    ],
    landmarks: ['Kammanahalli Main Road', 'Kalyan Nagar'],
    nearby: [
      'kalyan-nagar',
      'hrbr-layout',
      'banaswadi',
      'lingarajapuram',
      'hbr-layout',
      'cooke-town',
    ],
    competition: 'medium',
    searchHabits:
      'International and out-of-state students search in English on Google Maps, Instagram and delivery apps for food, groceries, salons and rooms, often looking for familiar cuisines and products from home. Long-settled families shop at stores they have used for years and pass recommendations through community and WhatsApp groups.',
    realEstate:
      'Most newcomers rent rather than buy, and many owners have turned their houses into rental buildings and paying-guest homes for students. Homes that do sell are usually older independent houses bought by local families or small builders.',
    industries: [
      'restaurants-and-food',
      'retail',
      'clinics-and-doctors',
      'beauty-and-cosmetics',
      'real-estate',
    ],
  },

  'kempegowda-airport-area': {
    coords: [13.199, 77.706],
    character:
      'The land around Kempegowda International Airport at the northern end of the city, which has turned from farmland into an airport district of terminals, cargo and logistics facilities, hotels and business parks since the airport opened in 2008. A second terminal was added in the early 2020s, and the airport operator continues to develop offices, hotels and retail on its land. Most people here are passengers, airline and airport staff, cargo workers and hotel guests rather than long-term residents.',
    businesses: [
      'airport hotels and service apartments',
      'cargo, freight-forwarding and logistics firms',
      'cab, car-rental and travel operators',
      'airline and ground-handling services',
      'restaurants and cafés serving travellers',
      'warehousing and cold-chain storage',
    ],
    landmarks: ['Kempegowda International Airport (Terminals 1 and 2)', 'Airport cargo terminals'],
    nearby: ['devanahalli', 'sadahalli', 'bagalur', 'yelahanka'],
    competition: 'medium',
    searchHabits:
      'Searches come mostly from travellers on their phones – hotels near the airport, cabs, early-morning food and transit stays – often in a hurry and late at night. Logistics and cargo businesses are found through B2B searches, directories and direct relationships with airlines and exporters.',
    realEstate:
      'Commercial demand leads here – land near the airport for warehousing, hotels and offices attracts companies and institutional investors. Homes are sold in the surrounding villages and layouts rather than at the airport itself.',
    industries: [
      'hospitality-and-hotels',
      'logistics-and-transport',
      'aviation-and-aerospace',
      'travel-and-tourism',
      'real-estate',
    ],
  },

  kodigehalli: {
    coords: [13.056, 77.581],
    character:
      'An old village west of Bellary Road, just north of Hebbal, that has grown into a dense residential area of independent houses, rental buildings and small apartment blocks. Kodigehalli Gate, where its main road meets the highway, is a busy junction lined with shops, eateries and service businesses, and the road continues west towards Vidyaranyapura. Many residents are tenants who work in Hebbal, Manyata and along Bellary Road, alongside long-settled local families.',
    businesses: [
      'paying-guest and rental housing',
      'darshinis, small restaurants and tea stalls',
      'grocery and meat shops',
      'two-wheeler and car garages',
      'clinics and pharmacies',
      'hardware and electrical stores',
    ],
    landmarks: ['Kodigehalli Gate on Bellary Road', 'Sahakara Nagar (to the north)'],
    nearby: [
      'sahakara-nagar',
      'byatarayanapura',
      'hebbal',
      'vidyaranyapura',
      'amruthahalli',
      'sanjay-nagar',
    ],
    competition: 'medium',
    searchHabits:
      'Customers include commuters passing Kodigehalli Gate as well as residents, so businesses near the junction depend on being visible on Google Maps with clear directions and opening hours. Residents of the inner lanes mostly use shops within walking distance and find services through neighbours.',
    realEstate:
      'Plots in the old village are small and closely built, so most property is older houses and rental buildings rather than apartments. Frontage near Kodigehalli Gate is used for shops and showrooms, and buyers are mainly local families and small landlords.',
    industries: [
      'restaurants-and-food',
      'automotive',
      'retail',
      'clinics-and-doctors',
      'real-estate',
    ],
  },

  kogilu: {
    coords: [13.104, 77.617],
    character:
      'A former village east of Yelahanka, reached from Kogilu Cross on Bellary Road, that has become a cluster of large apartment projects and layouts between Yelahanka and Thanisandra. Being close to the airport road, Yelahanka and Manyata has drawn big gated developments, and many residents are young families and professionals who moved in recently. The village centre and older houses remain, with roads and shops still catching up with the new towers.',
    businesses: [
      'large apartment projects',
      'schools and play schools',
      'supermarkets and daily-needs stores',
      'clinics and pharmacies',
      'cafés and takeaway outlets',
      'interior and furnishing businesses',
    ],
    landmarks: ['Kogilu Cross on Bellary Road (NH 44)', 'Yelahanka old town (to the west)'],
    nearby: ['yelahanka', 'yelahanka-new-town', 'jakkur', 'hegde-nagar', 'thanisandra', 'bagalur'],
    competition: 'low',
    searchHabits:
      'Because so many households have only just moved in, there is heavy demand for setting-up services – interiors, furniture, modular kitchens, internet connections and movers – which people search for by complex name or “near Yelahanka”.',
    realEstate:
      'An apartment-led market of large gated projects, with plotted layouts and village houses around them. Buyers are first-time and upgrading home owners working in north Bengaluru and at the airport, and investors.',
    industries: [
      'real-estate',
      'interior-design',
      'furniture-and-home-decor',
      'education-and-schools',
      'home-services',
    ],
  },

  kothanur: {
    coords: [13.064, 77.646],
    character:
      'A former village on the Hennur–Bagalur Road, north of Hennur, that is now a mix of apartment complexes, villa projects and older layouts. It is known for its educational institutions, including Kristu Jayanti College, which bring students and faculty into the area. Residents include families who have lived here for generations, professionals working at Manyata and on the Outer Ring Road, and students.',
    businesses: [
      'colleges and schools',
      'student hostels and paying-guest rooms',
      'apartment and villa projects',
      'restaurants and cafés',
      'clinics and pharmacies',
      'gyms and sports facilities',
    ],
    landmarks: ['Kristu Jayanti College', 'Hennur–Bagalur Road'],
    nearby: ['hennur', 'hegde-nagar', 'thanisandra', 'horamavu', 'bagalur'],
    competition: 'medium',
    searchHabits:
      'Students search for hostels, food, courses and part-time work, and parents research schools and colleges in detail before admissions season. Apartment residents use Google Maps and community groups to find services along the Hennur–Bagalur Road.',
    realEstate:
      'A growing market of mid-range apartments, villa communities and plotted developments along the Hennur–Bagalur Road, with student rentals near the colleges. Buyers are families and professionals from north and east Bengaluru, and investors letting rooms to students.',
    industries: [
      'higher-education',
      'education-and-schools',
      'real-estate',
      'restaurants-and-food',
      'coaching-and-test-prep',
    ],
  },

  lingarajapuram: {
    coords: [13.01, 77.628],
    character:
      'A long-settled residential area between Kammanahalli and Hennur Main Road, known to commuters for the Lingarajapuram flyover, one of the main links between central Bengaluru and the north-eastern suburbs. Away from the flyover traffic, its streets are a mix of independent houses and small apartment buildings with schools and neighbourhood shops. Many families have lived here for decades, and it feels quieter than the shopping streets of Kammanahalli and Frazer Town.',
    businesses: [
      'provision stores and bakeries',
      'schools and tuition centres',
      'clinics and pharmacies',
      'tailoring and alteration shops',
      'auto-repair and spare-parts shops',
      'small restaurants and meat shops',
    ],
    landmarks: ['Lingarajapuram flyover', 'St Charles High School', 'Hennur Main Road'],
    nearby: [
      'kammanahalli',
      'arabic-college',
      'hbr-layout',
      'cooke-town',
      'frazer-town',
      'banaswadi',
    ],
    competition: 'medium',
    searchHabits:
      'Many residents are older and prefer to phone a business they have been recommended, so an up-to-date listing with a working number and clear directions from the flyover or Hennur Main Road matters more than ads.',
    realEstate:
      'A resale market of independent houses and small apartment buildings, with builders slowly redeveloping older homes into apartment blocks. Buyers are mostly families who want to stay within easy reach of central and north-east Bengaluru.',
    industries: ['clinics-and-doctors', 'education-and-schools', 'retail', 'automotive'],
  },

  mathikere: {
    coords: [13.034, 77.559],
    character:
      'A student-heavy neighbourhood in north-west Bengaluru, between Yeshwanthpur, the IISc campus and New BEL Road, and home to the Ramaiah group’s engineering and medical colleges in MSR Nagar. Its main road is lined with paying-guest houses, budget eateries, photocopy and stationery shops, coaching centres and mobile stores, while the streets behind are older independent houses, many let to students and staff.',
    businesses: [
      'paying-guest houses and student hostels',
      'budget eateries, juice and chaat shops',
      'photocopy, printing and stationery shops',
      'coaching centres for GATE and entrance exams',
      'mobile and laptop repair shops',
      'clinics and pharmacies',
    ],
    landmarks: [
      'M S Ramaiah Institute of Technology',
      'Indian Institute of Science (IISc)',
      'Mathikere Main Road',
    ],
    nearby: [
      'bel-road',
      'yeshwanthpur',
      'jalahalli',
      'malleshwaram',
      'sadashivanagar',
      'dollars-colony',
    ],
    competition: 'medium',
    searchHabits:
      'Students search on their phones in English for PG rooms, food, printing, coaching and repairs, and choose mostly on price, distance and ratings. Instagram and student WhatsApp groups spread word of new eateries and offers quickly.',
    realEstate:
      'Rent from students and staff drives the market: older houses have been converted into PGs and student flats, and ground floors on the main road into shops. There is little vacant land and few new projects.',
    industries: [
      'higher-education',
      'coaching-and-test-prep',
      'restaurants-and-food',
      'healthcare-and-hospitals',
      'real-estate',
    ],
  },

  nagawara: {
    coords: [13.042, 77.619],
    character:
      'An Outer Ring Road junction area in north-east Bengaluru that takes in the old Nagawara village, Nagawara Lake with Lumbini Gardens on its shore, and the edge of Manyata Tech Park. The village side is densely built with family-run shops and eateries, while the ring road side is dominated by office workers and the food outlets, co-living spaces and paying-guest houses that serve them.',
    businesses: [
      'paying-guest and co-living spaces',
      'quick-service restaurants and food courts',
      'cafés and bakeries',
      'corporate cab and travel operators',
      'gyms',
      'mobile and laptop stores',
    ],
    landmarks: ['Nagawara Lake', 'Lumbini Gardens', 'Manyata Tech Park', 'Outer Ring Road'],
    nearby: ['hbr-layout', 'arabic-college', 'hebbal', 'thanisandra', 'rt-nagar', 'amruthahalli'],
    competition: 'high',
    searchHabits:
      'Manyata employees search on their phones around lunch and after work for food, gyms, PG rooms and co-living, usually typing “near Manyata Tech Park” rather than Nagawara. Families visiting Lumbini Gardens and the lake at weekends look up timings and reviews before they go.',
    realEstate:
      'A mixed market of crowded village housing, rental buildings and paying-guest blocks, with office and commercial development along the Outer Ring Road. Most demand is rental, from people working at Manyata.',
    industries: [
      'restaurants-and-food',
      'coworking-and-office-space',
      'it-services-and-software',
      'real-estate',
      'fitness-and-sports',
    ],
  },

  peenya: {
    coords: [13.03, 77.52],
    character:
      'Peenya Industrial Area, on Tumkur Road in north-west Bengaluru, is a large, long-established industrial estate of small and medium factories laid out in stages and phases. Its units make machine parts, precision components, fabricated structures, garments, electrical and electronic goods, plastics and packaging, much of it supplied to larger manufacturers in Bengaluru and beyond. Residential pockets around the estate house many of its workers and factory owners.',
    businesses: [
      'CNC machining and precision-engineering shops',
      'sheet-metal and fabrication units',
      'garment export units',
      'electrical and electronic component makers',
      'plastic moulding and packaging units',
      'industrial tool and raw-material suppliers',
      'transporters and goods-carrier operators',
    ],
    landmarks: ['Peenya Industrial Area', 'Peenya Industry Metro station', 'Tumkur Road (NH 48)'],
    nearby: [
      'dasarahalli',
      'jalahalli',
      'jalahalli-west',
      'yeshwanthpur',
      'laggere',
      'nandini-layout',
    ],
    competition: 'medium',
    searchHabits:
      'Searches here are B2B: purchase managers and engineers search for a process or product plus “Peenya” – CNC machining, laser cutting, powder coating, corrugated boxes – and shortlist suppliers through Google, IndiaMART and TradeIndia before calling or sending drawings on WhatsApp. Factory owners also search for skilled workers, raw materials and machine servicing.',
    realEstate:
      'Industrial plots, sheds and factory buildings dominate, leased or bought by small and medium manufacturers, and suppliers and transporters rent warehouse space nearby. Housing around the estate is mostly independent houses and rental buildings for workers.',
    industries: [
      'manufacturing',
      'industrial-and-b2b-supplies',
      'textiles-and-garments',
      'printing-and-packaging',
      'logistics-and-transport',
    ],
  },

  'rt-nagar': {
    coords: [13.022, 77.596],
    character:
      'Rabindranath Tagore Nagar is an older, densely built residential and commercial area in north Bengaluru, between Hebbal and Mekhri Circle. Its busy main road is lined with shops, restaurants, bakeries and clinics serving a mixed, multilingual population, much of which has lived here for decades. The streets around it are mostly independent houses and small apartment buildings, and HMT Layout forms part of the area.',
    businesses: [
      'neighbourhood retail and clothing shops',
      'restaurants and bakeries',
      'clinics and pharmacies',
      'mobile and electronics stores',
      'tuition centres',
      'meat and grocery shops',
    ],
    landmarks: ['RT Nagar Main Road', 'Mekhri Circle', 'HMT Layout'],
    nearby: ['ganganagar', 'hebbal', 'sadashivanagar', 'jayamahal', 'arabic-college', 'nagawara'],
    competition: 'medium',
    searchHabits:
      'Customers shop mostly within the neighbourhood and find businesses through word of mouth, WhatsApp and Google Maps. The population is multilingual, so simple listings with clear photos, opening hours and phone numbers work better than text-heavy pages.',
    realEstate:
      'A built-up market of independent houses and small apartment buildings, with little open land. Buyers are mostly families already living in north Bengaluru, and some older homes are being rebuilt as rental floors.',
    industries: ['retail', 'restaurants-and-food', 'clinics-and-doctors', 'coaching-and-test-prep'],
  },

  rajanukunte: {
    coords: [13.165, 77.545],
    character:
      'A small town on Doddaballapur Road, a short drive north-west of Yelahanka, that has become a college area – Presidency University and Sai Vidya Institute of Technology are both here. The land around is still a mix of farms and new plotted layouts. The local population is mostly Kannada-speaking farming families, joined by students, faculty and people buying plots and villas away from the city.',
    businesses: [
      'colleges and their hostels',
      'paying-guest rooms and student messes',
      'plotted layouts and villa projects',
      'plant nurseries and farms',
      'grocery and hardware stores',
      'schools',
    ],
    landmarks: [
      'Presidency University (Itgalpura)',
      'Sai Vidya Institute of Technology',
      'Doddaballapur Road',
    ],
    nearby: ['doddaballapur-road', 'yelahanka-new-town', 'yelahanka', 'hesaraghatta'],
    competition: 'low',
    searchHabits:
      'Students and parents from across Karnataka and other states search in English for the colleges, admissions, hostels and transport here. Village residents rely on local shops and contacts, and search in Kannada when they do.',
    realEstate:
      'Land is still mostly agricultural, and what is sold is largely plotted layouts and farm plots marketed to Bengaluru buyers. Near the colleges, local owners build rooms to rent to students.',
    industries: [
      'higher-education',
      'real-estate',
      'agriculture-and-agritech',
      'education-and-schools',
    ],
  },

  sadahalli: {
    coords: [13.175, 77.655],
    character:
      'A village on Bellary Road (NH 44) just south of the airport, known to most Bengaluru drivers for the Sadahalli toll plaza and for the Sadahalli junction, long the only traffic signal between Hebbal and the airport. Around the village core, farmland is giving way to plotted layouts, villa projects, warehouses and roadside businesses serving highway traffic. Many residents are local farming families, joined by staff who work at the airport and its hotels and logistics parks.',
    businesses: [
      'plotted layouts and villa projects',
      'highway restaurants and dhabas',
      'warehousing and logistics yards',
      'cab and transport operators',
      'fuel stations and vehicle services',
      'grocery shops',
    ],
    landmarks: [
      'Sadahalli toll plaza',
      'Sadahalli junction on NH 44',
      'Kempegowda International Airport (to the north-east)',
    ],
    nearby: ['kempegowda-airport-area', 'devanahalli', 'bagalur', 'yelahanka'],
    competition: 'low',
    searchHabits:
      'Drivers and airport-bound travellers search on the move for food, fuel and rest stops along NH 44, so a correct Google Maps pin on the right side of the highway matters. Land buyers search for plots and layouts “near the airport”, usually from elsewhere in Bengaluru.',
    realEstate:
      'Mostly agricultural land, plotted layouts and villa projects, plus warehousing and commercial plots on the highway, all sold on their closeness to the airport. Buyers are investors, logistics companies and some families planning to build later.',
    industries: [
      'real-estate',
      'logistics-and-transport',
      'restaurants-and-food',
      'hospitality-and-hotels',
    ],
  },

  'sahakara-nagar': {
    coords: [13.062, 77.586],
    character:
      'A planned residential layout west of Bellary Road, north of Hebbal, divided into lettered blocks and known for its wide roads, parks and well-kept independent houses – “sahakara” means cooperative in Kannada. Many families have lived here since its early years, joined by newer residents who work at Manyata, Hebbal and the airport. Its shopping streets have cafés, restaurants, supermarkets and clinics that serve much of the surrounding area.',
    businesses: [
      'clinics, dental practices and diagnostic labs',
      'cafés, restaurants and bakeries',
      'supermarkets and organic stores',
      'schools and activity classes',
      'salons and spas',
      'gyms and yoga studios',
      'interior and home-improvement studios',
    ],
    landmarks: ['GKVK campus (University of Agricultural Sciences)', 'Bellary Road (NH 44)'],
    nearby: [
      'kodigehalli',
      'byatarayanapura',
      'amruthahalli',
      'vidyaranyapura',
      'jakkur',
      'hebbal',
    ],
    competition: 'medium',
    searchHabits:
      'A well-off, settled population that researches doctors, schools and restaurants on Google Maps and reads reviews before choosing. Many families also follow local Instagram pages and residents’ association groups for news of new openings.',
    realEstate:
      'A mature market of independent houses on layout plots, with some older homes rebuilt as builder floors or boutique apartment buildings. Buyers are well-off families and professionals who want a settled, green neighbourhood with easy access to the airport road.',
    industries: [
      'clinics-and-doctors',
      'restaurants-and-food',
      'education-and-schools',
      'beauty-and-cosmetics',
      'real-estate',
    ],
  },

  'sanjay-nagar': {
    coords: [13.037, 77.582],
    character:
      'A settled middle-class residential area between Hebbal and New BEL Road, built around Sanjay Nagar Main Road and its long row of shops, eateries and clinics. Its streets are mostly independent houses and modest apartment buildings, home to government and PSU employees, staff of nearby research institutions and professionals who work in Hebbal and the city centre. It sits next to Dollars Colony but has a more everyday, neighbourhood feel.',
    businesses: [
      'provision stores and supermarkets',
      'clinics and diagnostic centres',
      'tuition centres',
      'darshinis and sweet shops',
      'salons and beauty parlours',
      'hardware and electrical shops',
    ],
    landmarks: ['Sanjay Nagar Main Road', 'Hebbal flyover (to the north-east)'],
    nearby: ['dollars-colony', 'bel-road', 'ganganagar', 'hebbal', 'kodigehalli', 'sadashivanagar'],
    competition: 'medium',
    searchHabits:
      'Residents search for practical needs close to home – a family doctor, a tutor, a plumber – and choose the businesses on Sanjay Nagar Main Road that neighbours recommend. Searches are in English and Kannada, and an up-to-date Google Business Profile helps a shop show up for “near me” queries.',
    realEstate:
      'An established market of independent houses on layout plots and older apartment buildings, with gradual redevelopment into builder floors. Buyers are mostly families from neighbouring areas and staff of the research institutions and PSUs around it.',
    industries: ['clinics-and-doctors', 'coaching-and-test-prep', 'retail', 'home-services'],
  },

  thanisandra: {
    coords: [13.058, 77.634],
    character:
      'A former village near Manyata Tech Park that became a dense belt of apartment complexes along Thanisandra Main Road in the 2010s. Many residents work at Manyata and the offices on the Outer Ring Road, and the area has a young-family profile, with plenty of schools, play schools and supermarkets. Large gated communities sit next to older village lanes, and roads are still catching up with the growth.',
    businesses: [
      'apartment complexes',
      'CBSE and international schools',
      'play schools and daycare centres',
      'gyms and fitness studios',
      'supermarkets and daily-needs stores',
      'restaurants and cloud kitchens',
      'clinics and paediatricians',
    ],
    landmarks: ['Manyata Tech Park', 'Thanisandra Main Road', 'Bhartiya City'],
    nearby: ['hegde-nagar', 'nagawara', 'amruthahalli', 'jakkur', 'hennur', 'kothanur'],
    competition: 'medium',
    searchHabits:
      'Residents are mostly tech professionals and young families who search on their phones and trust recommendations from apartment WhatsApp groups. Searches often name the complex or say “near Manyata”, and Google reviews carry a lot of weight.',
    realEstate:
      'A large apartment market of mid-range and premium gated projects, driven by demand from Manyata employees. Buyers are mainly salaried professionals buying their first or second home, plus investors renting to tech workers.',
    industries: [
      'real-estate',
      'interior-design',
      'education-and-schools',
      'fitness-and-sports',
      'clinics-and-doctors',
    ],
  },

  vidyaranyapura: {
    coords: [13.078, 77.556],
    character:
      'A large residential suburb in north-west Bengaluru, north of Jalahalli, with Doddabommasandra Lake on its edge. Much of it was settled by employees of HMT, BEL and other public-sector firms who built family homes here, and it keeps a calm, family feel with independent houses, parks and neighbourhood shops. Newer apartment buildings and layouts have filled in the gaps in recent years.',
    businesses: [
      'clinics and nursing homes',
      'schools and pre-university colleges',
      'tuition, music and dance classes',
      'supermarkets and provision stores',
      'bakeries and darshinis',
      'gyms and yoga centres',
    ],
    landmarks: ['Doddabommasandra Lake', 'Sambhram Institute of Technology (MS Palya)'],
    nearby: [
      'jalahalli',
      'gangamma-circle',
      'kodigehalli',
      'sahakara-nagar',
      'doddaballapur-road',
      'jalahalli-west',
    ],
    competition: 'medium',
    searchHabits:
      'Families search for schools, tuition, doctors and activity classes for children, in Kannada as well as English, and give heavy weight to recommendations from neighbours. Many local businesses still get most enquiries by phone, so a listing that names the block or the nearest landmark helps.',
    realEstate:
      'A plot-and-house market where most homes are independent houses in layouts, now joined by apartment buildings on the outskirts. Buyers are typically families from north and north-west Bengaluru looking for a quieter residential area.',
    industries: [
      'education-and-schools',
      'clinics-and-doctors',
      'coaching-and-test-prep',
      'real-estate',
      'fitness-and-sports',
    ],
  },

  yelahanka: {
    coords: [13.1, 77.596],
    character:
      'An old town in north Bengaluru with roots older than the city itself – the Yelahanka chieftains included Kempegowda, who founded Bengaluru. Today it combines the old town, the planned Yelahanka New Town, the Air Force Station that hosts Aero India, and a widening ring of apartments and colleges along the airport road. It has become a residential choice for families and professionals working in north Bengaluru and around the airport.',
    businesses: [
      'apartment and villa projects',
      'engineering and management colleges',
      'schools',
      'hospitals and clinics',
      'restaurants and banquet halls',
      'supermarkets and retail stores',
    ],
    landmarks: ['Air Force Station Yelahanka', 'Yelahanka Lake', 'Bellary Road (NH 44)'],
    nearby: [
      'yelahanka-new-town',
      'kogilu',
      'jakkur',
      'doddaballapur-road',
      'byatarayanapura',
      'bagalur',
    ],
    competition: 'medium',
    searchHabits:
      'Students and parents research colleges and schools online in detail, comparing courses, fees and reviews. Residents of the old town often search in Kannada, while people in the newer apartments search in English, usually naming the New Town or their complex.',
    realEstate:
      'An expanding market of apartments, villa projects and plotted layouts, helped by the airport and the metro line being built towards it. Buyers include families moving north, people who work around the airport and investors.',
    industries: [
      'real-estate',
      'construction-and-contractors',
      'higher-education',
      'education-and-schools',
    ],
  },

  'yelahanka-new-town': {
    coords: [13.1, 77.578],
    character:
      'A planned satellite township developed by the Karnataka Housing Board in the early 1980s, which many locals still simply call “Housing Board”. It is laid out in sectors and phases of independent houses, parks and housing-board apartments, with the Rail Wheel Factory and the Karnataka Milk Federation’s Mother Dairy plant as its large neighbours. Many households are families of government, railway and defence employees, along with professionals working around the airport.',
    businesses: [
      'schools and pre-university colleges',
      'clinics and nursing homes',
      'supermarkets and neighbourhood stores',
      'tuition and coaching centres',
      'bakeries and restaurants',
      'banquet halls and party venues',
    ],
    landmarks: ['Rail Wheel Factory', 'Mother Dairy plant'],
    nearby: [
      'yelahanka',
      'doddaballapur-road',
      'rajanukunte',
      'vidyaranyapura',
      'jakkur',
      'kogilu',
    ],
    competition: 'medium',
    searchHabits:
      'Settled families find services by sector or phase and trust neighbourhood recommendations and Google reviews about equally, and older residents tend to call rather than message. Students from the colleges around Yelahanka add demand for food, coaching and paying-guest rooms.',
    realEstate:
      'A mature market of independent houses on planned plots and older housing-board apartments, with newer apartment projects on the township’s edges. Buyers are families who want an orderly, well-planned neighbourhood near the airport road, and rental demand comes from students and airport staff.',
    industries: [
      'education-and-schools',
      'clinics-and-doctors',
      'coaching-and-test-prep',
      'real-estate',
      'events-and-weddings',
    ],
  },

  yeshwanthpur: {
    coords: [13.025, 77.547],
    character:
      'A mixed industrial and commercial area in north-west Bengaluru, built around Yeshwanthpur railway junction and the APMC Yard, one of the city’s main wholesale markets for grain and produce. Tumkur Road carries traffic out to Peenya Industrial Area and beyond, and the area has many small factories, transport companies and lodges. Newer apartment projects and hotels have come up nearby, alongside the Brigade Gateway development.',
    businesses: [
      'wholesale traders in grain and produce',
      'small factories and workshops',
      'transport and logistics firms',
      'hotels and lodges near the station',
      'hospitals and clinics',
      'apartment projects',
      'automobile dealers and service centres',
    ],
    landmarks: [
      'Yeshwanthpur Junction railway station',
      'APMC Yard',
      'Tumkur Road',
      'Yeshwanthpur Metro station',
    ],
    nearby: ['mathikere', 'peenya', 'rajajinagar', 'malleshwaram', 'jalahalli', 'sadashivanagar'],
    competition: 'medium',
    searchHabits:
      'Much of the search activity is B2B – traders and buyers looking for suppliers, transporters and manufacturers by product and area. Travellers arriving at the station search on their phones for hotels, food and cabs nearby.',
    realEstate:
      'A mix of older housing, commercial plots and newer apartment projects, with large mixed-use developments near Tumkur Road. Buyers include families who work in north-west Bengaluru and Peenya, and investors drawn by the metro and rail links.',
    industries: [
      'manufacturing',
      'hospitality-and-hotels',
      'healthcare-and-hospitals',
      'real-estate',
      'automotive',
    ],
  },
} satisfies Partial<Record<LocalitySlug, LocalityProfile>>;
