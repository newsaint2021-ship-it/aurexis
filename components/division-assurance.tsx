'use client'

import type { Division } from '@/lib/site-data'
import { Reveal } from '@/components/reveal'

interface DivisionAssuranceProps {
  benefits: Division['assuranceBenefits']
}

export function DivisionAssurance({ benefits = [] }: DivisionAssuranceProps) {
  if (!benefits || benefits.length === 0) return null

  return (
    <Reveal
      as="section"
      className="flex flex-col items-center justify-center bg-background px-6 py-32 md:py-48"
    >
      <div className="w-full max-w-5xl space-y-12">
        {/* Section Header */}
        <div className="space-y-4">
          <h2 className="text-xs uppercase tracking-[0.25em] text-foreground/50">The Aurexis Assurance</h2>
          <p className="text-balance text-3xl font-light text-foreground md:text-4xl">
            Confidence, engineered to last
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="glass lift flex flex-col gap-4 rounded-lg p-6 text-foreground hover:shadow-lg"
            >
              {/* Icon */}
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <svg
                  className="h-6 w-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4m7 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              {/* Content */}
              <div className="space-y-2">
                <h3 className="text-lg font-medium">{benefit.title}</h3>
                <p className="text-sm leading-relaxed text-foreground/70">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
