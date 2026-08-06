import type { Metadata } from "next";
import NotFoundContent from "./components/NotFoundContent";

export const metadata: Metadata = {
  title: "Ukurasa Haukupatikana — DataSoft Tanzania",
  description: "Ukurasa unaoutafuta haupo. Rudi nyumbani kwenye DataSoft Tanzania.",
};

export default function NotFound() {
  return <NotFoundContent />;
}
