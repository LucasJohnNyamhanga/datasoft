import Image from "next/image";
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
            <Link passHref href="/" className={Styles.logo}>
              <div className={Styles.datasoft}>
                <div className={Styles.icon}>
                  <Image
                    alt=""
                    src={`/brainer.svg`}
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
            <div className={Styles.links}></div>
            <DrawerMobile />
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavMobile;
