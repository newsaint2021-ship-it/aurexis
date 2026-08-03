'use client'

import type { Division } from '@/lib/site-data'

interface InspirationLibraryProps {
  collections: Division['inspirationCollections']
}

export function InspirationLibrary({ collections = [] }: InspirationLibraryProps) {
  if (!collections || collections.length === 0) return null

  return (
    <section className="reveal flex flex-col items-center justify-center bg-background px-6 py-32 md:py-48">
      <div className="w-full max-w-5xl space-y-12">
        {/* Section Header */}
        <div className="space-y-4">
          <h2 className="text-xs uppercase tracking-[0.25em] text-foreground/50">Inspiration Library</h2>
          <p className="text-3xl font-light text-foreground md:text-4xl">
            Curated galleries of possibility
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((collection, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg border border-border/30 bg-gradient-to-br from-muted/50 to-background p-6 transition-all duration-300 hover:border-border hover:shadow-lg"
            >
              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 h-20 w-20 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />

              {/* Content */}
              <div className="relative space-y-3">
                {/* Title */}
                <h3 className="text-lg font-medium text-foreground">{collection.name}</h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-foreground/70">{collection.description}</p>

                {/* View Link */}
                <div className="flex items-center gap-2 pt-4 text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
