export const testimonialEntries = [
  {
    id: "nadia-farhan",
    featured: true,
    image: "/images/testimonials/nadia-farhan.png",
    tagIds: ["jakarta", "fullPlanning"],
  },
  {
    id: "clara-adrian",
    featured: true,
    image: "/images/testimonials/clara-adrian.png",
    tagIds: ["bogor", "garden"],
  },
  {
    id: "alya-reza",
    featured: true,
    image: "/images/testimonials/alya-reza.png",
    tagIds: ["depok", "coordination"],
  },
  {
    id: "mei-bimo",
    featured: false,
    image: "/images/testimonials/mei-bimo.png",
    tagIds: ["jakarta", "ballroom"],
  },
] as const;

export type TestimonialEntry = (typeof testimonialEntries)[number];
