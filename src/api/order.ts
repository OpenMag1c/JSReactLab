import IProduct from "@/types/IProduct";
import { IOrder, IOrderItem } from "@/types/IOrder";
import { Category } from "@/types/ICategory";
import { Categories } from "@/constants/categories";

export const formatDate = (date: Date): string => {
  let dd = date.getDate().toString();
  if (dd.length < 2) dd = `0${dd}`;

  let mm = (date.getMonth() + 1).toString();
  if (mm.length < 2) mm = `0${mm}`;

  const yy = date.getFullYear().toString();

  return `${dd}/${mm}/${yy}`;
};

export const addOrderItem = (product: IProduct, order: IOrder): IOrder => {
  const prevOrder = order.orders.find((item) => item.product.id === product.id);
  if (!prevOrder) {
    const newOrderItem: IOrderItem = {
      product,
      date: formatDate(new Date()),
      amount: 1,
      category: product.category[0],
      price: product.price,
    };
    const newOrder = order;
    newOrder.orders = [...newOrder.orders, newOrderItem];
    return newOrder;
  }

  prevOrder.amount += 1;
  prevOrder.price += product.price;
  return order;
};

export const sumOfOrder = (order: IOrder): number => {
  let sum = 0;
  order.orders.forEach((orderItem) => {
    sum += orderItem.price;
  });
  return sum;
};

export const amountOfOrder = (order: IOrder): number => {
  let sum = 0;
  order.orders.forEach((orderItem) => {
    sum += orderItem.amount;
  });
  return sum;
};

export const changeAmount = (amount: number, orderItem: IOrderItem): IOrderItem | null => {
  const newOrderItem = orderItem;
  if (amount > 99 || Number.isNaN(amount)) {
    return null;
  }
  newOrderItem.amount = amount;
  newOrderItem.price = amount * newOrderItem.product.price;
  return newOrderItem;
};

export const getCategories = (categories: Category[]): string => {
  const result: string[] = [];
  categories.forEach((category) => result.push(Categories[category]));
  return result.join(" ");
};

export const toCategoryArray = (categories: Category[]): { [key: string]: string } => {
  const result: { [key: string]: string } = {};
  categories.forEach((category) => {
    result[Categories[category]] = Categories[category];
  });
  return result;
};
