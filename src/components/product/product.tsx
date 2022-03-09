import { FC } from "react";
import classes from "./product.module.scss";
import IProduct from "@/types/IProduct";
import categories from "@/constants/categories";
import MyButton from "@/components/elements/button/myButton";
import useActions from "@/hooks/useActions";
import { addOrderItem } from "@/api/order";
import useTypedSelector from "@/hooks/useProtectedSelector";
import Money from "@/components/elements/money/money";
import ICategory from "@/types/ICategory";
import { IconStar } from "@/components/elements/icons/icons";

interface ProductProps {
  product: IProduct;
}

const Product: FC<ProductProps> = ({ product }) => {
  const gameCategories: ICategory[] = categories.filter((platform) => product.category.includes(platform.type));
  const { setOrder } = useActions();
  const { order } = useTypedSelector((state) => state.order);
  const { isAdmin } = useTypedSelector((state) => state.auth);

  const addToOrder = () => {
    const newOrder = addOrderItem(product, order);
    setOrder(newOrder);
  };
  return (
    <div className={classes.product}>
      <div className={classes.product__inner}>
        <div className={classes.front}>
          <div className={classes.category}>
            <IconStar>{product.rating}/10</IconStar>
            {gameCategories.map((category) => (
              <img className={classes.category__image} src={category.img} alt={category.title} key={category.type} />
            ))}
          </div>
          <img className={classes.product__image} src={product.img} alt={product.name} />
          <div className={classes.title}>
            <p>{product.name}</p>
            <Money money={product.price} />
          </div>
        </div>
        <div className={classes.back}>
          <p>{product.description}</p>
          <div className={classes.buttons}>
            <MyButton style={classes.back__button} onClick={addToOrder} text="Add to cart" />
            {isAdmin ? <MyButton style={classes.back__button} text="Edit" /> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
