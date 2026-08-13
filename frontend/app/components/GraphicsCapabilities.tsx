"use client";
import styles from "../styles/graphicsCapabilities.module.scss";
import Reveal from "./Reveal";
import { useLanguage } from "../i18n/LanguageContext";
import { FaPalette, FaPrint, FaShareAlt, FaBoxOpen } from "react-icons/fa";

const icons: Record<string, React.ReactNode> = {
  branding: <FaPalette />,
  print: <FaPrint />,
  social: <FaShareAlt />,
  packaging: <FaBoxOpen />,
};

// Sits directly under the Graphics hero's Photoshop-style studio mockup and
// cashes in on it: the poster the visitor just watched get built layer by
// layer is called back explicitly here as one example, so the grid reads as
// proof of a broader design capability rather than a generic feature list.
// Mirrors HostingFeatures/SoftwareCapabilities so all service pages share
// one flow: hero -> stats -> capabilities grid -> process -> why -> faq -> contact.

const GraphicsCapabilities = () => {
  const { t } = useLanguage();
  const s = t.services.graphics;
  const capabilities = s.capabilities ?? [];
  const heading = s.capabilitiesHeading ?? [s.includesHeading, ""];

  return (
    <div id="capabilities" className={styles.container}>
      <div className={styles.subContainer}>
        <div className={styles.header}>
          <Reveal as="p" className={styles.eyebrow}>
            {s.capabilitiesEyebrow ?? s.includesHeading}
          </Reveal>
          <h2 className={styles.heading}>
            <Reveal as="span" className={styles.line}>
              {heading[0]}
            </Reveal>
            <Reveal as="span" className={styles.line} delay={70}>
              {heading[1]}
            </Reveal>
          </h2>
          <Reveal as="p" className={styles.intro} delay={140}>
            {s.capabilitiesIntro}
          </Reveal>
        </div>

        <div className={styles.grid}>
          {capabilities.map((item, index) => (
            <Reveal key={item.key} delay={180 + index * 40} className={styles.card}>
              <span className={styles.icon}>{icons[item.key]}</span>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDescription}>{item.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GraphicsCapabilities;
