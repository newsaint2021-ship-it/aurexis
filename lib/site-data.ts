export const company = {
  name: 'AUREXIS',
  tagline: 'Surface Transformations',
  ceo: 'Avant Gardi',
  phone: '061 820 2622',
  phoneHref: 'tel:+27618202622',
  whatsappHref: 'https://wa.me/27618202622',
  email: 'aurexiscorp@gmail.com',
  instagram: '@w3st_midas',
  instagramHref: 'https://instagram.com/w3st_midas',
  offices: [
    {
      city: 'Cape Town',
      country: 'South Africa',
      lines: ['30 Cole Street', 'Observatory', 'Cape Town'],
      mapHref:
        'https://www.google.com/maps/search/?api=1&query=30+Cole+Street+Observatory+Cape+Town',
    },
    {
      city: 'Victoria Falls',
      country: 'Zimbabwe',
      lines: ['Victoria Falls', 'Zimbabwe'],
      mapHref:
        'https://www.google.com/maps/search/?api=1&query=Victoria+Falls+Zimbabwe',
    },
  ],
  regions: ['Cape Town', 'Victoria Falls', 'Southern Africa'],
} as const

export type StudioEnvironment = {
  title: string
  line: string
  detail: string
  image: string
  alt: string
}

export type Studio = {
  slug: string
  title: string
  shortTitle: string
  eyebrow: string
  headline: string
  line: string
  overview: string
  manifesto: string
  hero: string
  heroAlt: string
  environmentsLabel: string
  environments: StudioEnvironment[]
}

export const studioProcess = [
  { title: 'Consultation', line: 'We clarify the ambition, context and commercial priorities.' },
  { title: 'Site Visit', line: 'We measure, assess substrates and understand the environment in use.' },
  { title: 'Specification', line: 'We engineer the right system for performance, finish and longevity.' },
  { title: 'Material Selection', line: 'Samples are reviewed in place, under the light they will live in.' },
  { title: 'Preparation', line: 'Surfaces and schedules are prepared for a controlled installation.' },
  { title: 'Installation', line: 'Specialist teams execute with precision and minimal disruption.' },
  { title: 'Inspection', line: 'Every junction, edge and plane is checked before handover.' },
  { title: 'Aftercare', line: 'Care guidance and warranty support protect the transformation.' },
] as const

export const studios: Studio[] = [
  {
    slug: 'built-environments',
    title: 'Built Environments Studio',
    shortTitle: 'Built Environments',
    eyebrow: 'Studio 01',
    headline: 'Architecture, resurfaced',
    line: 'Interiors reimagined through architectural surface systems.',
    overview:
      'Walls, cabinetry and joinery are transformed in place with engineered architectural films. The visual impact of reconstruction, without the demolition.',
    manifesto:
      'A room is understood through its surfaces: the warmth of a wall, the rhythm of joinery, the quiet continuity of a finish. We retain what works, then precisely alter what the eye and hand experience.',
    hero: '/images/div-built.png',
    heroAlt: 'Residential interior with wrapped architectural wall panels',
    environmentsLabel: 'Spaces we transform',
    environments: [
      { title: 'Kitchen & Cabinetry', line: 'Cabinetry resurfaced in stone, timber and matte finishes.', detail: 'Doors, drawer fronts, islands and integrated joinery are renewed in place, giving existing construction a materially complete second life.', image: '/images/be-kitchen.png', alt: 'Minimal luxury kitchen with resurfaced matte cabinetry' },
      { title: 'Hospitality', line: 'Suites and public spaces, renewed without closure.', detail: 'Low-disruption installation lets hotels evolve guestrooms, corridors and shared spaces while protecting the guest experience.', image: '/images/be-hospitality.png', alt: 'Boutique hotel suite with warm panelled feature wall' },
      { title: 'Retail', line: 'Environments that carry the brand in every surface.', detail: 'Counters, display systems and feature walls become a coherent material language built to withstand daily commercial intensity.', image: '/images/be-retail.png', alt: 'Premium retail interior with stone-textured display wall' },
      { title: 'Residential', line: 'Living spaces elevated through material precision.', detail: 'Considered finishes bring continuity and depth to private interiors without the waste, dust and delay of conventional replacement.', image: '/images/be-residential.png', alt: 'Contemporary residential living room with panelled wall' },
      { title: 'Corporate', line: 'Workplaces that communicate intent before a word is spoken.', detail: 'Reception areas, meeting rooms and workspaces are reshaped around a confident, durable material identity.', image: '/images/be-corporate.png', alt: 'Corporate lobby with warm timber slat feature wall' },
      { title: 'Healthcare', line: 'Hygienic, durable surfaces engineered for care.', detail: 'Cleanable, resilient systems support calm clinical environments and exacting operational standards.', image: '/images/be-healthcare.png', alt: 'Calm healthcare reception with light timber surfaces' },
      { title: 'Education', line: 'Resilient environments built for daily intensity.', detail: 'High-use learning spaces gain robust surfaces that are easier to maintain and simpler to renew over time.', image: '/images/be-education.png', alt: 'Modern education interior with durable panelled walls' },
      { title: 'Commercial Buildings', line: 'Lobbies, lifts and common areas — transformed at scale.', detail: 'Coordinated systems refresh shared architectural assets while keeping buildings accessible and operational.', image: '/images/be-commercial.png', alt: 'Commercial building lobby with architectural stone surfaces' },
    ],
  },
  {
    slug: 'visual-communications',
    title: 'Commercial Branding Studio',
    shortTitle: 'Commercial Branding',
    eyebrow: 'Studio 02',
    headline: 'Identity, made spatial',
    line: 'Brand systems translated into environments, fleets and facades.',
    overview:
      'We take identity beyond the screen, designing and applying brand expressions that remain clear across every physical touchpoint.',
    manifesto:
      'The strongest commercial environments do not add branding as an afterthought. They make identity structural — carried in scale, material, placement and repetition with enough restraint to remain unmistakable.',
    hero: '/images/div-visual.png',
    heroAlt: 'Premium retail storefront with minimal window graphics',
    environmentsLabel: 'Where brands appear',
    environments: [
      { title: 'Fleet Branding', line: 'Every vehicle, a moving expression of the brand.', detail: 'From one vehicle to national fleets, colour, scale and placement are controlled for consistent recognition on the move.', image: '/images/vc-fleet.png', alt: 'Fleet of vans with minimal midnight blue brand livery' },
      { title: 'Shopfront Branding', line: 'First impressions, composed with precision.', detail: 'Facades, signs and thresholds are treated as one coherent arrival, balancing visibility with architectural context.', image: '/images/vc-shopfront.png', alt: 'Elegant boutique shopfront with restrained brand graphics' },
      { title: 'Wayfinding', line: 'Navigation that never raises its voice.', detail: 'Legible systems guide movement intuitively while extending the material and typographic character of the place.', image: '/images/vc-wayfinding.png', alt: 'Minimal architectural wayfinding signage in a corporate atrium' },
      { title: 'Window Graphics', line: 'Glazing as a quiet communication surface.', detail: 'Privacy, campaign messaging and pattern are integrated into glass without sacrificing light or spatial openness.', image: '/images/vc-window.png', alt: 'Storefront glazing with subtle frosted window graphics' },
    ],
  },
  {
    slug: 'glass-technologies',
    title: 'Glass Technologies Studio',
    shortTitle: 'Glass Technologies',
    eyebrow: 'Studio 03',
    headline: 'Light, engineered',
    line: 'Light, privacy and protection — engineered into glass.',
    overview:
      'Architectural films control heat, glare, visibility and impact. Invisible engineering creates measurable comfort without compromising the view.',
    manifesto:
      'Glass defines how a building meets daylight, climate and privacy. Our work changes its performance while preserving its defining quality: the sense that space can remain open, calm and full of light.',
    hero: '/images/div-glass.png',
    heroAlt: 'Smart switchable glass partition detail',
    environmentsLabel: 'Performance systems',
    environments: [
      { title: 'Privacy Films', line: 'Gradient and frosted systems for discreet separation.', detail: 'Calibrated opacity creates privacy exactly where it is needed while retaining borrowed light and visual continuity.', image: '/images/gt-privacy.png', alt: 'Office partition with gradient frosted privacy film' },
      { title: 'Solar Control', line: 'Heat and glare, managed without losing the view.', detail: 'High-performance films reduce solar gain and visual discomfort, supporting more stable and efficient interiors.', image: '/images/gt-solar.png', alt: 'Floor-to-ceiling glazing with solar control film and soft light' },
      { title: 'Safety Films', line: 'Invisible reinforcement for glass under stress.', detail: 'Bonded protection helps retain fragments on impact and strengthens vulnerable glazing with minimal visual change.', image: '/images/gt-safety.png', alt: 'Laminated architectural safety glass detail' },
      { title: 'Decorative Glass', line: 'Pattern and texture, applied with restraint.', detail: 'Custom manifestations add rhythm, identity and screening to glass as part of the architecture rather than over it.', image: '/images/gt-decorative.png', alt: 'Decorative etched glass panel with linear pattern' },
    ],
  },
  {
    slug: 'mobility',
    title: 'Mobility Studio',
    shortTitle: 'Mobility',
    eyebrow: 'Studio 04',
    headline: 'Motion, protected',
    line: 'Precision surface craft for vehicles of every scale.',
    overview:
      'Paint protection, colour change and tint for road, water and air — applied in controlled conditions and finished to an exacting standard.',
    manifesto:
      'Moving objects meet weather, friction and attention at speed. We treat every panel, pane and junction as part of one continuous form, protecting the machine while sharpening how it is seen.',
    hero: '/images/div-mobility.png',
    heroAlt: 'Luxury vehicle detail with satin protection wrap',
    environmentsLabel: 'Machines we refine',
    environments: [
      { title: 'Paint Protection Film', line: 'Invisible armour for factory paint.', detail: 'Optically clear film absorbs everyday impact while preserving gloss, colour and the integrity of the original finish.', image: '/images/mb-ppf.png', alt: 'Paint protection film being finished on a luxury car bonnet' },
      { title: 'Colour Change Wraps', line: 'A new character with a factory-level finish.', detail: 'Panels, edges and returns are resolved as a whole so a colour change reads as intentional, complete and enduring.', image: '/images/mb-wraps.png', alt: 'Luxury car in satin colour-change wrap under studio light' },
      { title: 'Automotive Tint', line: 'Comfort, privacy and protection in every pane.', detail: 'Precision-cut films reduce heat and glare while complementing the vehicle rather than announcing themselves.', image: '/images/mb-tint.png', alt: 'Luxury vehicle with precision-tinted glass' },
      { title: 'Marine', line: 'Hull and superstructure surfaces, sea-proofed.', detail: 'Specialist exterior systems renew and protect marine surfaces against demanding coastal conditions.', image: '/images/mb-marine.png', alt: 'Yacht hull with premium protective wrap at a marina' },
      { title: 'Aircraft', line: 'Aviation-grade finishes for private aircraft.', detail: 'Lightweight surface and livery applications are executed around the tolerances, schedules and standards of aviation.', image: '/images/mb-aircraft.png', alt: 'Private jet fuselage detail with premium livery' },
      { title: 'Luxury Vehicles', line: 'Bespoke treatment for exceptional machines.', detail: 'A considered programme of protection, tint and finish is tailored to the vehicle, its use and its collector.', image: '/images/mb-luxury.png', alt: 'Exotic luxury vehicle in a minimal studio environment' },
    ],
  },
]

export function getStudio(slug: string) {
  return studios.find((studio) => studio.slug === slug)
}
