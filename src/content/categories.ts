export type CategorySlug = "beyond-borders" | "health" | "echoline" | "sports";

export type Category = {
  slug: CategorySlug;
  label: string;
  standfirst: string;
  colorVar: string; // CSS variable name (without var()) driving the accent
};

export const categories: Record<CategorySlug, Category> = {
  "beyond-borders": {
    slug: "beyond-borders",
    label: "Beyond Borders",
    standfirst:
      "Investigative reporting and policy coverage from across the world and across the aisle.",
    colorVar: "--section-borders",
  },
  health: {
    slug: "health",
    label: "Health",
    standfirst:
      "The systems, policies, and people behind public health — from the clinic to the Capitol.",
    colorVar: "--section-health",
  },
  echoline: {
    slug: "echoline",
    label: "Echoline",
    standfirst:
      "Editorial and analysis on the forces shaping economies, power, and public life.",
    colorVar: "--section-echoline",
  },
  sports: {
    slug: "sports",
    label: "Sports",
    standfirst:
      "Original coverage of the games, institutions, and people that make up the sporting world.",
    colorVar: "--section-sports",
  },
};

export const categoryList = Object.values(categories);
