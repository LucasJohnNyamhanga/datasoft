import styles from "./styles/page.module.scss";

import Hero from "./components/Hero";
import WhatWeDo from "./components/WhatWeDo";
import EverythingIncluded from "./components/EverythingIncluded";
import Process from "./components/Process";
import WhatWeHaveDone from "./components/WhatWeHaveDone";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import GoToTop from "./components/GoToTop";
import ContactUs from "./components/Contact";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <WhatWeDo />
      <EverythingIncluded />
      <Process />
      <WhatWeHaveDone />
      <Testimonials />
      <ContactUs />
      <Footer />
      <GoToTop />
    </main>
  );
}
