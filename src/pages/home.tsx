import { FC, useEffect, useState } from "react";
import classes from "./pages.module.scss";
import SearchBar from "@/components/elements/search/search";
import Block from "@/components/elements/block/block";
import { getCategories, getProducts } from "@/api/api";
import Category from "@/components/category/category";
import Spinner from "@/components/elements/spinner/spinner";
import ProductList from "@/components/productList/productList";
import ICategory from "@/types/ICategory";
import IProduct from "@/types/IProduct";

const Home: FC = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [newProducts, setNewProducts] = useState<IProduct[]>([]);
  const [spinner, setSpinner] = useState(true);

  const onSearch = (response: IProduct[]): void => {
    setProducts(response);
    setSpinner(false);
  };

  const getNewGames: Promise<IProduct[]> = getProducts({ amount: 3, sortBy: "date" });

  useEffect(() => {
    (async () => {
      setCategories(await getCategories());
      const games = await getNewGames;
      setProducts(games);
      setNewProducts(games);
      setSpinner(false);
    })();
  }, []);

  return (
    <div className={`${classes.page} ${classes.home}`}>
      <SearchBar onSearch={onSearch} onEmpty={newProducts} placeholder="Search" loader={setSpinner} />
      <Block title="Categories">
        {categories.map((category) => (
          <Category category={category} key={category.id} />
        ))}
      </Block>
      <Block title="New games">{spinner ? <Spinner /> : <ProductList products={products} />}</Block>
    </div>
  );
};

export default Home;
