import Link from "next/link";
import { Reveal } from "@/components/reveal";

export function CtaBand({
  title,
  description,
  actionLabel,
  actionHref,
}: {
  title: string;
  description: string;
  actionLabel: string;
  actionHref: string;
}) {
  return (
    <section className="border-t border-line bg-ink">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Reveal>
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-xl">
              <h2 className="font-heading text-2xl font-semibold text-paper sm:text-3xl">
                {title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-paper/70">{description}</p>
            </div>
            <Link
              href={actionHref}
              className="inline-flex shrink-0 items-center justify-center rounded-full bg-pulse px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              {actionLabel}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
