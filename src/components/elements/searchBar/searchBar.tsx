import { FC } from "react";
import "./searchBar.css";
import searchIcon from "images/search.png";

interface SearchBarProps {
  placeholder: string;
}

const SearchBar: FC<SearchBarProps> = ({ placeholder }) => (
  <div className="search">
    <div className="search-inputs">
      <input className="search-input-element" type="text" placeholder={placeholder} />
      <div className="search-icon">
        <img className="search-icon-img" alt="search button" src={searchIcon} />
      </div>
    </div>
  </div>
);

export default SearchBar;
