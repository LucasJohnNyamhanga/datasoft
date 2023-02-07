import Image from "next/image";
import styles from "../styles/cardProject.module.scss";
import {
  FaStackOverflow as Pages,
  FaSuse as Type,
  FaDatabase as Database,
  FaLaptopCode as WebSite,
  FaSatellite as Live,
} from "react-icons/fa";
import { type } from "os";

type dataType = {
  image: string;
  link: string;
  projectName: string;
  projectDesc: string;
  pages: number;
  type: string;
  database: string;
  cost: string;
  active: boolean;
};

const CardProject = ({
  image,
  link,
  projectName,
  projectDesc,
  pages,
  type,
  database,
  cost,
  active,
}: dataType) => {
  return (
    <div
      className={active ? `${styles.cards} ${styles.cardHot}` : styles.cards}
    >
      <section className={styles.card}>
        <div>
          <div
            className={
              active
                ? `${styles.imgoverlay} ${styles.hothome}`
                : styles.imgoverlay
            }
          >
            <Image
              className={styles.img}
              alt={projectName}
              src={image}
              placeholder="blur"
              blurDataURL={image}
              style={{
                objectFit: "cover",
                objectPosition: "right",
                inset: "50%",
              }}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className={styles.overlay}>
              <a href="#">View Project</a>
            </div>
            <div className={styles.cont}>
              <div className={styles.iconsimg}>
                <button>
                  {" "}
                  <WebSite size={30} />{" "}
                </button>
              </div>
            </div>
          </div>
          <div className={styles.figcaption}>{projectName}</div>
        </div>
        <div className={styles.cardcontent}>
          <p>{projectDesc}</p>

          <section className={styles.iconshome}>
            <div className={styles.nameicon}>
              <span>Pages</span>
              <div className={styles.icon}>
                <Pages />
                <span>{pages}</span>
              </div>
            </div>
            <div className={styles.nameicon}>
              <span>Type</span>
              <div className={styles.icon}>
                <Type />
                <span>{type}</span>
              </div>
            </div>
            <div className={styles.nameicon}>
              <span>Database</span>
              <div className={styles.icon}>
                <Database />
                <span>{database}</span>
              </div>
            </div>
          </section>
          <section className={styles.price}>
            <span>Duration</span>
            <span>{cost}</span>
          </section>
        </div>
      </section>
    </div>
  );
};

export default CardProject;
