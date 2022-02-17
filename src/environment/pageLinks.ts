export enum Links {
  home = "/",
  products = "/products",
  about = "/about",
  user = "/user",
  signIn = "/",
  signUp = "/",
}

export interface ILink {
  title: string;
  link: Links;
}

export interface ICategoryLink {
  name: string;
  title: string;
  link: string;
}

const pageLinks: ILink[] = [
  { title: "Home", link: Links.home },
  { title: "Products", link: Links.products },
  { title: "About", link: Links.about },
];

export const categoryLinks: ICategoryLink[] = [
  { name: "xbox", title: "XBOX", link: "/products/xbox" },
  { name: "playstation", title: "PlayStation", link: "/products/playstation" },
  { name: "pc", title: "PC", link: "/products/pc" },
];

export default pageLinks;
