import Footer from "../components/Footer";
import GoToTop from "../components/GoToTop";
import GraphicsHero from "../components/GraphicsHero";
import ServiceStats from "../components/ServiceStats";
import GraphicsCapabilities from "../components/GraphicsCapabilities";
import ServiceProcess from "../components/ServiceProcess";
import ServiceWhy from "../components/ServiceWhy";
import FAQ from "../components/FAQ";
import styles from "../styles/page.module.scss";
import ContactUs from "../components/Contact";

const Graphics = () => {
  return (
    <div className={styles.main}>
      <GraphicsHero />
      <ServiceStats serviceKey="graphics" />
      <GraphicsCapabilities />
      <ServiceProcess serviceKey="graphics" />
      <ServiceWhy serviceKey="graphics" />
      <FAQ serviceKey="graphics" />
      <ContactUs />
      <Footer />
      <GoToTop />
    </div>
  );
};

export default Graphics;
