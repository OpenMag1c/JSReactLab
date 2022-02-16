import { FC } from "react";
import Product from "@/components/product/product";
import IProduct from "@/types/IProduct";
import classes from "./productList.module.scss";

interface ProductListProps {
  products: IProduct[];
}

const ProductList: FC<ProductListProps> = ({ products }) => (
  <>
    {products.length !== 0 ? (
      products.map((product) => <Product product={product} key={product.id} />)
    ) : (
      <div className={classes.no__product}>Products not found(</div>
    )}
  </>
);

export default ProductList;
