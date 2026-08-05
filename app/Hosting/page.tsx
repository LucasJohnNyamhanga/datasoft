import Footer from "../components/Footer";
import GoToTop from "../components/GoToTop";
import ServiceHero from "../components/ServiceHero";
import ServiceDetail from "../components/ServiceDetail";
import styles from "../styles/page.module.scss";
import ContactUs from "../components/Contact";

const Hosting = () => {
  return (
    <div className={styles.main}>
      <ServiceHero serviceKey="hosting" image="/hosting.png" />
      <ServiceDetail serviceKey="hosting" />
      <ContactUs />
      <Footer />
      <GoToTop />
    </div>
  );
};

export default Hosting;
