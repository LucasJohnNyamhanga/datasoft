"use client";
import Link from "next/link";
import styles from "../styles/section.module.scss";
import { useRouter } from "next/navigation";

type dataType = {
  header: string;
  icon: React.ReactNode;
  description: string;
  link: string;
};

const Service = ({ header, icon, description, link }: dataType) => {
  const router = useRouter();

  const handleNavigation = (nav: string) => {
    router.push(nav);
  };

  return (
    <div
      className={styles.container}
      style={{ cursor: "pointer" }}
      onClick={(e) => {
        handleNavigation(link);
      }}
    >
      {/* <!-- START SECTION SERVICES --> */}
      <div className={styles.sectionservices}>
        {/* <!-- Single Service --> */}
        <div className={styles.cover}>
          <div className={styles.singleservice}>
            <div className={styles.content}>
              <span className={styles.icon}>{icon}</span>
              <h3 className={styles.title}>{header}</h3>
              <p className={styles.description}>{description}</p>
              <a className={styles.learnmore}>Learn More</a>
            </div>
            <span className={styles.circlebefore}></span>
          </div>
        </div>
        {/* <!-- / End Single Service --> */}
      </div>
    </div>
  );
};

export default Service;
