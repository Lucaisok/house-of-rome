import type { Metadata } from "next";
import { Locale } from "../i18n";

export const getSiteUrl = () => {
  return process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
};

export const stripEnPrefix = (pathname: string) => {
  // internal routes use /en/..., but public canonical should NOT
  if (pathname === "/en") return "/";
  if (pathname.startsWith("/en/")) return pathname.replace(/^\/en/, "");
  return pathname;
};

export const toPublicPath = (pathname: string, lang: Locale) => {
  // pathname is expected to start with /en or /it (internal routing)
  if (lang === "en") return stripEnPrefix(pathname);
  // keep /it prefix
  if (pathname === "/it") return "/it";
  if (pathname.startsWith("/it/")) return pathname;
  // if called with non-it path, force it
  return `/it${stripEnPrefix(pathname)}`;
};

export const buildLanguageAlternates = (publicPath: string) => {
  const siteUrl = getSiteUrl();

  const enPath = publicPath.startsWith("/it")
    ? publicPath.replace(/^\/it/, "") || "/"
    : publicPath;

  const itPath = publicPath.startsWith("/it")
    ? publicPath
    : `/it${publicPath === "/" ? "" : publicPath}`;

  return {
    languages: {
      en: new URL(enPath, siteUrl).toString(),
      it: new URL(itPath, siteUrl).toString(),
    },
  } satisfies Metadata["alternates"];
};

export const ogLocale = (lang: Locale) => {
  return lang === "it" ? "it_IT" : "en_US";
};

export const makePageMetadata = (args: {
  lang: Locale;
  publicPath: string; // "/" | "/it" | "/apartments" | "/it/apartments" ...
  title: string;
  description: string;
}): Metadata => {
  const siteUrl = getSiteUrl();

  return {
    title: args.title,
    description: args.description,
    alternates: {
      canonical: new URL(args.publicPath, siteUrl).toString(),
      ...buildLanguageAlternates(args.publicPath),
    },
    openGraph: {
      title: args.title,
      description: args.description,
      siteName: "House of Rome",
      locale: ogLocale(args.lang),
      type: "website",
      url: new URL(args.publicPath, siteUrl).toString(),
    },
  };
};
