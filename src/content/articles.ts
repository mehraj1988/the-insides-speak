import type { CategorySlug } from "./categories";

export type ArticleBodyBlock =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | { type: "ul" | "ol"; items: string[] }
  | { type: "callout"; text: string };

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: CategorySlug;
  date: string; // ISO date
  author: string;
  tags: string[];
  featured?: boolean;
  heroImage: string | null;
  imageCredit: string | null;
  body: ArticleBodyBlock[];
};

// Types and pure helpers only — no filesystem access. ArticleCard (used
// inside the client-side ArticlesExplorer) imports estimateReadingMinutes
// at runtime, and Next.js bundles anything a Client Component renders
// into the browser build; a fs-touching import here would break that
// bundle (`node:fs` isn't available in a browser). The actual data
// loading (readMarkdownEntries, etc.) lives in articles-data.ts, which
// only Server Components ever import.

function blockText(block: ArticleBodyBlock): string {
  switch (block.type) {
    case "ul":
    case "ol":
      return block.items.join(" ");
    default:
      return block.text;
  }
}

export function estimateReadingMinutes(article: Article): number {
  const words = article.body.map(blockText).join(" ").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
