"use client";
import { Drawer } from "@mui/material";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { useRef, useState } from "react";
import Styles from "../styles/drawerMobile.module.scss";
import { useLanguage } from "../i18n/LanguageContext";
import LanguageToggle from "./LanguageToggle";

export const MuiDrawer = () => {
  const segment = useSelectedLayoutSegment();
  const { t } = useLanguage();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const hamburger = useRef<HTMLButtonElement>(null!);

  const handleMenuClick = () => {
    hamburger.current.classList.toggle(Styles.isActive);
    setIsDrawerOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsDrawerOpen(false);
    hamburger.current.classList.remove(Styles.isActive);
  };

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
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={handleClose}
        PaperProps={{ className: Styles.paper }}
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
          <a href="#idea" className={Styles.link} onClick={handleClose}>
            {t.nav.contact}
          </a>

          <div className={Styles.footer}>
            <div className={Styles.callLine}>
              {t.nav.callUs}: <a href="tel:+255767887999">+255 767 887 999</a>
            </div>
            <LanguageToggle />
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default MuiDrawer;
