import { FC, useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import classes from "../pages.module.scss";
import Block from "@/components/elements/block/block";
import { getProducts } from "@/api/api";
import Category from "@/components/category/category";
import Spinner from "@/components/elements/spinner/spinner";
import ProductList from "@/components/product/list/productList";
import IProduct from "@/types/IProduct";
import Search from "@/components/elements/search/search";
import useActions from "@/hooks/useActions";
import { paramsHome } from "@/constants/defaults";
import categories from "@/constants/categories";
import MyButton from "@/components/elements/button/myButton";
import useTypedSelector from "@/hooks/useProtectedSelector";

const Home: FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [newProducts, setNewProducts] = useState<IProduct[]>([]);
  const { isAdmin } = useTypedSelector((state) => state.auth);
  const { forceUpdate } = useTypedSelector((state) => state.modal);
  const [spinner, setSpinner] = useState(true);
  const { login } = useParams();
  const { openLogin, openCreateCard } = useActions();
  const navigate = useNavigate();
  const location = useLocation();

  const createCard = () => {
    openCreateCard(true);
  };

  const onSearch = useCallback(
    (response: IProduct[] | null): void => {
      setProducts(response || newProducts);
      setSpinner(false);
    },
    [newProducts]
  );

  useEffect(() => {
    (async () => {
      if (login === "login") {
        openLogin(true);
        navigate("/", { state: location.state as { from: Location } });
      }
      const games = await getProducts(paramsHome);
      setProducts(games);
      setNewProducts(games);
      setSpinner(false);
    })();
  }, [forceUpdate]);

  return (
    <div className={classes.home}>
      <div className={classes.home__search}>
        <Search onSearch={onSearch} placeholder="Search" loader={setSpinner} params={paramsHome} />
        {isAdmin ? (
          <div className={classes.home__btn}>
            <MyButton text="Create card" onClick={createCard} />
          </div>
        ) : null}
      </div>
      <Block title="Categories">
        {categories.map((category) => (
          <Category category={category} key={category.type} />
        ))}
      </Block>
      <Block title="New games">{spinner ? <Spinner /> : <ProductList products={products} />}</Block>
    </div>
  );
};

export default Home;
