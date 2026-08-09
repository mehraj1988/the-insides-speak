import { Reveal } from "@/components/reveal";

type Stat = { value: string; label: string };

export function StatStrip({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-1 gap-6 border-y border-line py-10 sm:grid-cols-3">
      {stats.map((stat, i) => (
        <Reveal key={stat.value + stat.label} delay={i * 90}>
          <div className="text-center sm:text-left">
            <p className="font-heading text-4xl font-semibold text-pulse">{stat.value}</p>
            <p className="mt-1 text-sm leading-relaxed text-ink-soft">{stat.label}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
