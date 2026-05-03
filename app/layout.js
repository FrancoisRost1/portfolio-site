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
  title: 'Frostaing AI | AI & Finance Systems Firm',
  description: 'Frostaing AI is a Geneva-based AI and finance systems firm specializing in Claude-powered research, automation, and decision-support tools.',
  openGraph: {
    title: 'Frostaing AI | AI & Finance Systems Firm',
    description: 'Geneva-based AI and finance systems firm. Claude-powered research, automation, and decision-support tools. Eleven shipped systems.',
    type: 'website',
    siteName: 'Frostaing AI',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body>{children}</body>
    </html>
  )
}
