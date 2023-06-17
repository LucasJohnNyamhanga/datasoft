"use client";
import React, { useContext, useEffect, useState } from "react";
import Styles from "../styles/navigation.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useRouter, useSelectedLayoutSegment } from "next/navigation";

const Nav = () => {
  const segment = useSelectedLayoutSegment();

  console.log(segment);
  const router = useRouter();

  const handleNavigation = (nav: string) => {
    router.push(nav);
  };

  return (
    <div className={Styles.container} id={"top"}>
      <div className={Styles.innerContainerTop}>
        <div className={Styles.NavDetails}>
          <div className={Styles.topAdvatisment}>
            <p>
              Call : <a href="tel:+255784477999">+255 784 477 999</a> or
              <a href="#idea"> Fill Form Now</a>
            </p>
          </div>
        </div>
        <div className={Styles.NavHeader}>
          <nav className={Styles.nav}>
            <div
              className={Styles.logo}
              onClick={(e) => {
                handleNavigation("/");
              }}
            >
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
            </div>
            <div className={Styles.link}>
              {segment === "Software" ? (
                <Link href="/" className={Styles.links}>
                  Home
                </Link>
              ) : (
                <a href="#home" className={Styles.links}>
                  Home
                </a>
              )}
              {segment != "Software" && (
                <>
                  <a href="#services" className={Styles.links}>
                    Services
                  </a>
                  <a href="#projects" className={Styles.links}>
                    Projects
                  </a>
                  <a href="#idea" className={Styles.links}>
                    Contact
                  </a>
                </>
              )}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Nav;
