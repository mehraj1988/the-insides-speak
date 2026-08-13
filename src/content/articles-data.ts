import "server-only";
import type { CategorySlug } from "./categories";
import { categories } from "./categories";
import { readMarkdownEntries, requireString, requireArray } from "./load-markdown";
import type { Article, ArticleBodyBlock } from "./articles";

/**
 * Original, fully-authored pieces — one Markdown file per article under
 * content/articles/, editable directly through the Decap CMS admin at
 * /admin/ (see public/admin/config.yml) or by hand. The filename is the
 * slug and becomes the article's URL at /articles/<slug>/. Curated wire
 * coverage (Beyond Borders / Health / most of Sports) lives in
 * wire-digests.ts instead, since those never had full articles of their
 * own on the source site this content was originally mirrored from.
 *
 * Server-only (reads the filesystem) — import from here in pages/route
 * handlers, never from a Client Component. Types and pure formatting
 * helpers that ARE safe for client code live in articles.ts.
 */
export const articles: Article[] = readMarkdownEntries("articles").map((entry) => {
  const category = requireString(entry, "articles", "category") as CategorySlug;
  if (!categories[category]) {
    throw new Error(
      `content/articles/${entry.slug}.md has category "${category}", which isn't one of: ${Object.keys(categories).join(", ")}.`,
    );
  }
  return {
    slug: entry.slug,
    title: requireString(entry, "articles", "title"),
    excerpt: requireString(entry, "articles", "excerpt"),
    category,
    date: requireString(entry, "articles", "date"),
    author: requireString(entry, "articles", "author"),
    tags: Array.isArray(entry.data.tags) ? (entry.data.tags as string[]) : [],
    featured: Boolean(entry.data.featured),
    heroImage: typeof entry.data.heroImage === "string" ? entry.data.heroImage : null,
    imageCredit: typeof entry.data.imageCredit === "string" ? entry.data.imageCredit : null,
    body: requireArray(entry, "articles", "body") as ArticleBodyBlock[],
  };
});

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getArticlesByCategory(category: CategorySlug): Article[] {
  return sortedArticles().filter((article) => article.category === category);
}

export function sortedArticles(): Article[] {
  return [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getFeaturedArticles(): Article[] {
  return sortedArticles().filter((article) => article.featured);
}

export function getRelatedArticles(article: Article, limit = 3): Article[] {
  return sortedArticles()
    .filter(
      (candidate) =>
        candidate.slug !== article.slug &&
        candidate.category === article.category,
    )
    .slice(0, limit);
}
