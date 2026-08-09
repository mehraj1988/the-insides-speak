export type TeamMember = {
  name: string;
  role: string;
  bio: string;
};

export const team: TeamMember[] = [
  {
    name: "Srinivasan G. Chari",
    role: "Chief Editor",
    bio: "Sets the publication's editorial direction and standards, and has final say on what runs and how it's framed.",
  },
  {
    name: "Devraj Uchil",
    role: "Consulting Editor",
    bio: "Advises on editorial strategy and story selection across sections, drawing on a background spanning journalism, strategic communication, and public discourse.",
  },
];

export const teamStat = {
  value: "50+",
  label: "combined man-years across investigative reporting, editorial leadership, strategic communication, and public discourse.",
};
