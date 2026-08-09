import type { MetadataRoute } from "next";
import { site } from "@/content/site";

// Required for `output: "export"` — this route has no per-request data.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
