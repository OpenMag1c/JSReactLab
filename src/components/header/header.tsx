import { FC } from "react";
import { Link } from "react-router-dom";
import NavBarLink from "@/components/header/navBarLink";
import "./header.css";
import "./navbar.css";
import links from "@/components/header/links";

const Header: FC = () => (
  <div className="header">
    <Link to="/" className="header__title">
      Magic Game Store
    </Link>
    <nav className="navbar">
      {links.map((link) => (
        <NavBarLink link={link} />
      ))}
    </nav>
  </div>
);

export default Header;
