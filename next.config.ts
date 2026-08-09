import type { NextConfig } from "next";

// Static export so the site can be built once and served as plain files —
// first from GitHub Pages, later from a custom domain, no server required.
// PAGES_BASE_PATH is supplied by actions/configure-pages in CI; it's empty
// for local dev/build so `npm run dev` and `npm run build` work unprefixed.
const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.PAGES_BASE_PATH,
  // Every route exports as /path/index.html instead of /path.html — the
  // unambiguous form for a static host, no extensionless-URL guessing.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
