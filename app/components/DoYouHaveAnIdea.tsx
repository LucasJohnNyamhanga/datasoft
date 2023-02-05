import React from "react";
import styles from "../styles/doYouHaveAnIdea.module.scss";

const DoYouHaveAnIdea = () => {
  return (
    <div className={styles.container} id="idea">
      <div className={styles.subContainer}>
        <h2>
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
                data-text="o"
              >
                o
              </span>
            </div>
            <div className={`${styles.block}`}>
              <span
                className={`${styles.glitch} ${styles.character}`}
                data-text=""
              >
                &nbsp;
              </span>
            </div>
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
            </div>
            <div className={`${styles.block}`}>
              <span
                className={`${styles.glitch} ${styles.character}`}
                data-text=""
              >
                &nbsp;
              </span>
            </div>
            <div className={`${styles.block}`}>
              <span
                className={`${styles.glitch} ${styles.character}`}
                data-text="h"
              >
                h
              </span>
              <span
                className={`${styles.glitch} ${styles.character}`}
                data-text="a"
              >
                a
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
            </div>
            <div className={`${styles.block}`}>
              <span
                className={`${styles.glitch} ${styles.character}`}
                data-text=""
              >
                &nbsp;
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
                data-text="n"
              >
                n
              </span>
            </div>
            <div className={`${styles.block}`}>
              <span
                className={`${styles.glitch} ${styles.character}`}
                data-text=""
              >
                &nbsp;
              </span>
            </div>
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
                data-text="?"
              >
                ?
              </span>
            </div>
          </div>
        </h2>
      </div>
      <div className={styles.innerContainer}>
        <p className={styles.details}>
          Brief us and we can bring your idea to life within days and together
          we may celebrate your success.
        </p>
      </div>
    </div>
  );
};

export default DoYouHaveAnIdea;
