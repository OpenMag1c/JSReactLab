export interface ILink {
  name: string;
  title: string;
  link: string;
}

export interface ICategoryLink {
  name: string;
  title: string;
  link: string;
}

const pageLinks: ILink[] = [
  { name: "home", title: "Home", link: "/" },
  { name: "products", title: "Products", link: "/products" },
  { name: "about", title: "About", link: "/about" },
  { name: "sign-in", title: "Sign In", link: "/sign-in" },
  { name: "sign-up", title: "Sign Up", link: "/sign-up" },
];

export const categoryLinks: ICategoryLink[] = [
  { name: "xbox", title: "XBOX", link: "/products/xbox" },
  { name: "playstation", title: "PlayStation", link: "/products/playstation" },
  { name: "pc", title: "PC", link: "/products/pc" },
];

export default pageLinks;
