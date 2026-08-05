import "./styles/globals.scss";
import Navigation from "./components/Navigation";
import { LanguageProvider } from "./i18n/LanguageContext";
import { Fraunces } from "next/font/google";

import type { Metadata } from "next";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DataSoft Tanzania — Suluhisho za Teknolojia, Mwanza",
  description:
    "DataSoft ni nyumba ya kiteknolojia ya Mwanza inayogeuza mawazo ya biashara kuwa programu, tovuti, mitandao na miundo inayofanya kazi — kwa ustadi na umakini wa hali ya juu.",
  openGraph: {
    title: "DataSoft Tanzania — Suluhisho za Teknolojia, Mwanza",
    description:
      "DataSoft ni nyumba ya kiteknolojia ya Mwanza inayogeuza mawazo ya biashara kuwa programu, tovuti, mitandao na miundo inayofanya kazi — kwa ustadi na umakini wa hali ya juu.",
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
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: "oN-oJx51JrDZi5ZxU2E682HRJ0dyDB2ZEe9bGQQy3Ds",
  },
  alternates: {
    canonical: "https://www.datasoft.co.tz",
    languages: {
      sw: "https://www.datasoft.co.tz",
      "en-US": "https://www.datasoft.co.tz",
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
  ],
  authors: [{ name: "Lucas John" }],
  colorScheme: "light",
  creator: "Lucas John",
  publisher: "Lucas John",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sw" className={fraunces.variable}>
      <head />

      <body>
        <LanguageProvider>
          <Navigation />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
