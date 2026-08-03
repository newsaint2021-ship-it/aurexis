'use client'

import { useState } from 'react'
import type { Division } from '@/lib/site-data'

interface IndustryExplorerProps {
  industries: Division['industriesList']
}

export function IndustryExplorer({ industries = [] }: IndustryExplorerProps) {
  const [expanded, setExpanded] = useState<number | null>(0)

  if (!industries || industries.length === 0) return null

  return (
    <section id="industries" className="reveal flex min-h-screen flex-col items-center justify-center bg-background px-6 py-32 md:py-48">
      <div className="w-full max-w-3xl space-y-8">
        {/* Section Header */}
        <div className="space-y-4">
          <h2 className="text-xs uppercase tracking-[0.25em] text-foreground/50">Industries We Serve</h2>
          <p className="text-3xl font-light text-foreground md:text-4xl">
            Expertise across diverse environments
          </p>
        </div>

        {/* Industry Cards */}
        <div className="space-y-3 pt-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-lg border border-border/50 bg-background/50 transition-all duration-300 hover:border-border hover:bg-muted"
            >
              <button
                onClick={() => setExpanded(expanded === index ? null : index)}
                className="w-full px-6 py-4 text-left transition-all duration-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-medium text-foreground">{industry.category}</h3>
                    <p className="text-sm text-foreground/60">{industry.description}</p>
                  </div>
                  <div
                    className={`ml-4 transition-transform duration-300 ${expanded === index ? 'rotate-180' : ''}`}
                  >
                    <svg
                      className="h-5 w-5 text-foreground/60"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </div>
                </div>
              </button>

              {/* Expanded Content */}
              {expanded === index && (
                <div className="border-t border-border/30 bg-background px-6 py-4">
                  <div className="grid gap-2 sm:grid-cols-2">
                    {industry.environments.map((env, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="mt-1 h-1 w-1 rounded-full bg-primary/60 flex-shrink-0" />
                        <span className="text-sm text-foreground/70">{env}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
