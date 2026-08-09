import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Write To Us",
  description: `Reach the editorial desk at ${site.email}.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Write To Us"
        title="Have a tip, a correction, or a story we haven't found yet?"
        description="Every message goes to the editorial desk directly — no ticketing system in between."
      />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <div className="space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-ink-soft">
                  Email
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-1 block text-lg font-semibold text-ink hover:text-pulse"
                >
                  {site.email}
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-ink-soft">
                  LinkedIn
                </p>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block text-lg font-semibold text-ink hover:text-pulse"
                >
                  The Insides Speak
                </a>
              </div>
              <p className="text-sm leading-relaxed text-ink-soft">
                For story tips, please include what you know, what you can prove, and how we
                can verify it. For corrections, quote the passage and the issue directly.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
