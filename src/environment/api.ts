export default {
  products: "/api/products", // params (?filter=TEXT)
  categories: "/api/categories",
  authorise: "/api/auth/signIn/", // POST login, password
  register: "/api/auth/signUp/", // PUT login, password
  getUser: "/api/auth/getUser/", // PUT id
  getProfile: "/api/getProfile", // GET params (?id=number)
  saveProfile: "/api/saveProfile", // POST profile (?id=number)
  changePassword: "/api/changePassword", // POST password (?id=number)
};
