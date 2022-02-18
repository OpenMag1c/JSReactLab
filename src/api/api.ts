import api from "@/environment/api";
import ICategory from "@/types/ICategory";
import IProduct from "@/types/IProduct";
import getUrlParams from "@/api/utils";
import IUser from "@/types/IUser";

interface IParams {
  [key: string]: string | number;
}

export const getCategories = async (): Promise<ICategory[]> => {
  const data = await fetch(api.categories);
  return data.json();
};

export const getProducts = async (params: IParams = {}): Promise<IProduct[]> => {
  const data = await fetch(`${api.products}${getUrlParams(params)}`);
  return data.json();
};

export const authorize = async (user: IUser): Promise<boolean> => {
  const response = await fetch(api.authorise, { method: "POST", body: JSON.stringify(user) });
  return response.json();
};

export const apiRegister = async (user: IUser): Promise<boolean> => {
  const response = await fetch(api.register, { method: "PUT", body: JSON.stringify(user) });
  return response.json();
};

export default { getCategories };
