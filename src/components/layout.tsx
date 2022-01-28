import { FC } from "react";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

const Layout: FC = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
