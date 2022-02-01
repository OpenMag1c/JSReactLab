import { FC } from "react";
import { Link } from "react-router-dom";
import NavBarLinks from "@/components/header/navBarLinks";
import classes from "./header.module.scss";
import links from "@/components/header/links";

const Header: FC = () => (
  <div className={classes.header}>
    <Link to="/" className={classes.header__title}>
      Magic Game Store
    </Link>
    <NavBarLinks links={links} />
  </div>
);

export default Header;
