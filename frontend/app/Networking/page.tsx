import Footer from "../components/Footer";
import GoToTop from "../components/GoToTop";
import NetworkingHero from "../components/NetworkingHero";
import NetworkStats from "../components/NetworkStats";
import NetworkCapabilities from "../components/NetworkCapabilities";
import NetworkProcess from "../components/NetworkProcess";
import NetworkWhy from "../components/NetworkWhy";
import NetworkFAQ from "../components/NetworkFAQ";
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
import { networkingDictionaries } from "../i18n/networking";

import type { Metadata } from "next";

const PAGE_URL = `${SITE_URL}/Networking`;

const seoContent = {
  sw: {
    title: "Mitandao ya Kompyuta ya Ofisini | DataSoft Tanzania",
    description:
      "Tunabuni na kusimamisha mitandao ya ofisi inayounganisha kompyuta, printa na data kuwa mfumo mmoja salama, unaotegemewa na usiokatika mara kwa mara.",
    serviceName: "Mitandao ya Kompyuta ya Ofisini",
    serviceDescription:
      "Usanifu na usimikaji wa mitandao ya ofisi (LAN/WLAN), uunganishaji wa printa na hifadhi za pamoja, ulinzi na ufuatiliaji endelevu, unaotolewa na DataSoft Tanzania.",
  },
  en: {
    title: "Office Computer Networking | DataSoft Tanzania",
    description:
      "We design and install office networks that connect your computers, printers and data into one secure, reliable system that doesn't go down when you need it.",
    serviceName: "Office Computer Networking",
    serviceDescription:
      "Design and installation of office networks (LAN/WLAN), printer and shared storage connections, network security and ongoing monitoring, by DataSoft Tanzania.",
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
    alternates: localeAlternates("/Networking", locale),
    openGraph: {
      title,
      description,
      url: PAGE_URL,
      images: [{ url: "/networking.png", width: 1800, height: 706 }],
    },
    twitter: { title, description },
  };
}

const Networking = async ({ searchParams }: { searchParams: SearchParams }) => {
  const locale = await resolveSearchLocale(searchParams);
  const { serviceName, serviceDescription } = seoContent[locale];
  const faqItems = networkingDictionaries[locale].faq.items;
  const serviceJsonLd = buildServiceJsonLd({
    name: serviceName,
    description: serviceDescription,
    url: PAGE_URL,
    image: `${SITE_URL}/networking.png`,
    serviceType: "Network Installation",
  });

  return (
    <div className={styles.main}>
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={buildFaqJsonLd(faqItems)} />
      <NetworkingHero />
      <NetworkStats />
      <NetworkCapabilities />
      <NetworkProcess />
      <NetworkWhy />
      <NetworkFAQ />
      <ContactUs />
      <Footer />
      <GoToTop />
    </div>
  );
};

export default Networking;
