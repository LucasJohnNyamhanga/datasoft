"use client";
import styles from "../styles/whatWeHaveDone.module.scss";
import CardProject from "./CardProject";
import Reveal from "./Reveal";
import { useLanguage } from "../i18n/LanguageContext";
import { FaLaptopCode, FaMobileAlt, FaGlobeAfrica, FaImages } from "react-icons/fa";

const icons = [
  <FaLaptopCode key="software" />,
  <FaMobileAlt key="mobile" />,
  <FaGlobeAfrica key="hosting" />,
  <FaImages key="graphics" />,
];

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

        <div className={styles.grid}>
          {t.portfolio.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 70} className={styles.cell}>
              <CardProject
                icon={icons[index]}
                title={item.title}
                description={item.description}
                tags={item.tags}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeHaveDone;
