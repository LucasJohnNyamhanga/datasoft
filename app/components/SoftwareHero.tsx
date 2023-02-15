import styles from "../styles/softwareHero.module.scss";
import Image from "next/image";
import Link from "next/link";

type dataHero = {
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
              style={{
                objectFit: "cover",
                objectPosition: "right",
              }}
              quality={100}
              priority={true}
              unoptimized={true}
              fill
            />
          </div>
        </div>
        <div className={styles.background}>
          <h1>
            <div className="title-glitch-top">
              <div className={`${styles.block}`}>
                <span
                  className={`${styles.glitch} ${styles.character}`}
                  data-text="S"
                >
                  S
                </span>
                <span
                  className={`${styles.glitch} ${styles.character}`}
                  data-text="o"
                >
                  o
                </span>
                <span
                  className={`${styles.glitch} ${styles.character}`}
                  data-text="f"
                >
                  f
                </span>
                <span
                  className={`${styles.glitch} ${styles.character}`}
                  data-text="t"
                >
                  t
                </span>
                <span
                  className={`${styles.glitch} ${styles.character}`}
                  data-text="w"
                >
                  w
                </span>
              </div>

              <div className={`${styles.block}`}>
                <span
                  className={`${styles.glitch} ${styles.character}`}
                  data-text="a"
                >
                  a
                </span>
                <span
                  className={`${styles.glitch} ${styles.character}`}
                  data-text="r"
                >
                  r
                </span>
                <span
                  className={`${styles.glitch} ${styles.character}`}
                  data-text="e"
                >
                  e
                </span>
              </div>
            </div>
          </h1>
          <h1>
            <div className="title-glitch-top">
              <div className={`${styles.block}`}>
                <span
                  className={`${styles.glitch} ${styles.character}`}
                  data-text="D"
                >
                  D
                </span>
                <span
                  className={`${styles.glitch} ${styles.character}`}
                  data-text="e"
                >
                  e
                </span>
                <span
                  className={`${styles.glitch} ${styles.character}`}
                  data-text="v"
                >
                  v
                </span>
                <span
                  className={`${styles.glitch} ${styles.character}`}
                  data-text="e"
                >
                  e
                </span>
                <span
                  className={`${styles.glitch} ${styles.character}`}
                  data-text="l"
                >
                  l
                </span>
                <span
                  className={`${styles.glitch} ${styles.character}`}
                  data-text="o"
                >
                  o
                </span>
                <span
                  className={`${styles.glitch} ${styles.character}`}
                  data-text="p"
                >
                  p
                </span>
                <span
                  className={`${styles.glitch} ${styles.character}`}
                  data-text="m"
                >
                  m
                </span>
                <span
                  className={`${styles.glitch} ${styles.character}`}
                  data-text="e"
                >
                  e
                </span>
                <span
                  className={`${styles.glitch} ${styles.character}`}
                  data-text="n"
                >
                  n
                </span>
                <span
                  className={`${styles.glitch} ${styles.character}`}
                  data-text="t"
                >
                  t
                </span>
              </div>
            </div>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default hero;

// {
//   `Let's bring your idea to life.`;
// }
