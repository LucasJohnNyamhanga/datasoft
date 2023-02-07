import styles from "./styles/page.module.scss";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import WhatWeDo from "./components/WhatWeDo";
import Contact from "./components/contactUs";
import WhatWeHaveDone from "./components/WhatWeHaveDone";

export default function Home() {
  const handleHeroButton = () => {
    console.log("Button Clicked!");
  };
  return (
    <main className={styles.main}>
      <Navigation />
      <Hero image={"/datasoft.gif"} />
      <WhatWeDo />
      <WhatWeHaveDone />
      <Contact />
    </main>
  );
}
