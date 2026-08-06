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

type StudioPrinciple = { title: string; proof: string }
type StudioMaterial = { title: string; finish: string; use: string; image: string }
type StudioFaq = { question: string; answer: string }
type StudioGalleryItem = { image: string; alt: string; caption: string; format: 'wide' | 'portrait' | 'detail' }

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
  industries: StudioEnvironment[]
  principles: StudioPrinciple[]
  gallery: StudioGalleryItem[]
  materials: StudioMaterial[]
  faqs: StudioFaq[]
}

export const studioJourney = [
  { title: 'Discover', line: 'We define the ambition, context and commercial priorities.' },
  { title: 'Design', line: 'The visual direction is resolved around the space and its use.' },
  { title: 'Material Selection', line: 'Samples are reviewed in place, under the light they will live in.' },
  { title: 'Preparation', line: 'Surfaces, access and schedules are prepared for controlled execution.' },
  { title: 'Installation', line: 'Specialist teams apply every system with measured precision.' },
  { title: 'Quality Assurance', line: 'Every junction, edge, plane and performance detail is inspected.' },
  { title: 'Reveal', line: 'The finished transformation is handed over with care guidance and support.' },
] as const

const materialImages = {
  stone: '/images/material-stone.png',
  timber: '/images/material-timber.png',
  metal: '/images/material-metal.png',
  matte: '/images/material-matte.png',
  glass: '/images/material-glass.png',
  carbon: '/images/material-carbon.png',
}

export const studios: Studio[] = [
  {
    slug: 'built-environments',
    title: 'Built Environments Studio',
    shortTitle: 'Built Environments',
    eyebrow: 'Studio 01',
    headline: 'Architecture, resurfaced',
    line: 'Interiors reimagined through architectural surface systems.',
    overview: 'Walls, cabinetry and joinery are transformed in place with engineered architectural films. The visual impact of reconstruction, without the demolition.',
    manifesto: 'A room is understood through its surfaces: the warmth of a wall, the rhythm of joinery, the quiet continuity of a finish. We retain what works, then precisely alter what the eye and hand experience.',
    hero: '/images/div-built.png',
    heroAlt: 'Residential interior with wrapped architectural wall panels',
    environmentsLabel: 'What we transform',
    environments: [
      { title: 'Cabinetry', line: 'Existing joinery, materially renewed.', detail: 'Doors, drawer fronts, islands and fitted units are resurfaced in place with clean edges and consistent grain direction.', image: '/images/be-kitchen.png', alt: 'Minimal kitchen with resurfaced matte cabinetry' },
      { title: 'Walls & Columns', line: 'Large planes become defining gestures.', detail: 'Stone, timber, textile and solid-colour finishes turn structural surfaces into a coherent architectural language.', image: '/images/be-commercial.png', alt: 'Commercial lobby with architectural stone surfaces' },
      { title: 'Doors & Joinery', line: 'High-contact details, precisely resolved.', detail: 'Durable systems bring continuity to doors, frames, desks and bespoke joinery without disruptive replacement.', image: '/images/be-corporate.png', alt: 'Corporate lobby with warm timber joinery' },
      { title: 'Counters & Displays', line: 'Working surfaces with renewed presence.', detail: 'Retail and hospitality fixtures gain robust, maintainable finishes calibrated for daily commercial use.', image: '/images/be-retail.png', alt: 'Premium retail interior with stone-textured displays' },
    ],
    industries: [
      { title: 'Hospitality', line: 'Renewal without closing the door.', detail: 'Suites, corridors and shared spaces evolve while guest operations continue.', image: '/images/be-hospitality.png', alt: 'Boutique hotel suite with warm panelled wall' },
      { title: 'Residential', line: 'A considered second life for interiors.', detail: 'Private spaces gain material depth without dust, waste or lengthy reconstruction.', image: '/images/be-residential.png', alt: 'Contemporary residential living room with panelled wall' },
      { title: 'Retail', line: 'Brand character built into every plane.', detail: 'Display systems and customer touchpoints become a unified spatial identity.', image: '/images/be-retail.png', alt: 'Luxury retail environment with architectural finishes' },
      { title: 'Healthcare', line: 'Calm surfaces engineered for care.', detail: 'Cleanable, resilient systems support exacting operational standards.', image: '/images/be-healthcare.png', alt: 'Calm healthcare reception with light timber surfaces' },
      { title: 'Workplace', line: 'Material identity for focused teams.', detail: 'Reception, meeting and work areas communicate confidence and intent.', image: '/images/be-corporate.png', alt: 'Refined corporate reception with timber surfaces' },
    ],
    principles: [
      { title: 'Retain what works', proof: 'Sound substrates stay in place, reducing demolition, waste and cost.' },
      { title: 'Material realism', proof: 'Grain, scale and junctions are specified to read as an architectural whole.' },
      { title: 'Operational continuity', proof: 'Phased installation limits closures and protects occupied environments.' },
      { title: 'Controlled preparation', proof: 'Every substrate is assessed, repaired and primed before application.' },
      { title: 'Edge discipline', proof: 'Returns, reveals and interfaces are resolved before the first panel is laid.' },
      { title: 'Commercial durability', proof: 'Systems are selected against traffic, cleaning cycles and expected use.' },
      { title: 'Renewable by design', proof: 'Finishes can be changed again as the environment evolves.' },
      { title: 'Documented handover', proof: 'Care, warranty and maintenance guidance accompany every completed space.' },
    ],
    gallery: [
      { image: '/images/be-kitchen.png', alt: 'Resurfaced kitchen cabinetry in a soft matte finish', caption: 'Cabinetry / Residential', format: 'wide' },
      { image: '/images/be-hospitality.png', alt: 'Warm wall finish in a boutique hospitality suite', caption: 'Wall systems / Hospitality', format: 'portrait' },
      { image: '/images/be-retail.png', alt: 'Detailed stone-effect retail display surface', caption: 'Display systems / Retail', format: 'detail' },
      { image: '/images/be-corporate.png', alt: 'Timber architectural finish in a corporate lobby', caption: 'Joinery / Workplace', format: 'wide' },
    ],
    materials: [
      { title: 'Honed Limestone', finish: 'Quiet mineral movement, low sheen', use: 'Walls, counters, reception desks', image: materialImages.stone },
      { title: 'Smoked Oak', finish: 'Linear grain, warm depth', use: 'Cabinetry, doors, wall panels', image: materialImages.timber },
      { title: 'Champagne Metal', finish: 'Fine brushed satin', use: 'Lift interiors, trims, joinery', image: materialImages.metal },
      { title: 'Midnight Soft-Touch', finish: 'Velvety, fingerprint-resistant matte', use: 'Cabinetry and fitted furniture', image: materialImages.matte },
      { title: 'Reeded Translucent', finish: 'Structured light diffusion', use: 'Partitions and feature panels', image: materialImages.glass },
      { title: 'Graphite Composite', finish: 'Technical, dimensional satin', use: 'High-impact feature surfaces', image: materialImages.carbon },
    ],
    faqs: [
      { question: 'How long does installation take?', answer: 'A typical kitchen or focused commercial zone is completed in days rather than weeks. Larger occupied sites are phased around access and operating hours.' },
      { question: 'What surfaces can be resurfaced?', answer: 'Stable, properly prepared substrates including laminate, metal, glass, sealed timber and many painted surfaces can be transformed after a site assessment.' },
      { question: 'How durable are the finishes?', answer: 'The architectural systems are specified for their intended traffic and cleaning cycle. Correctly maintained commercial finishes are designed for years of service.' },
      { question: 'How should surfaces be cleaned?', answer: 'Use a soft cloth with a mild, non-abrasive cleaner. We provide finish-specific care guidance at handover.' },
      { question: 'Is the work covered by a warranty?', answer: 'Yes. Product and installation coverage is confirmed in the project specification and depends on system, substrate and application.' },
      { question: 'Will the site need to close?', answer: 'Usually not. We coordinate low-noise, low-dust phases and can work zone by zone or outside peak operating hours.' },
      { question: 'Can the finish be removed later?', answer: 'Most film systems can be professionally removed, allowing the substrate to be renewed again without demolition.' },
      { question: 'What is the expected lifespan?', answer: 'Interior architectural finishes commonly deliver a long service life when matched to the environment and maintained as specified.' },
    ],
  },
  {
    slug: 'visual-communications',
    title: 'Commercial Identity Studio',
    shortTitle: 'Commercial Identity',
    eyebrow: 'Studio 02',
    headline: 'Identity, made spatial',
    line: 'Brand systems translated into environments, fleets and facades.',
    overview: 'We take identity beyond the screen, designing and applying brand expressions that remain clear across every physical touchpoint.',
    manifesto: 'The strongest commercial environments do not add branding as an afterthought. They make identity structural — carried in scale, material, placement and repetition with enough restraint to remain unmistakable.',
    hero: '/images/div-visual.png',
    heroAlt: 'Premium retail storefront with minimal window graphics',
    environmentsLabel: 'What we transform',
    environments: [
      { title: 'Fleets', line: 'Every vehicle, one unmistakable system.', detail: 'Colour, scale and placement are controlled from a single vehicle to a national rollout.', image: '/images/vc-fleet.png', alt: 'Fleet of vans with minimal midnight blue brand livery' },
      { title: 'Facades', line: 'Recognition begins before arrival.', detail: 'Signs, skins and thresholds are composed as one architectural first impression.', image: '/images/vc-shopfront.png', alt: 'Elegant boutique shopfront with restrained branding' },
      { title: 'Glass & Windows', line: 'Communication carried through light.', detail: 'Campaign, privacy and pattern are integrated without sacrificing spatial openness.', image: '/images/vc-window.png', alt: 'Storefront glazing with subtle frosted graphics' },
      { title: 'Interior Navigation', line: 'Direction without visual noise.', detail: 'Legible wayfinding extends the material and typographic character of the place.', image: '/images/vc-wayfinding.png', alt: 'Minimal architectural wayfinding in a corporate atrium' },
    ],
    industries: [
      { title: 'Retail', line: 'Identity at every customer touchpoint.', detail: 'Storefront, glazing and interior communication operate as one system.', image: '/images/vc-shopfront.png', alt: 'Premium branded retail storefront' },
      { title: 'Logistics', line: 'Moving assets made instantly recognisable.', detail: 'Fleet systems remain consistent across vehicle types and locations.', image: '/images/vc-fleet.png', alt: 'Consistently branded commercial vehicle fleet' },
      { title: 'Property', line: 'Places made easier to enter and understand.', detail: 'Signage and navigation clarify arrival, movement and destination.', image: '/images/vc-wayfinding.png', alt: 'Architectural property wayfinding system' },
      { title: 'Hospitality', line: 'Brand presence with appropriate restraint.', detail: 'Guest-facing graphics complement interiors instead of competing with them.', image: '/images/vc-window.png', alt: 'Subtle branded window graphics in hospitality' },
      { title: 'Corporate', line: 'A coherent identity across every site.', detail: 'Repeatable standards keep workplaces aligned while respecting architecture.', image: '/images/div-visual.png', alt: 'Refined corporate environment with spatial branding' },
    ],
    principles: [
      { title: 'System before artwork', proof: 'Every application begins with rules for scale, colour, placement and repetition.' },
      { title: 'Measured consistency', proof: 'Site surveys and templates protect identity across varied assets.' },
      { title: 'Production accuracy', proof: 'Colour profiles, proofs and substrates are signed off before rollout.' },
      { title: 'Architectural restraint', proof: 'Graphics support space, sightlines and movement rather than overwhelm them.' },
      { title: 'Rollout control', proof: 'Schedules, asset records and installation standards coordinate multiple sites.' },
      { title: 'Fleet continuity', proof: 'Vehicle templates preserve recognition across models and replacements.' },
      { title: 'Maintainable systems', proof: 'Damaged or campaign elements can be replaced without remaking the whole.' },
      { title: 'Clear ownership', proof: 'One studio manages design translation, production, installation and handover.' },
    ],
    gallery: [
      { image: '/images/vc-shopfront.png', alt: 'Refined identity applied to a boutique shopfront', caption: 'Facade identity / Retail', format: 'wide' },
      { image: '/images/vc-fleet.png', alt: 'Coordinated brand livery across a commercial fleet', caption: 'Fleet systems / Logistics', format: 'portrait' },
      { image: '/images/vc-window.png', alt: 'Detail of translucent branding on glass', caption: 'Window graphics / Hospitality', format: 'detail' },
      { image: '/images/vc-wayfinding.png', alt: 'Minimal wayfinding integrated into architecture', caption: 'Navigation / Workplace', format: 'wide' },
    ],
    materials: [
      { title: 'Cut Metallic', finish: 'Controlled satin reflectivity', use: 'Letters, emblems, detail marks', image: materialImages.metal },
      { title: 'Opaque Midnight', finish: 'Dense, low-glare colour', use: 'Fleet liveries and facade fields', image: materialImages.matte },
      { title: 'Frosted Crystal', finish: 'Translucent privacy', use: 'Windows, partitions, manifestations', image: materialImages.glass },
      { title: 'Stone Ground', finish: 'Mineral architectural texture', use: 'Signage backdrops and interiors', image: materialImages.stone },
      { title: 'Timber Grain', finish: 'Warm, natural direction', use: 'Hospitality signs and displays', image: materialImages.timber },
      { title: 'Technical Graphite', finish: 'Dimensional dark pattern', use: 'Automotive details and premium accents', image: materialImages.carbon },
    ],
    faqs: [
      { question: 'Can you work from existing brand guidelines?', answer: 'Yes. We translate established identity systems into practical production and installation standards for each physical application.' },
      { question: 'How is colour consistency managed?', answer: 'We use controlled files, calibrated production profiles and physical proofs. Critical colours are approved before the full run begins.' },
      { question: 'Can installations happen outside trading hours?', answer: 'Yes. Retail and workplace programmes can be scheduled after hours or in phases to minimise operational interruption.' },
      { question: 'How should branded surfaces be cleaned?', answer: 'Most surfaces need only mild soap, water and a soft cloth. Application-specific care instructions are included at handover.' },
      { question: 'Are graphics warranted?', answer: 'Materials and workmanship are covered according to application, exposure and substrate. The agreed coverage is documented before production.' },
      { question: 'Can individual fleet graphics be replaced?', answer: 'Yes. Maintained artwork and templates let us reproduce damaged panels or add new vehicles without redesigning the system.' },
      { question: 'Can temporary campaigns be removed?', answer: 'Removable systems are available for campaigns. They are specified to suit duration, exposure and the underlying surface.' },
      { question: 'How long will exterior branding last?', answer: 'Lifespan depends on film grade, orientation, climate and maintenance. We specify systems against the expected term and exposure.' },
    ],
  },
  {
    slug: 'glass-technologies',
    title: 'Glass Systems Studio',
    shortTitle: 'Glass Systems',
    eyebrow: 'Studio 03',
    headline: 'Light, engineered',
    line: 'Light, privacy and protection — engineered into glass.',
    overview: 'Architectural films control heat, glare, visibility and impact. Invisible engineering creates measurable comfort without compromising the view.',
    manifesto: 'Glass defines how a building meets daylight, climate and privacy. Our work changes its performance while preserving its defining quality: the sense that space can remain open, calm and full of light.',
    hero: '/images/div-glass.png',
    heroAlt: 'Smart switchable glass partition detail',
    environmentsLabel: 'What we transform',
    environments: [
      { title: 'Solar Performance', line: 'Heat and glare, quietly controlled.', detail: 'High-performance film stabilises interior comfort while maintaining outward views.', image: '/images/gt-solar.png', alt: 'Floor-to-ceiling glazing with solar control film' },
      { title: 'Privacy', line: 'Separation without losing daylight.', detail: 'Frosted, gradient and switchable solutions calibrate visibility to the space.', image: '/images/gt-privacy.png', alt: 'Office partition with gradient privacy film' },
      { title: 'Safety & Security', line: 'Invisible reinforcement under stress.', detail: 'Bonded systems help retain glass fragments and strengthen vulnerable glazing.', image: '/images/gt-safety.png', alt: 'Laminated architectural safety glass detail' },
      { title: 'Decorative Expression', line: 'Pattern integrated into architecture.', detail: 'Custom manifestations bring rhythm, identity and controlled screening to glass.', image: '/images/gt-decorative.png', alt: 'Decorative etched glass with linear pattern' },
    ],
    industries: [
      { title: 'Commercial Property', line: 'Better comfort across glazed assets.', detail: 'Solar and safety upgrades improve occupied buildings without replacing glass.', image: '/images/gt-solar.png', alt: 'Commercial facade with high-performance glazing' },
      { title: 'Healthcare', line: 'Privacy and cleanability in balance.', detail: 'Controlled screening supports dignity while preserving borrowed light.', image: '/images/gt-privacy.png', alt: 'Healthcare glass partition with privacy treatment' },
      { title: 'Retail', line: 'Glass that protects and communicates.', detail: 'Safety, solar and decorative layers support storefront performance.', image: '/images/gt-decorative.png', alt: 'Decorative retail glazing detail' },
      { title: 'Education', line: 'Safer, calmer learning environments.', detail: 'Impact retention and glare management support high-use spaces.', image: '/images/gt-safety.png', alt: 'Safety film applied to educational glazing' },
      { title: 'Residential', line: 'Comfort without closing the view.', detail: 'Heat, UV and privacy are managed with minimal visual change.', image: '/images/div-glass.png', alt: 'Residential glazing with subtle privacy control' },
    ],
    principles: [
      { title: 'Measured first', proof: 'Orientation, glass type, exposure and performance goals are assessed on site.' },
      { title: 'System compatibility', proof: 'Film and glazing are matched to manage thermal stress and warranty requirements.' },
      { title: 'Performance clarity', proof: 'Specifications state the expected solar, UV, privacy or safety outcome.' },
      { title: 'Light preserved', proof: 'Solutions are selected to retain useful daylight and visual openness.' },
      { title: 'Clean installation', proof: 'Controlled preparation limits dust, contamination and visible edge variation.' },
      { title: 'Precise sightlines', proof: 'Patterns and gradients align across panels, mullions and room geometry.' },
      { title: 'Operational phasing', proof: 'Occupied spaces are completed pane by pane with contained disruption.' },
      { title: 'Documented aftercare', proof: 'Cleaning, curing, warranty and inspection requirements are handed over clearly.' },
    ],
    gallery: [
      { image: '/images/gt-solar.png', alt: 'Solar-control glazing maintaining a clear city view', caption: 'Solar control / Commercial', format: 'wide' },
      { image: '/images/gt-privacy.png', alt: 'Gradient privacy film across office partitions', caption: 'Privacy / Workplace', format: 'portrait' },
      { image: '/images/gt-decorative.png', alt: 'Close detail of linear decorative glass film', caption: 'Manifestation / Interior', format: 'detail' },
      { image: '/images/gt-safety.png', alt: 'Safety film integrated into architectural glazing', caption: 'Protection / Public space', format: 'wide' },
    ],
    materials: [
      { title: 'Neutral Solar', finish: 'Low-reflection, optically clear', use: 'Facades and large glazed elevations', image: materialImages.glass },
      { title: 'Silver Performance', finish: 'Controlled reflective appearance', use: 'High solar-load elevations', image: materialImages.metal },
      { title: 'Gradient Frost', finish: 'Soft transition from private to clear', use: 'Meeting rooms and clinics', image: materialImages.matte },
      { title: 'Reeded Optic', finish: 'Linear visual diffusion', use: 'Partitions and decorative screens', image: materialImages.glass },
      { title: 'Safety Clear', finish: 'Invisible high-tensile layer', use: 'Vulnerable and overhead glazing', image: materialImages.stone },
      { title: 'Graphite Smoke', finish: 'Deep neutral tint', use: 'Feature glazing and privacy zones', image: materialImages.carbon },
    ],
    faqs: [
      { question: 'How long does glass film installation take?', answer: 'A typical office zone can often be completed within a day. Large elevations are phased by access, panel count and operating requirements.' },
      { question: 'Will solar film make the room dark?', answer: 'Not necessarily. Modern neutral films can reject meaningful heat and UV while retaining high levels of visible light.' },
      { question: 'How is filmed glass cleaned?', answer: 'After curing, use a soft cloth or non-abrasive squeegee with mild soapy water. Avoid blades and abrasive chemicals.' },
      { question: 'Does film strengthen glass?', answer: 'Safety film helps hold fragments together after breakage. It does not make glass unbreakable, and the complete anchoring specification determines performance.' },
      { question: 'Is there a warranty?', answer: 'Yes. Coverage varies by film family, glass type, exposure and application, and is confirmed in the final specification.' },
      { question: 'Will installation interrupt the building?', answer: 'Work is low-noise and contained. We coordinate pane-by-pane access so nearby rooms can usually remain operational.' },
      { question: 'Can the film be removed?', answer: 'Yes. Architectural film can be professionally removed and replaced without changing the glass itself.' },
      { question: 'How long does architectural film last?', answer: 'Quality interior and exterior systems are designed for multi-year service. Orientation, climate and maintenance influence the exact lifespan.' },
    ],
  },
  {
    slug: 'mobility',
    title: 'Mobility Studio',
    shortTitle: 'Mobility',
    eyebrow: 'Studio 04',
    headline: 'Motion, protected',
    line: 'Precision surface craft for vehicles of every scale.',
    overview: 'Paint protection, colour change and tint for road, water and air — applied in controlled conditions and finished to an exacting standard.',
    manifesto: 'Moving objects meet weather, friction and attention at speed. We treat every panel, pane and junction as part of one continuous form, protecting the machine while sharpening how it is seen.',
    hero: '/images/div-mobility.png',
    heroAlt: 'Luxury vehicle detail with satin protection wrap',
    environmentsLabel: 'What we transform',
    environments: [
      { title: 'Paintwork', line: 'Original finish, protected at every edge.', detail: 'Optically clear protection absorbs road impact while preserving colour and gloss.', image: '/images/mb-ppf.png', alt: 'Paint protection film finished on a luxury car bonnet' },
      { title: 'Body Colour', line: 'A new character, completely resolved.', detail: 'Colour-change film is wrapped through panels, returns and visible apertures.', image: '/images/mb-wraps.png', alt: 'Luxury car in satin colour-change wrap' },
      { title: 'Vehicle Glass', line: 'Comfort and privacy in every pane.', detail: 'Precision-cut tint reduces heat and glare without distracting from the vehicle.', image: '/images/mb-tint.png', alt: 'Luxury vehicle with precision-tinted glass' },
      { title: 'Specialist Assets', line: 'Surface craft beyond the road.', detail: 'Marine and aviation programmes adapt material and process to demanding assets.', image: '/images/mb-marine.png', alt: 'Yacht hull with premium protective wrap' },
    ],
    industries: [
      { title: 'Collector Vehicles', line: 'Protection calibrated for exceptional paint.', detail: 'Bespoke programmes preserve originality, finish and long-term value.', image: '/images/mb-luxury.png', alt: 'Collector vehicle in a controlled studio' },
      { title: 'Performance', line: 'Protection for machines used as intended.', detail: 'High-impact zones are mapped around real road and track exposure.', image: '/images/mb-ppf.png', alt: 'Performance car receiving paint protection film' },
      { title: 'Marine', line: 'Finishes prepared for coastal conditions.', detail: 'Hull and superstructure systems renew appearance and ease maintenance.', image: '/images/mb-marine.png', alt: 'Wrapped motor yacht at a marina' },
      { title: 'Aviation', line: 'Lightweight visual transformation.', detail: 'Livery applications respect aviation tolerances, access and schedules.', image: '/images/mb-aircraft.png', alt: 'Private aircraft with premium livery' },
      { title: 'Executive Fleets', line: 'A consistent standard across every vehicle.', detail: 'Tint, protection and finish programmes are documented for repeatability.', image: '/images/mb-wraps.png', alt: 'Executive vehicle with a refined satin finish' },
    ],
    principles: [
      { title: 'Controlled environment', proof: 'Lighting, cleanliness and temperature support consistent application.' },
      { title: 'Panel mapping', proof: 'Coverage, seams and edges are planned around each vehicle before installation.' },
      { title: 'Paint assessment', proof: 'Finish condition is documented before any film is applied.' },
      { title: 'Reversible change', proof: 'Quality wraps alter character while protecting the finish beneath.' },
      { title: 'Edge precision', proof: 'Returns and terminations are concealed wherever safe and technically sound.' },
      { title: 'Optical clarity', proof: 'Protection and tint are selected to preserve colour, gloss and visibility.' },
      { title: 'Asset-specific process', proof: 'Road, marine and aviation surfaces receive distinct preparation and materials.' },
      { title: 'Aftercare support', proof: 'Cure, cleaning and inspection guidance protects the finished result.' },
    ],
    gallery: [
      { image: '/images/mb-ppf.png', alt: 'Clear protection film applied across a sculpted bonnet', caption: 'Paint protection / Performance', format: 'wide' },
      { image: '/images/mb-wraps.png', alt: 'Satin colour-change wrap on a luxury coupe', caption: 'Colour change / Automotive', format: 'portrait' },
      { image: '/images/mb-tint.png', alt: 'Close detail of precision automotive tint', caption: 'Glass / Comfort', format: 'detail' },
      { image: '/images/mb-marine.png', alt: 'Protected yacht hull in quiet coastal light', caption: 'Surface protection / Marine', format: 'wide' },
    ],
    materials: [
      { title: 'Gloss PPF', finish: 'Optically clear, self-healing gloss', use: 'Full body and high-impact zones', image: materialImages.glass },
      { title: 'Satin PPF', finish: 'Factory-like low sheen', use: 'Matte preservation or finish conversion', image: materialImages.matte },
      { title: 'Forged Carbon', finish: 'Technical dimensional pattern', use: 'Roofs, trim and feature panels', image: materialImages.carbon },
      { title: 'Brushed Metal', finish: 'Directional satin grain', use: 'Accent panels and marine details', image: materialImages.metal },
      { title: 'Smoked Tint', finish: 'Neutral optical shade', use: 'Automotive and marine glass', image: materialImages.glass },
      { title: 'Heritage Timber', finish: 'Warm yacht-grade visual grain', use: 'Marine interior surface renewal', image: materialImages.timber },
    ],
    faqs: [
      { question: 'How long does a vehicle installation take?', answer: 'Paint protection commonly takes two to four days depending on coverage and complexity. Full colour changes may require additional time for preparation and detailed finishing.' },
      { question: 'How should wrapped vehicles be washed?', answer: 'Hand washing with pH-neutral products is preferred. Avoid abrasive compounds, aggressive pressure at edges and automatic brush washes.' },
      { question: 'Does paint protection film have a warranty?', answer: 'Yes. Film and workmanship coverage depends on the selected system and intended use, and is documented before installation.' },
      { question: 'Will film damage factory paint?', answer: 'Quality film applied to sound factory paint is designed for safe professional removal. Refinished or compromised panels require individual assessment.' },
      { question: 'How durable is paint protection film?', answer: 'Premium systems resist road debris, staining and environmental exposure, with self-healing topcoats helping manage fine surface marks.' },
      { question: 'Can I use the vehicle immediately?', answer: 'We recommend a short cure period and provide specific guidance for washing, weather exposure and edge inspection after collection.' },
      { question: 'Can colour-change wrap be removed?', answer: 'Yes. Professional removal returns the vehicle to the protected finish beneath, subject to the original paint condition.' },
      { question: 'How long do wraps and tint last?', answer: 'Service life varies with material, exposure, storage and care. Premium systems are selected around the asset and intended ownership period.' },
    ],
  },
]

export function getStudio(slug: string) {
  return studios.find((studio) => studio.slug === slug)
}
