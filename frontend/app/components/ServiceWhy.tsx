"use client";
import styles from "../styles/serviceWhy.module.scss";
import Reveal from "./Reveal";
import { useLanguage } from "../i18n/LanguageContext";
import type { ExtendedServiceKey } from "../i18n/translations";

type ServiceWhyProps = {
  serviceKey: ExtendedServiceKey;
};

// Generic "why it matters" section shared by Software, Hosting and Graphics
// — mirrors NetworkWhy's copy + quote-card layout. Replaces the short
// pull-quote that used to close each page's Capabilities grid, so all four
// service pages land the same fuller beat before the contact form. Reads
// content live via useLanguage so it stays in sync with the language toggle.
// whyHeading/why (already used elsewhere as the Capabilities closing quote)
// double up here as this section's eyebrow/quote.

const ServiceWhy = ({ serviceKey }: ServiceWhyProps) => {
  const { t } = useLanguage();
  const s = t.services[serviceKey];
  if (!s.whySectionHeading || !s.whyIntro || !s.whyPoints) return null;

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div className={styles.grid}>
          <Reveal as="div" className={styles.copy}>
            <p className={styles.eyebrow}>{s.whyHeading}</p>
            <h2 className={styles.heading}>{s.whySectionHeading}</h2>
            <p className={styles.intro}>{s.whyIntro}</p>

            <ul className={styles.points}>
              {s.whyPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal as="div" className={styles.quoteCard} delay={100}>
            <p>{s.why}</p>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default ServiceWhy;
