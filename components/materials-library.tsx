'use client'

import type { Division } from '@/lib/site-data'
import { Reveal } from '@/components/reveal'

interface MaterialsLibraryProps {
  materials: Division['materialsLibrary']
}

export function MaterialsLibrary({ materials = [] }: MaterialsLibraryProps) {
  if (!materials || materials.length === 0) return null

  return (
    <Reveal
      as="section"
      className="flex min-h-screen flex-col items-center justify-center bg-muted/30 px-6 py-32 md:py-48"
    >
      <div className="w-full max-w-5xl space-y-12">
        {/* Section Header */}
        <div className="space-y-4">
          <h2 className="text-xs uppercase tracking-[0.25em] text-foreground/50">Material Intelligence Library</h2>
          <p className="text-balance text-3xl font-light text-foreground md:text-4xl">
            Surfaces studied like materials in an atelier
          </p>
        </div>

        {/* Material Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {materials.map((material, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-lg border border-border/30 bg-background p-6 transition-all duration-300 hover:border-border hover:shadow-lg"
            >
              <div className="space-y-3">
                {/* Material Name */}
                <h3 className="text-lg font-medium text-foreground">{material.name}</h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-foreground/70">{material.description}</p>

                {/* Characteristics */}
                <div className="space-y-2 pt-4">
                  <p className="text-xs uppercase tracking-[0.12em] text-foreground/50">Key Characteristics</p>
                  <ul className="space-y-1">
                    {material.characteristics.map((char, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-foreground/60">
                        <span className="mt-1 h-1 w-1 rounded-full bg-primary/50 flex-shrink-0" />
                        <span>{char}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  )
}
