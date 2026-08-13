"use client";
import { useLanguage } from "../i18n/LanguageContext";
import styles from "../styles/hero.module.scss";
import Reveal from "./Reveal";
import CodeEditor from "./CodeEditor";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <div id="home" className={styles.container}>
      <div className={styles.frame}>
        <div className={styles.copy}>
          <Reveal as="p" className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            {t.hero.eyebrow}
          </Reveal>

          <h1 className={styles.headline}>
            <Reveal as="span" className={styles.line}>
              {t.hero.headlineLines[0]}
            </Reveal>
            <Reveal as="span" className={`${styles.line} ${styles.lineAccent}`} delay={90}>
              {t.hero.headlineLines[1]}
            </Reveal>
          </h1>

          <Reveal as="p" className={styles.subheadline} delay={150}>
            {t.hero.subheadline[0]}
          </Reveal>

          <Reveal className={styles.actions} delay={210}>
            <a href="#idea" className={styles.primaryButton}>
              {t.hero.ctaPrimary}
            </a>
            <a href="#services" className={styles.outlineButton}>
              {t.hero.ctaSecondary}
            </a>
          </Reveal>
        </div>

        <Reveal className={styles.panelWrap} delay={280}>
          <div className={styles.panel}>
            <CodeEditor />
          </div>
          <p className={styles.panelCaption}>{t.hero.mapCaption}</p>
        </Reveal>
      </div>
    </div>
  );
};

export default Hero;
