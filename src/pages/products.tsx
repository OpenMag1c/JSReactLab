import { FC, useEffect, useState } from "react";
import "@/pages/pages.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import SearchBar from "@/components/elements/searchBar/searchBar";
import IProduct from "../../serverData/products";
import { getProducts } from "@/api/api";
import Spinner from "@/components/elements/spinner/spinner";
import BlockOfElements from "@/components/elements/blockOfElements/blockOfElements";
import { categories } from "../../serverData/categories";
import ProductList from "@/components/productList/productList";

type ProductsUrlParams = {
  category?: string;
};

interface ProductsProps {}

const Products: FC<ProductsProps> = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [products, setProducts] = useState<IProduct[]>([]);
  const { category } = useParams<ProductsUrlParams>();
  const [spinner, setSpinner] = useState(false);

  const onSearch = (response: IProduct[]): void => {
    setProducts(response);
    setSpinner(false);
  };

  console.log(category);

  if (state) {
    setProducts(state as IProduct[]);
  } else {
    useEffect(() => {
      if (category && !((category as string) in categories)) {
        navigate("/products");
      } else {
        (async () => {
          if (category) {
            setProducts(await getProducts({ category }));
          } else {
            setProducts(await getProducts());
          }
        })();
      }
    }, [category]);
  }

  console.log(`responseProducts ${state}`);

  return (
    <div className="page products">
      <SearchBar onSearch={onSearch} placeholder="Search" loader={setSpinner} />
      <BlockOfElements title="Products">
        {spinner ? <Spinner /> : <ProductList products={products} /> }
      </BlockOfElements>
    </div>
  );
};

export default Products;
