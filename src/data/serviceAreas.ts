import type { ServiceAreasContent, ServiceAreasItem } from '@/types/footer';

// Tabs block in the footer. Items are plain text for now – give an item an `href` later
// to make it a link.
const items = (labels: string[], format: (label: string) => string): ServiceAreasItem[] =>
  labels.map((label) => ({ label: format(label) }));

const bangaloreAreas = [
  'Koramangala', 'Indiranagar', 'HSR Layout', 'Whitefield',
  'JP Nagar', 'Jayanagar', 'BTM Layout', 'Electronic City',
  'Marathahalli', 'Bellandur', 'Sarjapur Road', 'Hebbal',
  'Yelahanka', 'Malleshwaram', 'Rajajinagar', 'Banashankari',
  'Basavanagudi', 'MG Road', 'Bannerghatta Road', 'Hennur',
  'Kalyan Nagar', 'RT Nagar', 'Frazer Town', 'Ulsoor',
  'Domlur', 'KR Puram', 'Mahadevapura', 'Brookefield',
  'Kengeri', 'Vijayanagar', 'Yeshwanthpur', 'Sadashivanagar',
];

const cities = [
  'Mumbai', 'Delhi', 'Chennai', 'Hyderabad',
  'Pune', 'Kolkata', 'Ahmedabad', 'Gurugram',
  'Noida', 'Jaipur', 'Chandigarh', 'Kochi',
  'Coimbatore', 'Mysuru', 'Mangaluru', 'Hubballi',
  'Visakhapatnam', 'Vijayawada', 'Indore', 'Bhopal',
  'Lucknow', 'Nagpur', 'Surat', 'Vadodara',
  'Goa', 'Thiruvananthapuram', 'Madurai', 'Bhubaneswar',
  'Dehradun', 'Ludhiana', 'Nashik', 'Patna',
];

// The 27 sectors listed on bmumarketing.in
const industries = [
  'Real Estate', 'Restaurant', 'Hotel', 'Resort',
  'Cafe', 'Hospital', 'Clinic', 'Doctor',
  'School', 'College', 'Builder', 'Architect',
  'Interior Designer', 'Gym', 'Fitness Center', 'Salon',
  'Beauty Brand', 'Jewellery', 'Retail', 'Ecommerce',
  'Automobile', 'Finance', 'Education', 'Travel',
  'Manufacturing', 'NGO', 'Startup',
];

// As in the design
const services = [
  'SEO Services', 'Local SEO', 'Google Ads Agency', 'Meta Ads Agency',
  'Performance Marketing', 'Social Media Marketing', 'Instagram Marketing', 'LinkedIn Marketing',
  'Personal Branding', 'Influencer Marketing', 'UGC Video Production', 'Reels Shoot',
  'Drone Shoot', 'Product Photography', 'Video Production', 'Content Marketing',
  'Google Business Profile Optimisation', 'Online Reputation Management', 'Website Design', 'Website Development',
  'Landing Page Design', 'Ecommerce Website Development', 'App Development', 'WhatsApp Marketing Automation',
  'Branding Agency', 'Logo Design', 'Packaging Design', 'UI/UX Design',
  'AI Content Creation', 'ChatGPT Ads', 'Lead Generation', 'Real Estate Lead Generation',
];

export const serviceAreas: ServiceAreasContent = {
  defaultTab: 'services',
  tabs: [
    {
      id: 'areas',
      label: 'Bangalore Areas',
      heading: 'Digital Marketing Across Bangalore',
      items: items(bangaloreAreas, (area) => `Digital Marketing Agency in ${area}`),
    },
    {
      id: 'cities',
      label: 'Cities',
      heading: 'Digital Marketing Across India',
      items: items(cities, (city) => `Digital Marketing Agency in ${city}`),
    },
    {
      id: 'industries',
      label: 'Industries',
      heading: 'Industry Marketing in Bangalore',
      items: items(industries, (industry) => `${industry} Marketing in Bangalore`),
    },
    {
      id: 'services',
      label: 'Services',
      heading: 'Marketing Services in Bangalore',
      items: items(services, (service) => `${service} in Bangalore`),
    },
  ],
};
