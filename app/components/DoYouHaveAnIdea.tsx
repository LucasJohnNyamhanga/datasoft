"use client";
import { useRef, useState } from "react";
import styles from "../styles/doYouHaveAnIdea.module.scss";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Loader from "../components/loaderWait";

const DoYouHaveAnIdea = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    orgName: "",
    project: "",
  });
  const [loading, setLoad] = useState(false);
  const notify = (message: string) => toast(message);
  const notifySuccess = (message: string) => toast.success(message);
  const notifyError = (message: string) => toast.error(message);

  const fullName = useRef<HTMLInputElement>(null!);
  const email = useRef<HTMLInputElement>(null!);
  const orgName = useRef<HTMLInputElement>(null!);
  const project = useRef<HTMLTextAreaElement>(null!);

  let handletext = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    let name = e.target.name;

    setFormData({ ...formData, [name]: value });
  };

  let handletextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let value = e.target.value;
    let name = e.target.name;

    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async () => {
    if (!loading) {
      setLoad(true);

      const config = {
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      };
      const url = "/api/email";
      const data = formData;

      axios
        .post(url, data, config)
        .then(function (response) {
          // const topics: [] = JSON.parse(JSON.stringify(response.data));
          // handle success
          if (response.data.success) {
            notifySuccess(response.data.message);
          } else {
            notifyError(response.data.message);
          }
        })
        .catch(function (error) {
          // handle error
          notifyError("Sending Failed, Try Later.");
        })
        .then(function () {
          // always executed
          setLoad(false);
        });
    }
  };

  return (
    <div className={styles.container} id="idea">
      <Toaster position="top-center" />
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
            <div className={styles.quotation}>
              <div className={styles.quoteLeft}>
                <FaQuoteLeft />
              </div>
              <div className={styles.qouteText}>
                Right Idea + Right Product + Right Market = Magic
              </div>
              <div className={styles.quoteRight}>
                <FaQuoteRight />
              </div>
            </div>
          </div>
          <div className={styles.contactForm}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                onSubmit();
              }}
            >
              <div className={styles.inputBox}>
                <input
                  ref={fullName}
                  required
                  type="text"
                  value={formData.fullName}
                  placeholder={``}
                  name={`fullName`}
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
                  value={formData.email}
                  placeholder={``}
                  name={`email`}
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
                  value={formData.orgName}
                  placeholder={``}
                  name={`orgName`}
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
                  name="project"
                  cols={40}
                  rows={5}
                  ref={project}
                  required
                  value={formData.project}
                  placeholder={``}
                  autoComplete="off"
                  autoCorrect="off"
                  spellCheck={false}
                  onChange={(event) => {
                    handletextArea(event);
                  }}
                />
                <span>Project Details</span>
              </div>
              {loading ? (
                <div className={`${styles.button} ${styles.light}`}>
                  <Loader sms={"Sending Mail"} />
                </div>
              ) : (
                <input
                  type="submit"
                  value="Send"
                  className={`${styles.button} ${styles.light}`}
                />
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoYouHaveAnIdea;
