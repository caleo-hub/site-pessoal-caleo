import { NextRequest, NextResponse } from "next/server";

const BOT_USER_AGENT = /bot|crawler|spider|slurp|bingpreview/i;

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const savedLocale = request.cookies.get("site_locale")?.value;

  if (pathname === "/" && savedLocale === "en") {
    return NextResponse.redirect(new URL("/en", request.url));
  }

  if (pathname === "/" && !savedLocale) {
    const userAgent = request.headers.get("user-agent") ?? "";
    const primaryLanguage = request.headers
      .get("accept-language")
      ?.split(",")[0]
      ?.trim()
      .toLowerCase();

    if (
      primaryLanguage &&
      !primaryLanguage.startsWith("pt") &&
      !BOT_USER_AGENT.test(userAgent)
    ) {
      const response = NextResponse.redirect(new URL("/en", request.url));
      response.cookies.set("site_locale", "en", {
        maxAge: 60 * 60 * 24 * 365,
        path: "/",
        sameSite: "lax",
      });
      return response;
    }
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-site-locale", pathname === "/en" ? "en" : "pt");

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ["/", "/en"],
};
