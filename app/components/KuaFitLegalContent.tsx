"use client";
import { useLanguage } from "../i18n/LanguageContext";
import { kuafitDictionaries } from "../i18n/kuafit";
import Reveal from "./Reveal";
import styles from "../styles/kuafitLegalContent.module.scss";

// The reading body for both KuaFit legal pages. Deliberately NOT an
// accordion (the app's own "tap a section" pattern) — hiding legal text
// behind clicks fights the reader's actual task here: scan, Ctrl+F, quote
// a clause back to support, or print the page. Instead: a sticky
// jump-to-section index (same two-column, sticky-sidebar composition as
// FAQ.tsx) sitting next to every section rendered open, full text, at
// once. Section numerals reuse the portfolio's 01-04 Fraunces-numeral
// device rather than inventing new chrome for this one page.

type KuaFitLegalContentProps = {
  docKey: "privacyPolicy" | "termsOfService";
};

const KuaFitLegalContent = ({ docKey }: KuaFitLegalContentProps) => {
  const { locale } = useLanguage();
  const kuafit = kuafitDictionaries[locale];
  const doc = kuafit[docKey];

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <div className={styles.layout}>
          <div className={styles.toc}>
            <Reveal as="p" className={styles.tocLabel}>
              {doc.tocLabel}
            </Reveal>
            <nav aria-label={doc.tocLabel} className={styles.tocList}>
              {doc.sections.map((section, index) => (
                <Reveal key={section.title} delay={index * 20} className={styles.tocItem}>
                  <a href={`#section-${index}`} className={styles.tocLink}>
                    <span className={styles.tocIndex}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {section.title}
                  </a>
                </Reveal>
              ))}
            </nav>
          </div>

          <div className={styles.body}>
            <Reveal as="p" className={styles.intro}>
              {doc.intro}
            </Reveal>

            <div className={styles.list}>
              {doc.sections.map((section, index) => (
                <section key={section.title} id={`section-${index}`} className={styles.itemAnchor}>
                  <Reveal delay={index * 30} className={styles.item}>
                    <span className={styles.index} aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className={styles.itemTitle}>{section.title}</h2>
                    <p className={styles.itemBody}>{section.body}</p>
                  </Reveal>
                </section>
              ))}
            </div>

            <Reveal className={styles.support}>
              <p className={styles.supportHeading}>{doc.contact.heading}</p>
              <p className={styles.supportBody}>{doc.contact.body}</p>
              <a href={kuafit.phoneHref} className={styles.supportPhone}>
                {doc.contact.phoneLabel}
                <span aria-hidden="true">&rarr;</span>
                <span className={styles.supportNumber}>{kuafit.phone}</span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KuaFitLegalContent;
