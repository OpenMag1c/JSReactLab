import { FC, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import useActions from "@/hooks/useActions";
import { getUser } from "@/api/api";
import Modals from "@/components/elements/modal/modals";

const Layout: FC = () => {
  const { signIn } = useActions();

  useEffect(() => {
    const userId = localStorage.getItem("id");
    if (userId) {
      (async () => {
        const user = await getUser({ id: userId });
        if (user) {
          signIn(user);
        }
      })();
    }
  }, []);

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Modals />
      <Footer />
    </>
  );
};

export default Layout;
