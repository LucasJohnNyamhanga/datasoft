import Footer from "../components/Footer";
import GoToTop from "../components/GoToTop";
import HostingHero from "../components/HostingHero";
import ServiceStats from "../components/ServiceStats";
import HostingFeatures from "../components/HostingFeatures";
import ServiceProcess from "../components/ServiceProcess";
import ServiceWhy from "../components/ServiceWhy";
import FAQ from "../components/FAQ";
import styles from "../styles/page.module.scss";
import ContactUs from "../components/Contact";

const Hosting = () => {
  return (
    <div className={styles.main}>
      <HostingHero />
      <ServiceStats serviceKey="hosting" />
      <HostingFeatures />
      <ServiceProcess serviceKey="hosting" />
      <ServiceWhy serviceKey="hosting" />
      <FAQ serviceKey="hosting" />
      <ContactUs />
      <Footer />
      <GoToTop />
    </div>
  );
};

export default Hosting;
