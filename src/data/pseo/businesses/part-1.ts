// Business type profiles, part 1 – beauty, healthcare, fitness, food and fashion retail
import type { BusinessProfile } from '@/types/pseo';
import type { BusinessSlug } from '../slugs';

export const businessesPart1 = {
  salons: {
    name: 'salons',
    title: 'Salons',
    businessNoun: 'salon',
    industry: 'beauty-and-cosmetics',
    customers:
      'women and families booking haircuts, colour, smoothening, hair spas and facials every few weeks, usually with a stylist they trust',
    intro:
      'Most people pick a salon from a short list on Google Maps, then scroll its Instagram for real cuts and colour before they call. Marketing has to get the salon onto that list, prove the stylists’ skill with genuine work and bring each client back when the next appointment is due.',
    challenges: [
      {
        title: 'Clients loyal to one stylist',
        text: 'Regulars book a person, not a brand. When a senior stylist leaves, a share of the appointment book can leave too.',
      },
      {
        title: 'Filtered photos raise doubts',
        text: 'Clients have learnt that salon photos are often filtered or borrowed. Unedited shots of real clients, taken in daylight, are what make a colour or keratin job believable.',
      },
      {
        title: 'Slow weekday afternoons',
        text: 'Saturdays and the weeks before festivals fill on their own, while midweek afternoons sit half-empty. Those chairs need their own offers and their own audience.',
      },
    ],
    searches: [
      'salon near me',
      'hair colour salon near me',
      'keratin treatment price in bangalore',
      'hair smoothening near me',
      'balayage hair colour bangalore',
    ],
    channels: [
      {
        service: 'google-business-profile',
        why: 'A salon’s Google profile should list every service with a starting price – haircut, global colour, highlights, keratin, hair spa – and get fresh photos of finished work each week. Booking clicks and calls from the profile show which services people respond to.',
      },
      {
        service: 'instagram-marketing',
        why: 'Reels of real colour and smoothening jobs, short stylist introductions and a pinned price-list highlight let a new client judge the work before booking. Replying to DMs within the hour turns that interest into appointments.',
      },
      {
        service: 'local-seo',
        why: 'Ranking in Maps for service searches – “hair colour near me”, “keratin treatment near me” – within a few kilometres brings clients who already know what they want. Matching name, address and phone details on Google, JustDial and booking apps helps those rankings hold.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Rebooking reminders timed to each service – a root touch-up, a trim, a keratin refresh – bring regulars back before they drift to another salon. Confirmations the day before cut no-shows on busy weekends.',
      },
      {
        service: 'meta-ads',
        why: 'Instagram and Facebook ads shown to women within a short drive can fill quiet weekdays with a new-client offer or a hair-spa combo. Judge them on cost per booked appointment, not likes.',
      },
      {
        service: 'website-design',
        why: 'A simple site with the full service menu, stylist profiles and an online booking button gives Maps and Instagram visitors a way to book late at night, when the salon phone is off.',
      },
    ],
    faqs: [
      {
        q: 'Is it worth listing on booking apps as well as Google?',
        a: 'Booking apps can bring new clients, but they show competitors alongside you and often charge per booking. Use them for reach, and move repeat clients to direct booking through WhatsApp or your own link.',
      },
      {
        q: 'Can we post photos of clients from the chair?',
        a: 'Yes, with the client’s permission – ask before you shoot and note it in their record. Natural light and an honest angle matter more than editing.',
      },
      {
        q: 'How many Google reviews does a salon need?',
        a: 'There’s no fixed number, and recent reviews count for more than an old pile. A steady few each week that mention the service and the stylist help both rankings and trust.',
      },
    ],
    localAngle:
      'Salon clients rarely travel far for a regular cut or colour, so the salon that appears first in Maps within a few kilometres, with recent photos and reviews, wins most new bookings. Referrals from happy regulars do the rest.',
  },

  'unisex-salons': {
    name: 'unisex salons',
    title: 'Unisex Salons',
    businessNoun: 'unisex salon',
    industry: 'beauty-and-cosmetics',
    customers:
      'men, women and couples who want one place for haircuts, beard grooming, colour and skin care, often booking together or for the whole family',
    intro:
      'A unisex salon has to show up for two different sets of searches – men looking for a fade or a beard trim, and women looking for colour or a facial – and look welcoming to both. Marketing has to speak to each group separately while making the shared space feel comfortable for everyone.',
    challenges: [
      {
        title: 'Two audiences, one brand',
        text: 'Men’s grooming and women’s beauty clients respond to different photos, offers and language. A single generic feed or ad tends to fall flat with both.',
      },
      {
        title: 'Men book late and on impulse',
        text: 'Many men decide on a haircut the same day and pick whoever is open and close. If the salon isn’t visible in Maps at that moment, the walk-in goes to the barber next door.',
      },
      {
        title: 'Comfort in a shared space',
        text: 'Some women hesitate to book waxing or facials where men are being served. Showing private rooms and separate sections in photos answers that before they ask.',
      },
    ],
    searches: [
      'unisex salon near me',
      'mens haircut near me',
      'beard trim and styling near me',
      'unisex salon open now',
      'couple hair spa near me',
    ],
    channels: [
      {
        service: 'local-seo',
        why: 'A unisex salon needs to rank for both halves of its menu – “men’s salon near me” and “ladies salon near me” – so separate service pages for men’s grooming and women’s services matter. Tracking which searches bring calls shows which side needs more work.',
      },
      {
        service: 'google-business-profile',
        why: 'Primary and secondary categories that cover both hair salon and barber searches, photos of each section and men’s and women’s services listed separately help the profile appear for more searches. Keep evening and Sunday hours accurate, since that’s when many men walk in.',
      },
      {
        service: 'google-ads',
        why: 'Separate search campaigns for men’s grooming and women’s services, scheduled for weekday evenings and weekends, catch same-day decisions. Call extensions and a short radius keep spend on people who can actually walk in.',
      },
      {
        service: 'instagram-marketing',
        why: 'Two content tracks on one account – fades, beard shaping and grooming tips alongside colour, styling and skin treatments – with story highlights so each audience finds its own menu. Couple and family appointments make good shared content.',
      },
      {
        service: 'meta-ads',
        why: 'Ads split by audience – a grooming package for men, a colour or facial offer for women, a couples’ package before Valentine’s Day – work better than one ad for everyone. Comparing cost per booking for each audience shows where the budget should go.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Men often need a cut every few weeks, and a reminder with a one-tap booking link brings them back before they walk in elsewhere. Family and couple memberships can be tracked and renewed over WhatsApp too.',
      },
    ],
    faqs: [
      {
        q: 'Should we run separate Instagram accounts for men and women?',
        a: 'Usually one account is easier to grow and keeps the brand together. Organise it with highlights and alternating posts for each audience, and use separate ads when you want to reach one group.',
      },
      {
        q: 'How do we attract more women to a salon known for men’s cuts?',
        a: 'Show the women’s side clearly – the stylists, the private rooms, real colour and skin work – on Google and Instagram. A first-visit offer on one specific women’s service gives people a low-risk reason to try it.',
      },
      {
        q: 'Are memberships worth promoting?',
        a: 'They can be, if regulars visit often enough to see the value. Offer them to existing clients on WhatsApp first, since they already know the salon, and track how many renew.',
      },
    ],
    localAngle:
      'A unisex salon wins by being the convenient answer for a whole household within a short drive – the place a couple or family can book together. Maps visibility for both men’s and women’s searches, and reviews from both groups, make that clear.',
  },

  'beauty-parlours': {
    name: 'beauty parlours',
    title: 'Beauty Parlours',
    businessNoun: 'beauty parlour',
    industry: 'beauty-and-cosmetics',
    customers:
      'women in the neighbourhood who come in for threading, waxing, facials, mehendi and party or bridal makeup, and who compare prices closely',
    intro:
      'Women usually choose a beauty parlour within walking distance or a short auto ride, on a neighbour’s word or a quick Maps search with prices in mind. Marketing has to make the parlour easy to find nearby, show clear prices and hygiene, and keep regulars coming back every few weeks for threading and waxing.',
    challenges: [
      {
        title: 'Price-sensitive regulars',
        text: 'Threading and waxing are low-ticket services where a small price difference can move a client. The parlour has to show value – hygiene, skill, packages – rather than keep cutting prices.',
      },
      {
        title: 'Competition from at-home services',
        text: 'Apps that send beauticians home, such as Urban Company, compete for the same waxing and facial bookings. A parlour has to sell what a home visit can’t – a proper setup, quick walk-ins and a beautician the client knows.',
      },
      {
        title: 'Bridal packages need proof',
        text: 'Bridal and pre-bridal packages bring the biggest bills, but brides compare portfolios closely. Without photos of real brides, the parlour struggles to move beyond everyday services.',
      },
    ],
    searches: [
      'beauty parlour near me',
      'threading near me',
      'full body waxing price',
      'facial near me for women',
      'bridal makeup package price in bangalore',
    ],
    channels: [
      {
        service: 'google-business-profile',
        why: 'Listing every service with its price – eyebrow threading, rica waxing, cleanup, facial, mehendi – lets the profile answer the first question before the call. Photos of a clean, well-lit parlour and reviews that mention hygiene tip the choice between two nearby options.',
      },
      {
        service: 'local-seo',
        why: 'Ranking in Maps for “beauty parlour near me” and service searches like threading or waxing within one to three kilometres matters far more than city-wide visibility. Keeping the same name, number and timings on Google and JustDial helps the parlour hold that position.',
      },
      {
        service: 'whatsapp-automation',
        why: 'A broadcast list of regulars, monthly threading and waxing reminders, and festival packages sent a couple of weeks before Diwali, Varamahalakshmi or Eid bring repeat visits without paying for ads.',
      },
      {
        service: 'instagram-marketing',
        why: 'Short reels of party makeup, mehendi designs and pre-bridal packages, plus a price-list highlight, give the parlour a portfolio local women can forward to friends. Location tags on every post help nearby followers find it.',
      },
      {
        service: 'meta-ads',
        why: 'Small Facebook and Instagram budgets aimed within a couple of kilometres can promote a facial package or pre-bridal offer before the festival and wedding season. Count WhatsApp enquiries and walk-ins who mention the ad.',
      },
    ],
    faqs: [
      {
        q: 'Is it worth spending on ads for a small parlour?',
        a: 'Small, tightly targeted ads before festivals and the wedding season can pay their way. A complete Google profile and a WhatsApp list of regulars usually come first, though – both cost little and work every month.',
      },
      {
        q: 'How do we compete with beauticians who come home?',
        a: 'Make walk-ins easy, show the parlour’s setup and hygiene, and offer quick services like threading without a booking. Regulars who know and trust their beautician tend to stay.',
      },
      {
        q: 'How should we show bridal package prices online?',
        a: 'Show a starting price and what the package includes – trial, makeup, hairstyle, draping – and invite brides to WhatsApp for a quote. It filters out enquiries that don’t fit your range.',
      },
    ],
    localAngle:
      'A parlour’s clients mostly live within a few streets, so recommendations in apartment WhatsApp groups, a Maps listing that shows up first nearby and reviews from regulars matter far more than reach.',
  },

  spas: {
    name: 'spas',
    title: 'Spas',
    businessNoun: 'spa',
    industry: 'wellness-and-ayurveda',
    customers:
      'working professionals, couples and visitors looking for massages and body treatments to relax or ease aches, in a clean, licensed and professional setting',
    intro:
      'People choose a spa on reputation as much as treatments – they read reviews closely, check photos of the rooms and look for signs that it’s licensed and professional. Marketing has to present calm, clean, clearly therapeutic services and make booking easy, within the stricter rules ad platforms apply to massage advertising.',
    challenges: [
      {
        title: 'Massage ads get extra scrutiny',
        text: 'Google and Meta review massage-related ads closely because the category is open to misuse. Copy, images and landing pages have to be plainly therapeutic or ads get rejected.',
      },
      {
        title: 'Standing apart from unlicensed outlets',
        text: 'Reports of illegal outlets operating as spas make customers wary of any spa they don’t know. A legitimate spa needs to show its licence, house rules and trained therapists openly.',
      },
      {
        title: 'Reviews that can turn quickly',
        text: 'A single review about hygiene or an awkward experience can put off new customers for months. Spas need a steady flow of genuine reviews and calm, prompt replies to each one.',
      },
    ],
    searches: [
      'spa near me',
      'full body massage near me',
      'couple spa in bangalore',
      'deep tissue massage near me',
      'ayurvedic massage near me',
    ],
    channels: [
      {
        service: 'google-business-profile',
        why: 'The profile should carry a full treatment menu with durations and prices, photos of the rooms, showers and reception, and accurate timings. Replying to every review – and reporting fake or abusive ones – protects the reputation customers check first.',
      },
      {
        service: 'website-design',
        why: 'A spa website with a clear treatment menu, therapist training details, the trade licence, house rules and online booking or gift vouchers reassures first-time customers. It also gives Google and Meta a clean landing page, which helps ads get approved.',
      },
      {
        service: 'local-seo',
        why: 'Separate pages for Swedish, deep tissue, Balinese and Ayurvedic treatments help the spa rank for specific searches nearby rather than only its own name. Treatment names in reviews and Google posts reinforce the same signals.',
      },
      {
        service: 'google-ads',
        why: 'Search campaigns built around treatment names, with plainly therapeutic copy and a long negative keyword list, reach people ready to book and filter out unwanted searches. Track bookings and calls, not clicks.',
      },
      {
        service: 'instagram-marketing',
        why: 'Quiet reels of the rooms, oils and rituals, therapist introductions and couples’ or gift-voucher offers set the expectation of a calm, professional visit. Simple, clearly therapeutic imagery also keeps the account in good standing.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Booking confirmations with arrival instructions, gift-voucher delivery, membership balances and birthday offers on WhatsApp keep regulars returning and make the spa easy to recommend.',
      },
    ],
    faqs: [
      {
        q: 'Why do our massage ads keep getting rejected?',
        a: 'Platforms review massage ads strictly, so any word, image or landing page that could be read as suggestive triggers a rejection. Treatment names, therapeutic language and a clear, professional website usually solve it.',
      },
      {
        q: 'Should we show our licence online?',
        a: 'Yes. Showing the trade licence, therapist training and house rules on the website and Google profile reassures customers who are wary of unlicensed outlets, and sets clear expectations about what the spa offers.',
      },
      {
        q: 'Do gift vouchers help a spa grow?',
        a: 'They bring in people who might not have booked on their own, especially around festivals, birthdays and Valentine’s Day. Selling them online and delivering them on WhatsApp makes them easy to buy.',
      },
    ],
    localAngle:
      'Spa customers usually look within a short drive of home, office or hotel and trust what nearby reviewers say. A well-reviewed Maps listing with real photos and a visible licence makes the spa the safe choice in its area.',
  },

  'bridal-makeup-artists': {
    name: 'bridal makeup artists',
    title: 'Bridal Makeup Artists',
    businessNoun: 'bridal makeup artist',
    industry: 'beauty-and-cosmetics',
    customers:
      'brides and their families planning makeup for the wedding, reception, engagement and pre-wedding functions, often booking months ahead',
    intro:
      'Brides shortlist makeup artists from Instagram, WedMeGood and friends’ weddings, then compare portfolios, packages and availability for their dates. Marketing has to show real brides with the look and skin tone a bride relates to, and answer date and price enquiries before another artist does.',
    challenges: [
      {
        title: 'Popular dates book out first',
        text: 'Auspicious muhurtham dates fill early, while other dates in the season stay open. Marketing has to fill the quieter dates and pre-wedding functions, not just the dates everyone wants.',
      },
      {
        title: 'Portfolios that look the same',
        text: 'Many artists post similar, heavily edited bride photos. Brides want unfiltered close-ups, different skin tones and the regional look they’re planning – Kannadiga, Tamil, Telugu, Malayali, Muslim, Christian or North Indian.',
      },
      {
        title: 'Enquiries lost in DMs',
        text: 'Most enquiries arrive as Instagram DMs asking for price and dates. Slow or vague replies send brides to the next artist on their shortlist.',
      },
    ],
    searches: [
      'bridal makeup artist in bangalore',
      'hd bridal makeup price',
      'airbrush bridal makeup near me',
      'south indian bridal makeup artist',
      'engagement makeup artist near me',
    ],
    channels: [
      {
        service: 'instagram-marketing',
        why: 'Instagram is the bridal artist’s portfolio and enquiry desk. Bride-reveal reels, close-ups in natural light and highlights sorted by look – South Indian, North Indian, reception, engagement – plus quick DM replies with a package sheet turn followers into bookings.',
      },
      {
        service: 'personal-branding',
        why: 'Brides book the artist, not a studio name. Behind-the-scenes content, skin-prep tips and the artist’s own story build the familiarity that justifies a premium package.',
      },
      {
        service: 'google-business-profile',
        why: 'A profile listing bridal and party makeup, with photos of real brides and their reviews, catches brides who search on Google instead of Instagram – often a sister or mother booking on the bride’s behalf.',
      },
      {
        service: 'seo',
        why: 'Portfolio pages for each look and occasion – Kannadiga bridal, Christian bridal, HD versus airbrush – rank for the specific searches brides make months before the wedding. A packages page with clear inclusions cuts the back-and-forth.',
      },
      {
        service: 'meta-ads',
        why: 'Ads aimed at women in the city who are interested in weddings, run a few months before the season, promote trial bookings and early-booking packages. Measure enquiries and trials booked rather than reach.',
      },
      {
        service: 'whatsapp-automation',
        why: 'An instant reply with packages, a date-availability check, trial booking, advance payment reminders and a day-before checklist keep each bride organised and cut last-minute confusion.',
      },
    ],
    faqs: [
      {
        q: 'Should a makeup artist post prices publicly?',
        a: 'A starting price for bridal and party packages, with what each includes, filters out enquiries that won’t fit. Final quotes depend on the date, travel and the number of people, so many artists share them on WhatsApp.',
      },
      {
        q: 'Is WedMeGood or Instagram more useful?',
        a: 'Both play a part. Wedding directories bring brides who are actively comparing vendors, while Instagram shows the depth of your work and handles most enquiries, so keep photos and reviews current on both.',
      },
      {
        q: 'How early should we promote for the wedding season?',
        a: 'Brides often book their artist months before the wedding, so promotion should start well ahead of the busiest months. Trials and early-booking packages give them a reason to commit early.',
      },
    ],
    localAngle:
      'Bridal artists travel to the venue, so their reach is city-wide, but most bookings still come through past brides, photographers and venues. Reviews from real brides and tags in wedding photographers’ posts are what spread the name.',
  },

  'hair-transplant-clinics': {
    name: 'hair transplant clinics',
    title: 'Hair Transplant Clinics',
    businessNoun: 'hair transplant clinic',
    industry: 'clinics-and-doctors',
    customers:
      'men, and some women, with hair loss who research for months before choosing a surgeon for an FUE, FUT or beard transplant',
    intro:
      'Hair transplant patients research for weeks or months – watching YouTube, reading forums, comparing cost per graft and asking who actually performs the surgery – before they book a consultation. Marketing has to answer those questions honestly, put the surgeon’s qualifications up front and stay clear of result promises and misleading before-and-after claims.',
    challenges: [
      {
        title: 'Price-per-graft comparisons',
        text: 'Patients compare clinics on cost per graft and get very different quotes. Unless the clinic explains what affects the price – technique, graft count, who does the extraction – it gets judged on the number alone.',
      },
      {
        title: 'Trust in who operates',
        text: 'Patients have heard of procedures done largely by technicians. Clinics need to show clearly which qualified doctor performs or leads each surgery.',
      },
      {
        title: 'Result claims and photo rules',
        text: 'Results take months and vary from person to person, and ad platforms restrict before-and-after imagery. Marketing has to set realistic expectations rather than promise density.',
      },
    ],
    searches: [
      'hair transplant cost in bangalore',
      'fue hair transplant near me',
      'cost per graft hair transplant',
      'beard transplant cost',
      'hair transplant clinic near me',
    ],
    channels: [
      {
        service: 'google-ads',
        why: 'Search campaigns on cost, technique and beard transplant searches, sent to landing pages that explain graft counts and consultation steps, reach men close to deciding. Judge them on consultations booked and attended, and keep the copy free of guaranteed results.',
      },
      {
        service: 'seo',
        why: 'In-depth pages on FUE versus FUT, how graft counts are estimated, recovery week by week and what drives the cost rank for the questions patients research for months. Pages written or reviewed by the surgeon carry more weight with Google on health topics.',
      },
      {
        service: 'video-production',
        why: 'Videos of the surgeon explaining the procedure, a tour of the operation theatre and an honest recovery timeline answer the doubts patients take to YouTube. They can be reused in ads and sent on WhatsApp after an enquiry.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Many men first send scalp photos on WhatsApp to ask how many grafts they need. A flow that collects the photos, shares a pre-consultation guide and books the visit keeps those enquiries from going cold.',
      },
      {
        service: 'meta-ads',
        why: 'Educational video ads on Instagram and Facebook reach men in the city who are thinking about hair loss but aren’t searching yet. Follow Meta’s health ad rules closely – no before-and-after imagery and nothing that suggests a guaranteed outcome.',
      },
      {
        service: 'google-business-profile',
        why: 'Patients check Google reviews and clinic photos before travelling for a consultation, sometimes from other cities. A profile with the surgeon’s name, photos of the theatre and replies to every review supports everything else.',
      },
    ],
    faqs: [
      {
        q: 'Can we show patient results in our marketing?',
        a: 'Organic posts can share results with the patient’s written consent, if they’re genuine, unedited and don’t imply everyone gets the same outcome. Ad platforms restrict before-and-after images, so ads usually focus on the process and the surgeon instead.',
      },
      {
        q: 'Should we publish our cost per graft?',
        a: 'A price range with an explanation of what changes it – technique, graft count, the area to cover – builds trust and filters enquiries. A single headline number invites comparisons with clinics that may not be like for like.',
      },
      {
        q: 'Why do so many enquiries never come in for a consultation?',
        a: 'Hair transplant decisions take time, and many enquiries are early research. Following up with useful information – a recovery guide, a video from the surgeon, an easy way to book – keeps the clinic in mind until they’re ready.',
      },
    ],
    localAngle:
      'Patients will cross the city for the right surgeon, but they still check how far the clinic is for follow-up visits. Reviews from local patients and a clear Maps listing make the clinic feel reachable and real.',
  },

  'dental-clinics': {
    name: 'dental clinics',
    title: 'Dental Clinics',
    businessNoun: 'dental clinic',
    industry: 'clinics-and-doctors',
    customers:
      'families, working professionals and children needing check-ups, fillings, root canals and emergency care, plus adults considering implants, aligners or smile treatments',
    intro:
      'Someone with toothache searches “dentist near me”, checks the nearest clinics’ reviews and books whoever can see them today, while implant and aligner patients compare clinics for weeks. Marketing has to win both – quick visibility nearby for urgent cases and patient, well-explained information for planned treatments – within the Dental Council of India’s limits on advertising.',
    challenges: [
      {
        title: 'Emergency searches decided in minutes',
        text: 'A patient in pain calls the first clinic that looks open and close. If timings, phone numbers or emergency availability are wrong on Google, the call goes elsewhere.',
      },
      {
        title: 'Explaining treatment costs',
        text: 'Patients ask what a root canal, crown or implant costs and hear very different answers. Without explaining what goes into the price, a clinic looks either expensive or suspiciously cheap.',
      },
      {
        title: 'Treatments that need several visits',
        text: 'Root canals, braces and implants take multiple appointments. Missed follow-ups set treatment back and often turn into poor reviews.',
      },
    ],
    searches: [
      'dentist near me open now',
      'root canal treatment cost in bangalore',
      'dental implants cost',
      'clear aligners price',
      'kids dentist near me',
    ],
    channels: [
      {
        service: 'google-business-profile',
        why: 'Accurate hours, an emergency number, photos of the chairs and sterilisation area, a list of treatments and a steady flow of reviews decide whether a patient in pain calls your clinic or the one down the road. Calls from the profile are the number to watch each month.',
      },
      {
        service: 'local-seo',
        why: 'Ranking in the Maps pack for “dentist near me”, “root canal near me” and “kids dentist” within a few kilometres brings both urgent and routine patients. Consistent details on Google, Practo and JustDial help the ranking hold.',
      },
      {
        service: 'google-ads',
        why: 'Search ads for implants, aligners and full-mouth treatment – the cases worth most – should land on treatment pages with consultation booking. Keep copy factual about the treatment, the dentist and the location, and measure cost per consultation booked.',
      },
      {
        service: 'seo',
        why: 'Treatment pages that explain root canals, implant options, aligners versus braces and what affects each cost rank for the questions patients search before booking. They also save chair time spent answering the same questions.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Reminders for the next sitting of a root canal, braces adjustments and six-monthly check-ups keep treatment plans on track. A short message after each visit with the review link brings in reviews steadily.',
      },
      {
        service: 'social-media-management',
        why: 'Instagram and Facebook posts on oral care, a child’s first dental visit and how treatments work keep the clinic familiar to families nearby. Patient smiles can be shared with written consent, without promising results.',
      },
    ],
    faqs: [
      {
        q: 'Can dentists advertise in India?',
        a: 'Dental Council of India ethics rules restrict dentists from soliciting patients, so marketing should inform rather than sell – accurate listings, clear treatment information, clinic photos and genuine reviews. Avoid superlatives, sales-style offers and promised results.',
      },
      {
        q: 'Should we show treatment prices online?',
        a: 'Starting prices or ranges for common treatments build trust, with a note that the final cost depends on the examination. Patients are more likely to book when they know roughly what to expect.',
      },
      {
        q: 'How do we get more reviews without being pushy?',
        a: 'Ask at the end of a comfortable visit, then send the review link on WhatsApp the same evening while it’s fresh. Don’t offer free cleanings or discounts in return – Google treats that as an incentivised review.',
      },
    ],
    localAngle:
      'Most dental patients choose a clinic close to home or work, especially for treatments that need several sittings. Ranking first in Maps nearby, with recent reviews from local families, makes the clinic the default choice in its area.',
  },

  dermatologists: {
    name: 'dermatologists',
    title: 'Dermatologists',
    businessNoun: 'dermatologist',
    industry: 'clinics-and-doctors',
    customers:
      'teenagers and adults with acne, eczema, psoriasis, fungal infections, hair fall and other skin conditions who want a qualified doctor’s diagnosis',
    intro:
      'Patients with a persistent skin problem often try home remedies and over-the-counter creams first, then search for a skin specialist and check qualifications, reviews and timings. Marketing has to make the dermatologist findable for specific conditions and build trust through clear medical information, within NMC rules on doctors’ self-promotion.',
    challenges: [
      {
        title: 'Competing with cosmetic clinics',
        text: 'Aesthetic clinic chains advertise heavily on “skin clinic” searches. A dermatologist has to stand out on medical expertise – diagnosis, qualifications and care for chronic conditions.',
      },
      {
        title: 'Misinformation and self-medication',
        text: 'Patients often arrive after using steroid creams without advice, following social-media skincare trends or trying home remedies. Content has to correct myths gently without sounding preachy.',
      },
      {
        title: 'Strict limits on claims',
        text: 'NMC rules restrict doctors’ self-promotion, and the Drugs and Magic Remedies Act bans ads claiming to cure the conditions it lists. Marketing for psoriasis or vitiligo can explain care and set expectations, never promise a cure.',
      },
    ],
    searches: [
      'dermatologist near me',
      'skin specialist near me',
      'acne treatment doctor in bangalore',
      'psoriasis specialist near me',
      'fungal infection skin doctor',
    ],
    channels: [
      {
        service: 'seo',
        why: 'Condition pages on acne, eczema, psoriasis, fungal infections and hair fall, written or reviewed by the dermatologist, rank for the symptom searches patients make before booking. Google gives more weight to health content with clear medical authorship.',
      },
      {
        service: 'google-business-profile',
        why: 'Showing the doctor’s qualifications, the conditions treated and consultation timings, and replying to reviews, helps patients choose a medical dermatologist over a beauty clinic. Calls and bookings from the profile show whether it’s working.',
      },
      {
        service: 'local-seo',
        why: 'Ranking in Maps for “dermatologist near me” and “skin specialist near me” within a few kilometres, with matching details on Practo and JustDial, brings patients with an active problem who want an appointment soon.',
      },
      {
        service: 'personal-branding',
        why: 'Short, doctor-led videos on why steroid creams need a prescription, how to read a sunscreen label or when hair fall needs a check-up build trust and stay within professional rules. Patients often book a doctor they’ve already been learning from.',
      },
      {
        service: 'google-ads',
        why: 'Search ads on condition-plus-doctor searches – “eczema doctor”, “acne specialist” – sent to the matching condition page reach patients ready to book. Copy should describe the consultation and the doctor’s expertise, never a cure.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Chronic conditions such as psoriasis and eczema are reviewed over months, so follow-up reminders matter. Appointment confirmations and review-due nudges keep patients on track with their treatment.',
      },
    ],
    faqs: [
      {
        q: 'How do we compete with aesthetic clinic chains?',
        a: 'Don’t try to match their ad budgets on cosmetic searches. Focus on conditions that need a doctor – acne, eczema, psoriasis, infections, hair and nail disorders – and make your qualifications and experience clear wherever patients look.',
      },
      {
        q: 'What can a dermatologist post on Instagram?',
        a: 'Patient education is the safest and most useful content – explaining conditions, correcting skincare myths and advising when to see a doctor. Avoid testimonials that promise results, discounts and anything that reads like an advertisement.',
      },
      {
        q: 'Should we also promote cosmetic procedures?',
        a: 'If you offer them, give them a separate section so they don’t crowd out your medical work. Make it clear they’re done or supervised by a qualified dermatologist, and keep result claims realistic.',
      },
    ],
    localAngle:
      'Skin patients want a dermatologist they can revisit easily for follow-ups. A strong Maps presence nearby, accurate timings and reviews that mention diagnosis and care make the practice the trusted local option.',
  },

  'skin-and-hair-clinics': {
    name: 'skin and hair clinics',
    title: 'Skin & Hair Clinics',
    businessNoun: 'skin and hair clinic',
    industry: 'clinics-and-doctors',
    customers:
      'young professionals and adults paying for laser hair reduction, chemical peels, medi-facials, pigmentation care and hair fall programmes, often in multi-session packages',
    intro:
      'Aesthetic treatments are planned purchases – people see a laser or peel on Instagram, compare package prices and sessions across a few clinics, and book a consultation when the offer and the reviews feel right. Marketing has to explain what each treatment involves, how many sessions it usually takes and who performs it, without promising a result.',
    challenges: [
      {
        title: 'Package price wars',
        text: 'Laser and facial packages are easy to compare and easy to discount. Clinics that compete only on price attract clients who leave for the next offer.',
      },
      {
        title: 'Setting expectations on sessions',
        text: 'Laser hair reduction, peels and hair fall programmes need several sessions, and results vary. Unclear expectations at the start show up later as unhappy reviews.',
      },
      {
        title: 'Platform rules on aesthetics ads',
        text: 'Meta restricts before-and-after images in ads, and both Meta and Google review appearance claims closely. Creative has to sell the treatment experience and the clinic’s expertise instead.',
      },
    ],
    searches: [
      'laser hair removal cost in bangalore',
      'skin clinic near me',
      'chemical peel for pigmentation',
      'prp hair treatment cost',
      'hydrafacial near me',
    ],
    channels: [
      {
        service: 'meta-ads',
        why: 'Instagram and Facebook are where people first consider laser hair reduction, peels or a hair fall programme. Ads that show the treatment room, explain sessions in plain language and lead to a consultation form – judged on consultations booked – work within the platforms’ rules.',
      },
      {
        service: 'google-ads',
        why: 'Search campaigns for treatment and cost searches – laser hair removal, PRP, chemical peels – sent to a page per treatment with session details and a “from” price catch people who have already decided to try it.',
      },
      {
        service: 'instagram-marketing',
        why: 'Reels of a session in progress, the doctor explaining a laser or a peel, and answers to common questions in stories make the clinic feel safe and professional. Prompt DM replies with package details close the loop.',
      },
      {
        service: 'google-business-profile',
        why: 'Listing each treatment with a starting price, photos of the treatment rooms and machines, and the doctors’ qualifications helps the clinic stand apart from salons offering similar-sounding services.',
      },
      {
        service: 'local-seo',
        why: 'Packages mean repeat visits over months, so few clients want to cross the city each time. Ranking for “skin clinic near me” and treatment searches nearby puts the clinic on the shortlist of people who live and work close by.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Session reminders spaced to each treatment plan, package balance updates and aftercare instructions on WhatsApp help clients complete their sessions – which is where reviews and referrals come from.',
      },
    ],
    faqs: [
      {
        q: 'Can we run offers on laser and facial packages?',
        a: 'Offers can work, but compete on clarity – sessions included, who performs them, aftercare – rather than the lowest price. Clients won by a deep discount often leave for the next one.',
      },
      {
        q: 'Are before-and-after photos allowed?',
        a: 'Organic posts can use genuine, unedited photos with the client’s written consent and a note that results vary. Meta restricts them in ads, so ads usually show the process and the clinic instead.',
      },
      {
        q: 'How is our marketing different from a dermatologist’s?',
        a: 'A dermatologist’s marketing centres on diagnosing and managing conditions, while a skin and hair clinic sells planned aesthetic treatments and packages. If your clinic is led by a dermatologist, saying so clearly adds trust to the aesthetic side.',
      },
    ],
    localAngle:
      'Because treatment packages mean repeat visits over several months, clients pick a clinic that’s easy to reach. Strong Maps visibility nearby and reviews that mention specific treatments decide the shortlist.',
  },

  'eye-hospitals': {
    name: 'eye hospitals',
    title: 'Eye Hospitals',
    businessNoun: 'eye hospital',
    industry: 'healthcare-and-hospitals',
    customers:
      'older adults needing cataract surgery and the grown-up children who research for them, young adults considering LASIK, parents of children with vision problems and people with diabetes needing retina check-ups',
    intro:
      'Eye hospital patients arrive through very different searches – adult children researching cataract surgery and insurance cover for a parent, and young professionals comparing LASIK and SMILE for themselves. Marketing has to serve both with clear procedure information, cost and insurance details, and quick appointment booking for check-ups and eye emergencies.',
    challenges: [
      {
        title: 'The patient isn’t the searcher',
        text: 'For cataract and retina care, the decision is often made by a son or daughter researching online, sometimes from another city. Content and ads have to speak to them as well as the patient.',
      },
      {
        title: 'Confusing lens and procedure choices',
        text: 'Monofocal, multifocal and toric lenses, or LASIK, SMILE and ICL, mean little to most patients. Without plain explanations, people choose on price alone or put the decision off.',
      },
      {
        title: 'Competing with eye-care chains',
        text: 'Large eye-care chains advertise across the city. An independent eye hospital has to win on its surgeons, its catchment and specific services.',
      },
    ],
    searches: [
      'eye hospital near me',
      'cataract surgery cost in bangalore',
      'lasik surgery cost',
      'smile eye surgery bangalore',
      'child eye specialist near me',
    ],
    channels: [
      {
        service: 'google-ads',
        why: 'Separate campaigns for cataract surgery, LASIK and SMILE, and eye emergencies, each with its own landing page and call tracking, reach the different people behind each search. Judge them on consultations and eligibility tests booked, within Google’s healthcare policies.',
      },
      {
        service: 'seo',
        why: 'Plain-language pages on cataract lens options, LASIK versus SMILE versus ICL, eligibility, recovery and insurance cover rank for the long research that comes before eye surgery. Pages reviewed by the hospital’s surgeons carry the medical credibility Google looks for.',
      },
      {
        service: 'local-seo',
        why: 'Ranking in Maps for “eye hospital near me”, “eye doctor near me” and children’s eye care across each branch’s catchment brings in the routine check-ups and emergencies that lead to longer-term care.',
      },
      {
        service: 'google-business-profile',
        why: 'A profile for each branch with OPD timings, an emergency contact, insurance information, photos and replies to reviews helps families compare quickly. Older patients’ families often call straight from the profile.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Post-surgery eye-drop schedules, follow-up visit reminders and yearly retina check-up reminders for diabetic patients keep care on track and reduce missed reviews.',
      },
      {
        service: 'meta-ads',
        why: 'Facebook and Instagram ads about cataract check-ups and LASIK eligibility tests reach adult children and young professionals around the hospital. Keep claims to the procedure, the surgeons and the technology, with no promises about vision outcomes.',
      },
    ],
    faqs: [
      {
        q: 'Should we show cataract surgery prices?',
        a: 'A starting price with what changes it – the lens type, the surgical technique and insurance cover – helps families plan and filters enquiries. The final estimate after the eye examination can be explained at the consultation.',
      },
      {
        q: 'How do we reach the children of elderly patients?',
        a: 'Search ads and clear website pages reach them while they research, and WhatsApp makes it easy to share reports and estimates with family in other cities. Make insurance and cashless information easy to find.',
      },
      {
        q: 'Can we promote LASIK as freedom from glasses?',
        a: 'Be careful – results depend on each patient’s eyes, and not everyone is eligible. Promote the eligibility test and explain the procedure honestly rather than promising a specific outcome.',
      },
    ],
    localAngle:
      'Eye patients come back for follow-ups, children’s check-ups and long-term retina care, so being close and easy to find matters. Branch-level Maps listings and reviews from local families win the routine visits that lead to surgery decisions.',
  },

  'physiotherapy-clinics': {
    name: 'physiotherapy clinics',
    title: 'Physiotherapy Clinics',
    businessNoun: 'physiotherapy clinic',
    industry: 'clinics-and-doctors',
    customers:
      'desk workers with back and neck pain, people recovering from surgery or fractures, runners and players with sports injuries, and older adults with joint pain who need several sessions a week',
    intro:
      'Physiotherapy patients are often referred by an orthopaedic doctor or start searching after weeks of back or neck pain, then pick a clinic they can reach several times a week. Marketing has to make the clinic easy to find nearby, explain which conditions it treats and how many sessions to expect, and keep patients coming until the plan is complete.',
    challenges: [
      {
        title: 'Patients who stop mid-plan',
        text: 'Many patients feel better after a few sessions and stop before the plan is finished. That hurts their recovery and the clinic’s revenue.',
      },
      {
        title: 'Home visit competition',
        text: 'Home physiotherapy services and apps compete for post-surgery and elderly patients. A clinic has to show what its equipment and supervision add.',
      },
      {
        title: 'Dependence on doctor referrals',
        text: 'Referrals from orthopaedic surgeons are valuable but uneven. Without its own search presence, the clinic’s patient flow rises and falls with a few doctors.',
      },
    ],
    searches: [
      'physiotherapy near me',
      'physiotherapist home visit bangalore',
      'back pain physiotherapy near me',
      'sports injury physio near me',
      'physiotherapy after knee replacement',
    ],
    channels: [
      {
        service: 'local-seo',
        why: 'Treatment means several visits a week, so being in the Maps pack within a few kilometres for “physiotherapy near me” and condition searches like back pain or frozen shoulder matters most. Listing each condition – sciatica, ACL rehab, frozen shoulder – as a service helps Google match those searches.',
      },
      {
        service: 'google-business-profile',
        why: 'A profile that lists conditions treated, therapist qualifications, home-visit options and early-morning or evening slots, with photos of the treatment area and equipment, helps working patients pick a clinic that fits their day.',
      },
      {
        service: 'google-ads',
        why: 'Search ads for post-surgery rehab, home visits and sports injury physiotherapy reach patients with an urgent, specific need. Track calls and first sessions booked, and pause keywords that bring only general exercise queries.',
      },
      {
        service: 'content-marketing',
        why: 'Short guides on desk posture, safe exercises after knee surgery and when back pain needs a professional answer the questions patients search and can be sent after a session. They also give referring doctors something useful to pass on.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Session reminders, home exercise videos between visits and a message when someone misses a session help more patients finish their plan. Package balances can be shared the same way.',
      },
      {
        service: 'instagram-marketing',
        why: 'Exercise demonstrations, desk-stretch routines and sports rehab clips build familiarity with the therapists before the first visit. They work especially well for younger patients with sports injuries or posture problems.',
      },
    ],
    faqs: [
      {
        q: 'Should a physiotherapy clinic offer home visits?',
        a: 'If you can staff them reliably, home visits reach post-surgery and elderly patients who can’t travel. Market them separately from clinic sessions, with the areas covered and pricing made clear.',
      },
      {
        q: 'How do we get more referrals from doctors?',
        a: 'Share progress updates with referring doctors, with the patient’s consent, and give them useful material to pass on. A strong Google presence also means patients who hear your name from their doctor can find you easily.',
      },
      {
        q: 'How can we stop patients dropping out of their plan?',
        a: 'Explain the plan and the expected number of sessions at the start, send reminders and check in when someone misses a visit. Patients who understand why the later sessions matter are more likely to complete them.',
      },
    ],
    localAngle:
      'Because treatment means several visits a week, patients rarely travel far for physiotherapy. A clinic wins its area with a strong Maps listing, convenient slots for office-goers and good relationships with nearby orthopaedic doctors.',
  },

  'multispeciality-hospitals': {
    name: 'multispeciality hospitals',
    title: 'Multispeciality Hospitals',
    businessNoun: 'multispeciality hospital',
    industry: 'healthcare-and-hospitals',
    customers:
      'families choosing a hospital for emergencies, surgery, maternity and ongoing care, employees using corporate health check-ups and insurance, and patients referred by local doctors',
    intro:
      'Families pick a multispeciality hospital on the strength of its departments, doctors, emergency care, insurance tie-ups and distance, and most of that research starts on Google. Marketing has to give each department its own visibility, make doctors and cashless insurance easy to find and route every enquiry to the right desk quickly, within medical advertising rules.',
    challenges: [
      {
        title: 'Departments competing for attention',
        text: 'With many specialities under one roof, the marketing can slide into a general “we do everything” message that ranks for nothing. Each department needs its own pages, searches and budget.',
      },
      {
        title: 'Insurance and cost questions',
        text: 'Patients want to know about cashless insurance, TPA tie-ups, government schemes and package estimates before they come. When that information is hard to find, they call a hospital that answers.',
      },
      {
        title: 'Enquiries scattered across channels',
        text: 'Calls, website forms, WhatsApp messages and Practo bookings arrive at different desks. Without one system, slow replies lose patients and no one can see which campaigns work.',
      },
    ],
    searches: [
      'multispeciality hospital near me',
      '24 hour emergency hospital near me',
      'cashless hospital near me',
      'full body health checkup package bangalore',
      'knee replacement hospital in bangalore',
    ],
    channels: [
      {
        service: 'seo',
        why: 'Department and procedure pages – cardiology, orthopaedics, maternity, nephrology – with doctor profiles reviewed by the clinicians rank for the searches families make before choosing. A clear site structure stops one department’s page competing with another’s.',
      },
      {
        service: 'local-seo',
        why: 'Ranking in Maps for “hospital near me”, “emergency hospital” and department searches across the catchment brings the patients for whom distance decides. Listing departments and doctors the same way on Google, Practo and JustDial strengthens that visibility.',
      },
      {
        service: 'google-business-profile',
        why: 'The main profile needs accurate emergency numbers, departments, visiting hours, insurance information and replies to reviews. Individual doctor profiles, kept up to date, help patients find the right consultant directly.',
      },
      {
        service: 'google-ads',
        why: 'Separate campaigns for health check-up packages and high-value specialities, each with its own landing page and call tracking, show which departments ads actually fill. Keywords and copy stay within Google’s healthcare policies and Indian medical advertising rules.',
      },
      {
        service: 'website-development',
        why: 'A hospital website needs a fast doctor finder, department pages, appointment booking, an insurance and TPA list and cost-estimate requests that reach the right team. It’s where most families go before they visit.',
      },
      {
        service: 'ai-chatbots',
        why: 'A website and WhatsApp chatbot can answer OPD timings, which doctor to see and insurance questions at any hour, then book the appointment or hand urgent cases to a person.',
      },
      {
        service: 'ai-search-visibility',
        why: 'Families now ask ChatGPT and Google’s AI Overviews which hospital to consider for a procedure nearby. Clear department pages, doctor credentials and consistent listings help these tools describe the hospital accurately.',
      },
    ],
    faqs: [
      {
        q: 'Which departments should we promote first?',
        a: 'Pick departments with spare capacity, doctors available for consultations and patients who actively search for that care. A short test campaign per department shows where demand is before you commit a bigger budget.',
      },
      {
        q: 'Should each doctor have their own online profile?',
        a: 'Yes – accurate profiles with qualifications, specialities and consulting timings help patients who search for a doctor by name. Keep them informational, in line with NMC rules on doctors’ self-promotion.',
      },
      {
        q: 'How do we track which marketing brings admissions?',
        a: 'Use call, form and WhatsApp tracking by campaign, and connect enquiries to appointment records where possible. Even a simple monthly match of enquiries to admissions shows which departments and channels pay their way.',
      },
    ],
    localAngle:
      'For emergencies, maternity and regular care, families choose the trusted hospital closest to home. Strong Maps visibility across the catchment, accurate emergency details and good relationships with local GPs and clinics bring steady admissions.',
  },

  'ivf-centres': {
    name: 'IVF centres',
    title: 'IVF Centres',
    businessNoun: 'IVF centre',
    industry: 'clinics-and-doctors',
    customers:
      'couples and individuals who have tried other fertility treatment or been advised IVF, and people considering egg freezing, who weigh cost, doctors and trust over months',
    intro:
      'Choosing an IVF centre is an expensive, emotional decision that couples often research privately for months – comparing doctors, costs, success-rate claims and reviews before booking a consultation. Marketing has to inform without pressure, protect privacy and present the team and process honestly, within the ART (Regulation) Act and the PCPNDT Act, which bans sex selection and any advertising of it.',
    challenges: [
      {
        title: 'Success-rate comparisons',
        text: 'Couples compare centres on success rates that are often measured in different ways. Quoting numbers without context invites mistrust and complaints, so the centre has to explain what affects outcomes instead.',
      },
      {
        title: 'Privacy and stigma',
        text: 'Many couples keep IVF private, even from family. Ads, WhatsApp messages and notification previews need to be discreet, and remarketing has to be handled with care.',
      },
      {
        title: 'A long, cautious decision',
        text: 'Between the first search and the first consultation, couples read, watch, ask and wait. A centre that goes quiet after one enquiry is easily forgotten.',
      },
    ],
    searches: [
      'ivf cost in bangalore',
      'ivf centre near me',
      'icsi treatment cost',
      'egg freezing cost in india',
      'ivf specialist doctor bangalore',
    ],
    channels: [
      {
        service: 'seo',
        why: 'Detailed pages on each step of IVF, ICSI, egg freezing, costs and what the ART Act means for patients rank for the months of private research before a consultation. Pages reviewed by the centre’s fertility specialists build the trust a couple needs before they reach out.',
      },
      {
        service: 'google-ads',
        why: 'Search campaigns on IVF cost, ICSI and “IVF centre near me”, sent to pages with clear consultation booking, reach couples who are ready to talk. Keep copy free of success-rate promises and judge campaigns on consultations attended.',
      },
      {
        service: 'google-business-profile',
        why: 'Couples check the profile for the doctors, location and reviews. Many patients won’t leave a review, so thoughtful replies to the ones you have – never mentioning patient details – matter more than usual.',
      },
      {
        service: 'video-production',
        why: 'Videos of the fertility specialist and counsellor explaining the process, the lab and what a first consultation involves make the centre feel approachable. They answer questions couples may not want to ask in person.',
      },
      {
        service: 'ai-chatbots',
        why: 'Many couples research late at night. A chatbot that answers questions on the process, costs and privacy, then offers a discreet call-back, captures enquiries that would otherwise wait until morning.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Appointment and cycle-day reminders, counsellor follow-ups and report alerts in neutral wording keep treatment organised without exposing anything on a shared phone.',
      },
    ],
    faqs: [
      {
        q: 'Can we advertise our IVF success rates?',
        a: 'Be very careful. Rates vary with age and diagnosis and are calculated in different ways, so a single headline number can mislead. Explaining what affects outcomes, with your doctors’ guidance, is safer and builds more trust.',
      },
      {
        q: 'What does the ART Act mean for our marketing?',
        a: 'The ART (Regulation) Act requires clinics and banks to be registered and sets rules on eligibility, consent and records. Marketing should describe only the services you’re registered to offer, and never suggest anything the Act or the PCPNDT Act prohibits, such as sex selection.',
      },
      {
        q: 'Should we run ads on Instagram and Facebook?',
        a: 'Educational content can build awareness there, but Meta limits health-based targeting and couples may be uncomfortable seeing fertility ads on a shared feed. Search ads and good content usually do more of the work for an IVF centre.',
      },
    ],
    localAngle:
      'Couples will travel for an IVF centre they trust, but treatment cycles mean frequent visits, so distance still counts. A well-reviewed local listing and referrals from nearby gynaecologists bring couples who want care close to home.',
  },

  'fertility-clinics': {
    name: 'fertility clinics',
    title: 'Fertility Clinics',
    businessNoun: 'fertility clinic',
    industry: 'clinics-and-doctors',
    customers:
      'couples who have been trying to conceive and want answers, women with PCOS or irregular cycles, and men needing fertility tests – usually at the first step, before IVF is considered',
    intro:
      'Most couples reach a fertility clinic after months of trying, through a quiet search for tests, PCOS care or a “fertility doctor near me” rather than IVF itself. Marketing has to make that first step feel approachable – explaining tests, ovulation tracking, IUI and the doctor who leads the care – so couples book early instead of waiting.',
    challenges: [
      {
        title: 'Couples delay the first visit',
        text: 'Many couples wait a long time before seeing a specialist, hoping things resolve on their own. Gentle, factual content on when to get checked helps them come in sooner.',
      },
      {
        title: 'Mistaken for an IVF-only centre',
        text: 'Couples worry a fertility clinic will push them straight to IVF. The clinic needs to show its diagnosis-first approach – tests, ovulation induction, IUI – clearly.',
      },
      {
        title: 'Male fertility goes undiscussed',
        text: 'Men are often reluctant to get tested, though male factors are a common part of the picture. Marketing has to make semen analysis and male consultations feel routine.',
      },
    ],
    searches: [
      'fertility clinic near me',
      'fertility doctor near me',
      'iui treatment cost in bangalore',
      'pcos doctor near me',
      'semen analysis test near me',
    ],
    channels: [
      {
        service: 'local-seo',
        why: 'Fertility tests and follicle scans mean several visits in each cycle, so couples look close to home. Ranking in Maps for “fertility doctor near me”, PCOS and IUI searches nearby brings them in at the first step.',
      },
      {
        service: 'google-business-profile',
        why: 'Listing fertility tests, follicular monitoring, IUI and PCOS care as services, with the doctor’s qualifications, timings and a calm photo of the consultation room, shows couples the clinic offers more than IVF.',
      },
      {
        service: 'google-ads',
        why: 'Search ads on IUI, fertility tests and semen analysis, sent to clear pages with booking, reach couples ready to act. Measure first consultations and tests booked, and keep copy free of pregnancy promises.',
      },
      {
        service: 'content-marketing',
        why: 'Articles and short guides on when to see a fertility doctor, PCOS and conception, and what a male fertility test involves answer the questions couples search privately. They can be shared after a consultation to back up the doctor’s advice.',
      },
      {
        service: 'social-media-management',
        why: 'Gentle, myth-busting posts on Instagram and Facebook – cycle tracking, male fertility, lifestyle factors – reach couples early and make seeking help feel normal. Keeping it educational keeps it within NMC rules.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Discreet reminders for scan days and test appointments, report alerts and follow-up nudges keep the timing of each cycle on track.',
      },
    ],
    faqs: [
      {
        q: 'How do we reach couples before they consider IVF?',
        a: 'Answer the early questions – how long to try before getting checked, what tests involve, PCOS and fertility – in content and search ads. Couples who understand the first steps are more likely to book a consultation sooner.',
      },
      {
        q: 'Do the ART Act rules apply to us?',
        a: 'If the clinic offers IUI or other assisted reproduction, the ART (Regulation) Act and its registration rules may apply, so confirm your position with a legal adviser. Marketing should describe only the services you’re registered and equipped to provide.',
      },
      {
        q: 'Should we talk about male fertility in our marketing?',
        a: 'Yes – it’s an important part of a couple’s diagnosis and often overlooked. Factual content and a simple, private way to book a semen analysis make it easier for men to take the first step.',
      },
    ],
    localAngle:
      'Fertility tracking means frequent visits around a cycle, so couples prefer a clinic nearby. Strong Maps visibility, discreet reviews and referrals from local gynaecologists and GPs bring couples in at the first step.',
  },

  gynecologists: {
    name: 'gynaecologists',
    title: 'Gynaecologists',
    businessNoun: 'gynaecologist',
    industry: 'clinics-and-doctors',
    customers:
      'women seeking pregnancy and delivery care, and help with periods, PCOS, menopause, contraception and routine screening such as Pap smears',
    intro:
      'Women often choose a gynaecologist on a friend’s or relative’s recommendation, then check the doctor’s experience, the hospital where deliveries happen, timings and reviews online. Marketing has to make the doctor easy to find and understand – consulting locations, services, approach to care – within NMC rules on self-promotion and the PCPNDT Act’s ban on sex determination.',
    challenges: [
      {
        title: 'Promises around normal delivery',
        text: 'Many expectant mothers look for a doctor with a high normal-delivery rate. Rates and promises can mislead, so marketing has to explain the doctor’s approach to birth instead of quoting numbers.',
      },
      {
        title: 'Patients spread across hospitals',
        text: 'Gynaecologists often consult at their own clinic and one or two hospitals. Patients get confused about where and when to book unless every listing is accurate.',
      },
      {
        title: 'Sensitive, private concerns',
        text: 'Many women hesitate to search or book for PCOS, painful periods or menopause symptoms. Content has to be warm, factual and discreet.',
      },
    ],
    searches: [
      'gynaecologist near me',
      'lady gynecologist near me',
      'pregnancy doctor near me',
      'normal delivery hospital in bangalore',
      'pcos treatment doctor',
    ],
    channels: [
      {
        service: 'google-business-profile',
        why: 'Accurate profiles for the clinic and each consulting location, with timings, services such as antenatal care, PCOS and menopause, and replies to reviews, help women book in the right place. Calls and direction requests per location show where patients are coming from.',
      },
      {
        service: 'local-seo',
        why: 'Pregnancy means many visits over nine months, so women look for a gynaecologist close to home. Ranking in Maps for “gynaecologist near me” and “pregnancy doctor” nearby brings in both antenatal and routine patients.',
      },
      {
        service: 'seo',
        why: 'Doctor-reviewed pages on the antenatal visit schedule, PCOS, irregular periods and menopause rank for the questions women search privately. Clear authorship and qualifications help Google trust the content.',
      },
      {
        service: 'personal-branding',
        why: 'Short videos where the doctor explains pregnancy myths, period health or what to expect in the first trimester build trust before the first visit. Keeping them educational keeps them within professional conduct rules.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Reminders for antenatal visits, scans and vaccinations, and postnatal check-ins, keep a pregnancy on schedule and make the practice easy to recommend to friends.',
      },
      {
        service: 'google-ads',
        why: 'Search ads for maternity packages at the doctor’s hospital, or for PCOS consultations, reach women ready to book. Keep copy factual about services and never promise a type of delivery.',
      },
    ],
    faqs: [
      {
        q: 'Can we promote our normal delivery rate?',
        a: 'It’s better not to lead with numbers – every pregnancy is different, and rates without context can mislead. Explaining your approach to birth and the support you provide is more honest and builds trust.',
      },
      {
        q: 'Should a gynaecologist be on Instagram?',
        a: 'It can help if the content is educational – pregnancy, periods, PCOS, menopause – rather than promotional. Avoid testimonials that promise results, and never share identifiable patient information.',
      },
      {
        q: 'What does the PCPNDT Act mean for our marketing?',
        a: 'It prohibits sex determination and any advertising that suggests it. Describe ultrasound and scan services clearly and only for permitted medical purposes.',
      },
    ],
    localAngle:
      'Expectant mothers want a gynaecologist they can reach quickly at any hour, so distance and the hospital tie-up matter. Accurate Maps listings for every consulting location and recommendations in local parent groups decide most choices.',
  },

  'orthopedic-doctors': {
    name: 'orthopaedic doctors',
    title: 'Orthopaedic Doctors',
    businessNoun: 'orthopaedic doctor',
    industry: 'clinics-and-doctors',
    customers:
      'older adults with knee and hip pain, working professionals with back and neck problems, people with fractures, and runners and players with ligament and sports injuries',
    intro:
      'Orthopaedic patients search in two ways – urgently after a fall or injury, and slowly over months when knee or back pain is getting worse and surgery is being discussed. Marketing has to make the doctor easy to find for both, explain the options from physiotherapy to joint replacement honestly and show where and when they consult.',
    challenges: [
      {
        title: 'Fear of being pushed into surgery',
        text: 'Many patients put off seeing an orthopaedic doctor because they worry they’ll be told to have surgery. Showing a conservative-first approach where it applies builds trust.',
      },
      {
        title: 'Second opinions and long decisions',
        text: 'Joint replacement and spine patients often get more than one opinion and research for months. A doctor who explains clearly and stays in touch is more likely to be chosen.',
      },
      {
        title: 'Patients searching for a “bone doctor”',
        text: 'Many people search for a bone doctor rather than an orthopaedic surgeon, or simply type a symptom like knee pain. Listings and pages need to match how patients actually search.',
      },
    ],
    searches: [
      'orthopedic doctor near me',
      'bone doctor near me',
      'knee replacement surgery cost in bangalore',
      'acl tear surgery cost',
      'knee pain specialist near me',
    ],
    channels: [
      {
        service: 'seo',
        why: 'Pages on knee pain, ACL tears, frozen shoulder, slipped discs and joint replacement – with treatment options, recovery timelines and cost factors – rank for the long research before surgery. Doctor authorship and qualifications help Google trust them.',
      },
      {
        service: 'google-business-profile',
        why: 'Orthopaedic doctors often consult at a clinic and several hospitals. Accurate profiles with each location’s timings, fracture and emergency availability and replies to reviews make it easy to book in the right place.',
      },
      {
        service: 'local-seo',
        why: 'Ranking in Maps for “orthopaedic doctor near me”, “bone doctor” and symptom searches like knee or back pain nearby catches the fractures and sprains that need care the same day.',
      },
      {
        service: 'video-production',
        why: 'Videos of the doctor explaining a knee replacement, demonstrating home exercises or walking through recovery address patients’ fears before the consultation. They’re easy to share on WhatsApp with family members helping decide.',
      },
      {
        service: 'google-ads',
        why: 'Search ads for joint replacement, ACL reconstruction and sports injury consultations, with cost and insurance information on the landing page, reach patients close to a decision. Measure consultations booked and keep recovery claims realistic.',
      },
      {
        service: 'personal-branding',
        why: 'Talks at running and cycling groups, residents’ associations and corporate wellness sessions, shared on Instagram and LinkedIn, build a name for sports and joint care. Keeping the focus on education keeps it within NMC rules.',
      },
    ],
    faqs: [
      {
        q: 'How do we reach patients who are scared of surgery?',
        a: 'Explain every option, including physiotherapy and other non-surgical care, in your content and consultations. Patients who feel informed rather than pushed are more likely to trust your advice when surgery is needed.',
      },
      {
        q: 'Should we publish knee replacement costs?',
        a: 'A range with what changes it – implant type, room category, insurance cover – helps families plan. Make it clear that the final estimate follows an examination.',
      },
      {
        q: 'Can we share patient recovery stories?',
        a: 'With the patient’s written consent, genuine stories about their experience can help others. Don’t present them as typical results or promise a recovery timeline.',
      },
    ],
    localAngle:
      'Fractures and sudden injuries send patients to the nearest orthopaedic doctor they can find, while planned surgery patients want someone close enough for follow-ups. Maps visibility at every consulting location and links with local physiotherapists bring both.',
  },

  'cosmetic-surgeons': {
    name: 'cosmetic surgeons',
    title: 'Cosmetic Surgeons',
    businessNoun: 'cosmetic surgeon',
    industry: 'clinics-and-doctors',
    customers:
      'adults considering rhinoplasty, liposuction, tummy tucks, gynecomastia correction, eyelid surgery and breast procedures, who research privately and choose the surgeon carefully',
    intro:
      'People considering cosmetic surgery research privately for a long time, checking the surgeon’s qualifications, reviews and past work before they book a consultation. Marketing has to show credentials and explain procedures, risks and recovery honestly – without result promises or the before-and-after imagery that ad platforms and medical rules restrict.',
    challenges: [
      {
        title: 'Proving the surgeon’s credentials',
        text: 'Patients worry about who is actually qualified to operate. Putting qualifications such as an MCh or DNB in plastic surgery, hospital affiliations and experience up front separates a surgeon from unqualified providers.',
      },
      {
        title: 'Tight rules on showing results',
        text: 'Ad platforms restrict before-and-after images and some cosmetic procedure ads, and NMC rules limit self-promotion. Marketing has to inform and reassure rather than sell transformations.',
      },
      {
        title: 'Discretion at every step',
        text: 'Many patients don’t want anyone to know they’re considering surgery. Enquiry forms, messages and follow-ups need to feel private from the first click.',
      },
    ],
    searches: [
      'cosmetic surgeon in bangalore',
      'rhinoplasty cost in bangalore',
      'gynecomastia surgery cost',
      'liposuction cost in india',
      'tummy tuck surgery near me',
    ],
    channels: [
      {
        service: 'seo',
        why: 'Procedure pages covering candidacy, technique, risks, recovery and cost factors for rhinoplasty, liposuction, gynecomastia and abdominoplasty rank for months of private research. Written or reviewed by the surgeon, they also signal expertise to Google.',
      },
      {
        service: 'google-ads',
        why: 'Search ads on procedure and cost searches, sent to discreet pages with a private consultation request, reach patients close to deciding. Check each procedure against Google’s healthcare policies and judge campaigns on consultations attended.',
      },
      {
        service: 'personal-branding',
        why: 'Patients choose the surgeon, not the clinic. Content where the surgeon explains procedures, addresses common fears and says honestly who isn’t a good candidate builds trust in their judgement.',
      },
      {
        service: 'instagram-marketing',
        why: 'Educational reels, Q&A stories and clinic walkthroughs build familiarity, and DMs often become the first private enquiry. Any results posted organically need written consent and an honest note that outcomes vary.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Private enquiry handling, pre-operative instructions and post-operative check-ins on WhatsApp keep patients informed without phone calls they may not want to take at work.',
      },
      {
        service: 'google-business-profile',
        why: 'An accurate profile with the surgeon’s qualifications, consulting locations and replies to reviews – never discussing any patient’s procedure – supports every other channel.',
      },
    ],
    faqs: [
      {
        q: 'Can we use before-and-after photos?',
        a: 'Organic posts can use genuine, unedited photos with the patient’s written consent and a clear note that results vary. Meta restricts such images in ads and NMC rules caution against promotional claims, so keep paid campaigns informational.',
      },
      {
        q: 'How do we handle enquiries discreetly?',
        a: 'Use short forms, let patients choose how they’re contacted and keep WhatsApp messages neutral. Never discuss a procedure in public replies to comments or reviews.',
      },
      {
        q: 'Should we show prices for procedures?',
        a: 'Ranges with what changes them – technique, anaesthesia, hospital stay – help patients plan without anchoring them to a figure that may not apply. Final costs follow the consultation.',
      },
    ],
    localAngle:
      'Cosmetic surgery patients will travel for the right surgeon, but they want follow-up visits to be practical. Reviews from patients in the city and an accurate, discreet Maps listing make the practice feel established and reachable.',
  },

  gyms: {
    name: 'gyms',
    title: 'Gyms',
    businessNoun: 'gym',
    industry: 'fitness-and-sports',
    customers:
      'working professionals, students and people returning to fitness who want equipment, trainers and timings that fit their day, within a short distance of home or office',
    intro:
      'People pick a gym by searching “gym near me”, comparing photos of the equipment, membership prices and reviews, then walking in for a trial to judge the crowd and the trainers. Marketing has to win that trial visit within a short radius, sell coaching and community over price, and keep members coming long enough to renew.',
    challenges: [
      {
        title: 'Sign-ups that don’t last',
        text: 'Joining spikes at the new year and before summer, then attendance falls away within weeks. A gym has to market retention as hard as it markets sign-ups.',
      },
      {
        title: 'Low-price chains nearby',
        text: 'Budget chains and app-based passes offer cheap memberships close by. An independent gym needs to show what its price buys – trainers, maintained equipment, cleanliness, community.',
      },
      {
        title: 'Peak-hour crowding',
        text: 'A prospect visits at 7pm, sees a queue for the squat rack and leaves. Showing quieter slots and how the floor is managed helps more trials convert.',
      },
    ],
    searches: [
      'gym near me',
      'gym near me with personal trainer',
      'gym membership fees in bangalore',
      'ladies gym near me',
      '24 hour gym near me',
    ],
    channels: [
      {
        service: 'google-business-profile',
        why: 'A gym’s profile should show the equipment floor, changing rooms and class areas in recent photos, list membership options and timings, and reply to every review. Trial bookings and calls from the profile are the numbers to track.',
      },
      {
        service: 'local-seo',
        why: 'Ranking in Maps within a few kilometres for “gym near me” and specific searches – women’s batches, personal training, strength training, 24-hour access – brings walk-ins from people who have already decided to join somewhere close.',
      },
      {
        service: 'meta-ads',
        why: 'Instagram and Facebook ads aimed at people living and working within a short radius, with a trial pass and a tour reel, earn their keep in January and before summer. Measure cost per trial and the trial-to-member rate, not clicks.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Trial follow-ups, a check-in when a member hasn’t visited for a while, renewal reminders and class updates on WhatsApp keep members engaged through the months when drop-off usually happens.',
      },
      {
        service: 'instagram-marketing',
        why: 'Trainer tips, member milestones shared with consent, class clips and quieter-hour shots show the gym’s coaching and community. Reels of the floor at different times also answer the “is it crowded?” question.',
      },
      {
        service: 'google-ads',
        why: 'Search ads on “gym near me” and “personal trainer near me”, limited to a short radius and weighted towards the new-year and pre-summer peaks, catch people ready to join this week.',
      },
    ],
    faqs: [
      {
        q: 'How do we compete with cheaper gym chains?',
        a: 'Don’t match the price – show what a cheaper membership often leaves out: trainer attention, maintained equipment, clean changing rooms and a community members know by name. A free trial lets people feel the difference.',
      },
      {
        q: 'When should we spend most on marketing?',
        a: 'Ahead of January and before summer, when people decide to start. Keep a smaller budget running through the year and put the rest of the effort into retention, since keeping a member costs less than finding a new one.',
      },
      {
        q: 'Do our trainers help with marketing?',
        a: 'Yes – members often join or stay because of a trainer. Featuring several trainers and their specialities in your content builds the gym’s reputation without tying it to one person.',
      },
    ],
    localAngle:
      'Few people travel far for a gym they’ll visit several times a week, so a gym wins its area by ranking first in Maps nearby, showing a real community and making the trial visit easy to book.',
  },

  'yoga-studios': {
    name: 'yoga studios',
    title: 'Yoga Studios',
    businessNoun: 'yoga studio',
    industry: 'fitness-and-sports',
    customers:
      'adults wanting flexibility, stress relief and a steady practice, office-goers in morning and evening batches, beginners, expectant mothers in prenatal classes and older adults looking for gentle sessions',
    intro:
      'People choose a yoga studio for the teacher, the style – hatha, Ashtanga, power, prenatal – and a batch time that fits their day, usually after a trial class. Marketing has to explain each style and batch clearly, show the teachers and make the first class simple to book, then keep students practising week after week.',
    challenges: [
      {
        title: 'Beginners unsure where to start',
        text: 'Newcomers don’t know the difference between styles or worry they aren’t flexible enough. Without clear guidance, they keep putting off the first class.',
      },
      {
        title: 'Free yoga videos online',
        text: 'Plenty of yoga is free on YouTube and apps. A studio has to show what an in-person teacher adds – corrections, safety, a steady routine and a group.',
      },
      {
        title: 'Batches that fill unevenly',
        text: 'Early-morning and evening batches fill while mid-morning slots stay empty. Those slots need marketing aimed at people free at that time – parents, older adults, remote workers.',
      },
    ],
    searches: [
      'yoga classes near me',
      'morning yoga classes near me',
      'prenatal yoga classes in bangalore',
      'yoga for beginners near me',
      'yoga teacher training course bangalore',
    ],
    channels: [
      {
        service: 'instagram-marketing',
        why: 'Short clips of a real class, a teacher’s correction, a breathing practice or a beginner’s first week show what the studio feels like. Story highlights for each batch and style help people find the class that suits them.',
      },
      {
        service: 'google-business-profile',
        why: 'Listing each style and batch time, posting photos of the practice space and replying to reviews helps people searching “yoga classes near me” pick a studio they can reach before work.',
      },
      {
        service: 'local-seo',
        why: 'Ranking in Maps nearby for style- and need-specific searches – prenatal yoga, morning batches, yoga for beginners – brings students looking for exactly what the studio teaches.',
      },
      {
        service: 'personal-branding',
        why: 'Students follow teachers. Building the lead teacher’s profile with practice tips, philosophy and teaching clips brings students who want to learn from them in person.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Batch reminders, class-pack expiry nudges, workshop and retreat announcements and a monthly practice tip keep attendance steady without adding work for the teachers.',
      },
      {
        service: 'meta-ads',
        why: 'Instagram ads with an intro-week offer, aimed at people within a short distance, work well in January and in the weeks before International Yoga Day in June. Count trial classes booked and how many students continue.',
      },
      {
        service: 'website-design',
        why: 'A site with the timetable, style descriptions, teacher profiles and online booking or class-pack purchase lets people sign up the moment they decide.',
      },
    ],
    faqs: [
      {
        q: 'Should we offer online classes as well?',
        a: 'They keep students practising when they travel or are unwell, and reach people who can’t come in. Keep the in-person experience as the main offer and use online classes to support it.',
      },
      {
        q: 'How do we promote prenatal or therapy-focused classes?',
        a: 'Explain who the class is for, the teacher’s training and what a session involves, and suggest students check with their doctor first. Avoid any claim that yoga treats or cures a condition.',
      },
      {
        q: 'Is International Yoga Day worth marketing around?',
        a: 'It’s a natural moment for free community sessions, workshops and intro offers, since interest in yoga rises around 21 June. Collect contact details at the sessions so you can follow up afterwards.',
      },
    ],
    localAngle:
      'Students practise several times a week, often before or after work, so the studio within a short walk or drive wins. Maps visibility for each batch, community sessions and word of mouth among neighbours bring most new students.',
  },

  cafes: {
    name: 'cafés',
    title: 'Cafés',
    businessNoun: 'café',
    industry: 'restaurants-and-food',
    customers:
      'students, young professionals, remote workers, friends meeting up and weekend brunch crowds looking for good coffee and a place to sit',
    intro:
      'People find cafés through Instagram reels, a friend’s story or a Maps search for “cafe near me”, then judge the space, menu and mood from photos before they go. Marketing has to make the café recognisable in a crowded feed, rank nearby for the moments people look for somewhere to work or meet, and turn first visits into regular ones.',
    challenges: [
      {
        title: 'Low bills, little ad budget',
        text: 'A coffee and a croissant don’t leave much to spend on winning each visitor. A café has to lean on Instagram, Maps and regulars far more than paid reach.',
      },
      {
        title: 'Laptops at peak hours',
        text: 'Remote workers can hold tables for hours, sometimes into the lunch or brunch rush. The café has to decide who it’s for at each time of day and market those slots differently.',
      },
      {
        title: 'A feed that must match',
        text: 'People arrive with expectations set by reels. If the photos oversell the space or undersell the food, the reviews say so.',
      },
    ],
    searches: [
      'cafe near me',
      'work friendly cafe near me',
      'brunch places in bangalore',
      'cafe with wifi near me',
      'speciality coffee near me',
    ],
    channels: [
      {
        service: 'instagram-marketing',
        why: 'A café’s Instagram is its storefront – reels of drinks being made, the space in morning light, new menu items and the team behind the counter. Location tags and collaborations with neighbouring businesses help people close by find it.',
      },
      {
        service: 'google-business-profile',
        why: 'People choosing a café on Maps check photos, opening hours, the menu and details such as Wi-Fi and seating. Keeping those current and replying to reviews turns searches into walk-ins.',
      },
      {
        service: 'local-seo',
        why: 'Ranking in Maps for “work-friendly café”, “brunch near me” and specific drinks like cold brew or filter coffee puts the café in front of people deciding where to go in the next half hour.',
      },
      {
        service: 'influencer-marketing',
        why: 'A handful of local food and lifestyle creators whose followers live nearby can fill a new café’s first weekends. Choose them by where their audience is rather than follower count, and give them a new drink or dish to feature.',
      },
      {
        service: 'photography',
        why: 'Professional photos of drinks, food and the space lift the Google profile, Instagram, Swiggy and Zomato listings and printed menus. They also set honest expectations, so the room matches what people saw.',
      },
      {
        service: 'whatsapp-automation',
        why: 'A WhatsApp list built from a QR code on the counter lets the café announce new drinks, events and loyalty perks directly, without depending on Instagram’s reach.',
      },
    ],
    faqs: [
      {
        q: 'Should a café be on Swiggy and Zomato?',
        a: 'For discovery and delivery, often yes, but coffee travels poorly and commissions eat into small bills. Many cafés list a focused delivery menu and keep the main effort on bringing people in.',
      },
      {
        q: 'How do we handle remote workers taking tables all day?',
        a: 'Decide what works for your space – laptop-friendly hours, a minimum order or a work area – and say so clearly on Google and Instagram. Clear expectations avoid awkward conversations and bad reviews.',
      },
      {
        q: 'Does a café need a website?',
        a: 'A simple one with the menu, hours and location helps you rank for your name and handle event or bulk-order enquiries. For most single cafés, Instagram and the Google profile do more of the day-to-day work.',
      },
    ],
    localAngle:
      'Café regulars usually live or work within walking distance, so owning the Maps results for the street, teaming up with neighbouring businesses and staying active on Instagram make it the default place to meet nearby.',
  },

  'cloud-kitchens': {
    name: 'cloud kitchens',
    title: 'Cloud Kitchens',
    businessNoun: 'cloud kitchen',
    industry: 'restaurants-and-food',
    customers:
      'delivery customers on Swiggy and Zomato – office-goers, students, PG residents and families – who choose from thumbnails, ratings and delivery times',
    intro:
      'A cloud kitchen has no storefront, so customers choose it from a list inside Swiggy or Zomato – by the dish photo, rating, price and delivery time – in a few seconds. Marketing has to win that list through ratings, photos and in-app ads, then build a direct ordering channel so every repeat order doesn’t pay a commission.',
    challenges: [
      {
        title: 'Commission on every order',
        text: 'Aggregators bring most orders and take a cut of each one, while keeping the customer data. Margins stay thin unless some regulars order direct.',
      },
      {
        title: 'Winning on a thumbnail',
        text: 'Customers scroll past dozens of kitchens offering the same biryani or bowl. The dish photo, the menu name and the rating decide the tap before anyone tastes the food.',
      },
      {
        title: 'A brand no one can visit',
        text: 'With no dining room or signage, the kitchen gets no walk-past visibility. Its brand lives only in the packaging, the app listing and social media.',
      },
    ],
    searches: [
      'biryani delivery near me',
      'healthy meal delivery in bangalore',
      'home style food delivery near me',
      'late night food delivery near me',
      'tiffin service near me',
    ],
    channels: [
      {
        service: 'performance-marketing',
        why: 'Running Swiggy and Zomato in-app ads alongside Meta ads for direct orders, all measured against cost per order and repeat rate, shows which spend actually makes money after commission. Budgets move weekly to the dishes and time slots that pay.',
      },
      {
        service: 'photography',
        why: 'Dish photography shot for small screens – overhead, close and true to the portion – is what wins the tap in a crowded aggregator list. The same photos feed the direct-ordering menu and ads.',
      },
      {
        service: 'brand-identity',
        why: 'Many cloud kitchens run several virtual brands from one kitchen. A distinct name, logo and packaging for each makes it recognisable on the app list and again when the bag arrives.',
      },
      {
        service: 'instagram-marketing',
        why: 'Reels of dishes being cooked and packed, kitchen hygiene and new menu launches give the brand a face it otherwise lacks. Instagram is also where customers find the link to order direct.',
      },
      {
        service: 'website-development',
        why: 'A direct ordering site or WhatsApp catalogue, with its own delivery partner or an ONDC listing, lets repeat customers order without aggregator commission. It also builds the kitchen’s own customer list.',
      },
      {
        service: 'meta-ads',
        why: 'Instagram and Facebook ads limited to the delivery radius, promoting a first direct order or a new combo, bring customers to the brand’s own channel. Compare cost per direct order with the commission it saves.',
      },
      {
        service: 'whatsapp-automation',
        why: 'A WhatsApp list built from packaging inserts and direct orders lets the kitchen send lunch combos, weekend specials and reorder reminders without paying per order.',
      },
    ],
    faqs: [
      {
        q: 'How do we move customers from Swiggy and Zomato to direct orders?',
        a: 'Keep the aggregators for discovery, and use packaging inserts, a QR code and a small first-direct-order benefit to bring regulars to your own channel. Check your aggregator agreement first, as some limit certain kinds of promotion.',
      },
      {
        q: 'Should we run ads inside the delivery apps?',
        a: 'In-app ads can lift a new brand or a slow time slot, but they add to the cost of each order. Test them on your highest-rated dishes and check whether the extra orders cover the spend.',
      },
      {
        q: 'How many virtual brands should one kitchen run?',
        a: 'Only as many as the kitchen can cook consistently and keep well rated. Each brand needs its own listing, photos and ratings to look after, so a new one makes sense only when its menu is genuinely different.',
      },
    ],
    localAngle:
      'Aggregators show a cloud kitchen only to customers within its delivery radius, so it competes street by street on ratings, delivery time and photos. Ads and offers aimed beyond that radius waste money.',
  },

  caterers: {
    name: 'caterers',
    title: 'Caterers',
    businessNoun: 'caterer',
    industry: 'restaurants-and-food',
    customers:
      'families planning weddings, housewarmings, naming ceremonies and poojas, offices ordering corporate lunches and event catering, and hosts of house parties',
    intro:
      'Catering enquiries come from Google, wedding directories, JustDial and referrals, and families usually compare per-plate prices, menus and a tasting before they book. Marketing has to show the food and setups at real events, make menus and price ranges easy to understand, and answer enquiries fast, because event dates won’t wait.',
    challenges: [
      {
        title: 'Per-plate price comparisons',
        text: 'Families compare quotes per plate without seeing what’s included – service staff, counters, crockery, live stations. A caterer that doesn’t show the full picture gets judged on the lowest number.',
      },
      {
        title: 'Date-driven demand',
        text: 'Wedding and festival seasons and auspicious muhurtham dates book out, while other months go quiet. Corporate and house-party catering can fill the gaps if they’re marketed separately.',
      },
      {
        title: 'Event food is hard to show',
        text: 'Large-quantity food photographed in a hurry at an event looks unappetising online. Good photos of spreads, counters and setups are scarce.',
      },
    ],
    searches: [
      'caterers near me',
      'catering services in bangalore for marriage',
      'corporate catering bangalore',
      'house party catering near me',
      'south indian catering per plate price',
    ],
    channels: [
      {
        service: 'google-ads',
        why: 'Search ads for wedding, corporate and housewarming catering bring enquiries worth many restaurant bills each. Separate campaigns per event type, with a menu and quote form on each landing page, show which kind of event is most profitable.',
      },
      {
        service: 'google-business-profile',
        why: 'A profile with photos of real event setups, sample menus, the areas served and reviews from hosts helps families shortlist. Posting after each big event keeps it active through the season.',
      },
      {
        service: 'local-seo',
        why: 'Ranking for “caterers near me” and event searches like housewarming or pooja catering across the areas served brings enquiries from nearby families who want a dependable local caterer.',
      },
      {
        service: 'instagram-marketing',
        why: 'Reels of live counters, banana-leaf meal service, plating and setup at real events show scale and hygiene in a way a menu can’t. Highlights by event type help hosts find relevant work.',
      },
      {
        service: 'website-design',
        why: 'A site with menus by event type, per-plate price ranges, package inclusions and an enquiry form that asks for the date, guest count and venue brings better-qualified leads.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Instant replies with menu PDFs, follow-ups after tastings, and reminders for final guest counts and payments keep each booking moving and cut last-minute surprises.',
      },
    ],
    faqs: [
      {
        q: 'Should we show per-plate prices online?',
        a: 'A range by menu type helps families plan and filters out enquiries that won’t fit. Explain what’s included so quotes are compared fairly.',
      },
      {
        q: 'How do we win more corporate catering?',
        a: 'Build a separate page and campaign for offices – daily meals, events, festive lunches – with your FSSAI licence, hygiene practices and delivery reliability up front. Office admin and HR teams value consistency over variety.',
      },
      {
        q: 'Are wedding directories worth listing on?',
        a: 'They can bring families who are actively comparing vendors, especially for weddings. Keep photos and reviews current there, and make sure enquiries reach you quickly.',
      },
    ],
    localAngle:
      'Caterers serve a wider area than a restaurant, but housewarmings, poojas and house parties still go to a caterer families have seen at nearby events. Reviews from local hosts and referrals from venues and decorators bring most bookings.',
  },

  'clothing-stores': {
    name: 'clothing stores',
    title: 'Clothing Stores',
    businessNoun: 'clothing store',
    industry: 'fashion-and-apparel',
    customers:
      'families, working professionals and students buying everyday, office and casual wear for men, women and children, who want to try things on and take them home the same day',
    intro:
      'Shoppers looking for clothes nearby search Google Maps, check the store’s photos, reviews and timings, and compare prices with Myntra and Amazon before they visit. Marketing has to show what’s in stock, give reasons to buy in store – trial rooms, alterations, same-day purchase – and bring shoppers back each season and sale.',
    challenges: [
      {
        title: 'Competing with fashion apps',
        text: 'Myntra, Ajio and Amazon offer huge ranges and frequent sales. A local store has to sell fit, trial, alterations and the ability to take it home today.',
      },
      {
        title: 'Showing current stock',
        text: 'Shoppers want to know the store has their size and the latest styles before they travel. Stale photos make the store look out of date.',
      },
      {
        title: 'Footfall that clusters around sales',
        text: 'End-of-season sales and festivals bring crowds, while ordinary weeks stay quiet. Regulars need a reason to visit between sales.',
      },
    ],
    searches: [
      'clothing store near me',
      'mens wear shop near me',
      'kids clothes shop near me',
      'readymade garments shop near me',
      'plus size clothing store in bangalore',
    ],
    channels: [
      {
        service: 'google-business-profile',
        why: 'Weekly photos of new arrivals, the categories carried – men, women, kids, plus sizes – accurate timings and replies to reviews make the profile the store’s online window. Watch direction requests and calls during each sale.',
      },
      {
        service: 'local-seo',
        why: 'Ranking in Maps for category searches like “men’s wear near me”, “kids clothes shop” or “plus size clothing” within a short drive brings shoppers who want to buy today. Adding the brands and categories stocked to the listing helps it match those searches.',
      },
      {
        service: 'meta-ads',
        why: 'Instagram and Facebook ads within a few kilometres, showing new arrivals, festive collections and sale dates, bring shoppers in at the right time. Offer codes or WhatsApp opt-ins in the ad show which campaigns drive visits.',
      },
      {
        service: 'instagram-marketing',
        why: 'Reels of new stock, outfit ideas for office or college and quick try-on clips with staff keep the store in mind between sales. Shoppers often DM to check a size before they come.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Numbers collected at billing, with consent, build a list for new-arrival previews, early sale access and birthday offers. A WhatsApp catalogue lets regulars check stock before the trip.',
      },
      {
        service: 'google-ads',
        why: 'Local search and Performance Max campaigns aimed at store visits, run around festivals and sale dates, reach shoppers deciding where to buy nearby. Compare calls, direction requests and sales on campaign days with ordinary days.',
      },
    ],
    faqs: [
      {
        q: 'Should a clothing store sell online too?',
        a: 'It can, but online selling needs reliable stock updates, photos and a returns process. Many stores start with a WhatsApp catalogue and Instagram orders before building a full online store.',
      },
      {
        q: 'How do we bring people in between sales?',
        a: 'Give them something new to see – fresh arrivals, an outfit edit for an upcoming occasion, a preview for regulars – and tell your regulars on WhatsApp and Instagram first.',
      },
      {
        q: 'How do we know if Instagram ads bring footfall?',
        a: 'Use an offer code or ask shoppers to show the ad, track WhatsApp clicks and compare sales on campaign days with normal days. It won’t be perfect, but it shows which campaigns are worth repeating.',
      },
    ],
    localAngle:
      'Most clothing shoppers buy within a short drive of home, so a store wins its area with current photos on Maps, a WhatsApp list of regular customers and offers timed to local festivals and the school year.',
  },

  boutiques: {
    name: 'boutiques',
    title: 'Boutiques',
    businessNoun: 'boutique',
    industry: 'fashion-and-apparel',
    customers:
      'women looking for designer or custom-stitched blouses, lehengas, Indo-western outfits and occasion wear made for them',
    intro:
      'Women find boutiques through Instagram, friends’ outfits and Maps searches for “designer boutique near me” or “blouse stitching”, then judge the designer’s eye from real pieces before booking a measurement appointment. Marketing has to show finished work beautifully, make the designer the face of the brand and keep orders and delivery dates clear.',
    challenges: [
      {
        title: 'Delivery dates and trust',
        text: 'Custom pieces take time, and a late delivery before a wedding or festival is a serious problem for the client. Clear timelines and updates are part of the marketing.',
      },
      {
        title: 'Handwork that’s hard to photograph',
        text: 'Embroidery, the fall of the fabric and the fit are hard to capture on a phone. Poor photos make careful handwork look ordinary.',
      },
      {
        title: 'Pre-season order rush',
        text: 'Orders pile up in the weeks before Diwali and the wedding season, then slow down. Boutiques need to take bookings early and fill quieter months with ready-to-wear or alterations.',
      },
    ],
    searches: [
      'designer boutique near me',
      'blouse stitching near me',
      'custom lehenga designer in bangalore',
      'boutique for kurtis near me',
      'bridal blouse designer near me',
    ],
    channels: [
      {
        service: 'instagram-marketing',
        why: 'Instagram is the boutique’s lookbook – reels of fabric, embroidery close-ups, fittings and finished outfits on clients, with highlights for bridal, blouses and Indo-western. DMs are where most custom orders begin.',
      },
      {
        service: 'photography',
        why: 'Professional shoots of finished pieces, on a model or a client who agrees, show embroidery, colour and drape properly. The same images serve Instagram, Google, the WhatsApp catalogue and ads.',
      },
      {
        service: 'whatsapp-automation',
        why: 'A catalogue of designs, measurement appointment booking, order status updates and trial reminders keep custom orders on schedule and clients informed.',
      },
      {
        service: 'google-business-profile',
        why: 'A profile with photos of finished work, services such as blouse stitching and bridal wear, appointment timings and client reviews brings women searching nearby who don’t follow the boutique on Instagram yet.',
      },
      {
        service: 'personal-branding',
        why: 'Clients choose a boutique for the designer’s taste. Content where the designer talks about fabric, colour and fit, and styles real clients, builds the trust that justifies custom pricing.',
      },
      {
        service: 'local-seo',
        why: 'Ranking for “blouse stitching near me” and “designer boutique near me” in the surrounding area brings steady stitching and alteration work that keeps the boutique busy between big orders.',
      },
      {
        service: 'meta-ads',
        why: 'Ads aimed at women in the city interested in weddings and ethnic fashion, run a few months before the wedding and festive season, promote bridal consultations and new collections. Count consultations booked.',
      },
    ],
    faqs: [
      {
        q: 'Should a boutique sell online?',
        a: 'Ready-to-wear pieces and fabrics can sell well through Instagram and a WhatsApp catalogue. Custom work usually still needs a measurement and a trial, so online selling supports the studio rather than replacing it.',
      },
      {
        q: 'How do we deal with copies of our designs?',
        a: 'Watermark lookbook images, focus your content on the fit and finish copies can’t match, and keep the designer visible. Clients who value the original tend to buy from its maker.',
      },
      {
        q: 'When should we start promoting for the wedding season?',
        a: 'Custom bridal orders take weeks of work, so start promoting well before the season and take bookings early. Showing how many slots are left tells clients to book in time.',
      },
    ],
    localAngle:
      'Boutique clients come back for fittings and trials, so most live within a reasonable drive. Referrals from happy clients, tags in their event photos and a Maps listing for stitching and alterations keep new clients coming from nearby.',
  },

  'ethnic-wear-stores': {
    name: 'ethnic wear stores',
    title: 'Ethnic Wear Stores',
    businessNoun: 'ethnic wear store',
    industry: 'fashion-and-apparel',
    customers:
      'families shopping for festivals and weddings – women’s kurtas, salwar suits and lehengas, men’s kurtas and sherwanis, and kids’ ethnic outfits – often all in one trip',
    intro:
      'Ethnic wear shopping peaks around festivals and weddings, when families search for a “lehenga shop” or “sherwani near me”, browse Instagram for styles and then visit to try on together. Marketing has to show the range for every member of the family, time campaigns to the festival calendar and make the store the obvious stop for a family shopping trip.',
    challenges: [
      {
        title: 'A calendar of short peaks',
        text: 'Diwali, Ugadi, Eid, Varamahalakshmi, Onam and the wedding season each bring a rush that lasts only a few weeks. Campaigns that launch late miss the window.',
      },
      {
        title: 'Showing the whole family range',
        text: 'Many shoppers don’t realise the store also carries men’s and kids’ ethnic wear. Families end up splitting the trip across several stores.',
      },
      {
        title: 'Competing with online ethnic labels',
        text: 'Online ethnic labels advertise heavily with polished shoots. A local store has to show variety, fit, trials and alterations that online can’t.',
      },
    ],
    searches: [
      'ethnic wear shop near me',
      'lehenga shop in bangalore',
      'sherwani shop near me',
      'kurta set for men near me',
      'kids ethnic wear near me',
    ],
    channels: [
      {
        service: 'meta-ads',
        why: 'Instagram and Facebook ads within a realistic drive, launched a few weeks before each festival with collection reels for women, men and kids, bring families in at the right moment. Track WhatsApp enquiries and offer-code redemptions per campaign.',
      },
      {
        service: 'google-business-profile',
        why: 'Photos of each section – women’s, men’s, kids’ – festive collection posts and accurate extended hours during festival weeks help families choose the store for a single trip.',
      },
      {
        service: 'instagram-marketing',
        why: 'Reels of festive looks, coordinated family outfits and new arrivals, with highlights for each festival and the wedding season, keep the store in mind between peaks and handle “do you have this?” DMs.',
      },
      {
        service: 'local-seo',
        why: 'Ranking in Maps for “lehenga shop”, “sherwani shop” and “ethnic wear near me” in the surrounding area brings shoppers who are ready to try on and buy.',
      },
      {
        service: 'google-ads',
        why: 'Search ads on high-value searches such as bridal lehengas and wedding sherwanis, weighted towards the wedding season, reach shoppers with a specific occasion and budget in mind.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Festive previews sent to past customers, catalogues shared with families who want to choose at home and alteration-ready messages keep regulars returning every season.',
      },
    ],
    faqs: [
      {
        q: 'When should we start festive campaigns?',
        a: 'A few weeks before each festival, since families plan outfits early – and earlier still for weddings. Keep a calendar of the festivals your customers celebrate and plan photos of new stock ahead of each one.',
      },
      {
        q: 'Should we sell on Instagram as well as in store?',
        a: 'Instagram and WhatsApp orders can work for repeat customers and outfits that don’t need a trial. Bridal and fitted pieces usually still bring people into the store.',
      },
      {
        q: 'How do we reach families shopping for a wedding?',
        a: 'Show complete family looks – bride, groom, parents, kids – and offer wedding shopping appointments with a dedicated staff member. Families value the time saved by doing it all in one place.',
      },
    ],
    localAngle:
      'Families usually shop for festivals within a short drive of home, so a store wins its area with festival-ready photos on Maps, campaigns timed to the festivals local customers celebrate and regulars who return every season.',
  },

  'saree-shops': {
    name: 'saree shops',
    title: 'Saree Shops',
    businessNoun: 'saree shop',
    industry: 'fashion-and-apparel',
    customers:
      'brides and their families buying silk for weddings, women buying sarees for festivals, functions and office wear, and relatives abroad who shop by video call',
    intro:
      'Saree buyers know what they want to see – Kanchipuram, Mysore silk, Banarasi, Ilkal or a soft cotton – and they judge a shop by its range, the purity of its silk and how well the staff show each drape. Marketing has to show sarees in motion, make silk quality clear and let customers browse on WhatsApp or video calls before they visit for the final choice.',
    challenges: [
      {
        title: 'Proving silk purity',
        text: 'Buyers worry about blends sold as pure silk and imitation zari. Showing Silk Mark labels, zari details and clear pricing builds trust.',
      },
      {
        title: 'Sarees don’t photograph flat',
        text: 'A saree’s colour, border and pallu only come alive when it’s draped or moving. Flat catalogue photos undersell the stock.',
      },
      {
        title: 'Bridal silk is a group decision',
        text: 'Bridal silk is chosen by the bride, her mother and relatives together, sometimes over several visits. The shop has to make those visits easy and share options with family who can’t come.',
      },
    ],
    searches: [
      'silk saree shop near me',
      'kanchipuram silk sarees in bangalore',
      'mysore silk saree price',
      'wedding saree shop near me',
      'cotton sarees near me',
    ],
    channels: [
      {
        service: 'whatsapp-automation',
        why: 'Saree buyers already shop on WhatsApp. A catalogue organised by weave and price, video-call booking for family who can’t visit and broadcasts of new silk arrivals before the wedding and festival seasons turn chats into sales.',
      },
      {
        service: 'instagram-marketing',
        why: 'Reels of staff draping a saree, close-ups of the border and pallu, and live sessions on new arrivals show what flat photos can’t. Highlights by weave and occasion help buyers find what they’re after.',
      },
      {
        service: 'google-business-profile',
        why: 'Photos of the store, the silk sections and bridal collections, with accurate timings and reviews from buyers, help families shortlist a shop for the wedding trip. Naming the weaves stocked in posts and the description helps the profile show for those searches.',
      },
      {
        service: 'video-production',
        why: 'Short, well-lit videos of each saree – unfolded, draped and turned in daylight – show colour and zari honestly. They power Instagram, WhatsApp catalogues and ads alike.',
      },
      {
        service: 'local-seo',
        why: 'Ranking in Maps for weave-specific searches like “Kanchipuram silk saree shop” or “Mysore silk saree near me” brings buyers who already know what they want.',
      },
      {
        service: 'meta-ads',
        why: 'Ads aimed at women in the city and at relatives abroad, ahead of the wedding season, Varamahalakshmi and Deepavali, promote new collections and video-call shopping. Track WhatsApp conversations started from each ad.',
      },
    ],
    faqs: [
      {
        q: 'Can we sell sarees over video calls?',
        a: 'Many shops do – it suits families abroad and buyers who want to shortlist before visiting. Book calls in advance, show each saree in daylight and confirm orders with clear payment and shipping terms.',
      },
      {
        q: 'How do we show that our silk is genuine?',
        a: 'Show Silk Mark labels where you have them, explain the zari used and be clear about pure and blended silk. Honest descriptions build the trust that brings families back for the next wedding.',
      },
      {
        q: 'Should we post prices on Instagram?',
        a: 'Price ranges or “from” prices for each weave help buyers decide whether to visit. For bridal silks, many shops share exact prices on WhatsApp once they understand the budget.',
      },
    ],
    localAngle:
      'Families often stay loyal to one saree shop across generations of weddings, while new buyers check Maps and reviews nearby before a big purchase. Weave-specific listings, honest reviews and staff whom buyers remember win both.',
  },

  'furniture-stores': {
    name: 'furniture stores',
    title: 'Furniture Stores',
    businessNoun: 'furniture store',
    industry: 'furniture-and-home-decor',
    customers:
      'new homeowners, families upgrading sofas, beds and dining sets, people furnishing rented flats and buyers looking for custom or solid-wood pieces',
    intro:
      'Furniture is a big, considered purchase – buyers browse Pepperfry, IKEA and Instagram for ideas, then look for a showroom nearby to check quality, test comfort and negotiate before they buy. Marketing has to bring those researchers into the showroom, show materials and finishes honestly and follow up through a decision that can take weeks.',
    challenges: [
      {
        title: 'Online research, showroom decisions',
        text: 'Buyers compare prices online for weeks, then buy in store. Without tracking, it’s hard to tell which ads brought the visit.',
      },
      {
        title: 'Photos that flatten quality',
        text: 'Wood grain, fabric texture and build quality are what justify the price, and phone photos rarely show them.',
      },
      {
        title: 'Long gaps between purchases',
        text: 'A family buys a sofa or bed once in many years. The store has to keep reaching new movers and housewarmings rather than rely on repeat visits.',
      },
    ],
    searches: [
      'furniture shop near me',
      'sofa set price in bangalore',
      'custom furniture makers near me',
      'solid wood bed near me',
      'dining table shop near me',
    ],
    channels: [
      {
        service: 'google-ads',
        why: 'Search ads on high-value categories – sofas, beds, dining sets, custom furniture – with a showroom-visit or quote goal reach buyers ready to compare in person. Call and direction tracking show which categories bring people through the door.',
      },
      {
        service: 'google-business-profile',
        why: 'Photos of each showroom section, product categories, delivery and assembly details, timings and reviews that mention quality and delivery help buyers decide which showroom to visit this weekend.',
      },
      {
        service: 'local-seo',
        why: 'Ranking in Maps for “furniture shop near me” and product searches like sofas or wooden beds across the surrounding area brings buyers who want to see a piece before they spend.',
      },
      {
        service: 'photography',
        why: 'Lifestyle and close-up photography of pieces in real room settings shows wood, fabric and finish properly. It lifts every listing, ad and catalogue.',
      },
      {
        service: 'meta-ads',
        why: 'Instagram and Facebook ads aimed around newly completed apartment projects and at people interested in home décor, with room-setting reels and showroom offers, reach families as they move in.',
      },
      {
        service: 'website-design',
        why: 'A site with categories, materials, dimensions, price ranges and a WhatsApp or quote button lets buyers shortlist before visiting, and gives Google and Meta ads a credible place to land.',
      },
      {
        service: 'whatsapp-automation',
        why: 'Sharing catalogues, sending quotes, following up after showroom visits and confirming delivery and assembly slots on WhatsApp keep a long decision moving.',
      },
    ],
    faqs: [
      {
        q: 'How do we compete with Pepperfry and IKEA?',
        a: 'Sell what they can’t – sitting on the piece before buying, custom sizes and finishes, local delivery and after-sales service. Say so clearly in your listings and ads.',
      },
      {
        q: 'Is it worth targeting new apartment buyers?',
        a: 'Yes – people moving into a new home need several pieces at once. Location-targeted ads around new projects, tie-ups with interior designers and housewarming offers can reach them at the right time.',
      },
      {
        q: 'How do we know which ads bring showroom visits?',
        a: 'Track calls, WhatsApp clicks and direction requests by campaign, and ask every walk-in how they found you. A simple log at the counter fills the gaps tracking can’t.',
      },
    ],
    localAngle:
      'Buyers will drive some distance for furniture, but they shortlist showrooms they can reach on a weekend and that deliver to their area. Maps visibility, reviews about delivery and assembly, and referrals from local interior designers bring most visits.',
  },
} satisfies Partial<Record<BusinessSlug, BusinessProfile>>;
