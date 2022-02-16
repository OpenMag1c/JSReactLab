import { FC } from "react";
import classes from "./product.module.scss";
import IProduct from "@/types/IProduct";
import categories from "../../../serverData/categories";

interface ProductProps {
  product: IProduct;
}

const Product: FC<ProductProps> = ({ product }) => {
  const gameCategory = Object.keys(categories).find((key) => categories[key].id === product.categoryId);
  const category = gameCategory ? categories[gameCategory] : categories.pc;
  return (
    <div className={classes.product}>
      <div className={classes.product__inner}>
        <div className={classes.front}>
          <div className={classes.product__category}>
            {product.rating}/10
            <img className={classes.product__category__image} src={category.img} alt={category.title} />
          </div>
          <img className={classes.product__image} src={product.img} alt={product.name} />
          <div className={classes.title}>
            <p>{product.name}</p>
            <p>{`${String(product.price)} $`}</p>
          </div>
        </div>
        <div className={classes.back}>
          <p>{product.description}</p>
          <button className={classes.back__button} type="submit" onClick={() => alert("Product added")}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
