"use client";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Styles from "../styles/footer.module.scss";
import { useLanguage } from "../i18n/LanguageContext";
import LanguageToggle from "./LanguageToggle";
import NetworkPattern from "./NetworkPattern";

const Footer = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className={Styles.container}>
      <NetworkPattern className={Styles.network} />
      <div className={Styles.top}>
        <div className={Styles.brand}>
          <div className={Styles.logo}>
            <Image alt="DataSoft Tanzania" src="/brainas.svg" width={34} height={34} />
            <span>DataSoft</span>
          </div>
          <LanguageToggle />
        </div>

        <div className={Styles.columns}>
          <div className={Styles.column}>
            <div className={Styles.header}>{t.footer.quickLinks}</div>
            <Link href="/" className={Styles.body}>
              {t.nav.home}
            </Link>
            {t.whatWeDo.services.map((service) => (
              <Link key={service.key} href={service.link} className={Styles.body}>
                {service.header}
              </Link>
            ))}
          </div>

          <div className={Styles.column}>
            <div className={Styles.header}>{t.footer.visitUs}</div>
            {t.footer.addressLines.map((line) => (
              <p key={line} className={Styles.body}>
                {line}
              </p>
            ))}
          </div>

          <div className={Styles.column}>
            <div className={Styles.header}>{t.footer.briefUs}</div>
            <p className={`${Styles.body} ${Styles.emphasis}`}>{t.footer.talkBusiness}</p>
            <p className={Styles.body}>
              <a href="tel:+255767887999">+255 767 887 999</a>
            </p>
            <p className={Styles.body}>
              <a href="mailto:datasofttanzania@gmail.com">datasofttanzania@gmail.com</a>
            </p>
          </div>

          <div className={Styles.column}>
            <div className={Styles.header}>{t.footer.socialMedia}</div>
            <div className={Styles.social}>
              <Link
                href="https://www.instagram.com/datasofttanzania/"
                aria-label="Instagram"
                target="_blank"
              >
                <FaInstagram />
              </Link>
              <Link
                href="https://www.facebook.com/"
                aria-label="Facebook"
                target="_blank"
              >
                <FaFacebookF />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={Styles.bottom}>
        <span>DataSoft Tanzania &copy; {year}</span>
        <span>{t.footer.rights}</span>
      </div>
    </footer>
  );
};

export default Footer;
