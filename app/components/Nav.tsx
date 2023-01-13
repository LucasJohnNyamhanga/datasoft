import React, { useContext, useEffect, useState } from "react";
import Styles from "../styles/navigation.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

const Nav = () => {
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
                <div className={Styles.icon}>DATASOFT TECHNOLOGIES</div>
              </div>
            </Link>
            <div className={Styles.links}>
              <Link href="/">Links</Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Nav;
