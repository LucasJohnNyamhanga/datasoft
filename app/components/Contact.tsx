"use client";
import axios from "axios";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import {
  FaArrowLeft,
  FaBoltLightning,
  FaCircleCheck,
  FaHeadset,
  FaShieldHalved,
} from "react-icons/fa6";
import { useLanguage } from "../i18n/LanguageContext";
import styles from "../styles/doYouHaveAnIdea.module.scss";
import Loader from "./loaderWait";
import Reveal from "./Reveal";

const emptyAnswers = {
  projectType: "",
  serviceInterest: "",
  layoutStatus: "",
  budget: "",
  timeline: "",
};

const emptyDetails = {
  fullName: "",
  email: "",
  orgName: "",
  project: "",
};

const Contact = () => {
  const { t } = useLanguage();
  const questionSteps = t.contact.steps;
  const formulaParts: { type: "term" | "op" | "eq" | "result"; text: string }[] =
    t.contact.quoteFormula.terms.flatMap((term, index) => [
      ...(index > 0 ? [{ type: "op" as const, text: "+" }] : []),
      { type: "term" as const, text: term },
    ]);
  formulaParts.push(
    { type: "eq", text: "=" },
    { type: "result", text: t.contact.quoteFormula.result },
  );
  const finalStepIndex = questionSteps.length;
  const totalSteps = questionSteps.length + 1;

  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>(emptyAnswers);
  const [details, setDetails] = useState(emptyDetails);
  const [loading, setLoad] = useState(false);
  const notifySuccess = (message: string) => toast.success(message);
  const notifyError = (message: string) => toast.error(message);

  const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const selectOption = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    setTimeout(() => {
      setStepIndex((i) => Math.min(i + 1, finalStepIndex));
    }, 220);
  };

  const goBack = () => setStepIndex((i) => Math.max(i - 1, 0));

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
      const response = await axios.post(
        "/api/email",
        { ...details, ...answers },
        config,
      );
      if (response.data.success) {
        notifySuccess(t.contact.successMessage);
        setDetails(emptyDetails);
        setAnswers(emptyAnswers);
        setStepIndex(0);
      } else {
        notifyError(t.contact.errorMessage);
      }
    } catch (error) {
      notifyError(t.contact.errorMessage);
    } finally {
      setLoad(false);
    }
  };

  const currentStep = questionSteps[stepIndex];
  const isFinalStep = stepIndex === finalStepIndex;

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

          <Reveal className={styles.trustRow} delay={110}>
            <span className={styles.trustBadge}>
              <FaCircleCheck />
              {t.contact.trust.consultation}
            </span>
            <span className={styles.trustBadge}>
              <FaBoltLightning />
              {t.contact.trust.prototype}
            </span>
            <span className={styles.trustBadge}>
              <FaHeadset />
              {t.contact.trust.support}
            </span>
            <span className={styles.trustBadge}>
              <FaShieldHalved />
              {t.contact.trust.transparency}
            </span>
          </Reveal>

          <Reveal className={styles.formula} delay={140}>
            <span className={styles.srOnly}>
              {t.contact.quoteFormula.terms.join(" + ")} ={" "}
              {t.contact.quoteFormula.result}
            </span>
            <p className={styles.formulaLine} aria-hidden="true">
              {formulaParts.map((part, index) => (
                <Reveal
                  as="span"
                  key={`${part.type}-${index}`}
                  delay={220 + index * 55}
                  className={
                    part.type === "term"
                      ? styles.formulaTerm
                      : part.type === "result"
                        ? styles.formulaResult
                        : `${styles.formulaOperator} ${
                            part.type === "eq" ? styles.formulaEquals : ""
                          }`
                  }
                >
                  {part.text}
                </Reveal>
              ))}
            </p>
          </Reveal>
        </div>

        <Reveal className={styles.contactForm} delay={100}>
          <div className={styles.progressWrap}>
            <div className={styles.progressBar}>
              <div
                className={styles.progressFill}
                style={{ width: `${((stepIndex + 1) / totalSteps) * 100}%` }}
              />
            </div>
            <span className={styles.progressLabel}>
              {t.contact.progress.step} {stepIndex + 1} {t.contact.progress.of}{" "}
              {totalSteps}
            </span>
          </div>

          {!isFinalStep && currentStep && (
            <div className={styles.stepPanel}>
              <h3 className={styles.stepQuestion}>{currentStep.question}</h3>
              <p className={styles.stepReason}>{currentStep.reason}</p>

              <div className={styles.optionsGrid}>
                {currentStep.options.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    className={`${styles.optionButton} ${
                      answers[currentStep.key] === option.value
                        ? styles.optionSelected
                        : ""
                    }`}
                    aria-pressed={answers[currentStep.key] === option.value}
                    onClick={() => selectOption(currentStep.key, option.value)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>

              {stepIndex > 0 && (
                <button
                  type="button"
                  className={styles.backButton}
                  onClick={goBack}
                >
                  <FaArrowLeft />
                  {t.contact.back}
                </button>
              )}
            </div>
          )}

          {isFinalStep && (
            <div className={styles.stepPanel}>
              <h3 className={styles.stepQuestion}>
                {t.contact.finalStep.title}
              </h3>
              <p className={styles.stepReason}>{t.contact.finalStep.reason}</p>

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
                    required
                    type="text"
                    value={details.fullName}
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
                    required
                    type="text"
                    value={details.email}
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
                    required
                    type="text"
                    value={details.orgName}
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
                    required
                    value={details.project}
                    autoComplete="off"
                    spellCheck={false}
                    onChange={handleTextArea}
                  />
                </div>

                <div className={styles.finalActions}>
                  <button
                    type="button"
                    className={styles.backButton}
                    onClick={goBack}
                  >
                    <FaArrowLeft />
                    {t.contact.back}
                  </button>

                  {loading ? (
                    <div className={`${styles.button} ${styles.loading}`}>
                      <Loader sms={t.contact.sending} />
                    </div>
                  ) : (
                    <button type="submit" className={styles.button}>
                      {t.contact.submit}
                    </button>
                  )}
                </div>
              </form>
            </div>
          )}
        </Reveal>
      </div>
    </div>
  );
};

export default Contact;
