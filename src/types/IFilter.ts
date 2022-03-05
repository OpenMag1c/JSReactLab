import { Age, Criteria, Filters, Genres, SortingType } from "@/constants/filters";

export default interface IFilter {
  [Filters.Criteria]: Criteria;
  [Filters.Type]: SortingType;
  [Filters.Genre]: Genres;
  [Filters.Age]: Age;
}
