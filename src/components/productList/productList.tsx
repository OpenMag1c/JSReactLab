import { FC } from "react";
import Product from "@/components/product/product";
import IProduct from "@/types/IProduct";
import classes from "./productList.module.scss";
import aboutImage from "@/assets/images/not_found.png";

interface ProductListProps {
  products: IProduct[];
}

const ProductList: FC<ProductListProps> = ({ products }) => (
  <>
    {products.length !== 0 ? (
      products.map((product) => <Product product={product} key={product.id} />)
    ) : (
      <div className={classes.no__product}>
        <img className={classes.no__product__image} src={aboutImage} alt="not found" />
        Products not found(
      </div>
    )}
  </>
);

export default ProductList;
