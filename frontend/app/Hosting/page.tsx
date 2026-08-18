import Footer from "../components/Footer";
import GoToTop from "../components/GoToTop";
import HostingHero from "../components/HostingHero";
import ServiceStats from "../components/ServiceStats";
import HostingFeatures from "../components/HostingFeatures";
import ServiceProcess from "../components/ServiceProcess";
import ServiceWhy from "../components/ServiceWhy";
import FAQ from "../components/FAQ";
import styles from "../styles/page.module.scss";
import ContactUs from "../components/Contact";
import JsonLd from "../components/JsonLd";
import {
  buildFaqJsonLd,
  buildServiceJsonLd,
  localeAlternates,
  resolveSearchLocale,
  SITE_URL,
  type SearchParams,
} from "../lib/seo";
import { dictionaries } from "../i18n/translations";

import type { Metadata } from "next";

const PAGE_URL = `${SITE_URL}/Hosting`;

const seoContent = {
  sw: {
    title: "Tovuti na Uwekaji Mtandaoni (Hosting) | DataSoft Tanzania",
    description:
      "Tunaunda na kuhudumia tovuti za biashara zenye kasi, usalama na uwekaji mtandaoni wa uhakika, zikiwa tayari kukua sambamba na biashara yako, muda wote.",
    serviceName: "Tovuti na Uwekaji Mtandaoni",
    serviceDescription:
      "Ubunifu wa tovuti, uwekaji mtandaoni (hosting), vyeti vya SSL, nakala za chelezo na usimamizi wa kikoa, unaotolewa na DataSoft Tanzania.",
  },
  en: {
    title: "Website Design & Hosting | DataSoft Tanzania",
    description:
      "Beautiful, fast and secure websites backed by reliable hosting, SSL certificates, backups and domain management, ready to grow with your business.",
    serviceName: "Website Design & Hosting",
    serviceDescription:
      "Website design and development, hosting with monitoring and backups, SSL certificates and domain management, provided by DataSoft Tanzania.",
  },
};

export async function generateMetadata({
  searchParams,
}: {
  searchParams: SearchParams;
}): Promise<Metadata> {
  const locale = await resolveSearchLocale(searchParams);
  const { title, description } = seoContent[locale];

  return {
    title,
    description,
    alternates: localeAlternates("/Hosting", locale),
    openGraph: {
      title,
      description,
      url: PAGE_URL,
      images: [{ url: "/hosting.png", width: 1800, height: 706 }],
    },
    twitter: { title, description },
  };
}

const Hosting = async ({ searchParams }: { searchParams: SearchParams }) => {
  const locale = await resolveSearchLocale(searchParams);
  const { serviceName, serviceDescription } = seoContent[locale];
  const faqItems = dictionaries[locale].services.hosting.faq.items;
  const serviceJsonLd = buildServiceJsonLd({
    name: serviceName,
    description: serviceDescription,
    url: PAGE_URL,
    image: `${SITE_URL}/hosting.png`,
    serviceType: "Web Hosting",
  });

  return (
    <div className={styles.main}>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={buildFaqJsonLd(faqItems)} />
      <HostingHero />
      <ServiceStats serviceKey="hosting" />
      <HostingFeatures />
      <ServiceProcess serviceKey="hosting" />
      <ServiceWhy serviceKey="hosting" />
      <FAQ serviceKey="hosting" />
      <ContactUs />
      <Footer />
      <GoToTop />
    </div>
  );
};

export default Hosting;
