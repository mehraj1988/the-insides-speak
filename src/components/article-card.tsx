import Link from "next/link";
import type { Article } from "@/content/articles";
import { estimateReadingMinutes } from "@/content/articles";
import { ArticleCover } from "@/components/article-cover";
import { CategoryBadge } from "@/components/category-badge";
import { cn, formatDateShort, withBasePath } from "@/lib/utils";

export function ArticleCard({
  article,
  size = "default",
  className,
}: {
  article: Article;
  size?: "default" | "large";
  className?: string;
}) {
  const coverClass = cn(
    "w-full transition-transform duration-500 group-hover:scale-[1.04] object-cover",
    size === "large" ? "aspect-[16/8]" : "aspect-[16/10]",
  );

  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden rounded-lg border border-line bg-surface transition-shadow hover:shadow-[0_10px_30px_-15px_rgba(0,0,0,0.25)]",
        className,
      )}
    >
      <Link href={`/articles/${article.slug}/`} className="block overflow-hidden">
        {article.heroImage ? (
          // eslint-disable-next-line @next/next/no-img-element -- static export, source images are pre-sized on disk
          <img src={withBasePath(article.heroImage)} alt="" className={coverClass} />
        ) : (
          <ArticleCover slug={article.slug} category={article.category} className={coverClass} />
        )}
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <CategoryBadge category={article.category} href={sectionHref(article.category)} />
        <h3
          className={cn(
            "font-heading font-semibold leading-snug text-ink text-balance",
            size === "large" ? "text-2xl md:text-3xl" : "text-lg",
          )}
        >
          <Link href={`/articles/${article.slug}/`} className="hover:text-pulse">
            {article.title}
          </Link>
        </h3>
        <p className="line-clamp-3 text-sm leading-relaxed text-ink-soft">
          {article.excerpt}
        </p>
        <div className="mt-auto flex items-center gap-2 pt-2 text-xs text-ink-soft">
          <span>{article.author}</span>
          <span aria-hidden="true">·</span>
          <span>{formatDateShort(article.date)}</span>
          <span aria-hidden="true">·</span>
          <span>{estimateReadingMinutes(article)} min read</span>
        </div>
      </div>
    </article>
  );
}

function sectionHref(category: Article["category"]) {
  return category === "sports" ? "/sports/" : `/articles/?category=${category}`;
}
