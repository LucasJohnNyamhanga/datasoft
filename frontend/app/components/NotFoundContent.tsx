"use client";
import Link from "next/link";
import { useLanguage } from "../i18n/LanguageContext";
import styles from "../styles/notFound.module.scss";
import TechCore from "./TechCore";

const NotFoundContent = () => {
  const { t } = useLanguage();

  return (
    <div className={styles.container}>
      <div className={styles.scrim} />

      <div className={styles.frame}>
        <div className={`${styles.sceneWrap} ${styles.heroIn}`}>
          <TechCore />
        </div>

        <div className={styles.copy}>
          <p className={`${styles.eyebrow} ${styles.heroIn}`} style={{ animationDelay: "80ms" }}>
            {t.notFound.eyebrow}
          </p>

          <h1 className={styles.headline}>
            <span className={`${styles.line} ${styles.heroIn}`} style={{ animationDelay: "140ms" }}>
              {t.notFound.headlineLines[0]}
            </span>
            <span
              className={`${styles.line} ${styles.lineItalic} ${styles.heroIn}`}
              style={{ animationDelay: "200ms" }}
            >
              {t.notFound.headlineLines[1]}
            </span>
          </h1>

          <div className={`${styles.message} ${styles.heroIn}`} style={{ animationDelay: "260ms" }}>
            <p>{t.notFound.message}</p>
            <p>{t.notFound.subMessage}</p>
          </div>

          <div className={`${styles.actions} ${styles.heroIn}`} style={{ animationDelay: "320ms" }}>
            <Link href="/" className={styles.primaryButton}>
              {t.notFound.ctaHome}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundContent;
