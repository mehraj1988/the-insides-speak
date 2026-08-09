import Link from "next/link";
import { categories, type CategorySlug } from "@/content/categories";
import { cn } from "@/lib/utils";

export function CategoryBadge({
  category,
  href,
  className,
}: {
  category: CategorySlug;
  href?: string;
  className?: string;
}) {
  const meta = categories[category];
  const style = { color: `var(${meta.colorVar})` } as const;
  const content = (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.08em]",
        className,
      )}
      style={style}
    >
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{ background: `var(${meta.colorVar})` }}
        aria-hidden="true"
      />
      {meta.label}
    </span>
  );

  if (!href) return content;

  return (
    <Link href={href} className="hover:opacity-80">
      {content}
    </Link>
  );
}
