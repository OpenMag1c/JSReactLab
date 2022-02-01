export interface ILink {
  name: string;
  title: string;
  link: string;
}

const links: ILink[] = [
  { name: "home", title: "Home", link: "/" },
  { name: "products", title: "Products", link: "/products" },
  { name: "about", title: "About", link: "/about" },
  { name: "sign-in", title: "Sign In", link: "/sign-in" },
  { name: "sign-up", title: "Sign Up", link: "/sign-up" },
];

export default links;
