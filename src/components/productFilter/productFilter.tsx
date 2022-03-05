import { FC } from "react";
import classes from "./productFilter.module.scss";
import { Ages, CriteriaList, Filters, GenresList, SortingTypes } from "@/constants/filters";
import PullMenu from "@/components/elements/pullmenu/pullMenu";
import RadioMenu from "@/components/elements/radioMenu/radioMenu";
import IFilter from "@/types/IFilter";

interface ProductFilterProps {
  filter: IFilter;
  setFilter: (filter: IFilter) => void;
}

const ProductFilter: FC<ProductFilterProps> = ({ filter, setFilter }) => {
  const changeFilter = (label: Filters, data: number) => {
    setFilter({ ...filter, [label]: data } as IFilter);
  };

  return (
    <div className={classes.filter}>
      <h2 className={classes.filter__title}>Filter</h2>
      <PullMenu title={Filters.Criteria} items={CriteriaList} change={changeFilter} init={filter.Criteria} />
      <PullMenu title={Filters.Type} items={SortingTypes} change={changeFilter} init={filter.Type} />
      <RadioMenu title={Filters.Genre} items={GenresList} change={changeFilter} init={filter.Genre} />
      <RadioMenu title={Filters.Age} items={Ages} change={changeFilter} init={filter.Age} />
    </div>
  );
};

export default ProductFilter;
