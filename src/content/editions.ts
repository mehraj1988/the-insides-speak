export type Edition = {
  label: string; // e.g. "June - August 2026"
  date: string; // ISO date, first day of the period is fine
  href: string; // link to the hosted PDF (Drive, S3, etc.)
  image: string | null; // local cover image
};

/**
 * E-Paper editions, mirrored from theinsidesspeak.com/gallery/. The live
 * site currently has two real editions (not one per month) — add the next
 * one to the top once it's ready; the newest entry is the current issue.
 */
export const editions: Edition[] = [
  {
    label: "June - August 2026",
    date: "2026-06-01",
    href: "https://drive.google.com/file/d/1h7Qijwn_lU9_4qRRtbqcAbKUfiGeW_sM/view?usp=drive_link",
    image: "/images/editions/jun-aug-2026.jpg",
  },
  {
    label: "MAR - MAY 2026",
    date: "2026-03-01",
    href: "https://drive.google.com/file/d/1rjfeeHjK7m3UbyqIOYR_MuunmrmG7eGs/view?usp=drive_link",
    image: "/images/editions/mar-may-2026.jpg",
  },
];

export function latestEdition(): Edition {
  return editions[0];
}
