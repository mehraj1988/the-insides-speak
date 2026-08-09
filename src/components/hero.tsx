import Link from "next/link";
import { site } from "@/content/site";
import { Reveal } from "@/components/reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(var(--ink) 1px, transparent 1px), linear-gradient(90deg, var(--ink) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-ink-soft">
            <span className="pulse-dot" aria-hidden="true" />
            {site.tagline}
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-6 max-w-3xl text-balance font-heading text-4xl font-semibold leading-[1.08] text-ink sm:text-6xl">
            Reading between what is said and what unfolds beneath it.
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            {site.description}
          </p>
        </Reveal>
        <Reveal delay={240}>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/articles/"
              className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3 text-sm font-semibold text-paper transition-transform hover:-translate-y-0.5"
            >
              Read The Thinking Pulse
            </Link>
            <Link
              href="/about/"
              className="inline-flex items-center justify-center rounded-full border border-line px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-pulse hover:text-pulse"
            >
              About the newsroom
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
