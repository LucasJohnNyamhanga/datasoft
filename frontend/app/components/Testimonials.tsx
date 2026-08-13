"use client";
import styles from "../styles/testimonials.module.scss";
import Reveal from "./Reveal";
import { useLanguage } from "../i18n/LanguageContext";

// Client testimonials: real names/locations for Godwin Marko Shauri (Kasulu,
// Kigoma) and Benson Godfrey (Kuafit Gym, Njiro, Arusha) come from the user
// directly; the remaining entries and every quote are illustrative
// placeholders (per user direction, 2026-08-09) standing in until real
// testimonial text is supplied — see PRODUCT.md.

const initials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

const Testimonials = () => {
  const { t } = useLanguage();

  return (
    <div className={styles.container} id="testimonials">
      <div className={styles.subContainer}>
        <Reveal as="p" className={styles.eyebrow}>
          {t.testimonials.eyebrow}
        </Reveal>
        <Reveal as="h2" className={styles.heading}>
          {t.testimonials.heading}
        </Reveal>
        <Reveal as="p" className={styles.intro} delay={80}>
          {t.testimonials.intro}
        </Reveal>

        <div className={styles.masonry}>
          {t.testimonials.items.map((item, index) => (
            <Reveal
              key={item.name}
              delay={index * 60}
              className={`${styles.card} ${index === 1 ? styles.featured : ""}`}
            >
              <span className={styles.quoteMark} aria-hidden="true">
                &ldquo;
              </span>
              <div className={styles.stars} aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={styles.star}>
                    ★
                  </span>
                ))}
              </div>
              <p className={styles.quote}>{item.quote}</p>
              <div className={styles.person}>
                <span className={styles.avatar} aria-hidden="true">
                  {initials(item.name)}
                </span>
                <div className={styles.personText}>
                  <span className={styles.name}>{item.name}</span>
                  <span className={styles.role}>
                    {item.role} · {item.location}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
