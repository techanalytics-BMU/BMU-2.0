import ServiceGroupArt from './ServiceGroupArt';
import shared from './ServiceGroupPage.module.css';
import { HeroText, Offer, vars, type VibeProps } from './ServiceGroupParts';
import styles from './ServiceGroupCrm.module.css';

export const servicesHeading = 'Software your team will actually use';
export const headBeside = false;

// The pipeline on the hero: four stages, a few leads in each, where they came from
const STAGES = [
  {
    name: 'New',
    count: 12,
    leads: [
      { name: 'Sharma Textiles', source: 'IndiaMART', when: '4 min' },
      { name: 'Nova Clinics', source: 'Website', when: '18 min' },
      { name: 'Greenleaf Foods', source: 'WhatsApp', when: '1 h' },
    ],
  },
  {
    name: 'Contacted',
    count: 8,
    leads: [
      { name: 'Apex Pumps', source: 'Meta ads', when: 'Call 4 pm' },
      { name: 'Zen Interiors', source: 'Referral', when: 'Visit Fri' },
    ],
  },
  {
    name: 'Quoted',
    count: 5,
    leads: [
      { name: 'Metro Steel', source: 'Trade fair', when: 'Quote v2' },
      { name: 'Kiran Motors', source: 'Website', when: 'Revision' },
    ],
  },
  {
    name: 'Won',
    count: 3,
    leads: [{ name: 'Bright Polymers', source: 'IndiaMART', when: 'Ordered' }],
  },
];

const KPIS = [
  { label: 'New this week', value: '48' },
  { label: 'Follow-ups due', value: '7' },
  { label: 'Avg. first reply', value: '6 min' },
];

// CRM & Business Software, the system itself: a sales pipeline with leads from every source, the
// numbers the owner checks above it – what replaces the spreadsheets and WhatsApp groups
export function Hero({ page, price }: VibeProps) {
  return (
    <header className={styles.hero}>
      <HeroText page={page} price={price} />

      <div className={styles.app} aria-hidden="true">
        <div className={styles.bar}>
          <span className={styles.dots}>
            <i />
            <i />
            <i />
          </span>
          <span className={styles.appTitle}>Sales pipeline</span>
          <span className={styles.search}>Search leads</span>
        </div>

        <div className={styles.kpis}>
          {KPIS.map((kpi) => (
            <span key={kpi.label} className={styles.kpi}>
              <small>{kpi.label}</small>
              <b>{kpi.value}</b>
            </span>
          ))}
        </div>

        <div className={styles.board}>
          {STAGES.map((stage, s) => (
            <div key={stage.name} className={styles.stage} data-won={stage.name === 'Won' || undefined}>
              <span className={styles.stageHead}>
                {stage.name}
                <em>{stage.count}</em>
              </span>
              {stage.leads.map((lead, l) => (
                <span key={lead.name} className={styles.lead} style={vars({ '--i': s * 2 + l })}>
                  <b>{lead.name}</b>
                  <small>
                    {lead.source} · {lead.when}
                  </small>
                  <i className={styles.owner} />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

// The services as modules of one system, each with a small drawing of what it does
export function Offers({ offers }: VibeProps) {
  return (
    <div className={styles.modules}>
      {offers.map((offer, i) => (
        <Offer
          key={offer.title}
          item={offer}
          className={`${styles.card} ${shared.rise}`}
          style={vars({ '--i': i + 3 })}
        >
          <span className={styles.preview}>
            <ServiceGroupArt slug={offer.href?.split('/').pop() ?? ''} />
          </span>
          <h3 className={styles.title}>{offer.title}</h3>
          <p className={styles.text}>{offer.text}</p>
          <span className={styles.meta}>{offer.meta}</span>
        </Offer>
      ))}
    </div>
  );
}
