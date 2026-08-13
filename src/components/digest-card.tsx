import type { WireDigest } from "@/content/wire-digests";
import { CategoryBadge } from "@/components/category-badge";
import { ArticleCover } from "@/components/article-cover";
import { formatDateShort, cn } from "@/lib/utils";

/**
 * Citation-style card for curated wire coverage. Unlike ArticleCard this
 * never links to an internal detail page — the source site didn't have
 * one for these either, just a credited photo and a citation line, so we
 * present it honestly as a "here's what X reported" pointer rather than
 * inventing a page for content that isn't actually hosted here.
 */
export function DigestCard({ digest, className }: { digest: WireDigest; className?: string }) {
  return (
    <article
      className={cn(
        "flex flex-col overflow-hidden rounded-lg border border-dashed border-line bg-surface",
        className,
      )}
    >
      <div className="relative overflow-hidden">
        {digest.image ? (
          // eslint-disable-next-line @next/next/no-img-element -- static export, source images are pre-sized on disk
          <img src={digest.image} alt="" className="aspect-[16/10] w-full object-cover" />
        ) : (
          <ArticleCover slug={digest.id} category={digest.category} className="aspect-[16/10] w-full" />
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <CategoryBadge category={digest.category} />
        <h3 className="font-heading text-lg font-semibold leading-snug text-ink text-balance">
          {digest.title}
        </h3>
        <p className="line-clamp-3 text-sm leading-relaxed text-ink-soft">{digest.dek}</p>
        <div className="mt-auto flex items-center gap-2 pt-2 text-xs text-ink-soft">
          <span className="font-medium text-ink">Cited via {digest.source}</span>
          <span aria-hidden="true">·</span>
          <span>{formatDateShort(digest.date)}</span>
        </div>
      </div>
    </article>
  );
}
