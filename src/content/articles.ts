import type { CategorySlug } from "./categories";

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: CategorySlug;
  date: string; // ISO date
  author: string;
  tags: string[];
  featured?: boolean;
  body: string[];
};

/**
 * Starter content. Every piece below is placeholder copy written for this
 * launch draft — swap it for live reporting (and proper source credit for
 * any syndicated wire pieces) before this leaves staging. Add a new
 * article by appending an object to this array; the listing, filters,
 * and /articles/[slug] route all pick it up automatically.
 */
export const articles: Article[] = [
  {
    slug: "the-fine-print-of-disaster-aid",
    title: "The Fine Print of Disaster Aid",
    excerpt:
      "When relief money finally arrives, the conditions attached to it can decide who actually rebuilds — and who is left filling out forms.",
    category: "beyond-borders",
    date: "2026-07-28",
    author: "The Insides Speak Newsroom",
    tags: ["policy", "housing", "investigation"],
    featured: true,
    body: [
      "Disaster aid is announced in round numbers and delivered in fractions. Between the press conference and the first check lies a system of eligibility rules, documentation requirements, and appeals processes that most recipients never see coming.",
      "Local officials say the bottleneck is rarely the money itself — it's the paperwork built to prevent fraud that ends up screening out people who never had a fixed address, a smartphone, or a paper trail to begin with.",
      "Reporters following three affected counties over eighteen months found a pattern: households that hired advocates or caseworkers cleared the process in weeks. Households that navigated it alone often waited a year or longer, if their claims were approved at all.",
      "This piece will be updated as the underlying reporting is completed. It is presented here as a placeholder for the kind of accountability journalism this section is built to carry.",
    ],
  },
  {
    slug: "the-quiet-negotiation-over-childhood-savings",
    title: "The Quiet Negotiation Over Childhood Savings",
    excerpt:
      "A wave of state-level proposals would seed investment accounts for every child born after a set date. The debate is less about whether, and more about who controls the money.",
    category: "beyond-borders",
    date: "2026-07-14",
    author: "The Insides Speak Newsroom",
    tags: ["policy", "economy"],
    body: [
      "The pitch is simple enough to fit on a bumper sticker: every child gets a modest, state-seeded investment account at birth, left to compound until adulthood. The legislative language is not simple at all.",
      "Sponsors across several statehouses are negotiating over custodianship, withdrawal conditions, and whether the accounts should be means-tested — differences that determine whether the policy functions as universal savings infrastructure or a targeted anti-poverty tool.",
      "Supporters on both sides of the aisle have found unusual common ground on the concept, even as they disagree sharply on the mechanics. That gap between agreement and implementation is where most policy actually gets made.",
    ],
  },
  {
    slug: "border-enforcement-and-the-language-of-military-zones",
    title: "Border Enforcement and the Language of Military Zones",
    excerpt:
      "Designating a strip of border land as a military installation changes which laws apply to the people who cross it. A look at what that redefinition does and doesn't do.",
    category: "beyond-borders",
    date: "2026-06-30",
    author: "The Insides Speak Newsroom",
    tags: ["policy", "law"],
    body: [
      "When a stretch of land is formally attached to a nearby military installation, trespassing on it can trigger federal charges that carry different weight than a civil immigration violation.",
      "Civil liberties groups and some legal scholars argue the designation is being used to route routine enforcement through a harsher legal channel. Officials counter that it closes a gap between agencies with overlapping jurisdiction.",
      "The practical effect, so far, is uneven — enforcement patterns vary by sector, season, and staffing. That inconsistency is itself part of the story.",
    ],
  },
  {
    slug: "when-the-opioid-settlement-check-gets-denied",
    title: "When the Opioid Settlement Check Gets Denied",
    excerpt:
      "Billions in settlement funds were earmarked for people harmed by the opioid crisis. Getting a claim approved is its own ordeal.",
    category: "health",
    date: "2026-07-30",
    author: "The Insides Speak Newsroom",
    tags: ["healthcare", "investigation"],
    featured: true,
    body: [
      "The national opioid settlements were framed as a reckoning — money extracted from manufacturers and distributors, directed back toward the communities and families the crisis devastated.",
      "In practice, claims administrators apply documentation standards that assume a level of institutional record-keeping many claimants don't have, especially those who were unhoused, incarcerated, or informally cared for during the years in question.",
      "Denials can be appealed, but the appeals process is opaque enough that most claimants rely on legal aid organizations already stretched thin by other settlement programs running in parallel.",
    ],
  },
  {
    slug: "rural-urgent-care-and-the-abortion-access-gap",
    title: "Rural Urgent Care and the Abortion Access Gap",
    excerpt:
      "In counties without a maternal-fetal medicine specialist for a hundred miles, the urgent care clinic has become an unlikely front line.",
    category: "health",
    date: "2026-07-09",
    author: "The Insides Speak Newsroom",
    tags: ["healthcare", "policy"],
    body: [
      "Urgent care clinics were never designed to be the first point of contact for complex, time-sensitive reproductive health decisions. In large stretches of rural America, they increasingly are.",
      "Clinicians describe a widening mismatch between what state law permits, what liability insurers will cover, and what a two-person clinic with no on-call specialist can realistically provide.",
      "Patients, meanwhile, are the ones absorbing the distance — in miles, in wait times, and in the cost of getting from an urgent care visit to definitive care elsewhere.",
    ],
  },
  {
    slug: "ai-notes-in-the-exam-room",
    title: "AI Notes in the Exam Room",
    excerpt:
      "Ambient documentation tools promise to give physicians back their eye contact. The tradeoffs are still being written into hospital policy in real time.",
    category: "health",
    date: "2026-06-18",
    author: "The Insides Speak Newsroom",
    tags: ["technology", "healthcare"],
    body: [
      "The pitch from health systems is consistent: let an AI model listen to the visit and draft the note, and physicians get their evenings back instead of spending them on charting.",
      "Early adopters report real time savings, but also a new category of error — plausible-sounding notes that require a careful second read, at the exact moment clinicians are being told they can finally stop reading so carefully.",
      "Patient consent, data retention, and liability for AI-authored errors remain unsettled questions that vary by health system, state, and malpractice insurer.",
    ],
  },
  {
    slug: "sovereign-debt-and-the-slow-crisis",
    title: "Sovereign Debt and the Slow Crisis",
    excerpt:
      "Debt crises rarely announce themselves. They accumulate in refinancing schedules and currency mismatches until, all at once, they don't.",
    category: "echoline",
    date: "2026-07-22",
    author: "Editorial Desk",
    tags: ["economy", "analysis"],
    featured: true,
    body: [
      "A slow-motion sovereign debt crisis doesn't look like a crisis while it's happening. It looks like a string of manageable refinancing decisions, each one individually defensible.",
      "The risk compounds in the mismatch between the currency debt is denominated in and the currency government revenue arrives in — a gap that widens or narrows with exchange rates nobody involved actually controls.",
      "The countries under the most pressure right now share a familiar profile: commodity-dependent exports, dollar-denominated debt, and domestic political timelines too short to absorb multi-year adjustment programs.",
      "None of this is inevitable. But it is, at this point, well understood — which raises the harder question of why so little of that understanding has translated into earlier action.",
    ],
  },
  {
    slug: "peace-agreements-and-the-economics-that-outlast-them",
    title: "Peace Agreements and the Economics That Outlast Them",
    excerpt:
      "A signed accord ends the fighting on paper. What happens to trade routes, currencies, and labor markets afterward determines whether it holds.",
    category: "echoline",
    date: "2026-06-25",
    author: "Editorial Desk",
    tags: ["geopolitics", "analysis"],
    body: [
      "The diplomacy around a ceasefire gets the headlines. The economics that follow — reopened trade corridors, currency stabilization, reintegration of displaced labor — get far less attention and do far more to determine whether peace lasts.",
      "Agreements that fail tend to fail quietly, in the gap between what was promised on the signing stage and what regional institutions were ever capable of delivering.",
      "That gap is where this section intends to spend most of its attention: not the signature, but the six months after it.",
    ],
  },
  {
    slug: "indias-growth-story-beyond-the-headline-number",
    title: "India's Growth Story, Beyond the Headline Number",
    excerpt:
      "A strong GDP print tells you the economy grew. It doesn't tell you who felt it.",
    category: "echoline",
    date: "2026-06-05",
    author: "Editorial Desk",
    tags: ["economy", "india"],
    body: [
      "Aggregate growth figures are useful and frequently misleading in the same breath — useful because they capture real momentum, misleading because they average over enormous regional and sectoral variation.",
      "The more interesting story sits underneath: which states, which sectors, and which income deciles are actually compounding gains, and which are riding a national number that doesn't describe their own experience.",
      "That's the distinction this column returns to whenever a new headline figure lands — not whether the number is real, but what it's hiding.",
    ],
  },
  {
    slug: "the-cci-classic-returns",
    title: "The CCI Classic Returns to the Baize",
    excerpt:
      "The Cricket Club of India's snooker invitational is back, drawing a field that mixes veteran cueists with a new generation trained on livestreamed frames.",
    category: "sports",
    date: "2026-08-02",
    author: "Sports Desk",
    tags: ["snooker", "cci"],
    featured: true,
    body: [
      "The Cricket Club of India's snooker room, usually a quiet corner of a very loud building, turns competitive again this month as the CCI Classic returns for another edition.",
      "Organizers say the field is the strongest in years, mixing club veterans against players who came up watching frames streamed rather than broadcast — a generational split that's starting to show in playing style as much as results.",
      "Match reports and a full bracket will be added here as the tournament progresses.",
    ],
  },
  {
    slug: "the-fading-legacy-programs-of-womens-basketball",
    title: "The Fading Legacy Programs of Women's Basketball",
    excerpt:
      "Programs that once defined an era of women's college basketball are being reshaped by budgets, not box scores.",
    category: "sports",
    date: "2026-07-19",
    author: "Sports Desk",
    tags: ["basketball", "ncaa"],
    body: [
      "Ask an athletic director from a program that won a national title decades ago how the sport has changed, and the answer rarely starts with strategy. It starts with the budget line.",
      "Conference realignment, media rights consolidation, and the transfer portal have rewritten which programs can compete for the players who used to be recruited to schools with history rather than resources.",
      "History doesn't show up on a balance sheet. Increasingly, that's the whole problem for programs trying to trade on it.",
    ],
  },
  {
    slug: "what-a-league-schedule-actually-optimizes-for",
    title: "What a League Schedule Actually Optimizes For",
    excerpt:
      "Fixture lists look arbitrary until you see the broadcast contract they were built around.",
    category: "sports",
    date: "2026-06-28",
    author: "Sports Desk",
    tags: ["broadcasting", "analysis"],
    body: [
      "Fans experience a schedule as a sequence of games. Leagues build it as a revenue instrument, sequencing marquee matchups around broadcast windows, travel logistics, and venue availability, roughly in that order.",
      "That's not cynicism — it's the business model most leagues operate under, and it explains scheduling decisions that otherwise look inexplicable from pitch level.",
      "Understanding the incentive doesn't make every decision defensible. It just makes it legible.",
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

export function getArticlesByCategory(category: CategorySlug): Article[] {
  return sortedArticles().filter((article) => article.category === category);
}

export function sortedArticles(): Article[] {
  return [...articles].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getFeaturedArticles(): Article[] {
  return sortedArticles().filter((article) => article.featured);
}

export function getRelatedArticles(article: Article, limit = 3): Article[] {
  return sortedArticles()
    .filter(
      (candidate) =>
        candidate.slug !== article.slug &&
        candidate.category === article.category,
    )
    .slice(0, limit);
}

export function estimateReadingMinutes(article: Article): number {
  const words = article.body.join(" ").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
