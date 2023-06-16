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
      <Link href={link} className={styles.learnmore}>
        {/* <!-- START SECTION SERVICES --> */}
        <section className={styles.sectionservices}>
          {/* <!-- Single Service --> */}
          <div className={styles.cover}>
            <div className={styles.singleservice}>
              <div className={styles.content}>
                <span className={styles.icon}>{icon}</span>
                <h3 className={styles.title}>{header}</h3>
                <p className={styles.description}>{description}</p>
                <Link href={link} className={styles.learnmore}>
                  Learn More
                </Link>
              </div>
              <span className={styles.circlebefore}></span>
            </div>
          </div>
          {/* <!-- / End Single Service --> */}
        </section>
      </Link>
    </div>
  );
};

export default Service;
