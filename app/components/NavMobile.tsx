import React, { useContext, useEffect, useState } from "react";
import Styles from "../styles/NavMobile.module.scss";
import { useRef } from "react";
import Link from "next/link";
import DrawerMobile from "./DrawerMobileMenu";

export const NavMobile = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.innerContainerTop}>
        <div className={Styles.NavDetails}>
          <div className={Styles.topAdvatisment}>
            <p>contact : +255 784 477 999 | contact@datasoft.co.tz</p>
          </div>
        </div>
        <div className={Styles.NavHeader}>
          <nav className={Styles.nav}>
            <Link passHref href="/">
              <div className={Styles.logo}>
                <div className={Styles.icon}>DataSoft</div>
              </div>
            </Link>
            <div className={Styles.links}></div>
            <DrawerMobile />
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavMobile;
