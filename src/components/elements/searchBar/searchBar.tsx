import React, { FC } from "react";
import "./searchBar.css";
import searchIcon from "images/search.png";
import IProduct from "../../../../serverData/products";
import { getProducts } from "@/api/api";
import { debounce } from "@/api/utils";

interface SearchBarProps {
  onSearch: (response: IProduct[]) => void;
  loader: (isActive: boolean) => void;
  placeholder: string;
  // eslint-disable-next-line react/require-default-props
  value?: string;
}

type reactEventProp = (event: React.ChangeEvent<HTMLInputElement>) => void;

const SearchBar: FC<SearchBarProps> = ({ onSearch, loader, placeholder, value }) => {
  const makeResponse = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const response = event.target.value
      ? await getProducts({ name: event.target.value })
      : await getProducts({ sortBy: "date", amount: 3 });

    if (onSearch) {
      onSearch(response);
    }
  };

  const debouncedOnChange: reactEventProp = debounce(makeResponse, 1000);
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    loader(true);
    debouncedOnChange(event);
  };

  return (
    <div className="search">
      <div className="search-inputs">
        <input
          className="search-input-element"
          type="text"
          placeholder={placeholder}
          onChange={onChangeHandler}
          value={value}
        />
        <div className="search-icon">
          <img className="search-icon-img" alt="search button" src={searchIcon} />
        </div>
      </div>
    </div>
  );
};

export default React.memo(SearchBar);
