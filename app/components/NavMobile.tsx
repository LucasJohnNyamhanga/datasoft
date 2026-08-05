import Image from "next/image";
import Styles from "../styles/NavMobile.module.scss";
import DrawerMobile from "./DrawerMobileMenu";

export const NavMobile = () => {
  return (
    <div className={Styles.container} id="top">
      <div className={Styles.bar}>
        <div className={Styles.logo}>
          <Image alt="DataSoft Tanzania" src="/brainas.svg" width={32} height={32} priority />
          <span className={Styles.name}>DataSoft</span>
        </div>
        <div className={Styles.right}>
          <DrawerMobile />
        </div>
      </div>
    </div>
  );
};

export default NavMobile;
