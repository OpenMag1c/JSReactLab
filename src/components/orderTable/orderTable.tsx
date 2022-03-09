import { FC } from "react";
import classes from "@/pages/order/order.module.scss";
import Money from "@/components/elements/money/money";
import MyButton from "@/components/elements/button/myButton";
import useActions from "@/hooks/useActions";

interface OrderTableProps {
  price: number;
  balance: number;
}

const OrderTable: FC<OrderTableProps> = ({ price, balance, children }) => {
  const { setBalance, payOrder, error } = useActions();

  const buyOrder = () => {
    if (balance < price) {
      error("Not enough money");
    } else {
      setBalance(balance - price);
      payOrder();
    }
  };

  return (
    <table className={classes.order__table}>
      <thead>
        <tr className={classes.row}>
          <th>Name</th>
          <th>Platform</th>
          <th>Order date</th>
          <th>Amount</th>
          <th>Price ($)</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
      <tfoot>
        <tr className={classes.foot}>
          <td className={classes.money} colSpan={2}>
            Games cost: <Money money={price} />
          </td>
          <td className={classes.money} colSpan={2}>
            Your balance: <Money money={balance} />
          </td>
          <td />
          <td>
            <MyButton text="Buy" onClick={buyOrder} />
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default OrderTable;
