import "server-only";
import type { CategorySlug } from "./categories";
import { categories } from "./categories";
import { readMarkdownEntries, requireString } from "./load-markdown";

export type WireDigest = {
  id: string;
  title: string;
  dek: string;
  source: string;
  date: string; // ISO date
  category: CategorySlug;
  image: string | null;
  imageCredit: string | null;
};

/**
 * Curated coverage cards — one Markdown file per entry under
 * content/wire-digests/, editable through the Decap CMS admin at
 * /admin/ or by hand. These never had their own detail page on the
 * source site this content was mirrored from either — clicking one just
 * opened the credited photo — so they render as citation cards
 * (headline, source, date, dek) rather than linking to a fabricated
 * internal article. Add a real article to articles.ts instead once
 * there's an actual piece to publish.
 */
export const wireDigests: WireDigest[] = readMarkdownEntries("wire-digests").map((entry) => {
  const category = requireString(entry, "wire-digests", "category") as CategorySlug;
  if (!categories[category]) {
    throw new Error(
      `content/wire-digests/${entry.slug}.md has category "${category}", which isn't one of: ${Object.keys(categories).join(", ")}.`,
    );
  }
  return {
    id: entry.slug,
    title: requireString(entry, "wire-digests", "title"),
    dek: requireString(entry, "wire-digests", "dek"),
    source: requireString(entry, "wire-digests", "source"),
    date: requireString(entry, "wire-digests", "date"),
    category,
    image: typeof entry.data.image === "string" ? entry.data.image : null,
    imageCredit: typeof entry.data.imageCredit === "string" ? entry.data.imageCredit : null,
  };
});

export function getDigestsByCategory(category: CategorySlug): WireDigest[] {
  return sortedDigests().filter((d) => d.category === category);
}

export function sortedDigests(): WireDigest[] {
  return [...wireDigests].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}
