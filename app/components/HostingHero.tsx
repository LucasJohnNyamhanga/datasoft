"use client";
import Link from "next/link";
import { useLanguage } from "../i18n/LanguageContext";
import styles from "../styles/hostingHero.module.scss";
import Reveal from "./Reveal";
import ServerCloudFlow from "./ServerCloudFlow";

// The Hosting service page's own hero — built like the homepage Hero and
// SoftwareHero (copy left, live device panel right) rather than the shared
// image-backed ServiceHero, so this page can lead with a concrete "your
// server talking to our cloud" mockup instead of a static photo.

const defaultFlowLabels = {
  windowTitle: "server.datasoft.co.tz",
  serverLabel: "Server",
  serverSub: "",
  cloudLabel: "Cloud",
  cloudSub: "",
  outLabel: "Out",
  inLabel: "In",
  statusOnline: "Online",
  statusSecure: "SSL",
  statusBackup: "Backup",
};

const HostingHero = () => {
  const { t } = useLanguage();
  const s = t.services.hosting;
  const headline = s.headlineLines ?? [s.title, ""];

  return (
    <div className={styles.container}>
      <div className={styles.frame}>
        <div className={styles.copy}>
          <Reveal as="p" className={styles.breadcrumb}>
            <Link href="/">{t.nav.home}</Link>
            <span>/</span>
            <span>{s.eyebrow}</span>
          </Reveal>

          <Reveal as="p" className={styles.eyebrow} delay={40}>
            <span className={styles.eyebrowDot} />
            {s.eyebrow}
          </Reveal>

          <h1 className={styles.headline}>
            <Reveal as="span" className={styles.line} delay={80}>
              {headline[0]}
            </Reveal>
            <Reveal as="span" className={`${styles.line} ${styles.lineAccent}`} delay={160}>
              {headline[1]}
            </Reveal>
          </h1>

          <Reveal as="p" className={styles.subheadline} delay={220}>
            {s.subtitle}
          </Reveal>

          <Reveal className={styles.actions} delay={280}>
            <a href="#idea" className={styles.primaryButton}>
              {s.ctaLabel}
            </a>
            <a href="#capabilities" className={styles.outlineButton}>
              {s.secondaryCtaLabel ?? s.includesHeading}
            </a>
          </Reveal>
        </div>

        <Reveal className={styles.panelWrap} delay={340}>
          <div className={styles.panel}>
            <ServerCloudFlow labels={s.flowLabels ?? defaultFlowLabels} />
          </div>
          <p className={styles.panelCaption}>{s.ideCaption}</p>
        </Reveal>
      </div>
    </div>
  );
};

export default HostingHero;
