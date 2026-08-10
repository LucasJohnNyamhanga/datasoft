import Footer from "../components/Footer";
import GoToTop from "../components/GoToTop";
import NetworkingHero from "../components/NetworkingHero";
import NetworkStats from "../components/NetworkStats";
import NetworkCapabilities from "../components/NetworkCapabilities";
import NetworkProcess from "../components/NetworkProcess";
import NetworkWhy from "../components/NetworkWhy";
import styles from "../styles/page.module.scss";
import ContactUs from "../components/Contact";

const Networking = () => {
  return (
    <div className={styles.main}>
      <NetworkingHero />
      <NetworkStats />
      <NetworkCapabilities />
      <NetworkProcess />
      <NetworkWhy />
      <ContactUs />
      <Footer />
      <GoToTop />
    </div>
  );
};

export default Networking;
