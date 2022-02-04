import { FC } from "react";
import "./dropDownMenu.scss";
import { NavLink } from "react-router-dom";
import { categoryLinks } from "@/components/header/pageLinks";

const DropDownMenu: FC = () => {
  return (
    <div className="right__menu">
      <NavLink to="/products" className="menu-button">
        Products
      </NavLink>
      <div className="dropdown__menu">
        {categoryLinks.map((link) => (
          <NavLink to={link.link} className="dropdown__link" key={link.name}>
            {link.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default DropDownMenu;
