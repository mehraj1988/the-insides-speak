"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import type { Article } from "@/content/articles";
import { categoryList, type CategorySlug } from "@/content/categories";
import { ArticleCard } from "@/components/article-card";
import { cn } from "@/lib/utils";

const PAGE_SIZE = 6;

export function ArticlesExplorer({
  articles,
  lockCategory,
}: {
  articles: Article[];
  /** When set, the category tab bar is hidden and results are pinned to this section. */
  lockCategory?: CategorySlug;
}) {
  const searchParams = useSearchParams();
  const initialCategory = (searchParams.get("category") as CategorySlug | null) ?? "all";

  const [category, setCategory] = useState<CategorySlug | "all">(
    lockCategory ?? initialCategory,
  );
  const [query, setQuery] = useState("");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return articles.filter((article) => {
      const matchesCategory = category === "all" || article.category === category;
      const matchesQuery =
        !q ||
        article.title.toLowerCase().includes(q) ||
        article.excerpt.toLowerCase().includes(q) ||
        article.tags.some((tag) => tag.toLowerCase().includes(q));
      return matchesCategory && matchesQuery;
    });
  }, [articles, category, query]);

  const tabs = lockCategory
    ? []
    : [{ slug: "all" as const, label: "All" }, ...categoryList.map((c) => ({ slug: c.slug, label: c.label }))];

  return (
    <div>
      <div className="flex flex-col gap-4 border-b border-line pb-6 sm:flex-row sm:items-center sm:justify-between">
        {tabs.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.slug}
                type="button"
                onClick={() => {
                  setCategory(tab.slug);
                  setVisible(PAGE_SIZE);
                }}
                className={cn(
                  "rounded-full border px-4 py-1.5 text-sm font-medium transition-colors",
                  category === tab.slug
                    ? "border-ink bg-ink text-paper"
                    : "border-line text-ink-soft hover:border-ink hover:text-ink",
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}

        <div className="relative w-full sm:w-64">
          <input
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setVisible(PAGE_SIZE);
            }}
            placeholder="Search articles…"
            aria-label="Search articles"
            className="w-full rounded-full border border-line bg-surface px-4 py-2 text-sm text-ink outline-none transition-colors focus:border-pulse"
          />
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="py-16 text-center text-sm text-ink-soft">
          No articles match that search yet. Try a different term or section.
        </p>
      ) : (
        <>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.slice(0, visible).map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>

          {visible < filtered.length && (
            <div className="mt-10 flex justify-center">
              <button
                type="button"
                onClick={() => setVisible((v) => v + PAGE_SIZE)}
                className="inline-flex items-center justify-center rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-pulse hover:text-pulse"
              >
                Load more
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}
