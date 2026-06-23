/** @type {import('next').NextConfig} */
const nextConfig = {
  // Canonicalize the host: 301 every www.frostaing.com request to the
  // bare apex (https://frostaing.com). Google Search Console flagged
  // https://www.frostaing.com/ as a duplicate without a chosen canonical;
  // this redirect (plus the explicit canonical in app/layout.js) consolidates
  // all signals on the non-www host. The `has` host condition means non-www
  // requests never match, so there is no redirect loop. http -> https is
  // already handled at the hosting layer.
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.frostaing.com' }],
        destination: 'https://frostaing.com/:path*',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
