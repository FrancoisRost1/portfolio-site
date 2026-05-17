import './globals.css'
import { Inter, JetBrains_Mono } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://www.frostaing.com'),
  title: 'Frostaing AI | AI Investment Research & Deal Intelligence',
  description:
    'Geneva and Romandie firm building AI investment research and deal intelligence for private equity, venture capital, and family offices. IC memo automation, deal screening, diligence synthesis, portfolio monitoring. Productized analytics for SME finance teams.',
  openGraph: {
    title: 'Frostaing AI | AI Investment Research & Deal Intelligence',
    description:
      'AI investment research and deal intelligence for PE, VC, and family offices in Geneva and Romandie. Productized financial analytics for SME finance teams.',
    type: 'website',
    siteName: 'Frostaing AI',
    locale: 'en_US',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-192x192.png', type: 'image/png', sizes: '192x192' },
    ],
    shortcut: '/favicon.ico',
    apple: { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body>{children}</body>
    </html>
  )
}
