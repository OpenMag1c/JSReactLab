import IFilter from "@/types/IFilter";
import { Age, Criteria, Genre, SortingType } from "@/constants/filters";
import { IParams } from "@/types/types";
import IProduct from "@/types/IProduct";
import { emptyImage } from "@/constants/images";
import { IOrder } from "@/types/IOrder";

const defaultFilter: IFilter = {
  Criteria: Criteria.Name,
  Type: SortingType.Ascending,
  Genre: Genre.All,
  Age: Age.AllAges,
};

export const emptyCard: IProduct = {
  id: 0,
  img: emptyImage,
  age: Age.AllAges,
  name: "Name of the game ",
  genre: Genre.All,
  price: 0,
  description: "Description of your game",
  category: [],
  date: new Date(0, 0, 0),
  rating: 0,
};

export const emptyOrder: IOrder = {
  orders: [],
  price: 0,
  userId: 0,
  isPaid: false,
};

export const paramsHome: IParams = { amount: 3, sortBy: "date" };

export default defaultFilter;
