import React, { useContext, useEffect, useState } from "react";
import Styles from "../styles/navigation.module.scss";
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  return (
    <div className={Styles.container} id={"top"}>
      <div className={Styles.innerContainerTop}>
        <div className={Styles.NavDetails}>
          <div className={Styles.topAdvatisment}>
            <p>
              contact : <a href="tel:+255784477999">+255 784 477 999</a> |
              <a href="mailto:contact@datasoft.co.tz">
                {" "}
                contact@datasoft.co.tz
              </a>
            </p>
          </div>
        </div>
        <div className={Styles.NavHeader}>
          <nav className={Styles.nav}>
            <Link passHref href="/" className={Styles.logo} as={"image"}>
              <div className={Styles.datasoft}>
                <div className={Styles.icon}>
                  <Image
                    alt=""
                    src={`/brainas.svg`}
                    placeholder="blur"
                    blurDataURL={`/brainas.svg`}
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
              {/* <Link href="/" className={Styles.links}>
                About
              </Link> */}
              <a href="#services" className={Styles.links}>
                Services
              </a>
              <a href="#projects" className={Styles.links}>
                Projects
              </a>
              <a href="#idea" className={Styles.links}>
                Contact
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Nav;
