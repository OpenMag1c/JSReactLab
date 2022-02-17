import { FC } from "react";
import pageLinks, { Links } from "@/environment/pageLinks";
import classes from "./navbar.module.scss";
import DropMenu from "@/components/elements/dropmenu/dropMenu";
import NavbarItem from "@/components/navbar/navbarItem";

interface NavbarProps {
  checkAuth: () => void;
}

const Navbar: FC<NavbarProps> = ({ checkAuth }) => (
  <nav className={classes.navbar} onClick={checkAuth} onKeyDown={checkAuth}>
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
