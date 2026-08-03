'use client'

import Link from 'next/link'
import { divisions } from '@/lib/site-data'

interface RelatedStudiosProps {
  currentSlug: string
}

export function RelatedStudios({ currentSlug }: RelatedStudiosProps) {
  const related = divisions.filter((d) => d.slug !== currentSlug).slice(0, 3)

  if (related.length === 0) return null

  return (
    <section className="reveal flex flex-col items-center justify-center bg-background px-6 py-32 md:py-48">
      <div className="w-full max-w-5xl space-y-12">
        {/* Section Header */}
        <div className="space-y-4">
          <h2 className="text-xs uppercase tracking-[0.25em] text-foreground/50">Explore Our Divisions</h2>
          <p className="text-3xl font-light text-foreground md:text-4xl">
            Discover other specialized studios
          </p>
        </div>

        {/* Related Studios Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((division) => (
            <Link
              key={division.slug}
              href={`/divisions/${division.slug}`}
              className="group relative overflow-hidden rounded-lg border border-border/30 bg-gradient-to-br from-muted/40 to-background p-6 transition-all duration-300 hover:border-border hover:shadow-lg"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="relative space-y-4">
                {/* Eyebrow */}
                <p className="text-xs uppercase tracking-[0.15em] text-foreground/50">{division.eyebrow}</p>

                {/* Title */}
                <h3 className="text-xl font-medium text-foreground">{division.title}</h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-foreground/70">{division.line}</p>

                {/* Arrow */}
                <div className="flex items-center gap-2 pt-4 text-primary opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-1">
                  <span className="text-xs font-medium uppercase tracking-[0.1em]">Explore</span>
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
