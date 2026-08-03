'use client'

import type { Division } from '@/lib/site-data'

interface DivisionProcessProps {
  steps: Division['processSteps']
}

export function DivisionProcess({ steps = [] }: DivisionProcessProps) {
  if (!steps || steps.length === 0) return null

  return (
    <section className="reveal flex flex-col items-center justify-center bg-muted/30 px-6 py-32 md:py-48">
      <div className="w-full max-w-5xl space-y-12">
        {/* Section Header */}
        <div className="space-y-4">
          <h2 className="text-xs uppercase tracking-[0.25em] text-foreground/50">Our Process</h2>
          <p className="text-3xl font-light text-foreground md:text-4xl">
            Engineered precision, every step
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative flex gap-6 border-l-2 border-primary/20 pl-8 py-4 transition-all duration-300 hover:border-primary"
            >
              {/* Step Number Marker */}
              <div className="absolute -left-3 top-4 h-6 w-6 rounded-full border-2 border-primary/30 bg-background flex items-center justify-center text-xs font-semibold text-primary/60 group-hover:border-primary group-hover:text-primary group-hover:bg-primary/5 transition-all">
                {step.number}
              </div>

              {/* Content */}
              <div className="flex-1 space-y-2">
                <h3 className="text-lg font-medium text-foreground">{step.title}</h3>
                <p className="text-sm leading-relaxed text-foreground/70">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
