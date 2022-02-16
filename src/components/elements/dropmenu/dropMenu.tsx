import { FC } from "react";
import { NavLink } from "react-router-dom";
import classes from "./dropMenu.module.scss";
import { categoryLinks, ILink } from "@/environment/pageLinks";
import NavbarItem from "@/components/navbar/navbarItem";

interface DropMenuProps {
  link: ILink;
}

const DropMenu: FC<DropMenuProps> = ({ link }) => (
  <NavbarItem link={link} className={classes.main__menu}>
    <div className={classes.drop__menu}>
      {categoryLinks.map((category) => (
        <NavLink to={category.link} className={classes.drop__link} key={category.name}>
          {category.title}
        </NavLink>
      ))}
    </div>
  </NavbarItem>
);

export default DropMenu;
