"use client";
import { useLayoutEffect, useRef } from "react";
import NavPc from "./Nav";
import NavMob from "./NavMobile";
import styles from "../styles/navigationControl.module.scss";

const Navigation = () => {
  const fixedRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const node = fixedRef.current;
    if (!node) return;

    const applyHeight = (height: number) => {
      if (height <= 0) return;
      document.documentElement.style.setProperty("--nav-height", `${height}px`);
    };

    applyHeight(node.offsetHeight);

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      const height = entry.borderBoxSize?.[0]?.blockSize ?? entry.contentRect.height;
      applyHeight(height);
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.fixed} ref={fixedRef}>
      <div className={styles.pc}>
        <NavPc />
      </div>
      <div className={styles.mobile}>
        <NavMob />
      </div>
    </div>
  );
};

export default Navigation;
