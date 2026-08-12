"use client";
import styles from "../styles/softwareCapabilities.module.scss";
import Reveal from "./Reveal";
import { useLanguage } from "../i18n/LanguageContext";
import { FaMoneyBillWave, FaChartLine, FaBell, FaLayerGroup } from "react-icons/fa";

const icons: Record<string, React.ReactNode> = {
  credit: <FaMoneyBillWave />,
  dashboards: <FaChartLine />,
  payments: <FaBell />,
  scale: <FaLayerGroup />,
};

// Sits directly under the Software hero's IDE mockup and cashes in on it:
// the loan & microfinance example the visitor just watched get typed out
// is called back explicitly here as "just one sample," so the four cards
// read as proof of a broader capability rather than a generic feature list.
// The "why DataSoft" beat now lives in its own ServiceWhy section further
// down the page.

const SoftwareCapabilities = () => {
  const { t } = useLanguage();
  const s = t.services.software;
  const capabilities = s.capabilities ?? [];
  const heading = s.capabilitiesHeading ?? [s.includesHeading, ""];

  return (
    <div id="capabilities" className={styles.container}>
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
            <Reveal key={item.key} delay={180 + index * 50} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.icon}>{icons[item.key]}</span>
                <span className={styles.numeral} aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SoftwareCapabilities;
