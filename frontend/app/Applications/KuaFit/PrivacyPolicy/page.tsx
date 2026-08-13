import type { Metadata } from "next";
import styles from "../../../styles/page.module.scss";
import KuaFitLegalHero from "../../../components/KuaFitLegalHero";
import KuaFitLegalContent from "../../../components/KuaFitLegalContent";
import ContactUs from "../../../components/Contact";
import Footer from "../../../components/Footer";
import GoToTop from "../../../components/GoToTop";

export const metadata: Metadata = {
  title: "Sera ya Faragha ya KuaFit, DataSoft Tanzania",
  description:
    "Jinsi programu ya KuaFit, iliyojengwa na DataSoft Tanzania, inavyokusanya, kutumia na kulinda taarifa zako binafsi na za kiafya.",
  alternates: {
    canonical: "https://www.datasoft.co.tz/Applications/KuaFit/PrivacyPolicy",
  },
};

const KuaFitPrivacyPolicy = () => {
  return (
    <div className={styles.main}>
      <KuaFitLegalHero docKey="privacyPolicy" />
      <KuaFitLegalContent docKey="privacyPolicy" />
      <ContactUs />
      <Footer />
      <GoToTop />
    </div>
  );
};

export default KuaFitPrivacyPolicy;
