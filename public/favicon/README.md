# Frostaing AI favicon set

Generated 2026-05-18. Brand: amber (#E07020) "F" on terminal-dark (#0E1117).

## Install (portfolio-site, Next.js 16, App Router)

1. Copy every file in this folder into `portfolio-site/public/`:

   ```
   public/
     favicon.ico
     favicon.svg
     favicon-16x16.png
     favicon-32x32.png
     favicon-48x48.png
     favicon-96x96.png
     apple-touch-icon.png
     android-chrome-192x192.png
     android-chrome-512x512.png
     site.webmanifest
   ```

2. In `app/layout.js` (or `app/layout.tsx`), add the `icons` block to
   the `metadata` export. Next.js 16 App Router serves favicons from
   `metadata` — do NOT add `<link>` tags in `<head>` manually.

   ```js
   export const metadata = {
     title: "Frostaing AI",
     icons: {
       icon: [
         { url: "/favicon.ico", sizes: "any" },
         { url: "/favicon.svg", type: "image/svg+xml" },
         { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
         { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
       ],
       apple: [
         { url: "/apple-touch-icon.png", sizes: "180x180" },
       ],
     },
     manifest: "/site.webmanifest",
   };
   ```

3. `npm run build && npm run start`, then hard-refresh
   `https://www.frostaing.com` in incognito (browsers cache favicons
   aggressively, regular reload won't pick up the change).

## Verify

- Tab favicon: should show orange "F" on dark, sharp
- iOS "Add to Home Screen": full-bleed dark tile with orange "F"
- Android Chrome PWA: same, 192/512 maskable sizes covered
- `realfavicongenerator.net/favicon-checker?site=frostaing.com`
  should pass every check

## If you ever want to regenerate

The Python source is in the previous chat. Re-run with a different
accent / glyph by changing `FG` and the `"F"` literal in `render_png`.
