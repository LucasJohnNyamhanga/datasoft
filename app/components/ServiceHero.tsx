"use client";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../i18n/LanguageContext";
import styles from "../styles/serviceHero.module.scss";
import Reveal from "./Reveal";
import NetworkPattern from "./NetworkPattern";

type ServiceHeroProps = {
  serviceKey: "software" | "hosting" | "networking" | "graphics";
  image: string;
};

const ServiceHero = ({ serviceKey, image }: ServiceHeroProps) => {
  const { t } = useLanguage();
  const service = t.services[serviceKey];

  return (
    <div className={styles.container}>
      <NetworkPattern className={styles.network} />

      <div className={styles.imageFrame}>
        <Image
          alt={service.title}
          src={image}
          fill
          priority
          className={styles.image}
          sizes="100vw"
        />
      </div>

      <div className={styles.frame}>
        <Reveal as="p" className={styles.breadcrumb}>
          <Link href="/">{t.nav.home}</Link>
          <span>/</span>
          <span>{service.eyebrow}</span>
        </Reveal>

        <Reveal as="p" className={styles.eyebrow} delay={40}>
          {service.eyebrow}
        </Reveal>

        <Reveal as="h1" className={styles.title} delay={80}>
          {service.title}
        </Reveal>

        <Reveal as="p" className={styles.subtitle} delay={140}>
          {service.subtitle}
        </Reveal>

        <Reveal delay={200}>
          <a href="#idea" className={styles.cta}>
            {service.ctaLabel}
          </a>
        </Reveal>
      </div>
    </div>
  );
};

export default ServiceHero;
