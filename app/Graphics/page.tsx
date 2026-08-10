import Footer from "../components/Footer";
import GoToTop from "../components/GoToTop";
import GraphicsHero from "../components/GraphicsHero";
import GraphicsCapabilities from "../components/GraphicsCapabilities";
import styles from "../styles/page.module.scss";
import ContactUs from "../components/Contact";

const Graphics = () => {
  return (
    <div className={styles.main}>
      <GraphicsHero />
      <GraphicsCapabilities />
      <ContactUs />
      <Footer />
      <GoToTop />
    </div>
  );
};

export default Graphics;
