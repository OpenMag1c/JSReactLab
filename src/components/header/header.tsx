import { Link, NavLink, useNavigate } from "react-router-dom";
import { FC } from "react";
import Navbar from "@/components/navbar/navbar";
import classes from "./header.module.scss";
import ModalButton from "@/components/elements/modalButton/modalButton";
import { Links } from "@/environment/pageLinks";
import useActions from "@/hooks/useActions";
import useTypedSelector from "@/hooks/useProtectedSelector";
import { IconBasket, IconExit, IconProfile } from "@/components/elements/icons/icons";
import Money from "@/components/elements/money/money";
import { amountOfOrder } from "@/api/order";

const Header: FC = () => {
  const { isAuth, user } = useTypedSelector((state) => state.auth);
  const { logout, openLogin, openRegister } = useActions();
  const { order } = useTypedSelector((state) => state.order);
  const navigate = useNavigate();

  const activeStyle = (props: { isActive: boolean }) =>
    props.isActive ? `${classes.header__link} ${classes.active}` : classes.header__link;

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
          <NavLink className={activeStyle} to={Links.user}>
            <IconProfile />
            {user?.login || "User Name"}
          </NavLink>
          <div className={classes.header__money}>
            <Money money={user?.balance || 0} />
          </div>
          <NavLink className={activeStyle} to={Links.order}>
            <IconBasket />
            {amountOfOrder(order)}
          </NavLink>
          <button type="button" className={classes.header__logout} onClick={clickLogout}>
            <IconExit />
          </button>
        </>
      ) : (
        <>
          <ModalButton title="Sign In" setIsOpen={openLogin} />
          <ModalButton title="Sign Up" setIsOpen={openRegister} />
        </>
      )}
    </header>
  );
};

export default Header;
