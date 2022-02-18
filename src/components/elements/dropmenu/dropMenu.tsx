import { FC } from "react";
import { NavLink } from "react-router-dom";
import classes from "./dropMenu.module.scss";
import { categoryLinks, ILink } from "@/environment/pageLinks";
import { checkActive } from "@/components/navbar/navbarItem";

interface DropMenuProps {
  link: ILink;
}

const DropMenu: FC<DropMenuProps> = ({ link }) => (
  <li className={classes.main__menu}>
    <NavLink to={link.link} className={checkActive}>
      {link.title}
      <i className="fa-solid fa-caret-down icArrow" />
    </NavLink>
    <div className={classes.drop__menu}>
      {categoryLinks.map((category) => (
        <NavLink to={category.link} className={classes.drop__link} key={category.name}>
          {category.title}
        </NavLink>
      ))}
    </div>
  </li>
);

export default DropMenu;
