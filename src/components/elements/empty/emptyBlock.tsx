import { FC } from "react";
import aboutImage from "images/not_found.png";
import classes from "./emptyBlock.module.scss";

interface EmptyBlockProps {
  text: string;
}

const EmptyBlock: FC<EmptyBlockProps> = ({ text }) => (
  <div className={classes.no__product}>
    <img className={classes.no__product__image} src={aboutImage} alt="not found" />
    {text}
  </div>
);

export default EmptyBlock;
