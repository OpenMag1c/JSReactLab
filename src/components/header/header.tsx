import { Link, NavLink, useNavigate } from "react-router-dom";
import { FC } from "react";
import Navbar from "@/components/navbar/navbar";
import classes from "./header.module.scss";
import ModalButton from "@/components/elements/modalButton/modalButton";
import { authType } from "@/types/types";
import { Links } from "@/environment/pageLinks";

interface HeaderProps {
  setLoginOpen: (isOpen: boolean) => void;
  setRegisterOpen: (isOpen: boolean) => void;
  setAuth: (props: authType) => void;
  isAuth: boolean;
  userName: string | undefined;
}

const Header: FC<HeaderProps> = ({ setLoginOpen, setRegisterOpen, setAuth, isAuth, userName }) => {
  const navigate = useNavigate();
  const checkAuth = () => {
    if (!isAuth) {
      setLoginOpen(true);
    }
  };

  const logout = () => {
    setAuth({ isAuth: false });
    navigate(Links.home, { replace: true });
  };

  return (
    <header className={classes.header}>
      <Link to={Links.home} className={classes.header__title}>
        Magic Game Store
      </Link>
      <Navbar checkAuth={checkAuth} />
      {isAuth ? (
        <>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${classes.header__link} ${classes.active}` : classes.header__link
            }
            to={Links.user}
          >
            <i className="fa-solid fa-user fa-lg icProfile" />
            {userName || "User Name"}
          </NavLink>
          <button type="button" className={classes.header__logout} onClick={logout}>
            <i className="fa-solid fa-arrow-right-from-bracket fa-xl" />
          </button>
        </>
      ) : (
        <>
          <ModalButton title="Sign In" setIsOpen={setLoginOpen} />
          <ModalButton title="Sign Up" setIsOpen={setRegisterOpen} />
        </>
      )}
    </header>
  );
};

export default Header;
