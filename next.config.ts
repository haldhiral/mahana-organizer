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
      {
        source: "/services-Layanan",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/about-Tentang",
        destination: "/about",
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
