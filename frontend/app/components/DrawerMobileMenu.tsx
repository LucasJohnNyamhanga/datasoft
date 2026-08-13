"use client";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Styles from "../styles/drawerMobile.module.scss";
import { useLanguage } from "../i18n/LanguageContext";
import LanguageToggle from "./LanguageToggle";
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_HREF } from "../constants/contact";

const SERVICE_SEGMENTS = ["Software", "Hosting", "Networking", "Graphics"];

export const MuiDrawer = () => {
  const segment = useSelectedLayoutSegment();
  const { t } = useLanguage();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const hamburger = useRef<HTMLButtonElement>(null!);
  const isServicePage = segment != null && SERVICE_SEGMENTS.includes(segment);

  const handleMenuClick = () => {
    hamburger.current.classList.toggle(Styles.isActive);
    setIsDrawerOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsDrawerOpen(false);
    hamburger.current.classList.remove(Styles.isActive);
  };

  useEffect(() => {
    if (!isDrawerOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [isDrawerOpen]);

  return (
    <>
      <button
        ref={hamburger}
        type="button"
        aria-label={t.nav.services}
        onClick={handleMenuClick}
        className={Styles.hamburger}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div
        className={`${Styles.backdrop} ${isDrawerOpen ? Styles.backdropOpen : ""}`}
        onClick={handleClose}
        aria-hidden={!isDrawerOpen}
      />
      <div
        className={`${Styles.paper} ${isDrawerOpen ? Styles.paperOpen : ""}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isDrawerOpen}
      >
        <div className={Styles.panel} role="presentation">
          {segment != null ? (
            <Link href="/" className={Styles.link} onClick={handleClose}>
              {t.nav.home}
            </Link>
          ) : (
            <a href="#home" className={Styles.link} onClick={handleClose}>
              {t.nav.home}
            </a>
          )}
          {segment == null && (
            <>
              <a href="#services" className={Styles.link} onClick={handleClose}>
                {t.nav.services}
              </a>
              <a href="#process" className={Styles.link} onClick={handleClose}>
                {t.nav.process}
              </a>
            </>
          )}
          {isServicePage && (
            <>
              <span className={Styles.groupLabel}>{t.nav.services}</span>
              {t.whatWeDo.services.map((service) => (
                <Link
                  key={service.key}
                  href={service.link}
                  className={`${Styles.link} ${Styles.subLink} ${
                    service.link === `/${segment}` ? Styles.linkActive : ""
                  }`}
                  onClick={handleClose}
                >
                  {service.header}
                </Link>
              ))}
              <a href="#capabilities" className={Styles.link} onClick={handleClose}>
                {t.nav.capabilities}
              </a>
            </>
          )}
          {segment === "Networking" && (
            <a href="#process" className={Styles.link} onClick={handleClose}>
              {t.nav.process}
            </a>
          )}
          <a href="#idea" className={Styles.link} onClick={handleClose}>
            {t.nav.contact}
          </a>

          <div className={Styles.footer}>
            <div className={Styles.callLine}>
              {t.nav.callUs} <a href={CONTACT_PHONE_HREF}>{CONTACT_PHONE_DISPLAY}</a>
            </div>
            <LanguageToggle />
          </div>
        </div>
      </div>
    </>
  );
};

export default MuiDrawer;
