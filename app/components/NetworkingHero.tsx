"use client";
import Link from "next/link";
import { useLanguage } from "../i18n/LanguageContext";
import { networkingDictionaries } from "../i18n/networking";
import styles from "../styles/networkingHero.module.scss";
import Reveal from "./Reveal";
import NetworkTopology from "./NetworkTopology";

const NetworkingHero = () => {
  const { locale, t } = useLanguage();
  const n = networkingDictionaries[locale];

  return (
    <div id="top" className={styles.container}>
      <div className={styles.frame}>
        <div className={styles.copy}>
          <Reveal as="p" className={styles.breadcrumb}>
            <Link href="/">{t.nav.home}</Link>
            <span>/</span>
            <span>{n.hero.breadcrumb}</span>
          </Reveal>

          <Reveal as="p" className={styles.eyebrow} delay={40}>
            <span className={styles.eyebrowDot} />
            {n.hero.eyebrow}
          </Reveal>

          <h1 className={styles.headline}>
            <Reveal as="span" className={styles.line} delay={80}>
              {n.hero.headlineLines[0]}
            </Reveal>
            <Reveal as="span" className={`${styles.line} ${styles.lineAccent}`} delay={160}>
              {n.hero.headlineLines[1]}
            </Reveal>
          </h1>

          <Reveal as="p" className={styles.subheadline} delay={220}>
            {n.hero.subheadline}
          </Reveal>

          <Reveal className={styles.actions} delay={280}>
            <a href="#idea" className={styles.primaryButton}>
              {n.hero.ctaPrimary}
            </a>
            <a href="#process" className={styles.outlineButton}>
              {n.hero.ctaSecondary}
            </a>
          </Reveal>
        </div>

        <Reveal className={styles.panelWrap} delay={340}>
          <div className={styles.panel}>
            <NetworkTopology
              title={n.hero.panelTitle}
              statusNetwork={n.hero.statusNetwork}
              statusDevices={n.hero.statusDevices}
              statusLink={n.hero.statusLink}
            />
          </div>
          <p className={styles.panelCaption}>{n.hero.panelCaption}</p>
        </Reveal>
      </div>
    </div>
  );
};

export default NetworkingHero;
