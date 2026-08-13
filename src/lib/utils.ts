export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/**
 * Prefixes a root-relative local asset path (e.g. "/images/foo.jpg") with
 * the deployment's base path. next/link and next/font do this
 * automatically; plain `<img src>` strings from content data don't, so
 * every hero/digest/edition image goes through this instead of being used
 * raw — otherwise photos 404 on GitHub Pages project sites (served from
 * /repo-name/...) while working fine in local dev (served from /...).
 * A no-op for absolute URLs or once there's no base path (custom domain).
 */
export function withBasePath(path: string): string {
  if (/^https?:\/\//.test(path)) return path;
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  return `${basePath}${path}`;
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function formatDateShort(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

/** Small deterministic hash used to vary generated cover art per slug. */
export function hashString(input: string): number {
  let hash = 0;
  for (let i = 0; i < input.length; i++) {
    hash = (hash << 5) - hash + input.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}
