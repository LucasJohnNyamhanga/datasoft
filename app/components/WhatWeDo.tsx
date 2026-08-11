"use client";
import Image from "next/image";
import Service from "./Service";
import styles from "../styles/whatWeDo.module.scss";
import Reveal from "./Reveal";
import NetworkPattern from "./NetworkPattern";
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
      <NetworkPattern className={styles.network} />

      <div className={styles.subContainer}>
        <div className={styles.header}>
          <Reveal as="p" className={styles.eyebrow}>
            {t.whatWeDo.eyebrow}
          </Reveal>
          <h2 className={styles.heading}>
            <Reveal as="span" className={styles.line}>
              {t.whatWeDo.headingLines[0]}
            </Reveal>
            <Reveal as="span" className={styles.line} delay={70}>
              {t.whatWeDo.headingLines[1]}
            </Reveal>
          </h2>
          <Reveal as="p" className={styles.intro} delay={140}>
            {t.whatWeDo.intro}
          </Reveal>
        </div>

        <Reveal className={styles.showcase} delay={160}>
          <div className={styles.canvas} aria-hidden="true">
            <div className={styles.dotGrid} />
            <svg
              className={styles.wires}
              viewBox="0 0 100 32"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="wire-software" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#d4a017" />
                  <stop offset="1" stopColor="#d4a017" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="wire-hosting" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#2e6fb8" />
                  <stop offset="1" stopColor="#2e6fb8" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="wire-networking" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#c1432b" />
                  <stop offset="1" stopColor="#c1432b" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="wire-graphics" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#d4a017" />
                  <stop offset="1" stopColor="#d4a017" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <path
                d="M50,0 C50,16 12.5,16 12.5,32"
                stroke="url(#wire-software)"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M50,0 C50,16 37.5,16 37.5,32"
                stroke="url(#wire-hosting)"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M50,0 C50,16 62.5,16 62.5,32"
                stroke="url(#wire-networking)"
                vectorEffect="non-scaling-stroke"
              />
              <path
                d="M50,0 C50,16 87.5,16 87.5,32"
                stroke="url(#wire-graphics)"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
            <div className={styles.hub}>
              <Image src="/brainas.svg" alt="" width={20} height={20} />
              <div>
                <p className={styles.hubTitle}>{t.whatWeDo.hub.title}</p>
                <p className={styles.hubTag}>{t.whatWeDo.hub.tag}</p>
              </div>
            </div>
          </div>

          <div className={styles.grid}>
            {t.whatWeDo.services.map((service, index) => (
              <Reveal
                key={service.key}
                delay={220 + index * 70}
                className={styles.cell}
              >
                <Service
                  header={service.header}
                  tag={service.tag}
                  accent={service.key}
                  numeral={String(index + 1).padStart(2, "0")}
                  icon={icons[service.key]}
                  description={service.description}
                  link={service.link}
                  learnMore={t.whatWeDo.learnMore}
                  featured={index === 0}
                />
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
};

export default WhatWeDo;
