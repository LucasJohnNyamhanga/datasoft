import styles from "./styles/page.module.scss";

import Hero from "./components/Hero";
import WhatWeDo from "./components/WhatWeDo";
import Process from "./components/Process";
import WhatWeHaveDone from "./components/WhatWeHaveDone";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import GoToTop from "./components/GoToTop";
import ContactUs from "./components/Contact";
import { dictionaries } from "./i18n/translations";
import { localeAlternates, resolveSearchLocale, type SearchParams } from "./lib/seo";

import type { Metadata } from "next";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: SearchParams;
}): Promise<Metadata> {
  const locale = await resolveSearchLocale(searchParams);
  const { title, description } = dictionaries[locale].meta;

  return {
    title,
    description,
    alternates: localeAlternates("/", locale),
    openGraph: { title, description, url: "https://www.datasoft.co.tz" },
    twitter: { title, description },
  };
}

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <WhatWeDo />
      <Process />
      <WhatWeHaveDone />
      <Testimonials />
      <FAQ />
      <ContactUs />
      <Footer />
      <GoToTop />
    </main>
  );
}
