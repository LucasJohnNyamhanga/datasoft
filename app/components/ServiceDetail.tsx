"use client";
import { useLanguage } from "../i18n/LanguageContext";
import styles from "../styles/serviceDetail.module.scss";
import Reveal from "./Reveal";

type ServiceDetailProps = {
  serviceKey: "software" | "hosting" | "networking" | "graphics";
};

const ServiceDetail = ({ serviceKey }: ServiceDetailProps) => {
  const { t } = useLanguage();
  const service = t.services[serviceKey];

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <Reveal as="p" className={styles.intro}>
          {service.intro}
        </Reveal>

        <div className={styles.grid}>
          <Reveal as="div" className={styles.includes} delay={60}>
            <h2 className={styles.heading}>{service.includesHeading}</h2>
            <ul>
              {service.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal as="div" className={styles.why} delay={100}>
            <h2 className={styles.heading}>{service.whyHeading}</h2>
            <p>{service.why}</p>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
