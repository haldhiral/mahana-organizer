import type { Metadata, Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Inter, Playfair_Display } from "next/font/google";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import {
  ThemeProvider,
  themeInitializerScript,
} from "@/components/providers/ThemeProvider";
import {
  getAbsoluteUrl,
  getLanguageAlternates,
  getLocalizedUrl,
  siteConfig,
} from "@/config/site";
import { isValidLocale, routing } from "@/i18n/routing";
import { getOpenGraphLocale } from "@/lib/seo";

import "../globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f1ea" },
    { media: "(prefers-color-scheme: dark)", color: "#1b1513" },
  ],
  colorScheme: "light dark",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: Pick<LocaleLayoutProps, "params">): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const t = await getTranslations({ locale, namespace: "metadata.home" });
  const description = t("description");
  const canonicalUrl = getLocalizedUrl(locale);
  const socialImage = getAbsoluteUrl(siteConfig.ogImagePath);

  return {
    metadataBase: new URL(siteConfig.domain),
    applicationName: siteConfig.name,
    category: siteConfig.category,
    title: {
      default: siteConfig.name,
      template: `%s | ${siteConfig.name}`,
    },
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: getLanguageAlternates("/"),
    },
    formatDetection: {
      address: false,
      email: false,
      telephone: false,
    },
    icons: {
      icon: "/icon.svg",
    },
    openGraph: {
      title: siteConfig.name,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: getOpenGraphLocale(locale),
      type: "website",
      images: [
        {
          url: socialImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.name,
      description,
      images: [socialImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      className={`h-full ${playfair.variable} ${inter.variable}`}
      data-theme="light"
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: themeInitializerScript }}
        />
      </head>
      <body className="min-h-full bg-background text-foreground">
        <NextIntlClientProvider locale={locale}>
          <ThemeProvider>
            <div className="relative flex min-h-screen flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
