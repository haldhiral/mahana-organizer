import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "mahanaorganizer.com" }],
        destination: "https://www.mahanaorganizer.com/:path*",
        permanent: true,
      },
      // Old renamed routes
      {
        source: "/services-Layanan",
        destination: "/id/services",
        permanent: true,
      },
      {
        source: "/about-Tentang",
        destination: "/id/about",
        permanent: true,
      },
      // Non-prefixed paths → default locale (id)
      { source: "/about", destination: "/id/about", permanent: true },
      { source: "/services", destination: "/id/services", permanent: true },
      { source: "/packages", destination: "/id/packages", permanent: true },
      { source: "/portfolio", destination: "/id/portfolio", permanent: true },
      {
        source: "/testimonials",
        destination: "/id/testimonials",
        permanent: true,
      },
      { source: "/contact", destination: "/id/contact", permanent: true },
      {
        source: "/wedding-organizer-jakarta",
        destination: "/id/wedding-organizer-jakarta",
        permanent: true,
      },
      {
        source: "/wedding-organizer-bogor",
        destination: "/id/wedding-organizer-bogor",
        permanent: true,
      },
      {
        source: "/wedding-organizer-bekasi",
        destination: "/id/wedding-organizer-bekasi",
        permanent: true,
      },
      {
        source: "/wedding-organizer-tangerang",
        destination: "/id/wedding-organizer-tangerang",
        permanent: true,
      },
      {
        source: "/wedding-organizer-depok",
        destination: "/id/wedding-organizer-depok",
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
