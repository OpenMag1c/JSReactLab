import { FC } from "react";
import pageLinks from "@/environment/pageLinks";
import classes from "./navbar.module.scss";
import DropMenu from "@/components/elements/dropmenu/dropMenu";
import NavbarItem from "@/components/navbar/navbarItem";

const Navbar: FC = () => (
  <nav className={classes.navbar}>
    <ul className={classes.navbar__list}>
      {pageLinks.map((link) =>
        link.name === "products" ? (
          <DropMenu link={link} />
        ) : (
          <NavbarItem link={link} className={classes.navbar__item} />
        )
      )}
    </ul>
  </nav>
);

export default Navbar;
