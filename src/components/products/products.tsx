import { FC } from "react";
import "@/components/pages/pages.css";

interface ProductsProps {
  title: string;
}

const Products: FC<ProductsProps> = ({ title }) => <div className="products">{title}</div>;

export default Products;
