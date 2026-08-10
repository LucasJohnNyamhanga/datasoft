import Footer from "../components/Footer";
import GoToTop from "../components/GoToTop";
import HostingHero from "../components/HostingHero";
import HostingFeatures from "../components/HostingFeatures";
import styles from "../styles/page.module.scss";
import ContactUs from "../components/Contact";

const Hosting = () => {
  return (
    <div className={styles.main}>
      <HostingHero />
      <HostingFeatures />
      <ContactUs />
      <Footer />
      <GoToTop />
    </div>
  );
};

export default Hosting;
