import Footer from "../components/Footer";
import GoToTop from "../components/GoToTop";
import SoftwareHero from "../components/SoftwareHero";
import ServiceStats from "../components/ServiceStats";
import SoftwareCapabilities from "../components/SoftwareCapabilities";
import ServiceProcess from "../components/ServiceProcess";
import ServiceWhy from "../components/ServiceWhy";
import FAQ from "../components/FAQ";
import styles from "../styles/page.module.scss";
import ContactUs from "../components/Contact";

const Software = () => {
  return (
    <div className={styles.main}>
      <SoftwareHero />
      <ServiceStats serviceKey="software" />
      <SoftwareCapabilities />
      <ServiceProcess serviceKey="software" />
      <ServiceWhy serviceKey="software" />
      <FAQ serviceKey="software" />
      <ContactUs />
      <Footer />
      <GoToTop />
    </div>
  );
};

export default Software;
