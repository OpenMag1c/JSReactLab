import { FC } from "react";
import IProduct from "../../../serverData/products";
import ProductItem from "@/components/productItem/productItem";

interface ProductListProps {
  products: IProduct[];
}

const ProductList: FC<ProductListProps> = ({ products }) => (
  <>
    {products.length !== 0 ? (
      products.map((product) => <ProductItem product={product} key={product.id} />)
    ) : (
      <div className="no__products">Products not found(</div>
    )}
  </>
);

export default ProductList;
