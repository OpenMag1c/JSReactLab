export interface ILink {
  title: string;
  link: string;
}

const links: ILink[] = [
  { title: "Home", link: "/" },
  { title: "Products", link: "/products" },
  { title: "About", link: "/about" },
  { title: "Sign In", link: "/sign-in" },
  { title: "Sign Up", link: "/sign-up" },
];

export default links;
