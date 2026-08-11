"use client";
import Image from "next/image";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { FaPhoneAlt, FaArrowRight } from "react-icons/fa";
import Styles from "../styles/NavMobile.module.scss";
import { useLanguage } from "../i18n/LanguageContext";
import DrawerMobile from "./DrawerMobileMenu";
import LanguageToggle from "./LanguageToggle";
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_HREF } from "../constants/contact";

export const NavMobile = () => {
  const segment = useSelectedLayoutSegment();
  const { t } = useLanguage();

  return (
    <div className={Styles.container} id="top">
      <div className={Styles.announce}>
        <a
          href={CONTACT_PHONE_HREF}
          className={Styles.callLink}
          aria-label={`${t.nav.callUs} ${CONTACT_PHONE_DISPLAY}`}
        >
          <FaPhoneAlt className={Styles.callIcon} size={10} aria-hidden="true" />
          <span className={Styles.callNumber}>{CONTACT_PHONE_DISPLAY}</span>
        </a>
        <span className={Styles.dividerLine} aria-hidden="true" />
        <a href="#idea" className={Styles.formLink}>
          {t.nav.fillForm}
          <FaArrowRight className={Styles.formIcon} size={9} aria-hidden="true" />
        </a>
      </div>
      <div className={Styles.bar}>
        <Link href={segment != null ? "/" : "#home"} className={Styles.logo}>
          <Image alt="DataSoft Tanzania" src="/brainas.svg" width={32} height={32} priority />
          <span className={Styles.name}>DataSoft</span>
        </Link>
        <div className={Styles.right}>
          <LanguageToggle />
          <DrawerMobile />
        </div>
      </div>
    </div>
  );
};

export default NavMobile;
