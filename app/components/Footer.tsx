import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Styles from "../styles/footer.module.scss";

const Footer = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.innerContainer}>
        <div className={Styles.footerDetails}>
          <div className={Styles.header}>MEET US</div>
          <div className={Styles.body}>House No 640,</div>
          <div className={Styles.body}>Medical Research Road,</div>
          <div className={Styles.body}>Kitangiri, Ilemela,</div>
          <div className={Styles.body}>Mwanza, Tanzania.</div>
        </div>
        <div className={Styles.footerDetails}>
          <div className={Styles.header}>BRIEF US</div>
          <div
            className={`${Styles.body} ${Styles.buziness}`}
          >{`Let's Talk Business`}</div>
          <div className={Styles.body}>
            <a href="tel:+255784477999">+255 784 477 999</a>
          </div>
          <div className={Styles.body}>
            <a href="mailto:contact@datasoft.co.tz"> contact@datasoft.co.tz</a>
          </div>
        </div>
        <div className={Styles.footerDetails}>
          <div className={Styles.header}>SOCIAL MEDIA</div>
          <div className={Styles.body}>
            <div className={Styles.socialmenu}>
              <Link href={"https://www.instagram.com/datasofttanzania/"}>
                <FaInstagram className={Styles.media} />
              </Link>

              <FaFacebookF className={Styles.media} />
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.copyrights}>DataSoft Tanzania &copy; 2025</div>
    </div>
  );
};

export default Footer;
