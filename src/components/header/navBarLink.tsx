import { FC } from "react";
import { NavLink } from "react-router-dom";
import { ILink } from "@/components/header/links";

interface NavBarLinkProps {
  link: ILink;
}

const NavBarLink: FC<NavBarLinkProps> = ({ link }) => (
  <NavLink to={link.link} className="navbar__links">
    {link.title}
  </NavLink>
);

export default NavBarLink;
