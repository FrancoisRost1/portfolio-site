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
  title: 'Frostaing AI | An AI-native Bloomberg terminal',
  description:
    'Frostaing is an AI-native mini Bloomberg terminal: live markets, AI equity research, options, LBO and deal modeling, comps, portfolio construction, and systematic signals in one research desk. Open beta, free to use. Planned price CHF 200 per month.',
  openGraph: {
    title: 'Frostaing AI | An AI-native Bloomberg terminal',
    description:
      'Live markets, AI research, and the full quant stack in one desk. Open beta, free to use. Planned price CHF 200 per month. Built in Geneva.',
    type: 'website',
    siteName: 'Frostaing AI',
    locale: 'en_US',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body>{children}</body>
    </html>
  )
}
