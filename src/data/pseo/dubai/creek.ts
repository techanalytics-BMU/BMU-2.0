import type { DubaiAreaProfile } from '@/types/pseo';
import type { DubaiAreaSlug } from '../abroad';

// Deira and Bur Dubai – the older districts on both banks of Dubai Creek
export const creekAreas = {
  deira: {
    coords: [25.271, 55.311],
    character:
      'Dubai’s original trading district on the north bank of the Creek, where wooden dhows still load cargo at the wharves along Baniyas Road. Wholesalers sell gold, textiles, electronics, spices and household goods from dense streets of low-rise buildings, and many of them re-export to buyers in Africa, the Gulf and Central Asia. Traders and families from South Asia, Iran, Africa and the Arab world live and work side by side here.',
    businesses: [
      'wholesale and re-export trading companies',
      'gold and jewellery retailers',
      'textile and garment traders',
      'electronics and mobile phone shops',
      'budget hotels',
      'restaurants and cafeterias',
      'cargo and shipping agents',
    ],
    landmarks: ['Dubai Creek dhow wharves', 'Baniyas Road', 'Deira Clocktower'],
    nearby: ['al-ras', 'naif', 'al-rigga', 'port-saeed', 'al-muraqqabat'],
    competition: 'high',
    searchHabits:
      'Searches come in English, Arabic, Hindi, Urdu, Persian and Malayalam, and overseas buyers often find a trader on Google Maps, then agree prices and shipping over WhatsApp. Listings and ads in more than one language reach more of them.',
    industries: [
      'retail',
      'jewellery',
      'industrial-and-b2b-supplies',
      'hospitality-and-hotels',
      'logistics-and-transport',
    ],
  },
  'al-ras': {
    coords: [25.268, 55.296],
    character:
      'The tip of Deira where the Creek opens towards the sea, reached from Bur Dubai by the abra crossing to Deira Old Souk. Its narrow lanes are packed with spice, nut, dried-fruit and foodstuff traders, small general trading offices and perfume sellers, many run by the same families for decades. Tourists walk through on their way between the Spice Souk and the Gold Souk.',
    businesses: [
      'spice, nut and dried-fruit traders',
      'foodstuff wholesalers',
      'general trading companies',
      'perfume and oud sellers',
      'souvenir shops',
      'money exchanges',
    ],
    landmarks: [
      'Deira Spice Souk',
      'Deira Gold Souk',
      'Al Ras metro station',
      'Al Ahmadiya School',
    ],
    nearby: ['deira', 'naif', 'al-rigga', 'bur-dubai'],
    competition: 'medium',
    searchHabits:
      'Visitors type ‘spice souk’ or ‘gold souk’ into Google Maps and walk to whatever shows up with photos and reviews, while long-standing wholesale customers reorder by phone and WhatsApp. Few shops here have a website, so a well-kept Maps listing does most of the work.',
    industries: ['fmcg-and-consumer-goods', 'retail', 'travel-and-tourism', 'jewellery'],
  },
  naif: {
    coords: [25.273, 55.306],
    character:
      'A crowded trading quarter inland from the Creek, known for Naif Souk and the streets around Naif Road selling clothes, abayas, bags, luggage and perfume both by the piece and by the carton. Visiting traders from Africa and Central Asia stay in its budget hotels and send goods home through the cargo agents on the same streets. The historic Naif Fort, now a police museum, sits in the middle of it.',
    businesses: [
      'clothing, abaya and textile wholesalers',
      'luggage and bag shops',
      'perfume and cosmetics traders',
      'budget hotels',
      'cargo and freight forwarders',
      'mobile phone and accessory shops',
      'cafeterias',
    ],
    landmarks: ['Naif Souk', 'Naif Road', 'Naif Museum', 'Baniyas Square metro station'],
    nearby: ['deira', 'al-ras', 'al-rigga', 'al-muraqqabat'],
    competition: 'medium',
    searchHabits:
      'Buyers find shops through Google Maps and word of mouth, then order with photos and voice notes on WhatsApp – in English, Arabic, Urdu and Hindi, and in the languages of visiting traders from Africa and Central Asia. Cargo agents are mostly found by searches that name a destination country.',
    industries: [
      'fashion-and-apparel',
      'textiles-and-garments',
      'logistics-and-transport',
      'hospitality-and-hotels',
      'retail',
    ],
  },
  'al-rigga': {
    coords: [25.263, 55.323],
    character:
      'One of Deira’s main streets for eating out and staying over: Al Rigga Road is lined with mid-range hotels, restaurants and cafés that stay open late, with travel agencies, bank branches and exchange houses in between. Al Ghurair Centre, one of Dubai’s oldest malls, anchors the area, and older apartment blocks house residents who work across Deira.',
    businesses: [
      'hotels and hotel apartments',
      'restaurants and shawarma shops',
      'travel and visa agencies',
      'money exchanges',
      'clinics and pharmacies',
      'salons and barbershops',
    ],
    landmarks: [
      'Al Ghurair Centre',
      'Al Rigga Road',
      'Al Rigga metro station',
      'Union metro station',
    ],
    nearby: ['deira', 'port-saeed', 'al-muraqqabat', 'naif'],
    competition: 'high',
    searchHabits:
      'Hotel guests search ‘restaurant near me’ or ‘near Union metro’ on their phones, and residents order through Talabat and Deliveroo, so ratings on Google and the delivery apps decide who gets the order. Travel agencies get many enquiries in Arabic, Urdu, Hindi and Tagalog as well as English.',
    industries: [
      'hospitality-and-hotels',
      'restaurants-and-food',
      'travel-and-tourism',
      'retail',
      'clinics-and-doctors',
    ],
  },
  'port-saeed': {
    coords: [25.256, 55.33],
    character:
      'The southern edge of Deira, running from Deira City Centre down to the Creek near Al Maktoum Bridge. It is more office-led than the souk streets to the north – mid-rise commercial buildings hold trading, shipping and service companies, alongside hotels, clinics and apartment blocks. The Dubai Creek Golf & Yacht Club sits on its waterfront.',
    businesses: [
      'trading company offices',
      'shipping and logistics firms',
      'shops and restaurants at Deira City Centre',
      'clinics and diagnostic centres',
      'car rental offices',
      'business centres and serviced offices',
    ],
    landmarks: [
      'Deira City Centre',
      'Deira City Centre metro station',
      'Dubai Creek Golf & Yacht Club',
      'Al Maktoum Bridge',
    ],
    nearby: ['deira', 'al-rigga', 'al-muraqqabat', 'al-garhoud', 'oud-metha'],
    competition: 'high',
    searchHabits:
      'Shoppers at Deira City Centre check stores and offers on Google and Instagram before they go. B2B buyers usually look up a company’s website or LinkedIn page first and then move the conversation to email or WhatsApp.',
    industries: [
      'retail',
      'logistics-and-transport',
      'coworking-and-office-space',
      'clinics-and-doctors',
      'travel-and-tourism',
    ],
  },
  'al-muraqqabat': {
    coords: [25.269, 55.33],
    character:
      'A mainly residential block of mid-rise apartment buildings between Al Rigga and Hor Al Anz, with supermarkets, restaurants, clinics and salons at street level. Working families and single professionals from South Asia, the Philippines and the Arab world make up most of its residents. Trade concentrates along Salah Al Din Road and Al Muraqqabat Road.',
    businesses: [
      'restaurants and cafeterias',
      'supermarkets and grocery stores',
      'clinics and pharmacies',
      'salons and barbershops',
      'mid-range hotels',
      'car rental offices',
    ],
    landmarks: [
      'Salah Al Din Road',
      'Al Muraqqabat Road',
      'Salah Al Din metro station',
      'Al Muraqqabat Police Station',
    ],
    nearby: ['al-rigga', 'port-saeed', 'naif', 'deira', 'al-qusais'],
    competition: 'medium',
    searchHabits:
      'Residents look for the nearest grocery, clinic or salon on Google Maps and order meals on Talabat, searching in English, Arabic, Hindi, Urdu, Malayalam and Tagalog. Neighbourhood shops take a lot of home-delivery orders straight over WhatsApp.',
    industries: [
      'restaurants-and-food',
      'clinics-and-doctors',
      'beauty-and-cosmetics',
      'hospitality-and-hotels',
      'retail',
    ],
  },
  'al-garhoud': {
    coords: [25.243, 55.348],
    character:
      'A quiet district of low-rise villas and older apartment blocks right beside Dubai International Airport. Airport hotels, airline and aviation offices, car rental desks and air freight forwarders serving the nearby cargo terminals make up much of its business. The Garhoud Bridge links it across the Creek to the Bur Dubai side.',
    businesses: [
      'airport hotels',
      'car rental companies',
      'air freight forwarders and courier firms',
      'hotel restaurants and bars',
      'travel agencies',
      'clinics and nurseries',
    ],
    landmarks: [
      'Dubai International Airport',
      'Al Garhoud Bridge',
      'Dubai Duty Free Tennis Stadium',
      'Airport Road',
    ],
    nearby: ['port-saeed', 'deira', 'oud-metha', 'mirdif'],
    competition: 'medium',
    searchHabits:
      'Travellers search for hotels, car hire and food ‘near DXB’ or ‘near Terminal 1’ on their phones, mostly in English. Freight customers compare forwarders on Google and ask for quotes by email, while villa residents look up schools, clinics and home services.',
    industries: [
      'hospitality-and-hotels',
      'aviation-and-aerospace',
      'logistics-and-transport',
      'travel-and-tourism',
      'restaurants-and-food',
    ],
  },
  'al-qusais': {
    coords: [25.282, 55.386],
    character:
      'A large district on the Sharjah border that combines Al Qusais Industrial Area – warehouses, workshops, building-material yards and staff accommodation – with residential neighbourhoods of apartment blocks, schools and supermarkets. Many residents commute into Dubai from here or across the border from Sharjah, and the Metro Green Line runs through it.',
    businesses: [
      'warehousing and distribution companies',
      'auto repair and spare parts workshops',
      'building materials suppliers',
      'supermarkets and hypermarkets',
      'schools and nurseries',
      'clinics and pharmacies',
      'restaurants and cafeterias',
    ],
    landmarks: [
      'Al Qusais Industrial Area',
      'Damascus Street',
      'Al Qusais metro station',
      'Dubai Airport Freezone (next door)',
    ],
    nearby: ['al-nahda', 'mirdif', 'al-muraqqabat', 'deira'],
    competition: 'medium',
    searchHabits:
      'Buyers in the industrial area find suppliers and workshops on Google, then confirm price and stock by phone or WhatsApp before sending a truck. Families search Google Maps for schools, clinics and supermarkets, often in Malayalam, Hindi, Urdu or Arabic as well as English.',
    industries: [
      'logistics-and-transport',
      'automotive',
      'industrial-and-b2b-supplies',
      'education-and-schools',
      'clinics-and-doctors',
    ],
  },
  'al-nahda': {
    coords: [25.289, 55.369],
    character:
      'A district of residential towers built right up to the Dubai–Sharjah border, popular with families who work in Dubai and want a little more space for the rent. Ground floors are filled with supermarkets, nurseries, tuition centres, salons and restaurants, and Al Ittihad Road carries heavy commuter traffic past it every morning and evening.',
    businesses: [
      'nurseries and tuition centres',
      'supermarkets and grocery stores',
      'salons and spas',
      'clinics and dental practices',
      'restaurants and cafés',
      'gyms and fitness studios',
      'property leasing and management agents',
    ],
    landmarks: [
      'Al Ittihad Road',
      'Al Nahda metro station',
      'Al Nahda Pond Park',
      'Sahara Centre (just over the Sharjah border)',
    ],
    nearby: ['al-qusais', 'mirdif', 'al-muraqqabat'],
    competition: 'medium',
    searchHabits:
      'Al Nahda is the name of a neighbourhood on both sides of the border, so a search for ‘nursery in Al Nahda’ can mean Dubai or Sharjah – pages and listings need to say which. Flat-hunters compare buildings on Bayut and Property Finder, and parents ask for recommendations in building WhatsApp groups.',
    industries: [
      'education-and-schools',
      'coaching-and-test-prep',
      'beauty-and-cosmetics',
      'real-estate',
      'fitness-and-sports',
    ],
  },
  mirdif: {
    coords: [25.22, 55.418],
    character:
      'A low-rise villa district east of the airport, home mainly to families – Emirati, Arab, Western and South Asian. Daily shopping happens at Uptown Mirdif and the much larger City Centre Mirdif, with Mushrif Park on its edge, and many small businesses are run from home: home bakers, tutors, beauticians and party planners.',
    businesses: [
      'nurseries and after-school centres',
      'villa maintenance and landscaping companies',
      'home beauty and salon services',
      'cafés and family restaurants',
      'clinics and dental practices',
      'fitness studios',
      'retail stores in the malls',
    ],
    landmarks: ['City Centre Mirdif', 'Uptown Mirdif', 'Mushrif Park', 'Tripoli Street'],
    nearby: ['al-qusais', 'al-garhoud', 'al-nahda', 'international-city'],
    competition: 'medium',
    searchHabits:
      'Families search by community name – ‘AC repair Mirdif’, ‘nursery in Mirdif’ – read Google reviews closely, and ask neighbours in community Facebook and WhatsApp groups before booking. Cafés, salons and home businesses win much of their custom through Instagram.',
    industries: [
      'education-and-schools',
      'home-services',
      'beauty-and-cosmetics',
      'clinics-and-doctors',
      'restaurants-and-food',
    ],
  },
  'bur-dubai': {
    coords: [25.258, 55.297],
    character:
      'The old core of Dubai on the south bank of the Creek, facing Deira across the water. Restored wind-tower houses in Al Fahidi sit a short walk from the covered Bur Dubai Souk and the lanes of Meena Bazaar, where shops sell fabrics, ready-made clothes, electronics and gold, and tailors work upstairs. It is one of the longest-settled South Asian neighbourhoods in the city, and abras run from its waterfront to Deira all day.',
    businesses: [
      'textile and fabric shops',
      'tailors',
      'electronics and mobile phone shops',
      'money exchanges',
      'restaurants and sweet shops',
      'travel agencies',
      'hotels',
    ],
    landmarks: [
      'Bur Dubai Souk',
      'Al Fahidi Historical Neighbourhood',
      'Meena Bazaar',
      'Al Ghubaiba metro station',
    ],
    nearby: ['al-mankhool', 'al-karama', 'oud-metha', 'al-ras'],
    competition: 'high',
    searchHabits:
      'Tourists find the souk, the abra and the heritage quarter on Google Maps and TripAdvisor. Residents and regular shoppers search in English, Hindi, Urdu, Tagalog and Arabic, and many shops take orders and send fabric photos over WhatsApp.',
    industries: [
      'textiles-and-garments',
      'fashion-and-apparel',
      'electronics-and-appliances',
      'travel-and-tourism',
      'restaurants-and-food',
    ],
  },
  'al-mankhool': {
    coords: [25.25, 55.296],
    character:
      'A dense quarter of mid-rise apartments, hotel apartments and offices just inland from old Bur Dubai, around BurJuman and Khalid Bin Al Waleed Road – long known as Bank Street for its bank branches. Al Ain Centre on Al Mankhool Road is a known stop for laptops, components and repairs. Many residents are professionals and families who walk or take the Metro to work.',
    businesses: [
      'hotel apartments',
      'computer and electronics shops',
      'bank branches and exchange houses',
      'clinics and diagnostic centres',
      'restaurants and cafés',
      'small trading and service company offices',
    ],
    landmarks: [
      'BurJuman Centre',
      'Al Ain Centre',
      'Khalid Bin Al Waleed Road',
      'Al Mankhool Road',
    ],
    nearby: ['bur-dubai', 'al-karama', 'al-satwa', 'oud-metha'],
    competition: 'high',
    searchHabits:
      'People shopping for laptops, phones or repairs compare prices on Google and Instagram, then walk in or message the shop on WhatsApp. Guests of the hotel apartments mostly book through Booking.com and Google Hotels.',
    industries: [
      'electronics-and-appliances',
      'hospitality-and-hotels',
      'clinics-and-doctors',
      'banking-and-nbfc',
      'it-services-and-software',
    ],
  },
  'al-karama': {
    coords: [25.245, 55.304],
    character:
      'An affordable, crowded residential district of low and mid-rise blocks between Bur Dubai and Za’abeel. Karama Market draws bargain hunters for clothes, bags, perfume and souvenirs, and the streets around it are packed with low-cost restaurants – Keralan, Pakistani, Filipino and Sri Lankan among them. Laundries, tailors and salons serve the many families and shared flats nearby.',
    businesses: [
      'restaurants and cafeterias',
      'clothing and souvenir shops',
      'tailors and alteration shops',
      'laundries',
      'supermarkets',
      'salons and barbershops',
      'clinics and pharmacies',
    ],
    landmarks: ['Karama Market', 'Karama Centre', 'Karama Park', 'ADCB metro station'],
    nearby: ['al-mankhool', 'oud-metha', 'bur-dubai', 'downtown-dubai'],
    competition: 'high',
    searchHabits:
      'Most restaurant orders here start on Talabat or Deliveroo, and diners trying somewhere new check Google Maps photos and reviews first. Shoppers and residents search and bargain in Hindi, Urdu, Malayalam, Tagalog and English.',
    industries: [
      'restaurants-and-food',
      'fashion-and-apparel',
      'retail',
      'beauty-and-cosmetics',
      'clinics-and-doctors',
    ],
  },
  'oud-metha': {
    coords: [25.236, 55.316],
    character:
      'A central, mid-rise district between Karama and the Creek with a strong civic and family feel – schools, churches, social clubs and hospitals sit among offices and apartments. Healthcare is a large employer: Dubai Healthcare City and Rashid Hospital are next door, and specialist clinics, labs and pharmacies are spread through the area. Lamcy Plaza and Wafi City handle the shopping.',
    businesses: [
      'specialist clinics and diagnostic labs',
      'pharmacies and medical suppliers',
      'schools and training institutes',
      'hotels and serviced apartments',
      'restaurants',
      'shops in Lamcy Plaza and Wafi',
    ],
    landmarks: ['Lamcy Plaza', 'Wafi City', 'Dubai Healthcare City', 'Oud Metha metro station'],
    nearby: ['al-karama', 'al-mankhool', 'port-saeed', 'al-garhoud'],
    competition: 'high',
    searchHabits:
      'Patients search by specialty and by which insurance a clinic accepts, compare Google reviews and doctor profiles, then book by phone or WhatsApp. Parents researching schools and nurseries search in English and visit several before choosing.',
    industries: [
      'healthcare-and-hospitals',
      'clinics-and-doctors',
      'pharma-and-medical-devices',
      'education-and-schools',
    ],
  },
  'al-satwa': {
    coords: [25.225, 55.274],
    character:
      'An older low-rise neighbourhood squeezed between Sheikh Zayed Road and Jumeirah, with a character quite unlike the towers next to it. Small shops sell fabric and do tailoring, garages fit car tints and accessories, and cheap, long-running restaurants line 2nd December Street. Many residents are Filipino, South Asian and Arab, and its tailors and garages also serve customers from Jumeirah and the towers nearby.',
    businesses: [
      'tailors and fabric shops',
      'car repair, tinting and accessory workshops',
      'restaurants and cafeterias',
      'salons and barbershops',
      'supermarkets and grocery stores',
      'laundries',
      'plant and garden shops',
    ],
    landmarks: ['2nd December Street', 'Al Satwa Road', 'Satwa Roundabout', 'Sheikh Zayed Road'],
    nearby: ['jumeirah', 'al-mankhool', 'al-karama', 'downtown-dubai'],
    competition: 'medium',
    searchHabits:
      'Much of the trade is walk-in and repeat, but new customers arrive through Google Maps searches like ‘tailor near me’ or ‘car tinting Satwa’. Shop owners and customers use Tagalog, Urdu, Hindi and Arabic alongside English, and confirm jobs and pick-ups on WhatsApp.',
    industries: [
      'fashion-and-apparel',
      'automotive',
      'restaurants-and-food',
      'beauty-and-cosmetics',
      'home-services',
    ],
  },
  jumeirah: {
    coords: [25.212, 55.247],
    character:
      'A long coastal strip of villas and beaches running south-west from the edge of Satwa, split into Jumeirah 1, 2 and 3. Jumeirah Beach Road and Al Wasl Road are lined with independent cafés, boutiques, spas, aesthetic and dental clinics and nurseries, serving long-settled Emirati families and expatriates who have lived in Dubai for years. La Mer brings beach-front dining and visitors at its northern end.',
    businesses: [
      'aesthetic and dental clinics',
      'spas and beauty salons',
      'independent cafés and restaurants',
      'boutiques and concept stores',
      'nurseries',
      'fitness and yoga studios',
      'villa renovation and interior firms',
    ],
    landmarks: ['Jumeirah Mosque', 'Jumeirah Beach Road', 'Mercato Shopping Mall', 'La Mer'],
    nearby: ['al-satwa', 'downtown-dubai', 'al-quoz', 'business-bay'],
    competition: 'high',
    searchHabits:
      'Residents search in English and Arabic and lean on Instagram and Google reviews to choose cafés, salons and clinics. Aesthetic clinics and spas here bid against many rivals on Google Ads and Instagram for the same treatments.',
    industries: [
      'beauty-and-cosmetics',
      'clinics-and-doctors',
      'restaurants-and-food',
      'fitness-and-sports',
      'interior-design',
    ],
  },
} satisfies Partial<Record<DubaiAreaSlug, DubaiAreaProfile>>;
