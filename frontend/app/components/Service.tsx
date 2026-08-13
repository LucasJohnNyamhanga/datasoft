"use client";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import styles from "../styles/section.module.scss";

type ServiceProps = {
  header: string;
  tag?: string;
  accent?: string;
  numeral: string;
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
  numeral,
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
      <div className={styles.top}>
        <span className={styles.icon}>{icon}</span>
        <span className={styles.numeral} aria-hidden="true">
          {numeral}
        </span>
      </div>
      {tag && <span className={styles.tag}>{tag}</span>}
      <h3 className={styles.title}>{header}</h3>
      <p className={styles.description}>{description}</p>
      <span className={styles.learnMore}>
        {learnMore}
        <FaArrowRight className={styles.learnMoreIcon} size={10} aria-hidden="true" />
      </span>
    </Link>
  );
};

export default Service;
