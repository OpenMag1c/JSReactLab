import { FC } from "react";
import pageLinks, { Links } from "@/environment/pageLinks";
import classes from "./navbar.module.scss";
import DropMenu from "@/components/elements/menu/dropmenu/dropMenu";
import NavbarItem from "@/components/header/navbar/navbarItem";

const Navbar: FC = () => (
  <nav className={classes.navbar}>
    <ul className={classes.navbar__list}>
      {pageLinks.map((link) =>
        link.link === Links.products ? (
          <DropMenu link={link} key={link.link} />
        ) : (
          <NavbarItem link={link} className={classes.navbar__item} key={link.link} />
        )
      )}
    </ul>
  </nav>
);

export default Navbar;
