import createMiddleware from "next-intl/middleware";

import { routing } from "./src/i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except:
  // - /api/* routes
  // - /_next/* (Next.js internals)
  // - /_vercel/* (Vercel internals)
  // - Files with extensions (static assets like .ico, .png, .svg, etc.)
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"  ],
};
