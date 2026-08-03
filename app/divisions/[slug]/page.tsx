import { getDivision } from '@/lib/site-data'
import { DivisionHero } from '@/components/division-hero'
import { DivisionManifesto } from '@/components/division-manifesto'
import { IndustryExplorer } from '@/components/industry-explorer'
import { MaterialsLibrary } from '@/components/materials-library'
import { TransformationStories } from '@/components/transformation-stories'
import { DivisionProcess } from '@/components/division-process'
import { DivisionAssurance } from '@/components/division-assurance'
import { KnowledgeCentre } from '@/components/knowledge-centre'
import { InspirationLibrary } from '@/components/inspiration-library'
import { RelatedStudios } from '@/components/related-studios'
import { ConsultationSection } from '@/components/consultation-section'

interface DivisionPageProps {
  params: Promise<{ slug: string }>
}

export default async function DivisionPage(props: DivisionPageProps) {
  const params = await props.params
  const division = getDivision(params.slug)

  if (!division) {
    return (
      <div className="flex flex-col items-center justify-center px-4 py-24">
        <h1 className="text-3xl font-medium">Division not found</h1>
      </div>
    )
  }

  return (
    <div className="space-y-0">
      {/* Cinematic Arrival */}
      <DivisionHero division={division} />

      {/* Editorial Manifesto */}
      {division.manifesto && <DivisionManifesto manifesto={division.manifesto} />}

      {/* Industry Explorer */}
      {division.industriesList && <IndustryExplorer industries={division.industriesList} />}

      {/* Materials Library */}
      {division.materialsLibrary && <MaterialsLibrary materials={division.materialsLibrary} />}

      {/* Transformation Stories */}
      {division.transformationStories && <TransformationStories stories={division.transformationStories} />}

      {/* Process */}
      {division.processSteps && <DivisionProcess steps={division.processSteps} />}

      {/* Assurance */}
      {division.assuranceBenefits && <DivisionAssurance benefits={division.assuranceBenefits} />}

      {/* Knowledge Centre */}
      {division.knowledgeItems && <KnowledgeCentre items={division.knowledgeItems} />}

      {/* Inspiration Library */}
      {division.inspirationCollections && <InspirationLibrary collections={division.inspirationCollections} />}

      {/* Consultation */}
      <ConsultationSection division={division} />

      {/* Related Studios */}
      <RelatedStudios currentSlug={division.slug} />
    </div>
  )
}
