import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-display',
})

const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://aurexis.vercel.app'),
  title: {
    default: 'AUREXIS — Surface Transformations',
    template: '%s — AUREXIS',
  },
  description:
    'A surface transformation practice for architectural interiors and exteriors, glass systems and mobility assets. Explore capabilities and prepare a project brief.',
  openGraph: {
    title: 'AUREXIS — Surface Transformations',
    description:
      'Transform existing surfaces across built environments, architectural glass and mobility.',
    siteName: 'AUREXIS',
    type: 'website',
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#062045',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`bg-background ${display.variable} ${body.variable}`}>
      <body className="antialiased font-sans">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
