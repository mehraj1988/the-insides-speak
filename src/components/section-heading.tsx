import Link from "next/link";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  href,
  hrefLabel = "View all",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  href?: string;
  hrefLabel?: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-wrap items-end justify-between gap-4", className)}>
      <div className="max-w-2xl">
        {eyebrow && (
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-pulse">
            {eyebrow}
          </p>
        )}
        <h2 className="font-heading text-2xl font-semibold text-ink sm:text-3xl">
          {title}
        </h2>
        {description && (
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-soft">
            {description}
          </p>
        )}
      </div>
      {href && (
        <Link
          href={href}
          className="whitespace-nowrap text-sm font-semibold text-ink underline decoration-line decoration-2 underline-offset-4 transition-colors hover:text-pulse hover:decoration-pulse"
        >
          {hrefLabel} →
        </Link>
      )}
    </div>
  );
}
