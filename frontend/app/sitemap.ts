import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/seo";

// Pages that render in both Swahili (default) and English (?lang=en, see
// LanguageContext) get a bidirectional hreflang entry; the KuaFit legal
// pages don't have an English variant, so they're listed without one.
const localizedRoutes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "", priority: 1, changeFrequency: "monthly" },
  { path: "/Software", priority: 0.9, changeFrequency: "monthly" },
  { path: "/Hosting", priority: 0.9, changeFrequency: "monthly" },
  { path: "/Networking", priority: 0.9, changeFrequency: "monthly" },
  { path: "/Graphics", priority: 0.9, changeFrequency: "monthly" },
];

const singleLanguageRoutes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/Applications/KuaFit/PrivacyPolicy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/Applications/KuaFit/TermsOfService", priority: 0.3, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    ...localizedRoutes.map(({ path, priority, changeFrequency }) => ({
      url: `${SITE_URL}${path}`,
      lastModified,
      changeFrequency,
      priority,
      alternates: {
        languages: {
          sw: `${SITE_URL}${path}`,
          en: `${SITE_URL}${path}?lang=en`,
        },
      },
    })),
    ...singleLanguageRoutes.map(({ path, priority, changeFrequency }) => ({
      url: `${SITE_URL}${path}`,
      lastModified,
      changeFrequency,
      priority,
    })),
  ];
}
