"use client";

import { useLanguage } from "../i18n/LanguageContext";
import styles from "../styles/languageToggle.module.scss";

type Props = {
  variant?: "dark" | "light";
};

const LanguageToggle = ({ variant = "dark" }: Props) => {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div
      className={`${styles.toggle} ${variant === "light" ? styles.light : ""}`}
      role="group"
      aria-label={t.nav.languageLabel}
    >
      <button
        type="button"
        className={locale === "sw" ? styles.active : ""}
        onClick={() => setLocale("sw")}
        aria-pressed={locale === "sw"}
      >
        SW
      </button>
      <button
        type="button"
        className={locale === "en" ? styles.active : ""}
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en"}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageToggle;
