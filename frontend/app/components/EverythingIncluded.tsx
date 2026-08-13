"use client";
import styles from "../styles/everythingIncluded.module.scss";
import Reveal from "./Reveal";
import { useLanguage } from "../i18n/LanguageContext";
import {
  FaRobot,
  FaChartLine,
  FaMoneyBillWave,
  FaShieldAlt,
  FaHeadset,
  FaCloudUploadAlt,
  FaLayerGroup,
  FaSignal,
} from "react-icons/fa";

const icons: Record<string, React.ReactNode> = {
  automation: <FaRobot />,
  metrics: <FaChartLine />,
  payments: <FaMoneyBillWave />,
  security: <FaShieldAlt />,
  support: <FaHeadset />,
  backups: <FaCloudUploadAlt />,
  scale: <FaLayerGroup />,
  uptime: <FaSignal />,
};

const EverythingIncluded = () => {
  const { t } = useLanguage();

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div className={styles.header}>
          <Reveal as="p" className={styles.eyebrow}>
            {t.included.eyebrow}
          </Reveal>
          <h2 className={styles.heading}>
            <Reveal as="span" className={styles.line}>
              {t.included.headingLines[0]}
            </Reveal>
            <Reveal as="span" className={styles.line} delay={70}>
              {t.included.headingLines[1]}
            </Reveal>
          </h2>
          <Reveal as="p" className={styles.intro} delay={140}>
            {t.included.intro}
          </Reveal>
        </div>

        <div className={styles.list}>
          {t.included.items.map((item, index) => (
            <Reveal
              key={item.key}
              delay={180 + index * 40}
              className={styles.row}
            >
              <div className={styles.rowHead}>
                <span className={styles.index}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className={styles.icon}>{icons[item.key]}</span>
                <h3 className={styles.title}>{item.title}</h3>
              </div>
              <p className={styles.description}>{item.description}</p>
            </Reveal>
          ))}
        </div>
      </div>

      <div className={styles.meshBand} aria-hidden="true">
        <div className={styles.meshBandInner} />
      </div>
    </div>
  );
};

export default EverythingIncluded;
