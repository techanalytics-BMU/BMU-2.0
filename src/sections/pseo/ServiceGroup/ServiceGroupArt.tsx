import s from './ServiceGroupArt.module.css';

// A bar of grey "text"
const Bar = ({ x, y, w, bright }: { x: number; y: number; w: number; bright?: boolean }) => (
  <rect className={bright ? s.bright : s.dim} x={x} y={y} width={w} height={4} rx={2} />
);

const Avatar = ({ x, y, r = 9 }: { x: number; y: number; r?: number }) => (
  <>
    <circle className={s.panel} cx={x} cy={y} r={r} />
    <circle className={s.dim} cx={x} cy={y - r * 0.18} r={r * 0.36} />
  </>
);

// One small line drawing per service, all on the same 240 × 140 canvas, in the site's greys with a
// touch of lime. Keyed by the service's slug; anything new falls back to the browser.
const ART: Record<string, React.ReactNode> = {
  // ---------- Marketing & Visibility ----------
  seo: (
    <>
      <rect className={s.panel} x="30" y="14" width="180" height="26" rx="13" />
      <circle className={s.line} cx="46" cy="27" r="5.5" />
      <path className={s.line} d="M50 31l5 5" />
      <Bar x={62} y={25} w={70} />
      <rect className={s.panel} x="30" y="52" width="180" height="30" rx="6" />
      <circle className={s.accent} cx="44" cy="67" r="3" />
      <Bar x={54} y={60} w={96} bright />
      <Bar x={54} y={70} w={130} />
      <Bar x={40} y={96} w={110} />
      <Bar x={40} y={106} w={150} />
      <Bar x={40} y={122} w={90} />
    </>
  ),
  'local-seo': (
    <>
      <path className={s.street} d="M0 40L240 22M0 104L240 86M60 0L80 140M170 0L186 140" />
      <circle className={s.ring} cx="124" cy="88" r="22" />
      <path className={s.pin} d="M124 82c-11-13-17-21-17-30a17 17 0 0 1 34 0c0 9-6 17-17 30z" />
      <circle className={s.accent} cx="124" cy="52" r="6" />
    </>
  ),
  'google-business-profile': (
    <>
      <rect className={s.panel} x="40" y="16" width="160" height="108" rx="10" />
      <rect className={s.dim} x="52" y="28" width="136" height="38" rx="5" />
      <Bar x={52} y={76} w={84} bright />
      {[0, 1, 2, 3, 4].map((i) => (
        <path
          key={i}
          className={i < 4 ? s.bright : s.dim}
          d={`M${56 + i * 12} 86l2 4 4.5 .5-3.3 3 .9 4.5-4.1-2.3-4.1 2.3.9-4.5-3.3-3 4.5-.5z`}
        />
      ))}
      <Bar x={52} y={106} w={60} />
      <circle className={s.accent} cx="182" cy="108" r="4" />
    </>
  ),
  'google-ads': (
    <>
      <rect className={s.panel} x="26" y="24" width="188" height="56" rx="8" />
      <rect className={s.accentLine} x="38" y="36" width="22" height="13" rx="3" />
      <Bar x={68} y={41} w={90} bright />
      <Bar x={38} y={58} w={150} />
      <Bar x={38} y={68} w={110} />
      <Bar x={38} y={96} w={140} />
      <Bar x={38} y={106} w={100} />
      <path className={s.cursor} d="M168 54l20 34-9-3-5 10-5-2 5-10-9 0z" />
    </>
  ),
  'meta-ads': (
    <>
      <rect className={s.panel} x="66" y="8" width="108" height="124" rx="10" />
      <Avatar x={82} y={24} r={7} />
      <Bar x={94} y={18} w={44} bright />
      <Bar x={94} y={27} w={28} />
      <rect className={s.dim} x="74" y="38" width="92" height="62" rx="4" />
      <path className={s.accent} d="M84 116c-5-4-8-6-8-9a4 4 0 0 1 8-1 4 4 0 0 1 8 1c0 3-3 5-8 9z" />
      <Bar x={98} y={110} w={56} />
    </>
  ),
  'performance-marketing': (
    <>
      <path className={s.grid} d="M30 30H210M30 60H210M30 90H210M30 120H210" />
      <path className={s.line} d="M30 112L70 100L100 104L136 76L166 70L206 30" />
      <path className={s.fill} d="M30 112L70 100L100 104L136 76L166 70L206 30V120H30Z" />
      <circle className={s.accent} cx="206" cy="30" r="5" />
    </>
  ),
  'ai-search-visibility': (
    <>
      <rect className={s.panel} x="96" y="16" width="118" height="30" rx="15" />
      <Bar x={110} y={29} w={80} />
      <rect className={s.panel} x="26" y="58" width="160" height="66" rx="12" />
      <path className={s.accent} d="M40 68l2.4 5.6 5.6 2.4-5.6 2.4L40 84l-2.4-5.6L32 76l5.6-2.4z" />
      <Bar x={56} y={72} w={110} />
      <rect className={s.accentLine} x="54" y="84" width="96" height="14" rx="4" />
      <Bar x={60} y={89} w={70} bright />
      <Bar x={56} y={108} w={80} />
    </>
  ),
  'digital-marketing': (
    <>
      <path className={s.grid} d="M30 124H210" />
      {[40, 58, 50, 76, 70, 98].map((h, i) => (
        <rect
          key={i}
          className={i === 5 ? s.accent : i % 2 ? s.bright : s.dim}
          x={42 + i * 28}
          y={124 - h}
          width="16"
          height={h}
          rx="3"
        />
      ))}
    </>
  ),
  'content-marketing': (
    <>
      <rect className={s.panel} x="58" y="8" width="124" height="124" rx="8" />
      <Bar x={72} y={24} w={70} bright />
      <rect className={s.dim} x="72" y="38" width="96" height="34" rx="4" />
      <Bar x={72} y={82} w={96} />
      <Bar x={72} y={92} w={88} />
      <Bar x={72} y={102} w={96} />
      <Bar x={72} y={112} w={54} />
      <path className={s.accentLine} d="M162 22l8 8" />
    </>
  ),

  // ---------- Social & Personal Brand ----------
  'social-media-management': (
    <>
      <rect className={s.panel} x="34" y="12" width="172" height="118" rx="10" />
      <path className={s.grid} d="M34 34H206" />
      {Array.from({ length: 18 }, (_, i) => (
        <rect
          key={i}
          className={i === 8 ? s.accent : [1, 4, 10, 13, 16].includes(i) ? s.bright : s.dim}
          x={44 + (i % 6) * 26}
          y={44 + Math.floor(i / 6) * 28}
          width="18"
          height="18"
          rx="4"
        />
      ))}
    </>
  ),
  'instagram-marketing': (
    <>
      {Array.from({ length: 6 }, (_, i) => (
        <rect
          key={i}
          className={i === 1 ? s.bright : s.panel}
          x={54 + (i % 3) * 46}
          y={20 + Math.floor(i / 3) * 52}
          width="40"
          height="46"
          rx="5"
        />
      ))}
      <path className={s.accent} d="M150 34v14l12-7z" />
    </>
  ),
  'personal-branding': (
    <>
      <circle className={s.accentLine} cx="78" cy="70" r="34" />
      <Avatar x={78} y={70} r={28} />
      <path className={s.bright} d="M128 46c0-8 4-13 10-15l2 3c-3 2-5 4-5 6h4v8h-11zm18 0c0-8 4-13 10-15l2 3c-3 2-5 4-5 6h4v8h-11z" />
      <Bar x={128} y={68} w={86} bright />
      <Bar x={128} y={80} w={70} />
      <Bar x={128} y={92} w={80} />
    </>
  ),
  'linkedin-branding': (
    <>
      <rect className={s.panel} x="38" y="14" width="164" height="112" rx="10" />
      <rect className={s.dim} x="38" y="14" width="164" height="34" rx="10" />
      <Avatar x={66} y={50} r={16} />
      <Bar x={52} y={78} w={90} bright />
      <Bar x={52} y={89} w={120} />
      <rect className={s.accentLine} x="52" y="102" width="52" height="14" rx="7" />
    </>
  ),

  // ---------- UGC & Creator Marketing ----------
  ugc: (
    <>
      <rect className={s.panel} x="92" y="6" width="64" height="128" rx="12" />
      <Avatar x={124} y={50} r={18} />
      <circle className={s.line} cx="124" cy="96" r="13" />
      <path className={s.accent} d="M120 90v12l10-6z" />
      <rect className={s.panel} x="40" y="30" width="40" height="80" rx="9" />
      <rect className={s.panel} x="168" y="30" width="40" height="80" rx="9" />
    </>
  ),
  'influencer-marketing': (
    <>
      <path className={s.line} d="M120 70L56 34M120 70L184 34M120 70L56 108M120 70L184 108" />
      <Avatar x={56} y={34} r={14} />
      <Avatar x={184} y={34} r={14} />
      <Avatar x={56} y={108} r={14} />
      <Avatar x={184} y={108} r={14} />
      <circle className={s.accent} cx="120" cy="70" r="9" />
    </>
  ),

  // ---------- Brand & Design ----------
  'brand-identity': (
    <>
      <circle className={s.line} cx="120" cy="70" r="56" />
      <circle className={s.line} cx="120" cy="46" r="26" />
      <circle className={s.line} cx="120" cy="94" r="26" />
      <path className={s.grid} d="M50 70H190M120 4V136" />
      <path className={s.bright} d="M100 20H120A26 26 0 0 1 136 66A26 26 0 0 1 120 120H100Z" />
      <circle className={s.accent} cx="120" cy="70" r="3" />
    </>
  ),
  'packaging-design': (
    <>
      <path className={s.panel} d="M120 20L180 46V104L120 130L60 104V46Z" />
      <path className={s.line} d="M60 46L120 72L180 46M120 72V130" />
      <path className={s.dim} d="M120 72L180 46V104L120 130Z" />
      <path className={s.accentLine} d="M88 33L148 59" />
    </>
  ),
  'ui-ux-design': (
    <>
      <rect className={s.panel} x="44" y="14" width="58" height="112" rx="9" />
      <rect className={s.panel} x="138" y="14" width="58" height="112" rx="9" />
      <rect className={s.dim} x="52" y="28" width="42" height="30" rx="4" />
      <Bar x={52} y={66} w={36} bright />
      <Bar x={52} y={76} w={42} />
      <rect className={s.accent} x="52" y="104" width="42" height="12" rx="6" />
      <path className={s.accentLine} d="M100 110C118 110 118 40 140 40" />
      <Bar x={146} y={30} w={36} bright />
      <Bar x={146} y={42} w={42} />
      <rect className={s.dim} x="146" y="56" width="42" height="56" rx="4" />
    </>
  ),
  'pitch-decks': (
    <>
      <rect className={s.panel} x="70" y="10" width="132" height="80" rx="6" />
      <rect className={s.panel} x="54" y="26" width="132" height="80" rx="6" />
      <rect className={s.panel} x="38" y="42" width="132" height="86" rx="6" />
      <Bar x={50} y={56} w={70} bright />
      {[22, 36, 30, 50].map((h, i) => (
        <rect key={i} className={i === 3 ? s.accent : s.dim} x={52 + i * 22} y={116 - h} width="14" height={h} rx="2" />
      ))}
    </>
  ),

  // ---------- Web & AI ----------
  'website-design': (
    <>
      <rect className={s.panel} x="22" y="12" width="196" height="120" rx="8" />
      <path className={s.grid} d="M22 30H218" />
      <circle className={s.dim} cx="34" cy="21" r="3" />
      <circle className={s.dim} cx="44" cy="21" r="3" />
      <Bar x={36} y={46} w={90} bright />
      <Bar x={36} y={56} w={70} bright />
      <rect className={s.accent} x="36" y="70" width="40" height="12" rx="6" />
      <rect className={s.dim} x="140" y="42" width="64" height="44" rx="5" />
      <rect className={s.dim} x="36" y="96" width="52" height="24" rx="4" />
      <rect className={s.dim} x="94" y="96" width="52" height="24" rx="4" />
      <rect className={s.dim} x="152" y="96" width="52" height="24" rx="4" />
    </>
  ),
  'website-development': (
    <>
      <path className={s.accentLine} d="M48 50L28 70L48 90M192 50L212 70L192 90M134 38L106 102" />
      <Bar x={64} y={52} w={30} bright />
      <Bar x={64} y={64} w={20} />
      <Bar x={146} y={74} w={30} />
      <Bar x={146} y={86} w={22} bright />
      <rect className={s.panel} x="60" y="114" width="120" height="16" rx="4" />
      <Bar x={68} y={120} w={60} />
    </>
  ),
  'web-apps': (
    <>
      <rect className={s.panel} x="22" y="12" width="196" height="120" rx="8" />
      <rect className={s.dim} x="22" y="12" width="44" height="120" rx="8" />
      <Bar x={32} y={28} w={24} bright />
      <Bar x={32} y={42} w={20} />
      <Bar x={32} y={54} w={24} />
      <rect className={s.panel} x="76" y="24" width="64" height="38" rx="5" />
      <rect className={s.panel} x="146" y="24" width="62" height="38" rx="5" />
      <Bar x={84} y={34} w={30} />
      <Bar x={84} y={46} w={44} bright />
      <rect className={s.panel} x="76" y="70" width="132" height="52" rx="5" />
      <path className={s.line} d="M84 110L108 98L130 102L156 86L182 90L200 78" />
      <circle className={s.accent} cx="200" cy="78" r="3.5" />
    </>
  ),
  'mobile-apps': (
    <>
      <rect className={s.panel} x="84" y="6" width="72" height="128" rx="14" />
      <rect className={s.dim} x="108" y="12" width="24" height="5" rx="2.5" />
      {Array.from({ length: 9 }, (_, i) => (
        <rect
          key={i}
          className={i === 4 ? s.accent : s.dim}
          x={96 + (i % 3) * 18}
          y={32 + Math.floor(i / 3) * 20}
          width="12"
          height="12"
          rx="3.5"
        />
      ))}
      <rect className={s.dim} x="96" y="110" width="48" height="12" rx="6" />
    </>
  ),
  'ai-chatbots': (
    <>
      <rect className={s.panel} x="30" y="14" width="120" height="28" rx="12" />
      <Bar x={42} y={26} w={84} />
      <rect className={s.bright} x="100" y="52" width="110" height="28" rx="12" />
      <rect className={s.panel} x="30" y="90" width="132" height="28" rx="12" />
      <Bar x={42} y={102} w={60} />
      <circle className={s.accent} cx="118" cy="104" r="2.5" />
      <circle className={s.accent} cx="128" cy="104" r="2.5" />
      <circle className={s.accent} cx="138" cy="104" r="2.5" />
    </>
  ),
  'whatsapp-automation': (
    <>
      <rect className={s.panel} x="18" y="54" width="62" height="32" rx="12" />
      <Bar x={28} y={68} w={40} />
      <path className={s.line} d="M80 70H110M110 70C130 70 130 34 152 34M110 70C130 70 130 106 152 106" />
      <circle className={s.accent} cx="110" cy="70" r="6" />
      <rect className={s.panel} x="152" y="20" width="70" height="28" rx="8" />
      <rect className={s.panel} x="152" y="92" width="70" height="28" rx="8" />
      <Bar x={162} y={32} w={44} bright />
      <Bar x={162} y={104} w={50} />
    </>
  ),
  'marketing-automation': (
    <>
      <path className={s.line} d="M44 70H196" />
      {[44, 96, 148, 196].map((x, i) => (
        <g key={x}>
          <rect className={i === 3 ? s.accentLine : s.panel} x={x - 16} y="54" width="32" height="32" rx="8" />
          <circle className={i === 3 ? s.accent : s.dim} cx={x} cy="70" r="5" />
        </g>
      ))}
      <Bar x={30} y={104} w={44} />
      <Bar x={84} y={104} w={30} />
      <Bar x={134} y={104} w={34} />
      <Bar x={180} y={104} w={34} bright />
    </>
  ),

  // ---------- Content & Production ----------
  photography: (
    <>
      <circle className={s.panel} cx="120" cy="70" r="52" />
      {Array.from({ length: 6 }, (_, i) => (
        <path
          key={i}
          className={s.line}
          d="M120 18L146 70"
          transform={`rotate(${i * 60} 120 70)`}
        />
      ))}
      <circle className={s.line} cx="120" cy="70" r="18" />
      <circle className={s.accent} cx="120" cy="70" r="4" />
    </>
  ),
  'video-production': (
    <>
      <rect className={s.panel} x="34" y="10" width="172" height="84" rx="8" />
      <circle className={s.line} cx="120" cy="52" r="16" />
      <path className={s.bright} d="M115 44v16l13-8z" />
      <rect className={s.dim} x="34" y="106" width="172" height="10" rx="5" />
      <rect className={s.bright} x="34" y="106" width="70" height="10" rx="5" />
      <rect className={s.accent} x="102" y="102" width="3" height="18" rx="1.5" />
      <rect className={s.dim} x="34" y="124" width="110" height="6" rx="3" />
    </>
  ),
  'drone-shoots': (
    <>
      <path className={s.dash} d="M20 124C70 120 80 70 120 70S180 20 224 16" />
      <path className={s.line} d="M98 48L142 92M142 48L98 92" />
      {[
        [98, 48],
        [142, 48],
        [98, 92],
        [142, 92],
      ].map(([x, y]) => (
        <circle key={`${x}${y}`} className={s.panel} cx={x} cy={y} r="14" />
      ))}
      <rect className={s.bright} x="110" y="60" width="20" height="20" rx="5" />
      <circle className={s.accent} cx="120" cy="70" r="3" />
    </>
  ),
};

export default function ServiceGroupArt({ slug, className }: { slug: string; className?: string }) {
  return (
    <svg className={`${s.art} ${className ?? ''}`} viewBox="0 0 240 140" aria-hidden="true">
      {ART[slug] ?? ART['website-design']}
    </svg>
  );
}
