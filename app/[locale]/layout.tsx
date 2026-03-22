import type { Metadata, Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { siteConfig } from "@/config/site";
import { isValidLocale, routing } from "@/i18n/routing";

import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  applicationName: siteConfig.name,
  category: siteConfig.category,
  formatDetection: {
    address: false,
    email: false,
    telephone: false,
  },
  icons: {
    icon: "/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#fcf7f2",
  colorScheme: "light",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type LocaleLayoutProps = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

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
    <html lang={locale} className="h-full bg-background text-foreground">
      <body className="min-h-full">
        <NextIntlClientProvider locale={locale}>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
