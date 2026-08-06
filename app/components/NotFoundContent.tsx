"use client";
import Link from "next/link";
import { useLanguage } from "../i18n/LanguageContext";
import styles from "../styles/notFound.module.scss";
import NetworkPattern from "./NetworkPattern";
import TechCore from "./TechCore";
import Reveal from "./Reveal";

const NotFoundContent = () => {
  const { t } = useLanguage();

  return (
    <div className={styles.container}>
      <NetworkPattern className={styles.pattern} />
      <div className={styles.scrim} />

      <div className={styles.frame}>
        <Reveal className={styles.sceneWrap}>
          <TechCore />
        </Reveal>

        <Reveal as="p" className={styles.eyebrow} delay={80}>
          {t.notFound.eyebrow}
        </Reveal>

        <h1 className={styles.headline}>
          <Reveal as="span" className={styles.line} delay={140}>
            {t.notFound.headlineLines[0]}
          </Reveal>
          <Reveal as="span" className={`${styles.line} ${styles.lineItalic}`} delay={200}>
            {t.notFound.headlineLines[1]}
          </Reveal>
        </h1>

        <Reveal className={styles.message} delay={260}>
          <p>{t.notFound.message}</p>
          <p>{t.notFound.subMessage}</p>
        </Reveal>

        <Reveal className={styles.actions} delay={320}>
          <Link href="/" className={styles.primaryButton}>
            {t.notFound.ctaHome}
          </Link>
        </Reveal>
      </div>
    </div>
  );
};

export default NotFoundContent;
