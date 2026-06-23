// robots.txt (Next.js App Router convention). Allows full crawling and points
// crawlers at the sitemap on the canonical WWW host (Vercel's primary domain).
export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://www.frostaing.com/sitemap.xml',
    host: 'https://www.frostaing.com',
  }
}
