import { Link } from "react-router-dom";
import { FC } from "react";
import Navbar from "@/components/header/navbar/navbar";
import classes from "./header.module.scss";
import { Links } from "@/environment/pageLinks";
import useActions from "@/hooks/useActions";
import useTypedSelector from "@/hooks/useProtectedSelector";
import MyButton from "@/components/elements/button/myButton";
import Authorized from "@/components/header/authorized/authorized";

const Header: FC = () => {
  const { isAuth } = useTypedSelector((state) => state.auth);
  const { openLogin, openRegister } = useActions();

  const login = () => {
    openLogin(true);
  };

  const register = () => {
    openRegister(true);
  };

  return (
    <header className={classes.header}>
      <Link to={Links.home} className={classes.header__title}>
        Magic Game Store
      </Link>
      <Navbar />
      {isAuth ? (
        <Authorized />
      ) : (
        <>
          <div className={classes.modalButton}>
            <MyButton text="Sign In" onClick={login} style={classes.modalButton__button} />
          </div>
          <div className={classes.modalButton}>
            <MyButton text="Sign Up" onClick={register} style={classes.modalButton__button} />
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
