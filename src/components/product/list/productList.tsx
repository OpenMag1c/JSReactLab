import { FC } from "react";
import Product from "@/components/product/product";
import IProduct from "@/types/IProduct";
import EmptyBlock from "@/components/elements/empty/emptyBlock";

interface ProductListProps {
  products: IProduct[];
}

const ProductList: FC<ProductListProps> = ({ products }) => (
  <>
    {products.length !== 0 ? (
      products.map((product) => <Product product={product} key={product.id} />)
    ) : (
      <EmptyBlock text="Products not found(" />
    )}
  </>
);

export default ProductList;
