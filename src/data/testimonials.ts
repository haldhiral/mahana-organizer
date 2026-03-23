export const testimonialEntries = [
  {
    id: "ulfah-bambang",
    featured: true,
    image: "/images/testimonials/ulfah-bambang.png",
    tagIds: ["bogor", "coordination", "joyfulReception"],
  },
  {
    id: "fika-ary",
    featured: false,
    image: "/images/testimonials/fika-ary.png",
    tagIds: ["jagakarsa", "structuredPlanning", "recommended"],
  },
  {
    id: "winda-zico",
    featured: true,
    image: "/images/testimonials/winda-zico.png",
    tagIds: ["jagakarsa", "responsive", "dreamWedding"],
  },
  {
    id: "mela-ayub",
    featured: true,
    image: "/images/testimonials/mela-ayub.png",
    tagIds: ["bogor", "lakeside", "attentiveCrew"],
  },
  {
    id: "mega-syahrul",
    featured: false,
    image: "/images/testimonials/mega-syahrul.png",
    tagIds: ["bogor", "caringTeam", "familySupport"],
  },
] as const;

export type TestimonialEntry = (typeof testimonialEntries)[number];
