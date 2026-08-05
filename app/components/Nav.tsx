"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter, useSelectedLayoutSegment } from "next/navigation";
import Styles from "../styles/navigation.module.scss";
import { useLanguage } from "../i18n/LanguageContext";
import LanguageToggle from "./LanguageToggle";

const Nav = () => {
  const segment = useSelectedLayoutSegment();
  const router = useRouter();
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavigation = (nav: string) => {
    router.push(nav);
  };

  return (
    <div className={`${Styles.container} ${scrolled ? Styles.scrolled : ""}`} id="top">
      <div className={Styles.announce}>
        <p>
          {t.nav.callUs}: <a href="tel:+255767887999">+255 767 887 999</a>{" "}
          {t.nav.or} <a href="#idea">{t.nav.fillForm}</a>
        </p>
      </div>
      <div className={Styles.bar}>
        <nav className={Styles.nav}>
          <div
            className={Styles.logo}
            onClick={() => {
              if (segment != null) {
                handleNavigation("/");
              } else {
                handleNavigation("#home");
              }
            }}
          >
            <Image
              alt="DataSoft Tanzania"
              src="/brainas.svg"
              width={38}
              height={38}
              priority
            />
            <span className={Styles.name}>DataSoft</span>
          </div>

          <div className={Styles.links}>
            {segment != null ? (
              <Link href="/" className={Styles.link}>
                {t.nav.home}
              </Link>
            ) : (
              <a href="#home" className={Styles.link}>
                {t.nav.home}
              </a>
            )}
            {segment == null && (
              <>
                <a href="#services" className={Styles.link}>
                  {t.nav.services}
                </a>
                <a href="#process" className={Styles.link}>
                  {t.nav.process}
                </a>
              </>
            )}
            <a href="#idea" className={Styles.link}>
              {t.nav.contact}
            </a>
          </div>

          <LanguageToggle />
        </nav>
      </div>
    </div>
  );
};

export default Nav;
