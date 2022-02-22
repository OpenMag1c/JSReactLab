import { Link, NavLink, useNavigate } from "react-router-dom";
import { FC } from "react";
import Navbar from "@/components/navbar/navbar";
import classes from "./header.module.scss";
import ModalButton from "@/components/elements/modalButton/modalButton";
import { Links } from "@/environment/pageLinks";
import useActions from "@/hooks/useActions";
import useTypedSelector from "@/hooks/useProtectedSelector";
import { IconExit, IconProfile } from "@/components/elements/icons/icons";

interface HeaderProps {
  setLoginOpen: (isOpen: boolean) => void;
  setRegisterOpen: (isOpen: boolean) => void;
}

const Header: FC<HeaderProps> = ({ setLoginOpen, setRegisterOpen }) => {
  const { isAuth, user } = useTypedSelector((state) => state.auth);
  const { logout } = useActions();
  const navigate = useNavigate();

  const clickLogout = () => {
    logout();
    navigate(Links.home, { replace: true });
  };

  return (
    <header className={classes.header}>
      <Link to={Links.home} className={classes.header__title}>
        Magic Game Store
      </Link>
      <Navbar />
      {isAuth ? (
        <>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${classes.header__link} ${classes.active}` : classes.header__link
            }
            to={Links.user}
          >
            <IconProfile />
            {user?.login || "User Name"}
          </NavLink>
          <button type="button" className={classes.header__logout} onClick={clickLogout}>
            <IconExit />
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
