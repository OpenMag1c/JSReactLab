import { Age, Genres } from "@/constants/filters";
import { Category } from "@/types/ICategory";

export default interface IProduct {
  name: string;
  id: string | number;
  price: number;
  rating: number;
  description: string;
  category: Category[];
  img: string;
  date: Date;
  age: Age;
  genre: Genres;
}
