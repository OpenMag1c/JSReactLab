import api from "@/environment/api";
import IProduct from "@/types/IProduct";
import getUrlParams from "@/api/utils";
import IUser from "@/types/IUser";
import IProfile from "@/types/IProfile";
import { IParams } from "@/types/types";

export const getProducts = async (params: IParams = {}): Promise<IProduct[]> => {
  const data = await fetch(`${api.products}${getUrlParams(params)}`);
  return data.json();
};

export const authorize = async (user: IUser): Promise<IUser | null> => {
  const response = await fetch(api.authorise, { method: "POST", body: JSON.stringify(user) });

  return response.status === 200 ? response.json() : null;
};

export const apiRegister = async (user: IUser): Promise<IUser | null> => {
  const response = await fetch(api.register, { method: "PUT", body: JSON.stringify(user) });

  return response.status === 200 ? response.json() : null;
};

export const getUser = async (params: IParams = {}): Promise<IUser | null> => {
  const response = await fetch(`${api.getUser}${getUrlParams(params)}`);

  return response.json();
};

export const getProfile = async (params: IParams = {}): Promise<IProfile> => {
  const response = await fetch(`${api.getProfile}${getUrlParams(params)}`);
  return response.json();
};

export const saveProfile = async (profile: IProfile, params: IParams = {}): Promise<IProfile> => {
  const response = await fetch(`${api.saveProfile}${getUrlParams(params)}`, {
    method: "POST",
    body: JSON.stringify(profile),
  });
  return response.json();
};

export const changePassword = async (password: string, params: IParams = {}): Promise<boolean> => {
  const response = await fetch(`${api.changePassword}${getUrlParams(params)}`, {
    method: "POST",
    body: JSON.stringify({ password }),
  });
  return response.json();
};

export const addProduct = async (product: IProduct): Promise<boolean> => {
  const response = await fetch(api.product, {
    method: "POST",
    body: JSON.stringify(product),
  });
  return response.json();
};

export const updateProduct = async (product: IProduct): Promise<boolean> => {
  const response = await fetch(api.product, {
    method: "PUT",
    body: JSON.stringify(product),
  });
  return response.json();
};

export const deleteProduct = async (id: number | string): Promise<boolean> => {
  const response = await fetch(`${api.product}?id=${id}`, {
    method: "DELETE",
  });
  return response.json();
};
