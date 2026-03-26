import createMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { routing } from "./src/i18n/routing";

const intlMiddleware = createMiddleware(routing);

const LEGACY_HOST = "mahanaorganizer.com";
const CANONICAL_HOST = "www.mahanaorganizer.com";

const LEGACY_PATHNAME_REDIRECTS: Record<string, string> = {
  "/about-Tentang": "/about",
  "/services-Layanan": "/services",
};

function getEffectiveHost(request: NextRequest) {
  const forwardedHost = request.headers.get("x-forwarded-host");
  const hostHeader = forwardedHost ?? request.headers.get("host") ?? "";
  const primaryHost = hostHeader.split(",")[0]?.trim().toLowerCase() ?? "";

  return primaryHost.replace(/:\d+$/, "");
}

function getCanonicalPathname(pathname: string) {
  let normalizedPathname = pathname;

  if (normalizedPathname === "/id") {
    normalizedPathname = "/";
  } else if (normalizedPathname.startsWith("/id/")) {
    normalizedPathname = normalizedPathname.slice(3) || "/";
  }

  return LEGACY_PATHNAME_REDIRECTS[normalizedPathname] ?? normalizedPathname;
}

export default function proxy(request: NextRequest) {
  const currentHost = getEffectiveHost(request);
  const currentPathname = request.nextUrl.pathname;
  const normalizedPathname = getCanonicalPathname(currentPathname);
  const shouldNormalizeHost = currentHost === LEGACY_HOST;

  if (shouldNormalizeHost || normalizedPathname !== currentPathname) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = normalizedPathname;

    if (shouldNormalizeHost) {
      redirectUrl.protocol = "https:";
      redirectUrl.host = CANONICAL_HOST;
    }

    return NextResponse.redirect(redirectUrl, 308);
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
