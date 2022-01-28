import { FC } from "react";
import { NavLink } from "react-router-dom";
import { ILink } from "@/components/header/links";

interface NavBarLinkProps {
  links: ILink[];
}

const NavBarLinks: FC<NavBarLinkProps> = ({ links }) => (
  <nav className="navbar">
    {links.map((link) => (
      <NavLink to={link.link} className="navbar-link">
        {link.title}
      </NavLink>
    ))}
  </nav>
);

export default NavBarLinks;
