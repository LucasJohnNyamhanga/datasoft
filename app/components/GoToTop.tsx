"use client";
import React, { useEffect, useRef } from "react";
import { RiRocketLine } from "react-icons/ri";
import { GiFireBowl } from "react-icons/gi";
import styles from "../styles/goToTop.module.scss";
import Link from "next/link";

const GoToTop = () => {
  const rocket = useRef<HTMLDivElement>(null!);

  const handleScroll = () => {
    const scrollPosition = window.scrollY; // => scroll position

    if (scrollPosition > 450) {
      rocket.current.classList.add(styles.Show);
    } else {
      rocket.current.classList.remove(styles.Show);
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
    <div
      ref={rocket}
      className={`${styles.backToTop} ${styles.vibrater}`}
      onClick={smoothScroll}
    >
      <RiRocketLine size={50} />
      <GiFireBowl size={30} className={styles.fire} />
    </div>
  );
};

export default GoToTop;
