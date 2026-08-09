import { categories, type CategorySlug } from "@/content/categories";
import { hashString } from "@/lib/utils";

/**
 * Generated cover art instead of stock photography — license-free, fast,
 * and keyed to the section color so a glance at the grid tells you which
 * desk a piece came from. Deterministic per slug so covers stay stable
 * across re-renders/builds.
 */
export function ArticleCover({
  slug,
  category,
  className,
}: {
  slug: string;
  category: CategorySlug;
  className?: string;
}) {
  const seed = hashString(slug);
  const color = `var(${categories[category].colorVar})`;
  const amplitude = 10 + (seed % 14);
  const phase = seed % 100;
  const bars = Array.from({ length: 24 }, (_, i) => {
    const h = 6 + Math.abs(Math.sin((i + phase) * 0.5)) * amplitude;
    // Math.sin can differ in its last bit between the server and browser JS
    // engines; rounding forces server and client markup to always match.
    return Math.round(h * 100) / 100;
  });

  return (
    <svg
      viewBox="0 0 400 220"
      className={className}
      role="img"
      aria-label=""
      preserveAspectRatio="xMidYMid slice"
    >
      <rect width="400" height="220" fill="var(--paper-dim)" />
      <g opacity="0.5">
        {Array.from({ length: 10 }).map((_, row) =>
          Array.from({ length: 20 }).map((_, col) => (
            <circle
              key={`${row}-${col}`}
              cx={10 + col * 20}
              cy={10 + row * 22}
              r="1"
              fill="var(--ink-soft)"
              opacity="0.25"
            />
          )),
        )}
      </g>
      <g transform="translate(20 150)">
        {bars.map((h, i) => (
          <rect
            key={i}
            x={i * 15.5}
            y={-h}
            width="7"
            height={h * 2}
            rx="2"
            fill={color}
            opacity={0.85 - (i % 5) * 0.08}
          />
        ))}
      </g>
    </svg>
  );
}
