'use client'

import Link from 'next/link'
import type { Division } from '@/lib/site-data'

interface ConsultationSectionProps {
  division: Division
}

export function ConsultationSection({ division }: ConsultationSectionProps) {
  return (
    <section className="reveal flex flex-col items-center justify-center bg-muted/30 px-6 py-32 md:py-48">
      <div className="w-full max-w-3xl space-y-8 text-center">
        {/* Header */}
        <div className="space-y-4">
          <h2 className="text-xs uppercase tracking-[0.25em] text-foreground/50">Ready to Proceed?</h2>
          <h3 className="text-3xl font-light text-foreground md:text-4xl">
            Schedule your {division.title} consultation
          </h3>
          <p className="text-base leading-relaxed text-foreground/70">
            Our specialists are ready to discuss how we can transform your project with precision engineering and impeccable craft.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center pt-4">
          <Link
            href="/contact"
            className="lift glass-button-prominent rounded-xl px-8 py-4 text-xs font-medium uppercase tracking-[0.18em] text-primary-foreground transition-all duration-300 inline-flex items-center justify-center"
          >
            Book Consultation
          </Link>
          <a
            href={`tel:+27618202622`}
            className="lift glass-button-subtle rounded-xl px-8 py-4 text-xs font-medium uppercase tracking-[0.18em] text-foreground transition-all duration-300 inline-flex items-center justify-center border border-border"
          >
            Call Now
          </a>
        </div>
      </div>
    </section>
  )
}
