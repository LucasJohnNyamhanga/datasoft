import React, { useContext, useEffect, useState } from "react";
import Styles from "../styles/navigation.module.scss";
import Link from "next/link";

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
            <Link passHref href="/" className={Styles.logo}>
              <div>
                <div className={Styles.icon}>DataSoft</div>
              </div>
            </Link>
            <div className={Styles.link}>
              <Link href="/" className={Styles.links}>
                Home
              </Link>
              <Link href="/" className={Styles.links}>
                About
              </Link>
              <Link href="/" className={Styles.links}>
                Services
              </Link>
              <Link href="/" className={Styles.links}>
                Projects
              </Link>
              <Link href="/" className={Styles.links}>
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Nav;
