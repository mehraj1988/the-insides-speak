import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-4 py-28 text-center sm:px-6">
      <span className="pulse-dot" aria-hidden="true" />
      <p className="mt-4 font-heading text-6xl font-semibold text-ink">404</p>
      <h1 className="mt-3 font-heading text-2xl font-semibold text-ink">
        This story didn&apos;t make the edition.
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-ink-soft">
        The page you&apos;re looking for may have moved, or never existed. Try the homepage, or
        browse The Thinking Pulse.
      </p>
      <div className="mt-8 flex gap-3">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper"
        >
          Back home
        </Link>
        <Link
          href="/articles/"
          className="inline-flex items-center justify-center rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink hover:border-pulse hover:text-pulse"
        >
          The Thinking Pulse
        </Link>
      </div>
    </div>
  );
}
