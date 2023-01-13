import styles from "../styles/hero.module.scss";
import Image from "next/image";

type dataHero = {
  header: string;
  image: string;
};

function hero({ image }: dataHero) {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <div className={styles.hero}>
          <div className={styles.image}>
            <Image
              alt=""
              src={image}
              placeholder="blur"
              blurDataURL={image}
              fill
              sizes={"100vw"}
              style={{
                objectFit: "cover",
                objectPosition: "right",
              }}
              quality={100}
            />
          </div>
        </div>
        <div className={styles.background}>
          WHERE CREATIVITY MEETS TECHNOLOGY
        </div>
      </div>
    </div>
  );
}

export default hero;
