'use client'

import Image from 'next/image'
import type { Division } from '@/lib/site-data'
import { cn } from '@/lib/utils'

interface DivisionHeroProps {
  division: Division
}

export function DivisionHero({ division }: DivisionHeroProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-background">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <Image
          src={division.hero}
          alt={division.heroAlt}
          fill
          className="object-cover"
          priority
          quality={85}
        />
        {/* Dark Scrim Overlay */}
        <div className="hero-scrim absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative flex h-full flex-col items-center justify-center px-4 text-center">
        <div className="space-y-8 reveal animate-in fade-in slide-in-from-bottom-12 duration-1000">
          {/* Eyebrow */}
          <p className="text-xs uppercase tracking-[0.25em] text-primary-foreground/70">
            {division.eyebrow}
          </p>

          {/* Headline */}
          <h1 className="mx-auto max-w-3xl text-5xl font-light leading-tight text-primary-foreground md:text-6xl lg:text-7xl">
            {division.headline}
          </h1>

          {/* Subheading */}
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-primary-foreground/85 md:text-xl">
            {division.line}
          </p>

          {/* CTA */}
          <div className="pt-4">
            <a
              href="#industries"
              className="lift group glass-button-subtle inline-flex items-center gap-2 rounded-2xl px-8 py-4 text-xs font-medium uppercase tracking-[0.18em] text-primary-foreground transition-all duration-400"
            >
              Explore
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <p className="text-xs uppercase tracking-[0.15em] text-primary-foreground/50">Scroll</p>
          <svg
            className="h-5 w-5 text-primary-foreground/50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
