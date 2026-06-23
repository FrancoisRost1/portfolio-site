/** @type {import('next').NextConfig} */
const nextConfig = {
  // Host canonicalization is handled at the Vercel platform layer: the project
  // has www.frostaing.com as the primary domain, so Vercel 301/307-redirects
  // the bare apex (frostaing.com) -> www. Do NOT add a www -> non-www redirect
  // here: it fights the platform redirect and produces an infinite loop
  // (apex -> www -> apex -> ...). The canonical host is www; see app/layout.js.
};

export default nextConfig;
