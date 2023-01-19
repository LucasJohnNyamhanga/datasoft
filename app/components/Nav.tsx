import React, { useContext, useEffect, useState } from "react";
import Styles from "../styles/navigation.module.scss";
import Link from "next/link";
import Image from "next/image";

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
              <div className={Styles.datasoft}>
                <div className={Styles.icon}>
                  <Image
                    alt=""
                    src={`/brainas.svg`}
                    placeholder="blur"
                    blurDataURL={`/brainer.svg`}
                    style={{
                      objectFit: "cover",
                      objectPosition: "right",
                    }}
                    quality={100}
                    priority
                    unoptimized={true}
                    width={50}
                    height={50}
                  />
                </div>
                <div className={Styles.name}>DataSoft</div>
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
