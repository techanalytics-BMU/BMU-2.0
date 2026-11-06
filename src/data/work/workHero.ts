import type { WorkHeroContent } from '@/types/work';

// Client names roll right to left in the strip. To show a logo instead of the name, add it:
// { name: 'Client', logo: '/images/work/clients/client.svg' }
export const workHero: WorkHeroContent = {
  heading: 'Work that helps brands get found, chosen and remembered',
  subheading: 'Designs, websites, apps and videos built to bring your business more customers.',
  cta: { label: 'See the work', href: '#work-showcase' },
  clientsLabel: 'Trusted by brands across Bengaluru and India',
  clients: [
    { name: 'Buttons' },
    { name: 'Social Crust' },
    { name: 'Chiranvi Farms' },
    { name: 'SB Wears' },
    { name: 'Corizo' },
    { name: 'Ventenza' },
    { name: 'Quantela' },
    { name: 'MM Miles' },
  ],
};
