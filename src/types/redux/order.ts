import { IOrder, IOrderItem } from "@/types/IOrder";

export interface IOrderState {
  order: IOrder;
}

export enum OrderActions {
  SET_ORDER = "SET_ORDER",
  PAY_ORDER = "PAY_ORDER",
  ADD_PRODUCT = "ADD_PRODUCT",
}

interface IAddOrder {
  type: OrderActions.SET_ORDER;
  payload: IOrder;
}

interface IPayOrder {
  type: OrderActions.PAY_ORDER;
}

interface IAddProduct {
  type: OrderActions.ADD_PRODUCT;
  payload: IOrderItem;
}

export type OrderAction = IAddOrder | IPayOrder | IAddProduct;
