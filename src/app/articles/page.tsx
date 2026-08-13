import { Suspense } from "react";
import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ArticlesExplorer } from "@/components/articles-explorer";
import { allFeedItems } from "@/content/feed";

export const metadata: Metadata = {
  title: "The Thinking Pulse",
  description:
    "Investigations, analysis, and reporting from Beyond Borders, Health, Echoline, and Sports.",
};

export default function ArticlesPage() {
  const items = allFeedItems();

  return (
    <>
      <PageHeader
        eyebrow="The Thinking Pulse"
        title="Every story, filed by section."
        description="Search across Beyond Borders, Health, Echoline, and Sports, or filter down to the desk you came for."
      />
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <Suspense fallback={null}>
          <ArticlesExplorer items={items} />
        </Suspense>
      </section>
    </>
  );
}
