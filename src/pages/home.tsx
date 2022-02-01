import { FC, useEffect, useState } from "react";
import "./pages.css";
import SearchBar from "@/components/elements/searchBar/searchBar";
import BlockOfElements from "@/components/elements/blockOfElements/blockOfElements";
import { getCategories, getProducts } from "@/api/api";
import CategoryItem from "@/components/categoryItem/categoryItem";
import ICategory from "../../serverData/categories";
import IProduct from "../../serverData/products";
import ProductItem from "@/components/productItem/productItem";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    (async () => {
      setCategories(await getCategories());
      setProducts(await getProducts());
    })();
  }, []);

  console.log(products);

  return (
    <div className="page home">
      <SearchBar placeholder="Search" />
      <BlockOfElements title="Categories">
        {categories.map((category) => (
          <CategoryItem category={category} key={category.id} />
        ))}
      </BlockOfElements>
      <BlockOfElements title="Products">
        {products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </BlockOfElements>
    </div>
  );
};

export default Home;
