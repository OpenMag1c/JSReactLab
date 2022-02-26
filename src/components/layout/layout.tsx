import { FC } from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Modals from "@/components/elements/modal/modals";

const Layout: FC = () => (
  <>
    <Header />
    <main>
      <Outlet />
    </main>
    <Modals />
    <Footer />
  </>
);

export default Layout;
