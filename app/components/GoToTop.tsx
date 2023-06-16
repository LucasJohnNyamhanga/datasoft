"use client";
import React, { useEffect, useRef } from "react";
import { RiRocketLine } from "react-icons/ri";
import { GiFireBowl } from "react-icons/gi";
import { BsWhatsapp } from "react-icons/bs";
import styles from "../styles/goToTop.module.scss";
import Link from "next/link";

const GoToTop = () => {
  const rocket = useRef<HTMLDivElement>(null!);

  const handleScroll = () => {
    const scrollPosition = window.scrollY; // => scroll position

    if (scrollPosition > 450) {
      rocket.current.classList.add(styles.Show);
    } else {
      if (rocket.current != null) {
        rocket.current.classList.remove(styles.Show);
      }
    }
  };

  let smoothScroll = () => {
    scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <div
        ref={rocket}
        className={`${styles.backToTop} ${styles.vibrater}`}
        onClick={smoothScroll}
      >
        <RiRocketLine size={50} />
        <GiFireBowl size={30} className={styles.fire} />
      </div>

      <a href="https://wa.me/+255784477999">
        <div className={`${styles.whatsaap}`}>
          <BsWhatsapp size={30} />
        </div>
      </a>
    </div>
  );
};

export default GoToTop;
