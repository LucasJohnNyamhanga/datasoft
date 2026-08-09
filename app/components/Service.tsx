"use client";
import Link from "next/link";
import styles from "../styles/section.module.scss";

type ServiceProps = {
  header: string;
  tag?: string;
  accent?: string;
  icon: React.ReactNode;
  description: string;
  link: string;
  learnMore: string;
  featured?: boolean;
};

const Service = ({
  header,
  tag,
  accent,
  icon,
  description,
  link,
  learnMore,
  featured,
}: ServiceProps) => {
  return (
    <Link
      href={link}
      data-accent={accent}
      className={`${styles.card} ${featured ? styles.featured : ""}`}
    >
      <span className={styles.icon}>{icon}</span>
      {tag && <span className={styles.tag}>{tag}</span>}
      <h3 className={styles.title}>{header}</h3>
      <p className={styles.description}>{description}</p>
      <span className={styles.learnMore}>{learnMore}</span>
    </Link>
  );
};

export default Service;
