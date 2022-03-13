import { FC } from "react";
import classes from "./money.module.scss";

interface MoneyProps {
  money: number | string;
}

const Money: FC<MoneyProps> = ({ money }) => (
  <div className={classes.money}>
    <div className={classes.money__inner}>{(+money).toFixed(2)}$</div>
  </div>
);

export default Money;
