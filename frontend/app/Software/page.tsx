import Footer from "../components/Footer";
import GoToTop from "../components/GoToTop";
import SoftwareHero from "../components/SoftwareHero";
import ServiceStats from "../components/ServiceStats";
import SoftwareCapabilities from "../components/SoftwareCapabilities";
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

const PAGE_URL = `${SITE_URL}/Software`;

const seoContent = {
  sw: {
    title: "Ukuzaji wa Programu na Mifumo Maalumu | DataSoft Tanzania",
    description:
      "Tunajenga mifumo maalumu ya biashara, mikopo, dashibodi na programu za simu zinazofuata jinsi kampuni yako inavyofanya kazi, kwa ustadi na uhakika, popote Tanzania ulipo.",
    serviceName: "Ukuzaji wa Programu na Mifumo Maalumu",
    serviceDescription:
      "Mifumo maalumu ya uendeshaji wa biashara, mikopo na fedha ndogo, majukwaa ya wavuti na programu za simu, iliyojengwa na DataSoft Tanzania.",
  },
  en: {
    title: "Software Development & Custom Systems | DataSoft Tanzania",
    description:
      "Watch us build it: loan approvals, credit scoring, repayment schedules. A real system we ship for clients, typed out line by line in front of you.",
    serviceName: "Software Development & Custom Systems",
    serviceDescription:
      "Custom business operations systems, loan and microfinance platforms, web platforms and mobile apps, built by DataSoft Tanzania.",
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
    alternates: localeAlternates("/Software", locale),
    openGraph: {
      title,
      description,
      url: PAGE_URL,
      images: [{ url: "/software.png", width: 2000, height: 784 }],
    },
    twitter: { title, description },
  };
}

const Software = async ({ searchParams }: { searchParams: SearchParams }) => {
  const locale = await resolveSearchLocale(searchParams);
  const { serviceName, serviceDescription } = seoContent[locale];
  const faqItems = dictionaries[locale].services.software.faq.items;
  const serviceJsonLd = buildServiceJsonLd({
    name: serviceName,
    description: serviceDescription,
    url: PAGE_URL,
    image: `${SITE_URL}/software.png`,
    serviceType: "Software Development",
  });

  return (
    <div className={styles.main}>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={buildFaqJsonLd(faqItems)} />
      <SoftwareHero />
      <ServiceStats serviceKey="software" />
      <SoftwareCapabilities />
      <ServiceProcess serviceKey="software" />
      <ServiceWhy serviceKey="software" />
      <FAQ serviceKey="software" />
      <ContactUs />
      <Footer />
      <GoToTop />
    </div>
  );
};

export default Software;
