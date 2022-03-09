import { FC } from "react";
import classes from "./order.module.scss";
import useTypedSelector from "@/hooks/useProtectedSelector";
import OrderItem from "@/components/elements/orderItem/orderItem";
import { IOrderItem } from "@/types/orders";
import useActions from "@/hooks/useActions";
import NoProducts from "@/components/elements/noProducts/noProducts";
import OrderTable from "@/components/orderTable/orderTable";

const Order: FC = () => {
  const { order } = useTypedSelector((state) => state.order);
  const { user } = useTypedSelector((state) => state.auth);
  const { setOrder } = useActions();

  const changeOrder = (orderItem: IOrderItem) => {
    let newOrderItem = order.orders.find((item) => item.product.id === orderItem.product.id);
    if (newOrderItem) {
      newOrderItem = orderItem;
      setOrder(order);
    }
  };

  const isEmpty = () => order.orders.length > 0;

  const deleteOrderItem = (orderItem: IOrderItem) => {
    const index = order.orders.findIndex((item) => item.product.id === orderItem.product.id);
    order.orders.splice(index, 1);
    setOrder(order);
  };

  return (
    <div className={classes.order}>
      {!isEmpty() ? (
        <NoProducts text={"There's nothing here..."} />
      ) : (
        <div className={classes.order__inner}>
          <OrderTable price={order.price} balance={user?.balance || 0}>
            {order.orders.map((orderItem) => (
              <OrderItem
                orderItem={orderItem}
                key={orderItem.product.id}
                changeOrder={changeOrder}
                deleteOrder={deleteOrderItem}
              />
            ))}
          </OrderTable>
        </div>
      )}
    </div>
  );
};

export default Order;
