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
import defaultFilter from "@/constants/defaults";
import useTypedSelector from "@/hooks/useProtectedSelector";
import MyButton from "@/components/elements/button/myButton";
import useActions from "@/hooks/useActions";

const Products: FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [allProducts, setAllProducts] = useState<IProduct[]>([]);
  const { category } = useParams<ProductsUrlParams>();
  const [spinner, setSpinner] = useState(true);
  const [filter, setFilter] = useState<IFilter>(defaultFilter);
  const [params, setParams] = useState<IParams>(getParams(defaultFilter));
  const { forceUpdate } = useTypedSelector((state) => state.modal);
  const { isAdmin } = useTypedSelector((state) => state.auth);
  const { openCreateCard } = useActions();

  const onSearch = useCallback(
    (response: IProduct[] | null): void => {
      setProducts(response || allProducts);
      setSpinner(false);
    },
    [allProducts]
  );

  const createCard = () => {
    openCreateCard(true);
  };

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
  }, [category, filter, forceUpdate]);

  const title = category ? `Products ${category}` : "Products";

  return (
    <div className={classes.products}>
      <ProductFilter filter={filter} setFilter={setFilter} />
      <div className={classes.home__search}>
        <Search onSearch={onSearch} placeholder="Search" loader={setSpinner} params={params} />
        {isAdmin ? (
          <div className={classes.home__btn}>
            <MyButton text="Create card" onClick={createCard} />
          </div>
        ) : null}
      </div>
      <Block title={title}>{spinner ? <Spinner /> : <ProductList products={products} />}</Block>
    </div>
  );
};

export default Products;
