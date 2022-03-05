import IFilter from "@/types/IFilter";
import { Age, Criteria, Genres, SortingType } from "@/constants/filters";
import { IParams } from "@/types/types";

const defaultFilter: IFilter = {
  Criteria: Criteria.Name,
  Type: SortingType.Ascending,
  Genre: Genres.All,
  Age: Age.AllAges,
};

export const paramsHome: IParams = { amount: 3, sortBy: "date" };

export default defaultFilter;
