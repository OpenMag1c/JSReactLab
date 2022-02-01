import { FC } from "react";
import IProduct from "../../../serverData/products";
import "./productItem.scss";

interface ProductItemProps {
  product: IProduct;
}

const ProductItem: FC<ProductItemProps> = ({ product }) => (
  <div className="productItem">
    <div className="front">
      <img src={product.img} alt={product.name} />
      <div className="title">
        <p>{product.name}</p>
        <p>{`${String(product.price)} $`}</p>
      </div>
    </div>
    {/* <div className={classes.back}> */}
    {/*   <p>{product.description}</p> */}
    {/* </div> */}
  </div>
);

export default ProductItem;
