import { Age, Genres } from "@/constants/filters";

export default interface IProduct {
  name: string;
  id: string | number;
  price: string | number;
  rating: number;
  description: string;
  categoryId: string | number;
  img: string;
  date: Date;
  age: Age;
  genre: Genres;
}
