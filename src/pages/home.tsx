import { FC, useCallback, useEffect, useState } from "react";
import "./pages.css";
import { useNavigate } from "react-router-dom";
import SearchBar from "@/components/elements/searchBar/searchBar";
import BlockOfElements from "@/components/elements/blockOfElements/blockOfElements";
import { getCategories, getProducts } from "@/api/api";
import CategoryItem from "@/components/categoryItem/categoryItem";
import ICategory from "../../serverData/categories";
import IProduct from "../../serverData/products";
import ProductItem from "@/components/productItem/productItem";
import Spinner from "@/components/elements/spinner/spinner";

const Home: FC = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [spinner, setSpinner] = useState(false);

  // const navigateToProduct = (games: IProduct[]) => {
  //   navigate(`/products`, { state: games });
  // };

  const navigateToCategory = useCallback((category: ICategory) => {
    navigate(`/products/${category.name}`);
  }, []);

  const onSearch = (response: IProduct[]): void => {
    setProducts(response);
    setSpinner(false);
  };

  useEffect(() => {
    (async () => {
      setCategories(await getCategories());
      setProducts(await getProducts({ amount: 3, sortBy: "rating" }));
    })();
  }, []);

  console.log(products);

  return (
    <div className="page home">
      <SearchBar onSearch={onSearch} placeholder="Search" loader={setSpinner} />
      <BlockOfElements title="Categories">
        {categories.map((category) => (
          <CategoryItem category={category} key={category.id} onClick={navigateToCategory} />
        ))}
      </BlockOfElements>
      <BlockOfElements title="Top products">
        {spinner ? <Spinner /> : products.map((product) => <ProductItem product={product} key={product.id} />)}
      </BlockOfElements>
    </div>
  );
};

export default Home;
