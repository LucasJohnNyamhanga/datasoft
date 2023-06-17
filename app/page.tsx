import styles from "./styles/page.module.scss";

import Hero from "./components/Hero";
import WhatWeDo from "./components/WhatWeDo";
import WhatWeHaveDone from "./components/WhatWeHaveDone";
import Footer from "./components/Footer";
import GoToTop from "./components/GoToTop";
import ContactUs from "./components/ContactUs";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero image={"/datasoftsoftware.gif"} />
      <WhatWeDo />
      <WhatWeHaveDone />
      <ContactUs />
      <Footer />
      <GoToTop />
    </main>
  );
}
