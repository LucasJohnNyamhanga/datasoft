import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import GoToTop from "../components/GoToTop";
import Hero from "../components/Hero";
import styles from "../styles/page.module.scss";

const Software = () => {
  return (
    <div className={styles.main}>
      <Navigation />
      <Hero image={"/datasoftsoftware.gif"} />
      <div>software</div>
      <Footer />
      <GoToTop />
    </div>
  );
};

export default Software;
