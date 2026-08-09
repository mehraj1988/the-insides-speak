import type { TeamMember } from "@/content/team";

export function TeamCard({ member }: { member: TeamMember }) {
  const initials = member.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="flex flex-col items-start gap-4 rounded-lg border border-line bg-surface p-6">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-ink font-heading text-xl font-semibold text-paper">
        {initials}
      </div>
      <div>
        <h3 className="font-heading text-xl font-semibold text-ink">{member.name}</h3>
        <p className="text-sm font-semibold text-pulse">{member.role}</p>
      </div>
      <p className="text-sm leading-relaxed text-ink-soft">{member.bio}</p>
    </div>
  );
}
