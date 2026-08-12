"use client";
import { useLanguage } from "../i18n/LanguageContext";
import { networkingDictionaries } from "../i18n/networking";
import styles from "../styles/networkProcess.module.scss";
import Reveal from "./Reveal";

const NetworkProcess = () => {
  const { locale } = useLanguage();
  const n = networkingDictionaries[locale];

  return (
    <div id="process" className={styles.container}>
      <div className={styles.subContainer}>
        <Reveal as="p" className={styles.eyebrow}>
          {n.process.eyebrow}
        </Reveal>
        <Reveal as="h2" className={styles.heading}>
          {n.process.heading}
        </Reveal>
        <Reveal as="p" className={styles.intro} delay={80}>
          {n.process.intro}
        </Reveal>

        <div className={styles.steps}>
          {n.process.steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 80} className={styles.step}>
              <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </Reveal>
          ))}
        </div>

        <Reveal as="p" className={styles.closing} delay={n.process.steps.length * 80}>
          {n.process.closing}
        </Reveal>
      </div>
    </div>
  );
};

export default NetworkProcess;
