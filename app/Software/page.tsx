import Footer from "../components/Footer";
import GoToTop from "../components/GoToTop";
import Hero from "../components/SoftwareHero";
import styles from "../styles/page.module.scss";
import SoftwareDetails from "../components/SoftwareDetails";
import ContactUs from "../components/Contact";

const Software = () => {
  return (
    <div className={styles.main}>
      <Hero image={"/software.png"} />
      <SoftwareDetails />
      <ContactUs />
      <Footer />
      <GoToTop />
    </div>
  );
};

export default Software;
