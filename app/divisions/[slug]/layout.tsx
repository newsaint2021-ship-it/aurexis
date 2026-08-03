import type { Metadata } from 'next'
import { getDivision } from '@/lib/site-data'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'

interface DivisionLayoutProps {
  children: React.ReactNode
  params: Promise<{ slug: string }>
}

export async function generateMetadata(props: DivisionLayoutProps): Promise<Metadata> {
  const params = await props.params
  const division = getDivision(params.slug)

  if (!division) {
    return {
      title: 'Division Not Found',
    }
  }

  return {
    title: `${division.title} | Aurexis`,
    description: division.overview,
    openGraph: {
      title: `${division.title} | Aurexis`,
      description: division.overview,
      type: 'website',
    },
  }
}

export default async function DivisionLayout(props: DivisionLayoutProps) {
  const params = await props.params
  const division = getDivision(params.slug)

  if (!division) {
    return (
      <div className="flex min-h-screen flex-col">
        <SiteNav />
        <main className="flex flex-1 flex-col items-center justify-center px-4">
          <h1 className="text-2xl font-medium">Division not found</h1>
        </main>
        <SiteFooter />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteNav />
      <main className="flex-1">{props.children}</main>
      <SiteFooter />
    </div>
  )
}
