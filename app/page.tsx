import styles from "./styles/page.module.scss";

import Hero from "./components/Hero";
import WhatWeDo from "./components/WhatWeDo";
import Contact from "./components/contactUs";
import WhatWeHaveDone from "./components/WhatWeHaveDone";

import Footer from "./components/Footer";
import GoToTop from "./components/GoToTop";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero image={"/datasoftsoftware.gif"} />
      <WhatWeDo />
      <WhatWeHaveDone />
      <Contact />
      <Footer />
      <GoToTop />
    </main>
  );
}
