import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { estimateReadingMinutes, type ArticleBodyBlock } from "@/content/articles";
import { articles, getArticleBySlug, getRelatedArticles } from "@/content/articles-data";
import { categories } from "@/content/categories";
import { ArticleCover } from "@/components/article-cover";
import { CategoryBadge } from "@/components/category-badge";
import { ArticleCard } from "@/components/article-card";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/content/site";
import { formatDate, withBasePath } from "@/lib/utils";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata(
  props: PageProps<"/articles/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
    },
  };
}

export default async function ArticlePage(props: PageProps<"/articles/[slug]">) {
  const { slug } = await props.params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = getRelatedArticles(article);
  const minutes = estimateReadingMinutes(article);
  const shareUrl = `${site.url}/articles/${article.slug}/`;

  return (
    <article>
      <div className="border-b border-line">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
          <CategoryBadge category={article.category} href={sectionHref(article.category)} />
          <h1 className="mt-4 text-balance font-heading text-3xl font-semibold leading-tight text-ink sm:text-5xl">
            {article.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">{article.excerpt}</p>
          <div className="mt-6 flex flex-wrap items-center gap-2 text-sm text-ink-soft">
            <span className="font-medium text-ink">{article.author}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={article.date}>{formatDate(article.date)}</time>
            <span aria-hidden="true">·</span>
            <span>{minutes} min read</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        {article.heroImage ? (
          <figure className="mt-8">
            {/* eslint-disable-next-line @next/next/no-img-element -- static export, source image is pre-sized on disk */}
            <img
              src={withBasePath(article.heroImage)}
              alt=""
              className="aspect-[16/9] w-full rounded-lg object-cover"
            />
            {article.imageCredit && (
              <figcaption className="mt-2 text-xs text-ink-soft">
                {article.imageCredit}
              </figcaption>
            )}
          </figure>
        ) : (
          <ArticleCover
            slug={article.slug}
            category={article.category}
            className="mt-8 aspect-[16/9] w-full rounded-lg"
          />
        )}

        <div className="mx-auto max-w-2xl py-10">
          <div className="space-y-5 text-base leading-relaxed text-ink">
            <ArticleBody body={article.body} />
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-line pt-6">
            <span className="text-xs font-semibold uppercase tracking-[0.1em] text-ink-soft">
              Share
            </span>
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-line px-3 py-1.5 text-xs font-medium text-ink-soft hover:border-pulse hover:text-pulse"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:?subject=${encodeURIComponent(article.title)}&body=${encodeURIComponent(shareUrl)}`}
              className="rounded-full border border-line px-3 py-1.5 text-xs font-medium text-ink-soft hover:border-pulse hover:text-pulse"
            >
              Email
            </a>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="border-t border-line bg-paper-dim">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <SectionHeading
              eyebrow="Keep reading"
              title={`More from ${categories[article.category].label}`}
              href={sectionHref(article.category)}
            />
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {related.map((item) => (
                <ArticleCard key={item.slug} article={item} />
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <Link href="/articles/" className="text-sm font-semibold text-ink hover:text-pulse">
          ← Back to The Thinking Pulse
        </Link>
      </div>
    </article>
  );
}

function ArticleBody({ body }: { body: ArticleBodyBlock[] }) {
  return (
    <>
      {body.map((block, i) => {
        switch (block.type) {
          case "h":
            return (
              <h2 key={i} className="pt-2 font-heading text-xl font-semibold text-ink">
                {block.text}
              </h2>
            );
          case "ul":
            return (
              <ul key={i} className="list-disc space-y-1.5 pl-5">
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="list-decimal space-y-1.5 pl-5">
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ol>
            );
          case "callout":
            return (
              <div
                key={i}
                className="rounded-lg border border-line bg-paper-dim p-4 text-sm leading-relaxed text-ink-soft"
              >
                {block.text}
              </div>
            );
          default:
            return <p key={i}>{block.text}</p>;
        }
      })}
    </>
  );
}

function sectionHref(category: (typeof articles)[number]["category"]) {
  return category === "sports" ? "/sports/" : `/articles/?category=${category}`;
}
