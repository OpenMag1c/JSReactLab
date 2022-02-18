import { FC, useState } from "react";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import SignIn from "@/components/forms/signIn/signIn";
import Modal from "@/components/elements/modal/modal";
import SignUp from "@/components/forms/signUp/signUp";
import { authType } from "@/types/types";

interface LayoutProps {
  setAuth: (props: authType) => void;
  isAuth: boolean;
  userName: string | undefined;
}

const Layout: FC<LayoutProps> = ({ setAuth, isAuth, userName, children }) => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  return (
    <>
      <Header
        setLoginOpen={setLoginOpen}
        setRegisterOpen={setRegisterOpen}
        isAuth={isAuth}
        userName={userName}
        setAuth={setAuth}
      />
      <main>{children}</main>
      <Modal active={loginOpen} setActive={setLoginOpen}>
        <SignIn setAuth={setAuth} setActive={setLoginOpen} />
      </Modal>
      <Modal active={registerOpen} setActive={setRegisterOpen}>
        <SignUp setAuth={setAuth} setActive={setRegisterOpen} />
      </Modal>
      <Footer />
    </>
  );
};

export default Layout;
