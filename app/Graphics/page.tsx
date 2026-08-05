import Footer from "../components/Footer";
import GoToTop from "../components/GoToTop";
import ServiceHero from "../components/ServiceHero";
import ServiceDetail from "../components/ServiceDetail";
import styles from "../styles/page.module.scss";
import ContactUs from "../components/Contact";

const Graphics = () => {
  return (
    <div className={styles.main}>
      <ServiceHero serviceKey="graphics" image="/graphics.png" />
      <ServiceDetail serviceKey="graphics" />
      <ContactUs />
      <Footer />
      <GoToTop />
    </div>
  );
};

export default Graphics;
