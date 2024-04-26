import createMiddleware from "next-intl/middleware";
import { locales } from "./translations/i18n";

export default createMiddleware({
  defaultLocale: "en",
  locales,
});

export const config = {
  // Skip all paths that should not be internationalized. This example skips the
  // folders "api", "_next" and all files with an extension (e.g. favicon.ico)
  matcher: ["/((?!api|_next|.*\\..*).*)"],
  // Match only internationalized pathnames
  // matcher: ["/", `/(en)/:path*`],
  //   matcher: ['/', '/(en|de)/:path*']
};
