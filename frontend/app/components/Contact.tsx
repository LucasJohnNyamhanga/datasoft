"use client";
import axios from "axios";
import { useRef, useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import {
  FaArrowLeft,
  FaBoltLightning,
  FaCircleCheck,
  FaHeadset,
  FaPhone,
  FaShieldHalved,
  FaTriangleExclamation,
} from "react-icons/fa6";
import {
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_HREF,
  CONTACT_WHATSAPP_HREF,
} from "../constants/contact";
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

type FieldName = keyof typeof emptyDetails;
type SubmitStatus = "idle" | "success" | "error";

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const isPhoneLike = (value: string) => {
  const digitCount = value.replace(/\D/g, "").length;
  return digitCount >= 7 && /^[+()\-\s\d]+$/.test(value);
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
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [loading, setLoad] = useState(false);
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const fieldRefs = {
    fullName: useRef<HTMLInputElement>(null),
    email: useRef<HTMLInputElement>(null),
    orgName: useRef<HTMLInputElement>(null),
    project: useRef<HTMLTextAreaElement>(null),
  };

  const errorMessageFor = (name: FieldName): string =>
    name === "email" ? t.contact.errors.contact : t.contact.errors[name];

  const validateField = (name: FieldName, rawValue: string): string | undefined => {
    const value = rawValue.trim();
    const invalid =
      name === "fullName"
        ? value.length < 2
        : name === "email"
          ? !isEmail(value) && !isPhoneLike(value)
          : name === "orgName"
            ? value.length === 0
            : value.length < 10;

    return invalid ? errorMessageFor(name) : undefined;
  };

  const handleFieldChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target as { name: FieldName; value: string };
    setDetails((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) =>
      prev[name] ? { ...prev, [name]: validateField(name, value) } : prev,
    );
  };

  const handleFieldBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target as { name: FieldName; value: string };
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const notifySuccess = () => setStatus("success");
  const notifyError = () => setStatus("error");

  const selectOption = (key: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    setTimeout(() => {
      setStepIndex((i) => Math.min(i + 1, finalStepIndex));
    }, 220);
  };

  const goBack = () => setStepIndex((i) => Math.max(i - 1, 0));

  const resetForm = () => {
    setDetails(emptyDetails);
    setAnswers(emptyAnswers);
    setErrors({});
    setStepIndex(0);
    setStatus("idle");
  };

  const retry = () => setStatus("idle");

  const onSubmit = async () => {
    if (loading) return;

    const fieldNames: FieldName[] = ["fullName", "email", "orgName", "project"];
    const nextErrors: Partial<Record<FieldName, string>> = {};
    fieldNames.forEach((name) => {
      const message = validateField(name, details[name]);
      if (message) nextErrors[name] = message;
    });

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      const firstInvalid = fieldNames.find((name) => nextErrors[name]);
      if (firstInvalid) fieldRefs[firstInvalid].current?.focus();
      return;
    }

    setLoad(true);

    const config = {
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
        { ...details, ...answers },
        config,
      );
      if (response.data.success) {
        notifySuccess();
      } else {
        notifyError();
      }
    } catch (error) {
      if (
        axios.isAxiosError(error) &&
        error.response?.status === 422 &&
        error.response.data?.errors
      ) {
        const serverErrors = error.response.data.errors as Record<string, string[]>;
        const mapped: Partial<Record<FieldName, string>> = {};
        fieldNames.forEach((name) => {
          if (serverErrors[name]?.length) mapped[name] = errorMessageFor(name);
        });
        setErrors((prev) => ({ ...prev, ...mapped }));
        const firstInvalid = fieldNames.find((name) => mapped[name]);
        if (firstInvalid) fieldRefs[firstInvalid].current?.focus();
      } else {
        notifyError();
      }
    } finally {
      setLoad(false);
    }
  };

  const currentStep = questionSteps[stepIndex];
  const isFinalStep = stepIndex === finalStepIndex;
  const successBody = t.contact.success.body.replace("{name}", details.fullName);

  return (
    <div className={styles.container} id="idea">
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
          {status === "success" ? (
            <div className={styles.feedbackPanel} key="success" role="status">
              <FaCircleCheck
                className={`${styles.feedbackIcon} ${styles.feedbackIconSuccess}`}
                aria-hidden="true"
              />
              <h3 className={styles.feedbackTitle}>{t.contact.success.title}</h3>
              <p className={styles.feedbackBody}>{successBody}</p>
              {details.email && (
                <p className={styles.feedbackMeta}>
                  {t.contact.success.replyNote}{" "}
                  <span className={styles.feedbackMetaValue}>{details.email}</span>
                </p>
              )}
              <button type="button" className={styles.button} onClick={resetForm}>
                {t.contact.success.reset}
              </button>
            </div>
          ) : status === "error" ? (
            <div className={styles.feedbackPanel} key="error" role="alert">
              <FaTriangleExclamation
                className={`${styles.feedbackIcon} ${styles.feedbackIconError}`}
                aria-hidden="true"
              />
              <h3 className={styles.feedbackTitle}>{t.contact.failure.title}</h3>
              <p className={styles.feedbackBody}>{t.contact.failure.body}</p>
              <div className={styles.feedbackActions}>
                <button type="button" className={styles.button} onClick={retry}>
                  {t.contact.failure.retry}
                </button>
                <a href={CONTACT_PHONE_HREF} className={styles.ghostLink}>
                  <FaPhone />
                  {CONTACT_PHONE_DISPLAY}
                </a>
                <a
                  href={CONTACT_WHATSAPP_HREF}
                  className={styles.ghostLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsWhatsapp />
                  {t.contact.failure.whatsapp}
                </a>
              </div>
            </div>
          ) : (
            <>
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
                    noValidate
                    onSubmit={(e) => {
                      e.preventDefault();
                      onSubmit();
                    }}
                  >
                    <div
                      className={`${styles.inputBox} ${errors.fullName ? styles.hasError : ""}`}
                    >
                      <label htmlFor="fullName">{t.contact.fields.fullName}</label>
                      <input
                        id="fullName"
                        ref={fieldRefs.fullName}
                        required
                        type="text"
                        value={details.fullName}
                        name="fullName"
                        placeholder={t.contact.placeholder}
                        onChange={handleFieldChange}
                        onBlur={handleFieldBlur}
                        autoComplete="off"
                        spellCheck={false}
                        aria-invalid={Boolean(errors.fullName)}
                        aria-describedby={errors.fullName ? "fullName-error" : undefined}
                      />
                      {errors.fullName && (
                        <p id="fullName-error" className={styles.errorText} role="alert">
                          {errors.fullName}
                        </p>
                      )}
                    </div>
                    <div
                      className={`${styles.inputBox} ${errors.email ? styles.hasError : ""}`}
                    >
                      <label htmlFor="email">{t.contact.fields.contact}</label>
                      <input
                        id="email"
                        ref={fieldRefs.email}
                        required
                        type="text"
                        value={details.email}
                        name="email"
                        placeholder={t.contact.placeholder}
                        onChange={handleFieldChange}
                        onBlur={handleFieldBlur}
                        autoComplete="off"
                        spellCheck={false}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? "email-error" : undefined}
                      />
                      {errors.email && (
                        <p id="email-error" className={styles.errorText} role="alert">
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <div
                      className={`${styles.inputBox} ${errors.orgName ? styles.hasError : ""}`}
                    >
                      <label htmlFor="orgName">{t.contact.fields.orgName}</label>
                      <input
                        id="orgName"
                        ref={fieldRefs.orgName}
                        required
                        type="text"
                        value={details.orgName}
                        name="orgName"
                        placeholder={t.contact.placeholder}
                        onChange={handleFieldChange}
                        onBlur={handleFieldBlur}
                        autoComplete="off"
                        spellCheck={false}
                        aria-invalid={Boolean(errors.orgName)}
                        aria-describedby={errors.orgName ? "orgName-error" : undefined}
                      />
                      {errors.orgName && (
                        <p id="orgName-error" className={styles.errorText} role="alert">
                          {errors.orgName}
                        </p>
                      )}
                    </div>
                    <div
                      className={`${styles.inputBox} ${errors.project ? styles.hasError : ""}`}
                    >
                      <label htmlFor="project">{t.contact.fields.project}</label>
                      <textarea
                        id="project"
                        ref={fieldRefs.project}
                        name="project"
                        rows={5}
                        required
                        value={details.project}
                        placeholder={t.contact.placeholder}
                        autoComplete="off"
                        spellCheck={false}
                        onChange={handleFieldChange}
                        onBlur={handleFieldBlur}
                        aria-invalid={Boolean(errors.project)}
                        aria-describedby={errors.project ? "project-error" : undefined}
                      />
                      {errors.project && (
                        <p id="project-error" className={styles.errorText} role="alert">
                          {errors.project}
                        </p>
                      )}
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
            </>
          )}
        </Reveal>
      </div>
    </div>
  );
};

export default Contact;
