import { FC } from "react";
import { NavLink } from "react-router-dom";
import { ILink } from "@/components/header/links";
import classes from "./navbar.module.scss";

interface NavBarLinkProps {
  links: ILink[];
}

const NavBarLinks: FC<NavBarLinkProps> = ({ links }) => (
  <nav className={classes.navbar}>
    {links.map((link) => (
      <NavLink to={link.link} className={classes.navbar__link} key={link.name}>
        {link.title}
      </NavLink>
    ))}
  </nav>
);

export default NavBarLinks;
