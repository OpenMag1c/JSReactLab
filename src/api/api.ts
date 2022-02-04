import ICategory from "../../serverData/categories";
import IProduct from "../../serverData/products";
import api from "@/environment/api";
import transformParams from "@/api/utils";

interface IParams {
  [key: string]: string | number;
}

export const getCategories = async (): Promise<ICategory[]> => {
  const data = await fetch(`${api.categories}`);
  return data.json();
};

export const getProducts = async (params: IParams = {}): Promise<IProduct[]> => {
  const data = await fetch(`${api.products}${transformParams(params)}`);
  return data.json();
};

export default { getCategories };
