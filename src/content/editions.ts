export type Edition = {
  label: string; // e.g. "August 2026"
  date: string; // ISO date, first of the month is fine
  href: string; // link to the hosted PDF (Drive, S3, etc.)
};

/**
 * Monthly E-Paper editions. Add the newest one to the top once it's ready
 * — the newest entry is treated as the current issue on the homepage.
 */
export const editions: Edition[] = [
  { label: "August 2026", date: "2026-08-01", href: "#" },
  { label: "July 2026", date: "2026-07-01", href: "#" },
  { label: "June 2026", date: "2026-06-01", href: "#" },
  { label: "May 2026", date: "2026-05-01", href: "#" },
  { label: "April 2026", date: "2026-04-01", href: "#" },
  { label: "March 2026", date: "2026-03-01", href: "#" },
];

export function latestEdition(): Edition {
  return editions[0];
}
