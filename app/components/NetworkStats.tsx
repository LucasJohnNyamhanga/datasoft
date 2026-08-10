"use client";
import { useLanguage } from "../i18n/LanguageContext";
import { networkingDictionaries } from "../i18n/networking";
import styles from "../styles/networkStats.module.scss";
import Reveal from "./Reveal";

const NetworkStats = () => {
  const { locale } = useLanguage();
  const n = networkingDictionaries[locale];

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        {n.stats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 60} className={styles.stat}>
            <span className={styles.value}>{stat.value}</span>
            <span className={styles.label}>{stat.label}</span>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default NetworkStats;
