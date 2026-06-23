// robots.txt (Next.js App Router convention). Allows full crawling and points
// crawlers at the sitemap on the canonical non-www host.
export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://frostaing.com/sitemap.xml',
    host: 'https://frostaing.com',
  }
}
