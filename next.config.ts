import type { NextConfig } from "next";

// Static export so the site can be built once and served as plain files —
// first from GitHub Pages, later from a custom domain, no server required.
// PAGES_BASE_PATH is supplied by actions/configure-pages in CI; it's empty
// for local dev/build so `npm run dev` and `npm run build` work unprefixed.
const basePath = process.env.PAGES_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  // Every route exports as /path/index.html instead of /path.html — the
  // unambiguous form for a static host, no extensionless-URL guessing.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // next/link and next/font get basePath applied automatically, but plain
  // <img src="/images/..."> strings (our article/digest/edition photos)
  // don't — this exposes the same value to client code so lib/utils.ts's
  // withBasePath() can prefix those manually. See its comment for why.
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
