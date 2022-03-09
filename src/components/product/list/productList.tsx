import { FC } from "react";
import Product from "@/components/product/product";
import IProduct from "@/types/IProduct";
import NoProducts from "@/components/elements/noProducts/noProducts";

interface ProductListProps {
  products: IProduct[];
}

const ProductList: FC<ProductListProps> = ({ products }) => (
  <>
    {products.length !== 0 ? (
      products.map((product) => <Product product={product} key={product.id} />)
    ) : (
      <NoProducts text="Products not found(" />
    )}
  </>
);

export default ProductList;
