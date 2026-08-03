'use client'

import { Reveal } from '@/components/reveal'

interface DivisionManifestoProps {
  manifesto: string
}

export function DivisionManifesto({ manifesto }: DivisionManifestoProps) {
  return (
    <Reveal
      as="section"
      className="flex min-h-screen flex-col items-center justify-center bg-background px-6 py-32 md:py-48"
    >
      <div className="max-w-3xl space-y-8">
        {/* Editorial Title */}
        <div className="space-y-4">
          <h2 className="text-xs uppercase tracking-[0.25em] text-foreground/50">Studio Philosophy</h2>
          <p className="text-balance text-3xl font-light leading-relaxed text-foreground md:text-4xl lg:leading-relaxed">
            {manifesto}
          </p>
        </div>

        {/* Visual Divider */}
        <div className="flex gap-2 pt-8">
          <div className="h-px w-16 bg-primary/40"></div>
        </div>
      </div>
    </Reveal>
  )
}
