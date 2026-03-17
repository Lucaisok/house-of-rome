import type { Metadata } from "next";
import { Locale } from "../i18n";

export const getSiteUrl = () => {
  // Environment variable override
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }

  if (process.env.NODE_ENV === "production") {
    return "https://houseofrome.org";
  }

  return "http://localhost:3000";
};

export const stripEnPrefix = (pathname: string) => {
  // Keep backwards compatibility for callers that still pass non-prefixed paths.
  // Canonical/public URLs for this project are locale-prefixed.
  if (pathname === "/") return "/en";
  if (!pathname.startsWith("/en/") && !pathname.startsWith("/it/") && pathname !== "/it") {
    return `/en${pathname.startsWith("/") ? pathname : `/${pathname}`}`;
  }
  return pathname;
};

export const toPublicPath = (pathname: string, lang: Locale) => {
  // pathname is expected to start with /en or /it (internal routing)
  if (lang === "en") return stripEnPrefix(pathname);
  // keep /it prefix
  if (pathname === "/it") return "/it";
  if (pathname.startsWith("/it/")) return pathname;
  // If called with /en path, swap locale segment.
  if (pathname === "/en") return "/it";
  if (pathname.startsWith("/en/")) return pathname.replace(/^\/en/, "/it");
  // if called with non-prefixed path, force /it
  return `/it${pathname.startsWith("/") ? pathname : `/${pathname}`}`;
};

export const buildLanguageAlternates = (publicPath: string) => {
  const siteUrl = getSiteUrl();

  const normalized = publicPath === "/" ? "/en" : publicPath;

  const enPath = normalized.startsWith("/it")
    ? normalized.replace(/^\/it/, "/en")
    : normalized.startsWith("/en")
      ? normalized
      : `/en${normalized}`;

  const itPath = normalized.startsWith("/it")
    ? normalized
    : normalized.startsWith("/en")
      ? normalized.replace(/^\/en/, "/it")
      : `/it${normalized}`;

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
  image?: string; // Optional OG image path
}): Metadata => {
  const siteUrl = getSiteUrl();
  const ogImage = args.image
    ? new URL(args.image, siteUrl).toString()
    : new URL("/og-default.jpg", siteUrl).toString();

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
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: args.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: args.title,
      description: args.description,
      images: [ogImage],
    },
  };
};
