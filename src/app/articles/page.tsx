import { Suspense } from "react";
import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ArticlesExplorer } from "@/components/articles-explorer";
import { sortedArticles } from "@/content/articles";

export const metadata: Metadata = {
  title: "The Thinking Pulse",
  description:
    "Investigations, analysis, and reporting from Beyond Borders, Health, Echoline, and Sports.",
};

export default function ArticlesPage() {
  const allArticles = sortedArticles();

  return (
    <>
      <PageHeader
        eyebrow="The Thinking Pulse"
        title="Every story, filed by section."
        description="Search across Beyond Borders, Health, Echoline, and Sports, or filter down to the desk you came for."
      />
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <Suspense fallback={null}>
          <ArticlesExplorer articles={allArticles} />
        </Suspense>
      </section>
    </>
  );
}
