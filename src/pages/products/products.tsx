import { FC, useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classes from "@/pages/pages.module.scss";
import Search from "@/components/elements/search/search";
import { getProducts } from "@/api/api";
import Spinner from "@/components/elements/spinner/spinner";
import Block from "@/components/elements/block/block";
import ProductList from "@/components/product/list/productList";
import IProduct from "@/types/IProduct";
import { IParams, ProductsUrlParams } from "@/types/types";
import { getParams } from "@/api/utils";
import ProductFilter from "@/components/product/filter/productFilter";
import IFilter from "@/types/IFilter";
import defaultFilter from "@/constants/defaultFilter";

const Products: FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [allProducts, setAllProducts] = useState<IProduct[]>([]);
  const { category } = useParams<ProductsUrlParams>();
  const [spinner, setSpinner] = useState(true);
  const [filter, setFilter] = useState<IFilter>(defaultFilter);
  const [params, setParams] = useState<IParams>(getParams(defaultFilter));

  const onSearch = useCallback(
    (response: IProduct[] | null): void => {
      setProducts(response || allProducts);
      setSpinner(false);
    },
    [allProducts]
  );

  useEffect(() => {
    (async () => {
      let param = getParams(filter);
      if (category) {
        param = { ...param, category };
      }
      const prods = await getProducts(param);
      setProducts(prods);
      setAllProducts(prods);
      setParams(param);
      setSpinner(false);
    })();
  }, [category, filter]);

  return (
    <div className={classes.products}>
      <ProductFilter filter={filter} setFilter={setFilter} />
      <Search onSearch={onSearch} placeholder="Search" loader={setSpinner} params={params} />
      <Block title="Products">{spinner ? <Spinner /> : <ProductList products={products} />}</Block>
    </div>
  );
};

export default Products;
