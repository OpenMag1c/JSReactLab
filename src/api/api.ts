import api from "@/environment/api";
import ICategory from "@/types/ICategory";
import IProduct from "@/types/IProduct";
import getUrlParams from "@/api/utils";

interface IParams {
  [key: string]: string | number;
}

export const getCategories = async (): Promise<ICategory[]> => {
  const data = await fetch(`${api.categories}`);
  return data.json();
};

export const getProducts = async (params: IParams = {}): Promise<IProduct[]> => {
  const data = await fetch(`${api.products}${getUrlParams(params)}`);
  return data.json();
};

export default { getCategories };
