import { Filters } from "@/constants/filters";
import ProductKeys from "@/constants/options";

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

export enum InputParams {
  login = "login",
  description = "description",
  avatar = "avatar",
  amount = "amount",
}

export type changeOptions = (label: Filters | ProductKeys, data: number | string | number[]) => void;

export interface MenuFilterProps {
  label: Filters | ProductKeys;
  items: { [key: string]: string };
  change: changeOptions;
  init: number;
  title?: string;
  styles?: string;
}

export interface CheckMenuProps {
  label: Filters | ProductKeys;
  items: { [key: string]: string };
  change: changeOptions;
  init: number[];
  title?: string;
  styles?: string;
}

export interface TextFieldProps {
  title: Filters | ProductKeys;
  init?: string | number;
  changeCard: changeOptions;
  type: "number" | "text";
}
