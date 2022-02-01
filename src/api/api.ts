import ICategory from "../../serverData/categories";
import IProduct from "../../serverData/products";

export const getCategories = async (): Promise<ICategory[]> => {
  const data = await fetch("/api/categories");
  return data.json();
};

export const getProducts = async (): Promise<IProduct[]> => {
  const data = await fetch("/api/products");
  return data.json();
};

export default { getCategories };
