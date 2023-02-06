"use client";
import { useRef } from "react";
import styles from "../styles/doYouHaveAnIdea.module.scss";

const DoYouHaveAnIdea = () => {
  const fullName = useRef<HTMLInputElement>(null!);
  const email = useRef<HTMLInputElement>(null!);
  const orgName = useRef<HTMLInputElement>(null!);
  const project = useRef<HTMLTextAreaElement>(null!);

  let handletext = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    let name = e.target.name;
  };

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
        <div className={styles.contact}>
          <div className={styles.contactHeder}>
            <h2>
              BRIEF US<span>!</span>{" "}
            </h2>
            <div className={styles.line} />
            <p className={styles.details}>
              We can bring your idea to life within hours!. And together we may
              celebrate your success.
            </p>
          </div>
          <div className={styles.contactForm}>
            <div className={styles.inputBox}>
              <input
                ref={fullName}
                required
                type="text"
                value={""}
                placeholder={``}
                name={`password`}
                onChange={(event) => {
                  handletext(event);
                }}
                autoComplete="off"
                autoCorrect="off"
                spellCheck={false}
              />
              <span>Full Name</span>
            </div>
            <div className={styles.inputBox}>
              <input
                ref={email}
                required
                type="text"
                value={""}
                placeholder={``}
                name={`password`}
                onChange={(event) => {
                  handletext(event);
                }}
                autoComplete="off"
                autoCorrect="off"
                spellCheck={false}
              />
              <span>Phone Number | Email</span>
            </div>
            <div className={styles.inputBox}>
              <input
                ref={orgName}
                required
                type="text"
                value={""}
                placeholder={``}
                name={`password`}
                onChange={(event) => {
                  handletext(event);
                }}
                autoComplete="off"
                autoCorrect="off"
                spellCheck={false}
              />
              <span>Organisation Name</span>
            </div>
            <div className={styles.inputBox}>
              <textarea
                name="Text1"
                cols={40}
                rows={5}
                ref={project}
                required
                value={""}
                placeholder={``}
                autoComplete="off"
                autoCorrect="off"
                spellCheck={false}
              />
              <span>Project Details</span>
            </div>
            <button className={`${styles.button} ${styles.light}`}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoYouHaveAnIdea;
