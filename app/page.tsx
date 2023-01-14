import styles from "./styles/page.module.scss";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navigation />
      <Hero image={"/datasoft.gif"} />
    </main>
  );
}
