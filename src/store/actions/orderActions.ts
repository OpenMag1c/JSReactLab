import { Dispatch } from "redux";
import { IOrder, IOrderItem } from "@/types/orders";
import { OrderAction, OrderActions } from "@/types/reduxOrder";
import { sumOfOrder } from "@/api/order";

export const setOrder = (order: IOrder) => (dispatch: Dispatch<OrderAction>) => {
  const newOrder = order;
  newOrder.price = sumOfOrder(newOrder);
  dispatch({ type: OrderActions.SET_ORDER, payload: newOrder });
};

export const payOrder = () => (dispatch: Dispatch<OrderAction>) => {
  dispatch({ type: OrderActions.PAY_ORDER });
};

export const addOrderItem = (orderItem: IOrderItem) => (dispatch: Dispatch<OrderAction>) => {
  dispatch({ type: OrderActions.ADD_PRODUCT, payload: orderItem });
};
