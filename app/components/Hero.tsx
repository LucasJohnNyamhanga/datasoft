"use client";
import Image from "next/image";
import { useLanguage } from "../i18n/LanguageContext";
import styles from "../styles/hero.module.scss";
import Reveal from "./Reveal";
import NetworkPattern from "./NetworkPattern";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <div id="home" className={styles.container}>
      <div className={styles.image}>
        <Image
          alt="DataSoft Tanzania"
          src="/datasoftsoftware.gif"
          fill
          unoptimized
          priority
          style={{ objectFit: "cover", objectPosition: "right center" }}
        />
      </div>

      <div className={styles.scrim} />
      <NetworkPattern className={styles.network} />

      <div className={styles.frame}>
        <div className={styles.card}>
          <Reveal as="p" className={styles.eyebrow}>
            {t.hero.eyebrow}
          </Reveal>

          <h1 className={styles.headline}>
            <Reveal as="span" className={styles.line}>
              {t.hero.headlineLines[0]}
            </Reveal>
            <Reveal as="span" className={`${styles.line} ${styles.lineItalic}`} delay={90}>
              {t.hero.headlineLines[1]}
            </Reveal>
          </h1>

          <Reveal as="p" className={styles.subheadline} delay={160}>
            {t.hero.subheadline}
          </Reveal>

          <Reveal className={styles.actions} delay={220}>
            <a href="#idea" className={styles.primaryButton}>
              {t.hero.ctaPrimary}
            </a>
            <a href="#services" className={styles.ghostButton}>
              {t.hero.ctaSecondary}
            </a>
          </Reveal>
        </div>
      </div>

      <div className={styles.mobileLattice} />
    </div>
  );
};

export default Hero;
