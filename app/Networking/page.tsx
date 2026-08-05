import Footer from "../components/Footer";
import GoToTop from "../components/GoToTop";
import ServiceHero from "../components/ServiceHero";
import ServiceDetail from "../components/ServiceDetail";
import styles from "../styles/page.module.scss";
import ContactUs from "../components/Contact";

const Networking = () => {
  return (
    <div className={styles.main}>
      <ServiceHero serviceKey="networking" image="/networking.png" />
      <ServiceDetail serviceKey="networking" />
      <ContactUs />
      <Footer />
      <GoToTop />
    </div>
  );
};

export default Networking;
