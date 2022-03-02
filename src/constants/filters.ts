export enum Filters {
  Criteria = "Criteria",
  Type = "Type",
  Genre = "Genre",
  Age = "Age",
}

export enum Age {
  AllAges,
  Three,
  Sixth,
  Twelve,
  Eighteen,
}

export enum Genres {
  All,
  Shooter,
  RPG,
  Arcade,
}

export enum Criteria {
  Name,
  Price,
  Rating,
  Date,
}

export enum SortingType {
  Ascending,
  Descending,
}

export const CriteriaList: { [key in Criteria]: string } = {
  [Criteria.Name]: "Name",
  [Criteria.Price]: "Price",
  [Criteria.Rating]: "Rating",
  [Criteria.Date]: "Date",
};

export const SortingTypes: { [key in SortingType]: string } = {
  [SortingType.Ascending]: "Ascending",
  [SortingType.Descending]: "Descending",
};

export const GenresList: { [key in Genres]: string } = {
  [Genres.All]: "All",
  [Genres.Shooter]: "Shooter",
  [Genres.Arcade]: "Arcade",
  [Genres.RPG]: "RPG",
};

export const Ages: { [key in Age]: string } = {
  [Age.AllAges]: "All ages",
  [Age.Three]: "3+",
  [Age.Sixth]: "6+",
  [Age.Twelve]: "12+",
  [Age.Eighteen]: "18+",
};
