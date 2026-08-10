"use client";
import { useLanguage } from "../i18n/LanguageContext";
import { networkingDictionaries } from "../i18n/networking";
import styles from "../styles/networkCapabilities.module.scss";
import Reveal from "./Reveal";
import { FaProjectDiagram, FaPrint, FaLock, FaChartLine } from "react-icons/fa";

const icons: Record<string, React.ReactNode> = {
  design: <FaProjectDiagram />,
  sharing: <FaPrint />,
  security: <FaLock />,
  monitoring: <FaChartLine />,
};

const NetworkCapabilities = () => {
  const { locale } = useLanguage();
  const n = networkingDictionaries[locale];

  return (
    <div id="capabilities" className={styles.container}>
      <div className={styles.subContainer}>
        <div className={styles.header}>
          <Reveal as="p" className={styles.eyebrow}>
            {n.capabilities.eyebrow}
          </Reveal>
          <h2 className={styles.heading}>
            <Reveal as="span" className={styles.line}>
              {n.capabilities.headingLines[0]}
            </Reveal>
            <Reveal as="span" className={styles.line} delay={70}>
              {n.capabilities.headingLines[1]}
            </Reveal>
          </h2>
          <Reveal as="p" className={styles.intro} delay={140}>
            {n.capabilities.intro}
          </Reveal>
        </div>

        <div className={styles.grid}>
          {n.capabilities.items.map((item, index) => (
            <Reveal key={item.key} delay={180 + index * 60} className={styles.card}>
              <span className={styles.icon}>{icons[item.key]}</span>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.description}>{item.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NetworkCapabilities;
