import type { Metadata } from "next";
import NotFoundContent from "./components/NotFoundContent";
import ContactUs from "./components/Contact";
import Footer from "./components/Footer";
import GoToTop from "./components/GoToTop";

export const metadata: Metadata = {
  title: "Ukurasa Haukupatikana — DataSoft Tanzania",
  description: "Ukurasa unaoutafuta haupo. Rudi nyumbani kwenye DataSoft Tanzania.",
};

export default function NotFound() {
  return (
    <>
      <NotFoundContent />
      <ContactUs />
      <Footer />
      <GoToTop />
    </>
  );
}
