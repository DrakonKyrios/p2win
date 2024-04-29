import Footer from "../components/Footer.component";
import { Outlet } from "react-router-dom";
import Header from "../components/Header.component";
import { I18nextProvider } from "react-i18next";
import i18next from "../utilities/i18next.resource";

export default function DefaultShell() {
  return (
    <I18nextProvider i18n={i18next} defaultNS={"translation"}>
      <Header />
      <main className="min-h-[calc(100vh_-_390px)]">
        <Outlet />
      </main>
      <Footer />
    </I18nextProvider>
  );
}
