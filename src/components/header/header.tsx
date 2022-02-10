import { Link } from "react-router-dom";
import { FC } from "react";
import Navbar from "@/components/navbar/navbar";
import classes from "./header.module.scss";

const Header: FC = () => (
  <div className={classes.header}>
    <Link to="/" className={classes.header__title}>
      Magic Game Store
    </Link>
    <Navbar />
  </div>
);

export default Header;
