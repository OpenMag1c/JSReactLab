import React, { FC, useCallback } from "react";
import searchIcon from "images/search.png";
import classes from "./search.module.scss";
import { getProducts } from "@/api/api";
import { debounce } from "@/api/utils";
import IProduct from "@/types/IProduct";
import { IParams } from "@/types/types";

interface SearchProps {
  onSearch: (response: IProduct[] | null) => void;
  loader: (isActive: boolean) => void;
  placeholder: string;
  params: IParams | undefined;
}

type reactEventProp = (event: React.ChangeEvent<HTMLInputElement>) => void;

const Search: FC<SearchProps> = ({ onSearch, loader, placeholder, params }) => {
  const makeResponse = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const search: string = event.target.value;
    const response = search ? await getProducts({ ...params, name: event.target.value }) : null;
    onSearch(response);
  };

  const debouncedOnChange: reactEventProp = debounce(makeResponse, 1000);
  const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    loader(true);
    debouncedOnChange(event);
  }, []);

  return (
    <div className={classes.search__inputs}>
      <input className={classes.search__input__element} type="text" placeholder={placeholder} onChange={onChange} />
      <div className={classes.search__icon}>
        <img className={classes.search__icon__img} alt="search button" src={searchIcon} />
      </div>
    </div>
  );
};

export default React.memo(Search);
