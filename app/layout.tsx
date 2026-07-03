import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Poppins, Inter } from 'next/font/google'
import { Toaster } from 'sonner'
import './globals.css'

// Font imports
const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ayodhya Academy | Premium School in Uttar Pradesh',
  description: 'Ayodhya Academy - Excellence in Education. CBSE affiliated school offering quality education with state-of-the-art facilities.',
  generator: 'v0.app',
  keywords: ['school', 'education', 'CBSE', 'Ayodhya Academy', 'Uttar Pradesh'],
  metadataBase: new URL('https://www.ayodhyaacademy.com'),
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.ayodhyaacademy.com',
    siteName: 'Ayodhya Academy',
    title: 'Ayodhya Academy | Premium School in Uttar Pradesh',
    description: 'Excellence in Education - Quality CBSE School',
    images: [
      {
        url: 'https://www.ayodhyaacademy.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ayodhya Academy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ayodhya Academy',
    description: 'Premium CBSE School in Ayodhya',
    images: ['https://www.ayodhyaacademy.com/twitter-image.png'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#003d82',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <head>
        <link rel="canonical" href="https://www.ayodhyaacademy.com" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'EducationalOrganization',
            name: 'Ayodhya Academy',
            url: 'https://www.ayodhyaacademy.com',
            logo: 'https://www.ayodhyaacademy.com/logo.png',
            description: 'Premium CBSE School in Ayodhya',
            foundingDate: '2010',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Mani Parvat Road, Ranopali',
              addressLocality: 'Ayodhya',
              addressRegion: 'Uttar Pradesh',
              postalCode: '224123',
              addressCountry: 'IN',
            },
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'School Office',
              telephone: '+91-9415155790',
              email: 'ayodhyaacadmy@gmail.com',
            },
          })}
        </script>
      </head>
      <body className="bg-background text-foreground">
        {children}
        <Toaster position="top-right" richColors />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
