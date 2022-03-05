import { Filters } from "@/constants/filters";

export interface IParams {
  [key: string]: string | number;
}

export type authType = {
  isAuth: boolean;
  name?: string;
};

export type inputTextStyles = {
  input: string;
  icon: string;
};

export type ProductsUrlParams = {
  category?: string;
};

export enum ProfileParams {
  login = "login",
  description = "description",
  avatar = "avatar",
}

export interface MenuFilterProps {
  title: Filters;
  items: { [key: string]: string };
  change: (label: Filters, data: number) => void;
  init: number;
}
