import Footer from "../components/Footer";
import GoToTop from "../components/GoToTop";
import GraphicsHero from "../components/GraphicsHero";
import ServiceStats from "../components/ServiceStats";
import GraphicsCapabilities from "../components/GraphicsCapabilities";
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

const PAGE_URL = `${SITE_URL}/Graphics`;

const seoContent = {
  sw: {
    title: "Ubunifu wa Michoro na Chapa | DataSoft Tanzania",
    description:
      "Tunaunda nembo, vitambulisho vya chapa, mabango na vifaa vya masoko vinavyovutia ndani ya sekunde tatu za kwanza, vinauza na vinakumbukwa na wateja wako.",
    serviceName: "Ubunifu wa Michoro na Chapa",
    serviceDescription:
      "Nembo na vitambulisho vya chapa, mabango na vifaa vya masoko, muundo wa mitandao ya kijamii, na vifungashio, vilivyobuniwa na DataSoft Tanzania.",
  },
  en: {
    title: "Graphic Design & Branding | DataSoft Tanzania",
    description:
      "That's how long a customer takes to judge if your brand is trustworthy. From your logo to a campaign poster, every layer we design is built to earn that trust.",
    serviceName: "Graphic Design & Branding",
    serviceDescription:
      "Logos and brand identity systems, marketing posters and materials, social media design and packaging, designed by DataSoft Tanzania.",
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
    alternates: localeAlternates("/Graphics", locale),
    openGraph: {
      title,
      description,
      url: PAGE_URL,
      images: [{ url: "/graphics.png", width: 1800, height: 706 }],
    },
    twitter: { title, description },
  };
}

const Graphics = async ({ searchParams }: { searchParams: SearchParams }) => {
  const locale = await resolveSearchLocale(searchParams);
  const { serviceName, serviceDescription } = seoContent[locale];
  const faqItems = dictionaries[locale].services.graphics.faq.items;
  const serviceJsonLd = buildServiceJsonLd({
    name: serviceName,
    description: serviceDescription,
    url: PAGE_URL,
    image: `${SITE_URL}/graphics.png`,
    serviceType: "Graphic Design",
  });

  return (
    <div className={styles.main}>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={buildFaqJsonLd(faqItems)} />
      <GraphicsHero />
      <ServiceStats serviceKey="graphics" />
      <GraphicsCapabilities />
      <ServiceProcess serviceKey="graphics" />
      <ServiceWhy serviceKey="graphics" />
      <FAQ serviceKey="graphics" />
      <ContactUs />
      <Footer />
      <GoToTop />
    </div>
  );
};

export default Graphics;
