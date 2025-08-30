import Image from "next/image";
import Link from "next/link";
import Styles from "../styles/NavMobile.module.scss";
import DrawerMobile from "./DrawerMobileMenu";

export const NavMobile = () => {
  return (
    <div className={Styles.container} id={"top"}>
      <div className={Styles.innerContainerTop}>
        <div className={Styles.NavDetails}>
          <div className={Styles.topAdvatisment}>
            <div>
              Call Us: <a href="tel:+255767887999">+255 767 887 999</a>
            </div>
            <div>
              or <a href="#idea"> Fill Form Now</a>
            </div>
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
            <div className={Styles.drawer}>
              <DrawerMobile />
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavMobile;
