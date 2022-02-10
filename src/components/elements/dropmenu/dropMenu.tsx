import { FC } from "react";
import { NavLink } from "react-router-dom";
import classes from "./dropMenu.module.scss";
import { categoryLinks } from "@/environment/pageLinks";

const DropMenu: FC = () => (
  <div className={classes.main__menu}>
    <NavLink
      to="/products"
      className={({ isActive }) =>
        isActive ? `${classes.menu__button} ${classes.menu__button__active}` : classes.menu__button
      }
    >
      Products
    </NavLink>
    <div className={classes.drop__menu}>
      {categoryLinks.map((link) => (
        <NavLink to={link.link} className={classes.drop__link} key={link.name}>
          {link.title}
        </NavLink>
      ))}
    </div>
  </div>
);

export default DropMenu;
