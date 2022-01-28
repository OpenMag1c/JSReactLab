import { FC } from "react";
import { Link } from "react-router-dom";
import NavBarLinks from "@/components/header/navBarLinks";
import "./header.css";
import "./navbar.css";
import links from "@/components/header/links";

const Header: FC = () => (
  <div className="header">
    <Link to="/" className="header-title">
      Magic Game Store
    </Link>
    <NavBarLinks links={links} />
  </div>
);

export default Header;
