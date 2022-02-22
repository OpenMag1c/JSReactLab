import { FC, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import SignIn from "@/components/forms/signIn/signIn";
import Modal from "@/components/elements/modal/modal";
import SignUp from "@/components/forms/signUp/signUp";
import useActions from "@/hooks/useActions";
import useTypedSelector from "@/hooks/useProtectedSelector";

const Layout: FC = () => {
  const { openRegister, openLogin, signIn } = useActions();
  const { isRegisterOpen, isLoginOpen } = useTypedSelector((state) => state.modal);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      signIn(JSON.parse(user));
    }
  }, []);

  return (
    <>
      <Header setLoginOpen={openLogin} setRegisterOpen={openRegister} />
      <main>
        <Outlet />
      </main>
      <Modal active={isLoginOpen} setActive={openLogin}>
        <SignIn setActive={openLogin} />
      </Modal>
      <Modal active={isRegisterOpen} setActive={openRegister}>
        <SignUp setActive={openRegister} />
      </Modal>
      <Footer />
    </>
  );
};

export default Layout;
