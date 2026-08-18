// Shared SEO constants and JSON-LD builders. Kept framework-agnostic (plain
// data in, plain object out) so both Server Component pages and the root
// layout can import from here without pulling in client-only code.

import type { Locale } from "../i18n/translations";

export const SITE_URL = "https://www.datasoft.co.tz";
export const SITE_NAME = "DataSoft Tanzania";

// The visible page content is switched client-side (see LanguageContext,
// which reads ?lang= after mount), but that's the same URL bots resolve
// for the English variant, so metadata/JSON-LD generated server-side needs
// to key off this same query param to actually match what gets rendered.
export type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export async function resolveSearchLocale(searchParams: SearchParams): Promise<Locale> {
  const { lang } = await searchParams;
  const value = Array.isArray(lang) ? lang[0] : lang;
  return value === "en" ? "en" : "sw";
}

export function localeAlternates(path: string, locale: Locale) {
  const base = `${SITE_URL}${path}`;
  const enUrl = `${base}?lang=en`;
  return {
    canonical: locale === "en" ? enUrl : base,
    languages: {
      sw: base,
      en: enUrl,
      "x-default": base,
    },
  };
}

export const ORGANIZATION_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: "DataSoft",
  url: SITE_URL,
  logo: `${SITE_URL}/brainas.svg`,
  image: `${SITE_URL}/brainas.svg`,
  telephone: "+255767887999",
  email: "info@datasoft.co.tz",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "House No 640, Medical Research Road, Kitangiri",
    addressLocality: "Ilemela, Mwanza",
    addressCountry: "TZ",
  },
  areaServed: {
    "@type": "Country",
    name: "Tanzania",
  },
  sameAs: [] as string[],
} as const;

type FaqItem = { question: string; answer: string };

export function buildFaqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

type ServiceJsonLdInput = {
  name: string;
  description: string;
  url: string;
  image?: string;
  serviceType: string;
};

export function buildServiceJsonLd({
  name,
  description,
  url,
  image,
  serviceType,
}: ServiceJsonLdInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    ...(image ? { image } : {}),
    serviceType,
    provider: {
      "@id": `${SITE_URL}/#organization`,
    },
    areaServed: {
      "@type": "Country",
      name: "Tanzania",
    },
  };
}
