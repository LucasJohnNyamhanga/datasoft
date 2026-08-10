"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter, useSelectedLayoutSegment } from "next/navigation";
import { FaPhoneAlt, FaArrowRight } from "react-icons/fa";
import Styles from "../styles/navigation.module.scss";
import { useLanguage } from "../i18n/LanguageContext";
import LanguageToggle from "./LanguageToggle";

const SERVICE_SEGMENTS = ["Software", "Hosting", "Networking", "Graphics"];
const HOME_SECTIONS = ["home", "services", "process", "idea"];

const Nav = () => {
  const segment = useSelectedLayoutSegment();
  const router = useRouter();
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const isServicePage = segment != null && SERVICE_SEGMENTS.includes(segment);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (segment != null) return;

    const sections = HOME_SECTIONS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el != null
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [segment]);

  const linkClass = (id: string) =>
    `${Styles.link} ${activeSection === id ? Styles.linkActive : ""}`;

  const handleNavigation = (nav: string) => {
    router.push(nav);
  };

  return (
    <div className={`${Styles.container} ${scrolled ? Styles.scrolled : ""}`} id="top">
      <div className={Styles.announce}>
        <div className={Styles.announceRow}>
          <a
            href="tel:+255767887999"
            className={Styles.callLink}
            aria-label={`${t.nav.callUs} +255 767 887 999`}
          >
            <FaPhoneAlt className={Styles.callIcon} size={11} aria-hidden="true" />
            <span className={Styles.callText} aria-hidden="true">
              {t.nav.callUs} <span className={Styles.callNumber}>+255 767 887 999</span>
            </span>
          </a>
          <span className={Styles.divider} aria-hidden="true">
            <span className={Styles.dividerLine} />
            {t.nav.or}
            <span className={Styles.dividerLine} />
          </span>
          <a href="#idea" className={Styles.formLink}>
            {t.nav.fillForm}
            <FaArrowRight className={Styles.formIcon} size={10} aria-hidden="true" />
          </a>
        </div>
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
              <a href="#home" className={linkClass("home")}>
                {t.nav.home}
              </a>
            )}
            {segment == null && (
              <>
                <a href="#services" className={linkClass("services")}>
                  {t.nav.services}
                </a>
                <a href="#process" className={linkClass("process")}>
                  {t.nav.process}
                </a>
              </>
            )}
            {isServicePage && (
              <a href="#capabilities" className={Styles.link}>
                {t.nav.capabilities}
              </a>
            )}
            {segment === "Networking" && (
              <a href="#process" className={Styles.link}>
                {t.nav.process}
              </a>
            )}
            <a href="#idea" className={segment == null ? linkClass("idea") : Styles.link}>
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
