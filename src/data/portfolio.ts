export const portfolioFilters = [
  "all",
  "fullPlanning",
  "coordination",
  "intimate",
  "cultural",
] as const;

export type PortfolioFilter = (typeof portfolioFilters)[number];

export const portfolioEntries = [
  {
    id: "menteng-intimate",
    featured: true,
    image: "/images/portfolio/intimate-soiree.png",
    filters: ["intimate", "coordination"],
    tagIds: ["intimate", "jakarta", "garden"],
  },
  {
    id: "south-jakarta-ballroom",
    featured: true,
    image: "/images/portfolio/ballroom-affair.png",
    filters: ["fullPlanning"],
    tagIds: ["ballroom", "jakarta", "fullPlanning"],
  },
  {
    id: "sentul-garden",
    featured: true,
    image: "/images/portfolio/garden-ceremony.png",
    filters: ["cultural", "fullPlanning"],
    tagIds: ["bogor", "traditional", "garden"],
  },
  {
    id: "depok-family-ceremony",
    featured: false,
    image: "/images/portfolio/family-ceremony.png",
    filters: ["coordination"],
    tagIds: ["depok", "family", "coordination"],
  },
  {
    id: "heritage-akad",
    featured: false,
    image: "/images/portfolio/heritage-akad.png",
    filters: ["cultural"],
    tagIds: ["jakarta", "akad", "traditional"],
  },
  {
    id: "lakeside-reception",
    featured: false,
    image: "/images/portfolio/lakeside-reception.png",
    filters: ["fullPlanning", "intimate"],
    tagIds: ["bogor", "reception", "fullPlanning"],
  },
] as const;

export type PortfolioEntry = (typeof portfolioEntries)[number];
