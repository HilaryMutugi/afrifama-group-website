export type SiteImage = {
  src: string;
  srcSet: string;
  width: number;
  height: number;
  alt: string;
  fit: string;
  position: string;
  mobilePosition: string;
  priority: boolean;
};

/** Supplied imagery; provenance and selection notes are in IMAGE_CREDITS.md. */
export const siteImages: Record<string, SiteImage> = {
  "home-hero": {
    src: "/images/selected/home-hero-1448.webp",
    srcSet:
      "/images/selected/home-hero-480.webp 480w, /images/selected/home-hero-960.webp 960w, /images/selected/home-hero-1448.webp 1448w",
    width: 1448,
    height: 1086,
    alt: "Farmer and Afrifama team reviewing notes outside a rural poultry house.",
    fit: "cover",
    position: "52% 45%",
    mobilePosition: "50% 50%",
    priority: true,
  },
  "about-hero": {
    src: "/images/selected/about-hero-1600.webp",
    srcSet:
      "/images/selected/about-hero-480.webp 480w, /images/selected/about-hero-960.webp 960w, /images/selected/about-hero-1600.webp 1600w",
    width: 1672,
    height: 941,
    alt: "Afrifama team member speaking with a group of women seated beneath a tree.",
    fit: "contain",
    position: "50% 50%",
    mobilePosition: "50% 50%",
    priority: true,
  },
  "about-origin": {
    src: "/images/selected/about-origin-1600.webp",
    srcSet:
      "/images/selected/about-origin-480.webp 480w, /images/selected/about-origin-960.webp 960w, /images/selected/about-origin-1600.webp 1600w",
    width: 1800,
    height: 1013,
    alt: "Afrifama team member seated with an egg tray and farm records.",
    fit: "contain",
    position: "50% 50%",
    mobilePosition: "50% 50%",
    priority: false,
  },
  "about-feeds": {
    src: "/images/selected/about-feeds-1537.webp",
    srcSet:
      "/images/selected/about-feeds-480.webp 480w, /images/selected/about-feeds-960.webp 960w, /images/selected/about-feeds-1537.webp 1537w",
    width: 1537,
    height: 1023,
    alt: "Afrifama feed team bagging mash beside the blue mixer.",
    fit: "contain",
    position: "50% 50%",
    mobilePosition: "50% 50%",
    priority: false,
  },
  "about-operations": {
    src: "/images/selected/about-operations-1600.webp",
    srcSet:
      "/images/selected/about-operations-480.webp 480w, /images/selected/about-operations-960.webp 960w, /images/selected/about-operations-1600.webp 1600w",
    width: 1672,
    height: 941,
    alt: "Two people reviewing a small poultry house with birds in the yard.",
    fit: "contain",
    position: "50% 50%",
    mobilePosition: "50% 50%",
    priority: false,
  },
  "poultry-hero": {
    src: "/images/selected/poultry-hero-1448.webp",
    srcSet:
      "/images/selected/poultry-hero-480.webp 480w, /images/selected/poultry-hero-960.webp 960w, /images/selected/poultry-hero-1448.webp 1448w",
    width: 1448,
    height: 1086,
    alt: "Afrifama team member recording flock observations among chickens, feeders and drinkers.",
    fit: "contain",
    position: "50% 50%",
    mobilePosition: "50% 50%",
    priority: true,
  },
  "poultry-brooding": {
    src: "/images/selected/poultry-brooding-1600.webp",
    srcSet:
      "/images/selected/poultry-brooding-480.webp 480w, /images/selected/poultry-brooding-960.webp 960w, /images/selected/poultry-brooding-1600.webp 1600w",
    width: 1672,
    height: 941,
    alt: "Chicks in a brooding area with heat lamps, feeders and a team member keeping records.",
    fit: "contain",
    position: "50% 50%",
    mobilePosition: "50% 50%",
    priority: false,
  },
  "poultry-rearing": {
    src: "/images/selected/poultry-rearing-1536.webp",
    srcSet:
      "/images/selected/poultry-rearing-480.webp 480w, /images/selected/poultry-rearing-960.webp 960w, /images/selected/poultry-rearing-1536.webp 1536w",
    width: 1536,
    height: 1024,
    alt: "Afrifama feed bags beside growing birds in a poultry house.",
    fit: "contain",
    position: "50% 50%",
    mobilePosition: "50% 50%",
    priority: false,
  },
  "poultry-laying": {
    src: "/images/selected/poultry-laying-1448.webp",
    srcSet:
      "/images/selected/poultry-laying-480.webp 480w, /images/selected/poultry-laying-960.webp 960w, /images/selected/poultry-laying-1448.webp 1448w",
    width: 1448,
    height: 1086,
    alt: "Brown hens resting on litter inside a poultry house.",
    fit: "contain",
    position: "50% 50%",
    mobilePosition: "50% 50%",
    priority: false,
  },
  "feeds-hero": {
    src: "/images/selected/feeds-hero-1600.webp",
    srcSet:
      "/images/selected/feeds-hero-480.webp 480w, /images/selected/feeds-hero-960.webp 960w, /images/selected/feeds-hero-1600.webp 1600w",
    width: 1672,
    height: 941,
    alt: "Afrifama team member handling poultry mash beside a blue feed mixer.",
    fit: "contain",
    position: "50% 50%",
    mobilePosition: "50% 50%",
    priority: true,
  },
  "feeds-range": {
    src: "/images/selected/feeds-range-1600.webp",
    srcSet:
      "/images/selected/feeds-range-480.webp 480w, /images/selected/feeds-range-960.webp 960w, /images/selected/feeds-range-1600.webp 1600w",
    width: 1870,
    height: 841,
    alt: "Four labelled Afrifama bags: Chick Mash, Growers Mash, Layers Mash and Kienyeji Mash.",
    fit: "contain",
    position: "50% 50%",
    mobilePosition: "50% 50%",
    priority: false,
  },
  "feeds-growers": {
    src: "/images/selected/feeds-growers-1024.webp",
    srcSet:
      "/images/selected/feeds-growers-480.webp 480w, /images/selected/feeds-growers-960.webp 960w, /images/selected/feeds-growers-1024.webp 1024w",
    width: 1024,
    height: 1536,
    alt: "Complete Afrifama Growers Mash 10 kg bag with its product label visible.",
    fit: "contain",
    position: "50% 50%",
    mobilePosition: "50% 50%",
    priority: false,
  },
  "feeds-kienyeji": {
    src: "/images/selected/feeds-kienyeji-1024.webp",
    srcSet:
      "/images/selected/feeds-kienyeji-480.webp 480w, /images/selected/feeds-kienyeji-960.webp 960w, /images/selected/feeds-kienyeji-1024.webp 1024w",
    width: 1024,
    height: 1536,
    alt: "Afrifama Kienyeji Mash and Layers Mash bags with their labels visible.",
    fit: "contain",
    position: "50% 50%",
    mobilePosition: "50% 50%",
    priority: false,
  },
  "partnership-hero": {
    src: "/images/selected/partnership-hero-1448.webp",
    srcSet:
      "/images/selected/partnership-hero-480.webp 480w, /images/selected/partnership-hero-960.webp 960w, /images/selected/partnership-hero-1448.webp 1448w",
    width: 1448,
    height: 1086,
    alt: "Farmer and visitor discussing a small poultry house with chickens outside.",
    fit: "contain",
    position: "50% 50%",
    mobilePosition: "50% 50%",
    priority: true,
  },
  "partnership-training": {
    src: "/images/selected/partnership-training-1600.webp",
    srcSet:
      "/images/selected/partnership-training-480.webp 480w, /images/selected/partnership-training-960.webp 960w, /images/selected/partnership-training-1600.webp 1600w",
    width: 1672,
    height: 940,
    alt: "Afrifama team member gently holding a chick in a brooding area.",
    fit: "contain",
    position: "50% 50%",
    mobilePosition: "50% 50%",
    priority: false,
  },
  "partnership-farm-assessment": {
    src: "/images/selected/partnership-farm-assessment-1600.webp",
    srcSet:
      "/images/selected/partnership-farm-assessment-480.webp 480w, /images/selected/partnership-farm-assessment-960.webp 960w, /images/selected/partnership-farm-assessment-1600.webp 1600w",
    width: 1800,
    height: 1013,
    alt: "Poultry-house record review beside feeding and drinking equipment.",
    fit: "contain",
    position: "50% 50%",
    mobilePosition: "50% 50%",
    priority: false,
  },
  "impact-field-assessment": {
    src: "/images/selected/impact-field-assessment-1448.webp",
    srcSet:
      "/images/selected/impact-field-assessment-480.webp 480w, /images/selected/impact-field-assessment-960.webp 960w, /images/selected/impact-field-assessment-1448.webp 1448w",
    width: 1448,
    height: 1086,
    alt: "Farm visit with written notes and a conversation outside a poultry house.",
    fit: "contain",
    position: "50% 50%",
    mobilePosition: "50% 50%",
    priority: false,
  },
  "businesses-poultry": {
    src: "/images/selected/businesses-poultry-1600.webp",
    srcSet:
      "/images/selected/businesses-poultry-480.webp 480w, /images/selected/businesses-poultry-960.webp 960w, /images/selected/businesses-poultry-1600.webp 1600w",
    width: 1672,
    height: 941,
    alt: "Afrifama team member holding an egg tray and a hen inside a poultry house.",
    fit: "contain",
    position: "50% 50%",
    mobilePosition: "50% 50%",
    priority: false,
  },
  "businesses-feeds": {
    src: "/images/selected/businesses-feeds-1600.webp",
    srcSet:
      "/images/selected/businesses-feeds-480.webp 480w, /images/selected/businesses-feeds-960.webp 960w, /images/selected/businesses-feeds-1600.webp 1600w",
    width: 1674,
    height: 940,
    alt: "Afrifama team member at the feed-mixing equipment.",
    fit: "contain",
    position: "50% 50%",
    mobilePosition: "50% 50%",
    priority: false,
  },
  "businesses-partnership": {
    src: "/images/selected/businesses-partnership-1537.webp",
    srcSet:
      "/images/selected/businesses-partnership-480.webp 480w, /images/selected/businesses-partnership-960.webp 960w, /images/selected/businesses-partnership-1537.webp 1537w",
    width: 1537,
    height: 1023,
    alt: "Afrifama team member and visitor reviewing paperwork in the feed facility.",
    fit: "contain",
    position: "50% 50%",
    mobilePosition: "50% 50%",
    priority: false,
  },
  "about-support-illustration": {
    src: "/images/selected/about-support-illustration-1448.webp",
    srcSet:
      "/images/selected/about-support-illustration-480.webp 480w, /images/selected/about-support-illustration-960.webp 960w, /images/selected/about-support-illustration-1448.webp 1448w",
    width: 1448,
    height: 1086,
    alt: "Generated illustration of a farmer and adviser reviewing records in a coastal farm setting.",
    fit: "contain",
    position: "50% 50%",
    mobilePosition: "50% 50%",
    priority: false,
  },
  "businesses-genetics": {
    src: "/images/selected/businesses-genetics-1600.webp",
    srcSet:
      "/images/selected/businesses-genetics-480.webp 480w, /images/selected/businesses-genetics-960.webp 960w, /images/selected/businesses-genetics-1600.webp 1600w",
    width: 2172,
    height: 724,
    alt: "Illustrated journey from hen and egg to embryo, hatching and chick.",
    fit: "contain",
    position: "50% 50%",
    mobilePosition: "50% 50%",
    priority: false,
  },
  "home-slide-feed": {
    src: "/images/selected/home-slide-feed-1600.webp",
    srcSet:
      "/images/selected/home-slide-feed-480.webp 480w, /images/selected/home-slide-feed-960.webp 960w, /images/selected/home-slide-feed-1600.webp 1600w",
    width: 1672,
    height: 941,
    alt: "Afrifama team member pouring poultry mash into a bag beside a blue feed mixer.",
    fit: "contain",
    position: "50% 50%",
    mobilePosition: "50% 50%",
    priority: false,
  },
  "home-slide-care": {
    src: "/images/selected/home-slide-care-1600.webp",
    srcSet:
      "/images/selected/home-slide-care-480.webp 480w, /images/selected/home-slide-care-960.webp 960w, /images/selected/home-slide-care-1600.webp 1600w",
    width: 1672,
    height: 941,
    alt: "Afrifama team member gently checking a chick with both hands in a brooding area.",
    fit: "contain",
    position: "50% 50%",
    mobilePosition: "50% 50%",
    priority: false,
  },
  "home-business-poultry": {
    src: "/images/selected/home-business-poultry-1499.webp",
    srcSet:
      "/images/selected/home-business-poultry-480.webp 480w, /images/selected/home-business-poultry-960.webp 960w, /images/selected/home-business-poultry-1499.webp 1499w",
    width: 1499,
    height: 1049,
    alt: "Afrifama team member holding an egg tray with branded feed bags behind him.",
    fit: "contain",
    position: "50% 50%",
    mobilePosition: "50% 50%",
    priority: false,
  },
  "home-business-partnership": {
    src: "/images/selected/home-business-partnership-1448.webp",
    srcSet:
      "/images/selected/home-business-partnership-480.webp 480w, /images/selected/home-business-partnership-960.webp 960w, /images/selected/home-business-partnership-1448.webp 1448w",
    width: 1448,
    height: 1086,
    alt: "Afrifama team member holding ventilated chick transport boxes.",
    fit: "contain",
    position: "50% 50%",
    mobilePosition: "50% 50%",
    priority: false,
  },
  "home-slide-farmers": {
    src: "/images/selected/about-hero-1600.webp",
    srcSet:
      "/images/selected/about-hero-480.webp 480w, /images/selected/about-hero-960.webp 960w, /images/selected/about-hero-1600.webp 1600w",
    width: 1672,
    height: 941,
    alt: "Afrifama team member speaking with a group of women seated beneath a tree.",
    fit: "contain",
    position: "50% 50%",
    mobilePosition: "50% 50%",
    priority: true,
  },
  "home-slide-eggs": {
    src: "/images/selected/businesses-poultry-1600.webp",
    srcSet:
      "/images/selected/businesses-poultry-480.webp 480w, /images/selected/businesses-poultry-960.webp 960w, /images/selected/businesses-poultry-1600.webp 1600w",
    width: 1672,
    height: 941,
    alt: "Afrifama team member holding an egg tray and a hen inside a poultry house.",
    fit: "contain",
    position: "50% 50%",
    mobilePosition: "50% 50%",
    priority: false,
  },
  "home-story": {
    src: "/images/selected/impact-field-assessment-1448.webp",
    srcSet:
      "/images/selected/impact-field-assessment-480.webp 480w, /images/selected/impact-field-assessment-960.webp 960w, /images/selected/impact-field-assessment-1448.webp 1448w",
    width: 1448,
    height: 1086,
    alt: "Farm visit with written notes and a conversation outside a poultry house.",
    fit: "contain",
    position: "50% 50%",
    mobilePosition: "50% 50%",
    priority: false,
  },
  "home-progress": {
    src: "/images/selected/about-origin-1600.webp",
    srcSet:
      "/images/selected/about-origin-480.webp 480w, /images/selected/about-origin-960.webp 960w, /images/selected/about-origin-1600.webp 1600w",
    width: 1800,
    height: 1013,
    alt: "Afrifama team member seated with an egg tray and farm records.",
    fit: "contain",
    position: "50% 50%",
    mobilePosition: "50% 50%",
    priority: false,
  },
  "home-business-feeds": {
    src: "/images/selected/feeds-range-1600.webp",
    srcSet:
      "/images/selected/feeds-range-480.webp 480w, /images/selected/feeds-range-960.webp 960w, /images/selected/feeds-range-1600.webp 1600w",
    width: 1870,
    height: 841,
    alt: "Four labelled Afrifama bags: Chick Mash, Growers Mash, Layers Mash and Kienyeji Mash.",
    fit: "contain",
    position: "50% 50%",
    mobilePosition: "50% 50%",
    priority: false,
  },
  "home-business-genetics": {
    src: "/images/selected/businesses-genetics-1600.webp",
    srcSet:
      "/images/selected/businesses-genetics-480.webp 480w, /images/selected/businesses-genetics-960.webp 960w, /images/selected/businesses-genetics-1600.webp 1600w",
    width: 2172,
    height: 724,
    alt: "Illustrated journey from hen and egg to embryo, hatching and chick.",
    fit: "contain",
    position: "50% 50%",
    mobilePosition: "50% 50%",
    priority: false,
  },
};
