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

export type Service = {
  title: string
  line: string
  image: string
  alt: string
}

export type Division = {
  slug: string
  title: string
  eyebrow: string
  headline: string
  line: string
  overview: string
  hero: string
  heroAlt: string
  services: Service[]
  manifesto?: string
  industriesList?: {
    category: string
    description: string
    environments: string[]
  }[]
  materialsLibrary?: {
    name: string
    description: string
    characteristics: string[]
  }[]
  transformationStories?: {
    title: string
    challenge: string
    solution: string
    impact: string
  }[]
  processSteps?: {
    number: number
    title: string
    description: string
  }[]
  assuranceBenefits?: {
    title: string
    description: string
  }[]
  knowledgeItems?: {
    question: string
    answer: string
  }[]
  inspirationCollections?: {
    name: string
    description: string
  }[]
}

export const divisions: Division[] = [
  {
    slug: 'built-environments',
    title: 'Built Environments',
    eyebrow: 'Division 01',
    headline: 'Architecture, resurfaced',
    line: 'Interiors reimagined through architectural surface systems.',
    overview:
      'Walls, cabinetry and joinery — transformed in place with engineered architectural films. The result of demolition, without the demolition.',
    hero: '/images/div-built.png',
    heroAlt: 'Residential interior with wrapped architectural wall panels',
    manifesto:
      'We believe that transformation need not come through demolition. Every interior holds potential—in its bones, its proportions, its soul. Surface becomes the medium through which spaces are reborn. Where others rebuild, we refine. We see walls not as finished elements but as possibilities. Wood becomes stone. Matte becomes mirror. Yesterday becomes tomorrow—seamlessly.',
    industriesList: [
      {
        category: 'Hospitality & Leisure',
        description: 'Guest experiences engineered through material precision',
        environments: ['Suites', 'Public spaces', 'Spa facilities', 'Dining areas'],
      },
      {
        category: 'Commercial & Corporate',
        description: 'Workplaces where every surface communicates intent',
        environments: ['Executive offices', 'Lobbies', 'Meeting spaces', 'Reception areas'],
      },
      {
        category: 'Residential',
        description: 'Living spaces elevated through thoughtful craft',
        environments: ['Kitchens', 'Master suites', 'Feature walls', 'Built-in joinery'],
      },
      {
        category: 'Retail & Display',
        description: 'Brand presence carried across every surface',
        environments: ['Shopfronts', 'Display walls', 'Product showcases', 'Fitting rooms'],
      },
    ],
    materialsLibrary: [
      {
        name: 'Textured Stone Films',
        description: 'Engineered stone appearance with tactile depth',
        characteristics: ['Authentic texture', 'Scuff-resistant', 'UV stable', 'Washable finishes'],
      },
      {
        name: 'Timber Veneers',
        description: 'Premium timber aesthetics without solid wood limitations',
        characteristics: ['Wide species range', 'Consistent grain', 'No shrinkage', 'Thermal stable'],
      },
      {
        name: 'Matte & Satin Finishes',
        description: 'Subtle surface qualities that absorb light with precision',
        characteristics: ['Anti-fingerprint', 'Premium tactile feel', 'Glare-free', 'Sophisticated'],
      },
      {
        name: 'Mirror & Metallic',
        description: 'Reflective surfaces that multiply and elevate space',
        characteristics: ['Distortion-free', 'Non-corrosive', 'Impact-rated', 'Hygiene-friendly'],
      },
    ],
    transformationStories: [
      {
        title: 'Heritage Hotel Rejuvenation',
        challenge: 'Historic property required modernization without losing character',
        solution: 'Architectural films applied to retain original walls while updating aesthetics',
        impact: 'Reopened 3 months ahead of schedule with 40% cost savings',
      },
      {
        title: 'Corporate Lobby Refresh',
        challenge: 'Dated finishes diminished brand presence in premium office',
        solution: 'Strategic material application transformed key environments',
        impact: 'Enhanced tenant satisfaction and maintained full occupancy during renovation',
      },
      {
        title: 'Luxury Residential Update',
        challenge: 'Kitchen cabinetry needed refinement without replacing joinery',
        solution: 'Custom architectural films applied to existing cabinetry',
        impact: 'Client achieved dream aesthetic at 60% of replacement cost',
      },
    ],
    processSteps: [
      {
        number: 1,
        title: 'Consultation & Analysis',
        description: 'We assess the space, understand the vision, and evaluate substrate conditions',
      },
      {
        number: 2,
        title: 'Material Selection',
        description: 'Curated material samples explored in context of your specific environment',
      },
      {
        number: 3,
        title: 'Installation Planning',
        description: 'Precision measurement and planning to minimize disruption',
      },
      {
        number: 4,
        title: 'Expert Application',
        description: 'Meticulous installation by our trained specialists',
      },
      {
        number: 5,
        title: 'Finishing Details',
        description: 'Trim work, edge finishing, and final detailing to perfection',
      },
    ],
    assuranceBenefits: [
      {
        title: 'Durability Guarantee',
        description: 'All installations backed by comprehensive durability warranty',
      },
      {
        title: 'Expert Installation',
        description: 'Certified technicians with years of precision craft experience',
      },
      {
        title: 'Maintenance Support',
        description: 'Clear care protocols to maintain pristine appearance for years',
      },
      {
        title: 'Material Warranty',
        description: 'Premium materials guaranteed against manufacturing defects',
      },
    ],
    knowledgeItems: [
      {
        question: 'How long does a typical installation take?',
        answer:
          'Timeline varies by project scope. Most residential kitchens are completed in 2-3 days. Commercial projects are scheduled to minimize disruption. We provide detailed timelines during the consultation phase.',
      },
      {
        question: 'Are these films removable?',
        answer:
          'Yes. Our architectural films are removable without damage to the underlying substrate. Removal is clean and straightforward, making them ideal for rentals and temporary transformations.',
      },
      {
        question: 'How do these compare to solid materials?',
        answer:
          'Architectural films offer precision aesthetics without the cost, installation time, or disruption of solid replacements. They deliver comparable visual results with superior flexibility and faster turnaround.',
      },
      {
        question: 'What maintenance is required?',
        answer:
          'Maintenance is minimal and straightforward. Most finishes require only gentle cleaning with soft cloths and mild soap. We provide complete care instructions with every project.',
      },
    ],
    inspirationCollections: [
      {
        name: 'Contemporary Minimalism',
        description: 'Clean lines, matte finishes, and purposeful restraint',
      },
      {
        name: 'Warm Materiality',
        description: 'Natural timber tones and textured stone surfaces',
      },
      {
        name: 'Modern Luxury',
        description: 'Mirror finishes, metallic accents, and reflective depth',
      },
    ],
    services: [
      {
        title: 'Kitchen & Cabinetry',
        line: 'Cabinetry resurfaced in stone, timber and matte finishes.',
        image: '/images/be-kitchen.png',
        alt: 'Minimal luxury kitchen with resurfaced matte cabinetry',
      },
      {
        title: 'Hospitality',
        line: 'Suites and public spaces, renewed without closure.',
        image: '/images/be-hospitality.png',
        alt: 'Boutique hotel suite with warm panelled feature wall',
      },
      {
        title: 'Retail',
        line: 'Environments that carry the brand in every surface.',
        image: '/images/be-retail.png',
        alt: 'Premium retail interior with stone-textured display wall',
      },
      {
        title: 'Residential',
        line: 'Living spaces elevated through material precision.',
        image: '/images/be-residential.png',
        alt: 'Contemporary residential living room with panelled wall',
      },
      {
        title: 'Corporate',
        line: 'Workplaces that communicate intent before a word is spoken.',
        image: '/images/be-corporate.png',
        alt: 'Corporate lobby with warm timber slat feature wall',
      },
      {
        title: 'Healthcare',
        line: 'Hygienic, durable surfaces engineered for care.',
        image: '/images/be-healthcare.png',
        alt: 'Calm healthcare reception with light timber surfaces',
      },
      {
        title: 'Education',
        line: 'Resilient environments built for daily intensity.',
        image: '/images/be-education.png',
        alt: 'Modern education interior with durable panelled walls',
      },
      {
        title: 'Commercial Buildings',
        line: 'Lobbies, lifts and common areas — transformed at scale.',
        image: '/images/be-commercial.png',
        alt: 'Commercial building lobby with architectural stone surfaces',
      },
    ],
  },
  {
    slug: 'glass-technologies',
    title: 'Glass Technologies',
    eyebrow: 'Division 02',
    headline: 'Light, engineered',
    line: 'Light, privacy and protection — engineered into glass.',
    overview:
      'Architectural films that control light, heat, privacy and safety. Invisible engineering with measurable performance.',
    hero: '/images/div-glass.png',
    heroAlt: 'Smart switchable glass partition detail',
    manifesto:
      'Glass is the most honest material in architecture. It connects, reveals, and protects simultaneously. We see glass not as a barrier but as a medium for control—of light, heat, and sight, without sacrificing transparency. Through precision engineering, we amplify glass\'s natural properties. Where others see limitations, we see opportunities for refinement.',
    industriesList: [
      {
        category: 'Commercial Architecture',
        description: 'Performance glazing for high-demand environments',
        environments: ['Office partitions', 'Atriums', 'Facade systems', 'Skylights'],
      },
      {
        category: 'Hospitality',
        description: 'Privacy and comfort in luxury guest experiences',
        environments: ['Suite glazing', 'Spa partitions', 'Conference rooms', 'Spa facilities'],
      },
      {
        category: 'Residential',
        description: 'Personal comfort through intelligent glazing',
        environments: ['Bedroom windows', 'Bathroom partitions', 'Terrace glazing', 'Interior walls'],
      },
      {
        category: 'Automotive & Aerospace',
        description: 'Protection and comfort for premium vehicles',
        environments: ['Vehicle glazing', 'Aircraft windows', 'Luxury interiors', 'Windscreens'],
      },
    ],
    materialsLibrary: [
      {
        name: 'Solar Control Films',
        description: 'Invisible heat rejection without compromising views',
        characteristics: ['UV rejection 99%', 'Reduced glare', 'Lower cooling costs', 'Clarity maintained'],
      },
      {
        name: 'Privacy Films',
        description: 'Frosted and patterned solutions for visual discretion',
        characteristics: ['Full opacity control', 'Pattern versatility', 'Gradient options', 'Switchable available'],
      },
      {
        name: 'Safety Films',
        description: 'Structural reinforcement without visible intervention',
        characteristics: ['Impact resistant', 'Shatter-proof', 'Blast protection', 'Invisible reinforcement'],
      },
      {
        name: 'Decorative Films',
        description: 'Aesthetic patterns applied with architectural restraint',
        characteristics: ['Custom patterns', 'Gradient possibilities', 'Brand integration', 'Premium finishes'],
      },
    ],
    transformationStories: [
      {
        title: 'Corporate Office Thermal Control',
        challenge: 'Floor-to-ceiling glazing created uncomfortable heat on southern facades',
        solution: 'Strategic solar control film applied to reduce HVAC load',
        impact: '28% reduction in cooling costs and improved employee comfort',
      },
      {
        title: 'Luxury Spa Privacy Enhancement',
        challenge: 'High-end spa required privacy without removing valuable views',
        solution: 'Custom switchable privacy film installed on treatment room glazing',
        impact: 'Maintained view quality while providing complete visual privacy on demand',
      },
      {
        title: 'Heritage Building Protection',
        challenge: 'Historic facade required safety upgrade without aesthetic compromise',
        solution: 'Invisible safety film reinforced existing glazing',
        impact: 'Enhanced safety while maintaining architectural integrity',
      },
    ],
    processSteps: [
      {
        number: 1,
        title: 'Thermal & Performance Analysis',
        description: 'We assess solar exposure, view priorities, and performance goals',
      },
      {
        number: 2,
        title: 'Film Selection & Testing',
        description: 'Samples evaluated for performance, clarity, and aesthetic impact',
      },
      {
        number: 3,
        title: 'Installation Planning',
        description: 'Detailed project planning to minimize disruption and ensure precision',
      },
      {
        number: 4,
        title: 'Professional Application',
        description: 'Expert installation using specialized equipment and techniques',
      },
      {
        number: 5,
        title: 'Performance Verification',
        description: 'Testing to confirm thermal and performance specifications',
      },
    ],
    assuranceBenefits: [
      {
        title: 'Performance Guarantee',
        description: 'All films guaranteed to meet specified thermal and safety performance',
      },
      {
        title: 'Professional Installation',
        description: 'Certified technicians trained in precision glass film application',
      },
      {
        title: 'Clarity Maintenance',
        description: 'Advanced formulations maintain optical clarity over time',
      },
      {
        title: 'Extended Warranty',
        description: 'Comprehensive coverage against delamination and defects',
      },
    ],
    knowledgeItems: [
      {
        question: 'How much heat does solar control film reject?',
        answer:
          'High-performance solar films can reject up to 97% of infrared heat while maintaining clear views. Rejection rates vary by film type—we select based on your specific climate and comfort needs.',
      },
      {
        question: 'Can privacy film be applied to existing windows?',
        answer:
          'Yes. Privacy films can be applied to any existing glazing without replacement. Application is clean and can be performed on existing windows with minimal disruption.',
      },
      {
        question: 'Are these films visible from outside?',
        answer:
          'Most premium films are virtually invisible from both sides. Some reflective films may show slight tinting on the exterior. We demonstrate exactly how films appear before installation.',
      },
      {
        question: 'What is the lifespan of these films?',
        answer:
          'Quality architectural films last 10-15 years or longer in normal conditions. Lifespan depends on climate, sun exposure, and maintenance. We provide clear care protocols with every installation.',
      },
    ],
    inspirationCollections: [
      {
        name: 'Solar Performance',
        description: 'Invisible engineering with measurable thermal benefits',
      },
      {
        name: 'Privacy Solutions',
        description: 'Discretion without sacrificing light and connection',
      },
      {
        name: 'Safety & Protection',
        description: 'Reinforced performance that remains visually transparent',
      },
    ],
    services: [
      {
        title: 'Privacy Films',
        line: 'Gradient and frosted systems for discreet separation.',
        image: '/images/gt-privacy.png',
        alt: 'Office partition with gradient frosted privacy film',
      },
      {
        title: 'Solar Control',
        line: 'Heat and glare, managed without losing the view.',
        image: '/images/gt-solar.png',
        alt: 'Floor-to-ceiling glazing with solar control film and soft light',
      },
      {
        title: 'Safety Films',
        line: 'Invisible reinforcement for glass under stress.',
        image: '/images/gt-safety.png',
        alt: 'Laminated architectural safety glass detail',
      },
      {
        title: 'Decorative Glass',
        line: 'Pattern and texture, applied with restraint.',
        image: '/images/gt-decorative.png',
        alt: 'Decorative etched glass panel with linear pattern',
      },
    ],
  },
  {
    slug: 'visual-communications',
    title: 'Visual Communications',
    eyebrow: 'Division 03',
    headline: 'Clarity, applied',
    line: 'Environments that speak with clarity and restraint.',
    overview:
      'Brand carried across fleets, facades and interiors — designed once, executed consistently, engineered to endure.',
    hero: '/images/div-visual.png',
    heroAlt: 'Premium retail storefront with minimal window graphics',
    manifesto:
      'Brand is not what you say—it\'s what you show every day. Across every surface, every channel, every moment of contact. We believe in clarity without noise, presence without shouting. Your brand deserves to be carried with precision and restraint across every canvas. Where typography meets texture, where color meets context, we engineer visual language that speaks only when necessary.',
    industriesList: [
      {
        category: 'Retail & Commerce',
        description: 'Brand presence at point of experience',
        environments: ['Storefronts', 'Window graphics', 'Interior signage', 'Product displays'],
      },
      {
        category: 'Transportation & Fleet',
        description: 'Moving brand visibility with precision engineering',
        environments: ['Fleet vehicles', 'Delivery trucks', 'Service vehicles', 'Branding elements'],
      },
      {
        category: 'Commercial Navigation',
        description: 'Wayfinding that communicates without distraction',
        environments: ['Building signage', 'Interior wayfinding', 'Corporate corridors', 'Reception areas'],
      },
      {
        category: 'Premium Facades',
        description: 'Architectural brand integration at scale',
        environments: ['Building wraps', 'Facade graphics', 'Entrance statements', 'Roof installations'],
      },
    ],
    materialsLibrary: [
      {
        name: 'Vinyl Graphics',
        description: 'Durable, precise brand application across any surface',
        characteristics: ['UV resistant', 'Weatherproof', 'Precise cutting', 'Color accurate'],
      },
      {
        name: 'Window Treatments',
        description: 'Transparent or opaque communication without sacrificing light',
        characteristics: ['Frosted effects', 'Pattern capability', 'One-way visibility', 'Premium adhesion'],
      },
      {
        name: 'Fleet Wraps',
        description: 'Full-color branding systems engineered for motion and durability',
        characteristics: ['High-speed durability', 'Weather resistant', 'Color fade resistance', 'Professional finish'],
      },
      {
        name: 'Signage Systems',
        description: 'Permanent and semi-permanent wayfinding solutions',
        characteristics: ['Multiple substrates', 'Custom shapes', 'Lighting integration', 'Accessibility compliant'],
      },
    ],
    transformationStories: [
      {
        title: 'National Fleet Rebranding',
        challenge: 'Multi-location brand needed consistent visual identity across 150+ vehicles',
        solution: 'Standardized fleet wrap system designed and applied across entire network',
        impact: 'Unified brand presence achieved in 8 weeks with zero downtime',
      },
      {
        title: 'Flagship Retail Launch',
        challenge: 'New luxury retail required premium storefront identity within heritage building',
        solution: 'Custom window graphics and facade treatment integrated architecture',
        impact: 'Signature retail presence established—23% increase in foot traffic',
      },
      {
        title: 'Corporate Navigation System',
        challenge: 'Complex multi-level headquarters required intuitive wayfinding',
        solution: 'Comprehensive signage system integrated brand identity throughout',
        impact: 'Reduced visitor confusion by 87% while maintaining design elegance',
      },
    ],
    processSteps: [
      {
        number: 1,
        title: 'Brand Analysis',
        description: 'Deep understanding of your visual identity and communication goals',
      },
      {
        number: 2,
        title: 'Context Evaluation',
        description: 'Assessment of application surfaces, environments, and technical requirements',
      },
      {
        number: 3,
        title: 'Design Development',
        description: 'Custom application designs that maximize brand presence and durability',
      },
      {
        number: 4,
        title: 'Precision Production',
        description: 'State-of-the-art equipment ensures perfect color accuracy and finish',
      },
      {
        number: 5,
        title: 'Expert Installation',
        description: 'Professional application by certified technicians across all locations',
      },
    ],
    assuranceBenefits: [
      {
        title: 'Brand Consistency',
        description: 'Standardized application across all locations and surfaces',
      },
      {
        title: 'Durability Assurance',
        description: 'Graphics guaranteed to maintain appearance in all weather conditions',
      },
      {
        title: 'Installation Excellence',
        description: 'Professional installation backed by performance guarantees',
      },
      {
        title: 'Color Accuracy',
        description: 'Precision color matching to ensure brand integrity',
      },
    ],
    knowledgeItems: [
      {
        question: 'How long do fleet wraps last?',
        answer:
          'High-quality fleet wraps typically last 5-7 years in normal conditions. Lifespan depends on sun exposure, washing frequency, and climate. We use premium materials rated for extended durability.',
      },
      {
        question: 'Can graphics be applied to curved surfaces?',
        answer:
          'Yes. Our vinyl graphics conform to curved surfaces including vehicle bodies, cylindrical pipes, and architectural features. Complex surfaces require specialized application techniques.',
      },
      {
        question: 'What if the design needs to be updated?',
        answer:
          'Graphics can be updated by replacing specific sections or complete wraps. We maintain design files for easy modifications and reordering, ensuring consistency across multiple applications.',
      },
      {
        question: 'Are wraps removable?',
        answer:
          'Yes. Quality wraps are removable without damage to the underlying surface. Removal requires professional care to prevent paint damage. We handle removal and reapplication as part of our service.',
      },
    ],
    inspirationCollections: [
      {
        name: 'Minimal Typography',
        description: 'Brand clarity through restrained text and carefully chosen type',
      },
      {
        name: 'Color Systems',
        description: 'Strategic color application that commands attention without noise',
      },
      {
        name: 'Integrated Design',
        description: 'Graphics that enhance rather than compete with architectural context',
      },
    ],
    services: [
      {
        title: 'Fleet Branding',
        line: 'Every vehicle, a moving expression of the brand.',
        image: '/images/vc-fleet.png',
        alt: 'Fleet of vans with minimal midnight blue brand livery',
      },
      {
        title: 'Shopfront Branding',
        line: 'First impressions, composed with precision.',
        image: '/images/vc-shopfront.png',
        alt: 'Elegant boutique shopfront with restrained brand graphics',
      },
      {
        title: 'Wayfinding',
        line: 'Navigation that never raises its voice.',
        image: '/images/vc-wayfinding.png',
        alt: 'Minimal architectural wayfinding signage in a corporate atrium',
      },
      {
        title: 'Window Graphics',
        line: 'Glazing as a quiet communication surface.',
        image: '/images/vc-window.png',
        alt: 'Storefront glazing with subtle frosted window graphics',
      },
    ],
  },
  {
    slug: 'mobility',
    title: 'Mobility',
    eyebrow: 'Division 04',
    headline: 'Motion, protected',
    line: 'Precision surface craft for vehicles of every scale.',
    overview:
      'Paint protection, colour change and tint for road, water and air. Applied in controlled conditions, finished to concours standard.',
    hero: '/images/div-mobility.png',
    heroAlt: 'Luxury vehicle detail with satin protection wrap',
    manifesto:
      'Exceptional vehicles deserve exceptional surfaces. Every machine represents a vision, an investment, a statement. We protect that vision with the same precision that created it. From the first moment of light reflection to years of demanding use, your vehicle\'s surface tells a story. We ensure that story is one of excellence, durability, and protection at the highest level.',
    industriesList: [
      {
        category: 'Luxury Automobiles',
        description: 'Concours-level surface protection and transformation',
        environments: ['Paint protection', 'Color change wraps', 'Window tint', 'Detail finishes'],
      },
      {
        category: 'Marine Vessels',
        description: 'Salt-water durability engineering for pleasure and performance yachts',
        environments: ['Hull protection', 'Superstructure wraps', 'Tinted glazing', 'Anti-corrosion'],
      },
      {
        category: 'Aviation',
        description: 'Aviation-grade finishes for private and corporate aircraft',
        environments: ['Fuselage livery', 'Protective films', 'Custom branding', 'Weatherproofing'],
      },
      {
        category: 'Commercial Vehicles',
        description: 'Durable protection for high-use fleet vehicles',
        environments: ['Fleet protection', 'Color standardization', 'Branding integration', 'Durability focus'],
      },
    ],
    materialsLibrary: [
      {
        name: 'Paint Protection Film',
        description: 'Invisible armor preserving original paint through years of use',
        characteristics: ['Self-healing properties', 'UV stable', '10-year durability', 'Clear optical'],
      },
      {
        name: 'Color Change Wraps',
        description: 'Complete transformation while maintaining factory paint integrity',
        characteristics: ['Infinite color options', 'Premium finishes', 'Removable', '7-year guarantee'],
      },
      {
        name: 'Window Tint Films',
        description: 'Privacy, comfort, and UV protection for any glazed surface',
        characteristics: ['Heat rejection', 'Privacy options', 'UV 99%', 'Distortion-free'],
      },
      {
        name: 'Premium Finishes',
        description: 'Specialized matte, satin, and gloss effects for bespoke styling',
        characteristics: ['Multiple textures', 'Custom colors', 'Hybrid options', 'Concours-ready'],
      },
    ],
    transformationStories: [
      {
        title: 'Concours-Level Paint Protection',
        challenge: 'Exotic car owner required maximum paint protection without visible alteration',
        solution: 'Full paint protection film applied under controlled workshop conditions',
        impact: 'Factory finish preserved—vehicle maintains concours-level appearance',
      },
      {
        title: 'Yacht Livery Transformation',
        challenge: 'Luxury yacht required complete color change resistant to salt-water environment',
        solution: 'Marine-grade wrap applied in protected facility with extended durability testing',
        impact: 'Stunning new appearance maintained through full seasons of use',
      },
      {
        title: 'Private Aircraft Custom Branding',
        challenge: 'Corporate jet required custom livery meeting aviation standards',
        solution: 'Aviation-grade wrap system designed and applied to exacting specifications',
        impact: 'Corporate branding achieved while maintaining aircraft aerodynamic integrity',
      },
    ],
    processSteps: [
      {
        number: 1,
        title: 'Vehicle Assessment',
        description: 'Comprehensive evaluation of surface condition and protection needs',
      },
      {
        number: 2,
        title: 'Material Selection',
        description: 'Curated options for protection level, finish, and durability requirements',
      },
      {
        number: 3,
        title: 'Preparation',
        description: 'Meticulous surface preparation ensuring flawless application',
      },
      {
        number: 4,
        title: 'Professional Application',
        description: 'Expert installation in controlled environment by certified specialists',
      },
      {
        number: 5,
        title: 'Quality Verification',
        description: 'Final inspection and testing to ensure concours-level finish',
      },
    ],
    assuranceBenefits: [
      {
        title: 'Concours Finish',
        description: 'Installation to exacting museum and competition standards',
      },
      {
        title: 'Extended Warranty',
        description: 'Comprehensive coverage on all materials and workmanship',
      },
      {
        title: 'Controlled Environment',
        description: 'All applications performed in specialized, climate-controlled facilities',
      },
      {
        title: 'Expert Craftsmanship',
        description: 'Experienced specialists trained in premium automotive finishing',
      },
    ],
    knowledgeItems: [
      {
        question: 'How does paint protection film protect the paint?',
        answer:
          'PPF creates an invisible barrier against minor scratches, stone chips, and environmental contaminants. High-quality films include self-healing properties that repair minor surface damage when exposed to heat.',
      },
      {
        question: 'Can color change wraps be removed?',
        answer:
          'Yes. Premium color change wraps are completely removable and leave no residue on factory paint. Removal must be performed carefully to avoid paint damage—we recommend professional removal.',
      },
      {
        question: 'How long does application take?',
        answer:
          'Timeline depends on vehicle complexity and scope of work. Paint protection typically takes 2-5 days. Color wraps require 3-7 days. We provide detailed schedules during consultation.',
      },
      {
        question: 'What maintenance is required?',
        answer:
          'Protected surfaces require standard automotive maintenance. We provide complete care instructions. Most applications benefit from regular washing and occasional professional detailing.',
      },
    ],
    inspirationCollections: [
      {
        name: 'Factory Protection',
        description: 'Invisible defense maintaining original paint integrity',
      },
      {
        name: 'Color Transformation',
        description: 'Complete aesthetic redesign through premium wrapping',
      },
      {
        name: 'Bespoke Finishes',
        description: 'Custom effects from matte elegance to mirror brilliance',
      },
    ],
    services: [
      {
        title: 'Paint Protection Film',
        line: 'Invisible armour for factory paint.',
        image: '/images/mb-ppf.png',
        alt: 'Paint protection film being finished on a luxury car bonnet',
      },
      {
        title: 'Wraps',
        line: 'Colour change with a factory-level finish.',
        image: '/images/mb-wraps.png',
        alt: 'Luxury car in satin colour-change wrap under studio light',
      },
      {
        title: 'Tint',
        line: 'Comfort, privacy and protection in every pane.',
        image: '/images/mb-tint.png',
        alt: 'Luxury vehicle with precision-tinted glass',
      },
      {
        title: 'Marine',
        line: 'Hull and superstructure surfaces, sea-proofed.',
        image: '/images/mb-marine.png',
        alt: 'Yacht hull with premium protective wrap at a marina',
      },
      {
        title: 'Aircraft',
        line: 'Aviation-grade finishes for private aircraft.',
        image: '/images/mb-aircraft.png',
        alt: 'Private jet fuselage detail with premium livery',
      },
      {
        title: 'Luxury Vehicles',
        line: 'Bespoke treatment for exceptional machines.',
        image: '/images/mb-luxury.png',
        alt: 'Exotic luxury vehicle in a minimal studio environment',
      },
    ],
  },
]

export function getDivision(slug: string) {
  return divisions.find((d) => d.slug === slug)
}
