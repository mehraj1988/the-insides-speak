import Link from "next/link";
import { Hero } from "@/components/hero";
import { StatStrip } from "@/components/stat-strip";
import { SectionHeading } from "@/components/section-heading";
import { ArticleCard } from "@/components/article-card";
import { DigestCard } from "@/components/digest-card";
import { EditionCard } from "@/components/edition-card";
import { CtaBand } from "@/components/cta-band";
import { Reveal } from "@/components/reveal";
import { getFeaturedArticles, sortedArticles, getArticlesByCategory } from "@/content/articles-data";
import { getDigestsByCategory } from "@/content/wire-digests";
import { allFeedItems, type ExplorerItem } from "@/content/feed";
import { teamStat } from "@/content/team";
import { latestEdition } from "@/content/editions";
import { formatDate } from "@/lib/utils";

export default function Home() {
  const featured = getFeaturedArticles().slice(0, 3);
  const latest = sortedArticles().slice(0, 3);
  const borders = getDigestsByCategory("beyond-borders").slice(0, 3);
  const health = getDigestsByCategory("health").slice(0, 3);
  const echoline = getArticlesByCategory("echoline").slice(0, 3);
  const sportsItems = allFeedItems()
    .filter((item) => item.data.category === "sports")
    .slice(0, 3);
  const edition = latestEdition();

  return (
    <>
      <Hero />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <StatStrip
          stats={[
            { value: teamStat.value, label: teamStat.label },
            {
              value: "4",
              label: "dedicated desks — Beyond Borders, Health, Echoline, and Sports.",
            },
            {
              value: edition.label,
              label: "current E-Paper edition, available as a downloadable PDF.",
            },
          ]}
        />
      </section>

      {featured.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
          <SectionHeading
            eyebrow="Right now"
            title="Featured"
            href="/articles/"
            hrefLabel="All stories"
          />
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
            {featured.map((article, i) => (
              <ArticleCard key={article.slug} article={article} size={i === 0 ? "large" : "default"} />
            ))}
          </div>
        </section>
      )}

      <DigestSectionRow
        eyebrow="Investigations & policy"
        title="Beyond Borders"
        description="Curated wire coverage on the systems and decisions that shape lives far past any one headline."
        href="/articles/?category=beyond-borders"
        digests={borders}
      />

      <DigestSectionRow
        eyebrow="Coverage"
        title="Health"
        description="Curated wire coverage on the policy, access, and technology stories behind public health."
        href="/articles/?category=health"
        digests={health}
        tone="alt"
      />

      <SectionRow
        eyebrow="Analysis"
        title="Echoline"
        description="Original editorial takes on the economics and geopolitics shaping public life."
        href="/articles/?category=echoline"
        articles={echoline}
      />

      <MixedSectionRow
        eyebrow="Coverage"
        title="Sports"
        description="The games, institutions, and people that make up the sporting world."
        href="/sports/"
        items={sportsItems}
        tone="alt"
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid grid-cols-1 gap-10 rounded-xl border border-line bg-surface p-6 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-pulse">
              E-Paper
            </p>
            <h2 className="font-heading text-2xl font-semibold text-ink sm:text-3xl">
              The full edition, laid out the way it was meant to be read.
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-soft">
              The {edition.label} edition and the archive before it, as a downloadable PDF.
            </p>
            <Link
              href="/gallery/"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink underline decoration-line decoration-2 underline-offset-4 hover:text-pulse hover:decoration-pulse"
            >
              Browse the archive →
            </Link>
          </div>
          <div className="w-40 justify-self-center sm:w-48">
            <EditionCard edition={edition} isLatest />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
        <div className="grid grid-cols-1 gap-8 border-t border-line pt-16 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-pulse">
              Why this exists
            </p>
            <h2 className="font-heading text-2xl font-semibold text-ink sm:text-3xl">
              Context over clutter. Insight over impulse. Credibility over spectacle.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              The Insides Speak was built by journalists, strategists, and researchers who
              believe the real story often lives beneath the obvious one. We slow down long
              enough to trace consequence, not just announce it.
            </p>
            <Link
              href="/about/"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink underline decoration-line decoration-2 underline-offset-4 hover:text-pulse hover:decoration-pulse"
            >
              Read our editorial philosophy →
            </Link>
          </Reveal>
          <Reveal delay={100}>
            <ul className="space-y-4">
              {latest.map((article) => (
                <li key={article.slug} className="flex items-baseline gap-3 border-b border-line pb-4">
                  <span className="pulse-dot mt-2 shrink-0" aria-hidden="true" />
                  <Link href={`/articles/${article.slug}/`} className="group">
                    <p className="font-heading text-base font-semibold leading-snug text-ink group-hover:text-pulse">
                      {article.title}
                    </p>
                    <p className="mt-1 text-xs text-ink-soft">{formatDate(article.date)}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Have a tip, a correction, or a story we're missing?"
        description="Write to the editorial desk — every message is read by a person, not a filter."
        actionLabel="Write To Us"
        actionHref="/contact/"
      />
    </>
  );
}

function SectionRow({
  eyebrow,
  title,
  description,
  href,
  articles,
  tone = "default",
}: {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  articles: ReturnType<typeof getArticlesByCategory>;
  tone?: "default" | "alt";
}) {
  if (articles.length === 0) return null;

  return (
    <section className={tone === "alt" ? "bg-paper-dim" : undefined}>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} href={href} />
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DigestSectionRow({
  eyebrow,
  title,
  description,
  href,
  digests,
  tone = "default",
}: {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  digests: ReturnType<typeof getDigestsByCategory>;
  tone?: "default" | "alt";
}) {
  if (digests.length === 0) return null;

  return (
    <section className={tone === "alt" ? "bg-paper-dim" : undefined}>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} href={href} />
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {digests.map((digest) => (
            <DigestCard key={digest.id} digest={digest} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MixedSectionRow({
  eyebrow,
  title,
  description,
  href,
  items,
  tone = "default",
}: {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  items: ExplorerItem[];
  tone?: "default" | "alt";
}) {
  if (items.length === 0) return null;

  return (
    <section className={tone === "alt" ? "bg-paper-dim" : undefined}>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} href={href} />
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) =>
            item.kind === "article" ? (
              <ArticleCard key={`a-${item.data.slug}`} article={item.data} />
            ) : (
              <DigestCard key={`d-${item.data.id}`} digest={item.data} />
            ),
          )}
        </div>
      </div>
    </section>
  );
}

