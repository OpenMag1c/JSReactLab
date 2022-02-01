import { FC } from "react";
import "@/pages/pages.css";
import SearchBar from "@/components/elements/searchBar/searchBar";

interface ProductsProps {}

const Products: FC<ProductsProps> = () => (
  <div className="page products">
    <SearchBar placeholder="Search" />
  </div>
);

export default Products;
