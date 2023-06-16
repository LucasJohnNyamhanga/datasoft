import Link from "next/link";
import styles from "../styles/section.module.scss";

import { type } from "os";

type dataType = {
  header: string;
  icon: React.ReactNode;
  description: string;
  link: string;
};

const Service = ({ header, icon, description, link }: dataType) => {
  return (
    <div className={styles.container}>
      {/* <!-- START SECTION SERVICES --> */}
      <Link href={link}>
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
      </Link>
    </div>
  );
};

export default Service;
