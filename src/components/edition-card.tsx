import type { Edition } from "@/content/editions";
import { formatDate } from "@/lib/utils";

export function EditionCard({ edition, isLatest }: { edition: Edition; isLatest?: boolean }) {
  return (
    <a
      href={edition.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-lg border border-line bg-surface transition-shadow hover:shadow-[0_10px_30px_-15px_rgba(0,0,0,0.25)]"
    >
      <div className="relative flex aspect-[3/4] items-center justify-center bg-paper-dim">
        <div className="flex flex-col items-center gap-2 text-ink-soft">
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M6 3.5h9l3 3V20a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5V4a.5.5 0 0 1 .5-.5Z"
              stroke="currentColor"
              strokeWidth="1.3"
            />
            <path d="M9 12h6M9 15h6M9 9h3" stroke="var(--pulse)" strokeWidth="1.3" strokeLinecap="round" />
          </svg>
          <span className="text-xs font-medium uppercase tracking-wide">PDF Edition</span>
        </div>
        {isLatest && (
          <span className="absolute left-3 top-3 rounded-full bg-pulse px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
            Latest
          </span>
        )}
      </div>
      <div className="p-4">
        <p className="font-heading text-lg font-semibold text-ink group-hover:text-pulse">
          {edition.label}
        </p>
        <p className="mt-1 text-xs text-ink-soft">{formatDate(edition.date)}</p>
      </div>
    </a>
  );
}
