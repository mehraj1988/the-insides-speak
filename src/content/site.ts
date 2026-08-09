export const site = {
  name: "The Insides Speak",
  shortName: "Insides Speak",
  tagline: "The Pulse Beneath the Headlines",
  description:
    "An independent newsroom reading between what is said and what truly unfolds beneath the surface — context over clutter, insight over impulse, credibility over spectacle.",
  email: "editor@theinsidesspeak.com",
  linkedin: "https://www.linkedin.com/company/the-insides-speak",
  // Swap for the production domain once the team signs off on the design.
  url: "https://www.theinsidesspeak.com",
};

export type NavLink = {
  label: string;
  href: string;
};

export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  { label: "The Thinking Pulse", href: "/articles/" },
  { label: "Sports", href: "/sports/" },
  { label: "E-Paper", href: "/gallery/" },
  { label: "The Team", href: "/the-team/" },
  { label: "Write To Us", href: "/contact/" },
];

export const footerNav: NavLink[] = [
  { label: "About", href: "/about/" },
  { label: "The Thinking Pulse", href: "/articles/" },
  { label: "Sports", href: "/sports/" },
  { label: "E-Paper", href: "/gallery/" },
  { label: "The Team", href: "/the-team/" },
  { label: "Write To Us", href: "/contact/" },
];
