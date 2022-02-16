import { FC } from "react";
import classes from "./block.module.scss";

interface BlockProps {
  title: string;
}

const Block: FC<BlockProps> = ({ title, children }) => (
  <>
    <h5 className={classes["block-title"]}>{title}</h5>
    <div className={classes.block}>{children}</div>
  </>
);

export default Block;
