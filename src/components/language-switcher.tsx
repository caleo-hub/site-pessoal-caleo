"use client";

import Link from "next/link";

type LanguageSwitcherProps = {
  locale: "pt" | "en";
};

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  function rememberLanguage(language: "pt" | "en") {
    document.cookie = `site_locale=${language}; Path=/; Max-Age=31536000; SameSite=Lax`;
  }

  return (
    <div className="language-switcher" aria-label="Language selector">
      <Link
        aria-current={locale === "pt" ? "page" : undefined}
        href="/"
        hrefLang="pt-BR"
        onClick={() => rememberLanguage("pt")}
      >
        PT
      </Link>
      <span aria-hidden="true">/</span>
      <Link
        aria-current={locale === "en" ? "page" : undefined}
        href="/en"
        hrefLang="en"
        onClick={() => rememberLanguage("en")}
      >
        EN
      </Link>
    </div>
  );
}
