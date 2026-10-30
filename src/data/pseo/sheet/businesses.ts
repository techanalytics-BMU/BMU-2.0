// High-priority local business types: name, category and value – generated from the BMU pSEO spreadsheet. Re-run the generator rather than editing by hand.
import type { BusinessSlug, IndustrySlug } from '../slugs';

export type BusinessBase = {
  name: string; // as on the sheet – 'Dental Clinics'
  category: string; // the sheet's category – 'Healthcare'
  customerValue: 'High' | 'Medium' | 'Low'; // typical value of one customer
  keyword: string; // the sheet's example target keyword
};

export const businessBase: Record<BusinessSlug, BusinessBase> = {
  salons: {
    name: 'Salons',
    category: 'Beauty & Personal Care',
    customerValue: 'Medium',
    keyword: 'SEO for salons in Bangalore',
  },
  'unisex-salons': {
    name: 'Unisex Salons',
    category: 'Beauty & Personal Care',
    customerValue: 'Medium',
    keyword: 'SEO for unisex salons in Bangalore',
  },
  'beauty-parlours': {
    name: 'Beauty Parlours',
    category: 'Beauty & Personal Care',
    customerValue: 'Medium',
    keyword: 'SEO for beauty parlours in Bangalore',
  },
  spas: {
    name: 'Spas',
    category: 'Beauty & Personal Care',
    customerValue: 'Medium',
    keyword: 'SEO for spas in Bangalore',
  },
  'bridal-makeup-artists': {
    name: 'Bridal Makeup Artists',
    category: 'Beauty & Personal Care',
    customerValue: 'High',
    keyword: 'SEO for bridal makeup artists in Bangalore',
  },
  'hair-transplant-clinics': {
    name: 'Hair Transplant Clinics',
    category: 'Beauty & Personal Care',
    customerValue: 'High',
    keyword: 'SEO for hair transplant clinics in Bangalore',
  },
  'dental-clinics': {
    name: 'Dental Clinics',
    category: 'Healthcare',
    customerValue: 'High',
    keyword: 'SEO for dental clinics in Bangalore',
  },
  dermatologists: {
    name: 'Dermatologists',
    category: 'Healthcare',
    customerValue: 'High',
    keyword: 'SEO for dermatologists in Bangalore',
  },
  'skin-and-hair-clinics': {
    name: 'Skin & Hair Clinics',
    category: 'Healthcare',
    customerValue: 'High',
    keyword: 'SEO for skin & hair clinics in Bangalore',
  },
  'eye-hospitals': {
    name: 'Eye Hospitals',
    category: 'Healthcare',
    customerValue: 'High',
    keyword: 'SEO for eye hospitals in Bangalore',
  },
  'physiotherapy-clinics': {
    name: 'Physiotherapy Clinics',
    category: 'Healthcare',
    customerValue: 'Medium',
    keyword: 'SEO for physiotherapy clinics in Bangalore',
  },
  'multispeciality-hospitals': {
    name: 'Multispeciality Hospitals',
    category: 'Healthcare',
    customerValue: 'High',
    keyword: 'SEO for multispeciality hospitals in Bangalore',
  },
  'ivf-centres': {
    name: 'IVF Centres',
    category: 'Healthcare',
    customerValue: 'High',
    keyword: 'SEO for ivf centres in Bangalore',
  },
  'fertility-clinics': {
    name: 'Fertility Clinics',
    category: 'Healthcare',
    customerValue: 'High',
    keyword: 'SEO for fertility clinics in Bangalore',
  },
  gynecologists: {
    name: 'Gynecologists',
    category: 'Healthcare',
    customerValue: 'High',
    keyword: 'SEO for gynecologists in Bangalore',
  },
  'orthopedic-doctors': {
    name: 'Orthopedic Doctors',
    category: 'Healthcare',
    customerValue: 'High',
    keyword: 'SEO for orthopedic doctors in Bangalore',
  },
  'cosmetic-surgeons': {
    name: 'Cosmetic Surgeons',
    category: 'Healthcare',
    customerValue: 'High',
    keyword: 'SEO for cosmetic surgeons in Bangalore',
  },
  gyms: {
    name: 'Gyms',
    category: 'Fitness & Wellness',
    customerValue: 'Medium',
    keyword: 'SEO for gyms in Bangalore',
  },
  'yoga-studios': {
    name: 'Yoga Studios',
    category: 'Fitness & Wellness',
    customerValue: 'Medium',
    keyword: 'SEO for yoga studios in Bangalore',
  },
  cafes: {
    name: 'Cafes',
    category: 'Food & Beverage',
    customerValue: 'Medium',
    keyword: 'SEO for cafes in Bangalore',
  },
  'cloud-kitchens': {
    name: 'Cloud Kitchens',
    category: 'Food & Beverage',
    customerValue: 'Medium',
    keyword: 'SEO for cloud kitchens in Bangalore',
  },
  caterers: {
    name: 'Caterers',
    category: 'Food & Beverage',
    customerValue: 'High',
    keyword: 'SEO for caterers in Bangalore',
  },
  'clothing-stores': {
    name: 'Clothing Stores',
    category: 'Retail',
    customerValue: 'Medium',
    keyword: 'SEO for clothing stores in Bangalore',
  },
  boutiques: {
    name: 'Boutiques',
    category: 'Retail',
    customerValue: 'Medium',
    keyword: 'SEO for boutiques in Bangalore',
  },
  'ethnic-wear-stores': {
    name: 'Ethnic Wear Stores',
    category: 'Retail',
    customerValue: 'Medium',
    keyword: 'SEO for ethnic wear stores in Bangalore',
  },
  'saree-shops': {
    name: 'Saree Shops',
    category: 'Retail',
    customerValue: 'Medium',
    keyword: 'SEO for saree shops in Bangalore',
  },
  'furniture-stores': {
    name: 'Furniture Stores',
    category: 'Retail',
    customerValue: 'High',
    keyword: 'SEO for furniture stores in Bangalore',
  },
  plumbers: {
    name: 'Plumbers',
    category: 'Home Services',
    customerValue: 'Low',
    keyword: 'SEO for plumbers in Bangalore',
  },
  electricians: {
    name: 'Electricians',
    category: 'Home Services',
    customerValue: 'Low',
    keyword: 'SEO for electricians in Bangalore',
  },
  carpenters: {
    name: 'Carpenters',
    category: 'Home Services',
    customerValue: 'Medium',
    keyword: 'SEO for carpenters in Bangalore',
  },
  painters: {
    name: 'Painters',
    category: 'Home Services',
    customerValue: 'Medium',
    keyword: 'SEO for painters in Bangalore',
  },
  'pest-control-services': {
    name: 'Pest Control Services',
    category: 'Home Services',
    customerValue: 'Medium',
    keyword: 'SEO for pest control services in Bangalore',
  },
  'home-cleaning-services': {
    name: 'Home Cleaning Services',
    category: 'Home Services',
    customerValue: 'Medium',
    keyword: 'SEO for home cleaning services in Bangalore',
  },
  'deep-cleaning-services': {
    name: 'Deep Cleaning Services',
    category: 'Home Services',
    customerValue: 'Medium',
    keyword: 'SEO for deep cleaning services in Bangalore',
  },
  'ac-repair-and-service': {
    name: 'AC Repair & Service',
    category: 'Home Services',
    customerValue: 'Low',
    keyword: 'SEO for ac repair & service in Bangalore',
  },
  'appliance-repair': {
    name: 'Appliance Repair',
    category: 'Home Services',
    customerValue: 'Low',
    keyword: 'SEO for appliance repair in Bangalore',
  },
  'packers-and-movers': {
    name: 'Packers & Movers',
    category: 'Home Services',
    customerValue: 'High',
    keyword: 'SEO for packers & movers in Bangalore',
  },
  'modular-kitchen-designers': {
    name: 'Modular Kitchen Designers',
    category: 'Home Services',
    customerValue: 'High',
    keyword: 'SEO for modular kitchen designers in Bangalore',
  },
  'home-renovation-contractors': {
    name: 'Home Renovation Contractors',
    category: 'Home Services',
    customerValue: 'High',
    keyword: 'SEO for home renovation contractors in Bangalore',
  },
  'solar-panel-installers': {
    name: 'Solar Panel Installers',
    category: 'Home Services',
    customerValue: 'High',
    keyword: 'SEO for solar panel installers in Bangalore',
  },
  'car-service-centres': {
    name: 'Car Service Centres',
    category: 'Automotive',
    customerValue: 'Medium',
    keyword: 'SEO for car service centres in Bangalore',
  },
  'tuition-centres': {
    name: 'Tuition Centres',
    category: 'Education',
    customerValue: 'Medium',
    keyword: 'SEO for tuition centres in Bangalore',
  },
  preschools: {
    name: 'Preschools',
    category: 'Education',
    customerValue: 'High',
    keyword: 'SEO for preschools in Bangalore',
  },
  'play-schools': {
    name: 'Play Schools',
    category: 'Education',
    customerValue: 'Medium',
    keyword: 'SEO for play schools in Bangalore',
  },
  'daycare-centres': {
    name: 'Daycare Centres',
    category: 'Education',
    customerValue: 'Medium',
    keyword: 'SEO for daycare centres in Bangalore',
  },
  'international-schools': {
    name: 'International Schools',
    category: 'Education',
    customerValue: 'High',
    keyword: 'SEO for international schools in Bangalore',
  },
  'ielts-coaching': {
    name: 'IELTS Coaching',
    category: 'Education',
    customerValue: 'Medium',
    keyword: 'SEO for ielts coaching in Bangalore',
  },
  'real-estate-agents': {
    name: 'Real Estate Agents',
    category: 'Professional Services',
    customerValue: 'High',
    keyword: 'SEO for real estate agents in Bangalore',
  },
  'wedding-planners': {
    name: 'Wedding Planners',
    category: 'Professional Services',
    customerValue: 'High',
    keyword: 'SEO for wedding planners in Bangalore',
  },
  'wedding-photographers': {
    name: 'Wedding Photographers',
    category: 'Professional Services',
    customerValue: 'High',
    keyword: 'SEO for wedding photographers in Bangalore',
  },
  'pg-accommodations': {
    name: 'PG Accommodations',
    category: 'Hospitality',
    customerValue: 'Medium',
    keyword: 'SEO for pg accommodations in Bangalore',
  },
  'banquet-halls': {
    name: 'Banquet Halls',
    category: 'Hospitality',
    customerValue: 'High',
    keyword: 'SEO for banquet halls in Bangalore',
  },
  'wedding-venues': {
    name: 'Wedding Venues',
    category: 'Hospitality',
    customerValue: 'High',
    keyword: 'SEO for wedding venues in Bangalore',
  },
};

// High-priority business types left out because an industry page covers the same topic – building
// both would make two near-identical pages compete in Google
export const duplicateOfIndustry: Record<string, IndustrySlug> = {
  clinics: 'clinics-and-doctors',
  hospitals: 'healthcare-and-hospitals',
  restaurants: 'restaurants-and-food',
  'interior-designers': 'interior-design',
  schools: 'education-and-schools',
  'study-abroad-consultants': 'study-abroad-and-immigration',
  'coaching-centres': 'coaching-and-test-prep',
  'jewellery-stores': 'jewellery',
};
