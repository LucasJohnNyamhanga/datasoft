"use client";
import Service from "./Service";
import styles from "../styles/whatWeDo.module.scss";
import Reveal from "./Reveal";
import { useLanguage } from "../i18n/LanguageContext";
import {
  FaLaptopCode,
  FaGlobeAfrica,
  FaNetworkWired,
  FaImages,
} from "react-icons/fa";

const icons: Record<string, React.ReactNode> = {
  software: <FaLaptopCode />,
  hosting: <FaGlobeAfrica />,
  networking: <FaNetworkWired />,
  graphics: <FaImages />,
};

const WhatWeDo = () => {
  const { t } = useLanguage();

  return (
    <div id="services" className={styles.container}>
      <div className={styles.subContainer}>
        <Reveal as="p" className={styles.eyebrow}>
          {t.whatWeDo.eyebrow}
        </Reveal>
        <Reveal as="h2" className={styles.heading}>
          {t.whatWeDo.heading}
        </Reveal>
        <Reveal as="p" className={styles.intro} delay={80}>
          {t.whatWeDo.intro}
        </Reveal>

        <div className={styles.grid}>
          {t.whatWeDo.services.map((service, index) => (
            <Reveal key={service.key} delay={index * 70} className={styles.cell}>
              <Service
                header={service.header}
                icon={icons[service.key]}
                description={service.description}
                link={service.link}
                learnMore={t.whatWeDo.learnMore}
                featured={index === 0}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
