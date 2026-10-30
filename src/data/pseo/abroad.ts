// Places outside India that get programmatic pages: Dubai's business areas, and cities across
// the UAE & GCC and the USA & Canada. Hand-maintained (they aren't on the pSEO spreadsheet) –
// each slug needs a written profile in src/data/pseo/dubai/ or src/data/pseo/markets/.

export type DubaiDistrict =
  'Deira' | 'Bur Dubai' | 'Downtown & Sheikh Zayed Road' | 'New Dubai' | 'Outer Dubai';

const area = (name: string, district: DubaiDistrict) => ({ name, district });

// Dubai's business areas, grouped by district – /[service]/dubai/[area]
export const dubaiAreaBase = {
  deira: area('Deira', 'Deira'),
  'al-ras': area('Al Ras', 'Deira'),
  naif: area('Naif', 'Deira'),
  'al-rigga': area('Al Rigga', 'Deira'),
  'port-saeed': area('Port Saeed', 'Deira'),
  'al-muraqqabat': area('Al Muraqqabat', 'Deira'),
  'al-garhoud': area('Al Garhoud', 'Deira'),
  'al-qusais': area('Al Qusais', 'Deira'),
  'al-nahda': area('Al Nahda', 'Deira'),
  mirdif: area('Mirdif', 'Deira'),
  'bur-dubai': area('Bur Dubai', 'Bur Dubai'),
  'al-mankhool': area('Al Mankhool', 'Bur Dubai'),
  'al-karama': area('Al Karama', 'Bur Dubai'),
  'oud-metha': area('Oud Metha', 'Bur Dubai'),
  'al-satwa': area('Al Satwa', 'Bur Dubai'),
  jumeirah: area('Jumeirah', 'Bur Dubai'),
  'downtown-dubai': area('Downtown Dubai', 'Downtown & Sheikh Zayed Road'),
  'business-bay': area('Business Bay', 'Downtown & Sheikh Zayed Road'),
  difc: area('DIFC', 'Downtown & Sheikh Zayed Road'),
  'al-quoz': area('Al Quoz', 'Downtown & Sheikh Zayed Road'),
  'dubai-marina': area('Dubai Marina', 'New Dubai'),
  jlt: area('Jumeirah Lakes Towers', 'New Dubai'),
  'al-barsha': area('Al Barsha', 'New Dubai'),
  'dubai-internet-city': area('Dubai Internet City', 'New Dubai'),
  'palm-jumeirah': area('Palm Jumeirah', 'New Dubai'),
  'dubai-hills-estate': area('Dubai Hills Estate', 'New Dubai'),
  'jumeirah-village-circle': area('Jumeirah Village Circle', 'Outer Dubai'),
  'dubai-silicon-oasis': area('Dubai Silicon Oasis', 'Outer Dubai'),
  'international-city': area('International City', 'Outer Dubai'),
  'dubai-investments-park': area('Dubai Investments Park', 'Outer Dubai'),
  'jebel-ali': area('Jebel Ali', 'Outer Dubai'),
  'dubai-south': area('Dubai South', 'Outer Dubai'),
} as const;

export type DubaiAreaSlug = keyof typeof dubaiAreaBase;
export const DUBAI_AREA_SLUGS = Object.keys(dubaiAreaBase) as DubaiAreaSlug[];
export const DUBAI_DISTRICTS: DubaiDistrict[] = [
  'Deira',
  'Bur Dubai',
  'Downtown & Sheikh Zayed Road',
  'New Dubai',
  'Outer Dubai',
];

export type MarketRegion = 'UAE & GCC' | 'USA & Canada';

const market = (name: string, country: string, region: MarketRegion) => ({ name, country, region });

// Cities abroad – /[service]/[market] (Dubai's is /[service]/dubai, the hub for its areas)
export const marketBase = {
  dubai: market('Dubai', 'United Arab Emirates', 'UAE & GCC'),
  'abu-dhabi': market('Abu Dhabi', 'United Arab Emirates', 'UAE & GCC'),
  sharjah: market('Sharjah', 'United Arab Emirates', 'UAE & GCC'),
  ajman: market('Ajman', 'United Arab Emirates', 'UAE & GCC'),
  'ras-al-khaimah': market('Ras Al Khaimah', 'United Arab Emirates', 'UAE & GCC'),
  'al-ain': market('Al Ain', 'United Arab Emirates', 'UAE & GCC'),
  riyadh: market('Riyadh', 'Saudi Arabia', 'UAE & GCC'),
  jeddah: market('Jeddah', 'Saudi Arabia', 'UAE & GCC'),
  dammam: market('Dammam', 'Saudi Arabia', 'UAE & GCC'),
  doha: market('Doha', 'Qatar', 'UAE & GCC'),
  muscat: market('Muscat', 'Oman', 'UAE & GCC'),
  'kuwait-city': market('Kuwait City', 'Kuwait', 'UAE & GCC'),
  manama: market('Manama', 'Bahrain', 'UAE & GCC'),
  'new-york': market('New York', 'United States', 'USA & Canada'),
  'jersey-city': market('Jersey City', 'United States', 'USA & Canada'),
  'san-francisco': market('San Francisco', 'United States', 'USA & Canada'),
  'san-jose': market('San Jose', 'United States', 'USA & Canada'),
  'los-angeles': market('Los Angeles', 'United States', 'USA & Canada'),
  seattle: market('Seattle', 'United States', 'USA & Canada'),
  chicago: market('Chicago', 'United States', 'USA & Canada'),
  dallas: market('Dallas', 'United States', 'USA & Canada'),
  houston: market('Houston', 'United States', 'USA & Canada'),
  atlanta: market('Atlanta', 'United States', 'USA & Canada'),
  boston: market('Boston', 'United States', 'USA & Canada'),
  'washington-dc': market('Washington, DC', 'United States', 'USA & Canada'),
  toronto: market('Toronto', 'Canada', 'USA & Canada'),
  mississauga: market('Mississauga', 'Canada', 'USA & Canada'),
  vancouver: market('Vancouver', 'Canada', 'USA & Canada'),
  calgary: market('Calgary', 'Canada', 'USA & Canada'),
} as const;

export type MarketSlug = keyof typeof marketBase;
export const MARKET_SLUGS = Object.keys(marketBase) as MarketSlug[];
export const MARKET_REGIONS: MarketRegion[] = ['UAE & GCC', 'USA & Canada'];
