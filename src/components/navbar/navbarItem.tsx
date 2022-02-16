import { FC } from "react";
import { NavLink } from "react-router-dom";
import classes from "@/components/navbar/navbar.module.scss";
import { ILink } from "@/environment/pageLinks";

interface NavbarItemProps {
  link: ILink;
  className: string;
}

const NavbarItem: FC<NavbarItemProps> = ({ link, className, children }) => {
  const checkActive: (props: { isActive: boolean }) => string = (isActive) =>
    isActive ? `${classes.navbar__link} ${classes.active}` : classes.navbar__link;
  return (
    <li className={className}>
      <NavLink to={link.link} className={checkActive}>
        {link.title}
      </NavLink>
      {children}
    </li>
  );
};

export default NavbarItem;
