"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useSelectedLayoutSegment } from "next/navigation";
import { FaPhoneAlt, FaArrowRight, FaChevronDown } from "react-icons/fa";
import Styles from "../styles/navigation.module.scss";
import { useLanguage } from "../i18n/LanguageContext";
import LanguageToggle from "./LanguageToggle";

const SERVICE_SEGMENTS = ["Software", "Hosting", "Networking", "Graphics"];
const HOME_SECTIONS = ["home", "services", "process", "idea"];

const Nav = () => {
  const segment = useSelectedLayoutSegment();
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    setServicesOpen(false);
  }, [segment]);

  useEffect(() => {
    if (!servicesOpen) return;

    const onPointerDown = (e: MouseEvent) => {
      if (!servicesRef.current?.contains(e.target as Node)) setServicesOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setServicesOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [servicesOpen]);

  const linkClass = (id: string) =>
    `${Styles.link} ${activeSection === id ? Styles.linkActive : ""}`;

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
          <Link href={segment != null ? "/" : "#home"} className={Styles.logo}>
            <Image
              alt="DataSoft Tanzania"
              src="/brainas.svg"
              width={38}
              height={38}
              priority
            />
            <span className={Styles.name}>DataSoft</span>
          </Link>

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
              <div className={Styles.dropdown} ref={servicesRef}>
                <button
                  type="button"
                  className={`${Styles.link} ${Styles.dropdownTrigger}`}
                  aria-haspopup="true"
                  aria-expanded={servicesOpen}
                  onClick={() => setServicesOpen((prev) => !prev)}
                >
                  {t.nav.services}
                  <FaChevronDown
                    className={`${Styles.dropdownIcon} ${servicesOpen ? Styles.dropdownIconOpen : ""}`}
                    size={9}
                    aria-hidden="true"
                  />
                </button>
                <div
                  className={`${Styles.dropdownMenu} ${servicesOpen ? Styles.dropdownMenuOpen : ""}`}
                  role="menu"
                >
                  {t.whatWeDo.services.map((service) => (
                    <Link
                      key={service.key}
                      href={service.link}
                      role="menuitem"
                      className={`${Styles.dropdownItem} ${
                        service.link === `/${segment}` ? Styles.dropdownItemActive : ""
                      }`}
                      onClick={() => setServicesOpen(false)}
                    >
                      {service.header}
                    </Link>
                  ))}
                </div>
              </div>
            )}
            {isServicePage && (
              <a href="#capabilities" className={Styles.link}>
                {t.nav.capabilities}
              </a>
            )}
            {isServicePage && (
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
