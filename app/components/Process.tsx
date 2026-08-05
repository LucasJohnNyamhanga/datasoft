"use client";
import { useLanguage } from "../i18n/LanguageContext";
import styles from "../styles/process.module.scss";
import Reveal from "./Reveal";
import NetworkPattern from "./NetworkPattern";

const Process = () => {
  const { t } = useLanguage();

  return (
    <div id="process" className={styles.container}>
      <NetworkPattern className={styles.network} />
      <div className={styles.subContainer}>
        <Reveal as="p" className={styles.eyebrow}>
          {t.process.eyebrow}
        </Reveal>
        <Reveal as="h2" className={styles.heading}>
          {t.process.heading}
        </Reveal>
        <Reveal as="p" className={styles.intro} delay={80}>
          {t.process.intro}
        </Reveal>

        <div className={styles.steps}>
          {t.process.steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 80} className={styles.step}>
              <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </Reveal>
          ))}
        </div>

        <Reveal as="p" className={styles.closing} delay={t.process.steps.length * 80}>
          {t.process.closing}
        </Reveal>
      </div>

      <div className={styles.lattice} />
    </div>
  );
};

export default Process;
