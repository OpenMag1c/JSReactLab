import { Dispatch } from "redux";
import { IOrder, IOrderItem } from "@/types/IOrder";
import { OrderAction, OrderActions } from "@/types/redux/order";
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
