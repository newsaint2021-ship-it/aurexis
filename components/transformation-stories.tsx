'use client'

import type { Division } from '@/lib/site-data'
import { Reveal } from '@/components/reveal'

interface TransformationStoriesProps {
  stories: Division['transformationStories']
}

export function TransformationStories({ stories = [] }: TransformationStoriesProps) {
  if (!stories || stories.length === 0) return null

  return (
    <Reveal
      as="section"
      className="flex flex-col items-center justify-center bg-background px-6 py-32 md:py-48"
    >
      <div className="w-full max-w-5xl space-y-12">
        {/* Section Header */}
        <div className="space-y-4">
          <h2 className="text-xs uppercase tracking-[0.25em] text-foreground/50">Transformation Journal</h2>
          <p className="text-balance text-3xl font-light text-foreground md:text-4xl">
            Stories of environments, reborn
          </p>
        </div>

        {/* Stories Grid */}
        <div className="space-y-8">
          {stories.map((story, index) => (
            <div key={index} className="group border-l-2 border-primary/30 pl-8 py-4 transition-all duration-300 hover:border-primary">
              {/* Title */}
              <h3 className="mb-4 text-xl font-medium text-foreground">{story.title}</h3>

              {/* Story Content */}
              <div className="grid gap-6 sm:grid-cols-3">
                {/* Challenge */}
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.12em] text-foreground/50">Challenge</p>
                  <p className="text-sm leading-relaxed text-foreground/70">{story.challenge}</p>
                </div>

                {/* Solution */}
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.12em] text-foreground/50">Solution</p>
                  <p className="text-sm leading-relaxed text-foreground/70">{story.solution}</p>
                </div>

                {/* Impact */}
                <div className="space-y-2">
                  <p className="text-xs uppercase tracking-[0.12em] text-foreground/50">Impact</p>
                  <p className="text-sm leading-relaxed text-foreground/70">{story.impact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  )
}
