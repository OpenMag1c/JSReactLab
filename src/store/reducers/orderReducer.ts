import { IOrderState, OrderAction, OrderActions } from "@/types/redux/order";
import { emptyOrder } from "@/constants/defaults";

const defaultState: IOrderState = {
  order: { ...emptyOrder },
};

const orderReducer = (state = defaultState, action: OrderAction): IOrderState => {
  switch (action.type) {
    case OrderActions.SET_ORDER:
      return { ...state, order: action.payload };
    case OrderActions.PAY_ORDER: {
      state.order = emptyOrder;
      return { ...state, order: { ...emptyOrder } };
    }
    case OrderActions.ADD_PRODUCT: {
      const newOrder = state.order;
      const orderItem = action.payload;
      newOrder.orders = [...state.order.orders, orderItem];
      newOrder.price += orderItem.price;
      return { ...state, order: newOrder };
    }
    default:
      return state;
  }
};

export default orderReducer;
