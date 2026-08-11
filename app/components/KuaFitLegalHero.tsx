"use client";
import Link from "next/link";
import { FaDumbbell } from "react-icons/fa";
import { useLanguage } from "../i18n/LanguageContext";
import { kuafitDictionaries } from "../i18n/kuafit";
import Reveal from "./Reveal";
import styles from "../styles/kuafitLegalHero.module.scss";

// Hero for the two KuaFit legal pages (Applications/KuaFit/PrivacyPolicy,
// .../TermsOfService). Structurally the same ivory-register hero every
// other sub-page uses (breadcrumb, eyebrow pill, two-line headline, single
// supporting sentence) — this is an extension of an established surface,
// not a new one, so it inherits that world rather than inventing a darker
// "legal page" register. The one addition specific to this pair: a small
// doc-switch pill so a reader on one policy can jump straight to its
// sibling, since the two are natural companions.

type KuaFitLegalHeroProps = {
  docKey: "privacyPolicy" | "termsOfService";
};

const KuaFitLegalHero = ({ docKey }: KuaFitLegalHeroProps) => {
  const { t, locale } = useLanguage();
  const kuafit = kuafitDictionaries[locale];
  const doc = kuafit[docKey];

  return (
    <div className={styles.container}>
      <div className={styles.frame}>
        <Reveal as="p" className={styles.breadcrumb}>
          <Link href="/">{t.nav.home}</Link>
          <span>/</span>
          <span>{kuafit.appName}</span>
          <span>/</span>
          <span>{doc.docLabel}</span>
        </Reveal>

        <Reveal as="p" className={styles.eyebrow} delay={40}>
          <FaDumbbell size={11} aria-hidden="true" />
          {doc.eyebrow}
        </Reveal>

        <h1 className={styles.headline}>
          <Reveal as="span" className={styles.line} delay={80}>
            {doc.headlineLines[0]}
          </Reveal>
          <Reveal as="span" className={`${styles.line} ${styles.lineAccent}`} delay={140}>
            {doc.headlineLines[1]}
          </Reveal>
        </h1>

        <Reveal as="p" className={styles.subheadline} delay={200}>
          {doc.subheadline}
        </Reveal>

        <Reveal className={styles.meta} delay={260}>
          <span className={styles.updated}>
            {doc.lastUpdatedLabel}: {doc.lastUpdated}
          </span>
          <Link href={doc.switchHref} className={styles.switchPill}>
            {doc.switchLabel}
          </Link>
        </Reveal>
      </div>
    </div>
  );
};

export default KuaFitLegalHero;
