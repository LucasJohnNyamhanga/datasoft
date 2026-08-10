"use client";
import styles from "../styles/hostingFeatures.module.scss";
import Reveal from "./Reveal";
import NetworkPattern from "./NetworkPattern";
import { useLanguage } from "../i18n/LanguageContext";
import {
  FaSignal,
  FaShieldAlt,
  FaCloudUploadAlt,
  FaBolt,
  FaLayerGroup,
  FaHeadset,
  FaGlobe,
  FaExchangeAlt,
} from "react-icons/fa";

const icons: Record<string, React.ReactNode> = {
  uptime: <FaSignal />,
  security: <FaShieldAlt />,
  backups: <FaCloudUploadAlt />,
  speed: <FaBolt />,
  scale: <FaLayerGroup />,
  support: <FaHeadset />,
  domain: <FaGlobe />,
  migration: <FaExchangeAlt />,
};

// Sits directly under the Hosting hero's server/cloud mockup and cashes in
// on it: the live traffic the visitor just watched flow between the two
// nodes is the same infrastructure described here in plain terms, so the
// grid reads as "here's everything that mockup was standing for" rather
// than a generic feature list. Closes with a "why DataSoft" pull-quote,
// standing in for the plain ServiceDetail panel this page no longer uses.

const HostingFeatures = () => {
  const { t } = useLanguage();
  const s = t.services.hosting;
  const capabilities = s.capabilities ?? [];
  const heading = s.capabilitiesHeading ?? [s.includesHeading, ""];

  return (
    <div id="capabilities" className={styles.container}>
      <NetworkPattern className={styles.network} />

      <div className={styles.subContainer}>
        <div className={styles.header}>
          <Reveal as="p" className={styles.eyebrow}>
            {s.capabilitiesEyebrow ?? s.includesHeading}
          </Reveal>
          <h2 className={styles.heading}>
            <Reveal as="span" className={styles.line}>
              {heading[0]}
            </Reveal>
            <Reveal as="span" className={styles.line} delay={70}>
              {heading[1]}
            </Reveal>
          </h2>
          <Reveal as="p" className={styles.intro} delay={140}>
            {s.capabilitiesIntro}
          </Reveal>
        </div>

        <div className={styles.grid}>
          {capabilities.map((item, index) => (
            <Reveal key={item.key} delay={180 + index * 40} className={styles.card}>
              <span className={styles.icon}>{icons[item.key]}</span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={180 + capabilities.length * 40} className={styles.closing}>
          <span className={styles.closingEyebrow}>{s.whyHeading}</span>
          <p className={styles.closingQuote}>{s.why}</p>
        </Reveal>
      </div>
    </div>
  );
};

export default HostingFeatures;
