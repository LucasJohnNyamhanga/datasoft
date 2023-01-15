import styles from "./styles/page.module.scss";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";

import WhatWeDo from "./components/WhatWeDo";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navigation />
      <Hero image={"/datasoft.gif"} />
      <WhatWeDo />
    </main>
  );
}
