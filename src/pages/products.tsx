import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classes from "@/pages/pages.module.scss";
import SearchBar from "@/components/elements/search/search";
import { getProducts } from "@/api/api";
import Spinner from "@/components/elements/spinner/spinner";
import Block from "@/components/elements/block/block";
import ProductList from "@/components/productList/productList";
import IProduct from "@/types/IProduct";

type ProductsUrlParams = {
  category?: string;
};

const Products: FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [allProducts, setAllProducts] = useState<IProduct[]>([]);
  const { category } = useParams<ProductsUrlParams>();
  const [spinner, setSpinner] = useState(true);

  const onSearch = (response: IProduct[]): void => {
    setProducts(response);
    setSpinner(false);
  };

  useEffect(() => {
    (async () => {
      const prods = await getProducts();
      setAllProducts(prods);
      if (category) {
        setProducts(await getProducts({ category }));
      } else {
        setProducts(prods);
      }
      setSpinner(false);
    })();
  }, [category]);

  return (
    <div className={`${classes.page} ${classes.products}`}>
      <SearchBar onSearch={onSearch} onEmpty={allProducts} placeholder="Search" loader={setSpinner} />
      <Block title="Products">{spinner ? <Spinner /> : <ProductList products={products} />}</Block>
    </div>
  );
};

export default Products;
