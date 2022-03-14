import IProduct from "@/types/IProduct";
import { Category } from "@/types/ICategory";

export interface IOrder {
  orders: IOrderItem[];
  price: number;
  userId: number;
  isPaid: boolean;
}

export interface IOrderItem {
  product: IProduct;
  date: string;
  amount: number;
  price: number;
  category: Category;
}
