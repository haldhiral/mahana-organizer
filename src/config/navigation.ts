export const navigationItems = [
  { href: "/", labelKey: "home" },
  { href: "/about", labelKey: "about" },
  { href: "/services", labelKey: "services" },
  { href: "/packages", labelKey: "packages" },
  { href: "/portfolio", labelKey: "portfolio" },
  { href: "/testimonials", labelKey: "testimonials" },
  { href: "/contact", labelKey: "contact" },
] as const;

export const pageRoutes = navigationItems.map((item) => item.href);
