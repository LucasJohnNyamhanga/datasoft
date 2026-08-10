import Footer from "../components/Footer";
import GoToTop from "../components/GoToTop";
import SoftwareHero from "../components/SoftwareHero";
import SoftwareCapabilities from "../components/SoftwareCapabilities";
import styles from "../styles/page.module.scss";
import ContactUs from "../components/Contact";

const Software = () => {
  return (
    <div className={styles.main}>
      <SoftwareHero />
      <SoftwareCapabilities />
      <ContactUs />
      <Footer />
      <GoToTop />
    </div>
  );
};

export default Software;
