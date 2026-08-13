import type { MetadataRoute } from "next";
import { articles } from "@/content/articles-data";
import { site } from "@/content/site";

// Required for `output: "export"` — this route has no per-request data.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const buildDate = new Date();
  const staticRoutes = [
    "",
    "about",
    "articles",
    "sports",
    "gallery",
    "the-team",
    "contact",
  ].map((path) => ({
    url: `${site.url}/${path}${path ? "/" : ""}`,
    lastModified: buildDate,
  }));

  const articleRoutes = articles.map((article) => ({
    url: `${site.url}/articles/${article.slug}/`,
    lastModified: article.date,
  }));

  return [...staticRoutes, ...articleRoutes];
}
