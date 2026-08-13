import type { Metadata } from "next";
import styles from "../../../styles/page.module.scss";
import KuaFitLegalHero from "../../../components/KuaFitLegalHero";
import KuaFitLegalContent from "../../../components/KuaFitLegalContent";
import ContactUs from "../../../components/Contact";
import Footer from "../../../components/Footer";
import GoToTop from "../../../components/GoToTop";

export const metadata: Metadata = {
  title: "Masharti ya Huduma ya KuaFit, DataSoft Tanzania",
  description:
    "Makubaliano kamili ya matumizi kati yako na programu ya KuaFit, iliyojengwa na DataSoft Tanzania.",
  alternates: {
    canonical: "https://www.datasoft.co.tz/Applications/KuaFit/TermsOfService",
  },
};

const KuaFitTermsOfService = () => {
  return (
    <div className={styles.main}>
      <KuaFitLegalHero docKey="termsOfService" />
      <KuaFitLegalContent docKey="termsOfService" />
      <ContactUs />
      <Footer />
      <GoToTop />
    </div>
  );
};

export default KuaFitTermsOfService;
