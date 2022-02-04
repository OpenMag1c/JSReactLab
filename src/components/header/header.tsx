import { FC } from "react";
import { Link } from "react-router-dom";
import NavBarLinks from "@/components/navBar/navBarLinks";
import classes from "./header.module.scss";
import pageLinks from "@/components/header/pageLinks";

const Header: FC = () => (
  <div className={classes.header}>
    <Link to="/" className={classes.header__title}>
      Magic Game Store
    </Link>
    <NavBarLinks links={pageLinks} />
  </div>
);

export default Header;
