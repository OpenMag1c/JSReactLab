import { FC } from "react";
import classes from "@/pages/order/order.module.scss";
import input from "./orderItem.module.scss";
import MyButton from "@/components/elements/button/myButton";
import { IOrderItem } from "@/types/orders";
import InputText from "@/components/elements/input/inputText/inputText";
import { InputParams } from "@/types/types";
import useActions from "@/hooks/useActions";
import Money from "@/components/elements/money/money";
import { IconTrash } from "@/components/elements/icons/icons";
import { changeAmount } from "@/api/order";

interface OrderItemProps {
  orderItem: IOrderItem;
  changeOrder: (orderItem: IOrderItem) => void;
  deleteOrder: (orderItem: IOrderItem) => void;
}

const OrderItem: FC<OrderItemProps> = ({ orderItem, changeOrder, deleteOrder }) => {
  const game = orderItem.product;
  const { error } = useActions();

  const changeInput = (data: { [p: string]: string }) => {
    const amount = +data[InputParams.amount];
    const newOrderItem = changeAmount(amount, orderItem);
    if (newOrderItem) {
      changeOrder(newOrderItem);
    } else {
      error("Not valid amount!");
    }
  };

  const removeOrder = () => {
    deleteOrder(orderItem);
  };

  return (
    <tr className={classes.row}>
      <td>{game.name}</td>
      <td>{game.category}</td>
      <td>{orderItem.date}</td>
      <td>
        <InputText
          text={orderItem.amount.toString()}
          changeText={changeInput}
          styles={{ input: input.input, icon: input.input__icon }}
          label={InputParams.amount}
        />
      </td>
      <td>
        <Money money={orderItem.price} />
      </td>
      <td>
        <MyButton style={input.buttonRemove} onClick={removeOrder}>
          <IconTrash />
        </MyButton>
      </td>
    </tr>
  );
};

export default OrderItem;
