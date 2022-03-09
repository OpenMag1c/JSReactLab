import { FC } from "react";
import aboutImage from "images/not_found.png";
import classes from "./noProducts.module.scss";

interface noProductsProps {
  text: string;
}

const NoProducts: FC<noProductsProps> = ({text}) => {
  return (
    <div className={classes.no__product}>
      <img className={classes.no__product__image} src={aboutImage} alt="not found" />
      {text}
    </div>
  );
};

export default NoProducts;
