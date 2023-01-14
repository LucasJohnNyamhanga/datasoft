import React from "react";
import NavPc from "./Nav";
import NavMob from "./NavMobile";
import styles from "../styles/navigationControl.module.scss";

const Navigation = () => {
  return (
    <>
      <div className={styles.pc}>
        <NavPc />
      </div>
      <div className={styles.mobile}>
        <NavMob />
      </div>
    </>
  );
};

export default Navigation;
