import { Age, Criteria, Filters, Genre, SortingType } from "@/constants/filters";

export default interface IFilter {
  [Filters.Criteria]: Criteria;
  [Filters.Type]: SortingType;
  [Filters.Genre]: Genre;
  [Filters.Age]: Age;
}
