"use client";
import styles from "../styles/serviceProcess.module.scss";
import Reveal from "./Reveal";
import { useLanguage } from "../i18n/LanguageContext";
import type { ExtendedServiceKey } from "../i18n/translations";

type ServiceProcessProps = {
  serviceKey: ExtendedServiceKey;
};

// Generic numbered-process section shared by Software, Hosting and Graphics.
// Sits on the light "room" register (rather than NetworkProcess's dark
// sapphire shell) since it follows straight after each page's already-dark
// Capabilities section — keeping the page from stacking two dark bands in a
// row while still landing the same "how we work" beat as Networking. Reads
// content live via useLanguage so it stays in sync with the language toggle.

const ServiceProcess = ({ serviceKey }: ServiceProcessProps) => {
  const { t } = useLanguage();
  const content = t.services[serviceKey].process;
  if (!content) return null;

  return (
    <div id="process" className={styles.container}>
      <div className={styles.subContainer}>
        <Reveal as="p" className={styles.eyebrow}>
          {content.eyebrow}
        </Reveal>
        <Reveal as="h2" className={styles.heading}>
          {content.heading}
        </Reveal>
        <Reveal as="p" className={styles.intro} delay={80}>
          {content.intro}
        </Reveal>

        <div className={styles.steps}>
          {content.steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 80} className={styles.step}>
              <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDescription}>{step.description}</p>
            </Reveal>
          ))}
        </div>

        <Reveal as="p" className={styles.closing} delay={content.steps.length * 80}>
          {content.closing}
        </Reveal>
      </div>
    </div>
  );
};

export default ServiceProcess;
