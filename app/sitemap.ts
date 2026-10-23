import type { MetadataRoute } from 'next'
import { studios } from '@/lib/site-data'

const siteUrl = 'https://aurexis.co.za'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...studios.map((studio) => ({
      url: `${siteUrl}/divisions/${studio.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}
