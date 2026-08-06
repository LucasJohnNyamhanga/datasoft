"use client";
import { useLanguage } from "../i18n/LanguageContext";
import styles from "../styles/hero.module.scss";
import Reveal from "./Reveal";
import CityNetworkMap from "./CityNetworkMap";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <div id="home" className={styles.container}>
      <div className={styles.cityMap}>
        <CityNetworkMap />
      </div>

      <div className={styles.scrim} />

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

          <Reveal className={styles.subheadline} delay={160}>
            {t.hero.subheadline.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
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
