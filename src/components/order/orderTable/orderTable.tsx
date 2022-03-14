import { FC, useState } from "react";
import classes from "@/pages/order/order.module.scss";
import Money from "@/components/elements/money/money";
import MyButton from "@/components/elements/button/myButton";
import useActions from "@/hooks/useActions";
import Confirmation from "@/components/modal/confirmation/confirmation";

interface OrderTableProps {
  price: number;
  balance: number;
}

const OrderTable: FC<OrderTableProps> = ({ price, balance, children }) => {
  const { setBalance, payOrder, error } = useActions();
  const [confirm, setConfirm] = useState<boolean>(false);

  const confirmText = `Are you sure to pay ${price.toFixed(2)}$?`;

  const buyOrder = () => {
    if (balance < price) {
      error("Not enough money");
    } else {
      setBalance(balance - price);
      payOrder();
    }
  };

  const openConfirm = () => {
    setConfirm(true);
  };

  return (
    <>
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
              <MyButton text="Buy" onClick={openConfirm} />
            </td>
          </tr>
        </tfoot>
      </table>
      {confirm ? <Confirmation makeAction={buyOrder} setConfirm={setConfirm} text={confirmText} /> : null}
    </>
  );
};

export default OrderTable;
