import { FC } from "react";
import { NavLink } from "react-router-dom";
import classes from "@/components/header/navbar/navbar.module.scss";
import { ILink } from "@/environment/pageLinks";

export const checkActive = (props: { isActive: boolean }) =>
  props.isActive ? `${classes.navbar__link} ${classes.active}` : classes.navbar__link;

interface NavbarItemProps {
  link: ILink;
  className: string;
}

const NavbarItem: FC<NavbarItemProps> = ({ link, className, children }) => (
  <li className={className}>
    <NavLink to={link.link} className={checkActive}>
      {link.title}
    </NavLink>
    {children}
  </li>
);

export default NavbarItem;
