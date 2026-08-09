import type { ReactNode } from "react";
import { Reveal } from "@/components/reveal";

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-line bg-paper-dim">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <Reveal>
          {eyebrow && (
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-pulse">
              {eyebrow}
            </p>
          )}
          <h1 className="max-w-2xl text-balance font-heading text-3xl font-semibold leading-tight text-ink sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft">
              {description}
            </p>
          )}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
