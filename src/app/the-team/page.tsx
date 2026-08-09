import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { TeamCard } from "@/components/team-card";
import { CtaBand } from "@/components/cta-band";
import { Reveal } from "@/components/reveal";
import { team } from "@/content/team";

export const metadata: Metadata = {
  title: "The Team",
  description: "The editors setting the standard for The Insides Speak.",
};

export default function TeamPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Team"
        title="Turning whispers into headlines, and complexities into clarity."
        description="A small editorial team distilling noise into narrative — commanding decades of combined experience across investigative reporting, editorial leadership, digital content, and strategic communications."
      />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 100}>
              <TeamCard member={member} />
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        title="Interested in contributing?"
        description="We're always open to pitches from reporters, researchers, and analysts who share the same standard."
        actionLabel="Get in touch"
        actionHref="/contact/"
      />
    </>
  );
}
