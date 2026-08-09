import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-heading text-xl font-semibold tracking-tight text-ink",
        className,
      )}
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.4" className="text-line" />
        <path
          d="M3 12h4l1.6-4.4L11.4 17 13.4 9l1.6 3H21"
          stroke="var(--pulse)"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      <span className="leading-none">
        The Insides <span className="text-pulse">Speak</span>
      </span>
    </span>
  );
}
