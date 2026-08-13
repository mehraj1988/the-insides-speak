import "server-only";
import { readMarkdownEntries, requireString } from "./load-markdown";

export type Edition = {
  label: string; // e.g. "June - August 2026"
  date: string; // ISO date, first day of the period is fine
  href: string; // link to the hosted PDF (Drive, S3, etc.)
  image: string | null; // local cover image
};

/**
 * E-Paper editions — one Markdown file per edition under
 * content/editions/, editable through the Decap CMS admin at /admin/ or
 * by hand. Sorted by date, newest first; latestEdition() is whichever
 * has the most recent date, not file order.
 */
export const editions: Edition[] = readMarkdownEntries("editions").map((entry) => ({
  label: requireString(entry, "editions", "label"),
  date: requireString(entry, "editions", "date"),
  href: requireString(entry, "editions", "href"),
  image: typeof entry.data.image === "string" ? entry.data.image : null,
}));

export function sortedEditions(): Edition[] {
  return [...editions].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function latestEdition(): Edition {
  return sortedEditions()[0];
}
