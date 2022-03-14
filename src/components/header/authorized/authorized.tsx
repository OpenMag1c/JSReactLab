import { FC } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Links } from "@/environment/pageLinks";
import { IconBasket, IconExit, IconProfile } from "@/components/elements/icons/icons";
import classes from "@/components/header/header.module.scss";
import Money from "@/components/elements/money/money";
import { amountOfOrder } from "@/api/order";
import useTypedSelector from "@/hooks/useProtectedSelector";
import useActions from "@/hooks/useActions";

const Authorized: FC = () => {
  const { user } = useTypedSelector((state) => state.auth);
  const { order } = useTypedSelector((state) => state.order);
  const navigate = useNavigate();
  const { logout } = useActions();

  const activeStyle = (props: { isActive: boolean }) =>
    props.isActive ? `${classes.header__link} ${classes.active}` : classes.header__link;

  const clickLogout = () => {
    logout();
    navigate(Links.home, { replace: true });
  };

  return (
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
  );
};

export default Authorized;
