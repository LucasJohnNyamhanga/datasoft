import Footer from "../components/Footer";
import GoToTop from "../components/GoToTop";
import ServiceHero from "../components/ServiceHero";
import ServiceDetail from "../components/ServiceDetail";
import styles from "../styles/page.module.scss";
import ContactUs from "../components/Contact";

const Software = () => {
  return (
    <div className={styles.main}>
      <ServiceHero serviceKey="software" image="/software.png" />
      <ServiceDetail serviceKey="software" />
      <ContactUs />
      <Footer />
      <GoToTop />
    </div>
  );
};

export default Software;
