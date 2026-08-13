import { sortedArticles } from "./articles";
import { sortedDigests } from "./wire-digests";
import type { ExplorerItem } from "@/components/articles-explorer";

export type { ExplorerItem };

/** Real articles and curated wire-digest cards, merged and sorted newest first. */
export function allFeedItems(): ExplorerItem[] {
  const items: ExplorerItem[] = [
    ...sortedArticles().map((data) => ({ kind: "article" as const, data })),
    ...sortedDigests().map((data) => ({ kind: "digest" as const, data })),
  ];
  return items.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());
}
