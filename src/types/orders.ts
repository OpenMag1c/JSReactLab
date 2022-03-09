import IProduct from "@/types/IProduct";

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
}

export const emptyOrder: IOrder = {
  orders: [],
  price: 0,
  userId: 0,
  isPaid: false,
};
