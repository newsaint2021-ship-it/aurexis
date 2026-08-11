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
    hero: '/images/portfolio-built-hero.avif',
    heroAlt: 'Curved timber-clad walls defining a contemporary commercial interior',
    environmentsLabel: 'What we transform',
    environments: [
      { title: 'Kitchen & Cabinetry', line: 'Existing joinery, materially renewed.', detail: 'Doors, drawer fronts, islands and fitted units can be resurfaced with controlled edges and consistent grain direction.', image: '/images/portfolio-cabinetry.avif', alt: 'Kitchen cabinetry with dark matte fronts and a tiled splashback' },
      { title: 'Walls & Feature Walls', line: 'Large planes become defining gestures.', detail: 'Timber, stone and solid-colour finishes can bring continuity and material depth to corridors and feature walls.', image: '/images/portfolio-wall-surfaces.avif', alt: 'Commercial corridor lined with continuous timber wall panels' },
      { title: 'Doors & Panels', line: 'High-contact details, precisely resolved.', detail: 'Surface systems can renew doors, lift surrounds and fitted panels without removing the underlying asset.', image: '/images/portfolio-doors.avif', alt: 'Dark lift doors framed by warm architectural timber panels' },
      { title: 'Furniture & Joinery', line: 'Fitted elements gain a coherent new finish.', detail: 'Counters, desks and bespoke joinery can be resurfaced to align with the surrounding architectural palette.', image: '/images/portfolio-joinery.avif', alt: 'Contemporary interior with dark timber fitted cabinetry and joinery' },
    ],
    industries: [
      { title: 'Hospitality', line: 'Material renewal for guest-facing environments.', detail: 'Bars, counters and shared spaces can evolve through focused surface interventions.', image: '/images/portfolio-hospitality.avif', alt: 'Hospitality bar with timber, stone and metal finishes' },
      { title: 'Workplace', line: 'Material identity for focused teams.', detail: 'Reception, meeting and work areas can communicate confidence through coordinated surface finishes.', image: '/images/portfolio-workplace.avif', alt: 'Contemporary workplace with glazed partitions and warm timber surfaces' },
      { title: 'Reception Environments', line: 'A considered first impression.', detail: 'Reception counters and surrounding wall surfaces can be renewed as one material composition.', image: '/images/portfolio-reception.avif', alt: 'Commercial reception desk with fluted timber detailing' },
      { title: 'Residential', line: 'A considered second life for interiors.', detail: 'Kitchen, wardrobe and fitted furniture surfaces can gain material depth without wholesale replacement.', image: '/images/be-residential.png', alt: 'Contemporary residential living room with timber wall panelling' },
      { title: 'Commercial Interiors', line: 'Existing assets, visually realigned.', detail: 'Walls, doors, counters and joinery can be coordinated around a renewed interior direction.', image: '/images/portfolio-built-hero.avif', alt: 'Commercial interior with curved timber-clad architectural walls' },
    ],
    principles: [
      { title: 'Retain what works', proof: 'Sound substrates stay in place, reducing demolition, waste and cost.' },
      { title: 'Material realism', proof: 'Grain, scale and junctions are specified to read as an architectural whole.' },
      { title: 'Operational continuity', proof: 'Phased installation limits closures and protects occupied environments.' },
      { title: 'Controlled preparation', proof: 'Every substrate is assessed, repaired and primed before application.' },
      { title: 'Edge discipline', proof: 'Returns, reveals and interfaces are resolved before the first panel is laid.' },
      { title: 'Commercial durability', proof: 'Systems are selected against traffic, cleaning cycles and expected use.' },
      { title: 'Renewable by design', proof: 'Finishes can be changed again as the environment evolves.' },
      { title: 'Documented handover', proof: 'Cleaning and maintenance guidance is defined for the selected finish.' },
    ],
    gallery: [
      { image: '/images/portfolio-wall-surfaces.avif', alt: 'Continuous timber wall treatment in a commercial corridor', caption: 'Wall surfaces / Commercial', format: 'wide' },
      { image: '/images/portfolio-cabinetry.avif', alt: 'Dark matte cabinetry paired with a patterned splashback', caption: 'Cabinetry / Interior', format: 'portrait' },
      { image: '/images/portfolio-doors.avif', alt: 'Lift doors framed by precisely aligned timber panels', caption: 'Doors & panels / Commercial', format: 'detail' },
      { image: '/images/portfolio-workplace.avif', alt: 'Glazed workplace partitions integrated with warm timber finishes', caption: 'Workplace / Commercial', format: 'wide' },
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
      { question: 'How long does installation take?', answer: 'Programme depends on substrate condition, area, preparation and access. The working sequence is defined after survey.' },
      { question: 'What surfaces can be resurfaced?', answer: 'Stable, properly prepared substrates including laminate, metal, glass, sealed timber and many painted surfaces can be transformed after a site assessment.' },
      { question: 'How durable are the finishes?', answer: 'Durability varies by system, substrate, traffic and cleaning regime. The intended use is reviewed before a material direction is recommended.' },
      { question: 'How should surfaces be cleaned?', answer: 'Use a soft cloth with a mild, non-abrasive cleaner. We provide finish-specific care guidance at handover.' },
      { question: 'What is confirmed before work begins?', answer: 'The agreed scope, substrate preparation, selected finish, care requirements and commercial terms are recorded before installation.' },
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
      { title: 'Fleet Identity', line: 'Every vehicle, one recognisable system.', detail: 'Colour, scale and placement can be translated into repeatable commercial-vehicle graphics.', image: '/images/portfolio-fleet-identity.jpeg', alt: 'Commercial van shown with a coordinated fleet graphic layout' },
      { title: 'Shopfronts', line: 'Recognition begins before arrival.', detail: 'Signage, glazing and entrance graphics can be composed as one clear commercial first impression.', image: '/images/vc-shopfront.png', alt: 'Retail shopfront with restrained exterior signage' },
      { title: 'Glass Graphics', line: 'Communication carried through light.', detail: 'Brand graphics, privacy and pattern can be integrated into glazed partitions and windows.', image: '/images/portfolio-glass-branding.avif', alt: 'Automotive showroom glazing with large-format vehicle graphics' },
      { title: 'Environmental Graphics', line: 'Identity integrated into the interior.', detail: 'Pattern and branded manifestations can add privacy while supporting the character of a workplace.', image: '/images/portfolio-glass-graphics.avif', alt: 'Office glass panel with frosted branded topographic graphics' },
    ],
    industries: [
      { title: 'Retail', line: 'Identity at every customer touchpoint.', detail: 'Storefront, glazing and interior communication can operate as one system.', image: '/images/vc-shopfront.png', alt: 'Premium branded retail storefront' },
      { title: 'Logistics', line: 'Moving assets made instantly recognisable.', detail: 'Fleet systems can remain consistent across vehicle types and locations.', image: '/images/portfolio-commercial-vehicle.jpeg', alt: 'Branded logistics truck photographed on the road' },
      { title: 'Property', line: 'Places made easier to enter and understand.', detail: 'Signage and navigation can clarify arrival, movement and destination.', image: '/images/vc-wayfinding.png', alt: 'Architectural property wayfinding system' },
      { title: 'Automotive Retail', line: 'Product and identity across glazed environments.', detail: 'Large-format window graphics can create visibility while retaining the architectural glazing.', image: '/images/portfolio-glass-branding.avif', alt: 'Vehicle showroom with branded graphics applied to glass' },
      { title: 'Corporate', line: 'A coherent identity across the workplace.', detail: 'Branded manifestations can support privacy and visual consistency without overwhelming the architecture.', image: '/images/portfolio-glass-graphics.avif', alt: 'Corporate glass panel with frosted environmental graphics' },
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
      { image: '/images/vc-shopfront.png', alt: 'Restrained identity presented across a retail shopfront', caption: 'Shopfront identity / Retail', format: 'wide' },
      { image: '/images/portfolio-fleet-identity.jpeg', alt: 'Commercial van with a repeatable branded graphic layout', caption: 'Fleet identity / Commercial', format: 'portrait' },
      { image: '/images/portfolio-glass-graphics.avif', alt: 'Frosted environmental graphic applied to office glazing', caption: 'Environmental graphics / Workplace', format: 'detail' },
      { image: '/images/portfolio-glass-branding.avif', alt: 'Large-format vehicle graphics applied across showroom glass', caption: 'Glass branding / Automotive retail', format: 'wide' },
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
      { question: 'What affects graphic service life?', answer: 'Application, exposure, substrate condition, cleaning and material selection all matter. The intended term is discussed during specification.' },
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
    hero: '/images/portfolio-glass-hero.avif',
    heroAlt: 'Decorative frosted tree motif applied across a glazed entrance',
    environmentsLabel: 'What we transform',
    environments: [
      { title: 'Privacy Film', line: 'Separation without losing daylight.', detail: 'Frosted films can calibrate visibility across windows, doors and internal glass partitions.', image: '/images/portfolio-glass-privacy.avif', alt: 'Workplace windows treated with full-height frosted privacy film' },
      { title: 'Glazed Partitions', line: 'Privacy aligned across architectural sightlines.', detail: 'Manifestation bands can be set out consistently across framed office partition systems.', image: '/images/portfolio-glass-frosted.avif', alt: 'Office glass partitions with aligned frosted privacy bands' },
      { title: 'Decorative Glass', line: 'Pattern integrated into architecture.', detail: 'Cut and printed films can bring controlled screening and visual identity to glazed entrances.', image: '/images/portfolio-glass-hero.avif', alt: 'Glazed double doors with a decorative frosted tree design' },
      { title: 'Glass Branding', line: 'Commercial identity carried through glazing.', detail: 'Large-format graphics can turn windows and partitions into branded environmental surfaces.', image: '/images/portfolio-glass-branding.avif', alt: 'Automotive showroom glazing with large-format vehicle graphics' },
    ],
    industries: [
      { title: 'Workplace', line: 'Privacy across glazed meeting and work areas.', detail: 'Frosted treatments can screen occupied zones while retaining shared light.', image: '/images/portfolio-glass-frosted.avif', alt: 'Commercial office partitions with frosted privacy film' },
      { title: 'Commercial Property', line: 'Existing glazing adapted to new spatial needs.', detail: 'Privacy and decorative films can update occupied interiors without replacing glass.', image: '/images/portfolio-glass-privacy.avif', alt: 'Commercial windows with full-height frosted film' },
      { title: 'Retail', line: 'Glass that communicates.', detail: 'Branded and decorative layers can support storefront and showroom identity.', image: '/images/portfolio-glass-branding.avif', alt: 'Branded automotive showroom glazing' },
      { title: 'Corporate', line: 'Identity with appropriate restraint.', detail: 'Custom manifestations can combine privacy, pattern and workplace character.', image: '/images/portfolio-glass-graphics.avif', alt: 'Corporate glass panel with frosted topographic graphics' },
      { title: 'Hospitality', line: 'Decorative screening with light preserved.', detail: 'Patterned film can define entrances and partitions without closing the space.', image: '/images/portfolio-glass-hero.avif', alt: 'Decorative frosted motif on a glazed hospitality entrance' },
    ],
    principles: [
      { title: 'Measured first', proof: 'Orientation, glass type, exposure and performance goals are assessed on site.' },
      { title: 'System compatibility', proof: 'Film and glazing compatibility is considered against thermal stress and intended use.' },
      { title: 'Performance clarity', proof: 'Specifications state the expected solar, UV, privacy or safety outcome.' },
      { title: 'Light preserved', proof: 'Solutions are selected to retain useful daylight and visual openness.' },
      { title: 'Clean installation', proof: 'Controlled preparation limits dust, contamination and visible edge variation.' },
      { title: 'Precise sightlines', proof: 'Patterns and gradients align across panels, mullions and room geometry.' },
      { title: 'Operational phasing', proof: 'Occupied spaces are completed pane by pane with contained disruption.' },
      { title: 'Documented aftercare', proof: 'Cleaning, curing and inspection requirements are defined for the selected system.' },
    ],
    gallery: [
      { image: '/images/portfolio-glass-frosted.avif', alt: 'Aligned frosted bands across workplace glass partitions', caption: 'Privacy film / Workplace', format: 'wide' },
      { image: '/images/portfolio-glass-hero.avif', alt: 'Decorative frosted tree motif across a glazed entrance', caption: 'Decorative glass / Entrance', format: 'portrait' },
      { image: '/images/portfolio-glass-graphics.avif', alt: 'Frosted topographic environmental graphic on glass', caption: 'Manifestation / Corporate', format: 'detail' },
      { image: '/images/portfolio-glass-branding.avif', alt: 'Large-format graphics applied to showroom glazing', caption: 'Glass branding / Retail', format: 'wide' },
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
      { question: 'How long does glass film installation take?', answer: 'Programme depends on panel count, access, preparation and operating requirements. A sequence is proposed after survey.' },
      { question: 'Will solar film make the room dark?', answer: 'Not necessarily. Modern neutral films can reject meaningful heat and UV while retaining high levels of visible light.' },
      { question: 'How is filmed glass cleaned?', answer: 'After curing, use a soft cloth or non-abrasive squeegee with mild soapy water. Avoid blades and abrasive chemicals.' },
      { question: 'Does film strengthen glass?', answer: 'Safety film helps hold fragments together after breakage. It does not make glass unbreakable, and the complete anchoring specification determines performance.' },
      { question: 'How is the final system confirmed?', answer: 'Glass type, exposure, film compatibility, intended result and supplier terms are recorded in the final specification.' },
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
    hero: '/images/portfolio-mobility-hero.jpeg',
    heroAlt: 'Modified performance car finished in a muted green wrap',
    environmentsLabel: 'What we transform',
    environments: [
      { title: 'Colour Change', line: 'A new character across the complete form.', detail: 'Colour-change film can transform body panels while retaining the underlying painted finish.', image: '/images/portfolio-colour-wrap.jpeg', alt: 'Sports coupe finished in a pale purple colour-change wrap' },
      { title: 'Paint Protection', line: 'A clear protective layer over vulnerable paintwork.', detail: 'Paint protection film can be applied to high-impact panels or mapped across the full vehicle.', image: '/images/portfolio-paint-protection.jpeg', alt: 'Clear paint protection film being installed on a blue vehicle' },
      { title: 'Automotive Detailing', line: 'Every panel considered as part of one form.', detail: 'Wrap, trim and finish choices can be coordinated around the lines and details of the vehicle.', image: '/images/portfolio-mobility-detail.jpeg', alt: 'Blue performance vehicle with a satin-finished bonnet' },
      { title: 'Commercial Vehicles', line: 'Moving assets made commercially recognisable.', detail: 'Fleet graphics can translate identity into repeatable layouts for vans and trucks.', image: '/images/portfolio-fleet-identity.jpeg', alt: 'Commercial van with a coordinated fleet graphic design' },
    ],
    industries: [
      { title: 'Performance Vehicles', line: 'Surface transformation shaped around the vehicle.', detail: 'Colour and protective films can follow complex bodywork and high-impact areas.', image: '/images/portfolio-mobility-hero.jpeg', alt: 'Modified performance car in a muted green finish' },
      { title: 'Colour Change', line: 'A reversible visual direction.', detail: 'Film can alter colour and finish while leaving sound factory paint beneath.', image: '/images/portfolio-colour-wrap.jpeg', alt: 'Sports coupe in a pale purple wrap' },
      { title: 'Paint Protection', line: 'Protection focused on vulnerable panels.', detail: 'Clear film can shield high-contact and road-facing surfaces while preserving the visible finish.', image: '/images/portfolio-paint-protection.jpeg', alt: 'Clear protection film installed over blue vehicle paintwork' },
      { title: 'Commercial Fleets', line: 'A consistent identity across moving assets.', detail: 'Repeatable graphics can be adapted across commercial vans and larger vehicles.', image: '/images/portfolio-commercial-vehicle.jpeg', alt: 'Branded commercial logistics truck' },
      { title: 'Vehicle Graphics', line: 'Detail, pattern and identity in motion.', detail: 'Graphic systems can be applied at full-body or feature-panel scale.', image: '/images/portfolio-mobility-detail.jpeg', alt: 'Blue performance car with a detailed satin bonnet treatment' },
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
      { image: '/images/portfolio-mobility-hero.jpeg', alt: 'Muted green finish across a modified performance vehicle', caption: 'Colour transformation / Performance', format: 'wide' },
      { image: '/images/portfolio-colour-wrap.jpeg', alt: 'Pale purple colour-change finish on a sports coupe', caption: 'Colour change / Automotive', format: 'portrait' },
      { image: '/images/portfolio-paint-protection.jpeg', alt: 'Clear paint protection film during installation', caption: 'Paint protection / Installation', format: 'detail' },
      { image: '/images/portfolio-commercial-vehicle.jpeg', alt: 'Branded commercial truck in motion', caption: 'Fleet identity / Commercial', format: 'wide' },
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
      { question: 'How is paint protection film specified?', answer: 'Film selection depends on paint condition, coverage areas, intended use and maintenance. These factors are reviewed before installation.' },
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
