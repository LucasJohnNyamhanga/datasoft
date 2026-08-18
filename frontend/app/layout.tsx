import "./styles/globals.scss";
import Navigation from "./components/Navigation";
import { LanguageProvider } from "./i18n/LanguageContext";
import { Geist, Cal_Sans } from "next/font/google";
import JsonLd from "./components/JsonLd";
import { ORGANIZATION_JSON_LD, SITE_URL } from "./lib/seo";

import type { Metadata } from "next";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

// Cal Sans ships one static weight (400) — any 600 requested in SCSS is
// browser-synthesized (faux bold), which is normal for this typeface.
const calSans = Cal_Sans({
  subsets: ["latin"],
  variable: "--font-calsans",
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: "DataSoft Tanzania, Suluhisho za Teknolojia Popote Ulipo",

  description:
    "DataSoft ni nyumba ya kiteknolojia inayogeuza mawazo ya biashara kuwa programu, tovuti, mitandao na miundo inayofanya kazi, kwa ustadi na umakini wa hali ya juu, popote nchini Tanzania ulipo.",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  twitter: {
    card: "summary_large_image",
    title: "DataSoft Tanzania, Suluhisho za Teknolojia Popote Ulipo",
    description:
      "DataSoft ni nyumba ya kiteknolojia inayogeuza mawazo ya biashara kuwa programu, tovuti, mitandao na miundo inayofanya kazi, kwa ustadi na umakini wa hali ya juu.",
    images: ["/brainas.svg"],
  },

  openGraph: {
    title: "DataSoft Tanzania, Suluhisho za Teknolojia Popote Ulipo",
    description:
      "DataSoft ni nyumba ya kiteknolojia inayogeuza mawazo ya biashara kuwa programu, tovuti, mitandao na miundo inayofanya kazi, kwa ustadi na umakini wa hali ya juu, popote nchini Tanzania ulipo.",
    url: "https://www.datasoft.co.tz",
    siteName: "DataSoft Tanzania",
    images: [
      {
        url: "/brainas.svg",
        width: 800,
        height: 600,
      },
      {
        url: "/brainas.svg",
        width: 1800,
        height: 1600,
        alt: "Datasoft Tanzania",
      },
    ],
    locale: "sw_TZ",
    type: "website",
  },

  icons: {
    icon: "/brainas.svg",
    shortcut: "/brainas.svg",
    apple: "/brainas.svg",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/brainas.svg",
    },
  },

  verification: {
    google: "oN-oJx51JrDZi5ZxU2E682HRJ0dyDB2ZEe9bGQQy3Ds",
  },

  alternates: {
    canonical: "https://www.datasoft.co.tz",
    languages: {
      sw: "https://www.datasoft.co.tz",
      en: "https://www.datasoft.co.tz/?lang=en",
      "x-default": "https://www.datasoft.co.tz",
    },
  },

  category: "technology",
  referrer: "origin-when-cross-origin",

  keywords: [
    "DataSoft Tanzania",
    "ukuzaji wa programu",
    "tovuti Tanzania",
    "mitandao ya kompyuta",
    "ubunifu wa michoro",
    "software development",
    "web hosting Tanzania",
    "Mwanza",
    "huduma Tanzania nzima",
  ],

  authors: [{ name: "Lucas John" }],
  creator: "Lucas John",
  publisher: "Lucas John"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sw" className={`${geist.variable} ${calSans.variable}`}>
      <head>
        <JsonLd data={ORGANIZATION_JSON_LD} />
      </head>

      <body>
        <LanguageProvider>
          <Navigation />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  colorScheme: "dark"
};
