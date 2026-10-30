import type { MarketProfile } from '@/types/pseo';
import type { MarketSlug } from '../abroad';

// UAE & GCC, in marketBase order. None of these countries uses daylight saving: the UAE and Oman
// are on UTC+4 all year (1 h 30 min behind India); Saudi Arabia, Qatar, Kuwait and Bahrain are on
// UTC+3 all year (2 h 30 min behind). The UAE works Monday to Friday; Saudi Arabia, Qatar, Kuwait,
// Bahrain and Oman work Sunday to Thursday.
export const gccMarkets = {
  dubai: {
    coords: [25.205, 55.271],
    character:
      'Dubai is the Gulf’s main centre for trade, tourism and regional head offices – Jebel Ali Port and its free zone, Dubai International Airport and Emirates move goods and people across the region, and DIFC is its financial district. The old trading quarters of Deira and Bur Dubai still line the Creek with gold, spice and textile souks, while Sheikh Zayed Road, Downtown, Business Bay and Dubai Marina hold the towers, malls and hotels. Most residents are expatriates, and a company can set up on the mainland or in one of the emirate’s many free zones, so new businesses open – and compete for the same customers – all the time.',
    businesses: [
      'real estate brokerages and developers',
      'import, export and re-export traders',
      'restaurants, cafés and cloud kitchens',
      'hotels, tour operators and attractions',
      'aesthetic, dental and medical clinics',
      'e-commerce sellers on Noon and Amazon.ae',
      'business setup and corporate service firms',
    ],
    languages: 'English and Arabic, with Hindi, Urdu, Malayalam, Tagalog and Russian widely used',
    competition: 'high',
    searchHabits:
      'Dubai is spread out and traffic decides where people go, so searches name the area – ‘JLT’, ‘Marina’, ‘Al Barsha’, ‘Deira’ – and Google Maps reviews settle the choice. Property hunting starts on Bayut, Property Finder and Dubizzle, food comes through Talabat, Deliveroo and Careem, and many enquiries go straight to a WhatsApp chat rather than a contact form.',
    industries: [
      'real-estate',
      'hospitality-and-hotels',
      'retail',
      'logistics-and-transport',
      'e-commerce-and-d2c',
    ],
    timeDifference: '1 h 30 min behind India',
    workingHours:
      'Bengaluru is only 90 minutes ahead, so our working day covers almost all of yours – calls, approvals and edits happen on the same day.',
    currency: 'AED',
    indianCommunity:
      'Indians are the UAE’s largest expatriate community, and Indian families have traded along Dubai Creek for generations – in gold, textiles, spices and electronics – with Meena Bazaar in Bur Dubai still an Indian shopping street.',
  },
  'abu-dhabi': {
    coords: [24.454, 54.377],
    character:
      'Abu Dhabi is the UAE’s capital and the seat of its federal government, and its economy has long rested on oil through ADNOC and on sovereign investors such as ADIA, Mubadala and ADQ. The ADGM financial free zone on Al Maryah Island, the clean-energy companies of Masdar City and the Hub71 startup programme sit alongside large tourism and culture projects – the theme parks and Formula 1 circuit on Yas Island, and the Louvre Abu Dhabi on Saadiyat. Compared with Dubai, more customers are Emirati, more spending flows through government and semi-government bodies, and more work is won through formal procurement.',
    businesses: [
      'oil, gas and energy service companies',
      'government and semi-government suppliers',
      'construction, engineering and facilities firms',
      'hospitals and specialist clinics',
      'hotels, theme parks and tour operators',
      'investment firms and family offices',
      'private schools and nurseries',
    ],
    languages: 'Arabic and English, with Hindi, Malayalam, Urdu and Tagalog widely spoken',
    competition: 'high',
    searchHabits:
      'Emiratis make up a larger share of customers than in Dubai, so Arabic search terms, Arabic ad copy, Instagram and Snapchat carry more weight here. Consumers search by part of the city – the island, Khalifa City, Yas, Saadiyat, Al Reem – while government, energy and real estate buyers find suppliers through vendor registration, tenders and LinkedIn.',
    industries: [
      'energy-and-solar',
      'government-and-psu',
      'healthcare-and-hospitals',
      'construction-and-contractors',
      'travel-and-tourism',
    ],
    timeDifference: '1 h 30 min behind India',
    workingHours:
      'With just an hour and a half between us, we are at our desks for your whole morning and most of your afternoon, so a brief sent before lunch can be reviewed the same day.',
    currency: 'AED',
    indianCommunity:
      'Indian-founded businesses are well established in the capital – the LuLu Group, started by Kerala-born M.A. Yusuffali, has its headquarters here – and the BAPS Hindu Mandir at Abu Mureikha opened in 2024.',
  },
  sharjah: {
    coords: [25.346, 55.421],
    character:
      'Sharjah runs straight on from Dubai’s north-eastern edge and has a large manufacturing and trading base, spread across its numbered industrial areas, the SAIF Zone by the airport and the Hamriyah Free Zone. It is the most conservative of the large emirates – alcohol is not sold and a public decency code applies – and it leans on culture and education, from the Sharjah International Book Fair to University City and the American University of Sharjah. Rents are lower than in Dubai, so many families live here and commute, which gives the city a large school, clinic and neighbourhood-retail economy.',
    businesses: [
      'manufacturers and workshops in the industrial areas',
      'used-car dealers, spare-parts sellers and garages',
      'schools, nurseries and tuition centres',
      'family restaurants and cafeterias',
      'supermarkets and neighbourhood retailers',
      'clinics, pharmacies and diagnostic centres',
      'building-materials and general trading companies',
    ],
    languages:
      'Arabic and English, with Urdu, Malayalam, Hindi, Bengali and Tagalog common in residential areas',
    competition: 'medium',
    searchHabits:
      'Families search close to home by neighbourhood – Al Nahda, Al Majaz, Al Khan, Muwaileh – for schools, clinics, tuition and groceries, and many weigh Sharjah options against Dubai ones because of the daily commute. Ads and social content aimed at Sharjah audiences are usually more modest than Dubai’s, in line with the emirate’s decency rules.',
    industries: [
      'manufacturing',
      'education-and-schools',
      'automotive',
      'industrial-and-b2b-supplies',
      'retail',
    ],
    timeDifference: '1 h 30 min behind India',
    workingHours:
      'Sharjah’s government offices work Monday to Thursday and many private firms keep longer weeks – whichever pattern you follow, your office hours sit almost entirely inside ours.',
    currency: 'AED',
    indianCommunity:
      'Indian-run trading firms, supermarkets and workshops are common across Sharjah, and Indian-curriculum schools such as Sharjah Indian School serve many NRI families.',
  },
  ajman: {
    coords: [25.405, 55.513],
    character:
      'Ajman is the smallest emirate by area, a compact coastal city that runs into Sharjah with no clear break. Its free zone and Department of Economic Development are known for low-cost business licences, so many small trading companies, consultants and online sellers register here, and freehold flats in Al Nuaimiya, Emirates City and Al Zorah are among the more affordable in the UAE. Hospitals and universities in Al Jurf, a beach corniche of hotels and cafés, and industrial areas of workshops and small factories make up much of the rest of local business.',
    businesses: [
      'small trading companies and free zone startups',
      'real estate brokers selling affordable freehold',
      'hotels and cafés on the Corniche',
      'hospitals, clinics and medical colleges',
      'furniture, building-materials and metal workshops',
      'supermarkets and neighbourhood shops',
      'restaurants and cafeterias',
    ],
    languages: 'Arabic and English, with Urdu, Hindi, Malayalam and Bengali widely used',
    competition: 'low',
    searchHabits:
      'Customers here are price-conscious and compare against Sharjah and Dubai, so searches often carry a price, an offer or an area – ‘Al Nuaimiya’, ‘Al Rashidiya’, ‘near Ajman Corniche’. Flats are found on Dubizzle, Bayut and Property Finder, and many small shops and restaurants take orders through WhatsApp and Facebook.',
    industries: [
      'real-estate',
      'manufacturing',
      'healthcare-and-hospitals',
      'higher-education',
      'retail',
    ],
    timeDifference: '1 h 30 min behind India',
    workingHours:
      'Your 8 am is our 9:30 am, so we start the day together, and changes you ask for in the morning usually come back that afternoon.',
    currency: 'AED',
    indianCommunity:
      'Thumbay Group, founded by Indian entrepreneur Thumbay Moideen, runs Gulf Medical University and its hospitals in Ajman, and many of the emirate’s small traders and shopkeepers come from India and the rest of South Asia.',
  },
  'ras-al-khaimah': {
    coords: [25.79, 55.943],
    character:
      'Ras Al Khaimah is the UAE’s northernmost emirate, with the Hajar Mountains rising behind the city and beaches and man-made islands along the coast. Its economy is more industrial than its size suggests – RAK Ceramics, Julphar pharmaceuticals, cement plants and quarries are based here – and the RAKEZ economic zone and the RAK ICC company registry draw many small and international firms. Tourism is growing around Al Marjan Island, where Wynn is building a large integrated resort, and Al Hamra, while Jebel Jais brings visitors for its mountain road, zipline and cooler air.',
    businesses: [
      'ceramics, cement and building-materials manufacturers',
      'pharmaceutical and industrial companies',
      'beach resorts and hotels',
      'adventure and tour operators',
      'free zone trading companies',
      'real estate developers and brokers',
      'restaurants and cafés',
    ],
    languages: 'Arabic and English, with Urdu, Hindi and Malayalam among the workforce',
    competition: 'low',
    searchHabits:
      'Much of the demand comes from outside the emirate – Dubai and Abu Dhabi residents planning weekend breaks, and tourists booking resorts, Jebel Jais trips and adventure activities – so hotels and operators compete on booking sites, Google and Instagram as much as locally. Residents use Google Maps, Instagram and Snapchat to find restaurants, clinics and services, and Arabic searches are more common than in Dubai.',
    industries: [
      'manufacturing',
      'hospitality-and-hotels',
      'travel-and-tourism',
      'real-estate',
      'pharma-and-medical-devices',
    ],
    timeDifference: '1 h 30 min behind India',
    workingHours:
      'A 10 am call in Ras Al Khaimah is 11:30 am in Bengaluru, so meetings and quick fixes fit easily inside a shared working day.',
    currency: 'AED',
  },
  'al-ain': {
    coords: [24.207, 55.745],
    character:
      'Al Ain is the inland city of the Abu Dhabi emirate, on the border with Al Buraimi in Oman, known for its oases, date palms and greenery. A larger share of its residents are Emirati than in the coastal cities, and much of the economy runs through government, UAE University, hospitals such as Tawam, and agriculture – date farms, dairies and the camel market. Its oases and the ancient sites at Hili and Jebel Hafeet are listed together as a UNESCO World Heritage site, which brings domestic tourism alongside Al Ain Zoo and the mountain road up Jebel Hafeet.',
    businesses: [
      'date farms, dairies and agricultural suppliers',
      'government departments and their contractors',
      'hospitals, clinics and pharmacies',
      'schools, tuition centres and student services',
      'family restaurants and Arabic coffee shops',
      'car dealers and workshops',
      'livestock, camel and feed traders',
    ],
    languages: 'Arabic first, with English, Urdu, Hindi and Malayalam',
    competition: 'low',
    searchHabits:
      'Arabic searches are common, and families rely on Instagram, Snapchat and word of mouth for restaurants, clinics and shops. Students and visitors heading to Jebel Hafeet or the zoo lean on Google Maps, and many residents check whether a business in Abu Dhabi or Dubai has a branch in Al Ain or delivers there.',
    industries: [
      'agriculture-and-agritech',
      'government-and-psu',
      'higher-education',
      'healthcare-and-hospitals',
      'education-and-schools',
    ],
    timeDifference: '1 h 30 min behind India',
    workingHours:
      'We keep almost the same hours as you, just an hour and a half ahead, so questions sent on WhatsApp during your day are answered during it.',
    currency: 'AED',
  },
  riyadh: {
    coords: [24.713, 46.675],
    character:
      'Riyadh is Saudi Arabia’s capital and the centre of its government, the Public Investment Fund and the Vision 2030 programme, and large companies such as SABIC, STC and Al Rajhi Bank are based here. Since 2024 foreign firms that want government contracts have needed a regional headquarters in the kingdom, and most have set it up in Riyadh – many in the King Abdullah Financial District. Projects such as Diriyah, King Salman Park, Qiddiya and the new Riyadh Metro, along with Riyadh Season and preparations for Expo 2030, keep construction, hospitality and entertainment work growing.',
    businesses: [
      'government contractors and consultancies',
      'construction, engineering and fit-out firms',
      'restaurants, cafés and speciality coffee shops',
      'entertainment, events and exhibition companies',
      'private hospitals and clinics',
      'real estate developers and brokers',
      'fintech and tech startups',
    ],
    languages:
      'Arabic, with English common in business and Urdu, Hindi, Bengali and Tagalog among expatriate workers',
    competition: 'high',
    searchHabits:
      'Most searches are in Arabic, and Snapchat, TikTok and X carry much of the discovery for cafés, restaurants, events and new brands, with Google Maps reviews deciding where people go. Food is ordered through HungerStation and Jahez, many online stores run on Salla or Zid, and government work is tendered through the Etimad platform.',
    industries: [
      'government-and-psu',
      'construction-and-contractors',
      'real-estate',
      'fintech',
      'events-and-weddings',
    ],
    timeDifference: '2 h 30 min behind India',
    workingHours:
      'We are two and a half hours ahead, so our day covers your morning and early afternoon; your week runs Sunday to Thursday, so we plan reviews and launches for the Monday-to-Thursday days we share.',
    currency: 'SAR',
    indianCommunity:
      'Indian engineers, doctors, accountants and IT staff work across Riyadh’s companies and hospitals, and Batha, in the old centre, has long been the shopping district for South Asian residents.',
  },
  jeddah: {
    coords: [21.486, 39.193],
    character:
      'Jeddah is Saudi Arabia’s main Red Sea port and its traditional trading city – Jeddah Islamic Port handles a large share of the kingdom’s imports, and family groups such as Abdul Latif Jameel and Savola have their headquarters here. It is also the gateway for pilgrims travelling to Makkah for Hajj and Umrah, which keeps hotels, travel agents, transport firms and shops busy all year. The old town of Al-Balad is a UNESCO World Heritage site, and the Corniche, the Red Sea International Film Festival and the Formula 1 race give the city a more relaxed, outward-looking feel than Riyadh.',
    businesses: [
      'importers, distributors and wholesale traders',
      'Hajj and Umrah travel agents and hotels',
      'restaurants and cafés along the Corniche and Tahlia Street',
      'fashion, abaya and perfume boutiques',
      'cosmetic, dental and dermatology clinics',
      'shipping, freight and port services',
      'event and entertainment companies',
    ],
    languages:
      'Arabic, with English in business and Urdu, Bengali, Indonesian, Hindi and Tagalog widely spoken',
    competition: 'high',
    searchHabits:
      'Instagram and Snapchat drive much of the city’s fashion, café and restaurant discovery, and people search by street or district – Tahlia Street, the Corniche, Al-Balad, Al Rawdah. Pilgrims and visitors look for hotels, transport and Umrah packages in Arabic, English, Urdu, Indonesian, Malay and Turkish, so travel businesses often need pages in several languages.',
    industries: [
      'travel-and-tourism',
      'logistics-and-transport',
      'retail',
      'restaurants-and-food',
      'fashion-and-apparel',
    ],
    timeDifference: '2 h 30 min behind India',
    workingHours:
      'Our working day ends around the middle of your afternoon, so anything you send late in your day is picked up first thing the next morning – before your office opens.',
    currency: 'SAR',
    indianCommunity:
      'Sharafiya, in central Jeddah, is known for its Indian – especially Malayali – shops, restaurants and businesses, and India’s consulate in the city organises the Hajj for pilgrims from India.',
  },
  dammam: {
    coords: [26.421, 50.089],
    character:
      'Dammam is the capital of Saudi Arabia’s Eastern Province and, with Al Khobar and Dhahran, forms the centre of the kingdom’s oil industry – Saudi Aramco’s headquarters and King Fahd University of Petroleum and Minerals are in Dhahran. Engineering contractors, oilfield service companies, fabricators and industrial suppliers fill the area, King Abdulaziz Port handles cargo for the region, and the petrochemical plants of Jubail Industrial City are about an hour’s drive north. Al Khobar is the area’s shopping and dining district, and the King Fahd Causeway links it to Bahrain.',
    businesses: [
      'oilfield service and engineering contractors',
      'industrial suppliers, fabricators and workshops',
      'petrochemical and chemical companies',
      'port, freight and logistics firms',
      'safety, HSE and technical training centres',
      'restaurants and cafés in Al Khobar',
      'car dealerships and auto services',
    ],
    languages:
      'Arabic, with English widely used in the energy sector and Urdu, Hindi, Malayalam and Tagalog among expatriate workers',
    competition: 'medium',
    searchHabits:
      'B2B buying follows the energy sector: suppliers often need to be on the approved vendor lists of Aramco and other large companies, so buyers check certifications, track record and LinkedIn profiles before they call. Families treat Dammam, Al Khobar and Dhahran as one area when they search on Google Maps, and the restaurants and cafés along the Al Khobar Corniche live on Instagram and Snapchat.',
    industries: [
      'energy-and-solar',
      'chemicals',
      'industrial-and-b2b-supplies',
      'logistics-and-transport',
      'manufacturing',
    ],
    timeDifference: '2 h 30 min behind India',
    workingHours:
      'We keep calls to your morning, when both our working days are fully under way, and what you send in your afternoon is ready early the next day.',
    currency: 'SAR',
    indianCommunity:
      'Indian engineers, technicians and contractors have worked on the Eastern Province’s oil, gas and construction projects for decades, and Indian restaurants and grocers are a familiar sight in Dammam and Al Khobar.',
  },
  doha: {
    coords: [25.285, 51.531],
    character:
      'Doha is Qatar’s capital and runs on natural gas – QatarEnergy and the LNG projects of the North Field fund much of the economy, and the Qatar Investment Authority invests the proceeds abroad. Qatar Airways and Hamad International Airport, the towers of West Bay, Lusail City to the north and the rebuilt Msheireb district are the main business areas, and Education City holds branch campuses of universities such as Georgetown, Carnegie Mellon and Northwestern. The 2022 FIFA World Cup left new stadiums, hotels and the Doha Metro behind, and sport, events and hospitality remain a large part of the city’s business.',
    businesses: [
      'energy and engineering contractors',
      'hotels, restaurants and cafés',
      'real estate developers and property managers in Lusail and The Pearl',
      'private schools and universities',
      'private clinics and medical centres',
      'malls and retail brands',
      'sports, events and media companies',
    ],
    languages: 'Arabic and English, with Hindi, Malayalam, Urdu, Nepali and Tagalog widely spoken',
    competition: 'medium',
    searchHabits:
      'Food and groceries are ordered through Talabat and Snoonu, homes are found on Property Finder, and people search by district – West Bay, The Pearl, Lusail, Al Wakrah. Qatari families lean on Instagram and Snapchat for restaurants, abayas, perfume and events, so Arabic content matters as much as English.',
    industries: [
      'energy-and-solar',
      'hospitality-and-hotels',
      'real-estate',
      'higher-education',
      'sports-and-academies',
    ],
    timeDifference: '2 h 30 min behind India',
    workingHours:
      'A 9 am meeting in Doha is 11:30 am in Bengaluru, so calls are easy to arrange and most edits are back with you before your working day ends.',
    currency: 'QAR',
    indianCommunity:
      'Indians are among Qatar’s largest communities, and Indian-run retail chains, restaurants and contracting firms are a familiar part of Doha’s business scene.',
  },
  muscat: {
    coords: [23.588, 58.383],
    character:
      'Muscat is Oman’s capital, a long, low-rise city stretched between the Hajar Mountains and the sea, from old Muttrah and Ruwi through Qurum and Al Khuwair to Seeb and the airport. Government, oil and gas – Petroleum Development Oman is based here – and banking make up much of the economy, and Omanisation rules shape hiring in many sectors. Tourism has grown around Muttrah Souq, the Sultan Qaboos Grand Mosque, the Royal Opera House and coastal resorts, and foreigners can buy homes in integrated tourism complexes such as Al Mouj.',
    businesses: [
      'government suppliers and contractors',
      'oil, gas and energy service firms',
      'hotels, resorts and tour operators',
      'trading and import businesses in Ruwi and Muttrah',
      'private hospitals and clinics',
      'restaurants, cafés and home-based food businesses',
      'car dealers and showrooms',
    ],
    languages: 'Arabic and English, with Baluchi, Swahili, Urdu, Hindi and Malayalam also spoken',
    competition: 'medium',
    searchHabits:
      'The city stretches for tens of kilometres along the coast, so people search by area – Qurum, Al Khuwair, Bawshar, Al Mouj, Seeb – and choose what is close. Instagram is the main shop window for Omani restaurants, cafés and home businesses, food arrives through Talabat, and cars, flats and second-hand goods change hands on OpenSooq.',
    industries: [
      'travel-and-tourism',
      'hospitality-and-hotels',
      'energy-and-solar',
      'government-and-psu',
      'retail',
    ],
    timeDifference: '1 h 30 min behind India',
    workingHours:
      'Muscat’s office hours sit almost entirely inside ours, so we can talk in your morning and have changes live before you leave; with your weekend on Friday and Saturday, we schedule launches for midweek.',
    currency: 'OMR',
    indianCommunity:
      'Gujarati and Kutchi merchant families have traded in Muttrah for well over a century – the Khimji Ramdas group dates from 1870 – and Ruwi’s shops and offices still have a strong Indian presence.',
  },
  'kuwait-city': {
    coords: [29.376, 47.977],
    character:
      'Kuwait City is the capital and commercial centre of a small, wealthy country whose income comes mostly from oil through the Kuwait Petroleum Corporation. Private business is led by large family and listed groups – Alshaya, which runs many international retail and restaurant franchises across the region, Agility in logistics and Zain in telecoms are all Kuwaiti – and The Avenues, 360 Mall and Souq Al-Mubarakiya anchor a strong shopping and dining culture. Eating out and ordering in are a big part of daily life, and many small food, fashion and beauty brands start as home businesses selling online.',
    businesses: [
      'restaurants, cafés and dessert shops',
      'retail and franchise groups',
      'home businesses selling food, abayas and perfume online',
      'cosmetic, dental and dermatology clinics',
      'car dealerships and auto services',
      'oil-sector contractors and suppliers',
      'real estate and property management firms',
    ],
    languages:
      'Arabic and English, with Hindi, Malayalam, Urdu, Tagalog and Bengali among expatriates',
    competition: 'medium',
    searchHabits:
      'Instagram works almost like a shopping street here – many restaurants, dessert shops and abaya and perfume sellers take orders through their profile and WhatsApp – and Snapchat is heavily used by Kuwaiti families. Talabat, which started in Kuwait, is the usual way to order food, and people search by area such as Salmiya, Hawalli, Sharq or Shuwaikh.',
    industries: [
      'restaurants-and-food',
      'retail',
      'beauty-and-cosmetics',
      'automotive',
      'energy-and-solar',
    ],
    timeDifference: '2 h 30 min behind India',
    workingHours:
      'Our day covers your morning and early afternoon, and in Ramadan, when Kuwait’s office hours shift, we move our check-ins to match.',
    currency: 'KWD',
    indianCommunity:
      'Indians are Kuwait’s largest expatriate community, working across its oil sector, hospitals, retail and trading firms, many of them from Kerala.',
  },
  manama: {
    coords: [26.229, 50.586],
    character:
      'Manama is the capital of Bahrain, a small island state linked to Saudi Arabia by the King Fahd Causeway, and has been a Gulf banking centre since the 1970s, with conventional and Islamic banks regulated by the Central Bank of Bahrain. Bahrain allows full foreign ownership in most sectors, runs a fintech regulatory sandbox, and has a long industrial base around Alba’s aluminium smelter. Weekend visitors from Saudi Arabia keep the hotels, restaurants and malls of Seef, Juffair and Adliya busy, and the Bahrain Grand Prix at Sakhir brings a peak each spring.',
    businesses: [
      'banks, insurers and Islamic finance firms',
      'fintech and payments companies',
      'hotels, restaurants and cafés',
      'malls and retail brands in Seef',
      'aluminium and metal-products manufacturers',
      'real estate developers and brokers',
      'private hospitals and clinics',
    ],
    languages:
      'Arabic and English, with Hindi, Malayalam, Urdu, Tagalog and Bengali also widely used',
    competition: 'medium',
    searchHabits:
      'Bahrain is small, so people search by area – Seef, Juffair, Adliya, Riffa – and many businesses also aim at Saudi visitors from the Eastern Province who drive over the causeway for the weekend. Instagram and Google Maps reviews steer restaurant and hotel choices, and English is widely used in search alongside Arabic.',
    industries: [
      'banking-and-nbfc',
      'fintech',
      'hospitality-and-hotels',
      'real-estate',
      'manufacturing',
    ],
    timeDifference: '2 h 30 min behind India',
    workingHours:
      'Manama is two and a half hours behind us, so we speak in your morning, and anything you send after lunch is usually picked up at the start of our next day.',
    currency: 'BHD',
    indianCommunity:
      'Indian merchant families have traded in Manama for generations – the Shrinathji temple in the old souq is around two centuries old – and Indians are one of Bahrain’s largest communities.',
  },
} satisfies Partial<Record<MarketSlug, MarketProfile>>;
