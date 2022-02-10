import { FC } from "react";
import { NavLink } from "react-router-dom";
import pageLinks from "@/environment/pageLinks";
import classes from "./navbar.module.scss";
import DropMenu from "@/components/elements/dropmenu/dropMenu";

const Navbar: FC = () => (
  <nav className={classes.navbar}>
    <ul className={classes.navbar__list}>
      <li className={classes.navbar__item}>
        <NavLink
          to={pageLinks.home.link}
          className={({ isActive }) => (isActive ? `${classes.active} ${classes.navbar__link}` : classes.navbar__link)}
          key={pageLinks.home.name}
        >
          {pageLinks.home.title}
        </NavLink>
      </li>
      <li className={classes.navbar__item}>
        <DropMenu />
      </li>
      <li className={classes.navbar__item}>
        <NavLink
          to={pageLinks.about.link}
          className={({ isActive }) => (isActive ? `${classes.active} ${classes.navbar__link}` : classes.navbar__link)}
          key={pageLinks.about.name}
        >
          {pageLinks.about.title}
        </NavLink>
      </li>
      <li className={classes.navbar__item}>
        <NavLink
          to={pageLinks.signIn.link}
          className={({ isActive }) => (isActive ? `${classes.active} ${classes.navbar__link}` : classes.navbar__link)}
          key={pageLinks.signIn.name}
        >
          {pageLinks.signIn.title}
        </NavLink>
      </li>
      <li className={classes.navbar__item}>
        <NavLink
          to={pageLinks.signUp.link}
          className={({ isActive }) => (isActive ? `${classes.active} ${classes.navbar__link}` : classes.navbar__link)}
          key={pageLinks.signUp.name}
        >
          {pageLinks.signUp.title}
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
