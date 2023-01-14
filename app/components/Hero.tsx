import styles from "../styles/hero.module.scss";
import Image from "next/image";

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
              priority
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
                  data-text="L"
                >
                  L
                </span>
                <span
                  className={`${styles.glitch} ${styles.character}`}
                  data-text="e"
                >
                  e
                </span>
                <span
                  className={`${styles.glitch} ${styles.character}`}
                  data-text="t"
                >
                  t
                </span>
                <span
                  className={`${styles.glitch} ${styles.character}`}
                  data-text="'"
                >
                  {`'`}
                </span>
                <span
                  className={`${styles.glitch} ${styles.character}`}
                  data-text="s"
                >
                  s
                </span>
              </div>
              <span
                className={`${styles.glitch} ${styles.character}`}
                data-text=""
              >
                &nbsp;
              </span>

              <div className={`${styles.block}`}>
                <span
                  className={`${styles.glitch} ${styles.character}`}
                  data-text="b"
                >
                  b
                </span>
                <span
                  className={`${styles.glitch} ${styles.character}`}
                  data-text="r"
                >
                  r
                </span>
                <span
                  className={`${styles.glitch} ${styles.character}`}
                  data-text="i"
                >
                  i
                </span>
                <span
                  className={`${styles.glitch} ${styles.character}`}
                  data-text="n"
                >
                  n
                </span>
                <span
                  className={`${styles.glitch} ${styles.character}`}
                  data-text="g"
                >
                  g
                </span>
              </div>
              <span
                className={`${styles.glitch} ${styles.character}`}
                data-text=""
              >
                &nbsp;
              </span>

              <div className={`${styles.block}`}>
                <span
                  className={`${styles.glitch} ${styles.character}`}
                  data-text="y"
                >
                  y
                </span>
                <span
                  className={`${styles.glitch} ${styles.character}`}
                  data-text="o"
                >
                  o
                </span>
                <span
                  className={`${styles.glitch} ${styles.character}`}
                  data-text="u"
                >
                  u
                </span>
                <span
                  className={`${styles.glitch} ${styles.character}`}
                  data-text="r"
                >
                  r
                </span>
              </div>
              <span
                className={`${styles.glitch} ${styles.character}`}
                data-text=""
              >
                &nbsp;
              </span>

              <div className={`${styles.block}`}>
                <span
                  className={`${styles.glitch} ${styles.character}`}
                  data-text="i"
                >
                  i
                </span>
                <span
                  className={`${styles.glitch} ${styles.character}`}
                  data-text="d"
                >
                  d
                </span>
                <span
                  className={`${styles.glitch} ${styles.character}`}
                  data-text="e"
                >
                  e
                </span>
                <span
                  className={`${styles.glitch} ${styles.character}`}
                  data-text="a"
                >
                  a
                </span>
                <span
                  className={`${styles.glitch} ${styles.character}`}
                  data-text="s"
                >
                  s
                </span>
              </div>
              <span
                className={`${styles.glitch} ${styles.character}`}
                data-text=""
              >
                &nbsp;
              </span>

              <div className={`${styles.block}`}>
                <span
                  className={`${styles.glitch} ${styles.character}`}
                  data-text="t"
                >
                  t
                </span>
                <span
                  className={`${styles.glitch} ${styles.character}`}
                  data-text="o"
                >
                  o
                </span>
              </div>
              <span
                className={`${styles.glitch} ${styles.character}`}
                data-text=""
              >
                &nbsp;
              </span>
              <div className={`${styles.block}`}>
                <span
                  className={`${styles.glitch} ${styles.character}`}
                  data-text="l"
                >
                  l
                </span>
                <span
                  className={`${styles.glitch} ${styles.character}`}
                  data-text="i"
                >
                  i
                </span>
                <span
                  className={`${styles.glitch} ${styles.character}`}
                  data-text="f"
                >
                  f
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
          <p>
            We are innovators, creators, technological makers. We turn ideas
            into full effecient working technological solution, that are
            customized to meet your company’s organizational needs, highlight
            its core competencies, and further its success.
          </p>
          <div>
            <a
              className={`${styles.button} ${styles.buttonStyle}`}
              data-hover="Okey, let's do this."
            >
              {`Let's work together.`}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default hero;

// {
//   `Let's bring your idea to life.`;
// }
