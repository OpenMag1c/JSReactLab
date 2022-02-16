export default {
  products: "/api/products", // params (?filter=TEXT)
  productsRecent: "/api/products/recent", // params (?amount=NUMBER)
  productsByCategoryName: "/api/products/category", // query param (/category-name)
  categories: "/api/categories",
  categoryByName: "/api/category", // query param (/category-name),
  authSignIn: "/api/auth/sign-in", // POST login, password,
  userData: "/api/user",
  userRegister: "/api/user/create",
  updateUserData: "/api/user/update",
};
