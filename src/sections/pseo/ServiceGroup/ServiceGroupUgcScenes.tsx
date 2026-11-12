import s from './ServiceGroupArt.module.css';
import styles from './ServiceGroupUgc.module.css';

// What fills each story on the UGC page: a small scene for the service, drawn in the same thin
// greys and lime as the "service by service" drawings, and the label its creator bar carries.

const star = (cx: number, cy: number, r: number) =>
  Array.from({ length: 10 }, (_, i) => {
    const angle = (Math.PI / 5) * i - Math.PI / 2;
    const radius = i % 2 ? r * 0.45 : r;
    return `${(cx + radius * Math.cos(angle)).toFixed(1)},${(cy + radius * Math.sin(angle)).toFixed(1)}`;
  }).join(' ');

const heart = (cx: number, cy: number, r: number) =>
  `M${cx} ${cy + r} C ${cx - r * 1.6} ${cy - r * 0.2}, ${cx - r * 0.6} ${cy - r * 1.4}, ${cx} ${cy - r * 0.4} C ${cx + r * 0.6} ${cy - r * 1.4}, ${cx + r * 1.6} ${cy - r * 0.2}, ${cx} ${cy + r} Z`;

const Avatar = ({ x, y, r }: { x: number; y: number; r: number }) => (
  <>
    <circle className={s.panel} cx={x} cy={y} r={r} />
    <circle className={s.dim} cx={x} cy={y - r * 0.2} r={r * 0.38} />
  </>
);

// A review: the product, a five-star bubble, hearts floating up
const review = (
  <>
    <rect className={s.panel} x="20" y="16" width="112" height="34" rx="12" />
    <path className={s.panel} d="M46 50l6 10 8-10" />
    {[0, 1, 2, 3, 4].map((i) => (
      <polygon key={i} className={s.accent} points={star(38 + i * 19, 33, 6)} />
    ))}
    <rect className={s.bright} x="90" y="68" width="22" height="16" rx="3" />
    <rect className={s.panel} x="80" y="82" width="42" height="88" rx="12" />
    <rect className={s.dim} x="80" y="112" width="42" height="26" />
    <path className={s.accent} d={heart(152, 72, 9)} />
    <path className={s.bright} d={heart(170, 102, 6)} />
    <path className={s.dim} d={heart(148, 128, 5)} />
  </>
);

// An ad: a big hook caption, the product, and the button people tap
const ad = (
  <>
    <rect className={s.bright} x="22" y="22" width="156" height="20" rx="5" />
    <rect className={s.dim} x="22" y="48" width="104" height="10" rx="5" />
    <rect className={s.panel} x="32" y="74" width="136" height="62" rx="10" />
    <rect className={s.dim} x="42" y="84" width="42" height="42" rx="6" />
    <rect className={s.bright} x="94" y="92" width="58" height="6" rx="3" />
    <rect className={s.dim} x="94" y="104" width="40" height="6" rx="3" />
    <rect className={s.accent} x="48" y="148" width="104" height="22" rx="11" />
    <text className={styles.sceneButton} x="100" y="163" textAnchor="middle">
      Shop now
    </text>
    <path className={s.cursor} d="M140 156l14 24-6-2-4 7-4-2 4-7-6-1z" />
  </>
);

// Outsourcing: a brief goes out, and the right creators are picked from the pool
const shortlist = (
  <>
    <rect className={s.panel} x="12" y="44" width="52" height="68" rx="6" />
    <rect className={s.dim} x="20" y="56" width="36" height="5" rx="2.5" />
    <rect className={s.dim} x="20" y="66" width="28" height="5" rx="2.5" />
    <rect className={s.dim} x="20" y="76" width="36" height="5" rx="2.5" />
    <rect className={s.accent} x="20" y="94" width="18" height="7" rx="3.5" />
    <path className={s.dash} d="M66 78H94" />
    {Array.from({ length: 9 }, (_, i) => {
      const x = 112 + (i % 3) * 30;
      const y = 48 + Math.floor(i / 3) * 30;
      const picked = [1, 3, 8].includes(i);
      return (
        <g key={i}>
          <Avatar x={x} y={y} r={10} />
          {picked && (
            <>
              <circle className={s.accentLine} cx={x} cy={y} r={13} />
              <circle className={s.accent} cx={x + 9} cy={y - 9} r={4} />
            </>
          )}
        </g>
      );
    })}
  </>
);

// Promotion: a creator posts, and the reach spreads out in rings
const reach = (
  <>
    <circle className={s.dash} cx="100" cy="92" r="74" />
    <circle className={s.dash} cx="100" cy="92" r="50" />
    <circle className={s.accentLine} cx="100" cy="92" r="27" />
    <Avatar x={100} y={92} r={22} />
    {[
      [100, 18, 'accent'],
      [148, 54, 'dim'],
      [52, 54, 'bright'],
      [170, 110, 'accent'],
      [30, 118, 'dim'],
      [64, 156, 'accent'],
      [138, 158, 'bright'],
      [150, 92, 'dim'],
      [50, 92, 'accent'],
    ].map(([x, y, tone]) => (
      <circle key={`${x}-${y}`} className={s[tone as 'accent' | 'dim' | 'bright']} cx={x} cy={y} r={5} />
    ))}
  </>
);

// A collaboration: the brand and the creator, overlapping where the work happens
const collab = (
  <>
    <circle className={s.panel} cx="74" cy="90" r="48" />
    <circle className={s.panel} cx="126" cy="90" r="48" />
    <path className={styles.lens} d="M100 49.7A48 48 0 0 1 100 130.3A48 48 0 0 1 100 49.7Z" />
    <rect className={s.bright} x="44" y="74" width="30" height="30" rx="8" />
    <rect className={s.dim} x="51" y="86" width="16" height="6" rx="3" />
    <Avatar x={142} y={89} r={17} />
    <text className={styles.sceneMark} x="100" y="96" textAnchor="middle">
      ×
    </text>
  </>
);

// Experiential: an event on the ground, filmed through the viewfinder
const event = (
  <>
    <path
      className={s.line}
      d="M14 30V14H30M170 14H186V30M186 150V166H170M30 166H14V150"
    />
    <circle className={s.accent} cx="28" cy="27" r="4" />
    <text className={styles.sceneRec} x="36" y="30">
      REC
    </text>
    <path className={styles.beam} d="M40 14L64 56H82Z M160 14L136 56H118Z" />
    <rect className={s.panel} x="58" y="52" width="84" height="48" rx="6" />
    <rect className={s.bright} x="70" y="63" width="60" height="8" rx="4" />
    <rect className={s.dim} x="80" y="77" width="40" height="6" rx="3" />
    {[34, 58, 82, 106, 130, 154].map((x, i) => (
      <g key={x}>
        <circle className={i === 3 ? s.bright : s.dim} cx={x} cy={128} r={8} />
        <rect className={s.dim} x={x - 12} y={138} width={24} height={16} rx={9} />
      </g>
    ))}
    <rect className={s.bright} x="111" y="106" width="9" height="15" rx="2" />
  </>
);

// ---------- The UGC formats, for the hero's shelf of videos ----------

// Unboxing: the box opened, the product lifting out of it
const unboxing = (
  <>
    <path className={s.panel} d="M50 112L100 132L150 112V170L100 190L50 170Z" />
    <path className={s.panel} d="M50 112L28 94L78 74L100 92Z" />
    <path className={s.panel} d="M150 112L172 94L122 74L100 92Z" />
    <path className={s.line} d="M100 132V190" />
    <rect className={s.bright} x="89" y="34" width="22" height="14" rx="3" />
    <rect className={s.panel} x="82" y="46" width="36" height="62" rx="9" />
    <rect className={s.dim} x="82" y="66" width="36" height="16" />
    <polygon className={s.accent} points={star(56, 44, 7)} />
    <polygon className={s.bright} points={star(150, 56, 4.5)} />
  </>
);

// A testimonial: what they said, and their rating (the face is in the creator's bar above it)
const testimonial = (
  <>
    <text className={styles.sceneQuote} x="100" y="118" textAnchor="middle">
      “
    </text>
    <rect className={s.bright} x="36" y="92" width="128" height="7" rx="3.5" />
    <rect className={s.bright} x="48" y="106" width="104" height="7" rx="3.5" />
    <rect className={s.dim} x="64" y="120" width="72" height="6" rx="3" />
    {[0, 1, 2, 3, 4].map((i) => (
      <polygon key={i} className={s.accent} points={star(76 + i * 12, 148, 4.5)} />
    ))}
  </>
);

// A tutorial: the steps, one done, the next in turn
const tutorial = (
  <>
    <path className={s.dash} d="M44 64V86M44 112V134" />
    {[50, 98, 146].map((y, i) => (
      <g key={y}>
        <circle className={i === 0 ? s.accent : s.panel} cx="44" cy={y} r="13" />
        <text className={i === 0 ? styles.sceneDigitOn : styles.sceneDigit} x="44" y={y + 4} textAnchor="middle">
          {i + 1}
        </text>
        <rect className={i === 0 ? s.bright : s.dim} x="68" y={y - 8} width={i === 2 ? 64 : 92} height="6" rx="3" />
        <rect className={s.dim} x="68" y={y + 3} width={i === 1 ? 52 : 70} height="5" rx="2.5" />
      </g>
    ))}
    <path className={s.accentLine} d="M150 44l6 6 12-12" />
  </>
);

// A day in the life: the sun crossing a day, over the places it's spent in
const dayInLife = (
  <>
    <path className={s.dash} d="M28 124A72 72 0 0 1 172 124" />
    <circle className={s.accent} cx="72" cy="72" r="14" />
    <path className={s.line} d="M72 46V40M72 104V98M46 72H40M104 72H98M54 54L50 50M90 54L94 50" />
    <path className={s.line} d="M18 124H182" />
    <rect className={s.dim} x="34" y="138" width="34" height="40" rx="4" />
    <rect className={s.panel} x="78" y="130" width="44" height="48" rx="4" />
    <rect className={s.bright} x="88" y="142" width="24" height="5" rx="2.5" />
    <rect className={s.dim} x="132" y="146" width="34" height="32" rx="4" />
  </>
);

// The shelf, left to right; the middle one is the featured post
export const FORMATS = [
  { format: 'Unboxing', time: '0:21', art: unboxing },
  { format: 'Review', time: '0:30', art: review },
  { format: 'Testimonial', time: '0:45', art: testimonial },
  { format: 'Tutorial', time: '0:38', art: tutorial },
  { format: 'Day in the life', time: '0:52', art: dayInLife },
];

// ---------- The services' scenes, for the stories ----------

const SCENES: Record<string, { tag: string; art: React.ReactNode }> = {
  'UGC Content': { tag: 'Creator', art: review },
  'UGC Ads': { tag: 'Sponsored', art: ad },
  'UGC Outsourcing': { tag: 'Shortlist', art: shortlist },
  'UGC Promotions': { tag: 'Creator', art: reach },
  'Brand Collaborations': { tag: 'Paid partnership', art: collab },
  'Experiential Ads': { tag: 'Live', art: event },
};
const ALL = Object.values(SCENES);

// The scene for a service by its title; a service added later borrows one in turn
export const storyScene = (title: string, index: number) =>
  SCENES[title] ?? ALL[index % ALL.length];
