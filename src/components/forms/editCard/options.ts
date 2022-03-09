import { Age, Genres } from "@/constants/filters";
import { Category } from "@/types/ICategory";

export const EditGenres = {
  [Genres.Shooter]: "Shooter",
  [Genres.Arcade]: "Arcade",
  [Genres.RPG]: "RPG",
};

export const EditAges = {
  [Age.Three]: "3+",
  [Age.Sixth]: "6+",
  [Age.Twelve]: "12+",
  [Age.Eighteen]: "18+",
};

export const EditCategories = {
  [Category.PC]: "PC",
  [Category.XBOX]: "XBOX",
  [Category.PlayStation]: "PlayStation",
};
