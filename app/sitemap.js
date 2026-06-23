// sitemap.xml (Next.js App Router convention) on the canonical non-www host.
// The marketing site is a single homepage (+ a branded 404, which is never
// listed). The terminal subdomain (terminal.frostaing.com) ships its own
// sitemap, submitted separately.
export default function sitemap() {
  return [
    {
      url: 'https://frostaing.com',
      lastModified: '2026-06-19',
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
