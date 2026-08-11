import Image from 'next/image'
import { Reveal } from '@/components/reveal'

const systems = [
  {
    title: 'Interior surfaces',
    description: 'Architectural films and finishes for joinery, doors, walls and fitted elements where replacement is unnecessary.',
    image: '/images/hero-kitchen.png',
    alt: 'Refined kitchen interior showing cabinetry and fitted surfaces',
    applications: ['Joinery', 'Doors', 'Feature walls'],
  },
  {
    title: 'Exterior surfaces',
    description: 'Facade and envelope treatments considered around substrate condition, exposure and the intended visual result.',
    image: '/images/be-commercial.png',
    alt: 'Contemporary exterior facade with clean architectural surfaces',
    applications: ['Facades', 'Entrances', 'Architectural details'],
  },
  {
    title: 'Floor systems',
    description: 'Resinous and decorative floor directions specified around traffic, maintenance, appearance and site constraints.',
    image: '/images/be-hospitality.png',
    alt: 'Seamless architectural floor in a contemporary interior',
    applications: ['Commercial floors', 'Hospitality', 'Residential spaces'],
  },
]

export function Projects() {
  return (
    <section id="built-environments" className="mx-auto max-w-7xl px-6 py-28 md:py-40">
      <Reveal>
        <p className="text-[0.65rem] font-medium uppercase tracking-[0.4em] text-accent">Built Environments</p>
        <h2 className="mt-5 max-w-3xl font-serif text-4xl font-light leading-tight text-balance md:text-6xl">
          Renew the surface before replacing the asset
        </h2>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          We assess the existing substrate, intended use and visual brief before recommending a finish direction. Every proposal remains subject to survey, sample approval and technical suitability.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        {systems.map((system, index) => (
          <Reveal key={system.title} as="article" delay={index * 100}>
            <div className="overflow-hidden rounded-3xl bg-card">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={system.image} alt={system.alt} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover" />
              </div>
              <div className="p-7">
                <h3 className="font-serif text-2xl font-normal">{system.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{system.description}</p>
                <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${system.title} applications`}>
                  {system.applications.map((application) => (
                    <li key={application} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">{application}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
