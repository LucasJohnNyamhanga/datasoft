"use client";
import { useRef, useState } from "react";
import styles from "../styles/doYouHaveAnIdea.module.scss";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Loader from "./loaderWait";
import Reveal from "./Reveal";
import { useLanguage } from "../i18n/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    orgName: "",
    project: "",
  });
  const [loading, setLoad] = useState(false);
  const notifySuccess = (message: string) => toast.success(message);
  const notifyError = (message: string) => toast.error(message);

  const fullName = useRef<HTMLInputElement>(null!);
  const email = useRef<HTMLInputElement>(null!);
  const orgName = useRef<HTMLInputElement>(null!);
  const project = useRef<HTMLTextAreaElement>(null!);

  const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async () => {
    if (loading) return;
    setLoad(true);

    const config = {
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await axios.post("/api/email", formData, config);
      if (response.data.success) {
        notifySuccess(t.contact.successMessage);
        setFormData({ fullName: "", email: "", orgName: "", project: "" });
      } else {
        notifyError(t.contact.errorMessage);
      }
    } catch (error) {
      notifyError(t.contact.errorMessage);
    } finally {
      setLoad(false);
    }
  };

  return (
    <div className={styles.container} id="idea">
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#0D2C4E",
            color: "#FBF6E7",
            border: "1px solid #2C5A8C",
          },
          success: { iconTheme: { primary: "#2E6FB8", secondary: "#FBF6E7" } },
          error: { iconTheme: { primary: "#C1432B", secondary: "#FBF6E7" } },
        }}
      />
      <div className={styles.subContainer}>
        <div className={styles.intro}>
          <Reveal as="p" className={styles.eyebrow}>
            {t.contact.eyebrow}
          </Reveal>
          <Reveal as="h2" className={styles.heading}>
            {t.contact.heading}
          </Reveal>
          <Reveal as="p" className={styles.details} delay={80}>
            {t.contact.intro}
          </Reveal>

          <Reveal className={styles.quotation} delay={140}>
            <FaQuoteLeft className={styles.quoteMark} />
            <p>{t.contact.quote}</p>
            <FaQuoteRight className={styles.quoteMark} />
          </Reveal>
        </div>

        <Reveal className={styles.contactForm} delay={100}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit();
            }}
          >
            <div className={styles.inputBox}>
              <label htmlFor="fullName">{t.contact.fields.fullName}</label>
              <input
                id="fullName"
                ref={fullName}
                required
                type="text"
                value={formData.fullName}
                name="fullName"
                onChange={handleText}
                autoComplete="off"
                spellCheck={false}
              />
            </div>
            <div className={styles.inputBox}>
              <label htmlFor="email">{t.contact.fields.contact}</label>
              <input
                id="email"
                ref={email}
                required
                type="text"
                value={formData.email}
                name="email"
                onChange={handleText}
                autoComplete="off"
                spellCheck={false}
              />
            </div>
            <div className={styles.inputBox}>
              <label htmlFor="orgName">{t.contact.fields.orgName}</label>
              <input
                id="orgName"
                ref={orgName}
                required
                type="text"
                value={formData.orgName}
                name="orgName"
                onChange={handleText}
                autoComplete="off"
                spellCheck={false}
              />
            </div>
            <div className={styles.inputBox}>
              <label htmlFor="project">{t.contact.fields.project}</label>
              <textarea
                id="project"
                name="project"
                rows={5}
                ref={project}
                required
                value={formData.project}
                autoComplete="off"
                spellCheck={false}
                onChange={handleTextArea}
              />
            </div>

            {loading ? (
              <div className={`${styles.button} ${styles.loading}`}>
                <Loader sms={t.contact.sending} />
              </div>
            ) : (
              <button type="submit" className={styles.button}>
                {t.contact.submit}
              </button>
            )}
          </form>
        </Reveal>
      </div>
    </div>
  );
};

export default Contact;
