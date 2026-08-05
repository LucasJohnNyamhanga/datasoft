"use client";
import { useEffect, useRef } from "react";
import { FiArrowUp } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import styles from "../styles/goToTop.module.scss";
import { useLanguage } from "../i18n/LanguageContext";

const GoToTop = () => {
  const { t } = useLanguage();
  const button = useRef<HTMLButtonElement>(null!);

  useEffect(() => {
    const handleScroll = () => {
      if (!button.current) return;
      button.current.classList.toggle(styles.show, window.scrollY > 450);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <button
        ref={button}
        type="button"
        className={styles.backToTop}
        onClick={scrollToTop}
        aria-label={t.goToTop.label}
      >
        <FiArrowUp size={20} />
      </button>

      <a
        href="https://wa.me/255767887999"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsapp}
        aria-label={t.goToTop.whatsapp}
      >
        <BsWhatsapp size={20} />
      </a>
    </>
  );
};

export default GoToTop;
