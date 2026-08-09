"use client";
import styles from "../styles/whatWeHaveDone.module.scss";
import CapabilityShowcase from "./CapabilityShowcase";
import Reveal from "./Reveal";
import { useLanguage } from "../i18n/LanguageContext";

const kinds = ["system", "app", "website", "brand"] as const;

const WhatWeHaveDone = () => {
  const { t } = useLanguage();

  return (
    <div className={styles.container} id="projects">
      <div className={styles.subContainer}>
        <Reveal as="p" className={styles.eyebrow}>
          {t.portfolio.eyebrow}
        </Reveal>
        <Reveal as="h2" className={styles.heading}>
          {t.portfolio.heading}
        </Reveal>
        <Reveal as="p" className={styles.intro} delay={80}>
          {t.portfolio.intro}
        </Reveal>

        <div className={styles.rows}>
          {t.portfolio.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 80} className={styles.row}>
              <div className={styles.visual}>
                <CapabilityShowcase kind={kinds[index]} />
              </div>
              <div className={styles.copy}>
                <span className={styles.index}>{`0${index + 1}`}</span>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemDescription}>{item.description}</p>
                <ul className={styles.pillList}>
                  {item.tags.map((tag) => (
                    <li key={tag} className={styles.pill}>
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeHaveDone;
