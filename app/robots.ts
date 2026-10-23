import type { MetadataRoute } from 'next'

const siteUrl = 'https://aurexis.co.za'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
