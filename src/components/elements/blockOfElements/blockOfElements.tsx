import { FC } from "react";
import classes from "./blockOfElements.module.scss";

interface BlockOfElementsProps {
  title: string;
}

const BlockOfElements: FC<BlockOfElementsProps> = ({ title, children }) => (
  <>
    <h5 className={classes["block-title"]}>{title}</h5>
    <div className={classes.block}>{children}</div>
  </>
);

export default BlockOfElements;
