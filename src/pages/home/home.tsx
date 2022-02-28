import { FC, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import classes from "../pages.module.scss";
import Block from "@/components/elements/block/block";
import { getCategories, getProducts } from "@/api/api";
import Category from "@/components/category/category";
import Spinner from "@/components/elements/spinner/spinner";
import ProductList from "@/components/productList/productList";
import ICategory from "@/types/ICategory";
import IProduct from "@/types/IProduct";
import Search from "@/components/elements/search/search";
import useActions from "@/hooks/useActions";

const Home: FC = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [newProducts, setNewProducts] = useState<IProduct[]>([]);
  const [spinner, setSpinner] = useState(true);
  const { login } = useParams();
  const { openLogin } = useActions();
  const navigate = useNavigate();

  const onSearch = (response: IProduct[] | null): void => {
    setProducts(response || newProducts);
    setSpinner(false);
  };

  const getNewGames: Promise<IProduct[]> = getProducts({ amount: 3, sortBy: "date" });

  useEffect(() => {
    (async () => {
      if (login === "login") {
        openLogin(true);
        navigate("/");
      }
      setCategories(await getCategories());
      const games = await getNewGames;
      setProducts(games);
      setNewProducts(games);
      setSpinner(false);
    })();
  }, []);

  return (
    <div className={classes.home}>
      <Search onSearch={onSearch} placeholder="Search" loader={setSpinner} />
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
