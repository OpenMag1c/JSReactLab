import React, { FC } from "react";
import searchIcon from "images/search.png";
import classes from "./search.module.scss";
import { getProducts } from "@/api/api";
import { debounce } from "@/api/utils";
import IProduct from "@/types/IProduct";

interface SearchProps {
  onSearch: (response: IProduct[]) => void;
  onEmpty: IProduct[];
  loader: (isActive: boolean) => void;
  placeholder: string;
}

type reactEventProp = (event: React.ChangeEvent<HTMLInputElement>) => void;

const Search: FC<SearchProps> = ({ onSearch, loader, placeholder, onEmpty }) => {
  const makeResponse = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const search: string = event.target.value;
    const response = search ? await getProducts({ name: event.target.value }) : onEmpty;
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
    <div className={classes.search__inputs}>
      <input
        className={classes.search__input__element}
        type="text"
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
      <div className={classes.search__icon}>
        <img className={classes.search__icon__img} alt="search button" src={searchIcon} />
      </div>
    </div>
  );
};

export default React.memo(Search);
