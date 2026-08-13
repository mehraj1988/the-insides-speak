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
        eyebrow="About TIS"
        title="Between what is said, and what truly unfolds beneath the surface."
        description="Most headlines skim the waves; few venture into the currents below. THE INSIDES SPEAK was born to navigate those deeper waters."
      />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <Reveal>
          <div className="space-y-5 text-base leading-relaxed text-ink-soft">
            <p>
              This platform emerges from the confluence of more than five decades of
              collective experience—over{" "}
              <strong className="text-ink">{teamStat.value} man-years</strong> of journalism,
              strategic communication, public relations, authorship, research, and public
              discourse. It is the distilled wisdom of professionals who have spent years not
              merely reporting events, but decoding the architecture of narratives,
              questioning the theatre of power, and listening for the quieter truths that
              often echo behind official statements.
            </p>
            <p>
              At THE INSIDES SPEAK, journalism is not treated as a conveyor belt of
              information. It is a disciplined inquiry, a lantern carried into corridors where
              facts often whisper rather than shout. Our philosophy is simple yet exacting:
              between the noise of immediacy and the silence of complexity lies the space
              where truth resides. That is the space we seek to illuminate.
            </p>
            <p>
              Our newsroom draws upon the instincts of reporters who have walked the field,
              the analytical acuity of researchers who read between policy lines, and the
              narrative craft of authors who understand that every story has both a visible
              stage and an unseen script. Together, these voices form a platform committed to
              context over clutter, insight over impulse, and credibility over spectacle.
            </p>
            <p>
              In an era where information travels faster than reflection, THE INSIDES SPEAK
              strives to slow the moment just enough to ask the questions that matter. We
              believe journalism should not merely announce events, but interpret their
              meaning, trace their consequences, and challenge the comfortable assumptions
              that often pass for consensus.
            </p>
            <p>
              Our stories therefore aim to do more than inform. They aim to reveal patterns,
              connect dots, and shed light on the intricate interplay between policy, power,
              society, and human consequence. From investigative reporting and editorial
              insight to features that explore the subtler dimensions of culture and change,
              our work is guided by one enduring conviction: the real story often lives
              beneath the obvious one.
            </p>
            <p>
              THE INSIDES SPEAK is, therefore, more than a publication. It is a collective
              endeavour—an intellectual forum where experience, inquiry, and integrity
              converge to ensure that when the inside story matters most, it finds its voice.
            </p>
            <blockquote className="border-l-2 border-pulse pl-5 font-heading text-lg italic text-ink">
              &ldquo;You can make anything by writing.&rdquo;
              <footer className="mt-1 text-sm not-italic text-ink-soft">— C. S. Lewis</footer>
            </blockquote>
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
