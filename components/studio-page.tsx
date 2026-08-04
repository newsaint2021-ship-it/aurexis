import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown, ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { company, studioProcess, type Studio } from '@/lib/site-data'

export function StudioPage({ studio }: { studio: Studio }) {
  return (
    <main>
      <section className="relative flex min-h-svh items-end overflow-hidden bg-primary text-primary-foreground">
        <Image
          src={studio.hero}
          alt={studio.heroAlt}
          fill
          priority
          sizes="100vw"
          className="studio-hero-image object-cover"
        />
        <div className="hero-scrim absolute inset-0" />
        <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-10 px-6 pb-12 pt-36 md:pb-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-4xl">
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.45em] text-primary-foreground/65">
              {studio.eyebrow}
            </p>
            <h1 className="mt-6 font-serif text-5xl font-light leading-[0.98] text-balance sm:text-6xl md:text-8xl">
              {studio.title}
            </h1>
            <p className="mt-7 max-w-2xl text-base font-light leading-relaxed text-primary-foreground/75 md:text-lg">
              {studio.line}
            </p>
          </div>
          <a
            href="#studio-manifesto"
            className="glass-dark flex size-14 shrink-0 items-center justify-center rounded-full"
            aria-label={`Discover ${studio.title}`}
          >
            <ArrowDown className="size-5" aria-hidden="true" />
          </a>
        </div>
      </section>

      <section id="studio-manifesto" className="mx-auto max-w-7xl px-6 py-28 md:py-40">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-4">
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.4em] text-accent">
              Our position
            </p>
            <h2 className="mt-5 font-serif text-4xl font-light leading-tight text-balance md:text-6xl">
              {studio.headline}
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-7 lg:col-start-6" delay={120}>
            <p className="font-serif text-3xl font-light leading-snug text-pretty md:text-5xl">
              {studio.manifesto}
            </p>
            <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              {studio.overview}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-28 md:py-40">
          <Reveal>
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.4em] text-accent">
              {studio.environmentsLabel}
            </p>
            <h2 className="mt-5 max-w-3xl font-serif text-4xl font-light leading-tight text-balance md:text-6xl">
              Material thinking, applied to context
            </h2>
          </Reveal>

          <div className="mt-20 flex flex-col gap-24 md:gap-32">
            {studio.environments.map((environment, index) => (
              <Reveal key={environment.title} delay={(index % 2) * 100}>
                <article className="grid items-center gap-8 md:grid-cols-12 md:gap-10">
                  <div
                    className={`img-reveal relative aspect-[4/3] overflow-hidden rounded-3xl md:col-span-7 ${
                      index % 2 ? 'md:col-start-6 md:row-start-1' : ''
                    }`}
                  >
                    <Image
                      src={environment.image}
                      alt={environment.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 60vw"
                      className="object-cover"
                    />
                  </div>
                  <div
                    className={`md:col-span-4 ${
                      index % 2 ? 'md:col-start-1 md:row-start-1' : 'md:col-start-9'
                    }`}
                  >
                    <p className="text-[0.65rem] font-medium uppercase tracking-[0.3em] text-muted-foreground">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <h3 className="mt-4 font-serif text-3xl font-light text-balance md:text-4xl">
                      {environment.title}
                    </h3>
                    <p className="mt-5 text-base leading-relaxed">{environment.line}</p>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {environment.detail}
                    </p>
                    <Link
                      href="/contact"
                      className="mt-7 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-accent"
                    >
                      Discuss this environment
                      <ArrowUpRight className="size-4" aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-28 md:py-40">
          <Reveal className="max-w-3xl">
            <p className="text-[0.65rem] font-medium uppercase tracking-[0.4em] text-primary-foreground/50">
              From intent to aftercare
            </p>
            <h2 className="mt-5 font-serif text-4xl font-light leading-tight text-balance md:text-6xl">
              A controlled process, end to end
            </h2>
          </Reveal>
          <ol className="mt-16 grid border-t border-primary-foreground/15 sm:grid-cols-2 lg:grid-cols-4">
            {studioProcess.map((step, index) => (
              <Reveal
                as="li"
                key={step.title}
                delay={(index % 4) * 70}
                className="border-b border-primary-foreground/15 py-8 sm:px-6 sm:first:pl-0 lg:min-h-64 lg:border-r lg:last:border-r-0"
              >
                <p className="text-[0.65rem] font-medium tracking-[0.25em] text-primary-foreground/40">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-10 font-serif text-2xl font-light">{step.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-primary-foreground/55">
                  {step.line}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-28 md:py-40">
        <Reveal>
          <div className="grid overflow-hidden rounded-3xl bg-card lg:grid-cols-2">
            <div className="relative min-h-80 lg:min-h-[42rem]">
              <Image
                src={studio.environments[0].image}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-14 lg:p-16">
              <p className="text-[0.65rem] font-medium uppercase tracking-[0.4em] text-accent">
                Consultation
              </p>
              <h2 className="mt-5 font-serif text-4xl font-light leading-tight text-balance md:text-6xl">
                Begin with the surface
              </h2>
              <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground">
                Tell us what you want the environment to become. Our studio will help define the right material, method and path to installation.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link href="/contact" className="lift inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-xs font-medium uppercase tracking-[0.18em] text-primary-foreground">
                  Book consultation <ArrowUpRight className="size-4" aria-hidden="true" />
                </Link>
                <a href={company.whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-6 py-4 text-xs font-medium uppercase tracking-[0.18em]">
                  <MessageCircle className="size-4" aria-hidden="true" /> WhatsApp
                </a>
              </div>
              <div className="mt-8 grid gap-3 text-sm sm:grid-cols-2">
                <a href={company.phoneHref} className="flex items-center gap-3 text-muted-foreground hover:text-foreground"><Phone className="size-4" aria-hidden="true" />{company.phone}</a>
                <a href={`mailto:${company.email}`} className="flex items-center gap-3 text-muted-foreground hover:text-foreground"><Mail className="size-4" aria-hidden="true" />Email the studio</a>
                <Link href="/contact" className="flex items-center gap-3 text-muted-foreground hover:text-foreground sm:col-span-2"><MapPin className="size-4" aria-hidden="true" />Request a site visit</Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  )
}
