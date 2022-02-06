import { FC } from "react";
import { NavLink } from "react-router-dom";
import { ILink } from "@/components/header/pageLinks";
import classes from "./navbar.module.scss";
import DropDownMenu from "@/components/navBar/dropDownMenu";

interface NavBarLinkProps {
  links: ILink;
}

const NavBarLinks: FC<NavBarLinkProps> = ({ links }) => (
  <nav className={classes.navbar}>
    <NavLink to={links.home.link} className={classes.navbar__link} key={links.home.name}>
      {links.home.title}
    </NavLink>
    <DropDownMenu />
    <NavLink to={links.about.link} className={classes.navbar__link} key={links.about.name}>
      {links.about.title}
    </NavLink>
    <NavLink to={links.signIn.link} className={classes.navbar__link} key={links.signIn.name}>
      {links.signIn.title}
    </NavLink>
    <NavLink to={links.signUp.link} className={classes.navbar__link} key={links.signUp.name}>
      {links.signUp.title}
    </NavLink>
  </nav>
);

export default NavBarLinks;
