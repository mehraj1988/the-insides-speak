import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { StatStrip } from "@/components/stat-strip";
import { CtaBand } from "@/components/cta-band";
import { Reveal } from "@/components/reveal";
import { teamStat } from "@/content/team";

export const metadata: Metadata = {
  title: "About",
  description:
    "The Insides Speak reads between what is said and what truly unfolds beneath the surface — context over clutter, insight over impulse, credibility over spectacle.",
};

const values = [
  {
    title: "Context over clutter",
    body: "We'd rather publish one story that explains the pattern than ten that just restate the announcement.",
  },
  {
    title: "Insight over impulse",
    body: "The instinct to publish first is real. We weigh it against the cost of publishing wrong.",
  },
  {
    title: "Credibility over spectacle",
    body: "A headline that overreaches to get a click borrows against tomorrow's trust to pay for today's traffic. We don't take that loan.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Between what is said, and what truly unfolds beneath the surface."
        description="Most coverage skims the waves. We're interested in the currents below — where policy meets consequence, and where the real story usually lives."
      />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <Reveal>
          <div className="space-y-5 text-base leading-relaxed text-ink-soft">
            <p>
              The Insides Speak was founded by professionals who spent careers decoding
              narratives and questioning power structures — in newsrooms, in strategic
              communication, and in public discourse. Between them, that adds up to{" "}
              <strong className="text-ink">{teamStat.value} man-years</strong> of experience
              in journalism, research, authorship, and public relations.
            </p>
            <p>
              We treat journalism as a disciplined inquiry, not a conveyor belt of
              information. That means slowing down long enough to examine meaning, trace
              consequence, and challenge the assumptions everyone else has already agreed to
              stop questioning.
            </p>
            <p>
              The pattern we keep returning to: the interplay between policy, power,
              society, and human consequence rarely shows up in the first draft of a story.
              It shows up in the follow-up nobody assigned. That&apos;s the piece we try to write.
            </p>
          </div>
        </Reveal>

        <div className="mt-14">
          <StatStrip
            stats={[
              { value: teamStat.value, label: teamStat.label },
              { value: "4", label: "sections: Beyond Borders, Health, Echoline, Sports." },
              { value: "1", label: "editorial standard, applied the same way to all four." },
            ]}
          />
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {values.map((value, i) => (
            <Reveal key={value.title} delay={i * 100}>
              <div className="h-full rounded-lg border border-line bg-surface p-6">
                <h3 className="font-heading text-lg font-semibold text-ink">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{value.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        title="Want to know who's behind the byline?"
        description="Meet the editors setting the standard for what runs — and how it's framed."
        actionLabel="Meet the team"
        actionHref="/the-team/"
      />
    </>
  );
}
