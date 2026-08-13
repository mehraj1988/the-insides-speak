import "server-only";
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type MarkdownEntry = { slug: string; data: Record<string, unknown> };

/**
 * Reads every *.md file in content/<dirName>/ and parses its YAML
 * frontmatter. Runs at build time only (Server Components / static
 * generation) — never imported by a Client Component. The filename
 * (minus .md) is the entry's slug/id, so renaming a file changes its
 * URL; content authored through the Decap CMS admin at /admin/ writes
 * these same files via the GitHub API.
 */
export function readMarkdownEntries(dirName: string): MarkdownEntry[] {
  const dir = path.join(process.cwd(), "content", dirName);
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".md"));
  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      const { data } = matter(raw);
      return { slug: file.replace(/\.md$/, ""), data };
    })
    .sort((a, b) => a.slug.localeCompare(b.slug));
}

/** Throws a build-time error naming the offending file, instead of shipping a broken page. */
export function requireField<T>(
  entry: MarkdownEntry,
  contentType: string,
  field: string,
  predicate: (value: unknown) => value is T = (v): v is T => v !== undefined && v !== null && v !== "",
): T {
  const value = entry.data[field];
  if (!predicate(value)) {
    throw new Error(
      `content/${contentType}/${entry.slug}.md is missing or has an invalid "${field}" field.`,
    );
  }
  return value;
}

const isString = (v: unknown): v is string => typeof v === "string";
const isArray = (v: unknown): v is unknown[] => Array.isArray(v);

export function requireString(entry: MarkdownEntry, contentType: string, field: string): string {
  return requireField(entry, contentType, field, isString);
}

export function requireArray(entry: MarkdownEntry, contentType: string, field: string): unknown[] {
  return requireField(entry, contentType, field, isArray);
}
