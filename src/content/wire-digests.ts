import type { CategorySlug } from "./categories";

export type WireDigest = {
  id: string;
  title: string;
  dek: string;
  source: string;
  date: string; // ISO date
  category: CategorySlug;
  image: string | null;
  imageCredit: string | null;
};

/**
 * Curated coverage cards mirrored from theinsidesspeak.com's Beyond
 * Borders, Health, and Sports sections. On the live site these never had
 * their own detail page — clicking one just opened the credited photo —
 * so here they render as citation cards (headline, source, date, dek)
 * rather than linking to a fabricated internal article. Add a real
 * article instead once there's an actual piece to publish.
 */
export const wireDigests: WireDigest[] = [
  {
    "id": "article_3672512",
    "title": "The Trump EPA Official in Charge of Methane Regulations Helped Write Oil Industry Argument Against Those Rules",
    "dek": "Before becoming a top official at the Environmental Protection Agency, Aaron Szabo was a lobbyist for the oil and gas industry. Metadata shows he helped draft a trade group’s 2022 letter to the EPA objecting to controls on methane emissions.",
    "source": "ProPublica",
    "date": "2026-04-03",
    "category": "beyond-borders",
    "image": "/images/digests/article_3672512.jpg",
    "imageCredit": "Aaron Szabo, an assistant administrator at the Environmental Protection Agency, is leading an effort to loosen rules on methane pollution.  Bloomberg/Getty Images | story - 3 - GettyImages-2202864000.webp"
  },
  {
    "id": "article_3694017",
    "title": "They Said a 3D Printer Would Bring Housing to This Town. It Was Yet Another Broken Promise.",
    "dek": "I spotted the printer abandoned off a country road. Finding out how it got there is a whole other story of tangled politics, tiny banks with big business deals, and the future of a town some say cannot be saved.",
    "source": "ProPublica",
    "date": "2026-04-24",
    "category": "beyond-borders",
    "image": "/images/digests/article_3694017.jpg",
    "imageCredit": "Pexels"
  },
  {
    "id": "article_3677434",
    "title": "Wicker promotes Childhood Investment Accounts at Jackson event, says Tuesday will be ‘consequential day’ in war with Iran",
    "dek": "Flanked by a panel of community leaders, including Jackson Mayor John Horhn, Wicker said he wanted to ensure Mississippians knew about the program with the April 15 deadline for filing income taxes fast approaching. Parents can begin the process of opening an account for their children by completing IRS Form 4547 when filing their 2025 taxes.",
    "source": "Mississippi Today",
    "date": "2026-04-08",
    "category": "beyond-borders",
    "image": "/images/digests/article_3677434.jpg",
    "imageCredit": null
  },
  {
    "id": "article_3674596",
    "title": "Texas jails aren’t meeting deadlines to free inmates, costing some counties thousands in settlements",
    "dek": "The state does not track the prevalence or provide guidance on the issue, leaving inmates to languish in jail and eventually sue counties for damages.",
    "source": "The Texas Tribune",
    "date": "2026-04-06",
    "category": "beyond-borders",
    "image": "/images/digests/article_3674596.jpg",
    "imageCredit": "The Smith County Jail, on September 10, 2024, in Tyler. Michael Cavazos for The Texas Tribune"
  },
  {
    "id": "article_3674592",
    "title": "Democratic congressional candidate Bobby Pulido toured with bandmate convicted of child sex crime",
    "dek": "“Bobby was never made aware of Caballero’s sex offender registration and would never knowingly associate with anyone with that kind of history,” he said.",
    "source": "The Texas Tribune",
    "date": "2026-04-06",
    "category": "beyond-borders",
    "image": "/images/digests/article_3674592.jpg",
    "imageCredit": "Bobby Pulido, Latin Grammy winner and Democratic nominee for the 15th Congressional District, speaks during a Texas Together Rally at Cine El Rey in McAllen on March 9, 2026. Gabriel V. Cárdenas for The Texas Tribune"
  },
  {
    "id": "article_3674484",
    "title": "The Mississippi Legislature giveth, and then taketh away, a bigger pay raise for teachers",
    "dek": "Legislative negotiators, citing fiscal concerns, took the unusual step of reducing the amount of a raise that the House and Senate previously dangled in front of teachers",
    "source": "Mississippi Today",
    "date": "2026-04-06",
    "category": "beyond-borders",
    "image": "/images/digests/article_3674484.jpg",
    "imageCredit": null
  },
  {
    "id": "article_3673234",
    "title": "Education was the signature issue of the ’26 legislative session. What happened?",
    "dek": "When lawmakers returned to the Capitol in January, education policy was headlining the session. Now, three months later, only a few measures survived political stalemates. We asked state leaders what happened.",
    "source": "Mississippi Today",
    "date": "2026-04-04",
    "category": "beyond-borders",
    "image": "/images/digests/article_3673234.jpg",
    "imageCredit": null
  },
  {
    "id": "article_3673231",
    "title": "Home mitigation bill heads to governor in yearslong effort to improve disaster resilience in Mississippi",
    "dek": "After nearly two decades of paralysis on the issue, Mississippi officials are inching closer to establishing a state home mitigation program to protect residents from natural disasters. Storm preparation experts say such a program is vital to building resilience as the dangers from climate change continue to grow.",
    "source": "Mississippi Today",
    "date": "2026-04-04",
    "category": "beyond-borders",
    "image": "/images/digests/article_3673231.jpg",
    "imageCredit": "An elevated house rests on newly constructed pilings nearly a year after it was damaged by Hurricane Sandy, which cost an estimated $70 billion in damages. Ramin Talaie/Corbis via Getty Images"
  },
  {
    "id": "article_3672614",
    "title": "Why We Went Looking for National Defense Areas Along the U.S. Southern Border",
    "dek": "The federal government is charging a skyrocketing number of migrants with trespassing in military zones. The boundaries can be hard to pinpoint — even for investigative reporters.",
    "source": "ProPublica",
    "date": "2026-04-03",
    "category": "beyond-borders",
    "image": "/images/digests/article_3672614.jpg",
    "imageCredit": "A dirt road leads to the border wall along the U.S.-Mexico border in Doña Ana County, New Mexico. Paul Ratje for ProPublica and The Texas Tribune"
  },
  {
    "id": "article_3672546",
    "title": "A Nursing Home Owner Got a Trump Pardon. The Families of His Patients Got Nothing.",
    "dek": "Schwartz didn’t contest the case, and a judge in 2020 awarded nearly $19 million in damages. Coulson’s family has never been able to collect. Schwartz had by that time relinquished all of his property in Arkansas, so there was nothing left in the state for the family’s lawyer to try to seize, nor was there enough information about assets he may hold in other states.",
    "source": "ProPublica",
    "date": "2026-04-03",
    "category": "beyond-borders",
    "image": "/images/digests/article_3672546.jpg",
    "imageCredit": "Emily Scherer for ProPublica. Source images: Getty Images, AP Images and documents obtained by ProPublica | JosephSchwartzPardon-FinalUpdate_preview_maxWidth_3000_maxHeight_3000_ppi_72_embedColorProfile_true_quality_95.webp"
  },
  {
    "id": "article_3672521",
    "title": "She Was in Labor at a Florida Hospital. Then She Was in Zoom Court for Refusing a C-Section.",
    "dek": "A virtual court hearing from a pregnant mother’s hospital bed shows what forced medical treatment can look like.",
    "source": "ProPublica",
    "date": "2026-04-03",
    "category": "health",
    "image": "/images/digests/article_3672521.jpg",
    "imageCredit": "Cherise Doyley, second from right in the top row, during a virtual court hearing she attended from her hospital bed. Obtained by ProPublica | v3newsletter-court-screenshot-3x2-1.webp"
  },
  {
    "id": "article_3693959",
    "title": "“A Punch in the Gut”: After Years of Waiting, Many Opioid Victims Will Be Shut Out of Purdue Settlement",
    "dek": "Nearly 140,000 people filed claims against the company for the harm they said its drugs caused. Fewer than half of them will get any compensation.",
    "source": "ProPublica",
    "date": "2026-04-24",
    "category": "health",
    "image": "/images/digests/article_3693959.jpg",
    "imageCredit": "Pexels"
  },
  {
    "id": "article_3678323",
    "title": "Urgent Care Clinics Move To Fill Abortion Care Gaps in Rural Areas",
    "dek": "But she also wasn’t expecting the Planned Parenthood in Marquette to shut down last spring. Roughly 1,100 patients relied on that clinic each year for cancer screenings, IUD insertions, and medication abortions. Now the area has no other in-person resource for abortions. “It’s a 500-mile stretch of no access,” Brown said.",
    "source": "KFF Health News",
    "date": "2026-04-09",
    "category": "health",
    "image": "/images/digests/article_3678323.jpg",
    "imageCredit": "Shawn Brown (left) and Viktoria Koskenoja are physicians at Marquette Medical Urgent Care in Marquette, Michigan. When the local Planned Parenthood clinic shut down in the spring of 2025, Koskenoja held a community meeting to identify alternative options for providing in-person abortion services. (Kate Wells/KFF Health News)"
  },
  {
    "id": "article_3678313",
    "title": "Can I Opt Out of Having My Doctor Take Notes With AI?",
    "dek": "“It’s taking care of all that tedious work of charting and taking notes during the visit,” he said. “It’s just freeing up a lot more time to get that done, and I can get home to my family earlier.”",
    "source": "The Insides Speak",
    "date": "2026-04-09",
    "category": "health",
    "image": "/images/digests/article_3678313.jpg",
    "imageCredit": "Eric Boose, a family medicine physician, uses AI software to document a patient’s appointment. (Cleveland Clinic)"
  },
  {
    "id": "article_3678309",
    "title": "Trump’s Personnel Agency Is Asking for Federal Workers’ Medical Records",
    "dek": "“But,” she said, “they are going to get very, very detailed and granular data about everything that happens. The concern here is the more information they have, they could use it to discipline or target people who are not cooperating politically.”",
    "source": "KFF Health News",
    "date": "2026-04-09",
    "category": "health",
    "image": "/images/digests/article_3678309.jpg",
    "imageCredit": null
  },
  {
    "id": "article_3672803",
    "title": "CDC’s Acting Chief Promises a Return to Stability in a Tumultuous Moment",
    "dek": "President Donald Trump will soon nominate a permanent director for the Centers for Disease Control and Prevention, its acting chief, National Institutes of Health Director Jay Bhattacharya, told agency employees at a Wednesday staff meeting.",
    "source": "KFF Health News",
    "date": "2026-04-03",
    "category": "health",
    "image": "/images/digests/article_3672803.jpg",
    "imageCredit": "Jay Bhattacharya, director of the National Institutes of Health, has also been serving as acting director of the Centers for Disease Control and Prevention since February. (Eric Harkleroad/KFF Health News)"
  },
  {
    "id": "article_3672798",
    "title": "US Scientists Sequence 1,000 Genomes From Measles, a Disease Long Eliminated With Vaccines",
    "dek": "The CDC withheld the data for months as a team hit hard by mass layoffs and resignations sorted through the information. But now that scientists at the agency have posted their first batch of whole measles genomes — the genetic blueprint of the viruses — the rest should “start flowing more smoothly at a more rapid cadence,” said Kristian Andersen, an evolutionary virologist at the Scripps Research Institute who isn’t involved with the CDC’s effort but is following it.",
    "source": "KFF Health News",
    "date": "2026-04-03",
    "category": "health",
    "image": "/images/digests/article_3672798.jpg",
    "imageCredit": "Katelyn Messer is among the researchers at the Broad Institute in Cambridge, Massachusetts, who have sequenced 1,000 whole genomes of measles viruses that spread in the U.S. between Jan. 20, 2025, and Jan. 20, 2026. The data will help reveal whether the country has lost its measles elimination status. (Amy Maxmen/KFF Health News)"
  },
  {
    "id": "article_3672791",
    "title": "After Man’s Death Following Insurance Denials, West Virginia Tackles Prior Authorization",
    "dek": "“This legislation is rooted in a simple principle: if a treatment has already been approved, patients should be able to pursue a medically appropriate alternative without being forced to start the process over again — especially when it does not cost more,” Gov. Patrick Morrisey said in a statement after signing the bill into law on March 31.",
    "source": "KFF Health News",
    "date": "2026-04-03",
    "category": "health",
    "image": "/images/digests/article_3672791.jpg",
    "imageCredit": "Eric Tennant with his wife, Becky, and daughter, Amiya.(Becky Tennant)"
  },
  {
    "id": "article_3672777",
    "title": "Listen: What the Vaccine Schedule Whiplash Means for Your Kids",
    "dek": "After a federal judge blocked the Trump administration’s efforts to pare down childhood vaccine recommendations, plenty of questions remain — like how annual vaccines for the flu will get approved. KFF Health News chief Washington correspondent Julie Rovner spoke with WAMU about how the decision is rippling through the public health system.",
    "source": "KFF Health News",
    "date": "2026-04-03",
    "category": "health",
    "image": "/images/digests/article_3672777.jpg",
    "imageCredit": "(Moment/Getty Images)"
  },
  {
    "id": "article_3678713",
    "title": "CCI Classic Snooker to commence from March 6",
    "dek": "The prestigious snooker tournament at Cricket Club of India will feature top players and international participation.",
    "source": "The Insides Speak",
    "date": "2026-04-09",
    "category": "sports",
    "image": "/images/digests/article_3678713.jpg",
    "imageCredit": null
  },
  {
    "id": "article_3674495",
    "title": "Pioneer women’s basketball powers fade into the shadows full of pride as money reshapes the game",
    "dek": "“You can look back and say, ‘Well, it’s been a few years since we won a national championship,’” said Delta State athletic director Mike Kinnison, who was a student when the school won consecutive national titles from 1975-1977. “And that’s true. But, you know, they don’t give those away. You don’t buy them at Walmart. You’ve got to earn them.”",
    "source": "Mississippi Today",
    "date": "2026-04-06",
    "category": "sports",
    "image": "/images/digests/article_3674495.jpg",
    "imageCredit": null
  }
];

export function getDigestsByCategory(category: CategorySlug): WireDigest[] {
  return sortedDigests().filter((d) => d.category === category);
}

export function sortedDigests(): WireDigest[] {
  return [...wireDigests].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}
