import React, { FC } from "react";
import classes from "./productFilter.module.scss";
import { Ages, CriteriaList, Filters, Genres, SortingTypes } from "@/constants/filters";
import PullMenu from "@/components/elements/menus/pullmenu/pullMenu";
import RadioMenu from "@/components/elements/menus/radiomenu/radioMenu";
import IFilter from "@/types/IFilter";
import { changeOptions } from "@/types/types";

interface ProductFilterProps {
  filter: IFilter;
  setFilter: (filter: IFilter) => void;
}

const ProductFilter: FC<ProductFilterProps> = ({ filter, setFilter }) => {
  const changeFilter: changeOptions = (label, data) => {
    setFilter({ ...filter, [label]: data } as IFilter);
  };

  return (
    <div className={classes.filter}>
      <h2 className={classes.filter__title}>Filter</h2>
      <PullMenu
        label={Filters.Criteria}
        items={CriteriaList}
        change={changeFilter}
        init={filter.Criteria}
        title="Criteria"
      />
      <PullMenu label={Filters.Type} items={SortingTypes} change={changeFilter} init={filter.Type} title="Type" />
      <RadioMenu label={Filters.Genre} items={Genres} change={changeFilter} init={filter.Genre} />
      <RadioMenu label={Filters.Age} items={Ages} change={changeFilter} init={filter.Age} />
    </div>
  );
};

export default React.memo(ProductFilter);
