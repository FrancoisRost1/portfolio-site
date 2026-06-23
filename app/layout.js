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
  // Canonical host is NON-www (https://frostaing.com), matching the GSC
  // property and the terminal subdomain pattern. metadataBase resolves the
  // canonical + OG URLs below to this host; next.config redirects www -> non-www.
  metadataBase: new URL('https://frostaing.com'),
  // Emit an explicit self-referencing canonical. Without this, Next renders NO
  // <link rel="canonical">, so Google saw www and non-www as duplicates with no
  // chosen canonical ("Page en double sans URL canonique" in Search Console).
  alternates: { canonical: '/' },
  title: 'Frostaing AI | An AI-native finance research terminal',
  description:
    'Frostaing is an AI-native finance research terminal: live markets, AI equity research, options, LBO and deal modeling, comps, portfolio construction, and systematic signals in one research desk. Open beta, free to use. Planned price CHF 200 per month.',
  openGraph: {
    title: 'Frostaing AI | An AI-native finance research terminal',
    description:
      'Live markets, AI research, and the full quant stack in one desk. Open beta, free to use. Planned price CHF 200 per month. Built in Geneva.',
    type: 'website',
    siteName: 'Frostaing AI',
    locale: 'en_US',
    url: 'https://frostaing.com',
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
