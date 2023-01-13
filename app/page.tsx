import Image from "next/image";
import styles from "./styles/page.module.scss";
import Navigation from "./components/Nav";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navigation />
      <Hero
        image={"/datasoft.gif"}
        header={`Kueni katika neema, na katika kumjua Bwana wetu na Mwokozi Yesu Kristo. - 2 Petro 3:18`}
      />
    </main>
  );
}
