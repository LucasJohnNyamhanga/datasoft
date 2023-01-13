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
          <h1>{`Let's bring your idea to life.`}</h1>
          <p>
            We are innovators, creators, technological makers. We turn ideas
            into full effeciently working software, that are customized to meet
            your company’s organizational needs, highlight its core
            competencies, and further its success.
          </p>
          <p>Lets work together.</p>
        </div>
      </div>
    </div>
  );
}

export default hero;
