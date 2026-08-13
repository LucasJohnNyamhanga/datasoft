"use client";
import { useState } from "react";
import styles from "../styles/faq.module.scss";
import Reveal from "./Reveal";
import { useLanguage } from "../i18n/LanguageContext";
import type { ExtendedServiceKey } from "../i18n/translations";

type FAQProps = {
  // Defaults to the homepage's generic FAQ; service pages pass their own
  // service key so the questions match objections specific to that page
  // instead of repeating what a visitor already saw on Home. Resolved via
  // useLanguage (not passed as a static content object) so it stays in
  // sync when the visitor toggles language. Networking uses NetworkFAQ
  // instead, since its content lives in a separate dictionary file.
  serviceKey?: ExtendedServiceKey;
};

const FAQ = ({ serviceKey }: FAQProps) => {
  const { t } = useLanguage();
  const faq = (serviceKey ? t.services[serviceKey].faq : undefined) ?? t.faq;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className={styles.container} id="faq">
      <div className={styles.subContainer}>
        <div className={styles.layout}>
          <div className={styles.intro}>
            <Reveal as="p" className={styles.eyebrow}>
              {faq.eyebrow}
            </Reveal>
            <Reveal as="h2" className={styles.heading}>
              {faq.heading}
            </Reveal>
            <Reveal as="p" className={styles.description} delay={80}>
              {faq.intro}
            </Reveal>
            <Reveal delay={140}>
              <a href="#idea" className={styles.contactLink}>
                {faq.contactPrompt}
                <span className={styles.arrow} aria-hidden="true">
                  &rarr;
                </span>
              </a>
            </Reveal>
          </div>

          <div className={styles.list}>
            {faq.items.map((item, index) => {
              const isOpen = openIndex === index;
              const buttonId = `faq-button-${index}`;
              const panelId = `faq-panel-${index}`;

              return (
                <Reveal
                  key={item.question}
                  delay={index * 40}
                  className={styles.item}
                >
                  <h3 className={styles.itemHeading}>
                    <button
                      type="button"
                      id={buttonId}
                      className={styles.trigger}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggle(index)}
                    >
                      <span className={styles.index}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className={styles.question}>{item.question}</span>
                      <span
                        className={`${styles.toggle} ${
                          isOpen ? styles.toggleOpen : ""
                        }`}
                        aria-hidden="true"
                      >
                        <span />
                        <span />
                      </span>
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`${styles.answerWrap} ${
                      isOpen ? styles.open : ""
                    }`}
                  >
                    <div className={styles.answerInner}>
                      <p className={styles.answer}>{item.answer}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
