'use client'

import { useState } from 'react'
import type { Division } from '@/lib/site-data'

interface KnowledgeCentreProps {
  items: Division['knowledgeItems']
}

export function KnowledgeCentre({ items = [] }: KnowledgeCentreProps) {
  const [expanded, setExpanded] = useState<number | null>(null)

  if (!items || items.length === 0) return null

  return (
    <section className="reveal flex min-h-screen flex-col items-center justify-center bg-muted/30 px-6 py-32 md:py-48">
      <div className="w-full max-w-3xl space-y-8">
        {/* Section Header */}
        <div className="space-y-4">
          <h2 className="text-xs uppercase tracking-[0.25em] text-foreground/50">Knowledge Centre</h2>
          <p className="text-3xl font-light text-foreground md:text-4xl">
            Questions answered, knowledge shared
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3 pt-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-lg border border-border/30 bg-background transition-all duration-300 hover:border-border"
            >
              <button
                onClick={() => setExpanded(expanded === index ? null : index)}
                className="w-full px-6 py-4 text-left transition-all duration-200"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-medium text-foreground">{item.question}</h3>
                  <div
                    className={`transition-transform duration-300 flex-shrink-0 ${expanded === index ? 'rotate-180' : ''}`}
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

              {/* Expanded Answer */}
              {expanded === index && (
                <div className="border-t border-border/20 bg-background/50 px-6 py-4">
                  <p className="text-sm leading-relaxed text-foreground/70">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
