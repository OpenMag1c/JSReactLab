import ICategory from "@/types/ICategory";
import categories from "@/constants/categories";

export enum Links {
  home = "/",
  products = "/products",
  about = "/about",
  user = "/user",
  order = "/order",
  signIn = "/",
  signUp = "/",
}

export interface ILink {
  title: string;
  link: Links;
}

export interface ICategoryLink {
  platform: ICategory;
  link: string;
}

const pageLinks: ILink[] = [
  { title: "Home", link: Links.home },
  { title: "Products", link: Links.products },
  { title: "About", link: Links.about },
];

export const categoryLinks: ICategoryLink[] = categories.map((category) => ({
  platform: category,
  link: `/products/${category.title}`,
}));

export default pageLinks;
