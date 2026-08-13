"use client";
import { useLanguage } from "../i18n/LanguageContext";
import { networkingDictionaries } from "../i18n/networking";
import styles from "../styles/networkWhy.module.scss";
import Reveal from "./Reveal";

const NetworkWhy = () => {
  const { locale } = useLanguage();
  const n = networkingDictionaries[locale];

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div className={styles.grid}>
          <Reveal as="div" className={styles.copy}>
            <p className={styles.eyebrow}>{n.why.eyebrow}</p>
            <h2 className={styles.heading}>{n.why.heading}</h2>
            <p className={styles.intro}>{n.why.intro}</p>

            <ul className={styles.points}>
              {n.why.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal as="div" className={styles.quoteCard} delay={100}>
            <p>{n.why.quote}</p>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default NetworkWhy;
