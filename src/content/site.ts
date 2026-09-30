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
  siteUrl: "https://afrifama.co.ke",
} as const;

/** Stable names for photography that will be supplied in a later phase. */
export const imageSlots = {
  about: ["about-hero", "about-origin", "about-feeds", "about-operations"],
  poultry: ["poultry-hero", "poultry-brooding", "poultry-rearing", "poultry-laying"],
  feeds: ["feeds-hero", "feeds-raw-materials", "feeds-production"],
  genetics: ["genetics-hero", "genetics-parent-stock"],
  impact: ["impact-hero", "impact-field-assessment", "impact-farmer-story"],
  partnership: ["partnership-hero", "partnership-training", "partnership-farm-assessment"],
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

/** Homepage hero copy and search metadata. */
export const homeHero = {
  eyebrow: "Kenyan agribusiness startup · Kilifi County",
  title: "Building a better future for smallholder farmers on Kenya's coast.",
  lead: "Afrifama is an early-growth agribusiness startup in Kilifi County. We are building a system that connects farmers to financing, feed, technology, and markets, so farming becomes a dependable livelihood, starting with poultry.",
  metaTitle: "Afrifama | Building a Better Future for Smallholder Farmers on Kenya's Coast",
  metaDescription:
    "Afrifama is an early-growth agribusiness startup in Kilifi County, connecting farmers to financing, feed, technology and markets, starting with poultry.",
} as const;

/** Compact homepage value-chain strip. */
export const valueChain = [
  {
    title: "Quality Nutrition",
    body: "Stage-based mash formulated and tested for local conditions.",
  },
  { title: "Healthy Birds", body: "Consistent management, biosecurity and health routines." },
  {
    title: "Supported Farmers",
    body: "Structured partnerships with training and field follow-up.",
  },
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

const publicAsset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export type Pillar = {
  title: string;
  status: Status;
  summary: string;
  points: string[];
  to: string;
};

export const homeBusinesses = {
  eyebrow: "Our businesses",
  title: "One poultry system. Built around the farmer.",
  lead: "Poultry production, better feed, farmer partnerships and stronger genetics—connected to build productive farms, stronger livelihoods and shared growth.",
} as const;

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

export const poultryOperatingSystem = [
  {
    number: "01",
    title: "Flock production",
    body: "Commercial layer production managed through distinct brooding, rearing and laying stages.",
    to: "/poultry",
  },
  {
    number: "02",
    title: "Stage-based nutrition",
    body: "Afrifama feed matched to the bird's stage, with production feedback informing formulation decisions.",
    to: "/feeds",
  },
  {
    number: "03",
    title: "Facilities and biosecurity",
    body: "Housing, ventilation, water, litter and controlled movement managed as daily operating disciplines.",
    to: "/poultry",
  },
  {
    number: "04",
    title: "Records and decisions",
    body: "Daily flock records used to identify trends early and guide practical management changes.",
    to: "/impact",
  },
  {
    number: "05",
    title: "Farmer support",
    body: "The same routines extended to selected partner farms through training, monitoring and record review.",
    to: "/farmer-partnership",
  },
] as const;

export const poultryPathways = [
  {
    audience: "Commercial farmers",
    title: "Build a more consistent production routine",
    body: "Explore Afrifama's structured farmer partnership and the operating standards expected on participating farms.",
    label: "Understand the partnership",
    to: "/farmer-partnership",
  },
  {
    audience: "Feed customers",
    title: "Match nutrition to the production stage",
    body: "Review the Chick, Growers, Layers and Kienyeji mash range developed for practical local production.",
    label: "Explore Afrifama Feeds",
    to: "/feeds",
  },
  {
    audience: "Strategic partners",
    title: "Strengthen the system around the flock",
    body: "Discuss technical, supply, equipment or investment partnerships that support disciplined growth.",
    label: "Start a conversation",
    to: "/contact",
  },
] as const;

export const poultryProductionStages = [
  {
    title: "Brooding",
    body: "Early nutrition, temperature, water, vaccination and close observation.",
  },
  {
    title: "Rearing",
    body: "Body-weight development, flock uniformity and preparation for production.",
  },
  {
    title: "Laying",
    body: "Lighting, nutrition, health monitoring and disciplined production records.",
  },
] as const;

export const geneticsCapability = {
  positioning:
    "A developing Afrifama capability focused on parent stock, reliable layer genetics, technical partnerships and the long-term development of locally relevant chick supply.",
  /** Caption under the genetics photo placeholder. States the honest stage of the hatchery. */
  photoCaption:
    "Reserved for future verified photography. Afrifama does not currently operate a completed hatchery or offer commercial chicks.",
  productiveFlock: [
    {
      title: "Known origin",
      body: "Clear provenance and breeder guidance are the starting point for making sound flock decisions.",
    },
    {
      title: "Flock robustness",
      body: "Bird health, welfare and practical suitability matter alongside any published performance potential.",
    },
    {
      title: "Management fit",
      body: "Genetics must be matched with housing, nutrition, health planning and the farmer's operating capacity.",
    },
  ],
  parentStockDirection: [
    "Evaluate technical partnerships for reliable layer genetics",
    "Build parent-stock knowledge and operating capability in sequence",
    "Plan future brooding and hatchery capacity around verified demand",
    "Develop locally relevant support before any commercial chick offer",
  ],
  buildSequence: [
    {
      status: "In Development" as const,
      title: "Technical partnerships",
      body: "Conversations and technical groundwork around genetics, parent stock, bird health and management support.",
    },
    {
      status: "Future" as const,
      title: "Parent-stock capability",
      body: "A carefully sequenced capability informed by suitable genetics, biosecurity requirements and verified local demand.",
    },
    {
      status: "Future" as const,
      title: "Locally relevant chick supply",
      body: "Long-term development of predictable chick supply in practical quantities, supported by clear management guidance.",
    },
  ],
  connectedPerformance: [
    {
      title: "Genetics",
      body: "The bird's inherited potential and the official breeder guidance attached to that specific breed.",
    },
    {
      title: "Nutrition",
      body: "Stage-appropriate feed that responds to age, development and production demands.",
    },
    {
      title: "Management",
      body: "Housing, water, health, biosecurity and daily routines that allow potential to be expressed responsibly.",
    },
  ],
  futureResources: [
    {
      title: "Breed profiles",
      body: "Future profiles will identify the breed, its intended production context and the official breeder source.",
    },
    {
      title: "Management guides",
      body: "Future guides will translate official breeder recommendations into clear, field-ready management references.",
    },
    {
      title: "Performance references",
      body: "Any future technical figures will be attributed to the named breed's official management guide, not presented as Afrifama results.",
    },
  ],
} as const;

export const whyAfrifama = {
  label: "WHY AFRIFAMA EXISTS",
  title: "Strong farms need more than effort.",
  lead: "Quality birds, dependable feed, affordable inputs, technical support, finance and usable farm data must work together. Afrifama is connecting these parts into one commercial poultry system built around the farmer.",
  image: {
    src: publicAsset("images/storytelling/why-afrifama-hero.webp"),
    alt: "Poultry farmer walking beside hens and chicks with his poultry house in the background",
  },
} as const;

export const problems = [
  {
    number: "01",
    title: "Unreliable access to quality birds",
    body: "The right birds are not always available at the right time or scale.",
    image: publicAsset("images/storytelling/problem-quality-birds.webp"),
    alt: "Poultry farmer inspecting a healthy chick beside a hen and a crate of chicks",
  },
  {
    number: "02",
    title: "Inconsistent feed quality",
    body: "Variable nutrition affects growth, egg production and farm margins.",
    image: publicAsset("images/storytelling/problem-feed-quality.webp"),
    alt: "Poultry farmer checking grain beside feed sacks while hens feed nearby",
  },
  {
    number: "03",
    title: "High input costs",
    body: "Feed and essential inputs consume most of a small flock’s revenue.",
    image: publicAsset("images/storytelling/problem-input-costs.webp"),
    alt: "Poultry farmer reviewing farm costs beside feed, eggs and stacked coins",
  },
  {
    number: "04",
    title: "Limited production finance",
    body: "Farmers ready to grow struggle to finance a complete production cycle.",
    image: publicAsset("images/storytelling/problem-finance.webp"),
    alt: "Poultry farmer carrying farm records while approaching a finance office",
  },
  {
    number: "05",
    title: "Fragmented technical support",
    body: "Practical guidance works best when it continues throughout the production cycle.",
    image: publicAsset("images/storytelling/problem-support-data.webp"),
    alt: "Farmer and poultry adviser reviewing flock information together on a farm",
  },
  {
    number: "06",
    title: "Disconnected farm data",
    body: "Scattered records make it difficult to track performance and act early.",
    image: publicAsset("images/storytelling/problem-support-data.webp"),
    alt: "Farmer and poultry adviser reviewing a farm-performance dashboard on a tablet",
  },
] as const;

export type FeedProduct = {
  name: string;
  stage: string;
  purpose: string;
  flockType: string;
  journeyStage: "Start" | "Grow" | "Prepare" | "Produce";
  status: Status;
};

export const feedProducts: FeedProduct[] = [
  {
    name: "Chick Mash",
    stage: "Early development",
    purpose: "Nutrition for early growth, skeletal development and a strong start.",
    flockType: "Commercial layer, improved kienyeji and dual-purpose chicks.",
    journeyStage: "Start",
    status: "Operational",
  },
  {
    name: "Growers Mash",
    stage: "Frame and body-weight development",
    purpose:
      "Balanced nutrition supporting controlled growth, frame development and flock uniformity.",
    flockType: "Growing pullets and improved kienyeji birds.",
    journeyStage: "Grow",
    status: "Operational",
  },
  {
    name: "Layers Economy",
    stage: "Egg production",
    purpose: "A practical layer-feed option designed for cost-conscious production systems.",
    flockType: "Laying flocks managed around practical commercial objectives.",
    journeyStage: "Produce",
    status: "Operational",
  },
  {
    name: "Layers Premium 1.0",
    stage: "Egg production and persistence",
    purpose: "Stage-specific nutrition for commercial laying performance and flock consistency.",
    flockType: "Commercial layer flocks in production.",
    journeyStage: "Produce",
    status: "Operational",
  },
  {
    name: "Layers Premium 1.2",
    stage: "Targeted laying programme",
    purpose:
      "A higher-specification option for producers requiring a more targeted nutritional programme.",
    flockType: "Commercial layer flocks with defined production requirements.",
    journeyStage: "Produce",
    status: "Operational",
  },
  {
    name: "Kienyeji Mash",
    stage: "Growth through production",
    purpose: "Balanced nutrition for improved kienyeji and dual-purpose production systems.",
    flockType: "Improved kienyeji and dual-purpose flocks.",
    journeyStage: "Prepare",
    status: "Operational",
  },
];

export const feedsPage = {
  positioning: "Stage-specific poultry nutrition, connected to real production.",
  supportingCopy:
    "We formulate poultry feeds around the changing nutritional needs of the bird—from the first days of growth through development and laying. Our production experience, farmer feedback, raw-material evaluation and qualified technical input help keep nutrition connected to practical flock performance.",
  stages: [
    {
      name: "Start",
      objective: "Early development",
      detail: "Build the nutritional foundation for growth and skeletal development.",
    },
    {
      name: "Grow",
      objective: "Frame and body-weight development",
      detail: "Support controlled development and flock uniformity.",
    },
    {
      name: "Prepare",
      objective: "Preparation for production",
      detail: "Align nutrition with the transition toward productive maturity.",
    },
    {
      name: "Produce",
      objective: "Egg production and persistence",
      detail: "Match the nutritional programme to the demands of the laying stage.",
    },
  ],
  productionFactors: [
    "Genetics",
    "Age and production stage",
    "Body weight and uniformity",
    "Feed intake",
    "Water quality and availability",
    "Housing and environmental conditions",
    "Health status",
    "Raw-material consistency",
    "Farm-management discipline",
  ],
  developmentProcess: [
    {
      title: "Understand the production objective",
      body: "Begin with the bird, flock type, production stage and practical farm objective.",
    },
    {
      title: "Evaluate available raw materials",
      body: "Review ingredient condition, consistency, suitability, availability and cost.",
    },
    {
      title: "Develop the formulation",
      body: "Build the stage-specific formulation with qualified technical input.",
    },
    {
      title: "Mix and monitor production",
      body: "Control the formulation version, mixing process and associated batch records.",
    },
    {
      title: "Review flock response and farmer feedback",
      body: "Use practical observations and production evidence to inform future review.",
    },
  ],
  processCopy:
    "Feed formulation is not a one-time exercise. Ingredient quality, availability, cost and flock requirements change. Afrifama’s approach is to review these factors carefully and improve formulations through production evidence and qualified technical guidance.",
  qualityDisciplines: [
    "Supplier assessment",
    "Ingredient inspection",
    "Raw-material sampling",
    "Laboratory testing where applicable",
    "Formulation control",
    "Mixing consistency",
    "Batch records",
    "Finished-feed review",
  ],
  farmerSupport: [
    "Product-selection guidance",
    "Stage-transition planning",
    "Feeding and water-management guidance",
    "Farm record-keeping",
    "Flock-performance review",
    "Practical farmer training",
  ],
  customerPathways: [
    {
      title: "Poultry farmers",
      body: "Discuss the flock type, production stage and product option that fits your current objective.",
      to: "/contact",
    },
    {
      title: "Partner farmers",
      body: "Connect feed decisions with Afrifama’s structured production partnership and field support.",
      to: "/farmer-partnership",
    },
    {
      title: "Dealers and distributors",
      body: "Start a conversation about local demand, product access and distribution requirements.",
      to: "/contact",
    },
    {
      title: "Commercial farms",
      body: "Discuss a stage-specific nutritional programme around your operating context.",
      to: "/contact",
    },
    {
      title: "Technical and nutrition partners",
      body: "Contribute qualified expertise to formulation review, quality discipline and farmer guidance.",
      to: "/contact",
    },
    {
      title: "Raw-material suppliers",
      body: "Share ingredient specifications, consistency controls and delivery capability.",
      to: "/contact",
    },
  ],
} as const;

export const farmerPartnership = {
  hero: {
    label: "Pilot underway",
    title: "Building commercially capable poultry farmers, one flock at a time.",
    body: "The Afrifama Smallholder Egg Partnership works with selected farmers who have the housing, water, labour and commitment required to manage a commercial layer flock. Afrifama connects farmer capability with birds, stage-specific feeds, training, technical monitoring and future market coordination.",
  },
  model: {
    title: "A commercial partnership with responsibilities on both sides",
    body: "The partnership is designed to help capable farmers enter or expand commercial egg production through a structured production system. Support, responsibilities, records and recovery arrangements are agreed in writing before birds are placed.",
    afrifamaRole: [
      "Farmer assessment and selection",
      "Quality birds for the agreed flock",
      "Stage-specific feed and input support",
      "Farmer training",
      "Vaccination and health-programme guidance",
      "Scheduled monitoring",
      "Production and record-keeping support",
      "Market coordination as volumes develop",
    ],
    farmerRole: [
      "Suitable and secure poultry housing",
      "Reliable clean water",
      "Daily labour and responsible flock care",
      "Required equipment",
      "Strong biosecurity",
      "Accurate production records",
      "Timely communication",
      "Compliance with the agreed production system",
      "Responsibility for the obligations contained in the signed agreement",
    ],
  },
  readinessCriteria: [
    "Have completed or nearly completed suitable housing",
    "Have reliable access to clean water",
    "Can provide consistent daily care",
    "Are willing to follow biosecurity requirements",
    "Can maintain accurate flock and financial records",
    "Are prepared to attend training",
    "Accept scheduled farm visits and monitoring",
    "Understand that poultry production involves commercial risk",
    "Are willing to enter a written partnership agreement",
  ],
  readinessGates: [
    {
      title: "Housing readiness",
      body: "The structure must provide appropriate space, security, ventilation and protection.",
    },
    {
      title: "Water reliability",
      body: "Birds must have dependable access to clean water throughout the production cycle.",
    },
    {
      title: "Biosecurity readiness",
      body: "The farm must be capable of controlling visitors, equipment movement, contamination and disease risk.",
    },
    {
      title: "Daily management capacity",
      body: "A responsible caretaker must be available for feeding, watering, observation and record-keeping.",
    },
    {
      title: "Equipment and preparation",
      body: "Required feeders, drinkers, storage and basic farm equipment must be ready before placement.",
    },
    {
      title: "Monitoring and route practicality",
      body: "The farm must be accessible for scheduled monitoring, technical support and production coordination.",
    },
  ],
  journey: [
    {
      number: "01",
      title: "Expression of interest",
      body: "The farmer shares their location, housing status, experience and desired flock size.",
    },
    {
      number: "02",
      title: "Initial screening",
      body: "Afrifama reviews the application against current programme requirements and available capacity.",
    },
    {
      number: "03",
      title: "Farm assessment",
      body: "The team visits shortlisted farms to assess housing, water, biosecurity, equipment and management readiness.",
    },
    {
      number: "04",
      title: "Final selection",
      body: "Eligible farms are compared using consistent readiness criteria. Application does not guarantee selection.",
    },
    {
      number: "05",
      title: "Agreement and training",
      body: "Responsibilities, support and recovery arrangements are reviewed and agreed in writing. Selected farmers complete practical training.",
    },
    {
      number: "06",
      title: "Farm preparation and placement",
      body: "Final readiness checks are completed before birds are transferred to the farm.",
    },
    {
      number: "07",
      title: "Production and monitoring",
      body: "Afrifama conducts scheduled visits, reviews records and supports the farmer through the production cycle.",
    },
    {
      number: "08",
      title: "Market coordination and review",
      body: "Production performance, farmer obligations and market pathways are reviewed as the flock moves into lay.",
    },
  ],
  support: [
    {
      title: "Flock health and biosecurity",
      body: "Practical prevention routines, health-programme follow-up and early identification of concerns.",
    },
    {
      title: "Feeding, water and body-weight management",
      body: "Guidance on access, stage transitions, development and flock uniformity.",
    },
    {
      title: "Records and farm economics",
      body: "Consistent production and cost records that keep decisions commercially grounded.",
    },
    {
      title: "Field monitoring and corrective support",
      body: "Scheduled reviews and practical guidance when records or flock observations identify a concern.",
    },
  ],
  recoverableSupport: {
    body: "Depending on the agreed partnership, Afrifama may advance birds, feed or selected production inputs. These inputs are not donations. The value and method of recovery are defined in the individual farmer agreement before placement.",
    is: [
      "Structured production support",
      "Agreed individually and in writing",
      "Connected to an approved flock",
      "Monitored through production records",
      "Recoverable under the partnership agreement",
    ],
    isNot: [
      "A grant or donation",
      "A conventional public loan",
      "An unrestricted cash facility",
      "An automatic entitlement",
      "A guarantee of profit",
      "Available to every applicant",
    ],
  },
} as const;

/** Early-stage progress figures. Update these values as verified data changes. */
export const earlyProgress = [
  {
    value: "150+",
    label: "Farmers reached",
    note: "Through field visits, training and farmer meetings",
  },
  {
    value: "205+",
    label: "Farmer applications received",
    note: "Expressions of interest under review",
  },
  { value: "7", label: "Kilifi wards represented", note: "Across the current working area" },
  {
    value: "500+",
    label: "Birds in first layer cycle",
    note: "First commercial layer-production cycle",
  },
  { value: "4", label: "Core feed products", note: "Stage-based mash range" },
];

export const impactFramework = {
  coreMessage: "Impact begins with a poultry system that farmers can operate, measure and grow.",
  supportingCopy:
    "Afrifama is building practical connections between poultry production, nutrition, farmer capability and markets. Our impact approach measures more than participation—it follows what changes on the farm and whether those changes contribute to stronger livelihoods.",
  pathway: [
    {
      number: "01",
      title: "Inputs",
      body: "Chicks, stage-specific feeds, training, technical support and production tools.",
    },
    {
      number: "02",
      title: "Farmer capability",
      body: "Housing preparation, biosecurity, flock management, record-keeping and business discipline.",
    },
    {
      number: "03",
      title: "Production outcomes",
      body: "Better flock survival, growth uniformity, feed management and production consistency.",
    },
    {
      number: "04",
      title: "Market participation",
      body: "Stronger connections to inputs, technical services and reliable egg markets.",
    },
    {
      number: "05",
      title: "Livelihood resilience",
      body: "More dependable farm income, stronger household enterprises and capacity to withstand production shocks.",
    },
  ],
  metrics: [
    {
      label: "Applications received",
      definition: "Expressions of interest submitted for review; not farmers selected or impacted.",
      source: "Application register",
    },
    {
      label: "Farmers assessed",
      definition: "Applicants who have completed a documented farm-readiness assessment.",
      source: "Farm-assessment records",
    },
    {
      label: "Farmers selected",
      definition: "Assessed farmers formally approved for the current partnership cohort.",
      source: "Selection and agreement records",
    },
    {
      label: "Farmers trained",
      definition: "Selected farmers who have completed the required practical training modules.",
      source: "Attendance and training records",
    },
    {
      label: "Birds placed",
      definition: "Birds physically placed with active partner farms under signed agreements.",
      source: "Placement and flock records",
    },
    {
      label: "Active partner farms",
      definition: "Selected farms currently managing an Afrifama-supported production cycle.",
      source: "Programme and monitoring records",
    },
    {
      label: "Women and youth participating",
      definition: "Verified participants reported by age and gender without double-counting.",
      source: "Consented participant records",
    },
  ],
  measurementPillars: [
    {
      title: "Farmer capability",
      body: "Training completion, adoption of recommended practices and quality of farm records.",
    },
    {
      title: "Flock performance",
      body: "Mortality, body-weight development, feed use, production consistency and bird welfare.",
    },
    {
      title: "Farm economics",
      body: "Production costs, egg sales, farmer earnings, repayment performance and business continuity.",
    },
    {
      title: "Household and community outcomes",
      body: "Income stability, confidence, decision-making, women’s participation, youth employment and resilience.",
    },
  ],
  farmerJourney: [
    "Application",
    "Assessment",
    "Selection",
    "Training",
    "Bird placement",
    "Monitoring",
    "Production",
    "Market linkage",
  ],
  reportingCopy:
    "Afrifama separates participation, operational progress and livelihood outcomes. We publish figures only after they have been checked against programme, flock and farmer records. As the pilot develops, this page will be updated with reporting dates, definitions and supporting field evidence.",
  lastUpdated: "27 September 2026",
  partnerPathways: [
    {
      title: "Farmers",
      body: "Explore the requirements and stages of Afrifama’s structured production partnership.",
      to: "/farmer-partnership",
    },
    {
      title: "Technical partners",
      body: "Contribute practical expertise across nutrition, flock health, genetics and monitoring.",
      to: "/contact",
    },
    {
      title: "Market partners",
      body: "Discuss reliable routes to market as verified egg volumes develop.",
      to: "/contact",
    },
    {
      title: "Researchers",
      body: "Explore rigorous, responsible learning around poultry production and farmer outcomes.",
      to: "/contact",
    },
    {
      title: "Investors and development partners",
      body: "Support commercially disciplined infrastructure and evidence-led growth.",
      to: "/contact",
    },
  ],
} as const;

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
        a: "Afrifama's current range includes Chick Mash, Growers Mash, Layers Economy, Layers Premium 1.0, Layers Premium 1.2 and Kienyeji Mash. Product selection should reflect flock type, production stage and farm objectives.",
      },
      {
        q: "How are formulations developed?",
        a: "Afrifama reviews the production objective, available raw materials, formulation requirements, mixing process and flock response, with laboratory testing where applicable and qualified technical input.",
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
        q: "What is the Afrifama Smallholder Egg Partnership?",
        a: "It is a structured commercial arrangement with selected farmers. Afrifama may provide agreed production inputs, training and monitoring, while the farmer provides the farm readiness, daily management, records and discipline required for the flock.",
      },
      {
        q: "Who can apply?",
        a: "Farmers with suitable or nearly completed housing, reliable clean water, daily management capacity and willingness to follow the agreed production system may express interest. Applications are considered against current requirements and assessment capacity.",
      },
      {
        q: "Does applying guarantee selection?",
        a: "No. Expressions of interest are reviewed against farm readiness and the capacity we have available in a given period. Acceptance is not automatic.",
      },
      {
        q: "Must my poultry house already be complete?",
        a: "A completed or nearly completed suitable poultry house is expected at application. Every critical readiness gate, including final housing and equipment preparation, must be passed before selection and placement.",
      },
      {
        q: "What does Afrifama provide?",
        a: "Depending on the individual agreement, Afrifama may provide quality birds for the agreed flock, stage-specific feed or selected inputs, training, health-programme guidance, scheduled monitoring, record support and future market coordination as volumes develop.",
      },
      {
        q: "What must the farmer provide?",
        a: "The farmer provides suitable housing, reliable clean water, equipment, daily labour and flock care, biosecurity, accurate records, timely communication and compliance with the signed agreement.",
      },
      {
        q: "Is the input support a loan?",
        a: "It is recoverable production support provided under an agreed partnership. It is not a donation, a conventional public loan or an unrestricted cash facility. The value and recovery method are agreed in writing before placement.",
      },
      {
        q: "How are farmers selected?",
        a: "Afrifama screens expressions of interest, assesses shortlisted farms and compares eligible farms using consistent readiness criteria. Programme capacity and route practicality also form part of final selection.",
      },
      {
        q: "What happens during monitoring visits?",
        a: "Scheduled visits review flock condition, feed and water management, biosecurity, body-weight or production progress and farm records. The team discusses practical corrective steps where needed; this does not imply continuous emergency veterinary coverage.",
      },
      {
        q: "Is egg purchase by Afrifama guaranteed?",
        a: "Market and egg-purchase arrangements are defined in the individual agreement applicable to each production cycle.",
      },
      {
        q: "Can I sell eggs independently?",
        a: "Market and egg-purchase arrangements are defined in the individual agreement applicable to each production cycle.",
      },
      {
        q: "How will my farm and production data be handled?",
        a: "Individual farmer records, farm assessments, flock data, balances and photographs are treated responsibly. Personal information or identifiable farmer stories will not be published without permission.",
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

/**
 * About Afrifama copy, approved by Hilary (Unit 1). The farmer scene is
 * illustrative only: no name, no photo, never presented as a testimonial.
 */
export const aboutStory = {
  title: "About Afrifama",
  description:
    "Afrifama is an early-growth agribusiness startup building an integrated value-chain feed system for smallholder farmers in Kenya's coastal region.",
  opening: "Every farmer deserves more than a hope.",
  scene:
    "Picture a smallholder farmer on Kenya's coast. She wakes before sunrise, feeds her birds, and hopes the season is kind. She has the will and the work ethic. What she often does not have is financing for inputs, support when something goes wrong, or a reliable place to sell. So every flock is a gamble, and every loss lands on her family.",
  gap: "That is the gap Afrifama exists to close.",
  whoWeAre: {
    title: "Who we are",
    body: "Afrifama is an early-growth agribusiness startup building an integrated value-chain feed system for smallholder farmers in Kenya's coastal region. We are young, focused, and driven by a simple belief: farming should not feel like a gamble.",
  },
  whoWeServe: {
    title: "Who we serve",
    body: "Our focus is smallholder poultry farmers, especially in underserved ASAL communities, the farmers who are too often left to produce alone. We help them move from risky, unsupported production into more reliable agribusinesses.",
  },
  howWeWalk: {
    title: "How we walk with them",
    body: "Through our farmer partnership model, we combine input financing, technology, production support, and market access into one practical system. Not one piece of help, but the whole path, so no farmer has to carry it alone.",
    pillars: [
      { title: "Input financing", body: "Financing for inputs." },
      { title: "Technology", body: "One practical system." },
      { title: "Production support", body: "Support when something goes wrong." },
      { title: "Market access", body: "A reliable place to sell." },
    ],
  },
  whyWeExist: {
    title: "Why we exist",
    body: "As a purpose-driven startup, our impact is built directly into our business model. When a farmer's poultry becomes a more stable source of income, it becomes more than a business. It becomes a pathway to better livelihoods for a family and a community.",
  },
  closing: "If you believe rural farmers deserve a fair chance, come build with us.",
  cta: { label: "Partner With Us", to: "/contact" },
  readMore: "Read our story",
} as const;

export const eggJourney = {
  mural: publicAsset("images/genetics/egg-journey-mural.png"),
  title: "A stronger flock begins here.",
  alt: "Concept mural showing a breeding hen, an illuminated egg, an embryo cutaway, a hatching chick and a newly emerged chick.",
  caption: "Concept illustration · Hover or tap a stage",
  stages: [
    { label: "Parent flock", title: "The beginning of the journey", copy: "The parent flock is the starting point for the next generation of birds." },
    { label: "Candling", title: "A glimpse inside the egg", copy: "Light reveals signs of development inside a hatching egg." },
    { label: "Development", title: "Life taking shape", copy: "The cutaway illustrates the hidden development of a chick within its shell." },
    { label: "Hatching", title: "Breaking through", copy: "The chick begins to emerge from the shell." },
    { label: "First start", title: "A new beginning", copy: "The journey continues with chick care, brooding and support on the farm." },
  ],
} as const;

export const geneticsPage = {
  title: "A stronger flock begins here.",
  intro: "Follow the journey from parent flock to first start, and Afrifama’s developing foundations for future chick supply.",
  farmers: {
    title: "Why a stronger beginning matters",
    body: "For a smallholder farmer, every bird represents an investment in feed, time and care. Known origins, suitable genetics and a well-supported start help farmers plan their flock with greater confidence.",
    support: "That beginning needs to carry through to the farm: practical brooding guidance, dependable nutrition and ongoing health and management support.",
  },
  careTitle: "Genetics, incubation and early care",
  care: [
    { title: "Genetics", body: "Start with known parent-stock origins and breeder guidance. Consider bird robustness, local conditions and the farmer’s capacity alongside production potential." },
    { title: "Incubation", body: "Careful egg handling, biosecurity and controlled incubation conditions support development. Candling offers a glimpse inside the egg along the way." },
    { title: "Early care", body: "The first start continues beyond the shell. Suitable brooding, water, nutrition and attentive health management connect chick care with performance on the farm." },
  ],
  direction: {
    title: "Build capability in the right order",
    body: "Afrifama’s direction is to develop technical partnerships and parent-stock knowledge first, then plan brooding and hatchery capability around verified local demand and practical farmer support.",
    statusTitle: "Current status · In development",
    status: "Afrifama does not operate a completed hatchery or currently supply commercial day-old chicks. Genetics partners and specific bird strains are not yet named publicly.",
  },
  partnership: {
    title: "Help shape a stronger beginning",
    body: "We welcome conversations with genetics, parent-stock, veterinary, biosecurity and hatchery specialists who value responsible development and practical outcomes for farmers.",
    cta: "Discuss a technical partnership",
  },
} as const;
