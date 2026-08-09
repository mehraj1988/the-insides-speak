import { Suspense } from "react";
import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ArticlesExplorer } from "@/components/articles-explorer";
import { getArticlesByCategory } from "@/content/articles";

export const metadata: Metadata = {
  title: "Sports",
  description:
    "Original coverage of the games, institutions, and people that make up the sporting world.",
};

export default function SportsPage() {
  const sportsArticles = getArticlesByCategory("sports");

  return (
    <>
      <PageHeader
        eyebrow="Sports"
        title="The games, and the business underneath them."
        description="Original coverage — not wire copy — of the institutions, money, and people shaping sport."
      />
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <Suspense fallback={null}>
          <ArticlesExplorer articles={sportsArticles} lockCategory="sports" />
        </Suspense>
      </section>
    </>
  );
}
