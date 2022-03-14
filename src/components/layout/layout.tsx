import { FC, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Modals from "@/components/modal/modals";
import { getUser } from "@/api/api";
import Spinner from "@/components/elements/spinner/spinner";
import useActions from "@/hooks/useActions";
import { RootState } from "@/store";

const Layout: FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const { isAuth } = useSelector((state: RootState) => state.auth);
  const { signIn } = useActions();

  useEffect(() => {
    const userId = localStorage.getItem("id");
    if (userId && !isAuth) {
      (async () => {
        const user = await getUser({ id: userId });
        if (user) {
          signIn(user);
        }
        setLoading(false);
      })();
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <>
      <Header />
      <main>{loading ? <Spinner /> : <Outlet />}</main>
      <Modals />
      <Footer />
    </>
  );
};

export default Layout;
