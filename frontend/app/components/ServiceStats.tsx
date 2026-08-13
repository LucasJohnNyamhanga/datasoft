"use client";
import styles from "../styles/serviceStats.module.scss";
import Reveal from "./Reveal";
import StatValue from "./StatValue";
import { useLanguage } from "../i18n/LanguageContext";
import type { ExtendedServiceKey } from "../i18n/translations";

type ServiceStatsProps = {
  serviceKey: ExtendedServiceKey;
};

// Generic stat strip shared by the Software, Hosting and Graphics service
// pages — mirrors NetworkStats' layout and register so all four service
// pages open with the same rhythm (hero -> stat strip -> capabilities).
// Reads content live via useLanguage (rather than being passed props from
// the server-rendered page.tsx) so it stays in sync when the visitor
// toggles language, exactly like every other service section already does.
// Networking keeps its own component since it sources copy from a separate
// dictionary file rather than translations.ts.

const ServiceStats = ({ serviceKey }: ServiceStatsProps) => {
  const { t } = useLanguage();
  const stats = t.services[serviceKey].stats;
  if (!stats) return null;

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        {stats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 60} className={styles.stat}>
            <span className={styles.value}>
              <StatValue value={stat.value} />
            </span>
            <span className={styles.label}>{stat.label}</span>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default ServiceStats;
