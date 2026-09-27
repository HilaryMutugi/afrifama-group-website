/**
 * Central content file for AFRIFAMA.
 * All company claims, statistics, product copy and navigation live here so the
 * team can update the website without touching layout code.
 */

export const company = {
  name: "Afrifama",
  legalName: "Afrifama",
  tagline: "Building a stronger poultry system from feed to flock.",
  positioning:
    "Locally rooted. Commercially disciplined. Farmer-centred. Built for regional scale.",
  location: "Kilifi County, Kenya",
  reach: "Serving Kenya with ambitions for wider East African growth",
  // PLACEHOLDER — replace with Afrifama's published contact details.
  phonePlaceholder: "+254 000 000 000 (placeholder)",
  emailPlaceholder: "hello@afrifama.example (placeholder)",
  siteUrl: "https://afrifama.co.ke",
} as const;

export type NavItem = { label: string; to: string };

export const primaryNav: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About Afrifama", to: "/about" },
  { label: "Our Businesses", to: "/businesses" },
  { label: "Poultry", to: "/poultry" },
  { label: "Feeds", to: "/feeds" },
  { label: "Farmer Partnership", to: "/farmer-partnership" },
  { label: "Genetics & Hatchery", to: "/genetics-hatchery" },
  { label: "Impact", to: "/impact" },
  { label: "Field Notes", to: "/field-notes" },
  { label: "FAQs", to: "/faqs" },
  { label: "Contact", to: "/contact" },
];

export const navCta = { label: "Partner With Us", to: "/contact" } as const;

/** Simplified desktop navigation; business pages sit inside the "Our Businesses" dropdown. */
export const businessNav: NavItem[] = [
  { label: "Overview", to: "/businesses" },
  { label: "Poultry", to: "/poultry" },
  { label: "Feeds", to: "/feeds" },
  { label: "Farmer Partnership", to: "/farmer-partnership" },
  { label: "Genetics & Hatchery", to: "/genetics-hatchery" },
];

export const desktopNav: NavItem[] = [
  { label: "About", to: "/about" },
  { label: "Our Businesses", to: "/businesses" },
  { label: "Impact", to: "/impact" },
  { label: "Field Notes", to: "/field-notes" },
  { label: "Contact", to: "/contact" },
];

/** Compact homepage value-chain strip. */
export const valueChain = [
  { title: "Quality Nutrition", body: "Stage-based mash formulated and tested for local conditions." },
  { title: "Healthy Birds", body: "Consistent management, biosecurity and health routines." },
  { title: "Supported Farmers", body: "Structured partnerships with training and field follow-up." },
  { title: "Reliable Markets", body: "Market linkages that grow as production volume grows." },
] as const;

/**
 * Future surfaces kept out of the published navigation.
 * Flip `enabled` to true when Afrifama is ready to collect egg-supply interest.
 */
export const futureSurfaces = {
  eggSupplyInterest: {
    enabled: false,
    label: "Register Interest in Egg Supply",
    to: "/egg-supply-interest",
  },
} as const;

export type Status = "Operational" | "In Development" | "Future";

export type Pillar = {
  title: string;
  status: Status;
  summary: string;
  points: string[];
  to: string;
};

export const pillars: Pillar[] = [
  {
    title: "Poultry Production",
    status: "Operational",
    summary:
      "Commercial layer production run to a consistent management standard, with birds, nutrition and records treated as one system.",
    points: [
      "First layer-production cycle underway",
      "Stage-based nutrition and health routines",
      "Production data feeding back into formulation",
    ],
    to: "/poultry",
  },
  {
    title: "Afrifama Feeds",
    status: "Operational",
    summary:
      "Four stage-specific mashes formulated with professional software, laboratory analysis and practical production feedback.",
    points: [
      "Chick, Growers, Layers and Kienyeji mash",
      "Raw-material screening before every batch",
      "Continuous improvement, not fixed recipes",
    ],
    to: "/feeds",
  },
  {
    title: "Farmer Partnerships",
    status: "Operational",
    summary:
      "Structured commercial partnerships with selected farmers, including recoverable production support and scheduled field monitoring.",
    points: [
      "Training, vaccination and production guidance",
      "Record-keeping support on farm",
      "Recoverable input support under agreement",
    ],
    to: "/farmer-partnership",
  },
  {
    title: "Genetics & Hatchery Development",
    status: "In Development",
    summary:
      "Technical foundations and partnerships for more reliable access to poultry genetics and future local hatchery capacity.",
    points: [
      "Partner discussions in progress",
      "Parent-stock and brooding planning",
      "No commercial chick supply yet",
    ],
    to: "/genetics-hatchery",
  },
];

export const problems = [
  {
    title: "Unreliable access to quality birds",
    body: "Farmers often cannot source the right birds, at the right time, in the quantities their houses can actually carry.",
  },
  {
    title: "Inconsistent feed quality",
    body: "Feed quality varies between batches and suppliers, which shows up directly in growth, laying performance and margins.",
  },
  {
    title: "High input costs",
    body: "Feed and inputs absorb most of a small flock's revenue, leaving very little room for management mistakes.",
  },
  {
    title: "Limited affordable financing",
    body: "Farmers who are ready to expand rarely have access to input finance that fits a production cycle.",
  },
  {
    title: "Fragmented technical support",
    body: "Advice arrives late, in pieces, and often from sources with no responsibility for the result on that farm.",
  },
];

export type FeedProduct = {
  name: string;
  stage: string;
  summary: string;
  useFor: string;
  status: Status;
};

export const feedProducts: FeedProduct[] = [
  {
    name: "Chick Mash",
    stage: "Day 1 – Week 8",
    summary:
      "A fine, highly digestible starter formulated for early frame development, appetite and a strong start in the brooder.",
    useFor: "Layer and dual-purpose chicks from placement through the brooding period.",
    status: "Operational",
  },
  {
    name: "Growers Mash",
    stage: "Week 9 – Week 18",
    summary:
      "A controlled-energy grower diet aimed at steady, even body-weight development before the onset of lay.",
    useFor: "Pullets being prepared for a productive laying cycle.",
    status: "Operational",
  },
  {
    name: "Layers Mash",
    stage: "Week 19 onward",
    summary:
      "A balanced layer diet with attention to calcium supply, shell quality and persistency across the laying cycle.",
    useFor: "Commercial layer flocks in production.",
    status: "Operational",
  },
  {
    name: "Kienyeji & Dual-Purpose Mash",
    stage: "Grower to production",
    summary:
      "A practical diet for improved kienyeji and dual-purpose birds kept under semi-intensive conditions.",
    useFor: "Mixed-purpose flocks producing both eggs and meat.",
    status: "Operational",
  },
];

export const formulationProcess = [
  {
    title: "Professional feed formulation",
    body: "Diets are built in professional feed-formulation software against nutrient specifications for each production stage.",
  },
  {
    title: "Laboratory analysis",
    body: "Raw materials and finished feed are checked through laboratory analysis rather than assumed to be within specification.",
  },
  {
    title: "Practical production data",
    body: "Intake, growth and laying data from our own and partner farms are reviewed and fed back into formulation decisions.",
  },
  {
    title: "Specialist technical input",
    body: "Formulations draw on technical input from qualified poultry-nutrition specialists in East Africa and Europe.",
  },
];

export const partnershipAfrifamaProvides = [
  "Quality birds",
  "Feed and input support",
  "Training",
  "Vaccination and production guidance",
  "Scheduled monitoring",
  "Record-keeping support",
  "Future market coordination as volumes develop",
];

export const partnershipFarmerProvides = [
  "Suitable housing",
  "Water",
  "Labour and daily care",
  "Biosecurity",
  "Commitment to the agreed production system",
  "Accurate records and communication",
];

export const partnershipSteps = [
  {
    title: "Expression of interest",
    body: "A farmer shares their location, housing, experience and the flock size they want to manage.",
  },
  {
    title: "Farm-readiness review",
    body: "We look at housing, water, biosecurity and daily labour to judge whether the farm can carry a production cycle.",
  },
  {
    title: "Agreement and placement",
    body: "Where a farm is selected, the partnership terms, input support and repayment expectations are agreed in writing before placement.",
  },
  {
    title: "Production and monitoring",
    body: "Scheduled visits, training and record reviews continue through the cycle, with technical support when performance drifts.",
  },
];

/** Early-stage progress figures. Update these values as verified data changes. */
export const earlyProgress = [
  { value: "150+", label: "Farmers reached", note: "Through field visits, training and farmer meetings" },
  { value: "205+", label: "Farmer applications received", note: "Expressions of interest under review" },
  { value: "7", label: "Kilifi wards represented", note: "Across the current working area" },
  { value: "500+", label: "Birds in first layer cycle", note: "First commercial layer-production cycle" },
  { value: "4", label: "Core feed products", note: "Stage-based mash range" },
];

export type FieldNote = {
  slug: string;
  title: string;
  category: "Feeds" | "Farmers" | "Poultry" | "Genetics" | "Company Building";
  excerpt: string;
  readingTime: string;
  date: string;
  sample: true;
  body: string[];
};

export const fieldNoteCategories = [
  "All",
  "Feeds",
  "Farmers",
  "Poultry",
  "Genetics",
  "Company Building",
] as const;

export const fieldNotes: FieldNote[] = [
  {
    slug: "preparing-farmers-for-the-first-layer-flock",
    title: "Preparing Farmers for the First Layer Flock",
    category: "Farmers",
    excerpt:
      "What we check before a farm takes on its first structured layer cycle — housing, water, labour and record-keeping.",
    readingTime: "4 min read",
    date: "Sample content",
    sample: true,
    body: [
      "A first layer flock succeeds or fails long before the birds arrive. Most of the work is in the house, the water supply and the daily routine the family can realistically keep.",
      "During farm-readiness visits we walk through ventilation, floor space, feeder and drinker positions, and how the farmer plans to separate visitors and other animals from the flock.",
      "We also agree on how records will be kept. Feed issued, mortality, and egg numbers written down daily are what make it possible to diagnose a problem in week nine instead of guessing at it.",
      "This article is sample content used to demonstrate the Field Notes template. It will be replaced with documented field work.",
    ],
  },
  {
    slug: "building-better-feed-from-the-raw-material-up",
    title: "Building Better Feed from the Raw Material Up",
    category: "Feeds",
    excerpt:
      "Why raw-material screening, laboratory analysis and production feedback matter more than a fixed recipe.",
    readingTime: "5 min read",
    date: "Sample content",
    sample: true,
    body: [
      "Feed quality is decided at intake. Maize moisture, soybean meal protein and the condition of mineral premixes vary from delivery to delivery, and a formulation that ignores that variation only looks correct on paper.",
      "We screen raw materials, use laboratory analysis to confirm what we are actually working with, and adjust formulations in professional software rather than repeating a recipe.",
      "Production data closes the loop. Intake, body weight and laying performance from our own and partner flocks tell us whether a change on the spreadsheet held up in the house.",
      "This article is sample content used to demonstrate the Field Notes template. It will be replaced with documented field work.",
    ],
  },
  {
    slug: "why-reliable-poultry-genetics-matter",
    title: "Why Reliable Poultry Genetics Matter",
    category: "Genetics",
    excerpt:
      "Bird availability shapes every other decision on a poultry farm. Here is why access to genetics is a system problem.",
    readingTime: "4 min read",
    date: "Sample content",
    sample: true,
    body: [
      "Farmers regularly plan a cycle around birds they cannot get: wrong week, wrong quantity, or a batch of unknown origin accepted because nothing else was available.",
      "That single constraint pushes everything else out of shape — housing sits empty, feed orders lose predictability, and buyers cannot rely on supply.",
      "Afrifama is developing partnerships and technical foundations to improve access to reliable genetics and, in time, local hatchery capacity. This work is in development and no commercial chick supply is available yet.",
      "This article is sample content used to demonstrate the Field Notes template. It will be replaced with documented field work.",
    ],
  },
];

export type FaqGroup = { group: string; items: { q: string; a: string }[] };

export const faqGroups: FaqGroup[] = [
  {
    group: "Afrifama",
    items: [
      {
        q: "What does Afrifama do?",
        a: "Afrifama is a Kenyan agribusiness building an integrated poultry system: quality feed production, commercial layer production, structured smallholder farmer partnerships, and the technical foundations for improved poultry genetics and future hatchery capacity.",
      },
      {
        q: "Is Afrifama an NGO or charity?",
        a: "No. Afrifama is a commercial agribusiness. Support provided to farmers is structured, recoverable production support under an agreed partnership, not a donation.",
      },
      {
        q: "Where does Afrifama operate?",
        a: "Our current work is based in Kilifi County, Kenya, with ambitions to grow across Kenya and the wider East African market as production volumes develop.",
      },
    ],
  },
  {
    group: "Feed Products",
    items: [
      {
        q: "Which feeds are available?",
        a: "Four products: Chick Mash, Growers Mash, Layers Mash, and Kienyeji & Dual-Purpose Mash — each formulated for a specific production stage.",
      },
      {
        q: "How are formulations developed?",
        a: "Using professional feed-formulation software, laboratory analysis of raw materials and finished feed, practical production data, and technical input from qualified nutrition specialists in East Africa and Europe.",
      },
      {
        q: "Can I buy feed without joining the farmer partnership?",
        a: "Yes. Feed customers and distributors can enquire directly through the contact page.",
      },
    ],
  },
  {
    group: "Farmer Partnership",
    items: [
      {
        q: "What is the farmer partnership?",
        a: "A structured commercial arrangement with selected farmers. Afrifama may provide birds, feed and input support, training, vaccination and production guidance, scheduled monitoring and record-keeping support. The farmer provides housing, water, labour, biosecurity and accurate records.",
      },
      {
        q: "Is input support a loan?",
        a: "It is recoverable production support provided under an agreed partnership. It is not a donation, a conventional bank loan, or an open public credit facility.",
      },
      {
        q: "Does applying guarantee acceptance?",
        a: "No. Expressions of interest are reviewed against farm readiness and the capacity we have available in a given period. Acceptance is not automatic.",
      },
      {
        q: "What happens during monitoring visits?",
        a: "We review flock condition, feed use, water, biosecurity and records, and work through any performance issues with the farmer. Individual farmer records are kept private.",
      },
    ],
  },
  {
    group: "Poultry Production",
    items: [
      {
        q: "What does Afrifama currently produce?",
        a: "Our current focus is commercial layer production. We are in our first layer-production cycle and do not publish sales or output figures that have not been verified.",
      },
      {
        q: "How is bird welfare handled?",
        a: "Through stocking density, ventilation, clean water, stage-appropriate nutrition, vaccination schedules and biosecurity routines applied consistently across our own and partner flocks.",
      },
    ],
  },
  {
    group: "Genetics & Hatchery",
    items: [
      {
        q: "Does Afrifama operate a hatchery?",
        a: "No. Genetics and hatchery development is in development. We are building partnerships and technical foundations; no completed hatchery is in operation and commercial chick supply is not yet available.",
      },
      {
        q: "Which genetics partners do you work with?",
        a: "We are not naming genetics partners or specific bird strains publicly at this stage. Technical partners can reach us through the contact page.",
      },
    ],
  },
  {
    group: "Partnerships and Investment",
    items: [
      {
        q: "How can suppliers work with Afrifama?",
        a: "Raw-material, equipment and service suppliers can submit a supplier enquiry through the contact page with details of what they supply and their delivery capability.",
      },
      {
        q: "Is Afrifama open to investors?",
        a: "We are open to conversations with investors and strategic partners who understand agribusiness build-out timelines. Use the investor or strategic partnership route on the contact page.",
      },
    ],
  },
];

export const enquiryRoutes = [
  { value: "feed", label: "Feed enquiry", help: "Feed volumes, pricing and distribution" },
  {
    value: "farmer",
    label: "Farmer-partnership enquiry",
    help: "Expression of interest in the partnership model",
  },
  { value: "supplier", label: "Supplier enquiry", help: "Raw materials, equipment and services" },
  {
    value: "technical",
    label: "Technical or genetics partnership",
    help: "Nutrition, genetics, veterinary and hatchery expertise",
  },
  {
    value: "investor",
    label: "Investor or strategic partnership",
    help: "Investment and long-term strategic collaboration",
  },
  { value: "general", label: "General enquiry", help: "Anything else" },
];

export const partnerPathways = [
  {
    title: "Farmers",
    body: "Join a structured production partnership with training, monitoring and recoverable input support.",
    to: "/farmer-partnership",
  },
  {
    title: "Feed customers",
    body: "Buy stage-specific mash for your flock, or discuss distribution in your area.",
    to: "/feeds",
  },
  {
    title: "Technical partners",
    body: "Work with us on nutrition, veterinary practice, genetics and hatchery development.",
    to: "/contact",
  },
  {
    title: "Suppliers",
    body: "Supply raw materials, equipment and services into a growing production system.",
    to: "/contact",
  },
  {
    title: "Investors and strategic partners",
    body: "Back practical poultry infrastructure being built for regional scale.",
    to: "/contact",
  },
];

export const operatingPrinciples = [
  {
    title: "Commercial discipline",
    body: "Every activity has to make sense on a balance sheet. Sustainable support for farmers depends on a business that works.",
  },
  {
    title: "Farmer-centred design",
    body: "Systems are designed around what a smallholder farm can actually operate day to day, not around ideal conditions.",
  },
  {
    title: "Evidence over claims",
    body: "Formulations, production decisions and published figures rest on analysis and records rather than assertion.",
  },
  {
    title: "Build in sequence",
    body: "We complete one layer of the system before announcing the next. Work in development is labelled as such.",
  },
];

export const mission =
  "To build an integrated, commercially sound poultry system that gives Kenyan farmers reliable access to quality nutrition, dependable birds and practical technical support.";

export const vision =
  "A regionally respected East African poultry platform where feed, genetics, production and farmer partnerships reinforce one another.";

export const storyParagraphs = [
  "Afrifama began with a practical observation in Kilifi County: poultry farming fails far more often for system reasons than for lack of effort. Birds arrive late or of unknown origin, feed quality shifts between batches, input costs swallow the margin, and technical advice comes from sources with no stake in the outcome.",
  "Rather than solving one piece, Afrifama is building the connected parts — feed production and nutrition, commercial layer production, structured farmer partnerships, field support, and the foundations for reliable poultry genetics.",
  "We are an early-growth business. Some parts of the system are operational today, others are in development, and we label them honestly so farmers, customers and partners can plan around what actually exists.",
];
