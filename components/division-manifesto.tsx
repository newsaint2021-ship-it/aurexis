'use client'

interface DivisionManifestoProps {
  manifesto: string
}

export function DivisionManifesto({ manifesto }: DivisionManifestoProps) {
  return (
    <section className="reveal flex min-h-screen flex-col items-center justify-center bg-background px-6 py-32 md:py-48">
      <div className="max-w-3xl space-y-8">
        {/* Editorial Title */}
        <div className="space-y-4">
          <h2 className="text-xs uppercase tracking-[0.25em] text-foreground/50">Our Philosophy</h2>
          <p className="text-4xl font-light leading-relaxed text-foreground md:text-5xl lg:leading-relaxed">
            {manifesto}
          </p>
        </div>

        {/* Visual Divider */}
        <div className="flex gap-2 pt-8">
          <div className="h-1 w-8 bg-gradient-to-r from-primary to-primary/0"></div>
        </div>
      </div>
    </section>
  )
}
