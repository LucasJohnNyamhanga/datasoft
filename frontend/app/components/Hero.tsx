"use client";
import { useEffect, useState, type JSX } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import styles from "../styles/hero.module.scss";
import Reveal from "./Reveal";

// Icons for the stat cards, keyed by the `key` each stat carries in
// translations.ts rather than by its (localized) label text.
const STAT_ICONS: Record<string, JSX.Element> = {
  control: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 20V13M12 20V6M20 20v-9" />
    </svg>
  ),
  errors: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2 4 5v6c0 5 3.4 8.6 8 11 4.6-2.4 8-6 8-11V5l-8-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  peace: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  ),
  payments: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 10h20M6 15h4" />
    </svg>
  ),
  backups: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
    </svg>
  ),
  automation: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 13a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V19a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H4a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H10a1.65 1.65 0 0 0 1-1.51V4a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V10c.63.24 1.19.63 1.51 1H20a2 2 0 1 1 0 4h-.09c-.62.24-1.19.63-1.51 1z" />
    </svg>
  ),
};

const Hero = () => {
  const { t } = useLanguage();
  const words = t.hero.rotatingWords;
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      setWordIndex((i) => (i + 1) % words.length);
    }, 2200);
    return () => clearInterval(id);
  }, [words.length]);

  return (
    <div id="home" className={styles.container}>
      <div className={styles.frame}>
        <div className={styles.copy}>
          <Reveal as="h1" className={styles.headline}>
            {t.hero.headlinePrefix}{" "}
            <span className={styles.rotator}>
              {words.map((word, i) => (
                <span key={word} className={`${styles.rw} ${i === wordIndex ? styles.rwActive : ""}`}>
                  {word}
                </span>
              ))}
            </span>
          </Reveal>

          <Reveal as="p" className={styles.subheadline} delay={120}>
            {t.hero.subheadline[0]}
          </Reveal>

          <Reveal className={styles.actions} delay={180}>
            <a href="#idea" className={styles.primaryButton}>
              {t.hero.ctaPrimary}
            </a>
            <a href="#services" className={styles.outlineButton}>
              {t.hero.ctaSecondary}
            </a>
          </Reveal>
        </div>

        <Reveal className={styles.stats} delay={280}>
          {t.hero.stats.map((stat, i) => (
            <div key={stat.key} className={`${styles.stat} ${i === 0 ? styles.statFeatured : ""}`}>
              <div className={styles.statTop}>
                <span className={styles.statIcon}>{STAT_ICONS[stat.key]}</span>
                <span className={styles.statHeader}>{stat.header}</span>
              </div>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </div>
  );
};

export default Hero;
